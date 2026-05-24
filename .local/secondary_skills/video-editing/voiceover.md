# Voiceover with ElevenLabs

Complete implementation guide for adding AI-generated voiceovers to videos using ElevenLabs TTS and FFmpeg audio mixing.

## Table of Contents

1. [Setup](#setup)
2. [Generating Voiceover Audio](#generating-voiceover-audio)

3. [Voice Selection](#voice-selection)
4. [Mixing Audio into Video](#mixing-audio-into-video)

5. [Timed Voiceover Segments](#timed-voiceover-segments)
6. [Complete Pipeline Example](#complete-pipeline-example)

---

## Setup

### 1. Connect ElevenLabs via Replit Integration

ElevenLabs is available as a Replit connector. Set it up through the integration system:

```javascript

// In the code execution sandbox:

const results = await searchIntegrations("elevenlabs");

console.log(results);

// Propose the connector to the user (they'll complete OAuth)

await proposeIntegration("connector:ccfg_elevenlabs_...");

```

After the user authorizes, on the next loop:

```javascript

// Add the connection to the project

const addResult = await addIntegration("connection:conn_elevenlabs_...");

console.log(addResult);

```

### 2. Access Credentials

Use `listConnections` in the code execution sandbox to get the API key:

```javascript

const conns = await listConnections('elevenlabs');

if (conns.length > 0) {

const apiKey = conns[0].settings.api_key;

// Use this key for ElevenLabs API calls

}

```

### 3. Install Dependencies

No special SDK is needed — ElevenLabs has a straightforward REST API. Use `fetch` or install the official SDK:

```bash

pnpm --filter @workspace/scripts add elevenlabs

# or for the API server:

pnpm --filter @workspace/api-server add elevenlabs

```

---

## Generating Voiceover Audio

### Using the ElevenLabs REST API directly

```typescript

import * as fs from 'fs';

async function generateVoiceover(

text: string,

outputPath: string,

apiKey: string,

voiceId = 'JBFqnCBsd6RMkjVDRZzb', // Default: "George" - warm, narrative voice

options: {

stability?: number;

similarityBoost?: number;

style?: number;

modelId?: string;

} = {}

): Promise<string> {

const {

stability = 0.5,

similarityBoost = 0.75,

style = 0.0,

modelId = 'eleven_multilingual_v2'

} = options;

const response = await fetch(

`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,

{

method: 'POST',

headers: {

'Content-Type': 'application/json',

'xi-api-key': apiKey

},

body: JSON.stringify({

text,

model_id: modelId,

voice_settings: {

stability,

similarity_boost: similarityBoost,

style,

use_speaker_boost: true

}

})

}

);

if (!response.ok) {

const error = await response.text();

throw new Error(`ElevenLabs TTS failed: ${response.status} ${error}`);

}

const buffer = Buffer.from(await response.arrayBuffer());

await fs.promises.writeFile(outputPath, buffer);

return outputPath;

}

```

### Using the ElevenLabs SDK

```typescript

import { ElevenLabsClient } from 'elevenlabs';

import * as fs from 'fs';

async function generateVoiceoverSDK(

text: string,

outputPath: string,

apiKey: string,

voiceId = 'JBFqnCBsd6RMkjVDRZzb'

): Promise<string> {

const client = new ElevenLabsClient({ apiKey });

const audioStream = await client.textToSpeech.convert(voiceId, {

text,

model_id: 'eleven_multilingual_v2',

voice_settings: {

stability: 0.5,

similarity_boost: 0.75,

style: 0.0

}

});

const chunks: Buffer[] = [];

for await (const chunk of audioStream) {

chunks.push(Buffer.from(chunk));

}

await fs.promises.writeFile(outputPath, Buffer.concat(chunks));

return outputPath;

}

```

---

## Voice Selection

### Listing Available Voices

```typescript

async function listVoices(apiKey: string) {

const response = await fetch('https://api.elevenlabs.io/v1/voices', {

headers: { 'xi-api-key': apiKey }

});

const data = await response.json();

return data.voices.map((v: any) => ({

id: v.voice_id,

name: v.name,

category: v.category,

labels: v.labels,

previewUrl: v.preview_url

}));

}

```

### Popular Pre-made Voices

These are commonly available ElevenLabs voices good for voiceovers:

| Voice | ID | Best For |

|-------|-----|----------|

| George | `JBFqnCBsd6RMkjVDRZzb` | Warm narration, documentaries |

| Rachel | `21m00Tcm4TlvDq8ikWAM` | Professional, clear narration |

| Adam | `pNInz6obpgDQGcFmaJgB` | Deep, authoritative narration |

| Bella | `EXAVITQu4vr4xnSDxMaL` | Friendly, conversational |

| Antoni | `ErXwobaYiN019PkySvjV` | Calm, measured narration |

| Domi | `AZnzlk1XvdvUeBnXmlld` | Energetic, youthful |

When the user doesn't specify a voice, ask what tone they want (professional, warm, energetic, etc.) and suggest an appropriate voice.

### Voice Settings Explained

- **Stability** (0.0–1.0): Higher = more consistent/monotone, Lower = more expressive/varied. Default 0.5 is balanced. Use 0.7+ for narration, 0.3 for dramatic reads.
- **Similarity Boost** (0.0–1.0): How closely to match the original voice. 0.75 is a good default. Higher values may introduce artifacts.

- **Style** (0.0–1.0): Exaggeration of the voice's style. 0.0 is neutral. Higher values amplify the voice's character but can sound unnatural. Keep at 0.0 for voiceovers.

---

## Mixing Audio into Video

### Mode 1: Replace Audio Entirely

Remove existing audio and use only the voiceover:

```bash

ffmpeg -y -i video.mp4 -i voiceover.mp3 \\

-map 0:v -map 1:a \\

-c:v copy -c:a aac -b:a 192k \\

-shortest output.mp4

```

```typescript

import { execFile } from 'child_process';

import { promisify } from 'util';

const execFileAsync = promisify(execFile);

async function replaceAudio(videoPath: string, voiceoverPath: string, outputPath: string) {

await execFileAsync('ffmpeg', [

'-y',

'-i', videoPath,

'-i', voiceoverPath,

'-map', '0:v',

'-map', '1:a',

'-c:v', 'copy',

'-c:a', 'aac', '-b:a', '192k',

'-shortest',

outputPath

]);

}

```

### Mode 2: Mix Over (duck existing audio)

Layer voiceover on top of existing audio, reducing the existing audio volume:

```bash

ffmpeg -y -i video.mp4 -i voiceover.mp3 \\

-filter_complex "[0:a]volume=0.2[bg];[bg][1:a]amix=inputs=2:duration=first[outa]" \\

-map 0:v -map "[outa]" \\

-c:v copy -c:a aac -b:a 192k \\

output.mp4

```

```typescript

async function mixOverAudio(

videoPath: string,

voiceoverPath: string,

outputPath: string,

bgVolume = 0.2 // How much to reduce existing audio (0.0 = silent, 1.0 = full)

) {

await execFileAsync('ffmpeg', [

'-y',

'-i', videoPath,

'-i', voiceoverPath,

'-filter_complex',

`[0:a]volume=${bgVolume}[bg];[bg][1:a]amix=inputs=2:duration=first[outa]`,

'-map', '0:v',

'-map', '[outa]',

'-c:v', 'copy',

'-c:a', 'aac', '-b:a', '192k',

outputPath

]);

}

```

### Mode 3: Add as Track (full volume both)

Keep existing audio at full volume, add voiceover on top:

```bash

ffmpeg -y -i video.mp4 -i voiceover.mp3 \\

-filter_complex "[0:a][1:a]amix=inputs=2:duration=first[outa]" \\

-map 0:v -map "[outa]" \\

-c:v copy -c:a aac -b:a 192k \\

output.mp4

```

```typescript

async function addAudioTrack(videoPath: string, voiceoverPath: string, outputPath: string) {

await execFileAsync('ffmpeg', [

'-y',

'-i', videoPath,

'-i', voiceoverPath,

'-filter_complex',

'[0:a][1:a]amix=inputs=2:duration=first[outa]',

'-map', '0:v',

'-map', '[outa]',

'-c:v', 'copy',

'-c:a', 'aac', '-b:a', '192k',

outputPath

]);

}

```

### Adding Voiceover to a Video with No Audio

If the input video has no audio stream:

```bash

ffmpeg -y -i video.mp4 -i voiceover.mp3 \\

-map 0:v -map 1:a \\

-c:v copy -c:a aac -b:a 192k \\

-shortest output.mp4

```

---

## Timed Voiceover Segments

For videos that need voiceover at specific timestamps (not continuous narration), generate separate audio clips and position them on a timeline.

### Step 1: Define the Script with Timestamps

```typescript

interface VoiceoverSegment {

text: string;

startTime: number; // seconds

voiceId?: string; // optional per-segment voice

}

const script: VoiceoverSegment[] = [

{ text: "Welcome to our product overview.", startTime: 0 },

{ text: "Here's how it works in three simple steps.", startTime: 5.5 },

{ text: "Step one: upload your content.", startTime: 10 },

{ text: "Step two: customize your settings.", startTime: 18 },

{ text: "Step three: share with the world.", startTime: 25 },

];

```

### Step 2: Generate Each Segment

```typescript

async function generateSegments(

segments: VoiceoverSegment[],

tmpDir: string,

apiKey: string,

defaultVoiceId: string

): Promise<string[]> {

const paths: string[] = [];

for (let i = 0; i < segments.length; i++) {

const outputPath = path.join(tmpDir, `segment_${i}.mp3`);

await generateVoiceover(

segments[i].text,

outputPath,

apiKey,

segments[i].voiceId || defaultVoiceId

);

paths.push(outputPath);

}

return paths;

}

```

### Step 3: Create a Combined Audio Track with Positioning

Use FFmpeg to position each segment at its target timestamp and mix them into a single audio track:

```typescript

async function assembleTimedVoiceover(

segments: VoiceoverSegment[],

segmentPaths: string[],

totalDuration: number,

outputPath: string

) {

const inputs: string[] = [];

const filterParts: string[] = [];

for (let i = 0; i < segmentPaths.length; i++) {

inputs.push('-i', segmentPaths[i]);

const delay = Math.round(segments[i].startTime * 1000);

filterParts.push(`[${i}:a]adelay=${delay}|${delay}[a${i}]`);

}

const mixInputs = segments.map((_, i) => `[a${i}]`).join('');

const filterComplex = [

...filterParts,

`${mixInputs}amix=inputs=${segments.length}:normalize=0[mixed]`,

`[mixed]apad=whole_dur=${totalDuration}[out]`

].join(';');

await execFileAsync('ffmpeg', [

'-y',

...inputs,

'-filter_complex', filterComplex,

'-map', '[out]',

'-c:a', 'aac', '-b:a', '192k',

outputPath

]);

}

```

### Step 4: Mix the Assembled Voiceover into the Video

Use one of the mixing modes above (replace, mix over, or add as track) with the assembled voiceover file.

---

## Complete Pipeline Example

```typescript

import * as path from 'path';

import * as os from 'os';

async function addVoiceoverToVideo(

videoPath: string,

script: string | VoiceoverSegment[],

apiKey: string,

options: {

voiceId?: string;

mode?: 'replace' | 'mix' | 'add';

bgVolume?: number;

} = {}

) {

const {

voiceId = 'JBFqnCBsd6RMkjVDRZzb',

mode = 'mix',

bgVolume = 0.2

} = options;

const tmpDir = path.join(os.tmpdir(), `voiceover_${Date.now()}`);

await fs.promises.mkdir(tmpDir, { recursive: true });

const outputPath = videoPath.replace(/(\\\w+)$/, '_voiceover$1');

if (typeof script === 'string') {

// Simple full-video voiceover

console.log('Generating voiceover audio...');

const voiceoverPath = path.join(tmpDir, 'voiceover.mp3');

await generateVoiceover(script, voiceoverPath, apiKey, voiceId);

console.log(`Mixing audio (mode: ${mode})...`);

switch (mode) {

case 'replace':

await replaceAudio(videoPath, voiceoverPath, outputPath);

break;

case 'mix':

await mixOverAudio(videoPath, voiceoverPath, outputPath, bgVolume);

break;

case 'add':

await addAudioTrack(videoPath, voiceoverPath, outputPath);

break;

}

} else {

// Timed segments

console.log(`Generating ${script.length} voiceover segments...`);

const segmentPaths = await generateSegments(script, tmpDir, apiKey, voiceId);

// Get video duration

const { stdout } = await execFileAsync('ffprobe', [

'-v', 'quiet', '-print_format', 'json', '-show_format', videoPath

]);

const duration = parseFloat(JSON.parse(stdout).format.duration);

console.log('Assembling timed voiceover...');

const assembledPath = path.join(tmpDir, 'assembled_voiceover.aac');

await assembleTimedVoiceover(script, segmentPaths, duration, assembledPath);

console.log(`Mixing audio (mode: ${mode})...`);

switch (mode) {

case 'replace':

await replaceAudio(videoPath, assembledPath, outputPath);

break;

case 'mix':

await mixOverAudio(videoPath, assembledPath, outputPath, bgVolume);

break;

case 'add':

await addAudioTrack(videoPath, assembledPath, outputPath);

break;

}

}

// Clean up

await fs.promises.rm(tmpDir, { recursive: true, force: true });

console.log(`Voiceover added: ${outputPath}`);

return outputPath;

}

```

## Tips

- **Character limits:** ElevenLabs has a per-request character limit (typically 5,000 characters). For long narrations, split the text into chunks and concatenate the resulting audio files.
- **Audio format:** ElevenLabs returns MP3 by default. You can request other formats via the `output_format` parameter (e.g., `pcm_16000` for raw PCM, `mp3_44100_128` for specific bitrate).

- **Pacing:** If the voiceover needs to match specific video timing, adjust the text length per segment rather than trying to speed up/slow down the generated audio. Shorter text = shorter audio.
- **Silence padding:** Use `apad` or `adelay` in FFmpeg to position audio precisely. ElevenLabs doesn't add leading silence, so timing is exact.

- **Cost awareness:** ElevenLabs charges per character. Long narrations can add up. Let the user know the approximate character count before generating.
- **Multilingual:** The `eleven_multilingual_v2` model supports 29 languages. The text language is auto-detected. No special configuration needed — just write the text in the target language.
