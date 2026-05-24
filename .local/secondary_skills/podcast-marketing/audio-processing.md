# Audio Processing

Whisper transcription setup, audiogram generation, and audio clip extraction.

## Table of Contents

- [Whisper Transcription](#whisper-transcription) — API setup, basic and large-file transcription
- [Parsing SRT/VTT Files](#parsing-srtvtt-files) — Convert subtitle files to normalized segments

- [Audiogram Generation](#audiogram-generation) — Extract clips and create waveform videos
- [Clip Extraction](#clip-extraction)

- [Waveform Video Generation](#waveform-video-generation)
- [Audiogram Best Practices](#audiogram-best-practices)

## Whisper Transcription

Use OpenAI's Whisper API to transcribe podcast audio. This produces timestamped segments essential for show notes and audiogram clips.

### Setup

```bash

pip install openai pydub

```

Requires `OPENAI_API_KEY` environment variable. Check if it's set before proceeding — if not, request it from the user via the environment-secrets skill.

### Transcription Script

```python

import os

from openai import OpenAI

from pydub import AudioSegment

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

def transcribe_episode(audio_path: str) -> dict:

"""Transcribe a podcast episode with timestamps.

Whisper API has a 25MB file size limit. For longer episodes,

split into chunks first.

"""

file_size = os.path.getsize(audio_path)

if file_size > 24 * 1024 * 1024:

return transcribe_large_file(audio_path)

with open(audio_path, "rb") as f:

result = client.audio.transcriptions.create(

model="whisper-1",

file=f,

response_format="verbose_json",

timestamp_granularities=["segment"],

)

return {

"text": result.text,

"segments": [

{

"start": seg.start,

"end": seg.end,

"text": seg.text.strip(),

}

for seg in result.segments

],

}

def transcribe_large_file(audio_path: str, chunk_minutes: int = 10) -> dict:

"""Split large files into chunks and transcribe each."""

audio = AudioSegment.from_file(audio_path)

chunk_ms = chunk_minutes * 60 * 1000

chunks = [audio[i : i + chunk_ms] for i in range(0, len(audio), chunk_ms)]

all_segments = []

full_text = []

offset = 0.0

for i, chunk in enumerate(chunks):

chunk_path = f"/tmp/chunk_{i}.mp3"

chunk.export(chunk_path, format="mp3", bitrate="128k")

with open(chunk_path, "rb") as f:

result = client.audio.transcriptions.create(

model="whisper-1",

file=f,

response_format="verbose_json",

timestamp_granularities=["segment"],

)

for seg in result.segments:

all_segments.append({

"start": seg.start + offset,

"end": seg.end + offset,

"text": seg.text.strip(),

})

full_text.append(result.text)

offset += chunk_minutes * 60

os.remove(chunk_path)

return {"text": " ".join(full_text), "segments": all_segments}

```

### Parsing SRT/VTT Files

If the user provides an existing transcript file instead of audio:

```python

import re

def parse_srt(content: str) -> list[dict]:

"""Parse SRT subtitle file into segments."""

blocks = re.split(r"\n\n+", content.strip())

segments = []

for block in blocks:

lines = block.strip().split("\n")

if len(lines) < 3:

continue

time_match = re.match(

r"(\d{2}):(\d{2}):(\d{2}),(\d{3}) --> (\d{2}):(\d{2}):(\d{2}),(\d{3})",

lines[1],

)

if not time_match:

continue

g = time_match.groups()

start = int(g[0]) * 3600 + int(g[1]) * 60 + int(g[2]) + int(g[3]) / 1000

end = int(g[4]) * 3600 + int(g[5]) * 60 + int(g[6]) + int(g[7]) / 1000

text = " ".join(lines[2:])

segments.append({"start": start, "end": end, "text": text})

return segments

def parse_vtt(content: str) -> list[dict]:

"""Parse WebVTT file into segments."""

lines = content.strip().split("\n")

if lines[0].startswith("WEBVTT"):

lines = lines[1:]

segments = []

i = 0

while i < len(lines):

line = lines[i].strip()

time_match = re.match(

r"(\d{2}):(\d{2}):(\d{2})\(\d{3}) --> (\d{2}):(\d{2}):(\d{2})\(\d{3})",

line,

)

if time_match:

g = time_match.groups()

start = int(g[0]) * 3600 + int(g[1]) * 60 + int(g[2]) + int(g[3]) / 1000

end = int(g[4]) * 3600 + int(g[5]) * 60 + int(g[6]) + int(g[7]) / 1000

i += 1

text_lines = []

while i < len(lines) and lines[i].strip():

text_lines.append(lines[i].strip())

i += 1

segments.append({"start": start, "end": end, "text": " ".join(text_lines)})

i += 1

return segments

```

## Audiogram Generation

Audiograms are short audio clips (30-60 seconds) with a waveform visualization, designed for social media. They turn a pull quote into a shareable video clip.

### Dependencies

```bash

pip install pydub numpy Pillow moviepy

```

Also requires `ffmpeg` (available in the Replit environment).

### Clip Extraction

Extract the audio segment around a notable quote:

```python

from pydub import AudioSegment

def extract_clip(

audio_path: str,

start_seconds: float,

end_seconds: float,

output_path: str,

fade_ms: int = 500,

) -> str:

"""Extract an audio clip with fade in/out."""

audio = AudioSegment.from_file(audio_path)

clip = audio[int(start_seconds * 1000) : int(end_seconds * 1000)]

clip = clip.fade_in(fade_ms).fade_out(fade_ms)

clip.export(output_path, format="mp3", bitrate="128k")

return output_path

```

### Waveform Video Generation

Create a simple waveform visualization video from an audio clip:

```python

import numpy as np

from PIL import Image, ImageDraw, ImageFont

from pydub import AudioSegment

import subprocess

import os

def generate_audiogram(

audio_path: str,

quote_text: str,

speaker_name: str,

output_path: str,

width: int = 1080,

height: int = 1080,

bg_color: str = "#1a1a2e",

wave_color: str = "#e94560",

text_color: str = "#ffffff",

fps: int = 30,

):

"""Generate an audiogram video with waveform and quote overlay.

Creates a square video (1080x1080) optimized for Instagram/LinkedIn.

The video shows the quote text with an animated waveform underneath.

"""

audio = AudioSegment.from_file(audio_path)

samples = np.array(audio.get_array_of_samples(), dtype=np.float32)

if audio.channels == 2:

samples = samples.reshape(-1, 2).mean(axis=1)

samples = samples / np.max(np.abs(samples))

duration_s = len(audio) / 1000.0

total_frames = int(duration_s * fps)

samples_per_frame = len(samples) // total_frames

frame_dir = "/tmp/audiogram_frames"

os.makedirs(frame_dir, exist_ok=True)

for frame_idx in range(total_frames):

img = Image.new("RGB", (width, height), bg_color)

draw = ImageDraw.Draw(img)

try:

font_quote = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 36)

font_speaker = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 28)

except OSError:

font_quote = ImageFont.load_default()

font_speaker = font_quote

margin = 80

max_text_width = width - 2 * margin

words = quote_text.split()

lines = []

current_line = ""

for word in words:

test = f"{current_line} {word}".strip()

bbox = draw.textbbox((0, 0), test, font=font_quote)

if bbox[2] - bbox[0] <= max_text_width:

current_line = test

else:

if current_line:

lines.append(current_line)

current_line = word

if current_line:

lines.append(current_line)

text_block = f'"{chr(10).join(lines)}"'

y_text = height // 4

for line in text_block.split("\n"):

bbox = draw.textbbox((0, 0), line, font=font_quote)

x_text = (width - (bbox[2] - bbox[0])) // 2

draw.text((x_text, y_text), line, fill=text_color, font=font_quote)

y_text += bbox[3] - bbox[1] + 10

speaker_text = f"— {speaker_name}"

bbox = draw.textbbox((0, 0), speaker_text, font=font_speaker)

draw.text(

((width - (bbox[2] - bbox[0])) // 2, y_text + 20),

speaker_text,

fill=wave_color,

font=font_speaker,

)

wave_y = int(height * 0.75)

wave_height_max = 80

start_sample = frame_idx * samples_per_frame

end_sample = start_sample + samples_per_frame

frame_samples = samples[start_sample:end_sample]

num_bars = 60

bar_width = (width - 2 * margin) // num_bars

chunk_size = max(1, len(frame_samples) // num_bars)

for i in range(num_bars):

chunk = frame_samples[i * chunk_size : (i + 1) * chunk_size]

if len(chunk) == 0:

continue

amplitude = np.mean(np.abs(chunk))

bar_h = int(amplitude * wave_height_max * 2) + 2

x = margin + i * bar_width

draw.rectangle(

[x, wave_y - bar_h // 2, x + bar_width - 2, wave_y + bar_h // 2],

fill=wave_color,

)

img.save(f"{frame_dir}/frame_{frame_idx:05d}.png")

subprocess.run([

"ffmpeg", "-y",

"-framerate", str(fps),

"-i", f"{frame_dir}/frame_%05d.png",

"-i", audio_path,

"-c:v", "libx264",

"-pix_fmt", "yuv420p",

"-c:a", "aac",

"-shortest",

output_path,

], check=True, capture_output=True)

for f in os.listdir(frame_dir):

os.remove(os.path.join(frame_dir, f))

os.rmdir(frame_dir)

return output_path

```

### Audiogram Best Practices

- **Duration**: 30-60 seconds max. Social feeds auto-play muted — the visual must hook in 3 seconds.
- **Aspect ratios**: 1:1 (1080x1080) for Instagram/LinkedIn feed, 9:16 (1080x1920) for Stories/Reels/TikTok.

- **Always include the quote as text overlay** — most viewers watch without sound.
- **Brand colors**: Use the podcast's brand colors for the background and waveform. Ask the user for hex codes if not provided.

- **File format**: MP4 with H.264 video and AAC audio for maximum platform compatibility.
