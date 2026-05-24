---
name: media-generation
description: "Generate and retrieve media including AI-generated images and stock images. Use this skill for visual content creation and retrieval. For AI video clips, read `media-generation/video_generation.md`"
---

# Media Generation Skill

Generate custom images, and retrieve stock images.

## Available Functions

### generateImage(images, ...)

Generate custom images from text descriptions. Waits for generation to complete before returning.

**Parameters:**

- `images` (list, **required**): A list of image request objects. **This wrapper is always required — even for a single image, pass `images: [{ ... }]`**. Up to 10 images can be generated in a single call. Each dict should have:
  - `prompt` (required): Text description of the desired image
  - `outputPath`: File path **must end in `.png`** — this is the only accepted format. `.jpg`, `.jpeg`, `.webp`, and other extensions will cause an error. Defaults to `attached_assets/generated_images/{summary}.png`
  - `aspectRatio`: Optional, defaults to "1:1". Options: "1:1", "3:4", "4:3", "9:16", "16:9"
  - `negativePrompt`: Optional, description of what should NOT appear
  - `summary`: Optional, short 4-5 word description for default filename
  - `removeBackground`: Optional, defaults to False
- `overwrite` (bool, default True): Whether to overwrite existing files

**Returns:** Dict with `images` list (each with `filePath` and `description`) and optional `failures` list

**Common Mistakes:**

```javascript
// WRONG — flat params without images array (causes "images field required" error)
await generateImage({ prompt: "A mountain landscape", outputPath: "hero.png" });

// CORRECT — always wrap in images: [...], even for a single image
await generateImage({ images: [{ prompt: "A mountain landscape", outputPath: "hero.png" }] });

// WRONG — .jpg extension is not supported (causes "outputPath must end with .png" error)
await generateImage({ images: [{ prompt: "A cityscape", outputPath: "city.jpg" }] });

// CORRECT — only .png is accepted
await generateImage({ images: [{ prompt: "A cityscape", outputPath: "city.png" }] });
```

**Examples:**

```javascript
// Single image
const result = await generateImage({
    images: [
        {
            prompt: "A serene mountain landscape at sunset with snow-capped peaks",
            outputPath: "src/assets/images/hero.png",
            aspectRatio: "16:9",
            negativePrompt: "blurry, low quality",
        }
    ]
});
console.log(`Image saved to: ${result.images[0].filePath}`);

// Multiple images at once
const result = await generateImage({
    images: [
        { prompt: "A red apple", outputPath: "assets/apple.png" },
        { prompt: "A yellow banana", outputPath: "assets/banana.png" },
        { prompt: "An orange", outputPath: "assets/orange.png", removeBackground: true },
    ]
});
for (const img of result.images) {
    console.log(`Generated: ${img.filePath}`);
}
```

### generateImageAsync(images, ...)

Generate images asynchronously. Returns immediately with a workflow ID. Same parameters as `generateImage`.

**Returns:** Dict with `workflowId`, `workflowAlias`, `status`, and `imagePaths`

**Example:**

```javascript
const result = await generateImageAsync({
    images: [
        { prompt: "A complex detailed illustration", outputPath: "assets/illustration.png" },
    ]
});
console.log(`Started workflow: ${result.workflowAlias}`);
console.log(`Images will be saved to: ${result.imagePaths}`);
```

### stockImage(description, ...)

Retrieve stock images matching a description.

**Parameters:**

- `description` (str, required): Text description of desired stock image(s)
- `summary` (str, default "stock_image"): Short description for the filename
- `limit` (int, default 1): Number of images to retrieve (1-10)
- `orientation` (str, default "horizontal"): "horizontal", "vertical", or "all"

**Returns:** Dict with `filePaths` list and `query` string

**Example:**

```javascript
const result = await stockImage({
    description: "modern office with natural lighting",
    summary: "office background",
    limit: 3,
    orientation: "horizontal"
});
for (const path of result.filePaths) {
    console.log(`Stock image saved to: ${path}`);
}
```

## When to Use Each Function

### generateImage / generateImageAsync

- Custom illustrations or graphics not available elsewhere
- Specific visual concepts or designs
- Placeholder images for development
- Creative or artistic content
- Use `generateImageAsync` when images are not needed immediately

### stockImage

- Professional photography
- Real-world scenes and people
- Business and corporate imagery
- When authenticity is more important than customization

## Aspect Ratio Guidelines

### Images

- **1:1** - Square, good for profile pictures, thumbnails, icons
- **3:4** - Portrait, good for mobile screens, product images
- **4:3** - Landscape, good for presentations, desktop displays
- **9:16** - Vertical, good for mobile stories, tall banners
- **16:9** - Widescreen, good for hero images, video thumbnails

## Best Practices

1. **Write detailed prompts**: Include style, mood, lighting, colors, and composition
2. **Use negative prompts**: Exclude unwanted elements like "blurry", "watermark", "text"
3. **Choose appropriate formats**: Match aspect ratio and media type to intended use
4. **Consider stock for realism**: Use stock images when you need authentic photography
5. **Do not over generate**: Only generate multiple images when the user explicitly asks.

## Output Locations

- Generated images: `attached_assets/generated_images/`
- Stock images: `attached_assets/stock_images/`

## Limitations

- Stock image availability depends on the search query
- Complex or highly specific prompts may not match exactly
- Text in generated media is not reliably rendered

## Copyright

- Use this skill to create media assets instead of copying from websites
- Generated images are created for your use
- Stock images are licensed for use in your projects
- Do not download or copy media files from external websites
