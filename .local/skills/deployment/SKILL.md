---
name: deployment
description: Use when the user asks to publish, deploy, or configure deployment settings, deployment geography or regions, or when the user reports their deployed app is broken, asks about production errors, or wants to check server logs.
---

# Deployment Skill

Configure deployment settings, publish your project, and debug deployment issues.

## When to Use

Use this skill when:

- Configuring how the project should run in production
- The project is in a working state and ready for publishing
- The user explicitly asks to publish or deploy the project
- You've completed implementing a feature and verified it works
- Setting up deployment for different project types (websites, bots, scheduled jobs)
- The user reports their deployed application is not working correctly
- The user wants to see what errors are occurring in production
- The user needs to debug a runtime issue with their deployed app
- The user asks to check deployment or server logs
- The user says their app failed to publish or a deployment build failed
- After a deployment attempt that the agent initiated fails

## When NOT to Use

- Project has known errors or incomplete features
- You haven't validated that the project works
- The user is just testing or prototyping

## Reference Documents

This skill has additional reference documents for specific deployment scenarios. Read them as needed:

- `.local/skills/deployment/references/deployment-logs.md` — How to fetch and analyze runtime deployment logs. Read this when the user's deployed app is misbehaving, the live site is down, or they want to check production logs.
- `.local/skills/deployment/references/deployment-failure-debugging.md` — How to diagnose and fix deployment build failures. Read this when the user's deployment build fails to publish, the app crashes during the publishing step, or the user asks for help debugging a deployment error.

## Available Functions

### deployConfig(deploymentTarget, run, build, publicDir)

Configure how the project should be deployed to production.

**Parameters:**

- `deploymentTarget` (str, required): "autoscale", "vm", "scheduled", or "static"
- `run` (list[str], optional): Production run command. First entry is binary/script, rest are arguments
- `build` (list[str], optional): Build/compile command before deployment
- `publicDir` (str, required for "static"): Directory containing static files

**Returns:** Dict with `success`, `message`, and configuration details

**Example:**

```javascript
// Configure a Python web app
const result = await deployConfig({
    deploymentTarget: "autoscale",
    run: ["gunicorn", "--bind=0.0.0.0:5000", "--reuse-port", "main:app"]
});

// Configure a static site
const result2 = await deployConfig({
    deploymentTarget: "static",
    build: ["npm", "run", "build"],
    publicDir: "dist"
});

// Configure an always-running bot
const result3 = await deployConfig({
    deploymentTarget: "vm",
    run: ["python", "bot.py"]
});
```

### suggestDeploy()

Prompt the user to click the Publish button after the app is ready. **Only works in the main repl context** — in task-agent/subrepl sessions this callback returns `success: false`. If you are in a task agent, skip this call and instead remind the user to publish from the main version after merging.

### getDeploymentInfo()

Fetch the repl's current deployment metadata directly from the deployments service. Always call this — never guess from memory or environment variables — when you need to know whether the project is published, what its production URL is, or whether the live build is healthy. Do NOT run `echo $REPLIT_DOMAINS` to discover the production URL — inside the dev container that variable holds the `.replit.dev` development domain, not the production URL.

**Returns:** Dict with:

- `success` (bool): `false` when the deployments service is unreachable. Treat as "deployment status unknown" — tell the user the status is currently unavailable rather than asserting there is no deployment
- `isDeployed` (bool): `true` when an active deployment exists for this repl. When `false`, do not fabricate a URL — there is no production URL to give. If the user wants a production URL or asks what their live URL is, guide them through publishing first via the usual deployment flow (e.g. `suggestDeploy()`).
- `primaryUrl` (str): fully-qualified production URL with `https://` scheme (a verified custom domain if the user configured one, otherwise the generated `*.replit.app` subdomain). Empty string when not deployed. Use this whenever you need the production URL (e.g. setting a `REPLIT_APP_URL` secret, configuring rewrites in an external CMS, curling the live site, or telling the user where their app is reachable)
- `additionalUrls` (list[str]): other public URLs (e.g. additional verified custom domains). Empty list when none
- `deploymentType` (str): one of `"autoscale"`, `"vm"`, `"static"`, `"scheduled"`, or `""` if unknown / not applicable. Matches the `deploymentTarget` vocabulary `deployConfig()` accepts
- `hasSuccessfulBuild` (bool): `true` only when the deployment's current build is in the `success` status. `false` when the build is still pending, failed, suspended, or no current build exists. When `isDeployed` is `true` but this is `false`, the `primaryUrl` may be unreachable or still be serving a previous successful build — if the user reports the live site is broken, suspect the in-flight or failed build first (see `.local/skills/deployment/references/deployment-failure-debugging.md` for how to investigate)

**Example:**

```javascript
const info = await getDeploymentInfo();
if (!info.success) {
    console.log("Deployment status unavailable; try again in a moment.");
} else if (!info.isDeployed) {
    console.log("This repl has not been published yet.");
} else {
    console.log(`Live at ${info.primaryUrl} (${info.deploymentType})`);
    if (!info.hasSuccessfulBuild) {
        console.log("Current build is not in the success status — URL may be stale.");
    }
}
```

### fetchDeploymentLogs({ afterTimestamp, beforeTimestamp, message, messageContext })

Fetch and analyze deployment logs. See `.local/skills/deployment/references/deployment-logs.md` for full documentation.

## Deployment Targets

Choose the appropriate deployment target based on your project type:

### autoscale (Recommended Default)

Use for stateless websites and APIs that don't need persistent server memory.

- **Best for:** Web applications, REST APIs, stateless services
- **Behavior:** Scales up/down based on traffic, only runs when requests arrive
- **State:** Use databases for persistent state (not server memory)
- **Cost:** Most cost-effective for variable traffic

```javascript
await deployConfig({
    deploymentTarget: "autoscale",
    run: ["gunicorn", "--bind=0.0.0.0:5000", "app:app"]
});
```

### vm (Always Running)

Use for applications that need persistent server-side state or long-running processes.

- **Best for:** Discord/Telegram bots, WebSocket servers, web scrapers, background workers
- **Behavior:** Always running, maintains state in server memory
- **State:** Can use in-memory databases, local files, or external databases

```javascript
await deployConfig({
    deploymentTarget: "vm",
    run: ["python", "bot.py"]
});
```

### scheduled

Use for cron-like jobs that run on a schedule.

- **Best for:** Data processing, cleanup tasks, periodic reports, batch jobs
- **Behavior:** Runs on configured schedule, not continuously
- **Note:** Do NOT use for websites or APIs

```javascript
await deployConfig({
    deploymentTarget: "scheduled",
    run: ["python", "daily_report.py"]
});
```

### static

Use for client-side websites with no backend server.

- **Best for:** Static HTML sites, SPAs (React, Vue, etc.), documentation sites
- **Behavior:** Serves static files directly, no server-side processing
- **Note:** The `run` command is ignored; must specify `publicDir`

```javascript
await deployConfig({
    deploymentTarget: "static",
    build: ["npm", "run", "build"],
    publicDir: "dist"
});
```

## Run Command Examples

Use production-ready servers, not development servers:

```toml
# Python with Gunicorn
run=["gunicorn", "--bind=0.0.0.0:5000", "--reuse-port", "main:app"]

# Python with Streamlit
run=["streamlit", "run", "main.py"]

# Node.js
run=["node", "server.js"]

# Multiple processes with bash
run=["bash", "-c", "gunicorn --reuse-port -w 4 -b 0.0.0.0:8000 app:app & npm run dev"]
```

## Build Command Examples

Only use build commands when compilation is needed:

```toml
# TypeScript/bundler
build=["npm", "run", "build"]

# Multiple build steps
build=["bash", "-c", "make assets && make compile"]

# Rust
build=["cargo", "build", "--release"]
```

## Publishing Geography

Users can choose the geographic region where their app is published. This is configured in the **Advanced** settings of the Publishing tool, not in code. The agent cannot set this programmatically — the user selects it in the Publishing UI before clicking Publish.

Key points:

- **Available on Core, Pro, and Enterprise plans.** Free plan users publish to North America by default.
- **Geography is permanent.** Once a project is published to a geography, it cannot be changed. Inform the user of this before they publish for the first time.
- **Compute, database, and Object Storage are colocated** in the selected region automatically.
- **Enterprise admins can enforce a geography** for all new projects across their organization.
- **Available regions may change over time.** For the current list of supported geographies, refer the user to the [Publishing Geography docs](https://docs.replit.com/cloud-services/deployments/publishing-geography).

If the user asks about deploying to a specific region (e.g. Europe, Asia, Australia):

- **Not yet published & on Core/Pro/Enterprise:** They can select their preferred geography in the **Advanced** section of the Publishing tool before their first publish.
- **Not yet published & on the Free plan:** Geography selection is not available — they will publish to North America by default. They can upgrade their plan to choose a region.
- **Already published:** The geography cannot be changed. Let the user know the selection was locked at first publish.
- **Enterprise org with enforced geography:** The admin-set geography overrides individual choice. The user publishes to whatever geography their org requires.

Do **not** tell users that Replit only supports US-based infrastructure — multiple geographies are available.

## Best Practices

1. **Validate before publishing**: Always verify the project works before suggesting publish
2. **Use production servers**: Avoid insecure development servers in production
3. **Choose the right target**: Match deployment type to your application's needs
4. **Configure once**: Set up deployment config early, then suggest publishing when ready
5. **Check workflows first**: Ensure workflows are running without errors before publishing

## Important Notes

1. **User-initiated publishing**: The user must click the Publish button to actually deploy
2. **Automatic handling**: Publishing handles building, hosting, TLS, and health checks automatically
3. **Domain**: Published apps are available at a `.replit.app` domain or custom domain if configured
4. **Production config lives in `.replit`**: Deployment settings (run command, build command, deployment target) are in the `.replit` file's `[deployment]` section.

## Example Workflow

```javascript
// 1. Configure deployment settings for a web app
await deployConfig({
    deploymentTarget: "autoscale",
    run: ["gunicorn", "--bind=0.0.0.0:5000", "app:app"]
});

// 2. After verifying the app works, suggest publishing to the user
await suggestDeploy();
```
