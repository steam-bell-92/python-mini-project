# Video Generation

## Available Functions

### generateVideo(prompt, ...)

Generate short video clips from text descriptions.

**Parameters:**

- `prompt` (str, required): Detailed text description of the desired video
- `summary` (str, default "generated_video"): Short description for the filename
- `aspectRatio` (str, default "16:9"): "16:9" (landscape) or "9:16" (portrait)
- `resolution` (str, default "720p"): "720p" or "1080p"
- `durationSeconds` (int, default 6): 4, 6, or 8 seconds
- `negativePrompt` (str, optional): Description of what should NOT appear
- `personGeneration` (str, optional): "dont_allow" or "allow_adult" for controlling people

**Returns:** Dict with `filePath` and `description` keys

**Example:**

```javascript
const result = await generateVideo({
    prompt: "A cat playing with a ball of yarn, cute and playful, natural lighting",
    summary: "playful cat",
    aspectRatio: "16:9",
    durationSeconds: 6
});
console.log(`Video saved to: ${result.filePath}`);
```

### generateVideoAsync(prompt, ...)

Generate a video asynchronously. Returns immediately with a workflow ID. Same parameters as `generateVideo`.

**Returns:** Dict with `workflowId`, `workflowAlias`, `status`, and `videoPath`

**Example:**

```javascript
const result = await generateVideoAsync({
    prompt: "A cat playing with a ball of yarn, cute and playful, natural lighting",
    summary: "playful cat",
    aspectRatio: "16:9",
    durationSeconds: 6
});
console.log(`Started workflow: ${result.workflowAlias}`);
console.log(`Video will be saved to: ${result.videoPath}`);

// Later, wait for completion
await wait_for_background_tasks({ wait_mode: "all" });
```

## When to Use Each Function

### generateVideo / generateVideoAsync

- Use `generateVideoAsync` when the video is not needed immediately
- Short animated clips or motion graphics
- Video backgrounds or visual effects
- Product animations or demonstrations
- Social media video content

## Aspect Ratio Guidelines

### Videos

- **16:9** - Widescreen landscape, good for web videos, presentations
- **9:16** - Vertical portrait, good for mobile stories, social media shorts

## Output Locations

- Generated videos: `attached_assets/generated_videos/`

## Limitations

- Generated videos: 8 seconds maximum

## Copyright

- Generated videos are created for your use
