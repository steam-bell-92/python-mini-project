# Exa

Proxy requests to Exa via Replit-managed billing.

## Callback

Use `externalApi__exa` in `code_execution`.

## Allowed operations

- `POST` `/search` - Web search (auto, neural, fast, deep, deep-reasoning).
- `POST` `/contents` - Page contents retrieval (text, highlights, summary, subpages, livecrawl).
- `POST` `/findSimilar` - Find similar links by URL similarity (optional contents pulldown).
- `POST` `/answer` - Web-grounded answer (with optional SSE streaming).

Authorization is handled automatically by Replit. Do not pass an `Authorization` header.

## Quickstart

1. Call the callback with a supported `path` and `method`.
2. Put URL params in `query` and inspect `result.body`.

## Example

```javascript
const result = await externalApi__exa({
  path: '/search',
  method: 'POST',
  query: {},
})

console.log(result.status)
console.log(result.body)
```
