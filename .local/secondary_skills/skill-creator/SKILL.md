---
name: skill-creator
description: Create new reusable skills to save instructions or workflows for future tasks.
---

# Skill Creator

Create new skills that persist across sessions and teach future instances of yourself how to handle specific tasks, workflows, or conventions.

## Process

### 1. Capture Intent

Start by understanding what the user wants. If the current conversation already contains a workflow the user wants to capture (e.g., "turn this into a skill"), extract answers from the conversation history first — the tools used, the sequence of steps, corrections the user made, input/output formats observed. Then confirm before proceeding.

Key questions to answer (from conversation or by asking):

1. What should this skill enable you to do?
2. When should it trigger? (what phrases, contexts, or scenarios)

3. What is the expected output format?
4. Are there edge cases or special rules?

Adapt your communication to the user's technical level. Pay attention to context cues — explain terms if needed, but don't over-explain to technical users.

### 2. Interview and Research

Proactively ask about edge cases, input/output formats, example files, success criteria, and dependencies. If the user has reference material or existing documentation, review it. Check if there are existing skills that this new one should reference or build upon.

### 3. Choose a Name

Lowercase, hyphens only, max 64 characters (e.g., `deploy-checklist`,`api-conventions`).

### 4. Write the SKILL.md

Place it at `.agents/skills/<skill-name>/SKILL.md`. For larger skills, organize supporting material in subdirectories.

### 5. Confirm with the User

Summarize what the skill does, when it will activate, and walk through the key instructions. Iterate based on feedback.

## Skill Directory Structure

```text

skill-name/

├── SKILL.md (required — main instructions)

├── scripts/ (optional — executable code for deterministic tasks)

├── references/ (optional — docs loaded into context as needed)

└── assets/ (optional — templates, icons, fonts used in output)

```

## Progressive Disclosure

Skills use a three-level loading system:

1. **Metadata** (name + description in frontmatter) — Always in context. This is how the skill gets discovered and triggered.
2. **SKILL.md body** — Loaded when the skill triggers. Keep under 500 lines.

3. **Bundled resources** (references/, scripts/, assets/) — Loaded as needed. For large reference files (>300 lines), include a table of contents. Reference them clearly from SKILL.md with guidance on when to read them.

## SKILL.md Template

```markdown

---

name: <skill-name>

description: <What this skill does. When to use it. Max 1024 chars. Be specific about triggers.>

---

# <Skill Title>

## When to Use

- <Trigger condition 1>
- <Trigger condition 2>

## Instructions

<Step-by-step instructions, conventions, or workflows.>

## Examples

<Input/output pairs or concrete scenarios if applicable.>

```

## Writing Guide

### Description is the Primary Trigger

The description determines when a future agent instance will load and follow this skill. It is the single most important line in the file. Be explicit about trigger phrases and scenarios. Lean toward being slightly "pushy" — skills tend to under-trigger rather than over-trigger.

- Bad: `description: Handles deployment`
- Good: `description: Runs the full deployment checklist before publishing. Use when the user asks to deploy, publish, go live, or ship to production.`

### Writing Style

- Prefer the imperative form in instructions.
- Explain WHY things are important rather than relying on heavy-handed MUSTs. Help the future agent understand the reasoning.

- Use theory of mind — write instructions that guide toward good decisions in novel situations, not just narrow examples.
- Start by writing a draft, then review it with fresh eyes and improve it.

- Be concise — only include information a general-purpose agent would not already know. Skip general programming knowledge.

### Specificity

Match specificity to fragility:

- **Exact commands and file paths** for things that break easily (build steps, config locations, migration commands).
- **General guidance** for flexible decisions (design choices, naming preferences).

### Examples

Include examples when the skill involves structured output or non-obvious patterns. Format them clearly:

```markdown

## Commit message format

**Example 1:**

Input: Added user authentication with JWT tokens

Output: feat(auth): implement JWT-based authentication

```

### Output Format Definitions

When the skill produces structured output, define it explicitly:

```markdown

## Report structure

Always use this template:

# [Title]

## Executive summary

## Key findings

## Recommendations

```

### Domain Organization

When a skill supports multiple domains or frameworks, organize by variant using reference files:

```text

cloud-deploy/

├── SKILL.md (workflow + selection logic)

└── references/

├── aws.md

├── gcp.md

└── azure.md

```

The agent reads only the relevant reference file based on context.

### Project-Specific Context

Include file paths, naming conventions, preferred libraries, API patterns — things unique to this workspace that a fresh agent instance would not know.

### Composability

Skills can reference other skills. Use this to compose complex workflows from simpler building blocks when it makes sense.

## Rules

- **Frontmatter is required.** Every SKILL.md must have `name`and`description` in YAML frontmatter.
- **Name constraints:** Max 64 chars, lowercase letters, numbers, and hyphens only.

- **Keep SKILL.md under 500 lines.** Use reference files for overflow.
- **Skills are mutable.** Update them as patterns evolve. They live in `.agents/skills/` and can be freely modified or deleted.

- **Skills must not be deceptive.** A skill's contents should not surprise the user in their intent if described.

## Skill Location

All user-created skills go in `.agents/skills/<skill-name>/SKILL.md`. Platform-provided skills live in`.local/skills/` and are read-only.

## Checklist Before Finishing

- [ ] Frontmatter has `name`and`description`
- [ ] Name is lowercase with hyphens only

- [ ] Description includes both WHAT and WHEN, and is specific enough to trigger reliably
- [ ] Instructions are clear enough for a fresh agent instance with no prior context

- [ ] Writing explains WHY, not just WHAT — reasoning over rules
- [ ] Large content is split into reference files, not crammed into SKILL.md

- [ ] File is saved to `.agents/skills/<skill-name>/SKILL.md`
- [ ] User has confirmed the skill content
