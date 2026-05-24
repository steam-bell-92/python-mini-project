---
name: threat_modeling
description: Perform structured threat modeling for a project and write the result to threat_model.md.
---

# Threat Modeling Skill

Analyze a project's architecture and produce a security reference document that describes assets, trust boundaries, applicable threat categories, and the security guarantees the project must uphold.

## When to Use

- New project kickoff or initial architecture review
- A new feature introduces authentication, data storage, network exposure, or third-party integrations
- Pre-deploy or pre-launch security review
- The user explicitly asks for a threat model or security analysis
- After a significant architectural change (new microservice, new database, new external API)

## When NOT to Use

- Cosmetic or UI-only changes with no security surface
- Pure refactors that do not change trust boundaries, data flows, or access control
- One-off bug fixes unrelated to security

## Methodology

Use a lightweight STRIDE-inspired approach. Work through these steps in order:

### Step 1: Understand the System

Read the codebase, `replit.md`, and any existing `threat_model.md`. Identify:

- What the application does and who its users are
- The tech stack (language, framework, database, hosting)
- External services and integrations (payment providers, auth providers, APIs, object storage)
- A small amount of reusable scan context: likely production entry points, highest-risk code areas, major public/authenticated/admin boundaries, and whether major directories are production, shared, or dev-only

### Step 2: Enumerate Assets

Assets are anything worth protecting. Common examples:

- **User credentials** -- passwords, tokens, session cookies, API keys
- **Personal data** -- email addresses, names, payment info, uploaded files
- **Application secrets** -- database connection strings, signing keys, third-party API keys
- **Business data** -- orders, invoices, analytics, proprietary content

### Step 3: Map Trust Boundaries

A trust boundary exists wherever data crosses between different levels of trust. Identify:

- **Client / Server boundary** -- browser or mobile app to backend API
- **Server / Database boundary** -- application code to data store
- **Server / External Service boundary** -- your backend calling third-party APIs
- **Public / Authenticated boundary** -- routes or resources that require auth vs. those that don't
- **User / Admin boundary** -- privilege separation between roles
- **Internal / Production boundary** -- dev/staging environments vs. production

### Step 4: Walk Through Threat Categories

For each asset and trust boundary, consider these STRIDE categories:

**Spoofing** -- Can an attacker impersonate a legitimate user or service?

- Weak or missing authentication on API endpoints
- Predictable session tokens or JWTs with no signature verification
- No origin validation on webhooks or callbacks

**Tampering** -- Can an attacker modify data they shouldn't?

- Missing input validation on form fields, query params, or request bodies
- Client-side-only enforcement of business rules (price, quantity, permissions)
- Unsigned or unverified data passed between services

**Repudiation** -- Can a user deny performing an action with no way to prove otherwise?

- Missing audit logs for sensitive operations (payments, account changes, data deletion)
- Logs that don't capture the acting user or timestamp
- No integrity protection on log storage

**Information Disclosure** -- Can an attacker access data they shouldn't see?

- PII or secrets appearing in logs, error messages, or API responses
- Overly broad database queries returned directly to the client
- Directory listings, stack traces, or debug endpoints exposed in production
- Missing encryption at rest or in transit

**Denial of Service** -- Can an attacker degrade or disrupt the service?

- No rate limiting on authentication or public API endpoints
- Unbounded file uploads or request body sizes
- Resource-intensive operations triggered by unauthenticated users
- Missing timeouts on external service calls

**Elevation of Privilege** -- Can an attacker gain access beyond their authorized level?

- Missing authorization checks after authentication (IDOR, broken function-level access control)
- Role checks only on the frontend, not enforced server-side
- SQL injection, command injection, or template injection leading to arbitrary code execution
- Path traversal allowing file system access outside intended directories
- Insecure deserialization allowing object manipulation

### Step 5: Describe Required Guarantees

For each relevant threat, describe the security guarantee the project must uphold. Write these as declarative statements:

- "All API endpoints that access user data MUST require a valid session token."
- "User passwords MUST be hashed with bcrypt (cost >= 12) and MUST NOT appear in logs."
- "File uploads MUST be validated for type and size, and MUST be stored outside the web root."
- "All database queries MUST use parameterized statements."

## What to Look Out For

These are the most common and dangerous patterns. Flag them whenever you encounter them:

**Broken access control** -- Missing auth checks on routes, IDOR (guessable IDs granting access to other users' data), privilege escalation through parameter manipulation, admin functionality reachable by regular users.

**Injection** -- SQL queries built with string concatenation, shell commands constructed from user input, template injection through unsanitized variables, path traversal via user-supplied file names, unsafe deserialization of user-controlled data.

**Cryptographic failures** -- Hardcoded secrets or API keys in source code, secrets committed to git, weak hashing algorithms (MD5, SHA1 for passwords), plaintext storage or logging of PII, missing HTTPS enforcement.

**Security misconfiguration** -- Debug mode enabled in production, CORS set to `*` or overly permissive, default credentials left in place, verbose error messages exposing internals, permissive Content Security Policy.

**SSRF and open redirects** -- User-controlled URLs fetched server-side without allowlist validation, redirect targets taken from query parameters without validation.

**Dependency vulnerabilities** -- Outdated packages with known CVEs, no lockfile or pinned versions, dependencies pulled from untrusted registries.

**Data exposure** -- PII in application logs, overly broad API responses returning fields the client doesn't need, missing rate limiting allowing data scraping, no encryption at rest for sensitive data.

## Output: `threat_model.md`

You MUST write the completed threat model to `threat_model.md` in the project root. If the file already exists, update it in place rather than overwriting unrelated sections.

`threat_model.md` is a **project-level security reference document**, not a tracker. It describes the system, its security-relevant architecture, and the guarantees it must uphold. Another agent will read this file to inform its security decisions -- write it for that audience.

Use the following structure:

```markdown
# Threat Model

## Project Overview

Brief description of what the application does, its tech stack, and its users.

## Assets

What is worth protecting in this project. Describe each asset category and why it matters.

## Trust Boundaries

Where data crosses between different trust levels. Describe each boundary and what it separates.

## Scan Anchors

A short list of reusable pointers for future security analysis:
- Production entry points, preferably with concrete file or directory paths when known
- Highest-risk code areas, preferably with concrete packages, route files, or service directories when known
- Public vs authenticated vs admin surfaces
- Dev-only areas that should usually be ignored unless proven reachable in production

Keep this section brief. It should store just enough concrete context to speed up future security scans without turning the threat model into a full repo inventory.

If project context already exists in `replit.md` (project README) or `.agents/memory/` (agent memory), don't repeat the same information.

## Threat Categories

For each STRIDE category that is relevant to this project, write a short narrative:
- What the threat is in the context of this specific project
- Why it matters here (what could go wrong)
- What guarantees are required to address it

Omit categories that genuinely do not apply. Do not pad with generic boilerplate.
```

### Example: E-commerce App

```markdown
# Threat Model

## Project Overview

A Node.js/Express e-commerce application with a React frontend, PostgreSQL database,
and Stripe integration for payments. Users can browse products, create accounts,
and purchase items. Deployed on Replit with Replit Auth for user authentication.

## Assets

- **User accounts and sessions** -- email addresses, hashed passwords, session tokens.
  Compromise allows impersonation and access to order history and saved payment methods.
- **Payment data** -- Stripe customer IDs and tokenized payment references. The app never
  stores raw card numbers, but Stripe tokens could be used to initiate charges.
- **Order data** -- order history, shipping addresses, item quantities and prices.
  Contains PII and business-sensitive pricing information.
- **Application secrets** -- Stripe API keys, database connection string, session signing key.
  Compromise of Stripe secret key allows arbitrary charges.

## Trust Boundaries

- **Browser to API** -- all client requests cross this boundary. The API must authenticate
  and authorize every request; the client is untrusted.
- **API to PostgreSQL** -- the API server has direct database access. SQL injection at the
  API layer would give an attacker full database access.
- **API to Stripe** -- the server calls Stripe's API with a secret key. SSRF or key leakage
  would allow unauthorized payment operations.
- **Authenticated to Unauthenticated** -- product browsing is public; cart, checkout, and
  account pages require authentication. The boundary must be enforced server-side.

## Threat Categories

### Spoofing

Users authenticate via Replit Auth. The application must validate the authentication
token on every request to protected endpoints. Session tokens must be unpredictable
and expire within a reasonable window. Webhooks from Stripe must be verified using
Stripe's webhook signature mechanism.

### Tampering

Product prices and order totals must be calculated server-side. The client sends a cart
(product IDs and quantities) but the server must look up current prices from the database.
Accepting client-supplied prices would allow purchasing items for arbitrary amount(s).

### Information Disclosure

API responses for order history must be scoped to the authenticated user. The /api/orders
endpoint must filter by user ID server-side. Error responses must not include stack traces
or database error details. Stripe API keys must never appear in client-side code or logs.

### Elevation of Privilege

Admin routes (product management, order fulfillment) must check for an admin role
server-side. All database queries must use parameterized statements to prevent SQL
injection. File upload endpoints (product images) must validate file type and size.
```

### Key Principles

- Be specific to the project. Generic boilerplate like "use HTTPS" is not useful unless the project is actually missing it.
- Write declaratively. Describe what the system is, what its threats are, and what guarantees it requires.
- Omit irrelevant categories. If the project has no file uploads, do not write about file upload threats.
- Keep it concise. This is a reference document, not an essay. A smart agent will reason from it.
- Keep `## Scan Anchors` brief. It should speed up future security scans without turning the threat model into a repo inventory.
