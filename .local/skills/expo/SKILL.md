---
name: expo
description: Guidelines for building mobile applications using Expo, covering UI design, animations, React context patterns, and native device feature permission (Camera, Location, FileUploads)
---

Always follow these guidelines when building a mobile application using Expo:

## Architecture

- iOS 26 exists. Use NativeTabs from expo-router for native tab bars with liquid glass support. Use `isLiquidGlassAvailable()` from expo-glass-effect to check availability and fall back to classic Tabs with BlurView for older iOS/Android.
- Follow modern React Native patterns and best-practices.
- Put as much of the app in the frontend as possible. The backend should only be responsible for data persistence and making API calls.
- Use React context for state that is shared across multiple components.
- Use React Query (@tanstack/react-query) for server state fetching.
- Use useState for very local state.
- Minimize the number of files. Collapse similar components into a single file.
- If the app is complex and requires functionality that can't be done in a single request, it is okay to stub out the backend and implement the frontend first.
- ALWAYS use native device capabilities (camera, location, contacts, etc.) when the app requires them. NEVER use fake/mock data when real device features are available and appropriate.
- Client-Server: the Expo client talks to an Express + TypeScript server via a RESTful API. The server handles data storage, API requests, auth, and any other server-specific logic.

## Routing

This stack uses Expo Router for file-based routing (similar to Next.js Pages Router) for the frontend. The backend uses Express with TypeScript.

- Every file in the `app/` directory becomes a route
- Use `_layout.tsx` files to define shared layouts
- Use `(group)` directories for layout groups without affecting URLs
- Use `[param].tsx` for dynamic routes

Example structure:

```text
app/
  _layout.tsx              # Root layout with providers
  index.tsx                # Home route (/)
  (tabs)/_layout.tsx       # Tab layout
  (tabs)/index.tsx         # First tab (/)
  (tabs)/settings.tsx      # Settings tab (/settings)
  profile/_layout.tsx      # Profile stack layout
  profile/index.tsx        # /profile
  profile/[id].tsx         # /profile/:id
```

For dynamic parameters: `const { id } = useLocalSearchParams()` from "expo-router"

## State Management

- Use React Query for server state (always use object API)
- Use useState for very local state
- Avoid props drilling - use React context for shared state
- Don't wrap <RootLayoutNav/> in a context hook - wrap at the root layout level
- React Query provider should be the top level provider
- Use AsyncStorage inside context providers for persistent state

## TypeScript Guidance

- TypeScript first: Proper typing with interfaces and type safety
- Explicit Type Annotations for useState: Always use `useState<Type[]>([])` not `useState([])`
- Type Verification: Before using any property or method, verify it exists in the type definition
- Null/Undefined Handling: Use optional chaining (`?.`) and nullish coalescing (`??`)
- Complete Object Creation: Include ALL required properties when creating objects
- Style Properties: Use literal values for variables used in styles (e.g., `const fontWeight = "bold" as const`)

## Imports

You can import using `@/` to avoid relative paths (e.g., `import { Button } from '@/components/Button'`)

## Styling

Use react-native's `StyleSheet` for styling. Reference colors from `constants/colors.ts` via the `useColors()` hook in `hooks/useColors.ts` — avoid hardcoding hex values in components.

If this Expo artifact is part of a multi-artifact project (e.g., alongside a react-vite web app), read `design_and_aesthetics.md` before writing component code — it covers how to sync colors, fonts, and radius from the sibling artifact so both share the same visual identity.

## Networking
- Use `@/lib/query-client` for all data fetching.
  - Queries should not define their own queryFn — the default fetcher in `@/lib/query-client` is already configured. This only applies when the app's QueryClient is imported from `@/lib/query-client`; if the project still uses a bare `new QueryClient()`, migrate it first.
  - Mutations should use `apiRequest` from `@/lib/query-client` and invalidate cache by queryKey after.
  - Use array query keys for hierarchical data: `queryKey: ['/api/recipes', id]`
- API URLs: Use `getApiUrl()` from `@/lib/query-client`. Construct URLs with `new URL(path, getApiUrl())`.
- Do not hardcode domain URLs or hostnames. Use `process.env.EXPO_PUBLIC_DOMAIN` for domain config or `getApiUrl()` for API requests.
- Do not create a new QueryClient() — use `@/lib/query-client` instead.

## App Icon

Generate a custom app icon for the app. Read the mobile-ui skill's app-icon.md reference for guidelines.

## Workflow
- The Expo App runs on port 8081. All web_application_feedback should go through port 8081 as that is where the user's app runs.
- The Express backend runs on port 5000. It serves APIs and a static landing page in server/templates/landing-page.html. Do NOT use port 5000 for web_application_feedback — it only serves the API and a landing page.
- There are two workflows for this stack:
  - `Start Backend`: Restarts (or starts) the Express server. Use `await restartWorkflow({ workflowName: "Start Backend" })` after backend changes. Do not restart this workflow for frontend-only changes — restarting takes time and degrades UX.
  - `Start Frontend`: Restarts (or starts) the Expo dev server. HMR handles most code changes automatically. Do not restart unless you updated dependencies or fixed an error.
- After presenting the artifact, call `suggestDeploy()` so the user knows their app is ready to publish.

## React Native Pitfalls

Avoid these common mistakes:

- UUID Generation:
   - Do not use the 'uuid' package — it requires crypto.getRandomValues() which crashes on iOS/Android
   - Use instead: `Date.now().toString() + Math.random().toString(36).substr(2, 9)`
   - Or use expo-crypto: `import * as Crypto from 'expo-crypto'; Crypto.randomUUID()` — pin to version 15.0.x (expo-crypto v55+ crashes in Expo Go)

- Import Verification:
   - Check existing template files for correct import paths before using them
   - useBottomTabBarHeight is from '@react-navigation/bottom-tabs', not 'expo-router'
   - When unsure, read the actual files to verify exports exist

- Scrolling Containers — assess whether scrolling is needed:
   - Not everything needs to be scrollable. Fixed layouts (timers, dashboards, single-screen UIs) should use View, not ScrollView
   - FlatList: Add scrollEnabled={data.length > 0} to prevent empty bounce
   - Avoid contentInsetAdjustmentBehavior="automatic" with transparent/large-title headers — it causes over-scrolling
   - ScrollView is for content that exceeds screen height. If content fits, use View

- useEffect Anti-Patterns:
   - Do not sync props to state with useEffect (causes infinite loops)
   - BAD: `useEffect(() => setState(prop), [prop])` then `useEffect(() => onChange(state), [state])`
   - GOOD: Derive values directly from props: `const hours = Math.floor(value / 3600)`
   - Only call onChange on explicit user actions (onPress, onChangeText), not in useEffect

- Mobile Typography:
   - Maximum font size for display/hero text (clocks, timers, large numbers): 48-64pt (not 96pt)
   - Body text: 14-16pt, Headers: 20-28pt
   - Always test that text fits on a 375pt wide screen (iPhone SE)

- Empty State Design: Use simple text-based empty states (icon + descriptive text), not placeholder images.

- Expo Router Header Configuration:
   - Do not set headerShown dynamically inside screen components — it causes remounts on every re-render
   - Configure all header options in _layout.tsx where screens are registered
   - Individual screens should only set dynamic content (headerLeft/headerRight buttons), not headerShown

- Safe Area / Top Padding:
   - Do not use hardcoded top padding (24px, 40px, etc.) — it will be wrong on different devices. Use `useSafeAreaInsets()` from react-native-safe-area-context and apply `insets.top` to `paddingTop`. This handles iPhone notch, Dynamic Island, and Android status bars automatically.
   - Absolutely positioned headers: when a header is positioned absolutely over scrollable content:
     - Header uses: `top: insets.top` (positions header below notch/Dynamic Island)
     - Content below needs: `paddingTop: insets.top + headerContentHeight` (e.g. `insets.top + 70` where 70 = header's internal height). Do NOT use a fixed value like `paddingTop: 100` — it fails on devices with different insets (47px on older iPhones, 59px+ on Dynamic Island).

- Streaming API Responses (OpenAI, etc.):
   - For streaming, read the mobile-ui skill's expo-fetch.md reference
   - Use `import { fetch } from 'expo/fetch'` which supports getReader() on all platforms

- Keyboard Handling:
    - For detailed keyboard handling patterns (forms, chat, FlatList with inputs), read the mobile-ui skill's keyboard.md reference
    - Use `react-native-keyboard-controller` for all keyboard handling — it provides better control than React Native's built-in KeyboardAvoidingView and works consistently across iOS and Android
    - Do not use InputAccessoryView — it doesn't render properly in Expo Go
    - Forms with multiple inputs: Use `KeyboardAwareScrollViewCompat` with `bottomOffset` and `keyboardShouldPersistTaps="handled"`
    - Chat/messaging: Use `KeyboardAvoidingView` from `react-native-keyboard-controller` with `behavior="padding"` on both platforms, `keyboardDismissMode="interactive"` and `keyboardShouldPersistTaps="handled"` on FlatList
    - keyboardVerticalOffset: `0` for transparent/no header, `headerHeight` for opaque header
    - Use useSafeAreaInsets() for bottom padding on the input container to avoid home indicator overlap
    - Do not nest KeyboardAvoidingViews — only one should wrap your content
    - For chat UIs: Use inverted FlatList (see below) — no additional scroll logic needed. Do not try to implement auto-scroll with scrollToEnd() — it has timing bugs. Inverted FlatList handles this automatically.

- Chat Apps — state and FlatList patterns:
    - For chat app implementation patterns (stale closures, inverted FlatList, streaming), read the mobile-ui skill's expo-fetch.md reference
    - Key rules: Use inverted FlatList (not scrollToEnd), capture state before async operations, use ListHeaderComponent for typing indicator
    - FlatList Boolean Props — type coercion: props like `scrollEnabled` and `showsVerticalScrollIndicator` expect booleans. Using `someString || anotherValue` can pass a string and cause `TypeError: expected dynamic type 'boolean', but had type 'string'`. Coerce with `!!`:
      - BAD: `scrollEnabled={data || someString}`
      - GOOD: `scrollEnabled={!!data || !!someString}`

- RevenueCat compatibility:
    - RevenueCat works in Expo Go and does not require a native build. In Expo Go, the SDK automatically runs in Preview API Mode, replacing native calls with JavaScript mocks so your app loads without errors.
    - RevenueCat works on the web out of the box without any additional configuration.

- Custom ErrorBoundary component:
    - Use `reloadAppAsync` from `expo` with the ErrorBoundary component to restart the app when it crashes: `import { reloadAppAsync } from 'expo'`. Do not use `reloadAsync` from `expo-updates` for this purpose.
    - The ErrorBoundary is a minimal class component (required by React's error boundary API) with a functional ErrorFallback component for the UI. The consuming component should remain functional.
    - Do not add local state to the ErrorFallback component — it only renders if the app crashes. Use as-is unless the user requests otherwise. (Dev-mode-only state guarded by `__DEV__` is acceptable for debugging.)
    - The ErrorFallback uses `useColors()` and `useSafeAreaInsets` for theming and positioning. The ErrorBoundary wrapper uses React's class component error boundary API (`getDerivedStateFromError`, `componentDidCatch`).

- react-native-maps:
    - Pin version to exactly 1.18.0 in package.json — this is the only version compatible with Expo Go currently. Other versions cause crashes.
    - Do not add react-native-maps to the plugins array in app.json — it will crash the app.

- Over use of text:
    - Mobile apps should be designed for touch input, not text input.
    - Most buttons should not have text. They should have icons.
    - If you have to use text, use it sparingly and only for very important information.
    - Applications do not need a title like "Chatbot" or "AI Assistant". They should look like market leading apps.

## Gestures

Use PanResponder from 'react-native' for gesture handling.

## Safe Area View

When to use SafeAreaView:

1. Built-in tabs or header: Don't add SafeAreaView - they handle insets automatically
2. Custom header: Add SafeAreaView to the header component
3. Removed header: Add SafeAreaView inside a View with background color (not just white space)
4. Pages inside stacks: Don't add SafeAreaView if parent _layout.tsx has header enabled

Games and absolute positioning: account for safe area insets in positioning calculations using `useSafeAreaInsets()`. Apply insets in game physics. Avoid `SafeAreaView` in game screens — factor insets into the game loop instead.

## Font Loading and SplashScreen

The scaffold ships with `@expo-google-fonts/inter` pre-installed and already loaded in `_layout.tsx` with the correct `useFonts` + `SplashScreen` font-gating pattern. Available weights: `Inter_400Regular`, `Inter_500Medium`, `Inter_600SemiBold`, `Inter_700Bold`.

If the user wants a different font, swap the import and `useFonts` call — keep the same font-gating pattern.

Rules:

- Do NOT remove the font-gating pattern from `_layout.tsx`
- Handle `fontError` alongside `fontsLoaded` — if font loading fails, the app should still render rather than showing a white screen forever
- Tie `SplashScreen.hideAsync()` to `[fontsLoaded, fontError]` — do not call it unconditionally in `useEffect([], [])`
- The `if (!fontsLoaded && !fontError) return null` must come after the `useEffect` hook, not before it (hooks cannot be called conditionally)

## Library Compatibility

- ONLY use libraries from the Expo Go compatible list
- Do not install additional native libraries unless they're JS only
- Pre-installed: expo-router, @expo/vector-icons, @tanstack/react-query, react-native-reanimated
- Error boundary: Custom ErrorBoundary component (components/ErrorBoundary.tsx)

## Insets

Web-only insets for web edge cases (always implement for every app):

- Apply on web only (Platform.OS === "web")
- Always add at least a 67px top inset to top-level header content for the status bar. Additional vertical padding will likely still be required.
- Always add a 34px bottom inset
  - If using a bottom tab bar, instead modify the tab bar height to be 84px (50px + 34px). Do not add paddingBottom to the tab bar.
- Do not add these insets on iOS/Android; native safe areas already handle them
- Before finishing any screen, verify that web platform insets handling is implemented and correct.

## Web Compatibility

Write code that does not crash in React Native Web. Account for platform-specific compatibility.

Polyfilled APIs (work on web without Platform checks):

- expo-secure-store, expo-haptics, react-native-maps, Alert, RefreshControl

Partial Web Support:

- expo-camera (no switch camera, no recordAsync)
- expo-clipboard, expo-file-system, expo-image, expo-notifications, expo-video
- react-native-reanimated: Layout animations don't work on web, native driver not supported

No Web Support (use Platform.OS checks):

- expo-battery, expo-brightness, expo-contacts, expo-device, expo-local-authentication
- expo-location (use web geolocation API), expo-media-library, expo-sensors, expo-sharing

Example workaround:

```tsx
if (Platform.OS !== 'web') {
  // Native-only code
} else {
  // Web alternative
}
```

## Payments

If prompted to add payments (i.e. subscriptions, in-app purchases, etc.), always use RevenueCat. Do not use Stripe unless the user explicitly requests it.

## Testing

- Add testID to interactive elements for testing
- Use mobile screen sizes for automated testing
- Recommended dimensions: height: 720, width: 400

## Replit Environment

- User can scan QR code from Replit's URL bar menu to test on their physical device via Expo Go
- Hot module reloading (HMR) is enabled - no need to restart the dev server for code changes

## Publishing

Replit has a built-in publishing flow for Expo apps called **Expo Launch**. Expo Launch handles the production build and **App Store (iOS) submission only** — the user triggers it by clicking the Publish button. More information can be found in the Replit docs which you can search. Only call `suggestDeploy()` after the app is fully built and verified (see `## Workflow` for when to call it), and only when iOS publishing is relevant. Do not call it mid-build or in response to a planning question.

- If the user asks what **Expo Launch** is: explain it is Replit's built-in flow for building and submitting the app to the App Store (iOS). More info is in the Replit docs.
- If the user asks about **Google Play (Android)** publishing: let them know it is **not currently supported** on Replit. Do not call `suggestDeploy()` for Android-only requests.
- Do not attempt to help with EAS CLI commands or manual App Store submission — Replit's Expo Launch handles App Store publishing.
- `suggestDeploy()` only works from the main agent context. Do not call it from a task-agent or subrepl session — it will return `success: false`. Instead, remind the user to publish from the main project after merging.

## Forbidden Changes
- NEVER edit package.json directly. See package management skill for instructions on installing packages.
- NEVER change bundle identifiers after initial setup unless user explicitly requests it.
- NEVER downgrade the version of React Native or Expo that is declared in package.json.
- NEVER run `npx expo start` or `npx expo` directly in a shell. Use the `restart_workflow` tool instead — running expo directly will miss environment variables (like `PORT`) injected into the workflow.
- NEVER create app.config.ts or app.config.js. The project MUST use a static app.json for Expo configuration. Dynamic config files (app.config.ts/js) break the Expo Launch build process. If you need to modify Expo settings, edit app.json directly. If an existing app.config.ts or app.config.js is present in the project, migrate its settings to app.json and delete the dynamic config file.
- NEVER run or suggest running EAS CLI commands (`npx eas build`, `npx eas submit`, `npx eas update`, `npx eas init`, `eas build`, etc.). iOS publishing is handled via Replit's Expo Launch.

## References

Before writing code, identify whether any reference below applies to the task. If it does, read it first.

- `.local/skills/expo/references/first_build.md` - Use this reference when first building an Expo app (from 0 to 1)
- `.local/skills/expo/references/react_context.md` - Use this reference when creating or modifying shared state with React context, provider composition, or context-based hooks.
- `.local/skills/expo/references/design_and_aesthetics.md` - Use this reference when designing or restyling UI, selecting iconography, or implementing animations and visual polish. Skip the "Cross-Artifact Design Consistency" section unless this expo artifact is part of a multi-artifact project with a sibling web app.
- `.local/skills/expo/references/device_features_and_permissions.md` - Use this reference when implementing camera, location, notifications, contacts, file uploads, or any permission request/denial flow.
- mobile-ui skill's `.local/skills/mobile-ui/references/keyboard.md` - Use this reference when implementing any keyboard handling — forms with multiple inputs, chat/messaging UIs, FlatList with inputs, or keyboard utilities (dismiss, detect visibility).
- mobile-ui skill's `.local/skills/mobile-ui/references/sheets.md` - Use this reference when implementing modals, sheets, formSheet presentations, auth flows (login/register), wizards, or overlay UI.
- mobile-ui skill's `.local/skills/mobile-ui/references/tabs.md` - Use this reference when implementing tab bars — covers NativeTabs with liquid glass support (SDK 54+) and classic Tabs fallback with detailed code examples.
