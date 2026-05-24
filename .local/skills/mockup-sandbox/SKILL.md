---
name: mockup-sandbox
description: "Use when the user wants to create, preview, or iterate on any web UI content on the canvas. This is the only way to show live rendered components on the board — all other canvas shapes are static. Activate for: designing or prototyping components on the canvas, comparing design variants side-by-side, showing responsive previews (mobile/tablet/desktop), previewing component states (loading/error/empty), comparing dark vs light mode, or any request that involves putting rendered web content on the board. Sets up a vite dev server with isolated component preview URLs for iframe embedding. For variant exploration (2+ design alternatives), includes subagent orchestration patterns for parallelizing work with DESIGN subagents. Never embed the main app URL directly — always use this skill. Read the entire skill carefully — it contains critical path conventions, image handling rules, and subagent delegation patterns that cause silent failures when skipped. For two specific workflows, also activate the companion skill: use mockup-extract when the user wants to pull an existing component from the main app onto the canvas, and mockup-graduate when the user approves a mockup and wants it integrated into the main app."
---
# Mockup Sandbox Skill

The **`artifacts/mockup-sandbox/`** folder is an isolated frontend sandbox for rapid UI prototyping. Components are rendered in isolation via a vite dev server, and each component gets a `/preview/ComponentName` route that can be embedded as an iframe shape on the workspace canvas.

## When to Use

Activate this skill when the user wants to:

- Show any web UI component on the canvas ("create a card on the canvas", "put a form on the board")
- Prototype or mockup a design ("design a landing page", "mockup a dashboard")
- Compare design variants side-by-side ("show me 3 options for the hero section")
- Preview responsive behavior ("how does this look on mobile?", "show me mobile and desktop")
- Preview component states ("show me loading, error, and empty states")
- Compare themes ("dark mode vs light mode", "what about a warmer color scheme?")
- Show a multi-page flow, **only when the user explicitly requests multiple pages** ("preview the signup flow: landing → signup → dashboard")
- Iterate on an existing component's design on the canvas (also activates mockup-extract)

**Rule of thumb:** if the result should be rendered HTML/CSS/React on the canvas, use this skill. If it's just shapes, text, or diagrams, the canvas skill handles it directly.

## Extract First, Then Iterate

**When the user wants to redesign, improve, or create variants of something that already exists in their app, always start by extracting the real component code** using {{skill("mockup-extract")}}. Never rebuild an existing component from scratch by hand-coding approximations — you will get dimensions, colors, spacing, icon sizes, opacity values, and other details wrong. The real source code has the exact values; use them.

The correct workflow for redesigning existing UI:

1. **Extract** the real component into the mockup sandbox (preserves exact values)
2. **Label it "Current"** on the canvas as the baseline
3. **Duplicate and modify** to create design variants

The incorrect workflow (do not do this):

1. ~~Look at the app and hand-code a simplified version from memory~~
2. ~~Guess at dimensions, colors, spacing, and other values~~
3. ~~Iterate on an inaccurate approximation~~

This applies whenever the component being redesigned already exists as code in the main app — even if the user doesn't explicitly say "extract". If they say "redesign my sidebar", "improve the onboarding flow", or "show me alternatives for the settings page", the code already exists and must be extracted, not approximated.

## Gathering Requirements

If the user's request is vague (e.g., "make some variants", "create a mockup"), ask them to clarify **what specific component or page** they want to prototype. Examples: "a pricing card", "a login form", "a dashboard header", "a product listing".

Once you know what to build, you can proceed and make reasonable decisions about layout, colors, and content.

## How It Works

1. A vite dev server runs in a `artifacts/mockup-sandbox/` folder, separate from the main app
2. A custom Vite plugin (`mockupPreviewPlugin`) uses `fast-glob` and file watching to discover components in `artifacts/mockup-sandbox/src/components/mockups/`
3. The plugin writes a generated component registry at `src/.generated/mockup-components.ts`
4. Each component is served at `/preview/{folder}/{ComponentName}` as a standalone page
5. If a relevant preview request returns 404 before file watching settles, the dev server rescans automatically and the next iframe retry picks up the update
6. Components use Tailwind and shadcn/ui -- changes hot-reload instantly

## Setup

### Step 1: Set up the mockup sandbox

Create the mockup sandbox using `createArtifact` (see {{skill("artifacts")}} for full details):

```javascript
const result = await createArtifact({
    artifactType: "mockup-sandbox",
    slug: "mockup-sandbox",
    previewPath: "/__mockup/",
    title: "Mockup Sandbox"
});
```

Then start its dev server **before** creating any components or placing iframes on the canvas:

```javascript
await restartWorkflow({ workflowName: "artifacts/mockup-sandbox: Component Preview Server" });
```

The dev server must be running first so that component files are picked up by the Vite plugin and preview URLs resolve correctly. Preview URLs use path-based routing: `https://${REPLIT_DOMAINS}/__mockup/preview/{folder}/{ComponentName}` — no port number needed.

### Step 2: Create mockup components

**Verify the component directory first.** Before creating any files, list `artifacts/mockup-sandbox/` to confirm that `src/components/mockups/` exists. Use the verified path for all component creation and subagent delegation.

Create components in `artifacts/mockup-sandbox/src/components/mockups/`:

```tsx
// artifacts/mockup-sandbox/src/components/mockups/pricing-cards/Minimal.tsx
export function Minimal() {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-2xl font-bold text-foreground">Basic Plan - $9/mo</h1>
    </div>
  );
}
```

### Step 3: Embed on the canvas

Create `iframe` shapes on the workspace canvas.
Preview URLs follow the pattern `https://${REPLIT_DOMAINS}/__mockup/preview/{folder}/{ComponentName}` — no port number.

Example -- a pricing card is a "Card / Panel", so use a snug iframe (see [Iframe Sizing Guide](#iframe-sizing-guide)):

```json
{
  "type": "create",
  "shapeId": "pricing-minimal",
  "shape": {
    "type": "iframe",
    "x": 100, "y": 100, "w": 500, "h": 450,
    "url": "https://<your-domain>.replit.dev/__mockup/preview/pricing-cards/Minimal",
    "componentPath": "artifacts/mockup-sandbox/src/components/mockups/pricing-cards/Minimal.tsx",
    "componentName": "Minimal Pricing Card"
  }
}
```
### Step 4: Layout and focus

Before embedding iframes, call `getCanvasState()` to see what already exists on the board and find empty space. Then place your iframes in an unoccupied region.

If an iframe is created while the workflow is still booting, rely on the canvas host's iframe retry behavior plus the dev server's automatic 404 rescan to recover. Do not ask the user to refresh the whole board.

**Variant grid layout.** Arrange multiple variants in a horizontal row. Place them at approximate positions, then clean up the layout with `align` + `distribute` in the same `applyCanvasActions` batch -- do not hand-compute 50px gutters across 3+ iframes. See the canvas skill's "Align and Distribute Shapes" section for recipes. Do not add text labels above iframes -- the iframe title bar already shows the `componentName`. Use descriptive `componentName` values instead (e.g. "Minimal Pricing Card", "Bold Pricing Card").

**Multi-viewport layouts.** When showing the same component at different screen sizes, place them in a row using the viewport presets (Mobile: 390x844, Tablet: 768x1024, Desktop: 1280x720). Use `align` (top) + `distribute` (horizontal) in the same batch to line them up instead of hand-computing 50px gutters.

**Empty-canvas exception.** If `getCanvasState` shows the canvas is empty — `focusedShapes`, `blurryShapes`, **and** `peripheralClusters` all empty (the `summary` count alone misses off-screen content) — follow the placement with one `focusCanvasShapes` call on the placeholder IDs in the same execution. Otherwise default rule (`presentArtifact` only). For 3+ placeholders, layer on `align`/`distribute` per the "Variant grid layout" paragraph above; for 1-2 placeholders skip them — `align` requires 2+ shapes and `distribute` requires 3+, so an unconditional batch fails before any placeholder is shown.

```javascript
const ids = ["coffee-artisan", "coffee-modern", "coffee-warm"];
await applyCanvasActions({ actions: ids.map((id, i) => ({
  type: "create",
  shapeId: id,
  shape: { type: "iframe", x: i * 1380, y: 0, w: 1280, h: 900,
           state: "building", componentName: `Variant ${i + 1}` },
})) });
await focusCanvasShapes({ shapeIds: ids, animateMs: 500 });
```

**Clean up the layout before presenting.** Before the final `presentArtifact` call (Step 5), align and distribute any row or column of 3+ iframes you placed. This produces a pixel-perfect layout that hand-computed coordinates usually miss by a few units, and it's what the user first sees when they focus on your work. For a 2-shape pair (e.g. before/after), align the shared edge but set the gap on create -- `distribute` rejects 2 shapes.

**Do not call `suggestDeploy()`.** The mockup sandbox is a local prototyping tool and is not meant to be deployed — if the user asks to publish or deploy canvas/mockup content, integrate/graduate it into a real app artifact first.

**Never share dev domain URLs in chat.** Dev URLs (`*.replit.dev`, `$REPLIT_DEV_DOMAIN`) are internal — use them only in tool calls (iframe shapes, subagent tasks), never in user-facing messages.

# Step 5: Verification and Presentation

**Check system logs.** Always check the system logs to ensure no iframe previews are broken, since broken iframes cause an error overlay across the canvas. If you see iframe-related errors, fix them before proceeding and restart the workflow.

**CRITICAL — Always present after canvas work.** After all mockups are embedded, you MUST call `presentArtifact` with the shape IDs. This is how the user navigates to your work — without it, they cannot find the shapes you placed. Never skip this step. Never ask the user if they want to see the shapes — just present.

```javascript
// ALWAYS call this after creating or updating canvas shapes.
await presentArtifact({ artifactId, shapeIds: ["shape-id-1", "shape-id-2"] });
```

## Architecture

```text
artifacts/mockup-sandbox/                              # Isolated from main app
├── package.json                      # Dependencies (React, Tailwind, shadcn/ui, cartographer)
├── vite.config.ts                    # Vite config
├── mockupPreviewPlugin.ts            # Vite plugin for component discovery + automatic 404 rescan
├── tsconfig.json                     # TypeScript config for tsgo type checking
├── components.json                   # shadcn/ui config
├── .npmrc
├── index.html
└── src/
    ├── main.tsx                      # Entry point
    ├── App.tsx                       # Landing page
    ├── index.css                     # Tailwind v4 styles
    ├── .generated/
    │   └── mockup-components.ts      # Auto-generated component registry
    ├── components/
    │   ├── ui/                       # 50+ shadcn/ui components (pre-installed)
    │   └── mockups/                  # YOUR MOCKUP COMPONENTS GO HERE
    ├── lib/
    │   └── utils.ts
    └── hooks/
```

## Folder Structure

The folder structure in `mockups/` automatically organizes components:

```text
components/mockups/
├── pricing-cards/           # Single-component variants
│   ├── _group.css           # Group-level tokens + fonts (optional)
│   ├── Minimal.tsx          # imports './_group.css'
│   ├── Bold.tsx             # imports './_group.css'
│   └── Gradient.tsx         # imports './_group.css'
├── crm-dashboard/           # Multi-page project (only when user explicitly requests multiple pages)
│   ├── _shared/             # Shared layout (not preview targets)
│   │   ├── AppLayout.tsx
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   ├── _group.css
│   ├── Dashboard.tsx
│   ├── UserList.tsx
│   └── Settings.tsx
├── login-forms/
│   ├── Simple.tsx
│   └── Dark.tsx
└── QuickIdea.tsx            # Ungrouped (loose files)
```

Files prefixed with `_` are not preview targets by convention. `_shared/` holds helper components imported by sibling page files. `_group.css` holds group-level CSS overrides — tokens, font `@import`s, `@font-face` blocks — that every component in the group explicitly imports (see [Fonts](#fonts)).

## Working with Assets

### Icons

`lucide-react` is pre-installed with 1000+ icons:

```tsx
import { ShoppingCart, Star, ArrowRight } from "lucide-react";

<ShoppingCart className="w-6 h-6 text-gray-600" />
```

### Images

Two approaches -- **do not mix them**:

#### Option 1: Public folder (URL reference)

Place images in `artifacts/mockup-sandbox/public/images/` and reference by URL path:

```tsx
<img src="/__mockup/images/hero.png" alt="Hero" />
```

#### Option 2: Import via `@/assets/` (bundled by Vite)

Place images in `artifacts/mockup-sandbox/src/assets/` and import them:

```tsx
import heroImg from "@/assets/hero.png";

<img src={heroImg} alt="Hero" />
```

The `@` alias maps to `artifacts/mockup-sandbox/src/`, so `@/assets/hero.png` resolves to `artifacts/mockup-sandbox/src/assets/hero.png`.

**Important — pick one approach per image and do not cross them:**

- Files in `src/assets/` **must** be imported (`import img from "@/assets/hero.png"`). Referencing them by URL path (`<img src="/src/assets/hero.png" />`) will 404 — Vite does not serve `src/` files as static assets.
- Files in `public/images/` are served as-is at `/__mockup/images/…`. Do not import them.

For mockups, **prefer Option 1 (public folder)** — it is simpler and avoids the most common mistake.

To generate images for mockups, use the `media-generation` skill:

```javascript
await generateImage({
    images: [{
        prompt: "Modern product photo of wireless headphones",
        outputPath: "artifacts/mockup-sandbox/public/images/headphones.png",
        aspectRatio: "1:1"
    }]
});
```

Then reference: `<img src="/__mockup/images/headphones.png" />`.

**Path warning:** The `outputPath` must start with `artifacts/mockup-sandbox/public/` -- NOT just `public/`. The main app's public folder is not served by the mockup dev server. Using `outputPath: "public/images/hero.png"` (without the `artifacts/mockup-sandbox/` prefix) will 404 in mockup iframes.

### Fonts

**Bundled fonts.** `index.html` preloads 25+ Google Font families. Use them directly in any component:

```tsx
<h1 className="font-['Playfair_Display']">Heading</h1>
```

**Custom fonts.** For fonts outside the bundled set, add a non-blocking `<link>` tag to `artifacts/mockup-sandbox/index.html`. Do not use CSS `@import url(...)` — it is render-blocking and will delay all Tailwind styles until the font finishes downloading.

```html
<!-- in artifacts/mockup-sandbox/index.html <head> -->
<link rel="stylesheet" media="print" onload="this.media='all'"
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&display=swap">
```

Then use it in components:

```tsx
<h1 className="font-['Cormorant_Garamond'] text-6xl">Heading</h1>
```

Or override the default font via a CSS variable in a component's own CSS file:

```css
/* editorial-hero/tokens.css */
:root { --font-serif: 'Cormorant Garamond', serif; }
```

Missing fonts fail silently — no console error, no build failure, just a fallback font with the wrong weight and width. Verify typography visually.

## Adding Packages

The `packager_install_tool` only works for the main project. To add packages to the mockup sandbox:

1. Edit `artifacts/mockup-sandbox/package.json` directly and add the dependency
2. Run `npm install` from the `artifacts/mockup-sandbox/` directory
3. Restart the "artifacts/mockup-sandbox: Component Preview Server" workflow to pick up the change

## shadcn/ui Components

All shadcn/ui components are pre-installed and ready to use:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
```

**Available components:** accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, hover-card, input, input-group, input-otp, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip

## Component Best Practices

- **One preview entry point per file** -- each file should export one top-level component that the preview route resolves as the preview target. But define as many local helper components inside the file as you need -- a `Dashboard.tsx` with internal `StatsCard`, `ActivityFeed`, and `QuickActions` components all composed into one exported `Dashboard` function is ideal. This keeps mockups self-contained and readable without file sprawl.
- **Match the CSS wrapper to the content type** -- see the [Iframe Sizing Guide](#iframe-sizing-guide) for how to pair component CSS with iframe dimensions.
- **Use design tokens for the baseline** -- When recreating the app's existing look or building the "Current" version, use semantic color classes like `bg-background`, `text-foreground`, `text-muted-foreground` so the mockup matches the main app's theme. When creating design variations, use whatever colors express the variant's visual direction -- hardcoded colors like `bg-indigo-950`, `text-amber-200` are expected and necessary. That's the whole point of exploring alternatives.
- **Use realistic data** -- show how the component looks with real content, not lorem ipsum.
- **Name clearly** -- use descriptive names that communicate the variant's design hypothesis (e.g., `ComparisonTable.tsx`, `ProgressiveDisclosure.tsx`, `FeatureLed.tsx`). For simple aesthetic variants, names like `Minimal.tsx` or `DashboardDark.tsx` are fine.
- **Include states** -- create separate mockup files for loading, empty, and error states.

## Design Variation Guidelines

When the user asks for variations, alternatives, "show me options," or any request that implies divergent exploration (e.g., "try 3 different approaches," "what else could this be?"), read {{skill("design-exploration")}} first. It provides a structured comprehension → brief → delegation workflow that produces meaningfully diverse output instead of superficial reskins.

When asked to generate variations, your first task is to **understand the design before changing it**.

### Step 1: Analyze the component

Read the source code and determine:

- **Purpose:** What user need does this component serve? What task does it support?
- **Constraints:** What must stay fixed? (data shape, required actions, accessibility, brand)
- **Degrees of freedom:** What could meaningfully change without breaking the component's purpose?

### Step 2: Select variation axes based on the analysis

Choose 2-3 axes that would give the user the most insight into their solution space. Axes ordered from most impactful to least:

1. **Structural:** Different layouts, information hierarchies, component compositions (e.g., pricing as cards vs. comparison table vs. progressive disclosure)
2. **Content strategy:** What's foregrounded vs. backgrounded, information density, copy approach (e.g., feature-led vs. social-proof-led vs. price-led)
3. **Interaction model:** Different interaction patterns, progressive disclosure, state handling (e.g., modal vs. inline expansion vs. dedicated page)
4. **Conceptual:** The underlying metaphor or mental model (e.g., dashboard-as-cockpit vs. dashboard-as-feed vs. dashboard-as-scorecard)
5. **Visual treatment:** Typography, color, spacing, depth, mood (e.g., minimal vs. bold vs. editorial)

Default to higher-impact axes unless the user specifically requests aesthetic exploration (e.g., "try different color schemes" or "explore visual styles"). For visually-driven or structurally simple components (cards, heroes, buttons), aesthetic variation is a strong first-round choice alongside structural variation.

### Step 3: Generate variations as distinct design hypotheses

Each variation should represent a meaningfully different answer to the question "how should this component work?" Variations should be diverse enough that the user can identify emerging preferences and narrow their direction.

### Process notes

- Functionality and data shape should stay consistent across variants (same API contract)
- Layout, hierarchy, content emphasis, and visual treatment ARE all fair game
- Name variants descriptively by their design hypothesis (e.g., `ComparisonTable.tsx`, `ProgressiveDisclosure.tsx`) not just their aesthetic (e.g., `Bold.tsx`)
- Create each variant as an independent component

## Subagent Orchestration

For design variation tasks (2+ alternatives of the same component or page), use DESIGN subagents to parallelize work. The parent agent orchestrates setup, building placeholders, and canvas layout; subagents handle individual variant creation and mark iframes live when done. Multi-page fan-out (building separate pages in parallel) should only be used when the user explicitly requests multiple pages.

### Building placeholders

Every mockup request -- whether handled directly or via subagents -- should show immediate visual feedback on the canvas using the iframe `state` field. When creating a new iframe for a component that doesn't exist yet, set `state: "building"`. The canvas renders a native building indicator -- no URL is needed at this point.

**Flow for new components (0 → 1):**

1. Read the canvas state to find empty space
2. Immediately place iframe(s) with `state: "building"` and `componentName` at the expected sizes
   - **Empty-canvas only:** if the canvas was empty before this batch, follow the placement with a `focusCanvasShapes` on the new placeholder IDs in the same execution. See [Step 4 → Empty-canvas exception](#step-4-layout-and-focus) for the precise emptiness check.
3. Proceed with component development.
   - For direct builds, set the iframe `state: "live"` once the component is ready, then screenshot the component to confirm it renders.
   - For subagent builds, ask the subagent to set the iframe `state: "live"` AND verify with a screenshot before reporting — broken iframes are invisible to the user until someone checks. The subagent's prompt has the screenshot tool mechanics; the parent only needs to include a verification instruction in the task (e.g. "Screenshot the preview to verify it renders before reporting").
4. Check the system logs for iframe-related issues, fix any problems, and restart the workflow once all components are created.

**Flow for modifying existing components:**

1. Set `state: "modifying"` on the iframe before editing
2. Edit the component file in place
3. Set `state: "live"` on the iframe when done

**Building iframe example:**

```json
{
  "type": "create",
  "shapeId": "pricing-bold",
  "shape": {
    "type": "iframe",
    "x": 600, "y": 100, "w": 500, "h": 450,
    "state": "building",
    "componentName": "Bold Pricing Card"
  }
}
```

Then once the component is built, set the URL and mark it live:

```json
{
  "type": "update",
  "shapeId": "pricing-bold",
  "updates": {
    "url": "https://<dev-url>/__mockup/preview/pricing-cards/Bold",
    "componentPath": "artifacts/mockup-sandbox/src/components/mockups/pricing-cards/Bold.tsx",
    "state": "live"
  }
}
```

### When to use subagents

Use subagents when the task involves **2+ design variants** of the same component or page. Also use a single DESIGN subagent for any single-page app or full-page mockup (landing pages, homepages, portfolios, etc.) — the DESIGN subagent produces higher-quality visual output, unless the user asks you to handle it yourself. For a single small component (card, button, form) or a modification to an existing mockup, do the work directly.

**Do not create multiple pages unless the user explicitly asks.** When the user says "design a dashboard" or "build a CRM", build it as a single page — do not proactively split it into Dashboard, UserList, Settings, etc. Only fan out into multiple page files when the user specifically requests separate pages (e.g., "design a CRM with dashboard, users, and settings pages").

**Single-page apps are single components.** When the user asks for a landing page, homepage, or any single-page app, create it as **one component file** — do not split sections (hero, features, pricing, footer, etc.) into separate component files or separate screens. A landing page is one scrollable page rendered in one iframe, unless the user explicitly asks for separate screens or sections as independent components. For landing pages and similar content-rich pages, prioritize generating images (hero visuals, product shots, background art, illustrations) — placeholder boxes and generic stock imagery make landing pages look unfinished. Use `generateImage` to create custom visuals that match the page's mood and brand direction.

**Which specialization?** Use **DESIGN** subagents (`specialization: "DESIGN"`) for all mockup creation work. DESIGN subagents are tuned for creative visual output — they produce better, more diverse designs when given a brief mood/direction rather than prescriptive specs. Do not use GENERAL subagents for mockup component creation; they lack the design sensibility and carry unnecessary overhead (task lists, context management).

**For extract and graduate workflows, use GENERAL subagents** if parallelization is needed. These are engineering tasks (import graph tracing, production code transformation) — DESIGN subagents lack the codebase navigation skills they require. See the companion skills for details.

| Scenario | Subagents? | Specialization | Pattern |
| --- | --- | --- | --- |
| "Design a pricing card" | No | — | Direct |
| "Design a landing page" | Yes (1) | DESIGN | Single DESIGN subagent (one file) |
| "Design a single-page app" | Yes (1) | DESIGN | Single DESIGN subagent (one file) |
| "Make the header bigger" | No | — | In-place modification |
| "Extract my existing component" | If parallelizing | GENERAL | Direct or fan-out (mockup-extract) |
| "Graduate / apply this mockup to my app" | If parallelizing | GENERAL | Direct or fan-out (mockup-graduate) |
| "Redesign my navbar with 2 options" | Yes | DESIGN | Variants fan-out |
| "Show me 3 options for the hero" | Yes | DESIGN | Variants fan-out |

### Pattern: Direct (no subagent)

Use for single small components (cards, buttons, forms) or modifications to existing mockups. For single full-page mockups (landing pages, homepages, single-page apps), delegate to a single DESIGN subagent instead — unless the user asks otherwise. Follow the standard setup steps (Steps 3-6), with building placeholders for instant feedback.

```text
Parent: Place iframe(s) with state: "building" on canvas
    → Create component file
    → Restart workflow
    → Update iframe with URL + state: "live"
    → presentArtifact with shapeIds
```

For modifications to existing mockups, set `state: "modifying"` on the iframe, edit the file in place, then set `state: "live"` when done. **Do not** create a new file for modifications. If the user wants to preserve the old version for comparison, *then* duplicate the file into a new variant first.

### Pattern A: Design variants (fan-out)

Use when the user wants multiple visual options for the same component or page.

```text
Parent: Place iframes with state: "building" on canvas (one per variant, in a row)
Parent: Establish requirements, seed each variant direction
    ├──→ DESIGN subagent: "Minimal" variant
    ├──→ DESIGN subagent: "Bold" variant
    └──→ DESIGN subagent: "Gradient" variant
Parent: Check system logs, fix issues and restart workflow once all subagents complete
```

**Parent responsibilities:**

1. Run the design-exploration comprehension steps (analyze component, identify constraints, select variation axes) and compose a structured design brief
2. Create the folder (e.g., `mockups/pricing-cards/`)
3. Place iframes with `state: "building"` in a horizontal row on the canvas, one per variant, with stable shape IDs. For 3+ variants, place them at rough positions and use `align` (top) + `distribute` (horizontal) in the same batch rather than hand-computing gutters.
4. Seed each subagent with: the design brief, target file path, shape ID to update, dev URL, and the specific design hypothesis for this variant. **Tell each subagent not to edit `index.css`** — multiple subagents run in parallel and will overwrite each other's changes.
5. After all subagents complete: restart workflow, call `presentArtifact` with all shape IDs.

**Subagent task format:**

```text
Create a mockup component at artifacts/mockup-sandbox/src/components/mockups/pricing-cards/Bold.tsx

## Design Brief

Component analysis: A pricing card that presents a subscription tier to help users
compare plans and choose one. Displays plan name, price, feature list, and a CTA.

Fixed constraints: Must include plan name, monthly price, feature list, and CTA button.
Data shape stays consistent across variants.

Variation axes:
- Content hierarchy (what leads the user's eye)
- Visual treatment (mood and material quality)

## This Variant's Hypothesis

Name: Bold
Hypothesis: High-contrast, large typography, and strong color blocking to create urgency
and confidence. Foregrounds the price as the dominant visual element with features
as supporting evidence.

Each variation should be a distinct design hypothesis. Do not produce variations that
differ only in color, font, or spacing unless the brief specifically calls for
aesthetic exploration.

The exported function name must match the filename: export function Bold().
Use Tailwind + shadcn/ui.

## CSS rules
Do NOT edit index.css — other subagents are running in parallel and will overwrite
your changes. All styles must be self-contained within your component:
- Use Tailwind utility classes and inline styles for all visual styling
- For custom fonts, use Google Fonts <link> tags in a wrapper <div> or inline @import
- If you need CSS custom properties or @keyframes, create a _group.css in the
  component folder and import it in your .tsx file

When done, update the canvas iframe to show the real preview:
  Shape ID: pricing-bold
  URL: https://<dev-url>/__mockup/preview/pricing-cards/Bold
  componentPath: artifacts/mockup-sandbox/src/components/mockups/pricing-cards/Bold.tsx
  state: "live"
```

**Parent responsibilities:**

1. Place iframes with `state: "building"` on the canvas with stable shape IDs
2. Create the project folder and `_shared/` subfolder
3. Build shared layout components (`AppLayout.tsx` with a content slot, `Navbar.tsx`, `Sidebar.tsx`, etc.)
4. Fan out DESIGN subagents for each page, passing `_shared/` file paths, shape ID, and dev URL. **Tell each subagent not to edit `index.css`** — multiple subagents run in parallel and will overwrite each other's changes.
5. After all subagents complete: restart workflow, call `presentArtifact` with all shape IDs.

**Multi-page subagent task format (only when user explicitly requests multiple pages):**

```text
Create a mockup page at artifacts/mockup-sandbox/src/components/mockups/crm-dashboard/Dashboard.tsx

This is the main dashboard page of a CRM application. Import the shared layout:
  import { AppLayout } from "./_shared/AppLayout";

Wrap your page content inside <AppLayout>. The layout already renders the nav and sidebar --
you only need to build the page content area.

User constraints: Show key metrics (revenue, users, conversion), recent activity feed,
and a quick-actions panel.

The exported function name must match the filename: export function Dashboard().
Use Tailwind + shadcn/ui.

## CSS rules
Do NOT edit index.css — other subagents are running in parallel and will overwrite
your changes. All styles must be self-contained within your component:
- Use Tailwind utility classes and inline styles for all visual styling
- For custom fonts, use Google Fonts <link> tags in a wrapper <div> or inline @import
- If you need CSS custom properties or @keyframes, create a _group.css in the
  component folder and import it in your .tsx file

When done, update the canvas iframe to show the real preview:
  Shape ID: crm-dashboard
  URL: https://<dev-url>/__mockup/preview/crm-dashboard/Dashboard
  componentPath: artifacts/mockup-sandbox/src/components/mockups/crm-dashboard/Dashboard.tsx
  state: "live"
```

### Pattern C: Multi-page with multiple variant directions

Use when the user wants to compare multiple complete design directions for a multi-page application ("show me 2 different takes on this CRM").

Each variant gets its own folder with its own `_shared/` components. One DESIGN subagent builds an entire variant (shared components + all pages), giving it full creative control over the design direction.

```text
Parent: Place iframes with state: "building" in a variant × page grid on canvas
Parent: Define page list, seed each variant direction
    ├──→ DESIGN subagent: Build entire crm-minimal/
    ├──→ DESIGN subagent: Build entire crm-bold/ 
    └──→ DESIGN subagent: Build entire crm-playful/ 
Parent: Checked the system logs and restart the workflow once all components are created 

```

```text
mockups/
├── crm-minimal/
│   ├── _shared/
│   │   ├── AppLayout.tsx
│   │   └── Navbar.tsx
│   ├── Dashboard.tsx
│   ├── UserList.tsx
│   └── Settings.tsx
├── crm-bold/
│   ├── _shared/
│   │   ├── AppLayout.tsx
│   │   └── TopNav.tsx
│   ├── Dashboard.tsx
│   ├── UserList.tsx
│   └── Settings.tsx
```

**Canvas layout for variant × page grids:**

Arrange as a matrix with text label shapes for headers. Variants as rows, pages as columns:

```text
              Dashboard       UserList        Settings
Minimal       [iframe]        [iframe]        [iframe]
Bold          [iframe]        [iframe]        [iframe]
Playful       [iframe]        [iframe]        [iframe]
```

Use `geo` text shapes for row and column headers. Space iframes with ~50px gutters.

**Subagent task format:**

```text
Build a complete multi-page mockup variant at artifacts/mockup-sandbox/src/components/mockups/crm-minimal/

Direction: Minimal and restrained -- lots of whitespace, muted colors, thin borders, subtle typography.

Pages to create: Dashboard.tsx, UserList.tsx, Settings.tsx

First create a _shared/ subfolder with shared layout components (AppLayout, Navbar, Sidebar or
similar). Then create each page file importing from _shared/ for visual consistency.

Each exported function name must match its filename. Use Tailwind + shadcn/ui.

When done, update the canvas iframes to show real previews (set state: "live" on each):
  Shape ID: crm-minimal-dashboard → URL: https://<dev-url>/__mockup/preview/crm-minimal/Dashboard
  Shape ID: crm-minimal-userlist → URL: https://<dev-url>/__mockup/preview/crm-minimal/UserList
  Shape ID: crm-minimal-settings → URL: https://<dev-url>/__mockup/preview/crm-minimal/Settings
```

**Important:** The multi-page pattern above should only be used when the user explicitly requests separate pages. If the user says "design a CRM" or "design a dashboard" without specifying separate pages, build everything as a single page component.

### General orchestration rules

1. **Always place building iframes first.** Before starting any component work, create iframes with `state: "building"` at the expected positions and sizes. No URL is needed yet -- the canvas shows a native building indicator. Skip this only for in-place modifications (set `state: "modifying"` on the existing iframe instead).

2. **Subagents mark their own iframes live.** The parent places building iframes with stable shape IDs, then tells each subagent which shape ID to update and the dev URL to use. Subagents set the real preview URL and `state: "live"` when their component is ready. This gives progressive reveal -- iframes light up as subagents finish, rather than all at once.

3. **Parent restarts the workflow once after all subagents complete** -- not once per subagent. A single restart discovers all new components and the iframes load the real content.

4. **Verify paths before delegating.** Before passing file paths to subagents, list `artifacts/mockup-sandbox/` to confirm `src/components/mockups/` exists and pass the verified full path. Getting this wrong means files land in a directory the Vite plugin never scans.

5. **Tell subagents the image path convention.** Always include this in the subagent task: "Place all images in `artifacts/mockup-sandbox/public/images/` and reference them as `<img src="/__mockup/images/filename.jpg" />`. Do NOT put images in `src/assets/` and reference them by URL path — Vite does not serve `src/` as static assets and they will 404. For `generateImage`, use `outputPath` starting with `artifacts/mockup-sandbox/public/images/`."

6. **Give subagents creative freedom.** Subagents produce better designs when given high-level requirements, not prescriptive specs. Pass:
   - Target file path and exported function name
   - Shape ID + dev URL for iframe update
   - Shared file paths to import (for multi-page projects)
   - Functional requirements only (what the page must contain, not how it should look)
   - A brief mood/direction seed (1-2 words: "minimal", "bold and dark", "warm editorial")

   Do NOT pass specific color values, font choices, spacing values, detailed layout instructions, CSS class names, or references to other variants. The subagent has its own design sensibility -- constraining it to exact specs produces generic results and defeats the purpose of generating diverse alternatives.

   **Exception:** For multi-page apps (only when the user explicitly requests multiple pages), the parent defines the design system in `_shared/` and the subagent works within it. Creative freedom applies to page content and layout, not the shared chrome.

7. **Match specialization to the task type.** Use `DESIGN` for creative mockup creation (building new components, designing variants) — it's tuned for visual output and produces better, more diverse designs. Use `GENERAL` for engineering tasks (extract, graduate) — it's built for codebase navigation, dependency tracing, and architecture-aware transformations. Never use DESIGN for extract/graduate or GENERAL for mockup creation.

## Related Skills

- **{{skill("mockup-extract")}}** -- Pull an existing component from the main app into the sandbox for redesign. Use when the user wants to iterate on something that already exists.
- **{{skill("mockup-graduate")}}** -- Move an approved mockup into the main app. Use when the user picks a variant and wants it integrated.

## Iframe Sizing Guide

Size the iframe to fit the content -- a landing page needs a full desktop viewport, a button needs a compact frame. Classify what you're building and pick dimensions accordingly.

### Content-aware sizing

Size the iframe to fit the content. A full page needs a desktop-sized viewport; a button or card needs a compact frame. Don't put small components in huge iframes -- they'll look lost in whitespace. For cards, forms, and small components, center them with `flex items-center justify-center min-h-screen` and use a snug iframe. For page sections, skip `min-h-screen` and let content determine the height.

### Full-page mockups

For landing pages and multi-section pages, use larger iframe dimensions:

- **Landing page (desktop):** 1280 × 900 -- shows hero + start of next section, user scrolls within iframe
- **Landing page (full):** 1280 × 2400 -- shows entire page without scrolling (screenshot-style review)
- **Multi-page app (desktop):** 1280 × 800 -- standard app viewport
- **Multi-page app (mobile):** 390 × 844 -- iPhone viewport

When comparing full landing pages side-by-side, use 1280 × 900 and arrange horizontally with 50px gutters. The user scrolls within each iframe to see the full page.

### Responsive comparison presets

When showing the **same component** at multiple screen widths, use these standard viewport sizes and arrange them in a row with ~50px gutters:

- Mobile: 390 × 844
- Tablet: 768 × 1024
- Desktop: 1280 × 720

## Common Pitfalls

### Keep mockups self-contained

Each mockup component must be fully self-contained. Prefer inlining small sub-components (nav bars, footers, cards) directly in the mockup file rather than importing from elsewhere. This keeps mockups isolated and editable without risk of breaking other variants.

**Exception: multi-page `_shared/` imports.** For multi-page projects (only when the user explicitly requests multiple pages — see [Subagent Orchestration](#subagent-orchestration)), pages import shared layout components from their sibling `_shared/` folder. This is intentional -- the shared shell ensures visual consistency across pages. The rule still applies within each page: don't import from other project folders or from other pages.

### No variant switchers inside components

Mockups are displayed as individual iframes on the canvas -- the canvas itself is the variant switcher. Do not build tabs, dropdowns, or navigation inside a mockup component to switch between variants. Each variant should be its own file rendered in its own iframe.

### Sync design tokens with the main app

When extracting existing components, create `_group.css` in the extraction's group folder with the main app's `:root` and `.dark` CSS variable blocks plus any font `@import`s the app uses. Each extracted component imports `./_group.css` explicitly. Do not edit the global `artifacts/mockup-sandbox/src/index.css` — that would leak one app's tokens into every unrelated mockup group in the sandbox. See the {{skill("mockup-extract")}} skill for the full process.

### Fixing broken previews

If a mockup shows a blank iframe or fails to render:

1. Check the workflow console logs for `Failed to resolve import` errors.
2. Verify the missing file exists under `artifacts/mockup-sandbox/src/` (not the main app).
3. Ensure the file exports at least one function component (named or default).
4. Restart the workflow if you changed `vite.config.ts` or `package.json`.

