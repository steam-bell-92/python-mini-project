import { inngest } from "./client";
import { init, serve as originalInngestServe } from "@mastra/inngest";
import { registerApiRoute as originalRegisterApiRoute } from "@mastra/core/server";
import { type Mastra } from "@mastra/core";
import { type Inngest, InngestFunction, NonRetriableError } from "inngest";

// Initialize Inngest with Mastra to get Inngest-compatible workflow helpers
const {
  createWorkflow: originalCreateWorkflow,
  createStep,
  cloneStep,
} = init(inngest);

export function createWorkflow(
  params: Parameters<typeof originalCreateWorkflow>[0],
): ReturnType<typeof originalCreateWorkflow> {
  return originalCreateWorkflow({
    ...params,
    retryConfig: {
      attempts: process.env.NODE_ENV === "production" ? 3 : 0,
      ...(params.retryConfig ?? {}),
    },
  });
}

// Export the Inngest client and Inngest-compatible workflow helpers
export { inngest, createStep, cloneStep };

const inngestFunctions: InngestFunction.Any[] = [];
const localMastraBaseUrl = `http://localhost:${process.env.PORT ?? "5000"}`;
const basePath =
  process.env.BASE_PATH && process.env.BASE_PATH !== "/"
    ? process.env.BASE_PATH
    : "";

// Create a middleware for Inngest to be able to route triggers to Mastra directly.
export function registerApiRoute<P extends string>(
  ...args: Parameters<typeof originalRegisterApiRoute<P>>
): ReturnType<typeof originalRegisterApiRoute<P>> {
  const [path, options] = args;
  if (typeof options !== "object") {
    // This will throw an error.
    return originalRegisterApiRoute(...args);
  }

  const pathWithoutSlash = path.replace(/^\/+/, "");
  const pathWithoutApi = pathWithoutSlash.startsWith("api/")
    ? pathWithoutSlash.substring(4)
    : pathWithoutSlash;

  // Determine function ID and event name based on path type:
  // - Slack/Telegram use /webhooks/{provider}/action paths: use full path-based event name
  // - Connectors use /{connector}/webhook paths: use standardized event pattern
  let functionId: string;
  let eventName: string;

  if (pathWithoutApi.startsWith("webhooks/")) {
    // Slack/Telegram: use full path-based event name for backwards compatibility
    // e.g., /webhooks/slack/action → event/api.webhooks.slack.action
    functionId = `api-${pathWithoutApi.replaceAll(/\/+/g, "-")}`;
    eventName = `event/api.${pathWithoutApi.replaceAll(/\/+/g, ".")}`;
  } else {
    // Connector path: use the standardized event pattern
    // e.g., /linear/webhook → event/api.webhooks.linear.action
    const connectorName = pathWithoutApi.split("/")[0];
    functionId = `api-${connectorName}`;
    eventName = `event/api.webhooks.${connectorName}.action`;
  }

  inngestFunctions.push(
    inngest.createFunction(
      {
        id: functionId,
        name: path,
      },
      {
        event: eventName,
      },
      async ({ event, step }) => {
        await step.run("forward request to Mastra", async () => {
          // It is hard to obtain an internal handle on the Hono server,
          // so we just forward the request to the local Mastra server.
          // Extract runId from event.data if provided and pass it as a header
          const headers = { ...(event.data.headers ?? {}) };
          if (event.data.runId) {
            headers["x-mastra-run-id"] = event.data.runId;
          }
          const response = await fetch(`${localMastraBaseUrl}${path}`, {
            method: event.data.method,
            headers,
            body: event.data.body,
          });

          if (!response.ok) {
            if (
              (response.status >= 500 && response.status < 600) ||
              response.status == 429 ||
              response.status == 408
            ) {
              // 5XX, 429 (Rate-Limit Exceeded), 408 (Request Timeout) are retriable.
              throw new Error(
                `Failed to forward request to Mastra: ${response.statusText}`,
              );
            } else {
              // All other errors are non-retriable.
              throw new NonRetriableError(
                `Failed to forward request to Mastra: ${response.statusText}`,
              );
            }
          }
        });
      },
    ),
  );

  return originalRegisterApiRoute(...args);
}

// ======================================================================
// TRIGGER FUNCTIONS - CHOOSE ONE BASED ON YOUR AUTOMATION TYPE
// ======================================================================
// An automation only has a single trigger type. Based on your trigger:
//
// FOR TIME-BASED AUTOMATIONS (cron/schedule):
//   - Keep the registerCronWorkflow function below
//   - Delete the registerApiRoute function above (entire function)
//   - Used for: Daily reports, scheduled tasks, periodic checks
//
// FOR WEBHOOK-BASED AUTOMATIONS (Slack, Telegram, connectors):
//   - Keep the registerApiRoute function above
//   - Delete the registerCronWorkflow function below (entire function)
//   - Used for: Slack bots, Telegram bots, GitHub webhooks, Linear webhooks, etc.
// ======================================================================

// Helper function for registering cron-based workflow triggers
export function registerCronWorkflow(cronExpression: string, workflow: any) {
  console.log("🕐 [registerCronWorkflow] Registering cron trigger", {
    cronExpression,
    workflowId: workflow?.id,
  });

  const cronFunction = inngest.createFunction(
    { id: "cron-trigger" },
    [{ event: "replit/cron.trigger" }, { cron: cronExpression }],
    async ({ event, step }) => {
      return await step.run("execute-cron-workflow", async () => {
        console.log("🚀 [Cron Trigger] Starting scheduled workflow execution", {
          workflowId: workflow?.id,
          scheduledTime: new Date().toISOString(),
          cronExpression,
        });

        try {
          const run = await workflow.createRun();
          console.log("📝 [Cron Trigger] Workflow run created", {
            runId: run?.runId,
          });

          const result = await inngest.send({
            name: `workflow.${workflow.id}`,
            data: {
              runId: run?.runId,
              inputData: {},
            },
          });
          console.log("✅ [Cron Trigger] Invoked Inngest function", {
            workflowId: workflow?.id,
            runId: run?.runId,
          });

          return result;
        } catch (error) {
          console.error("❌ [Cron Trigger] Workflow execution failed", {
            workflowId: workflow?.id,
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
          });
          throw error;
        }
      });
    },
  );

  inngestFunctions.push(cronFunction);
  console.log(
    "✅ [registerCronWorkflow] Cron trigger registered successfully",
    {
      cronExpression,
    },
  );
}

export function inngestServe({
  mastra,
  inngest,
}: {
  mastra: Mastra;
  inngest: Inngest;
}): ReturnType<typeof originalInngestServe> {
  let serveHost: string | undefined = undefined;
  if (process.env.NODE_ENV === "production") {
    if (process.env.REPLIT_DOMAINS) {
      serveHost = `https://${process.env.REPLIT_DOMAINS.split(",")[0]}${basePath}`;
    }
  } else {
    serveHost = localMastraBaseUrl;
  }
  return originalInngestServe({
    mastra,
    inngest,
    functions: inngestFunctions,
    registerOptions: { serveHost },
  });
}
