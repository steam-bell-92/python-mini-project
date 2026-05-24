---
name: competitive-analysis
description: Perform competitive market analysis with comparisons and strategic recommendations.
---

# Competitive Analysis

Identify competitors, analyze positioning, and deliver actionable recommendations. Skip textbook frameworks (Porter's, PESTLE) unless specifically requested — they're MBA artifacts, not operator tools.

## When to Use

- "Who are my competitors?" / "How do we compare to X?"
- Feature comparison matrix or positioning map needed

- Fundraising deck competition slide
- Finding market gaps

## When NOT to Use

- General market sizing (use deep-research)
- SEO-specific competitor keyword analysis (use seo-auditor)

## What Practitioners Actually Use

Skip Porter's Five Forces. Operators use these four:

**1. April Dunford's Positioning (from "Obviously Awesome")** — the most-used positioning method in B2B SaaS. Five inputs in strict order:

1. Competitive alternatives (what customers would do if you didn't exist — including "spreadsheets" and "nothing")
2. Unique attributes you have that alternatives lack

3. Value those attributes deliver (with proof)
4. Best-fit customer characteristics

5. Market category you win in

Key insight: positioning starts from *alternatives*, not features. Your "competitor" might be Excel.

**2. Wardley Mapping** (Simon Wardley, free book at medium.com/wardleymaps) — plot components on two axes: visibility-to-user (y) vs evolution Genesis → Custom → Product → Commodity (x). Reveals: where competitors overinvest in commoditizing components, where to build vs buy, what's about to become table stakes. Tool: onlinewardleymaps.com (free). Best for platform/infra competition.

**3. Feature comparison matrix** — the unglamorous workhorse. Rows = capabilities, columns = competitors, cells = ✓/✗/partial. Battlecards for sales teams are this + "trap-setting questions." Key: weight features by how often they appear in lost-deal notes, not by what engineering thinks matters.

**4. Kano mapping applied to competitors** — categorize each competitor feature as Basic (expected, table stakes), Performance (more = better), or Delighter (unexpected). Kano's insight: today's delighters become tomorrow's basics. Competitors' delighters tell you where the bar is moving.

## Research Toolchain

| Need | Tool | How to use |

|---|---|---|

| Find competitors | `webSearch("[product] alternatives site:g2.com")` | G2's "alternatives" pages are crowdsourced competitor lists |

| Verified user complaints | `webSearch("[competitor] site:g2.com")`, Capterra, TrustRadius | Filter reviews to 1-3 stars. Look for repeated phrases — those are exploitable weaknesses |

| Enterprise IT buyers | PeerSpot (formerly IT Central Station) | More technical, less marketing-gamed than G2 |

| Pricing (often hidden) | `webFetch`competitor /pricing page, Wayback Machine for historical,`webSearch("[competitor] pricing reddit")` for leaked enterprise quotes | |

| Tech stack | `webFetch("https://builtwith.com/[domain]")` — 673M+ sites, 85k+ technologies. Wappalyzer similar. | Reveals: are they on legacy stack? What vendors? Switching cost signals |

| Traffic/channel mix | SimilarWeb (reliable for large sites, unreliable <50k visits/mo) | See which channels drive competitor traffic |

| Funding/team size | Crunchbase free tier, `webSearch("[competitor] raises TechCrunch")` | |

| Strategic direction | `webSearch("[competitor] site:linkedin.com/jobs")` — hiring = roadmap. 5 ML engineers = AI features in 6mo. | |

| Historical messaging | `webFetch("https://web.archive.org/web/2024*/[competitor].com")` | Shows positioning pivots — what they tried and abandoned |

| SEO/content strategy | Ahrefs (paid, $129+/mo) or `webSearch("site:[competitor].com")` to map content | |

| Regional competitors (non-US) | App Store: `curl -sL "https://apps.apple.com/us/search?term=[name]"`· Play Store:`webSearch("[name] site:play.google.com")` · Search in local language | G2/Product Hunt have near-zero coverage outside US/EU |

### Analyzing JS-Rendered Competitor Sites (SPAs)

Many early-stage competitors build their site as a React/Vue/Svelte SPA. `webFetch`and`webSearch`return empty results for these — the HTML shell has nothing but`<div id="root"></div>`. **Always try`curl` via bash first:**

#### Step 1 — Get meta tags from the HTML shell (works even on SPAs)

```bash

curl -sL --max-time 10 "https://competitor.com/" | head -100

# → Reveals: title, meta description, OG tags, and the JS bundle filename

```

##### Step 2 — Extract readable strings from their JS bundle

```bash

# Get the bundle filename from Step 1 output (e.g. /assets/index-AbCd1234.js), then:

curl -sL "https://competitor.com/assets/index-[hash].js" \\

| grep -oE '"[^"]{10,200}"' \\

| grep -iE "(price|plan|free|gratis|feature|bank|sync|categor|budget|presupuest)" \\

| sort -u | head -80

```

###### Step 3 — Check static files for site structure

```bash

curl -sL "https://competitor.com/robots.txt"

curl -sL "https://competitor.com/sitemap.xml"

curl -sL "https://competitor.com/manifest.json"

```

This approach can reveal pricing plans, feature descriptions, FAQ content, legal disclaimers, and marketing copy — all embedded in the compiled JS. For example, this technique on `novia.com.do` surfaced: their two pricing tiers ("Plan Cita" = free, "Plan Compromiso" = premium coming soon), their exact value proposition copy, a disclaimer that they have no real-time bank connection, and their full FAQ structure.

## Critical Rule: When the User Names a Specific Competitor

**If the user tells you a competitor exists by name, believe them immediately.** Do not attempt to verify through web searches first — that costs multiple failed rounds. Instead:

1. **Ask for the URL right away** if you don't already have it: *"Can you share their website or App Store link?"*
2. **Once you have a URL**, go directly to the SPA research chain (curl → bundle extraction) — do not webFetch or webSearch the name first.

3. **If you have no URL and searches return nothing**, ask the user for 3–5 key facts: what it does, price, platform, 1–2 differentiators. User knowledge > empty search results every time.

The user naming a competitor is the highest-confidence intelligence you will receive. Don't waste rounds trying to independently confirm what they already know.

## Zero Search Results Protocol

When `webSearch`and`webFetch` both return empty results for a competitor, follow this decision tree in order — **do not repeat the same failed approach with different keywords:**

1. **Try curl on the homepage** (catches SPA meta tags — see SPA section below)
2. **Try curl on their JS bundle** (catches pricing, features, copy — see SPA section)

3. **Try App Store / Play Store** — search `apps.apple.com`and`play.google.com` directly for the app name; the store listing contains descriptions, screenshots text, and reviews
4. **Try social proof search** — `webSearch("[name] instagram OR twitter OR linkedin")` — even tiny startups have social profiles

5. **Ask the user** — if all above fail, ask for 3–5 facts and build the profile from that. State clearly: *"I can't find [name] through any of my research tools. Can you tell me what they do, their price, and their main features?"*

**Empty results ≠ no competition.** In niche, regional, or non-English markets (Latin America, Caribbean, Southeast Asia, MENA), G2/Capterra/Product Hunt have near-zero coverage. An app can have 10,000 active users and zero English web presence.

## Niche and Regional Market Research

Standard tools (G2, Capterra, Product Hunt) are US/English-centric. For non-US markets use these instead:

| Market type | Where to look |

|---|---|

| Latin America | App Store regional search (`apps.apple.com/[country-code]/`), Google Play with`hl=es`, local tech blogs (Contxto, Startup Genome LatAm), AppFollow for store rankings |

| Caribbean / Emerging | Instagram/Facebook pages (startups in these markets often exist only on social), local chambers of commerce, fintech-specific databases (Finnovista, IDB Fintech census) |

| Any niche market | Search in the local language — always try Spanish/Portuguese/French/etc. queries, not just English. A Dominican app will not appear in English results. |

| App stores (universal) | `curl -sL "https://apps.apple.com/[country]/search?term=[query]"` and Play Store search — app descriptions contain features and positioning that web searches miss |

**Rule:** Always run at least one search in the target market's primary language before concluding no local competitors exist.

## Methodology

**Step 1: Frame** — Get from user: their product, target customer, and who THEY think competes. Their list is always incomplete — but treat every name they give you as a confirmed lead, not a hypothesis to verify.

**Step 2: Expand the competitor set** — Run `webSearch("[known competitor] alternatives")`and`webSearch("[category] vs")`. Check G2 category pages. Add indirect competitors (different product, same job) and the "do nothing" option. **Also search in the local market language** if the product targets a non-English market.

**Step 3: Per-competitor dossier** — For each (limit to 5-7 for depth):

- Positioning one-liner (their homepage H1 or title tag)
- Pricing model + tiers (try /pricing; if SPA use curl; if nothing found, note it explicitly)

- Top 3 strengths (from 5-star reviews, or inferred from their own copy if no reviews exist)
- Top 3 weaknesses (from 1-2 star reviews — use exact customer language; if no reviews, infer from what they don't mention)

- Funding stage + headcount (Crunchbase/LinkedIn)
- Recent product launches (changelog, blog, Product Hunt)

**If a competitor is a direct local rival** (same market, same core use case, same pricing model): flag them separately as "Direct Competitor" and add a dedicated head-to-head comparison section — don't just include them as one row in the matrix. Make clear: *what does the user's product do that this one doesn't, and vice versa?*

**Step 4: Synthesize** — Build the feature matrix. Plot on a 2×2 (pick the two axes the *buyer* cares about, not the ones that make user look good). Identify white space.

**Step 5: Recommend** — Not "monitor the threat." Specific: "Competitor X's reviews mention slow support 23 times — lead with your SLA in sales calls."

## Ongoing Monitoring

Competitive landscapes shift constantly — pricing changes, features launch, funding rounds close. The analysis you just delivered is a snapshot. This section defines monitoring as a **second deliverable** the agent offers immediately after the report, not optional advice.

### Always Offer Monitoring Activation

At the end of every competitive analysis, **always** ask:

> *"Would you like me to set up ongoing monitoring for these competitors? I'll generate your alert links, a bookmark bundle, and a monthly ritual checklist — takes about 2 minutes to activate. Where do you want alerts to land?"*

Do not skip this offer. Present it as a distinct, activatable package — not a footnote.

### Channel Decision Tree

Ask the user which channel they prefer, then follow the matching setup path. Priority order: **Slack → Teams → Email → Manual file**.

```text

Does the user have Slack?

YES → Set up Slack RSS feeds + optional webhook

NO → Does the user work in a Microsoft org (Teams)?

YES → Set up Teams RSS connector

NO → Set up Google Alerts (email)

Always: also save competitor-monitoring.md to the project regardless of channel chosen.

```

If the user is unsure or doesn't answer, default to **Google Alerts** (zero-friction, universally available) plus the project file.

### Per-Channel Setup Instructions

#### Slack

##### Option A — RSS feeds (native, free, no admin required)

```text

/feed subscribe https://[competitor].com/changelog/rss

/feed subscribe https://[competitor].com/blog/rss

```

Run these commands in a dedicated `#competitive-intel` channel. The agent should generate the exact feed URLs for each competitor and give the user the ready-to-paste commands.

###### Option B — Google Alerts → Slack (via Zapier or Make, free tier)

1. Create a Gmail label called "Competitor Alerts" (for each Google Alert)
2. In Zapier/Make: Trigger = new email with label "Competitor Alerts" → Action = post message to `#competitive-intel`

3. The agent provides exact Zapier/Make setup steps when this option is chosen

###### Option C — Incoming webhook (advanced)

When the user runs the monthly ritual on demand, the agent can post a summary to a Slack webhook URL. The user provides the webhook URL; the agent stores it in the monitoring brief for future use.

#### Microsoft Teams

##### RSS connector (native, free)

1. Open the target channel → click `...` → Connectors → RSS
2. Paste the feed URL and set a display name

3. The agent generates the exact feed URLs for each competitor's changelog and blog

###### Power Automate (for Microsoft 365 orgs)

Trigger: new email matching subject pattern → Post message in Teams channel. The agent describes the exact flow when this option is chosen.

#### Google Alerts (Email — universal fallback)

For each competitor, generate a ready-to-click alert URL:

```text

https://www.google.com/alerts?q=[COMPETITOR+NAME]&hl=en&gl=us&source=web&hl=en

```

Replace `[COMPETITOR+NAME]` with the URL-encoded competitor name. The user clicks once to activate. Recommend setting delivery to "As it happens" for major competitors, "At most once a week" for minor ones.

Also generate alerts for: `"[competitor] pricing"`,`"[competitor] raises"`,`"[competitor] launches"`.

#### Manual Project File (always generated)

Regardless of which channel is chosen, always save a `competitor-monitoring.md` file to the project root. This file is the source of truth and last-checked log. Structure:

```markdown

# Competitor Monitoring Brief

Last updated: [date]

## Competitors tracked

- [Name] — [URL] — Alert channel: [Slack/#channel | Teams/#channel | Email]

## Bookmark bundle

Per competitor: pricing page, changelog/blog, App Store listing, LinkedIn jobs, G2 reviews page

## Change log

| Date | Competitor | What changed | Action taken |

|------|------------|-------------|--------------|

```

### The Monitoring Package Deliverable

When the user activates monitoring, the agent generates and delivers four items:

1. **Alert bundle** — ready-to-click Google Alert URLs (or paste-ready Slack/Teams commands), one set per competitor
2. **Bookmark list** — 5 URLs per competitor: pricing page, changelog or blog, App Store listing, LinkedIn jobs, G2/Capterra reviews page

3. **Ritual card** — the 30-minute monthly checklist (see below), saved to `competitor-monitoring.md`
4. **On-demand command** — a natural language prompt the user can paste back at any time: *"Run my monthly competitive check for [competitor name]"* — the agent then runs the ritual and updates the monitoring brief

### 30-Minute Monthly Ritual

A structured, timed sequence the user (or agent, on demand) runs once per month per competitor:

| Minutes | Task | What to look for |

|---|---|---|

| 0–5 | Check Google Alert digest (or Slack/Teams channel) | Any press coverage, blog posts, or product announcements since last month? |

| 5–10 | Open App Store listing | Any version updates? Read the 3 most recent reviews for new complaint patterns |

| 10–15 | Open their changelog or blog | Any feature launches? Note the category (pricing, UX, integrations, AI) |

| 15–20 | Scan their jobs page | Any new roles? 3+ ML/AI roles = AI feature coming. Enterprise Sales hire = moving upmarket |

| 20–25 | Check pricing page (compare to Wayback Machine if needed) | Any tier changes, price increases, or new plan names? |

| 25–30 | Update `competitor-monitoring.md` | Log date + what changed. Flag anything that warrants a response |

**Output of each ritual:** one row added to the change log in `competitor-monitoring.md`. If a change is significant (new pricing tier, major feature launch, funding round), escalate: *"[Competitor] launched [X] — this affects [specific recommendation from the original report]. Consider [specific response]."*

### On-Demand Ritual Invocation

The user can trigger the ritual at any time by telling the agent:

> *"Run my monthly competitive check for [competitor name]"*
>
> *"What's changed with [competitor] since last month?"*
>
> *"Update my competitive monitoring"*

The agent reads `competitor-monitoring.md` to get the last-checked date and bookmark list, runs through the ritual checklist, and appends findings to the change log.

## Output — Ask the User First

Before building any deliverable, **ask the user how they want the analysis presented** using the query tool:

> "How would you like your competitive analysis presented — as a **slide deck**or a**written report**?"

Then follow the appropriate path below. Do not default to one format without asking.

---

### Option A: Slide Deck

**Load the `slides` skill** and build a Replit slide deck. Follow the slides skill's conventions for manifest, components, and design. Structure the deck as:

1. **Title slide** — Product name, category, date
2. **Executive summary** — Positioning statement (Dunford format) + top 3 recommendations

3. **Competitive landscape** — Table: Company, Stage, Pricing, Strength, Weakness
4. **Feature matrix** — Rows = capabilities, columns = competitors, cells = checkmark/x/partial, color-coded

5. **Positioning map** — 2×2 chart (matplotlib/plotly image)
6. **White space & opportunities** — Gaps + Kano analysis

7. **Action plan** — Top 3 specific actions + battlecard trap-setting questions
8. **Sources** — Numbered URLs for every claim

---

### Option B: Written Report (PDF + Web Preview)

**Do not output a markdown summary.**Build a polished competitive analysis report as a professional PDF using**jsPDF**, with a React web preview that visually matches page-by-page. The report should look like a strategy consulting deliverable.

**Build order:** Generate the PDF first and present it to the user. Then build the web preview. The PDF is the primary deliverable — the web app is a visual complement.

#### Report Structure

1. **Page 1 — Executive Summary:** Product name, category, date. Positioning statement (Dunford format): For [target customer] who [need], [product] is a [category] that [key benefit]. Unlike [primary alternative], we [key differentiator]. Top 3 strategic recommendations (the "so what").
2. **Page 2 — Competitive Landscape:** Table with Company, Stage, Pricing, Strength (from reviews), Weakness (from reviews). Funding/headcount context for each competitor.

3. **Page 3 — Feature Matrix:** Rows = capabilities, columns = competitors, cells = checkmark/x/partial. Weight column (1-5) based on buyer conversation frequency. Color-code: green where the user's product wins, red where it loses.
4. **Page 4 — Positioning Map:** 2x2 chart with axes based on buyer decision criteria (not vanity metrics). Each competitor plotted with logo or labeled dot. Generated via matplotlib or plotly, embedded as image.

5. **Page 5 — White Space & Opportunities:** Gaps no one serves well, with evidence from reviews and market data. Kano analysis: which competitor features are Basics vs Performance vs Delighters.
6. **Page 6 — Action Plan:** Top 3 specific actions with source citations. Battlecard-style "trap-setting questions" for sales calls.

7. **Final Page — Sources:** Numbered URLs for every claim.

#### PDF Generation (jsPDF)

Use **jsPDF** to generate the PDF with explicit point-based layout:

- `new jsPDF({ unit: "pt", format: "letter" })` — US Letter: 612×792pt
- Use 36pt margins (0.5in). Content area: 540w × 720h points.

- **Track Y position** as you render each element. When the next element would exceed `PAGE_H - MARGIN`, call`doc.addPage()` and reset Y to the top margin. Never let content silently overflow — always check before rendering.
- Embed charts as images via `doc.addImage()` — scale to fit content width while respecting remaining page height.

- Add a **header**and**footer**on each page.**Footer must save/restore Y position** — do not let footer drawing move the content cursor, or subsequent content will force blank pages.
- Before any manual page break, check whether a fresh page was already added (track an `isNewPage` flag). Only add a page if you're not already on a fresh one.

- **Required before presenting:** After generating the PDF, verify there are no blank pages. If any page is blank, fix the page-break logic and regenerate.

#### Web Preview

The React web artifact renders the same report data as an HTML version that **visually mirrors the PDF page-by-page**. Each "page" should be a fixed-size container (816×1056px — US Letter at 96dpi) with the same margins, typography, and chart placement as the PDF.

## Honesty Rules

- If the user's product loses on most dimensions, say so — then find the niche where they win
- "No competitors" is never true. The competitor is always at least "build it yourself" or "do nothing"

- Flag when data is thin (e.g., "SimilarWeb shows <50k visits — estimate is low-confidence")
- Cite every claim to a URL the user can verify

- **Flag inferred data:** if a competitor profile was built from JS bundle strings or user-provided facts (not reviews or public docs), say so: *"Profile based on homepage copy and compiled JS — no independent reviews available."*
- **Zero search results is not the same as no competitor.** If searches return nothing for a named competitor, say: *"I couldn't find [name] in any public database — this likely means they have low SEO footprint, not that they don't exist."*

## Limitations

- G2/Capterra reviews skew toward mid-market SaaS; thin for enterprise and consumer
- SimilarWeb is inaccurate for sites under ~50k monthly visits

- Cannot access paid CI tools (Klue, Crayon, Kompyte) or PitchBook
- Pricing pages lie — enterprise pricing is almost never public

- **webFetch and webSearch fail for:** JS-rendered SPAs (use curl), social media URLs (LinkedIn, Instagram, Twitter — blocked by robots), sites behind Cloudflare or login walls, and any product with <1k English web mentions
- **Regional/emerging market blind spot:** G2, Product Hunt, Crunchbase have minimal coverage of LatAm, Caribbean, SEA, MENA, and African markets. Local competitors in these markets will often have zero results in standard research tools — always fall back to local-language search, App Store regional search, and direct curl analysis

- **Monitoring channel assumptions:** Slack RSS setup requires the native Slack RSS app to be installed in the workspace (free, but needs a workspace admin in some orgs). Teams RSS connector requires a Teams channel with Connectors enabled. If neither is available, fall back to Google Alerts → email without requiring any third-party tools or admin permissions.
