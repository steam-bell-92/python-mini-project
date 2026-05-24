---
name: integrations
description: Search and manage Replit integrations including blueprints, connectors, and connections. Use for authentication, databases, payments, and third-party API integrations.
---

# Integrations Skill

Integrations allow first-class usage of Third-Party (and some First-party) technologies. If the integration exists, you can ask user to "connect" their account (Google, Linear, GitHub, Stripe, etc) to their Replit account, which critically gives you, the Replit Agent, access to new capabilities (e.g. view their Google Sheets, read their Linear issues, setup & access payment systems, etc). You must follow the  steps outlined here to successfully make these "connections".

**Before asking the user for any API key, secret, or credential, always search for a Replit integration first.** Replit integrations handle OAuth and secrets securely, and many common services (Google Sheets, Linear, Stripe, GitHub, OpenAI, etc.) are already supported. Asking the user for credentials when an integration exists adds a lot of unnecessary friction. Users typically do not know about our integration system, you must proactive in suggesting it when it (and only when) it is relevant.

Integrations include blueprints (code templates), connectors (OAuth/API integrations + templates), and connections (already established integrations).

## When to Use

Use this skill when:

- User needs authentication (login, signup, OAuth)
- User needs database connections (PostgreSQL, MongoDB, etc.)
- User needs payment processing (Stripe, etc.)
- User needs third-party API integrations (OpenAI, Notion, GitHub, Linear, etc.)
- User asks about Replit-specific features and capabilities

## When NOT to Use

As a web search (use web-search skill if available), searching files within the project, media generation (use media-generation skill, including image generation APIs), fetching data to respond to a user's question (use query-integration-data skill).

---

## Integration Lifecycle

There are three types of integrations, and they represent different stages of a lifecycle:

```text
connector (not_setup)
    → user completes OAuth via proposeIntegration
    → connection (not_added)
        → addIntegration        ← code-side wiring (npm packages, scaffolds, project registration)
        → proposeIntegration    ← platform-side binding (registers this Repl with connectors so the credential proxy will serve secrets)
        → now it is a functioning connection (added + authorized, ready to use)

blueprint (not_installed)
    → addIntegration or proposeIntegration
    → blueprint (installed, code + packages added to project), ready to use
```

### Connectors

- An available OAuth/API integration that has **not yet been authorized** by the user
- Status: `not_setup`
- Cannot be added directly — must use `proposeIntegration` which allows the user through the OAuth flow
- Example ID: `connector:ccfg_google-sheet_E42A9F6DA6...`

### Connections

- A connector that has **already been authorized** at the account level
- Status: `not_added` (authorized at account level but not bound to this Repl) or `added` (active in this Repl)
- Both `addIntegration` AND `proposeIntegration` are required on first setup — they do orthogonal things:
  - `addIntegration` does code-side wiring (npm install, scaffolds, project registration). It does NOT touch the platform's connection-state backend.
  - `proposeIntegration` does platform-side binding (registers this Repl with connectors-v2 as a permitted consumer). Without it the credential proxy at `connectors.replit.com/api/v2/connection` returns nothing for this Repl, even though the underlying credentials exist at the account level.
- Example ID: `connection:conn_linear_01MG99PAJR6MQ5...`

NOTE: You must not delay calling proposeIntegration even if it waits for the user. You will be blocked and not have access to test the feature you build because you don't have access to real data, real APIs, etc, which is even more inefficient than reaching out to the user as soon as you know you need the integration to get accepted.

### Blueprints

- These are just code templates that install packages and scaffold integration boilerplate
- Status: `not_installed` or `previously_installed`
- Use `addIntegration` directly; if `requiresConfirmation` is True, use `proposeIntegration` instead
- Example ID: `blueprint:javascript_openai`

---

## Available Functions

All functions are available directly in the `code_execution` sandbox. **Always use `console.log()` on return values** — functions execute silently with no output if you don't.

### searchIntegrations(query)

Search for available integrations. **Always run this first.** Try a few different query terms if the first search returns nothing — results depend on keyword matching.

**Returns:** Dict with:

- `integrations`: list of integration objects, each with `id`, `displayName`, `description`, `integrationType`, `status`
- `askForBlueprintConfirmation`: boolean — if True, blueprint additions in this environment will require user confirmation; expect `requiresConfirmation: True` back from `addIntegration` and be ready to call `proposeIntegration` instead

```javascript
const results = await searchIntegrations("Google Sheets");
console.log(results);
// { integrations: [{ id: 'connector:ccfg_google-sheet_...', displayName: 'Google Sheets',
//   description: '...', integrationType: 'connector', status: 'not_setup' }], ... }

// Always log — calling without console.log produces no visible output!
for (const item of results.integrations) {
  console.log(`${item.id}  type=${item.integrationType}  status=${item.status}`);
}
```

**Notes:**

- When the user has not explicitly requested a specific provider, at least search with a generic, capability-focused query to ensure all relevant options are returned. For example, when user asks "build an icon generating app", prefer `searchIntegrations("image generation")` instead of `searchIntegrations("OpenAI image generation")`
- If a connector has already been authorized by the user or a teammate, it will appear as a `connection` (not a `connector`) in results
- Try multiple queries if needed: `"stripe"`, `"payments"`, `"stripe payment processing"` may return different results
- The `id` field is the exact string to pass to subsequent functions

---

### viewIntegration(integrationId)

Fetch full details and the code snippet for an integration without adding it to the project.

**Returns:** Dict with `integrationType`, `integrationId`, `displayName`, `renderedContent`

**Note:** `addIntegration` returns the exact same `renderedContent` blob, so in most cases you don't need to call this separately — just read the result of `addIntegration`. The main reason to call `viewIntegration` first is if you want to inspect the package name, code snippet, or documentation URL before committing to the install.

```javascript
const info = await viewIntegration("connection:conn_linear_01KG10PAJR6MQ525SQSWEB8QHC");
console.log(info.renderedContent);  // Same blob you'd get from addIntegration
```

---

### addIntegration(integrationId)

Add a blueprint or connection to the current project. **Do not use for connectors** (those with `integrationType: connector` and `status: not_setup`) — use `proposeIntegration` for those.

**Returns:** Dict with:

- `success`: boolean
- `requiresConfirmation`: boolean — if True, call `proposeIntegration` instead
- `connectionAlreadyAdded`: boolean — if True, the connection is already wired to this project; skip addIntegration but still call proposeIntegration to ensure the platform binding is current (tokens expire, bindings can be stale)
- `renderedContent`: same XML blob as `viewIntegration`
- `observations`: list of stringified observation objects (verbose; contains npm install output)

**Side effect:** Automatically installs required packages. This will restart or crash a running dev server — be aware if calling mid-session while the workflow is running.

```javascript
const result = await addIntegration("connection:conn_linear_01KG10PAJR6MQ525SQSWEB8QHC");
console.log(result.success);       // true
console.log(result.observations);  // Contains package installation output as stringified objects

// Handle confirmation requirement
if (!result.success && result.requiresConfirmation) {
  proposeIntegration("connection:conn_linear_01KG10PAJR6MQ525SQSWEB8QHC");
}
```

**After calling addIntegration:**

- Read `renderedContent` to get the code snippet
- The snippet handles token refresh and expiry — use it as-is, don't simplify it
- Never cache the client object the snippet creates — tokens expire

---

### proposeIntegration(integrationId)

Propose a connector to the user. This is a **control-flow operation** — it exits the agent loop immediately and waits for the user to complete OAuth or confirm setup. Nothing after this call will execute in the current loop.

**Returns:** Dict with `success`, `displayName`, `exitLoop` (always True)

**Use for:**

- Connectors with `status: not_setup` (drives OAuth + binding)
- Connections with `status: not_added` after calling `addIntegration` (drives the binding only)
- Connections with `status: added` if runtime fails with "not connected" (re-binds / refreshes)
- Blueprints where `addIntegration` returns `requiresConfirmation: True`

```javascript
// Always explain to the user what is about to happen before calling this
// The agent loop exits after this — no further code runs
const result = await proposeIntegration("connector:ccfg_google-sheet_E42A9F6CA62546F68A1FECA0E8");
```

**Notes:**

- After the user completes OAuth, the connector becomes a `connection`
- On the next agent loop, call `addIntegration` with the new `connection:...` ID
- There is no user-visible message automatically shown when this exits — explain what you're doing in your chat response before calling it

---

## Using the Code Snippet

After `addIntegration` or `viewIntegration`, the `renderedContent` contains a code snippet. Key things to know:

1. **It is not on the filesystem.** Copy it into a new file in your project (e.g., `server/googleSheets.ts`)
2. **Never cache the client.** Tokens expire. The snippet exports a `getUncachable___Client()` function — call it fresh on every request
3. **The token refresh logic is correct as-is.** Don't simplify or remove the expiry check
4. **The snippet uses environment variables** (`REPLIT_CONNECTORS_HOSTNAME`, `REPL_IDENTITY`, `WEB_REPL_RENEWAL`) that Replit injects automatically — no setup needed

---

## Databricks

When the user wants to connect to Databricks, use the `databricks-m2m` connector (not the plain `databricks` connector). The `databricks-m2m` connector provides machine-to-machine access and works in all contexts. Inside a Databricks App, prefer the `databricks` (U2M) connector when available — see the `databricks-app` skill for details.

## Common Pitfalls

- **Not logging results:** `searchIntegrations` and all other functions return silently unless you `console.log()` the output
- **Calling addIntegration on a connector:** Will fail or behave unexpectedly. Check `integrationType` first
- **Asking for API keys when a connection exists:** If `searchIntegrations` returns a `connection`, the user is already authenticated at the account level — use `addIntegration` to wire the project, then `proposeIntegration` to bind this Repl to the connection. Both steps are always required.
- **Caching the client:** The boilerplate snippet is explicit about this. Tokens expire. Always call `getUncachable___Client()` fresh
- **Package install side effects:** `addIntegration` runs package installation (e.g. npm, uv), which can crash a running dev server. Restart the workflow after adding integrations
- **Connection added but runtime still fails:** If `addIntegration` succeeds for a `connection` but the app throws "not connected" at runtime, the token may be expired or missing. Call `proposeIntegration` with the same connection ID to trigger re-authorization, then restart the workflow
