# Design

This is the MOST CRITICAL aspect of mobile app development. Make designs beautiful, not cookie cutter.
Draw inspiration from iOS, Instagram, Airbnb, popular habit trackers, Coinbase.
Mobile designs should feel mobile and clean - use mobile-native design patterns, not web-like designs.

- NEVER use emojis in the application
- BUTTONS: Prefer icon buttons over text buttons (e.g., checkmark icon instead of "Done", X icon instead of "Cancel"). Text buttons often don't render well on mobile. Use @expo/vector-icons for button icons. Do NOT add backgroundColor or borderRadius to icon buttons.

## Cross-Artifact Design Consistency

When building a mobile artifact alongside a sibling web artifact, synchronize the design tokens before writing component code. The mobile app should share the same visual identity — colors, fonts, and border radius — so both artifacts feel like one product.

### Colors

Derive the mobile palette from the sibling artifact rather than inventing a new one. Steps:

1. **Read the sibling artifact's CSS/style file.** For react-vite, this is `artifacts/<web-slug>/src/index.css`. Look for the `:root` block and `.dark` block containing color definitions (may be `--color-*` custom properties with HSL/hex values).
2. **Extract every color token:** primary, accent, background, foreground, muted, destructive, card, border, etc. Convert HSL to hex if needed.
3. **Update `constants/colors.ts`** with the extracted values. Update the `light` key with the sibling's light-theme colors. If the sibling has a `.dark` block, add a `dark` key with the same token names — `useColors()` will automatically pick it up (no hook changes needed).
4. **Verify colors match** by checking the primary color side-by-side. If the mobile primary doesn't match the web primary, fix the extraction before continuing.

When the sibling uses shadcn tokens (`--primary`, `--background`, `--accent`, `--muted`, etc.), they map directly to `colors.ts` key names (no translation needed).

Example mapping (CSS → colors.ts):

```text
/* index.css */                     /* colors.ts */
--background: 0 0% 100%        →   background: "#ffffff"
--primary: 32 97% 50%          →   primary: "#fb8804"
--accent: 14 100% 50%          →   accent: "#ff3c00"
--muted: 0 0% 94%              →   muted: "#f0f0f0"
--muted-foreground: 0 0% 45%   →   mutedForeground: "#737373"
```

### Typography

Use the same font family as the sibling artifact. The scaffold ships with Inter. If the web artifact uses a different font (e.g., Plus Jakarta Sans, Poppins, etc.):

1. Read the sibling's `--app-font-sans` (or `--font-*`) CSS variable to find the font family name.
2. If the font is available on Google Fonts, install the matching `@expo-google-fonts/*` package. If it's a custom/self-hosted font (e.g. Adobe, brand fonts), download the `.ttf`/`.otf` files into `assets/fonts/` and load them with `expo-font`'s `Font.loadAsync()` or `useFonts`.
3. Update the `useFonts` call in `app/_layout.tsx` with the correct weight imports (Regular, SemiBold, Bold, etc.)
4. Apply the font consistently via `fontFamily: "font-name"` in `StyleSheet` styles.

Font sizes on mobile (in pt) do not need to match web sizes (in rem), but the typographic hierarchy and weight proportions should feel identical. If the web app uses bold headlines and light body text, the mobile app should do the same.

### Border Radius

Match the sibling artifact's border radius approach. The web artifact typically defines `--radius: 0.5rem` (8px) with a "small unless circle or pill" rule. Update the `radius` value in `constants/colors.ts` (e.g., `radius: 8` for `0.5rem`, `radius: 24` for `1.5rem`). Use `colors.radius` from the `useColors()` hook for cards, buttons, inputs, and modals so interactive elements feel consistent across platforms.

### Splash Screen

After customizing the palette, update `app.json` so the splash screen matches the brand:

- Set `splash.backgroundColor` to the `background` color from `constants/colors.ts` (light theme value). Expo's `app.json` only supports a single splash color, so pick the light theme background as the default.
- For dark-mode-aware launches, use `expo-system-ui` to call `SystemUI.setBackgroundColorAsync()` in the root `_layout.tsx` based on the current color scheme. This overrides the static splash color at runtime before the app content renders.

If no sibling artifact exists yet, choose a distinctive, cohesive palette and populate both light and dark themes in `constants/colors.ts`. Future artifacts should then derive their design tokens from this file.

## Frontend Aesthetics

Avoid generic "AI slop" aesthetics - make creative, distinctive frontends that surprise and delight.

Color & Theme:

- Always use the semantic tokens from `constants/colors.ts` — never hardcode hex values in components.
- Commit to a cohesive aesthetic. Use variables for consistency.
- Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- Avoid clichéd color schemes (particularly purple gradients on white backgrounds).

Motion:

- Use animations for effects and micro-interactions.
- Prioritize react-native-reanimated solutions.
- Focus on high-impact moments: animated elements (progress bars), micro-interactions (button press animations, haptics).

Backgrounds:

- Create atmosphere and depth rather than defaulting to solid colors.
- Layer gradients, use geometric patterns, or add contextual effects.

Avoid:

- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character
- Converging on common choices (Space Grotesk, etc.) - think outside the box

## Icons

- Use @expo/vector-icons for icons (built into Expo)
- Available icon sets: Ionicons, MaterialIcons, Feather, FontAwesome, MaterialCommunityIcons, etc.
- Example:

```tsx
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useColors } from '@/hooks/useColors';

function MyScreen() {
  // useColors() must be called inside a component or custom hook
  const colors = useColors();
  return (
    <>
      <Ionicons name="home" size={24} color={colors.foreground} />
      <Feather name="settings" size={24} color={colors.foreground} />
      <MaterialIcons name="person" size={24} color={colors.primary} />
    </>
  );
}
```

- Browse available icons at: <https://icons.expo.fyi>

## Animations

- Use react-native-reanimated for animations (pre-installed)
- Provides better performance than the basic Animated API
- Note: Layout animations don't work on web
- IMPORTANT - useAnimatedStyle HOOKS RULE:
  - NEVER call useAnimatedStyle inside .map(), .filter(), or any loop
  - NEVER call useAnimatedStyle conditionally (inside if statements)
  - This causes "rendered more hooks than during previous render" error
  - SOLUTION: Extract animated items into separate components

BAD - calling hook inside map:

```tsx
items.map(item => {
  const style = useAnimatedStyle(() => ({}));
  return <Animated.View style={style} />;
})
```

GOOD - extract to component:

```tsx
function AnimatedItem({ item }) {
  const style = useAnimatedStyle(() => ({}));
  return <Animated.View style={style} />;
}
// Then: items.map(item => <AnimatedItem item={item} />)
```
