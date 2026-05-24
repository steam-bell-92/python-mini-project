---
name: legal-contract
description: Draft, review, or explain legal documents — NDAs, contracts, privacy policies, and more.
---

# Legal Contract Assistant

Full-stack legal platform with three core capabilities: (1) draft and review any type of legal document — NDAs, service agreements, LOIs, purchase agreements, privacy policies, terms of service, and more; (2) manage documents on a dashboard with owner-scoped access; (3) run interactive due diligence rooms for M&A transactions with file uploads, status tracking, comments, participant access control, and activity logging.

## IMPORTANT DISCLAIMER: This provides general information and templates only. It does NOT constitute legal advice. Always consult a qualified attorney for legal matters

## Platform Capabilities

This skill powers a full legal platform with three major capability areas. When the user arrives, guide them to the right capability based on their need:

### 1. Document Drafting & Review

Generate any type of legal document from templates and review existing contracts for red flags.

#### What users can do

- Draft NDAs, service agreements, freelancer contracts, LOIs, term sheets, asset/stock purchase agreements, operating agreements, board resolutions, leases, privacy policies, terms of service — or any other legal document type
- Review contracts they've received and get a plain-language analysis with flagged risks

- Generate multi-document packages for transactions (e.g., LOI + NDA for an acquisition)
- Export documents as PDF and DOCX for signing and redlining

##### How it works

1. User describes the document they need or pastes a contract for review
2. For drafting: start from open-source templates (Bonterms/Common Paper for NDAs/service agreements) or standard clause structures (for M&A documents). See "Open-Source Template Libraries" and "M&A / Transaction Documents" sections below.

3. For reviews: run the red-flag checklist and playbook checks, then output using the "Review Output Format"
4. Store the document in the platform via the Documents System (any `documentType` string — the system is type-agnostic)

5. Deliver PDF + DOCX exports using the generation pipeline in "Output: Always Produce PDF & DOCX"

### 2. Document Management (Dashboard)

Store, organize, and manage all legal documents with owner-scoped access.

#### What users can do (2)

- View all their documents on the dashboard with type badges and status indicators
- Open any document to view its full content

- Delete documents they no longer need (with confirmation)
- Link documents to DD rooms for transaction context

##### How it works (2)

- Documents are stored in the `documents`table with a flexible`documentType` field — supports any type, not just LOIs
- All access is owner-scoped: users only see their own documents

- See the "Documents System" section below for schema and API details

### 3. Due Diligence Rooms

Interactive workspaces for managing M&A due diligence checklists with file uploads, comments, and team collaboration.

#### What users can do (3)

- Create DD rooms pre-populated with 8 standard M&A categories and 57 checklist items
- Add custom categories and items beyond the standard template

- Upload files against checklist items (directly to object storage via presigned URLs)
- Download uploaded files with room-level authorization

- Track item status through the workflow: not*started → uploaded → under*review → approved/flagged
- Comment on items for team discussion

- Invite participants by email with role-based access (viewer, contributor, admin)
- Monitor progress via per-category and overall completion statistics

- Review a full activity feed of all room actions

##### How it works (3)

- Room creation auto-populates from the `DD_TEMPLATE`in`dd-rooms.ts`
- All routes are protected by room-level access control middleware

- Files go through a presigned URL upload flow (request URL → upload to storage → register in DB)
- See the "Due Diligence Room Platform" section below for full architecture and API details

## When to Use

- User needs any type of legal document drafted — NDA, service agreement, freelancer contract, consulting agreement, partnership agreement, operating agreement, LLC agreement, board resolution, employment agreement, offer letter, non-compete, non-solicitation agreement, equity/stock option agreement, SLA, DPA, or any other contract
- User needs a Letter of Intent (LOI), term sheet, earnout agreement, or asset/stock purchase agreement

- User wants a plain-language review of a contract they received ("review this contract", "what does this clause mean", "help me understand this agreement", "is this contract fair")
- User needs to understand specific legal terms or clauses

- User wants a lease or rental agreement reviewed for red flags
- User needs multiple related transaction documents (e.g., LOI + NDA for an acquisition)

- User needs a Privacy Policy or Terms of Service for a web app or SaaS product
- User asks to "draft a contract", "write me a contract", or "create an agreement"

- User wants to manage and organize their legal documents on a dashboard
- User needs to set up or work within a due diligence room, data room, or deal room for an M&A transaction

- User wants an M&A checklist, acquisition checklist, or due diligence checklist
- User wants to upload, track, or review due diligence documents with a team

## When NOT to Use

- Complex litigation or regulatory compliance
- Employment law disputes

- International trade agreements
- Anything involving criminal law

- Situations requiring jurisdiction-specific legal analysis

## Open-Source Template Libraries (Use These First)

**Never draft from scratch.** Start from committee-vetted open-source agreements released under CC BY 4.0:

| Source | Documents | Style | Get it |

|--------|-----------|-------|--------|

| **Bonterms** | Mutual NDA, Cloud Terms (SaaS), SLA, DPA, PSA, AI Standard Clauses | US; "cover page + standard terms" | `github.com/Bonterms` |

| **Common Paper** | Mutual NDA, Cloud Service Agreement, DPA, Design Partner Agreement | US; standards committee of 40+ attorneys | `commonpaper.com/standards` |

| **oneNDA** | NDA (777 words), oneDPA | UK/EU; strict variable-only edits | `onenda.org` |

**Workflow:** `webFetch("https://bonterms.com/forms/mutual-nda/")` → extract the standard terms → build a cover page with the user's deal-specific variables (parties, effective date, term, governing law, jurisdiction). Don't modify the body; that's the whole point of standards.

**Note:** These libraries cover NDAs and SaaS/service agreements well, but do not include M&A documents (LOIs, term sheets, purchase agreements). For those document types, draft using the standard clause structures in the "M&A / Transaction Documents" section below.

## M&A / Transaction Documents

When a user needs documents for buying/selling a business, these are the common document types and their standard clause structures:

### Letter of Intent (LOI)

Standard sections for an LOI:

1. **Transaction Structure** — asset purchase vs. stock/equity purchase
2. **Purchase Price** — total price, payment structure (cash at closing, earnout, seller financing, escrow holdback)

3. **Earnout provisions** — if applicable: percentage, performance milestones, measurement period, payment schedule
4. **Due Diligence** — period length (typically 30-60 days), scope, access to records, extension rights

5. **Exclusivity / No-Shop** — period length (typically 60-90 days), binding on seller
6. **Closing Timeline** — target closing date

7. **Conditions to Closing** — due diligence completion, definitive agreement, reps & warranties accuracy, third-party consents, no MAE, ancillary agreements
8. **Representations and Warranties** — reference to customary reps in definitive agreement

9. **Confidentiality** — binding obligation
10. **Expenses** — each party bears own costs; binding

11. **Non-Binding Nature** — clearly state which sections ARE binding (typically: exclusivity, confidentiality, expenses, non-binding clause itself) and which are non-binding
12. **Governing Law** — leave as fill-in-the-blank for jurisdiction

13. **Expiration** — LOI expires if not signed within X days (typically 10-15)

**Key variables to collect from user:** buyer name, seller/target name, purchase price, deal structure (asset vs. stock), due diligence period, exclusivity period, closing timeline, earnout terms (if any).

### Mutual NDA (Transaction-Specific)

When drafting an NDA for a specific transaction (vs. a general-purpose NDA), include these additional elements:

- **WHEREAS clauses** that reference the specific transaction and any related LOI
- **Permitted Purpose** scoped specifically to evaluating/negotiating the transaction

- **Non-Solicitation** of the other party's employees (typically 12 months)
- **No Obligation to Proceed** — neither party is obligated to complete the transaction

- Cross-reference the LOI or term sheet by name in the recitals

Standard NDA sections: definition of confidential information, exclusions, receiving party obligations, no license/warranty, return/destruction, term (typically 2 years), remedies (injunctive relief), governing law, miscellaneous (entire agreement, amendments, assignment, severability, waiver, counterparts, notices).

### Multi-Document Transactions

When a transaction requires multiple related documents (e.g., LOI + NDA):

1. **Maintain consistent definitions** — party names, defined terms ("Transaction," "Business," "Purchased Assets"), and entity references must match across all documents
2. **Cross-reference between documents** — the NDA should reference the LOI in its recitals; the LOI's confidentiality section should note that a separate NDA governs

3. **Align timelines** — the NDA's term should cover at least the LOI's exclusivity + due diligence + closing periods
4. **Use the same governing law** placeholder in all documents

5. **Draft and present together** — generate all documents in a single session so the user has a complete package

## Privacy Policy & Terms of Service (Web Apps / SaaS)

Privacy Policies and Terms of Service are among the most common legal documents a web app needs. They are not contracts between two parties — they are public-facing declarations. Treat them as a separate document type from the contract/NDA/LOI workflow.

### Key questions to ask before drafting

1. **Legal entity name** — Always ask for the exact registered legal name separately from the brand name. The brand is what users see ("NiDO"); the legal entity is what appears in formal documents ("NiDO Finanzas S.A.S."). Never assume they are the same.
2. **Country of incorporation** — Determines which data protection law applies (GDPR for EU, LGPD for Brazil, Ley 172-13 for Dominican Republic, CCPA for California, etc.).

3. **What data is collected** — Account info (name, email), financial/transactional data, uploaded files, usage/analytics?
4. **Third-party data processors** — Ask the user to enumerate every service that touches user data: auth provider, database host, AI/ML services, payment processor, analytics, email provider, CDN. Each must be disclosed in the Privacy Policy.

5. **Are there paid plans?** — If yes, the Terms must cover payment terms, auto-renewal, cancellation, and refund policy.
6. **Minimum age** — Typically 18 for financial apps, 13 for general consumer apps.

7. **Contact email for privacy/legal** — Often different from the support email. Ask explicitly.

### Third-party processor disclosure pattern

For every integration the app uses, include a line in the Privacy Policy. Format:

```text

- **[Provider] ([function]):** [What they receive and why]. [Link to their privacy policy if possible.]

```

Example:

```text

- **Neon (base de datos):** almacenamiento seguro de sus datos financieros en servidores PostgreSQL.
- **Google Gemini (IA):** genera categorías y análisis. Solo recibe descripciones de transacciones; nunca datos personales identificables.

- **Stripe (pagos):** procesa pagos con tarjeta. NiDO no almacena datos de tarjetas.
- **Replit Auth (autenticación):** gestiona el inicio de sesión vía Google/GitHub.

```

If the app uses analytics, advertising pixels, or session recording (Hotjar, FullStory, etc.), these MUST be disclosed and typically require explicit consent in GDPR jurisdictions.

### Privacy Policy required sections

1. Who we are (legal entity name, contact email for privacy)
2. What data we collect (account info, user-generated data, uploaded files, usage logs)

3. How we use it (provide service, personalization, legal compliance)
4. Third-party processors (enumerate all — see above)

5. Data storage and security (encryption at rest/in transit, access controls)
6. User rights (access, correction, deletion, export)

7. Cookies (session-only vs. tracking; consent requirements if in GDPR territory)
8. Minors (minimum age, what happens if a minor's data is discovered)

9. Changes to the policy (notice method and timing — typically 15–30 days)
10. Governing law (jurisdiction's data protection statute)

### Terms of Service required sections

1. Acceptance (clicking/using = agreement)
2. Service description (what it does and does NOT do)

3. Account registration (age requirement, accurate info, responsibility for activity)
4. Acceptable use (prohibited behaviors: fraud, scraping, reverse engineering, illegal activity)

5. **Financial/medical disclaimer** — if the app gives any advice-like output (budget suggestions, AI analysis), include an explicit "not financial/legal/medical advice" clause
6. User data ownership (user owns their data; limited license to operator to run the service)

7. Payments (if applicable: billing cycle, auto-renewal, cancellation, refunds, payment processor)
8. Service availability (no uptime guarantee unless SLA offered)

9. Limitation of liability (cap at fees paid in last 12 months or a fixed floor like $100)
10. IP ownership (brand, code, design belong to the operator)

11. Termination (user can delete account; operator can suspend for violations; data deletion timeline)
12. Changes to terms (notice period — typically 15 days for material changes)

13. Governing law and jurisdiction

### Delivery format for web apps — routed pages, not PDFs

For web apps, the best delivery format for Privacy Policy and Terms of Service is **routed pages within the app itself**, not PDFs or DOCX files. This is the standard for all modern SaaS products.

#### Pattern

- Create `client/src/pages/Privacy.tsx`and`client/src/pages/Terms.tsx`
- Register them as **public routes**— accessible without authentication. Place the route check**before** the auth loading state in `AppContent`:

```tsx

function AppContent() {

const { isLoading, isAuthenticated } = useAuth();

const [location] = useLocation();

// Public legal pages — always accessible, no auth required

if (location === "/privacidad") return <Privacy />;

if (location === "/terminos") return <Terms />;

// Auth guard below

if (isLoading) return <LoadingScreen />;

return isAuthenticated ? <AuthenticatedLayout /> : <Landing />;

}

```

##### Page layout pattern

- Minimal header: logo + "Back to home" link
- Amber disclaimer banner at the top: *"Este documento es una plantilla informativa y no constituye asesoramiento legal."*

- Clean `max-w-3xl mx-auto`prose layout,`text-sm leading-relaxed`
- Footer with cross-links: Privacy ↔ Terms ↔ Contact ↔ Home

- No sidebar, no app navigation — these are public documents

**After creating the pages, always update the footer links** in the landing page or marketing page. Footer links that point to `href="#"`are broken. Replace with`href="/privacidad"`and`href="/terminos"`, and change the "Contact" link to`mailto:` rather than another dead hash.

**Consistency check after any company name change:** If the user changes the legal entity name, search ALL files — not just the legal pages. Invoice templates, billing pages, and email footers often also contain the company name and will need updating too.

### Disclaimer banner (always include on the rendered page)

Every rendered legal page should display a visible disclaimer. Do not only warn the user in chat — put it on the page itself:

```tsx

<div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-md px-4 py-3 mb-10 text-sm text-amber-800 dark:text-amber-300">

Este documento es una plantilla informativa y no constituye asesoramiento legal.

Consulte un abogado calificado para asuntos legales específicos.

</div>

```

## Red-Flag Language to Grep For

When reviewing, search the document text for these exact phrases — each is a known risk pattern:

| Phrase | Why it's dangerous | Suggested fix |

|--------|-------------------|---------------|

| `"any and all claims"` | Unlimited indemnity scope | "claims arising directly from [Party]'s breach of Section X" |

| `"indemnify, defend, and hold harmless"` | "Hold harmless" blocks your counterclaims even if they caused the loss | Strike "and hold harmless"; keep "indemnify and defend" |

| `"sole discretion"`/`"absolute discretion"` | One party can act arbitrarily (block settlements, reject deliverables) | "consent not to be unreasonably withheld, conditioned, or delayed" |

| `"including but not limited to"` in IP assignment | Open-ended IP grab beyond deliverables | Enumerate specific deliverables; add "excluding pre-existing IP" |

| No liability cap stated | Courts default to **unlimited** liability | "Aggregate liability capped at fees paid in the 12 months preceding the claim" |

| `"time is of the essence"` | Any delay = material breach | Delete, or limit to payment obligations only |

| Indemnity **carved out** of liability cap | Your cap doesn't protect you where exposure is highest | "Indemnification obligations are subject to the cap in Section X" |

| Auto-renewal with <30-day opt-out window | Easy to miss; locked in another term | 60–90 day notice window; email notice permitted |

| `"perpetual"`+`"irrevocable"` license | Can never be revoked even after breach | Term-limited; terminable on material breach |

**Indemnity forms (escalating risk):** *Limited*= you cover only your own negligence.*Intermediate*= everything except their sole negligence.*Broad* = you cover losses **even when caused entirely by them**. Flag intermediate and broad as Critical.

## Playbook Checks (What Harvey/Spellbook Actually Run)

AI contract tools run a fixed checklist per document type. For a **Service Agreement** run these checks and grade each Pass/Flag/Missing:

1. Is there a liability cap? Is it mutual? Is it tied to fees paid (1x, 2x)?
2. Is indemnity mutual or one-way? Subject to the cap or carved out?

3. Does IP assignment exclude contractor's pre-existing tools/libraries?
4. Is there a cure period (typically 30 days) before termination for breach?

5. Are "consequential damages" (lost profits, lost data) excluded? Mutually?
6. Payment terms: Net 30 or better? Late fee specified?

7. Can the client terminate for convenience? If so, is there a kill fee?
8. Governing law + venue: neutral, or the other party's home court?

For a **Letter of Intent** run these checks:

1. Are binding vs. non-binding sections clearly identified?
2. Is there an exclusivity/no-shop clause? Is it binding?

3. Is the purchase price clearly stated with payment structure?
4. Is the due diligence period defined with access rights?

5. Are conditions to closing enumerated?
6. Is there a confidentiality obligation (binding)?

7. Does the LOI have an expiration date?
8. If there's an earnout, are the metrics and measurement methodology specified (or deferred to the definitive agreement)?

## Review Output Format

```text

# Contract Review: [Document Type]

**NOT LEGAL ADVICE — for informational purposes only. Consult an attorney before signing.**

## Summary

[2–3 sentences: what this is, who it favors, biggest concern]

## Critical — Do Not Sign Without Addressing

1. **[Clause §X.Y]**: [quote the exact language]

- **Risk**: [plain English]
- **Suggested redline**: "[replacement text]"

## Warnings — Negotiate If You Have Leverage

## Notes — Standard But Be Aware

## Missing Protections

[clauses that should be here but aren't — e.g., no liability cap, no cure period]

## Overall: [Fair / Favors Counterparty / Consult Attorney Before Signing]

```

## Output: Always Produce PDF & DOCX

**Every drafted contract MUST be delivered as both a PDF and a DOCX file.** Clients need PDF for signing and DOCX for redlining — always provide both.

### Architecture: React + Vite → Puppeteer PDF + python-docx DOCX

Build the contract as a React web artifact first (source of truth for layout), then export:

#### PDF via Puppeteer

Install `puppeteer-core`in the`scripts`package:`pnpm --filter @workspace/scripts add puppeteer-core`

```typescript

// scripts/src/generate-contract.ts

import puppeteer from 'puppeteer-core';

// Find Chromium — pick the latest version from the list:

// ls /nix/store/*chromium*/bin/chromium | sort -V | tail -1

const CHROMIUM_PATH = "/nix/store/FIND_LATEST_PATH/bin/chromium";

// Use the artifact's actual URL, not localhost

const CONTRACT_URL = `https://${process.env.REPLIT_DEV_DOMAIN}/ARTIFACT-ROUTE`;

const browser = await puppeteer.launch({

executablePath: CHROMIUM_PATH,

headless: true,

args: ['--no-sandbox', '--disable-setuid-sandbox'],

});

const page = await browser.newPage();

await page.setViewport({ width: 816, height: 1056 }); // Match page container dimensions

await page.goto(CONTRACT_URL, { waitUntil: 'networkidle0' });

// IMPORTANT: Set document.title for correct PDF metadata title.

// Without this, the PDF viewer title bar shows the HTML <title> from index.html,

// which may be wrong when generating multiple documents from the same app.

await page.evaluate(() => { document.title = "Your Document Title Here"; });

await page.pdf({

path: 'contract.pdf',

format: 'Letter',

printBackground: true,

// IMPORTANT: Use zero margins — the page containers already include internal padding.

// Non-zero Puppeteer margins + fixed-height containers = blank overflow pages.

margin: { top: '0', bottom: '0', left: '0', right: '0' },

});

await browser.close();

```

Add a script entry in `scripts/package.json`:`"generate-contract": "tsx ./src/generate-contract.ts"`

Run via: `pnpm --filter @workspace/scripts run generate-contract`

##### DOCX via python-docx

Python may not be available via `pip`in the Replit environment. Use`nix-shell`to get`python-docx`:

```bash

nix-shell -p python3Packages.python-docx --run "python3 scripts/src/generate-contract.py"

```

```python

# scripts/src/generate-contract.py

from docx import Document

from docx.shared import Pt, Inches, RGBColor

from docx.enum.text import WD_ALIGN_PARAGRAPH

doc = Document()

# Set default font

style = doc.styles['Normal']

font = style.font

font.name = 'Times New Roman'

font.size = Pt(12)

# Set margins

for section in doc.sections:

section.top_margin = Inches(1)

section.bottom_margin = Inches(1)

section.left_margin = Inches(1.25)

section.right_margin = Inches(1.25)

# Title

title = doc.add_paragraph()

title.alignment = WD_ALIGN_PARAGRAPH.CENTER

run = title.add_run('DOCUMENT TITLE')

run.bold = True

run.font.size = Pt(18)

# Preamble

doc.add_paragraph(

'This Agreement is entered into as of [DATE] by and between:'

)

# Parties table

table = doc.add_table(rows=1, cols=2)

table.style = 'Table Grid'

# ... populate with party details

# Sections with numbered clauses

heading = doc.add_paragraph()

run = heading.add_run('1. Section Title')

run.bold = True

doc.add_paragraph('Section body text...')

# Signature block

sig_table = doc.add_table(rows=5, cols=2)

# Row 0: labels (BUYER / SELLER)

# Rows 1-4: Signature, Printed Name, Title, Date lines

doc.save('contract.docx')

```

### Styling for Legal Documents

- **Font**: Times New Roman 12pt (standard for legal docs) or similar serif
- **Margins**: 1" top/bottom, 1.25" left/right

- **Line spacing**: 1.5 or double-spaced (jurisdiction dependent)
- **Section numbering**: Use hierarchical numbering (1, 1.1, 1.1.1)

- **Page numbers**: Bottom center, "Page X of Y"
- **Headers**: Document title and date on each page

- **Signature blocks**: Two-column layout with lines for signature, printed name, title, date

### Page-Aware Layout (Preventing Blank PDF Pages)

Use fixed-height page containers that map 1:1 to physical letter pages. This ensures content stays within page boundaries on screen and in PDF output.

#### Page container constants (letter size at 96 DPI)

- `PAGE_W = "816px"` (8.5 inches)
- `PAGE_H = "1056px"` (11 inches)

- Internal padding: `48px`top/bottom,`72px` left/right

##### Page container component pattern

```tsx

<div

className="page-container mx-auto bg-white shadow-lg print:shadow-none mb-8 print:mb-0 flex flex-col overflow-hidden"

style={{

width: PAGE_W,

height: PAGE_H,

pageBreakAfter: pageNum < TOTAL_PAGES ? "always" : undefined,

breakAfter: pageNum < TOTAL_PAGES ? "page" : undefined,

}}

>

{/* Page header with "Page X of Y" */}

{/* Content area with internal padding */}

</div>

```

###### Critical CSS for print/PDF — add to your global stylesheet

```css

@page {

size: letter;

margin: 0;

}

@media print {

html, body {

margin: 0 !important;

padding: 0 !important;

background: white !important;

}

.page-container {

box-shadow: none !important;

margin: 0 !important;

}

}

```

**Why blank pages happen:** If Puppeteer adds its own margins (e.g., `margin: { top: "0.5in" }`) on top of 1056px containers, each container exceeds the physical page height. The overflow creates a blank page before the next`breakAfter: "page"`fires. The fix: always use`margin: { top: "0", bottom: "0", left: "0", right: "0" }`in Puppeteer and`@page { margin: 0 }` in CSS, since the page containers already include their own internal padding.

**Do NOT override `height: auto` in print media** — removing the fixed height lets containers expand beyond one page, defeating the 1:1 page mapping. Keep the fixed height; the CSS page breaks handle pagination.

###### Outer wrapper must neutralize screen-only styles for print

```tsx

<div className="min-h-screen bg-gray-100 py-8 px-4 print:bg-white print:py-0 print:px-0 print:min-h-0">

```

**Viewport must match page width** in Puppeteer: `page.setViewport({ width: 816, height: 1056 })` so content renders at the correct scale.

**Content balancing:** Use `breakInside: "avoid"` on sections and distribute content across pages so no page overflows. Check the rendered layout in the browser at 816px width before generating PDFs.

### Contract Review Output

For **reviews** (not drafting), output the review analysis directly as text using the Review Output Format above. Do not generate PDF/DOCX for reviews — the review is commentary, not a document.

### Multi-Document Routing

When generating multiple documents for the same transaction (e.g., LOI + NDA), use a single React artifact with separate routes for each document:

```tsx

// App.tsx

<Route path="/" component={LOIDocument} />

<Route path="/nda" component={NDADocument} />

```

Then generate separate PDF/DOCX files for each document by pointing Puppeteer at each route and running a separate python-docx script per document. Present all files together so the user receives the complete package.

**IMPORTANT:** Since all routes share the same `index.html`, the HTML`<title>`tag applies to every document. Each PDF generation script must call`page.evaluate(() => { document.title = "Correct Document Title"; })`before`page.pdf()` to set the correct PDF metadata title. Otherwise the PDF viewer's title bar will show the wrong document name.

## Drafting Rules

1. **Always include the disclaimer** at the top of every output — this is not legal advice
2. Start from Bonterms/Common Paper for NDAs and service agreements; use the clause structures in "M&A / Transaction Documents" for LOIs and purchase agreements

3. Quote exact problem text with section numbers, then give replacement language
4. Flag jurisdiction dependencies — non-compete enforceability, anti-indemnity statutes, and consumer protection vary wildly by state/country

5. When stakes are high (>$50K, equity, exclusivity, personal guarantees) → recommend attorney review explicitly
6. For multi-document transactions, ensure consistent terminology and cross-references across all documents

## Documents System

The platform includes a generic document management system for any type of legal document. Documents are owner-scoped and can optionally be linked to a DD room.

### Schema (`documents` table)

| Column | Type | Description |

|--------|------|-------------|

| `id` | text (UUID) | Primary key |

| `ownerId` | text | Clerk user ID of the document owner |

| `title` | varchar(500) | Document title |

| `documentType` | varchar(100) | Flexible type field (e.g., "LOI", "NDA", "APA", "Employment Agreement", "Lease") |

| `content` | text | Full document content (Markdown/plain text) |

| `status` | varchar(50) | Document status, default "draft" |

| `ddRoomId` | text | Optional link to a DD room |

| `createdAt` | timestamp | Auto-set on creation |

| `updatedAt` | timestamp | Auto-set on creation and update |

### Key Design Principles

- **Type-agnostic:** The `documentType` field is a free-text string, not an enum. Any document type can be stored — LOIs, NDAs, asset purchase agreements, operating agreements, board resolutions, etc.
- **Owner-scoped:** All document endpoints filter by the authenticated user's `ownerId`. Users can only see, edit, and delete their own documents.

- **Room linkable:** Documents can optionally reference a `ddRoomId` to associate them with a due diligence room (e.g., the LOI for an acquisition).

### API Endpoints

| Method | Path | Description |

|--------|------|-------------|

| GET | `/documents` | List all documents owned by the current user |

| GET | `/documents/:documentId` | Get a single document (owner-only) |

| DELETE | `/documents/:documentId` | Delete a document (owner-only) |

### Frontend

- **Dashboard:** Document cards appear below the DD rooms section. Each card shows title, type badge, status, and creation date. Hovering reveals a delete button with inline confirm/cancel.
- **Document view:** `/documents/:documentId` renders the full document content.

## Due Diligence Room Platform

The legal platform includes an interactive Due Diligence (DD) room for M&A transactions. This is a full-stack feature with its own database schema, API endpoints, and React UI.

### Architecture

- **Frontend:** `artifacts/legal-platform/src/pages/dd-room.tsx` — React + shadcn/ui
- **API:** `artifacts/api-server/src/routes/dd-*.ts` — Express REST endpoints

- **DB:** PostgreSQL via Drizzle ORM — tables in `lib/db/src/schema/dd-*.ts`
- **Auth:** Clerk; middleware at `artifacts/api-server/src/middlewares/requireAuth.ts`

- **Room Auth:** `artifacts/api-server/src/middlewares/requireRoomAccess.ts` — room-level authorization
- **File Storage:** Replit Object Storage via `@google-cloud/storage`

- **OpenAPI:** `lib/api-spec/openapi.yaml`with codegen to`@workspace/api-client-react`and`@workspace/api-zod`

### Database Tables

| Table | Purpose |

|-------|---------|

| `dd_rooms` | Room metadata: name, buyer/seller, purchase price, deal structure, ownerId |

| `dd_categories` | Checklist categories (8 auto-created from template, plus custom) |

| `dd_items` | Individual checklist items with status tracking |

| `dd_files` | Uploaded documents linked to items (object storage paths) |

| `dd_comments` | Item-level discussion threads |

| `dd_activity` | Audit log of all actions |

| `dd_participants` | Room access control (email + role: viewer/contributor/admin) |

### Standard Checklist Template

When a room is created, 8 categories with 57 items are auto-populated from `DD_TEMPLATE`in`dd-rooms.ts`:

1. **Corporate & Organizational** (7 items) — Formation docs, bylaws, minutes, cap table, good standing, org chart, jurisdictions
2. **Financial** (8 items) — Audited/interim statements, tax returns, debt schedule, AR/AP aging, revenue breakdown, projections, bank accounts

3. **Contracts & Agreements** (7 items) — Customer/vendor/partnership/distribution/franchise/government contracts, change-of-control provisions
4. **Intellectual Property** (8 items) — Patents, trademarks, copyrights, domains, software licenses, IP assignments, open-source audit, trade secrets

5. **Employees & Benefits** (9 items) — Census, employment agreements, contractors, handbook, non-competes, benefits, stock options, workers' comp, OSHA
6. **Litigation & Legal** (6 items) — Pending litigation, settlements, consent decrees, investigations, insurance claims, regulator correspondence

7. **Insurance** (4 items) — All policies, claims history, broker info, certificates
8. **Technology & Data** (8 items) — Architecture docs, data flows, SOC 2, breach history, BCP/DR, SLA reports, vendor assessments, privacy policy

Custom categories and items can be added per-room via the API.

### Item Status Workflow

Items track progress through these statuses:

```text

not_started → uploaded → under_review → approved

→ flagged (with note)

```

#### Automatic transitions

- Uploading a file to a `not_started`item changes its status to`uploaded`
- Deleting all files from an `uploaded`item reverts its status to`not_started`

- All other transitions (under_review, approved, flagged) are manual via the UI

### Access Control

Room-level authorization is enforced via `requireRoomAccess`middleware (`artifacts/api-server/src/middlewares/requireRoomAccess.ts`) and its variants. Each variant looks up the resource chain to find the parent room, then checks if the user is the room owner or an active participant.

| Middleware | Lookup Chain | Used On |

|-----------|-------------|---------|

| `requireRoomAccess(roomIdParam)` | Direct roomId | Room detail, update, stats, activity, participants, categories |

| `requireCategoryRoomAccess(categoryIdParam)` | category → room | Delete category, create items |

| `requireItemRoomAccess(itemIdParam)` | item → category → room | Update/delete items, list/create files, list/create comments |

| `requireFileRoomAccess(fileIdParam)` | file → item → category → room | Delete files |

| `requireCommentRoomAccess(commentIdParam)` | comment → item → category → room | Delete comments |

#### Privilege levels

- **Room owner:** Full access to everything including participant management
- **Admin participant:** Can manage participants (add/remove) and all room content

- **Contributor/Viewer participant:** Can access room content but cannot manage participants
- **Non-participant:** Receives 403 on all room-scoped endpoints

The `GET /dd-rooms` listing only returns rooms where the user is owner or participant (no cross-tenant leakage).

Private file downloads (`GET /storage/objects/*`) also enforce room access by looking up the file's parent room through the`dd_files → dd_items → dd_categories` chain.

### Activity Feed Events

All significant actions are logged to `dd_activity` with the following event types:

| Action | Trigger |

|--------|---------|

| `file_uploaded` | File registered on an item |

| `file_deleted` | File removed from an item |

| `comment_deleted` | Comment removed from an item |

| `participant_removed` | Participant removed from room |

| `status_changed` | Item status updated |

Each activity entry records: `roomId`,`userId`,`userName`,`itemId`(optional),`action`,`details`,`createdAt`.

### File Upload Flow

1. Frontend requests presigned upload URL via `POST /api/storage/uploads/request-url` (sends file name, size, contentType as JSON)
2. Frontend uploads file directly to object storage using the presigned URL (PUT to GCS)

3. Frontend registers the file via `POST /api/dd-items/:itemId/files` with the returned storage URL
4. Backend normalizes the GCS URL to an object entity path (`/objects/<entityId>`) and validates:

- URL must normalize to `/objects/` prefix format
- URL must not already be registered (prevents duplicate registration / IDOR)

1. File downloads served via `GET /api/storage/objects/*path` with room-level authorization

### API Endpoints (2)

| Method | Path | Auth | Description |

|--------|------|------|-------------|

| GET | `/dd-rooms` | requireAuth | List rooms (filtered by owner/participant) |

| POST | `/dd-rooms` | requireAuth | Create a new DD room (auto-populates 8 categories) |

| GET | `/dd-rooms/:roomId` | requireAuth + roomAccess | Get room with categories and items |

| PUT | `/dd-rooms/:roomId` | requireAuth + roomAccess | Update room metadata |

| POST | `/dd-rooms/:roomId/categories` | requireAuth + roomAccess | Add a custom category |

| DELETE | `/dd-categories/:categoryId` | requireAuth + categoryRoomAccess | Delete a category and its items |

| POST | `/dd-categories/:categoryId/items` | requireAuth + categoryRoomAccess | Add an item to a category |

| PUT | `/dd-items/:itemId` | requireAuth + itemRoomAccess | Update item (name, status, notes) |

| DELETE | `/dd-items/:itemId` | requireAuth + itemRoomAccess | Delete an item |

| GET | `/dd-items/:itemId/files` | requireAuth + itemRoomAccess | List files for an item |

| POST | `/dd-items/:itemId/files` | requireAuth + itemRoomAccess | Register an uploaded file |

| DELETE | `/dd-files/:fileId` | requireAuth + fileRoomAccess | Delete a file |

| GET | `/dd-items/:itemId/comments` | requireAuth + itemRoomAccess | List comments for an item |

| POST | `/dd-items/:itemId/comments` | requireAuth + itemRoomAccess | Add a comment |

| DELETE | `/dd-comments/:commentId` | requireAuth + commentRoomAccess | Delete a comment |

| GET | `/dd-rooms/:roomId/stats` | requireAuth + roomAccess | Get completion statistics |

| GET | `/dd-rooms/:roomId/activity` | requireAuth + roomAccess | Get activity feed |

| GET | `/dd-rooms/:roomId/participants` | requireAuth + roomAccess | List participants |

| POST | `/dd-rooms/:roomId/participants` | requireAuth + roomAccess (owner/admin) | Add a participant |

| DELETE | `/dd-participants/:participantId` | requireAuth + roomAccess (owner/admin) | Remove a participant |

| POST | `/storage/uploads/request-url` | requireAuth | Get presigned upload URL |

| GET | `/storage/objects/*` | requireAuth + fileRoomAccess | Download a file |

## Limitations

- NOT a substitute for legal advice from a licensed attorney
- Cannot account for jurisdiction-specific laws

- Cannot verify legal enforceability of any clause
- Cannot handle litigation, regulatory filings, or court documents

- Templates are starting points, not final legal documents
