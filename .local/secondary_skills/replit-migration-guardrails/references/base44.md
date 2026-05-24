# Base44 → Replit

## Shim files to read first

- `src/api/base44Client.js`, `src/api/entities.js`, `src/api/integrations.js`
- `src/lib/app-params.js`, `src/lib/AuthContext.jsx`
- `src/components/ProtectedRoute.jsx`, `UserNotRegisteredError.jsx`
- `vite.config.js`

Grep `base44.entities.*`, `base44.integrations.Core.*`, `base44.auth.*`
to enumerate what's actually used.

## Layout

Flat `src/` at repo root → move under `client/src/`, add `server/` +
`shared/` (FULLSTACK_JS layout). Follow the `fullstack-js` skill.

## Replacements

| Base44 | Replit |
| --- | --- |
| `base44.entities.*` | `javascript_database` + drizzle + `/api/*` routes |
| `base44.auth.*` | `javascript_log_in_with_replit` blueprint |
| `InvokeLLM` / `GenerateImage` / `ExtractDataFromUploadedFile` | AI Integrations (OpenAI) |
| `UploadFile` | `javascript_object_storage` blueprint |
| `SendEmail` / `SendSMS` | `integrations` skill, else stub |
| `base44.appLogs.*` | delete |

## Cleanup

Drop `@base44/sdk` + `@base44/vite-plugin`. Delete
`base44Client.js`, `entities.js`, `integrations.js`, `app-params.js`,
`NavigationTracker.jsx`, `VisualEditAgent.jsx`,
`UserNotRegisteredError.jsx`.

## First message

One short, non-technical line. Just tell the user a migration is
running. No surface enumeration, no plan bullets, no tool / library
names. Template:

```text
I've pulled in your Base44 project — looks like *a small business dashboard for tracking revenue, expenses, and customers*. I'll get it running on Replit; this usually takes a few minutes. Nothing needed from you right now.
```

If you genuinely need a user-supplied secret later, batch it into
one request via the environment-secrets skill.
