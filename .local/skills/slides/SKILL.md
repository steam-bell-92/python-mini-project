---
name: slides
description: Instructions for building, editing, importing, and exporting slide deck artifacts in the Replit workspace. Use this skill when the user asks for slides, a presentation, a pitch deck, a slide deck, or any slide-based content; when the user attaches or imports a .pptx file; or when the user asks to export, download, or save their slides as PPTX or PDF. Covers the manifest contract, slide component conventions, visual editing compatibility, PPTX import, PPTX/PDF export, and design guidance for creating presentations.
---

# Slides -- Presentation Decks in Code

## PPTX Import — Handle First

If the user has attached a `.pptx` file or asks to import / convert a presentation, call `importPptx({ filePath: "attached_assets/<filename>.pptx" })` IMMEDIATELY. The goal is near 1:1 fidelity — like importing into Google Slides. Do NOT generate templates, outlines, images, or boilerplate content; the import gives you the finished components.

References:

- ./references/importing.md -- read this **before** doing anything else with the imported files. Staging-directory layout, the full copy / normalize / manifest workflow, and the "adaptation instead of 1:1 import" exception.

## Exporting Slides (PPTX, PDF)

When the user asks to export, download, save, or share their slides, call `exportSlides({ format: "pptx" | "pdf", presentationName?, artifactDirName? })`. On `success`, hand `result.filePath` to `presentAsset` with a clean human-readable title (e.g. `"My Deck (PDF)"`) — that is what produces the chat card and registers the file in the Library. Never tell the user to "click the export button" or "download from the preview pane" as a substitute for actually producing the file.

References:

- ./references/exporting.md -- read this **before** calling `exportSlides`. Full callback interface, the `presentAsset` example, the Google Slides redirect, and internal-only implementation notes.
- ./references/export_failures.md -- read this **only when** `exportSlides` returns `success: false`, or when the user reports a failed UI-button export. Per-`errorCode` remedy table, two-attempt cap, and the reproduce-and-diagnose pattern.

## Template Selection and Pre-Generation Flow

When creating a NEW slide deck, the backend has already presented the user with template choices (ranked by a classifier) and the user has selected one. The selected template ID and preview image are in your context.

### Using the Selected Template

This section is about *what* to match, not *when* to start. The order of operations for new decks lives in `<first_build>` — follow that sequence. Do not begin writing slide files from this section; the Content Outline Review still has to happen first.

1. **Study the template preview** — A preview image for the selected template was automatically injected into your context. This is your primary visual target — match it as closely as possible.
2. **Read the reference file** — Read `templates/<template-id>.md` (relative to the skill file) for exact hex codes, font choices, layout details, source code for all 4 slides, and design patterns.
3. **Plan Slide 1 fidelity first** — When you do build (after the Content Outline Review in `<first_build>` step 2), write Slide 1 first to match the reference image as closely as possible. Take a screenshot and compare against the reference image to verify fidelity before extending the patterns to the remaining slides.
4. **Extend patterns to the rest of the deck** — Maintain consistent styling throughout the deck guided by both the reference images and the text description. Templates only ship with ~4 sample slides and their images, so for any additional slides you'll need to fill in the gaps yourself: source or generate fitting images via `imageSearch` or the `media-generation` skill, and extend the template's layout patterns to cover the remaining content.

The preview image is the ground truth. The text description and source code supplement it with precise values. Follow both as your creative direction, then adapt to the specific content.

When the user selected an "Auto" option, no preview image is injected. Follow the standard planning process below to develop an original creative direction.

### Required: Content Outline Review (new decks only)

For every new slide deck, call `proposeSlideContent` before writing any slide files, unless one of the skip cases below applies. A short prompt like "Build me slides about dogs", "a deck about coffee", or "pitch deck for a fintech" is not a skip case — that's exactly when the outline matters most, since the user hasn't told you what should be on each slide yet.

The outline must contain the actual text content that will appear on each slide, not just titles. The user should be able to read through it and see exactly what the deck will say.

Images can make decks feel much more produced, especially creative or personal decks. When a searched or generated image would make a slide stronger, include a brief `Image:` note in that slide's body describing what the image should show and how it fits the slide.

```code_execution(js)
const prompt = "Here's a draft outline for your deck. Edit anything you'd like, then confirm.";
const slides = [
  { headline: "Main Title", body: "Subtitle text" },
  { headline: "Slide 2 Title", body: "- bullet point 1\n- bullet point 2\n- bullet point 3" },
  { headline: "Slide 3 Title", body: "Key stat: number + context\nSupporting text\nImage: generated hero image of the product in use, integrated on the right side" },
];
await proposeSlideContent({ prompt, slides });
```

**Research first when the deck depends on real facts.** If the deck is about a real company, real product, real industry, or any subject where the slides need verifiable claims (revenue, headcount, market data, product specifics, dates), complete brand research and content/fact verification *before* drafting the outline — see `<first_build>` steps 0–1 and `<planning>` steps 1–2. Once the user confirms the outline, the "User-supplied copy is canonical" rule treats it as verbatim source material, so guessed facts get locked in. **Do not fabricate stats, revenue numbers, dates, or company specifics in the outline.** If you cannot verify a figure, omit it or label it explicitly as a placeholder (e.g. "[stat to verify]"). For purely topical or creative decks ("dogs", "coffee", "birthday party") with no verifiable claims, draft the outline after studying the template.

Wait for the user's response. If they request changes, incorporate them. Then proceed to the planning and implementation phases below.

### Skip conditions

Skip the content outline review and proceed directly to building only when one of these is true:

- The user is asking to edit/modify an existing deck, not create a new one.
- The user is importing/converting from an existing file (PPTX, PDF, etc.) — the source file already defines the content and structure.
- The user already supplied per-slide content — a numbered or bulleted slide-by-slide outline ("Slide 1: Title — X. Slide 2: Problem — Y…"), an attached script / talking-points / Google Doc that names what each slide should say, or copy in the prompt that maps cleanly onto specific slides. A topic, a brand, an audience, or a slide count alone is not per-slide content.
- The user explicitly opts out ("just build it", "skip the outline", "no questions, please").

Don't skip just because:

- The prompt is short.
- The user gave you a topic but not per-slide content ("a deck about coffee", "pitch deck for a fintech").
- The user gave you a slide count but not per-slide content ("make me 8 slides on X").
- You feel confident you can fill in sensible defaults — that's exactly when the outline review is most valuable.

If you're unsure whether the user supplied "enough", err toward running the outline review — it costs one round-trip and prevents rebuilding a deck that misses the user's intent.

### Static Asset Paths

Template reference files may show bare absolute paths like `src="/photos/image.png"`. **Do not copy these verbatim.** Slides are served under a sub-path, so all static asset references in `public/` must be prefixed with `import.meta.env.BASE_URL`. For example: `src={` + "`${import.meta.env.BASE_URL}photos/image.png`" + `}`. This applies to images, fonts, and any other file in `public/`.



<context>
A slides artifact is a React + Tailwind CSS application that functions as a slide deck. Each slide is a separate React component file in `src/pages/slides/`, rendered at a unique `/slideN` URL route (e.g., `/slide1`, `/slide2`). This React app runs inside a workspace app preview, where the preview wraps it in a custom slide viewer / editor UI. That UI provides a thumbnail sidebar for navigation and visual editing controls that let the user reorder slides, add or delete slides, and edit visual properties like colors and text directly from the Replit interface. PPTX and PDF exports are produced by the `exportSlides` callback (see `## Exporting Slides`) or by the preview-pane UI — when the user wants a file, you call that callback yourself.

The workspace UI includes a visual editor that lets users click on elements in a slide and modify them (text, colors, layout). For this to work, the editor must be able to map each DOM element back to a specific line in your JSX source. This means slide components must use static, inline JSX -- every element written out by hand, no `.map()` loops, no dynamic content generation, no `<br/>` tags. Use Tailwind spacing utilities instead of line breaks.

The slide manifest at `src/data/slides-manifest.json` is the contract between your React app and the workspace. The workspace reads this file to populate its UI -- thumbnails, titles, ordering, descriptions, and speaker notes all come from the manifest. Each entry has `id` (UUID string), `position` (contiguous 1-based number), `filepath` (e.g. `src/pages/slides/MarketOverview.tsx`), `title`, `description`, and `speakerNotes`. The `speakerNotes` field is user-facing and primarily managed by the workspace UI: initialize it to `""` by default and do not touch it on subsequent edits. **Exception:** if the user explicitly asks for speaker notes (e.g. "generate speaker notes," "add talking points," "write a script for each slide"), populate `speakerNotes` per slide in the manifest at that point — see the speaker-notes rules in `<constraints>` → Content. When you create, remove, or reorder slides you must update this manifest. **When the user asks to duplicate a slide, copy the underlying `.tsx` component file to a new filename (e.g. `Pricing.tsx` → `Pricing2.tsx` or `PricingCopy.tsx`), update the default-exported component identifier in the copy to match, and add a new manifest entry pointing at the new file with a fresh UUID and the next contiguous `position`.** Do NOT just add a second manifest entry that points at the same `filepath` — both entries would render the same component, and any later edit to one would silently change the other. Same rule applies if the workspace UI ever appears to have duplicated a slide by manifest entry alone: split the shared file into two before editing either. The Replit UI may also modify this file based on user interactions, so re-read `slides-manifest.json` before editing it rather than assuming your last write is still current. After any manifest or slide file change, run `pnpm run --filter @workspace/<slug> validate-slides` to catch broken invariants before they reach the user.

For follow-up requests like "add more slides", "update this deck", or "change slide N", re-read `src/data/slides-manifest.json` first so you know the current slide order, filepaths, titles, and any workspace UI changes before deciding which files to edit.

Visiting the root URL (`/`) renders a presentation viewer that displays slides in a 16:9 aspect ratio centered on a black background with keyboard/click navigation. Individual slides must remain accessible at `/slideN` for workspace preview, and `/allslides` for export. Unknown routes redirect to the first slide. The routing logic in `App.tsx` must not be modified. The SPA is configured with a catch-all rewrite so that direct navigation to any route works correctly. No additional routing configuration is needed for deployment.

Slides are composed for **16:9 aspect ratio** (1920x1080 reference). Each slide's root container must use `w-screen h-screen overflow-hidden relative`. The `/allslides` view wraps each slide in a `<div className="slide">` (the contract class the workspace exporter matches on — see `<workspace_contract>` below) and relies on CSS selector overrides (`[&_.w-screen]:!w-full [&_.h-screen]:!h-full`) to scale slides into fixed-size boxes, so these classes are required -- do not replace them with `w-full h-full` or other alternatives. Use viewport-relative units (`vw`/`vh`) for sizing text, spacing, and elements so proportions stay consistent regardless of screen size. Each slide component must use a **default export**. Place static assets you create (not user-attached) in `public/` so they are served at the base URL. User-attached assets use the `@assets/...` import syntax.

Before declaring the deck done, read `./references/visual_qa.md` and walk every check — it covers `/allslides` rendering, 16:9 bounds, text-scaling integrity, and the final visual QA loop.
</context>

<workspace_contract>
## Workspace contract — do not break

The workspace drives PDF / PPTX / Google Slides exports and thumbnail generation by loading `/allslides` in a headless browser and waiting for `document.querySelector('.slide')` to match. Break the contract and exports silently time out with `NO_SLIDES_FOUND` after 60 seconds, even when the preview looks fine. Violations are the single largest source of broken slide-export tickets.

**The contract:**

- `/allslides` renders every slide. Each slide is wrapped in `<div className="slide">` sized **1920×1080**. `.slide` is a contract class name, not a styling choice — do not rename it (`.print-slide`, `.deck-slide`, `.page`, etc.) and do not remove it. Do not change wrapper dimensions to A4, portrait, or anything custom.
- Router stays on `wouter`. The parent frame posts `navigateToSlide` messages that rely on wouter's `useLocation` shape.
- Both `DO NOT edit` `useEffect`s in `App.tsx` stay as-is (unknown-route redirect, parent `navigateToSlide` postMessage listener).
- Slide loading stays in `src/slideLoader.ts` at module level — do not lazy-load or rewrite the import pattern.
- `src/App.tsx` (`SlideViewer`, `SlideEditor`, `AllSlides`, `App` router) and `src/main.tsx` (wouter `<Router>`) keep their structure. Styling inside `SlideEditor` is fair game; `AllSlides`, the route-to-component mapping, and the two `DO NOT edit` effects are not.

**If the user insists on a custom export, download, or print/PDF UI**, do not extend the slides artifact. Create a new `react-vite` (web) artifact for that flow instead — see the `artifacts` skill (`createArtifact({ artifactType: "react-vite", ... })`). The slides artifact's `/allslides` route is reserved for the workspace export pipeline; the new artifact can call `/api/pdf/*` or render whatever custom layout the user wants without breaking exports.

**If `App.tsx` has been hand-edited** and parts of the contract are missing (class renamed, dimensions changed, router swapped, `DO NOT edit` effects deleted, `AllSlides` replaced with a custom component), repair it in place rather than working around the breakage. See `./references/visual_qa.md` → "Platform contract sanity check" for concrete repair steps.
</workspace_contract>

Your goal is to create visually stunning, professional slide decks. Every deck should look like it was designed by a top-tier design agency. Prioritize clarity, visual hierarchy, and polish. Your work should feel "crafted," not "assembled." Each slide is a single, static, full-screen 16:9 frame. The content should be immediately visible on load. Every deck should have a specific, nameable aesthetic direction. Reject mediocrity. Build something with a point of view.

<clarifying_questions>
Only ask clarifying questions for information the user has not already given you. Before asking anything, scan the user's request for:

- **Slide count** ("10 slides", "a short deck", "around 6")
- **Audience** ("for the board", "for a sales pitch", "internal team")
- **Tone / aesthetic** ("playful", "corporate", "editorial", "minimal")
- **Brand or company** (named company, attached logo, linked website)
- **Content topic** (the deck subject — explicit topic vs. vague hand-wave)
- **Length / depth** (overview vs. detailed)

If the user provided it, do NOT re-ask. If the user provided enough to start (count + topic, or topic + clear brand, or topic + audience), skip clarifying questions entirely and start building. Use sensible defaults for anything missing — pick a slide count of around 6-8, infer audience from topic, and commit to an aesthetic that matches the subject.

Only ask when the request is genuinely ambiguous AND the missing information would change the deck materially (e.g. "make a deck" with no topic, no count, no brand — ask). When you do ask, ask the minimum needed to unblock — never re-ask things that were already specified.

This section governs only short clarifying Q&A. It doesn't override the Content Outline Review under "Template Selection and Pre-Generation Flow" — that step still runs on every new deck unless one of the Skip conditions there applies.
</clarifying_questions>

<first_build>
When building a new slide deck for the first time, follow this exact sequence:

0. **Research brand** (real companies only): **Skip this step entirely if the user already supplied the brand source of truth** — attached brand guide, exact hex codes, approved fonts, design system file, sibling artifact CSS, etc. Use what they gave you. Otherwise, for real companies, prefer the Firecrawl-backed tools — they return real, structured data. The order is: `extractBranding` → `webFetch` on official pages → `webSearch` only as a last resort.
   - Start with `extractBranding` on the official site for colors, fonts, and visual identity.
   - Use `webFetch` on the homepage, about page, or key product pages for real company copy and positioning.
   - Only fall back to `webSearch` if neither tool can reach the site (e.g. the company has no public site, or you genuinely cannot find the URL). Do NOT default to `webSearch` for brand colors, fonts, or positioning — search snippets are noisy and miss the real brand tokens that `extractBranding` returns.
   - `extractBranding` already returns the company's logo image alongside colors and fonts — use that logo when it's good. `imageSearch` via the `image-search` skill is a useful complement: reach for it when `extractBranding`'s logo is missing or low-quality, when the company has no site Firecrawl can reach, or when you want a cleaner reference image. For non-brand real-world imagery (product shots, team photos, venues), defer to step 3 of `<planning>` — don't stall the first build crawling for those.
   - If the visual feel of the source site matters, use external-URL `screenshot` for quick visual reference.
1. **Verify content** (real-company / data-driven decks only): If the deck will make verifiable claims (real revenue, headcount, market data, product facts, dates), gather those facts now. Lead with `webFetch` on the company's own pages, then `webSearch` only for facts not on the company's site. See `<planning>` step 2 for the full guidance and concurrent-query pattern. Skip this step for purely topical or creative decks ("a deck about dogs", "birthday party deck") where there are no verifiable claims to research. **Do not fabricate stats, revenue numbers, dates, or company specifics.** Anything you cannot verify must be omitted from the outline draft (or marked as a placeholder) — once the outline is confirmed, that copy is canonical.
2. **Run the Content Outline Review** — call `await proposeSlideContent({prompt, slides})`, using only verified facts from steps 0–1, and wait for the user's response before any of the steps below. Skip only for the cases listed in "Skip conditions" under "Template Selection and Pre-Generation Flow".
3. **Generate images** (if needed): Kick off `generateImageAsync` via the media-generation skill so images generate in parallel while you write slides.
4. **Write ALL files in a single parallel batch.** `index.html`, `index.css`, every slide `.tsx` file, and `slides-manifest.json` are all independent — write them ALL in one parallel tool call. Do not write them sequentially.
   - `index.html`: Update Google Fonts links for your chosen display + body fonts.
   - `index.css`: Fill in CSS variables in `:root` with brand palette and font families. Use the `@theme inline` tokens — write `text-primary`, `bg-accent`, `font-display` in Tailwind classes instead of inline styles.
   - Each slide `.tsx` file in `src/pages/slides/`
   - `slides-manifest.json` with all entries
5. **Run validation**: `pnpm run --filter @workspace/<slug> validate-slides`
6. **Restart workflow** — done.

Do NOT restart workflow until all slides are written. Do NOT read files you just scaffolded — they are already in your context.
A quick seamless build is what you are aiming for. If the user gave you an exact slide count (in their prompt or the additional-comments box on the length question), use that exact number. If they picked a length range, pick a slide count that feels right inside that range. Otherwise limit to around 6 — don't go longer unless the user asked for it.
Avoid screenshotting in the first build. You have two priorities: speed and design.
</first_build>

<planning>
Before writing any code, establish your creative direction:

1. **Brand research**: **If the user supplied brand tokens** (attached brand guide, exact hex codes, approved fonts, sibling artifact CSS, design system file, etc.), use those as the source of truth and skip this step. Crawl only to fill genuine gaps the user did not provide.

   For real companies where the user did not supply brand tokens, lead with the Firecrawl-backed tools — `extractBranding` and `webFetch` return real, structured data. `webSearch` is the fallback, not the default.

   **Preferred order:**
   - `extractBranding` on the official website URL — returns the company's actual brand tokens (colors, fonts, visual identity).
   - `webFetch` on the homepage, about page, or product pages for real positioning and tone.
   - `webSearch` ONLY as a last resort, when the company has no public site or you cannot find the URL. Do not default to `webSearch` for brand colors, fonts, or positioning when an official site exists — search snippets are noisy and miss what `extractBranding` already returns directly.

   **Logo sourcing.** `extractBranding` returns a logo image when Firecrawl can parse one. If that logo is good, use it. If it's missing, low-resolution, or clearly wrong (e.g. a favicon placeholder), or if you just want a cleaner reference, use `imageSearch` for queries like `"<company> logo png"` or `"<company> logo transparent"`, pick the highest-quality result from the company's own domain or a reputable press/brand asset site, and download it to `attached_assets/`. Pass it to the `design` subagent as part of the brand context (colors + typography + reference logo image), the same way an `extractBranding` logo would be — it's a brand reference image, not necessarily a slide asset. It's fine to use both — `extractBranding`'s logo plus a sharper `imageSearch` hit — if that gives the design subagent better context.

   When `webSearch` is the only option, batch concurrent queries:

   ```text
   webSearch({
     queries: [
       "[company] brand guidelines",
       "[company] brand colors hex",
       "[company] visual identity site:brandfetch.com",
       "[company] logo usage guidelines filetype:pdf"
     ]
   })
   ```

   Use their real palette and typography — don't guess. If official guidelines aren't available, base your palette on the company's public-facing website and explicitly note that the colors are inferred, not official. If the site's visual style matters, use external-URL `screenshot` for a quick reference on layout, logo treatment, and overall tone.
2. **Content research**: If the deck is about a real company, product, industry, or topic, gather real facts before writing slides. **Lead with `webFetch`** on the company's own pages (homepage, about, product, pricing) — that's where real headlines, messaging, and positioning live. Only use `webSearch` for facts that aren't on the company's site (industry stats, third-party data, market sizing, recent news).

   Do not fabricate statistics, revenue numbers, headcount, market share, or any verifiable claim. When you do need `webSearch`, batch concurrently:

   ```text
   webSearch({
     queries: [
       "[company] investor presentation 2026",
       "[company] annual report key metrics",
       "[company] revenue employees market share",
       "[topic] statistics 2026",
       "[industry] market size growth rate"
     ]
   })
   ```

   If you cannot verify a figure from a real source, either omit it or mark it explicitly as an estimate. A deck with 5 real numbers is better than one with 20 invented ones.
3. **Image sourcing**: For real companies and real-world references, `imageSearch` via the `image-search` skill is a great tool when you need images of real things on the web — product photos, office/venue shots, team or founder headshots, known landmarks, competitor screenshots, or a sharper logo than `extractBranding` surfaced. `imageSearch` and Firecrawl complement each other: Firecrawl gives you the site's brand tokens and logo in one pass; `imageSearch` finds everything else that's "real" and publicly photographed. Use whichever (or both) gets you the right image. Download found images to `attached_assets/` and import them with the `@assets/...` syntax. Use the `media-generation` skill for supplemental or abstract visuals that don't exist on the web. Do not generate a fake logo when the real one is searchable.

   Quick image-sourcing cheat-sheet (use any combination that gets the right image):
   - Brand tokens (colors, fonts, logo, positioning) → Firecrawl `extractBranding` + `webFetch`.
   - Real-world images (products, people, places, sharper or missing logos) → `imageSearch`.
   - Supplemental / abstract / doesn't exist on the web → `media-generation` skill.
4. **Color palette**: Pick a bold, intentional palette. State exact hex codes. You want 1 primary, 1 accent, 1-2 neutrals, and a background tone. The palette should have a clear vibe -- editorial, corporate, playful, luxurious, energetic, whatever fits the content. Every color should feel like a deliberate choice. Build every slide from these colors -- consistency is what makes it feel designed, not generated.
5. **Typography**: Pick ONE display font + ONE body font. Choose from common PowerPoint-bundled fonts that work on web or popular Google Fonts -- decks are exported to PPTX and other platforms, and fonts that don't exist on the target platform will break the slide. Analyze the emotional goal of the deck, then select a font *type* that amplifies it:
   - Trust/Authority -> strong geometric sans-serif
   - Corporate/Professional -> neutral, clean sans-serif
   - Excitement/Energy -> condensed bold display
   - Luxury/Premium -> refined serif or high-contrast sans
   - Tech/Developer -> geometric sans or monospace
   - Playful/Creative -> rounded or expressive sans
   - Editorial/Culture -> elegant serif paired with a clean sans
   Every deck should feel typographically distinct. Do not fall back on the same font pairing across different decks -- vary your choices. The font IS the personality of the deck. A wrong font choice undermines everything else.
6. **Deck aesthetic direction**: Pick a specific aesthetic direction and commit. The direction dictates everything -- how slides are composed, what the visual tone feels like, how information is presented. **Match the visual energy of the deck to the subject matter.** A birthday party deck should feel festive; a board meeting deck should feel precise. Some examples to spark your thinking:
   - **Corporate Minimal** -- clean sans-serif, generous whitespace, muted neutrals + one bold accent, grid-aligned layouts, restrained. Best for: investor updates, board decks, quarterly reports.
   - **Bold Editorial** -- oversized display type, strong color blocks, asymmetric layouts, magazine-inspired, high visual contrast. Best for: marketing pitches, brand launches, thought leadership.
   - **Warm Storytelling** -- serif headlines, earthy warm palette, photography-forward, organic shapes, human and approachable. Best for: nonprofit pitches, personal narratives, community updates.
   - **Data-Forward** -- clean geometric type, structured grids, prominent stats and numbers, minimal decoration, credibility through precision. Best for: research presentations, analytics reviews, financial summaries.
   - **Tech Product** -- dark backgrounds, crisp sans-serif, code-inspired grid layouts, accent colors on dark, product-screenshot-heavy. Best for: product demos, developer talks, SaaS pitches.
   - **Playful/Creative** -- rounded fonts, saturated colors, hand-drawn accents, loose layouts, personality-driven. Best for: birthday parties, pet showcases, hobby projects, kids' topics.
   These are starting points -- invent your own direction if the content calls for it. The point is to have a nameable aesthetic, not a vague "clean and modern."

   **Context matters for imagery too.** Corporate and formal decks should lean on clean typography, whitespace, and restrained visuals -- decorative images distract. But fun, personal, or creative topics should tastefully include generated images, illustrations, and rich photography. A deck about dogs deserves cute dog photos; a birthday party deck deserves festive visuals and warm colors. Read the room and design accordingly.

   **Commit to a system up front.** Before writing slides, write out (in planning text) the system you'll use for the whole deck: the section-header layout, the title-slide layout, how content slides are composed, the image-slide pattern, and the closing-slide treatment. Limit the deck to **1–2 background colors max** — varied background tones break visual cohesion fast. Decide where visual rhythm comes from (a recurring accent shape, a consistent type lockup, a divider style). State the system before you build it; it's what separates a designed deck from an assembled one.

   **Professional / corporate / formal decks — extra consistency rules.** When the user asks for a professional deck (or the context reads that way — investor, board, exec, sales, internal report, quarterly review): pick **one mode and hold it** — either consistently light or consistently dark, never alternating slide-to-slide. Hold the same background tone family across every content slide. Save full-bleed image slides for 1–2 hero moments max, and lean on typography + whitespace for the rest unless the user explicitly asks for a more visually rich treatment. A professional deck reads as professional because it's restrained and consistent, not because every slide brings a new visual trick.
7. **Asset planning**: Inventory any assets the user attached (logos, product shots, brand images, etc.) and decide where each one appears. Then plan what additional images to source with the `media-generation` skill to fill the remaining slides. Rich visual material elevates a deck -- plan it upfront, not as an afterthought.

Commit to a direction and execute.
</planning>

<title_grammar>
**If the user supplied the titles (or exact slide copy), use them verbatim — skip this section.** The rules below apply only when you are writing titles from scratch. See the "User-supplied copy is canonical" rule in `<constraints>` → Content for the full precedence rule.

Slide titles are the spine of the deck — read top-to-bottom, they should read like a table of contents. Mixing grammatical styles within one deck is the single clearest tell of AI-authored copy.

**Pick ONE structure for the whole deck and hold it:**

- **A. Short topic noun phrases** — `Market Research · Team Structure · Risk Factors`
- **B. Brief declarative sentences** — `Revenue grew 40%. · Costs held flat.`
- **C. Imperatives, sparingly** — `Cut the text. · Ship the draft.`

Choose the structure that fits the content, then hold the register on every slide. If you're tempted to write a "punchier" title for one slide mid-deck, that's the urge to break parallelism — resist it.

**Title anti-patterns — reject on sight:**

- Punchline titles ("The Magic Moment", "Why Everything Changes Now")
- "It's Not X. It's Y." construction, anywhere
- Faux-insight reframes ("Rethinking how we build slides")
- Titles that deliver the verdict instead of orienting the slide
- Titles that sound like the speaker's punchline rather than a chapter heading
- Over-long title phrases ("How we rethought the way we build…")

After drafting titles, read the title list top-to-bottom in isolation. If a person reading only the titles couldn't follow the flow of the deck, rewrite the titles before building any slides.
</title_grammar>

<visual_composition>
Every slide should have visual depth and intentional composition. Layer backgrounds, content, and accent elements to create polish.

**Layer your slides:**

1. **Background**: Gradient, subtle texture, muted brand-colored shape, or photography. Use at minimum a very subtle gradient or tinted background for depth.
2. **Content**: Your primary message -- typography, data, key visuals. This is the main event. Strong hierarchy is essential: one thing should clearly dominate (usually the headline or a hero number).
3. **Accent elements**: Shapes, lines, brand marks, color blocks, or dividers that create visual rhythm and tie the deck together. These are subtle but they separate amateur from professional.

**Composition principles:**

- Mix centered layouts with left-aligned, right-aligned, and asymmetric compositions. Visual tension keeps the viewer engaged.
- Use generous padding (at least 5-8vh from edges). Content crammed to the edges looks unfinished.
- Create clear visual hierarchy: one dominant element per slide (headline, hero image, big stat), supported by secondary elements at obviously different scale.
- White space is a design element -- balance content and breathing room.
- When using images alongside text, give images real estate. If you're using an image, let it be prominent.
- The title slide (slide 1) should always include a high-quality generated or user-provided image. This is the first thing the viewer sees -- make it visually rich, not a plain text-on-color slide.
- Roughly 1 in every 4-5 slides should use a **full-bleed high-resolution image as the background** with bold, high-contrast text on top. These slides create visual impact and break up text-heavy runs. Use a semi-transparent overlay or gradient so text remains readable. Source the image via the `media-generation` skill and keep the text large and minimal.
- Give images real visual space. A slide with one strong image at 50% width beats a slide with three tiny thumbnails.

**Asset usage:**

- **User-attached assets come first.** Feature them prominently -- use ALL of them.
- **Generate supplemental assets to fill gaps.** Use the `media-generation` skill for custom visuals and photos of real people, places, and products.
- Real images and photography are what make a deck feel produced and professional.

**Design principles:**

- Pick an aesthetic and apply it to every single slide. A deck where each slide looks like it came from a different template is worse than a simple but consistent deck.
- Pursue cohesive art direction, intentional color palettes, restraint, and strong typographic hierarchy.
- Use Tailwind and CSS variables from `index.css`. Import your fonts from Google Fonts via `index.html`. Use CSS variables for your color palette so every slide stays in sync.
- When the user wants simple: focus on clean execution, strong typography, and generous whitespace. The difference between beautiful simplicity and lazy simplicity is intentional spacing, a great font, and a cohesive palette.

**One thousand no's for every yes.** Never pad slides with placeholder text, dummy stats, or generic icons just to fill space. Every element should earn its place. If a slide feels empty, fix it with layout and composition — not by inventing content. Avoid "data slop": numbers, stats, percentages, or iconography that don't actually inform the message. Less is more. If you think a slide needs an extra section to feel "full," try removing something instead.

**Useful CSS:**

- `text-wrap: pretty` (or `text-wrap: balance` for headlines) prevents awkward orphans on multi-line text. Apply to headlines, subtitles, and bullet copy.
- CSS Grid and `display: contents` are powerful for layered compositions — use them.
</visual_composition>

<slide_layouts>
Use a variety of slide layouts to keep the deck visually engaging. Match layouts to content.

**Core layout patterns:**

- **Title Slide**: Hero display typography at large scale with a high-quality full-bleed or prominent hero image. Minimal supporting text (subtitle or date). Brand mark/logo if available. Sets the visual tone for the entire deck. This is your first impression -- make it count. The title slide should always feature a striking image: use a user-provided asset if available, otherwise generate one via the `media-generation` skill. Layer bold, high-contrast text over the image with a semi-transparent overlay or gradient for readability. A typography-only title slide is acceptable only when the user explicitly requests a minimal or text-only approach.
- **Content Slide (Title + Bullets)**: Big headline at the top, then 3-6 bullet points underneath. The workhorse layout for communicating lots of information. Keep bullets concise -- phrases, not sentences.
- **Two-Column**: Headline, then two columns of content below. Each column can have a sub-header, supporting text, and optionally an image or icon above it. Great for comparisons, before/after, pros/cons.
- **Three-Column**: Headline, then three columns. Each column gets a visual element (icon, image, or large number) and brief text. Good for features, process steps, team members.
- **Big Stat / Data Slide**: A single large number or metric as the hero element (displayed at 8-12vw). Supporting context text at smaller scale. The stat is the slide -- everything else is subordinate.
- **Image-Feature Split**: Image on one half, text on the other half. Works for product shots, team photos, case studies. Give the image at least 45-55% of the slide width.
- **Quote / Emphasis**: Centered pull quote at large scale. Attribution below in smaller text. Can use a subtle background image at low opacity for depth. Great for customer testimonials, key insights, or dramatic statements.
- **Section Divider**: Bold text, strong accent color, signals a topic change. Minimal content -- just the section title and maybe a one-line subtitle. Gives the viewer a visual break and resets attention.
- **Closing Slide**: Company name or logo lockup with tagline, contact info, or call to action. Bookends the deck with the same brand treatment as the title slide.

**Layout variety rules:**

Match variety to deck type:

- **Board decks, memos, internal reports** -- Consistent, repeatable formats. Very similar or identical structure slide after slide (besides title and closing). Predictability is a feature.
- **Pitches, marketing, external presentations** -- Meaningful variation between slides. Mix layouts to keep visual interest high. The goal is professional and polished, not flashy or cluttered.

Most decks should be around 6-8 slides.
</slide_layouts>

<typography_system>
Typography is the backbone of slide design. Get this right and the deck is 80% there.

**Hierarchy:**

1. **Display / Hero**: Headlines, big stats, section titles. Use your display font at large scale (4-7vw for main headlines). Bold or black weight. Tight letter-spacing (`tracking-tighter` or `tracking-tight`).
2. **Subheading**: Slide subtitles, column headers. Same display font at medium scale (2-3vw), or body font at bold weight.
3. **Body**: Supporting text, bullet points, descriptions. Body font at readable scale (2-2.5vw). Regular or medium weight.
4. **Caption / Detail**: Attribution, footnotes, fine print. Body font at small scale (1.5vw — the floor; nothing renders below it). Light or regular weight. Lower opacity (60-80%).

**Rules:**

- Mix font weights aggressively to create hierarchy. If your headline and body text are the same weight, the slide has no visual structure.
- Use letter-spacing and line-height intentionally. Tight tracking on bold headlines. Relaxed line-height on body text for readability.
- Keep text short -- phrases and fragments over full sentences. Split dense content across multiple slides.

**Font sizing reference (viewport-relative):**

| Element | Size | Weight |
| --- | --- | --- |
| Hero headline | 5-7vw | Bold/Black |
| Slide headline | 3-4.5vw | Bold |
| Subheading | 2-3vw | Semibold |
| Body text | 2-2.5vw | Regular/Medium |
| Caption | 1.5vw | Regular/Light |
| Big stat number | 8-12vw | Black |

**Minimum readable size at export.** `1.5vw` is the absolute floor — captions and footnotes only. Body copy targets `2vw+` (aim for 2-2.5vw); nothing on the slide should render below `1.5vw`. Read the smallest font size across your slide JSX; if any body text falls below `2vw`, or anything at all falls below `1.5vw`, raise it. See `./references/visual_qa.md` for the full text-scaling rules and forbidden patterns (no `clamp()` with px caps, no `transform: scale` on text, no hardcoded `px` font sizes).

**Font selection:**

- **One family ideally; two only when the content demands it** (editorial serif display + clean sans body). Variety comes from composition, weight, and scale — not from adding fonts.
- **Three weights max per deck.** Weight jumps must be ≥200 (e.g. 400 → 700). 400 next to 500 reads muddy from the back of the room; pick a real contrast.
- **Banned as your default fallback:** Inter, Roboto, Arial, system-ui, Fraunces. When you are picking the font yourself, do not reach for these — they read as "AI did this." Pick a font with intent — see the typography decision tree in `<planning>` and pull from the full Google Fonts catalog (or PowerPoint-bundled fonts so PPTX export holds).
- **Exception — when the font is specified, use it.** If a selected template (e.g. `templates/<template-id>.md` in the template-selection flow), an attached brand guide, the user's prompt, or `extractBranding` results name a specific font — including Inter, Roboto, or anything else on the banned list — use that font verbatim. The ban only applies to fonts *you* are choosing from scratch; it never overrides a font the user, brand, or template hands you. This mirrors the "user-supplied copy is canonical" rule in `<constraints>` → Content.
- **Vary across decks.** When you are choosing the font yourself, vary your choice across decks — don't default to the same pairing every build.
- **No all-italic body text.** Italic for emphasis or titles of works only.
- **No underline as styling.** Underline = link only.

</typography_system>

<image_asset_paths>
Slide decks are served under a dynamic base path (e.g., `/dog-workshop/`, `/pitch-deck/`). The base path is set via the `BASE_PATH` environment variable and made available at runtime through Vite's `import.meta.env.BASE_URL`. A hardcoded path like `/hero.png` will break because the asset is actually served at `/<base-path>/hero.png`.

Use **two different patterns** depending on where the image comes from:

- **Files in `public/`**: Prefix the path with `import.meta.env.BASE_URL`. This is the right pattern for static assets you create inside the artifact, including generated images you want to ship with the deck.
- **User-attached files imported from `@assets/...`**: Do **not** prefix them with `import.meta.env.BASE_URL`. Vite already resolves imported assets to the final URL string.

If you generate a new image for the deck, prefer placing it in `public/` and referencing it with `import.meta.env.BASE_URL`. If the user uploaded an image, either keep it as an `@assets/...` import or intentionally copy/move it into `public/` before switching to a base-path-prefixed string path.

At the top of every slide component that uses `public/` images, read the base URL into a module-level constant:

```tsx
const base = import.meta.env.BASE_URL;

export default function MySlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img src={`${base}hero.png`} crossOrigin="anonymous" className="w-full h-full object-cover" alt="Hero image" />
    </div>
  );
}
```

For user-attached assets, import them directly instead:

```tsx
import logoPng from '@assets/logo.png';

export default function MySlide() {
  return <img src={logoPng} crossOrigin="anonymous" alt="Logo" />;
}
```

</image_asset_paths>

<animations>
These rules apply **only when the user explicitly asks for animations**. If the user has not requested animations, ignore this section entirely and follow the default no-animation constraint above.

**Per-slide scoping:**

- All animations must be scoped to the individual slide component. Each slide owns its own animations -- they start when the slide mounts and live entirely within that slide's component file.
- When navigating back to a slide (e.g., returning to `/slide3`), its animations must restart from the beginning. Use the route change or a `key` prop tied to navigation to force a remount so animations always replay on entry.
- The `design` subagent can create SVG animations for persistent or looping motion effects within a slide.

**No transitions between slides:**

- Do not animate the transition from one slide to another. No slide-in, slide-out, cross-fade, or any motion between slides. Navigation between slides must be instantaneous. Animations happen *within* a slide, never *across* slides.

**`/allSlides` compatibility:**

- The `/allSlides` route screenshots every slide for static export (thumbnails, PDF, PPTX). Animated slides must render all their content visibly on `/allSlides` -- either disable animations entirely when rendered inside `/allSlides`, or ensure all animated elements reach their final visible state immediately. You can detect the `/allSlides` context by checking `window.location.pathname.endsWith("/allslides")` and skipping animations accordingly.
</animations>

<quality_checks>
After the deck builds and `validate-slides` passes, **read `./references/visual_qa.md` and walk every check before declaring the deck done.** The reference covers `/allslides` rendering, 16:9 bounds, text-scaling integrity, the squint / readability / consistency / flow / brand / density / whitespace / emoji / overflow checks, and the final "looks good" gate.
</quality_checks>

<implementation_checklist>

1. Establish creative direction (palette, fonts, aesthetic, visual system). Write it out before any code.
2. Plan assets -- inventory user-attached files, plan supplemental images.
3. Set up `index.html` (fonts) and `index.css` (CSS variables).
4. Build slides in `src/pages/slides/`. Title slide first to lock in the visual system.
5. Update `src/data/slides-manifest.json` manifest for each slide.
6. Run `pnpm run --filter @workspace/<slug> validate-slides` and fix any issues.
7. **Read `./references/visual_qa.md` and run every check** — walk through your slide JSX file by file, apply the code-level checks, and fix any clipping or scaling issues.
8. Present the artifact.

</implementation_checklist>

<constraints>
These constraints are non-negotiable. Every slide must comply. Content must be statically visible immediately on load -- this is critical for compatibility with screenshot-based export.

**Interactivity:**

- No buttons of any kind (no CTAs, no "Learn more", no "Get started")
- No hover effects, tooltips, or interactive states (except on allowed interactive elements below)
- **Default: no animations.** Do not add animations, transitions, fade-ins, slide-ups, framer-motion, CSS transitions, or keyframe animations unless the user explicitly requests them. See the `<animations>` section for rules when the user does request animations.
- No dynamic behavior (no `onClick`, no `onHover`, no state-driven visibility changes) except for allowed interactive elements below
- No form elements, toggles, or inputs
- No scrolling on any slide -- everything fits entirely within one viewport frame
- No "presentation viewer" chrome or slide-sizing wrapper inside individual slide components -- slides are always full screen (`w-screen h-screen`). The deployment viewer at `/` handles presentation framing externally.

**Allowed interactive elements:**

The following elements are permitted and may include their natural interactive behaviors (hover states, click handlers, tooltips, etc.):

- **Charts and data visualizations** -- Use libraries like Recharts, Chart.js, or D3. Charts may include hover tooltips, legends, and interactive data points. Ensure charts render their data visibly on initial load for screenshot export compatibility.
- **Tables** -- Data tables may include sortable columns, scrollable overflow for large datasets (within the table container only, not the slide itself), and hover-highlighted rows.
- **Links** -- Anchor tags (`<a href="...">`) are allowed for linking to external URLs. Style them to be visually identifiable (underline, distinct color). Use `target="_blank" rel="noopener noreferrer"`.
- **Embedded videos** -- Use `<iframe>` or `<video>` tags for embedding video content (YouTube, Vimeo, or self-hosted). Videos must not autoplay. Provide a visible poster/thumbnail so the slide looks complete in screenshot export.

These elements are exceptions to the general no-interactivity rule. All other interactivity restrictions still apply -- do not use these exceptions as a loophole to add general-purpose buttons, navigation controls, or app-like UI.

**Frame containment:**

- Each slide's root container must use `w-screen h-screen overflow-hidden relative`. These exact classes are required because the `/allSlides` export view uses CSS selector overrides to scale them down. Do not substitute with `w-full h-full`.
- Use viewport-relative units (`vw`/`vh`) for sizing text, spacing, and elements. Avoid hardcoded pixel values for font sizes, positions, or element dimensions.
- **All content must be fully visible within the 16:9 frame.** Nothing can overflow or get clipped by `overflow-hidden`. If you have a list of items, cards, or bullet points that might exceed the vertical space, reduce the number of items, shrink their sizing, or split across two slides. Account for padding, headings, and subtitles when calculating how much vertical space remains for content. A common failure mode is stacking too many cards or list items vertically so the bottom ones get cut off -- always verify the total height of your content fits within `100vh` minus your top and bottom padding.
- **Think before you build.** Before laying out a slide, mentally account for the space your headings, padding, and gaps consume. Then verify the remaining content fits in what's left. If it doesn't, reduce content or split across slides. Card grids, long bullet lists, and multi-column layouts are the most frequent causes of overflow -- when using these patterns, err on the side of fewer items with more breathing room. A heading + subtitle + padding typically consumes 25-30vh, leaving roughly 65-70vh for content. If your cards or list items don't fit in that remaining space, you have too many -- remove items or split across slides. Never add a "just one more" row that pushes content past the bottom edge.
- **Text must fit its container.** If you give a container a fixed height, the text inside must actually fit at the chosen font size. Clipped or truncated text is a bug, not a feature. Reduce content length or font size so everything is visible.
- **Absolute positioning safety.** Elements using `absolute` or `fixed` positioning must stay fully within the viewport. Use `vh`/`vw` values that keep content inside the 100vh/100vw boundary -- never position an element where its content could extend off-screen.

The deeper text-scaling forbidden patterns (`clamp` with px caps, `transform: scale` on text, container queries, etc.) and the `/allslides` final verification loop live in `./references/visual_qa.md` — **read it before finishing the deck.**

**Visual:**

- Never use plain white (`#ffffff`) or plain black (`#000000`) as a slide background -- at minimum use a very subtle off-white, off-black, or gentle gradient
- Never place text directly on a flat solid color with nothing else on the slide
- Never center every slide -- mix asymmetric layouts, left-aligned type, and edge-aligned elements to create visual tension
- No text or elements going off the page -- everything must be visible within the 16:9 frame
- No slides where an entire half is empty whitespace with no purpose
- No low-contrast text (text over full-opacity busy images without an overlay) -- always use semi-transparent overlays, text shadows, or place text on a contrasting region
- Always vary your layouts -- if every slide is "title on top, bullets below," the rhythm dies

**Typography:**

- **Body text target: 2vw+. The 1.5vw rule is the floor, not the goal.** Aim for 2–2.5vw on standard body copy, and scale headlines and hero stats well above that. Captions and footnotes are the only place 1.5vw is acceptable; nothing should ever fall below it.
- **Back-of-the-room test.** Decks are presented on projectors and conference-room TVs. Before finishing a slide, ask: could someone standing at the back of the room read this? If text would shrink to an unreadable size on a projected 16:9 frame, increase it — even if that means cutting copy or splitting the slide. Sizing layout to fit the text is correct; shrinking text to fit the layout is not.
- Max 6 lines of text per slide -- if you have more to say, split it across two slides
- Max 2 fonts (one display + one body)
- Only use common PowerPoint-bundled fonts or popular Google Fonts -- niche or decorative fonts break when exported to PPTX or other platforms. Font selection rules (banned defaults, weight discipline, vary across decks) live in the **Font selection** sub-block of `<typography_system>` — follow them.
- No text walls -- slides are not documents

**Style:**

- No neon colors, purple gradients, or cyan/magenta palettes (unless specifically requested)
- No generic dark mode with glowing elements
- No random visual treatments (every slide uses a different trick)
- No clip art or generic stock illustrations
- No drop shadows on everything
- No overusing AI-generated images (especially as full-slide backgrounds) -- use them sparingly and purposefully
- No more than 2-3 image-background slides per deck
- Default to a single mode for the whole deck. Mixed light/dark is only acceptable when the selected template's reference clearly uses it, an attached brand guide specifies it, or the user explicitly asks for it. When you do commit to mixed mode, make it look intentional (e.g. a dark cover or closing slide paired with light content slides), not random
- **Avoid the AI-slop trope** of rounded-corner containers with a left-border accent color — it's the visual equivalent of "as an AI language model." Use real card treatments (subtle shadow, tinted background, restrained borders) or no container at all.

**Content:**

- **User-supplied copy is canonical — use it verbatim.** If the user gave you exact slide text (in the prompt, an attached doc, the `slideOutlineResponse`, or any other channel), reproduce it word-for-word. Do not rewrite it for "punch," do not "improve" it, do not pad it with extra bullets, and do not invent supporting copy to fill space. Match casing, punctuation, and line breaks. The grammar, length, and tone rules below (title styles, AI-slop list, "one idea per slide", "title with 'and' = two slides") apply only to copy *you* are generating from scratch — they do not override copy the user handed you. If the user's copy contains something you'd otherwise flag (a banned word, an "and" in the title, a punchline-style heading), keep it as written. If you genuinely think a change is needed, ask first; do not edit silently.
- **Speaker notes: off by default, generate when asked.** Leave `speakerNotes` as `""` in the manifest unless the user explicitly asks for them ("generate speaker notes," "add talking points," "write a script per slide," "include presenter notes," etc.). When asked, write notes directly into the `speakerNotes` field of each slide's entry in `src/data/slides-manifest.json` — that is where they live, not inside the slide JSX. Re-read the manifest right before writing in case the workspace updated it, and run `validate-slides` afterward.
- **Speaker notes formatting.** Write speaker notes as short bullets with `-` dashes and `\n` line breaks, not one long paragraph. Use `\n\n` to add a blank-line gap between sections (e.g. between a framing sentence and the bullets) for readability. Example: `"speakerNotes": "Open with the framing question.\n\n- 40% of customers churn within 90 days.\n- Most cite onboarding friction.\n- Segue into the new flow on the next slide."`
- **Never use emoji.** Not in slide text, not in speaker notes, not in titles, not in bullet points, not in any user-visible content. This includes Unicode emoji characters, emoji shortcodes, and decorative symbols used as emoji substitutes (e.g. 🚀 🎯 💡 ✅ 📊 🔥 and similar are all banned). Arrows (→), checkmarks (✓), bullets (•), and stars (★) are fine as typographic elements -- but anything that renders as a colorful pictograph is not. Emoji makes slides look unserious and unprofessional. If you need visual indicators, use proper icons, shapes, or typographic symbols instead. This rule has zero exceptions -- even for "fun" or "casual" decks.
- **Avoid AI-slop language.** Strike on sight in titles, headlines, subtitles, captions, and speaker notes — these are the SaaS-deck vocabulary that signal an LLM wrote the copy:
  - Words: "magic", "delight", "seamless", "unlock", "rethink/rethinking", "game-changer", "supercharge", "leverage", "empower"
  - Heavy-handed imperatives ("You must…", "Never forget…")
  - Three-word punchy conclusions that don't actually conclude anything
  - Takeaway boxes, "pro tip:" banners, tip-callout containers
  - Dramatic tension-building with no payoff
  - Replace each hit with a concrete, specific claim — or cut the line entirely.
- **One idea per slide.** If a title contains "and," it's almost always two slides — split it.
- No decks shorter than 3 slides unless the user explicitly asks for a short deck

**Visual editing compatibility:**

- No `.map()`, `.forEach()`, or any loop to generate slide content -- write every element by hand in JSX
- No extracting content into arrays or variables that are then mapped into JSX -- inline everything
- No `<br/>` tags or similar line-break elements in JSX text -- use proper Tailwind spacing utilities (`mt-[2vh]`, `gap-[1vh]`, `leading-relaxed`, etc.) instead
- Prefer Tailwind utility classes over custom `<style>` tags or inline `style` objects. Only reach for custom CSS when Tailwind genuinely can't express what you need.
- Use Tailwind theme tokens (`text-primary`, `bg-accent`, `font-display`, `font-body`) from `index.css` instead of inline `style={{ }}` objects. Only reach for inline styles when Tailwind genuinely can't express what you need.
- Every visible element must correspond to a unique, static location in the JSX source

**Technical:**

- Slide components go in `src/pages/slides/`
- Use viewport-relative units (`vw`/`vh`) for everything
- Add `crossOrigin="anonymous"` to all `<img>` tags
- Use `<img>` tags over CSS backgrounds
- Do NOT use `attached_assets/` as a URL path -- always use the `@assets/...` import syntax
- **Prefix only `public/` image paths with `import.meta.env.BASE_URL`** -- never hardcode paths like `/image.png`, and do not prepend `BASE_URL` to `@assets/...` imports.
- When generating images with the `media-generation` skill, always use `removeBackground: true` for images overlaid on colored backgrounds, and include "no text, no words, no letters" in the prompt

</constraints>