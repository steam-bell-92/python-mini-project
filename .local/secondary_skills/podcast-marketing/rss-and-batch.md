# RSS Feed & Batch Processing

How to parse podcast RSS feeds, download episodes, and process multiple episodes in batch.

## RSS Feed Parsing

Podcast RSS feeds follow the iTunes/Apple Podcasts namespace. Use `feedparser` for reliable parsing.

### Setup

```bash

pip install feedparser requests

```

### Parsing Script

```python

import feedparser

import requests

import os

from datetime import datetime

def parse_podcast_feed(feed_url: str) -> list[dict]:

"""Parse a podcast RSS feed and return episode metadata."""

feed = feedparser.parse(feed_url)

if feed.bozo:

raise ValueError(f"Failed to parse feed: {feed.bozo_exception}")

podcast_info = {

"title": feed.feed.get("title", "Unknown Podcast"),

"description": feed.feed.get("summary", ""),

"link": feed.feed.get("link", ""),

"image": feed.feed.get("image", {}).get("href", ""),

}

episodes = []

for entry in feed.entries:

audio_url = None

for link in entry.get("links", []):

if link.get("type", "").startswith("audio/"):

audio_url = link["href"]

break

if not audio_url:

for enc in entry.get("enclosures", []):

if enc.get("type", "").startswith("audio/"):

audio_url = enc["href"]

break

episodes.append({

"title": entry.get("title", "Untitled"),

"description": entry.get("summary", ""),

"published": entry.get("published", ""),

"duration": entry.get("itunes_duration", ""),

"audio_url": audio_url,

"episode_number": entry.get("itunes_episode", ""),

"season": entry.get("itunes_season", ""),

"link": entry.get("link", ""),

"guest": extract_guest_name(entry),

})

episodes.sort(

key=lambda e: datetime.strptime(e["published"], "%a, %d %b %Y %H:%M:%S %z")

if e["published"]

else datetime.min.replace(tzinfo=None),

reverse=True,

)

return {"podcast": podcast_info, "episodes": episodes}

def extract_guest_name(entry: dict) -> str | None:

"""Try to extract guest name from episode metadata.

Checks itunes:author, dc:creator, and common title patterns like

'Episode 42: Interview with Jane Smith'.

"""

author = entry.get("author") or entry.get("itunes_author")

if author:

return author

title = entry.get("title", "")

patterns = ["with ", "featuring ", "ft. ", "feat. "]

for p in patterns:

if p in title.lower():

idx = title.lower().index(p) + len(p)

return title[idx:].split(" - ")[0].split(" | ")[0].strip()

return None

```

## Episode Downloading

```python

def download_episode(

audio_url: str,

output_dir: str,

filename: str | None = None,

) -> str:

"""Download a podcast episode audio file.

Returns the path to the downloaded file.

"""

if not audio_url:

raise ValueError("No audio URL provided")

os.makedirs(output_dir, exist_ok=True)

if filename is None:

filename = audio_url.split("/")[-1].split("?")[0]

if not filename.endswith((".mp3", ".m4a", ".wav", ".ogg")):

filename += ".mp3"

output_path = os.path.join(output_dir, filename)

response = requests.get(audio_url, stream=True, timeout=60)

response.raise_for_status()

with open(output_path, "wb") as f:

for chunk in response.iter_content(chunk_size=8192):

f.write(chunk)

return output_path

```

## Batch Processing

Process the last N episodes from a feed through the full content pipeline.

### Batch Workflow

```python

def batch_process(

feed_url: str,

num_episodes: int = 5,

output_base_dir: str = "podcast-content",

generate_audiograms: bool = False,

) -> list[dict]:

"""Process the last N episodes from a podcast feed.

Returns a list of results with paths to generated content.

"""

feed_data = parse_podcast_feed(feed_url)

episodes = feed_data["episodes"][:num_episodes]

results = []

for ep in episodes:

slug = slugify(ep["title"])

episode_dir = os.path.join(output_base_dir, slug)

os.makedirs(episode_dir, exist_ok=True)

audio_path = download_episode(

ep["audio_url"],

os.path.join(episode_dir, "audio"),

)

transcript = transcribe_episode(audio_path)

result = {

"episode": ep,

"transcript": transcript,

"output_dir": episode_dir,

"audio_path": audio_path,

}

results.append(result)

return results

def slugify(text: str) -> str:

"""Convert text to a filesystem-safe slug."""

import re

text = text.lower().strip()

text = re.sub(r"[^\w\s-]", "", text)

text = re.sub(r"[-\s]+", "-", text)

return text[:80]

```

### Batch Output Structure

When processing multiple episodes, organize output by episode:

```text

podcast-content/

├── episode-title-1/

│ ├── audio/

│ │ └── episode.mp3

│ ├── transcript.json

│ ├── summary.md

│ ├── show-notes.md

│ ├── blog-post.md

│ ├── social/

│ │ ├── twitter-thread.md

│ │ ├── linkedin-post.md

│ │ └── instagram-caption.md

│ ├── newsletter.md

│ └── pull-quotes.md

├── episode-title-2/

│ └── ...

└── batch-summary.md (index of all processed episodes)

```

### Rate Limiting and Costs

When batch processing, be mindful of API rate limits and costs:

- **Whisper API**: ~$0.006 per minute of audio. A 60-minute episode costs ~$0.36.
- **Rate limits**: OpenAI's Whisper API allows 50 RPM on most tiers. With chunked transcription (10-min chunks), a 60-min episode uses 6 requests.

- **Download bandwidth**: Podcast audio files are typically 30-80 MB per hour. Batch processing 10 episodes could download 300-800 MB.
- **Recommendation**: For large batches (>10 episodes), add a 2-second delay between episodes to avoid rate limits. Provide progress updates to the user during processing.

### Resumability

For large batch jobs, track progress to allow resuming if interrupted:

```python

import json

def save_progress(output_dir: str, completed: list[str]):

"""Save batch processing progress."""

progress_file = os.path.join(output_dir, ".batch-progress.json")

with open(progress_file, "w") as f:

json.dump({"completed": completed}, f)

def load_progress(output_dir: str) -> list[str]:

"""Load batch processing progress."""

progress_file = os.path.join(output_dir, ".batch-progress.json")

if os.path.exists(progress_file):

with open(progress_file) as f:

return json.load(f).get("completed", [])

return []

```
