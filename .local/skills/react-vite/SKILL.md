---
name: react-vite
description: Guidelines for building React + Vite web apps in the pnpm monorepo with design subagent delegation.
---

Always follow these guidelines when building a React + Vite web application:

## Architecture

- Follow modern web application patterns and best-practices.
- If the app is complex and requires functionality that can't be done in a single request, it is okay to stub out the backend and implement the frontend first.

## Frontend

- Load the `design` skill and start an async design subagent to build the frontend. Do not give the subagent any recommendation or advice on how it should build the frontend unless requested by the user. For example, do not talk about color, font, layout, etc. the design subagent has much better taste than you

## First Build

**You must use the design subagent for every react-vite first build — no exceptions.** This applies regardless of app size, complexity, or whether a backend is needed. "No backend" means skip OpenAPI/codegen, not skip the design subagent. "Simple app" means the subagent gets a simpler brief, not that you build the frontend yourself. Never build the frontend yourself to save time — the design subagent is the fast path.

### Step 1: Classify the app

Before building, classify the app to decide how you and the DESIGN subagent split work. **The design subagent is always used** — the question is how much it owns.

- **Presentation-first** (landing pages, fan sites, portfolios, brand microsites, marketing sites): DESIGN subagent owns almost everything. No backend needed. Skip to the presentation-first workflow below.
- **Personal utility** (notes, journals, habit trackers, personal finance, mood trackers, reading lists): These are personal tools, not business tools. Treat like consumer/lifestyle — personality encouraged, micro-interactions expected. Information-density-first does NOT apply.
- **CRUD / dashboards / admin tools** (CRMs, inventory tools, internal tools, analytics dashboards): Parent agent owns product surface and backend. DESIGN subagent owns the entire frontend visual layer.
- **Logic-heavy / backend-coupled** (real-time collaboration, workflow engines, devtools, infra tools, scheduling systems): Parent agent leads backend and systems logic. DESIGN subagent still builds the frontend — it handles UI shells, components, pages, and polish.
- **Interactive visual experiences / casual games** (browser games, playful interactive scenes): DESIGN subagent strongly influences frontend, animation, and visual assets. Parent agent owns game rules, persistence, and systems logic.

### Step 2: Plan the API surface

The difference between a boring app and a great app is usually 3-5 extra endpoints in the spec. Before codegen, spend an extra minute adding safe wow endpoints beyond flat CRUD — lightweight read-only endpoints that make the app feel polished:

- Dashboard summaries (totals, grouped counts, pipeline values)
- Recent activity / timeline feeds
- Status/stage breakdowns and domain-specific aggregates
- Top/trending/pinned item queries

Skip speculative expensive features (recommendations, anomaly detection, forecasting, complex real-time presence).

This way the design subagent has real hooks for both the core app and the wow surfaces, and integration is minimal.

### Step 3: Build with maximum parallelism

Use the `pnpm-workspace` skill as the source of truth for shared monorepo rules. When you touch backend code, follow the `pnpm-workspace` skill's references:

- `references/openapi.md` for contract-first OpenAPI + codegen
- `references/server.md` for `artifacts/api-server/src/routes/` conventions
- `references/db.md` for `lib/db/src/schema/` and Drizzle guidance

#### For apps with a backend

**The design subagent is the bottleneck — everything is ordered to get it running ASAP.**

**The database is NOT a prerequisite for the design subagent.** Even when the app clearly needs a DB, do not provision a database, write schema, run migrations, or seed before launching the subagent. The design subagent depends only on the generated API client (OpenAPI → codegen → hooks) — it does not care whether the DB exists yet. All DB work happens AFTER the subagent is spawned, in parallel with its run (see step 5). Calling `createDatabase()` or any DB tool before step 4 directly delays first output for zero benefit.

1. Create the artifact.
2. Write the OpenAPI spec in `lib/api-spec/openapi.yaml` — include both core CRUD and the safe wow endpoints from Step 2. This is the **critical path** because it gates codegen which gates the design subagent.
3. Run codegen (`pnpm run --filter @workspace/api-spec codegen`)
4. Grep the exact generated exports and launch the design subagent (async), following the `design` skill's delegation rules:
    - Run `grep "^export " lib/api-client-react/src/generated/*.ts | grep -E "function use|const use|QueryKey"` and include the full list in the task description so the subagent does not guess names.
    - Pass the generated client files, the main CSS/theme file, `src/App.tsx`, `package.json`, and `.local/skills/react-vite/references/frontend_general_rules.md` via `relevantFiles` so the subagent can import and use real API hooks without wasting time exploring.
    - Pass **all** implementation skills you've read via `relevantSkills` — use the full path from the skills view for each one. Any skill with integration details (auth, storage, payments, etc.) must be forwarded so the subagent builds correctly.
    - Keep the task description SHORT: app purpose (1-2 sentences), page routes with one-line purposes, data types with fields, and the API hooks list.
    - Tell the subagent to use ALL the provided hooks. The product surface has been planned; the subagent should express it beautifully, not invent net-new features.
5. While the design subagent runs, do backend work in parallel:
    - Run `grep "^export " lib/api-zod/src/generated/api.ts` to capture the exact Zod schema names (e.g. `ListNotesQueryParams`, `CreateNoteBody`, `GetNoteParams`). Use the real names when writing routes instead of guessing based on Orval's naming conventions.
    - Provision a database if the app needs one.
    - Write DB schema in `lib/db/src/schema/`, then run `pnpm --filter @workspace/db run push`.
    - Implement API routes in `artifacts/api-server/src/routes/`, importing the exact Zod schema names from the grep above (do not guess — Orval names vary by parameter location: `QueryParams`, `Params`, `Body`).
    - Seed a small amount of example data (1-3 rows per table) so the app isn't empty on first load. Do not over-seed.
    - For seed data images that don't come from a real API, use `generate_image` instead of placeholder services (DiceBear, Boring Avatars, Unsplash, Lorem Picsum, etc.). Real API image URLs (e.g. PokéAPI sprites, TMDB posters) are fine. It's okay not to seed object storage.
    - You can also ask the design subagent to generate images/video as part of its task — it has access to `generate_image`, `generate_video`, and `stock_image`.
**Note: All DB schema/definition/seeding and backend development work MUST happen only after the design subagent has been spawned. Do not front-load any of it.**
6. After your backend development process is done. wait for the design subagent to finish.
   Note: Do not restart the frontend workflow until the design subagent is done otherwise it will show a broken app, you can restart the API one if needed.
7. Fix any integration issues (restart workflow and refresh logs).
8. Present the artifact — show it to the user.
9. Call `suggestDeploy()` — prompt the user to publish their app so it's live and accessible.

#### For presentation-first apps (no backend)

No OpenAPI, no codegen. Launch the design subagent immediately.

If the user is creating a site for a real company, or wants to match an existing company/site, gather context before launching the design subagent: use `extractBranding` for brand tokens, fall back to `imageSearch` via the `image-search` skill when you need a cleaner or missing logo, use `webFetch` on the homepage, about page, or key product pages for real messaging, and use external-URL `screenshot` when the visual feel of the source site matters. Pass the distilled brand and product context into the brief, not raw tool output. When passing brand context, include colors, typography, and images.
If `extractBranding` and/or `imageSearch` gave you images, download each usable image into the workspace before launching the design subagent. Pass the local file paths via `relevantFiles` and include a `Brand assets` block in the task that labels each file (logo, favicon, OG image, etc.), where it came from, and what it should be used for.
Never pass image URLs or vague references as the only handoff; if an image is not downloaded to a workspace file and identified in the task, treat it as unavailable.

1. Create the artifact and read the `design` skill
2. Launch the design subagent (async) immediately — no codegen step needed. Follow the `design` skill's presentation-heavy delegation rules:
    - Pass the main CSS/theme file, `src/App.tsx`, branding images, and `package.json` via `relevantFiles`.
    - Provide a vivid brand identity, the pages to build, and any downloaded brand asset labels and local paths.
3. Present the artifact when the subagent finishes.
4. Call `suggestDeploy()`.

### Important notes

- The design subagent will be a bottleneck — it takes time to build the frontend so launch it as soon as codegen is complete
- After the frontend build finishes, if this is part of a multi-artifact project, extract the design tokens from the generated `src/index.css` (colors, fonts, radius) and store them for use in subsequent artifacts (expo, slides, etc.). This ensures all artifacts share the same visual identity. See `multi-artifact-creation.md` "Visual Consistency" section.
- Do not read unnecessary files. When building this artifact, you are not building the frontend so reading the generated react hooks is a waste of time and context
- After presenting the artifact, call `suggestDeploy()` so the user knows their app is ready to publish
- Follow the service access and routing rules from the `pnpm-workspace` skill.
- If the app is being transitioned from a mockup the user made using the canvas, use what the user created to build the react-vite application directly
- **WebSocket proxy path**: If the app uses WebSockets, the WS path (e.g. `/ws`) must be listed in `artifact.toml`'s `paths` array alongside the REST API path. The proxy only forwards explicitly listed paths — unlisted WS paths are silently dropped and the server never sees the connection.
- After each OpenAPI spec change, re-run codegen before using the updated types.

## SEO

There is a full SEO implementation guide in `.local/skills/react-vite/references/seo.md`. Read it when building or optimizing pages for search engine visibility. At minimum, ensure every page has a unique title tag, meta description, and Open Graph tags.
