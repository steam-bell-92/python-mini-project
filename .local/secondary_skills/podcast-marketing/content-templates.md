# Content Templates

Detailed templates and examples for each marketing content type generated from podcast episodes.

## Critical Rules

1. **Generate each content piece in a SEPARATE LLM call.** Never batch multiple outputs with separators (e.g., "---SEPARATOR---"). This causes content bleeding between files and quality degradation.
2. **Anti-repetition: Each platform must lead with a different atom.** Before generating content, assign atoms to platforms (see SKILL.md Step 2). Pass only the assigned atom(s) to each generation call.

3. **Validate constraints before saving.** Count characters (Twitter), words (blog), and check that no quote appears in more than 2 outputs.

## Twitter/X Thread Template

Structure a 5-8 tweet thread. Each tweet should stand alone while building a narrative arc.

**Tweet 1 — The Hook:**

Lead with the most surprising, contrarian, or counter-intuitive point. Frame as a revelation or challenge to conventional wisdom.

```text

Most people think [common belief].

But @GuestName just explained why that's completely wrong.

A thread on [topic] 🧵

```

**Tweets 2-6 — Key Insights:**

One insight per tweet. Use the guest's own phrasing when it's punchy. Add brief context when needed.

```text

1/ "[Direct quote from guest]"

This matters because [one-sentence context].

```

**Final Tweet — CTA:**

```text

Full conversation with @GuestName on [Podcast Name]:

[Episode link]

If this resonated, RT tweet 1 so others find it.

```

**Rules:**

- **HARD LIMIT: Under 280 characters per tweet (including URLs and spaces).** Validate by counting `len(tweet_text)` for each tweet. If over 280, rewrite or split into two tweets.
- No hashtags except in the final tweet (1-2 max)

- Use line breaks for readability
- Numbers and lists perform well — use "3 things I learned" framing when appropriate

- If a direct quote exceeds ~200 chars, paraphrase it shorter or split the quote across tweet + reply

**Validation script:**

```python

def validate_thread(tweets: list[str]) -> list[str]:

errors = []

for i, tweet in enumerate(tweets, 1):

if len(tweet) > 280:

errors.append(f"Tweet {i} is {len(tweet)} chars (max 280): {tweet[:50]}...")

return errors

```

## LinkedIn Post Template

Single long-form post. Professional but not corporate — LinkedIn rewards personal perspective and storytelling.

```text

[Bold opening statement or question that challenges assumptions]

I just had a conversation with [Guest Name] about [topic], and one thing completely shifted my thinking:

[Key insight \#1 — 2-3 sentences expanding on it]

[Key insight \#2 — 2-3 sentences]

[Key insight \#3 — brief]

The biggest takeaway? [One-sentence summary of the most actionable point].

What's your experience with [topic]? I'd love to hear how others are thinking about this.

🎙️ Full episode: [link]

```

**Rules:**

- 1,200-1,500 characters total
- First line is crucial — it appears above the "see more" fold

- Use line breaks between paragraphs (LinkedIn penalizes walls of text)
- End with an open question to drive comments

- Avoid corporate jargon — write like a real person

## Instagram Caption Template

Casual, scroll-stopping, designed for the feed or carousel format.

```text

[Attention-grabbing first line — question, bold claim, or "did you know"]

[2-3 sentences about the key insight, written conversationally]

[Pull quote from the guest if applicable]

🎧 New episode out now — link in bio

#Podcast \#[TopicHashtag] \#[NicheHashtag] \#[GuestNameHashtag] \#[BrandHashtag]

```

**Rules:**

- 300-500 characters for the main copy (before hashtags)
- Front-load the hook — first line shows in feed preview

- 3-5 hashtags max (mix of broad and niche)
- Mention the guest's handle if they have one

## Blog Post Template

800-1,200 words. Optimized for SEO and readability.

```markdown

# [Compelling Title — Not Just the Episode Title]

[Opening paragraph: Lead with the most compelling insight. Do NOT start with

"In this episode of..." or "I recently spoke with...". Start with the idea.]

## [Subheading for Key Topic 1]

[2-3 paragraphs expanding on the first major takeaway. Include context,

examples from the conversation, and why this matters to the reader.]

> "[Pull quote from the transcript]" — [Speaker Name]

## [Subheading for Key Topic 2]

[2-3 paragraphs on the second takeaway.]

## [Subheading for Key Topic 3 (optional)]

[1-2 paragraphs on a third point if warranted.]

## Key Takeaways

- [Takeaway 1 — stated as an actionable insight]
- [Takeaway 2]

- [Takeaway 3]

---

*Listen to the full conversation with [Guest Name] on [Podcast Name]:

[Episode Link]*

```

**Rules:**

- Title should be SEO-friendly and curiosity-driven (not just the episode name)
- Subheadings break up the text every 200-300 words

- Include 1-2 pull quotes as blockquotes
- End with a bulleted takeaway section for skimmers

- Final CTA links to the episode

## Email Newsletter Template

Subject line + preview text + body. Designed for high open rates and click-through.

```text

Subject: [Curiosity-driven, under 50 chars]

Preview: [Complements subject, under 90 chars]

---

Hey [FirstName],

[1-2 sentence hook — why should the reader care about this episode RIGHT NOW?

Tie to a current trend, common frustration, or timely question.]

This week on [Podcast Name], [Guest Name] shared [brief description of the

conversation's focus — 1 sentence].

Here's what stood out:

**[Insight 1 headline]**

[2-3 sentences expanding]

**[Insight 2 headline]**

[2-3 sentences expanding]

> "[Pull quote]" — [Speaker]

[CTA Button: "Listen to the Full Episode →"]

[Optional: 1-sentence personal note or teaser for next episode]

[Sign-off]

```

**Subject line patterns that work:**

- Question format: "Is [common practice] actually hurting you?"
- Contrarian: "[Guest] says we're all wrong about [topic]"

- Curiosity gap: "The one thing [experts] won't tell you about [topic]"
- Direct value: "3 [topic] lessons from [Guest Name]"

## Show Notes Template

Structured for podcast hosting platforms and websites.

```markdown

# [Episode Title]

**Episode [Number] | [Date] | [Duration]**

[1-paragraph episode description — what the listener will learn and why it

matters. Written in second person: "you'll discover...", "you'll learn..."]

## Guest

[Guest Name] — [1-2 sentence bio with credentials and relevant links]

## Timestamps

- [00:00] Introduction and guest background
- [03:15] [Topic 1]

- [12:40] [Topic 2]
- [25:00] [Topic 3]

- [38:20] Key takeaways and rapid-fire questions
- [45:00] Where to find [Guest Name]

## Key Takeaways

1. [Takeaway 1 — actionable, specific]
2. [Takeaway 2]

3. [Takeaway 3]

## Links & Resources

- [Resource mentioned in episode](url)
- [Guest's website/social](url)

- [Book/tool/article referenced](url)

## Subscribe

[Links to Apple Podcasts, Spotify, etc.]

```

## Pull Quotes Template

Select quotes that work as standalone shareable graphics.

**Selection criteria:**

- Makes sense without any context
- Surprising, insightful, or emotionally resonant

- Under 150 characters (fits on a social graphic)
- Attributable to a specific speaker

**Format:**

```text

1. "[Quote text]" — [Speaker Name] | Timestamp: [HH:MM:SS]
2. "[Quote text]" — [Speaker Name] | Timestamp: [HH:MM:SS]

...

```

**Quote categories to look for:**

- **Contrarian takes** — challenges popular beliefs
- **Actionable advice** — specific, implementable tips

- **Emotional moments** — vulnerability, humor, passion
- **Sound bites** — catchy, memorable phrasing

- **Data points** — surprising statistics or numbers mentioned
