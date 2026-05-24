# Short-Form Video Clips (Opus Clips Style)

Extract, trim, reformat, and caption short-form video clips from podcast episodes for YouTube Shorts, TikTok, and Instagram Reels.

## Table of Contents

- [Overview](#overview)
- [Clip Selection](#clip-selection)

- [Video Download](#video-download)
- [Trimming and Reformatting](#trimming-and-reformatting)

- [Animated Captions](#animated-captions)
- [Progress Bar and Lower Thirds](#progress-bar-and-lower-thirds)

- [Full Pipeline Script](#full-pipeline-script)
- [Audio-Only Fallback](#audio-only-fallback)

## Overview

The goal is to replicate the Opus Clips workflow:

1. Identify the 3-5 most engaging 30-90 second moments from an episode
2. Trim those segments from the source video

3. Reformat to 9:16 vertical (1080x1920)
4. Add word-by-word animated captions

5. Add a progress bar and speaker identification

### Requirements

- **Tier 3 (basic clips):** ffmpeg, Python 3.10+, yt-dlp, source video (YouTube download or local file). Produces trimmed, vertical-reformatted clips with static captions and progress bar.
- **Tier 4 (animated captions):** All of Tier 3 + OpenAI API key (for Whisper word-level timestamps). Produces Opus Clips-style word-by-word highlighted captions.

When Tier 4 is unavailable, the pipeline gracefully falls back to segment-level static captions using the transcript data. The clips are still high-quality — they just don't have the word-highlighting animation.

## Clip Selection

Use the scored content atoms to identify clip-worthy moments. The best clips come from:

1. **Controversial takes** (highest engagement) — moments where the guest says something polarizing
2. **Stories with payoffs** — narrative arcs with a clear setup → surprise → resolution

3. **Data points with reactions** — a surprising stat followed by the host's genuine reaction
4. **Frameworks** — step-by-step advice that viewers can screenshot

### Selection Criteria

- Must have timestamps (start and end) from the transcript
- Duration: 30-90 seconds (ideal: 45-60 seconds)

- Must start with a strong hook (first 3 seconds determine if viewer stays)
- Must end on a complete thought (no mid-sentence cuts)

- Prefer segments where the speaker is animated or passionate

### Adjusting Clip Boundaries

Raw atom timestamps often need adjustment:

- **Start**: Rewind 1-2 seconds before the atom starts to catch the speaker's intake breath or lead-in word
- **End**: Extend 1-2 seconds after the atom ends for a natural pause, or cut right after the punchline for impact

- **Avoid**: Starting mid-sentence, ending on filler words, cutting during laughter

## Video Download

For YouTube sources, download the video (not just audio) using yt-dlp:

```python

import yt_dlp

import os

def download_youtube_video(video_id: str, output_dir: str = "/tmp") -> str:

"""Download YouTube video in a format suitable for clip extraction."""

os.makedirs(output_dir, exist_ok=True)

ydl_opts = {

"format": "bestvideo[height<=1080][ext=mp4]+bestaudio[ext=m4a]/best[height<=1080][ext=mp4]",

"outtmpl": os.path.join(output_dir, f"{video_id}.%(ext)s"),

"merge_output_format": "mp4",

"quiet": True,

"no_warnings": True,

}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:

ydl.download([f"https://www.youtube.com/watch?v={video_id}"])

return os.path.join(output_dir, f"{video_id}.mp4")

```

## Trimming and Reformatting

### Trim a Clip

```python

import subprocess

def trim_clip(

input_path: str,

output_path: str,

start_seconds: float,

end_seconds: float,

fade_duration: float = 0.5,

) -> str:

"""Trim a segment from the source video with fade in/out."""

duration = end_seconds - start_seconds

cmd = [

"ffmpeg", "-y",

"-ss", str(start_seconds),

"-i", input_path,

"-t", str(duration),

"-vf", f"fade=t=in:st=0:d={fade_duration},fade=t=out:st={duration - fade_duration}:d={fade_duration}",

"-af", f"afade=t=in:st=0:d={fade_duration},afade=t=out:st={duration - fade_duration}:d={fade_duration}",

"-c:v", "libx264",

"-preset", "fast",

"-crf", "23",

"-c:a", "aac",

"-b:a", "128k",

output_path,

]

subprocess.run(cmd, check=True, capture_output=True)

return output_path

```

### Reformat to Vertical (9:16)

```python

def reformat_vertical(

input_path: str,

output_path: str,

width: int = 1080,

height: int = 1920,

) -> str:

"""Reformat video to 9:16 vertical with center crop.

For podcast videos (usually 16:9 talking heads), center-crop

focuses on the speaker. For side-by-side layouts, this may need

manual adjustment.

"""

cmd = [

"ffmpeg", "-y",

"-i", input_path,

"-vf", f"crop=ih*{width}/{height}:ih,scale={width}:{height}",

"-c:v", "libx264",

"-preset", "fast",

"-crf", "23",

"-c:a", "copy",

output_path,

]

subprocess.run(cmd, check=True, capture_output=True)

return output_path

```

## Animated Captions

The signature Opus Clips look: word-by-word text that highlights the current word as it's spoken. This requires word-level timestamps from the transcript.

### Getting Word-Level Timestamps

If the transcript only has segment-level timestamps, re-transcribe the clip with Whisper for word-level timing:

```python

from openai import OpenAI

import os

def get_word_timestamps(audio_path: str) -> list[dict]:

"""Get word-level timestamps using Whisper."""

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

with open(audio_path, "rb") as f:

result = client.audio.transcriptions.create(

model="whisper-1",

file=f,

response_format="verbose_json",

timestamp_granularities=["word"],

)

return [

{"word": w.word.strip(), "start": w.start, "end": w.end}

for w in result.words

]

```

### Generating Caption Frames

```python

from PIL import Image, ImageDraw, ImageFont

import os

def generate_caption_frame(

words: list[dict],

current_time: float,

width: int = 1080,

height: int = 1920,

words_per_group: int = 5,

font_size: int = 64,

highlight_color: str = "#FFD700",

normal_color: str = "#FFFFFF",

shadow_color: str = "#000000",

bg_color: str = None,

) -> Image.Image:

"""Generate a single caption frame with the current word highlighted."""

img = Image.new("RGBA", (width, height), (0, 0, 0, 0))

draw = ImageDraw.Draw(img)

try:

font = ImageFont.truetype(

"/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size

)

except OSError:

font = ImageFont.load_default()

active_idx = None

for i, w in enumerate(words):

if w["start"] <= current_time < w["end"]:

active_idx = i

break

if active_idx is None:

return img

group_start = (active_idx // words_per_group) * words_per_group

group_end = min(group_start + words_per_group, len(words))

group_words = words[group_start:group_end]

caption_y = int(height * 0.70)

margin = 60

line_text = " ".join(w["word"] for w in group_words)

bbox = draw.textbbox((0, 0), line_text, font=font)

text_width = bbox[2] - bbox[0]

if text_width > width - 2 * margin:

mid = len(group_words) // 2

lines = [

group_words[:mid],

group_words[mid:],

]

else:

lines = [group_words]

for line_idx, line_words in enumerate(lines):

x = margin

y = caption_y + line_idx * (font_size + 16)

full_line = " ".join(w["word"] for w in line_words)

bbox = draw.textbbox((0, 0), full_line, font=font)

line_width = bbox[2] - bbox[0]

x = (width - line_width) // 2

for w in line_words:

is_active = (

group_start + sum(len(l) for l in lines[:line_idx])

\+ line_words.index(w)

== active_idx

)

color = highlight_color if is_active else normal_color

draw.text((x + 2, y + 2), w["word"], fill=shadow_color, font=font)

draw.text((x, y), w["word"], fill=color, font=font)

word_bbox = draw.textbbox((0, 0), w["word"] + " ", font=font)

x += word_bbox[2] - word_bbox[0]

return img

```

### Burning Captions onto Video

Use ffmpeg to composite the caption frames onto the video. For efficiency, generate captions as an ASS subtitle file with styled formatting rather than frame-by-frame image overlay:

```python

def generate_ass_subtitles(

words: list[dict],

output_path: str,

words_per_group: int = 5,

highlight_color: str = "&H00D7FF&",

normal_color: str = "&HFFFFFF&",

font_size: int = 18,

) -> str:

"""Generate ASS subtitle file with word-level highlighting."""

header = f"""[Script Info]

ScriptType: v4.00+

PlayResX: 1080

PlayResY: 1920

[V4+ Styles]

Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding

Style: Default,DejaVu Sans,{font_size},{normal_color},&H000000FF,&H00000000,&H80000000,1,0,0,0,100,100,0,0,1,3,1,2,60,60,400,1

Style: Highlight,DejaVu Sans,{font_size},{highlight_color},&H000000FF,&H00000000,&H80000000,1,0,0,0,100,100,0,0,1,3,1,2,60,60,400,1

[Events]

Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text

"""

events = []

for i in range(0, len(words), words_per_group):

group = words[i : i + words_per_group]

group_start = group[0]["start"]

group_end = group[-1]["end"]

for active_idx in range(len(group)):

word = group[active_idx]

parts = []

for j, w in enumerate(group):

if j == active_idx:

parts.append(f"{{\\rHighlight}}{w['word']}{{\\rDefault}}")

else:

parts.append(w["word"])

text = " ".join(parts)

start_ts = _seconds_to_ass(word["start"])

end_ts = _seconds_to_ass(word["end"])

events.append(

f"Dialogue: 0,{start_ts},{end_ts},Default,,0,0,0,,{text}"

)

with open(output_path, "w") as f:

f.write(header + "\n".join(events) + "\n")

return output_path

def _seconds_to_ass(seconds: float) -> str:

h = int(seconds // 3600)

m = int((seconds % 3600) // 60)

s = int(seconds % 60)

cs = int((seconds % 1) * 100)

return f"{h}:{m:02d}:{s:02d}.{cs:02d}"

```

## Progress Bar and Lower Thirds

### Progress Bar

Add a thin colored bar at the bottom that fills as the clip plays:

```text

ffmpeg -i clip.mp4 -vf "drawbox=x=0:y=ih-8:w=iw*t/{duration}:h=8:color=#e94560:t=fill" output.mp4

```

### Speaker Lower Third

Add a name tag in the lower portion:

```text

ffmpeg -i clip.mp4 -vf "drawtext=text='Speaker Name':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-120:box=1:boxcolor=black@0.6:boxborderw=8" output.mp4

```

## Critical: Caption Rendering Approach

**DO NOT use the `subtitles`SRT filter** — YouTube transcript segments overlap heavily and produce garbled text with SRT-based rendering. Use`drawtext` per-segment instead.

### YouTube Transcript Overlap Problem

YouTube auto-generated transcript segments have overlapping time ranges. Two segments starting at t=5.0 and t=6.5 might both end at t=8.0. If you try to merge or interleave words from overlapping segments, you get garbled captions like "tech know it today, SHA feat".

### Solution: Sequential Caption Timeline

Treat segments as **sequential text** (representing continuous speech) and use each segment's **START time** as the anchor. Assign end time = next segment's start time. This eliminates all overlaps.

```python

def build_captions(clip_start, clip_end, segments, actual_dur):

clip_segs = []

for seg in segments:

if seg['start'] >= clip_end or seg['end'] <= clip_start:

continue

rs = max(0, seg['start'] - clip_start)

text = seg['text'].strip()

if text:

clip_segs.append((rs, text))

clip_segs.sort(key=lambda x: x[0])

deduped = []

for rs, text in clip_segs:

if deduped and abs(rs - deduped[-1][0]) < 0.3:

if len(text) > len(deduped[-1][1]):

deduped[-1] = (rs, text)

continue

deduped.append((rs, text))

timed = []

for i, (rs, text) in enumerate(deduped):

end = deduped[i+1][0] if i+1 < len(deduped) else min(rs + 3.0, actual_dur)

if end - rs < 0.3:

continue

timed.append((rs, end, text))

display = []

wpc = 4

for ms, me, mt in timed:

words = mt.split()

dur = me - ms

if len(words) <= wpc + 1:

display.append((ms, me, mt))

else:

nc = max(1, (len(words) + wpc - 1) // wpc)

cd = dur / nc

for ci in range(nc):

w0 = ci * wpc

w1 = min((ci+1) * wpc, len(words))

chunk = ' '.join(words[w0:w1])

t0 = ms + ci * cd

t1 = ms + (ci+1) * cd

display.append((t0, min(t1, actual_dur), chunk))

return display

```

### drawtext Filter Chain

Build one `drawtext`filter per caption chunk with`enable='between(t,start,end)'`:

```text

drawtext=text='caption text':fontsize=44:fontcolor=white

:fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf

:x=(w-text_w)/2:y=h*0.72

:box=1:boxcolor=black@0.50:boxborderw=14

:enable='between(t\\0.000\\1.500)'

```

### Text Escaping for drawtext

- Replace `\\` with `\\\\`
- Replace `'` with `\u2019` (right single quote)

- Replace`:`with`\\`
- Replace `%`with`%%`

## Full Pipeline Script

See `scripts/generate_video_clips.py`for the complete pipeline that chains: clip selection → trim → vertical reformat → caption generation → progress bar → output.

## Audio-Only Fallback

When the source is audio-only (RSS feed download, local MP3), generate enhanced audiogram clips instead of video clips:

1. Use the same clip selection logic (content atoms with timestamps)
2. Generate clips using`scripts/generate_audiogram.py`with the quote text overlaid

3. Output as MP4 with waveform animation

The audiogram approach is described in`references/audio-processing.md`.
