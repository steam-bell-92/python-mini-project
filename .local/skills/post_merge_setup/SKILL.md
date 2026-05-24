---
name: post_merge_setup
description: Maintain the post-merge setup script that runs automatically after task merges.
---

# Post-Merge Setup

After a task is merged, two things run automatically:

1. Setup script — installs dependencies, runs migrations, rebuilds.
2. Workflow reconciliation — stops workflows removed from `.replit` and restarts already running workflows.

If either step fails, the agent will be alerted about the issue, and should fix it immediately.

## What Runs Automatically

The system runs the configured post-merge script from the project root with bash.
Stdin is closed (`/dev/null`), so commands that prompt for input will get EOF and fail immediately. The full Nix environment is available on PATH.

If the script does not exist, setup fails and you are asked to create it.

The script has a configurable timeout. If the script takes longer, it is killed and setup fails with a timeout error.

After the script, workflow reconciliation syncs running workflows with the current `.replit` config.

## Available Commands

### Get the post-merge config

```javascript
const config = await getPostMergeConfig();
console.log(config);
// { scriptPath: "...", timeoutMs: ... }
```

Returns the configured script path and timeout from `.replit`. If not yet configured, both fields will be `null`.

### Set post-merge config

```javascript
await setPostMergeConfig({ scriptPath: "scripts/post-merge.sh", timeoutMs: 180000 });
```

Sets the post-merge script path and/or timeout. Both parameters are optional — only provided values are updated. Note: `scriptPath` must be set (either already configured or provided in the same call) before setting `timeoutMs` alone, because `.replit` requires `path` in the `[postMerge]` section. Use `timeoutMs` when:

- The script timed out — if the script naturally takes a long time (large `npm install`, slow migrations), increase the timeout so it succeeds on the next merge. Estimate a reasonable value from the script's expected runtime and add a buffer (e.g. if `npm install` takes 3s, set timeout to 5000 ms).
- The script hangs — if the script hangs due to a bug (e.g. waiting for input), fix the script first, then consider lowering the timeout to catch future hangs early.

### Run post-merge setup

```javascript
const result = await runPostMergeSetup();
console.log(result);
```

Runs the post-merge script and workflow reconciliation. Returns `{ success, setupError, reconciliationError, scriptPath, stdoutPath, stderrPath, durationMs, timeoutMs }`.

- `setupError` / `reconciliationError`: what failed
- `scriptPath`: path to the post-merge script that was executed
- `stdoutPath` / `stderrPath`: full log file paths
- `durationMs` / `timeoutMs`: how long it ran and the configured timeout

The tail of the stdout/stderr log files (last 10 lines with line numbers) is automatically opened into your context after the call.

## Fixing Failures

When setup fails:

1. **Check the log files** opened into your context after the call (last 10 lines of stdout/stderr with line numbers). The `scriptPath` in the result tells you which script was executed.
2. **Fix the script** — create it if missing, update it if broken.
3. **If it timed out**, increase the timeout with `setPostMergeConfig({ timeoutMs: ... })` based on how long the script actually needs.
4. **Retry** with `runPostMergeSetup()` to confirm the fix works.

If workflow reconciliation fails, use the workflows skill to check and restart affected workflows.

Common failure causes:

- Missing script -> use the `scriptPath` from the result (or call `getPostMergeConfig()`) to find the expected path, then create the script there.
- Script timed out -> increase timeout with `setPostMergeConfig({ timeoutMs: ... })`, or optimize the script.
- A command prompts for input (stdin is closed, so it gets EOF and fails) -> use non-interactive flags (`--yes`, `--force`, `-y`, etc.).
- A dependency or migration command fails -> fix the command or the underlying config.

## Writing the Post-Merge Script

Use the `scriptPath` from the last `runPostMergeSetup()` result if available. Otherwise, call `getPostMergeConfig()` to find the script location.

Example:

```bash
#!/bin/bash
set -e

pnpm install
pnpm --filter @workspace/db run push-force
```

Guidelines:

- Idempotent. Safe to run multiple times.
- Non-interactive. Stdin is closed. Use `--yes` / `--force` flags.
- Fail fast. Use `set -e`.
- Keep it fast. Runs while the user waits. If it takes more than 2 minutes, consider optimizing or increasing the timeout.
