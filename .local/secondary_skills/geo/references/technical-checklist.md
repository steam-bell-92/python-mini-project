# GEO Technical Optimization Checklist

Technical optimizations that help AI engines discover, parse, and cite your content.

## Schema Markup (JSON-LD)

Schema markup helps AI engines understand content type and structure. Use JSON-LD format in the `<head>` or end of `<body>`.

### By Content Type

**Article / Blog Post:**

```json

{

"@context": "https://schema.org",

"@type": "Article",

"headline": "How to Choose the Right CRM for Your Business",

"author": {

"@type": "Person",

"name": "Jane Smith",

"jobTitle": "CRM Consultant",

"url": "https://example.com/about/jane-smith"

},

"datePublished": "2025-01-15",

"dateModified": "2025-03-20",

"publisher": {

"@type": "Organization",

"name": "Example Inc."

},

"description": "A comprehensive guide to selecting the right CRM system based on team size, budget, and use case."

}

```

**FAQ Page:**

```json

{

"@context": "https://schema.org",

"@type": "FAQPage",

"mainEntity": [

{

"@type": "Question",

"name": "How much does a CRM cost?",

"acceptedAnswer": {

"@type": "Answer",

"text": "CRM pricing ranges from free for basic tools to $300+/user/month for enterprise solutions. Most small businesses spend $12-$50/user/month."

}

}

]

}

```

**HowTo (step-by-step guides):**

```json

{

"@context": "https://schema.org",

"@type": "HowTo",

"name": "How to Set Up a CRM in 5 Steps",

"step": [

{

"@type": "HowToStep",

"name": "Define your requirements",

"text": "List the features your team needs: contact management, pipeline tracking, email integration, reporting."

}

]

}

```

**Product Page:**

```json

{

"@context": "https://schema.org",

"@type": "Product",

"name": "ProductName Pro",

"description": "...",

"offers": {

"@type": "Offer",

"price": "29.99",

"priceCurrency": "USD"

},

"aggregateRating": {

"@type": "AggregateRating",

"ratingValue": "4.7",

"reviewCount": "1250"

}

}

```

**Organization (site-wide, placed on homepage):**

```json

{

"@context": "https://schema.org",

"@type": "Organization",

"name": "Example Inc.",

"url": "https://example.com",

"foundingDate": "2018",

"description": "...",

"sameAs": [

"https://twitter.com/example",

"https://linkedin.com/company/example"

]

}

```

## Meta Description Optimization

AI engines sometimes use meta descriptions as quick summaries. Optimize them for extraction:

- Write the meta description as a direct answer to the primary query the page targets
- Keep under 155-160 characters

- Include one key data point or specific claim
- Avoid generic marketing language

**Good:** `"Kitchen renovations cost $15,000-$45,000 on average in 2025. Scope, materials, and location are the biggest cost factors."`

**Bad:** `"Learn everything you need to know about kitchen renovations. Click to read more!"`

## Semantic HTML

Clean HTML structure helps crawlers parse content accurately:

- Use `<article>` for the main content body
- Use `<section>` to group thematic content blocks

- Use `<header>`, `<nav>`, `<main>`, `<footer>` for page regions
- Use `<figure>` and `<figcaption>` for images with descriptions

- Use `<table>` for tabular data (not divs styled as tables)
- Use `<blockquote>` and `<cite>` for quoted material

- Maintain proper heading hierarchy (H1 > H2 > H3, no skipped levels)
- Use `<time datetime="2025-01-15">` for dates

## Page Performance

AI engine crawlers have timeouts. Slow pages may not get fully indexed:

- Target < 3 second load time
- Minimize render-blocking JavaScript

- Ensure content is in the initial HTML (not loaded via client-side JS after page load) — server-side rendering or static generation is strongly preferred
- Use lazy loading for below-fold images, but ensure above-fold content loads immediately

- Compress images appropriately

## Crawlability

- Ensure pages are accessible to crawlers (not blocked by robots.txt)
- Submit XML sitemaps to search engines

- Use canonical URLs to avoid duplicate content issues
- Internal linking between related content helps crawlers discover depth

- Avoid JavaScript-only navigation that crawlers can't follow

## Content Accessibility Signals

- Alt text on all images (descriptive, not keyword-stuffed)
- Proper link text (descriptive, not "click here")

- Language attribute on HTML tag
- Character encoding declaration (UTF-8)

## robots.txt Considerations

Major AI crawlers use specific user agents. Be aware of these if you want to control AI engine access:

- `GPTBot` — OpenAI's crawler
- `Google-Extended` — Google's AI training crawler (separate from Googlebot)

- `CCBot` — Common Crawl (used by many AI training datasets)
- `PerplexityBot` — Perplexity's crawler

- `ClaudeBot` — Anthropic's crawler

To be cited by AI engines, ensure these crawlers are NOT blocked. If they are blocked in robots.txt, your content cannot be indexed or cited.
