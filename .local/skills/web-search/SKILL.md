---
name: web-search
description: Search the web, fetch content, extract branding profiles, and capture screenshots from URLs. Use for real-time information, API documentation, current events, design matching, and visual reference.
---

# Web Search Skill

## When to Use

- Real-time information (news, prices, events)
- Looking up API documentation or SDK guides
- Current technical information beyond training data
- Verifying facts from authoritative sources

## When NOT to Use

- Replit-specific features (use the `replit-docs` skill)
- Searching for real web images or logo files (use the `image-search` skill)
- Image or video generation (use the `media-generation` skill)
- Code search within the project (use grep/glob tools)

## Available Functions

### Single web search — webSearch(query)

**Parameters:**

- `query` (str, required): Natural language search query phrased as a complete question

**Returns:** Dict with `searchAnswer` and `resultPages` (list of title/url/snippet dicts)

**Example:**

```javascript
const results = await webSearch({ query: "OpenAI API rate limits 2026" });
for (const page of results.resultPages) {
    console.log(`${page.title}: ${page.url}`);
}
```

### Multiple web searches — webSearch({ queries })

Run multiple searches concurrently (max 10).

**Parameters:**

- `queries` (list[str]): List of natural language search queries phrased as complete questions

**Returns:** List of result dicts, each with `searchAnswer` and `resultPages` (list of title/url/snippet dicts)

**Example:**

```javascript
const results = await webSearch({
    queries: ["OpenAI API rate limits 2026", "Anthropic API rate limits 2026"]
});
```

### webFetch(url)

Fetch and extract content from a URL as markdown.

**Parameters:**

- `url` (str, required): Full HTTPS URL to fetch

**Returns:** Dict with `markdown` key containing page content

**Example:**

```javascript
const content = await webFetch({ url: "https://platform.openai.com/docs/guides/rate-limits" });
console.log(content.markdown.slice(0, 1000));
```

## Best Practices

1. **Use natural language queries**: write queries as complete questions with context.
2. **Chain search and fetch**: search first, then fetch specific pages for details.
3. **Be specific**: include dates, versions, or other specifics in queries.
4. **Verify with fetch**: don't rely only on search snippets for critical information.
5. **Use branding for design matching**: when replicating a site's visual style, use `extractBranding` to get exact colors, fonts, and spacing.
6. **Use screenshot for visual reference**: when you need to see what a site looks like before replicating its design.

## Example Workflow

```javascript
// Find information about a topic
const searchResult = await webSearch({ query: "FastAPI dependency injection tutorial 2026" });

// Get full content from the most relevant result
if (searchResult.resultPages.length > 0) {
    const bestUrl = searchResult.resultPages[0].url;
    const fullContent = await webFetch({ url: bestUrl });
    console.log(fullContent.markdown);
}
```

## Limitations

- Cannot access social media platforms (LinkedIn, Twitter, Instagram, Facebook, Reddit, YouTube)
- Cannot download media files (images, videos, audio)
- Paywalled or authenticated content may be inaccessible

## Copyright

- Respect copyright for media content from websites.
- You can reference or link to public content.
- Do not copy media files (images, videos, audio) directly from websites.
- Use the `media-generation` skill for images and videos instead.
