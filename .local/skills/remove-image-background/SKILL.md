---
name: remove-image-background
description: Remove backgrounds from existing images, producing transparent PNG files.
---

# Remove Image Background Skill

Remove the background from an existing image file in the project, producing a transparent PNG.

## Available Functions

### removeImageBackground(imagePath, ...)

Remove the background from an existing image file.

**Parameters:**

- `imagePath` (str, required): Path to the input image file
- `outputPath` (str, optional): Path to save the result PNG. Defaults to replacing the extension with `_no_bg.png`

**Returns:** Dict with `outputPath` key containing the path to the saved result

**Example:**

```javascript
const result = await removeImageBackground({
    imagePath: "attached_assets/photo.jpg",
    outputPath: "attached_assets/photo_no_bg.png"
});
console.log(`Result saved to: ${result.outputPath}`);
```

## When to Use

- User has an existing image and wants its background removed
- User uploads a photo and asks to make the background transparent
- Creating transparent versions of logos, product photos, or portraits
- Preparing images for compositing or overlay on other backgrounds

## Best Practices

1. **Output must be PNG**: The output file must have a `.png` extension since transparency requires PNG format
2. **Use default output path when possible**: Omit `outputPath` to automatically save as `<original_name>_no_bg.png`
3. **Supported input formats**: Works with common image formats (PNG, JPG, JPEG, WebP, etc.)

## Output Location

- Default output: Same directory as input, with `_no_bg.png` suffix
- Custom output: Any path ending in `.png`

## Limitations

- Output format is always PNG (required for transparency)
- Very complex backgrounds or low-contrast edges may not be perfectly removed
- Works best with clear foreground subjects (people, objects, logos)
