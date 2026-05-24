---
name: website-cloning
description: Clone any website as a pixel-perfect React + Vite app using Playwright extraction.
---

# Clone Website — Pixel-Perfect Methodology

Reverse-engineer and rebuild a target website as an exact replica React + Vite clone. Every font, color, icon, image, section, background, transition, and interaction must match the original. Zero guessing, zero placeholders.

## Cardinal Rules

1. **Raw HTML is the source of truth.** Before building ANY section, read the corresponding portion of `raw.html`. Never build from memory, screenshots alone, or guessed structure.
2. **One component per visual pattern.** Never reuse a component designed for one layout (e.g., product cards with prices) for a structurally different layout (e.g., category cards with just names). If two sections look different, they get different components or distinct CSS classes.

3. **All assets downloaded before building starts.** Every image, font, SVG, and video must be local in `public/` before any component code is written. No mid-build downloads.
4. **Build all sections, then verify the full page.** Building and screenshotting section-by-section is too slow. Build all components from raw HTML, assemble in App.tsx, then take a full-page screenshot and fix any discrepancies. This is 3-5x faster than per-section verification loops.

5. **No fabricated content.** Every heading, subtitle, button label, badge, price, and link must come from the source HTML. Never invent text that doesn't exist on the original page.
6. **Replace the scaffolded CSS entirely.** The `createArtifact`scaffold includes Tailwind/shadcn boilerplate. Replace`index.css` completely with plain CSS — a Google Font import, CSS reset, CSS variables for design tokens, and nothing else. Clone pages don't use component libraries.

## Anti-Patterns (Common Mistakes to Avoid)

| Mistake | Correct Approach |

|---------|-----------------|

| Outlined/bordered buttons when original uses filled/solid | Check `raw.html`for button classes and extract`background-color`, not`border` |

| Center-aligned text when original is left-aligned | Extract `text-align` from computed styles |

| Adding badges/labels that don't exist in original | Only add elements that exist in `raw.html` |

| Skipping sections or changing their order | Follow the section inventory checklist exactly |

| Using placeholder images | Download all images in Phase 1 before building |

| Reusing `ProductCard` for category grids | Each visually distinct card type gets its own component |

| Guessing font sizes, colors, spacing | Extract exact computed values; never approximate |

| Building from screenshot interpretation alone | Always cross-reference `raw.html` for structure and content |

| Using an SVG `<text>`element for the logo | Extract the real SVG logo paths from`raw.html` |

| Running per-section screenshot QA loops | Build all sections, then do one full-page verify pass |

| Keeping Tailwind/shadcn/Radix in a clone | Replace index.css with plain CSS; remove unused deps |

| Translating/anglicizing text from a non-English page | Clone must use the EXACT language shown on the target page |

| Guessing the announcement bar color | Extract computed `background-color` from the banner element |

| Centering the logo when it's left-aligned | Take a header screenshot and compare logo position |

| Omitting the account/rewards bar text | Extract ALL header elements including loyalty/rewards UI |

## Legitimate Use Policy

Before cloning, confirm the user's intent is legitimate. Ask:

1. "Is this your own website or your client's website?"
2. "What is this clone for?"

Acceptable: rebuilding your own site, design reference/learning, staging copy, platform migration.

**Refuse** if: impersonation, phishing, traffic theft, trademark infringement, or deception.

For non-owned sites (design inspiration), remind the user to replace logos, brand names, trademarks, product data, and contact info with their own.

## Prerequisites

```bash

pip install playwright

CHROMIUM_PATH=$(find /nix/store -maxdepth 4 -name "chromium" -type f 2>/dev/null | head -1)

echo "Chromium at: $CHROMIUM_PATH"

```

### Critical Playwright settings

- Always use `--no-sandbox` args
- Use `wait_until="domcontentloaded"`(not`"networkidle"`)

- Add `page.wait_for_timeout(5000)` after navigation
- Set `timeout=60000`on all`page.goto()` calls

---

## Phase 1: Reconnaissance & Extraction

All extraction happens before any building. See `extraction.md` for complete Python scripts.

### 1.1 Save Raw HTML (THE SOURCE OF TRUTH)

```python

raw_html = page.content()

with open(f"{OUT_DIR}/raw.html", "w", encoding="utf-8") as f:

f.write(raw_html)

```

This file is the authoritative reference for ALL section structure, content, class names, element ordering, and text content. Computed styles supplement it but never replace it.

### 1.2 Language & Locale Detection (CRITICAL)

If the target URL contains a locale path (e.g., `/es-do`,`/fr`,`/de`,`/ja`), the clone MUST be in that language. However, server-side rendering may return English even for locale URLs — the localization often happens via client-side JavaScript after page load.

#### Detection steps

1. After `page.wait_for_timeout(8000)` (extra wait for JS locale loading), extract all visible text from key areas:

```python

locale_info = page.evaluate("""

() => ({

bannerText: document.querySelector('[class*="banner"], [class*="announcement"]')?.innerText?.trim(),

navLinks: [...document.querySelectorAll('nav a, .main-nav a')].map(a => a.innerText.trim()).filter(t => t).slice(0, 8),

loyaltyText: document.querySelector('[class*="loyalty"], [class*="rewards"]')?.innerText?.trim(),

headerText: document.querySelector('header')?.innerText?.trim()?.slice(0, 500),

htmlLang: document.documentElement.lang,

url: window.location.href

})

""")

```

1. If the URL locale doesn't match the extracted text language, the page probably needs more time for JS to run, or the locale is cookie-based.
2. **When in doubt, use the language implied by the URL locale.** If `/es-do` shows English text in the raw HTML, translate all user-facing text to Spanish when building. The URL locale is the user's intent.

**Brand terms stay in the original language.** Product names (e.g., "ALO Runner"), color names (e.g., "SUNSHINE"), brand names (e.g., "ALO Wellness Club") should NOT be translated — the real site keeps these in English even on localized pages.

### 1.3 Screenshots (Desktop only for initial build)

Take a full-page screenshot at 1440px. This becomes the primary visual reference. Tablet and mobile screenshots are only needed if the user specifically requests responsive behavior.

**Take a separate header-only screenshot** at this stage — crop to just the top 150px. This will be your reference for logo placement, nav layout, banner color, and account/rewards UI. Header issues are the most common mistakes.

### 1.4 Section Inventory

Parse the raw HTML to produce a complete ordered checklist. For each section, record:

- Section index and DOM selector (tag, id, classes)
- Exact heading text and subheading text

- Button labels
- Image count

- Background color (if non-transparent)

Save as `clone-data/inventory.json`. This becomes the build checklist.

### 1.5 Design Tokens

Extract CSS custom properties, body font-family, heading font-family, primary colors. Save to `clone-data/tokens.json`.

### 1.6 Font Handling

#### Priority order

1. **Download actual font files** — Check `@font-face`rules for`.woff2`/`.woff`URLs. Download to`public/fonts/`and declare`@font-face`in`index.css`.
2. **Use Google Fonts if available** — If the site uses Google Fonts, add the `@import`or`<link>` tag.

3. **Map to closest equivalent** — Only as a last resort:

| Proprietary Font | Google Fonts Equivalent |

|-----------------|----------------------|

| Proxima Nova | DM Sans |

| Geograph | DM Sans |

| Self Modern | DM Serif Text |

| Graphik | Inter |

| Circular | DM Sans |

| GT Walsheim | Plus Jakarta Sans |

| Tiempos | Playfair Display |

| Apercu | Source Sans Pro |

| Founders Grotesk | Space Grotesk |

| National | DM Sans |

| Futura | Jost |

| Avenir | Nunito Sans |

| Gotham | Montserrat |

| Brandon Grotesque | Raleway |

### 1.7 SVG Logo Extraction (CRITICAL)

The site's logo is almost always an inline SVG in the `raw.html`, NOT just text. Search for it:

```bash

# Search raw HTML for SVG near logo references

python3 -c "

with open('clone-data/raw.html') as f:

html = f.read()

# Search around 'logo' class references

import re

for m in re.finditer(r'logo', html[:15000], re.IGNORECASE):

idx = m.start()

# Look for SVG nearby

svg_start = html.find('<svg', max(0, idx-200))

if svg_start != -1 and svg_start < idx + 500:

svg_end = html.find('</svg>', svg_start) + 6

print(html[svg_start:svg_end])

break

"

```

**Never use an SVG `<text>`element as a logo substitute.** Extract the real SVG`<path>` elements from the source HTML. The logo is the most recognizable element on the page — getting it wrong immediately signals "fake."

### 1.8 Asset Download (ALL assets, ALL at once)

Download every image, video, SVG, background image, and font file before building starts. See `extraction.md` for the complete download script.

**CDN URL upscaling** (increase resolution before downloading):

- **Shopify `_small`suffix**:`_small.jpg`→`_1200x.jpg` (very common pattern)
- **Shopify query params**: `?width=X`→`?width=1200`

- **Sanity**: `?w=X`→`?w=1200`
- **Cloudinary**: `w_X`→`w_1200`

- **Contentful**: `?w=X`→`?w=1200`

**Verification:** After downloading, verify every file exists and is >100 bytes. The download script includes automatic retry with fallback User-Agent strings.

### 1.9 Header Deep Extraction (CRITICAL)

The header is the most error-prone section. Extract detailed information beyond the basic inventory:

```python

header_info = page.evaluate("""

() => {

const header = document.querySelector('header');

if (!header) return null;

// Banner/announcement bar

const banner = document.querySelector('[class*="banner"], [class*="announcement"], [class*="uni-banner"]');

const bannerBg = banner ? getComputedStyle(banner.querySelector('[class*="col"], div') || banner).backgroundColor : null;

// Logo position

const logo = header.querySelector('svg, [class*="logo"] img, [class*="logo"] svg');

const logoRect = logo?.getBoundingClientRect();

const headerRect = header.getBoundingClientRect();

// Nav links

const navLinks = [...header.querySelectorAll('nav a, [class*="nav"] a')].map(a => a.innerText.trim()).filter(t => t && t.length < 30);

// Right-side elements (account, rewards, search, cart, wishlist)

const rightElements = [...header.querySelectorAll('[class*="loyalty"], [class*="rewards"], [class*="account"], [class*="cart"], [class*="wishlist"]')];

return {

bannerText: banner?.innerText?.trim(),

bannerBgColor: bannerBg,

bannerTextColor: banner ? getComputedStyle(banner).color : null,

logoPosition: logoRect ? (logoRect.left < headerRect.width / 3 ? 'left' : logoRect.left < headerRect.width * 2/3 ? 'center' : 'right') : 'unknown',

navLinks: navLinks.slice(0, 10),

rightSideText: rightElements.map(el => el.innerText?.trim()).filter(t => t),

rightSideHTML: rightElements.map(el => el.innerHTML?.slice(0, 300)),

};

}

""")

```

This prevents the three most common header mistakes: wrong banner color, wrong logo position, missing account/rewards text.

### 1.10 Footer Link Extraction

Extract all footer links separately — they're needed for the footer component:

```python

footer_data = page.evaluate("""

() => {

const footer = document.querySelector('footer');

if (!footer) return null;

return {

text: footer.innerText,

bgColor: getComputedStyle(footer).backgroundColor,

links: [...footer.querySelectorAll('a')].map(a => ({

text: a.innerText.trim(), href: a.getAttribute('href')

})).filter(l => l.text)

};

}

""")

```

---

## Phase 2: Foundation Build

Sequential — do this yourself, not delegated.

1. **Create artifact** via `createArtifact()`with type`react-vite`
2. **Replace `index.css` entirely** — Remove ALL Tailwind/shadcn boilerplate. Write plain CSS:

- Google Fonts `@import`(or`@font-face` for self-hosted)
- Universal reset (`*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }`)

- CSS variables for design tokens (font families, colors)
- Basic body styles (font-family, color, background, antialiasing)

- Reset styles for `a`,`button`,`img`,`ul/ol`

1. **Replace `App.tsx`** — Remove all router/query/toast boilerplate. A clone is a single static page.
2. **Organize assets** in `public/images/`

---

## Phase 3: Build All Sections

Build all components from the section inventory, referencing `raw.html` for exact content. Use inline styles or CSS modules — not Tailwind.

### For EACH section in the inventory

**Step 1: Read the raw HTML** for that section's exact structure, text, and element hierarchy.

**Step 2: Build the component** using:

- Exact text content from raw HTML (copy-paste headings, button labels)
- Local image paths from `public/images/`

- Real SVG paths for logos/icons extracted from raw HTML
- Inline styles for layout (position, display, flex, grid, padding, colors, fonts)

- Hover interactions via `onMouseEnter`/`onMouseLeave` inline handlers
- For carousels: `useRef`+`scrollBy`with`overflow-x: auto; scrollbar-width: none`

**Step 3: Use `import.meta.env.BASE_URL`prefix** for all image`src` attributes so they resolve correctly under the artifact's preview path.

### Build tips

- **Build ALL sections before verifying.** Don't stop to screenshot after each one.
- **Use inline styles** — Simpler than CSS files for clones, and avoids naming/scoping issues.

- **Reusable components are okay when the visual pattern is truly identical** (e.g., two hero banners that differ only in image/button text can share a `HeroBanner` component with props).
- **`href="#"` is fine** — For a visual clone, real link targets are a nice-to-have, not a requirement.

- **Remove unused scaffolded dependencies** — The `package.json`from`createArtifact` includes 40+ shadcn/Radix packages. These are dead weight for a clone.

---

## Phase 4: Page Assembly & Verification

1. Import all components into `App.tsx` in exact DOM order from the inventory
2. Start the dev server and take a full-page screenshot at 1280px

3. Compare against the original screenshot from Phase 1
4. Fix discrepancies section by section

5. Run e2e test to verify all sections render (use `runTest()`)

### Verification checklist

- [ ] All sections present in correct order
- [ ] Logo is the real SVG (not text substitute)

- [ ] Logo position matches (left/center/right)
- [ ] All images load (no broken images in console)

- [ ] Heading text matches exactly
- [ ] All text is in the correct language (match URL locale)

- [ ] Button styles match (filled vs outlined, correct colors)
- [ ] Background colors match for sections with colored backgrounds

- [ ] Announcement bar has correct background color AND text
- [ ] Account/rewards/loyalty text is present in header (if original has it)

- [ ] Carousels scroll properly
- [ ] Hover states work on interactive elements

- [ ] Footer has correct columns and content

---

## Component Specification Format

For complex sections dispatched to subagents, write specs at `docs/research/components/<name>.md`:

```markdown

# <ComponentName> Specification

## Overview

- Target file: `src/components/<ComponentName>.tsx`
- Interaction model: <static | click | scroll | time>

## DOM Structure (from raw.html)

<Exact element hierarchy with tag names, classes, nesting>

## Computed Styles (exact values)

### Container

- display: flex; flex-direction: row; gap: 24px; padding: 60px 80px;

### Heading

- font-size: 48px; font-weight: 400; color: \#230d0d;

### Button

- background-color: \#f195a7; border-radius: 999px; padding: 12px 32px;

## Text Content (verbatim from raw.html)

<Every heading, paragraph, button label — copy-pasted exactly>

## Assets (local paths)

- /images/products/charm-1.webp

## States & Behaviors

### Hover on card

- transform: none → scale(1.02)
- transition: transform 0.3s ease

```

---

## Quick Reference: Full Workflow

```text

1. pip install playwright; find Chromium path
2. Navigate to target URL with Playwright

3. Save raw.html (page.content()) — THIS IS THE SOURCE OF TRUTH
4. Detect locale/language from URL path (e.g., /es-do = Spanish)

5. Take full-page desktop screenshot + header-only screenshot (top 150px)
6. Build section inventory from raw.html → clone-data/inventory.json

7. Extract design tokens → clone-data/tokens.json
8. Extract SVG logo from raw.html (search for <svg near 'logo' classes)

9. Extract header details: banner color, logo position, nav links, rewards/loyalty text
10. Extract fonts (download .woff2 files or map to Google Fonts)

11. Download ALL images/videos/SVGs to public/images/ (batch with retry)
12. Extract footer links → clone-data/footer.json

13. createArtifact("react-vite", ...)
14. Replace index.css (plain CSS reset + design tokens — NO Tailwind/shadcn)

15. Replace App.tsx (remove router/query boilerplate — single page)
16. Build ALL section components (referencing raw.html, using correct language)

17. Assemble page in App.tsx (exact DOM order from inventory)
18. Start dev server, take full-page screenshot, compare vs original

19. Fix discrepancies (check header first — most common mistake area)
20. Run e2e test to verify all sections render

21. Present artifact

```

## Reference Files

- `extraction.md` — Complete Python extraction scripts (Playwright)
- `pitfalls.md` — Detailed common pitfalls and solutions
