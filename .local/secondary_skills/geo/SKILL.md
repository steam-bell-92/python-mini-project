---
name: geo
description: Optimize content for AI-generated answers in ChatGPT, Perplexity, and Google AI Overviews.
---

# Generative Engine Optimization (GEO)

Optimize web content so it gets cited, quoted, and surfaced by AI engines (ChatGPT, Google AI Overviews/SGE, Perplexity, Bing Copilot, Claude, and others). GEO differs from traditional SEO because AI engines don't rank pages — they synthesize answers from sources. The goal is to become one of those sources.

## When to Use

- User asks to optimize content for AI search or AI engines
- User wants to audit or rewrite existing pages/posts for GEO readiness

- User wants to create new content designed to appear in AI-generated answers
- User wants a GEO content strategy or roadmap for their brand/blog

- User mentions GEO, generative engine optimization, or AI visibility
- User asks how to get cited by ChatGPT, Perplexity, Google AI Overviews, etc.

## Research Foundation

Key research finding (Princeton/IIT Delhi, KDD 2024): The most impactful GEO signals are **statistics (+33.9% visibility)**, **expert quotes (+32%)**, **fluent writing (+30%)**, and **authoritative citations (+30.3%)**. These numbers should guide prioritization — when time is limited, adding statistics and expert quotes yields the highest return.

## How AI Engines Select Sources

AI engines decide what to cite based on several signals. Every recommendation in this skill traces back to one of them:

1. **Direct answerability** — Content that directly answers a question in a clear, self-contained way is more likely to be extracted. AI engines prefer content that doesn't require inference to understand.
2. **Authority signals** — Cited statistics, named sources, references to studies, and expert attribution increase trust. AI engines weight sourced claims higher than unsourced opinions.

3. **Structured clarity** — Well-organized content with clear headings, lists, and logical flow is easier for models to parse and quote. 74% of AI citations come from structured lists and comparison formats.
4. **Topical depth** — Content that covers a topic comprehensively with specifics (numbers, examples, comparisons) is preferred over shallow overviews.

5. **Freshness and accuracy** — Up-to-date content with current data points wins over stale pages. Contradicting widely-known facts gets filtered out.
6. **Technical accessibility** — Proper schema markup, fast load times, and clean HTML help crawlers index content correctly.

7. **Community signals** — Reddit, LinkedIn, Quora, and forum mentions are crawled by AI engines. Content that generates authentic discussion in these communities gets additional visibility.

## Three Modes

### Mode 1: Audit & Rewrite Existing Content

When the user provides existing content (URL, blog post, article, page) to evaluate or improve.

#### Process

1. **Collect the content** — Get the URL or raw content from the user. If it's a URL, fetch and extract the main content body.
2. **Identify the core query** — What search or AI prompt is this content answering? What would someone type into ChatGPT to find this?

3. **Evaluate against the GEO scorecard** (see `scorecard.md` for the full checklist).
4. **Apply the rewrite checklist** if the user wants improvements (not just an audit):

- Add a direct answer block in the first 40-60 words — open with the key phrase ("X is..." or "The best Y for Z is..."). This is the single highest-impact change.
- Inject statistics — at least one concrete data point per major section. Flag where data is needed if none is available.

- Add or strengthen named expert quotes — direct attribution to a real person or study.
- Add source citations inline — link to research, .gov, .edu, or recognized publications.

- Rewrite H2/H3 headings as questions or clear topical answers ("How does X work?" not "Overview").
- Add or expand a FAQ section — 5-10 questions in real user language at the end.

- Improve information density — named entities, stats, and specific claims per paragraph (not vague generalities).
- Clearly name the brand/author early in the post and in the byline.

- Trim marketing fluff — remove filler phrases that add length without adding facts ("In today's fast-paced world...", "It's important to note...").
- Add Article JSON-LD schema (see `technical-checklist.md`) if the user manages their own site.

1. **Produce the audit report** using the format below.

#### Audit Report Format

```markdown

# GEO Audit Report: [Page Title or URL]

## Overall GEO Readiness: [Score]/100

## Summary

[2-3 sentence overview of the page's GEO strengths and weaknesses]

## Scores by Category

| Category | Score | Status |

|----------|-------|--------|

| Direct Answerability | X/20 | [needs work / good / strong] |

| Authority & Citations | X/20 | [needs work / good / strong] |

| Structure & Formatting | X/20 | [needs work / good / strong] |

| Topical Depth | X/20 | [needs work / good / strong] |

| Technical Optimization | X/20 | [needs work / good / strong] |

## Detailed Findings

### Direct Answerability

[What's working, what's missing, specific examples from the content]

### Authority & Citations

[Assessment of sourcing, statistics, expert quotes, credibility signals]

### Structure & Formatting

[Heading hierarchy, use of lists, paragraph length, scanability]

### Topical Depth

[Coverage completeness, specificity, comparisons, examples provided]

### Technical Optimization

[Schema markup, meta data, page speed considerations, HTML cleanliness]

## Priority Recommendations

1. [Highest-impact change with specific instructions]
2. [Second priority]

3. [Third priority]

...

## Rewritten Sections (if requested)

[Full rewritten content, followed by a "GEO changes made" summary]

```

#### Delivering the Report as PDF

After writing the audit report as a markdown file, convert it to PDF and present it to the user.

1. Write the audit report to a `.md` file (e.g., `.local/geo-audit-[site-name].md`).
2. Convert the markdown to a styled PDF (use available workspace tools or libraries such as `pdfkit`).
3. Present the PDF to the user using the file presentation tool.

### Mode 2: Create GEO-Optimized Content

When the user wants to write new content from scratch.

#### Pre-Writing — Confirm These First (ask if not provided)

- **Target query / topic** — What question is this content answering?
- **Target audience** — Who is reading this?

- **Content type** — Blog post, product page, FAQ, documentation, landing page, comparison page?
- **Brand voice/tone** — Formal, conversational, technical?

- **Approximate length** — Default: 1,200-2,000 words for blog posts/articles.

#### GEO-Native Blog Post Structure

```text

[TITLE — phrased as a question or definitive answer]

e.g. "What Is X? The Complete Guide" or "How to Do Y in 2026"

[BYLINE — Author name + credentials/title]

[DATE — always include publish date]

[DIRECT ANSWER BLOCK — 40-60 words]

Immediately answers the post's core question. No preamble.

Starts with the key phrase: "X is..." or "The best way to Y is..."

[KEY STATISTICS — 2-3 bullet data points]

Fast-load authority signals AI engines extract immediately.

[H2: Why Does X Matter? / What Is X?]

Dense, factual prose. Named sources. Specific claims.

[H2: How Does X Work? — or next logical question]

Same pattern. Include at least one expert quote or study citation.

[H2: Ranked List or Comparison Table]

"Top 5 ways to..." or "X vs Y" — structured lists are highly citable.

[H2: Common Questions About X]

5-10 FAQ entries in real user language.

Q: [exact phrasing someone would type into ChatGPT]

A: [self-contained 2-3 sentence answer — extractable on its own]

[SOURCES / REFERENCES]

Numbered list of all cited sources with URLs.

```

For other content types (product pages, documentation, landing pages, comparison pages), read `content-patterns.md` for type-specific templates.

#### Creation Process

1. **Research the query landscape** — Identify the questions users and AI engines ask about this topic. Think about what an AI engine would need to construct a complete answer.
2. **Plan the content structure** — Use the blog post template above or the appropriate pattern from `content-patterns.md`.

3. **Write with GEO principles applied** throughout (see Writing Rules below).
4. **Add technical optimization** — Schema markup recommendations, meta descriptions, etc.

### Mode 3: GEO Content Strategy

When the user wants a strategic GEO roadmap for their blog, brand, or website.

#### Process (2)

##### Step 1: Define the entity

- What is the brand/person/product being optimized?
- What are the 3-5 core topics they want to be cited for?

- Who are the target audiences?

###### Step 2: Identify target prompts

Generate 15-25 specific prompts the target audience would type into ChatGPT, Perplexity, or Google AI Overviews — these are the GEO equivalent of keywords. Focus on:

- Informational: "What is the best [topic] for [use case]?"
- How-to: "How do I [task related to the niche]?"

- Comparative: "X vs Y: which is better for Z?"
- Definitional: "What is [core concept]?"

###### Step 3: Content gap analysis

For each target prompt, assess:

- Does existing content answer it directly?
- What content format would AI engines prefer? (FAQ, article, comparison, listicle)

- What authority signals are missing?

###### Step 4: Prioritized content plan

Produce a prioritized list of content pieces to create or optimize, ranked by:

- **Citation potential** — How likely is an AI engine to pull from this format?
- **Competitive gap** — Is this topic underserved by competitors?

- **Business impact** — Does citation here drive leads, revenue, or brand awareness?

###### Step 5: Platform-specific tactics

Read `platform-notes.md` for engine-specific recommendations.

###### Step 6: Measurement framework

Recommend the user track:

- **Mention rate** — % of target prompts that return the brand name (test manually or via tools like Profound, Otterly.ai)
- **Citation rate** — % that include a clickable URL to their domain

- **Citation position** — First mention vs. buried in the response
- **Review cadence** — Monthly minimum; weekly for active campaigns

## Writing Rules

These apply across all modes — as requirements when creating, as recommendations when auditing:

### Answer-First Structure

Place the direct answer in the first 40-60 words of the relevant section. AI engines extract opening statements more frequently than buried conclusions. Don't build up to the answer — lead with it, then support it. This is the single highest-impact optimization.

### Quotable Statements

Write sentences that work as standalone quotes. AI engines pull individual sentences or short paragraphs. Each key claim should be a self-contained, factual statement that makes sense without surrounding context.

- Good: "The average cost of a kitchen renovation in 2025 ranges from $15,000 to $45,000, depending on scope, materials, and geographic location."
- Bad: "When thinking about costs, there are many factors to consider, and it really depends on what you're looking for."

### Facts Over Opinions

Every claim gets a source. Include specific numbers, percentages, study names, expert names, and publication references. Unsourced claims are treated as opinions by AI engines. Even when writing original analysis, anchor claims to verifiable data points. Flag where data is needed if it's unavailable — don't leave unsourced assertions.

### Use Structured Formats

- **Definition blocks** — "X is [clear definition]" format for definitional queries
- **Step-by-step lists** — Numbered steps for how-to queries

- **Comparison tables** — Side-by-side comparisons for "vs" or "best" queries
- **FAQ sections** — Question-and-answer pairs using actual user questions

- **Pros/cons lists** — For evaluation queries

### Heading Hierarchy as Query Map

Each H2/H3 should mirror a natural question someone would ask. AI engines use headings to locate relevant sections. "How Much Does X Cost?" is better than "Pricing Information" because it matches the query pattern.

### Comprehensive Coverage

Cover the topic from multiple angles. AI engines prefer sources that address the full scope of a query — including related questions, edge cases, and common follow-ups. Thin content that only partially answers a question gets passed over for more complete sources.

### Freshness Signals

Include dates, version numbers, "as of [year]" references, and "updated on" indicators. AI engines prefer current information and will note when content appears outdated. Especially critical for Perplexity (real-time crawling) and Google AI Overviews.

### Entity Clarity

Name things explicitly. Instead of "the platform" or "the tool," use the actual name every time. AI engines match entities by name — pronouns and vague references break that matching. The brand/author/company should be unambiguously named and described.

### No Filler

Trim phrases that add length without adding facts. Remove: "In today's fast-paced world...", "It's important to note...", "As we all know...", "When it comes to...". Every sentence should contain a fact, a specific claim, or a direct answer.

### Paragraph Discipline

Keep paragraphs to 3-5 sentences maximum. Dense walls of text get skipped by both AI engines and human readers.

## Universal Principles

- **GEO and SEO compound.** Content that ranks well on Google is more likely to be in AI training data. Optimize for both.
- **Community signals count.** Reddit, LinkedIn, Quora, and forum mentions are crawled by AI engines. Encourage authentic discussion around your content.

- **Write for humans first.** AI clarity follows from human clarity — if it reads well to a person, it parses well for an AI engine.

## Content Patterns by Type

Read `content-patterns.md` for detailed templates and examples for each content type:

- Blog posts and articles
- Product and service pages

- FAQ and knowledge base pages
- Technical documentation

- Landing pages
- Comparison and review pages

## Technical Optimization Checklist

Read `technical-checklist.md` for:

- Schema markup (JSON-LD) recommendations by content type
- Meta description optimization for AI extraction

- HTML semantics best practices
- Page performance considerations

- Sitemap and crawlability

## Platform-Specific Considerations

Different AI engines have different behaviors. Read `platform-notes.md` for engine-specific guidance:

- **ChatGPT/OpenAI** — Browsing plugin and training data considerations
- **Google AI Overviews** — Integration with traditional search signals

- **Perplexity** — Real-time crawling and citation patterns
- **Bing Copilot** — Bing index reliance and citation style

## Common Mistakes

- **Keyword stuffing** — AI engines parse semantics, not keyword density. Unnatural repetition hurts readability without improving AI visibility.
- **Thin content** — Short pages that only scratch the surface lose to comprehensive competitors. Depth wins.

- **Missing attribution** — Claims without sources are treated as opinions. Always cite.
- **Poor structure** — Wall-of-text content is hard for AI to parse and quote. Use headings, lists, and short paragraphs.

- **Ignoring related queries** — Answering only the primary question misses opportunities. Cover the "People Also Ask" and follow-up questions.
- **Outdated information** — AI engines deprioritize stale content. Keep data points and references current.

- **Burying the answer** — Leading with background or preamble instead of the direct answer. The answer belongs in the first 40-60 words.
- **Vague language** — Generic statements ("many experts agree", "studies show") without naming the experts or studies. AI engines can't cite what isn't specific.
