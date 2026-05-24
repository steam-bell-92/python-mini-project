# SEO Implementation Guide

Follow this guide when building or optimizing a React + Vite web app for search engine visibility.

## Critical SEO Foundations

### Title & Meta Description

- Every page needs a unique `<title>` (50-60 chars) with primary keyword near the start
- Every page needs a `<meta name="description">` (150-160 chars) with a clear value proposition
- For SPAs: implement dynamic titles per route (e.g., `document.title` or `react-helmet-async`)

### Heading Structure

- Exactly one `<h1>` per page/route containing the primary keyword
- Logical hierarchy — no skipping from H1 to H3
- Don't use headings purely for styling

### Semantic HTML

- Use `<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`, `<section>` instead of generic `<div>` wrappers
- Use `<a>` for navigation links, not click-handler divs
- Use `<button>` for actions, `<a>` for navigation

## Open Graph & Social Sharing

Add to `<head>` on every page (or the SPA shell):

```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://yourdomain.com/og-image.png">
<meta property="og:url" content="https://yourdomain.com/page">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://yourdomain.com/og-image.png">
```

For SPAs, these must be set server-side or in the static HTML shell for crawlers to see them.

## Technical SEO

### Images

- All `<img>` tags need descriptive `alt` attributes (not "image1")
- Add `width` and `height` attributes to prevent CLS
- Use `loading="lazy"` on below-the-fold images
- Prefer WebP format where possible

### Links

- Internal links use descriptive anchor text, not "click here"
- External links use `rel="noopener noreferrer"`
- No broken internal links — check route references match actual routes

### Performance

- Fonts: use `font-display: swap` in `@font-face` rules
- Defer non-critical JS: `<script defer>` or dynamic imports
- Inline critical CSS or ensure CSS loads early
- Avoid render-blocking resources in `<head>`

## Crawlability

### robots.txt

Create at the public directory root:

```text
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### sitemap.xml

Create listing all public pages:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add all public routes -->
</urlset>
```

For dynamic sites, generate the sitemap from routes programmatically.

### Canonical URLs

- Add `<link rel="canonical" href="https://yourdomain.com/current-page">` to each page
- Prevents duplicate content issues between www/non-www, trailing slashes, query params

## SPA-Specific Issues

**Problem:** Crawlers may not execute JavaScript, so they see an empty `<div id="root">`.

**Solutions (in order of preference):**

1. **Pre-rendering:** Use a build-time tool to generate static HTML for each route (e.g., `vite-plugin-ssr`, `react-snap`)
2. **Server-side rendering:** If using Next.js or Remix, SSR is built in — verify pages render server-side
3. **Meta tag injection:** At minimum, ensure the HTML shell has good default meta tags hardcoded before any JS loads

**SPA Routing:**

- If using hash routing (`/#/about`), switch to browser history routing (`/about`) — search engines ignore hash fragments
- Ensure the server returns the SPA shell for all routes (catch-all / wildcard route) so direct URL access works

## Structured Data (JSON-LD)

Add schema markup in a `<script type="application/ld+json">` block in the HTML — do NOT inject this dynamically. Choose based on site type:

| Site Type | Schema |
|-----------|--------|
| Business / SaaS | `Organization`, `WebSite`, `WebApplication` |
| Blog / Content | `Article`, `BlogPosting`, `BreadcrumbList` |
| Product / Store | `Product`, `Offer`, `AggregateRating` |
| Portfolio | `Person`, `CreativeWork` |
| Local business | `LocalBusiness`, `PostalAddress` |

Example for a SaaS landing page:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "App Name",
  "description": "What the app does",
  "url": "https://yourdomain.com",
  "applicationCategory": "Category",
  "operatingSystem": "Web"
}
</script>
```

## Pre-Launch Checklist

- [ ] Every page has a unique `<title>` and `<meta name="description">`
- [ ] One `<h1>` per page with relevant keyword
- [ ] Open Graph and Twitter Card meta tags present
- [ ] All images have descriptive `alt` text and dimensions
- [ ] Semantic HTML elements used (`<main>`, `<nav>`, `<header>`, `<footer>`)
- [ ] `robots.txt` exists and allows crawling
- [ ] `sitemap.xml` exists and lists all public pages
- [ ] Canonical URLs set on each page
- [ ] No broken internal links
- [ ] Fonts use `font-display: swap`
- [ ] Below-fold images use `loading="lazy"`
- [ ] Structured data (JSON-LD) added for site type
- [ ] SPA routes work with direct URL access (no 404s)
- [ ] Page loads in under 3 seconds on mobile
