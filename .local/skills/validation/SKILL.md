---
name: validation
description: Register shell commands as named validation steps (like CI checks) that can be triggered and monitored to verify code quality.
---

# Validation Skill

Set up named validation commands (lint, test, typecheck, etc.) that act as repeatable CI-style checks for the project, then run and monitor them.

## When to Use

- After building new functionality or making significant changes
- When setting up a project's quality gates for the first time
- When the validation command for a check needs to change (e.g., new test framework)
- To run validation commands and check their results
- To monitor the status of ongoing or past validation runs

## When NOT to Use

- For one-off test runs — use the shell directly
- For deploy workflows — use the deployment skill

## Available Functions

### setValidationCommand(name, command)

Create or update a named validation command. If a validation with the same name already exists, it is silently updated (upsert behavior).

**Parameters:**

| Parameter | Type   | Description                                           |
|-----------|--------|-------------------------------------------------------|
| `name`    | string | Short lowercase identifier (e.g., `lint`, `test`)     |
| `command` | string | Shell command to run for this validation               |

**Returns:** `{ success: true, name: string, command: string }`

**Example:**

```javascript
await setValidationCommand({ name: "lint", command: "npm run lint" });
await setValidationCommand({ name: "test", command: "npm test" });
```

### clearValidationCommand(name)

Remove a previously registered validation command.

**Parameters:**

| Parameter | Type   | Description                                      |
|-----------|--------|--------------------------------------------------|
| `name`    | string | Name of the validation command to remove          |

**Returns:** `{ success: true, name: string }`

**Example:**

```javascript
await clearValidationCommand({ name: "lint" });
```

### getValidationCommands()

List all registered validation commands.

**Parameters:** None

**Returns:** `{ workflows: [{ name: string, tasks: [...], ... }] }`

**Example:**

```javascript
const commands = await getValidationCommands();
```

### startValidationRun(commandIds)

Start a validation run that executes one or more registered validation commands.

**Parameters:**

| Parameter    | Type     | Description                                          |
|--------------|----------|------------------------------------------------------|
| `commandIds` | string[] | List of validation command IDs to run                 |

**Returns:**

```json
{
  "runId": "run-abc123",
  "status": "FAILED",
  "commands": [
    {
      "commandId": "lint",
      "shell": "npm run lint",
      "status": "FAILED",
      "exitCode": 1,
      "errorMessage": "Exited with: 1",
      "executionId": "exec-1",
      "durationMs": 3200,
      "logFilePath": "/tmp/validation/lint.log"
    },
    {
      "commandId": "test",
      "shell": "npm test",
      "status": "PASSED",
      "exitCode": 0,
      "errorMessage": "",
      "executionId": "exec-2",
      "durationMs": 5100,
      "logFilePath": "/tmp/validation/test.log"
    }
  ],
  "durationMs": 8300,
  "errorMessage": "",
  "runSummary": "- `npm run lint` FAILED (exit code 1): ESLint reported ..."
}
```

- `status` is one of: `"RUNNING"`, `"PASSED"`, `"FAILED"`, `"STOPPED"`, `"ERROR"`, `"TIMED_OUT"`
- `runSummary` is an LLM-generated breakdown of the results with log line citations. Use it to understand what failed without reading full logs.
- Each command includes `logFilePath` pointing to the full output log.

**Example:**

```javascript
await setValidationCommand({ name: "lint", command: "npm run lint" });
await setValidationCommand({ name: "test", command: "npm test" });
const run = await startValidationRun({ commandIds: ["lint", "test"] });

if (run.status !== "PASSED") {
  // run.runSummary explains what failed and cites log lines
  console.log(run.runSummary);

  // Inspect individual commands
  for (const cmd of run.commands) {
    if (cmd.status !== "PASSED") {
      console.log(`${cmd.shell} failed (exit ${cmd.exitCode}): ${cmd.errorMessage}`);
      console.log(`Full log: ${cmd.logFilePath}`);
    }
  }
}
```

### stopValidationRun(runId, graceful?)

Stop a running validation run.

**Parameters:**

| Parameter  | Type    | Description                                       |
|------------|---------|---------------------------------------------------|
| `runId`    | string  | ID of the validation run to stop                   |
| `graceful` | boolean | Whether to stop gracefully (default: `true`)       |

**Returns:** `{ success: true, runId: string }`

**Example:**

```javascript
await stopValidationRun({ runId: "run-abc123" });
await stopValidationRun({ runId: "run-abc123", graceful: false });
```

### getValidationRun(runId)

Get the status and details of a specific validation run, including per-command results.

**Parameters:**

| Parameter | Type   | Description                                      |
|-----------|--------|--------------------------------------------------|
| `runId`   | string | ID of the validation run to retrieve              |

**Returns:** `{ validationRun: { id, status, startedAt, durationMs, commands: [...] } }`

**Example:**

```javascript
const run = await getValidationRun({ runId: "run-abc123" });
// run.validationRun.status is one of: "RUNNING", "PASSED", "FAILED", "STOPPED", "ERROR"
```

### getValidationRuns()

Get all validation runs.

**Parameters:** None

**Returns:** `{ validationRuns: [{ id, status, startedAt, durationMs, commands: [...] }] }`

**Example:**

```javascript
const runs = await getValidationRuns();
```

## Conventional Names and Commands

Use short, lowercase names. Here are common conventions by stack:

| Name        | Node.js              | Python                    | Go                  |
|-------------|----------------------|---------------------------|---------------------|
| `lint`      | `npm run lint`       | `ruff check .`            | `golangci-lint run` |
| `test`      | `npm test`           | `pytest`                  | `go test ./...`     |
| `typecheck` | `npx tsc --noEmit`   | `mypy .`                  | `go vet ./...`      |
| `format`    | `npx prettier --check .` | `ruff format --check .` | `gofmt -l .`       |

## Example Workflow

After implementing a feature in a Node.js project:

```javascript
// Set up validation commands for the project
await setValidationCommand({ name: "lint", command: "npm run lint" });
await setValidationCommand({ name: "test", command: "npm test" });
await setValidationCommand({ name: "typecheck", command: "npx tsc --noEmit" });

// Run all validations (blocks until complete)
const run = await startValidationRun({ commandIds: ["lint", "test", "typecheck"] });

if (run.status !== "PASSED") {
  // runSummary explains failures with log line citations
  console.log(run.runSummary);

  for (const cmd of run.commands) {
    if (cmd.status !== "PASSED") {
      console.log(`${cmd.shell} failed (exit ${cmd.exitCode}): ${cmd.errorMessage}`);
      console.log(`Full log: ${cmd.logFilePath}`);
    }
  }
}

// Or fetch it again later by ID
const result = await getValidationRun({ runId: run.runId });
```
