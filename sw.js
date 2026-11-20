const CACHE_NAME = 'nourishtable-v18';

const APP_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './recipes.js',
  './recipes-breakfast.js',
  './recipes-more.js',
  './recipes-intl.js',
  './recipes-expanded.js',
  './recipes-pantry.js',
  './recipes-cassava.js',
  './recipes-irish.js',
  './recipes-veggies.js',
  './recipes-comfort.js',
  './recipes-dairy.js',
  './db.js',
  './icons.js',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './images/egg-sukuma-scramble.jpg',
  './images/savory-oat-simsim-bowl.jpg',
  './images/veggie-herb-omelette.jpg',
  './images/bread-and-eggs-plate.jpg',
  './images/bread-peanut-butter-banana.jpg',
  './images/boiled-cassava-eggs-breakfast.jpg',
  './images/baked-herb-cassava-wedges.jpg',
  './images/cassava-beans-katogo.jpg',
  './images/crispy-baked-irish-wedges.jpg',
  './images/boiled-irish-herb-plate.jpg',
  './images/light-pan-fried-irish-potatoes.jpg',
  './images/loaded-baked-jacket-irish.jpg',
  './images/mince-cabbage-veggie-soup.jpg',
  './images/mediterranean-shakshuka-greens.jpg',
  './images/avocado-poached-egg-toast.jpg',
  './images/green-power-smoothie-bowl.jpg',
  './images/roasted-millet-fruit-porridge.jpg',
  './images/avocado-mango-kachumbari.jpg',
  './images/tilapia-avocado-salad.jpg',
  './images/nambale-bean-salad.jpg',
  './images/chicken-cabbage-simsim-slaw.jpg',
  './images/sweet-potato-avocado-bowl.jpg',
  './images/mediterranean-chickpea-salad.jpg',
  './images/chicken-sweet-potato-curry.jpg',
  './images/swahili-tilapia-beans.jpg',
  './images/italian-tomato-basil-pasta.jpg',
  './images/asian-ginger-chicken-stirfry.jpg',
  './images/pilau-bean-sweet-potato-hash.jpg',
  './images/asian-garlic-soy-egg-rice.jpg',
  './images/matooke-beans-katogo.jpg',
  './images/chicken-greenbeans-nakati.jpg',
  './images/gnut-mushroom-stew.jpg',
  './images/italian-tuscan-bean-soup.jpg',
  './images/coconut-cassava-blackeye-peas.jpg',
  './images/italian-lemon-chicken-orzo-rice.jpg',
  './images/whole-grilled-tilapia.jpg',
  './images/steamed-matooke-dodo.jpg',
  './images/beef-pumpkin-stew.jpg',
  './images/mediterranean-herb-chicken.jpg',
  './images/roasted-kuroiler-root-tray.jpg',
  './images/asian-sesame-glazed-tilapia.jpg',
  './images/hibiscus-sobolo.jpg',
  './images/beet-carrot-passion.jpg',
  './images/green-dodo-detox.jpg',
  './images/mango-pawpaw-turmeric-tonic.jpg',
  './images/watermelon-mint-lime-cooler.jpg',
  './images/pineapple-ginger-lemongrass-tea.jpg',
  './images/yogurt-chia-mango-parfait.jpg',
  './images/overnight-chia-pineapple-pudding.jpg',
  './images/black-bean-avocado-lime-salad.jpg',
  './images/spiced-yogurt-herb-chicken.jpg',
  './images/med-roasted-cauliflower-bean-salad.jpg',
  './images/med-stuffed-bell-peppers.jpg',
  './images/med-zucchini-chicken-skewers.jpg',
  './images/med-broccoli-lemon-garlic-bowl.jpg',
  './images/italian-zucchini-pepper-bean-skillet.jpg',
  './images/italian-broccoli-cauliflower-chicken-tray.jpg',
  './images/italian-creamy-cauliflower-garlic-soup.jpg',
  './images/italian-sukuma-garlic-spaghetti.jpg',
  './images/asian-chicken-broccoli-stirfry.jpg',
  './images/asian-cauliflower-carrot-fried-rice.jpg',
  './images/asian-sesame-cabbage-pepper-bowl.jpg',
  './images/asian-ginger-glazed-cauliflower-broccoli.jpg',
  './images/lean-mince-tomato-pasta.jpg',
  './images/healthy-mince-irish-shepherd-skillet.jpg',
  './images/ugandan-irish-potato-herb-hash.jpg',
  './images/mediterranean-chicken-pasta-salad.jpg',
  './images/creamy-yogurt-irish-potato-salad.jpg',
  './images/slow-baked-mince-irish-potato-casserole.jpg',
  './images/turmeric-ginger-golden-milk.jpg',
  './images/soya-milk-chia-banana-shake.jpg',
  './images/milk-soaked-oats-chia-berry-jar.jpg',
  './images/creamy-yogurt-herb-tilapia-bowl.jpg',
  './images/banana-oat-blender-pancakes.jpg',
  './images/boiled-sweet-potato-eggs-avocado.jpg',
  './images/turkish-garlic-yogurt-poached-eggs.jpg'
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
