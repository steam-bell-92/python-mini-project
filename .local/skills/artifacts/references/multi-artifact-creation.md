# Multi-Artifact Creation

Read this reference when the user's request requires building multiple artifacts. It covers sequencing, parallelism, and common pitfalls.

## Core Principle

Never be idle — maximize parallelism by filling every wait window with productive work.

## Sequencing

### Phase 1 — Foundation

1. Write the OpenAPI spec covering ALL planned artifacts upfront — this is the single source of truth for every artifact's API contract. Include both core CRUD and safe wow endpoints — lightweight read-only endpoints that make the app feel polished (dashboard summaries, recent activity, grouped counts) — so the design subagent has real hooks for both the core app and the wow surfaces.
2. Run codegen, then create the first artifact — `createArtifact()` will guide you to the artifact's skill with build instructions.
3. Some artifact types (like react-vite) launch an async frontend build that creates an idle window. If you have an idle window, use it to build the shared backend for ALL planned artifacts in one pass. Other artifact types are built synchronously — expo can be delegated to a general subagent (`startAsyncSubagent`) or built directly in the main loop, then you move on.
4. If you know upcoming artifacts will need generated images (slide images, app icons, etc.), kick off that async generation now rather than waiting until you start building those artifacts. Image generation runs in the background and should overlap with other work.

### Phase 2 — Next artifact

- If you have an idle window from Phase 1 (async frontend still running), create the next artifact and build it now. This fills the wait time with productive work.
- If there is no idle window (first artifact was built synchronously), simply move on to the next artifact after completing the first.
- Read the artifact's skill only when you start building it — not earlier. Skills are large and will consume context you need for the current build.
- Repeat until all artifacts are built.

### Phase 3 — Converge and present

- If any async frontend build is still running, wait for it and fix any issues (missing imports, broken references).
- Finalize any remaining work on all artifacts.
- Restart all artifact workflows in a single parallel batch — not one at a time.
- Check logs after restarting to catch issues before presenting to the user.
- Present all artifacts to the user and call `suggestDeploy()`.

## Ordering Rule

When choosing which artifact to create first, prefer the one with an async frontend build — this maximizes the idle window available for building other artifacts and the shared backend. Currently, `react-vite` and `data-visualization` are the artifact types with an async frontend build (async design subagent). All other types (expo, slides, video-js) are built synchronously.

## Batching

Batch independent operations **within the same artifact** into parallel tool calls:

- Write multiple files for the same artifact in one batch instead of separate calls.
- Read multiple files in one batch when you need context from several files.
- Restart all workflows in parallel, not one at a time.
- Batch image generation calls together when you need multiple images.

**Do NOT build two artifacts simultaneously.** Build one artifact completely, then move to the next. The only reason to start the next artifact before finishing the current one is if you are idle waiting for an async build (like the async design subagent) to complete.

## Visual Consistency

When building subsequent artifacts, carry over brand context from earlier artifacts — colors, fonts, theme, branding — so all artifacts feel visually cohesive. For example, if delegating a video to a design subagent, pass the website's theme/colors so the video matches.

**Design tokens:** After the first artifact's frontend is built, read its `src/index.css` (or `constants/colors.ts` for Expo) to extract colors, fonts, and radius, then sync them into the new artifact's equivalent config files before building its UI. The expo skill's `design_and_aesthetics.md` reference has the full process.

**Image assets:** Before building a new artifact that represents the same product, copy brand and product images from the existing artifact. Do not let the new artifact use generated placeholders when real images already exist:

```sh
# From web → mobile
cp -r artifacts/<web-name>/src/assets/* artifacts/<mobile-name>/assets/images/

# From mobile → web
cp -r artifacts/<mobile-name>/assets/* artifacts/<web-name>/src/assets/
```

Each artifact owns its own asset directory because Metro (Expo's bundler) cannot resolve files outside the artifact root without extra `watchFolders` config — so copying is required rather than sharing. Reference copied images in each artifact using its own `@/` alias.

## Design Subagent Limitations

The design subagent is effective for react-vite frontends, mockup sandboxes, and media generation (images, videos), and is useful for design iterations after an initial build. However, it cannot produce good results for:

- **React Native / Expo UI** — do not use the design subagent for Expo. Build Expo frontends via `startAsyncSubagent` (general subagent) or directly in the main loop.
- **Slides** — build slide content directly in the main loop

Only delegate to the **design** subagent for artifact types where it is effective (check the artifact's skill for guidance). Note: `startAsyncSubagent` (used in artifact examples) is a general-purpose subagent, not the design subagent — it is fine for Expo builds.

## Avoiding Wasted Work

- **Don't load artifact skills upfront.** Avoid reading artifact skills (slides, video-js, expo, react-vite, etc.) until you are actively building that artifact. Each skill is large and loading multiple skills at once will fill your context with instructions you can't act on yet. Read each skill just-in-time — when you start building that artifact.

- **Don't read files exploratorily.** Avoid reading scaffolded files that you won't use (e.g., ErrorBoundary, ErrorFallback). Only read files you need for the work you're doing right now.

## Example — Web App + Mobile App

1. Create react-vite artifact first (its skill uses an async frontend build, creating an idle window) → OpenAPI (covering BOTH web + mobile) → codegen → launch the async frontend build
2. While the async frontend build runs: build all shared backend routes for both artifacts → create expo artifact (scaffolding only, not UI)
3. Async frontend build finishes → extract design tokens from the generated `src/index.css` (colors, fonts, radius) → sync tokens into the expo artifact's `constants/colors.ts`, `app.json`, and fonts
4. Build the expo frontend using the synced tokens
5. Fix any integration issues → restart all workflows in parallel → check logs → present both

## Critical Rules

- Write the OpenAPI spec and shared backend to serve ALL planned artifacts from the start — do not make separate backend passes per artifact.
- Do NOT create the next artifact until the shared backend is complete (Phase 2). The backend must be in place before building the next artifact's frontend.
- Do NOT read skills for future artifacts early — only read each artifact's skill when you start building it. Loading all skills upfront wastes context and degrades quality.
- At least one artifact MUST use `previewPath: "/"`. If no artifact is at the root path, users will see a blank page when they open the project. Assign `/` to the most important user-facing artifact.
