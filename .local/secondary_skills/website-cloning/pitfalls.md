# Common Pitfalls & Solutions

Documented from real-world cloning projects. Each pitfall was encountered during production use and caused user-visible quality issues.

## Pitfall 1: Building from Memory Instead of Source HTML

**Problem**: After extracting the page, the builder works from a mental model or screenshot interpretation, leading to wrong section types, missing elements, and fabricated content.

**Solution**: Before writing ANY component, open `raw.html`and read the exact HTML for that section. Verify:

- Exact heading text (copy-paste, don't retype)
- Button labels and their HTML classes

- Which elements actually exist (don't add badges/labels that aren't there)
- Layout structure (flex vs grid vs absolute)

- Number of child elements

## Pitfall 2: Reusing Components for Different Visual Patterns

**Problem**: A`ProductCarousel`component with price badges and "personalize" labels gets reused for a category carousel that should only have images and names. The result looks completely wrong.

**Solution**: Apply the "one component per visual pattern" rule:

- If two sections have different card structures, they need different components
- Product cards (image + name + price + badge) ≠ Category cards (image + name only)

- Even if the layout is similar (horizontal scroll), the card contents dictate the component
- When in doubt, create a new component — it's cheaper than debugging a wrong reuse

## Pitfall 3: Wrong Button Styles

**Problem**: Using outlined/bordered buttons when the original has solid/filled buttons (or vice versa). Using wrong colors, wrong border-radius, wrong font-size.

**Solution**: For every button in raw.html:

1. Check the HTML classes — do they include "filled", "primary", "solid", etc.?
2. Extract computed styles:`background-color`, `border`, `border-radius`, `color`, `font-size`, `padding`

3. Especially check: is `background-color`transparent (outlined) or a solid color (filled)?
4. Match the exact`border-radius`—`4px`≠`999px`(pill shape)

## Pitfall 4: Wrong Text Alignment

**Problem**: Center-aligning text when the original is left-aligned, or vice versa.

**Solution**: Always extract`text-align`from computed styles. Common patterns:

- Hero headings: often centered
- Split-layout text blocks: usually left-aligned

- Card titles: varies — check each one
- Footer columns: usually left-aligned

## Pitfall 5: Missing Mobile Navigation

**Problem**: Clones skip the hamburger menu, making the site unusable on mobile.

**Solution**: At 390px viewport width:

1. Look for hamburger/menu buttons
2. Click the button to open the drawer

3. Capture: drawer width, slide direction, background color, link list, close mechanism
4. Screenshot the open state

5. Implement with: slide-in animation, backdrop overlay, body scroll lock, close on backdrop click

## Pitfall 6: Placeholder Images

**Problem**: Builder can't find the right image, so it reuses a hero image or leaves a broken`<img>`tag.

**Solution**:

- Download ALL images in Phase 1, before building starts
- Map each image to its section in`downloaded-assets.json`

- If an image download fails, immediately try alternative approaches:
- Add User-Agent header

- Try different CDN size parameters
- Use `curl`with`-L`flag for redirects

- Screenshot the element as a fallback
- Never use a placeholder or borrowed image from another section

## Pitfall 7: Fabricated Content

**Problem**: Builder adds text, badges, or decorative elements that don't exist on the original page.

**Solution**: The raw HTML is the source of truth. Before adding any element, verify it exists in`raw.html`. Specifically:

- Don't add "NEW" badges unless they're in the HTML
- Don't add star ratings unless they're in the HTML

- Don't add prices to category cards that only have names
- Don't add "Shop Now" buttons that don't exist

- Don't add background patterns or gradients that aren't in the original CSS

## Pitfall 8: Skipped Sections

**Problem**: Builder misses sections because they weren't prominent in the screenshot or seemed redundant.

**Solution**: Use the section inventory checklist. Every single section must be built and checked off. Common sections that get skipped:

- Announcement bars (thin bar at top of page)
- Brand logo marquees

- "As seen in" sections
- Newsletter signup sections (often above footer)

- Secondary CTAs between major sections

## Pitfall 9: Wrong Section Order

**Problem**: Sections are arranged in a different order than the original.

**Solution**: The section inventory records the exact top-to-bottom order from the DOM. Assemble `App.tsx`in exactly this order. Don't reorder for "better flow" — match the original exactly.

## Pitfall 10: Font Loading Issues

**Problem**: Fonts flash, don't load, or use the wrong weight/style.

**Solution**:

- Use`<link rel="preconnect">`for font domains
- Add`font-display: swap`to all`@font-face`declarations

- Load the exact font weights used (don't just load 400 and 700 — check if 500 or 600 is used)
- For self-hosted fonts, use`@font-face`in`index.css`with local paths to`public/fonts/`

## Pitfall 11: Playwright `networkidle`Timeout

**Problem**:`page.goto(url, wait_until="networkidle")`hangs forever on sites with persistent WebSocket/analytics connections.

**Solution**: Use`wait_until="domcontentloaded"`+`page.wait_for_timeout(5000)`.

## Pitfall 12: CDN Image 403 Errors

**Problem**: CDN images return 403 when fetched without proper headers.

**Solution**: Always download with a real browser User-Agent:

```text

User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36

```

For Shopify CDN, also try appending `?v=timestamp`.

## Pitfall 13: Oversized or Undersized Elements

**Problem**: Buttons, images, or containers are dramatically too large or too small because they inherited wrong CSS classes or had unconstrained widths.

**Solution**: For every visible element, extract and set:

- `width`/`max-width`(especially for buttons — don't let them fill 100%)
-`height`(especially for images — maintain aspect ratio with`object-fit`)

- `font-size`(don't let headings inherit a 72px size from a parent)
- Use`max-width`on containers (typically 1200-1440px) to prevent full-viewport stretch

## Pitfall 14: Unused Template Dependencies

**Problem**: Artifact scaffolding includes 40+ shadcn/Radix dependencies that bloat the project.

**Solution**: Replace`index.css`entirely with plain CSS (no Tailwind/shadcn). For`package.json`, the only deps a clone needs are: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, and Replit vite plugins. Remove everything else.

## Pitfall 15: Sticky Header Not Working

**Problem**: Header doesn't stick or doesn't show scroll-triggered style changes.

**Solution**:

```tsx

const [scrolled, setScrolled] = useState(false);

useEffect(() => {

const handler = () => setScrolled(window.scrollY > 50);

window.addEventListener('scroll', handler, { passive: true });

return () => window.removeEventListener('scroll', handler);

}, []);

```

Apply `position: sticky; top: 0; z-index: 50`with CSS transition on`background-color`and`box-shadow`.

## Pitfall 16: Text-Based Logo Instead of Real SVG

**Problem**: Builder uses an SVG `<text>`element or a styled`<span>`to render the brand name, instead of extracting the real logo SVG paths from the source HTML. The result looks obviously fake.

**Solution**: Search`raw.html`for`<svg`elements near logo/brand class names. Most sites embed their logo as inline SVG with`<path>`elements. Extract the complete SVG including`viewBox`, `width`, `height`, and all `<path>` data. Common search patterns:

```python

# Search near 'logo' class references in raw HTML

idx = html.find('logo')

# Then look for <svg nearby

```

## Pitfall 17: Per-Section Verification Loops Are Too Slow

**Problem**: Building one section, screenshotting it, comparing, fixing, then moving to the next section creates 10+ screenshot cycles that consume enormous time and context.

**Solution**: Build ALL sections from raw HTML in one pass, assemble them in App.tsx, then take ONE full-page screenshot and fix all issues at once. The raw HTML provides enough information to get sections 90% right on the first build. The full-page screenshot catches the remaining 10%.

## Pitfall 18: Shopify CDN `_small`Suffix Not Upscaled

**Problem**: Shopify product/hero images contain`_small.jpg`or`_small.png`in the filename, producing low-resolution downloads. The CDN upscaler only handles`?width=X` query params but not the filename suffix pattern.

**Solution**: Add filename suffix replacement alongside query param upscaling:

```python

if 'cdn.shopify.com' in url and '_small.' in url:

url = url.replace('_small.', '_1200x.')

```

## Pitfall 19: Keeping Router/Query Boilerplate in Clone

**Problem**: The `createArtifact`scaffold includes wouter Router, React Query provider, toast provider, etc. These are dead code for a single-page static clone and add complexity.

**Solution**: Replace`App.tsx`with a simple component that renders all sections in order. No router, no query client, no toast provider. A clone is one page rendered statically.

## Pitfall 20: Translating or Anglicizing a Non-English Page

**Problem**: The target URL is a localized page (e.g.,`/es-do`for Spanish,`/fr` for French), but the clone is built in English. This happens because: (a) the raw HTML may return English text (localization happens via client-side JS), or (b) the builder unconsciously writes English text instead of copying from the source.

**Solution**:

1. Check the URL for locale indicators (`/es`, `/fr`, `/de`, `/ja`, `/pt`, etc.)
2. If a locale is present, ALL user-facing text must be in that language — headings, buttons, nav links, footer, CTAs, descriptions

3. If the raw HTML shows English despite a locale URL, translate the UI text to match the URL's language
4. **Brand terms stay in English**: product names, color names, brand program names (e.g., "ALO Wellness Club", "SUNSHINE")

5. Do NOT assume the page is English just because `raw.html`contains English — many sites load translations via JavaScript

## Pitfall 21: Wrong Announcement Bar Background Color

**Problem**: The announcement/promo bar at the top of the page gets a guessed background color (commonly black or white) instead of the actual color. The real color is often a distinctive brand color (e.g., lime yellow-green`#f2f5a2`).

**Solution**: During Phase 1, extract the computed `background-color` from the banner element AND its child containers:

```python

banner = document.querySelector('[class*="banner"], [class*="announcement"]')

bannerBg = getComputedStyle(banner.querySelector('div, .col-12') or banner).backgroundColor

```

The background may be on a child element (e.g., `.col-12`inside the banner), not the banner itself. Always check both.

## Pitfall 22: Wrong Logo Position (Centered vs Left-Aligned)

**Problem**: The logo is placed in the center of the header when the original has it left-aligned (or vice versa). This is one of the most visually jarring mistakes because the logo's position defines the entire header layout.

**Solution**: Take a header-only screenshot (top 150px) during Phase 1 extraction and use it as the definitive reference. The three common header layouts are:

- **Logo-left + nav-right**: Logo left-aligned, nav links to the right of logo, icons on far right
- **Logo-center + nav-split**: Nav links split left/right with logo centered

- **Logo-left + nav-center**: Logo left, nav links centered, icons right

Extract the logo's bounding rect and compare its`left`position to`headerWidth / 3` to classify.

## Pitfall 23: Missing Account/Rewards/Loyalty UI in Header

**Problem**: The header is built with just logo + nav + icons, but the original has additional text elements like "SIGN IN TO GET REWARDS", loyalty program links, or account status text. These are easy to miss because they look like minor text, but they're prominent UI elements.

**Solution**: During Phase 1, search for loyalty/rewards/account elements in the header:

```python

rightElements = header.querySelectorAll('[class*="loyalty"], [class*="rewards"], [class*="account"]')

```

Extract their text and HTML. Include them in the header component alongside the icon bar. Common patterns:

- Account icon + "Sign in to get rewards" text
- Points balance display

- "Join Now" or "Login" links next to nav icons
