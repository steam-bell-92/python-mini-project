<first_build>
When building a new animated video for the first time, follow this exact sequence. Do not deviate.

## What the scaffold provides

These files are already opened in your context after `createArtifact()` returns. Do NOT re-read them:

- `src/components/video/VideoTemplate.tsx` -- template with placeholder ReplitLoadingScene, `useVideoPlayer` hook wired up
- `src/lib/video/hooks.ts` -- `useVideoPlayer` and `useSceneTimer` hooks (DO NOT MODIFY -- recording/export depends on exact implementation)
- `src/lib/video/animations.ts` -- 40+ animation presets (springs, easings, scene transitions, element animations, kinetic typography variants)
- `src/lib/video/index.ts` -- barrel export of hooks and animations
- `src/index.css` -- Tailwind imports + CSS variables for colors and fonts (subagent will customize)
- `index.html` -- HTML shell with Google Fonts preloaded
- `src/main.tsx` -- React entry point

Pre-installed packages (do NOT install these): `framer-motion`, `gsap`, `@react-spring/web`, `three`, `@react-three/fiber`, `@react-three/drei`, `lucide-react`, `tailwindcss`, `clsx`, `tailwind-merge`, `lottie-react`.

## Build sequence

Execute these 4 steps in order. No additional steps.

### Step 1: Delegate to DESIGN subagent

Call `subagent()` (synchronous -- blocks until complete). Pass the user's request exactly as-is, prefixed with the skill reference. Do NOT add creative direction, color guidance, typography choices, or any other prescriptive instructions.

```javascript
const result = await subagent({
    task: `You are the subagent executing this task, see the skill: .local/skills/video-js/SKILL.md\n\n${userRequest}`,
    specialization: "DESIGN",
    relevantFiles: [".local/skills/video-js/SKILL.md", ".local/skills/video-js/references/finalize_playback.md"]
});
```

The design subagent handles everything: creative direction, asset generation (images, video clips, stock photos), scene building, CSS theming, validation (`validate-recording.sh`), and finalization (frame containment, loop integrity). You do not verify or fix its output.

### Step 2: Restart the workflow

```javascript
await restart_workflow({ name: "artifacts/<slug>: web" });
```

### Step 3: Check logs for errors

```javascript
await refresh_all_logs();
```

Read the workflow logs. If there are build errors (missing imports, syntax errors, etc.), fix them and restart the workflow again. If the logs are clean, proceed to step 4.

### Step 4: Add scene selectors (main agent only -- do not delegate)

After the design subagent has finished and workflow logs are clean, add an interactive control bar at the bottom of the video so the viewer can jump between scenes and toggle scene-lock. The bar renders only when the video is inside an iframe (the Replit preview pane). The exporter launches the video as the top-level document, so the gate hides the bar during export and the exported frame stays clean.

Follow `.local/skills/video-js/references/scene_selectors.md` exactly. Do NOT delegate this step to any subagent. Do NOT add details about scene selectors to any subagent task description. The design subagent must never be informed that scene selectors exist.

`scene_selectors.md` owns the final workflow restart, log check, and `presentArtifact` call. Once that file's steps complete, the first build is done -- do NOT restart the workflow again and do NOT call `presentArtifact` a second time.

## First build rules

- Do NOT read any files before delegation to the design subagent -- scaffold files are documented above, and the subagent's output does not need verification.
- Do NOT add your own creative direction, style instructions, color guidance, or typography choices to the subagent task. The design subagent is the creative expert -- let it make all decisions.
- Do NOT use `startAsyncSubagent` -- use synchronous `subagent()` so you block until it's done.
- Do NOT restart the workflow before the design subagent completes.
- Do NOT take screenshots during the build.
- Do NOT call `suggestDeploy()` -- video artifacts are not deployable. They are exported from the preview pane.
- Do NOT delegate finalization separately -- the design subagent handles it per `<completing_your_run>` in the skill.
- Do NOT delegate the scene-selector step (step 4). The main agent runs it directly after the design subagent finishes. The design subagent must not be told about scene selectors.
- There is no need to test or code review the first build beyond the scene-selector validation.
</first_build>
