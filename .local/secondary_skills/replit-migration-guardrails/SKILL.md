---
name: replit-migration-guardrails
description: Rules for migrating external projects (Lovable, Base44, v0/Vercel, Bolt) to Replit. Use Replit's built-in DB, auth, secrets, and integrations — not Supabase / Firebase / cookie-session / raw API keys. Base44 imports get a call-by-call map in `.local/secondary_skills/replit-migration-guardrails/references/base44.md`; v0/Vercel imports get a Next.js migration guide in `.local/secondary_skills/replit-migration-guardrails/references/vercel.md`.
---

# Migration guardrails

Rules for migrating Lovable / Base44 / v0 / Vercel / Bolt imports to
Replit. Base44 imports get a call-by-call map in
`.local/secondary_skills/replit-migration-guardrails/references/base44.md`;
v0/Vercel imports get a Next.js migration guide in
`.local/secondary_skills/replit-migration-guardrails/references/vercel.md`.
Security reasoning:
<https://blog.replit.com/defense-in-depth-how-replit-secures-every-layer-of-the-vibe-coding-stack>.

## Rules

1. **Database:** Replit PostgreSQL via the `javascript_database`
   blueprint. Not Supabase, Firebase, PlanetScale, etc. Reason: the
   blog post's frontend/backend separation argument — RLS-only apps
   are the vulnerability class Replit is built to avoid. Schema in
   `shared/schema.ts`, `IStorage` in `server/storage.ts`, routes
   under `/api/*`, then `npm run db:push`.

2. **Auth:** `javascript_log_in_with_replit` blueprint (Replit Auth).
   If the user explicitly asks for Clerk, use the `clerk-auth` skill.
   Never hand-roll cookie sessions or design login/signup/reset forms.
   Don't use the strings "Replit" or "Replit Auth" in UI; just "Log in".

3. **Secrets:** Live in Replit's secret store. Use the
   `environment-secrets` skill's `ask_secrets` tool to request
   user-supplied keys, and `check_secrets` to see what's already
   set. Never paste keys into code or `.env.*`. Never expose via
   `VITE_*` (that ships to the browser). Scrape nothing from the
   imported `.env`; re-request through `ask_secrets`.

4. **Integrations:** For AI, use **AI Integrations** via the
   `integrations` skill (OpenAI / Anthropic / Gemini env vars
   auto-provisioned, no key from the user). For object storage, use
   `javascript_object_storage`. For payments, `javascript_stripe` /
   `javascript_paypal`. For email / SMS / Slack / Notion / etc.,
   search the `integrations` skill first. Only fall back to
   `ask_secrets` if no integration exists. Never call external APIs
   from the browser.

## Talk to the user like a non-technical user

Keep user-facing messages short. Just tell them a migration is
running; no enumeration of what surfaces were found, no step-by-step
plan, no tool / library / file / blueprint names.

One-liner format: what the app is, that you're migrating it, rough
time, whether they need to do anything (ideally "nothing right now").

The per-source reference in `references/` has a filled-in template.
