---
name: programmatic-seo
description: Build SEO-optimized pages at scale using templates and data.
---

# Programmatic SEO

Build SEO-optimized pages at scale using templates and data. Create page generators that target keyword patterns and produce unique, valuable content for each variation.

## When to Use

- User wants to create many SEO-driven pages from a template (e.g., "[product] vs [competitor]", "[service] in [city]")
- User mentions programmatic SEO, template pages, directory pages, location pages, or comparison pages at scale

- User wants to build an "alternatives to X" page set, integrations directory, or glossary
- User has a data set they want to turn into individual landing pages

## When NOT to Use

- Auditing existing SEO issues (use seo-auditor skill)
- Writing a single blog post or landing page (use content-machine skill)

- One-off competitive analysis (use competitive-analysis skill)

## Core Principles

1. **Information gain is everything** — Every page must contain information the user cannot find on existing top-10 results. Proper H1s, keyword density, and clean structure are baseline hygiene, not a ranking advantage. Pages that "look like SEO" but add no new information are what Google's spam systems now target.
2. **Unique value per page** — Every page must provide value specific to that page, not just swapped variables in a template. If you removed the entity name, would two pages be indistinguishable? If yes, don't publish.

3. **Proprietary data wins** — Hierarchy: proprietary > product-derived > user-generated > licensed > public (weakest). The strongest pSEO pages contain data no one else has — original tests, first-party metrics, real user reviews, proprietary calculations.
4. **Subfolders, not subdomains** — `yoursite.com/templates/resume/`not`templates.yoursite.com/resume/`

5. **Match search intent precisely** — Pages must match the intent behind the query, not just contain the keywords. This means choosing the right page type (blog post vs. comparison table vs. tool vs. directory listing), answering the actual question, and structuring content the way users expect for that query type.
6. **Quality over quantity** — 100 great pages beat 10,000 thin ones. Scale without information gain is just industrialized noise. Google has more content than it needs — your pages must earn their place by being genuinely better than what already ranks.

7. **Topical authority compounds** — A site that demonstrates deep expertise in a specific topic earns trust signals that lift all pages in that topic cluster. Scattered, shallow coverage across unrelated topics builds no authority.

---

## ⚠️ CRITICAL: Check the App's Rendering Strategy First

**Before writing a single line of code**, determine whether the existing application is a Single Page Application (SPA).

**SPAs (React, Vue, Angular, Svelte) are invisible to Googlebot.** Googlebot fetches raw HTML and does not execute client-side JavaScript. A React component that renders `<h1>Currency Converter</h1>`only works in a browser — Googlebot sees an empty`<div id="root"></div>`.

### Decision Tree

```text

Is the app a SPA (React/Vue/Angular)?

│

├── YES → SEO pages MUST be server-rendered (SSR)

│ Options:

│ A. Express/Fastify route returning a complete HTML string ← simplest for existing SPAs

│ B. Migrate to Next.js/Nuxt/SvelteKit with SSR support

│ C. Add a static site generator (Astro) alongside the SPA for SEO pages only

│

└── NO (already Next.js, Nuxt, etc.) → Use the framework's built-in SSR/SSG/ISR patterns (see Step 6)

```

**The SPA trap:** The most common pSEO mistake is adding routes to a React Router / Wouter / Vue Router app and assuming they will be indexed. They will not. Always verify by `curl`-ing the URL and checking if the content is present in the raw HTML response:

```bash

curl -s https://yoursite.com/your-seo-page | grep "target keyword"

# If empty or only returns <div id="root"></div> → not crawlable

```

---

## Content Authenticity — Don't Hallucinate Business Data

When building programmatic SEO for **the user's own company**, you will not have access to their internal data (customer stories, case studies, testimonials, product metrics, pricing, team bios, etc.). **Do not fabricate this information.**

### Before generating any company-specific content, ask the user for

- Customer names, logos, or testimonials they want featured
- Case study data (metrics, outcomes, quotes)

- Product-specific details (features, pricing tiers, integrations list)
- Any proprietary data that should populate template variables

#### If the user hasn't provided this data, default to safe content patterns

- Industry research and statistics (sourced via `webSearch`)
- General descriptions of the problem/solution category

- Feature explanations based on what's publicly visible on their site (use `webFetch` on their domain)
- Placeholder blocks clearly marked `[INSERT: customer testimonial]`or`[INSERT: case study metrics]`

- Comparison data pulled from public sources (G2, Capterra reviews via `webSearch`)

**Never generate:** fake customer quotes, fabricated ROI numbers, invented case studies, made-up testimonials, or fictional company metrics. These damage trust and can create legal liability.

For **generic/research topics** (e.g., "[city] cost of living", "[tool A] vs [tool B]", glossary terms), use `webSearch` to gather real data and cite sources.

---

## ⚠️ Strategic Judgment — What AI Cannot Do For You

**This is the most important section in this skill.** AI excels at scaling execution — drafting content, structuring pages, generating variations. But it cannot make the strategic decisions that determine whether a pSEO campaign succeeds or fails. These decisions must come from the user (or a human SEO strategist), and the agent must actively prompt for them rather than making assumptions.

### Decisions that require human judgment

Before building anything, the user must answer (or the agent must ask):

1. **Is this keyword worth a page at all?** Not every keyword with search volume deserves a page. If the top 10 results are dominated by high-authority brands and the user's site has no topical authority, building 500 pages won't help.
2. **What page type matches the query intent?** The same topic might need a blog post, a comparison table, an interactive tool, a directory listing, or a data profile. Getting the page type wrong means the page will never rank, regardless of content quality. For example:

- "best CRM for real estate" → listicle/comparison (not a product page)
- "HubSpot vs Salesforce" → head-to-head comparison (not a blog post)

- "what is a CRM" → educational/glossary (not a product page)
- "CRM pricing" → pricing table with real numbers (not a blog post about pricing)

1. **What information gain does this page offer over the current top 10?** If the answer is "nothing — we're just rewriting what's already there with AI," do not build the page. Specifically ask: do we have original data, unique analysis, proprietary metrics, real case studies, or first-hand experience that the current results lack?
2. **Does the user's site have topical authority in this area?** A brand-new domain publishing 200 glossary pages on a topic it has no track record in will be ignored. Topical authority is built through depth (many related, high-quality pages), external trust signals (backlinks from relevant sites), and user engagement over time.

3. **What is the commercial intent and conversion path?** Pages that attract traffic but have no clear next step for the user waste crawl budget and dilute site quality. Every pSEO page should have a purpose beyond "get impressions."

### What the agent should do

- **Always ask the user** what unique data, experience, or perspective they can bring to the topic before generating content. If they say "just write something about X," push back and explain that pages without information gain will not rank.
- **Never assume scale equals strategy.** If the user asks for "500 SEO articles," the correct response is to first validate whether 500 pages is the right number, whether the topics have demand, and whether the user has enough unique data to make each page valuable.

- **Recommend starting small.** Build 10-20 high-quality pages first, validate they get indexed and earn impressions, then scale what works. This is the opposite of the "blast 500 pages and hope" approach.
- **Be explicit about what AI is doing vs. what requires human input.** AI writes the page. The human decides whether the page should exist.

### The "SEO cosplay" trap

A page can have perfect H1 tags, clean H2/H3 hierarchy, optimized meta descriptions, proper schema markup, good keyword density, and fast load times — and still rank nowhere. These are table stakes, not differentiators. Google's ranking systems evaluate whether a page genuinely satisfies the user's query better than alternatives. Structure without substance is what practitioners call "SEO cosplay" — it looks like SEO but doesn't perform.

**The agent must not conflate technical SEO hygiene with content quality.** Both are necessary. Neither is sufficient alone.

---

## Information Gain — The Core Quality Signal

Google's systems increasingly evaluate "information gain" — whether a page adds something new to the corpus of existing results for a query. This is the single most important concept in modern pSEO.

### What counts as information gain

| Source of gain | Example | Strength |

|---|---|---|

| **Original data / metrics** | Your own A/B test results, proprietary benchmarks, internal analytics | Strongest — impossible to replicate |

| **First-hand experience** | Actual product reviews you conducted, real case studies with named clients | Very strong — hard to fake |

| **Unique analysis** | Novel comparisons, calculated scores, derived insights from raw data | Strong — requires expertise |

| **Curated judgment** | Expert picks, opinionated rankings with reasoning, "here's what we'd actually use" | Moderate — requires credibility |

| **Structured aggregation** | Data from multiple sources combined into a single useful view (with attribution) | Moderate — useful but reproducible |

| **Rewritten common knowledge** | The same information available on 50 other sites, just rephrased | Zero — this is what gets penalized |

### The information gain test

Before publishing any pSEO page set, run this test on 5 random pages:

1. Search Google for the target keyword
2. Read the top 3 results

3. Read your generated page
4. Ask: **"Does our page contain at least one piece of information, data point, or insight that none of the top 3 results have?"**

5. If no → do not publish. Improve the data source or reduce the page set to only pages where you have genuine information gain.

### Scaled content abuse (Google's 2024+ spam policy)

Google now explicitly targets "scaled content abuse" — content produced at scale (whether by AI, humans, or automation) that exists primarily to manipulate rankings rather than help users. The pattern Google detects is:

- Many pages with similar structure
- Smooth, readable prose with no new information

- Comprehensive coverage that is really just reorganized common knowledge
- High page count with no corresponding trust signals or user engagement

- Each page is readable, but after reading it you've learned nothing new

**This pattern triggers penalties regardless of whether AI wrote the content.** A human content farm producing the same pattern gets the same treatment. The issue is not AI — it is the absence of value at scale.

---

## Proven Playbooks (Real Traffic Numbers)

| Playbook | URL pattern | Who does it | Scale |

|---|---|---|---|

| **Integrations** | `/apps/[A]/integrations/[B]` | **Zapier** — ~56k pages, 5.8M+ monthly organic visits, ranks for 1.3M keywords. Proprietary data (triggers/templates per app pair) no one else can replicate. | N² combinations |

| **Conversions** | `/currency-converter/[from]-to-[to]-rate` | **Wise** — 8.5M pages across locale subfolders, 60M+ monthly visits. Live exchange-rate data + fee calculators = unique value per page. | N² × locales |

| **Locations** | `/Restaurants-[city]`,`/[cuisine]-Restaurants-[city]`,`/Restaurants-[neighborhood]` | **Tripadvisor** — 700M+ pages, 226M+ monthly visits. UGC reviews keep pages fresh; layered matrix (city × cuisine × neighborhood). | city × category × modifier |

| **Data profiles** | `/[city-slug]` | **Nomad List** — cost-of-living, internet speed, safety scores per city. Pages are pure data tables — minimal prose, high value. | N entities |

| **Comparisons** | `/[A]-vs-[B]`,`/alternatives/[A]` | **G2, Capterra** — "vs" pages + "alternatives" pages, populated by user reviews. | N² / 2 |

| **Templates** | `/templates/[type]` | **Canva, Notion** — each template is a landing page. | N types |

| **Glossary** | `/learn/[term]` | **Ahrefs, HubSpot** — definition pages cluster topical authority. | N terms |

| **How-to guides** | `/guides/[task]-with-[tool]` | Documentation sites — step-by-step guides, HowTo schema | N tasks × M tools |

| **Personas** | `/[product]-for-[audience]` | "CRM for real estate agents" | N × M |

**The test:** If your data doesn't meaningfully change between page variations, don't build it. Zapier works because Slack+Asana genuinely differs from Slack+Trello. "Plumber in Austin" vs "Plumber in Dallas" with identical boilerplate = thin content penalty.

Layer playbooks for long-tail: Tripadvisor's "Best Italian Restaurants in Chinatown NYC" = curation × cuisine × neighborhood.

### Why these playbooks work — and why copycats fail

Every successful pSEO example above shares one trait: **the data genuinely changes between pages.** Zapier's Slack+Asana page has different triggers, different actions, and different templates than Slack+Trello. Wise's USD-to-EUR page has a different exchange rate, different fee structure, and different historical chart than USD-to-GBP. Tripadvisor's pages have different restaurants, different reviews, and different ratings per city.

Copycats fail because they replicate the URL structure without replicating the information gain. Creating 500 "/service-in-city" pages where only the city name changes and the rest is identical prose is not programmatic SEO — it is spam at scale. Google's systems detect this pattern reliably: many pages, similar structure, no meaningful data variation.

**Before choosing a playbook, ask:** "Do I have genuinely different data for each page variation, or am I just swapping one variable into the same template?" If the latter, reduce the page count to only variations where you have real data, or choose a different playbook entirely.

---

## Implementation

### Step 1: Keyword Pattern Research

- Identify the repeating structure and variables
- Count how many unique combinations exist

- Validate demand: aggregate search volume, distribution (head vs. long tail), trend direction

### Step 2: Data Requirements

- What data populates each page?
- Is it first-party, scraped, licensed, or public?

- How is it updated and maintained?

### Step 3: Template Design

#### Page structure

- H1 with target keyword
- Unique intro (not just variables swapped — conditional content based on data)

- Data-driven sections with original insights/analysis per page
- Related pages / internal links

- CTAs appropriate to intent

##### Ensuring uniqueness — critical to avoid thin content penalties

- Conditional content blocks that vary based on data attributes
- Calculated or derived data (not just raw display)

- Editorial commentary unique to each entity
- User-generated content where possible

### Step 4: Internal Linking Architecture

#### Hub and spoke model

- Hub: Main category page (e.g., "/integrations/")
- Spokes: Individual programmatic pages (e.g., "/integrations/slack-asana/")

- Cross-links between related spokes

Every page must be reachable from the main site. **Update the main app's footer and navigation to include links to SEO hub pages** — SEO pages that aren't linked from the main site are orphan pages that Google may never discover or trust.

Include XML sitemap and breadcrumbs with structured data.

### Step 5: Indexation Strategy

- Prioritize high-volume patterns for initial crawling
- Noindex very thin variations rather than publishing them

- Manage crawl budget (separate sitemaps by page type)
- Monitor indexation rate in Search Console

### Step 6: Build the Page Generator

#### Rendering strategy decision

| Page count | Data freshness | Strategy |

|---|---|---|

| <1,000 | Rarely changes | **SSG** — pre-render everything at build |

| 1,000-100,000 | Changes daily/weekly | **ISR** — pre-render popular subset, generate rest on-demand + cache |

| 100,000+ or live data | Real-time (prices, rates) | **ISR with short revalidate** or SSR |

SSG is fastest but build time scales linearly — 50k pages can mean 30+ min builds. ISR is the pSEO sweet spot: instant deploys, pages generate on first request then cache.

#### For SPAs: Express SSR pattern

When adding pSEO to an existing SPA, the simplest approach is adding Express routes that return complete HTML strings. Organize into three layers:

##### 1. Shared HTML shell (create this first)

```typescript

// server/ssrShared.ts — create before writing any individual page

export function ssrHtmlShell({ title, description, canonical, schemaJson, css, body, ...}): string {

return `<!DOCTYPE html>

<html lang="...">

<head>

<meta charset="UTF-8" />

<title>${title}</title>

<meta name="description" content="${description}" />

<link rel="canonical" href="${canonical}" />

<!-- OG tags, fonts, schema -->

<style>${sharedCss()}${css ?? ""}</style>

</head>

<body>

${header()}

${body}

${footer()}

</body>

</html>`;

}

```

Create this shared shell **before** writing any individual page. Every new SEO page reuses it. This ensures consistent branding (header, footer, fonts, base CSS) across all SSR pages without duplication.

###### 2. Data + page generator modules (one per playbook)

```typescript

// server/glossary.ts

export const TERMS: GlossaryTerm[] = [ /* structured data */ ];

export function getTermHtml(slug: string, logoBase64: string): string | null { ... }

export function getTermIndexHtml(logoBase64: string): string { ... }

```

Keep data as typed arrays/objects in the same file as the generator. This makes content easy to update without touching routing logic.

###### 3. Routes (thin, just wiring)

```typescript

// in routes.ts

app.get("/glossary/:slug", (req, res) => {

const html = getTermHtml(req.params.slug, LOGO_BASE64);

if (!html) { res.status(404).end(); return; }

res.setHeader("Cache-Control", "public, max-age=86400");

res.setHeader("Content-Type", "text/html; charset=utf-8");

res.send(html);

});

```

#### Cache headers per page type

Set cache headers based on data freshness — not one-size-fits-all:

| Page type | Recommended header | Reason |

|---|---|---|

| Static content (glossary, guides) | `public, max-age=86400` | Content rarely changes; CDN can serve |

| Live data (exchange rates, prices) | `no-cache`or`s-maxage=60` | Must be fresh; stale data damages credibility |

| Semi-dynamic (weekly updates) | `public, s-maxage=3600, stale-while-revalidate=86400` | Balance freshness vs. load |

#### For Next.js App Router

```tsx

export async function generateStaticParams() {

const popular = await db.query('SELECT slug FROM entities ORDER BY search_volume DESC LIMIT 500');

return popular.map(e => ({ slug: e.slug }));

}

export const dynamicParams = true;

export const revalidate = 3600;

export async function generateMetadata({ params }) {

const { slug } = await params;

const entity = await getEntity(slug);

return {

title: `${entity.name} — ${entity.category} | Brand`,

description: entity.summary,

alternates: { canonical: `https://site.com/${entity.category}/${slug}` },

};

}

export default async function Page({ params }) {

const { slug } = await params;

const entity = await getEntity(slug);

if (!entity) notFound();

}

```

**Critical ISR rules:** `generateStaticParams`is NOT re-run on revalidation. Must return an array (even`[]`) or the route becomes fully dynamic. Set`dynamicParams = false` only if you want 404s for anything not pre-generated.

#### Astro alternative

Better for content-heavy, less-interactive pages. Ships zero JS by default — better Core Web Vitals.

```js

export async function getStaticPaths() {

const entities = await loadEntities();

return entities.map(e => ({ params: { slug: e.slug }, props: { entity: e } }));

}

```

No native ISR; use on-demand rendering + `Cache-Control: s-maxage=3600, stale-while-revalidate`.

#### Sitemaps at scale

Google's limit is 50,000 URLs per sitemap file. Shard into `sitemap-1.xml`,`sitemap-2.xml`... referenced by a sitemap index. For ISR/SSR sites, generate sitemaps server-side from the DB, not at build time. **Warning:** Google will NOT index all pages immediately — indexation at scale takes weeks/months. Prioritize high-volume slugs in the first sitemap.

---

## SSR-Specific Implementation Notes

### Asset handling in SSR

Frontend assets (images, fonts) processed by Vite/webpack/esbuild are **not** directly accessible to server-side routes. Common problems:

- Images imported with `import logo from "@assets/logo.png"` work in React but not in Express route handlers
- Files copied to `public/` by the build tool may not be served correctly in development

- Files with restricted permissions (`rw-------`) will throw EACCES errors when read from disk

#### Solutions by asset type

| Asset | Recommended approach |

|---|---|

| Logo / brand images | Base64-encode at server startup; embed inline in `<img src="data:...">` |

| Small icons | Inline SVG string in the HTML template |

| External fonts | Google Fonts CDN link in `<head>` |

| Background images | Use CSS gradients or CDN URLs |

```typescript

// Base64 encode logo once at startup — safe for all SSR pages

import fs from "fs";

const logoBuffer = fs.readFileSync("./attached_assets/logo.png");

const LOGO_BASE64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

```

### Header/footer consistency

SSR pages and the React/Vue/SPA app will share the same domain. Users will navigate between them. **Brand consistency is critical** — a mismatch between the main app's header and the SSR page's header breaks trust.

Steps:

1. Study the main app's header/footer colors, logo treatment, link structure, and typography
2. Replicate them in the shared `ssrShared.ts` shell functions — not approximations, pixel-for-pixel matches

3. When the main app's footer is updated (new links, new columns), update the SSR footer function too
4. Conversely, when new SSR hub pages are added (e.g., `/glossary`,`/guides`), add them to the main app's footer navigation

### Logo rendering in SSR

If the logo image has a non-standard aspect ratio or significant whitespace, a plain `height: 48px` will render it incorrectly. Inspect how the main React app clips and positions the logo, then replicate exactly:

```html

<!-- If the main app uses overflow-hidden clipping to show only part of the image: -->

<div style="height:56px; width:160px; overflow:hidden; display:flex; align-items:center; justify-content:center;">

<img src="${LOGO_BASE64}" style="width:auto; height:250%; object-fit:contain; margin-top:-5%;" />

</div>

```

Don't guess — read the main app's logo component before writing the SSR equivalent.

### Breadcrumb placement and negative margins

A common hero design pattern uses negative `margin-top` on the content section to create a "card floating up into the hero" visual effect:

```css

.hero { padding-bottom: 72px; }

.main { margin-top: -32px; } /* pulls first card up into hero */

```

**This breaks breadcrumbs.** If a breadcrumb element sits between the hero and `.main`in the HTML, the negative margin on`.main` will pull the main content over the breadcrumb, hiding it.

**Rule: breadcrumbs must always be the first child inside `.main`**, never between`.main` and the preceding section.

```html

<!-- WRONG: breadcrumb between hero and main -->

<div class="hero">...</div>

<nav class="breadcrumb">...</nav> <!-- will be covered by .main -->

<div class="main">...</div>

<!-- CORRECT: breadcrumb inside main -->

<div class="hero">...</div>

<div class="main">

<nav class="breadcrumb">...</nav> <!-- safely in the content flow -->

<div class="card">...</div>

</div>

```

Additionally, if a page has a breadcrumb and the hero uses large `padding-bottom` (designed to pair with negative margin), that padding becomes wasted dark space. Override it on breadcrumb pages:

```html

<div class="hero" style="padding-bottom: 32px;">

```

---

## Schema Markup by Playbook

Match schema type to content type — don't use a generic WebPage schema when a more specific type exists:

| Playbook | Schema type | Key properties |

|---|---|---|

| Glossary / definitions | `DefinedTerm`+`DefinedTermSet`|`name`,`description`,`inDefinedTermSet` |

| How-to guides | `HowTo`|`step[]`with`HowToStep`,`tool`,`supply` |

| FAQ sections | `FAQPage`|`mainEntity[]`with`Question`+`Answer` |

| Comparisons | `ItemList`or`Review`|`itemListElement[]`,`ratingValue` |

| Data profiles | `Dataset`or`Place`|`name`,`description`,`spatialCoverage` |

| Recipes/templates | `CreativeWork`|`name`,`description`,`genre` |

Multiple schema types can appear on the same page (e.g., a HowTo guide can also have a FAQPage block at the bottom).

---

## Internationalization and Locale Handling

Only add multilingual pSEO when you have **genuinely translated data** — not machine-translated boilerplate. Machine-translating 10,000 thin pages at once is one of the fastest ways to trigger a spam manual action.

### URL structure — subfolders win

| Approach | Example | SEO verdict |

|---|---|---|

| Subfolder | `yoursite.com/es/glosario/presupuesto` | **Preferred** — consolidates domain authority |

| ccTLD | `yoursite.es/glosario/presupuesto` | Strong signal but costly to maintain |

| Subdomain | `es.yoursite.com/...` | Treated as separate site; avoid for pSEO |

| Query param | `yoursite.com/glossary?lang=es` | Not crawlable reliably; never use |

### hreflang implementation

Every page that has a locale variant must declare all variants (including `x-default`) in`<head>`:

```html

<link rel="alternate" hreflang="en" href="https://site.com/glossary/budget" />

<link rel="alternate" hreflang="es" href="https://site.com/es/glosario/presupuesto" />

<link rel="alternate" hreflang="x-default" href="https://site.com/glossary/budget" />

```

Rules:

- Every page in the set must list **all** pages in the set (bidirectional)
- Omitting a language from even one page breaks the cluster for Google

- `x-default` should point to the most general version (usually English or a language-selector page)
- Validate with Google Search Console → Enhancements → International targeting

### Data structure for multilingual pages

Store translations as a map keyed by locale so the generator stays clean:

```typescript

const TERM = {

slug: { en: "budget", es: "presupuesto" },

name: { en: "Budget", es: "Presupuesto" },

definition: { en: "...", es: "..." },

};

function getTermHtml(slug: string, locale: "en" | "es"): string { ... }

```

### Machine-translation risk

Machine-translated prose is detectable by Google and often results in near-duplicate content across locales. Only translate if:

- A human reviews/edits the output, OR
- The page is primarily structured data (tables, numbers, steps) with minimal prose

---

## Content Freshness Signals

Google rewards pages that are genuinely kept up to date. Stale pSEO pages — especially data-driven ones — gradually lose rankings as fresher competitors appear.

### `dateModified` in schema

Every page with structured data should carry a timestamp:

```json

{

"@type": "WebPage",

"datePublished": "2024-01-15",

"dateModified": "2025-03-01"

}

```

**Only update `dateModified`when content actually changes.** Bumping it on a schedule without real changes is a deception signal that Google penalises. If you auto-regenerate pages, tie`dateModified`to the data source's`updatedAt`, not the deploy timestamp.

### When and how to regenerate

| Data type | Trigger strategy |

|---|---|

| Exchange rates / prices | SSR with short cache (`s-maxage=60`); no static generation |

| Product/company data | Webhook from data source on change → re-render and invalidate CDN cache |

| Weekly-updated datasets | Nightly cron job → regenerate changed pages → update sitemap `<lastmod>` |

| Static reference content (glossary, guides) | Regenerate on code deploy only |

For Express SSR, the page is always fresh — no regeneration needed. The cost is latency; mitigate with a CDN in front.

For ISR (Next.js), trigger on-demand revalidation via the revalidation API when upstream data changes:

```typescript

// When data changes, invalidate the specific path

await fetch(`/api/revalidate?secret=TOKEN&path=/glossary/${slug}`, { method: "POST" });

```

### Signals that indicate staleness to Google

- Dates in page content (e.g., "Updated January 2022") that are old
- Prices or rates that no longer match the live source

- Links to pages that now 404
- Schema `dateModified` older than 12 months for competitive queries

---

## Crawl Budget Management at Scale

Crawl budget is the number of pages Googlebot will crawl on your site per day. For sites with 10k+ URLs it becomes a real constraint — Googlebot will simply stop crawling before it reaches all your pages, and newly added pages may take weeks to be discovered.

### What wastes crawl budget

- **Faceted navigation**: Filter/sort URLs like `?color=red&size=M` that produce near-duplicate pages
- **Pagination**: `/page/2`,`/page/3`... where the same products appear on multiple pages

- **Session IDs / tracking params**: `?sessionid=abc123` creating millions of unique URLs
- **Internal search results**: `/search?q=anything` — never crawlable, always thin

### Solutions

**Block via `robots.txt`** (prevents crawling, doesn't affect indexation of already-indexed pages):

```text

User-agent: Googlebot

Disallow: /search

Disallow: /*?sessionid=

```

**`noindex` on parameterized URLs** (crawled but not indexed — use when the URL must exist for users):

```html

<meta name="robots" content="noindex, follow" />

```

**Canonical for near-duplicates** (one sorted/filtered variant is canonical; others point to it):

```html

<!-- On /products?sort=price-asc -->

<link rel="canonical" href="https://site.com/products" />

```

**Pagination**: Use `rel="next"`/`rel="prev"` or consolidate paginated content into one long page. Don't noindex paginated pages if they contain unique products not on page 1.

### Diagnosing crawl budget problems

In Google Search Console → Settings → Crawl stats:

- **Crawled pages/day declining** → Googlebot is throttling due to slow responses or crawl errors
- **Response codes: high 404 rate** → fix broken links; they waste crawl budget

- **Crawled but not indexed** rising → thin content or crawl budget exhausted before quality assessment

For large sites, use separate sitemaps per page type (`sitemap-glossary.xml`,`sitemap-guides.xml`) and prioritize high-value pages in the first sitemap.

---

## AI-Generated Content Policy

### What Google actually detects

Google does not need to determine whether content was written by AI or a human. It identifies a **pattern**: low-cost mass production where pages look different on the surface but are essentially repetitive underneath. The signals of this pattern include:

- Many pages with similar titles and angles
- Smooth, grammatically correct prose with no new information

- Comprehensive coverage that is really just reorganized common knowledge
- Each page is readable, but after reading it you've learned nothing new

- High page count with no corresponding user engagement or trust signals

**This pattern triggers penalties regardless of authorship.** A human content farm producing the same pattern gets the same treatment. The issue is never "AI wrote this" — it is "this adds nothing."

### The correct framing

The question is not: "Is it safe to use AI for SEO content?"

The question is: **"Does this page contain enough information gain, search intent match, and trust signals that Google would rank it — regardless of how it was produced?"**

If yes, AI is a powerful accelerator. If no, AI just lets you produce worthless pages faster.

### Where AI helps in pSEO

| Use case | Why it works |

|---|---|

| Summarising structured data into readable prose | Each page's data is unique → output is unique |

| Generating FAQ blocks from a data object | Templated but data-driven → not boilerplate |

| Translating + adapting content (with review) | Saves time; review catches errors |

| Writing meta descriptions from page data | Short, formula-driven → low risk |

| Structuring raw data into tables and comparisons | Saves formatting time; data does the heavy lifting |

| Drafting initial content for human review and enrichment | Faster starting point; human adds the information gain |

### Where AI hurts in pSEO

| Anti-pattern | Risk |

|---|---|

| Generic "overview" paragraphs with no data | Identical across all pages → thin content |

| AI-expanded boilerplate ("X is a type of Y that...") | Detectable by pattern; no unique value |

| Mass-generating content without data variation | Amplifies the thin content problem at scale |

| Fabricating entity-specific facts | Hallucinations become trust/legal liabilities |

| Using AI to "rewrite the top 10 results" for a keyword | Produces content with zero information gain — just reshuffled common knowledge |

| Letting AI make strategic decisions (keyword selection, page type, whether to publish) | AI will confidently produce content for keywords where the user has no chance of ranking |

### The role boundary

**AI is an execution tool, not a strategy tool for SEO.** AI should:

- ✅ Draft content from structured data the user provides
- ✅ Format, structure, and polish pages

- ✅ Generate meta descriptions, FAQ blocks, schema markup
- ✅ Help with technical implementation (SSR, sitemaps, caching)

AI should NOT:

- ❌ Decide which keywords to target
- ❌ Determine whether a page has enough information gain to publish

- ❌ Replace competitive analysis and intent matching
- ❌ Assess whether the user's site has enough authority to compete

- ❌ Generate "content" without underlying data that varies per page

When the user asks for "SEO content," the agent's first job is to ensure there is a real data source and strategic rationale — not to start generating pages.

### Practical checklist before publishing AI-assisted content

- [ ] Does each page's AI output differ meaningfully from every other page? (run a diff on 5 random pages)
- [ ] Is the AI prose grounded in real data from the data source, or is it freestanding prose?

- [ ] Does each page contain at least one data point or insight not found in the current top 10 results?
- [ ] Could a human reviewer catch factual errors before publish? (build a review step for high-stakes verticals)

- [ ] Would a user who arrived from Google find this page more useful than the search results they came from?
- [ ] Has the page type been matched to the query intent (not just a blog post by default)?

If all answers are yes, the content is likely safe. If any is no, rethink the content strategy before scaling.

---

## Performance and Core Web Vitals for SSR Pages

pSEO pages are often deprioritized for performance work because they're "just content pages." But Core Web Vitals are a confirmed ranking factor, and a slow pSEO page competes against well-optimized competitors who target the same keyword.

### The three metrics that matter

| Metric | Threshold | Common cause in pSEO |

|---|---|---|

| **LCP** (Largest Contentful Paint) | < 2.5s | Hero image without dimensions/preload; render-blocking CSS |

| **CLS** (Cumulative Layout Shift) | < 0.1 | Images without `width`/`height`; fonts causing FOUT |

| **INP** (Interaction to Next Paint) | < 200ms | Large JS bundles blocking the main thread |

### For SSR Express pages specifically

#### Eliminate render-blocking resources

```html

<!-- WRONG: blocks render until stylesheet loads -->

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter" />

<!-- CORRECT: preconnect + async load -->

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" media="print" onload="this.media='all'" />

```

**Inline critical CSS** (the styles needed to render above-the-fold content):

- Inline it in `<style>`tags in`<head>` — eliminates one round trip
- Load remaining CSS asynchronously or omit it (pSEO pages rarely need large stylesheets)

**Images must have explicit dimensions** to prevent CLS:

```html

<!-- WRONG: browser doesn't know height → layout shift on load -->

<img src="${hero}" alt="..." />

<!-- CORRECT -->

<img src="${hero}" width="1200" height="630" alt="..." loading="lazy" />

```

**No JavaScript is ideal.** SSR content pages need zero client-side JS. If you must include JS (analytics, interactivity), load it `defer`or`async`.

### Measuring pages not yet in Chrome UX Report

New pages have no real-user data (CrUX) for 28 days. Use:

- **Lighthouse** (Chrome DevTools or CLI): `lighthouse https://yoursite.com/glossary/term --only-categories=performance`
- **PageSpeed Insights API**: programmatic scoring for a batch of URLs

- **WebPageTest**: detailed waterfall view to identify bottlenecks

Run Lighthouse on a representative sample of pages (hub, high-volume spoke, low-volume spoke) — don't assume all pages perform equally.

---

## Monitoring and Iteration Loop

Shipping pSEO pages is not a one-time event. The standard pattern is: launch → wait 4-8 weeks → analyze → iterate. Most pSEO playbooks fail because teams skip the iteration step.

### What to track in Search Console (per page type)

Open the **Performance** report, filter by URL prefix for each playbook (`/glossary/`,`/guides/`, etc.):

| Signal | Healthy | Problem indicator |

|---|---|---|

| **Impressions growing** | Steady week-over-week increase | Flat after 8 weeks → pages not indexed or no demand |

| **CTR** | >2% for informational, >5% for navigational | Low CTR → title/description not compelling |

| **Average position** | Trending toward <20 | Stuck at 30-50 → content quality or authority issue |

| **Coverage: Crawled, not indexed** | Decreasing | Increasing → thin content signal |

| **Coverage: Excluded (noindex)** | Matches intentional noindex count | Higher than expected → template accidentally sets noindex |

### Decision framework per page set

```text

8 weeks post-launch:

│

├── Indexed AND getting impressions?

│ ├── YES, position <10 → monitor; optimize title/meta for CTR

│ ├── YES, position 11-30 → improve content depth, add internal links

│ └── YES, position >30 → thin content; merge with a stronger page or rewrite

│

├── Not indexed (Crawled, not indexed)?

│ ├── Low page count (<100) → submit to Search Console for inspection

│ └── High page count (100+) → thin content; noindex worst pages, improve rest

│

└── Not even crawled?

├── Check sitemap submission

├── Check robots.txt for accidental blocks

└── Check crawl budget — too many thin pages may be crowding out good ones

```

### When to kill a playbook

Kill it (noindex + 301 redirect survivors to a hub) when after 6 months:

- Zero pages from the set are in the top 50 for any target keyword, AND
- Impressions are flat or declining, AND

- The page type is consuming crawl budget (visible in crawl stats)

Keeping dead pages alive harms the rest of the site — Google distributes trust across the whole domain. A smaller set of high-quality pages consistently outperforms a large set of mediocre ones.

### Iteration cadence

| Frequency | Action |

|---|---|

| Weekly | Check indexation coverage for errors |

| Monthly | Review impressions/CTR per playbook; update titles on underperformers |

| Quarterly | Full content audit — merge, improve, or kill underperforming page sets |

| On data change | Regenerate affected pages; update `dateModified` in schema |

---

## Quality Checks

### Pre-Strategy (before writing any code)

- [ ] User has identified unique data source that varies meaningfully per page
- [ ] Page type matches query intent (blog vs. comparison vs. tool vs. directory)

- [ ] Information gain validated: each page offers something the current top 10 results don't have
- [ ] Competitive viability assessed: user's site has (or is building) topical authority in this area

- [ ] Starting with a small batch (10-20 pages) before scaling to hundreds
- [ ] Human has made the strategic decisions; AI is handling execution only

### Pre-Launch (technical and content)

- [ ] `curl` the URL and verify target keywords appear in raw HTML (not rendered by JS)
- [ ] Each page provides unique value beyond variable substitution — if you removed the entity name, pages would NOT be indistinguishable

- [ ] Information gain test passed: 5 random pages each contain data/insights not in the current top 10 results
- [ ] Answers search intent for the target keyword with the correct page type

- [ ] Unique titles and meta descriptions per page
- [ ] Proper heading structure (one H1, logical H2/H3 hierarchy)

- [ ] Correct schema markup with no validation errors (test at schema.org/validator)
- [ ] Page speed acceptable — LCP <2.5s, CLS <0.1, no render-blocking resources

- [ ] Images have explicit `width`and`height` attributes
- [ ] Connected to site architecture (footer/nav links to hub pages; hub links to spokes)

- [ ] Breadcrumbs render correctly and are not obscured
- [ ] Logo and branding match the main application exactly

- [ ] In XML sitemap and crawlable (no `noindex` accidentally set)
- [ ] 404s return proper status codes (no pages for invalid slugs)

- [ ] Cache headers set appropriately per page type (live data: no-cache; static: max-age=86400)
- [ ] Faceted/filtered URLs blocked via `robots.txt`or marked`noindex`

- [ ] Multilingual pages: hreflang tags present, bidirectional, with `x-default`
- [ ] AI-assisted content: each page's output meaningfully differs from every other page

- [ ] `dateModified` in schema tied to actual data change, not deploy date

### Post-Launch Monitoring

Track (per playbook URL prefix in Search Console): indexation rate, impressions, average position, CTR

8-week review: assess which page sets are indexed and gaining impressions, which are stuck, which are excluded. Apply the decision framework above.

Watch for: "Crawled, not indexed" count rising (thin content), crawl budget errors, manual actions, ranking drops after content updates.

---

## Common Mistakes

### Strategic mistakes (most damaging)

- **Confusing scale with strategy**: Believing "more pages = more traffic" without validating that each page has information gain. This is the single most common pSEO failure mode in 2025+.
- **SEO cosplay**: Pages with perfect technical structure (H1, H2, meta tags, schema) but zero information gain over existing results. Structure is table stakes, not a ranking advantage.

- **No information gain audit**: Publishing pages without checking whether they add anything the current top 10 results don't already have.
- **Skipping intent matching**: Building blog posts when the query demands a comparison table, or building a product page when the query demands educational content. Wrong page type = won't rank regardless of quality.

- **Ignoring topical authority**: Publishing hundreds of pages in a domain where the site has no track record. Authority is earned through depth and trust signals, not page count.
- **Letting AI make strategic decisions**: AI generates confidently even when the keyword is unwinnable, the page type is wrong, or the content has no unique value. Human judgment is required for: keyword selection, page type, competitive viability, and publish/no-publish decisions.

- **Treating AI output as finished content**: AI drafts need human enrichment — original data, case studies, expert judgment, first-hand experience. Raw AI output is a starting point, not a final product.

### Content mistakes

- **Thin content**: Just swapping entity names in identical boilerplate (Google will deindex)
- **AI prose with no data variation**: All pages share the same generic paragraphs — amplifies thin content at scale. If you removed the entity name, pages would be indistinguishable.

- **Rewriting the top 10 results**: Using AI to rephrase what already ranks is zero information gain. Google doesn't need another version of existing content.
- **Keyword cannibalization**: Multiple pages targeting the same keyword

- **Over-generation**: Creating pages with no search demand
- **Poor data quality**: Outdated or incorrect information erodes trust

### Technical mistakes

- **SPA without SSR**: Adding pSEO pages to a React/Vue app without server-rendering — Google sees nothing
- **Orphan pages**: New SEO pages not linked from anywhere in the main site's navigation or footer

- **Inconsistent branding**: SSR pages that look different from the main app break user trust
- **Breadcrumb obscured by layout tricks**: Negative margin patterns hiding breadcrumb navigation

- **Wrong cache headers**: Live-data pages cached for 24h showing stale rates; static pages uncached causing unnecessary server load
- **Asset permission errors**: Referencing frontend assets from SSR routes that can't read them

- **Machine-translating pSEO content at scale**: Produces near-duplicate content across locales; triggers spam signals
- **Missing or asymmetric hreflang**: One page in the set not listing all variants breaks the entire locale cluster

- **Bumping `dateModified` without real content changes**: Deception signal; Google can detect and penalise it
- **Faceted navigation URLs not blocked**: Filter/sort param combinations create thousands of near-duplicate crawlable URLs, wasting crawl budget

- **No crawl budget monitoring**: Teams discover Googlebot stopped crawling new pages only after rankings plateau
- **Skipping Core Web Vitals on pSEO pages**: Slow LCP or high CLS on "just content" pages loses rankings to faster competitors

- **Images without dimensions**: Causes CLS on SSR pages (browser doesn't know reserved height until image loads)

### Process mistakes

- **Blasting hundreds of pages at once**: Instead of starting with 10-20 pages, validating indexation and impressions, then scaling what works
- **No iteration loop**: Shipping pSEO and never reviewing Search Console — dead pages accumulate and drag down domain trust

- **No freshness strategy for live-data pages**: Exchange rates or prices cached for 24h showing stale data destroys credibility
- **Ignoring UX**: Pages that exist for Google but not for users — no conversion path, no value to visitors

---

## Output Format

Deliver strategy validation first, then implementation. **Do not skip straight to building pages.**

1. **Strategic validation** (before any code):

- What unique data does the user have that varies per page?
- What page type matches the query intent?

- What information gain does each page offer over current top 10 results?
- Does the user's site have topical authority in this area?

- Recommended initial batch size (start small, validate, then scale)

1. **Rendering audit**: Confirm whether the app is a SPA and what SSR approach to use
2. **Strategy**: Opportunity analysis, chosen playbook(s), keyword patterns, data sources, page count estimate

3. **Shared infrastructure**: `ssrShared.ts` (or equivalent) HTML shell before any individual pages
4. **Template**: URL structure, title/meta templates, content outline, schema markup

5. **Implementation**: Working server-rendered pages that return full HTML to `curl`
6. **Integration**: Footer/nav updates in the main app linking to the new hub pages

7. **Validation plan**: How to verify pages are indexed, earning impressions, and when to scale or kill the campaign

## Limitations

- Cannot access Search Console data to monitor indexation
- Cannot check existing backlink profiles

- Data quality depends on the source — always validate before publishing
- Cannot guarantee rankings — SEO involves many factors beyond on-page optimization
