---
name: replit-docs
description: Search Replit documentation for platform features, pricing, deployments, and capabilities.
---

# Replit Docs Skill

Search Replit documentation to find information about features, pricing, deployments, and platform capabilities.

## When to Use

Use this skill when:

- You need information about Replit platform features
- Looking up pricing details for plans and services
- Getting deployment guidance for applications
- Understanding platform capabilities and limitations
- Finding solutions to common platform issues
- Learning best practices for development on Replit

## When NOT to Use

- Integration setup (use integrations skill first, then docs for additional context)
- Code debugging (use code analysis tools)
- Real-time status or outages (documentation may be outdated)
- Account-specific issues
- General programming questions not related to Replit

## Available Functions

### searchReplitDocs(query)

Search Replit documentation for platform information.

**Parameters:**

- `query` (str, required): Natural language question about Replit features, pricing, or capabilities

**Returns:** Dict with `response` and `relevantPages` (list of title/url dicts)

**Example:**

```javascript
// Get pricing information
const result = await searchReplitDocs({ query: "How much does Core cost?" });
console.log(result.response);
for (const page of result.relevantPages) {
    console.log(`${page.title}: ${page.url}`);
}

// Learn about deployments
const result = await searchReplitDocs({ query: "How do I deploy a web app?" });
console.log(result.response);
```

## Best Practices

1. **Use natural language**: Write queries as complete questions with context
2. **Be specific**: Include specific feature names or topics in queries
3. **Check integrations first**: For setup instructions, search integrations first, then use docs for additional context
4. **Verify with sources**: Check the relevant pages returned for authoritative information

## Example Workflow

```javascript
// User asks about object storage pricing
const result = await searchReplitDocs({ query: "How much does Replit object storage cost?" });
console.log(result.response);

// Provide relevant documentation links
for (const page of result.relevantPages) {
    console.log(`- ${page.title}: ${page.url}`);
}
```

## Limitations

- Documentation may not reflect real-time service status
- Cannot answer account-specific questions
- For integration setup, prefer the integrations skill
- General programming questions should use web search instead
