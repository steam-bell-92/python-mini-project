---
name: follow-up-tasks
description: Propose follow-up tasks before marking your current task as complete.
---

# Follow-Up Tasks

As you work on your current task, watch for additional work that should be done as follow-up tasks — separate units of work related to your current task but outside its scope.

Categorize each follow-up task using one of these categories:

- **`incomplete_scope`**: Parts of the original request that you intentionally deferred to keep the current task focused
- **`next_steps`**: Functionality or features users would want next, whether directly extending what you just built or addressing unmet needs in the project
- **`tech_debt`**: Code quality issues, hardcoded values, shortcuts, or refactoring opportunities you noticed while working
- **`test_gaps`**: Tests that should be written but aren't part of the current task's deliverable

Write titles for non-technical users — lead with impact, not implementation - especially for tech debt and test gaps.

Before submitting, review each title by asking: "Would a non-technical user understand what this means and why they'd want it?" If not, rewrite it. Examples:

- "Store recipes in a database with full CRUD support" -> "Let users add, edit, and delete their own recipes"
- "Add server-side validation for recipe API endpoints" -> "Prevent broken recipes from being saved"

Before marking your task as complete, propose up to 3 follow-up tasks by calling `proposeFollowUpTasks` — NOT `bulkCreateProjectTasks` or `createProjectTask`. The `proposeFollowUpTasks` callback automatically links follow-ups to your current task as the parent — required for correct task hierarchy. Submit them all in a single call with clear titles, descriptions, and a `category` (required). Keep only the highest-impact follow-ups. Each description should include relevant file paths and enough context for another agent to pick up the work independently.

Only propose follow-ups that represent genuine, actionable work.

- Do not propose follow-ups that overlap with tasks already visible in the project task list
- Do not propose follow-ups for trivial items or things already in your current task's scope
- Do not propose follow-ups for agent housekeeping (e.g. updating replit.md, adding comments, improving documentation — handle those inline)

If your current task already has downstream tasks depending on it (listed in your task assignment), skip calling `proposeFollowUpTasks` entirely — those tasks already cover the planned next steps.

`proposeFollowUpTasks` is **one-shot per assigned project task** — not per turn, not per subfeature, not per `mark_task_complete` cycle. The system rejects duplicate calls. If you're marking complete again after more work on the same assigned task, review your previously proposed follow-ups; if any are now stale, call `markFollowUpTaskObsolete` to retract them.

## Examples

```javascript
// Log the result so you have taskRefs for later use with markFollowUpTaskObsolete
const followUps = await proposeFollowUpTasks({
    tasks: [
        {
            title: "Let users save favorite recipes to a personal collection",
            category: "next_steps",
            description: `# Let users save favorite recipes to a personal collection

## What & Why
Users currently can't keep track of recipes they like. A favorites collection is the natural next feature on top of the existing browsing flow — it gives the app stickiness and a reason to return.

## Done looks like
- Authenticated users can favorite / unfavorite a recipe from the list and detail pages
- A "My favorites" page shows the user's collection
- Favorites persist across sessions

## Relevant files
- \`src/pages/recipes/[id].tsx\`
- \`src/components/RecipeCard.tsx\``
        },
        {
            title: "Save recipes permanently so they aren't lost on refresh",
            category: "tech_debt",
            description: `# Save recipes permanently so they aren't lost on refresh

## What & Why
Recipe data is hardcoded in a static file. Users who add or edit recipes will lose their changes on page refresh. Moving data to the database ensures persistence.

## Done looks like
- Recipes are stored in the database and served via API
- Users can add, edit, and delete recipes without losing data

## Relevant files
- \`src/data/recipes.ts\``
        }
    ]
});
console.log(followUps.map(t => ({ taskRef: t.taskRef, title: t.title })));

// Remove an obsolete follow-up
await markFollowUpTaskObsolete({ taskRef: "#12" });
```
