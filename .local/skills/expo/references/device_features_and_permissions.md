# Permissions — use real device features

General Flow:

- Use permission hooks: Camera.useCameraPermissions(), Location.useForegroundPermissions(), etc.
- If a feature requires permission, show a button to request it when not granted
- Never use fake/mock data - always use real device capabilities
- If user denies permission and canAskAgain is false, show Settings button (guard with Platform.OS !== "web" and wrap in try-catch)

Single Permission Pattern:

- Call permission hook: const [permission, requestPermission] = Camera.useCameraPermissions()
- If !permission, show loading
- If !permission.granted && permission.status === "denied" && !permission.canAskAgain, show "Open Settings" button
- Otherwise show button to request permission
- WRONG: Never check and return without giving user a way to request

PermissionResponse: { status, granted, canAskAgain, expires }

Per-Permission Guidelines:

- Camera (expo-camera, expo-image-picker): Button to take photo or select from gallery
- Location (expo-location): Use useForegroundPermissions hook. Accuracy levels: Lowest (3km), Low (1km), Balanced (100m), High (10m), Highest (best). Background location needs BOTH foreground AND background permissions
- Notifications (expo-notifications): Button or toggle (starts OFF) to enable
- Contacts (expo-contacts): Button to access. Provide alternative input if denied
- Media Library (expo-media-library): Button to access photos, videos, or audio
- Local Authentication (expo-local-authentication): Check hasHardwareAsync first. Provide PIN/password fallback
- Maps (react-native-maps): Use expo-location to request permission first, then showsUserLocation prop

Expo Go: Most permissions work. Background location and some advanced permissions need a development build.

## File Uploads

CRITICAL - Correct imports for file uploads:

- `import { File } from 'expo-file-system'` - File class for creating uploadable files
- `import { fetch } from 'expo/fetch'` - fetch function for uploading
- NEVER import fetch from expo-file-system (it doesn't exist there)

Usage: `const file = new File(uri); formData.append('file', file);`
PDFs: Open in WebView (react-native-webview) - preferred for iOS and Expo Go

## Library Compatibility

- ONLY use libraries from the Expo Go compatible list
- Do not install additional native libraries unless they're JS only
- Pre-installed: expo-router, @expo/vector-icons, @tanstack/react-query, react-native-reanimated
- Error boundary: Custom ErrorBoundary component (components/ErrorBoundary.tsx)
