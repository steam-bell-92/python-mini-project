import { Mastra } from "@mastra/core";
import { MastraError } from "@mastra/core/error";
import { PinoLogger } from "@mastra/loggers";
import { LogLevel, MastraLogger } from "@mastra/core/logger";
import pino from "pino";
import { NonRetriableError } from "inngest";
import { z } from "zod";

import { sharedPostgresStorage } from "./storage";
import { inngest, inngestServe } from "./inngest";

// ======================================================================
// Option 1: FOR TIME-BASED (CRON) TRIGGERS
// ======================================================================
// Call registerCronTrigger() BEFORE the Mastra initialization below.
//
// Example:
//   import { registerCronTrigger } from "../triggers/cronTriggers";
//   import { myWorkflow } from "./workflows/myWorkflow";
//
//   registerCronTrigger({
//     cronExpression: "0 8 * * *", // Daily at 8 AM
//     workflow: myWorkflow
//   });
//
// See src/triggers/cronTriggers.ts for details
// ======================================================================
// Option 2: FOR WEBHOOK-BASED TRIGGERS
// ======================================================================
// Spread trigger registration functions into this apiRoutes array.
//
// Pattern:
//   import { registerYourTrigger } from "../triggers/yourTriggers";
//   import { myWorkflow } from "./workflows/myWorkflow";
//   import { inngest } from "./inngest";
//
//   ...registerYourTrigger({
//     triggerType: "your/event.type",
//     handler: async (mastra, triggerInfo, runId) => {
//       // Extract what you need from the payload
//       ...
//
//       // Create a run of the workflow unless one was provided
//       if (!runId) {
//         runId = (await myWorkflow.createRun()).runId;
//       }
//       // Start the workflow
//       return await inngest.send({
//         name: `workflow.${myWorkflow.id}`,
//         data: {
//           runId,
//           inputData: {
//             // Your input data here
//           },
//         },
//       });
//     }
//   })
//
// Available: src/triggers/slackTriggers.ts, telegramTriggers.ts, exampleConnectorTrigger.ts
// ======================================================================

// ======================================================================
// IMPORT YOUR AGENTS AND WORKFLOWS
// ======================================================================
// Import your custom agents and workflows here.
// See src/examples/ directory for complete examples:
// - src/examples/agent.ts
// - src/examples/workflow.ts
// - src/examples/exampleTool.ts
//
// Example imports:
// import { myAgent } from "./agents/myAgent";
// import { myWorkflow } from "./workflows/myWorkflow";
// ======================================================================

class ProductionPinoLogger extends MastraLogger {
  protected logger: pino.Logger;

  constructor(
    options: {
      name?: string;
      level?: LogLevel;
    } = {},
  ) {
    super(options);

    this.logger = pino({
      name: options.name || "app",
      level: options.level || LogLevel.INFO,
      base: {},
      formatters: {
        level: (label: string, _number: number) => ({
          level: label,
        }),
      },
      timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
    });
  }

  debug(message: string, args: Record<string, any> = {}): void {
    this.logger.debug(args, message);
  }

  info(message: string, args: Record<string, any> = {}): void {
    this.logger.info(args, message);
  }

  warn(message: string, args: Record<string, any> = {}): void {
    this.logger.warn(args, message);
  }

  error(message: string, args: Record<string, any> = {}): void {
    this.logger.error(args, message);
  }
}

const serverPort = Number(process.env.PORT ?? "5000");

export const mastra = new Mastra({
  storage: sharedPostgresStorage,
  // Register your workflows here
  workflows: {},
  // Register your agents here
  agents: {},
  bundler: {
    // A few dependencies are not properly picked up by
    // the bundler if they are not added directly to the
    // entrypoint.
    externals: [
      "@slack/web-api",
      "inngest",
      "inngest/hono",
      "hono",
      "hono/streaming",
    ],
    // sourcemaps are good for debugging.
    sourcemap: true,
  },
  server: {
    host: "0.0.0.0",
    port: serverPort,
    middleware: [
      async (c, next) => {
        const mastra = c.get("mastra");
        const logger = mastra?.getLogger();
        logger?.debug("[Request]", { method: c.req.method, url: c.req.url });
        try {
          await next();
        } catch (error) {
          logger?.error("[Response]", {
            method: c.req.method,
            url: c.req.url,
            error,
          });
          if (error instanceof MastraError) {
            if (error.id === "AGENT_MEMORY_MISSING_RESOURCE_ID") {
              // This is typically a non-retirable error. It means that the request was not
              // setup correctly to pass in the necessary parameters.
              throw new NonRetriableError(error.message, { cause: error });
            }
          } else if (error instanceof z.ZodError) {
            // Validation errors are never retriable.
            throw new NonRetriableError(error.message, { cause: error });
          }

          throw error;
        }
      },
    ],
    apiRoutes: [
      // ======================================================================
      // Inngest Integration Endpoint
      // ======================================================================
      // Integrates Mastra workflows with Inngest for event-driven execution via inngest functions.
      {
        path: "/api/inngest",
        method: "ALL",
        createHandler: async ({ mastra }) => inngestServe({ mastra, inngest }),
      },

      // Add webhook triggers here (see Option 2 above)
      // Example: ...registerSlackTrigger({ ... })
    ],
  },
  logger:
    process.env.NODE_ENV === "production"
      ? new ProductionPinoLogger({
          name: "Mastra",
          level: "info",
        })
      : new PinoLogger({
          name: "Mastra",
          level: "info",
        }),
});

/*  Sanity check 1: Throw an error if there are more than 1 workflows.  */
// !!!!!! Do not remove this check. !!!!!!
if (Object.keys(mastra.listWorkflows()).length > 1) {
  throw new Error(
    "More than 1 workflows found. Currently, more than 1 workflows are not supported in the UI, since doing so will cause app state to be inconsistent.",
  );
}

/*  Sanity check 2: Throw an error if there are more than 1 agents.  */
// !!!!!! Do not remove this check. !!!!!!
if (Object.keys(mastra.listAgents()).length > 1) {
  throw new Error(
    "More than 1 agents found. Currently, more than 1 agents are not supported in the UI, since doing so will cause app state to be inconsistent.",
  );
}
