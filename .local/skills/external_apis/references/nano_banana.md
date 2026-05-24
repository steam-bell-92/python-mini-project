# Nano Banana

Proxy requests to Nano Banana via Replit-managed billing.

## Callback

Use `externalApi__nano_banana` in `code_execution`.

## Allowed operations

- `POST` `/gemini-3.1-flash-image-preview:generateContent` - Generate image (Nano Banana 2 / Flash)
- `POST` `/gemini-3-pro-image-preview:generateContent` - Generate image (Nano Banana Pro)
- `POST` `/gemini-2.5-flash-image:generateContent` - Generate or edit image (Nano Banana v1)

Authorization is handled automatically by Replit. Do not pass an `Authorization` header.

## Quickstart

1. Call the callback with a supported `path` and `method`.
2. Put URL params in `query` and inspect `result.body`.

## Example

```javascript
const result = await externalApi__nano_banana({
  path: '/gemini-3.1-flash-image-preview:generateContent',
  method: 'POST',
  query: {},
})

console.log(result.status)
console.log(result.body)
```
