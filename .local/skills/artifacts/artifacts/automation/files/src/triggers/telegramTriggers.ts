/**
 * Telegram Trigger - Webhook-based Workflow Triggering
 *
 * This module provides Telegram bot event handling for Mastra workflows.
 * When Telegram messages are received, this trigger starts your workflow.
 *
 * PATTERN:
 * 1. Import registerTelegramTrigger and your workflow
 * 2. Call registerTelegramTrigger with a triggerType and handler
 * 3. Spread the result into the apiRoutes array in src/mastra/index.ts
 *
 * USAGE in src/mastra/index.ts:
 *
 * ```typescript
 * import { registerTelegramTrigger } from "../triggers/telegramTriggers";
 * import { telegramBotWorkflow } from "./workflows/telegramBotWorkflow";
 * import { inngest } from "./inngest";
 *
 * // In the apiRoutes array:
 * ...registerTelegramTrigger({
 *   triggerType: "telegram/message",
 *   handler: async (mastra, triggerInfo) => {
 *     const run = await telegramBotWorkflow.createRun();
 *     return await inngest.send({
 *       name: `workflow.${telegramBotWorkflow.id}`,
 *       data: {
 *         runId: run?.runId,
 *         inputData: {},
 *       },
 *     });
 *   }
 * })
 * ```
 */

import type { ContentfulStatusCode } from "hono/utils/http-status";

import { registerApiRoute } from "../mastra/inngest";
import { Mastra } from "@mastra/core";

if (!process.env.TELEGRAM_BOT_TOKEN) {
  console.warn(
    "Trying to initialize Telegram triggers without TELEGRAM_BOT_TOKEN. Can you confirm that the Telegram integration is configured correctly?",
  );
}

export type TriggerInfoTelegramOnNewMessage = {
  type: "telegram/message";
  params: {
    userName: string;
    message: string;
  };
  payload: any;
};

export function registerTelegramTrigger({
  triggerType,
  handler,
}: {
  triggerType: string;
  handler: (
    mastra: Mastra,
    triggerInfo: TriggerInfoTelegramOnNewMessage,
  ) => Promise<void>;
}) {
  return [
    registerApiRoute("/webhooks/telegram/action", {
      method: "POST",
      handler: async (c) => {
        const mastra = c.get("mastra");
        const logger = mastra.getLogger();
        try {
          const payload = await c.req.json();

          logger?.info("📝 [Telegram] payload", payload);

          await handler(mastra, {
            type: triggerType,
            params: {
              userName: payload.message.from.username,
              message: payload.message.text,
            },
            payload,
          } as TriggerInfoTelegramOnNewMessage);

          return c.text("OK", 200);
        } catch (error) {
          logger?.error("Error handling Telegram webhook:", error);
          return c.text("Internal Server Error", 500);
        }
      },
    }),
  ];
}
