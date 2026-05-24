import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { sharedPostgresStorage } from "../storage";
import { exampleTool } from "../tools/exampleTool";
import { createOpenAI } from "@ai-sdk/openai";

/**
 * LLM CLIENT CONFIGURATION
 *
 * IMPORTANT: Both approaches require the SAME syntax for Replit Playground compatibility:
 * - Use AI SDK v5: model, e.g. openai("gpt-4o-mini")
 * - In workflows: Use agent.generate()
 * - The Replit Playground UI always calls the legacy Mastra endpoint
 * NOTE: You must always keep the API key as an environment variable for safety!
 * ---
 * OPTION 1: Replit AI Integrations, **only** if user has enabled it via connector.
 *
 * No OpenAI API key required - charges billed to Replit credits
 * Automatic key rotation and management
 */
const openai = createOpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
});
/*
 * OPTION 2: Standard OpenAI Setup (Your Own API Key)
 */
// const openai = createOpenAI({
//   baseURL: process.env.OPENAI_BASE_URL || undefined,
//   apiKey: process.env.OPENAI_API_KEY,
// });

/**
 * Mastra Agent
 *
 * MASTRA AGENT GUIDE:
 * - Agents are AI-powered assistants that can use tools and maintain conversation memory
 * - They combine an LLM model with tools and optional memory storage
 * - Agents can be used in workflows
 */

export const automationAgent = new Agent({
  // Give your agent a descriptive name
  name: "Automation Agent",
  // make the id be camelCase version of the name
  id: "automationAgent",

  /**
   * Instructions define your agent's behavior and personality
   * Be specific about:
   * - What the agent should do
   * - How it should respond
   * - What tools it should use and when
   * - Any constraints or guidelines
   */
  instructions: `
    You are a helpful example agent that demonstrates how to use Mastra agents.

    Your primary function is to process messages using the example tool and explain what you're doing.

    When responding:
    - Always be helpful and educational
    - Explain what tools you're using and why
    - If asked to process a message, use the exampleTool
    - Share the results in a clear, formatted way
    - Add educational comments about how Mastra works when relevant

    Remember: You're teaching developers how to use Mastra by example!
`,

  /**
   * Choose your LLM model
   *
   * MUST use AI SDK v5 syntax for Replit Playground compatibility.
   * Use openai.responses("gpt-5") for gpt-5 class models, use openai("gpt-4o") for gpt-4 class models.
   */
  model: openai.responses("gpt-5"),

  /**
   * Provide tools that the agent can use
   * Tools must be created with createTool()
   * You can provide multiple tools.
   */
  tools: {
    exampleTool,
    // If users want web search capabilities, use code line below to enable that
    // webSearch: openai.tools.webSearch(),
  },
});
