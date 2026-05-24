# Deployment Logs Reference

Fetch and analyze deployment logs to debug runtime issues and monitor your deployed application.

## When to Read This Reference

Read this when:

- The user reports that their deployed application is not working correctly
- The user wants to see what errors are occurring in production
- The user needs to debug a runtime issue after deployment
- The user asks to check deployment or server logs
- The user wants to monitor application behavior after deployment

## How to Use

In the JavaScript notebook, call the `fetchDeploymentLogs` function:

```javascript
const result = await fetchDeploymentLogs({
    afterTimestamp: (Date.now() - 3600 * 1000),  // Last hour
    message: "ERROR"
});
if (result.found) {
    console.log(result.logs);
} else {
    console.log("No deployment logs found.");
}
```

## Parameters

- `afterTimestamp` (float, optional): Only include logs after this Unix timestamp (milliseconds)
- `beforeTimestamp` (float, optional): Only include logs before this Unix timestamp (milliseconds)
- `message` (str, optional): RE2 regular expression to filter logs by message content
- `messageContext` (dict, optional): Context configuration for regex matches with:
  - `lines` (int, required): Number of lines before/after each match (0-100)
  - `limit` (int, required): Max matches to fetch context for (1-10)

## Return Value

Returns a dictionary with:

- `logs`: String containing the formatted deployment logs (empty string if none found)
- `found`: Boolean indicating whether any logs were found
- `message`: Optional message when no logs are found

## Best Practices

1. **Start broad, then filter**: First fetch logs without filters to understand what's available, then use `message` regex to narrow down
2. **Use timestamps for recent issues**: If the user reports a recent issue, use `afterTimestamp` to focus on recent logs
3. **Filter by log level**: Use message regex like `"ERROR"` or `"WARN"` to find problematic entries
4. **Look for patterns**: Search for specific error messages, stack traces, or module names
5. **Use context for debugging**: When investigating specific errors, use `messageContext` to see surrounding log lines (similar to `rg -C`)

## Examples

### Fetch All Recent Logs

```javascript
const result = await fetchDeploymentLogs();
console.log(result.logs);
```

### Fetch Logs from Last Hour

```javascript
const oneHourAgo = Date.now() - 3600 * 1000;  // Convert to milliseconds
const result = await fetchDeploymentLogs({ afterTimestamp: oneHourAgo });
if (result.found) {
    console.log(result.logs);
}
```

### Find Error Logs

```javascript
const result = await fetchDeploymentLogs({ message: "ERROR" });
if (result.found) {
    console.log(result.logs);
} else {
    console.log("No error logs found");
}
```

### Find Database-Related Errors

```javascript
const result = await fetchDeploymentLogs({
    message: "(?i)(database|postgres|mysql|mongo|connection.*refused)"
});
console.log(result.logs);
```

### Find Startup Failures

```javascript
const result = await fetchDeploymentLogs({
    message: "(?i)(failed|crash|exception|traceback)"
});
console.log(result.logs);
```

### Find Errors with Context Lines

```javascript
// Get 10 lines of context before/after each error (up to 3 matches)
const result = await fetchDeploymentLogs({
    message: "ERROR",
    messageContext: { lines: 10, limit: 3 }
});
if (result.found) {
    console.log(result.logs);
}
```

### Combined Time and Pattern Filter

```javascript
// Get logs from the last 30 minutes containing errors
const thirtyMinAgo = Date.now() - 1800 * 1000;
const result = await fetchDeploymentLogs({
    afterTimestamp: thirtyMinAgo,
    message: "(?i)(error|exception|failed)"
});
if (result.found) {
    console.log(result.logs);
} else {
    console.log("No matching logs in the last 30 minutes");
}
```

## Common Log Patterns to Search For

- **Any errors**: `"ERROR"`
- **Warnings and errors**: `"(WARN|ERROR)"`
- **Database issues**: `"(?i)database|postgres|mysql|connection"`
- **Network errors**: `"(?i)timeout|refused|unreachable"`
- **Authentication**: `"(?i)auth|token|unauthorized|forbidden"`
- **Memory issues**: `"(?i)memory|heap|oom|killed"`
- **Import/module errors**: `"(?i)import|module|cannot find"`

## Troubleshooting Tips

1. **No logs returned**: The deployment may not have run recently, or there may be no logs matching your filter
2. **Too many logs**: Use the `message` parameter to filter, or narrow the time range
3. **Looking for specific errors**: Use case-insensitive regex with `(?i)` prefix
