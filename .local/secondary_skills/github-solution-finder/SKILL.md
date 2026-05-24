---
name: github-solution-finder
description: Search GitHub for battle-tested open-source libraries and solutions
---

# GitHub Solution Finder

Find battle-tested libraries instead of building from scratch. Use GitHub's search operators — they're far more precise than plain Google.

## Search Operators (combine with spaces = AND)

| Operator | Example | Effect |
|---|---|---|
| `stars:>N` | `stars:>1000` | More than N stars |
| `stars:N..M` | `stars:100..500` | Between N and M |
| `language:X` | `language:python` | Primary language |
| `pushed:>DATE` | `pushed:>2025-06-01` | Commits after date — **the key freshness signal** |
| `created:>DATE` | `created:>2024-01-01` | Repo created after date |
| `topic:X` | `topic:cli` | Tagged with topic |
| `license:X` | `license:mit` | Specific license |
| `-X` | `-language:javascript` | Exclude (prefix any qualifier) |
| `archived:false` | | Exclude archived repos |
| `is:public fork:false` | | No forks |
| `in:name` / `in:readme` | `http in:name` | Restrict where term matches |
| `user:X` / `org:X` | `org:google` | Scope to owner |
| `"exact phrase"` | `"rate limiter"` | Phrase match |
| `NOT` | `redis NOT cache` | Exclude keyword (strings only) |

## High-Signal Query Templates

```text

# Baseline: established + actively maintained
<problem> language:<lang> stars:>500 pushed:>2025-06-01 archived:false

# Find the dominant library (only a few results = clear winner)
<problem> language:python stars:>5000

# Hidden gems (newer, not yet famous, but active)
<problem> language:go stars:50..500 pushed:>2025-09-01 fork:false

# Curated lists — these exist for almost every topic
awesome <topic> in:name stars:>1000

# CLI tools
<task> topic:cli stars:>200 pushed:>2025-01-01

# Commercial-safe only
<problem> license:mit OR license:apache-2.0 stars:>500

# Boolean grouping
(language:rust OR language:go) <problem> stars:>1000

# Code search (different syntax — searches file contents)
path:**/*.py "from fastapi import" symbol:RateLimiter

```

## Search Aggressively — webSearch Is Your Primary Tool

**Use webSearch extensively.** Do not rely on a single query or a single source. Every solution search should involve multiple rounds of web searching across different angles — GitHub, package registries, blog posts, Stack Overflow, and comparison articles. Cast a wide net before narrowing down.

### GitHub searches

```text
webSearch("site:github.com <problem> <language> stars")
webSearch("site:github.com awesome <topic>")
webSearch("site:github.com/issues <specific error message>")
webSearch("best <language> library for <problem> 2026")
```

Note: GitHub-specific qualifiers like `language:`, `stars:>`, and `pushed:>` only work on GitHub's own search engine. Through `webSearch`, use natural-language equivalents (e.g. "python" instead of `language:python`). For precise filtering, use `gh search repos` if the GitHub CLI is available (see below).

### Package registry searches

```text
webSearch("site:pypi.org <problem>")        # Python
webSearch("site:npmjs.com <problem>")        # Node
webSearch("site:crates.io <problem>")        # Rust
webSearch("site:pkg.go.dev <problem>")       # Go
```

### Community and comparison searches

```text
webSearch("<lib A> vs <lib B> <language>")
webSearch("<problem> <language> reddit")
webSearch("<problem> best library site:stackoverflow.com")
webSearch("<problem> comparison benchmark <language>")
webSearch("awesome <topic> list github")
```

### Read what you find

`webFetch` every promising repo URL to read the README directly. Don't just rely on search result snippets — actually read the README, check the examples, and look at the API surface before recommending anything. For comparison posts and blog articles, `webFetch` the full content to extract specific benchmarks and tradeoffs.

## GitHub CLI (if available)

```bash
gh search repos "rate limiter" --language=python --stars=">1000" \
  --sort=stars --limit=10 --json=name,stargazersCount,pushedAt,url,description

gh api repos/OWNER/REPO --jq '{stars:.stargazers_count, pushed:.pushed_at, issues:.open_issues_count, license:.license.spdx_id, archived:.archived}'

```

## Health Evaluation — Check These Fast

| Signal | Healthy | Walk away |
|---|---|---|
| Last commit | <3 months | >18 months |
| Stars | >1000 (lib), >100 (niche) | <20 |
| Open/closed issue ratio | <0.3 | >1.0 with no replies |
| Contributors | 5+ | 1 (bus factor) |
| "Used by" (sidebar) | >1000 | 0 |
| Releases | Tagged, semver, changelog | No tags |
| License | MIT, Apache-2.0, BSD | None, GPL/AGPL (if commercial) |
| CI badge | Green | Missing or red |
| `archived: true` banner | — | Instant no |

**Red flags in issues:** Search the issue tracker for `"memory leak"`, `"abandoned"`, `"unmaintained"`, `"alternative"`. If maintainer hasn't replied to anything in 6 months, the project is effectively dead regardless of star count.

**Download trend check:**

- Python: `https://pypistats.org/packages/<name>` — declining = dying
- npm: `https://npmtrends.com/<pkg1>-vs-<pkg2>` — compare candidates head-to-head
- Check bundle size: `https://bundlephobia.com/package/<name>` (frontend only)

## License TL;DR

| License | Commercial OK | Must open-source your code? |
|---|---|---|
| MIT, BSD, Apache-2.0, ISC | Yes | No |
| LGPL | Yes | Only if you modify the lib itself |
| GPL | Yes | **Yes, if you distribute** (viral) |
| AGPL | Yes | **Yes, even for SaaS** (network-viral) |
| No LICENSE file | **No** | default is all rights reserved |

## Awesome Lists (curated entry points)

`sindresorhus/awesome` — the root of all awesome lists. Then: `awesome-python`, `awesome-go`, `awesome-rust`, `awesome-react`, `awesome-selfhosted`, `awesome-nodejs`, `free-for-dev`, `build-your-own-x` (learn by reimplementing), `public-apis`.

## Comparison Output Template

````markdown

## pkg-name  [12.4k stars, pushed 2 weeks ago, MIT]
github.com/owner/pkg-name

**Does:** One-line pitch.
**Fit:** Why it matches this specific problem.
**Install:** `pip install pkg-name`

**Pro:** Active, typed, 89% test coverage.
**Con:** Pulls in 23 transitive deps; async-only API.

```python
from pkg import Thing
Thing().do(x)  # minimal working example
```

````

## Decision Rules

1. **Two libs within 2x stars of each other** → pick the one pushed more recently
2. **A lib with 50k stars but last commit 2023** → it's dead, find the fork (check "Forks" tab sorted by stars)
3. **Lib does 10x more than needed** → check if you can vendor the 200 lines you actually need (with attribution)
4. **Can't find anything with >100 stars** → problem may be too niche; search blog posts / Stack Overflow for how others solved it
5. **Found 3+ viable options** → npmtrends/pypistats comparison, then read the top 5 closed issues of each

## Output

Always present key findings and recommendations as a plaintext summary in chat, even when also generating files. The user should be able to understand the results without opening any files.
