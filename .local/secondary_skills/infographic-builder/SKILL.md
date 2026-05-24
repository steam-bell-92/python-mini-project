---
name: infographic-builder
description: Build infographics that visualize data, processes, comparisons, and timelines.
---

# Infographic Builder

Infographics convert data, information, and knowledge into perceptible visual language. They combine visual design with data visualization, compressing complex information with intuitive symbols to help audiences quickly understand and remember key points.

## Infographic = Information Structure + Visual Expression

## When to Use

- The user asks to "create an infographic" or "make a visual summary"
- The user wants to turn data, stats, or a process into a visual one-pager

- The user asks for a "data graphic", "visual explainer", or "information poster"
- The user provides data or content and asks to "visualize" it in a static format

- The user asks for a timeline, comparison chart, process flow, or statistical summary as a designed visual (not an interactive dashboard)

Do NOT use this skill when:

- The user wants an interactive dashboard (use `data-visualization` instead)
- The user wants a multi-slide presentation (use `slides` instead)

- The user just wants a simple chart embedded in an app (use a charting library directly)

## Two Approaches

### Primary: AntV Infographic (DSL-based)

Use this for infographics where the content maps cleanly to a **single visualization type** — a list, a sequence, a comparison, a hierarchy, a chart, or a relationship diagram. AntV Infographic provides 60+ pre-built templates with a simple DSL syntax. It's fast and produces polished results. Read `antv-syntax.md` for the full DSL specification and template list.

### Fallback: React Component (Mockup Sandbox)

Use this when the infographic needs **multiple visualization types combined** (e.g., summary stats + bar chart + pie chart + detailed table), when the user provides raw data that needs analysis and categorization before visualization (e.g., bank transactions, CSV data), or when the layout doesn't fit any single AntV template. Read `react-fallback.md` for this workflow.

#### How to choose

- Content fits one template category (e.g., "show a process flow", "make a SWOT analysis") → **AntV**
- Content is raw data needing analysis, or requires multiple chart types in one visual → **React fallback**

- User wants a completely bespoke design or pixel-level control → **React fallback**

## Infographic Types → Template Categories

| Content Type | Best For | AntV Template Category |

|-------------|----------|----------------------|

| **Statistical** | Numbers, percentages, survey results | `chart-*` (pie, bar, column, line) |

| **Process / Flow** | Step-by-step workflows, how-tos | `sequence-*` (steps, funnel, pyramid, stairs) |

| **Comparison** | Side-by-side analysis, pros/cons, SWOT | `compare-*` (binary, swot, quadrant) |

| **Timeline** | Historical events, project phases, roadmaps | `sequence-timeline-*`,`sequence-roadmap-*` |

| **Hierarchical** | Org structures, category breakdowns, mind maps | `hierarchy-*` (tree, mindmap, structure) |

| **List / Informational** | Tips, facts, feature lists | `list-*` (grid, row, column, zigzag) |

| **Relationships** | Flow diagrams, dependency graphs | `relation-*` (dagre flow) |

| **Word Cloud** | Keyword frequency, topic prominence | `chart-wordcloud` |

| **Multi-section summary**| Financial reports, data analysis, dashboards |**React fallback** (no single AntV template fits) |

## AntV Infographic Workflow

### Step 1: Understand User Requirements

Before creating an infographic, understand the user's needs and the information they want to express.

- If the user provides a clear content description, break it down into a clear and concise structure.
- Otherwise, ask for clarification (e.g., "What data or content should the infographic show?", "Do you have a preference for the visual style?")

Extract:

- **Title and subtitle** — the main headline and supporting context
- **Data points** — numbers, labels, descriptions, icons for each item

- **Sections/items** — logical groupings (3-7 sections work best)
- **Source attribution** — where the data comes from (if applicable)

- **Style preferences** — colors, dark/light theme, hand-drawn style (if any)

Do not invent data or placeholder text. If the user provides incomplete content, ask for the missing pieces.

**Language rule:** Always respect the language of user input. If the user inputs in Chinese, all text in the syntax must also be in Chinese. Same for any other language.

### Step 2: Select Template and Write DSL

Choose the right template from the available templates list (see `references/antv-syntax.md` for the full list).

Template selection guide:

- Strict sequence (process/steps/development trend) → `sequence-*`
- Timeline → `sequence-timeline-*`

- Staircase diagram → `sequence-stairs-*`
- Roadmap → `sequence-roadmap-vertical-*`

- Zigzag path → `sequence-zigzag-*`
- Circular progress → `sequence-circular-simple`

- Pyramid → `sequence-pyramid-simple`
- Funnel → `sequence-funnel-simple`

- Opinion listing → `list-row-*`or`list-column-*`
- Grid list (key points) → `list-grid-*`

- Binary comparison (pros/cons) → `compare-binary-*`
- SWOT analysis → `compare-swot`

- Quadrant analysis → `compare-quadrant-*`
- Hierarchical structure (tree diagram) → `hierarchy-tree-*`

- Mind map → `hierarchy-mindmap-*`
- Org chart / structure → `hierarchy-structure`

- Data charts (bar, pie, line) → `chart-*`
- Relationship / flow diagram → `relation-*`

- Word cloud → `chart-wordcloud`

Write the AntV Infographic DSL syntax. The syntax rules are documented in `references/antv-syntax.md` — read it before writing any DSL.

Key syntax rules:

- First line must be `infographic <template-name>`
- Use `data`/`theme` blocks with two-space indentation

- Key-value pairs use `key space value`; arrays use`-` as entry prefix
- Main data field depends on template category:

- `list-*`→`lists`
- `sequence-*`→`sequences`

- `compare-*`→`compares`
- `hierarchy-structure`→`items`

- `hierarchy-*`(others) → single`root`with nested`children`
- `relation-*`→`nodes`+`relations`

- `chart-*`→`values`
- Use `items` as fallback when uncertain

### Step 3: Render as HTML File

Create a complete HTML file using this template:

```html

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="utf-8" />

<title>{title} - Infographic</title>

<style>

* { margin: 0; padding: 0; box-sizing: border-box; }

html, body { width: 100%; height: 100%; }

#container { width: 100%; height: 100%; }

</style>

</head>

<body>

<div id="container"></div>

<script src="https://unpkg.com/@antv/infographic@latest/dist/infographic.min.js"></script>

<script>

const infographic = new AntVInfographic.Infographic({

container: '#container',

width: '100%',

height: '100%',

});

document.fonts?.ready.then(() => {

infographic.render(`{syntax}`);

}).catch((error) => {

console.error('Error waiting for fonts to load:', error);

infographic.render(`{syntax}`);

});

</script>

</body>

</html>

```

Replace `{title}`with the actual title and`{syntax}` with the AntV Infographic DSL.

Save the file as `exports/<title-slug>-infographic.html` (use kebab-case for the filename).

### Step 4: Export as Static Image

To capture the HTML file as a static image:

1. Copy the HTML file into the mockup sandbox's public directory (`artifacts/mockup-sandbox/public/`) so it's accessible via the dev server.
2. Restart the mockup sandbox workflow so Vite picks up the new public file.

3. Wait a few seconds for the server to restart and the CDN script to load.
4. Screenshot the page:

```javascript

screenshot({

artifact_dir_name: "mockup-sandbox",

path: "/<filename>.html",

viewport_size: [1200, 900],

save_to: "exports/<title-slug>-infographic.jpg"

});

```

**Important:** The `path`parameter is relative to the artifact's preview path — the tool automatically prepends`/__mockup`. So use`/<filename>.html`, not`/__mockup/<filename>.html`.

If the screenshot approach has issues with CDN loading (blank page, missing fonts), the HTML file itself is the deliverable — present it to the user and mention they can open it in any browser to view and export as SVG.

### Step 5: Deliver to User

Present results:

- The exported `.jpg`image file via`present_asset` (primary deliverable)
- Mention the HTML file path and that it can be opened in a browser for full-resolution SVG export

- Ask: "Let me know if you'd like to adjust the template, colors, or content."

## React Fallback Workflow (Summary)

When using the React fallback (see `references/react-fallback.md` for full details):

1. **Analyze the data** — categorize, aggregate, and compute totals/percentages before building
2. **Create the component** at `artifacts/mockup-sandbox/src/components/mockups/infographics/<Name>.tsx`

3. **Restart the mockup sandbox workflow** — the Vite plugin needs to discover the new file. Always restart after creating a new component file.
4. **Wait 3-5 seconds** after restart for the dev server and component registry to settle

5. **Screenshot** using the correct path format:

```javascript

screenshot({

artifact_dir_name: "mockup-sandbox",

path: "/preview/infographics/<ComponentName>",

viewport_size: [1050, 1600],

save_to: "exports/<name>-infographic.jpg"

});

```

**Path rules:** The `path`must NOT include`/__mockup`— the screenshot tool prepends the artifact's preview path automatically. Use`/preview/infographics/<ComponentName>`.

**Viewport sizing:** Start with a tall viewport (1500-1600px height) to capture the full infographic. If content is cut off at the bottom, increase the height and retake. It's easier to start tall and trim than to guess short and miss content.

1. **Present** the exported image via `present_asset`

## Tips for Great Infographics

- **Less is more.** Remove anything that doesn't help the audience understand the key message. Every element should earn its space.
- **One key takeaway.** The best infographics have a single dominant insight that the viewer gets within 3 seconds.

- **Visual encoding over text.** Use size, color, position, and icons to convey meaning instead of long text blocks.
- **Reading flow.** Guide the eye with clear visual hierarchy — numbering, arrows, and color progression all help.

- **Contrast for emphasis.** Make the most important numbers visually dominant — large, bold, colored.
- **Consistent visual language.** Pick an icon style, color palette, and typographic scale — then stick with them throughout.

- **Use themes.** AntV supports dark themes, custom palettes, hand-drawn style (`stylize rough`), pattern fills, and gradients. Use them to match the user's brand or preferences.

## Checklist Before Delivering

- [ ] All data and content from the user is accurately represented (no invented data)
- [ ] The infographic uses the most appropriate approach (AntV for single-type, React for multi-type)

- [ ] Text language matches the user's input language
- [ ] Theme/palette matches any brand preferences the user specified

- [ ] The exported image captures the full infographic — no cut-off content at the bottom
- [ ] Source attribution is included if the user provided data sources

- [ ] The image file has been presented to the user via `present_asset`
