<first_build>
When building a new Expo app for the first time, follow this sequence for speed and quality.

**Scaffold** — these files are already opened in your context (do NOT re-read them). The scaffold also includes these components you won't see opened: `ErrorBoundary`, `ErrorFallback`, `KeyboardAwareScrollViewCompat`. Providers wired in `_layout.tsx`: SafeAreaProvider, ErrorBoundary, QueryClientProvider, GestureHandlerRootView, KeyboardProvider. Fonts: Inter (400/500/600/700) pre-loaded with SplashScreen gating. Packages pre-installed: expo-router, @expo/vector-icons, @tanstack/react-query, react-native-reanimated, react-native-keyboard-controller, react-native-gesture-handler, react-native-safe-area-context, expo-haptics.

## Build Sequence

1. **Generate images FIRST** — kick off ALL image generation via `generateImageAsync` (from the `media-generation` skill) in a single batch before writing any code. This includes:
   - App icon & splash. Save to `assets/images/icon.png`.
   - If the app is image-heavy (streaming, social, media, recipes, travel, etc.), also generate 2-3 content placeholder images for the initial UI (e.g., hero banners, category thumbnails, placeholder cards). Save to `assets/images/`. Do NOT over-generate — 2-3 images max for first build content.
   Images generate in the background while you continue building.

2. **Plan the full app structure** — decide on all screens, components, context providers, navigation, and colors BEFORE writing any code. You need this plan to write everything in one batch.

3. **Write ALL files in a single parallel batch** — this is critical for speed. Every new file is independent. In ONE tool call, write:
   - `constants/colors.ts` (updated theme)
   - All component files (cards, inputs, headers, etc.)
   - All context/provider files
   - All screen files (`app/index.tsx`, `app/detail.tsx`, etc.)
   Do NOT write files one at a time. Batch every new file into a single parallel write call.

4. **Update existing scaffold files in a second parallel batch** — in ONE tool call, edit:
   - `app/_layout.tsx` (add new providers, adjust Stack screens)
   - `app/(tabs)/_layout.tsx` (add/remove tabs, or delete if not using tabs)
   - `app.json` (update name if needed)

5. **Install additional packages** if any are needed beyond what's pre-installed.

6. **Restart workflow** once at the end — not before. After restarting, check logs (`refresh_all_logs`) to confirm the app is running without errors. Fix any errors before presenting.

## First Build Rules

- **Expo apps default to frontend-only.** Unless the user explicitly asks for a backend, database, or server-side features, do NOT provision a database, write an OpenAPI spec, run codegen, or create backend routes. Use AsyncStorage for all local persistence. This is the single most common mistake — avoid it.
- Do NOT restart the workflow until all files are written.
- Do NOT re-read scaffold files — their content is documented above.
- Do NOT take screenshots while building — take exactly ONE at the very end after restarting the workflow to confirm the app is live (see Screenshot Rules below).
- Every feature must be complete — no placeholder buttons or unfinished states.
- Only use Expo Go compatible packages.
- **Maximize parallel tool calls.** Writing 10 files sequentially is 10x slower than writing them in one batch. If files don't depend on each other, write them together.

## Scope Guidance

**Features to AVOID in the first build:**

- Backend databases or servers (use AsyncStorage)
- Complex integration with multiple third-party services
- Push notifications

**Features you CAN include:**

- GenAI/External integrations (OpenAI, Anthropic, etc.)
- Single integration use (RevenueCat, Firebase, etc.)
- CRUD operations with AsyncStorage
- Forms, navigation, routing
- Native device capabilities (camera, location) when relevant

## Design Quality

Design quality is the top priority. Build a production-ready app with polished UI — no placeholder buttons or unfinished states. Draw inspiration from market-leading apps (Airbnb, Instagram, Notion, Apple Notes, ChatGPT Mobile).

**Component standards** — every component must be complete with proper states:

- Loading: Skeleton shimmer or activity indicator
- Empty: Icon + text (no generated images, no emojis)
- Error: Message + retry button
- Buttons: Press feedback (opacity/scale), disabled state
- Lists: Empty state, pull-to-refresh where appropriate
- Forms: Validation feedback
- Key actions: Haptic feedback via expo-haptics

**Navigation structure:**
The template comes with a tab bar and header, but most apps don't need them. Evaluate your app's needs:

- Single-screen apps (chat, camera, simple tools): NO tabs, NO header. Delete `app/(tabs)/`, create `app/index.tsx`.
- Multi-section apps (social, e-commerce): Tabs may be useful. Hide the header with `headerShown: false` in Tabs screenOptions.
- Market-leading apps like Instagram, ChatGPT, WhatsApp have minimal chrome — no visible title bars.
- Liquid glass tab bars (NativeTabs) are a major wow factor for iOS 26+ users.

**Design principles:**

- Draw inspiration from iOS, Instagram, Airbnb, Coinbase
- Mobile-native design patterns, not web-like designs
- Avoid generic aesthetics (purple gradients on white, predictable layouts)
- Every screen should feel cohesive
- Icons over text for buttons — use @expo/vector-icons, NEVER emojis
- Choose a font that matches the app's personality (see Typography below)

**Typography personality:**

- Chat/AI apps: Inter, DM Sans, or Source Sans Pro for clean readability
- Finance/Crypto: Inter, DM Sans, or Roboto for trust and clarity
- Creative/Social: Poppins, Nunito, or Montserrat for friendliness
- Fitness/Health: Rubik, Work Sans, or Outfit for energy
- Notes/Productivity: Merriweather (serif) + Inter (sans) for hierarchy

**Color choices** are very important. Be inspired by production-level applications:

- Note Taking Apps: Notion, Apple Notes
- AI Chatbots: ChatGPT Mobile App, Claude Mobile App
- Social: Instagram, Twitter
- Finance: Coinbase, Robinhood

## Screenshot Rules

**First build:** Take exactly ONE screenshot at the very end, after restarting the workflow, to confirm the app is live and not crashing. That is it. Do NOT screenshot repeatedly to iterate on UI or debug layout issues during the first build.

**After first build (iterations):** Screenshots are allowed for verifying specific bug fixes or user-requested changes, but do NOT loop — if a screenshot shows a problem, fix the code and move on. Do NOT take another screenshot to verify the fix unless the user asks. Trust your code changes.

**Web preview caveats:**

- Safe area insets render differently on web vs native — content may appear clipped at top/bottom
- The web preview runs in an iframe which affects safe area calculations
- Do NOT debug layout issues visible only in web screenshots — these are web rendering artifacts, not real bugs. The native preview (Expo Go) is the source of truth.
</first_build>
