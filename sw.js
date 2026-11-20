const CACHE_NAME = 'nourishtable-v2';

const APP_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './recipes.js',
  './recipes-more.js',
  './recipes-intl.js',
  './db.js',
  './icons.js',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './images/avocado-mango-kachumbari.jpg',
  './images/tilapia-avocado-salad.jpg',
  './images/nambale-bean-salad.jpg',
  './images/chicken-sweet-potato-curry.jpg',
  './images/swahili-tilapia-beans.jpg',
  './images/matooke-beans-katogo.jpg',
  './images/chicken-okra-nakati.jpg',
  './images/gnut-mushroom-stew.jpg',
  './images/whole-grilled-tilapia.jpg',
  './images/steamed-matooke-dodo.jpg',
  './images/goat-pumpkin-stew.jpg',
  './images/hibiscus-sobolo.jpg',
  './images/beet-carrot-passion.jpg',
  './images/green-dodo-detox.jpg',
  './images/mediterranean-chickpea-salad.jpg',
  './images/mediterranean-herb-chicken.jpg',
  './images/italian-tomato-basil-pasta.jpg',
  './images/italian-tuscan-bean-soup.jpg',
  './images/asian-ginger-chicken-stirfry.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
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
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((resp) => {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return resp;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
