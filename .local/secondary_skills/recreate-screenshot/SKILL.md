---
name: recreate-screenshot
description: Recreate a UI from a screenshot or image with pixel-perfect accuracy.
---

# Recreate Screenshot

Recreate a UI screen from a screenshot or image reference. The goal is pixel-perfect accuracy — the rendered output should be visually indistinguishable from the source image.

## When to Use

- User pastes a screenshot and says "build this", "recreate this", "make this", "replicate this UI"
- User uploads a design mockup image and wants it implemented
- User shares a reference image from another app and wants an exact visual match
- User provides a Figma screenshot, Dribbble shot, or any visual reference to reproduce

## When NOT to Use

- User wants a *functional app inspired by* a design — that's general development, not screenshot recreation
- User wants to *clone a live website* by URL — use the website-cloning skill instead
- User wants to *redesign or improve* an existing component — use design-exploration instead
- User describes a UI in words without providing an image — that's standard design work

## Phase 1: Analyze the Screenshot

Before writing any code, study the image systematically. Extract every visual detail.

### Layout Analysis

- Identify the overall layout structure: single column, sidebar + content, grid, split-screen
- Map the visual hierarchy: what draws the eye first, second, third
- Note the container structure: full-width vs constrained, nested containers, card groups
- Identify repeating patterns: card grids, list items, nav items, form groups

### Color Extraction

Extract exact colors from the image — do not approximate.

- **Primary background** — the dominant background color
- **Secondary backgrounds** — card backgrounds, section backgrounds, sidebar fills
- **Primary accent** — buttons, links, active states
- **Text colors** — headings vs body vs muted/secondary text (these are almost always different)
- **Border and divider colors** — often subtle grays
- **Gradient start/end colors** — if any gradients are visible
- **Shadow colors** — note opacity and spread if box-shadows are present

Record all colors as hex values. If the image shows a dark theme, note that explicitly.

### Typography Analysis

- **Font classification** — is it sans-serif (most common), serif, monospace, or display/decorative?
- **Heading sizes** — estimate px sizes for h1, h2, h3 relative to surrounding elements
- **Body text size** — typically 14-16px
- **Font weights** — identify bold (700), semibold (600), medium (500), regular (400), light (300) usage
- **Letter spacing** — is it tight (negative), normal, or wide (uppercase labels often have wide spacing)
- **Line height** — compact (1.2-1.3) for headings, relaxed (1.5-1.7) for body text
- **Text transforms** — any uppercase labels, capitalized nav items

### Component Inventory

Catalog every visible component:

- **Buttons** — size, border-radius, fill vs outline vs ghost, icon placement, shadow
- **Cards** — padding, border-radius, border vs shadow vs both, background
- **Input fields** — height, border style, border-radius, placeholder style, focus state (if visible)
- **Navigation** — horizontal vs vertical, active indicator style, icon + label vs label only
- **Lists** — spacing between items, divider style, icon/avatar placement
- **Modals/sheets** — overlay darkness, container radius, close button style
- **Tags/badges** — size, radius (pill vs rounded-rect), color coding
- **Avatars/images** — exact dimensions, border-radius (circle vs rounded), border/ring

### Spacing System

- **Container padding** — page-level horizontal padding
- **Section spacing** — vertical gap between major sections
- **Card internal padding** — consistent padding within cards
- **Element gaps** — space between items in a list, grid gap, button groups
- **Margin patterns** — consistent spacing multiples (4px, 8px, 12px, 16px, 24px, 32px)

## Phase 2: Build

### Setup

Build the component using the project's existing framework. If the project uses React + Vite, build a React component. If Expo, build a React Native component. Match the stack.

If there is no existing project context, or the user wants a standalone prototype, use the mockup sandbox (see the mockup-sandbox skill). Create the component as a self-contained mockup that can be embedded on the canvas.

### Construction Rules

Follow these rules with zero exceptions:

**Layout fidelity:**

- If the screenshot shows a column layout, build a column layout — do not reorganize
- If elements are positioned absolutely in the reference, use absolute positioning
- Match the exact number of grid columns, the exact flex direction, the exact alignment
- If the screenshot shows content clipped at the bottom (implying scroll), add scroll behavior

**Color fidelity:**

- Use the exact hex colors extracted in Phase 1
- Define all colors as CSS custom properties or theme tokens at the top of the file
- Do not substitute "close enough" colors — `#1A1A2E` is not `#1B1B30`
- If there are gradients, match both the colors and the direction

**Typography fidelity:**

- Match font sizes, weights, and spacing as closely as possible
- Use Google Fonts if the exact font is identifiable; otherwise pick the closest match in the same classification (geometric sans, humanist sans, transitional serif, etc.)
- Match bold, medium, and regular weights exactly as shown

**Component fidelity:**

- Every button must match: size, color, border-radius, label text, shadow, icon placement
- Every card must match: padding, background, border/shadow, internal layout
- Every input field must match: height, border style, placeholder text, border-radius
- Every list item must match: spacing, icon placement, divider style, text alignment

**Content fidelity:**

- Use the exact text visible in the screenshot — do not invent new copy
- If text is partially obscured, use realistic placeholder text that matches the visible length
- For images, use placeholder images at the exact same dimensions
- For avatars, use generated avatars (DiceBear or similar) at the correct size
- For icons, use the closest match from lucide-react or the project's icon library

**Interaction states:**

- Add hover states to all interactive elements (buttons, links, cards if they appear clickable)
- Add pressed/active state styling to buttons
- Add focus-visible styles to form elements
- If the screenshot implies scroll behavior, implement it with proper overflow handling
- Make the layout responsive to the container it's rendered in

### What to Build

Build a **complete, self-contained screen**:

- Do not leave sections commented out or marked "TODO"
- Do not add elements not present in the screenshot
- Do not remove elements that are present in the screenshot
- Do not add navigation to pages that aren't shown
- If the screenshot shows a mobile viewport, build it at that viewport width

## Phase 3: Validate

After building, compare your output against the source image.

### Visual Checklist

Go through each category and verify:

- [ ] **Layout structure** matches exactly — same columns, same flex direction, same alignment
- [ ] **Background colors** match for page, sections, cards, and sidebars
- [ ] **Text colors** match for headings, body, muted text, and links
- [ ] **Accent/brand color** matches on buttons, active states, and highlights
- [ ] **Font sizes** match the visual hierarchy in the screenshot
- [ ] **Font weights** match — headings are the right boldness, body is the right weight
- [ ] **Spacing** matches — padding inside cards, gaps between elements, section margins
- [ ] **Border radius** matches on every element — buttons, cards, inputs, avatars
- [ ] **Shadows** match — present where they should be, absent where they shouldn't
- [ ] **Icons** are the right size and in the right position
- [ ] **Content** matches — text, image placeholders, avatar placeholders are all present

### Iteration

If any item on the checklist is off, fix it before presenting to the user. Common issues:

- Colors are slightly off — re-examine the screenshot, extract again
- Spacing feels wrong — check padding and gap values against the reference
- Font weight is wrong — try adjacent weights (500 vs 600, 600 vs 700)
- Border radius is wrong — common values: 4px, 6px, 8px, 12px, 16px, 9999px (pill)
- Cards look flat when they should have depth — add box-shadow
- Layout doesn't match at the right viewport — check if you're building at the correct width

## Working with Subagents

For complex screenshots with many components, delegate to a DESIGN subagent:

- Include the screenshot image in the subagent prompt
- Pass the full color extraction, typography analysis, and component inventory from Phase 1
- Specify the exact target file path and dimensions
- Include the construction rules from Phase 2 in the brief
- Tell the subagent to mark the iframe as "live" when complete

For multiple screenshots (e.g., recreating several screens of an app), fan out with one DESIGN subagent per screen and coordinate via the canvas.

## Common Patterns

### Dark UI

Dark UIs are not just "white on black." Look for:

- Layered dark backgrounds (e.g., `#0A0A0F` page, `#12121A` cards, `#1A1A26` hover)
- Subtle borders (1px solid rgba(255,255,255,0.06-0.1))
- Muted text colors (not pure white — usually `#A0A0B0` or similar)
- Glow effects on accent colors (box-shadow with the accent color at low opacity)

### Gradient Backgrounds

- Extract both start and end colors
- Note the direction (most common: top-to-bottom, left-to-right, diagonal)
- For mesh gradients or complex gradients, approximate with radial gradients

### Glass/Blur Effects

- Use `backdrop-filter: blur(12-24px)` with a semi-transparent background
- Often combined with a subtle border (1px solid rgba(255,255,255,0.1))
- Background opacity typically 60-80%

### Sidebar + Content Layouts

- Sidebar is usually fixed width (240-280px) with its own background
- Content area fills remaining space
- On mobile, sidebar typically collapses to a hamburger menu
