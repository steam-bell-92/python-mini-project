---
name: workflows
description: Manage application workflows including configuration, restart, and removal.
---

## Overview

A workflow binds a shell command (e.g., `npm run dev`, `python run.py`, `cargo run`) to a long-running task managed by Replit. Workflows are used to run webservers, background services, TUIs, and other persistent processes.

**Key characteristics:**

- Workflows run until explicitly stopped
- The system tracks workflows automatically — no separate configuration file is required
- Workflows auto-restart after package installation and module installation
- You can only get console logs from a workflow if it is running

## Setup Tips

1. **Keep workflows minimal**: One workflow per project is usually sufficient. Use the main frontend server or TUI as your primary workflow.

2. **Choose the right workflow**: If your project has a frontend or TUI, set the workflow to the process that updates what the user sees.

3. **Clean up unused workflows**: When adding new workflows, remove any existing workflows that are no longer needed.

4. **Always restart after changes**: Restart workflows after making server-side code changes to ensure updates are visible to the user. Verify they run without errors before returning to the user.

5. **Use bash for one-off commands**: Workflows are for persistent processes. Use bash for build scripts, testing, or commands that don't need to keep running.

## When to Use

Use this skill when:

- You need to create or configure a workflow (background process)
- You need to restart the application after making code changes
- The application needs to be restarted to pick up new environment variables
- You need to remove a workflow that's no longer needed
- The user asks to start, stop, or restart the application
- You need to check what workflows are configured
- You need to check workflow status, output, or open ports

## When NOT to Use

- For debugging runtime errors (fix the code first, then restart)
- When the application is already running and changes are hot-reloaded
- One-off commands (use bash for commands that don't need to persist)
- Build scripts (use bash for npm build, webpack, etc.)
- Testing commands (use bash or runTest callback)
- More than 10 workflows (keep workflows minimal; combine services if needed)

## Available Functions

### listWorkflows()

List all configured workflows with their current state.

**Parameters:** None

**Returns:** List of workflow info dicts with `name` (str), `command` (str), and `state` ("not_started", "running", "finished", "failed").

**Example:**

```javascript
const workflows = await listWorkflows();
for (const w of workflows) {
    console.log(`${w.name}: ${w.state}`);
}
```

### getWorkflowStatus(name, maxScrollbackLines)

Get detailed status of a specific workflow including output logs and open ports.

**Parameters:**

- `name` (str, required): Name of the workflow to check
- `maxScrollbackLines` (int, default 100): Number of output lines to include

**Returns:** Dict with `name`, `command`, `state`, `output` (recent terminal output), `openPorts` (list of listening ports), and `waitForPort`.

**Example:**

```javascript
// Check if the server is running and see its output
const status = await getWorkflowStatus({ name: "Start application" });
console.log(`State: ${status.state}`);
if (status.output) {
    console.log(`Output:\n${status.output}`);
}
if (status.openPorts) {
    console.log(`Listening on ports: ${status.openPorts}`);
}
```

### configureWorkflow({ name, command, waitForPort, outputType, autoStart, isCanvasWorkflow })

Configure or create a workflow. This is the primary way to set up background processes.

**Parameters:**

- `name` (str, default "Start application"): Unique workflow identifier
- `command` (str, required): Shell command to execute
- `waitForPort` (int, optional): Port the process listens on
- `outputType` (str, default "webview"): "webview", "console", or "vnc"
- `autoStart` (bool, default True): Auto-start after configuration
- `isCanvasWorkflow` (bool, default false): Whether this workflow serves canvas iframe content

**Output Type Rules:**

- **webview** - For web applications. MUST use port 5000.
- **console** - For backend services, CLIs, TUIs. Can use any supported port.
- **vnc** - For desktop/GUI apps (Electron, PyQt, etc.). No port needed.

**Supported Ports:** 3000, 3001, 3002, 3003, 4200, 5000 (webview only), 5173, 6000, 6800, 8000, 8008, 8080, 8099, 9000

**Examples:**

```javascript
// Web application (React, Next.js, etc.)
await configureWorkflow({
    name: "Start application",
    command: "npm run dev",
    waitForPort: 5000,
    outputType: "webview"
});

// Backend API
await configureWorkflow({
    name: "Backend API",
    command: "python api.py",
    waitForPort: 8000,
    outputType: "console"
});

// Desktop application
await configureWorkflow({
    name: "Desktop App",
    command: "python gui_app.py",
    outputType: "vnc"
});
```


### removeWorkflow(name)

Remove a workflow by name. Automatically stops it if running.

**Parameters:**

- `name` (str, required): Name of the workflow to remove

**Returns:** Dict with `success`, `message`, `workflowName`, and `wasRunning`

**Example:**

```javascript
await removeWorkflow({ name: "Backend API" });
```

### restartWorkflow(workflowName, timeout)

Restart a workflow by name.

**Parameters:**

- `workflowName` (str, required): Name of the workflow (e.g., "Start application")
- `timeout` (int, default 30): Timeout in seconds to wait for restart

**Returns:** Dict with restart status and optional screenshot URL

**Example:**

```javascript
// Restart the main application
const result = await restartWorkflow({ workflowName: "Start application" });
console.log(result.message);

// Restart with custom timeout
const result2 = await restartWorkflow({
    workflowName: "Start application",
    timeout: 60
});
```

## Best Practices

1. **Restart after code changes**: Always restart workflows after modifying server-side code
2. **Use appropriate timeouts**: Increase timeout for applications with slow startup
3. **Check logs on failure**: If restart fails, check workflow logs for error details
4. **One restart at a time**: Avoid parallel restarts of the same workflow

5. **Port 5000 for web apps**: Always use port 5000 with webview output type


## Common Workflow Names

- `Start application` - Main application workflow
- `Start Backend` - Backend server (in Expo/mobile apps)
- `Project` - Parent workflow for multi-service apps

## Error Handling

The workflow functions may raise errors in these cases:

- **Workflow not found**: The specified workflow name doesn't exist
- **Port not opened**: The application didn't start listening on expected port
- **Preview not available**: The application endpoint isn't responding with HTTP 200
- **Workflow limit exceeded**: Maximum of 10 workflows reached

- **Port/output type mismatch**: Port 5000 requires webview, webview requires port 5000


When errors occur, check:

1. Workflow logs for error details
2. Application code for startup issues
3. Port configuration in the workflow settings

## Example Workflow

```javascript
// Create a web application workflow
await configureWorkflow({
    name: "Start application",
    command: "npm run dev",

    waitForPort: 5000,

    outputType: "webview"
});

// After making code changes, restart the application
const result = await restartWorkflow({ workflowName: "Start application" });

if (result.success) {
    console.log("Application restarted successfully");
    if (result.screenshotUrl) {
        console.log(`Screenshot: ${result.screenshotUrl}`);
    }
} else {
    console.log(`Restart failed: ${result.message}`);
}

// Clean up unused workflows
await removeWorkflow({ name: "Old Backend" });
```
