# React and Vite Setup

Configuration requirements for React applications using Vite in the Replit environment.

## Mandatory Setup

### Configure allowedHosts in vite.config.ts

You **must** allow all hosts in your Vite configuration. Without this, the user will never see your application through the Replit proxy.

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    // Or specify the Replit domains explicitly:
    // allowedHosts: ['.replit.dev', '.repl.co']
  },
});
```

## Full Example Configuration

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
```

## Hot Module Replacement (HMR)

Vite's HMR works automatically in Replit. Frontend changes are reflected immediately without a manual restart.

**Requires restart:**

- vite.config.ts changes
- Environment variable changes
- Package installation

**Does NOT require restart:**

- React component changes
- CSS/style changes
- Asset changes

## Connecting to Backend API

When your React app calls a backend API, use the Replit domain instead of localhost:

```typescript
// Get the API URL from environment or use the Replit domain
const API_URL = import.meta.env.VITE_API_URL || '';

// Fetch from your backend
const response = await fetch(`${API_URL}/api/users`);
```

For development, you can configure a proxy in vite.config.ts:

```typescript
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
```

## Troubleshooting

### User Cannot See the Application

1. Verify `allowedHosts: true` is in vite.config.ts
2. Confirm server is bound to `0.0.0.0` (not `127.0.0.1` or `localhost`)
3. Check port is 5000
4. Restart the workflow after config changes

### Changes Not Appearing

1. For config changes: Restart the workflow
2. For component changes: HMR should handle it automatically
3. If HMR fails: Check browser console for errors, then restart

### Build Errors

Check for:

- Missing dependencies in package.json
- TypeScript errors in source files
- Invalid import paths
