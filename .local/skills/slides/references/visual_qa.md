<visual_qa>
Final read-through before you tell the user the deck is done. The export view (`/allslides`) and the deployed viewer (`/`) render slides into a fixed 1920x1080 16:9 frame, so the deck must look correct at that size — not at whatever your dev preview happens to be. These are code-level checks done by reading slide JSX; screenshotting is optional.

## /allSlides invariants

`/allslides` is the static export view used for thumbnails, PDF, and PPTX. Every slide is rendered into a fixed `1920x1080` box. If a slide overflows there, it overflows on export.

Checks:

- **Root container classes are exact.** Every slide root must use `w-screen h-screen overflow-hidden relative`. The `[&_.h-screen]:!h-full [&_.w-screen]:!w-full` overrides only fire when those classes are present — `w-full h-full`, `min-h-screen`, or any other variant breaks the export scale-down.
- **No `.slide` class on the slide component's root.** The scaffold's `/allslides` page wraps each component in a `<div class="slide ...">`, and pid2's thumbnail selector is `.slide`. Putting `.slide` on the component root too makes the selector match 2× the elements (wrapper + root per slide), which mis-pairs thumbnails with manifest ids. If you need a CSS hook on the slide root, name it something specific like `.deck-slide` or `.slide-body` — don't reuse the bare `.slide` name. If the class isn't needed for any CSS rule, just don't add it.
- **Ensure no `.slide` class anywhere inside the slide component.** The same 1:1 manifest-to-`.slide` mapping breaks if a nested element (not just the root) carries the bare `.slide` class — `/allslides` already contributes one `.slide` wrapper per slide, so any extra match anywhere in the subtree double-counts. Use a specific name (`.deck-slide`, `.slide-body`, etc.) for any internal CSS hook.
- **No hidden overflow assumptions.** Card grids, multi-column layouts, and bullet lists are the most common offenders. Read the JSX and mentally tally stacked height — the dev preview may be larger than 1080px tall and hide clipping that `/allslides` will reveal.

## 16:9 aspect ratio bounds

Every visible element must live inside `100vw x 100vh` (1920x1080).

**Padding budget:** a heading + subtitle + 5–8vh edge padding consumes ~25–30vh. That leaves ~65–70vh for content. If your card grid or list items don't fit, you have too many — remove items or split the slide. Never add a "just one more" row that pushes content past the bottom edge.

**Bounds checklist:**

- No `position: absolute` element extends past `100vh` or `100vw`. If you use `top`/`left`/`right`/`bottom`, verify the element + its content still fits within the viewport.
- No negative margins that bleed off-screen ("for visual effect").
- No fixed-width or fixed-height containers in `px` that exceed 1920/1080.
- No `min-height: 100vh` or `min-width: 100vw` on inner containers — they push the layout past the frame.
- Mentally sum the stacked height of every direct child of the slide root. It must be ≤ 100vh including all padding and gaps.

## Text scaling integrity

Text uses viewport-relative units (`vw`/`vh`) so it scales with the slide, never gets shrunk by the viewer iframe or the export pipeline.

**Common pitfalls.** These break text scaling. A few have legitimate uses outside text sizing — use judgment.

- **Hardcoded `px` / `pt` / `rem` for body and headline text.** Use `vw` so text scales with the slide. Pixel values are fine for things like 1px borders, small fixed icon sizes, or other non-text decorative dimensions where consistent visual weight matters.
- **`clamp(...)` with `px` caps on text** (e.g. `clamp(16px, 2vw, 24px)`). On the 1920x1080 export, the px ceiling collapses the text below the viewport-relative size you intended. Prefer pure `vw` for text on slides — the viewer already handles fitting the deck to the user's screen.
- **`transform: scale(...)` on a slide root or on a text container.** The viewer applies its own transform to fit 1920x1080 to the user's screen; stacking another scale on top compounds it. Decorative `scale` on a non-text element (logo, illustration, icon) is fine.
- **`overflow: scroll` to "hide" text that overflows the slide frame.** Slides don't scroll. If body text overflows, fix the content. Internal scroll on table/chart containers (per the `<constraints>` allowed-interactive list) is fine — the rule is no scroll on the *slide* itself.
- **`text-overflow: ellipsis` to truncate slide copy.** Truncated headlines or bullets are a bug, not a feature. Either shorten the text or split the slide. (Ellipsis on data-table cells with bounded width is OK.)
- **`zoom: ...` on slide content.** Same compounding issue as `transform: scale`, and it doesn't translate to the PPTX export pipeline.
- **CSS container queries (`cqw`/`cqh`) for text sizing.** The export pipeline doesn't always establish a containment context, so the unit can silently fall back to `0`. Stick to `vw`/`vh` for text.

**Floor:** at the 1920x1080 export size, standard body text must render at `2vw+` (aim for `2-2.5vw`). `1.5vw` is the absolute floor for captions, footnotes, attributions, and other detail text only; nothing on the slide may render below `1.5vw`. Read the smallest `vw` value across all slides — if any body text is below `2vw`, or any text at all is below `1.5vw`, raise it.

**Long-string trap:** an unbroken word (URL, hash, ID) at large `vw` sizes will overflow horizontally. Break with `overflow-wrap: anywhere` or shorten the string — do not let it punch through the 1920px width.

## Final checks

Walk every slide JSX file and apply the checks below. Fix anything that fails.

### Squint test

Imagine squinting at each slide. Can you still see the visual hierarchy? If everything blurs into the same level of importance, the hierarchy is too flat. One element should clearly dominate per slide.

### Readability test

Is all body text at least `2vw`, with only captions, footnotes, attributions, or detail text allowed down to `1.5vw`? Could someone in the back row of a conference room read every word? If any body text falls below `2vw`, or anything at all falls below `1.5vw`, raise it.

### Consistency test

Do slides with similar content use similar layouts and styling? Does the color palette hold across every slide? Does the typography system stay consistent? If the deck looks like five different templates, pick one direction and unify.

### Flow test

Read the slide manifest and walk through positions 1 → N. Does it tell a clear story? Do section dividers appear where they should? Does the closing slide feel like a proper ending?

### Brand test

For real-company decks: would the company recognize this as "theirs"? Are colors, fonts, and tone aligned with the brand you extracted via `extractBranding` / `webFetch`?

### Content density test

Does any slide have more than 6 lines of text or feel like a document page? Split it.

### Whitespace test

Does any slide have an entire half that's empty for no reason? Does any slide feel crammed? Balance is the goal — purposeful negative space, not accidental dead zones.

### Image opportunity test

Would a searched or generated image make any slide clearer, more memorable, or more visually balanced? If yes, prefer adding and integrating it into the slide layout. Do not force decorative images that don't improve the slide.

### Emoji audit

Grep every slide file for emoji characters. If any emoji appears anywhere in the deck — titles, bullets, labels, descriptions — remove it. A single emoji fails the entire deck. Arrows (→), checkmarks (✓), bullets (•), and stars (★) are fine as typographic elements; colorful pictographs are not.

### Overflow test

For each slide, mentally sum the stacked height of all direct children (including padding, gaps, headings, and subtitles). It must be ≤ 100vh. Card grids, long bullet lists, and multi-column layouts are the most frequent offenders — if total height exceeds the budget, reduce items, shrink sizing, or split the slide.

### Platform contract sanity check

Before telling the user the deck is ready, verify `src/App.tsx` still matches the platform contract. If any of the following are true, the export pipeline will silently time out with `NO_SLIDES_FOUND` after 60 seconds even if the preview looks fine:

- `AllSlides` has been renamed, removed, or replaced with a custom component (e.g. one that fetches `/api/pdf/*`, adds a "Download PDF" button, or uses A4 / portrait dimensions).
- The `.slide` class on the `AllSlides` wrapper has been renamed (to `.print-slide`, `.page`, `.deck-slide`, etc.) or removed entirely.
- `.slide` wrapper dimensions are not `1920×1080`.
- The router was swapped from `wouter` to `react-router-dom` or anything else.
- Either `DO NOT edit` useEffect in `App` has been modified or removed.

#### Remediation

If `App.tsx` (or its siblings) was hand-edited away from the contract, repair it in place rather than working around the breakage. Map each symptom to its fix:

- **`AllSlides` renamed, removed, or replaced** with a custom export / "Download PDF" / print-only component → restore `AllSlides` to the scaffold shape: a `bg-black` outer wrapper, then for each slide a `<div key={slide.id} className="slide relative aspect-video overflow-hidden" style={{ width: "1920px", height: "1080px" }}>` containing an inner `<div className="h-full w-full [&_.h-screen]:!h-full [&_.w-screen]:!w-full">` around `<slide.Component />`. The inner wrapper is required — slide components root themselves in `w-screen h-screen overflow-hidden relative`, and without the `[&_.h-screen]:!h-full [&_.w-screen]:!w-full` overrides the slide will render at viewport size instead of the fixed 1920×1080 export box. Delete any custom `/api/pdf/*` fetch, download button, or print-layout UI that replaced it.
- **`.slide` class renamed** (`.print-slide`, `.page`, `.deck-slide`, etc.) → rename it back to bare `.slide`. The class name is the contract; the workspace selects on it directly.
- **Wrapper dimensions changed** away from 1920×1080 (A4, portrait, custom px values) → set them back to `width: "1920px", height: "1080px"`.
- **Router swapped** from `wouter` → restore `import { useLocation } from "wouter"` in `App.tsx` and the `wouter` `<Router>` setup in `src/main.tsx`. The parent frame's `navigateToSlide` postMessage relies on wouter's `useLocation` shape.
- **Either `DO NOT edit` `useEffect` removed or modified** in `App` → restore both:
  - (a) The unknown-route redirect: for any path that isn't `/`, `/allslides`, or a valid `/slideN`, call `navigate(\`/slide${slides[0].position}\`, { replace: true })` — but only when `slides.length > 0`. The empty-manifest guard is required;`SlidesManifestSchema` accepts an empty array, and a literal `slides[0].position` access without it will throw on first load.
  - (b) The `message` listener: when it receives `{ type: "navigateToSlide", position }` and `slides.some((s) => s.position === event.data.position)`, call `navigate(\`/slide${event.data.position}\`)`.
- **`src/slideLoader.ts` rewritten** (lazy-loaded, dynamic-imported, fetched at runtime) → restore the original module-level slide-loading pattern so `slides` is populated synchronously on import.

After repairing, re-run `pnpm run --filter @workspace/<slug> validate-slides` and walk the rest of this checklist again.

If the user genuinely wants a custom export, download, or print/PDF UI, do not patch it into this artifact — create a new `react-vite` (web) artifact for that flow (see the `artifacts` skill). The slides artifact's `/allslides` route is reserved for the workspace export pipeline.

### Done criteria

Only after all checks above pass do you tell the user the deck is ready.
</visual_qa>
