/**
 * Example Connector Trigger - Linear Webhook Handler
 *
 * This demonstrates how to create a webhook handler for any connector.
 * Linear is just an example - replace with your connector name.
 *
 * PATTERN:
 * 1. Define types for the webhook payload (optional, but helpful)
 * 2. Create a registration function that sets up the webhook route
 * 3. Pass the full payload to the handler - let the consumer pick what they need
 * 4. Register in src/mastra/index.ts
 *
 * See docs/triggers/webhook_connector_triggers.md for complete guide.
 */

import { registerApiRoute } from "../mastra/inngest";
import type { Mastra } from "@mastra/core";

/**
 * Linear webhook payload structure
 * Based on: https://developers.linear.app/docs/graphql/webhooks
 */
export type LinearWebhookPayload = {
  action: string; // e.g., "create", "update", "remove"
  type: string; // e.g., "Issue", "Comment", "Project"
  data: {
    id: string;
    title: string;
    description?: string;
    [key: string]: any;
  };
  createdAt: string;
  organizationId: string;
  [key: string]: any;
};

/**
 * Trigger info passed to your handler
 */
export type TriggerInfoLinearIssueCreated = {
  type: "linear/issue.created";
  payload: LinearWebhookPayload;
};

type LinearTriggerHandler = (
  mastra: Mastra,
  triggerInfo: TriggerInfoLinearIssueCreated,
  runId?: string,
) => Promise<any>;

/**
 * Register a Linear webhook trigger handler
 *
 * Usage in src/mastra/index.ts:
 *
 * ```typescript
 * import { automationWorkflow } from "./workflows/workflow";
 * import { inngest } from "./inngest";
 *
 * ...registerLinearTrigger({
 *   triggerType: "linear/issue.created",
 *   handler: async (mastra, triggerInfo, runId) => {
 *     // Extract what you need from the payload
 *     const data = triggerInfo.payload?.data || {};
 *     const title = data.title || data.name || "Untitled";
 *
 *     // Create a run of the workflow unless one was provided
 *     if (!runId) {
 *       runId = (await automationWorkflow.createRun()).runId;
 *     }
 *
 *     // Start the workflow
 *     return await inngest.send({
 *       name: `workflow.${automationWorkflow.id}`,
 *       data: {
 *         runId,
 *         inputData: {
 *           message: `Linear Issue: ${title}`,
 *           includeAnalysis: true,
 *         },
 *       },
 *     });
 *   }
 * })
 * ```
 */
export function registerLinearTrigger({
  triggerType,
  handler,
}: {
  triggerType: "linear/issue.created";
  handler: LinearTriggerHandler;
}) {
  return [
    registerApiRoute("/linear/webhook", {
      method: "POST",
      handler: async (c) => {
        const mastra = c.get("mastra");
        const logger = mastra?.getLogger();

        try {
          const payload = await c.req.json();
          console.log("📥 [Linear] Webhook received", { payload });

          // Only process Issue creation events
          if (payload.action !== "create" || payload.type !== "Issue") {
            console.log("⏭️ [Linear] Skipping event", {
              action: payload.action,
              type: payload.type,
            });
            return c.json({ success: true, skipped: true });
          }

          // Ensure data exists (use empty object as fallback)
          if (!payload.data) {
            console.log("⚠️ [Linear] Missing data field, using empty object");
            payload.data = {};
          }

          // Pass the full payload - let the consumer pick what they need
          const triggerInfo: TriggerInfoLinearIssueCreated = {
            type: triggerType,
            payload: payload as LinearWebhookPayload,
          };

          // Extract potential runId from request headers
          const runId = c.req.header("x-mastra-run-id");

          console.log("🚀 [Linear] Triggering handler");

          const result = await handler(mastra, triggerInfo, runId);

          console.log("✅ [Linear] Handler completed", { result });

          return c.json({ success: true, result });
        } catch (error) {
          logger?.error("❌ [Linear] Error processing webhook", {
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
          });

          return c.json(
            {
              success: false,
              error: error instanceof Error ? error.message : String(error),
            },
            500,
          );
        }
      },
    }),
  ];
}
