# Deployment Failure Debugging Reference

Diagnose and fix deployment build failures by inspecting build history, logs, configuration, and environment.

## When to Read This Reference

Read this when:

- The user says their app failed to publish
- The user reports their deployed app crashes or shows errors during the publishing step
- After a deployment attempt that the agent initiated fails
- The user asks for help debugging a deployment error

Do NOT read this for:

- First-time deployment setup (use the main deployment skill instructions above)
- Checking runtime logs for a working production deployment (use `references/deployment-logs.md`)
- Issues about development-mode behavior, not production

## Available Functions

### listDeploymentBuilds(limit?)

List recent deployment builds for the current repl.

**Parameters:**

- `limit` (int, optional): Max builds to return (1-100, default 10)

**Returns:** `{ success, builds }` where each build has:

- `id` — build UUID
- `status` — e.g. `"success"`, `"failed"`, `"building"`
- `provider` — e.g. `"autoscale"`, `"vm"`
- `timeCreated` — ISO timestamp
- `timeUpdated` — ISO timestamp (may be absent)
- `user` — `{ id, username, displayName }` (may be absent)

**Example:**

```javascript
const result = await listDeploymentBuilds({ limit: 5 });
if (result.success) {
    console.log(JSON.stringify(result.builds, null, 2));
}
```

### getDeploymentBuild(buildId, skipLogs?)

Get detailed information about a specific deployment build, including build logs.

**Parameters:**

- `buildId` (string, required): The build ID to inspect
- `skipLogs` (bool, optional): If true, omit build log lines (default false)

**Returns:** `{ success, build }` where build has:

- `id`, `status`, `provider`, `timeCreated`, `timeUpdated` — same as list summary
- `suspendedReason` — reason if deployment was suspended (may be absent)
- `user` — `{ id, username, displayName }` (may be absent)
- `machineConfiguration` — `{ slug, vcpu, memory }` (may be absent)
- `logs` — array of build log line strings (may contain ANSI escape codes)

**Example:**

```javascript
const result = await getDeploymentBuild({ buildId: "b222be9b-63d4-405a-a6ba-11948a8a0df1" });
if (result.success) {
    console.log("Status:", result.build.status);
    const logs = result.build.logs || [];
    console.log(`Total log lines: ${logs.length}`);
    // Print only the last 80 lines — build errors are near the end
    // and full logs may exceed the 4K stdout observation limit.
    const tail = logs.slice(-80);
    for (const line of tail) {
        console.log(line);
    }
}
```

### Related functions from other skills

These existing callbacks are useful during debugging:

- `fetchDeploymentLogs({ afterTimestamp?, beforeTimestamp?, message? })` — fetch runtime/production logs (see `references/deployment-logs.md`). Use to check what happens after the app starts in production.
- `viewEnvVars({ environment: "development" | "production" })` — compare env var names between dev and prod (from `environment-secrets` skill). Use to find missing production secrets.
- `deployConfig({ deploymentTarget, run?, build?, publicDir? })` — reconfigure deployment settings (from the main deployment skill). Use to fix run commands and build commands.
- `suggestDeploy()` — prompt the user to click Publish after making fixes. **Only works in the main repl context** — in task-agent/subrepl sessions this callback returns `success: false`. If you are in a task agent, skip this call and instead remind the user to publish from the main version after merging.

## Diagnostic Procedure

Follow these steps systematically. Do not skip ahead.

### Step 1: Get the build history

```javascript
const result = await listDeploymentBuilds({ limit: 5 });
if (!result.success) {
    console.log("Error fetching builds:", result.error);
} else {
    console.log(JSON.stringify(result.builds, null, 2));
}
```

If the callback fails (e.g. no deployment configured, transient error), report the error to the user before proceeding.

Identify the most recent failed build. If all recent builds succeeded, the issue may be a runtime problem rather than a build failure — check runtime logs with `fetchDeploymentLogs()` instead.

### Step 2: Get the failed build details

```javascript
const detail = await getDeploymentBuild({ buildId: "<failed-build-id>" });
if (!detail.success) {
    console.log("Error fetching build details:", detail.error);
} else {
    console.log("Status:", detail.build.status);
    const logs = detail.build.logs || [];
    console.log(`Total log lines: ${logs.length}`);
    // Only print the last 80 lines — errors appear near the end
    // and full logs may exceed the 4K stdout observation limit.
    const tail = logs.slice(-80);
    for (const line of tail) {
        console.log(line);
    }
}
```

If the callback fails (e.g. stale build ID, transient error), report the error and retry or fall back to runtime logs.

Read the build logs carefully. The failure cause is almost always near the end of the log output. If the tail doesn't contain enough context, fetch an earlier window with `logs.slice(-160, -80)`.

A deployment goes through these phases in order: **build** → **promote** → **serve**. The build logs show which phase failed:

- **Build phase failures** look like compilation errors, `npm install` failures, missing dependencies, or build commands exiting non-zero.
- **Promote phase failures** look like the build succeeding (e.g. image pushed, container started) followed by the container failing to become ready. What "ready" means depends on the deployment target:
  - **`autoscale` and HTTP-serving `vm`**: the deployer sends a startup probe and waits for an HTTP 200 response. Build logs mention health checks, startup probes, or readiness probes timing out. The default probe path is `GET /`. The probe fails if the app crash-loops, returns non-200 on the probe path, binds to the wrong host/port, or takes too long to start.
  - **non-HTTP `vm` (Discord bots, workers, etc.) and `scheduled` jobs**: there is no HTTP probe. The promote step fails when the run command exits non-zero or crashes during startup. Build logs typically just show the process exiting with a stack trace or non-zero exit code. Do **not** look for an HTTP route in this case — the failure is the process itself.
  - **`static`**: there is no run command, so promote-step failures here are rare and usually mean `publicDir` is empty or misconfigured.
- **Serve phase failures** happen after a successful promote: the app is live but throws errors at runtime. These show up in `fetchDeploymentLogs()`, not in build logs.

### Step 3: Branch on what you find

**Build logs show a clear error in the build phase** (compilation error, missing dependency, command not found):
→ Fix the code or configuration directly. See Common Failure Modes below.

**Build phase succeeded but the promote step failed** (build logs mention health check, startup probe, container failing to start, the process exiting, or the deployment never became ready):
→ First check the deployment target in `.replit`'s `[deployment]` section — the right diagnosis depends on it.
→ For **`autoscale` and HTTP-serving `vm`**: the app is failing the startup probe. The default probe is `GET /`. The probe can fail because the app crash-loops on startup, the probe path returns non-200, or the app binds to the wrong host/port. See "Health check / promote step failure" and "Application crashes on startup" below.
→ For **non-HTTP `vm` (bots, workers) and `scheduled` jobs**: the run command exited non-zero or crashed before becoming healthy. There is no HTTP probe — do not chase a `/` route. See "Application crashes on startup" below.
→ Either way, check runtime logs to see why the process is failing: `fetchDeploymentLogs({ message: "(?i)(error|exception|failed|crash|traceback)" })`.

**No obvious cause from build logs:**
→ Check runtime logs for post-deploy errors.
→ Check environment variables: compare `viewEnvVars({ environment: "development" })` with `viewEnvVars({ environment: "production" })`.

**Build status is `suspended`:**
→ Check `suspendedReason`. This is usually a billing or quota issue, not a code problem. Inform the user.

### Step 4: Check deployment configuration

Read `.replit`'s `[deployment]` section. Verify run command, build command, and deployment target are correct. Use `deployConfig()` to fix any misconfigured settings.

### Step 5: After fixing

After making code or configuration fixes:

- **Main repl context:** Call `suggestDeploy()` to prompt the user to re-publish.
- **Task-agent / subrepl context:** Do **not** call `suggestDeploy()` — it will fail. Instead, remind the user to publish from the main version of the project after the task branch is merged.

## Common Failure Modes

### Application crashes on startup

- **Indicators:** Build succeeds, but the deployment fails at the **promote step**. How this surfaces depends on the deployment target:
  - **`autoscale` / HTTP-serving `vm`**: build logs mention the container failing health checks, the startup probe timing out, or the deployment never becoming ready. A crashing or crash-looping app cannot respond to the probe, so the promote step fails.
  - **non-HTTP `vm` (bots, workers) / `scheduled` jobs**: build logs show the run command exiting with a stack trace or non-zero exit code, or the process restarting repeatedly. There is no HTTP probe — the failure is just the process dying.
- **Look for:** Uncaught exceptions, import errors, missing modules, missing environment variables (e.g. `DISCORD_TOKEN`), syntax errors, or repeated restarts in runtime logs (`fetchDeploymentLogs`).
- **Fix:** Read the stack trace and fix the code error so the app starts cleanly and stays up. Confirm by running the production `run` command locally:
  - For HTTP services: it must start without crashing **and** respond 200 on the probe path (`GET /` by default).
  - For bots/workers/jobs: it must start without crashing and stay running (or, for `scheduled`, run to completion with exit code 0). If the crash is from a missing secret, use `requestEnvVar()` to ask the user to add it to production.

### Build command failure

- **Indicators:** Build status `failed`, build logs show non-zero exit from build command.
- **Look for:** TypeScript compilation errors, missing dependencies not in package.json/requirements.txt, build scripts that reference dev-only paths.
- **Fix:** Ensure the build command succeeds locally before deploying. Check that all dependencies are listed in the manifest.

### Run command failure or misconfiguration

- **Indicators:** Build logs show command not found or immediate exit.
- **Common causes:** Run command references a file that doesn't exist, uses a dev server instead of production server, wrong binary name.
- **Fix:** Verify the run command in `.replit` `[deployment]` section. Use production servers: `gunicorn` not `flask run`, `node server.js` not `npm run dev`.

### Port/binding issues

- **Indicators:** Build succeeds, but app fails health check or port check.
- **Common causes:**
  - App binds to `localhost`/`127.0.0.1` instead of `0.0.0.0` — the container can't reach it.
  - App binds to a different port than configured.
  - App uses a `PORT` env var that isn't set in production.
- **Fix:** Ensure the app binds to `0.0.0.0` on the correct port.

### Health check / promote step failure

- **Indicators:** The **build phase succeeds** but the deployment fails at the **promote step**. Build logs mention health check failures, startup probe timeouts, the container failing to become ready, or the deployment never reaching the live state. This is one of the most common deployment failure modes and it is **not** a build problem — the artifact built fine, the app just isn't responding to the probe.
- **Details:** Before promoting a deployment to live, the deployer sends a startup probe to `GET /` and requires an HTTP 200 response. If the probe doesn't get a 200 within the timeout, the promote step fails and the previous version (if any) keeps serving traffic.
- **Common causes:**
  - **App crashes or crash-loops on startup** — a crashing app obviously can't respond to the probe. Check runtime logs for stack traces. See "Application crashes on startup" above.
  - App returns 404, 3xx redirect, or 5xx on `/`.
  - App requires authentication on all routes including `/`.
  - App binds to `localhost`/`127.0.0.1` instead of `0.0.0.0`, or to the wrong port.
  - App takes too long to start (slow imports, blocking startup work, large model downloads).
- **Fix:** Ensure the root route `/` returns a 200 response. Use `fetchDeploymentLogs()` to see whether the app is crashing or just responding incorrectly. Optimize startup time if needed.

### Missing or different environment variables

- **Indicators:** App works in dev but fails in prod with connection errors, auth failures, or undefined config.
- **Fix:** Use `viewEnvVars({ environment: "development" })` and `viewEnvVars({ environment: "production" })` to compare. Use `requestEnvVar()` to ask the user to provide missing production secrets.

### Autoscale-specific issues (stateless footguns)

Autoscale deployments are **stateless Cloud Run services**. Each request may hit a different instance. Instances spin down when idle.

**Things that will NOT work on autoscale:**

- In-memory state (sessions, caches, counters) — use a database or Redis instead
- SQLite — filesystem is ephemeral, use PostgreSQL
- WebSocket connections that need to persist — instances can be killed at any time
- Background workers / long-running processes — these get killed when the request ends
- Cron jobs or scheduled tasks running inside the app — use the `scheduled` deployment type
- File uploads stored on the local filesystem — use object storage


If the app needs any of the above, inform the user that they should switch to Reserved VM (`vm`) deployment type in the Deployments pane. The deployment type is not something you can change programmatically — the user must change it themselves.

## Important Notes

1. **Don't diagnose infrastructure problems.** If the error appears to be on Replit's side (e.g., transient cloud provider issues, `UnknownError` from the deployer), suggest the user retry the deployment or contact Replit support.
2. **Changing deployment type.** The deployment type (autoscale, vm, scheduled, static) is set in the Deployments pane, not in code. If it needs to change, tell the user to update it themselves.
3. **Use production terminology.** In user-facing messages, say "publish" not "deploy" — that's the Replit product terminology.
4. **You cannot trigger a deployment.** In the main repl, call `suggestDeploy()` to prompt the user to click the Publish button. In task-agent/subrepl sessions, `suggestDeploy()` is unavailable — remind the user to publish from the main version after merging.
5. **Production config lives in `.replit`.** Deployment settings (run command, build command, deployment target) are in the `.replit` file's `[deployment]` section.
