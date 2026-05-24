# Slide export failures — diagnose, fix, then re-export

Read this when `exportSlides` returns `success: false`, or when the user reports that the in-viewer export button failed. The happy-path interface, `presentAsset` flow, and Google Slides redirect live in [`exporting.md`](exporting.md); this file is the troubleshooting playbook.

## Try to fix it before escalating

On failure the callback returns `{ success: false, errorCode, error }`. **Do not** call `presentAsset` on a failed export, and **do not** just paste the error at the user. Read both `errorCode` and the raw `error` message — the message often reveals the actual cause and points at the right fix. Attempt a targeted repair, re-run the export, and only escalate to the user when the fix needs their input or the second attempt also fails.

The list below covers the **most common** patterns per code, but it is not exhaustive — the same `errorCode` can come from different root causes, and a fix not listed here may be the right one. Treat these as starting points; if what the `error` message describes doesn't match the listed remedy, investigate what the message actually says and fix that instead. Use your judgment.

## Common remedies by code (start here, adapt as needed)

- `INVALID_FORMAT` → You passed something other than `"pptx"` or `"pdf"`. Re-call with a supported format.
- `NO_SLIDES_ARTIFACT` → If the user clearly wants a deck exported but none exists, scaffold one with `createArtifact({ artifactType: "slides", ... })` and finish building it before exporting. If multiple artifacts exist and you picked the wrong one, retry with the correct `artifactDirName`. Only ask the user when the intent is genuinely ambiguous.
- `NO_SLIDES_FOUND` → The `/allslides` page rendered but the exporter found no `.slide` elements. Diagnose and repair in this order, re-running the export after each fix:
  1. **Workflow not running.** Call `getWorkflowStatus` (or check the workflow logs) and `restartWorkflow` for the slides workflow if it's stopped.
  2. **Empty manifest.** Read `<artifactDir>/src/data/slides-manifest.json`. If it's `[]`, the deck has no slides yet — surface that to the user; an empty deck is unrecoverable without their intent.
  3. **Broken contract.** Read `<artifactDir>/src/App.tsx` and the slide files. Walk the `<workspace_contract>` checks (in the slides skill): `/allslides` route present, each slide wrapped in `<div className="slide">` at 1920×1080, no nested `.slide` class on slide roots, wouter router, both `DO NOT edit` `useEffect`s intact, `slideLoader.ts` unchanged. Repair anything broken (see `references/visual_qa.md` → "Platform contract sanity check") and run `pnpm run --filter @workspace/<slug> validate-slides`.
  4. **Hard runtime error in `/allslides`.** Read webview console logs. Fix any thrown error in slide components (bad imports, missing assets, runtime exceptions) before retrying.
- `EXPORT_FAILED` / `PLAYWRIGHT_ERROR` / `UNCAUGHT_ERROR` / `UNEXPECTED_DISCONNECT` → Often transient. Retry the export once. If it fails again, read the workflow logs and webview console for the underlying issue and fix that.
- `NO_BROWSER` → Headless browser unavailable in the repl. Retry once; if it still fails, ask the user to retry in a moment (cold-start) before escalating to "this repl may need Playwright reinstalled."
- `DISK_QUOTA_EXCEEDED` → Needs user action. Surface clearly, suggest freeing space (especially `.local/outputs/` from prior exports), and stop.
- `INVALID_PATH` / `INVALID_REQUEST` → Internal bug. Surface the raw `error` message — these mean our callback constructed something the RPC rejected, which the user can't fix.
- Any other code → Retry once; on second failure, surface the raw `error` field with a brief explanation of what you tried.

Cap automated repair attempts: at most **two** end-to-end retries per export request. If the second attempt still fails, surface the error and what you tried, and let the user decide.

## When the user reports a UI-button export failure

The export button in the slide viewer **does not** automatically tell the agent why it failed — the failure goes only to a toast. If the user says "my PDF export failed" or "the export button isn't working":

1. Call `exportSlides` yourself with the matching `format` to reproduce the failure.
2. Read the `errorCode` and `error` fields and explain to the user — apply the "try to fix it" flow above before escalating.
3. If the re-run succeeds, follow the normal "Delivering the file" flow in [`exporting.md`](exporting.md) — call `presentAsset` once to hand the user the file. Do not also tell them to retry the UI button.

When paraphrasing the raw `error` string back to the user, see the "Implementation notes — internal-only" section in [`exporting.md`](exporting.md) for the `dom-to-pptx` / Playwright scrub rule — those names must never reach the user.
