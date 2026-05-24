---
name: podcast-generator
description: Turn topics into podcast scripts and audio with ElevenLabs production.
---

# Podcast Generator

Turn research, articles, or topics into podcast-ready scripts and audio content. Generate conversational scripts with host/guest dynamics and produce audio using ElevenLabs text-to-speech. Supports script-only workflows, multilingual episodes, and series planning.

## When to Use

- User wants to turn written content into a podcast episode
- User wants to create a podcast-style summary of a topic or paper

- User wants to generate audio content from research
- User mentions "AI Pods", podcast, or audio content creation

- User wants a podcast script without audio generation (script-only mode)
- User wants to plan a podcast series or recurring show

- User says "create an episode about..." (topic-first requests without explicitly saying "podcast")
- User says "write a script for..." (scriptwriting intent that maps to podcast format)

- User says "make an audio version of..." (converting written content like articles, blog posts, or reports into listenable content)
- User says "plan my next episode" (continuing an existing series)

- User says "record / produce / generate an episode" (audio production intent)

## When NOT to Use

- Music creation or sound effects
- Video content (use storyboard skill for planning)

- Written summaries only (use deep-research skill)

## Workflow Modes

Before starting, determine which workflow the user needs:

| Mode | Description | When to Use |

|------|-------------|-------------|

| **Script-only** | Research + script writing, no audio | User wants the script first, no ElevenLabs key, or iterating on content before committing to audio |

| **Full production** | Research + script + audio generation + normalization | User has ElevenLabs key and wants the finished audio file |

| **Series planning** | Define show identity + episode calendar + recurring structure | User wants to build an ongoing podcast, not just a one-off episode |

If the user's intent is ambiguous, ask which mode they prefer. Default to **script-only** if no ElevenLabs key is available — do not block progress on audio setup.

## Methodology

### Step 1: Structured Research

Gather source material systematically. Do not skip this step — a well-researched script sounds authoritative; a loosely researched one sounds generic.

#### Research checklist — run these searches in parallel

| Category | What to Gather | How |

|----------|---------------|-----|

| **Recent events** | Latest results, scores, announcements, breaking news | `webSearch` with date-specific queries (e.g., "Real Madrid results April 2026") |

| **Statistics & data** | Standings, player stats, records, rankings | `webSearch` for official stats pages (fbref, transfermarkt, official league sites) |

| **Quotes & reactions** | Press conference quotes, player interviews, social media reactions | `webSearch` for post-match quotes, press conferences |

| **Context & history** | Historical comparisons, records being chased, milestones | `webSearch` for historical context related to current events |

| **Narrative angles** | Controversies, storylines, fan sentiment, trending debates | `webSearch` for opinion pieces, fan forums, trending topics |

##### Research template — fill this before writing

```text

EPISODE RESEARCH BRIEF

======================

Topic: [main topic]

Date context: [what just happened / why this is timely]

KEY FACTS:

- [fact 1 with source]
- [fact 2 with source]

- [fact 3 with source]

STATISTICS:

- [stat 1]
- [stat 2]

QUOTES:

- "[quote]" — [who said it, when]

NARRATIVE ANGLES:

- [angle 1: why it's interesting]
- [angle 2: the contrarian take]

OPEN QUESTIONS:

- [what's still uncertain / debatable]

```

Run at least 3 parallel web searches covering different facets of the topic. Cross-reference facts across sources. Flag anything that's unverified or contradictory — use it as discussion material in the script rather than stating it as fact.

### Step 2: Format Selection

Choose the podcast format:

| Format | Description | Best For |

|--------|-------------|----------|

| **Solo explainer** | One host walks through the topic | Tutorials, news summaries, deep dives |

| **Conversational duo** | Two hosts discuss and riff | Making complex topics accessible, entertainment |

| **Interview style** | Host asks questions, expert answers | Technical topics, research papers |

| **Debate** | Two perspectives argue a topic | Controversial or nuanced subjects |

| **Narrative** | Storytelling with narration | Case studies, historical events |

#### Format templates with segment timing

#### Conversational Duo (recommended default)

| Segment | Duration | Word Count | Speaker Balance |

|---------|----------|------------|-----------------|

| Cold open | 15–30s | 40–75 | 50/50 |

| Setup/intro | 30–60s | 75–150 | 60/40 (Explainer leads) |

| Segment 1 | 3–5 min | 450–750 | 55/45 |

| Segment 2 | 3–5 min | 450–750 | 45/55 |

| Segment 3 | 3–5 min | 450–750 | 55/45 |

| Segment 4 (optional) | 3–5 min | 450–750 | 50/50 |

| Segment 5 (optional) | 3–5 min | 450–750 | 50/50 |

| Takeaways | 1–2 min | 150–300 | 50/50 |

| Outro | 15–30s | 40–75 | 50/50 |

Target overall speaker balance: **no host should have less than 40% of total lines.** The Questioner is not a sidekick — they drive the conversation forward.

#### Solo Explainer

| Segment | Duration | Word Count |

|---------|----------|------------|

| Hook | 15–30s | 40–75 |

| Context | 1–2 min | 150–300 |

| Main body (3–4 sections) | 3–5 min each | 450–750 each |

| Summary + CTA | 1–2 min | 150–300 |

#### Interview Style

| Segment | Duration | Word Count | Speaker Balance |

|---------|----------|------------|-----------------|

| Host intro | 30–60s | 75–150 | Host only |

| Guest intro | 1–2 min | 150–300 | 70/30 (Host leads) |

| Q&A blocks (4–6) | 3–5 min each | 450–750 each | 30/70 (Guest leads) |

| Rapid fire | 2–3 min | 300–450 | 50/50 |

| Closing | 30–60s | 75–150 | Host only |

### Step 3: Script Writing — NotebookLM Pattern

The two-host format that works (reverse-engineered from Google's Audio Overviews):

- **Host A = "The Explainer"** — knows the material, breaks down concepts
- **Host B = "The Questioner"** — audience surrogate, asks the "wait, why?" questions

- **Dialog rhythm:** alternate short punchy lines with longer explanations. Sprinkle affirmations: "Right.", "Exactly.", "Okay so—"
- **Arc:** open with common misconception → introduce source that challenges it → unpack implications → "so what does this mean for you"

- **Transitions:** "And on that note..." / "Which brings us to..." / "Here's where it gets weird—"

#### Structure (target ~150 words per minute of audio)

1. **Cold open** (15–30s) — the single most surprising finding, stated as a question or contradiction
2. **Setup** (30–60s) — what we're covering, why it matters now

3. **Segments** (3–5 × 2–4 min) — one idea each; end each with a mini-hook into the next
4. **Takeaways** (1–2 min) — 3 things to remember

5. **Outro** (15s) — sign-off

**Write for ears, not eyes:** contractions always, no semicolons, no parentheticals. If you wouldn't say it out loud, rewrite it.

**Script format** — one line per utterance, speaker tag in brackets, blank line between speakers. This is the unit you'll chunk for TTS:

```text

[ALEX]: So today we're diving into something that honestly broke my brain a little.

[SAM]: Oh no. What now.

[ALEX]: Okay — you know how everyone says [common belief]? There's this paper from [source] that basically says... the opposite.

[SAM]: Wait. The *opposite* opposite?

```

##### Script-only deliverable format

When delivering a script without audio, include these production notes at the end:

```text

PRODUCTION NOTES:

- Total word count: [number]
- Estimated duration: [minutes] (at 150 wpm)

- Segment breakdown: [list segments with word counts]
- Voice recommendations: [suggested voice profiles for each host]

- Music/SFX suggestions: [intro, transitions, outro, background]

```

### Step 4: Audio Generation — ElevenLabs

> **Skip this step in script-only mode.** If the user doesn't have an ElevenLabs key or only wants the script, deliver the script with production notes and stop here.

**Install:** `pip install elevenlabs pydub`

**Model choice:** `eleven_multilingual_v2`for quality (10K char limit per call);`eleven_turbo_v2_5` for speed/cost (40K char limit, ~300ms latency, ~3x faster).

**Voice IDs that work for duo podcasts** (from the default library — verify with `client.voices.search()`):

- `JBFqnCBsd6RMkjVDRZzb` (George — warm, mid-range male)
- `21m00Tcm4TlvDq8ikWAM` (Rachel — clear, measured female)

- `pNInz6obpgDQGcFmaJgB` (Adam — energetic narrator)
- `EXAVITQu4vr4xnSDxMaL` (Bella — conversational female)

#### Settings for conversational podcast delivery

- `stability: 0.45` — lower = more expressive; below 0.3 gets inconsistent
- `similarity_boost: 0.8` — keeps voice consistent across chunks

- `style: 0.3` — mild exaggeration for energy (0 = flat)
- `use_speaker_boost: True`

```python

import os

from elevenlabs.client import ElevenLabs

from pydub import AudioSegment

import io

client = ElevenLabs(api_key=os.environ["ELEVENLABS_API_KEY"])

VOICES = {"ALEX": "JBFqnCBsd6RMkjVDRZzb", "SAM": "21m00Tcm4TlvDq8ikWAM"}

def render_line(speaker: str, text: str) -> AudioSegment:

audio = client.text_to_speech.convert(

voice_id=VOICES[speaker],

text=text,

model_id="eleven_multilingual_v2",

output_format="mp3_44100_128",

voice_settings={"stability": 0.45, "similarity_boost": 0.8,

"style": 0.3, "use_speaker_boost": True},

)

return AudioSegment.from_mp3(io.BytesIO(b"".join(audio)))

# parse script → list of (speaker, text) tuples, render each, concat

gap = AudioSegment.silent(duration=350) \# 350ms between speakers

episode = sum((render_line(s, t) + gap for s, t in lines), AudioSegment.empty())

episode.export("episode_raw.mp3", format="mp3", bitrate="128k")

```

**Chunking long utterances:** split at sentence boundaries (`.`,`?`,`!`), keep under ~800 chars per call. Pass`previous_text`/`next_text` params to preserve prosody across chunk boundaries.

### Step 5: Loudness Normalization

> **Skip this step in script-only mode.**

Podcast standard is **-16 LUFS** (stereo) per Apple/Spotify specs. pydub's `normalize()`is peak-only — not LUFS. Use ffmpeg's two-pass`loudnorm`via the`ffmpeg-normalize` wrapper:

```bash

pip install ffmpeg-normalize

ffmpeg-normalize episode_raw.mp3 -o episode.mp3 -c:a libmp3lame -b:a 128k \\

-t -16 -tp -1.5 -lra 11 --normalization-type ebu

```

`-t -16`= target LUFS,`-tp -1.5`= true-peak ceiling (prevents clipping),`-lra 11` = loudness range. This runs two passes automatically (analyze, then correct).

## Multilingual & Localization Support

When the target audience speaks a language other than English, follow these guidelines:

### Language Selection

- Ask the user what language the podcast should be in during the initial questions
- If the audience is region-specific (e.g., LATAM, Brazil, France), default to the primary language of that region

- If the user doesn't specify, infer from context (e.g., "LATAM market" → Spanish)

### Model Selection for Non-English

- **Always use `eleven_multilingual_v2`** for non-English scripts —`eleven_turbo_v2_5` has limited language support and may produce artifacts in non-English speech
- Set `stability` slightly higher (0.50–0.55) for non-English languages to reduce mispronunciation

- Test voice IDs with a short sample in the target language before rendering the full episode — not all default voices perform equally across languages

### Voice Selection by Language

| Language | Recommended Approach |

|----------|---------------------|

| Spanish | Use `client.voices.search()`to find native Spanish voices. Fallback: George and Rachel handle Spanish reasonably well with`eleven_multilingual_v2` |

| Portuguese | Search for native Portuguese voices. Brazilian Portuguese and European Portuguese differ significantly — match the audience |

| French | Search for native French voices |

| Other | Always search for native voices first; multilingual fallbacks as backup |

### Script Writing for Non-English

- Write the entire script in the target language — do not write in English and translate
- Use natural spoken patterns of the target language, not literal translations of English idioms

- Proper nouns and brand names: keep the original spelling but add phonetic hints in parentheses if the TTS might mispronounce them
- For mixed-language audiences (e.g., Spanglish), be intentional about when and why you switch languages — it should feel natural, not random

## Series Planning

When the user wants to build an ongoing podcast (not just a one-off episode), establish the series identity first.

### Show Bible

Create a show bible document that defines the recurring elements:

```text

SHOW BIBLE

==========

Show name: [name]

Tagline: [one-line description]

Target audience: [who listens]

Language: [primary language]

Format: [solo / duo / interview / rotating]

Tone: [casual-analytical / high-energy / calm-thoughtful / etc.]

HOSTS:

- [Host 1 name]: [role — explainer/questioner/narrator] — [personality in 1 sentence]
- [Host 2 name]: [role] — [personality in 1 sentence]

RECURRING SEGMENTS:

- [Segment name]: [what it covers, where it appears in the episode]
- [Segment name]: [what it covers, where it appears in the episode]

EPISODE STRUCTURE:

1. [Opening element — jingle, cold open, catchphrase]
2. [Main content — how many segments, typical length]

3. [Recurring closer — sign-off phrase, CTA]

BRANDING:

- Opening catchphrase: "[phrase]"
- Closing catchphrase: "[phrase]"

- Episode naming convention: [e.g., "Ep. XX: [Topic]"]

CONTENT PILLARS:

- [Pillar 1]: [description — e.g., "Match analysis and tactical breakdowns"]
- [Pillar 2]: [description — e.g., "Transfer rumors and squad management"]

- [Pillar 3]: [description — e.g., "Historical deep dives and legend profiles"]

```

### Episode Calendar

Plan episodes in advance to maintain consistency and cover the content pillars:

```text

EPISODE CALENDAR

================

Frequency: [weekly / biweekly / monthly]

Release day: [e.g., "Every Monday"]

UPCOMING EPISODES:

| Ep \# | Target Date | Topic | Content Pillar | Status |

|------|-------------|-------|----------------|--------|

| 01 | [date] | [topic] | [pillar] | [draft/recorded/published] |

| 02 | [date] | [topic] | [pillar] | [planned] |

| 03 | [date] | [topic] | [pillar] | [planned] |

```

### Series Continuity

Across episodes, maintain:

- **Consistent host names and personalities** — don't change character traits between episodes
- **Running references** — callbacks to previous episodes ("as we talked about last week...")

- **Episode numbering** — sequential numbering in the script header and file names
- **File naming convention** — `episodio_XX_script.txt`or`episode_XX_script.txt`

- **Evolving storylines** — for topic-based series, track ongoing narratives (e.g., a team's season, a company's trajectory) and reference the arc across episodes

## AI-Assisted Research Integration

Leverage web search systematically to make each episode timely and data-rich. Do not rely on general knowledge alone — always ground the script in current, verifiable information.

### Search Strategy

Run searches in parallel to maximize speed. Use at least 3 different search queries per episode:

```javascript

// Run these in parallel — don't serialize

const [results1, results2, results3] = await Promise.all([

webSearch({ query: "[topic] latest news [current month year]" }),

webSearch({ query: "[topic] statistics standings data [year]" }),

webSearch({ query: "[topic] analysis reactions opinions [current month year]" })

]);

```

### Data Verification

- Cross-reference statistics across at least 2 sources before including them in the script
- When sources conflict, acknowledge the discrepancy in the script — it makes good discussion material

- Always include the date context of your research — "as of [date]" — so listeners know the information is current
- For rapidly changing topics (sports scores, stock prices, breaking news), note in the script header when the research was conducted

### Enriching the Script with Data

Transform raw research into conversational content:

| Raw Data | Script Version |

|----------|---------------|

| "Player scored 59 goals in 2025" | "Fifty-nine goals. In one calendar year. That ties the all-time club record." |

| "Team is 4 points behind leader" | "Four points. That's the gap. And with eight games left, there's almost no margin for error." |

| "Manager was fired after 7 months" | "Seven months. That's all it lasted. One of the shortest managerial stints in the club's recent history." |

Numbers should be spoken out in script form when they open a sentence or carry dramatic weight. Use digits when they're mid-sentence and factual.

## Episode Length Guidelines

| Content Type | Target Length | Script Word Count |

|-------------|-------------|-------------------|

| News summary | 5-10 min | 750-1,500 words |

| Topic explainer | 10-20 min | 1,500-3,000 words |

| Deep dive | 20-40 min | 3,000-6,000 words |

| Research paper review | 15-25 min | 2,250-3,750 words |

Rule of thumb: ~150 words per minute of audio.

## Best Practices

1. **Hook early** — if the first 30 seconds aren't interesting, listeners skip
2. **One idea per segment** — don't cram too much; let ideas breathe

3. **Use stories and examples** — abstract concepts need concrete illustrations
4. **Vary pacing** — alternate between fast energy and slow, thoughtful moments

5. **End with value** — give listeners a clear takeaway or action item
6. **Ground in data** — every claim should trace back to your research; vague statements kill credibility

7. **Name your sources** — "according to fbref" or "the manager said in the press conference" adds authority
8. **Maintain series identity** — if this is part of a series, use the show bible for consistent tone, host names, and recurring elements

## Limitations

- Audio generation requires `ELEVENLABS_API_KEY` env var (script-only mode does not)
- Voices mispronounce technical terms/acronyms — spell phonetically in the script (`"Kubernetes"`→`"koo-ber-NET-eez"`) or use ElevenLabs pronunciation dictionaries

- `eleven_multilingual_v2` has known issues with very long single calls (voice drift, occasional stutter) — chunk at sentence boundaries, don't send 5K-char blobs
- Cost: ~$0.18–0.30 per 1000 characters depending on plan; a 20-min episode (~3000 words) ≈ $3–5

- Non-English voices: quality varies by language and voice; always test with a short sample before full rendering
