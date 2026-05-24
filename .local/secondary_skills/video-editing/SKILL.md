---
name: video-editing
description: Edit video files with FFmpeg — trim, merge, add subtitles, effects, voiceovers, and reformat.
---

# Video Editing

Edit existing video files server-side using FFmpeg. This skill covers the full editing workflow: trimming, splicing, concatenating, transitions, text overlays, subtitles, audio mixing, effects, and format conversion.

## When to Use

### Trimming & Cutting

- "Trim this video to 0:30-1:15" / "Cut out the first 10 seconds"
- "Extract a clip from 2:00 to 3:30"

- "Remove the intro" / "Cut the ending"

#### Merging & Compositing

- "Merge these clips together" / "Concatenate these videos"
- "Put two videos side by side" / "Split screen"

- "Picture-in-picture"

##### Text, Titles & Subtitles

- "Add subtitles" / "Add captions"
- "Put a title card at the beginning"

- "Add text overlay"

###### Audio

- "Add background music" / "Mix in this audio track"
- "Add a voiceover" / "Narrate this video" (uses ElevenLabs)

- "Mute this video" / "Remove the audio"
- "Replace the audio with this track"

###### Speed & Motion

- "Speed up this video 2x" / "Slow motion"
- "Make this part slow-mo"

- "Reverse this clip"
- "Loop this clip 3 times"

###### Visual Effects & Fixes

- "Rotate this video 90 degrees" / "Flip horizontally"
- "Stabilize this shaky footage"

- "Crop out the watermark" / "Remove the watermark"
- "Add my logo to this video" (image overlay / branding)

- "Color correct" / "Make it brighter" / "Adjust contrast"

###### Format & Size

- "Convert this MP4 to WebM" / "Change format"
- "Compress this video" / "Make this file smaller"

- "Resize to 720p" / "Downscale" / "Change resolution"
- "Extract the audio as MP3"

- "Create a GIF from this clip"
- "Make a thumbnail from this video" (frame extraction as image)

###### Social Media & Platform

- "Make TikTok clips from this" / "Break this into Reels"
- "Make this vertical for Shorts"

- "Reframe for Instagram" / "LinkedIn" / "Pinterest" / "Facebook" / "Snapchat"
- "Convert this to square for Instagram feed"

###### AI-Powered Analysis

- "Find the best moments" / "Auto-trim for virality"
- "Extract the highlights" / "Score these clips"

- "Which parts are most engaging?"

###### Cleanup & Optimization

- "Remove dead space" / "Remove silence"
- "Shorten this by cutting out boring parts"

- "Tighten up this video"

###### Chunking & Splitting

- "Split this into short clips" / "Chunk this for TikTok"
- "Break this talk into Reels-length videos"

- "Make 15-second clips from this"

###### No Direction (user just uploads a video)

- Probe the file, report what it is, and ask what they want to do

## When NOT to Use

- User wants to create an animated video from scratch using code (use the `video-js` skill instead)
- User wants a browser-based video editor UI (build as a `react-vite` artifact with this skill powering the backend)

## User Interaction — ALWAYS Ask Before Acting

**When a user uploads a video without specific instructions, you MUST ask what they want to do with it.** Do NOT assume a workflow or start processing automatically.

Probe the video first (to report basic info), then ask the user what they'd like. Here's a good pattern:

1. Probe the file and tell the user what they uploaded (duration, resolution, format)
2. Ask what they want to do. Offer common options like:

- Trim or cut specific sections
- Find the best/most viral moments

- Break it into short clips for a specific platform (TikTok, Reels, Shorts, X)
- Remove dead space / silence

- Add text, subtitles, or a voiceover
- Reframe for a different aspect ratio

- Convert to a different format
- Something else

**When the user specifies a platform, the full pipeline includes reframing to that platform's native format.** Do not just chunk the video and leave it in the original aspect ratio. Always deliver platform-ready output — correct aspect ratio, resolution, and duration range.

### Platform Specifications

| Platform | Aspect Ratio | Resolution | Duration Range | Ideal Length | Max File Size |

|----------|-------------|------------|---------------|-------------|--------------|

| **TikTok** | 9:16 vertical | 1080×1920 | 10–45s | 25s | 287 MB |

| **Instagram Reels** | 9:16 vertical | 1080×1920 | 10–30s | 20s | 250 MB |

| **Instagram Stories** | 9:16 vertical | 1080×1920 | 1–60s | 15s | 250 MB |

| **Instagram Feed** | 1:1 square or 4:5 portrait | 1080×1080 or 1080×1350 | 3–60s | 30s | 250 MB |

| **YouTube Shorts** | 9:16 vertical | 1080×1920 | 15–60s | 40s | 256 MB |

| **YouTube (standard)** | 16:9 landscape | 1920×1080 | any | any | 256 GB |

| **X / Twitter** | 16:9 landscape | 1280×720 | 10–45s | 25s | 512 MB |

| **X / Twitter (square)** | 1:1 square | 720×720 | 10–45s | 25s | 512 MB |

| **Facebook Reels** | 9:16 vertical | 1080×1920 | 10–30s | 20s | 250 MB |

| **Facebook Feed** | 16:9 or 1:1 | 1920×1080 or 1080×1080 | any | 15–60s | 4 GB |

| **LinkedIn** | 16:9 landscape or 1:1 | 1920×1080 or 1080×1080 | 10–60s | 30s | 5 GB |

| **Pinterest** | 9:16 or 2:3 vertical | 1080×1920 or 1000×1500 | 6–60s | 15–30s | 2 GB |

| **Snapchat Spotlight** | 9:16 vertical | 1080×1920 | 5–60s | 15–30s | 250 MB |

**When the user says a platform name, apply both the correct duration targets AND the correct aspect ratio/resolution.** For example:

- "Make TikTok clips" → chunk to 10-45s AND reframe to 9:16 (1080×1920)
- "Instagram feed posts" → chunk to 3-60s AND reframe to 1:1 (1080×1080) or 4:5 (1080×1350)

- "YouTube Shorts" → chunk to 15-60s AND reframe to 9:16 (1080×1920)
- "Clips for X" → chunk to 10-45s, keep 16:9 (1280×720)

**When the user asks for clips or chunking without specifying a platform, ask which platform they're targeting** so you can apply the right duration targets and reframing.

**When you deliver results, always present the output files** so the user can download and preview them. Never just describe what was done — show the files.

## Environment

FFmpeg 6.1.2 is pre-installed in Replit with full codec support:

- **Video codecs:** H.264 (libx264), H.265 (libx265), VP8/VP9 (libvpx), AV1 (libaom, libsvtav1, librav1e), Theora
- **Audio codecs:** AAC, MP3 (libmp3lame), Opus, Vorbis, FLAC, WAV

- **Image formats:** PNG, JPEG, WebP, JPEG XL (libjxl)
- **Subtitle rendering:** libass (for styled subtitles), libfreetype + libfontconfig (for drawtext)

- **Filters:** All standard filters available — scale, crop, overlay, drawtext, concat, fade, crossfade, etc.
- **Tools:** `ffmpeg`,`ffprobe` (both available on PATH)

No additional installation is needed for FFmpeg itself.

## Architecture Decisions

### Script-based editing (simple tasks)

For one-off or single-operation tasks (trim a clip, convert a format, extract audio), write a Node.js script in `scripts/src/`using`fluent-ffmpeg`or direct`child_process.execFile` calls to FFmpeg.

```bash

pnpm --filter @workspace/scripts add fluent-ffmpeg

pnpm --filter @workspace/scripts add -D @types/fluent-ffmpeg

```

### API-based editing (complex workflows or UI)

For multi-step editing workflows or when building a video editor UI, add routes to the API server (`artifacts/api-server/`) that accept video files, process them with FFmpeg, and return results.

```bash

pnpm --filter @workspace/api-server add fluent-ffmpeg multer

pnpm --filter @workspace/api-server add -D @types/fluent-ffmpeg @types/multer

```

### Choosing the right approach

| Scenario | Approach |

|----------|----------|

| "Trim this video to 0:30-1:15" | Script in `scripts/src/` |

| "Convert this MP4 to WebM" | Script in `scripts/src/` |

| "Build me a video editor app" | React-vite artifact + API routes |

| "Add subtitles to all my videos" | Script in `scripts/src/` |

| "Merge these 5 clips with transitions" | Script in `scripts/src/` (or API if repeated) |

## Instructions

### 1. Probe Before Processing

Always probe the input file first to understand its properties. This prevents errors from wrong assumptions about codecs, resolution, frame rate, or duration.

```typescript

import { execFile } from 'child_process';

import { promisify } from 'util';

const execFileAsync = promisify(execFile);

async function probeVideo(filePath: string) {

const { stdout } = await execFileAsync('ffprobe', [

'-v', 'quiet',

'-print_format', 'json',

'-show_format',

'-show_streams',

filePath

]);

return JSON.parse(stdout);

}

```

### 2. Use fluent-ffmpeg for Complex Operations

fluent-ffmpeg provides a chainable API that is easier to maintain than raw command strings. Use it for multi-step operations.

```typescript

import ffmpeg from 'fluent-ffmpeg';

function trimVideo(input: string, output: string, start: string, duration: string): Promise<void> {

return new Promise((resolve, reject) => {

ffmpeg(input)

.setStartTime(start)

.setDuration(duration)

.output(output)

.on('end', resolve)

.on('error', reject)

.run();

});

}

```

### 3. Use execFile for Simple One-Liners

For straightforward operations where the FFmpeg command is well-known, calling FFmpeg directly is cleaner.

```typescript

await execFileAsync('ffmpeg', [

'-i', inputPath,

'-vf', 'scale=1280:720',

'-c:a', 'copy',

outputPath

]);

```

### 4. File Management

- Store uploaded/input files in a `tmp/`or`uploads/` directory
- Store output files where the user can access them — either `public/` for web serving or a known output directory

- Clean up temporary files after processing
- For large files, stream the output rather than buffering in memory

### 5. Progress Reporting

FFmpeg outputs progress to stderr. Parse it for progress reporting in longer operations:

```typescript

ffmpeg(input)

.output(output)

.on('progress', (progress) => {

console.log(`Processing: ${progress.percent?.toFixed(1)}% done`);

})

.on('end', () => console.log('Done'))

.run();

```

### 6. Error Handling

FFmpeg errors are often cryptic. Always:

- Log the full stderr output on failure
- Validate input files exist before processing

- Check that output codecs are compatible with the output container
- Use `-y` flag to overwrite output files without prompting

## AI-Powered Virality Scoring

Use AI vision to analyze video content and score it on viral potential. This feature has two modes depending on the workflow.

This feature requires an AI integration (OpenAI or Gemini) to be set up. Set up the AI integration following the `ai-integrations-openai`or`ai-integrations-gemini` skill before proceeding. OpenAI is preferred because gpt-5.2 handles image analysis well and is the default for most tasks. Gemini (gemini-2.5-flash) is a good alternative, especially for high-volume analysis since it supports video/image input natively.

### Two Scoring Modes

**Mode 1: Segment scoring (find the best moments)** — For when the user says "find the best clips" or "auto-trim for virality." Detects scenes, scores small segments, and exports the top moments. Good for finding highlights in raw footage.

#### Mode 2: Clip scoring (rank ready-to-post clips)**— For when clips already exist (from chunking, manual trimming, etc.) and the user wants to know which ones to post first. Scores each complete clip with a richer evaluation including narrative arc and standalone quality.**This is the preferred mode when used with the chunking pipeline

### Recommended Pipeline

When the user has a long video and wants social-ready clips, use this order:

```text

Long Video → Dead Space Removal → Chunking (10-60s clips) → Clip-Level Scoring → Reframe for Platform → Output

```

This way the AI scores complete, self-contained clips rather than tiny scene fragments. The scores are much more meaningful because each clip is what will actually be posted.

For "find the best moment in this video" requests (no chunking), use the original segment-level pipeline:

```text

Video → Scene Detection → Frame Extraction → Segment Scoring → Rank → Trim/Export

```

### When the user asks for auto-trim, ask which output they want

Present these three options and let the user choose each time. Do not assume a default:

- **Best clip** — The single highest-scoring segment/clip, trimmed and exported
- **Multiple clips** — Several top segments/clips exported as separate files, ranked by score

- **Highlight reel** — Top moments stitched together with crossfade transitions into one video

### Scoring Criteria

**Segment scoring** evaluates: visual dynamism, emotional impact, hook potential, pacing/energy, uniqueness, and shareability. Each factor gets a 1-10 score, weighted to produce a final virality score.

**Clip scoring** adds three additional criteria for complete clips:

- **Narrative completeness** (weight: 15%) — Does the clip tell a complete micro-story? Does it have a clear beginning, middle, and end? Would a viewer feel satisfied or intrigued, not confused?
- **Hook-to-payoff flow** (weight: 10%) — Does the clip open with something that grabs attention and deliver on that promise? Or does it start slow and meander?

- **Standalone quality** (weight: 10%) — Would this clip make sense to someone who hasn't seen the full video? Can it be posted without context?

These three criteria reduce the weights of the original six factors proportionally so the total still sums to 100%.

### Frame Extraction

- **Segments (2-10s):** Extract 3 frames evenly spread across the segment.
- **Clips (10-60s):** Extract 5-8 frames to capture the full arc. Always include the first frame (hook evaluation) and last frame (payoff evaluation).

### Workflow

For the complete step-by-step implementation with code examples, see:

- `virality-scoring.md` — Full virality analysis pipeline, AI prompts, scoring criteria, and output assembly

### Key Gotchas (learned from testing)

- **Scene detection:** Use `ffmpeg`with`select`+`showinfo`filters and parse stderr — the`ffprobe -f lavfi` approach doesn't work reliably in Replit.
- **Content safety:** OpenAI vision may reject frames from documentary/medical/news content. Always wrap AI calls in try/catch and skip failed segments gracefully.

- **Segment indexing:** Use `index: segments.length`when filtering short segments, not the loop counter`i`.
- **Package setup:** For scripts, install `openai`directly (`pnpm add -w openai`) and create the client with`AI_INTEGRATIONS_OPENAI_BASE_URL`/`AI_INTEGRATIONS_OPENAI_API_KEY` env vars. No need for the full workspace integration library.

- **Timeouts:** A 90-second video with ~13 segments takes 1-2 minutes for AI analysis. Warn the user and set generous timeouts.
- **Minimum segment duration:** Use 2.0s minimum — segments under 2 seconds waste API calls and don't produce useful scores.

- **Prefer clip-level scoring:** When the video has already been chunked, always score the chunks rather than re-running segment detection. The clips are what will actually be posted.

## Dead Space Removal

Automatically detect and remove silence, dead air, and filler from a video to produce a tighter, more engaging cut. This is especially useful for talks, interviews, podcasts, tutorials, and raw footage.

### How It Works

1. **Silence detection** — Use FFmpeg's `silencedetect` filter to find all silent intervals (configurable threshold and minimum duration)
2. **Segment extraction** — Extract all non-silent segments as individual clips

3. **Reassembly** — Concatenate the non-silent segments back together with optional brief crossfade transitions
4. **Optional: AI-assisted filler removal** — For more aggressive editing (removing "ums", filler words, repetitive sections), combine silence detection with AI transcription analysis

### When the user asks to remove dead space

Ask these clarifying questions if not clear from context:

- **How aggressive?** Light (remove only true silence, > 1s gaps) vs. aggressive (remove short pauses > 0.3s for a fast-paced edit)
- **Transitions?** Hard cuts between segments (default) or brief crossfades (0.2-0.5s) for smoother flow

### Configuration

| Preset | Silence Threshold | Min Silence Duration | Use Case |

|--------|------------------|---------------------|----------|

| Light | -40dB | 1.0s | Talks, interviews — remove obvious dead air |

| Medium | -35dB | 0.5s | Podcasts, tutorials — tighter pacing |

| Aggressive | -30dB | 0.3s | Fast-paced edits, social media — maximum tightness |

### Implementation

For the complete FFmpeg commands and Node.js pipeline, see:

- `dead-space-and-chunking.md` — See the "Dead Space Removal" section

### Quick Summary

```text

Video → Silence Detection (FFmpeg silencedetect) → Identify Non-Silent Ranges → Extract Segments → Concatenate → Output

```

## Social Media Chunking

Break a longer video (ad, promo, talk, presentation, livestream) into self-contained clips suitable for TikTok, Reels, and Shorts. Each clip should be 10-60 seconds and feel complete on its own.

### How It Works (2)

1. **Scene detection + silence detection** — Find natural break points using both visual scene changes and audio silence gaps
2. **Smart boundary selection** — Merge adjacent segments into clips targeting 10-60 seconds, preferring to break at silence or scene changes rather than mid-sentence

3. **AI content analysis (optional)** — Score each potential clip with AI to identify which ones are worth posting, suggest captions, and recommend clip order
4. **Export** — Output each clip as a separate file, numbered and ranked

### Clip Length Guidelines

| Platform | Ideal Length | Max Length | Notes |

|----------|-------------|------------|-------|

| TikTok | 15-45s | 10 min | 15-30s performs best for new accounts |

| Instagram Reels | 15-30s | 90s | Under 30s gets more reach |

| YouTube Shorts | 30-60s | 60s | Hard cap at 60 seconds |

| X / Twitter | 15-45s | 2m 20s | Shorter gets more engagement |

### When the user asks to chunk a video

Ask which platform they're targeting (or default to TikTok at 15-45s). The chunking algorithm should:

- **Never cut mid-sentence** — Always break at silence gaps or natural pauses
- **Prefer scene boundaries** — Break where the visual content changes

- **Ensure each clip stands alone** — Each clip should have a clear beginning, not start mid-thought
- **Target the platform's sweet spot** — Not just "under 60s" but actually the ideal range for that platform

### Implementation (2)

For the complete pipeline with code examples, see:

- `dead-space-and-chunking.md` — See the "Social Media Chunking" section

### Quick Summary (2)

```text

Video → Scene Detection + Silence Detection → Merge into 10-60s Clips at Natural Boundaries → (Optional) AI Scoring → Export Individual Clips

```

### Combining with Other Features

These features work well together in a pipeline:

```text

Long Video → Dead Space Removal → Chunking into Clips → Virality Scoring → Reframe for TikTok → Output

```

This takes a raw long-form video and produces polished, platform-ready social clips end to end.

## Voiceovers with ElevenLabs

Add AI-generated voiceovers to videos using ElevenLabs text-to-speech, then mix the audio into the video with FFmpeg.

### Prerequisites

ElevenLabs is available as a Replit integration (connector). The user needs to connect their ElevenLabs account through Replit's integration system — no manual API keys needed. Search for the integration and propose it to the user:

```javascript

const results = await searchIntegrations("elevenlabs");

// Then propose the connector so the user can authorize

await proposeIntegration("connector:ccfg_elevenlabs_...");

```

After authorization, use `addIntegration`to wire it to the project, then use`listConnections('elevenlabs')` in the code execution sandbox to get the credentials.

### Workflow (2)

1. **Generate voiceover audio** — Send text to ElevenLabs TTS API, receive audio file
2. **Mix into video** — Use FFmpeg to add the voiceover as a new audio track, optionally ducking (lowering volume of) existing audio

### Voiceover Modes

When the user asks for a voiceover, they may want one of these:

- **Replace audio** — Remove existing audio entirely, use only the voiceover
- **Mix over** — Layer voiceover on top of existing audio (with existing audio volume reduced)

- **Add as track** — Keep existing audio at full volume, add voiceover on top

Ask which mode the user prefers if not clear from context.

### Implementation (3)

For the complete step-by-step implementation with code examples, see:

- `voiceover.md` — ElevenLabs TTS integration, voice selection, audio mixing with FFmpeg, and timed voiceover segments

### Quick Summary (3)

```text

Text Script → ElevenLabs TTS → Audio File → FFmpeg Mix with Video → Output

```

Key capabilities:

- Choose from ElevenLabs' voice library or cloned voices
- Control voice settings (stability, similarity boost, style)

- Generate voiceover for the full video or specific time segments
- Duck existing audio under voiceover sections

- Support for multiple languages

## Social Media Reframing

Automatically reframe videos for different social media platforms. Each platform has a preferred aspect ratio and resolution — this feature handles the conversion intelligently.

### Platform Specs

| Platform | Aspect Ratio | Resolution | Notes |

|----------|-------------|------------|-------|

| YouTube | 16:9 | 1920x1080 | Standard landscape, also supports 4K (3840x2160) |

| TikTok / Reels | 9:16 | 1080x1920 | Vertical video, max 60s for Reels, 10min for TikTok |

| Instagram Feed | 1:1 | 1080x1080 | Square format |

| X / Twitter | 16:9 or 1:1 | 1280x720 or 720x720 | Supports both, 2min 20s max |

### Reframing Strategies

When converting between aspect ratios, there are three strategies:

1. **Center crop** (default) — Crop from the center to fill the target ratio. Fast, works well for most content. May cut off edges.
2. **Letterbox/pillarbox** — Add black bars (or blurred background) to fit without cropping. Preserves all content but adds empty space.

3. **Blurred fill** — Use a blurred, scaled-up version of the video as the background behind the original. Looks much better than black bars, especially for vertical reframing. This is the recommended approach for going from 16:9 to 9:16.

When the user asks to reframe, ask which platform they're targeting. Use **blurred fill**by default for aspect ratio changes that would lose significant content (e.g., landscape to portrait). Use**center crop**when the content is center-focused. Use**letterbox** only if the user explicitly asks for it.

### Implementation (4)

For the complete FFmpeg commands for each reframing strategy, see:

- `operations.md` — See the "Social Media Reframing" section

### Multi-platform Export

When the user wants to export for multiple platforms at once, generate all versions in a batch:

```text

Input (16:9) → YouTube (copy) + TikTok (9:16 blurred fill) + Instagram (1:1 center crop) + X (1280x720 copy)

```

This is a common workflow — the user shoots in landscape and needs versions for every platform.

## Common Operations Reference

For detailed FFmpeg commands and patterns for each operation type, see:

- `operations.md` — Complete command reference for all supported editing operations
- `virality-scoring.md` — AI-powered virality analysis and auto-trim pipeline

- `voiceover.md` — ElevenLabs voiceover generation and audio mixing
- `dead-space-and-chunking.md` — Dead space removal and social media chunking pipelines

## Building a Video Editor UI

If the user wants a visual editor interface:

1. Create a `react-vite` artifact for the frontend
2. Add API routes to `artifacts/api-server/` for video processing

3. Use `multer` for file uploads to the API
4. Process videos with FFmpeg on the server

5. Return processed files for download or preview
6. Use the `object-storage` skill for persisting uploaded and processed files if needed

Key frontend considerations:

- Use `<video>` element for preview playback
- Show a timeline UI for trim/cut operations

- Display progress during processing (poll an API status endpoint or use Server-Sent Events)
- Provide download links for processed output

## Tested Bugs & Caveats (Do Not Regress)

These issues were discovered during real-world testing and are documented here to prevent regressions:

- **Scene detection:** The `ffprobe -f lavfi`approach does NOT work in Replit. Use`ffmpeg`with`select='gt(scene,threshold)',showinfo`and parse`pts_time` from stderr.
- **Segment indexing:** Use `index: segments.length`when building segments, NOT the loop counter`i` — filtered segments cause index mismatches.

- **Content safety:** OpenAI vision may reject frames (medical/documentary content). Always wrap AI calls in try/catch and skip gracefully.
- **Frame extraction timestamp clamping:** Clamp the last frame timestamp to `segment.endTime - 0.1`. Without this, the last clip in a video fails because`startTime + 1.0 * duration` can exceed the actual file duration due to floating point arithmetic.

- **`silenceremove` filter:** Only strips audio silence, NOT video frames. Must use segmented extract+concat approach for proper dead space removal.
- **Dead space with many segments:** Videos with lots of short dialogue (50+ speaking segments) can be very slow to process with re-encoding. Use `-preset ultrafast` for testing, or skip dead space removal for dialogue-heavy content where there's little dead space anyway.

- **OpenAI for scripts:** Install with `pnpm add -w openai`, create client with`AI_INTEGRATIONS_OPENAI_BASE_URL`and`AI_INTEGRATIONS_OPENAI_API_KEY` env vars.
- **AI scoring duration:** A 90-second video with ~13 segments takes 1-2 minutes for AI analysis. A 3.5-minute video with 9 clips takes ~3 minutes. Always warn the user.

## Limitations

- **No GPU acceleration** — Replit containers do not have GPU access, so hardware encoding (NVENC, VAAPI) is unavailable. Use software encoding (libx264, libx265, libvpx-vp9).
- **Memory and CPU** — Very large files or high-resolution encoding (4K+) may be slow or hit memory limits. For large files, prefer stream-copy (`-c copy`) where possible and avoid unnecessary re-encoding.

- **Disk space** — Video files are large. Clean up temporary files after processing. Monitor disk usage for batch operations.
- **No real-time preview** — FFmpeg processes offline. Users cannot preview effects in real-time during editing (unlike desktop NLEs). Generate short previews of segments instead.
