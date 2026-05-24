---
name: skill-authoring
description: Create reusable skills that extend agent capabilities. Use when the user asks to create a skill, teach you something reusable, or save instructions for future tasks.
---

# Skill Authoring

Create skills to save reusable knowledge, procedures, and workflows that persist across sessions. Skills are instructions for future versions of yourself—write them as if teaching a fresh instance how to handle a task.

## When to Use

- User asks to "create a skill" or "teach you how to do X"
- User wants to save instructions for repeated future use
- A workflow should be reusable across sessions

## How to Create a Skill

1. Choose a skill name (lowercase, hyphens only, e.g., `code-review`)
2. Write the SKILL.md file to `.agents/skills/SKILLNAME/SKILL.md`

## SKILL.md Format

```markdown
---
name: skill-name
description: What this skill does. When to use it.
---

# Skill Title

Instructions, examples, and workflows go here.
```

### Frontmatter Requirements

- `name`: Max 64 chars, lowercase letters/numbers/hyphens only
- `description`: Max 1024 chars, include WHAT it does and WHEN to use it

## Writing Tips

- **Be concise**: Only include info you don't already know
- **Match specificity to fragility**: Exact commands for fragile ops, general guidance for flexible tasks
- **Include examples**: Input/output pairs help with output quality
- **Keep under 500 lines**: For longer skills, reference separate files

## Skill Locations

- **`.agents/skills/`** - User and agent-editable skills. Create new skills here. These can be freely modified, updated, and deleted.
- **`~/.local/skills/`** - Replit-provided skills. These are read-only and managed by the platform.

## Key Considerations

- **Description is critical for discovery**: The description determines when you'll use this skill in the future. Be specific about triggers:
  - Bad: `description: Processes documents` (too vague)
  - Good: `description: Extracts text and images from PDF files. Use when the user asks to read, parse, or convert PDF documents.`
- **Collaborate with the user**: Ask what they want included. Don't guess—the user knows what's important to them
- **Include project-specific context**: File paths, naming conventions, API endpoints, preferred libraries—things unique to this user's workflow
- **Use separate files for large content**: Organize reference material in folders (e.g., `.agents/skills/SKILLNAME/reference/api.md`) and link to it from SKILL.md
- **Skills can be updated**: Skills in `.agents/skills/` are mutable. Update them as you discover better patterns—don't treat them as permanent. Iterate as the user's needs evolve
- **Skills can reference other skills**: A skill can invoke or build upon other skills. Use this to compose complex workflows from simpler building blocks

## Complete Example

```markdown
---
name: pr-review
description: Reviews pull requests for code quality and security. Use when the user asks to review a PR or check code changes.
---

# PR Review

## Process

1. Read the PR description and linked issues
2. Review each file for issues
3. Check for test coverage
4. Look for security vulnerabilities
5. Summarize findings with line references

## What to Check

- Logic errors and edge cases
- Security issues (injection, XSS, auth bypass)
- Performance concerns
- Missing error handling

## Output Format

\`\`\`markdown
## Summary
[1-2 sentence overview]

## Issues Found
- **[severity]** file:line - description

## Verdict
[Approve / Request Changes / Comment]
\`\`\`
```
