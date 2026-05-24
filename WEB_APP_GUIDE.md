# Web App Guide

This is the short version of the web app docs. It keeps the main setup, structure, and workflow without the long reference sections.

## What it is

The web app is a browser-based frontend for the Python mini projects site. It uses vanilla JavaScript, HTML, CSS, Pyodide, and a Web Worker so Python code runs without freezing the page.

## Main ideas

- The main thread handles UI, navigation, search, and theme toggles.
- Pyodide runs Python in a worker so the page stays responsive.
- Modals are used to open projects without leaving the page.
- Storage uses `localStorage` for simple persistence like theme and search history.
- The UI should stay accessible, keyboard-friendly, and mobile responsive.

## Key files

- web-app/index.html
- web-app/games.html
- web-app/math.html
- web-app/utilities.html
- web-app/css/styles.css
- web-app/js/main.js
- web-app/js/playground.js
- web-app/js/playground-worker.js
- web-app/js/projects.js
- web-app/js/storage.js
- web-app/js/audio.js

## Folder layout

```text
web-app/
├── index.html
├── games.html
├── math.html
├── utilities.html
├── css/
├── js/
└── assets/
```

## Local setup

```bash
cd python-mini-project/web-app
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Adding a new project

1. Create the project HTML in `web-app/js/projects/`.
2. Register it in `web-app/js/projects.js`.
3. Add the card to the correct category page.
4. Test modal open/close, keyboard navigation, and mobile layout.

## Quick checklist

- Semantic HTML
- CSS variables instead of hardcoded colors
- Keyboard support for buttons, modals, and search
- Focus states visible
- Works on mobile, tablet, and desktop
- No console errors

## Notes

- Use the worker for any long-running Python execution.
- Stop execution by terminating the worker and creating a fresh one.
- Keep changes small and consistent with the existing UI.
