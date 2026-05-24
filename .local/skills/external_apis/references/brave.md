# Brave

Proxy requests to Brave via Replit-managed billing.

## Callback

Use `externalApi__brave` in `code_execution`.

## Allowed operations

- `GET` `/res/v1/images/search/*?` - Brave Image Search

Authorization is handled automatically by Replit. Do not pass an `Authorization` header.

## Skill

## Brave image search

Search real web image results through Brave passthrough billing.

### When to use

- The user asks for real-world images from the web
- You need image URLs to support analysis, reports, or artifacts

---

## Callback quickstart

Use `externalApi__brave` with this allowed operation:

- `GET /res/v1/images/search`

Put URL params in `query`.

```javascript
const result = await externalApi__brave({
  path: '/res/v1/images/search',
  method: 'GET',
  query: {q: 'vintage travel posters', count: '6'},
})

const items = result.body?.results ?? []
for (const item of items) {
  console.log(item.title, item.properties?.url)
}
```

Common response paths:

- Image URL: `body.results[i].properties.url`
- Title: `body.results[i].title`

Authorization is managed by passthrough billing. Do not set an
`Authorization` header manually.

---

## Render Brave images in chat

For chat panel rendering, use the `media-generation` skill flow:

1. Select up to 4 relevant results
2. Download each URL to `attached_assets/brave_images/`
3. Call `presentAsset({awaitUserInput: false})` for each saved file

```javascript
const fs = await import('node:fs/promises')
const path = await import('node:path')

const result = await externalApi__brave({
  path: '/res/v1/images/search',
  method: 'GET',
  query: {q: 'mid-century chair', count: '4'},
})

const items = (result.body?.results ?? []).slice(0, 4)
await fs.mkdir('attached_assets/brave_images', {recursive: true})

for (const [index, item] of items.entries()) {
  const imageUrl = item.properties?.url
  if (!imageUrl) continue

  const response = await fetch(imageUrl)
  if (!response.ok) continue

  const filePath = path.join(
    'attached_assets/brave_images',
    'result_' + String(index + 1) + '.jpg',
  )

  await fs.writeFile(
    filePath,
    Buffer.from(await response.arrayBuffer()),
  )

  await presentAsset({
    filePath,
    title: item.title ?? 'Brave image',
    awaitUserInput: false,
  })
}
```

## Example

```javascript
const result = await externalApi__brave({
  path: '/res/v1/images/search/*?',
  method: 'GET',
  query: {},
})

console.log(result.status)
console.log(result.body)
```
