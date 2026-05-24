---
name: mockup-extract
description: "Use when the user wants to pull an existing component from their main app onto the canvas — whether to redesign it, create variants, or simply display it as a visual reference. Also activate when the user asks to redesign, improve, or create variants of any UI that already exists as code in the main app, even if they don't explicitly say 'extract' — the real source code must be used as the starting point, never hand-coded approximations. Copies the component and its dependencies into the mockup sandbox, rewrites imports, stubs external dependencies, and embeds the result as an iframe on the canvas. Activate when the user says 'put my X on the canvas', 'show my current Y on the board', 'redesign my existing Z', 'create variants of my current W', 'improve my Y', or wants to see or iterate on something already in the app."
---

# Mockup Extract Skill

Pull an existing component from the main app into the `mockup/` sandbox so it can be previewed on the canvas and used as a starting point for design iteration.

## When to Use

Activate this skill when the user:

- Wants to see an existing component on the canvas as a visual reference ("show my homepage on the board", "put my current settings page on the canvas")
- Wants to redesign an existing component ("redesign my navbar", "redo my pricing page", "improve the onboarding flow")
- Wants to create variants starting from an existing component
- Needs to compare their current design against new alternatives

**Important:** This skill must also be activated implicitly when the user asks to redesign, improve, or create variants of something that already exists as code in the main app — even if they don't say "extract". If the component exists in the codebase, extract it first. Never rebuild an existing component from scratch by hand-coding approximations; you will get exact dimensions, colors, spacing, opacity values, and other details wrong. The real source code has the correct values.

## Subagent Guidance

If you need to parallelize extraction (e.g., extract multiple components at once), use a **GENERAL** subagent — never a DESIGN subagent. Extraction is an engineering task (import graph tracing, dependency stubbing, path rewriting) that requires codebase navigation, not creative visual output.

## Prerequisites

The mockup sandbox must be set up first. If `mockup/` doesn't exist, activate the {{skill("mockup-sandbox")}} skill to set it up before proceeding.

## Do Not Iframe the Main App Directly

When the user asks to "show my component on the canvas" or "redesign my navbar," do **not** create an iframe pointing at the main app's dev server URL. This is the wrong approach because:

- It shows the entire app (navbar, sidebar, footer, routing), not the target component in isolation
- You cannot create independent design variants from it
- Clicking links or buttons inside the iframe navigates away from the component
- Editing the main app code changes the iframe live, making it impossible to compare before/after

Instead, always extract the component into the `mockup/` sandbox and embed the sandbox's `/preview/` URL.

## Process

### Step 1: Locate and read the target component

Ask the user which component to extract if it isn't clear. Read the component file and understand its structure and imports.

### Step 2: Analyze the dependency tree

Read the target component and trace every import. Classify each dependency:

| Category | When | Action |
|---|---|---|
| **Inline** | Small sub-components, simple hooks, utility functions (<50 lines) | Copy the code directly into the mockup file |
| **Copy** | Larger shared components, complex hooks, asset files | Copy into `mockup/src/` with updated import paths |
| **Stub** | Context providers, API calls, routing, auth, global state | Replace with static mock data or no-op wrappers |

Walk the full import chain -- a component may import a hook that imports a context that imports an API client. Trace until you reach leaf dependencies or hit a stub boundary.

### Step 3: Handle external dependencies

For dependencies that can't transfer cleanly:

- **API calls / data fetching:** Replace with hardcoded mock data matching the response shape. Use realistic values.
- **Context providers (auth, theme):** Inline the values as constants.
- **Routing (`useNavigate`, `Link`, `useParams`):** Replace with no-ops or static values.
- **Global state (Redux, Zustand):** Extract the relevant slice as a local `useState` or constant.

### Step 4: Rewrite import paths

`@/` resolves to different roots in the main app vs the sandbox:

- Main app: `@/` → `client/src/`
- Sandbox: `@/` → `mockup/src/`

Every `@/` import must point to a file that exists under `mockup/src/`. If the imported file doesn't exist in the sandbox, either copy it there or inline it. `@/components/ui/*` imports work without changes (shadcn/ui is pre-installed).

### Step 5: Create `_group.css` and the mockup component

The main app's global styles are invisible to Step 2's import trace — they live in `index.html` `<link>` tags and global CSS, not in any `import` statement. Collect them into a group-level stylesheet that every component in this group will explicitly import.

Create `mockup/src/components/mockups/{group}/_group.css` with everything the app applies globally:

- **CSS variables** — copy the `:root` and `.dark` blocks from the main app's `client/src/index.css` so semantic classes like `bg-background` and `text-foreground` resolve to the app's values, not the sandbox defaults.
- **External font links** — read the main app's `client/index.html` for `<link href="https://fonts.googleapis.com/...">` (or Adobe Fonts, etc.) and convert each to `@import url("...");` at the top of `_group.css`.
- **`@font-face` declarations** — if the main app self-hosts fonts, copy the `@font-face` blocks and the font files they reference.

Do **not** edit the sandbox's global `index.css` — that leaks this app's tokens into every unrelated mockup group. Do **not** add font `<link>` tags to `mockup/index.html` — that file is shared across all mockup groups, so app-specific fonts would load for every unrelated preview. The sandbox already pre-loads a large common font bundle there; put any additional app-specific fonts in `_group.css` via `@import` to keep them scoped to this extraction.

Then create `mockup/src/components/mockups/{group}/Current.tsx`:

```tsx
import './_group.css';

export function Current() {
  // ... extracted component
}
```

The `_group.css` import loads after the plugin's base `index.css` import, so its rules win by normal cascade order. Every variant you create later (`VariantA.tsx`, `VariantB.tsx`) also imports `./_group.css` to inherit the same baseline. A variant that needs to diverge adds a second import for its own sibling CSS file.

Use a descriptive group name (e.g., `navbar-redesign/`). Export a single component per file; named or default exports both work. Use `min-h-screen` on the root element.

### Step 6: Type-check, embed, and create variants

Type-check with `cd mockup && npm run check`. Embed on the canvas using the sandbox `/preview/` URL (see {{skill("mockup-sandbox")}} for iframe creation). Label it "Current", then create new variant files alongside it.

## Guidelines

- **Prefer inlining over copying.** Fewer files = easier iteration. Inline anything under ~50 lines.
- **Keep mock data realistic.** Visual fidelity depends on it.
- **Don't import from the main app.** Every import must resolve within `mockup/src/`.
- **Preserve the visual output exactly.** The extracted component should look identical to the original.
- **Copy assets first.** Images and icons must exist in `mockup/` before the component references them.

## Common Mistakes

- **Leaving `@/` imports pointing to main app files.** Every `@/` path must resolve under `mockup/src/`.
- **Forgetting nested dependencies.** Trace the full import chain — component → hook → context → API client.
- **Not stubbing side effects.** API calls, analytics, and router navigations will crash in the sandbox.
- **Copying too much.** Extract only what the target component needs.
- **Editing the global `index.css` instead of creating `_group.css`.** The extraction's tokens leak into every other mockup group in the sandbox.
- **Forgetting `import './_group.css'` in the component file.** Without it the component renders with sandbox defaults, not the app's tokens. No error — it just looks wrong.
- **Adding font `<link>` tags to `mockup/index.html`.** That file is shared across all mockup groups — app-specific fonts leak into every unrelated preview. Put fonts in `_group.css` via `@import` instead to keep them scoped to this group.
- **Assuming fonts loaded because nothing errored.** Missing fonts fall back silently — no console error, no build failure. The component still renders, just with the wrong stroke weight, character width, and spacing. Verify typography visually against the original; "it didn't crash" is not "it looks right."
