---
name: mockup-graduate
description: "Use when the user approves a mockup on the canvas and wants it integrated into their main app. Reads the approved mockup component, analyzes the main app's patterns, transforms the mockup to match, installs dependencies, and verifies the integration. Activate when the user says 'use this one', 'put this in my app', 'I like variant B, integrate it', 'graduate this mockup', or approves a design for production."
---

# Mockup Graduate Skill

Move an approved mockup from the mockup sandbox (`mockup`) into the main app. Transform the self-contained prototype into production code that matches the app's conventions.

## When to Use

Activate this skill when the user:

- Approves a mockup variant ("I like this one", "go with the bold version")
- Asks to integrate a mockup ("put this in my app", "use this design")
- Wants to graduate a prototype to production
- Says "ship it" or "let's go with this"

## Subagent Guidance

If you need to parallelize graduation (e.g., graduate multiple pages at once), use a **GENERAL** subagent — never a DESIGN subagent. Graduation is an engineering task (understanding app architecture, transforming mockup code to production patterns, wiring routing and state) that requires codebase navigation, not creative visual output.

## Prerequisites

- The mockup sandbox must be running ({{skill("mockup-sandbox")}})
- The user must have identified which mockup to graduate (if multiple variants exist, ask which one)

## Process

### Step 1: Identify the approved mockup

Confirm which mockup the user wants. Read the mockup component file and extract key design decisions: colors, gradients, shadows, typography, layout approach, icons, and animations.

### Step 2: Analyze the main app's patterns

Understand how the main app handles routing, state management, data fetching, styling, and component structure. Read a few existing components to understand conventions.

### Step 3: Plan the transformation

Map each part of the mockup to the main app's equivalent:

| Mockup | Main App |
|---|---|
| Hardcoded mock data | API call or data hook |
| Inline sub-components | Existing shared components where they exist |
| Direct `className` styling | App's styling approach (may be the same) |
| `@/components/ui/*` (sandbox shadcn) | App's UI component library (may differ) |
| Static images from `mockup/` | App's asset directory or CDN |

### Step 4: Install missing dependencies

Compare the mockup's imports against the main app's `package.json`. Install anything missing using the `packager_install_tool`. Add font links to `index.html` if needed.

### Step 5: Transform and place the component

Create the production component in the main app. Replace mock data with real data fetching, wire up navigation, connect to app state, and adapt UI components to the app's library. Copy any assets from `mockup/` to the main app's asset directory.

### Step 6: Update routing and verify

Add a route if the graduated component is a new page. If it replaces an existing component, update the import. Run the main app's linter, restart the workflow, and confirm it renders correctly.

### Step 7: Clean up (optional)

Ask the user if they want to remove the graduated mockup from the sandbox, keep it for reference, or remove the canvas iframes. Don't clean up automatically.

## When Graduation Is Complex

Most graduations are straightforward — just proceed. Only pause and check with the user when the main app uses a fundamentally different design system than the mockup (requiring a full visual translation), or when the graduation would require a complete refactor of the existing backend to support the new design.

## What to Preserve

These elements from the mockup should transfer exactly to production:

- **Visual design:** Colors, gradients, shadows, border radius, spacing
- **Typography:** Font families, weights, sizes, line heights
- **Layout:** Grid/flex structure, responsive breakpoints, spacing
- **Animations:** Transitions, hover states, entry animations
- **Icons:** Same icon library and icon choices

## What to Transform

These elements need adaptation for production:

- **Data:** Static mock data → real API calls or state
- **Navigation:** No-op handlers → real router navigation
- **State:** Local constants → app state management
- **Auth:** Stubbed user objects → real auth context
- **Error handling:** Add loading states, error boundaries, empty states
- **Accessibility:** Add ARIA labels, keyboard navigation, focus management

## Common Mistakes

- **Losing visual fidelity during transformation.** Ship what was approved — don't "improve" the design during graduation.
- **Forgetting loading and error states.** Mockups show the happy path. Production needs skeletons, error messages, and empty states.
- **Not checking the UI component library.** If the main app uses different components than shadcn/ui, translate — don't just copy imports.
- **Breaking existing functionality.** If replacing an existing component, ensure all existing features still work.
- **Skipping responsive behavior.** If the mockup was designed at a single viewport, ensure it works at other breakpoints.
