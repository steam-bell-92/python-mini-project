# PPTX Import — Full Workflow

## How it works

`importPptx` converts the PPTX into React slide components via `pptx-parser` and writes them to a **staging directory** under the workspace root (NOT into the artifact):

```text
attached_assets/imported_slides/<safe_filename>/
  Slide1.tsx
  Slide2.tsx
  media/...  (images)
```

Each PPTX gets its own subfolder so multiple imports never collide. **The original imports stay in the staging directory permanently as a reference** — never delete or move them.

The callback response includes `stagingDir` (where the files were written) and `artifactDir` (the path of the slides artifact, if one exists). Use these to drive the copy step below. The callback does NOT touch the artifact's `slides-manifest.json`.

## Import steps

1. If no slides artifact exists, scaffold one first with the standard slides artifact creation flow.
2. Call `importPptx({ filePath: "attached_assets/<filename>.pptx" })`. Read the `stagingDir` and `files` fields from the response.
3. **Copy each slide component** from `<stagingDir>/SlideN.tsx` into the artifact at `<artifactDir>/src/pages/slides/`. If a destination filename already exists (e.g. another import also had `Slide1.tsx`), rename the copy with a deck-specific suffix (e.g. `Slide1_<safe_filename>.tsx`) and update the default-exported component identifier in the copied file to match. Leave the originals in the staging directory untouched — the copies in `src/pages/slides/` are the ones you will normalize in step 5.
4. **Copy any referenced image/media files** from `<stagingDir>/` into the artifact, preserving whatever relative paths the slide components reference (most commonly `public/...` or `src/assets/...` depending on what the generated imports expect). Leave the originals in place too.
5. **Normalize copied imports for the slides export contract.** Staged PPTX components may use fixed 1920x1080 wrappers, transforms, or `px` positioning. That can look fine in the viewer but break `/allslides` thumbnails and PPTX export, which expect each slide component itself to be a full-frame slide root:

   - Make the copied slide's root a single `w-screen h-screen overflow-hidden relative` frame, preserving the original slide background and removing presentation-viewer wrappers or root/content `transform: scale(...)`.
   - Convert fixed layout sizing that controls slide geometry to viewport-relative units on the 1920x1080 reference: horizontal values use `vw`, vertical values use `vh`. Small borders and decorative icon details can stay fixed when that preserves fidelity.
   - Preserve the imported design. This is a compatibility pass, not a redesign.
   - For large decks, prefer a small repeatable script/codemod and then spot-check representative slides. For small decks, direct edits are fine.
6. **Append manifest entries** to `<artifactDir>/src/data/slides-manifest.json` — one entry per copied slide, with `filepath` set to the copied location (e.g. `src/pages/slides/Slide1.tsx`). Use the flat `src/pages/slides/<BaseName>.tsx` form — do not write nested paths. Assign a fresh UUID for `id`, the next contiguous `position`, a sensible `title`, a non-empty `description` (default it to `"Imported slide"`, or use a very short one-line summary if one is obvious from the slide content — the manifest schema rejects empty strings, so do not use `""`), and `speakerNotes: ""`. Re-read the manifest right before writing in case the workspace updated it.
7. Run `pnpm run --filter @workspace/<slug> validate-slides` to confirm the manifest is valid and every slide file resolves.
8. **Verify `/allslides` renders correctly.** After normalization, check the artifact preview at path `/allslides` (not just `/`). This is the fixed 1920x1080 export view where wrapper and unit bugs surface. Each imported slide should fill the export frame without nested letterboxing, unexpected black margins, clipped content, or tiny scaled content.
9. **Eyeball every imported slide.** Open the slides preview and screenshot. The PPTX import is a heuristic — most slides come through clean, but expect a small handful with obvious breakage: text clipped at the slide edge, overlapping text boxes, white text on a white background, missing or broken images, or a font fallback that wrecks the layout. You can usually tell at a glance. Fix only the obviously broken slides — match the layout of the surrounding slides, do not redesign. Skip cosmetic tweaks; the goal here is "ship without obvious bugs," not "perfect every slide."
10. The imported slides are now viewable. Tell the user: "I've imported your deck — it's ready to view. Want me to adjust anything?"

Do NOT rebuild or recreate the slides from scratch after import. Apart from the canonical-structure normalization in step 5, the imported components render with full fidelity to the original PPTX layout, positioning, and images — do not restyle them.

## When the user wants adaptation instead of 1:1 import

If the user says something like "make my slides more like this deck" or "use this as inspiration", then read the staged slide components in `attached_assets/imported_slides/<safe_filename>/` to understand content and layout, and adapt the existing artifact slides using the standard slide-building workflow in the slides skill. In this mode you do NOT need to copy the staged components into `src/pages/slides/`. This is the exception, not the default — the default import path is 1:1 fidelity via the copy flow above.
