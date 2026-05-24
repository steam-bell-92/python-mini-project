---
name: design
description: Delegate frontend design work to a specialized DESIGN subagent. Use for fullstack apps, mockup sandboxes, and variant exploration via startAsyncSubagent or subagent.
---

# Design Skill

This skill is for YOU (the main agent) to delegate frontend work to a DESIGN subagent. The design subagent has its own built-in design doctrine — you do not need to teach it how to design. Your job is to give it a rich creative brief describing WHAT to build and WHO it's for, then let the subagent make all visual decisions.

## How to Launch

You MUST include `specialization: "DESIGN"`. Without it, a general subagent is created instead.

### For initial builds (async, runs in background):

```javascript
await startAsyncSubagent({
    task: "...",
    specialization: "DESIGN",
    relevantFiles: [...],
    relevantSkills: [".local/skills/clerk-auth/SKILL.md", ".local/skills/object-storage/SKILL.md"]  // ALL implementation skills you read — use paths from the skills view
});
```
## Task Modes

<design_subagent_guidance>

### Fullstack apps (react-vite with backend)

What to include in the task (keep it short):
- The app's purpose and domain in 1-2 sentences.
- A list of pages with routes and a one-line purpose each (e.g. "/customers — manage customer records"). Include supporting screens (auth, onboarding, settings) in the page list — don't leave them as afterthoughts. Do NOT describe what UI elements belong on each page.
- The data types and their fields.
- The exact list of available API hooks (from codegen grep) and their signatures — this should include both core CRUD hooks and the safe wow hooks you planned.
- Tell the subagent it has full creative freedom over presentation — layout, colors, typography, hierarchy, motion, component choices are all its decision.
- Always include: "Do not use emojis anywhere in the UI"
- Tell the subagent to use ALL the provided hooks. The product surface has been planned by the main agent; the design subagent should express it beautifully, not invent net-new features beyond it.
- For presentation-heavy applications (landing pages, portfolios, fan sites, showcase pages), keep the brief minimal: product identity, vibe, and relevant files. Do NOT describe page sections, layout, or content order — the design subagent decides all of that. Just state the goal and express the vibe in natural language (e.g. "this should feel warm and inviting, like a neighborhood café"). Do NOT use technical design terms or name specific design styles.

What NOT to include:
- Do NOT describe what goes on each page — no "stats cards", "bar charts", "kanban boards", "tabs", "sidebar with icons", "form modals". The design subagent decides all UI patterns.
- Do NOT dictate colors, fonts, aesthetics, or describe the visual feel. The domain context is enough. Exception: Presentation heavy applications should have a visual feel.
- Do NOT pass OpenAPI specs or react-vite skill references via relevantFiles. DO pass the generated client files (hooks, schemas) so the subagent can wire up real API calls. Exception: data-visualization reference files (layout specs, chart patterns) SHOULD be passed — the subagent needs them.
- Do NOT let the subagent invent net-new modules, entities, routes, or workflows beyond the planned product surface.

First-build trust policy:
- Everything the user clicks in the first minute should work with real data: navigation, CRUD flows, form submission, list/detail pages, search/filter.
- The wow features (dashboard summaries, activity feeds, analytics views) should also be real because you planned them in the spec. This is why the richer spec matters.
- Do NOT fake trust-critical behavior: primary save/send/purchase/auth flows, obvious persistence, or anything the user naturally expects to work.

### Mockup sandbox (prototypes, design explorations, variant exploration)

No backend, no API hooks, no codegen. The subagent builds standalone visual components or pages.

What to include in the task:
- The product/brand identity in 1-2 vivid sentences — who it's for, what it feels like.
- The goal (e.g. "a landing page for a jewelry brand", "a pricing comparison page").
- A vibe direction in natural language. This is required for mockups — unlike fullstack apps, mockups have no data to anchor them so the vibe IS the brief. Describe the feeling you want (e.g. "cozy and handcrafted", "bold and confrontational", "serene and spacious"). Do NOT name specific design styles — the subagent will translate your vibe into a concrete aesthetic.
- The target file path, shape ID, and dev server URL (from the mockup-sandbox skill setup).
- For variant tasks, give each subagent a distinct vibe — don't give all variants the same brief.

What NOT to include:
- No API hooks, no data types, no backend references — there is no backend.
- Do NOT prescribe specific CSS values, exact colors, font names, or pixel-level spacing. Give a feeling, not a spec.
- Do NOT describe page sections, layout structure, or content order (e.g. no "hero section, then features grid, then testimonials"). The design subagent decides what sections exist, how they're ordered, and how content flows. Just state the goal and vibe.

</design_subagent_guidance>

## Ground the Brief with Real Site Inputs

If the user provides a real company/site URL, or asks you to create a site for an existing company, gather a little context before delegating:

- Use `extractBranding` to capture colors, fonts, and other brand cues from the official site. When passing brand context, include colors, typography, and images.
- If `extractBranding` gave you images, download each usable image into the workspace before launching the subagent. Pass the local file paths via `relevantFiles` and include a `Brand assets` block in the task that labels each file (logo, favicon, OG image, etc.), where it came from, and what it should be used for.
- If `extractBranding` does not give you a usable logo, use `imageSearch` via the `image-search` skill to look for `"<company> logo png"` or `"<company> logo transparent"`, preferring official domains and press or brand asset pages. Download the best logo candidate into the workspace, pass the local file path via `relevantFiles`, and label it as the logo in the `Brand assets` block.
- Use `webFetch` on the homepage, about page, or key product pages to pull real messaging, product language, and positioning.
- If the visual feel of the source site matters, use external-URL `screenshot` for quick visual reference.

Pass only the distilled brand and copy context into the brief. Do this before delegating — the DESIGN subagent cannot call these callbacks itself. Do not paste raw tool output or turn this into layout instructions — the DESIGN subagent still decides structure and visual execution. Never pass image URLs or vague references as the only handoff; if an image is not downloaded to a workspace file and identified in the task, treat it as unavailable.

## Writing the Creative Brief

Write a creative brief directly in the `task` field. This is the most important part — the design subagent builds its entire visual direction from your brief. A lazy brief produces a generic UI, but an over-specified brief produces a constrained, predictable one.

**Every brief MUST include a product identity sentence** — one specific sentence describing who the user is, what using the app feels like, and what makes it distinct from a generic version of itself. This applies to ALL app types, not just presentation-heavy ones.
- Good: "A quiet personal space for thinking, like a notebook you actually want to open"
- Good: "A neighborhood coffee tracker for obsessive home baristas who weigh every gram"
- Bad: "A clean notes app"
- Bad: "A simple habit tracker"

### For presentation-heavy apps (landing pages, portfolios, fan sites, showcase pages, brand sites)

These are the SIMPLEST briefs. The design subagent has the most creative freedom here. Your brief should be SHORT — just the user's request, the product identity, the vibe, and a broad scope hint. Do NOT describe specific sections, layout, content order, or structure. The design subagent decides all of that. Always end with emotional charge — these apps live or die on visual impact.

You CAN and SHOULD tell the subagent broadly how rich the page should be — e.g. "build a full, rich page with 6-8 sections" or "this should be a substantial, scroll-worthy experience" — without naming or describing those sections. Give the shape, not the contents.

**Good brief:**
> Build a landing page for "Maison & Co." — a luxury furniture studio in San Francisco's SoMa district. They craft bespoke, heirloom-quality pieces for architects and designers. Think converted warehouse with warm amber lighting, raw concrete, and walnut pieces displayed like sculpture. The user wants it to feel like stepping into a luxury atelier — unhurried, tactile, and confident.
>
> This is a single-page app — no backend. Build a full, rich page with 6-8 sections — you decide what they are. Generate product images using generate_image. Use tasteful scroll animations.
>
> You are capable of extraordinary creative work. Don't hold back. Real people will land on this page and decide in 3 seconds whether this studio is worth their time. Make those 3 seconds count. Don't play it safe — safe is forgettable.

**Bad brief** (too prescriptive — all of this should be the design subagent's decision):
> ~~Include a hero section, then a featured collection with 4-6 products, then a "Process" section showing Consultation → Design → Craft → Delivery, then testimonials, then a contact form, then a footer with address and social links. Use warm neutral palette, generous whitespace, strong typography hierarchy, cinematic feel.~~

The bad brief dictates page structure, section names, content order, palette direction, and typography approach. That's the design subagent's job. You provide the product identity, vibe, scope ("6-8 sections"), technical constraints, and what the user explicitly asked for — but never the section details.

### For fullstack apps (CRUD, dashboards, data-driven)

1. Product identity (required) — Describe the product in vivid, specific terms. (2 lines max.)
   - Good: "A coffee roaster called Sightglass in San Francisco's SoMa district, serving obsessive single-origin pour-overs to designers and engineers. The brand is precise but not pretentious — workshop aesthetic, not luxury retail."
   - Bad: "A coffee shop website."
2. Vibe (strongly encouraged) — Even utility apps need a feeling. Express it as a sensory description, not a product name or design style. One sentence is enough.
   - "Feels tight, fast, and confident — like a cockpit where every control is exactly where you expect it"
   - "Calm and spacious — breathing room between elements, nothing competing for attention"
   - "Dense and information-rich — every pixel earns its place, no wasted space"
   - "Warm and approachable — like a tool built by a small team that genuinely cares"
3. Pages and structure (required) — List routes with one-line purposes:
   - `/dashboard` — overview of active projects and recent activity
   - `/customers` — searchable list of customer records
   - `/settings` — account and team configuration
4. Data types (required) — Fields and relationships the UI needs to display and manipulate.
5. API hooks (required) — The exact grep output of available hooks and queryKey helpers so the subagent integrates correctly.
6. User's visual preferences (only if stated) — Pass verbatim, prefixed with "The user wants".

Do NOT add your own visual opinions. Do NOT say "use a sidebar", "use cards", "make it minimal", or prescribe layouts, colors, typography, spacing, or page sections. Do NOT name specific design styles. Express vibes in plain language if relevant. The design subagent owns all visual and structural decisions. Your job is product context, not art direction.

### For mockup sandbox

1. Brand identity (required) — The product/brand in 1-2 vivid sentences — who it's for, what it feels like.
2. What to build (required) — The goal (e.g. "a landing page for a jewelry brand", "a pricing comparison page").
3. Vibe direction (required) — Describe the feeling in natural language. Express it as a feeling, not a design style name (e.g. "feels like a luxury hotel lobby", "raw and energetic like a punk show flyer", "calm and spacious like a Japanese garden").
4. Target location (required) — The target file path, shape ID, and dev server URL (from the mockup-sandbox skill setup).
5. Variant hypothesis (when running variants) — Give each subagent a distinct vibe — don't give all variants the same brief.

Do NOT prescribe specific CSS values, exact colors, font names, pixel-level spacing, or page section structure. Do NOT name design styles. Give a feeling, not a spec.

## Emotional Tone by App Type

The design subagent responds strongly to emotional charging in the brief. Calibrate the intensity to the app type — too much push on a spreadsheet app produces chaos, too little on a landing page produces blandness.

**Presentation-heavy** (landing pages, portfolios, fan sites, brand sites, showcase pages):
- Always include this line verbatim: **"You are capable of extraordinary creative work. Don't hold back."**
- Then add 1-2 lines of emotional charge on top — make the subagent feel the stakes. Real people, real first impressions. Examples:
  - "Real people will land on this page and decide in 3 seconds whether to stay or leave. Make those 3 seconds count. Don't play it safe — safe is forgettable."
  - "Someone is going to send this link to a friend. Make it worth sharing. Reject mediocrity — no generic layouts, no stock patterns, no safe choices."
  - "This is the first thing a customer sees. It should stop them mid-scroll. Push beyond the obvious choice — the safe version of this page already exists everywhere."
- Vary the additional charge each time — don't repeat the same line across projects.
- Tell the subagent to use tasteful animations and transitions — scroll-triggered reveals, staggered entrances, smooth hover states, parallax effects. These pages are experienced, not just read. Motion is part of the design.
- Keep the brief short — product identity, vibe, technical constraints, emotional charge. Nothing else.

**Personal utility** (notes, journals, habit trackers, personal finance, mood trackers, reading lists):
- Same energy as consumer/lifestyle. These are personal tools, not business tools — they should feel like something you want to open, not something you have to use.
- Add something like "This is someone's personal space — it should feel inviting and intentional, not clinical."
- Encourage micro-interactions — satisfying check-offs, smooth transitions, thoughtful empty states. Information-density-first does NOT apply — breathing room and personality matter more.
- The subagent should make it feel crafted and personal, not like an admin panel with rounded corners.
- **"Calm" does not mean colorless.** Personal utility apps are especially prone to getting stripped of color when the vibe is "quiet" or "focused." Tell the subagent explicitly: "Use real color derived from the product's identity — not gray/white emptiness. Calm means the color is soothing, not that it's absent."

**Consumer/lifestyle** (social apps, marketplaces, booking platforms, fitness trackers):
- Moderate push. Add something like "This app should have a personality — don't make it look like a template/bland."
- Personality and usability both matter. The subagent should be distinctive but not at the expense of clarity.
- Encourage thoughtful micro-interactions — smooth page transitions, satisfying feedback on actions (like, favorite, add-to-cart, save), polished onboarding flows. These apps compete on feel.

**Productivity/business tools** (dashboards, CRMs, admin panels, internal tools):
- Light emotional charging. Set the tone: "Prioritize clarity and polish — but this should still feel like a product someone chose, not a tool they were assigned. Users spend hours here; reward that with thoughtful details."
- Include guidance on information density: "Optimize for information density — users want to see data at a glance, not hunt through pages. Dense but organized, not sparse."
- The subagent should focus on legibility, spacing, visual hierarchy, and scanability — but still make a deliberate color choice, pick a distinctive font pairing, and add subtle polish (smooth transitions, satisfying hover states, well-crafted empty states). Professional does not mean lifeless.


## Color

Every app must make a deliberate color choice — no exceptions. When writing the brief, never leave color to chance:
- Tell the subagent to derive its palette from the product's domain and identity, not from generic defaults.
- "Calm" and "quiet" vibes must still produce real color — soothing tones, not gray emptiness. If the vibe is calm, say so explicitly: "calm means restful color, not absence of color."
- For every app class, include a nudge: "Make a bold, deliberate color choice that someone would remember after closing the tab."
- Never accept pure white backgrounds with gray text as a finished palette. That's a wireframe, not a product.

## Micro-interactions & Motion

Always tell the subagent to invest in micro-interactions and transitions — these are what make an app feel alive:
- Smooth page transitions and screen-to-screen blurs
- Satisfying feedback on actions (check-offs, saves, deletes, favorites)
- Staggered entrance animations on list and card views
- Hover states that feel intentional, not just color swaps

## Supporting Screens

Nobody likes boring auth screens, logout pages, or onboarding flows. Tell the subagent explicitly: supporting screens (login, register, forgot password, settings, error pages, empty states) deserve the same creative energy as the main app. A beautifully designed dashboard with a generic white login page tells the user the polish is superficial. These screens set and close the experience — make them memorable.

## What to Pass via relevantFiles and relevantSkills

For fullstack apps, always pass via `relevantFiles`:
- Generated client files (workspace root: `lib/api-client-react/src/generated/api.ts`, `lib/api-client-react/src/generated/api.schemas.ts`)
- Main CSS/theme file (`artifacts/<slug>/src/index.css`)
- Scaffold entry point (`artifacts/<slug>/src/App.tsx`) — so the subagent knows the existing router setup and doesn't guess
- Artifact's `package.json` (`artifacts/<slug>/package.json`) — so the subagent knows available dependencies
- Shared frontend conventions (`.local/skills/react-vite/references/frontend_general_rules.md`)

Pass **all** implementation skills you've read via `relevantSkills` — every skill with integration details (auth, storage, payments, etc.) must be included so the subagent builds correctly. Use the full path from the skills view for each one. Do NOT pass orchestration skills that are instructions for you (design, delegation, react-vite, pnpm-workspace). Do not regurgitate skill contents in the task description.

For mockups, pass:
- The mockup folder's `_shared/` files (if multi-page with shared layout)
- Any existing component files the subagent should be aware of
- Do NOT pass generated client files — they don't exist in mockup sandbox

## Hook Integration Rules

Important: Include these in the task description so the design subagent integrates correctly:

- Import hooks from `@workspace/api-client-react`, never from relative paths
- Create all new files BEFORE importing them
- Hooks return `T` directly (not wrapped)
- Query hook options pattern: `useGetThing(id, { query: { enabled: !!id, queryKey: getGetThingQueryKey(id) } })`
- Only import what you use — unused imports break TypeScript builds

Before launching, grep exact hook names:
```
grep "^export " lib/api-client-react/src/generated/*.ts | grep -E "function use|const use|QueryKey"
```

## Subagent Capabilities

Can do:
- File operations for reading and editing project files
- Package management when dependencies need to be installed
- Image generation/video generation/stock image search
- Web search and web fetch when enabled
- Canvas tools when operating in mockup sandbox or other canvas-enabled design flows

Cannot do (your job as main agent):
- Run or restart workflows
- Preview or test the app
- Spawn nested subagents
- Check workflow/console logs