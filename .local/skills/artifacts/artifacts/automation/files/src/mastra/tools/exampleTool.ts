import { createTool } from "@mastra/core/tools";
import { z } from "zod";

/**
 * Example Mastra Tool
 *
 * MASTRA TOOL GUIDE:
 * - Tools are reusable functions that can be used by agents and workflows
 * - Use createTool() to define a tool with typed inputs/outputs
 * - Tools should be focused on a single task
 * - Always include clear descriptions for the tool and its parameters
 */

// Define the input and output schemas using Zod
// This provides type safety and validation
export const exampleTool = createTool({
  id: "example-tool",

  // Describe what your tool does - this helps agents understand when to use it
  description:
    "A simple example tool that demonstrates how to create Mastra tools",

  // Define what inputs your tool expects
  // Use .describe() to add helpful descriptions for each field
  inputSchema: z.object({
    message: z.string().describe("A message to process"),
    count: z.number().optional().describe("Optional number parameter"),
  }),

  // Define what your tool will return
  outputSchema: z.object({
    processed: z.string(),
    timestamp: z.string(),
    metadata: z.object({
      characterCount: z.number(),
      wordCount: z.number(),
    }),
  }),

  // The execute function contains your tool's logic
  // Access mastra for logging and other utilities
  execute: async (inputData, context) => {
    const mastra = context?.mastra;
    const logger = mastra?.getLogger();

    // Use logger instead of console.log for proper observability
    logger?.info("🔧 [exampleTool] Executing with:", context);

    // In a real tool, you might:
    // 1. Call external APIs
    // 2. Process data
    // 3. Interact with databases
    // 4. Transform information

    // For this example, we'll do some trivial data processing
    const processedMessage = inputData.message.toUpperCase();
    const words = inputData.message.split(" ").filter((w) => w.length > 0);

    logger?.info("✅ [exampleTool] Processing complete");

    // Return data matching the output schema
    return {
      processed: processedMessage,
      timestamp: new Date().toISOString(),
      metadata: {
        characterCount: inputData.message.length,
        wordCount: words.length,
      },
    };
  },
});
