---
name: podcast-marketing
description: Repurpose podcast episodes into social posts, show notes, clips, and quote cards.
---

# Podcast Marketing

Turn podcast episodes into a full suite of marketing content. Supports four input modes, extracts content atoms with viral scoring, and produces platform-ready content pieces that can be published immediately.

## Requirements & Setup

### Tier 1: Text Content (always needed)

These are required for transcript extraction and content generation (show notes, blog, social, newsletter, pull quotes):

| Dependency | Install | Purpose |

|-----------|---------|---------|

| Python 3.10+ | `installProgrammingLanguage({ language: "python-3.11" })` | Runtime for all scripts |

| youtube-transcript-api | `installLanguagePackages({ language: "python", packages: ["youtube-transcript-api"] })` | YouTube caption extraction |

| yt-dlp | `installLanguagePackages({ language: "python", packages: ["yt-dlp"] })` | YouTube metadata + video/audio download |

| LLM API | Set up via Anthropic or OpenAI AI integration (Replit proxy — no user API key needed) | Content atom extraction and content generation |

### Tier 2: Quote Card Images

These are required to generate visual quote card PNG files:

| Dependency | Install | Purpose |

|-----------|---------|---------|

| Pillow | `installLanguagePackages({ language: "python", packages: ["Pillow"] })` | Image generation |

| System fonts | Already available on Nix (DejaVu Sans at `/usr/share/fonts/truetype/dejavu/`) | Typography |

No API keys needed. Run `scripts/generate_quote_cards.py` directly.

### Tier 3: Short-Form Video Clips (basic)

These produce trimmed, vertical-reformatted video clips without animated captions:

| Dependency | Install | Purpose |

|-----------|---------|---------|

| ffmpeg | `installSystemDependencies({ packages: ["ffmpeg"] })` | Video trimming, reformatting, subtitle burning |

| yt-dlp | (already in Tier 1) | Download source video from YouTube |

### Tier 4: Animated Captions (Opus Clips style)

These add word-by-word highlighted captions to video clips:

| Dependency | Install | Purpose |

|-----------|---------|---------|

| OpenAI API | Set up OpenAI AI integration OR user provides `OPENAI_API_KEY` | Whisper word-level timestamps |

| Pillow | (already in Tier 2) | Caption frame generation (alternative to ASS subtitles) |

The animated caption pipeline re-transcribes each trimmed clip through Whisper with `timestamp_granularities=["word"]` to get per-word timing. Without this, clips still work but use segment-level static captions instead.

### Setup Checklist

Before running the pipeline, verify:

```python

# Tier 1

import youtube_transcript_api \# YouTube captions

import yt_dlp \# YouTube metadata/download

import anthropic \# or openai — for content generation

# Tier 2 (if generating quote cards)

from PIL import Image, ImageFont

ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 48)

# Tier 3 (if generating video clips)

import subprocess

subprocess.run(["ffmpeg", "-version"], capture_output=True, check=True)

# Tier 4 (if generating animated captions)

import openai \# OPENAI_API_KEY must be set

```

## When to Use

- User wants to repurpose a podcast episode into marketing content
- User asks to create social media posts, blog articles, or newsletters from an episode

- User wants show notes with timestamps and key takeaways
- User asks to generate pull quotes, audiogram clips, or short-form video clips

- User provides an RSS feed and wants to process episodes in batch
- User shares a YouTube link to a podcast episode or video interview

- User says "turn this episode into content", "repurpose this podcast", or "create marketing from my episode"
- User wants to create a content calendar from podcast episodes

## When NOT to Use

- Creating a podcast from scratch (use the `podcast-generator` skill instead)
- General social media management unrelated to podcast content

## Input Modes

### Mode 1: RSS Feed

Auto-download and transcribe the latest episode(s) from a podcast RSS feed.

1. Parse the RSS feed to extract episode metadata (title, description, publish date, audio URL).
2. Download the audio file.

3. Transcribe using OpenAI Whisper (produces timestamped transcript).
4. Proceed to content generation.

Read `rss-and-batch.md` for RSS parsing details and the Whisper transcription pipeline.

### Mode 2: Raw Transcript

Accept a transcript file directly — plain text, SRT, or VTT format.

1. Detect format from file extension or content structure.
2. Parse into a normalized transcript (list of segments with optional timestamps).

3. Proceed to content generation.

SRT/VTT files preserve timestamps, which enables show notes with time markers. Plain text works but won't have timestamp data.

### Mode 3: YouTube Link

Extract transcript and metadata from a YouTube video — works for podcast episodes, interviews, talks, or any video with speech.

1. Accept a YouTube URL (full or short format).
2. Attempt to fetch YouTube's auto-generated or manually uploaded captions first (fast, free, no API key needed).

3. If no captions are available, download the audio track and transcribe via Whisper.
4. Extract video metadata (title, channel, description, publish date, duration).

5. Proceed to content generation.

Read `youtube-processing.md` for the full YouTube extraction pipeline.

### Mode 4: Batch Mode

Process the last N episodes from an RSS feed automatically.

1. Parse the RSS feed.
2. Sort episodes by publish date (newest first).

3. Download and transcribe each episode.
4. Run the content generation pipeline for each episode.

5. Organize output by episode (one directory per episode).

Read `rss-and-batch.md` for batch processing details.

## Content Generation Pipeline

Once you have a transcript and episode metadata, follow this pipeline. The order matters — each step builds on the previous one.

### Step 1: Extract Content Atoms

This replaces a simple summary. Analyze the full transcript and extract **7 types of content atoms** — these are the raw material for everything downstream.

| Atom Type | What to Look For | Example |

|-----------|-----------------|---------|

| **Narrative Arcs** | Stories with setup, tension, resolution | "When we almost lost the company in 2019..." |

| **Quotable Moments** | Punchy, memorable one-liners | "Culture eats strategy for breakfast, but execution eats both" |

| **Controversial Takes** | Opinions that challenge mainstream thinking | "I think remote work is actually worse for junior employees" |

| **Data Points** | Statistics, numbers, research findings | "We saw a 340% increase after switching to..." |

| **Frameworks** | Mental models, step-by-step processes | "The 3-bucket prioritization system..." |

| **Stories** | Personal anecdotes, case studies, examples | "Our first customer was actually..." |

| **Predictions** | Forward-looking claims about trends | "In 5 years, every company will need to..." |

For each atom, capture: the verbatim text, timestamps (start/end), speaker, atom type, and a one-line hook that could open a social post.

**Timestamp requirement:** Every atom MUST include `start_timestamp`and`end_timestamp` in seconds. Match the verbatim text against the transcript segments to find the correct timestamps. Without timestamps, video clip selection is impossible.

**Long transcript handling:** If the transcript exceeds 50,000 characters, split into overlapping chunks (5,000 char overlap) and extract atoms from each chunk separately. Deduplicate by comparing verbatim_text similarity (>80% overlap = duplicate). Merge and re-rank.

Read `content-atoms.md` for the full extraction prompt and output format.

### Step 2: Score and Assign Content Atoms

Score each atom on three dimensions to prioritize the strongest content:

| Dimension | Weight | What It Measures |

|-----------|--------|-----------------|

| **Novelty** | 40% | Is this new, surprising, or counter-intuitive? |

| **Controversy** | 30% | Will people disagree, debate, or have strong reactions? |

| **Utility** | 30% | Can someone apply this immediately? |

#### Score thresholds

- **80-100**: Priority publish — lead with these
- **60-79**: Strong fill — solid content for the calendar

- **40-59**: Gap filler — use when scheduling needs variety
- **Below 40**: Cut — not worth publishing

**Atom-to-platform assignment (anti-repetition rule):** After scoring, assign each atom to AT MOST 2 content pieces. No single quote should appear verbatim in more than 2 outputs. Use this mapping to assign the highest-scoring atoms first:

| Platform | Best Atom Types | Lead Atom |

|----------|----------------|-----------|

| Twitter thread | Controversial takes, data points | Assign atom \#1 by score |

| LinkedIn post | Frameworks, data points | Assign a DIFFERENT atom than Twitter |

| Blog post | Narrative arcs, stories | Assign a DIFFERENT atom than Twitter/LinkedIn |

| Newsletter | Top 2-3 by score, any type | Can reuse 1 atom from blog |

| Quote cards | Quotable moments | Use atoms NOT already assigned to other platforms |

| Video clips | Controversial takes, stories, data points | Based on timestamp availability |

This ensures each platform leads with a unique angle rather than repeating the same quote everywhere.

### Step 3: Show Notes

Generate structured show notes with:

- Episode title and one-paragraph description
- Timestamped topic outline (if timestamps available)

- Key takeaways as bullet points (5-7)
- **ALL links mentioned** in the episode — parse from YouTube description, transcript mentions of URLs, and episode metadata. Include every reference link, not just a subset

- Guest bio (if interview format — pull from transcript intro or episode metadata)

### Step 4: Blog Post

Write an 800-1200 word article that:

- Opens with the atom assigned to the blog (from Step 2) as the hook (not "In this episode...")
- Expands on 2-3 top atoms with context and examples from the conversation

- Includes 1-2 pull quotes from the transcript
- Ends with a CTA to listen to the full episode

- Uses subheadings for scannability

**Hard limit: 1,200 words maximum.** Count words before saving. If over, cut the weakest section.

### Step 5: Social Media Posts

Generate platform-specific posts. Each platform MUST lead with a DIFFERENT atom (from Step 2 assignment):

#### Twitter/X Thread (5-8 tweets)

- Tweet 1: Hook — the atom assigned to Twitter (controversial take or novel insight)
- Tweets 2-6: One atom per tweet, using the speakers' own words when possible

- Final tweet: CTA with episode link
- **HARD LIMIT: Every tweet MUST be under 280 characters including spaces and URLs.** Count characters before saving. Split long quotes across two tweets if needed.

##### LinkedIn Post (1 long-form)

- Open with the atom assigned to LinkedIn (framework or data point — NOT the same as Twitter hook)
- Share 2-3 insights with brief context

- Professional tone, first-person perspective
- End with a question to drive engagement + episode link

- 1,200-1,500 characters

###### Instagram Caption

- Conversational, accessible tone
- Lead with the "why should I care" angle

- Include 3-5 relevant hashtags
- End with CTA to listen (link in bio)

- 300-500 characters

**Multi-topic episodes:** If the episode covers 3+ distinct topics, also generate 1 standalone tweet per topic (not threads — single tweets) for drip-posting throughout the week. Include these in the calendar.

Read `content-templates.md` for detailed templates and examples for each platform.

### Step 6: Email Newsletter

Write newsletter copy that:

- Subject line: curiosity-driven, under 50 characters
- Preview text: complements the subject line, under 90 characters

- Body: 200-300 words built around the top 2-3 atoms
- Include 1 pull quote (can reuse 1 from blog)

- Clear CTA button text (e.g., "Listen Now", "Hear the Full Conversation")

### Step 7: Pull Quotes

Select 5-8 standalone quotes that:

- Make sense without context
- Are surprising, insightful, or emotionally resonant

- Are under 150 characters each (for shareable graphics)
- Include speaker attribution

- Have timestamps (for linking to the exact moment)

### Step 8: Quote Cards

Generate visual quote card images for the top 3-5 pull quotes.

**Requires Tier 2 dependencies** (Pillow + system fonts). Run `scripts/generate_quote_cards.py`:

```python

from generate_quote_cards import batch_generate

quotes = [

{"text": "Quote text here", "speaker_name": "Speaker", "speaker_title": "Title"},

...

]

paths = batch_generate(quotes, output_dir="quote-cards/", podcast_name="Podcast Name")

```

Each quote produces 3 files:

- `quote-N-instagram-1080x1080.png` (feed posts, carousels)
- `quote-N-twitter-1200x675.png` (tweets, LinkedIn)

- `quote-N-stories-1080x1920.png` (Instagram Stories, TikTok)

Read `quote-cards.md` for design specs, color customization, and AI background generation.

### Step 9: Short-Form Video Clips (Opus Clips Style)

Automatically identify and extract the best 30-90 second moments from the episode for YouTube Shorts, TikTok, and Instagram Reels.

**Requires Tier 3 dependencies** (ffmpeg + yt-dlp). For animated captions, also requires Tier 4 (OpenAI Whisper).

The pipeline:

1. Use content atoms (especially controversial takes, stories, and data points) to identify clip-worthy moments. **Atoms MUST have start/end timestamps** — atoms without timestamps are skipped.
2. Download the source video if from YouTube (`scripts/generate_video_clips.download_youtube_video`).

3. Trim clips at the identified timestamps with fade in/out.
4. Reformat to 9:16 vertical (center-crop or letterbox).

5. **If Tier 4 available:** Add animated word-by-word captions (Opus Clips style) via Whisper re-transcription of each clip.
6. **If Tier 4 unavailable:** Add static segment-level captions using transcript data (still readable, just not word-highlighted).

7. Burn in a progress bar and speaker name lower third.

Target: 3-5 clips per episode, each scored by viral potential. Generate a hook title for each clip.

```python

from generate_video_clips import extract_clips

results = extract_clips(

video_path="episode.mp4",

atoms=scored_atoms, \# must have start_timestamp/end_timestamp

output_dir="clips/",

speaker_name="Speaker Name",

max_clips=5,

)

```

Read `video-clips.md` for the full video clip extraction and captioning pipeline.

### Step 10: Content Calendar

Auto-schedule all generated content across platforms using best-practice timing:

| Platform | Best Times | Frequency | Content Types |

|----------|-----------|-----------|--------------|

| Twitter/X | 9-11am, 1-3pm weekdays | 1-2 posts/day | Threads, quote cards, clip links, topic tweets |

| LinkedIn | Tue-Thu 8-10am | 2-3 posts/week | Articles, quote cards, insights |

| Instagram | Mon/Wed/Fri 11am-1pm | 3-5 posts/week | Quote cards, carousels, Reels |

| TikTok | Tue/Thu/Sat 7-9pm | 3-5 posts/week | Short-form clips |

| YouTube | Sat/Sun 9am-12pm | 1-2 Shorts/week | Short-form clips |

| Newsletter | Tue/Thu morning | 1/week | Newsletter copy |

| Blog | Any weekday | 1/episode | Blog post |

Read `content-calendar.md` for scheduling logic, content mix optimization, and calendar output format.

## Quality Checklist

Run this checklist before delivering content to the user:

- [ ] **No quote recycling**: No verbatim quote appears in more than 2 content pieces
- [ ] **Platform leads are unique**: Twitter, LinkedIn, and blog each open with a different atom/angle

- [ ] **Twitter character limits**: Every tweet is under 280 characters (count them)
- [ ] **Blog word count**: Blog post is 800-1,200 words (count them)

- [ ] **LinkedIn character count**: Post is 1,200-1,500 characters
- [ ] **Instagram length**: Caption is 300-500 characters before hashtags

- [ ] **Newsletter subject line**: Under 50 characters
- [ ] **All links captured**: Show notes include every link from the YouTube description/episode metadata

- [ ] **Timestamps on atoms**: Every atom has start*timestamp and end*timestamp
- [ ] **Pull quotes are short**: Each under 150 characters

- [ ] **Content pieces generated individually**: Each piece was generated in its own LLM call (not batched with ---SEPARATOR--- patterns that cause content to bleed between files)

## Generation Best Practices

**Generate each content piece in a separate LLM call.** Do NOT batch multiple outputs (e.g., "generate blog + social + newsletter separated by ---SEPARATOR---"). This causes:

- Content bleeding between files (e.g., Twitter thread ends up in LinkedIn file)
- Quality degradation on later pieces as the model runs out of attention

- Inconsistent formatting

Instead: generate atoms first, then generate each content piece independently with the atoms + relevant assignment as context. This produces better quality and avoids file-splitting bugs.

**For long transcripts (>50K chars):** Split into 2-3 chunks with 5K char overlap. Extract atoms from each chunk. Merge and deduplicate before scoring.

## Output Structure

```text

podcast-content/

├── episode-title/

│ ├── atoms.json \# Extracted + scored content atoms with timestamps

│ ├── show-notes.md

│ ├── blog-post.md

│ ├── social/

│ │ ├── twitter-thread.md

│ │ ├── linkedin-post.md

│ │ ├── instagram-caption.md

│ │ └── topic-tweets.md \# (multi-topic episodes only)

│ ├── newsletter.md

│ ├── pull-quotes.md

│ ├── quote-cards/ \# (Tier 2)

│ │ ├── quote-1-instagram-1080x1080.png

│ │ ├── quote-1-twitter-1200x675.png

│ │ ├── quote-1-stories-1080x1920.png

│ │ └── ...

│ ├── clips/ \# (Tier 3+)

│ │ ├── clip-1-vertical.mp4

│ │ ├── clip-2-vertical.mp4

│ │ └── clips-metadata.json

│ ├── audiograms/ \# (audio-only or requested)

│ │ ├── clip-1.mp4

│ │ └── ...

│ └── calendar.json \# Scheduled content calendar

```

## Tone & Voice Calibration

Before generating content, ask the user (or infer from their existing content):

- **Brand voice** — formal, conversational, edgy, academic, playful?
- **Target audience** — who reads/follows their content?

- **Platform priorities** — which platforms matter most?
- **Minimum viral score** — threshold for content to make the cut (default: 40)

If not specified, default to conversational and professional. Mirror the energy of the podcast itself — if the hosts are casual and funny, the marketing content should reflect that.

## Composability

This skill works alongside the `podcast-generator` skill. A typical workflow might be:

1. Use `podcast-generator` to create an episode from research
2. Use `podcast-marketing` to repurpose that episode into content

## References

- `content-atoms.md` — Content atom extraction prompt, the 7 atom types, output format, and scoring rubric. Read first — atoms are the foundation for all content.
- `content-templates.md` — Detailed templates and examples for each content type (social posts, blog, newsletter, show notes, pull quotes). Read when generating specific content types.
- `quote-cards.md` — Quote card design specifications, image generation, and multi-format output. Read when generating quote cards.
- `video-clips.md` — Opus Clips-style video clip extraction, vertical reformatting, animated captions, and progress bar overlay. Read when generating short-form video clips.
- `content-calendar.md` — Platform-specific scheduling rules, content mix optimization, and calendar JSON output format. Read when generating a content calendar.
- `audio-processing.md` — Whisper transcription setup, audiogram generation pipeline, and audio clip extraction. Read when handling audio input or generating audiograms.
- `rss-and-batch.md` — RSS feed parsing, episode downloading, and batch processing logic. Read when the input is an RSS feed or batch mode is requested.
- `youtube-processing.md` — YouTube URL handling, caption extraction, audio download, and metadata retrieval. Read when the input is a YouTube link.
