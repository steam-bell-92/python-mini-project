# Content Atoms Extraction

Content atoms are the fundamental building blocks for all marketing content. Instead of summarizing an episode and writing content from the summary, this approach extracts discrete, reusable content units that can be independently scored, filtered, and transformed into platform-native content.

## Table of Contents

- [The 7 Atom Types](#the-7-atom-types)
- [Extraction Prompt](#extraction-prompt)

- [Output Format](#output-format)
- [Scoring Rubric](#scoring-rubric)

- [Using Atoms Downstream](#using-atoms-downstream)

## The 7 Atom Types

### 1. Narrative Arcs

Stories with a clear setup, tension, and resolution. These are the most engaging content atoms because humans are wired for narrative.

**Signals:** "Let me tell you about...", "There was this time when...", "We were facing...", "The turning point was...", temporal markers (dates, "back in 2019"), emotional language.

### 2. Quotable Moments

Punchy one-liners or short statements that work as standalone text. These become quote cards, tweet hooks, and newsletter pull quotes.

**Signals:** Concise declarative statements, metaphors, analogies, memorable phrasing, moments where the host reacts with "wow" or "that's a great way to put it."

### 3. Controversial Takes

Opinions that challenge mainstream thinking or established practices. These drive the most engagement because people want to agree or argue.

**Signals:** "I actually think...", "Most people get this wrong...", "The conventional wisdom is...", "I know this is unpopular, but...", "Here's what nobody talks about..."

### 4. Data Points

Statistics, numbers, research findings, and measurable results. These add credibility and make content shareable.

**Signals:** Specific numbers, percentages, dollar amounts, time periods with results, references to studies or research, before/after comparisons.

### 5. Frameworks

Mental models, step-by-step processes, and structured ways of thinking. These are highly useful and save-worthy.

**Signals:** Numbered steps, "The way I think about it is...", categorization ("There are three types of..."), acronyms, matrices, decision trees described verbally.

### 6. Stories

Personal anecdotes, case studies, and concrete examples that illustrate broader points. Shorter and more focused than full narrative arcs.

**Signals:** Specific names, companies, or situations, "For example...", "One of our clients...", "I remember when...", details that make it feel real (place names, specific actions).

### 7. Predictions

Forward-looking claims about trends, industries, or technologies. These generate discussion and position the speaker as a thought leader.

**Signals:** "In the next 5 years...", "I think we're going to see...", "The future of X is...", "What's coming is...", "My bet is that..."

## Extraction Prompt

Use this prompt template to extract atoms from a transcript. Pass the full transcript (or chunked if too long) and episode metadata.

```text

You are a content strategist extracting reusable content atoms from a podcast transcript.

Episode: {title}

Host: {host_name}

Guest: {guest_name}

Date: {publish_date}

Transcript (with segment timestamps):

{transcript_text_with_timestamps}

Extract all content atoms from this transcript. For each atom, provide:

1. **type**: One of: narrative_arc, quotable_moment, controversial_take, data_point, framework, story, prediction
2. **verbatim_text**: The exact quote or passage from the transcript (keep it verbatim — do not paraphrase)

3. **start_timestamp**: Start time in seconds — REQUIRED. Find the segment timestamp where this quote begins.
4. **end_timestamp**: End time in seconds — REQUIRED. Find the segment timestamp where this quote ends.

5. **speaker**: Who said it (host or guest name)
6. **hook**: A one-line attention-grabbing opener that could start a social post about this atom (write this fresh — don't just copy the verbatim text)

7. **context**: One sentence of context explaining why this atom matters

Rules:

- Extract 15-30 atoms per episode (more for longer episodes)
- Keep verbatim_text between 1-4 sentences — enough to stand alone but not a full monologue

- EVERY atom MUST have start_timestamp and end_timestamp. Match the verbatim text against the transcript segments to find timestamps. If the transcript has segment-level timestamps (e.g., [0.16-3.2] "text"), use those. Atoms without timestamps cannot be used for video clip selection.
- For narrative_arcs, capture the full arc (setup + tension + resolution) even if it spans multiple exchanges

- For frameworks, capture all steps/components
- Prefer atoms where the guest is speaking (guest insights > host commentary)

- Skip filler, pleasantries, and podcast housekeeping (sponsors, subscribe reminders)

Return as a JSON array.

```

### Providing Timestamps to the LLM

When sending the transcript for atom extraction, include segment timestamps so the model can map quotes to time codes. Format the transcript as:

```text

[0.16-3.20] All right, everybody. Welcome back to the number one podcast in the world.

[3.20-7.44] It's the all-in podcast. David Saxs couldn't make it this week.

[7.44-12.08] but we have the trio. David Freeberg is here, your Sultan of Science.

```

Build this from the transcript segments array:

```python

def format_transcript_with_timestamps(segments):

lines = []

for seg in segments:

lines.append(f"[{seg['start']:.1f}-{seg['end']:.1f}] {seg['text']}")

return "\n".join(lines)

```

This is critical — without timestamps in the prompt, the LLM cannot assign accurate start/end times to atoms, and video clip extraction will fail.

## Output Format

```json

{

"episode": {

"title": "Episode Title",

"guest": "Guest Name",

"date": "2024-01-15"

},

"atoms": [

{

"id": "atom-001",

"type": "controversial_take",

"verbatim_text": "I actually think most startups fail not because of product-market fit, but because founders get bored. They chase the next shiny thing before the boring middle part is done.",

"start_timestamp": 847.2,

"end_timestamp": 862.5,

"speaker": "Jane Smith",

"hook": "The real reason startups fail isn't what you think",

"context": "Guest challenges the dominant PMF narrative with a behavioral explanation for startup failure.",

"scores": {

"novelty": 75,

"controversy": 85,

"utility": 45,

"total": 70

}

}

]

}

```

## Scoring Rubric

Score each atom on three dimensions (0-100 each), then compute a weighted total.

### Novelty (40% weight)

- **90-100**: Never heard before — genuinely new idea, original research, or unique framing
- **70-89**: Fresh angle on a known topic — most people haven't thought about it this way

- **50-69**: Interesting but not surprising — well-articulated common knowledge
- **30-49**: Familiar territory — said before by others in similar ways

- **0-29**: Cliché or obvious — "work smarter not harder" territory

### Controversy (30% weight)

- **90-100**: Directly contradicts mainstream consensus — will generate strong disagreement
- **70-89**: Challenges common practice — many people will push back

- **50-69**: Mildly provocative — some people will disagree
- **30-49**: Safe but has a point of view — unlikely to generate debate

- **0-29**: Universally agreed upon — no tension

### Utility (30% weight)

- **90-100**: Immediately actionable — reader can implement today
- **70-89**: Clearly useful with some adaptation — provides a framework or process

- **50-69**: Informative — reader learns something but no clear action step
- **30-49**: Interesting but abstract — thought-provoking without practical application

- **0-29**: Pure entertainment or opinion — no takeaway

### Total = (Novelty × 0.4) + (Controversy × 0.3) + (Utility × 0.3)

## Using Atoms Downstream

Once atoms are extracted and scored, they feed into every content type:

| Content Type | Which Atoms to Use |

|-------------|-------------------|

| **Twitter thread** | Top-scoring controversial takes and data points as hooks; frameworks as thread bodies |

| **LinkedIn post** | Frameworks and data points (professional audience values utility) |

| **Blog post** | Narrative arcs and stories for the body; data points for credibility |

| **Newsletter** | Top 2-3 atoms by total score, any type |

| **Quote cards** | Quotable moments with highest novelty scores |

| **Video clips** | Controversial takes, stories, and data points (visual engagement) |

| **Show notes** | All atom types, organized by topic/timestamp |
