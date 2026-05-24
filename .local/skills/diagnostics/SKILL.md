---
name: diagnostics
description: Access LSP diagnostics and suggest project rollback. Use for debugging static errors and helping users revert changes.
---

# Diagnostics Skill

Tools for debugging code issues and managing project state.

## When to Use

Use this skill when:

- Checking for syntax errors, type errors, or import issues after code changes
- User wants to undo changes or revert to a previous state
- Debugging static errors detected by the language server

## When NOT to Use

- Runtime errors or logic bugs (use logs and debugging)
- Small changes that don't need LSP validation
- Code search (use grep/glob tools)

## Available Functions

### getLatestLspDiagnostics(filePath=None)

Retrieve LSP diagnostics - syntax errors, type errors, and code issues.

**Parameters:**

- `filePath` (str, optional): File path to check. If omitted, checks all files with errors.

**Returns:** Dict with `diagnostics` (file paths to error lists) and `filePath` (filter used)

**Example:**

```javascript
// Check specific file after editing
const result = await getLatestLspDiagnostics({ filePath: "src/auth.ts" });
for (const [path, errors] of Object.entries(result.diagnostics)) {
    for (const error of errors) {
        console.log(`Line ${error.startLine}: ${error.message}`);
    }
}

// Check all files for errors
const allErrors = await getLatestLspDiagnostics();
console.log(`Files with errors: ${Object.keys(allErrors.diagnostics)}`);
```

**When to check LSP:**

- After refactoring >100 lines of code
- User reports "errors" or "something's not working"
- After adding imports or dependencies
- Before completing a task with >100 lines of changes

**Skip LSP when:**

- Making small changes (<10 lines)
- Adding comments or documentation
- Debugging runtime errors (LSP won't show these)

### suggestRollback(reason)

Suggest rolling back to a previous checkpoint.

**Parameters:**

- `reason` (str, required): Short, non-technical explanation for why rollback is suggested

**Returns:** Dict with `success`, `message`, and `reason`

**Example:**

```javascript
await suggestRollback({ reason: "The changes caused unexpected errors across multiple files" });
```

**Use when user expresses intent to:**

- Undo changes: "can you undo what you just did?", "revert the last changes"
- Restore previous version: "roll back", "go back to how it was yesterday"
- Fix major error: "you deleted my database!", "everything is broken"
- Try different approach: "take a completely different approach", "start over"

**Important:**

- This does NOT perform the rollback - it shows a "View Checkpoints" button
- After calling, direct the user to click the button that appears
- This pauses the agent to wait for user response

## Best Practices

1. **Check LSP after significant changes**: Large refactors, new features, or when user reports errors
2. **Use filePath parameter**: When checking a specific file you just edited
3. **Suggest rollback carefully**: Only when user clearly wants to undo or revert

## Example Workflows

### Debugging after refactoring

```javascript
// After making code changes
const errors = await getLatestLspDiagnostics({ filePath: "src/services/user.ts" });
if (Object.keys(errors.diagnostics).length > 0) {
    // Fix each error
    for (const [path, diags] of Object.entries(errors.diagnostics)) {
        for (const diag of diags) {
            console.log(`Fix: ${diag.rendered}`);
        }
    }
}
```

### Helping user undo changes

```javascript
// User: "Everything broke, can you undo this?"
await suggestRollback({ reason: "Recent changes caused errors. Click View Checkpoints to restore a working version." });
```
