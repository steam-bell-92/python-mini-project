# YouTube Processing

How to extract transcripts, metadata, and audio from YouTube videos for the podcast marketing pipeline.

## Table of Contents

- [URL Handling](#url-handling) — Recognize and normalize YouTube URLs
- [Caption Extraction](#caption-extraction) — Fetch auto-generated or manual subtitles (preferred, no API key)

- [Audio Download & Transcription](#audio-download--transcription) — Fallback when no captions exist
- [Metadata Extraction](#metadata-extraction) — Title, channel, description, duration

- [Integration with Content Pipeline](#integration-with-content-pipeline) — How YouTube input feeds into the standard pipeline

## URL Handling

YouTube URLs come in several formats. Normalize to a video ID before processing:

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`

- `https://www.youtube.com/embed/VIDEO_ID`
- `https://m.youtube.com/watch?v=VIDEO_ID`

- URLs with extra parameters: `&t=120`, `&list=PLxxx`, `&si=xxx`

```python

import re

def extract_video_id(url: str) -> str | None:

patterns = [

r"(?:youtube\\com/watch\\v=|youtu\\be/|youtube\\com/embed/)([a-zA-Z0-9_-]{11})",

]

for pattern in patterns:

match = re.search(pattern, url)

if match:

return match.group(1)

return None

```

## Caption Extraction

The preferred approach — fast, free, and doesn't require downloading the full audio.

### Using youtube-transcript-api

```bash

pip install youtube-transcript-api

```

```python

from youtube_transcript_api import YouTubeTranscriptApi

def get_youtube_transcript(video_id: str, languages: list[str] | None = None) -> dict:

"""Fetch transcript from YouTube's caption system.

Tries manually uploaded captions first, then auto-generated.

Returns a normalized transcript dict compatible with the content pipeline.

Args:

video_id: The 11-character YouTube video ID.

languages: Preferred languages in order. Defaults to ["en"].

Returns:

dict with "text" (full transcript string) and "segments"

(list of {start, end, text} dicts).

Raises:

Exception if no captions are available in any language.

"""

if languages is None:

languages = ["en"]

try:

transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)

transcript = None

try:

transcript = transcript_list.find_manually_created_transcript(languages)

except Exception:

try:

transcript = transcript_list.find_generated_transcript(languages)

except Exception:

pass

if transcript is None:

available = list(transcript_list)

if available:

transcript = available[0]

if transcript.language_code not in languages:

transcript = transcript.translate("en")

if transcript is None:

raise Exception(f"No captions available for video {video_id}")

entries = transcript.fetch()

segments = []

for entry in entries:

segments.append({

"start": entry.start,

"end": entry.start + entry.duration,

"text": entry.text.strip(),

})

full_text = " ".join(seg["text"] for seg in segments)

return {"text": full_text, "segments": segments}

except Exception as e:

raise Exception(f"Failed to get transcript for {video_id}: {e}")

```

### Caption Quality Notes

- **Manually uploaded captions** are highest quality — proper punctuation, speaker labels sometimes included.
- **Auto-generated captions** are decent for clear speech but may have errors with technical terms, names, and acronyms. The content generation pipeline should handle minor transcription errors gracefully.

- **No captions available** — some videos have captions disabled. Fall back to audio download + Whisper transcription.

## Audio Download & Transcription

Fallback when YouTube captions are unavailable. Uses yt-dlp to download the audio track.

### Setup

```bash

pip install yt-dlp

```

yt-dlp is actively maintained and handles YouTube's frequent changes. Avoid using the deprecated `youtube-dl`.

### Audio Download

```python

import yt_dlp

import os

def download_youtube_audio(video_id: str, output_dir: str = "/tmp") -> str:

"""Download audio from a YouTube video.

Returns the path to the downloaded audio file.

"""

os.makedirs(output_dir, exist_ok=True)

output_path = os.path.join(output_dir, f"{video_id}.mp3")

ydl_opts = {

"format": "bestaudio/best",

"postprocessors": [{

"key": "FFmpegExtractAudio",

"preferredcodec": "mp3",

"preferredquality": "128",

}],

"outtmpl": os.path.join(output_dir, f"{video_id}.%(ext)s"),

"quiet": True,

"no_warnings": True,

}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:

ydl.download([f"https://www.youtube.com/watch?v={video_id}"])

return output_path

```

After downloading, pass the audio file to `whisper_transcribe.transcribe_episode()` from the existing transcription script.

## Metadata Extraction

Extract video metadata without downloading the full video:

```python

import yt_dlp

def get_youtube_metadata(video_id: str) -> dict:

"""Extract metadata from a YouTube video.

Returns title, channel, description, duration, publish date,

and thumbnail URL.

"""

ydl_opts = {

"quiet": True,

"no_warnings": True,

"skip_download": True,

}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:

info = ydl.extract_info(

f"https://www.youtube.com/watch?v={video_id}",

download=False,

)

return {

"title": info.get("title", "Untitled"),

"channel": info.get("channel", info.get("uploader", "Unknown")),

"description": info.get("description", ""),

"duration_seconds": info.get("duration", 0),

"publish_date": info.get("upload_date", ""),

"thumbnail": info.get("thumbnail", ""),

"view_count": info.get("view_count", 0),

"url": f"https://www.youtube.com/watch?v={video_id}",

"tags": info.get("tags", []),

}

```

## Integration with Content Pipeline

When processing a YouTube link, the output maps to the standard pipeline like this:

1. **Episode metadata** comes from YouTube video metadata (title, channel as host/guest, description, publish date).
2. **Transcript** comes from captions or Whisper transcription — same format as other input modes.

3. **Episode link** in generated content should point to the YouTube video URL instead of a podcast player link.
4. **Guest name** — try extracting from the video title (common patterns: "Interview with X", "X on Y", "feat. X") or from the video description. Falls back to the channel name.

The content pipeline doesn't need to know the source was YouTube — once you have a transcript and metadata dict, everything works identically.

### Recommended Workflow

```python

from youtube_extractor import extract_video_id, get_youtube_metadata

video_id = extract_video_id(user_provided_url)

metadata = get_youtube_metadata(video_id)

try:

transcript = get_youtube_transcript(video_id)

except Exception:

audio_path = download_youtube_audio(video_id)

transcript = transcribe_episode(audio_path)

# Now pass transcript + metadata to the content generation pipeline

```
