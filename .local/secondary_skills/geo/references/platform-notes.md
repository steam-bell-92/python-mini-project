# Platform-Specific GEO Notes

Each AI engine has different crawling, indexing, and citation behaviors. These notes help tailor optimization strategy by platform.

## ChatGPT / OpenAI

**Crawler:** `GPTBot`

**How it finds content:**

- Training data (periodic, large-scale ingestion)
- Browsing tool (real-time web search when users ask current questions)

- When browsing, ChatGPT uses Bing's search index as a starting point, then fetches and reads pages directly

**Citation behavior:**

- Provides inline citations with links when using the browsing tool
- For training data responses, sources are not cited — the model synthesizes from memory

- Tends to cite authoritative domains and well-structured content
- Prefers content that provides clear, definitive answers over hedged language

**Optimization priorities:**

1. Ensure GPTBot is not blocked in robots.txt
2. Focus on comprehensive, well-sourced content (training data quality)

3. Strong meta descriptions and opening paragraphs (browsing tool extraction)
4. FAQ-style content works well for direct question matching

## Google AI Overviews (formerly SGE)

**Crawler:** Standard `Googlebot` (plus `Google-Extended` for training)

**How it finds content:**

- Uses Google's existing search index as the primary source
- AI Overviews appear above traditional search results for eligible queries

- Traditional SEO signals (backlinks, domain authority, PageRank) still heavily influence which sources get cited in AI Overviews

**Citation behavior:**

- Shows source cards alongside the AI-generated answer
- Typically cites 2-5 sources per overview

- Strongly favors pages that already rank in the top 10 for the query
- Uses structured data to enhance source cards (images, site name, breadcrumbs)

**Optimization priorities:**

1. Traditional SEO still matters heavily — domain authority, backlinks, and ranking position directly influence AI Overview citation
2. Schema markup is more impactful here than other platforms because Google uses it to render rich source cards

3. Content that matches Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, Trustworthiness) gets preferential citation
4. Heading-question alignment is critical — Google matches AI Overview sub-answers to page sections via headings

## Perplexity AI

**Crawler:** `PerplexityBot`

**How it finds content:**

- Real-time web crawling for every query (always fetches fresh content)
- Indexes and caches frequently-cited sources

- Also uses its own search index built from ongoing crawling

**Citation behavior:**

- Heavy citation model — almost every claim gets a numbered source reference
- Cites the specific page (and sometimes section) that supports each claim

- Prefers pages with clear, verifiable, specific information
- Will cite multiple sources in a single answer, often 5-10+

**Optimization priorities:**

1. Freshness is critical — Perplexity crawls in real-time, so up-to-date content wins
2. Ensure PerplexityBot is not blocked in robots.txt

3. Specific, quotable statements with data points are highly cited
4. Page load speed matters — Perplexity has crawl timeouts

5. Content that covers niche sub-topics well gets cited for those specific sub-queries

## Bing Copilot

**Crawler:** Standard `Bingbot`

**How it finds content:**

- Uses Bing's search index
- Real-time search + AI synthesis for each query

- Microsoft's AI integration means Copilot answers appear across Bing, Edge, Windows, and Microsoft 365

**Citation behavior:**

- Inline numbered citations linking to source pages
- Typically cites 3-6 sources per answer

- Bing's index favors well-structured, authoritative content
- Social signals and freshness can influence Bing ranking more than Google

**Optimization priorities:**

1. Submit site to Bing Webmaster Tools (separate from Google Search Console)
2. Bing places slightly more weight on social signals and exact-match content

3. Strong semantic HTML structure helps Bing's parser
4. Clear authorship signals and organization info boost authority

5. IndexNow protocol support can speed up Bing indexing of new/updated content

## Cross-Platform Strategy

Given that each platform has different strengths, a good cross-platform approach:

1. **Don't block any AI crawlers** in robots.txt unless you have a specific reason
2. **Maintain strong traditional SEO** — it directly feeds Google AI Overviews and influences Bing Copilot

3. **Keep content fresh** — critical for Perplexity, helpful for all
4. **Use schema markup** — highest impact on Google, but helps all platforms

5. **Write quotable, self-contained statements** — this is the single most impactful practice across all AI engines
6. **Submit to both Google Search Console and Bing Webmaster Tools** — covers the two major search indexes that AI engines rely on
