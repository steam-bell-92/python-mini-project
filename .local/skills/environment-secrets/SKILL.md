---
name: environment-secrets
description: Manage environment variables and secrets. View, set, delete env vars and request secrets from users.
---

# Environment Secrets Skill

Manage environment variables and secrets (such as API keys, tokens, and credentials). View, set, delete environment variables and request secrets from users.

The user can also change the values of any environment variables/secrets using the "secrets" tab in the Replit GUI.

## When to Use

Use this skill when:

- You need to check what environment variables or secrets exist
- Setting sensitive configuration values (ports, hostnames, feature flags)
- Deleting obsolete environment variables
- Requesting API keys, tokens, or other secrets from the user

## When NOT to Use

- Never set sensitive values directly (API keys, passwords, tokens) - always use `requestEnvVar` to request from user
- Don't modify runtime-managed variables (REPLIT_DOMAINS, REPL_ID, DATABASE_URL for Helium DBs)

## Environment Types

Environment variables are scoped to specific environments:

- **shared**: Available in both development and production
- **development**: Only available in development environment
- **production**: Only available in production environment

By default, you should use the 'shared' environment to store environment variables unless there is a clear reason why it would require different values in development and production.

An environment variable stored in the 'shared' environment can not be modified in 'development' or 'production' environments. To modify it, delete it from the 'shared' environment and re-add it to 'development' and 'production' environments.

Secrets are global and not environment-scoped.

## Available Functions

### viewEnvVars(type, environment, keys)

View environment variables and/or secrets.

**Parameters:**

- `type` (str, default "all"): What to view: "env", "secret", or "all"
- `environment` (str, optional): Filter by environment: "shared", "development", "production"
- `keys` (list[str], optional): Filter by specific keys

**Returns:** Dict with `envVars`, `secrets`, and `runtimeManaged` fields

**Example:**

```javascript
// View all env vars and secrets
const result = await viewEnvVars();
console.log(result.envVars);  // {shared: {PORT: '3000'}, development: {...}}
console.log(result.secrets);   // {OPENAI_API_KEY: true, STRIPE_KEY: true}

// Check if specific secrets exist
const result2 = await viewEnvVars({ type: "secret", keys: ["OPENAI_API_KEY", "STRIPE_KEY"] });
if (result2.secrets.OPENAI_API_KEY) {
    console.log("OpenAI key is configured");
}

// View only development env vars
const result3 = await viewEnvVars({ type: "env", environment: "development" });
```

### setEnvVars(values, environment)

Set environment variables. Cannot be used for secrets.

**Parameters:**

- `values` (dict[str, str], required): Key-value pairs to set
- `environment` (str, default "shared"): Target: "shared", "development", "production"

**Returns:** Dict with `environment` and `keys` that were set

**Example:**

```javascript
// Set shared config (available in dev and prod)
await setEnvVars({ values: { PORT: "3000", DEBUG: "false" } });

// Set development-only config
await setEnvVars({ values: { LOG_LEVEL: "debug" }, environment: "development" });

// Set production config
await setEnvVars({ values: { LOG_LEVEL: "error" }, environment: "production" });
```

### deleteEnvVars(keys, environment)

Delete environment variables.

**Parameters:**

- `keys` (list[str], required): Keys to delete
- `environment` (str, default "shared"): Target: "shared", "development", "production"

**Returns:** Dict with `environment` and `keys` that were deleted

**Example:**

```javascript
// Delete from shared environment
await deleteEnvVars({ keys: ["OLD_CONFIG", "DEPRECATED_FLAG"] });

// Delete from specific environment
await deleteEnvVars({ keys: ["DEBUG"], environment: "development" });
```

### requestEnvVar(requestType, keys, envVars, userMessage)

Request secrets or environment variables from the user. This pauses agent execution until the user provides the values.

**Parameters:**

- `requestType` (str, required): "secret" or "env"
- `keys` (list[str], required if requestType="secret"): Secret keys to request
- `envVars` (list[dict], required if requestType="env"): Env vars with `key` and `environment`
- `userMessage` (str, optional): Custom message for user

**Returns:** Dict with `requested`, `userMessage`, and `waitingForInput`

**Example - Request secrets:**

```javascript
// Request API keys from user
await requestEnvVar({
    requestType: "secret",
    keys: ["OPENAI_API_KEY", "STRIPE_SECRET_KEY"],
    userMessage: "Please provide your API keys to enable the payment feature"
});
// Agent pauses here until user provides the secrets
```

**Example - Request env vars:**

```javascript
// Request non-sensitive config from user
await requestEnvVar({
    requestType: "env",
    envVars: [
        { key: "CUSTOM_DOMAIN", environment: "production" },
        { key: "FEATURE_FLAG", environment: "shared" }
    ],
    userMessage: "Please provide the following configuration values"
});
```

## Best Practices

1. **Check before requesting**: Always use `viewEnvVars` first to see what's already configured
2. **Use shared for common config**: Put variables needed in both dev and prod in "shared"
3. **Never hardcode secrets**: Always request secrets from users via `requestEnvVar`
4. **Provide helpful messages**: Include context when requesting secrets so users know why they're needed
5. **Handle conflicts**: If you need to move a var between environments, delete from old first

## Example Workflow

```javascript
// 1. Check current configuration
const result = await viewEnvVars();

// 2. Check if required secrets exist
const missingSecrets = [];
for (const key of ["OPENAI_API_KEY", "DATABASE_URL"]) {
    if (!result.secrets[key]) {
        missingSecrets.push(key);
    }
}

// 3. Request missing secrets from user
if (missingSecrets.length > 0) {
    await requestEnvVar({
        requestType: "secret",
        keys: missingSecrets,
        userMessage: "The following API keys are needed for the chat feature"
    });
} else {
    // 4. Set non-sensitive config
    await setEnvVars({
        values: {
            CHAT_ENABLED: "true",
            MAX_TOKENS: "4096"
        }
    });
}
```

## Restrictions

- Cannot view secret values (only existence status)
- Cannot set or modify secrets directly
- Cannot modify runtime-managed variables
- Variables cannot exist in both "shared" and a specific environment simultaneously
