---
name: branding-generator
description: Create brand identity kits — logos, color palettes, typography, naming, and style guides.
---

# Branding Generator

Create brand identity kits. Interview the user, research the space, then deliver 3 distinct brand directions with visual assets.

## When to Use

- "I need branding / a brand identity / brand kit"
- "I need a logo" / "design me a logo"

- "What colors should I use?" / "help me pick colors"
- "What fonts should I use?" / "help me choose typography"

- "I need a style guide" / "brand guidelines" / "brand book" / "brand assets"
- "I need a visual identity" / "design system"

- "Help me name my company / app / product"
- "I'm starting a new business/product" (early-stage founders needing naming + identity)

- "Make my app look more professional" / "my app looks generic" (signals a visual identity gap)
- Color palettes, typography, visual identity from scratch

- Rebranding or brand refresh
- Brand naming

## When NOT to Use

- Full UI design (use design skill) · Slide decks (use slides skill)

## Step 1: Brand Interview

Conduct this like a real branding agency discovery session. Ask these questions **conversationally, not as a wall of text** — adapt based on answers, ask follow-ups, go deeper where it matters. Group into 2-3 messages max.

### Round 1 — The Business

- What does your company/product do, in one sentence?
- Who is your target audience? (Be specific — age, role, lifestyle, not just "everyone")

- What problem do you solve that nobody else does?
- What's your pricing position? (Budget / mid-market / premium / luxury)

- **Do you already have a name, or do you need naming help?**

### Round 2 — The Feeling

- Name 3 brands you admire (any industry) and what you admire about them
- If your brand were a person, how would they dress? How would they speak?

- What emotions should someone feel when they see your brand for the first time?
- What's the one word you'd want people to associate with you?

- Any colors, styles, or aesthetics you absolutely hate?

### Round 3 — Practical Constraints

- Do you have any existing brand assets (logo, colors, fonts) you want to keep?
- Where will this brand primarily live? (Web app, mobile app, physical product, social media, print)

- Any industry conventions you need to follow — or deliberately break?
- Competitor URLs or screenshots? (If provided, extract their palettes with colorthief for contrast analysis)

### Round 4 — Brand Touchpoints

- What is the **single most important touchpoint** for your brand? (e.g., mobile app icon, website hero, packaging, storefront, email newsletter, social media profile)
- List 3-5 specific contexts where people will encounter your brand (e.g., "app store listing", "trade show banner", "Instagram stories", "invoice PDF", "product unboxing")

- Which of these touchpoints is the first impression for most users?

Prioritize the most important touchpoints when building mockups in Step 5. The "Brand in Action" board should focus on the touchpoints the user actually cares about, not generic website pages.

**Do not proceed until you have solid answers.** Push back if answers are vague — "everyone" is not a target audience, "clean and modern" is not a personality.

## Step 2: Research

After the interview, do targeted research before generating directions:

- **Competitor visual audit** — Search for 3-5 competitors' visual identities. Extract their color palettes, typography, and logo styles. Present a side-by-side summary of what's common in the space so the new brand can visually stand apart — not just conceptually, but with measurable color distance.
- **Mood/reference gathering** — Search for visual references matching the interview answers (e.g., "minimalist premium SaaS branding", "bold playful fintech design").

- **Industry conventions** — What do users in this space expect? Where is there room to stand out?

## Step 2.5: Brand Naming (if needed)

If the user doesn't have a name, generate name candidates as part of each brand direction. For each direction, propose 2-3 name options.

### Naming criteria

- **Memorable** — short (ideally 1-2 syllables, max 3), easy to say and spell
- **Distinctive** — doesn't sound like existing competitors in the space

- **Meaningful** — connects to the brand concept, even if abstractly
- **Domain-friendly** — check `.com`availability via`webSearch("site:instantdomainsearch.com [name]")` or similar

- **Social-friendly** — the name should work as a handle (@name) on major platforms

#### Name generation approaches

1. **Portmanteau** — blend two relevant words (e.g., Pinterest = Pin + Interest)
2. **Action verb** — conveys what the product does (e.g., Grab, Snap, Dash)

3. **Abstract/invented** — coined word that sounds right (e.g., Spotify, Figma)
4. **Real word, new context** — existing word reframed (e.g., Slack, Notion, Linear)

5. **Foreign/multilingual** — borrow from another language for freshness

Present names alongside each direction so the name and visual identity feel cohesive.

## Step 3: Generate 3 Brand Directions

**Always present exactly 3 distinct directions.** Each should feel like a different creative team's pitch — not slight variations.

For each direction, provide:

1. **Brand name**(if naming)**& concept narrative** — 1-2 sentence strategic thinking behind this direction
2. **Color palette** — primary, secondary, accent with hex + OKLCH values. Include neutral scale (50-900) tinted toward the primary hue. Verify WCAG AA contrast for all text/background pairs.

3. **Typography** — display + body font pairing from Google Fonts with rationale
4. **Voice** — 3-5 adjectives defining how the brand speaks, plus copy examples across multiple contexts:

- An example **headline** (marketing/hero)
- An example **onboarding welcome message** (first-time user greeting)

- An example **error message** (something went wrong)
- An example **empty state message** (no data yet)

- An example **call-to-action** (button or prompt)

These examples make the voice tangible and testable — abstract adjectives alone are not enough.

1. **Visual mood** — overall aesthetic description (photography style, illustration approach, texture usage). Reference 2-3 real-world brands that share elements.
2. **Exportable tokens** — provide CSS custom properties and Tailwind config alongside each direction (not just at the end) so developers can start experimenting immediately:

```css

/* Direction A tokens */

--primary: \#1A1A2E;

--primary-oklch: oklch(18% 0.02 270);

--accent: \#D4A855;

--background: \#F5F0EB;

```

```js

// Tailwind extend

colors: {

primary: { 50: '...', 100: '...', /* ... */ 900: '...' },

accent: { 50: '...', /* ... */ 900: '...' }

}

```

## Step 4: User Picks a Direction

Present all 3 and ask the user to pick one or mix elements. Use structured prompts to make mixing easier:

- "Which **name** resonates most?"
- "Which **color palette** feels right for your brand?"

- "Which **voice/tone** matches how you want to speak to users?"
- "Which **visual mood** would you want your product to feel like?"

The user can pick Direction A's name with Direction B's colors and Direction C's tone — facilitate that mixing explicitly. Don't proceed to assets until they approve a direction (or hybrid).

## Step 4.5: Refine the Chosen Direction

Before building the full brand kit, offer a focused refinement round on the selected (or hybrid) direction. Present the consolidated direction summary and ask:

- "Would you like the palette **warmer or cooler**? Lighter or darker overall?"
- "Should the typography feel **heavier/bolder**or**lighter/more refined**?"

- "Is the voice **too formal, too casual, or just right**?"
- "Any specific element from the other directions you'd still like to pull in?"

Apply requested tweaks and present the updated direction for final approval. This avoids costly rework after the full kit is built. Limit to **2 refinement rounds max** — if the user is still unsure after two rounds, recommend proceeding and iterating on the finished boards where changes are easier to visualize.

## Step 5: Deliver the Brand Kit

Once a direction is approved, **delegate to the design subagent** (`subagent`with`specialization="DESIGN"`) to build polished visual boards. Embed them as iframes on the canvas.

### Deliverables

**Board 1 — Color & Typography:** Color swatches with hex + OKLCH values, shade ramps (50-900), typography specimen at heading/body/caption sizes with Google Fonts loaded, contrast audit table, dark mode variant.

**Board 2 — Logo Concepts:**3-4 logo variations (wordmark, icon+text, icon-only, monogram) built as**inline SVG**. Show on light and dark backgrounds at multiple sizes (large display + 32px favicon size). Include SVG source for export.

Logo quality checklist:

- Every logo must be **recognizable at 32px** (favicon/app icon test)
- Include a **single-color version** for monochrome contexts (printing, embossing, watermarks)

- Test on **both light and dark backgrounds** — the logo must work on both without modification or with a simple color inversion
- Use **geometric simplicity** — avoid fine details that collapse at small sizes

- Provide the icon in a **rounded-square container** variant for app store / social profile use

**Board 3 — Brand in Action:**Realistic mockups showing the brand applied to the**user's actual product type**, not generic pages. If the user is building a marketplace, show a listing card, search results, and app header. If they're building a SaaS dashboard, show the dashboard. Match the mockups to what they're actually building. This board should feel like seeing their real product with the new brand applied.

**Board 4 — Brand Guidelines:** Color usage rules, typography hierarchy, voice & tone guidelines, 1-2 sample applications (business card, social post).

### Accessibility Checklist

Every brand kit must address accessibility beyond just color contrast:

- **Minimum font sizes** — body text no smaller than 16px on web, 14px on mobile. Captions no smaller than 12px.
- **Touch target sizing** — interactive elements must be at least 44x44px (iOS) / 48x48dp (Android). Specify this in the guidelines so designers don't shrink branded buttons below usable sizes.

- **Motion sensitivity** — if the brand identity includes animations or transitions, provide a `prefers-reduced-motion` alternative. Note which brand animations are decorative (can be removed) vs. functional (must be preserved in reduced form).
- **Font legibility** — verify that the chosen display and body fonts remain legible at the specified minimum sizes. Decorative display fonts must not be used for body copy or UI labels.

- **Icon clarity** — any branded iconography must be distinguishable at 24px and not rely solely on color to convey meaning.

Include these standards in Board 4 (Brand Guidelines) as a dedicated "Accessibility Standards" section.

### Export & Deliverable Formats

Before building the final kit, ask the user which export formats they need. Present as a checklist:

- **Design tokens** — CSS custom properties, Tailwind config, SCSS variables (included by default)
- **Asset package** — ZIP containing logo SVGs, PNG exports at 1x/2x/3x, favicon ICO/PNG, and Open Graph image (1200x630)

- **Social media templates** — dimensions and safe zones for Instagram post (1080x1080), Instagram story (1080x1920), X/Twitter header (1500x500), LinkedIn banner (1584x396)
- **Print-ready files** — CMYK color values, bleed specifications, business card layout (3.5x2in)

- **Brand book PDF** — a single-document summary of all guidelines, suitable for sharing with external vendors or team members

Generate the formats the user selects. At minimum, always deliver design tokens and the asset package.

## Step 5.5: Domain & Social Handle Check

After the user approves a direction and name, verify availability:

- **Domain**: Search for `.com`,`.co`,`.app`,`.io` availability
- **Social handles**: Check `@name` availability on major platforms via web search (Instagram, TikTok, X/Twitter)

- **Trademark conflicts**: Quick web search for existing trademarks in the same industry

Present findings clearly:

```text

Name: SWAPD

- swapd.com — ❌ taken
- swapd.co — ✅ available

- swapd.app — ✅ available
- @swapd (Instagram) — ❌ taken

- @getswapd (Instagram) — ✅ available
- @swapd (TikTok) — ✅ available

```

If the primary domain or key handles are taken, suggest variations (get-, try-, use- prefixes, or alternate TLDs) before the user commits.

## Color Science

- Work in OKLCH color space (perceptually uniform — same L = same perceived lightness across hues)
- Use color harmony from OKLCH hue space: complementary (H+180°), analogous (H±30°), triadic (H±120°), split-comp (H+150°/H+210°)

- Generate shade ramps by stepping L linearly in OKLCH — avoids the muddy-middle problem of RGB interpolation
- WCAG 2.2 AA: 4.5:1 contrast for normal text, 3:1 for large text and UI components

- Use chroma-js or apcach for programmatic contrast verification
- Dark mode: backgrounds at `oklch(15-20% 0.01 H)` not pure black. Desaturate brand colors slightly (reduce C by ~0.02).

## Limitations

- Logo concepts are starting points — final production logos should be refined with a dedicated designer
- Fonts limited to Google Fonts / open-source unless user provides custom fonts

- Domain/handle availability checks are point-in-time — availability can change; register quickly once decided
- Trademark search is a surface-level web check, not a legal opinion — recommend a proper trademark search for high-stakes brands
