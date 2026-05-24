# React Component Fallback (Custom Infographics)

Use this approach when the infographic needs multiple visualization types combined, when raw data needs analysis before visualization, or when no single AntV template fits the content.

## When to Use

- The content is raw data (CSV, bank transactions, spreadsheets) that needs analysis and categorization
- The infographic combines multiple visualization types (summary stats + charts + tables + callouts)

- The user wants a completely bespoke visual design
- The user has specific brand requirements that need pixel-level control

- No single AntV template category covers the content

## Workflow

### 1. Analyze the Data

Before building, analyze and structure the raw data:

- Compute totals, averages, percentages
- Categorize items into meaningful groups

- Identify the key insight or takeaway
- Plan which sections and chart types will best communicate each data point

This analysis step is critical — the React component will hardcode the computed values, so get the math right before writing any code.

### 2. Create the Component Directory

Ensure the infographics directory exists:

```text

mkdir -p artifacts/mockup-sandbox/src/components/mockups/infographics

mkdir -p exports

```

### 3. Build the React Component

Create the component at `artifacts/mockup-sandbox/src/components/mockups/infographics/<Name>.tsx`.

Use a descriptive PascalCase name (e.g., `TransaccionesMarzo.tsx`, `ClimateStats.tsx`, `HiringProcess.tsx`).

Design principles:

- Set a fixed width on the root container (e.g., `w-[1000px]`or`w-[1050px]`) so the layout is predictable for screenshot export.
- Use `min-h-screen`on the outer wrapper with a solid background color — no transparency.

- Build data visualizations with inline SVG (donut charts, bar charts, etc.). Avoid heavy charting libraries — infographic charts are decorative and specific, not interactive.
- Use`lucide-react`icons extensively — they compress meaning into small spaces and are pre-installed in the mockup sandbox.

- Apply strong typographic hierarchy: large headline numbers, medium section headers, small body text.
- Use color intentionally: 1 primary color, 1-2 accent colors, and neutral tones. Color should encode meaning (categories, income/expense, good/bad), not just decorate.

- Add visual separators between sections (lines, color blocks, spacing) to create clear reading flow.
- Include a "key insight" callout — one highlighted finding that the viewer gets within 3 seconds.

- Do NOT use any interactive elements (hover states, clicks, animations). The output is a static image.

### 4. Delegate to the Design Subagent (Optional)

For best visual results on complex infographics, delegate the component build to a DESIGN subagent.

The brief should include:

- The infographic type and all pre-computed data (every number, label, section title, percentage)
- The target dimensions (width x approximate height)

- The target file path in the mockup sandbox
- Any brand colors or style preferences from the user

- The instruction: "Build this as a single static React component. No interactivity, no animations, no hover states. Use a fixed width container. Use inline SVG for any charts or data visualizations. The component will be exported as a static image."
- "Do not use emojis anywhere in the design"

Pass via`relevantFiles`:

- The target component path
- `artifacts/mockup-sandbox/src/index.css`(for Tailwind theme tokens)

-`artifacts/mockup-sandbox/package.json` (for available dependencies)

For data-heavy infographics (like financial summaries), it's often faster and more accurate to build the component directly rather than delegating — the data is specific and structured, and the design subagent might misrepresent numbers.

### 5. Restart the Workflow

After creating the component file, restart the mockup sandbox workflow so the Vite plugin discovers the new file and registers it in the component registry:

```javascript

await restartWorkflow({ workflowName: "artifacts/mockup-sandbox: Component Preview Server" });

```

Then wait 3-5 seconds for the server to restart and the component registry to regenerate. The Vite plugin uses file watching + fast-glob to discover components — a restart ensures the new file is picked up reliably.

### 6. Export as Static Image

Screenshot the component using the correct path format:

```javascript

screenshot({

artifact_dir_name: "mockup-sandbox",

path: "/preview/infographics/ComponentName",

viewport_size: [1050, 1600],

save_to: "exports/infographic-name.jpg"

});

```

### Critical path rules

- The `path`must NOT include`/__mockup` — the screenshot tool automatically prepends the artifact's preview path (`/__mockup`). If you include it, the URL will be `/__mockup/__mockup/preview/...`which shows the wrong page.
- Correct:`path: "/preview/infographics/TransaccionesMarzo"`

- Wrong: `path: "/__mockup/preview/infographics/TransaccionesMarzo"`

### Viewport sizing tips

- Start with a generous height (1500-1600px) to capture the full infographic on the first attempt.
- If the bottom is cut off, increase the height by 100-200px and retake.

- Match the width to the component's fixed width plus a small margin (e.g., component is `w-[1000px]`→ use viewport width 1050).
- It's much easier to start tall and have whitespace at the bottom than to guess short and miss content.

**First screenshot may be blank:** If the very first screenshot after restart shows a blank/white page, the Vite dev server may still be initializing. Wait a few more seconds and retake.

### 7. Present to User

Present the exported image via`present_asset`. Mention that the component is also viewable as a live page in the mockup sandbox if they want to iterate.

## Component Template

Minimal structural template showing the anatomy:

```tsx

import { ArrowDownLeft, ArrowUpRight, Wallet } from "lucide-react";

function formatMoney(n: number) {

return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2 });

}

export function ExampleInfographic() {

return (

<div className="w-[1000px] min-h-screen bg-slate-50 p-12 font-sans">

{/* Header with gradient background */}

<header className="rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white mb-8">

<h1 className="text-3xl font-bold">Title Here</h1>

<p className="mt-1 text-blue-200">Subtitle or context</p>

</header>

{/* Key metrics row */}

<div className="flex gap-4 mb-8">

{/* Stat cards with colored left borders */}

</div>

{/* Visualization sections */}

<section className="rounded-xl bg-white p-6 shadow-sm mb-8">

{/* Inline SVG charts, data tables, icon grids */}

</section>

{/* Key insight callout */}

<div className="rounded-xl bg-blue-50 border border-blue-200 p-5 mb-8">

<strong>Key Insight:</strong> The most important finding goes here.

</div>

{/* Footer / Source */}

<footer className="border-t border-slate-200 pt-4 text-sm text-slate-400 flex justify-between">

<span>Source: Data Source Name</span>

<span>Generated: Date</span>

</footer>

</div>

);

}

```
