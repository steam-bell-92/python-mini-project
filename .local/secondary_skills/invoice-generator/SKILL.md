---
name: invoice-generator
description: Generate professional invoices as HTML pages or React apps with PDF export.
---

# Invoice Generator

Build invoices as standalone HTML pages (preferred for simplicity) or React web artifacts. They auto-scale to fit the page and export to PDF via the browser's native print dialog. The web page is the single source of truth — the PDF is a print of it.

> **NixOS note:** Puppeteer / headless Chromium fails on this platform due to missing system libraries (`libglib-2.0.so.0`). Use`window.print()` (browser print dialog → Save as PDF) instead. The approach below is designed for that reality.

## Before You Start Building — Gather Information First

**Do NOT start building the invoice until you have enough information to populate real line items and details.** An invoice with placeholder data is useless.

### If the user provides complete invoice details

Go ahead and start building immediately. You have what you need.

### If the user asks to "make me an invoice" without providing details

You MUST ask clarifying questions before writing any code. Ask about:

1. **Seller info** — Business name, address, email, phone, logo (if any), VAT/tax ID (if applicable)
2. **Client info** — Client/company name, address, contact email, VAT number (if B2B in EU)

3. **Line items** — Description of each service/product, quantity, rate/price per unit
4. **Payment terms** — Net 30, due on receipt, etc. + preferred payment method (bank transfer, Stripe, PayPal, etc.)

5. **Invoice number** — Do they have an existing numbering scheme, or should you start one?
6. **Dates** — Invoice date, service/delivery date (if different), due date

7. **Tax** — What tax rate applies? (Sales tax, VAT, ITBIS, none?) This depends on jurisdiction.
8. **Where is the seller based?** — Determines required legal fields, page size (US = Letter, everyone else = A4), and tax handling

9. **Billing contact email** — Always ask explicitly. Do NOT invent a placeholder like `billing@company.com` — the user must confirm the real email address.
10. **Production domain** — Always ask what domain the app is deployed to. Do NOT use the Replit dev domain or a made-up domain on the invoice itself.

### How to ask

Start with the essentials:

> "To create your invoice, I need a few details:
>
>
>
> 1. Your business name and address (the seller)
>
> 2. Who you're billing — client name and address
>
> 3. What you're billing for — list each item/service with the quantity and price
>
> 4. Payment terms — when is it due, and how should they pay?
>
> 5. What email should clients contact for billing questions?
>
> 6. What domain is your app deployed to (for the website shown on the invoice)?"

Then follow up for tax details, numbering, branding, etc. based on what they share.

### If the invoice feels incomplete

If the user gives vague descriptions like "consulting work," push for specifics: *"Can you break that down into specific deliverables? e.g., 'Website redesign — 3 revision rounds' at $5,000. Specific line items look more professional and reduce client pushback."*

## Flag Guesses and Inferred Details

If you had to guess or infer any details — tax rates, payment terms, invoice numbers, dates — you MUST tell the user what you assumed. After presenting the first draft, explicitly list anything you weren't sure about. For example:

> "A few things I assumed — let me know if any need adjusting:
>
>
>
> - I used invoice number INV-2026-0001 — do you have an existing numbering scheme?
>
> - I set the tax rate to 0% since you didn't mention taxes — should I add sales tax or VAT?
>
> - I set payment terms to Net 30 with a due date of April 13 — is that right?"

Do NOT silently present fabricated details as fact. Getting invoice details wrong can cause real payment and legal issues.

## Two Approaches: Choose Based on Use Case

### Approach A — Standalone HTML (preferred for SaaS/subscription templates)

**Use when:** The same invoice template will be sent to many different clients (e.g., a subscription SaaS billing its users). Client-specific data (name, email, invoice number, dates, amount) is passed via URL query parameters. One file serves all clients.

#### Architecture

```text

client/public/invoice-template.html \# Single file, URL-param driven

```

##### How it works

- The template lives in the main app's `public/` folder, served as a static asset
- All client-specific fields are read from `URLSearchParams` at runtime

- Seller info, domain, and billing email are hardcoded (they never change)
- Client pastes the parameterized link into any browser → prints to PDF

**File location:** `client/public/invoice-template.html`→ served at`/invoice-template.html`

### Approach B — React Component (preferred for one-off custom invoices)

**Use when:** Building a one-off invoice for a specific client with complex line items, custom branding per client, or when integrated into an app's billing flow.

#### Architecture (2)

```text

artifacts/<client>-invoice/

client/src/pages/Invoice.tsx \# Invoice data + component with auto-scale

client/src/index.css \# Print-ready styles (A4 or Letter)

```

## URL Parameter Pattern (Approach A)

This is the cleanest pattern for subscription/SaaS invoices. Every field that varies per client is a query param; everything that belongs to the seller is hardcoded.

### Supported parameters

| Param | Description | Default |

|-------|-------------|---------|

| `client` | Client / company name | "Client Name" (shown in amber as warning) |

| `email` | Client email address | empty |

| `inv`| Invoice number |`PREFIX-YYYY-0001` |

| `date` | Invoice date (ISO: YYYY-MM-DD) | today |

| `due` | Due date (ISO: YYYY-MM-DD) | today + 30 days |

| `period` | Service period label | next calendar month |

| `amount` | Line item amount | plan default |

| `plan` | Plan name label | "Pro" |

| `stripe` | Stripe payment link URL | placeholder (shown dimmed) |

### Example parameterized URL

```text

https://nido.com.do/invoice-template.html

?client=Familia+García

&email=garcia@email.com

&inv=NiDO-2026-0014

&date=2026-04-01

&due=2026-05-01

&period=April+2026

&amount=35

&plan=Pro

&stripe=https://buy.stripe.com/abc123

```

### URL parsing boilerplate

```javascript

function parseParam(name, fallback) {

const v = new URLSearchParams(window.location.search).get(name);

return (v && v.trim()) ? v.trim() : fallback;

}

function parseDate(param, fallback) {

const raw = new URLSearchParams(window.location.search).get(param);

if (raw && raw.trim()) {

const d = new Date(raw.trim() + 'T12:00:00'); // noon avoids TZ off-by-one

if (!isNaN(d)) return d;

}

return fallback;

}

```

### Always show the shareable URL in the UI

Add a URL display bar above the invoice so the user can see and copy the full parameterized link:

```html

<div class="print-bar">

<div class="url-display" id="url-display" onclick="copyLink()" title="Click to copy">

<svg><!-- link icon --></svg>

<span id="url-text">loading…</span>

</div>

<button class="btn-copy" onclick="copyLink()">Copy Link</button>

<button class="btn-print" onclick="window.print()">Download / Print PDF</button>

</div>

```

```javascript

// Show the actual full URL so user can copy and send it

document.getElementById('url-text').textContent = window.location.href;

```

The URL bar should be hidden in `@media print`.

## Page Cutoff / Auto-Scale Logic

This is the most important implementation detail. Use a **two-layer structure**:

1. **`.invoice-page`** — fixed`height: 1056px`(Letter) or`height: 1122px`(A4),`overflow: hidden`. This is the page boundary.
2. **`.inv-scaler`** — inner wrapper,`min-height: 1056px`,`display: flex; flex-direction: column; transform-origin: top left`. This holds all content and gets scaled.

### CSS

```css

.invoice-page {

width: 816px; /* 8.5in at 96dpi */

height: 1056px; /* 11in at 96dpi — Letter */

overflow: hidden;

position: relative;

}

.inv-scaler {

width: 100%;

min-height: 1056px; /* Fills page by default so footer stays at bottom */

display: flex;

flex-direction: column;

transform-origin: top left;

}

```

### JavaScript scaleToFit function

```javascript

function scaleToFit() {

const page = document.querySelector('.invoice-page');

const scaler = document.querySelector('.inv-scaler');

if (!page || !scaler) return;

// Reset any existing transform so we measure true content height

scaler.style.transform = 'none';

scaler.style.width = '100%';

const pageH = page.clientHeight; // 1056px

const contentH = scaler.scrollHeight;

if (contentH > pageH) {

const scale = pageH / contentH;

scaler.style.transformOrigin = 'top left';

scaler.style.transform = `scale(${scale})`;

// Compensate horizontal shrink so content stays full-width visually

scaler.style.width = `${100 / scale}%`;

}

}

// Run on load, after fonts resolve, on resize, and via safety timeouts

scaleToFit();

document.fonts.ready.then(scaleToFit);

window.addEventListener('resize', scaleToFit);

setTimeout(scaleToFit, 300);

setTimeout(scaleToFit, 1000);

```

**Why `min-height`on`.inv-scaler`?** Without it,`flex: 1`on`.inv-body`does nothing (no constrained parent height), and the footer won't stick to the bottom of short invoices. With`min-height: 1056px`, the scaler always fills the full page — footer stays at the bottom — and only grows taller if content genuinely overflows, at which point`scaleToFit` shrinks it back.

## Page Length Rules

- **Most invoices should fit on one page.** The auto-scale handles this for typical invoices (up to ~15 line items).
- **It's OK to go multi-page** if the invoice has many line items. Don't shrink text to an unreadable size just to force everything onto one page.

- **If going multi-page**: repeat the table header (Description | Qty | Rate | Amount) on each page, and put the totals section on the final page.
- **Always put payment instructions and totals on the last page** so the client sees how much they owe and how to pay without hunting.

## Brand Domain and Contact Email

- **Never invent placeholder domains** like `yourcompany.com`or`nido.app` — always ask the user what their real production domain is.
- **Never invent billing emails** — always ask explicitly. The billing email and the app domain are often different (e.g., website: `nido.com.do`, billing email:`billing@nido.com`).

- **Hardcode seller info directly** in the script — do not make it a URL param. The seller never changes between invoices.
- **Do not use `window.location.hostname`** as the brand domain — the dev/Replit URL is not the brand domain.

```javascript

// ── Hardcode seller info — never use window.location or placeholders ──

const appDomain = 'nido.com.do'; // confirmed with user

const billingEmail = 'billing@nido.com'; // confirmed with user

```

## Required Fields by Jurisdiction

### EU (VAT Directive 2006/112/EC, Article 226) — legally mandatory

- Sequential invoice number (gaps must be documented — auditors **will** assess VAT on missing numbers)
- Invoice date + date of supply (if different)

- Seller's full name, address, and **VAT number**
- Customer's name and address (and VAT number if B2B)

- Description of goods/services, quantity/extent
- Unit price excluding VAT, VAT rate per line, VAT amount **in the member state's currency** (even if invoice is in USD)

- **Reverse charge:** if selling B2B cross-border within EU, charge 0% VAT and add the notation `"Reverse charge — VAT to be accounted for by the recipient (Art. 196, Directive 2006/112/EC)"`. Include the customer's VAT number (validate via VIES).

**US — no federal invoice law.** Sequential numbering is best practice (IRS wants unique IDs for audit trail) but not legally required. Sales tax rules vary by state; many services are untaxed.

**Other jurisdictions:** Always ask the user which country they operate in before assuming a tax regime. Key questions: Is the tax called VAT, GST, HST, sales tax, or something else? What is the rate? Are digital services exempt or taxable? If exempt, label the tax line clearly (e.g., `VAT — Exempt`or the local equivalent) with`$0.00` rather than omitting the line entirely — omitting it looks like you forgot, whereas labeling it exempt looks intentional and professional.

**Numbering scheme:** `{PREFIX}-{YYYY}-{SEQ:04d}`e.g.`NiDO-2026-0042`. Prefix can distinguish clients or entities. Never reuse or skip; if you void one, keep the voided record.

## Payment Terms Glossary

| Term | Meaning | Typical use |

|------|---------|-------------|

| Due on receipt | Pay immediately | Small amounts, new clients |

| Net 30 | Due 30 days from invoice date | Standard B2B |

| Net 60 / Net 90 | 60/90 days | Large enterprise (push back on this) |

| 2/10 Net 30 | 2% discount if paid in 10 days, else full in 30 | Incentivize fast payment |

| EOM | Due end of month | |

| 1.5% monthly late fee | Compounds on overdue balance | Check local usury caps — often ~18% APR max |

## Layout Structure

```html

<div class="invoice-page">

<div class="inv-scaler">

<!-- Teal/brand header bar -->

<div class="inv-header">

Logo + "INVOICE" title + invoice number

</div>

<!-- Accent stripe (thin colored bar below header) -->

<div class="accent-stripe"></div>

<!-- Main content -->

<div class="inv-body">

<!-- Two columns: From (seller) / Bill To (client) -->

<div class="parties">...</div>

<!-- Invoice date / service period / due date / payment terms -->

<div class="dates-row">...</div>

<!-- Line items table -->

<table>Description | Plan | Qty | Rate | Amount</table>

<!-- Subtotal / Tax / Total -->

<div class="totals-section">...</div>

<!-- How to pay (Stripe link, bank details, contact email) -->

<div class="payment-box">...</div>

<!-- Footer: seller brand + late fee policy -->

<div class="inv-footer">...</div>

</div><!-- /inv-body -->

</div><!-- /inv-scaler -->

</div><!-- /invoice-page -->

```

## Stripe Payment Link Pattern

Make the Stripe URL a query param so each invoice can have a unique checkout link:

```javascript

const stripeUrl = parseParam('stripe', 'https://buy.stripe.com/your-link');

const stripeEl = document.getElementById('stripe-link');

stripeEl.href = stripeUrl;

// Visually dim the link if it's still a placeholder

if (stripeUrl === 'https://buy.stripe.com/your-link') {

stripeEl.style.opacity = '.5';

stripeEl.title = 'Add ?stripe=YOUR_LINK to set the real payment URL';

}

```

## Print Styles

```css

@page { size: letter; margin: 0; }

@media print {

body { background: \#fff; padding: 0; }

.print-bar { display: none; } /* Hide URL bar and buttons */

.invoice-page {

width: 100%;

height: 100vh;

box-shadow: none;

overflow: hidden;

}

}

```

## Best Practices

1. **Show the due date as an actual date** — "Due: April 13, 2026" not just "Net 30" (clients miscount)
2. **Specific line items** — "NiDO Plan Pro — Monthly Subscription" not "Subscription"

3. **Payment instructions on the invoice itself** — Stripe link, bank details, or payment link
4. **Always ask for billing email and production domain** — never invent placeholders

5. **Right-align all numbers** — amounts, quantities, rates, totals
6. **Bold the total due** — it should be the most visually prominent number on the page

7. **Highlight missing required fields in amber** — if `client`param is missing, color the field`#D97706` as a visual warning to the sender
8. **Auto-fill dates dynamically** — invoice date defaults to today, due date to today + 30 days, service period to next calendar month. Only override if the user passes explicit date params.

9. **Dates: use noon (`T12:00:00`) when parsing ISO dates** — avoids timezone off-by-one errors where`2026-04-01` renders as March 31

## Limitations

- Cannot send invoices, process payments, or track payment status
- Tax calculation is flat-rate per invoice — doesn't handle mixed VAT rates per line or US multi-state nexus

- Not a substitute for accounting software; no ledger integration
- Puppeteer / headless Chrome does not work on NixOS — use `window.print()` (browser print → Save as PDF) instead
