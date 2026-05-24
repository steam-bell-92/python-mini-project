---
name: canvas
description: "Create, read, and manipulate shapes on the canvas. The canvas is the primary surface for showing live UI previews via iframe embeds (using the mockup-sandbox skill), as well as static shapes, text, notes, images, and videos. Use this skill for any canvas operation — reading board state, placing shapes, or managing iframe lifecycle. You must read this skill (0-500 lines) before any canvas operation"
---

# Canvas Skill

## IMPORTANT: Place Building Iframes Before Building

When the user's request will produce **new visual content** on the canvas (e.g. "create a landing page", "show me 3 card variants", "mockup a dashboard"), your very first action must be to place building placeholders — before writing any code or setting up servers:

1. Call `applyCanvasActions()` with a `create-auto` action to create iframe shapes with `state: "building"` and names for every element you plan to produce. No URL is needed — the UI shows a building indicator.
2. Only call `getCanvasState()` first when you must place shapes at exact coordinates or relative to existing content.
3. Only then proceed with the rest of the work (mockup-sandbox setup, writing code, starting servers, etc.).
4. As each element becomes ready, update its iframe to `state: "live"` with the real URL.

Do not set up the mockup sandbox first. Do not write component code first. Place the building iframes first, then do everything else. The user sees the placeholders appear on the canvas immediately, giving them instant feedback that work is underway and showing the planned layout.

This does **not** apply to read-only requests (e.g. "what's on the canvas?"), modifications to existing shapes (e.g. "move the card to the right"), or non-iframe work (e.g. "add a text label").

## Overview

The workspace canvas is an infinite board where you can create, position, and manipulate visual elements. It supports shapes, iframes (primarily used for design exploration), and artifacts (live-running apps such as websites or mobile apps).

When users want to view frames at full size, they must click the preview button above the frame. Users can also toggle in and out of the canvas using the canvas button below the workspace-level preview window. When telling the user where to view canvas content, say "open the Preview tab and toggle on the canvas" — there is no "Canvas tab".

Artifact frames have special constraints - they cannot be deleted or freely resized (to maintain the snap back in ratio).

You have the following tools:

Beyond iframes, the canvas also supports static shapes (rectangles, ellipses, text, notes), images, and videos for diagrams, annotations, and layouts.

### Callbacks

You have three callbacks available via `code_execution`:

- **`getCanvasState`** -- Read what shapes are on the board, their positions, types, and properties.
- **`applyCanvasActions`** -- Create, auto-place, update, delete, move, resize, reorder, align, or distribute shapes.
- **`focusCanvasShapes`** -- Pan and zoom the viewport to show specific shapes.

All callbacks are async and must be awaited. Call them directly in `code_execution` -- they are pre-registered.

**Parameter casing.** All canvas callbacks accept **camelCase** keys (e.g. `shapeIds`, `animateMs`, `focusArea`, `shapeId`, `componentName`). Passing snake_case keys causes a pydantic validation error like `shapeIds Field required`. The schemas below reflect the camelCase keys you must actually pass.

### Canvas + Mockup Sandbox

For any request that involves showing rendered UI on the canvas, you need both this skill and the **mockup-sandbox** skill working together:

- **mockup-sandbox** sets up the isolated vite dev server, creates the component files, and gives you preview URLs.
- **canvas** (this skill) places those URLs as iframe shapes on the board, manages layout, and handles the iframe lifecycle.

## Coordinate System

- Origin `(0, 0)` is at the top-left of the canvas.
- Positive `x` goes right, positive `y` goes down.
- All positions and sizes are in canvas units.

## Parameter Schema

### `applyCanvasActions`

Modify the canvas board by applying an ordered list of actions in a single atomic batch. For new iframes that just need automatic placement, use `create-auto`; for manual x/y placement, call `getCanvasState` first to see existing shapes and find empty space.

```json
{
  "$defs": {
    "CanvasAlignActionInput": {
      "properties": {
        "type": { "const": "align", "description": "Align multiple shapes.", "type": "string" },
        "shapeIds": { "description": "Target shape ids.", "items": { "type": "string" }, "type": "array" },
        "alignment": { "description": "Alignment mode.", "enum": ["left", "center-horizontal", "right", "top", "center-vertical", "bottom"], "type": "string" }
      },
      "required": ["type", "shapeIds", "alignment"]
    },
    "CanvasCreateActionInput": {
      "properties": {
        "type": { "const": "create", "description": "Create a shape.", "type": "string" },
        "shape": { "$ref": "#/$defs/CanvasShapeInput", "description": "Shape payload." },
        "shapeId": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "Optional deterministic id." }
      },
      "required": ["type", "shape"]
    },
    "CanvasCreateAutoActionInput": {
      "properties": {
        "type": { "const": "create-auto", "description": "Create one or more iframe shapes with automatic placement.", "type": "string" },
        "shapeIds": { "description": "Deterministic ids for created iframe shapes.", "items": { "type": "string" }, "minItems": 1, "type": "array" },
        "shape": { "$ref": "#/$defs/CanvasCreateAutoShapeInput", "description": "Iframe payload shared by every item." },
        "names": { "description": "Per-shape componentName values; must match shapeIds.", "items": { "type": "string" }, "type": "array" }
      },
      "required": ["type", "shapeIds", "shape", "names"]
    },
    "CanvasCreateAutoShapeInput": {
      "properties": {
        "type": { "const": "iframe", "description": "Create-auto creates iframes.", "type": "string" },
        "w": { "description": "Shape width in canvas units.", "type": "number" },
        "h": { "description": "Shape height in canvas units.", "type": "number" },
        "url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "For iframe shapes: the https URL to embed. Optional when creating with state 'building'; required when setting state to 'live'." },
        "componentPath": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "For iframe shapes: file path shown in the shape title bar." },
        "componentProps": { "anyOf": [{ "additionalProperties": true, "type": "object" }, { "type": "null" }], "default": null, "description": "For iframe shapes: extra props to pass." },
        "state": { "anyOf": [{ "enum": ["building", "modifying", "live"], "type": "string" }, { "type": "null" }], "default": null, "description": "For iframe shapes: lifecycle state. Set 'building' on create, 'modifying' before edits, 'live' when the component is ready." },
        "artifactKind": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "For iframe shapes: artifact kind metadata." }
      },
      "required": ["type", "w", "h"]
    },
    "CanvasDeleteActionInput": {
      "properties": {
        "type": { "const": "delete", "description": "Delete a shape.", "type": "string" },
        "shapeId": { "description": "Target shape id.", "type": "string" }
      },
      "required": ["type", "shapeId"]
    },
    "CanvasDistributeActionInput": {
      "properties": {
        "type": { "const": "distribute", "description": "Distribute multiple shapes.", "type": "string" },
        "shapeIds": { "description": "Target shape ids.", "items": { "type": "string" }, "type": "array" },
        "direction": { "description": "Distribution axis.", "enum": ["horizontal", "vertical"], "type": "string" }
      },
      "required": ["type", "shapeIds", "direction"]
    },
    "CanvasMoveActionInput": {
      "properties": {
        "type": { "const": "move", "description": "Move a shape.", "type": "string" },
        "shapeId": { "description": "Target shape id.", "type": "string" },
        "x": { "description": "Destination x.", "type": "number" },
        "y": { "description": "Destination y.", "type": "number" }
      },
      "required": ["type", "shapeId", "x", "y"]
    },
    "CanvasReorderActionInput": {
      "properties": {
        "type": { "const": "reorder", "description": "Reorder a shape.", "type": "string" },
        "shapeId": { "description": "Target shape id.", "type": "string" },
        "direction": { "description": "Stacking direction.", "enum": ["front", "back"], "type": "string" }
      },
      "required": ["type", "shapeId", "direction"]
    },
    "CanvasResizeActionInput": {
      "properties": {
        "type": { "const": "resize", "description": "Resize a shape.", "type": "string" },
        "shapeId": { "description": "Target shape id.", "type": "string" },
        "w": { "description": "Destination width.", "type": "number" },
        "h": { "description": "Destination height.", "type": "number" }
      },
      "required": ["type", "shapeId", "w", "h"]
    },
    "CanvasShapeInput": {
      "properties": {
        "type": { "description": "Shape type: 'geo' (rectangle/ellipse), 'text' (label), 'note' (sticky note), 'iframe' (embedded web content), 'image' (embedded image), or 'video' (embedded video).", "enum": ["geo", "text", "note", "iframe", "image", "video"], "type": "string" },
        "x": { "description": "X position on canvas (0 is left).", "type": "number" },
        "y": { "description": "Y position on canvas (0 is top).", "type": "number" },
        "w": { "description": "Shape width in canvas units.", "type": "number" },
        "h": { "description": "Shape height in canvas units.", "type": "number" },
        "geo": { "anyOf": [{ "enum": ["cloud", "rectangle", "ellipse", "triangle", "diamond", "pentagon", "hexagon", "octagon", "star", "rhombus", "rhombus-2", "oval", "trapezoid", "arrow-right", "arrow-left", "arrow-up", "arrow-down", "x-box", "check-box", "heart"], "type": "string" }, { "type": "null" }], "default": null, "description": "Geometry sub-type for 'geo' shapes." },
        "color": { "anyOf": [{ "enum": ["black", "grey", "light-violet", "violet", "blue", "light-blue", "yellow", "orange", "green", "light-green", "light-red", "red", "white"], "type": "string" }, { "type": "null" }], "default": null, "description": "Shape color." },
        "labelColor": { "anyOf": [{ "enum": ["black", "grey", "light-violet", "violet", "blue", "light-blue", "yellow", "orange", "green", "light-green", "light-red", "red", "white"], "type": "string" }, { "type": "null" }], "default": null, "description": "Text label color. Overrides the shape color for text content." },
        "fill": { "anyOf": [{ "enum": ["none", "semi", "solid", "pattern", "fill", "lined-fill"], "type": "string" }, { "type": "null" }], "default": null, "description": "Fill style." },
        "text": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "Text content displayed inside the shape." },
        "url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "For iframe shapes: the https URL to embed. Optional when creating with state 'building'; required when setting state to 'live'." },
        "src": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "For image/video shapes: the source URL of the media." },
        "altText": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "For image/video shapes: alt text describing the media." },
        "componentPath": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "For iframe shapes: file path shown in the shape title bar." },
        "componentName": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "For iframe shapes: component name shown in the shape title bar." },
        "componentProps": { "anyOf": [{ "additionalProperties": true, "type": "object" }, { "type": "null" }], "default": null, "description": "For iframe shapes: extra props to pass." },
        "state": { "anyOf": [{ "enum": ["building", "modifying", "live"], "type": "string" }, { "type": "null" }], "default": null, "description": "For iframe shapes: lifecycle state. Set 'building' on create, 'modifying' before edits, 'live' when the component is ready." }
      },
      "required": ["type", "x", "y", "w", "h"]
    },
    "CanvasUpdateActionInput": {
      "properties": {
        "type": { "const": "update", "description": "Update a shape.", "type": "string" },
        "shapeId": { "description": "Target shape id.", "type": "string" },
        "updates": { "$ref": "#/$defs/CanvasUpdateFieldsInput", "description": "Partial shape update." }
      },
      "required": ["type", "shapeId", "updates"]
    },
    "CanvasUpdateFieldsInput": {
      "properties": {
        "shapeType": { "description": "The type of shape being updated. Always required -- controls how the update is serialized.", "enum": ["geo", "text", "note", "iframe", "image", "video"], "type": "string" },
        "x": { "anyOf": [{ "type": "number" }, { "type": "null" }], "default": null, "description": "New x position." },
        "y": { "anyOf": [{ "type": "number" }, { "type": "null" }], "default": null, "description": "New y position." },
        "w": { "anyOf": [{ "type": "number" }, { "type": "null" }], "default": null, "description": "New width." },
        "h": { "anyOf": [{ "type": "number" }, { "type": "null" }], "default": null, "description": "New height." },
        "geo": { "anyOf": [{ "enum": ["cloud", "rectangle", "ellipse", "triangle", "diamond", "pentagon", "hexagon", "octagon", "star", "rhombus", "rhombus-2", "oval", "trapezoid", "arrow-right", "arrow-left", "arrow-up", "arrow-down", "x-box", "check-box", "heart"], "type": "string" }, { "type": "null" }], "default": null, "description": "New geometry sub-type." },
        "color": { "anyOf": [{ "enum": ["black", "grey", "light-violet", "violet", "blue", "light-blue", "yellow", "orange", "green", "light-green", "light-red", "red", "white"], "type": "string" }, { "type": "null" }], "default": null, "description": "New shape color." },
        "labelColor": { "anyOf": [{ "enum": ["black", "grey", "light-violet", "violet", "blue", "light-blue", "yellow", "orange", "green", "light-green", "light-red", "red", "white"], "type": "string" }, { "type": "null" }], "default": null, "description": "New text label color." },
        "fill": { "anyOf": [{ "enum": ["none", "semi", "solid", "pattern", "fill", "lined-fill"], "type": "string" }, { "type": "null" }], "default": null, "description": "New fill style." },
        "text": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "New text content." },
        "url": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "New URL for iframe shapes (must be https)." },
        "src": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "New source URL for image/video shapes." },
        "altText": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "New alt text for image/video shapes." },
        "componentPath": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "New component path for iframe shapes." },
        "componentName": { "anyOf": [{ "type": "string" }, { "type": "null" }], "default": null, "description": "New component name for iframe shapes." },
        "componentProps": { "anyOf": [{ "additionalProperties": true, "type": "object" }, { "type": "null" }], "default": null, "description": "Props to merge into iframe shape props." },
        "state": { "anyOf": [{ "enum": ["building", "modifying", "live"], "type": "string" }, { "type": "null" }], "default": null, "description": "New lifecycle state for iframe shapes. Set 'modifying' before edits, 'live' when ready." }
      },
      "required": ["shapeType"]
    }
  },
  "properties": {
    "actions": {
      "description": "Ordered list of canvas actions to apply.",
      "items": {
        "anyOf": [
          { "$ref": "#/$defs/CanvasCreateActionInput" },
          { "$ref": "#/$defs/CanvasCreateAutoActionInput" },
          { "$ref": "#/$defs/CanvasUpdateActionInput" },
          { "$ref": "#/$defs/CanvasDeleteActionInput" },
          { "$ref": "#/$defs/CanvasMoveActionInput" },
          { "$ref": "#/$defs/CanvasResizeActionInput" },
          { "$ref": "#/$defs/CanvasReorderActionInput" },
          { "$ref": "#/$defs/CanvasAlignActionInput" },
          { "$ref": "#/$defs/CanvasDistributeActionInput" }
        ]
      },
      "type": "array"
    }
  },
  "required": ["actions"]
}
```

### `getCanvasState`

Read the current state of the canvas board. Returns shapes at three detail levels based on distance from the viewport or focus area.

```json
{
  "$defs": {
    "FocusAreaInput": {
      "properties": {
        "x": { "description": "Left edge x coordinate.", "type": "number" },
        "y": { "description": "Top edge y coordinate.", "type": "number" },
        "w": { "description": "Width of the region.", "type": "number" },
        "h": { "description": "Height of the region.", "type": "number" }
      },
      "required": ["x", "y", "w", "h"]
    }
  },
  "properties": {
    "focusArea": {
      "anyOf": [{ "$ref": "#/$defs/FocusAreaInput" }, { "type": "null" }],
      "default": null,
      "description": "Optional region to zoom into. Shapes inside get full detail. If omitted, uses the current user viewport."
    }
  }
}
```

**Response fields:**

- **focusedShapes** -- Full detail for shapes inside the viewport/focus area. Geo/text/note shapes include color, fill, text. Iframe shapes include `url`, `componentName`, `componentPath`, `state`. Image shapes include `src`, `altText`, `filepath`. Video shapes include `src`, `altText`.
- **blurryShapes** -- Position and basic info for shapes farther away. Iframe shapes include `componentName` and `state`. Image shapes include `src` and `filepath`. Video shapes include `src`.
- **peripheralClusters** -- Aggregated counts for distant shape groups.
- **summary** -- Quick text description of everything on the canvas.
- **viewport** -- The current visible region `{ x, y, w, h }`.

### `focusCanvasShapes`

Pan and zoom the user's canvas viewport to center on specific shapes. Only call after the user asks to see your work — except for the empty-canvas mockup exception (see "Focusing the Viewport" below).

```json
{
  "properties": {
    "shapeIds": { "description": "List of shape IDs to focus on.", "items": { "type": "string" }, "type": "array" },
    "animateMs": { "anyOf": [{ "type": "number" }, { "type": "null" }], "default": null, "description": "Optional animation duration in milliseconds for the viewport transition. Use 500 for smooth transitions." },
    "padding": { "anyOf": [{ "type": "number" }, { "type": "null" }], "default": null, "description": "Optional padding around the focused shapes in canvas units." }
  },
  "required": ["shapeIds"]
}
```

## Reading the Board: `getCanvasState`

Returns shapes at three detail levels:

- **focusedShapes** -- Full detail for shapes near the viewport or focus area. Geo/text/note shapes include color, fill, text. Iframe shapes include `url`, `componentName`, `componentPath`, and `state`. Image shapes include `src`, `altText`, and `filepath` (local file path in `.canvas/assets/`, if applicable). Video shapes include `src` and `altText`.
- **blurryShapes** -- Position and basic info for shapes farther away. Iframe shapes include `componentName` and `state`. Image shapes include `src` and `filepath`. Video shapes include `src`.
- **peripheralClusters** -- Aggregated counts for distant shape groups.
- **summary** -- Quick text description of everything on the canvas.
- **viewport** -- The current visible region `{x, y, w, h}`.

Pass an optional `focusArea` (`{x, y, w, h}`) to zoom into a specific region.

```javascript
// Read with current viewport
const state = await getCanvasState();
console.log(state.summary);
console.log(JSON.stringify(state.focusedShapes, null, 2));

// Read a specific region
const region = await getCanvasState({ focusArea: { x: 0, y: 0, w: 2000, h: 1500 } });
```

Example response:

```json
{
  "focusedShapes": [
    { "shapeId": "preview-1", "shapeType": "iframe", "x": 400, "y": 100, "w": 1280, "h": 720,
      "url": "https://example.replit.dev/preview/hello-world/Card",
      "componentName": "Card", "state": "live" }
  ],
  "blurryShapes": [...],
  "peripheralClusters": [],
  "viewport": { "x": 0, "y": 0, "w": 1920, "h": 1080 },
  "summary": "1 shape on canvas."
}
```

## Modifying the Board: `applyCanvasActions`

Send an ordered list of actions. Each action has a `type` field. Results are returned per-action with generated `shapeId` values.

```javascript
const result = await applyCanvasActions({ actions: [
  // ... action objects
] });
console.log(JSON.stringify(result, null, 2));
```

### Create Iframe

Embed live web content. Use the `state` field to manage the iframe lifecycle:

- `"building"` -- Set on create when the component or server isn't ready yet. URL is **optional** in this state -- the UI shows a building indicator.
- `"modifying"` -- Set before editing an existing component's backing file.
- `"live"` -- Set when the component is ready to display. URL is **required** in this state.

Create the iframe immediately with `state: "building"`, then update it to `"live"` once the URL is available. Use `create-auto` unless you need exact coordinates:

```javascript
// 1. Create iframe immediately -- no URL needed yet
await applyCanvasActions({ actions: [
  {
    type: "create-auto",
    shapeIds: ["app-preview"],
    names: ["App Preview"],
    shape: {
      type: "iframe",
      w: 1280, h: 720,
      state: "building"
    }
  }
] });

// 2. ... build the component / start the server ...

// 3. Update to live once the URL is ready
await applyCanvasActions({ actions: [
  {
    type: "update",
    shapeId: "app-preview",
    updates: {
      shapeType: "iframe",
      state: "live",
      url: "https://<resolved-domain>.replit.dev"
    }
  }
] });
```

**Note: `create` and `update` actions have different payload structures.**

- **Create** defines a new shape from scratch, so it takes a full `shape` object: `shape: { type: "iframe", ... }`
- **Create-auto** creates one or more iframe placeholders with automatic placement.
- **Update** patches an existing shape, so it takes a partial `updates` object: `updates: { shapeType: "iframe", ... }` -- the field is `shapeType` (not `type`) because `type` is already the action discriminator
- Do not copy the payload key from a create into an update or vice versa -- the wrong key passes validation but the action will fail when applied.

To get the URL for a Replit dev server, run `echo $REPLIT_DOMAINS` in the shell to get the domain, then construct the full URL. For the main app on port 5000, no port suffix is needed. For other ports, append `:<port>`.

- `url` -- Full `https://` URL to embed. Required when `state` is `"live"`.
- `state` -- Lifecycle state. Always set this on create and when transitioning.
- `componentPath` -- File path shown in the title bar (metadata label only).
- `componentName` -- Display name shown in the title bar (metadata label only).
- `componentProps` -- Extra props dict merged into shape props.

**To embed individual React components** (not just the full app), use the **mockup-sandbox** skill. It sets up a vite preview server where each component gets its own route at `/preview/{folder}/{ComponentName}`. Embed these URLs as iframe shapes. For example, a pricing card component at `mockup/client/src/components/mockups/pricing/Card.tsx` would be embedded with URL `https://<domain>:8000/preview/pricing/Card`.

### Create Image

Embed an image on the canvas.

From an external URL:

```javascript
await applyCanvasActions({ actions: [
  {
    type: "create",
    shapeId: "hero-image",
    shape: {
      type: "image",
      x: 0, y: 0, w: 800, h: 600,
      src: "https://example.com/hero.png",
      altText: "Hero banner image"
    }
  }
] });
```

From a local file (copy to `.canvas/assets/`, resolve domain, use port 5904):

```javascript
// First, in a shell: mkdir -p .canvas/assets && cp assets/hero.png .canvas/assets/hero.png
// Then resolve domain: echo $REPLIT_DOMAINS  (e.g. abc123.replit.dev)

await applyCanvasActions({ actions: [
  {
    type: "create",
    shapeId: "hero-image",
    shape: {
      type: "image",
      x: 0, y: 0, w: 800, h: 600,
      src: "https://<resolved-domain>:5904/hero.png",
      altText: "Hero banner image"
    }
  }
] });
```

### Align and Distribute Shapes

Prefer `create-auto` for new iframes that just need automatic placement. Use `align` (2+ shapes) and `distribute` (3+ shapes) for manual placement or cleanup.

**When to use:**

- New iframes that just need automatic placement -- use one `create-auto` action to place them together and avoid existing shapes.
- Row or column of 3+ non-iframe items you are placing together (cards, thumbnails) -- `align` one axis, `distribute` the other.
- Pair of shapes you are placing together and want to share an edge (e.g. before/after side-by-side) -- `align` only; do not `distribute` 2 shapes.
- Cleaning up a group of shapes the user already placed and explicitly asked to be lined up -- all of them will move.

**When NOT to use:** to place a new shape next to existing user content without moving that content, do not pass the existing shape into `align` -- `align` moves every shape in `shapeIds`. Read the anchor's position with `getCanvasState`, then compute the new shape's coordinates from the anchor: share the aligned axis (e.g. `y: anchor.y` for tops) and offset the other by `anchor.x + anchor.w + gap` (or `anchor.y + anchor.h + gap`) -- keep the `anchor.x`/`anchor.y` term so the new shape lands beside the anchor, not at the origin.

**Rule of thumb (3+ iframe placeholders):** if you're chaining `x3 = x2 + w + gutter`, `x4 = x3 + w + gutter`, stop -- use `create-auto`. For manual non-iframe placement, place shapes at approximate positions and line them up with `align`/`distribute` in the same batch. `align` modes: `left` snaps all shapes to the leftmost x; `right` to the max right edge; `top` to the minimum y; `bottom` to the max bottom edge; `center-horizontal`/`center-vertical` snap to the mean center.

Recipe: three mockup iframes:

```javascript
await applyCanvasActions({ actions: [
  {
    type: "create-auto",
    shapeIds: ["minimal", "bold", "playful"],
    names: ["Minimal", "Bold", "Playful"],
    shape: { type: "iframe", w: 1280, h: 900, state: "building" }
  }
] });
```

Recipe: column of cards -- align left, distribute vertically:

```javascript
await applyCanvasActions({ actions: [
  { type: "align",      shapeIds: ["card-1", "card-2", "card-3", "card-4"], alignment: "left" },
  { type: "distribute", shapeIds: ["card-1", "card-2", "card-3", "card-4"], direction: "vertical" }
] });
```

Recipe: annotate an existing shape without moving it. Search both `focusedShapes` and `blurryShapes`; on a large board the anchor can be omitted from both (overflow lands in `peripheralClusters`, which has no per-shape data), so re-query with `focusArea`. Do NOT pass the anchor into `align`, that would move it:

```javascript
const find = (s) => s.shapeId === "pricing-card";
const locate = (st) => st.focusedShapes.find(find) ?? st.blurryShapes.find(find);
let card = locate(await getCanvasState());
if (!card) card = locate(await getCanvasState({ focusArea: { x: 1800, y: 100, w: 600, h: 400 } }));
if (!card) throw new Error("pricing-card not on canvas");
await applyCanvasActions({ actions: [
  { type: "create", shapeId: "pricing-label", shape: { type: "text", x: card.x + card.w + 40, y: card.y, w: 240, h: 40, text: "Pricing card v2" } }
] });
```

Do not follow `align`/`distribute` with a manual `move` on any of the same shapes in the same batch -- it undoes the alignment. To rigidly translate a laid-out row or column (preserving gutters), read current positions via `getCanvasState` and issue one `move` per shape with the same delta applied. Re-running `align`/`distribute` recomputes the layout from scratch, not a translation.

## Focusing the Viewport: `focusCanvasShapes`

Pan and zoom the user's canvas viewport to center on specific shapes. **Only call after the user asks to see your work** -- don't auto-focus after creating or updating shapes. Finish your work and ask the user if they'd like to see it. Moving the viewport while the user is working is disorienting.

**Exception:** the `mockup-sandbox` skill overrides this when `getCanvasState` returns zero shapes — focus on the just-placed placeholders so the user sees them appear. Once any shape exists, the default rule above applies.

## Iframe Rules & Gotchas

- **Use `state` for lifecycle** -- Set `"building"` on create (URL optional), `"modifying"` before edits, `"live"` when ready (URL required).
- **URL must be `https`** -- `http` and `about:blank` are rejected.
- **Resolve the domain first** -- run `echo $REPLIT_DOMAINS` in the shell, then build the URL from the result. Never pass a literal template string as the URL.
- **Port rules:** no port suffix = port 5000 (main app). For other servers, append `:<port>`.
- **External sites may block embedding** -- sites with `X-Frame-Options: DENY` or restrictive CSP headers will show a blank iframe. Replit dev URLs work fine.
- **Never embed the main app URL for component previews** -- the main app URL shows the entire app with navigation, layout, and routing -- not an isolated component. Use the **mockup-sandbox** skill to set up a preview server, then embed `/preview/{folder}/{Component}` URLs. This gives you isolated components that can be iterated on independently. The mockup sandbox runs on port 8000 (append `:8000` to the domain).

## Typical Workflow

1. Use `create-auto` for new iframes that just need automatic placement, or call `getCanvasState()` before manual coordinate changes.
2. For manual changes, use the `summary` and `focusedShapes` to understand positions and IDs.
3. Call `applyCanvasActions` with a batch of changes.
4. **CRITICAL — Present the result.** After your final canvas action, you MUST call `presentArtifact({ artifactId, shapeIds: [...] })` with the IDs of all shapes you created or modified. This is how the user finds your work — without it, they cannot navigate to the shapes. Do NOT skip this step. Do NOT ask the user if they want to focus — just present.

## Error Codes

- `SHAPE_NOT_FOUND` -- Shape ID doesn't exist.
- `UNSUPPORTED_SHAPE_TYPE` -- Invalid shape type.
- `INVALID_PROPS` -- Bad property values (e.g., non-https iframe URL).
- `VALIDATION_FAILED` -- Shape with that ID already exists.
- `INSUFFICIENT_SHAPES` -- Not enough shapes for align/distribute.

## Best Practices

1. **Read before manual placement** -- Call `getCanvasState` before layout-sensitive x/y changes. For new iframes that just need automatic placement, use `create-auto`.
2. **Set shapeId on create** -- So you can reference, update, or delete the shape later.
3. **Always call `presentArtifact` after canvas work.** After creating or modifying shapes, pass all affected shape IDs to `presentArtifact`. Never skip this. Never ask the user if they want to see the shapes. Do NOT call `focusCanvasShapes` as a separate step (except for the narrow first-build mockup exception above).
4. **Batch actions** -- Group related changes in one `applyCanvasActions` call.
5. **Use https URLs** -- Iframe shapes reject http URLs.
6. **Label iframes** -- Set `componentPath` and `componentName` so users can identify embedded content.
7. **Use `focusArea`** -- For large boards, pass a region to `getCanvasState` to get detail where you need it.
8. **Prefer `create-auto` or `align`/`distribute` over manual coordinates** -- For new iframes that just need automatic placement, use one `create-auto` action. For manual rows or columns of 3+ shapes, add `distribute` so you don't hand-compute gutters. `align` repositions every shape in `shapeIds` (no anchor), so only pass shapes you actually want moved. To place a new shape next to existing user content, read the anchor's position with `getCanvasState` and create beside it. Do not pass the anchor into `align`.

### Iframe Sizing

Size the iframe to fit the content -- don't put small components in huge iframes (they look lost in whitespace) and don't put full pages in tiny ones.

**Content-aware defaults:**

- **Cards, forms, small components:** Use a snug frame that fits the content (e.g. 400 x 500 for a card). Center the component in the page with `flex items-center justify-center min-h-screen`.
- **Full-page mockups (desktop):** 1280 x 900 -- shows hero + start of next section, user scrolls within the iframe.
- **Full-page mockups (full view):** 1280 x 2400 -- shows entire page without scrolling (screenshot-style review).
- **Multi-page app (desktop):** 1280 x 800 -- standard app viewport.
- **Multi-page app (mobile):** 390 x 844 -- iPhone viewport.

**Responsive comparison presets** -- when showing the same component at multiple screen widths, place the iframes at approximate positions then `align` their tops and `distribute` horizontally (see "Align and Distribute Shapes"):

- Mobile: 390 x 844
- Tablet: 768 x 1024
- Desktop: 1280 x 720
