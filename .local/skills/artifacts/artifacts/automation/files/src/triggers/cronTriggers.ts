/**
 * Cron Trigger - Time-based Workflow Scheduling
 *
 * This module provides time-based triggering for Mastra workflows using cron expressions.
 * Unlike webhook-based triggers, cron triggers run on a schedule without external events.
 *
 * PATTERN:
 * 1. Define the cron schedule with a standard cron expression
 * 2. Pass the workflow to be executed
 * 3. Call registerCronTrigger BEFORE mastra initialization (not in apiRoutes array)
 *
 * IMPORTANT: Unlike webhook triggers, cron triggers are registered by calling
 * registerCronTrigger() directly in src/mastra/index.ts, NOT by spreading into apiRoutes.
 * This is because cron triggers don't create HTTP endpoints.
 *
 * CRON EXPRESSION FORMAT:
 * Standard 5-field cron format: minute hour day-of-month month day-of-week
 *
 * Example cron expressions:
 * Daily at 8 AM, every 2 hours, every 5 minutes, weekly on Sunday
 */

import { registerCronWorkflow } from "../mastra/inngest";

/**
 * Register a cron-based trigger
 *
 * Usage in src/mastra/index.ts (call BEFORE mastra initialization):
 *
 * ```typescript
 * import { physicsJokeWorkflow } from "./workflows/physicsJokeWorkflow";
 * import { registerCronTrigger } from "../triggers/cronTriggers";
 *
 * // Register cron trigger (call this before creating the mastra instance)
 * registerCronTrigger({
 *   cronExpression: "0 8 * * *", // Daily at 8 AM
 *   workflow: physicsJokeWorkflow
 * });
 *
 * export const mastra = new Mastra({
 *   // ... rest of mastra config
 * });
 * ```
 *
 * Note: Returns empty array for consistency with trigger file conventions,
 * but this should NOT be spread into apiRoutes array.
 */
export function registerCronTrigger({
  cronExpression,
  workflow,
}: {
  cronExpression: string;
  workflow: any;
}) {
  // Delegate to the helper in inngest/index.ts which manages inngestFunctions
  registerCronWorkflow(cronExpression, workflow);

  // Returns empty array for consistency with trigger file conventions
  // Note: Do NOT spread this into apiRoutes - cron triggers don't create HTTP routes
  return [];
}
