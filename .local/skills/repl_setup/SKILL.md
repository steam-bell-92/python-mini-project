---
name: repl_setup
description: Setup and configure web applications in the Replit environment. Covers host configuration, frontend/backend connectivity, cache control, and framework-specific setup for Angular, React, Vite, and Vue.
---

# Repl Setup

Guidelines for setting up and configuring web applications to work correctly in the Replit environment. Users see your application through a proxy (iframe), which requires specific configuration.

## When to Use

Use this skill when:

- Setting up a new web application or frontend framework
- The user cannot see your frontend changes
- Configuring host settings for development servers
- Connecting frontend code to backend APIs
- Debugging visibility issues with the user's preview

## When NOT to Use

- For non-web applications (CLI tools, scripts, etc.)
- When the application is already working correctly
- For deployment/publishing issues (use the deployment skill)

## Critical Replit Environment Rules

### Host Configuration

The user sees your frontend through a proxy within an iframe. **You must configure your development server to allow all hosts**, otherwise the user will never see your frontend.

Every web framework needs its development configuration set to allow all hosts. If you don't know the specific configuration for a framework, use web search to find it.

### Frontend Server Port

Bind frontend servers to **0.0.0.0:5000**. Never bind anything else to port 5000.

### No Docker or Virtual Environments

Never use Docker, virtual environments, or containerization. Replit uses a Nix environment that doesn't support nested virtualization.

## Stack-Specific Setup

For framework-specific configuration, refer to these guides:

- `.local/skills/repl_setup/references/angular.md` - Angular setup with allowedHosts and CLI flags
- `.local/skills/repl_setup/references/react_vite.md` - React and Vite configuration
- `.local/skills/repl_setup/references/vue.md` - Vue.js setup

## Frontend-Backend Connectivity

When your frontend calls a local backend API:

1. **Get the public domain**: Run `env | grep DOMAIN` in the shell to get the website's public URL
2. **Use the public URL**: Replace any `localhost` references with the public domain
3. **Never use localhost**: You're in a cloud environment - the user cannot access your localhost

```bash
# Get the public domain for API calls
env | grep DOMAIN
```

## Debugging Visibility Issues

If the user reports they cannot see your changes:

1. **Check workflow status**: Ensure the workflow is running and has been restarted after changes
2. **Read console logs**: Check for errors and follow any instructions in the logs
3. **Verify host configuration**: Confirm the framework's dev config allows all hosts (most common issue)
4. **Cache control** (rare): If above checks pass, the issue may be caching
   - Modify webserver code to disable cache storage
   - Instruct user to use "empty cache and hard refresh" in developer tools

## Workflow Setup Order

Always set up frontend workflows first, then backend services. After completing any task:

1. Re-run the workflows to ensure they're running
2. Read the console logs to verify no errors
3. Take a screenshot to confirm the frontend is visible

## Best Practices

1. **Verify host config early**: Check framework-specific allowedHosts before writing any code
2. **Test visibility immediately**: After setup, verify the user can see the preview
3. **Use public URLs**: Never hardcode localhost in frontend code
4. **Restart after changes**: Server-side changes require workflow restart
5. **Check logs first**: Console logs often reveal the root cause of issues
