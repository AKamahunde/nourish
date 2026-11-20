const SHELL_CACHE = 'nourishtable-shell-v33';
// Keep IMG_CACHE stable across minor text/code updates so mobile devices do not re-download 130+ photos.
const IMG_CACHE = 'nourishtable-images-v9';

const SHELL_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './recipes.js',
  './recipes-user-picks.js',
  './recipes-batch2.js',
  './recipes-batch3.js',
  './db.js',
  './icons.js',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) =>
      cache.addAll(SHELL_ASSETS.map((url) => new Request(url, { cache: 'reload' })))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== SHELL_CACHE && k !== IMG_CACHE)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const reqUrl = new URL(event.request.url);
  if (reqUrl.origin !== self.location.origin) return;

  // Cache-first for recipe images (ignoring query strings unless retrying a failed load)
  if (reqUrl.pathname.includes('/images/')) {
    const cleanUrl = `${reqUrl.origin}${reqUrl.pathname}`;
    const isRetry = reqUrl.searchParams.has('retry');
    event.respondWith(
      caches.open(IMG_CACHE).then(async (cache) => {
        if (!isRetry) {
          const cached = await cache.match(cleanUrl);
          if (cached) return cached;
        }
        try {
          const resp = await fetch(event.request);
          if (resp && resp.status === 200) {
            cache.put(cleanUrl, resp.clone());
          }
          return resp;
        } catch (err) {
          const stale = await cache.match(cleanUrl);
          if (stale) return stale;
          return new Response('', { status: 504, statusText: 'Image Unavailable' });
        }
      })
    );
    return;
  }

  // App shell: cache-first with background fallback
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((resp) => {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const clone = resp.clone();
          caches.open(SHELL_CACHE).then((cache) => cache.put(event.request, clone));
        }
        return resp;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
