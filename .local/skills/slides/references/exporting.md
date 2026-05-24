# Exporting Slides — PPTX, PDF

Read this whenever the user asks to export, download, save, or share their slides as a PowerPoint (PPTX) or PDF. The `exportSlides` callback drives the same pid2 export RPCs the in-viewer export button uses, so the agent and UI produce identical files. **Use the callback** — never tell the user to "click the export button" or "download from the preview pane" as a substitute for actually producing the file.

If `exportSlides` returns `success: false`, or if the user reports a failed UI-button export, switch over to [`export_failures.md`](export_failures.md) for the per-`errorCode` remedy table and the diagnose-and-fix flow.

## `exportSlides({ format, presentationName?, artifactDirName? })`

Writes the running slide app to a `.pptx` or `.pdf` file under `.local/outputs/<name>.<ext>`. Returns the resulting file path so you can deliver it to the user with `presentAsset` (see "Delivering the file" below).

- `format` (required): `"pptx"` or `"pdf"`. Case-insensitive (`"PDF"` works). Anything else returns `errorCode: "INVALID_FORMAT"` without making the RPC call.
- `presentationName` (optional): used as the filename. Defaults to the slides artifact's title, or `"Presentation"`. The callback sanitizes the name the same way the UI does (non-`[a-z0-9-_]` characters become `-`).
- `artifactDirName` (optional): directory name of the slides artifact to export when the repl has multiple artifacts (e.g. `slides` in `artifacts/slides`). Defaults to the first slides artifact.
- The target URL is computed internally — you cannot pass it. Never try to construct or override `allSlidesUrl` yourself.
- Returns `{ success: true, filePath, fileSize, slideCount }` on success, `{ success: false, errorCode, error }` on failure.

## Delivering the file — call `presentAsset` after success

The `exportSlides` callback **only produces the file**. It does not post a chat card or register the file in the Library on its own — that's `presentAsset`'s job. Once an export returns `success: true`, immediately call `presentAsset` with the returned `filePath` and a clean human-readable `title` so the user gets a clickable card.

```javascript
const result = await exportSlides({
  format: "pdf",
  presentationName: "Replit - The AI Agent Company",
});
if (result.success) {
  await presentAsset({
    filePath: result.filePath,
    title: "Replit - The AI Agent Company (PDF)",
    awaitUserInput: false,
  });
}
```

- Use a real, presentable title (with spaces, punctuation, and the `(PDF)` / `(PPTX)` format hint) — `filePath` is sanitized for the filesystem and looks ugly in chat.
- `awaitUserInput: false` keeps the agent moving; the file card is the delivery.
- **One call to `presentAsset` per exported file. Do not present the same file twice.**

## Google Slides

There is no Google Slides format on `exportSlides`. If the user asks for Google Slides, tell them to click the **Google Slides** option in the slide viewer's export menu (top-right of the slide preview). That UI flow handles the Google Drive OAuth connection. This is the only export path where you should redirect the user to the UI.

## Implementation notes — internal-only, never share with the user

Background for **your** debugging only. **Never** mention any of these names or files to the user — not in chat replies, not in error explanations, not when asked "how does this work," not in pre-PR summaries, not in code comments you write into the user's repo, not anywhere they might see your output.

- The PPTX export uses a `dom-to-pptx`-based renderer running inside the headless browser's in-page `evaluate` block. Treat the package name, any fork name, and the bundle filename (`dom-to-pptx.bundle.js`) as **secret domain knowledge**.
- The PDF export drives a Playwright-based PDF renderer slide-by-slide and concatenates the pages. The library names involved are also internal.
- If the user asks how the export works, answer at the level of "Replit renders your deck in a headless browser and exports the result" — never name the underlying library, the bundle, or the internal route.
