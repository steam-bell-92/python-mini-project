---
name: seo-auditor
description: Audit websites for SEO issues and optimize content for search engine visibility.
---

# SEO Auditor & Content Optimizer

Audit websites for technical SEO issues, analyze on-page optimization, and provide actionable recommendations to improve search engine visibility and rankings.

## When to Use

- User wants an SEO audit of their website
- User asks how to improve search rankings

- User wants to optimize content for specific keywords
- User needs meta tag, title, or description improvements

- User wants to compare their SEO against competitors

## When NOT to Use

- Paid advertising strategy (use ad-creative skill)
- Social media content creation (use content-machine skill)

- General competitive analysis without SEO focus (use competitive-analysis)
- Building pages at scale for SEO (use programmatic-seo skill)

## Critical First Step: SPA vs SSR Reality Check

Before anything else, determine whether the site is a React/Vue/Angular SPA or server-side rendered. **This is the single most important distinction in a modern SEO audit.**

- **SPA (React, Vue, Angular):**Googlebot cannot reliably execute JavaScript. Any page that requires the JS bundle to render is**effectively invisible** to search engines. The `<title>`and`<meta>`in`index.html` are all Google sees.
- **SSR (Express, Next.js, Nuxt, SvelteKit):** Full HTML is returned to the crawler. Everything is indexable.

- **Hybrid:** Many apps are SPA for authenticated pages but SSR for public/marketing pages. Identify which routes are which.

**How to detect:** `curl -s https://domain.com/some-page | grep "<h1"` — if no H1 is in the curl output but is visible in the browser, the page is SPA-rendered and invisible to Googlebot.

**For SPA+SSR hybrids:** Audit only the SSR pages deeply. Note which routes are SPA (and therefore invisible) without alarming the user — authenticated dashboards being SPA is expected and fine.

## Methodology

### Audit Priority Order

1. **Crawlability & Indexation** (can Google find and index it?)
2. **Technical Foundations** (is the site fast and functional?)

3. **On-Page Optimization** (is content optimized?)
4. **Content Quality** (does it deserve to rank?)

5. **Authority & Links** (does it have credibility?)

### Step 1: Crawlability & Indexation

#### Robots.txt

- Check for unintentional blocks
- Verify important pages allowed

- Check sitemap reference
- **⚠️ Verify actual content, not just HTTP status.** A React SPA returns 200 for any URL — including `/robots.txt`if no Express route handles it. Always`curl -s /robots.txt | head -5`and confirm the output is`User-agent:`plain text, not`<!DOCTYPE html>`.

##### XML Sitemap

- Exists and accessible
- Contains only canonical, indexable URLs

- Updated regularly
- **⚠️ Same SPA trap applies to `/sitemap.xml`.**`curl /sitemap.xml`and confirm the first line is`<?xml version=`. If it returns`<!DOCTYPE html>`, the sitemap route is missing and the SPA is serving as fallback.

- For Express/Node backends with pSEO content: implement sitemap as a dynamic Express route that maps over data arrays (e.g., `BANK_GUIDES`,`GLOSSARY_TERMS`). This way, adding new entries to the arrays automatically updates the sitemap — no manual maintenance needed.

###### Site Architecture

- Important pages within 3 clicks of homepage
- Logical hierarchy

- No orphan pages (pages with no internal links)

###### Index Status

- site:domain.com check
- Compare indexed vs. expected page count

###### Indexation Issues

- Noindex tags on important pages
- Canonicals pointing wrong direction

- Redirect chains/loops
- Soft 404s

- Duplicate content without canonicals

###### Canonicalization

- All pages have canonical tags
- HTTP → HTTPS canonicals

- www vs. non-www consistency
- Trailing slash consistency

### Step 2: Technical Foundations

#### Core Web Vitals (2025-2026)

- **LCP** (Largest Contentful Paint): < 2.5s
- **INP** (Interaction to Next Paint): < 200ms — replaced FID in 2025 as the responsiveness metric

- **CLS** (Cumulative Layout Shift): < 0.1

##### Speed Factors

- Server response time (TTFB)
- Image optimization and modern formats (WebP)

- JavaScript execution and bundle size
- CSS delivery

- Caching headers and CDN usage
- Font loading strategy

###### Font Bundle Audit — Common Performance Killer

Check `client/index.html`(the actual source file, not just what Googlebot sees) for bloated Google Fonts requests. A single`<link href="fonts.googleapis.com/css2?family=Inter&family=Roboto&family=Poppins&...">` loading 10+ font families is a render-blocking LCP killer.

###### Correct async font loading pattern

```html

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" media="print" onload="this.media='all'">

<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"></noscript>

```

Apply this pattern to both `client/index.html` (SPA) and any SSR shared shell functions.

###### Mobile-Friendliness

- Responsive design (not separate m. site)
- Tap target sizes

- Viewport configured
- No horizontal scroll

- Mobile-first indexing readiness

###### Security

- HTTPS across entire site
- Valid SSL certificate

- No mixed content
- HSTS header

###### URL Structure

- Readable, descriptive URLs
- Keywords where natural

- Consistent structure (lowercase, hyphen-separated)
- No unnecessary parameters

**Note:** Google now excludes pages returning non-200 status codes (4xx, 5xx) from the rendering queue entirely — critical for SPAs.

### Step 3: On-Page SEO

#### Title Tags

- Unique per page, 50-65 characters
- Primary keyword near beginning

- Compelling and click-worthy
- Brand name at end with `|`separator (not`-`or`—`)

- Common issues: duplicates, too long/short, keyword stuffing, missing
- **Watch for Unicode symbols in H1s** (e.g., `↔`,`→`,`©`). These look odd in SERPs and can be keyword-unfriendly. Use plain text equivalents.

##### Meta Descriptions

- Unique per page, 150-160 characters
- Includes primary keyword

- Clear value proposition with CTA
- Common issues: duplicates, auto-generated, no compelling reason to click

###### Heading Structure

- One H1 per page containing primary keyword
- Logical hierarchy (H1 → H2 → H3, no skipping)

- Headings describe content, not used just for styling

###### Content Optimization

- Keyword in first 100 words
- Related keywords naturally used

- Sufficient depth for topic
- Answers search intent

- Better than current top-ranking competitors

###### Image Optimization

- Descriptive file names and alt text
- Compressed file sizes, modern formats (WebP)

- Lazy loading, responsive images

###### Internal Linking

- Important pages well-linked with descriptive anchor text
- No broken internal links

- No orphan pages

###### Keyword Targeting (per page)

- Clear primary keyword target
- Title, H1, URL aligned with keyword

- Content satisfies search intent
- Not competing with other pages (cannibalization)

### Step 4: Content Quality — E-E-A-T Signals

**Experience:** First-hand experience demonstrated, original insights/data, real examples

**Expertise:** Author credentials visible, accurate and detailed information, properly sourced claims

**Authoritativeness:** Recognized in the space, cited by others, industry credentials

**Trustworthiness:** Accurate information, transparent about business, contact info available, privacy policy, HTTPS

### Step 5: Structured Data & Social Signals

#### Schema Markup

Every SSR page should have the appropriate schema type. Use an array-based approach in your shared shell function so each schema is its own `<script type="application/ld+json">`block — never concatenate JSON strings and inject them inside an existing`<script>` tag, as this creates malformed HTML with nested script tags.

##### Correct pattern (Express/Node SSR shell function)

```typescript

// Accept an array of schema JSON strings

schemaJsons?: string[];

// Render each as its own script block

allSchemas.map(s => `<script type="application/ld+json">${s}</script>`).join("\n")

```

###### Always-present schemas (add to shared shell)

- `WebSite`+`Organization` `@graph` — entity identity for Google's Knowledge Graph, sitelinks signals
- `BreadcrumbList` — add to every page that has visible breadcrumb navigation, even if the page already has another schema type (HowTo, DefinedTerm, etc.)

###### Page-specific schemas

- HowTo — step-by-step guides
- FAQPage — Q&A content (excellent for AI Overviews / featured snippets)

- DefinedTerm + DefinedTermSet — glossary terms
- ItemList — hub/index pages listing multiple items

- Article / BlogPosting — editorial content (include `datePublished`,`dateModified`)

**Always include `datePublished`and`dateModified`** in schema — freshness signals help maintain rankings on competitive queries.

**OG Image requirement:** `og:image`requires an actual hosted image URL (1200×630px). Base64-embedded images cannot be OG images. If no hosted image exists, note it as a blocker for social sharing and skip the`og:image` tag rather than pointing to a non-existent URL.

###### Minimum social meta set (every page)

```html

<meta property="og:title" content="..." />

<meta property="og:description" content="..." />

<meta property="og:url" content="..." />

<meta property="og:type" content="website" />

<meta property="og:locale" content="..." /> <!-- e.g., es_DO, en_US -->

<meta property="og:site_name" content="..." />

<meta name="twitter:card" content="summary_large_image" />

<meta name="twitter:title" content="..." />

<meta name="twitter:description" content="..." />

<meta name="twitter:site" content="@handle" />

```

**Schema Markup Detection Warning:** `webFetch`and`curl` cannot reliably detect structured data — many CMS plugins inject JSON-LD via client-side JavaScript. Never report "no schema found" based solely on webFetch. Recommend using Google Rich Results Test or browser DevTools for accurate schema verification. For SSR pages, curl is reliable.

### Step 6: Bot Governance & AI Readiness

- Review robots.txt to differentiate between beneficial retrieval agents (OAI-SearchBot, Googlebot) and non-beneficial training scrapers
- Use structured data (schema.org) as the language of LLMs

- Use "BLUF" (Bottom Line Up Front) formatting to help content get cited in AI Overviews

### Step 7: Competitor SEO Comparison

- Search for target keywords and analyze top-ranking pages
- Identify content gaps and opportunities

- Compare meta tags, content depth, structure, and E-E-A-T signals

## SSR Shared Shell Optimization Pattern

When a site uses a **shared HTML shell function** (common in Express/Node SSR setups), a single change to that function fixes all pages simultaneously. This is the highest-leverage opportunity in an SSR SEO audit.

### Audit the shell function for these — fixing once applies to all pages

1. `og:locale`,`og:site_name` — often missing
2. Twitter Card tags — almost always missing

3. `<meta name="theme-color">` — small trust/UX signal
4. Async font loading — often render-blocking

5. `WebSite`+`Organization` JSON-LD — missing from most sites
6. Canonical tag structure — verify it's using the correct canonical per page

#### Per-page additions (must be done individually)

- `BreadcrumbList` schema — specific to each page's breadcrumb path
- `datePublished`/`dateModified` — specific to each content type's schema

## Common Issues by Site Type

**SaaS/Product Sites:** Product pages lack content depth, blog not integrated with product pages, missing comparison/alternative pages, thin feature pages

### SPA + SSR Hybrid (React/Node, Next.js, etc.)

- robots.txt and sitemap.xml not handled by Express — SPA returns 200 with HTML instead of proper plain text / XML
- Massive font bundles in `index.html` affecting landing page LCP

- Missing OG/Twitter tags in `index.html` (since that's all social crawlers see for SPA pages)
- SSR pages missing BreadcrumbList schema despite having breadcrumb HTML

- Shared shell function missing Twitter Card, og:locale, og:site_name — fixing once would help all pages

**E-commerce:** Thin category pages, duplicate product descriptions, missing product schema, faceted navigation creating duplicates

**Content/Blog Sites:** Outdated content not refreshed, keyword cannibalization, no topical clustering, poor internal linking

**Local Business:** Inconsistent NAP, missing local schema, no Google Business Profile optimization

## Output Format

### SEO Audit Report Structure

```text

# SEO Audit Report: [Website]

## Executive Summary

- Overall health assessment
- Top 3-5 priority issues

- Quick wins identified

## Critical Issues (Fix Immediately)

| Issue | Page | Impact | Evidence | Fix |

|-------|------|--------|----------|-----|

## High-Impact Improvements

| Issue | Page | Impact | Evidence | Fix |

|-------|------|--------|----------|-----|

## Quick Wins

| Opportunity | Page | Potential Impact |

|------------|------|-----------------|

## Page-by-Page Analysis

### [Page URL]

- **Title**: Current | Recommended
- **Meta Description**: Current | Recommended

- **H1**: Current | Recommended
- **Content Score**: X/10

- **Issues**: [list]

## Prioritized Action Plan

1. Critical fixes (blocking indexation/ranking)
2. High-impact improvements (SSR shell function — fix once, applies to all pages)

3. Quick wins (easy, immediate benefit)
4. Long-term recommendations (OG image creation, Privacy/Terms SSR, etc.)

```

## Tools

**Free:** Google Search Console, Google PageSpeed Insights, Rich Results Test (use for schema validation — it renders JavaScript), Mobile-Friendly Test, Schema Validator

**Paid (if available):** Screaming Frog, Ahrefs / Semrush, Sitebulb

## Best Practices

1. **Prioritize by impact** — fix critical issues before optimizing nice-to-haves
2. **Write for humans first** — keyword-stuffed content hurts rankings

3. **Check actual SERPs** — search for target keywords to understand what Google currently rewards
4. **Focus on search intent** — match content type to what users actually want

5. **Monitor competitors** — see what top-ranking pages do well and identify gaps
6. **Always curl the URL, read the body** — HTTP 200 status means nothing if the SPA is returning HTML for `/robots.txt`or`/sitemap.xml`. Confirm content type and first few lines

7. **Find the shared shell function** — in Express/Node SSR apps, a shared HTML shell function is a force multiplier. One change fixes all pages
8. **Dynamic sitemaps > static sitemaps** — for apps with content arrays (guides, terms, products), generate the sitemap dynamically from those arrays so it stays current automatically

## Limitations

- Cannot access Google Search Console or Analytics data
- Cannot measure actual page speed (use Google Lighthouse separately)

- Cannot check backlink profiles (recommend Ahrefs, Semrush, or Moz)
- Cannot run full site crawls (recommend Screaming Frog or Sitebulb)

- Cannot guarantee ranking improvements — SEO involves many factors
- Cannot access pages behind authentication or paywalls
