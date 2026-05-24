---
name: delegation
description: Delegate tasks to specialized subagents. Use subagent for synchronous task execution, startAsyncSubagent for background task execution, messageSubagent for async follow-ups, or messageSubagentAndGetResponse for sync follow-ups.
---

# Delegation Skill

Delegate tasks to specialized subagents for autonomous execution.

## When to Use

Use this skill when:

- You need to delegate tasks to run autonomously (especially when you have a session plan)
- You have multiple independent tasks that can run in parallel

## When NOT to Use

- Simple tasks that you can complete directly
- Tasks that require immediate user interaction
- Read-only operations (use ripgrep or glob/read tools instead)
- Quick file edits (use edit tool directly)
- Analysis, planning, or debugging (e.g. performing code review)

## Available Functions

### subagent(task, fromPlan, relevantFiles, relevantSkills)

Launch a subagent to handle a task synchronously. Blocks until the subagent completes and returns the result.

**Parameters:**

- `task` (str, required): Task ID from session plan (e.g., "T003") OR brief task description
- `fromPlan` (bool, default False): If True, subagent reads full task context from .local/session_plan.md
- `relevantFiles` (list[str], optional): File paths the subagent should access
- `relevantSkills` (list[str], optional): Paths to all implementation skills you've read. Use the full path from the skills view. Pass every skill with integration details (auth, storage, payments) — not orchestration skills meant for you (design, delegation, react-vite).
- `specialization` (str, default "GENERAL"): "GENERAL" or "SMALL_TASK" for quick tasks

**Returns:** Dict with task results

```json
{
    "success": true,
    "message": "Task summary",
    "subagentAlias": "subagent_1",
    "result": "Full task output..."
}
```

**Usage Patterns:**

**1. From Plan (Recommended when you have a session plan):**

```javascript
// Reference tasks by ID - subagent reads full context from .local/session_plan.md
const result = await subagent({ task: "T003", fromPlan: true });
console.log(result);  // Always print the result
```

**2. Direct Task (for ad-hoc tasks without a plan):**

```javascript
const result = await subagent({
    task: "Fix the auth bug in src/auth.ts",
    relevantFiles: ["src/auth.ts"],
    relevantSkills: [".local/skills/clerk-auth/SKILL.md", ".local/skills/database/SKILL.md"]
});
console.log(result);  // Always print the result
```

### startAsyncSubagent(task, fromPlan, relevantFiles, relevantSkills)

Launch a subagent to handle a task asynchronously in the background. Returns immediately without waiting for completion. Use the `wait_for_background_tasks` tool to collect results later.

**Parameters:**

- `task` (str, required): Task ID from session plan (e.g., "T003") OR brief task description
- `fromPlan` (bool, default False): If True, subagent reads full task context from .local/session_plan.md
- `relevantFiles` (list[str], optional): File paths the subagent should access
- `relevantSkills` (list[str], optional): Paths to all implementation skills you've read. Use the full path from the skills view. Pass every skill with integration details (auth, storage, payments) — not orchestration skills meant for you (design, delegation, react-vite).
- `specialization` (str, default "GENERAL"): "GENERAL" or "SMALL_TASK" for quick tasks

**Returns:** Immediately with acknowledgment. Use the `wait_for_background_tasks` tool to collect results.

**Usage Patterns:**

**1. From Plan (Recommended when you have a session plan):**

```javascript
// Reference tasks by ID - no print needed, result comes via wait_for_background_tasks
await startAsyncSubagent({ task: "T003", fromPlan: true });
```

**2. Direct Task (for ad-hoc tasks without a plan):**

```javascript
await startAsyncSubagent({
    task: "Fix the auth bug in src/auth.ts",
    relevantFiles: ["src/auth.ts"],
    relevantSkills: [".local/skills/clerk-auth/SKILL.md", ".local/skills/database/SKILL.md"]
});
```

**Parallel Execution:**

```javascript
// Launch independent tasks simultaneously
console.log(await startAsyncSubagent({ task: "T002", fromPlan: true }));
console.log(await startAsyncSubagent({ task: "T003", fromPlan: true }));
console.log(await startAsyncSubagent({ task: "T004", fromPlan: true }));
```

**Giving Subagents Access to Skills:**

```javascript
// Pass skill paths from the skills view
await startAsyncSubagent({
    task: "T005",
    fromPlan: true,
    relevantSkills: [".local/skills/database/SKILL.md", ".local/skills/clerk-auth/SKILL.md"]
});
```

### messageSubagent(subagentId, message)

Send a follow-up message to an existing subagent asynchronously. Returns immediately after the message is delivered. Use this when the subagent should continue in the background.

**Parameters:**

- `subagentId` (str, required): Alias returned when the subagent was started
- `message` (str, required): Follow-up instruction or clarification for the subagent

**Returns:** Acknowledgment that the message was sent. The subagent keeps running in the background.

**Example:**

```javascript
// Async follow-up: continue background work
await messageSubagent({
    subagentId: "subagent-happy-tiger",
    message: "After the fix, add regression tests for the auth edge case."
});
```

Use the `wait_for_background_tasks` tool to collect results later.

### messageSubagentAndGetResponse(subagentId, message, timeoutSeconds)

Send a follow-up message to an existing subagent synchronously. Blocks until the subagent completes, times out, or is interrupted.

**Parameters:**

- `subagentId` (str, required): Alias returned when the subagent was started
- `message` (str, required): Follow-up instruction or clarification for the subagent
- `timeoutSeconds` (float, default 300.0): Max time to wait before returning a timeout status

**Returns:** Dict with `success`, `message`, `result`, and `exitReason`.

**Example:**

```javascript
// Sync follow-up: wait for the answer now
const result = await messageSubagentAndGetResponse({
    subagentId: "subagent-happy-tiger",
    message: "Summarize root cause and include exact changed files.",
    timeoutSeconds: 180.0
});
console.log(result.result);
```

**When to choose which:**

- Use `messageSubagent` when you want fire-and-forget behavior
- Use `messageSubagentAndGetResponse` when you need the response immediately

## Best Practices

1. **Use session plans**: For 2+ tasks, create a .local/session_plan.md and use `fromPlan=True`
2. **Launch in parallel**: Independent tasks can run simultaneously with `startAsyncSubagent`
3. **Use `subagent()` when you need the result immediately**: For tasks where you need to act on the output, use the synchronous `subagent()` and print the result.
4. **Use `startAsyncSubagent()` for independent tasks that can run in the background**: The tasks will be performed in parallel.
5. **Use `messageSubagent()` for async follow-ups**: Message running subagents without blocking, then use the `wait_for_background_tasks` tool to collect results
6. **Use `messageSubagentAndGetResponse()` for sync follow-ups**: Use this when you need the subagent's output before continuing
7. **Trust the results**: Subagent outputs should generally be trusted
8. **Pass all implementation skills via relevantSkills**: Include every implementation skill you've read — use the full path from the skills view for each one

## Subagent Capabilities

The subagent has access to:

- File operations (read, write, edit, glob, grep)
- Bash commands
- LSP diagnostics
- Depending on specialization, additional tools like media generation or canvas tools may be available
- Skills (loaded via `relevantSkills` parameter)

The subagent does **NOT**:

- Run or restart workflows
- Preview/test the app (that's your job as main agent)
