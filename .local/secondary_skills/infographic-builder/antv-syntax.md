# AntV Infographic Syntax Reference

AntV Infographic syntax is a custom DSL used to describe infographic rendering configurations. It uses indentation to describe information, has strong robustness, and is convenient for streaming output and infographic rendering.

## Core Structure

Every infographic has three parts:

1. **template** — the first line selects the visual template
2. **data** — the content: title, description, and data items

3. **theme** — optional style customization (palette, font, effects)

## Syntax Rules

- First line must be `infographic <template-name>`
- Use `data`/`theme`blocks with two-space indentation within blocks

- Key-value pairs use`key space value`(e.g.,`title My Title`)
- Arrays use `-`as entry prefix

-`icon`uses icon keywords (e.g.,`star fill`, `cloud`, `brain`)

- `data`should contain`title`/`desc`+ the template-specific main data field

- Do not output JSON, Markdown, or explanatory text — only the DSL syntax

## Main Data Field by Template Category

Use only one main data field per infographic. Do not mix them.

| Template Category | Main Data Field | Notes |

|-------------------|----------------|-------|

|`list-*`|`lists`| Array of items with label, desc, icon |

|`sequence-*`|`sequences`| Optional`order asc\\desc`|

|`compare-*`|`compares`| Supports`children`for grouped comparisons |

|`hierarchy-structure`|`items`| Each item is an independent hierarchy, nestable up to 3 levels |

|`hierarchy-*`(others) |`root`| Single root, nested through`children`|

|`relation-*`|`nodes`+`relations`| Simple relations can omit`nodes`, using arrow syntax |

| `chart-*`|`values`| Numeric statistics, optional`category`|

| Fallback |`items`| Use when uncertain about which field to use |

## Special Rules

-`compare-binary-*`and`compare-hierarchy-left-right-*`templates: must have exactly two root nodes; all comparison items hang under these two root nodes'`children`-`hierarchy-*`(non-structure): use single`root`, nested through `children`— do not repeat root

-`relation-*`edge label syntax:`A -label-> B`or`A -->|label| B`

## Basic Example

```text

infographic list-row-horizontal-icon-arrow

data

title Title

desc Description

lists

- label Label

value 12.5

desc Explanation

icon document text

theme

palette \#3b82f6 \#8b5cf6 \#f97316

```

## Data Syntax Examples by Category

### list-* templates

```text

infographic list-grid-badge-card

data

title Feature List

lists

- label Fast

icon flash fast

- label Secure

icon secure shield check

```

### sequence-* templates

```text

infographic sequence-steps-simple

data

sequences

- label Step 1
- label Step 2

- label Step 3

order asc

```

### hierarchy-* templates

```text

infographic hierarchy-structure

data

root

label Company

children

- label Dept A
- label Dept B

```

### compare-* templates

```text

infographic compare-swot

data

compares

- label Strengths

children

- label Strong brand
- label Loyal users

- label Weaknesses

children

- label High cost
- label Slow release

```

### Quadrant diagram

```text

infographic compare-quadrant-quarter-simple-card

data

compares

- label High Impact & Low Effort
- label High Impact & High Effort

- label Low Impact & Low Effort
- label Low Impact & High Effort

```

### chart-* templates

```text

infographic chart-column-simple

data

values

- label Visits

value 1280

- label Conversion

value 12.4

```

### relation-* templates

Edge label syntax: `A -label-> B`or`A -->|label| B`

```text

infographic relation-dagre-flow-tb-simple-circle-node

data

nodes

- id A

label Node A

- id B

label Node B

relations

A - approves -> B

A -->|blocks| B

```

### Fallback items example

```text

infographic list-row-horizontal-icon-arrow

data

items

- label Item A

desc Description

icon sun

- label Item B

desc Description

icon moon

```

## Theme Customization

### Custom palette

```text

infographic list-row-horizontal-icon-arrow

theme

palette \#3b82f6 \#8b5cf6 \#f97316

```

### Dark theme with custom colors

```text

infographic list-row-horizontal-icon-arrow

theme dark

palette

- \#61DDAA
- \#F6BD16

- \#F08BB4

```

### Hand-drawn style (rough)

Use `theme.stylize`for built-in visual styles. Common styles:

-`rough`— hand-drawn effect
-`pattern`— pattern fill

-`linear-gradient`/`radial-gradient` — gradient fills

```text

infographic list-row-horizontal-icon-arrow

theme

stylize rough

base

text

font-family 851tegakizatsu

```

### Custom font

```text

theme

base

text

font-family 851tegakizatsu

```

## Available Templates

### Chart templates

- `chart-bar-plain-text`-`chart-column-simple`-`chart-line-plain-text`-`chart-pie-compact-card`-`chart-pie-donut-pill-badge`-`chart-pie-donut-plain-text`-`chart-pie-plain-text`-`chart-wordcloud`

### Comparison templates

- `compare-binary-horizontal-badge-card-arrow`-`compare-binary-horizontal-simple-fold`-`compare-binary-horizontal-underline-text-vs`-`compare-hierarchy-left-right-circle-node-pill-badge`-`compare-quadrant-quarter-circular`-`compare-quadrant-quarter-simple-card`-`compare-swot`

### Hierarchy templates

- `hierarchy-mindmap-branch-gradient-capsule-item`-`hierarchy-mindmap-level-gradient-compact-card`-`hierarchy-structure`-`hierarchy-tree-curved-line-rounded-rect-node`-`hierarchy-tree-tech-style-badge-card`-`hierarchy-tree-tech-style-capsule-item`

### List templates

- `list-column-done-list`-`list-column-simple-vertical-arrow`-`list-column-vertical-icon-arrow`-`list-grid-badge-card`-`list-grid-candy-card-lite`-`list-grid-ribbon-card`-`list-row-horizontal-icon-arrow`-`list-sector-plain-text`-`list-zigzag-down-compact-card`-`list-zigzag-down-simple`-`list-zigzag-up-compact-card`-`list-zigzag-up-simple`

### Relation templates

- `relation-dagre-flow-tb-animated-badge-card`-`relation-dagre-flow-tb-animated-simple-circle-node`-`relation-dagre-flow-tb-badge-card`-`relation-dagre-flow-tb-simple-circle-node`

### Sequence templates

- `sequence-ascending-stairs-3d-underline-text`-`sequence-ascending-steps`-`sequence-circular-simple`-`sequence-color-snake-steps-horizontal-icon-line`-`sequence-cylinders-3d-simple`-`sequence-filter-mesh-simple`-`sequence-funnel-simple`-`sequence-horizontal-zigzag-underline-text`-`sequence-mountain-underline-text`-`sequence-pyramid-simple`-`sequence-roadmap-vertical-plain-text`-`sequence-roadmap-vertical-simple`-`sequence-snake-steps-compact-card`-`sequence-snake-steps-simple`-`sequence-snake-steps-underline-text`-`sequence-stairs-front-compact-card`-`sequence-stairs-front-pill-badge`-`sequence-timeline-rounded-rect-node`-`sequence-timeline-simple`-`sequence-zigzag-pucks-3d-simple`-`sequence-zigzag-steps-underline-text`

## Template Selection Quick Reference

| Use Case | Recommended Templates |

|----------|----------------------|

| Strict sequence (process/steps) | `sequence-*`|

| Timeline |`sequence-timeline-*`|

| Staircase diagram |`sequence-stairs-*`|

| Roadmap |`sequence-roadmap-vertical-*`|

| Zigzag path |`sequence-zigzag-*`|

| Circular progress |`sequence-circular-simple`|

| Snake steps |`sequence-color-snake-steps-*`, `sequence-snake-steps-*`|

| Pyramid |`sequence-pyramid-simple`|

| Funnel |`sequence-funnel-simple`|

| Opinion listing |`list-row-*`or`list-column-*`|

| Grid list (key points) |`list-grid-*`|

| Binary comparison (pros/cons) |`compare-binary-*`|

| SWOT analysis |`compare-swot`|

| Quadrant analysis |`compare-quadrant-*`|

| Tree diagram |`hierarchy-tree-*`|

| Mind map |`hierarchy-mindmap-*`|

| Org chart |`hierarchy-structure`|

| Data charts |`chart-*`|

| Flow / relationship diagram |`relation-*`|

| Word cloud |`chart-wordcloud` |

## Full Example

Internet technology evolution infographic:

```text

infographic list-row-horizontal-icon-arrow

data

title Internet Technology Evolution

desc From Web 1.0 to AI era, key milestones

lists

- time 1991

label Web 1.0

desc Tim Berners-Lee published the first website, opening the Internet era

icon web

- time 2004

label Web 2.0

desc Social media and user-generated content become mainstream

icon account multiple

- time 2007

label Mobile

desc iPhone released, smartphone changes the world

icon cellphone

- time 2015

label Cloud Native

desc Containerization and microservices architecture are widely used

icon cloud

- time 2020

label Low Code

desc Visual development lowers the technology threshold

icon application brackets

- time 2023

label AI Large Model

desc ChatGPT ignites the generative AI revolution

icon brain

```
