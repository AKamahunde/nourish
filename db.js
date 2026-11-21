(() => {
  const DB_NAME = 'NourishTableDB';
  const DB_VERSION = 1;
  const STORE = 'state';
  const LS_KEY = 'nourishtable_fallback_v1';

  const DEFAULT_STATE = {
    favorites: [],
    calendarPlan: {}, // { 'YYYY-MM-DD': { breakfast: [], lunch: [], dinner: [], juice: [] } }
    pantryHave: [],   // ['tomato', 'onion', ...]
    groceryEntries: [], // [{ recipeId, servings }]
    groceryChecked: {}, // { itemKey: true }
    customGroceries: [], // [{ id, name, qtyText, aisle, estUgx, checked }]
    priceOverrides: {}, // { itemKey: number }
    settings: {
      theme: 'sage',
      pocketLedgerUrl: 'https://pocketledger-brd.pages.dev/',
      syncWeekGroceries: true,
      syncFavoritesGroceries: false,
      hidePantryInGroceries: true
    }
  };

  let dbPromise = null;

  function openDb() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve) => {
      if (!('indexedDB' in window)) {
        resolve(null);
        return;
      }
      const timer = setTimeout(() => resolve(null), 400);
      try {
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = () => {
          const db = req.result;
          if (!db.objectStoreNames.contains(STORE)) {
            db.createObjectStore(STORE);
          }
        };
        req.onsuccess = () => {
          clearTimeout(timer);
          resolve(req.result);
        };
        req.onerror = () => {
          clearTimeout(timer);
          resolve(null);
        };
        req.onblocked = () => {
          clearTimeout(timer);
          resolve(null);
        };
      } catch {
        clearTimeout(timer);
        resolve(null);
      }
    });
    return dbPromise;
  }

  function cloneDefaults() {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  function mergeWithDefaults(raw) {
    const base = cloneDefaults();
    if (!raw || typeof raw !== 'object') return base;
    return {
      favorites: Array.isArray(raw.favorites) ? raw.favorites : base.favorites,
      calendarPlan: raw.calendarPlan && typeof raw.calendarPlan === 'object' ? raw.calendarPlan : {},
      pantryHave: Array.isArray(raw.pantryHave) ? raw.pantryHave : [],
      groceryEntries: Array.isArray(raw.groceryEntries) ? raw.groceryEntries : base.groceryEntries,
      groceryChecked: raw.groceryChecked && typeof raw.groceryChecked === 'object' ? raw.groceryChecked : {},
      customGroceries: Array.isArray(raw.customGroceries) ? raw.customGroceries : [],
      priceOverrides: raw.priceOverrides && typeof raw.priceOverrides === 'object' ? raw.priceOverrides : {},
      settings: { ...base.settings, ...(raw.settings && typeof raw.settings === 'object' ? raw.settings : {}) }
    };
  }

  function loadLocalSync() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) return mergeWithDefaults(JSON.parse(raw));
    } catch {
      // ignore storage failure
    }
    return cloneDefaults();
  }

  async function loadState() {
    const db = await openDb();
    if (db) {
      const fromIdb = await new Promise((resolve) => {
        const timer = setTimeout(() => resolve(null), 400);
        try {
          const tx = db.transaction(STORE, 'readonly');
          const req = tx.objectStore(STORE).get('root');
          req.onsuccess = () => {
            clearTimeout(timer);
            resolve(req.result || null);
          };
          req.onerror = () => {
            clearTimeout(timer);
            resolve(null);
          };
        } catch {
          clearTimeout(timer);
          resolve(null);
        }
      });
      if (fromIdb) return mergeWithDefaults(fromIdb);
    }

    return loadLocalSync();
  }

  async function saveState(state) {
    const clean = mergeWithDefaults(state);
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(clean));
    } catch {
      // ignore quota failure
    }
    const db = await openDb();
    if (db) {
      await new Promise((resolve) => {
        try {
          const tx = db.transaction(STORE, 'readwrite');
          tx.objectStore(STORE).put(clean, 'root');
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        } catch {
          resolve(false);
        }
      });
    }
    return clean;
  }

  window.NourishDB = {
    loadLocalSync,
    loadState,
    saveState,
    cloneDefaults,
    mergeWithDefaults
  };
})();
