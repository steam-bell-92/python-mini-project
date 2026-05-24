// Use Inngest-compatible versions for this project
// These are initialized with init(inngest) to work with the Inngest workflow engine
import { createStep, createWorkflow } from "../inngest";
import { z } from "zod";
import { automationAgent } from "../agents/agent";

/**
 * Mastra Workflow with Mocked Steps
 *
 * MASTRA WORKFLOW GUIDE:
 * - Workflows orchestrate multiple steps in sequence
 * - Each step has typed inputs/outputs for reliability
 * - Steps can use agents, tools, or custom logic (conditionals, loops, etc)
 */

/**
 * CALLING TOOLS IN WORKFLOW STEPS:
 * When calling tool.execute() in a step, you must narrow the return type before accessing properties.
 * tool.execute() returns `ValidationError | OutputType`, so check for errors first:
 *
 *     const result = await myTool.execute(input, { mastra });
 *     if ('error' in result && result.error) throw new Error(result.message);
 *     return { data: result.someProperty }; // Now typed correctly
 *
 * Note: Don't use `error` as a field name in tool output schemas (reserved for ValidationError).
 * Note: Step chaining with .then() requires `as any` casts due to Inngest type inference (see below).
 */

/**
 * Step 1: Process with Agent
 * This step demonstrates how to use an agent within a workflow
 */
const processWithAgent = createStep({
  id: "process-with-agent",
  description:
    "Processes the input message using an AI agent with optional analysis", // Must contain a clear, concise description of what the step does.

  // Define what this step expects as input
  inputSchema: z.object({
    message: z.string().describe("Message to process"),
    includeAnalysis: z
      .boolean()
      .optional()
      .describe("Whether to include detailed analysis"),
  }),

  // Defines what this step will output. Must match the inputSchema of the next step.
  outputSchema: z.object({
    agentResponse: z.string(),
    processedData: z
      .object({
        original: z.string(),
        processed: z.string(),
        timestamp: z.string(),
      })
      .optional(),
  }),

  // Step logic - mastra is available for logging and utilities
  execute: async ({ inputData, mastra }) => {
    const logger = mastra?.getLogger();
    logger?.info("🚀 [Step 1] Processing with agent...");

    // Construct a prompt for the agent
    const prompt = `
      Please process the following message using the example tool:
      "${inputData.message}"

      ${inputData.includeAnalysis ? "Also provide a brief analysis of the results." : ""}
    `;

    // Call the agent using generate or stream
    const response = await automationAgent.generate(
      [{ role: "user", content: prompt }],
      // We can add other properties, for instance the thread id keeps track of the message history.  Check Mastra docs for more information.
    );

    logger?.info("✅ [Step 1] Agent processing complete");

    // In a real workflow, you might:
    // - Parse structured data from the response
    // - Extract specific information
    // - Handle errors gracefully

    return {
      agentResponse: response.text,
      processedData: {
        original: inputData.message,
        processed: inputData.message.toUpperCase(), // Simple mock processing
        timestamp: new Date().toISOString(),
      },
    };
  },
});

/**
 * Step 2: Output Results
 * This step demonstrates how to handle and output results
 */
const outputResults = createStep({
  id: "output-results",
  description:
    "Formats the agent's response and puts it in the form of a summary.", // Must contain a clear, concise description of what the step does.

  // This step receives the output from the previous step
  inputSchema: z.object({
    agentResponse: z.string(),
    processedData: z
      .object({
        original: z.string(),
        processed: z.string(),
        timestamp: z.string(),
      })
      .optional(),
  }),

  // Final output schema - this is what the workflow returns
  outputSchema: z.object({
    summary: z.string(),
    formattedOutput: z.string(),
    success: z.boolean(),
  }),

  execute: async ({ inputData, mastra }) => {
    const logger = mastra?.getLogger();
    logger?.info("📤 [Step 2] Outputting results...");

    /**
     * In a real workflow, this step might:
     * - Send data to an API
     * - Write to a database
     * - Send an email
     * - Update a UI
     * - Trigger webhooks
     * - Store in a file system
     */

    // For this example, we'll format and log the output
    const formattedOutput = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 WORKFLOW RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 Agent Response:
${inputData.agentResponse}

📝 Processed Data:
${
  inputData.processedData
    ? `
  • Original: ${inputData.processedData.original}
  • Processed: ${inputData.processedData.processed}
  • Timestamp: ${inputData.processedData.timestamp}
`
    : "No processed data available"
}
`;

    // Log the output using Mastra logger
    logger?.info(formattedOutput);
    logger?.info("✅ [Step 2] Results formatted and logged");

    return {
      summary: `Successfully processed message with ${inputData.processedData?.original.length || 0} characters`,
      formattedOutput,
      success: true,
    };
  },
});

/**
 * MASTRA STEPS:
 * Remember:  There are many ways of structing a workflow, including boolean operations (conditionals, etc), looping, etc.
 * Please read the Mastra docs as instructed for more information if you need to setup a complex workflow. Mastra comes with many powerful primitives to help you build workflows.
 * We critically chain our steps in order to accomplish the user's desired automation.
 */

/**
 * Create the workflow by chaining steps
 */
export const automationWorkflow = createWorkflow({
  id: "automation-workflow",

  // Define the initial input schema for the entire workflow
  inputSchema: z.object({
    message: z.string().describe("Message to process through the workflow"),
    includeAnalysis: z
      .boolean()
      .optional()
      .describe("Whether to include detailed analysis"),
  }) as any, // TS workaround: Inngest type system incompatibility with Zod schemas

  // Define the final output schema (should match the last step's output)
  outputSchema: z.object({
    summary: z.string(),
    formattedOutput: z.string(),
    success: z.boolean(),
  }),
})
  // Chain your steps in order
  .then(processWithAgent as any) // TS workaround: type inference issues with Inngest step chaining
  .then(outputResults as any)
  .commit();
