---
name: content-machine
description: Create social media posts, newsletters, and marketing content across platforms.
---

# Content Machine

Create social posts, newsletters, and marketing copy that respects platform mechanics — truncation points, algorithm signals, and hook physics — not just "good writing."

## When to Use

- Social posts (X/Twitter, LinkedIn, Instagram feed, Instagram Stories, TikTok captions, Threads)
- Writing captions for social media posts

- Writing hooks for posts and content
- Newsletters, blog posts, content calendars, cross-platform repurposing

- Content repurposing ("turn this into multiple posts", "repurpose this blog post")
- Social media strategy and content planning

## When NOT to Use

- Cold outreach (cold-email-writer) · Paid ad copy (ad-creative) · Research reports (deep-research) · SEO audits (seo-auditor)

## Step 1: Voice Analysis

Ask for 3-5 existing posts. Extract: avg sentence length, contraction usage, emoji density, POV (I/we/you), signature phrases. If none exist, ask for 2 creators they want to sound like and use `webFetch` to pull recent posts as voice reference.

## Step 2: Platform Mechanics (2025-2026 Specs)

### LinkedIn — 3,000 char max, but truncation is what matters

- **"...see more" cutoff: ~140 chars desktop, ~110 chars mobile.** 57%+ of LinkedIn traffic is mobile — write the hook for 110 chars.
- **Algorithm weights:** comments count ~2x likes; dwell time is a primary signal; first 60-120 min engagement velocity determines reach ceiling.

- **Optimal length:** 800-1,000 chars (not 3,000). Short paragraphs (1-2 lines) + white space increase dwell time.
- **Structure:** Hook (110 chars, no throat-clearing like "I wanted to share...") → story/insight → single question CTA. Reply to every comment in the first hour to extend the test window.

- **Hashtags:** 3-5 max, at the very end. LinkedIn deprioritized hashtag discovery.

### X/Twitter — 280 chars (free), 25,000 chars (Premium)

- Long posts on Premium truncate at ~280 chars in the feed — the hook rule still applies.
- **Thread structure:** Tweet 1 = the full promise ("How I went from X to Y in Z — thread 🧵"). Each tweet must stand alone for retweets. Last tweet = CTA + loop back to tweet 1.

- Line breaks double engagement vs. wall-of-text.

### Instagram Feed — 2,200 char caption, ~125 chars visible before "...more"

- **Hashtags: 3-5, not 30.** Instagram's @creators account officially reversed the old advice; 20+ hashtags now reads as spam and can suppress reach. Put them inline or at the end, not in a comment.
- First line = hook. Emoji as bullet points scan faster than dashes on mobile.

- Format: Square (1080×1080) or portrait (1080×1350, 4:5 — outperforms square on CTR).

### Instagram Stories — 1080×1920, 9:16

Stories are a fundamentally different medium from feed posts. Treat them as such.

#### Key differences from feed

- Stories are **ephemeral and sequential** — viewers tap through in 2-3 seconds. There is no caption to read. The visual *is* the entire message.
- Stories are better for **two-way interactions** (polls, questions, DMs) than for broadcasting.

- Feed posts have copy doing the heavy lifting. Stories must work without it.

##### Safe zones — mandatory

| Zone | Range | Why |

|---|---|---|

| Top dead zone | Top 14% (~270px) | Profile name, mute, close button UI |

| Bottom dead zone | Bottom 20% (~380px) | "Send message" bar + swipe-up area |

| **Safe core**|**14% – 80% from top** | All content must live here |

Never place any text, logo, CTA, or key visual outside the safe core.

###### Story formats by content type

| Content angle | Best story format | Why |

|---|---|---|

| Pain point | Single frame, stripped to one-liner | Needs immediate gut impact — no room for buildup |

| Educational | Poll (two-option) | Polls get 3× more taps than passive stories; drives return for "reveal" |

| Feature/product | 3-frame sequence: Problem → Solution → Result | Complex message needs beats; tap-through is an algorithm signal |

| Relationship/split concept | Vertical split visual | 9:16 is naturally tall — a top/bottom split reads instantly |

| Tips list | One tip per frame (e.g., "Tip 1 de 3") | Breaks up information; each frame drives tap-through to next |

###### Story copy rules

- Strip feed copy to its absolute core. One line, not a paragraph.
- The hook becomes the entire visual headline — make it 9-12vw on screen and impossible to miss.

- CTAs live in the bottom safe zone (72-78vh) as a full-width strip or pill — not scattered across the frame.
- Progress indicators ("1 / 3", three dots) signal sequence to viewers and reduce drop-off between frames.

###### Poll stories

- Two options, both plausible — avoid obvious right answers.
- Create a reason to return: "Mañana revelamos el promedio real" drives next-day traffic.

- Benchmark: 20-40% response rate on engaged audiences.

###### Multi-frame sequences

- Each frame must have a clear progress indicator so viewers know there's more.
- Each frame must have a tap hint (e.g., "Toca para continuar →") except the last.

- Last frame ends with a CTA, not a tap hint.
- File naming: `story3a.html`,`story3b.html`,`story3c.html` for the 3 frames of Story 3.

###### Same angle, different execution — never just resize a feed post

| Feed post | Story adaptation |

|---|---|

| Pain point with supporting copy | Strip to the one-liner only — huge on screen, nothing else |

| Educational post with data | Turn into a poll question — let the audience engage, reveal answer next day |

| Feature walkthrough | 3-frame sequence: Frame 1 = problem, Frame 2 = solution stat, Frame 3 = result UI |

| Relationship/split concept | Vertical split (top half / bottom half) unified at the seam |

| Tips list (3 items) | 3 separate frames, one per tip, "Tip 1 de 3" format |

### TikTok captions — 4,000 chars (up from 2,200)

- TikTok is now a search engine — ~40% of Gen Z searches here before Google. Front-load keywords in the caption for TikTok SEO. The caption is indexed; use it for terms your video doesn't say out loud.

### TikTok Video Production (Composited Short-Form Video)

The skill CAN produce TikTok-format video (1080×1920, 9:16) using FFmpeg + AI-generated clips. This is not just captions — it is full video production.

**API capability disclosure — mandatory before starting:** When producing TikTok video, always inform the user upfront that two quality tiers exist:

- **Without an external API (default):** AI-generated clips via the built-in media-generation tool — cinematic-style footage, good for most use cases, no extra setup or cost.
- **With an external API (higher quality):** Services like Runway Gen-3, Pika, or Kling can produce significantly more realistic and controllable footage, but require a paid API key from the user.

Always present both options and ask which they prefer before generating any clips. Never silently call a paid external API. Never assume the user knows these options exist — they usually don't.

#### Production workflow

1. Write a scene brief: 3-5 scenes, each with a visual prompt, text overlays, and duration (6-8s per scene is ideal). Total target: 20-30s.
2. Generate AI clips using the media-generation skill — one prompt per scene, 9:16 format.

3. Prepare brand fonts and assets (logo PNG).
4. Compose with FFmpeg using a Node.js script (`.cjs`).

5. Output to `client/public/videos/`— served at`/videos/` on the Replit domain.

##### FFmpeg in Replit NixOS

- FFmpeg v6+ is available. Locate it: `ls /nix/store/*ffmpeg-full*/bin/ffmpeg 2>/dev/null | head -1`
- Run via `execFileSync('ffmpeg', args)` — do NOT use shell string commands (escaping nightmare).

###### Font handling — Inter (or any Google Font)

- Download the GitHub release zip: `https://github.com/rsms/inter/releases/download/v4.0/Inter-4.0.zip`
- Extract TTF files using Node.js `zlib.inflateRawSync()`— do not assume`unzip` or Python are available.

- Write to `/tmp/tiktok/fonts/Inter-Black.ttf`,`Inter-Bold.ttf`,`Inter-Regular.ttf`.
- Always use the brand font. DejaVu (FFmpeg's fallback) looks wrong on brand content.

###### FFmpeg filter techniques

```bash

# Dark overlay for text readability on top of any clip

drawbox=x=0:y=0:w=iw:h=ih:color=0x000000@0.50:t=fill

# Text overlay — use execFileSync (array args), never shell strings, so UTF-8 works directly

drawtext=fontfile='/path/Inter-Black.ttf':fontsize=110:fontcolor=0xffffff:x=(w-text_w)/2:y=700:text='Tu texto aqui'

# Logo overlay — scale first, split for N scenes, then overlay each

[logoInput]scale=185:-1,split=4[logo0][logo1][logo2][logo3]

[clip_pre][logo0]overlay=x=65:y=72:format=auto[clip_out]

# Xfade transition between clips (0.4s fade)

[c0][c1]xfade=transition=fade:duration=0.4:offset=5.6[v01]

# Audio: music bed, trim to total duration, fade in/out

[musicInput]atrim=0:24.8,afade=t=in:st=0:d=1.0,afade=t=out:st=23.0:d=1.8[aout]

```

###### Scene structure that works (4-scene formula)

| Scene | Clip prompt | Text role | Duration |

|---|---|---|---|

| Hook | Person reacting to a pain point (wide shot) | Big provocative question, brand color accent | 6s |

| Pain | Close-up showing the problem (phone, account, etc.) | Short punchy lines, high contrast | 6s |

| Solution | App/product in use or aspirational moment | Feature bullets, subdued overlay (show the product) | 6s |

| CTA | Positive resolution, couple/family | Download prompt, URL badge, attribution | 8s |

###### Overlay composition rules

- Dark overlay alpha: 0.40–0.55 for clips that need text; 0.35–0.45 for product/app clips (show them).
- Text hierarchy: headline in brand color or white at 110-130px (Inter Black), body at 50-70px (Inter Bold), captions at 36-44px (Inter Regular).

- Logo: top-left corner, ~185px wide, every scene — use `scale=185:-1,split=N`.
- All content within 140px–1780px vertical (safe zone same as Stories: avoid top 14% and bottom 20%).

###### Output settings (always use these exactly)

```text

-c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 192k

```

###### Music licensing

- If using CC BY music (e.g., Kevin MacLeod), attribution must appear IN the video (small text overlay, last scene), not just in the caption. Caption-only attribution does not satisfy CC BY for video.
- Recommended free source: freemusicarchive.org, filter by CC BY.

###### Canvas embedding

- Always resolve the domain with `echo $REPLIT_DOMAINS` before setting a canvas video shape URL. Never hardcode a domain — Replit domains change between sessions.
- Video shape URL format: `https://<domain>/videos/filename.mp4`

### Newsletters — Optimize for clicks, not opens

- **Apple Mail Privacy Protection (MPP) inflates open rates by ~18 percentage points.**Apple Mail is ~46% market share and pre-fetches tracking pixels. A "42% open rate" in 2025 ≈ a 24% open rate in 2020.**Track click rate (benchmark: ~2%) and CTOR (10-20%) instead.**
- **Subject line:** 30-50 chars. Avoid "Free," ALL CAPS, multiple "!!!" — spam filter triggers. B2B: longer, specific subject lines outperform short clever ones.

- **Preview/preheader text:** adds ~6pp to open rate when used — but Gmail's Gemini now auto-generates previews, so don't rely on controlling it. Write the first sentence of the body as a second hook.
- One primary CTA. Every additional CTA cuts click rate.

## Step 3: Hook Formulas (Named Patterns)

Don't say "write a hook" — pick a pattern:

| Pattern | Template | Why it works |

|---|---|---|

| **Contrarian** | "Everyone says X. Here's why that's wrong." | Cognitive dissonance forces resolution |

| **Curiosity gap** | "I tried X for 30 days. Day 17 broke me." | Open loop — brain needs closure |

| **Specificity signal** | "$47,212 in 90 days. Here's the exact stack." | Odd numbers read as true, round numbers read as marketing |

| **Negative hook** | "3 mistakes that cost me [outcome]" | Loss aversion > gain seeking |

| **Callout** | "If you're a [role] still doing X, read this." | Self-selection = higher-intent readers |

| **Slippery slope** | "It started with one Slack message." | Narrative momentum |

| **Permission** | "Unpopular opinion: [take]" | Pre-frames disagreement as expected |

**Banned openers:** "I'm excited to share," "Hey everyone," "As a [title]," "In today's fast-paced world."

## Step 4: Repurposing Waterfall

One long-form piece → 8+ assets:

1. **Blog post** (1,500 words) →
2. **X thread** (extract each H2 as a tweet, intro = hook) →

3. **LinkedIn post** (pick the single most contrarian point, 800 chars) →
4. **LinkedIn carousel** (each H2 = 1 slide; carousels get highest dwell time) →

5. **Newsletter section** (add personal context + behind-the-scenes) →
6. **Instagram feed post** (hook + 3-5 supporting points, 1080×1080 or 1080×1350) →

7. **Instagram Story** (strip the feed hook to a single line, or turn the educational point into a poll) →
8. **TikTok/Reel script** (the hook + the \#1 takeaway in 30 sec)

**Key rule for Stories in the waterfall:** same *angle*as the feed post, completely different*execution*. Never just crop or resize a feed post into a Story — re-author it according to the story format table above.

Build repurposing scripts in Python when batch-processing: parse markdown H2s → split into platform templates → enforce char limits programmatically.

## Content Frameworks

- **PAS** (Problem → Agitate → Solve) — best for conversion-focused posts
- **BAB** (Before → After → Bridge) — best for transformation stories

- **AIDA** (Attention → Interest → Desire → Action) — best for launches
- **SLAP** (Stop → Look → Act → Purchase) — best for short-form (Reels/TikTok captions)

## Validation

Before delivering, verify:

- Char counts against platform limits (count programmatically, don't eyeball)
- Hook fits in the truncation window (110 chars for LinkedIn mobile, 125 for Instagram feed)

- No banned openers
- One CTA per piece

- For Stories: all content confirmed inside the 14%–80% safe zone

## Limitations

- Cannot post to platforms or access analytics
- Cannot generate static images directly — use the media-generation skill for images; use the ad-creative skill for HTML/CSS visual story designs

- **CAN produce composited short-form video** (TikTok/Reels) via FFmpeg + AI clip generation — see TikTok Video Production section above
- Paid external video APIs (Runway, Pika, Kling) require user consent and their own API key before use

- Voice matching quality scales with example count
