/**
 * Test Script for Webhook-Triggered Workflows
 *
 * This script demonstrates the CORRECT way to test webhook-triggered workflows
 * that use Inngest for orchestration. It simulates the complete production flow.
 *
 * WHAT THIS TESTS:
 * - Inngest event routing (event/api.webhooks.{provider}.action)
 *   Note: Slack/Telegram use event/api.webhooks.webhooks.action due to /webhooks/{provider}/action path
 * - The forwarding function created by registerApiRoute
 * - HTTP forwarding to your webhook handler (e.g., /linear/webhook)
 * - Webhook payload validation in your handler
 * - Workflow triggering via workflow.start()
 * - Complete Inngest step-by-step orchestration
 *
 * PREREQUISITES:
 * 1. Start your Mastra server with restart_workflow tool
 * 2. Start Inngest dev server with restart_workflow tool
 *
 * HOW TO RUN:
 * npx tsx tests/testWebhookAutomation.ts
 *
 * VERIFICATION:
 * - Check console output for success messages
 * - Visit the local Inngest dashboard to see execution
 */

import { inngest } from "../src/mastra/inngest/client";

const AUTOMATION_PORT = process.env.PORT ?? "5000";
const INNGEST_PORT = process.env.INNGEST_PORT ?? "3000";

// ============================================================================
// CONFIGURATION - Update these based on your webhook automation
// ============================================================================

// Change this to match your connector name
const PROVIDER: string = "linear"; // e.g., "linear", "github", etc

// Mock webhook payload - This **must** match your connector's webhook schema.
// Keep data obviously fake (use "MOCK:" prefixes, fake IDs like "mock-123")
const mockWebhookPayload = {
  action: "create", // Linear webhook action (create/update/remove)
  type: "Issue", // Linear webhook type (Issue/Comment/Project)
  data: {
    id: "mock-issue-999",
    title: "MOCK: Test Issue for Validation",
    description: "MOCK: This is test data to validate the webhook flow",
    number: 999,
    priority: 1,
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2025-01-01T00:00:00Z",
  },
  createdAt: "2025-01-01T00:00:00Z",
  organizationId: "mock-org-123",
};

// ============================================================================
// TEST FUNCTION
// ============================================================================

async function testWebhookTrigger() {
  console.log(`\n${"=".repeat(70)}`);
  console.log(`🚀 WEBHOOK AUTOMATION TEST`);
  console.log(`${"=".repeat(70)}`);
  console.log(`Provider: ${PROVIDER}\n`);

  try {
    /**
     * Send an Inngest event that simulates what Replit Webhook Service sends in production.
     *
     * In production, the flow is:
     * 1. External webhook → Replit Webhook Service
     * 2. Replit transforms it → Inngest Cloud (sends event/api.webhooks.{provider}.action)
     * 3. Inngest Cloud → triggers the forwarding function (id: "api-{provider}")
     * 4. Forwarding function → POSTs to your webhook handler (/{provider}/webhook)
     * 5. Webhook handler → validates payload and starts workflow
     * 6. Workflow → orchestrated by Inngest step-by-step
     *
     * This test simulates step 2, exercising the complete flow from there.
     */

    const eventName = `event/api.webhooks.${PROVIDER}.action`;

    await inngest.send({
      // Event name must match what registerApiRoute creates an Inngest function to listen for
      name: eventName,

      // Data structure matches what Replit Webhook Service sends to Inngest
      data: {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(mockWebhookPayload),
      },
    });

    console.log(`✅ Event sent successfully for ${PROVIDER}!`);
    console.log(`\n📊 Check execution at: http://localhost:${INNGEST_PORT}`);
    console.log(
      `   - Functions tab: Look for "api-${PROVIDER}" (the forwarding function)`,
    );
    console.log(`   - Runs tab: See the complete execution trace\n`);
  } catch (error) {
    console.error("❌ Error sending Inngest event:", error);
    console.error("\nTroubleshooting:");
    console.error("  1. Is your Mastra server running? (npm start)");
    console.error(
      `  2. Is Inngest dev server running? (inngest dev -u http://localhost:${AUTOMATION_PORT}/api/inngest --port ${INNGEST_PORT})`,
    );
    console.error(
      "  3. Is the webhook handler registered in src/mastra/index.ts?\n",
    );
    process.exit(1);
  }
}

// Run the test
testWebhookTrigger();
