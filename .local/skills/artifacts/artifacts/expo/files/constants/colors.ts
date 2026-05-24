/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: "#0a0a0a",
    tint: "#2f95dc",

    // Core surfaces
    background: "#ffffff",
    foreground: "#0a0a0a",

    // Cards / elevated surfaces
    card: "#f9f9f9",
    cardForeground: "#0a0a0a",

    // Primary action color (buttons, links, active states)
    primary: "#2f95dc",
    primaryForeground: "#ffffff",

    // Secondary / less-emphasis interactive surfaces
    secondary: "#f0f0f0",
    secondaryForeground: "#1a1a1a",

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: "#f0f0f0",
    mutedForeground: "#737373",

    // Accent highlights (badges, selected items, focus rings)
    accent: "#f0f0f0",
    accentForeground: "#1a1a1a",

    // Destructive actions (delete, error states)
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",

    // Borders and input outlines
    border: "#e5e5e5",
    input: "#e5e5e5",
  },

  // Border radius (in px). Sync from the sibling web artifact's --radius
  // CSS variable. This value applies to cards, buttons, inputs, and modals.
  radius: 8,
};

export default colors;
