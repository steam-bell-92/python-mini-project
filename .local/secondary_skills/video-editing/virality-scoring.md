# Virality Scoring Pipeline

Complete implementation guide for AI-powered video analysis and auto-trimming based on virality potential.

## Table of Contents

1. [Overview](#overview)
2. [Step 1: Scene Detection](#step-1-scene-detection)

3. [Step 2: Frame Extraction](#step-2-frame-extraction)
4. [Step 3: AI Analysis](#step-3-ai-analysis)

5. [Step 4: Scoring and Ranking](#step-4-scoring-and-ranking)
6. [Step 5: Output Assembly](#step-5-output-assembly)

7. [Complete Pipeline Example](#complete-pipeline-example)

---

## Overview

The virality scoring pipeline takes a video file as input, breaks it into segments, analyzes each segment using AI vision, scores them on engagement potential, and outputs the best content in the user's preferred format.

```text

Input Video

↓

Scene Detection (FFmpeg)

↓

Frame Extraction (FFmpeg) — 2-3 keyframes per segment

↓

AI Vision Analysis (OpenAI gpt-5.2 or Gemini gemini-2.5-flash)

↓

Score & Rank Segments

↓

Ask User: Best clip / Multiple clips / Highlight reel

↓

Trim & Assemble (FFmpeg)

↓

Output File(s)

```

---

## Step 1: Scene Detection

Use FFmpeg's scene detection filter to find natural cut points in the video. This splits the video into segments based on visual changes.

**Important:** The `ffprobe -f lavfi`approach does not work reliably in Replit's environment. Instead, use`ffmpeg`with the`select`and`showinfo`filters, then parse`pts_time` values from stderr output. This is the tested, working approach.

```typescript

import { execFile } from 'child_process';

import { promisify } from 'util';

const execFileAsync = promisify(execFile);

interface Segment {

index: number;

startTime: number;

endTime: number;

duration: number;

}

async function detectScenes(videoPath: string, threshold = 0.3): Promise<Segment[]> {

const { stderr } = await execFileAsync('ffmpeg', [

'-i', videoPath,

'-filter:v', `select='gt(scene,${threshold})',showinfo`,

'-f', 'null', '-'

], { maxBuffer: 10 * 1024 * 1024 });

const sceneChanges: number[] = [0];

const lines = stderr.split('\n');

for (const line of lines) {

const match = line.match(/pts_time:([0-9.]+)/);

if (match) {

const pts = parseFloat(match[1]);

if (pts > 0) sceneChanges.push(pts);

}

}

const { stdout: probeOut } = await execFileAsync('ffprobe', [

'-v', 'quiet',

'-print_format', 'json',

'-show_format',

videoPath

]);

const totalDuration = parseFloat(JSON.parse(probeOut).format.duration);

sceneChanges.push(totalDuration);

const segments: Segment[] = [];

for (let i = 0; i < sceneChanges.length - 1; i++) {

const start = sceneChanges[i];

const end = sceneChanges[i + 1];

const duration = end - start;

if (duration >= 2.0) {

segments.push({ index: segments.length, startTime: start, endTime: end, duration });

}

}

return segments;

}

```

**Note on segment indexing:** Use `index: segments.length`(not`index: i`) when building segments. When short segments are filtered out, `i` no longer matches the array position, which causes index mismatches during the export step.

### Alternative: Fixed-interval segmentation

For videos without clear scene changes (talking head, screencasts), split into fixed-length chunks:

```typescript

async function splitFixed(videoPath: string, chunkSeconds = 10): Promise<Segment[]> {

const { stdout } = await execFileAsync('ffprobe', [

'-v', 'quiet', '-print_format', 'json', '-show_format', videoPath

]);

const totalDuration = parseFloat(JSON.parse(stdout).format.duration);

const segments: Segment[] = [];

let start = 0;

let index = 0;

while (start < totalDuration) {

const end = Math.min(start + chunkSeconds, totalDuration);

segments.push({ index, startTime: start, endTime: end, duration: end - start });

start = end;

index++;

}

return segments;

}

```

### Choosing the right approach

- Use **scene detection** for edited content, vlogs, multi-shot videos
- Use **fixed-interval** for single-camera footage, lectures, screencasts, livestreams

- If scene detection produces too many or too few segments, adjust the `threshold` (lower = more sensitive, higher = fewer scenes). Default 0.3 works well for most content.

---

## Step 2: Frame Extraction

Extract representative frames for AI analysis. The number of frames should scale with the content duration:

- **Short segments (2-10s):** 3 frames, evenly spread
- **Medium clips (10-30s):** 5 frames, including the first and last frame

- **Long clips (30-60s):** 8 frames, including the first and last frame

Including the first and last frame is important for clip-level scoring — the AI needs to evaluate the hook (opening) and payoff (ending).

```typescript

import * as fs from 'fs';

import * as path from 'path';

function getFrameCount(durationSeconds: number): number {

if (durationSeconds <= 10) return 3;

if (durationSeconds <= 30) return 5;

return 8;

}

async function extractFrames(

videoPath: string,

segment: Segment,

outputDir: string,

framesPerSegment?: number

): Promise<string[]> {

await fs.promises.mkdir(outputDir, { recursive: true });

const count = framesPerSegment ?? getFrameCount(segment.duration);

const framePaths: string[] = [];

for (let i = 0; i < count; i++) {

const fraction = count === 1 ? 0.5 : i / (count - 1);

const timestamp = Math.min(segment.startTime + fraction * segment.duration, segment.endTime - 0.1);

const framePath = path.join(outputDir, `segment_${segment.index}_frame_${i + 1}.jpg`);

await execFileAsync('ffmpeg', [

'-y',

'-ss', timestamp.toFixed(3),

'-i', videoPath,

'-frames:v', '1',

'-q:v', '2',

framePath

]);

framePaths.push(framePath);

}

return framePaths;

}

```

### Notes

- The frame extraction uses `i / (count - 1)`for timestamp calculation, which ensures the first frame is at the very start and the last frame is at the very end of the segment. This is critical for clip-level scoring where the AI evaluates the opening hook and closing payoff.
- The timestamp is clamped to`segment.endTime - 0.1`to prevent seeking past the end of the video. Without this, the last clip in a video can fail because`startTime + 1.0 * duration` may exceed the actual file duration due to floating point arithmetic.

---

## Step 3: AI Analysis

Send extracted frames to an AI vision model to analyze each segment's virality potential. The AI evaluates visual dynamism, emotional impact, hook quality, pacing, and shareability.

### Content Safety Handling

OpenAI's vision API may reject certain frames that trigger content safety filters (e.g., medical imagery, sensitive content involving minors or elderly people). **Always wrap AI calls in try/catch and skip segments that fail** rather than crashing the entire pipeline:

```typescript

try {

const score = await analyzeSegment(framePaths, segment, videoContext);

scores.push(score);

} catch (err: any) {

if (err?.code === 'content_policy_violation') {

console.log(`Segment ${segment.index + 1}: Skipped (content safety filter)`);

} else {

console.log(`Segment ${segment.index + 1}: Error — ${err?.message}`);

}

}

```

This is especially common with documentary, medical, or news content. The pipeline should continue and rank whatever segments it can analyze.

### OpenAI Client Setup

For script-based usage (not using the full `@workspace/integrations-openai-ai-server`library), install`openai` directly and create the client with the AI Integrations environment variables:

```typescript

import OpenAI from 'openai';

const openai = new OpenAI({

baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,

apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,

});

```

Install with: `pnpm add -w openai`

If using the full workspace integration, import from `@workspace/integrations-openai-ai-server`instead (see the`ai-integrations-openai` skill for setup).

### Using OpenAI (gpt-5.2)

```typescript

import OpenAI from 'openai';

import * as fs from 'fs';

const openai = new OpenAI({

baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,

apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,

});

interface ViralityScore {

segmentIndex: number;

overallScore: number;

factors: {

visualDynamism: number;

emotionalImpact: number;

hookPotential: number;

pacingEnergy: number;

uniqueness: number;

shareability: number;

};

reasoning: string;

suggestedCaption: string;

}

async function analyzeSegment(

framePaths: string[],

segment: Segment,

videoContext: string

): Promise<ViralityScore> {

const imageContents = framePaths.map(fp => ({

type: 'image_url' as const,

image_url: {

url: `data:image/jpeg;base64,${fs.readFileSync(fp).toString('base64')}`,

detail: 'low' as const

}

}));

const response = await openai.chat.completions.create({

model: 'gpt-5.2',

max_completion_tokens: 1024,

messages: [

{

role: 'system',

content: getScoringPrompt(segment.duration)

},

{

role: 'user',

content: [

{

type: 'text',

text: `Analyze this video segment for virality potential.

Video context: ${videoContext}

Segment: ${segment.index + 1}

Timestamp: ${formatTime(segment.startTime)} - ${formatTime(segment.endTime)}

Duration: ${segment.duration.toFixed(1)}s

These ${framePaths.length} frames are sampled evenly across the segment. Score this segment's virality potential.`

},

...imageContents

]

}

],

response_format: { type: 'json_object' }

});

const result = JSON.parse(response.choices[0]?.message?.content ?? '{}');

return {

segmentIndex: segment.index,

overallScore: result.overallScore,

factors: result.factors,

reasoning: result.reasoning,

suggestedCaption: result.suggestedCaption

};

}

function formatTime(seconds: number): string {

const m = Math.floor(seconds / 60);

const s = Math.floor(seconds % 60);

return `${m}:${s.toString().padStart(2, '0')}`;

}

```

### Using Gemini (gemini-2.5-flash)

```typescript

import { ai } from '@workspace/integrations-gemini-ai';

import * as fs from 'fs';

async function analyzeSegmentGemini(

framePaths: string[],

segment: Segment,

videoContext: string

): Promise<ViralityScore> {

const imageParts = framePaths.map(fp => ({

inlineData: {

mimeType: 'image/jpeg',

data: fs.readFileSync(fp).toString('base64')

}

}));

const response = await ai.models.generateContent({

model: 'gemini-2.5-flash',

contents: [{

role: 'user',

parts: [

{ text: `${getScoringPrompt(segment.duration)}\n\nAnalyze this video clip for virality potential.\n\nVideo context: ${videoContext}\nClip: ${segment.index + 1}\nTimestamp: ${formatTime(segment.startTime)} - ${formatTime(segment.endTime)}\nDuration: ${segment.duration.toFixed(1)}s\n\nThese ${framePaths.length} frames are sampled across the clip (first frame = opening hook, last frame = ending). Score this clip's virality potential. Respond in JSON format.` },

...imageParts

]

}],

config: { responseMimeType: 'application/json' }

});

const result = JSON.parse(response.text ?? '{}');

return {

segmentIndex: segment.index,

overallScore: result.overallScore,

factors: result.factors,

reasoning: result.reasoning,

suggestedCaption: result.suggestedCaption

};

}

```

### Scoring Prompts

There are two prompts — one for scoring short segments (Mode 1) and one for scoring complete clips (Mode 2). Use the clip-level prompt when clips are 10+ seconds.

#### Segment Scoring Prompt (Mode 1 — finding best moments)

Use this when scoring raw scene-detected segments (typically 2-10 seconds). This is the original prompt.

```typescript

const SEGMENT_SCORING_PROMPT = `You are a social media virality analyst. Your job is to score video segments on their potential to go viral on platforms like TikTok, Instagram Reels, YouTube Shorts, and X/Twitter.

You will receive 2-3 frames from a video segment. Analyze them and score the segment on these factors (each 1-10):

1. **Visual Dynamism** (weight: 20%) — How visually interesting and dynamic is the content? Look for: action/movement implied between frames, striking compositions, dramatic lighting, vibrant colors, visual contrast. Low scores: static shots, bland compositions, poor lighting.
2. **Emotional Impact** (weight: 25%) — Does this segment evoke a strong emotional response? Look for: facial expressions, dramatic moments, humor potential, surprise elements, awe-inspiring visuals, relatable situations. This is the strongest predictor of shares.

3. **Hook Potential** (weight: 20%) — Would this segment work as the opening of a viral clip? Could it stop someone mid-scroll in the first 1-2 seconds? Look for: immediate visual intrigue, curiosity gap, unexpected elements, bold visuals.
4. **Pacing & Energy** (weight: 15%) — Does the visual pacing feel energetic and engaging? Look for: variety between frames (different angles, scales, subjects), implied motion, dynamic framing changes. Monotonous sameness across frames scores low.

5. **Uniqueness** (weight: 10%) — Is this something unusual, novel, or different from typical content? Everyday/generic scenes score low. Unusual situations, rare moments, or distinctive aesthetics score high.
6. **Shareability** (weight: 10%) — Would someone send this to a friend? Look for: "you have to see this" factor, relatable moments, impressive skills/feats, beautiful or shocking visuals.

Respond with JSON in this exact format:

{

"factors": {

"visualDynamism": <1-10>,

"emotionalImpact": <1-10>,

"hookPotential": <1-10>,

"pacingEnergy": <1-10>,

"uniqueness": <1-10>,

"shareability": <1-10>

},

"overallScore": <weighted average, 1-10, one decimal>,

"reasoning": "<2-3 sentences explaining why this segment scored the way it did>",

"suggestedCaption": "<a short, punchy caption that could accompany this clip on social media>"

}

Be honest and critical. Most segments in a typical video are NOT viral-worthy (score 3-5). Reserve scores above 7 for genuinely compelling moments. A score of 9-10 means this could realistically trend on social media.`;

```

#### Clip Scoring Prompt (Mode 2 — ranking ready-to-post clips)

Use this when scoring complete clips (10-60 seconds) that have been chunked from a longer video. This prompt adds narrative arc evaluation and is the preferred prompt for the chunking pipeline.

```typescript

const CLIP_SCORING_PROMPT = `You are a social media content strategist and virality analyst. You are evaluating complete video clips (10-60 seconds) that are ready to be posted on TikTok, Instagram Reels, YouTube Shorts, or X/Twitter.

You will receive 5-8 frames sampled across the entire clip, including the very first and very last frame. The first frame represents the hook (what viewers see first in their feed), and the last frame represents the payoff/ending.

Score this clip on these factors (each 1-10):

### Visual & Production Quality (35% total)

1. **Visual Dynamism** (weight: 13%) — How visually interesting and dynamic is the content across the full clip? Look for: variety of shots, movement, striking compositions, dynamic lighting, color. Score the overall visual journey, not just one frame.
2. **Pacing & Energy** (weight: 12%) — Does the clip maintain engaging pacing throughout? Look for: variety between frames (different angles, scales, subjects), good rhythm. Does it drag anywhere or rush past key moments?

3. **Uniqueness** (weight: 10%) — Is this clip distinctive? Would it stand out in a crowded feed? Everyday/generic content scores low. Fresh angles, unusual moments, or distinctive aesthetics score high.

### Emotional & Engagement Power (35% total)

4. **Emotional Impact** (weight: 20%) — Does this clip evoke a strong emotional response? This is the \#1 predictor of shares. Look for: relatable moments, humor, surprise, awe, empathy, or tension. A clip that makes you feel something deeply scores high.
5. **Shareability** (weight: 15%) — Would someone send this to a friend or repost it? Look for: "you have to see this" factor, quotable moments, impressive feats, beautiful or shocking visuals, relatable situations.

### Clip Structure (30% total)

6. **Hook Strength** (weight: 12%) — Look at the FIRST frame specifically. Would this stop someone mid-scroll in the first 1-2 seconds? Does the clip open with intrigue, a bold visual, or an attention-grabbing moment? A weak opening kills a clip regardless of how good the rest is.
7. **Narrative Completeness** (weight: 10%) — Does this clip tell a complete micro-story? Does it have a clear arc — a setup, development, and resolution (or intentional cliffhanger)? Would a viewer feel satisfied, intrigued, or moved at the end? Clips that end abruptly mid-thought or feel like random fragments score low.

8. **Standalone Quality** (weight: 8%) — Would this clip make sense to someone who has never seen the full video? Can it be posted without any additional context or explanation? Does it work as an independent piece of content?

Respond with JSON in this exact format:

{

"factors": {

"visualDynamism": <1-10>,

"pacingEnergy": <1-10>,

"uniqueness": <1-10>,

"emotionalImpact": <1-10>,

"shareability": <1-10>,

"hookStrength": <1-10>,

"narrativeCompleteness": <1-10>,

"standaloneQuality": <1-10>

},

"overallScore": <weighted average using the weights above, 1-10, one decimal>,

"reasoning": "<2-3 sentences explaining this clip's strengths and weaknesses as a standalone social media post>",

"suggestedCaption": "<a short, punchy caption optimized for the platform>",

"postingRecommendation": "<one of: 'post as-is', 'post with minor edits', 'consider skipping'>"

}

Be honest and critical. A mediocre clip is worse than no post at all — it hurts the algorithm. Most clips from a chunked video will score 3-5. Scores above 7 mean this clip could genuinely perform well. Scores 8+ mean this is strong enough to lead a content calendar.`;

```

#### Choosing the Right Prompt

```typescript

function getScoringPrompt(durationSeconds: number): string {

return durationSeconds >= 10 ? CLIP_SCORING_PROMPT : SEGMENT_SCORING_PROMPT;

}

```

Use `SEGMENT_SCORING_PROMPT`for scene-detected segments under 10 seconds (Mode 1: finding best moments). Use`CLIP_SCORING_PROMPT`for clips 10 seconds or longer (Mode 2: ranking chunks for posting).

---

## Step 4: Scoring and Ranking

After all segments are analyzed, rank them by overall score.

**Important:** Each segment requires an AI API call with image attachments. For a 90-second video with ~13 segments, expect the analysis to take 1-2 minutes. For longer videos (5+ minutes), this can take much longer. Always warn the user that analysis will take a moment.

If the`@workspace/integrations-openai-ai-server/batch` utilities are available, use them for rate limiting. Otherwise, a simple sequential loop with try/catch works well:

```typescript

async function scoreAllSegments(

videoPath: string,

segments: Segment[],

videoContext: string,

tmpDir: string

): Promise<ViralityScore[]> {

const scores: ViralityScore[] = [];

for (const segment of segments) {

const framePaths = await extractFrames(videoPath, segment, tmpDir);

try {

const score = await analyzeSegment(framePaths, segment, videoContext);

scores.push(score);

} catch (err: any) {

if (err?.code === 'content_policy_violation') {

console.log(`Segment ${segment.index + 1}: Skipped (content safety filter)`);

} else {

console.log(`Segment ${segment.index + 1}: Error — ${err?.message}`);

}

}

for (const fp of framePaths) {

await fs.promises.unlink(fp).catch(() => {});

}

}

return scores.sort((a, b) => b.overallScore - a.overallScore);

}

```

---

## Step 5: Output Assembly

Based on the user's choice, produce one of three outputs.

### Option A: Best Clip (single highest-scoring segment)

```typescript

async function exportBestClip(

videoPath: string,

segments: Segment[],

scores: ViralityScore[],

outputPath: string

): Promise<{ path: string; score: ViralityScore }> {

const best = scores[0];

const segment = segments[best.segmentIndex];

await execFileAsync('ffmpeg', [

'-y',

'-i', videoPath,

'-ss', segment.startTime.toFixed(3),

'-to', segment.endTime.toFixed(3),

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'aac', '-b:a', '128k',

outputPath

]);

return { path: outputPath, score: best };

}

```

### Option B: Multiple Clips (ranked by score)

```typescript

async function exportTopClips(

videoPath: string,

segments: Segment[],

scores: ViralityScore[],

outputDir: string,

count = 5

): Promise<Array<{ path: string; score: ViralityScore }>> {

await fs.promises.mkdir(outputDir, { recursive: true });

const topScores = scores.slice(0, count);

const results: Array<{ path: string; score: ViralityScore }> = [];

for (let i = 0; i < topScores.length; i++) {

const score = topScores[i];

const segment = segments[score.segmentIndex];

const outputPath = path.join(outputDir, `clip_${i + 1}_score_${score.overallScore.toFixed(1)}.mp4`);

await execFileAsync('ffmpeg', [

'-y',

'-i', videoPath,

'-ss', segment.startTime.toFixed(3),

'-to', segment.endTime.toFixed(3),

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'aac', '-b:a', '128k',

outputPath

]);

results.push({ path: outputPath, score });

}

return results;

}

```

### Option C: Highlight Reel (top moments stitched together)

```typescript

async function exportHighlightReel(

videoPath: string,

segments: Segment[],

scores: ViralityScore[],

outputPath: string,

topCount = 5,

transitionDuration = 0.5

): Promise<string> {

const topScores = scores.slice(0, topCount);

const sortedByTime = [...topScores].sort(

(a, b) => segments[a.segmentIndex].startTime - segments[b.segmentIndex].startTime

);

const tmpDir = path.join(path.dirname(outputPath), 'tmp_highlight');

await fs.promises.mkdir(tmpDir, { recursive: true });

const clipPaths: string[] = [];

for (let i = 0; i < sortedByTime.length; i++) {

const segment = segments[sortedByTime[i].segmentIndex];

const clipPath = path.join(tmpDir, `clip_${i}.mp4`);

await execFileAsync('ffmpeg', [

'-y',

'-i', videoPath,

'-ss', segment.startTime.toFixed(3),

'-to', segment.endTime.toFixed(3),

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'aac', '-b:a', '128k',

clipPath

]);

clipPaths.push(clipPath);

}

if (clipPaths.length === 1) {

await fs.promises.copyFile(clipPaths[0], outputPath);

} else {

const filterParts: string[] = [];

let lastVideo = '';

let lastAudio = '';

for (let i = 0; i < clipPaths.length; i++) {

filterParts.push(`[${i}:v]setpts=PTS-STARTPTS[v${i}];`);

filterParts.push(`[${i}:a]asetpts=PTS-STARTPTS[a${i}];`);

}

// Chain xfade transitions between clips

if (clipPaths.length === 2) {

filterParts.push(

`[v0][v1]xfade=transition=fade:duration=${transitionDuration}:offset=auto[outv];`

);

filterParts.push(

`[a0][a1]acrossfade=d=${transitionDuration}[outa]`

);

lastVideo = 'outv';

lastAudio = 'outa';

} else {

// For 3+ clips, use concat with crossfade between each pair

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

// Clean up

for (const cp of clipPaths) await fs.promises.unlink(cp).catch(() => {});

await fs.promises.rm(tmpDir, { recursive: true, force: true });

return outputPath;

}

const inputs = clipPaths.flatMap(p => ['-i', p]);

await execFileAsync('ffmpeg', [

'-y',

...inputs,

'-filter_complex', filterParts.join(''),

'-map', `[${lastVideo}]`,

'-map', `[${lastAudio}]`,

'-c:v', 'libx264', '-crf', '23', '-preset', 'medium',

'-c:a', 'aac', '-b:a', '128k',

outputPath

]);

}

// Clean up

for (const cp of clipPaths) await fs.promises.unlink(cp).catch(() => {});

await fs.promises.rm(tmpDir, { recursive: true, force: true });

return outputPath;

}

```

---

## Complete Pipeline Example

Here's how to tie everything together in a script:

```typescript

import * as path from 'path';

import * as os from 'os';

async function viralityAutoTrim(

videoPath: string,

outputMode: 'best' | 'multiple' | 'highlight',

videoContext = ''

) {

const tmpDir = path.join(os.tmpdir(), `virality_${Date.now()}`);

console.log('Step 1: Detecting scenes...');

let segments = await detectScenes(videoPath);

// Fall back to fixed intervals if scene detection yields too few segments

if (segments.length < 3) {

console.log('Few scenes detected, using fixed-interval segmentation...');

segments = await splitFixed(videoPath, 10);

}

console.log(`Found ${segments.length} segments`);

console.log('Step 2: Analyzing segments with AI...');

const scores = await scoreAllSegments(videoPath, segments, videoContext, tmpDir);

console.log('\nSegment Rankings:');

for (const score of scores) {

const seg = segments[score.segmentIndex];

console.log(

`\#${score.segmentIndex + 1} [${formatTime(seg.startTime)}-${formatTime(seg.endTime)}]` +

`Score: ${score.overallScore.toFixed(1)}/10 — ${score.reasoning}`

);

}

console.log(`\nStep 3: Generating output (mode: ${outputMode})...`);

const outputDir = path.dirname(videoPath);

switch (outputMode) {

case 'best': {

const { path: outPath, score } = await exportBestClip(

videoPath, segments, scores,

path.join(outputDir, 'best_clip.mp4')

);

console.log(`Best clip exported: ${outPath} (score: ${score.overallScore.toFixed(1)})`);

console.log(`Suggested caption: ${score.suggestedCaption}`);

break;

}

case 'multiple': {

const clips = await exportTopClips(

videoPath, segments, scores,

path.join(outputDir, 'top_clips')

);

console.log(`Exported ${clips.length} clips to ${path.join(outputDir, 'top_clips')}/`);

for (const clip of clips) {

console.log(` ${path.basename(clip.path)} — ${clip.score.reasoning}`);

}

break;

}

case 'highlight': {

const reelPath = await exportHighlightReel(

videoPath, segments, scores,

path.join(outputDir, 'highlight_reel.mp4')

);

console.log(`Highlight reel exported: ${reelPath}`);

break;

}

}

// Clean up temp directory

await fs.promises.rm(tmpDir, { recursive: true, force: true });

console.log('Done!');

}

```

## Scoring Calibration Notes

- **Most content scores 3-5.** This is normal. Everyday footage, filler shots, and transitional moments are not viral.
- **Scores 6-7** indicate genuinely interesting moments worth keeping.

- **Scores 8+** are rare and represent truly compelling, share-worthy content.
- If every segment scores above 7, the entire video is likely high-quality content — suggest keeping more segments or using a longer highlight reel.

- If no segment scores above 4, be honest with the user — the video may not have strong viral moments. Suggest what would make it more engaging (better lighting, more action, stronger hook, etc.).

## Performance Tips

- **Timeout awareness** — For a 90-second video with ~13 segments, expect analysis to take 1-2 minutes. A 5-minute video with fixed 10s segments = 30 API calls = 3-5 minutes. Warn the user and set generous script timeouts.
- For long videos (30+ minutes), use fixed-interval segmentation with larger chunks (15-20s) to keep the number of AI calls manageable.

- Use `concurrency: 2` in batch processing to avoid rate limits while maintaining speed.
- Extract frames at reduced quality (`-q:v 5`) if API costs are a concern — the AI can still analyze lower-quality frames effectively.

- Use `detail: 'low'` for OpenAI vision to reduce token usage per frame.
- **Content safety skips** — Expect some segments to be skipped due to content safety filters, especially with documentary, medical, or news content. The pipeline should gracefully continue.

- **Minimum segment duration** — Use 2.0s as the minimum segment threshold (not 1.0s). Very short segments (< 2s) don't produce useful virality scores and waste API calls.
