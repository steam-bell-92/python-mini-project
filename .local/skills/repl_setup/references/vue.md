# Vue.js Setup

Configuration requirements for Vue.js applications in the Replit environment.

## Vite-based Vue Projects (Recommended)

Most modern Vue projects use Vite. Configure `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
});
```

## Vue CLI Projects

For older Vue CLI projects, configure `vue.config.js`:

```javascript
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: 'all',
    // Or use disableHostCheck for older versions:
    // disableHostCheck: true,
  },
};
```

## Nuxt.js Projects

For Nuxt 3, configure `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 5000,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
```

For Nuxt 2, configure `nuxt.config.js`:

```javascript
export default {
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
};
```

## Connecting to Backend API

Use environment variables for API URLs:

```typescript
// composables/useApi.ts
export const useApi = () => {
  const baseUrl = import.meta.env.VITE_API_URL || '';

  return {
    fetch: (endpoint: string) => fetch(`${baseUrl}${endpoint}`),
  };
};
```

## Troubleshooting

### User Cannot See the Application

1. Verify host configuration allows all hosts
2. Confirm binding to `0.0.0.0` on port 5000
3. Restart workflow after configuration changes
4. Check console logs for startup errors

### Hot Reload Not Working

1. Check for errors in terminal output
2. Verify Vite/webpack is running in watch mode
3. Clear browser cache and hard refresh

### Build Errors

- Check for missing dependencies
- Verify Vue version compatibility with plugins
- Review TypeScript errors if using Vue with TypeScript
