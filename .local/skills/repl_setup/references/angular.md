# Angular Setup

Configuration requirements for Angular applications in the Replit environment.

## Mandatory Setup Steps

### 1. Disable Analytics

Angular CLI analytics must be disabled during setup. Use the `--disable-analytics` flag or set it in configuration:

```bash
ng analytics off
```

### 2. Configure allowedHosts

Set `allowedHosts: true` in `angular.json` to allow the Replit proxy to access your dev server:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "serve": {
          "options": {
            "allowedHosts": true,
            "host": "0.0.0.0",
            "port": 5000
          }
        }
      }
    }
  }
}
```

### 3. Use Non-Interactive Commands

Never use interactive Angular CLI tools. Always use command-line flags instead:

```bash
# Good - non-interactive
ng generate component my-component --skip-tests --standalone

# Bad - interactive (will hang)
ng generate component
```

## Common Flags

| Flag | Purpose |
|------|---------|
| `--skip-tests` | Skip test file generation |
| `--standalone` | Create standalone component |
| `--inline-style` | Use inline styles |
| `--inline-template` | Use inline template |
| `--style=css` | Specify style format |

## Workflow Configuration

```bash
ng serve --host 0.0.0.0 --port 5000 --disable-host-check
```

Or configure in `angular.json`:

```json
{
  "serve": {
    "options": {
      "host": "0.0.0.0",
      "port": 5000,
      "disableHostCheck": true
    }
  }
}
```

## Troubleshooting

### User Cannot See the Application

1. Verify `allowedHosts: true` is set in `angular.json`
2. Ensure the server is bound to `0.0.0.0` not `localhost`
3. Check that port 5000 is being used
4. Restart the workflow after configuration changes

### CLI Commands Hang

You're using an interactive command. Add the necessary flags to make it non-interactive:

```bash
# Instead of interactive prompts
ng new my-app --routing --style=css --skip-git --skip-tests
```

### Build Errors After Setup

Check console logs for specific errors. Common issues:

- Missing peer dependencies
- Version mismatches between Angular packages
- TypeScript configuration issues
