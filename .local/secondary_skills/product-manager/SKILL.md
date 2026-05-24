---
name: product-manager
description: Create PRDs, product briefs, user stories, and roadmaps with prioritization frameworks.
---

# Product Manager

Write PRDs, user stories, and roadmaps. Prioritize features. Default to real templates from top product orgs, not textbook generics.

## When to Use

- PRD, spec, or one-pager needed
- Backlog prioritization

- User stories + acceptance criteria
- Roadmap planning

## When NOT to Use

- Technical architecture (core agent capabilities)
- User research / discovery (design-thinker)

## Discovery — Ask Before You Write

Before choosing a PRD format or writing anything, run a lightweight intake to understand context. Ask the user:

1. **Product stage**: New product/feature, iteration on existing, or pivot?
2. **Team size and culture**: Startup (5 people, move fast) vs. enterprise (cross-functional, needs alignment)?

3. **Decision this document needs to enable**: Exec go/no-go? Eng scoping? Design kickoff?
4. **Audience**: Who reads this and what do they need to say yes/no to?

5. **Competitive landscape**: Are there direct competitors or alternatives the user is aware of? Reference the `competitive-analysis` secondary skill if the user needs a deeper market scan before writing the PRD.

Use the answers to select the right PRD format below. Do not default to the longest template — match format to context.

## Stakeholder Mapping — DACI Matrix

Before writing the PRD, clarify who is involved. Use a DACI matrix (Atlassian/Intuit standard):

```text

| Role | Who | Responsibility |

|------------|------------------|---------------------------------------------|

| Driver | [name/role] | Owns the document, drives decisions forward |

| Approver | [name/role] | Final sign-off authority (one person only) |

| Contributor| [names/roles] | Provides input, reviews, raises concerns |

| Informed | [names/roles] | Kept in the loop, no active role |

```

**Rules**: Exactly one Approver. Driver is usually the PM. If there are more than 3 Contributors, the scope is probably too broad — split the PRD.

**Best for**: Amazon PR/FAQ (where exec alignment is the goal), any cross-functional project, or when the user says "I need buy-in from multiple teams."

## PRD Formats — Pick by Context

The three most-copied templates in tech. Ask the user their team size and culture, then pick:

### Amazon PR/FAQ ("Working Backwards")

Write the press release *before* building. Used for every Amazon product since 2004 (AWS, Kindle, Prime). Format:

- **Press release (1 page, strict)**: Headline (`[Company] announces [product] to enable [customer] to [benefit]`), sub-headline, dated intro paragraph, problem paragraph (3-4 problems max), solution paragraph, customer quote, how to get started.
- **Internal FAQ**: Every hard question a VP would ask. "What's the BOM?" "Why won't [competitor] crush this?" "What's the failure mode?"

Why it works: the press-release frame forces customer language and ruthlessly exposes when you can't articulate the benefit. If the PR is boring, the product probably is too.

Source templates: Colin Bryar (ex-Bezos chief of staff) at `coda.io/@colin-bryar/working-backwards`, Ian McAllister's LinkedIn template,`github.com/Green-Software-Foundation/pr-faqs` for a real org using PR/FAQ on GitHub.

**Best for**: Big bets, new product lines, when you need exec alignment before committing eng resources.

### Intercom "Intermission" (1-page hard limit)

Paul Adams (VP Product): "An Intermission must always fit on a printed A4 page. If it does not, you haven't a clear enough view of the problem yet." Sections:

- **Problem**: What's broken, why now, links to customer conversations
- **Job Stories** (Intercom invented these — replaces user stories): `When [situation], I want to [motivation], so I can [expected outcome]`. Situation > persona. "When I'm on-call at 3am and an alert fires" beats "As a DevOps engineer."

- **Success criteria**: Qualitative + quantitative
- **NO solution section** — solutions go in Figma, not the PRD

**Best for**: Feature-level work, fast-moving teams, when scope creep is the enemy.

### Linear's Project Spec

Nan Yu (Head of Product at Linear). Short, outcome-focused: Problem → Proposed solution → Success metrics → Non-goals → Open questions. Non-goals are load-bearing — explicitly listing what you're *not* building is the single most effective scope-creep prevention.

**Best for**: Eng-heavy teams already in Linear, projects with clear shape.

Full template collection: `hustlebadger.com/what-do-product-teams-do/prd-template-examples/` (Figma, Asana, Shape Up, Lenny's 1-Pager all compared).

### Competitive / Market Context Section

Every PRD should include a lightweight competitive scan. Add this section after the problem statement in any format:

```text

## Alternatives & Competitive Landscape

| Alternative | How users solve this today | Key weakness we exploit |

|---------------------|---------------------------|-------------------------------|

| [Competitor/workaround] | [description] | [gap or pain point] |

| [Status quo] | [what they do without us] | [cost, time, error rate] |

```

If the user needs a deeper analysis, reference the `competitive-analysis` secondary skill.

### Cross-template patterns (from analysis of 13+ company PRDs)

1. Problem strictly before solution — every high-performing template enforces this
2. Explicit "Non-goals" section — second most common element

3. Living docs — version + changelog, not write-once

## Scope Estimation

Effort estimates feed into RICE and roadmap sequencing. Use one of these approaches depending on maturity:

### T-shirt sizing (early stage, low confidence)

When detailed estimates are unreliable, use relative sizing:

```text

| Size | Rough meaning | Example |

|------|--------------------------------------|----------------------------------|

| XS | < 1 day, one person | Copy change, config tweak |

| S | 1-3 days, one person | New API endpoint, simple UI page |

| M | 1-2 weeks, 1-2 people | Feature with frontend + backend |

| L | 2-4 weeks, small team | Multi-screen flow, new integration|

| XL | 1+ month, cross-functional | New product area, platform change|

```

### Reference-class estimation (higher confidence)

Compare to similar past work. Ask the user: "What shipped feature is this most similar to? How long did that take?" Adjust from there. This outperforms bottom-up estimation for novel work (Kahneman & Tversky's "planning fallacy" research).

### Rules for estimation

- Always estimate in ranges, not points: "2-4 weeks" not "3 weeks"
- Include all functions in the estimate (PM + design + eng + QA), not just eng

- Explicitly flag unknowns that could blow up the estimate — these become "Open questions" in the PRD

## Prioritization

**RICE** (Intercom's framework — the de facto standard):

- **Reach**: Users affected per quarter. Use real numbers from analytics, not guesses.
- **Impact**: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal

- **Confidence**: 100% = data-backed, 80% = strong intuition, 50% = guessing. This multiplier is what makes RICE better than ICE — it punishes wishful thinking.
- **Effort**: Person-months, all functions (PM + design + eng + QA)

- Score = (R × I × C) / E. Build as a spreadsheet — agent can generate CSV.

**When NOT to use RICE**: When effort estimates are garbage (early-stage), when one item is existential (just do it), when the list is >30 items (you have a strategy problem, not a prioritization problem).

**Cost of Delay / WSJF** (SAFe framework): (User value + Time criticality + Risk reduction) / Job size. Better than RICE when timing/sequencing matters (regulatory deadlines, market windows).

**Kano**: Survey users on each feature twice — "how would you feel if we had this?" and "how would you feel if we didn't?" Cross-tab reveals Basic/Performance/Delighter/Indifferent. Reference: `foldingburritos.com/blog/kano-model` for the full method + survey template.

## Roadmap Format

Now / Next / Later (GOV.UK popularized this — intentionally vague on dates to avoid roadmap-as-contract):

```text

## Theme: [one strategic bet this quarter]

## Goal/OKR link: [which company or team OKR does this theme serve?]

### Now (committed, in flight)

| Initiative | Owner | Goal/OKR link | Success metric | Status |

### Next (committed, not started)

| Initiative | Why now | Goal/OKR link | Dependency |

### Later (directional, not committed)

- [bullets only — dates here are lies]

```

Every roadmap item should trace back to a goal or OKR. If an item doesn't link to any goal, it's either a missing goal or a distraction — surface this to the user.

Public roadmap examples to reference: `github.com/github/roadmap` (GitHub's own), Buffer's transparent roadmap, Linear's changelog.

## Acceptance Criteria

Gherkin syntax (Given/When/Then) — directly executable as test cases:

```text

Given [precondition]

When [action]

Then [observable result]

And [additional result]

```

One scenario per acceptance criterion. If you can't write it as Given/When/Then, the requirement is ambiguous.

## Living Document Workflow

PRDs are not write-once artifacts. Include this header in every PRD:

```text

---

Version: [1.0]

Last updated: [date]

Status: [Draft | In Review | Approved | Superseded]

Owner: [Driver from DACI]

---

### Changelog

| Version | Date | Author | Change summary |

|---------|------------|--------|-----------------------------------|

| 1.0 | YYYY-MM-DD | [name] | Initial draft |

| 1.1 | YYYY-MM-DD | [name] | Added success metrics from review |

```

**Review cadence**: Recommend the user revisit the PRD at each major milestone — after design review, after eng scoping, and after launch. Update status and log changes.

## Output Formats

Default output is markdown. Adapt format when it serves the user better:

- **RICE scoring table**: Generate as CSV when the user wants to import into a spreadsheet or share with stakeholders
- **Roadmap**: Markdown table for docs, CSV for spreadsheet import

- **Connected tools**: Check if the workspace has project management integrations (Linear, Jira, etc.) via the `integrations` skill. If connected, format output to match the tool's conventions (e.g., Linear project spec format for Linear users) and mention that items can be copied into their tool

## Limitations

- Cannot integrate with Jira/Linear/Asana — deliver as markdown for copy-paste
- Cannot access user analytics — ask user for reach/retention numbers before RICE scoring

- Templates are starting points; teams should adapt
