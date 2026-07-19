const CACHE_VERSION = 'v1';
const SHELL_CACHE   = `pmp-shell-${CACHE_VERSION}`;
const PYODIDE_CACHE = `pmp-pyodide-${CACHE_VERSION}`;

// ─── App shell: files that make up the UI ────────────────────────────────────
const SHELL_ASSETS = [
  '/',
  '/index.html',
  '/games.html',
  '/math.html',
  '/utilities.html',
  '/404.html',
  '/css/styles.css',
  '/js/main.js',
  '/js/projects.js',
  '/js/audio.js',
  '/js/audioManager.js',
  '/js/hero-canvas.js',
  '/js/playground.js',
  '/js/cm-editor.js',
  '/assets/favicon.svg',
  '/assets/sun.svg',
  '/assets/moon.svg',
  '/assets/games-bg.webp',
  '/assets/math-bg.webp',
  '/assets/utilities-bg.webp',
  '/manifest.json',
];

// ─── Pyodide CDN origin — cached opportunistically ───────────────────────────
const PYODIDE_ORIGIN = 'https://pyodide-cdn2.iodide.io';

// ─── Install: pre-cache the app shell ────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_ASSETS))
  );
  // Activate immediately without waiting for existing tabs to close
  self.skipWaiting();
});

// ─── Activate: delete outdated caches ────────────────────────────────────────
self.addEventListener('activate', (event) => {
  const validCaches = new Set([SHELL_CACHE, PYODIDE_CACHE]);
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !validCaches.has(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  // Take control of all open clients right away
  self.clients.claim();
});

// ─── Fetch: choose strategy based on request origin / destination ─────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Pyodide CDN → network-first, fall back to cache
  if (url.origin === PYODIDE_ORIGIN) {
    event.respondWith(networkFirstWithCache(request, PYODIDE_CACHE));
    return;
  }

  // Same-origin app shell → cache-first, fall back to network
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirstWithNetwork(request, SHELL_CACHE));
    return;
  }

  // All other origins (CDN fonts, icons, etc.) → network only
});

// ─── Strategy helpers ─────────────────────────────────────────────────────────
async function cacheFirstWithNetwork(request, cacheName) {
  const cache    = await caches.open(cacheName);
  const cached   = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Offline and nothing cached — return a minimal offline fallback
    const fallback = await caches.match('/404.html');
    return fallback || new Response('Offline', { status: 503 });
  }
}

/**
 * Network-first: try the network, cache the result, and only fall
 * back to the cache when the network is unavailable.
 */
async function networkFirstWithCache(request, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await cache.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}