---
name: design-exploration
description: "Use this skill when the user asks to 'generate variations,' 'explore alternatives,' 'try different approaches,' 'show me options,' 'what else could this be,' or any request that implies divergent design exploration rather than deterministic editing. Also activate when the user selects a component and asks for 'ideas,' 'directions,' or 'possibilities.' This skill intercepts the request at the main agent level and produces a structured design brief BEFORE delegating to the design subagent. Do NOT skip the analysis phase. Do NOT pass raw file paths without a design brief."
---

# Design Exploration

## Purpose

This skill ensures the agent performs **problem comprehension before generation** when handling variation requests. Analyze what a component does, what constrains it, and what is meaningfully free to vary — then compose a design brief and pass it to the design subagent. Never skip straight from "user asked for variations" to output.

Design exploration is the divergent phase of an explore/exploit loop. Each variation should represent a **distinct design hypothesis** — a meaningfully different answer to "what could this be?" — not a reskin of the same hypothesis.

## Step 1: Read and Comprehend the Component

Read the selected component's source code and surrounding context (parent layout, route structure, dependencies, styles). Build an internal model of:

- **Function**: What does it do? What user problem does it solve? What's its role in the broader flow?
- **Content model**: What information does it present or collect? What's the semantic structure?
- **Interaction model**: How does the user engage with it? What states and transitions exist?
- **Visual structure**: How is it composed? What are its regions, hierarchy, and spatial relationships?
- **Context**: Where does it live? What comes before and after? What assumptions does it inherit?

## Step 2: Identify Constraints and Degrees of Freedom

Distinguish between:

- **Hard constraints**: Cannot change without breaking the component (required data fields, accessibility requirements, platform constraints, explicit user decisions).
- **Soft constraints**: Assumed by the current implementation but reconsidered (a list that could be a grid; a bottom-anchored CTA that could be inline; a formal tone that could be conversational).
- **Degrees of freedom**: Dimensions along which the design could meaningfully vary.

Be explicit about what you're holding fixed and why.

## Step 3: Select Meaningful Variation Axes

Select 2–3 axes that produce the most meaningfully different outcomes. The five axis categories:

- **Structural**: Layout, information hierarchy, component decomposition, navigation pattern. Answers: "What if this were organized differently?" (e.g., settings as scrolling form vs. tabbed panel vs. progressive wizard)
- **Content / Semantic**: What's foregrounded, backgrounded, or reframed. Answers: "What if we emphasized different things?" (e.g., pricing that leads with features vs. social proof vs. comparison)
- **Conceptual**: The underlying metaphor or interaction paradigm. Answers: "What if we thought about this differently?" (e.g., file manager as spatial desktop vs. conversation vs. timeline)
- **Behavioral**: State transitions, progressive disclosure, interaction sequencing. Answers: "What if it behaved differently?" (e.g., form validates on blur vs. submit vs. inline)
- **Aesthetic**: Color, typography, spacing, mood, material quality. Answers: "What if it looked and felt different?" (e.g., three distinct visual identities for the same card component)

### Selection Heuristic

Read the user's intent to determine where they are in the exploration funnel:

- **"Generate variations" / "show me options" (no further context)**: The user hasn't specified an axis. Analyze the component to determine which axes have the most unexplored space. For structurally complex components (pages, flows, dashboards), default to structural and conceptual axes. For visually-driven or structurally simple components (cards, heroes, buttons, marketing sections), structural AND aesthetic are both strong first-round choices — lead with whichever produces more meaningfully different outcomes.
- **User describes a direction but not a form** ("something more premium," "more playful," "feels enterprise"): This is an aesthetic/tonal signal. Explore visual treatment as a primary axis, but pair it with one structural or content axis so the variations aren't just reskins.
- **User names a specific axis** ("try different layouts," "what if the copy were different"): Follow their lead. Pair with one complementary axis that might surface unexpected possibilities.
- **User is iterating on an established structure** ("I like this layout, but..."): Focus on aesthetic and behavioral refinement.

The goal is progressive funnel narrowing: broad exploration → emerging preferences → focused refinement → final form. Match axis selection to where the user actually is, not to a fixed priority order.

## Step 4: Compose the Design Brief

Compose a structured brief covering: component analysis, constraints (with rationale), chosen variation axes (with rationale), and concrete variation specifications. Each variation spec should name the design hypothesis it represents and describe concretely how it differs from the current implementation.

This brief — not just the file path — is what you pass to the design subagent. The brief is the primary artifact of this skill.

## Step 5: Delegate with the Brief

Your delegation message to the design subagent must include:

1. The full design brief from Step 4
2. The source file path(s)
3. This instruction: "Each variation should be a distinct design hypothesis. Do not produce variations that differ only in color, font, or spacing unless the brief specifically calls for aesthetic exploration."

**Do not just pass the file path. Do not say "generate 3 variations of this component" without the brief.**

## Communicating with the User

### Before generation

Tell the user what axes you chose to explore and why. Name the design concepts at play so the user builds vocabulary over time. This makes your reasoning legible and gives the user a chance to redirect.

Example: "I'm going to explore 3 variations of your pricing section. The current design uses a **comparison table** — that's a strong structural choice, so I'll hold it. Instead I'll vary the **content hierarchy** (what information leads the user's eye and shapes their first impression) and the **conceptual framing** (whether the tiers are positioned as good/better/best, or as use-case-based recommendations). These are often the highest-leverage dimensions for pricing — small changes in what's foregrounded can significantly shift conversion."

If the user redirects, update the axis selection and re-delegate. The comprehension step doesn't need to repeat.

### After generation

When presenting variations, explain what each one teaches about the design problem — not just what it looks like. Frame each variation as a hypothesis with observable trade-offs:

- Name the **design decision** each variation embodies ("This one foregrounds social proof because...")
- Call out the **trade-off** it makes ("...which builds trust at the cost of information density")
- Suggest **what to watch for** when evaluating ("Notice how your eye moves differently across these — that's the hierarchy at work")

The goal is for the user to finish the exploration knowing *more about their design problem* than when they started — not just having picked a favorite variant.

## Anti-Patterns

- **Skipping comprehension**: Going from request to generation without analysis. This always produces shallow output.
- **Producing variations that answer the same question**: If all 3 variations are different visual treatments of the same layout with the same content hierarchy, you've generated 1 hypothesis with 3 skins.
- **Treating the brief as optional**: If you skip the brief, you've skipped the skill. The brief is the reasoning. Generation is downstream.
