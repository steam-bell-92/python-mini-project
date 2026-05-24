---
name: ad-creative
description: Design static ad creatives for social media and display advertising campaigns.
---

# Ad Creative Maker

Design static ad creatives for social media ads, display banners, and digital advertising campaigns. Build production-ready ads via the design subagent and present them as iframes on the canvas.

## When to Use

- User needs ad creatives for Facebook, Instagram, LinkedIn, Google Display, or TikTok
- User wants banner ads or display advertising assets

- User needs multiple ad variants for A/B testing
- User wants ad copy and visual design together

- User wants to iterate on ad creative based on performance data
- User asks for carousel ads (Instagram, Facebook, X/Twitter)

- User wants retargeting/remarketing ad creatives
- User provides their own product photos or brand images and wants ads built around them

- User needs ads in multiple sizes/formats (square + portrait + landscape)
- User wants a product launch or teaser campaign

- User wants seasonal or holiday-themed ads
- User needs app install ad creatives

- User wants to refresh or update existing ads without performance data
- User asks to make ads that match their website's look and feel

## When NOT to Use

- Organic social media content (use content-machine skill)
- Video ads or animated content (use storyboard skill for planning)

- Full landing pages (use the artifacts skill)

## Golden Rules (check before every ad)

1. **<20 words total on the image** — everything else goes in primary text / description fields
2. **Only 4 elements per ad**: Logo, Hero, Benefit line, CTA button

3. **Flat solid background colors only** — no gradients, no patterns, no textures (exception: awareness/launch ads may use a hero image as the background)
4. **Real brand logo, always** — never substitute plain text for a logo (see Logo Extraction below)

5. **Left-align content** — logo top-left, text left-aligned, CTA left-aligned. Centered layouts look generic.

## Methodology

### Step 1: Creative Brief

Gather: Platform and Format, Objective, Target audience, Key message, CTA, Brand assets, Performance data (if iterating).

**Brand research (mandatory before building):** Always use web search to look up the brand's actual visual identity before designing. Search for `[brand] brand font typeface typography`and`[brand] brand colors hex`. Use the brand's real fonts, colors, and visual language — never guess or substitute generic alternatives. If the official fonts are commercial/licensed, find the closest Google Fonts alternatives used in the brand's own guidelines. Common pairings: a sans-serif for headlines (e.g., Poppins) and a serif for body text (e.g., Lora). Include these in the subagent task instructions so every angle uses the correct brand identity.

**Font loading (mandatory in every ad HTML):** After identifying the brand's fonts (or closest Google Fonts alternatives), include them in the head of every ad HTML file:

```html

<head>

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Lora:wght@400;700&display=swap" rel="stylesheet">

<style>

.headline { font-family: 'Poppins', sans-serif; }

.benefit { font-family: 'Lora', serif; }

</style>

</head>

```

Always specify the exact weights needed (400, 700, 900). Never rely on browser defaults or system fonts — every ad must load its fonts explicitly.

**Extract real brand colors from the site (mandatory).** Do not trust web search results for colors — they are frequently wrong. Instead, fetch the actual CSS from the brand's website:

```bash

curl -s -L "https://brand.com" | grep -iE '(theme-color|TileColor|mask-icon.*color)' | head -5

curl -s -L "https://brand.com" | tr -d '\n' | grep -oP 'href="[^"]*\\css[^"]*"' | head -3

curl -s "https://brand.com/path/to/style.css" | grep -oP '#[0-9a-fA-F]{3,8}' | sort -u

```

### Step 2: Platform Specifications (2025-2026)

#### Meta (Facebook/Instagram) — Visual

| Placement | Dimensions | Safe zone |

|---|---|---|

| Feed (square) | 1080x1080 | ~100px margin all edges |

| Feed (portrait) — **preferred** | 1080x1350 (4:5) | 4:5 outperforms 1:1 on CTR |

| Stories | 1080x1920 | Top 14% + bottom 20% = dead zones |

| Reels | 1080x1920 | Top 14% + bottom 35% = dead zones |

| **Universal safe core**|**1010x1280 centered** | Works across all placements |

Upload at 2x pixel density for Retina sharpness. JPG/PNG, 30MB max.

#### Meta — Text

| Element | Limit | Notes |

|---|---|---|

| Primary text | ~72 chars visible in Reels / 125 in Feed | Write for 72 |

| Headline | 40 chars rec | Below image |

| Description | 30 chars rec | Often hidden on mobile |

#### Google Ads

**RSA:** Headlines 30 chars (each must work standalone — Google mixes randomly), Descriptions 90 chars, up to 15 headlines / 4 descriptions. Pin sparingly — pinning drops Ad Strength.

**RDA:** Landscape 1200x628 (1.91:1), Square 1200x1200 (required), Portrait 1200x1500 (4:5, optional). Short headline 30 chars, Long headline 90 chars, Description 90 chars. All images 5MB or less, keep under 150KB for fast load.

**Highest-inventory static sizes** (if uploading fixed banners): 300x250, 728x90, 320x50, 300x600, 336x280.

**Performance Max:** Same asset pool serves across Search/Display/YouTube/Gmail/Maps/Discover. Upload all 3 image ratios + a YouTube video — don't let Google auto-generate one.

#### LinkedIn Ads

Intro text 150 chars rec (600 max), Headline 70 chars rec (200 max), Image 1200x627 or 1200x1200.

#### TikTok Ads

1080x1920 (9:16), Ad text 100 chars max (~80 visible). Spark Ads (boosting organic creator posts) outperform In-Feed Ads on engagement.

#### X / Twitter Ads

| Placement | Dimensions |

|---|---|

| Single image | 1200x675 (1.91:1) or 1080x1080 (1:1) |

| Carousel cards | 1080x1080 (1:1), 2-6 cards |

| Portrait | 1080x1350 (4:5) |

Tweet text 280 chars (~100 visible with media). Card headline 70 chars.

### Step 3: Determine Campaign Mode

Before defining angles, determine whether this is **direct-response**or**awareness/launch**.

#### Direct-Response (default)

Use for conversion, lead generation, app installs, purchases. This is the default — most ad requests are direct-response.

#### Awareness / Launch Campaigns

Use for product launches, brand announcements, event teasers, top-of-funnel awareness. Prioritize mood and brand impression over clicks.

##### Key differences from direct-response

- **No CTA button on the image.** The CTA lives in the post text or link, not the visual.
- **Even less text: ~10-15 words max** — typically brand name, one positioning line, and a date/tagline.

- **Visual metaphor over product shots.** Use evocative imagery that communicates feeling or aspiration.
- **Multiple visual worlds per campaign.** For carousels or multi-asset campaigns, create 3-5 distinct aesthetic treatments — different palettes, subjects, moods — while keeping typography and logo placement consistent.

- **Layout pattern:** Logo (top corner) then Hero visual (fills most of the frame) then Brand name/headline (bottom, large, bold) then Subtitle + date (smaller, below headline).
- **Hero images allowed.** Unlike direct-response, awareness ads may use a full-bleed generated image as the background (see Image Guidance below).

**When to use awareness mode:** Pre-launch teasers, brand-building campaigns, event promotion, or when the user says "announce," "tease," "launch," or asks for something "premium" without conversion goals.

### Step 3b: Define Angles

Before writing individual copy, establish 3-5 distinct angles — different reasons someone would click:

| Category | Example |

|----------|---------|

| Pain point | "Stop wasting time on X" |

| Outcome | "Achieve Y in Z days" |

| Social proof | "Join 10,000+ teams who..." |

| Curiosity | "The X secret top companies use" |

| Identity | "Built for [specific role/type]" |

| Urgency | "Limited time: get X free" |

| Contrarian | "Why [common practice] doesn't work" |

**For retargeting ads**, adjust angles for warm audiences who already know the brand:

- Reminder: "Still thinking about X?"
- Incentive: "Come back for 15% off"

- Social proof: "See why 10,000 others chose us"
- Scarcity: "Only 3 left in your size"

- Objection handling: "Free returns, no risk"

### Step 4: Design Principles

- **Under 20 words total on the image** — this is the most important rule. Icons, stats rows, feature grids, and badges all violate this. If it doesn't fit in Logo + Hero + Benefit + CTA, it belongs in the primary text.
- Visual hierarchy: Logo (top-left) then Hero element then Benefit then CTA

- WCAG 4.5:1 contrast minimum
- CTA: contrasting color, rounded corners, verb-first, left-aligned

- **No gradients** — flat solid colors only. Use different solid colors across ads for variety. Exception: awareness/launch ads may use a bottom readability gradient over a hero image.

### Steps 5-6: Generate and Validate Copy

Vary word choice, specificity, tone, and structure across angles. Always validate character counts before delivering. Include counts in your output.

```text

## Angle: [Pain Point — Manual Reporting]

### Headlines (30 char max)

1. "Stop Building Reports by Hand" (29)
2. "Automate Your Weekly Reports" (28)

3. "Reports in 5 Min, Not 5 Hrs" (27)

### Descriptions (90 char max)

1. "Marketing teams save 10+ hours/week with automated reporting. Start free." (73)
2. "Connect your data sources once. Get automated reports forever. No code required." (80)

```

### Step 7: Build Ad Creatives

#### File Setup

Place all ad HTML files in `artifacts/mockup-sandbox/public/ads/`— served by the mockup-sandbox Vite dev server at`/__mockup/ads/filename.html`.

After copying image assets from `attached_assets/`, always fix permissions:

```bash

chmod 644 artifacts/mockup-sandbox/public/ads/*.png artifacts/mockup-sandbox/public/ads/*.jpg

```

Files copied from `attached_assets/`default to`rw-------` (unreadable by the server).

#### Cache Busting

Canvas iframes cache aggressively. After editing any ad file, increment `?v=N` on the iframe URL:

```text

https://your-domain.dev/__mockup/ads/angle1.html?v=2

```

#### Parallel Subagents — Full Task Template

Launch one design subagent per angle simultaneously. Each subagent gets a complete, self-contained task with all brand details, the HTML structure, and styling rules baked in. **Do not assume the subagent knows any of the golden rules — repeat them explicitly.**

```javascript

await startAsyncSubagent({

task: `Create a production-ready ad creative as a standalone HTML file.

**Brand:**

- Name: [Brand Name]
- Primary color: [hex] | Secondary: [hex] | Accent: [hex]

- Headline font: [Font Name] (Google Fonts — load via link tag in head)
- Body font: [Font Name] (Google Fonts — load via link tag in head)

- Logo: [inline SVG code or path to logo file]

**Ad Details:**

- Platform: [Meta Feed / Google Display / LinkedIn / TikTok / X]
- Angle: [Pain Point / Outcome / Social Proof / etc.]

- Headline: "[exact headline text]"
- Benefit: "[one short benefit line]"

- CTA: "[verb-first CTA text]"
- Background color: [hex — flat solid, NO gradients]

**File:** Write to artifacts/mockup-sandbox/public/ads/[filename].html

**MANDATORY HTML STRUCTURE — follow exactly:**

The ad must use this structure:

- html/body: width 100vw, height 100vh, overflow hidden, margin 0, padding 0
- .ad container: width 100vw, height 100vh, solid background color (NO gradients), flex column, justify-content space-between, padding 6vh 7vw

- .logo: top-left, inline SVG at height 5vh
- .middle: flex column, gap 3vh, containing headline, benefit, and CTA

- .headline: brand headline font, font-size 8vw, font-weight 900, line-height 1.1
- .benefit: brand body font, font-size 3vw, slightly transparent white

- .cta: inline-block, padding 2vh 5vw, accent color background, border-radius 1vw, font-weight 700, align-self flex-start (LEFT-ALIGNED)
- .footer: font-size 1.8vw, subtle color, brand URL

**RULES — do not violate:**

- Only 4 elements: Logo, Headline, Benefit, CTA. No icons, stats, badges, feature grids, or dividers.
- Under 20 words total visible on the ad.

- Flat solid background color — NO gradients, NO patterns.
- All sizing in vw/vh — NO fixed pixel dimensions.

- Left-align everything — logo top-left, text left-aligned, CTA left-aligned. Do NOT center.
- Load fonts from Google Fonts in the head. Do NOT use system fonts or Inter.

- The CTA button must use a contrasting accent color and be verb-first.`,

specialization: "DESIGN",

relevantFiles: ["artifacts/mockup-sandbox/public/ads/[filename].html"]

});

// Repeat for each angle — all launch simultaneously

```

After launching, call the `wait_for_background_tasks` tool to wait for every ad-design subagent. Then embed each ad as an iframe on the canvas using `apply_canvas_actions`, and call `presentArtifact({ artifactId, shapeIds: [...] })` with the IDs of the new iframe shapes.

#### Viewport-Relative Sizing (mandatory)

```css

html, body {

margin: 0; padding: 0;

width: 100vw; height: 100vh;

overflow: hidden;

}

```

All internal sizing must use vw/vh. No fixed pixel dimensions on containers.

#### Ad HTML Structure (mandatory pattern)

Every ad must follow this exact structure — 4 elements, no more:

```html

<div class="ad">

<div class="logo"><!-- SVG or img --></div>

<div class="middle">

<div class="headline">Hero text here</div>

<div class="benefit">One short benefit line.</div>

<div class="cta">Verb-first CTA</div>

</div>

<span class="footer">brand.com</span>

</div>

```

```css

.ad {

width: 100vw;

height: 100vh;

background: \#SOLID_COLOR;

display: flex;

flex-direction: column;

justify-content: space-between;

padding: 6vh 7vw;

box-sizing: border-box;

}

.middle {

display: flex;

flex-direction: column;

gap: 3vh;

}

```

Do not add icons, stats rows, feature grids, badges, dividers, or any decorative elements. If you are tempted to add a 5th element, move that information to the primary text instead.

#### Image Guidance

##### When to use generated images

- Awareness/launch campaigns — the hero image IS the ad, with text overlaid on a bottom gradient
- When the user explicitly requests photo-based or image-heavy ads

###### When NOT to use images (default for direct-response)

- Standard direct-response ads use flat solid color backgrounds with bold typography
- The 4-element rule (Logo, Hero text, Benefit, CTA) works best without competing with a background image

###### If using a hero image (awareness/launch mode only)

Generate images using `generateImage`from the media-generation skill. Save to`artifacts/mockup-sandbox/public/images/`and reference via`/__mockup/images/[filename].png`.

Image prompt strategy:

- Lead with a specific, tangible subject (object, scene, or person)
- Specify lighting (studio, dramatic, golden hour, Rembrandt)

- Specify camera quality ("shot on Hasselblad," "editorial photography")
- Add negative prompts: "text, words, letters, logos, watermark, blurry, low quality, cartoon, illustration"

- Each ad should use a different visual metaphor — same brand, different visual world

Image-first HTML structure (awareness/launch only):

```css

.ad {

width: 100vw; height: 100vh;

position: relative; overflow: hidden;

}

.hero-img {

position: absolute; inset: 0;

width: 100%; height: 100%;

object-fit: cover;

}

.gradient-overlay {

position: absolute; bottom: 0; width: 100%;

height: 50vh;

background: linear-gradient(transparent, rgba(0,0,0,0.8));

}

.content {

position: absolute; bottom: 0; left: 0;

padding: 6vh 7vw;

}

```

**If the user provides their own images:** Use the user's images instead of generating new ones. Copy from `attached_assets/`to`artifacts/mockup-sandbox/public/images/`, fix permissions with`chmod 644`, and reference via`/__mockup/images/[filename]`. Use the awareness/launch image-first layout structure above.

#### Brand Logo Extraction

Always use the brand's actual logo — never substitute plain text for a logo.

**Step 1: Extract the SVG directly from the brand's website.** This is the most reliable method — the actual logo is already embedded in their HTML:

```bash

curl -s -L "https://brand.com" | tr -d '\n' | grep -oP '<svg viewBox="[^"]*"[^>]*>.*?</svg>' | head -1 > /tmp/brand-logo.svg

wc -c /tmp/brand-logo.svg

```

Should be over 1KB for a real logo.

**Step 2: Verify the extracted SVG path data is complete.** SVG path data can be silently truncated during shell extraction. Always verify the max coordinates fit within the viewBox:

```bash

node -e "

const fs = require('fs');

const svg = fs.readFileSync('/tmp/brand-logo.svg', 'utf8');

const dMatch = svg.match(/d=\([^\\]+)\\/);

if (dMatch) {

const d = dMatch[1];

console.log('Path data length:', d.length);

console.log('Last 80 chars:', d.slice(-80));

const nums = d.match(/[\d.]+/g).map(Number);

const maxX = Math.max(...nums.filter((_, i) => i % 2 === 0));

console.log('Max X:', maxX);

}

"

```

If path data length is under ~2000 characters for a wordmark logo, the data was likely truncated. Re-extract with a larger buffer.

**Step 3: Embed inline.** Embedding the SVG directly in the HTML avoids file permission issues, eliminates loading delays, and scales perfectly:

```html

<svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg"

style="height:5vh;width:auto;">

<path fill-rule="evenodd" clip-rule="evenodd" d="..." fill="white"/>

</svg>

```

Use `fill="white"`on dark backgrounds,`fill="#BrandDarkColor"` on light backgrounds.

**Step 4: Position the logo top-left, not centered.** The logo should sit in the top-left corner as part of the visual hierarchy. Do not center-align logos — centered layouts look generic and reduce brand recognition.

**Fallback: If the website doesn't have an inline SVG**, search for `[brand] logo SVG site:wikimedia.org OR site:brandfetch.com`. As a last resort, use a logo + wordmark pattern with the brand's font.

**If using an image file for the logo**, always use both max-width and max-height together:

```css

.logo-img {

max-width: 38vw;

max-height: 12vh;

width: auto;

height: auto;

object-fit: contain;

}

```

Never use `width: Xvw; height: auto` alone on a square logo — at width 38vw, a square image is also 38vh tall and will overflow its container into content below.

Logo images have built-in padding. The visible logo mark may only occupy 50-70% of the image dimensions. Size the image larger than you'd expect.

##### Logos without transparent backgrounds

| Scenario | Strategy |

|---|---|

| Ad bg color matches logo bg exactly | Use that logo version — backgrounds blend seamlessly |

| White ad background | Use white-background logo + mix-blend-mode: multiply |

```css

.logo-img { mix-blend-mode: multiply; }

```

#### Canvas Layout

Place ad iframes side-by-side in a row for easy comparison. Use square iframes (600x600) so they fit on the canvas without clipping. Space them with ~50px gutters:

```text

x=0, y=0: [Iframe: Angle 1] (600x600)

x=650, y=0: [Iframe: Angle 2] (600x600)

x=1300, y=0: [Iframe: Angle 3] (600x600)

```

**For portrait/stories ads (9:16):** Use 608x1080 iframes:

```text

x=0, y=0: [Iframe: Story 1] (608x1080)

x=658, y=0: [Iframe: Story 2] (608x1080)

x=1316, y=0: [Iframe: Story 3] (608x1080)

```

**For multi-format output** (same angle in multiple sizes): Stack formats vertically per angle:

```text

x=0, y=0: [Iframe: Angle 1 — Square] (600x600)

x=0, y=650: [Iframe: Angle 1 — Portrait] (450x600)

x=650, y=0: [Iframe: Angle 2 — Square] (600x600)

x=650, y=650: [Iframe: Angle 2 — Portrait] (450x600)

```

**For carousel ads:** Place cards in sequence left-to-right:

```text

x=0, y=0: [Iframe: Card 1] (600x600)

x=650, y=0: [Iframe: Card 2] (600x600)

x=1300, y=0: [Iframe: Card 3] (600x600)

x=1950, y=0: [Iframe: Card 4] (600x600)

```

Do not add text labels above iframe shapes — iframes already display their componentName in the title bar. Set componentName to something descriptive like "Angle 1: Outcome — Think deeper. Get further."

**With landing page mock-ups** (optional — include when the user wants to see the full click-through experience): Place the landing page iframe next to each ad:

```text

x=0, y=0: [Iframe: Angle 1 Ad] (600x600)

x=650, y=0: [Iframe: Angle 1 Landing] (1280x720)

x=0, y=650: [Iframe: Angle 2 Ad] (600x600)

x=650, y=650: [Iframe: Angle 2 Landing] (1280x720)

```

The landing page should look like where the ad actually leads — hero section echoing the ad's message, value props, social proof, and a CTA. Not a wireframe.

#### Export

Ads use vw/vh sizing so they adapt to any viewport. For export at specific pixel dimensions:

```bash

npx playwright screenshot artifacts/mockup-sandbox/public/ads/angle1.html --viewport-size=1080,1080 -o angle1-1080.png

npx playwright screenshot artifacts/mockup-sandbox/public/ads/angle1.html --viewport-size=1080,1350 -o angle1-portrait.png

npx playwright screenshot artifacts/mockup-sandbox/public/ads/story1.html --viewport-size=1080,1920 -o story1.png

```

The user can also screenshot each iframe directly from the canvas, or open the HTML files in a browser at the desired size.

## Prompt-Specific Workflows

### Carousel Ads

When the user asks for carousel ads (Instagram, Facebook, X/Twitter):

1. Each card should be a self-contained visual — assume viewers swipe quickly.
2. Use a **consistent structural layout**across cards (same typography placement, same logo position) with**varying content/colors** per card. This "same but different" effect rewards swiping.

3. For Instagram/Facebook carousels: 1080x1080 per card, 2-10 cards.
4. For X/Twitter carousels: 1080x1080 per card, 2-6 cards with optional headline/URL per card.

5. Launch one subagent per card in parallel. Include the card number and total count so the subagent can create a coherent sequence.
6. Arrange cards left-to-right on the canvas so the user can see the swipe flow.

### Retargeting / Remarketing Ads

When the user asks for retargeting ads:

1. Adjust copy for **warm audiences** who already know the brand — don't introduce the brand, remind them.
2. Use retargeting-specific angles: Reminder, Incentive, Social Proof, Scarcity, Objection Handling (see Step 3b).

3. Consider dynamic elements: "Still interested in [product]?", "Your cart is waiting", etc.
4. Shorter, more direct copy — they already know you.

### User-Provided Images

When the user uploads their own product photos or brand images:

1. Copy from `attached_assets/`to`artifacts/mockup-sandbox/public/images/`.
2. Run `chmod 644` on all copied files.

3. Use the awareness/launch image-first layout (full-bleed image with gradient overlay and text on top).
4. Do NOT generate new images — use the user's images as-is.

5. Adapt the text overlay colors to work with the specific image's brightness/contrast.

### Multi-Format Output

When the user needs the same ad in multiple sizes:

1. Create one HTML file per size variant (e.g., `angle1-square.html`,`angle1-portrait.html`,`angle1-landscape.html`).
2. The HTML structure stays the same — vw/vh sizing handles the adaptation. But adjust font sizes and padding for extreme aspect ratios (landscape needs smaller headline vw, portrait can go bigger).

3. Stack formats vertically per angle on the canvas for easy comparison.
4. Test each format at its target pixel dimensions to verify nothing clips or overflows.

### Awareness / Launch Campaigns (2)

When the user asks for a launch, teaser, or brand awareness campaign:

1. Switch to awareness mode (see Step 3 above).
2. Generate hero images using `generateImage` — each ad should use a different visual metaphor.

3. Use image-first layout with gradient overlay.
4. No CTA button on the image. ~10-15 words max.

5. For multi-card campaigns, maintain identical text layout and logo placement across cards while varying the hero visual and color palette.

### Seasonal / Holiday Ads

When the user asks for holiday or seasonal ads:

1. Use the standard methodology but adjust angles for urgency and timeliness.
2. Incorporate seasonal colors subtly — don't overwhelm the brand identity. The brand's colors should still dominate; seasonal colors are accents.

3. Include time-bound CTAs: "Order by Dec 15 for guaranteed delivery", "48-hour flash sale".
4. Consider the platform's ad approval timeline — submit 3-5 days before the holiday.

### App Install Ads

When the user asks for app install ad creatives:

1. CTA should be app-specific: "Download Free", "Get the App", "Try It Free".
2. Consider showing a device mockup or screenshot (if the user provides one).

3. For Google App Campaigns: supply landscape (1200x628), portrait (1200x1500), and square (1200x1200) images.
4. Keep the value proposition ultra-clear — users decide in 1-2 seconds whether to install.

### Refreshing Existing Ads

When the user wants to update or refresh existing ads without performance data:

1. Review the existing ads (ask the user to share them or describe them).
2. Keep the same brand identity and overall strategy.

3. Freshen: new headline variations, new background colors, new angles that weren't tested.
4. Do NOT change what's working — if the user says "these are doing fine, just want fresh versions," keep the structure and vary the copy/colors.

## Iterating from Performance Data

When the user provides performance data:

1. **Analyze winners**: Identify winning themes, structures, word patterns, and character utilization in top performers (by CTR, conversion rate, or ROAS).
2. **Analyze losers**: Identify themes that fall flat and common patterns in underperformers.

3. **Generate new variations**: Double down on winning themes, extend winning angles, test 1-2 new unexplored angles, avoid patterns from underperformers.
4. **Document the iteration**: Track what was learned, what's being tested, and what angles were retired.

Present the analysis to the user before building new ads:

```text

## Performance Analysis

### Winners (keep and extend)

- Pain point angles performing 2.3x above average CTR
- Headlines with specific numbers ("75% faster") outperform vague claims

### Losers (retire)

- Curiosity angles underperforming — audience is solution-aware, not problem-aware
- Long headlines (over 25 chars) getting truncated on mobile

### New Test Plan

- 2 new pain point variations (doubling down on winner)
- 1 social proof angle (untested category)

- Retire all curiosity angles

```

## Research Before Writing

Use web search to find examples of top-performing ads in the user's vertical. Search for ad breakdowns, swipe files, and case studies — e.g. `[industry] top performing Facebook ads 2026`or`[industry] TikTok ad examples`. Reverse-engineer: what hook, what angle, what visual pattern. Don't guess what works — look it up.

## Common Mistakes

### Content overload (most common)

- Adding icons, stats rows, feature grids, or badges — these violate the under-20-word rule. Each ad should have exactly 4 elements: Logo, Hero, Benefit, CTA.
- Using gradients instead of flat solid colors (except awareness/launch hero images)

- Centering all content instead of left-aligning (left-aligned text feels more intentional and professional)

#### Logo issues

- Using plain text instead of the brand's actual logo — always extract the real SVG from the brand's website first
- Truncated SVG path data — always verify path length and max coordinates after extraction

- Not checking that the SVG viewBox contains the full logo (max X/Y must be within viewBox bounds)

##### Brand identity

- Trusting web search for brand colors — always extract actual hex values from the site's CSS
- Using generic fonts (e.g., Inter) instead of the brand's actual typeface

- Not loading fonts via Google Fonts link in the HTML head — relying on system fonts

###### Technical

- width Xvw with height auto alone on square logo images (overflows container)
- Forgetting chmod 644 on assets copied from attached_assets (server can't read them)

- Not incrementing ?v=N on iframe URLs after editing HTML files
- Placing ad files in the wrong directory (use artifacts/mockup-sandbox/public/ads/, not client/public/ads/)

###### Copy

- RSA headlines that only work in sequence (Google mixes them — each must stand alone)
- Writing for the 125-char feed limit when Reels only shows 72

- All angles being the same message reworded (vary the psychology, not the synonyms)
- Text in the bottom 35% of a 9:16 ad (covered by platform UI)

- Letting Performance Max auto-generate video — always supply your own

###### Subagent delegation

- Not including the full HTML structure template in the subagent task — subagents will invent their own layout
- Not repeating the golden rules in each subagent task — they don't inherit context from the main agent

- Not specifying font loading instructions — subagents will use system fonts
- Not providing the exact brand colors and logo SVG — subagents will guess
