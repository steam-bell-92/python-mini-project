# Vercel (v0) → Replit

## Locate the app & detect package manager

- Check root `package.json` for a `next` dependency and for `app/` or `pages/` directories.
- If not at root, search common monorepo paths: `apps/web`, `packages/frontend`.
- Detect the package manager from the lockfile: `package-lock.json`→npm,
  `pnpm-lock.yaml`→pnpm, `yarn.lock`→yarn, `bun.lockb`→bun.

## Working directory

If Next.js lives in a subdirectory, every subsequent command runs from
there. Update `deploy_config_tool` to `cd` into it:

- build: `["bash", "-c", "cd <dir> && <pkg-mgr> run build"]`
- start: `["bash", "-c", "cd <dir> && <pkg-mgr> run start"]`

## Ports & scripts

- dev: `next dev -p 5000 -H 0.0.0.0`
- start: `next start -p 5000 -H 0.0.0.0`

## Dev workflow

Vercel imports initialize with `BEST_EFFORT_FALLBACK`, which does not
create a workflow for you. Configure one yourself with
`configure_workflow_tool` before `restart_workflow` — the feedback
and verification steps depend on it. Use the same subdirectory/pkg
manager pattern as the build/start commands, e.g.
`["bash", "-c", "cd <dir> && <pkg-mgr> run dev"]`.

## Replit compatibility rules

- **instrumentation.ts/js**: comment out if it blocks startup, leave a
  one-line explanatory comment.
- **Build errors → source, not artifacts**: when an error cites a file
  path, confirm whether it's source or compiled output before editing.
  Errors in compiled artifacts (Tailwind/CSS bundles, generated JS,
  type-gen output) point to a source cause — grep the source tree for
  the offending symbol or pattern and fix it there. Don't mask the
  error at the bundler/compiler layer (PostCSS rule-stripping, custom
  loader hacks, `null-loader`).
- **External allowlists (preflight)**: grep source for image URLs
  passed to `next/image` and whitelist each external hostname under
  `images.remotePatterns` in `next.config.mjs`. Add `'*.replit.dev'`
  and `'*.replit.app'` to `allowedDevOrigins`. Skipping these produces
  runtime errors later.
- **Binary asset spot-check**: v0 and similar JSON-serialized project
  exports can ship images/fonts as base64 text files that pass HTTP
  200 checks but fail to render. After clone, run
  `file public/**/*.{png,jpg,webp,woff,woff2,ttf}` (or wherever assets
  live) — any binary asset reported as ASCII/UTF-8 text needs
  `base64 -d` back to binary in place.
- **Verify the running app, not just the build**: a 200 response and a
  clean build log don't mean the page renders. Fetch the page
  (`curl -s <URL> | head`) and confirm the HTML contains real app
  content. Repetitive rebuild or reload loops in dev-server logs mean
  the app is cycling — don't blame the Replit proxy.

## Secrets

Always request env vars referenced by `process.env.*` (DATABASE_URL,
API keys, etc.) through the `environment-secrets` skill so they land
in the Replit Secrets store. Never ask the user to paste secret
values into chat, don't commit them to the repo, and don't scrape
`.env` into code.

## First message

One short, non-technical line. Don't enumerate steps or mention tools
/ library names. Template:

```text
I've pulled in your Vercel project — looks like *a Next.js app for <feature>*. I'll get it running on Replit; this usually takes a few minutes. Nothing needed from you right now.
```

If you genuinely need a user-supplied secret later, batch it into one
request via the `environment-secrets` skill.
