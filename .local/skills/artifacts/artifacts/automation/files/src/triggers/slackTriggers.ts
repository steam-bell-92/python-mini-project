/**
 * Slack Trigger - Webhook-based Workflow Triggering
 *
 * This module provides Slack event handling for Mastra workflows.
 * When Slack events occur (like new messages), this trigger starts your workflow.
 *
 * PATTERN:
 * 1. Import registerSlackTrigger and your workflow
 * 2. Call registerSlackTrigger with a triggerType and handler
 * 3. Spread the result into the apiRoutes array in src/mastra/index.ts
 *
 * USAGE in src/mastra/index.ts:
 *
 * ```typescript
 * import { registerSlackTrigger } from "../triggers/slackTriggers";
 * import { slackBotWorkflow } from "./workflows/slackBotWorkflow";
 * import { inngest } from "./inngest";
 *
 * // In the apiRoutes array:
 * ...registerSlackTrigger({
 *   triggerType: "slack/message.channels",
 *   handler: async (mastra, triggerInfo) => {
 *     const threadId = `slack-${triggerInfo.params.channel}`;
 *     const run = await slackBotWorkflow.createRun();
 *     return await inngest.send({
 *       name: `workflow.${slackBotWorkflow.id}`,
 *       data: {
 *         runId: run?.runId,
 *         inputData: { threadId },
 *       },
 *     });
 *   }
 * })
 * ```
 */

import { format, promisify } from "node:util";
import { execFile } from "node:child_process";
import { Mastra } from "@mastra/core";
import { type WorkflowResult, type Step } from "@mastra/core/workflows";
import { IMastraLogger } from "@mastra/core/logger";
import {
  type AuthTestResponse,
  type ChatPostMessageResponse,
  type ConversationsOpenResponse,
  type ConversationsRepliesResponse,
  type UsersConversationsResponse,
  type WebAPICallError,
  ErrorCode,
  WebClient,
} from "@slack/web-api";
import type { Context, Handler, MiddlewareHandler } from "hono";
import { streamSSE } from "hono/streaming";
import type { z } from "zod";

import { registerApiRoute } from "../mastra/inngest";

export type Methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "ALL";

// TODO: Remove when Mastra exports this type.
export type ApiRoute =
  | {
      path: string;
      method: Methods;
      handler: Handler;
      middleware?: MiddlewareHandler | MiddlewareHandler[];
    }
  | {
      path: string;
      method: Methods;
      createHandler: ({ mastra }: { mastra: Mastra }) => Promise<Handler>;
      middleware?: MiddlewareHandler | MiddlewareHandler[];
    };

export type TriggerInfoSlackOnNewMessage = {
  type: "slack/message.channels";
  params: {
    channel: string;
    channelDisplayName: string;
  };
  payload: any;
};

type DiagnosisStep =
  | {
      status: "pending";
      name: string;
      extra?: Record<string, any>;
    }
  | {
      status: "success";
      name: string;
      extra: Record<string, any>;
    }
  | {
      status: "failed";
      name: string;
      error: string;
      extra: Record<string, any>;
    };

export async function getClient() {
  let connectionSettings: any;
  async function getAccessToken() {
    if (
      connectionSettings &&
      connectionSettings.settings.expires_at &&
      new Date(connectionSettings.settings.expires_at).getTime() > Date.now()
    ) {
      return {
        token: connectionSettings.settings.access_token,
        user: connectionSettings.settings.oauth?.credentials?.raw?.authed_user
          ?.id,
      };
    }

    const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
    const { stdout } = await promisify(execFile)(
      "replit",
      ["identity", "create", "--audience", `https://${hostname}`],
      { encoding: "utf8" },
    );

    const replitToken = stdout.trim();
    if (!replitToken) {
      throw new Error("Replit Identity Token not found for repl/depl");
    }

    const res = await fetch(
      "https://" +
        hostname +
        "/api/v2/connection?include_secrets=true&connector_names=slack-agent",
      {
        headers: {
          Accept: "application/json",
          "Replit-Authentication": `Bearer ${replitToken}`,
        },
      },
    );
    const resJson = await res.json();
    connectionSettings = resJson?.items?.[0];
    if (!connectionSettings || !connectionSettings.settings.access_token) {
      throw new Error(
        `Slack not connected: HTTP ${res.status} ${res.statusText}: ${JSON.stringify(resJson)}`,
      );
    }
    return {
      token: connectionSettings.settings.access_token,
      user: connectionSettings.settings.oauth?.credentials?.raw?.authed_user
        ?.id,
    };
  }

  const { token, user } = await getAccessToken();
  const slack = new WebClient(token);

  const response = await slack.auth.test();

  return { slack, auth: response, user };
}

// Keep up to 200 recent events, to prevent duplicates
const recentEvents: string[] = [];

function isWebAPICallError(err: unknown): err is WebAPICallError {
  return (
    err !== null && typeof err === "object" && "code" in err && "data" in err
  );
}

function checkDuplicateEvent(eventName: string) {
  if (recentEvents.includes(eventName)) {
    return true;
  }
  recentEvents.push(eventName);
  if (recentEvents.length > 200) {
    recentEvents.shift();
  }
  return false;
}

function createReactToMessage<
  TState extends z.ZodObject<any>,
  TInput extends z.ZodType<any>,
  TOutput extends z.ZodType<any>,
  TSteps extends Step<string, any, any>[],
>({ slack, logger }: { slack: WebClient; logger: IMastraLogger }) {
  const addReaction = async (
    channel: string,
    timestamp: string,
    emoji: string,
  ) => {
    logger.info(`[Slack] Adding reaction to message`, {
      emoji,
      timestamp,
      channel,
    });
    try {
      await slack.reactions.add({ channel, timestamp, name: emoji });
    } catch (error) {
      logger.error(`[Slack] Error adding reaction to message`, {
        emoji,
        timestamp,
        channel,
        error: format(error),
      });
    }
  };

  const removeAllReactions = async (channel: string, timestamp: string) => {
    logger.info(`[Slack] Removing all reactions from message`, {
      timestamp,
      channel,
    });
    const emojis = [
      "hourglass",
      "hourglass_flowing_sand",
      "white_check_mark",
      "x",
      "alarm_clock",
    ];

    for (const emoji of emojis) {
      try {
        await slack.reactions.remove({ channel, timestamp, name: emoji });
      } catch (error) {
        if (
          isWebAPICallError(error) &&
          (error.code !== ErrorCode.PlatformError ||
            error.data?.error !== "no_reaction")
        ) {
          logger.error("[Slack] Error removing reaction", {
            emoji,
            timestamp,
            channel,
            error: format(error),
          });
        }
      }
    }
  };

  return async function reactToMessage(
    channel: string,
    timestamp: string,
    result: WorkflowResult<TState, TInput, TOutput, TSteps> | null,
  ) {
    // Remove all of our reactions.
    await removeAllReactions(channel, timestamp);
    if (result?.status === "success") {
      await addReaction(channel, timestamp, "white_check_mark");
    } else if (result?.status === "failed") {
      await addReaction(channel, timestamp, "x");
    } else if (result !== null) {
      await addReaction(channel, timestamp, "alarm_clock");
    }
  };
}

export function registerSlackTrigger<
  Env extends { Variables: { mastra: Mastra } },
  TState extends z.ZodObject<any>,
  TInput extends z.ZodType<any>,
  TOutput extends z.ZodType<any>,
  TSteps extends Step<string, any, any>[],
>({
  triggerType,
  handler,
}: {
  triggerType: string;
  handler: (
    mastra: Mastra,
    triggerInfo: TriggerInfoSlackOnNewMessage,
  ) => Promise<WorkflowResult<TState, TInput, TOutput, TSteps> | null>;
}): Array<ApiRoute> {
  return [
    registerApiRoute("/webhooks/slack/action", {
      method: "POST",
      handler: async (c) => {
        const mastra = c.get("mastra");
        const logger = mastra.getLogger();
        try {
          const payload = await c.req.json();
          const { slack, auth } = await getClient();
          const reactToMessage = createReactToMessage({ slack, logger });

          // Handle challenge
          if (payload && payload["challenge"]) {
            return c.text(payload["challenge"], 200);
          }

          logger?.info("📝 [Slack] payload", { payload });

          // Augment event with channel info
          if (payload && payload.event && payload.event.channel) {
            try {
              const result = await slack.conversations.info({
                channel: payload.event.channel,
              });
              logger?.info("📝 [Slack] result", { result });
              payload.channel = result.channel;
            } catch (error) {
              logger?.error("Error fetching channel info", {
                error: format(error),
              });
              // Continue processing even if channel info fetch fails
            }
          }

          // Check subtype
          if (
            payload.event?.subtype === "message_changed" ||
            payload.event?.subtype === "message_deleted"
          ) {
            return c.text("OK", 200);
          }

          if (
            (payload.event?.channel_type === "im" &&
              payload.event?.text === "test:ping") ||
            payload.event?.text === `<@${auth.user_id}> test:ping`
          ) {
            // This is a test message to the bot saying just "test:ping", or a mention that contains "test:ping".
            // We'll reply in the same thread.
            await slack.chat.postMessage({
              channel: payload.event.channel,
              text: "pong",
              thread_ts: payload.event.ts,
            });
            logger?.info("📝 [Slack] pong");
            return c.text("OK", 200);
          }

          if (payload.event?.bot_id) {
            return c.text("OK", 200);
          }

          if (checkDuplicateEvent(payload.event_id)) {
            return c.text("OK", 200);
          }

          const result = await handler(mastra, {
            type: triggerType,
            params: {
              channel: payload.event.channel,
              channelDisplayName: payload.channel.name,
            },
            payload,
          } as TriggerInfoSlackOnNewMessage);

          await reactToMessage(payload.event.channel, payload.event.ts, result);

          return c.text("OK", 200);
        } catch (error) {
          logger?.error("Error handling Slack webhook", {
            error: format(error),
          });
          return c.text("Internal Server Error", 500);
        }
      },
    }),
    {
      path: "/test/slack",
      method: "GET",
      handler: async (c: Context<Env>) => {
        return streamSSE(c, async (stream) => {
          let id = 1;
          const mastra = c.get("mastra");
          const logger = mastra.getLogger() ?? {
            info: console.log,
            error: console.error,
          };

          let diagnosisStepAuth: DiagnosisStep = {
            status: "pending",
            name: "authentication with Slack",
          };
          let diagnosisStepConversation: DiagnosisStep = {
            status: "pending",
            name: "open a conversation with user",
          };
          let diagnosisStepPostMessage: DiagnosisStep = {
            status: "pending",
            name: "send a message to the user",
          };
          let diagnosisStepReadReplies: DiagnosisStep = {
            status: "pending",
            name: "read replies from bot",
          };
          const updateDiagnosisSteps = async (event: string) =>
            stream.writeSSE({
              data: JSON.stringify([
                diagnosisStepAuth,
                diagnosisStepConversation,
                diagnosisStepPostMessage,
                diagnosisStepReadReplies,
              ]),
              event,
              id: String(id++),
            });

          let slack: WebClient;
          let auth: AuthTestResponse;
          let user: string | undefined;
          try {
            ({ slack, auth, user } = await getClient());
          } catch (error) {
            logger?.error("❌ [Slack] test:auth failed", {
              error: format(error),
            });
            diagnosisStepAuth = {
              ...diagnosisStepAuth,
              status: "failed",
              error: "authentication failed",
              extra: { error: format(error) },
            };
            await updateDiagnosisSteps("error");
            return;
          }

          if (!auth?.user_id) {
            logger?.error("❌ [Slack] test:auth not working", {
              auth,
            });
            diagnosisStepAuth = {
              ...diagnosisStepAuth,
              status: "failed",
              error: "authentication failed",
              extra: { auth },
            };
            await updateDiagnosisSteps("error");
            return;
          }

          diagnosisStepAuth = {
            ...diagnosisStepAuth,
            status: "success",
            extra: { auth },
          };
          await updateDiagnosisSteps("progress");

          logger?.info("📝 [Slack] test:auth found", { auth });

          let channel: ConversationsOpenResponse["channel"];
          if (user) {
            // Open a DM with itself.
            let conversationsResponse: ConversationsOpenResponse;
            try {
              conversationsResponse = await slack.conversations.open({
                users: user,
              });
            } catch (error) {
              logger?.error("❌ [Slack] test:conversation not found", {
                error: format(error),
              });
              diagnosisStepConversation = {
                ...diagnosisStepConversation,
                status: "failed",
                error: "opening a conversation failed",
                extra: { error: format(error) },
              };
              await updateDiagnosisSteps("error");
              return;
            }

            if (!conversationsResponse?.channel?.id) {
              logger?.error("❌ [Slack] test:conversation not found", {
                conversationsResponse,
              });
              diagnosisStepConversation = {
                ...diagnosisStepConversation,
                status: "failed",
                error: "conversation channel not found",
                extra: { conversationsResponse },
              };
              await updateDiagnosisSteps("error");
              return;
            }

            channel = conversationsResponse.channel;
          } else {
            // Find the first channel where the bot is installed.
            let conversationsResponse: UsersConversationsResponse;
            try {
              conversationsResponse = await slack.users.conversations({
                user: auth.user_id,
              });
            } catch (error) {
              logger?.error("❌ [Slack] test:conversation not found", {
                error: format(error),
              });
              diagnosisStepConversation = {
                ...diagnosisStepConversation,
                status: "failed",
                error: "opening a conversation failed",
                extra: { error: format(error) },
              };
              await updateDiagnosisSteps("error");
              return;
            }

            if (!conversationsResponse?.channels?.length) {
              logger?.error("❌ [Slack] test:channel not found", {
                conversationsResponse,
              });
              diagnosisStepConversation = {
                ...diagnosisStepConversation,
                status: "failed",
                error: "channel not found",
                extra: { conversationsResponse },
              };
              await updateDiagnosisSteps("error");
              return;
            }
            channel = conversationsResponse.channels![0]!;
          }

          if (!channel.id) {
            logger?.error("❌ [Slack] test:channel not found", {
              channel,
            });
            diagnosisStepConversation = {
              ...diagnosisStepConversation,
              status: "failed",
              error: "channel not found",
              extra: { channel },
            };
            await updateDiagnosisSteps("error");
            return;
          }

          diagnosisStepConversation = {
            ...diagnosisStepConversation,
            status: "success",
            extra: { channel },
          };
          await updateDiagnosisSteps("progress");

          logger?.info("📝 [Slack] test:channel found", { channel });

          // Post a message in the DMs.
          let message: ChatPostMessageResponse;
          try {
            message = await slack.chat.postMessage({
              channel: channel.id,
              text: `<@${auth.user_id}> test:ping`,
            });
          } catch (error) {
            logger?.error("❌ [Slack] test:message not posted", {
              error: format(error),
            });
            diagnosisStepPostMessage = {
              ...diagnosisStepPostMessage,
              status: "failed",
              error: "posting message failed",
              extra: { error: format(error) },
            };
            await updateDiagnosisSteps("error");
            return;
          }

          if (!message?.ts) {
            logger?.error("❌ [Slack] test:message not posted", { message });
            diagnosisStepPostMessage = {
              ...diagnosisStepPostMessage,
              status: "failed",
              error: "posting message missing timestamp",
              extra: { message },
            };
            await updateDiagnosisSteps("error");
            return;
          }

          logger?.info("📝 [Slack] test:ping sent", { message });

          diagnosisStepPostMessage = {
            ...diagnosisStepPostMessage,
            status: "success",
            extra: { message },
          };
          await updateDiagnosisSteps("progress");

          const sleep = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));

          // Wait for the bot to reply.
          let lastReplies: ConversationsRepliesResponse | undefined = undefined;
          for (let i = 0; i < 30; i++) {
            await sleep(1000);
            let replies: ConversationsRepliesResponse;
            try {
              replies = await slack.conversations.replies({
                ts: message.ts,
                channel: channel.id,
              });
            } catch (error) {
              logger?.error("❌ [Slack] test:replies not found", { message });
              diagnosisStepReadReplies = {
                ...diagnosisStepReadReplies,
                status: "failed",
                error: "replies not found",
                extra: { error: format(error) },
              };
              await updateDiagnosisSteps("error");
              return;
            }
            logger?.info("📝 [Slack] test:replies", { replies });
            diagnosisStepReadReplies.extra = { replies };
            lastReplies = replies;
            if (replies?.messages?.some((m) => m.text === "pong")) {
              // Victory!
              logger?.info("📝 [Slack] test:pong successful");
              diagnosisStepReadReplies = {
                ...diagnosisStepReadReplies,
                status: "success",
                extra: { replies },
              };
              await updateDiagnosisSteps("result");
              return;
            }

            await updateDiagnosisSteps("progress");
          }

          logger?.error("❌ [Slack] test:timeout");

          diagnosisStepReadReplies = {
            ...diagnosisStepReadReplies,
            status: "failed",
            error: "replies timed out",
            extra: { lastReplies },
          };
          await updateDiagnosisSteps("error");
        });
      },
    },
  ];
}
