# Dead Space Removal & Social Media Chunking

Complete implementation guide for removing silence/dead space from videos and chunking longer videos into social media-ready clips.

## Table of Contents

1. [Dead Space Removal](#dead-space-removal)
2. [Social Media Chunking](#social-media-chunking)

3. [Combined Pipeline](#combined-pipeline)

---

## Dead Space Removal

Remove silence, dead air, and filler from a video to produce a tighter cut.

### Step 1: Detect Silent Intervals

Use FFmpeg's `silencedetect` filter to find all silent sections. Parse the output from stderr.

```typescript

import { execFile } from 'child_process';

import { promisify } from 'util';

const execFileAsync = promisify(execFile);

interface SilentInterval {

start: number;

end: number;

duration: number;

}

interface SpeakingInterval {

start: number;

end: number;

duration: number;

}

async function detectSilence(

videoPath: string,

noiseThresholdDb = -35,

minSilenceDuration = 0.5

): Promise<SilentInterval[]> {

const { stderr } = await execFileAsync('ffmpeg', [

'-i', videoPath,

'-af', `silencedetect=noise=${noiseThresholdDb}dB:d=${minSilenceDuration}`,

'-f', 'null', '-'

], { maxBuffer: 10 * 1024 * 1024 });

const silentIntervals: SilentInterval[] = [];

const lines = stderr.split('\n');

let currentStart: number | null = null;

for (const line of lines) {

const startMatch = line.match(/silence_start:\s*([0-9.]+)/);

const endMatch = line.match(/silence_end:\s*([0-9.]+)\s*\\\s*silence_duration:\s*([0-9.]+)/);

if (startMatch) {

currentStart = parseFloat(startMatch[1]);

}

if (endMatch && currentStart !== null) {

const end = parseFloat(endMatch[1]);

const duration = parseFloat(endMatch[2]);

silentIntervals.push({ start: currentStart, end, duration });

currentStart = null;

}

}

return silentIntervals;

}

```

### Presets

```typescript

const SILENCE_PRESETS = {

light: { noiseThresholdDb: -40, minSilenceDuration: 1.0 },

medium: { noiseThresholdDb: -35, minSilenceDuration: 0.5 },

aggressive: { noiseThresholdDb: -30, minSilenceDuration: 0.3 },

} as const;

type SilencePreset = keyof typeof SILENCE_PRESETS;

```

### Step 2: Calculate Non-Silent (Speaking) Intervals

Invert the silent intervals to find the parts worth keeping. Add a small padding around each speaking segment so words don't get clipped.

```typescript

async function getSpeakingIntervals(

videoPath: string,

silentIntervals: SilentInterval[],

paddingSeconds = 0.1

): Promise<SpeakingInterval[]> {

const { stdout } = await execFileAsync('ffprobe', [

'-v', 'quiet', '-print_format', 'json', '-show_format', videoPath

]);

const totalDuration = parseFloat(JSON.parse(stdout).format.duration);

if (silentIntervals.length === 0) {

return [{ start: 0, end: totalDuration, duration: totalDuration }];

}

const speaking: SpeakingInterval[] = [];

let cursor = 0;

for (const silence of silentIntervals) {

const segStart = Math.max(0, cursor);

const segEnd = Math.max(segStart, silence.start + paddingSeconds);

if (segEnd - segStart >= 0.1) {

speaking.push({ start: segStart, end: segEnd, duration: segEnd - segStart });

}

cursor = Math.max(cursor, silence.end - paddingSeconds);

}

if (cursor < totalDuration) {

speaking.push({

start: cursor,

end: totalDuration,

duration: totalDuration - cursor,

});

}

return speaking;

}

```

### Step 3: Extract and Reassemble

Extract each speaking segment and concatenate them into the final output.

```typescript

import * as fs from 'fs';

import * as path from 'path';

async function removeDeadSpace(

videoPath: string,

outputPath: string,

preset: SilencePreset = 'medium',

useTransitions = false,

transitionDuration = 0.3

): Promise<{ outputPath: string; originalDuration: number; newDuration: number; removedSeconds: number }> {

const config = SILENCE_PRESETS[preset];

console.log(`Detecting silence (preset: ${preset}, threshold: ${config.noiseThresholdDb}dB, min duration: ${config.minSilenceDuration}s)...`);

const silentIntervals = await detectSilence(videoPath, config.noiseThresholdDb, config.minSilenceDuration);

console.log(`Found ${silentIntervals.length} silent intervals`);

const speakingIntervals = await getSpeakingIntervals(videoPath, silentIntervals);

console.log(`Found ${speakingIntervals.length} speaking segments`);

if (speakingIntervals.length === 0) {

throw new Error('No speaking segments found — the entire video appears silent');

}

if (speakingIntervals.length === 1 && silentIntervals.length === 0) {

console.log('No silence detected — video is already tight');

await fs.promises.copyFile(videoPath, outputPath);

const dur = speakingIntervals[0].duration;

return { outputPath, originalDuration: dur, newDuration: dur, removedSeconds: 0 };

}

const tmpDir = path.join(path.dirname(outputPath), `tmp_deadspace_${Date.now()}`);

await fs.promises.mkdir(tmpDir, { recursive: true });

const clipPaths: string[] = [];

for (let i = 0; i < speakingIntervals.length; i++) {

const seg = speakingIntervals[i];

const clipPath = path.join(tmpDir, `seg_${i.toString().padStart(4, '0')}.mp4`);

await execFileAsync('ffmpeg', [

'-y',

'-i', videoPath,

'-ss', seg.start.toFixed(3),

'-to', seg.end.toFixed(3),

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'aac', '-b:a', '128k',

clipPath

]);

clipPaths.push(clipPath);

}

const concatList = path.join(tmpDir, 'concat.txt');

const lines = clipPaths.map(p => `file '${p}'`).join('\n');

await fs.promises.writeFile(concatList, lines);

await execFileAsync('ffmpeg', [

'-y',

'-f', 'concat', '-safe', '0',

'-i', concatList,

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'aac', '-b:a', '128k',

outputPath

]);

for (const cp of clipPaths) await fs.promises.unlink(cp).catch(() => {});

await fs.promises.rm(tmpDir, { recursive: true, force: true });

const { stdout: probeOrig } = await execFileAsync('ffprobe', [

'-v', 'quiet', '-print_format', 'json', '-show_format', videoPath

]);

const { stdout: probeNew } = await execFileAsync('ffprobe', [

'-v', 'quiet', '-print_format', 'json', '-show_format', outputPath

]);

const originalDuration = parseFloat(JSON.parse(probeOrig).format.duration);

const newDuration = parseFloat(JSON.parse(probeNew).format.duration);

return {

outputPath,

originalDuration,

newDuration,

removedSeconds: originalDuration - newDuration,

};

}

```

### Quick FFmpeg-only approach (no Node.js)

For a simple one-off dead space removal, you can use FFmpeg directly with a two-pass approach:

```bash

# Step 1: Detect silence and note timestamps

ffmpeg -i input.mp4 -af "silencedetect=noise=-35dB:d=0.5" -f null - 2>&1 | grep "silence_"

# Step 2: Manually construct a trim filter from the timestamps, or use the select filter:

# This keeps only non-silent frames (audio-based)

ffmpeg -i input.mp4 \\

-af "silenceremove=stop_periods=-1:stop_duration=0.5:stop_threshold=-35dB" \\

-c:v libx264 -crf 23 -preset medium \\

output_no_silence.mp4

```

**Note:** The `silenceremove` filter only removes silence from the audio track — the video frames during silence are NOT removed. For proper video dead space removal (where both audio and video are cut), you must use the segmented extraction approach above.

---

## Social Media Chunking

Break a longer video into self-contained clips of 10-60 seconds for TikTok, Reels, and Shorts.

### Step 1: Find Natural Break Points

Combine scene detection and silence detection to find the best places to split.

```typescript

interface BreakPoint {

time: number;

type: 'scene' | 'silence' | 'both';

strength: number;

}

async function findBreakPoints(

videoPath: string,

sceneThreshold = 0.3,

silenceThresholdDb = -35,

minSilenceDuration = 0.3

): Promise<BreakPoint[]> {

const sceneChanges = await detectSceneChangeTimes(videoPath, sceneThreshold);

const silentIntervals = await detectSilence(videoPath, silenceThresholdDb, minSilenceDuration);

const breakPoints: BreakPoint[] = [];

for (const sceneTime of sceneChanges) {

const nearbySilence = silentIntervals.find(

s => Math.abs(s.start - sceneTime) < 1.0 || Math.abs(s.end - sceneTime) < 1.0

);

if (nearbySilence) {

breakPoints.push({

time: nearbySilence.end,

type: 'both',

strength: 1.0,

});

} else {

breakPoints.push({ time: sceneTime, type: 'scene', strength: 0.6 });

}

}

for (const silence of silentIntervals) {

const alreadyCovered = breakPoints.some(bp => Math.abs(bp.time - silence.end) < 1.0);

if (!alreadyCovered) {

breakPoints.push({

time: silence.end,

type: 'silence',

strength: 0.4 + Math.min(silence.duration / 3, 0.4),

});

}

}

breakPoints.sort((a, b) => a.time - b.time);

return breakPoints;

}

async function detectSceneChangeTimes(videoPath: string, threshold = 0.3): Promise<number[]> {

const { stderr } = await execFileAsync('ffmpeg', [

'-i', videoPath,

'-filter:v', `select='gt(scene,${threshold})',showinfo`,

'-f', 'null', '-'

], { maxBuffer: 10 * 1024 * 1024 });

const times: number[] = [];

for (const line of stderr.split('\n')) {

const match = line.match(/pts_time:([0-9.]+)/);

if (match) {

const pts = parseFloat(match[1]);

if (pts > 0) times.push(pts);

}

}

return times;

}

```

### Step 2: Build Clips from Break Points

Group segments between break points into clips targeting the desired length range.

```typescript

interface ClipRange {

index: number;

start: number;

end: number;

duration: number;

breakType: string;

}

interface ChunkingConfig {

minClipDuration: number;

maxClipDuration: number;

idealClipDuration: number;

}

const PLATFORM_CONFIGS: Record<string, ChunkingConfig> = {

tiktok: { minClipDuration: 10, maxClipDuration: 45, idealClipDuration: 25 },

reels: { minClipDuration: 10, maxClipDuration: 30, idealClipDuration: 20 },

instagram_reels: { minClipDuration: 10, maxClipDuration: 30, idealClipDuration: 20 },

instagram_stories: { minClipDuration: 1, maxClipDuration: 60, idealClipDuration: 15 },

instagram_feed: { minClipDuration: 3, maxClipDuration: 60, idealClipDuration: 30 },

shorts: { minClipDuration: 15, maxClipDuration: 60, idealClipDuration: 40 },

youtube_shorts: { minClipDuration: 15, maxClipDuration: 60, idealClipDuration: 40 },

youtube: { minClipDuration: 30, maxClipDuration: 300, idealClipDuration: 120 },

twitter: { minClipDuration: 10, maxClipDuration: 45, idealClipDuration: 25 },

x: { minClipDuration: 10, maxClipDuration: 45, idealClipDuration: 25 },

facebook_reels: { minClipDuration: 10, maxClipDuration: 30, idealClipDuration: 20 },

facebook_feed: { minClipDuration: 15, maxClipDuration: 60, idealClipDuration: 30 },

linkedin: { minClipDuration: 10, maxClipDuration: 60, idealClipDuration: 30 },

pinterest: { minClipDuration: 6, maxClipDuration: 60, idealClipDuration: 20 },

snapchat: { minClipDuration: 5, maxClipDuration: 60, idealClipDuration: 20 },

general: { minClipDuration: 10, maxClipDuration: 60, idealClipDuration: 30 },

};

const PLATFORM_REFRAME: Record<string, { width: number; height: number; ratio: string }> = {

tiktok: { width: 1080, height: 1920, ratio: '9:16' },

reels: { width: 1080, height: 1920, ratio: '9:16' },

instagram_reels: { width: 1080, height: 1920, ratio: '9:16' },

instagram_stories: { width: 1080, height: 1920, ratio: '9:16' },

instagram_feed: { width: 1080, height: 1080, ratio: '1:1' },

shorts: { width: 1080, height: 1920, ratio: '9:16' },

youtube_shorts: { width: 1080, height: 1920, ratio: '9:16' },

youtube: { width: 1920, height: 1080, ratio: '16:9' },

twitter: { width: 1280, height: 720, ratio: '16:9' },

x: { width: 1280, height: 720, ratio: '16:9' },

facebook_reels: { width: 1080, height: 1920, ratio: '9:16' },

facebook_feed: { width: 1920, height: 1080, ratio: '16:9' },

linkedin: { width: 1920, height: 1080, ratio: '16:9' },

pinterest: { width: 1080, height: 1920, ratio: '9:16' },

snapchat: { width: 1080, height: 1920, ratio: '9:16' },

};

async function buildClips(

videoPath: string,

breakPoints: BreakPoint[],

platform: string = 'tiktok'

): Promise<ClipRange[]> {

const config = PLATFORM_CONFIGS[platform] ?? PLATFORM_CONFIGS.general;

const { stdout } = await execFileAsync('ffprobe', [

'-v', 'quiet', '-print_format', 'json', '-show_format', videoPath

]);

const totalDuration = parseFloat(JSON.parse(stdout).format.duration);

const allPoints = [0, ...breakPoints.map(bp => bp.time), totalDuration];

const uniquePoints = [...new Set(allPoints)].sort((a, b) => a - b);

const clips: ClipRange[] = [];

let clipStart = 0;

let clipIndex = 0;

for (let i = 1; i < uniquePoints.length; i++) {

const candidateEnd = uniquePoints[i];

const candidateDuration = candidateEnd - clipStart;

if (candidateDuration >= config.idealClipDuration) {

clips.push({

index: clipIndex++,

start: clipStart,

end: candidateEnd,

duration: candidateDuration,

breakType: breakPoints.find(bp => Math.abs(bp.time - candidateEnd) < 0.5)?.type ?? 'end',

});

clipStart = candidateEnd;

} else if (candidateDuration > config.maxClipDuration) {

const bestBreak = findBestBreakInRange(

breakPoints,

clipStart + config.minClipDuration,

clipStart + config.maxClipDuration

);

const splitPoint = bestBreak?.time ?? (clipStart + config.idealClipDuration);

clips.push({

index: clipIndex++,

start: clipStart,

end: splitPoint,

duration: splitPoint - clipStart,

breakType: bestBreak?.type ?? 'forced',

});

clipStart = splitPoint;

i--;

}

}

if (clipStart < totalDuration) {

const remainingDuration = totalDuration - clipStart;

if (remainingDuration >= config.minClipDuration) {

clips.push({

index: clipIndex++,

start: clipStart,

end: totalDuration,

duration: remainingDuration,

breakType: 'end',

});

} else if (clips.length > 0) {

const lastClip = clips[clips.length - 1];

lastClip.end = totalDuration;

lastClip.duration = totalDuration - lastClip.start;

}

}

return clips;

}

function findBestBreakInRange(

breakPoints: BreakPoint[],

rangeStart: number,

rangeEnd: number

): BreakPoint | null {

const candidates = breakPoints.filter(bp => bp.time >= rangeStart && bp.time <= rangeEnd);

if (candidates.length === 0) return null;

return candidates.sort((a, b) => b.strength - a.strength)[0];

}

```

### Step 3: Export Clips

```typescript

async function exportChunkedClips(

videoPath: string,

clips: ClipRange[],

outputDir: string

): Promise<string[]> {

await fs.promises.mkdir(outputDir, { recursive: true });

const exportedPaths: string[] = [];

for (const clip of clips) {

const outputPath = path.join(

outputDir,

`clip_${(clip.index + 1).toString().padStart(2, '0')}_${formatTime(clip.start).replace(':', 'm')}s-${formatTime(clip.end).replace(':', 'm')}s.mp4`

);

await execFileAsync('ffmpeg', [

'-y',

'-i', videoPath,

'-ss', clip.start.toFixed(3),

'-to', clip.end.toFixed(3),

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'aac', '-b:a', '128k',

outputPath

]);

exportedPaths.push(outputPath);

console.log(` Clip ${clip.index + 1}: ${formatTime(clip.start)} - ${formatTime(clip.end)} (${clip.duration.toFixed(1)}s) → ${path.basename(outputPath)}`);

}

return exportedPaths;

}

function formatTime(seconds: number): string {

const m = Math.floor(seconds / 60);

const s = Math.floor(seconds % 60);

return `${m}:${s.toString().padStart(2, '0')}`;

}

```

### Complete Chunking Pipeline

```typescript

async function chunkVideoForSocialMedia(

videoPath: string,

outputDir: string,

platform: string = 'tiktok'

): Promise<string[]> {

console.log(`Chunking ${videoPath} for ${platform}...`);

const config = PLATFORM_CONFIGS[platform] ?? PLATFORM_CONFIGS.general;

console.log(`Target clip length: ${config.minClipDuration}-${config.maxClipDuration}s (ideal: ${config.idealClipDuration}s)\n`);

console.log('Finding natural break points (scenes + silence)...');

const breakPoints = await findBreakPoints(videoPath);

console.log(`Found ${breakPoints.length} break points\n`);

console.log('Building clips...');

const clips = await buildClips(videoPath, breakPoints, platform);

console.log(`Generated ${clips.length} clips:\n`);

for (const clip of clips) {

console.log(` Clip ${clip.index + 1}: ${formatTime(clip.start)}-${formatTime(clip.end)} (${clip.duration.toFixed(1)}s, break: ${clip.breakType})`);

}

console.log('\nExporting clips...');

const paths = await exportChunkedClips(videoPath, clips, outputDir);

console.log(`\nDone! ${paths.length} clips exported to ${outputDir}/`);

return paths;

}

```

---

## Combined Pipeline

For the full workflow of taking a raw long-form video and producing polished social clips.

**IMPORTANT:** When a user specifies a platform, reframing is NOT optional — the output must be in the platform's native format. TikTok/Reels = 9:16 (1080x1920), YouTube = 16:9 (1920x1080), Instagram Feed = 1:1 (1080x1080). Never deliver landscape clips when the user asked for TikTok content.

```typescript

async function fullSocialMediaPipeline(

videoPath: string,

outputDir: string,

options: {

platform?: string;

removeDeadSpace?: boolean;

deadSpacePreset?: SilencePreset;

scoreWithAI?: boolean;

} = {}

) {

const {

platform = 'tiktok',

removeDeadSpace: shouldRemoveDeadSpace = true,

deadSpacePreset = 'medium',

scoreWithAI = false,

} = options;

let workingPath = videoPath;

if (shouldRemoveDeadSpace) {

console.log('=== Step 1: Removing dead space ===\n');

const tightPath = path.join(outputDir, 'tightened.mp4');

const result = await removeDeadSpace(workingPath, tightPath, deadSpacePreset);

console.log(`Removed ${result.removedSeconds.toFixed(1)}s of dead space (${result.originalDuration.toFixed(1)}s → ${result.newDuration.toFixed(1)}s)\n`);

workingPath = tightPath;

}

console.log('=== Step 2: Chunking into clips ===\n');

const clipPaths = await chunkVideoForSocialMedia(workingPath, path.join(outputDir, 'clips'), platform);

if (scoreWithAI) {

console.log('\n=== Step 3: AI Virality Scoring (clip-level) ===\n');

// Score each exported clip using the clip-level prompt (Mode 2)

// This uses CLIP_SCORING_PROMPT which evaluates narrative arc,

// hook-to-payoff, and standalone quality — not just visual moments.

// See virality-scoring.md for the full scoring pipeline.

//

// Key differences from segment scoring:

// - Extracts 5-8 frames per clip (not 3) including first and last frame

// - Uses CLIP_SCORING_PROMPT which adds narrativeCompleteness,

// hookStrength, and standaloneQuality factors

// - Returns postingRecommendation: 'post as-is', 'post with minor edits', or 'consider skipping'

//

// Import and use:

// import { extractFrames, analyzeSegment, getScoringPrompt } from virality pipeline

// Score each clip file, rank by overallScore, present ranked results to user

console.log('Scoring clips with AI (clip-level prompt — evaluates narrative arc, hook, and standalone quality)...');

}

// Step 4: Reframe ALL clips for the target platform

// This is NOT optional when a platform is specified — users expect platform-ready output.

// See operations.md "Social Media Reframing" section for FFmpeg commands.

// Preferred strategy: blurred fill for landscape→portrait (looks polished).

// Alternative: center crop if the subject is center-framed throughout.

console.log('\n=== Step 4: Reframing clips for platform ===\n');

const reframeSpec = PLATFORM_REFRAME[platform];

if (reframeSpec) {

const reframedDir = path.join(outputDir, 'reframed');

await fs.promises.mkdir(reframedDir, { recursive: true });

const { width, height, ratio } = reframeSpec;

console.log(`Reframing all clips to ${ratio} (${width}×${height}) for ${platform}...`);

// Use blurred fill strategy (Strategy 3 from operations.md) for each clip

// See operations.md for the exact FFmpeg filter_complex commands

for (const clipPath of clipPaths) {

const outName = path.basename(clipPath, '.mp4') + `_${platform}.mp4`;

const outPath = path.join(reframedDir, outName);

await execFileAsync('ffmpeg', [

'-y', '-i', clipPath,

'-filter_complex',

`[0:v]scale=${width}:${height}:force_original_aspect_ratio=increase,crop=${width}:${height},gblur=sigma=50[bg];` +

`[0:v]scale=${width}:${height}:force_original_aspect_ratio=decrease[fg];` +

`[bg][fg]overlay=(W-w)/2:(H-h)/2[outv]`,

'-map', '[outv]', '-map', '0:a?',

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'aac', '-b:a', '128k',

outPath

]);

console.log(` ${path.basename(clipPath)} → ${outName}`);

}

} else {

console.log(`No reframing needed for platform: ${platform}`);

}

return clipPaths;

}

```

### Example Usage

```typescript

await fullSocialMediaPipeline('raw_video.mp4', 'output/social', {

platform: 'tiktok',

removeDeadSpace: true,

deadSpacePreset: 'medium',

scoreWithAI: true,

});

```

This produces:

1. `output/social/tightened.mp4` — the video with dead space removed
2. `output/social/clips/clip_01_...mp4` through `clip_N_...mp4` — individual clips chunked to platform duration targets

3. `output/social/reframed/clip_01_tiktok.mp4` — each clip reframed to 9:16 vertical (1080x1920) for TikTok
4. Each clip scored with clip-level AI analysis (narrative arc, hook strength, standalone quality)

5. Clips ranked with posting recommendations ('post as-is', 'post with minor edits', 'consider skipping')
6. The reframed clips are the final deliverables — always present these to the user, not the intermediate landscape clips

### Why clip-level scoring matters

The original segment-level scoring (Mode 1) evaluates tiny 2-10 second fragments on visual dynamism and emotional moments. This is useful for finding highlights, but it doesn't tell you whether a 30-second clip will actually perform well on social media.

Clip-level scoring (Mode 2) evaluates the full clip as a piece of content that will be posted. It checks:

- Does the clip **open strong** (hook evaluation on the first frame)?
- Does it **tell a complete story** in 15-45 seconds?

- Would it **make sense without context** from the full video?
- Does the ending **satisfy or intrigue** the viewer?

A clip can have great individual moments but still fail as a social post if it starts slow, ends mid-sentence, or requires context the viewer doesn't have. Clip-level scoring catches these issues.

## Key Implementation Notes

- **`silenceremove` vs segmented approach:** FFmpeg's `silenceremove` filter only strips silence from the audio — it does NOT cut the corresponding video frames. For proper dead space removal where both audio and video are cut, always use the segmented extract-and-concatenate approach.
- **Padding around speaking segments:** Always add 0.05-0.15s padding around each speaking segment. Without padding, words get clipped at the start/end.

- **Break point priority:** When building clips, prefer to split at points that are both a scene change AND a silence gap (strength 1.0). Pure scene changes (0.6) are better than pure silence (0.4), because visual continuity matters more than audio gaps.
- **Short remainders:** If the last clip would be under `minClipDuration`, merge it into the previous clip rather than exporting a too-short orphan.

- **Re-encoding:** Each extract-and-concat pass re-encodes the video. For the combined pipeline (dead space removal + chunking), consider running dead space removal first to produce one clean file, then chunking that — this minimizes total re-encodes to 2 passes instead of more.
