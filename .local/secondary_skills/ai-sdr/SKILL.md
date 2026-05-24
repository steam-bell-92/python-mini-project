---
name: ai-sdr
description: Find relevant companies and leads for B2B sales with ICP definition and qualification frameworks.
---

# AI SDR

Find relevant companies and leads for B2B sales. Define ideal customer profiles, identify target accounts, qualify prospects, and organize research for outreach.

## When to Use

- User wants to find companies that match their ICP
- User needs to build a prospect list for sales outreach
- User wants to research target accounts
- User needs lead qualification analysis

## When NOT to Use

- Writing outreach sequences (use sdr-outreach or cold-email-writer skills)
- Recruiting candidates (use ai-recruiter skill)
- General market research (use deep-research skill)

## Methodology

### Step 0: Interview the User About Their Business

**Before doing any research, interview the user.** Most users won't give you enough context unprompted — they'll say "find me customers" without explaining what they sell or who buys it. Use multi-option quizzes to make this fast and low-friction. Ask one question at a time.

**Question flow:**

1. **What do you sell?**
   - A) Software / SaaS
   - B) Physical product
   - C) Professional services / consulting
   - D) Marketplace / platform
   - E) Something else (describe)

2. **Who buys it?**
   - A) Other businesses (B2B)
   - B) Consumers (B2C / DTC)
   - C) Both

3. **(If B2B) What size companies?**
   - A) Startups / small teams (1-50 people)
   - B) Mid-market (50-500)
   - C) Enterprise (500+)
   - D) Not sure yet

4. **What's your price point?**
   - A) Under $100/mo
   - B) $100-$1,000/mo
   - C) $1,000-$10,000/mo
   - D) $10,000+/mo or custom pricing
   - E) One-time purchase

5. **Who inside the company makes the buying decision?**
   - A) Engineering / technical (CTO, VP Eng, developers)
   - B) Marketing (CMO, growth, content)
   - C) Sales / revenue (CRO, VP Sales, RevOps)
   - D) Operations / finance (COO, CFO)
   - E) Founder / CEO directly
   - F) Not sure

6. **Do you have existing customers?**
   - A) Yes, paying customers — I can describe who they are
   - B) A few early users / pilots
   - C) No customers yet

7. **(If they have customers) What do your best customers have in common?** (free text — this is the most valuable answer)

8. **Any industries or verticals you're focused on?** (free text or skip)

**If the user provides a detailed prompt upfront**, skip the questions they already answered. Don't re-ask what's obvious. But if key info is missing (who buys, what size, what price), ask before proceeding — the ICP will be wrong without it.

### Step 1: Define ICP (Ideal Customer Profile)

An ICP describes accounts where three things are true: they **can buy** (budget/size fit), they **will buy** (pain exists now), and they **will stay** (retention profile). Pick 6-10 attributes — more than 10 and nothing qualifies.

| Attribute | How to define it | Example |
|-----------|------------------|---------|
| Headcount | Hard range, not "SMB" | 50-500 employees |
| Revenue | Estimate from headcount if private | $10M-$100M ARR |
| Industry | NAICS/SIC codes or named verticals | SaaS, fintech, digital health |
| Geography | Where you can legally sell + support | US, UK, Canada |
| Tech stack | Tools that signal fit (technographics) | Uses Salesforce + Segment + AWS |
| Funding stage | Proxy for budget + growth pressure | Series A-C, raised in last 18mo |
| Hiring signals | Job posts reveal priorities | Hiring "RevOps" or "Head of Data" |
| Negative signals | Disqualifiers — the sharpest filter | <20 employees, agency model, on-prem only |

**ICP vs Buyer Persona:** ICP = which company. Persona = which human inside it. A Series B fintech (ICP) has a VP Eng who cares about velocity and a CFO who cares about cloud spend (two personas, different messaging).

### Step 2: Source Accounts

**Free sources (use `webSearch` + `webFetch`):**

- **Crunchbase** — `site:crunchbase.com "series a" fintech 2025` for funding events
- **LinkedIn** — `site:linkedin.com/company [industry] "11-50 employees"` (headcount filter leaks into page text)
- **BuiltWith / Wappalyzer lookups** — `webFetch` a prospect's homepage, then scan source for tech signatures (Segment snippet, Intercom widget, Shopify checkout)
- **Job boards** — `site:linkedin.com/jobs "[target company]" "data engineer"` reveals what they're building; `site:greenhouse.io` and `site:lever.co` for startup hiring
- **G2 / Capterra category pages** — companies reviewing competitors are in-market
- **GitHub orgs** — public repos reveal tech stack and eng team size for dev-tool ICPs
- **SEC EDGAR** (public cos) — 10-K "Risk Factors" sections list the exact problems they're worried about

**Paid sources the user likely has (shape output for these):**

- **Apollo** (~210M contacts, $49+/mo) — best value for SMB/mid-market, filters on headcount growth + job postings + intent
- **LinkedIn Sales Navigator** (~1B profiles) — most accurate job-change data, but no email export
- **ZoomInfo** — strongest US enterprise coverage + intent data (tracks content consumption across the web)
- **Clay** ($134+/mo) — waterfall enrichment: chains Apollo → Hunter → Cognism to maximize match rate. Best for teams with RevOps capacity.
- **Cognism** — best EU/UK data + phone-verified mobiles (GDPR-compliant)

### Step 3: Buying Signals (Trigger Events)

Prospects with an active trigger convert 3-5x higher. Rank by signal strength:

| Signal | Why it matters | How to find it |
|--------|----------------|----------------|
| New exec in target persona | New VPs buy tools in first 90 days | `site:linkedin.com "[company]" "I'm excited to join"` or Sales Nav job-change alerts |
| Funding round | Budget just unlocked | Crunchbase, `webSearch: "[company] raises"` |
| Hiring spike in relevant role | Building the team that needs you | LinkedIn Jobs count, `site:greenhouse.io/[company]` |
| Tech stack change | Migration = pain = budget | BuiltWith historical, job posts mentioning "migrating from X" |
| Competitor displacement | Negative G2 review of competitor | `site:g2.com "[competitor]" 1-star OR 2-star` |
| M&A / new product launch | Org chaos creates tool gaps | Press releases, TechCrunch |
| Earnings call mentions | Public co priority signals | `webFetch` SeekingAlpha transcripts, Ctrl-F for your problem space |

### Step 4: Qualify & Tier

**Fast disqualification (do this first):** Before researching, kill accounts that fail any hard constraint — wrong geo, below headcount floor, competitor customer under contract, recent layoffs (no budget).

**Qualification frameworks:**

- **BANT** (Budget / Authority / Need / Timeline) — fine for transactional/SMB
- **MEDDPICC** (Metrics / Economic buyer / Decision criteria / Decision process / Paper process / Identify pain / Champion / Competition) — use for enterprise deals >$50k. The extra P's (paper process, competition) matter because enterprise deals die in legal/procurement, not in the pitch.

**Tiering:**

- **Tier 1** — ICP match + active trigger in last 30 days → full personalization, multi-channel, SDR owns it
- **Tier 2** — ICP match, no trigger → lighter-touch automated sequence, monitor for triggers
- **Tier 3** — Partial fit → newsletter/nurture, revisit quarterly

### Step 5: Scale with Parallel Agents

**Target minimum 40 prospects.** A single sequential search won't get there fast enough. Use `startAsyncSubagent` to run **5 parallel research agents**, each focused on a different search angle:

1. **Industry/vertical search** — companies in the target vertical via Crunchbase, G2 category pages
2. **Funding/growth search** — recently funded companies matching the ICP
3. **Hiring signal search** — companies hiring for roles that indicate they need the user's product
4. **Competitor customer search** — companies using competitors or reviewing them on G2/Capterra
5. **Lookalike search** — competitors and alternatives to any strong-fit companies already found

Each agent should return 10-15 prospects with all columns filled in. Use the `wait_for_background_tasks` tool to wait for them, then deduplicate and merge into the final spreadsheet.

### Step 6: Output as a Spreadsheet

**Build a real spreadsheet** using the excel-generator skill or write a CSV file — not a markdown table. The output should be something the user can import directly into a CRM, Clay, or Apollo.

**Columns:**

| Company | Domain | Headcount | Fit Score (1-5) | Trigger | Trigger Date | Target Contact Name | Target Title | LinkedIn URL | Email (if found) | Why Now (1 sentence) |

- **LinkedIn URL** — search for the target persona at the company: `site:linkedin.com/in "[company]" "[title]"`. Include direct profile links.
- **Email** — look for email patterns via `webSearch("[company] email format" OR "[name] [company] email")`. Common patterns: `first@company.com`, `first.last@company.com`. If not found, leave blank and note the likely format.
- **Why Now** — the most valuable column. It's the first line of the cold email.

The spreadsheet should be downloadable and ready to import — not just displayed as text.

### Deep Research for Complex ICPs

For industries or markets you don't know well, pull in the **deep-research** skill to build context before prospecting. This is especially useful when:

- The user sells into a niche vertical you don't have strong priors on (e.g., "construction tech", "veterinary SaaS")
- You need to understand market landscape, key players, and buyer behavior before defining the ICP
- The user wants competitor analysis as part of the prospecting process

Use deep-research to gather industry context, then return here to build the prospect list with that knowledge.

## Agent Tactics

**Tech stack detection:**
Use `webSearch("[company] tech stack" OR "[company] built with")` to find BuiltWith/Wappalyzer/StackShare profiles. Common signatures to look for in search results:

- Segment, Intercom, Stripe, Shopify, Google Analytics
- Job postings often reveal stack: `webSearch("[company] careers engineering")`

Note: `webFetch` returns markdown content, not raw HTML — script tags and asset URLs are stripped. Use search-based detection rather than HTML source scanning.

**Waterfall search pattern:** If one query returns nothing, don't stop — try synonym variants. "VP Engineering" OR "Head of Engineering" OR "Engineering Lead" OR "CTO" all map to the same persona at different company sizes.

**Lookalike expansion:** Once you find 5 good-fit accounts, search for their direct competitors — `webSearch: "[good-fit company] vs"` or `"[good-fit company] alternatives"` surfaces the category.

## Best Practices

1. **50 researched > 500 sprayed** — reply rates on researched lists run 3-5x higher
2. **Disqualify before you qualify** — negative filters are cheaper to check
3. **Trigger freshness decays fast** — a funding round is a 60-day window, a job change is a 90-day window
4. **Enrich once, cache the result** — don't re-research the same account every sequence
5. **B2B data decays ~30%/year** — any list older than 6 months needs re-verification

## Limitations

- Cannot log into LinkedIn Sales Navigator, Apollo, ZoomInfo, or Clay — builds search strategies the user executes
- Cannot verify email deliverability (user should run through NeverBounce/ZeroBounce before sending)
- Cannot detect intent data (Bombora/6sense-style content consumption signals require paid platforms)
- Company headcount/revenue estimates from public web are approximate — private company data is inherently fuzzy
