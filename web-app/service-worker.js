const CACHE_NAME = 'python-mini-projects-v1';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './games.html',
  './math.html',
  './utilities.html',
  './faq.html',
  './privacy-policy.html',
  './terms-condition.html',
  './404.html',
  './manifest.json',
  './css/styles.css',
  './assets/favicon.svg',
  './assets/games-bg.webp',
  './assets/math-bg.webp',
  './assets/utilities-bg.webp',
  './js/main.js',
  './js/projects.js',
  './js/playground.js',
  './js/playground-worker.js',
  './js/cm-editor.js',
  './js/audio.js',
  './js/audioManager.js',
  './projects_registry.json'
];

const PYODIDE_CDN_PREFIX = 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/';
const PYODIDE_ASSETS = [
  PYODIDE_CDN_PREFIX + 'pyodide.js',
  PYODIDE_CDN_PREFIX + 'pyodide.asm.js',
  PYODIDE_CDN_PREFIX + 'pyodide.asm.wasm',
  PYODIDE_CDN_PREFIX + 'python_stdlib.zip',
  PYODIDE_CDN_PREFIX + 'pyodide-lock.json'
];

// Install Event - Pre-cache core app shell & Pyodide assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(PRECACHE_ASSETS);
      try {
        await cache.addAll(PYODIDE_ASSETS);
      } catch (err) {
        console.warn('Pyodide caching skipped or partial during SW install:', err);
      }
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Serve from Cache, fallback to Network (and cache dynamically)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Network-first strategy for navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || caches.match('./index.html');
          });
        })
    );
    return;
  }

  // Cache-first strategy for static resources & Pyodide CDN assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (url.origin === self.location.origin ||
           url.hostname === 'cdn.jsdelivr.net' ||
           url.hostname === 'cdnjs.cloudflare.com' ||
           url.hostname === 'fonts.googleapis.com' ||
           url.hostname === 'fonts.gstatic.com')
        ) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      });
    })
  );
});
