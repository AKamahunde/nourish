(() => {
  const APP_VERSION = 16;
  const MEAL_SLOTS = [
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' },
    { id: 'juice', label: 'Juice / Snack' }
  ];
  const PANTRY_STAPLES = [
    { key: 'tomato', label: 'Tomatoes', aliases: ['tomato', 'tomatoes'] },
    { key: 'onion', label: 'Onion', aliases: ['onion', 'red-onion', 'onion-garlic'] },
    { key: 'garlic', label: 'Garlic', aliases: ['garlic', 'garlic-ginger', 'garlic-cumin', 'onion-garlic', 'ginger-garlic'] },
    { key: 'ginger', label: 'Ginger', aliases: ['ginger', 'garlic-ginger', 'ginger-garlic'] },
    { key: 'avocado', label: 'Avocado', aliases: ['avocado', 'feta-or-avocado'] },
    { key: 'eggs', label: 'Eggs', aliases: ['eggs', 'egg'] },
    { key: 'chicken', label: 'Chicken', aliases: ['chicken', 'chicken-breast', 'chicken-pieces'] },
    { key: 'mince', label: 'Beef Mince', aliases: ['beef-mince', 'mince', 'beef-meat'] },
    { key: 'tilapia', label: 'Tilapia', aliases: ['tilapia', 'tilapia-fillet', 'whole-tilapia'] },
    { key: 'black beans', label: 'Black Beans', aliases: ['black-beans', 'black beans'] },
    { key: 'beans', label: 'Red Beans', aliases: ['beans', 'cooked-beans', 'white-beans', 'black-beans'] },
    { key: 'yogurt', label: 'Plain Yogurt', aliases: ['yogurt'] },
    { key: 'milk', label: "Cow's / Soya Milk", aliases: ['milk', 'soya', 'cow'] },
    { key: 'chia', label: 'Chia Seeds', aliases: ['chia', 'chia-seeds'] },
    { key: 'matooke', label: 'Matooke', aliases: ['matooke'] },
    { key: 'cassava', label: 'Cassava', aliases: ['cassava', 'muwogo'] },
    { key: 'irish', label: 'Irish Potatoes', aliases: ['irish-potatoes', 'irish'] },
    { key: 'sweet potato', label: 'Sweet Potato', aliases: ['sweet-potato', 'sweet potato'] },
    { key: 'greens', label: 'Dodo / Sukuma', aliases: ['dodo', 'sukuma', 'nakati', 'lettuce'] },
    { key: 'broccoli', label: 'Broccoli', aliases: ['broccoli'] },
    { key: 'cauliflower', label: 'Cauliflower', aliases: ['cauliflower'] },
    { key: 'zucchini', label: 'Zucchini', aliases: ['courgette', 'zucchini'] },
    { key: 'bell pepper', label: 'Bell Peppers', aliases: ['bell-pepper', 'pepper'] },
    { key: 'cabbage', label: 'Cabbage', aliases: ['cabbage', 'lettuce-cabbage'] },
    { key: 'cucumber', label: 'Cucumber', aliases: ['cucumber'] },
    { key: 'carrots', label: 'Carrots', aliases: ['carrots', 'carrot'] },
    { key: 'pineapple', label: 'Pineapple', aliases: ['pineapple'] },
    { key: 'mango', label: 'Mango', aliases: ['mango'] },
    { key: 'groundnut', label: 'G-Nut / Peanut Butter', aliases: ['gnut-paste', 'groundnut', 'peanut-butter', 'peanut butter'] },
    { key: 'bread', label: 'Brown Bread', aliases: ['whole-bread', 'bread'] },
    { key: 'citrus', label: 'Lime / Lemon', aliases: ['lime', 'lemon'] },
    { key: 'spaghetti', label: 'Pasta', aliases: ['spaghetti', 'pasta', 'pasta-shapes'] },
    { key: 'oats', label: 'Oats', aliases: ['rolled-oats', 'oats'] }
  ];
  const PALETTES = [
    { id: 'sage', label: 'Botanical Sage', dots: ['#1F4E3D', '#D98A1E'], themeColor: '#FBF9F5' },
    { id: 'terracotta', label: 'Terracotta Clay', dots: ['#9A3F26', '#2A5C48'], themeColor: '#FCF8F5' },
    { id: 'mango', label: 'Mango Harvest', dots: ['#B36811', '#2B5E44'], themeColor: '#FCFBF5' },
    { id: 'hibiscus', label: 'Hibiscus Berry', dots: ['#7A2347', '#255E4B'], themeColor: '#FCF8FA' }
  ];

  const data = window.NourishData;
  const icons = window.NourishIcons;

  function toYMD(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function parseYMD(ymd) {
    const [y, m, d] = ymd.split('-').map(Number);
    return new Date(y, (m || 1) - 1, d || 1);
  }

  function getMondayOfWeek(dateObj) {
    const d = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());
    const dow = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - dow);
    return d;
  }

  const todayStr = toYMD(new Date());

  const ui = {
    view: 'discover',
    discoverMode: 'browse',
    category: 'all',
    goal: '',
    search: '',
    selectedDate: todayStr,
    weekMonday: toYMD(getMondayOfWeek(new Date())),
    showMonthCal: false,
    pickerSlot: 'lunch',
    randomFilter: 'any',
    randomRecipeId: null,
    detailRecipeId: null,
    detailServings: 2,
    wakeLock: null,
    timerInterval: null,
    timerEndMs: 0,
    timerLabel: ''
  };

  let appState = window.NourishDB.cloneDefaults();
  const $ = (id) => document.getElementById(id);

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatUgx(val) {
    return `UGX ${Math.round(Number(val) || 0).toLocaleString('en-US')}`;
  }

  function formatAmount(val) {
    const rounded = Math.round(val * 100) / 100;
    if (Math.abs(rounded - Math.round(rounded)) < 0.05) return String(Math.round(rounded));
    return String(Math.round(rounded * 10) / 10);
  }

  function showToast(msg) {
    const el = $('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.classList.add('hidden'), 2600);
  }

  async function persist() {
    appState = await window.NourishDB.saveState(appState);
  }

  function applyPalette(paletteId) {
    const hit = PALETTES.find((p) => p.id === paletteId) || PALETTES[0];
    document.documentElement.setAttribute('data-palette', hit.id);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', hit.themeColor);
  }

  function getRecipeById(id) {
    return data.RECIPES.find((r) => r.id === id) || null;
  }

  function getCategoryLabel(catId) {
    return data.CATEGORIES.find((c) => c.id === catId)?.label || catId;
  }

  function isFavorite(id) {
    return appState.favorites.includes(id);
  }

  async function toggleFavorite(id) {
    if (isFavorite(id)) {
      appState.favorites = appState.favorites.filter((x) => x !== id);
      showToast('Removed from Saved');
    } else {
      appState.favorites = [...appState.favorites, id];
      showToast('Saved to Favorites');
    }
    await persist();
    renderAll();
    if (ui.detailRecipeId === id) renderDetailFavBtn();
  }

  function setView(viewName) {
    ui.view = viewName;
    document.querySelectorAll('.view').forEach((v) => {
      v.classList.toggle('active', v.id === `view-${viewName}`);
    });
    document.querySelectorAll('.nav-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });
    const titles = {
      discover: 'Cookbook',
      plan: 'Meal Planner',
      groceries: 'Market List',
      guide: 'Health Guide'
    };
    $('viewTitle').textContent = titles[viewName] || 'Cookbook';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Pantry matching logic
  function ingredientMatchesPantry(ing, pantryTokens) {
    if (!pantryTokens.length) return false;
    const ingName = ing.name.toLowerCase();
    const ingId = ing.id.toLowerCase();
    for (const token of pantryTokens) {
      const t = token.toLowerCase().trim();
      if (!t) continue;
      const staple = PANTRY_STAPLES.find((s) => s.key === t || s.label.toLowerCase() === t);
      if (staple) {
        if (staple.aliases.some((a) => ingId.includes(a) || ingName.includes(a.replace('-', ' ')))) {
          return true;
        }
      }
      if (ingName.includes(t) || ingId.includes(t.replace(/\s+/g, '-'))) {
        return true;
      }
    }
    return false;
  }

  function getPantryMatchInfo(recipe) {
    const tokens = appState.pantryHave || [];
    const matched = [];
    const missing = [];
    for (const ing of recipe.ingredients) {
      if (ingredientMatchesPantry(ing, tokens)) matched.push(ing);
      else missing.push(ing);
    }
    const total = recipe.ingredients.length || 1;
    return {
      matched,
      missing,
      matchedCount: matched.length,
      missingCount: missing.length,
      ratio: matched.length / total
    };
  }

  function getFilteredRecipes() {
    const q = ui.search.trim().toLowerCase();
    return data.RECIPES.filter((r) => {
      if (ui.category !== 'all' && r.category !== ui.category) return false;
      if (ui.goal && !r.tags.includes(ui.goal)) return false;
      if (!q) return true;
      const haystack = [
        r.title,
        r.subtitle,
        r.cuisine || 'Ugandan',
        r.category,
        ...r.tags,
        ...r.ingredients.map((i) => i.name)
      ].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }

  function renderRecipeCard(r, matchInfo = null) {
    const saved = isFavorite(r.id);
    let matchHtml = '';
    if (matchInfo && (appState.pantryHave || []).length > 0) {
      if (matchInfo.missingCount === 0) {
        matchHtml = `<div class="match-bar ready">All ${matchInfo.matchedCount} ingredients ready</div>`;
      } else {
        const missingNames = matchInfo.missing.slice(0, 2).map((m) => m.name.split('(')[0].trim()).join(', ');
        const extra = matchInfo.missingCount > 2 ? ` +${matchInfo.missingCount - 2}` : '';
        matchHtml = `
          <div class="match-bar partial">
            <span>Have ${matchInfo.matchedCount}/${r.ingredients.length} · Need ${escapeHtml(missingNames)}${extra}</span>
            <button class="match-missing-btn" type="button" data-add-missing="${escapeHtml(r.id)}">+ Add Missing</button>
          </div>
        `;
      }
    }

    return `
      <article class="recipe-card" data-open-recipe="${escapeHtml(r.id)}">
        <div class="recipe-thumb">
          <img src="${escapeHtml(r.image)}" alt="${escapeHtml(r.title)}" loading="lazy" />
          <button class="card-fav-btn ${saved ? 'saved' : ''}" type="button" data-fav-id="${escapeHtml(r.id)}" aria-label="Save ${escapeHtml(r.title)}">
            ${icons.get(saved ? 'heartFilled' : 'heart')}
          </button>
          <span class="time-pill">${icons.get('clock')} ${r.totalMinutes} min</span>
        </div>
        <div class="recipe-card-body">
          <span class="recipe-cat-label">${escapeHtml(r.cuisine ? `${r.cuisine} · ${getCategoryLabel(r.category)}` : getCategoryLabel(r.category))}</span>
          <h3 class="recipe-card-title">${escapeHtml(r.title)}</h3>
          <p class="recipe-card-sub">${escapeHtml(r.subtitle)}</p>
          ${matchHtml}
          <div class="card-tags">
            ${r.tags.slice(0, 2).map((t) => `<span class="mini-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      </article>
    `;
  }

  function renderDiscover() {
    const isKitchen = ui.discoverMode === 'kitchen';
    $('modeBrowseBtn').classList.toggle('active', !isKitchen);
    $('modeKitchenBtn').classList.toggle('active', isKitchen);
    $('browseControls').classList.toggle('hidden', isKitchen);
    $('kitchenPanel').classList.toggle('hidden', !isKitchen);

    const pantryCount = (appState.pantryHave || []).length;
    $('pantryCountBadge').textContent = String(pantryCount);
    $('pantryCountBadge').classList.toggle('hidden', pantryCount === 0);

    if (isKitchen) {
      $('spotlightCard').classList.add('hidden');
      const customTokens = (appState.pantryHave || []).filter(
        (t) => !PANTRY_STAPLES.some((s) => s.key === t)
      );
      const stapleChips = PANTRY_STAPLES.map((s) => {
        const active = (appState.pantryHave || []).includes(s.key);
        return `<button class="pantry-chip ${active ? 'active' : ''}" type="button" data-toggle-pantry="${escapeHtml(s.key)}">${escapeHtml(s.label)}</button>`;
      }).join('');
      const customChips = customTokens.map((t) =>
        `<button class="pantry-chip active" type="button" data-toggle-pantry="${escapeHtml(t)}">${escapeHtml(t)} &times;</button>`
      ).join('');
      $('pantryStaplesGrid').innerHTML = stapleChips + customChips;

      if (pantryCount === 0) {
        $('recipeGridHeading').textContent = 'Select what you have';
        $('recipeCountLabel').textContent = '0 selected';
        $('recipeGrid').innerHTML = `<div class="empty-state">Tap ingredients above (like Tomatoes, Eggs, Tilapia, Matooke) to see dishes you can make right now.</div>`;
        return;
      }

      const scored = data.RECIPES
        .map((r) => ({ recipe: r, match: getPantryMatchInfo(r) }))
        .filter((x) => x.match.matchedCount > 0)
        .sort((a, b) => {
          if (a.match.missingCount !== b.match.missingCount) {
            return a.match.missingCount - b.match.missingCount;
          }
          return b.match.ratio - a.match.ratio;
        });

      const readyCount = scored.filter((x) => x.match.missingCount === 0).length;
      $('recipeGridHeading').textContent = readyCount ? `Ready to Cook (${readyCount})` : 'Best Matches';
      $('recipeCountLabel').textContent = `${scored.length} matches`;
      $('recipeGrid').innerHTML = scored.length
        ? scored.map((x) => renderRecipeCard(x.recipe, x.match)).join('')
        : `<div class="empty-state">No exact matches for those items yet — try adding one staple like Onion, Tomatoes, or Eggs.</div>`;
      return;
    }

    $('categoryTabs').innerHTML = data.CATEGORIES.map((cat) => `
      <button class="chip-btn ${ui.category === cat.id ? 'active' : ''}" type="button" data-cat="${escapeHtml(cat.id)}">
        ${escapeHtml(cat.label)}
      </button>
    `).join('');

    $('goalTabs').innerHTML = data.HEALTH_GOALS.map((g) => `
      <button class="chip-btn ${ui.goal === g ? 'active' : ''}" type="button" data-goal="${escapeHtml(g)}">
        ${escapeHtml(g)}
      </button>
    `).join('');

    const showSpotlight = ui.category === 'all' && !ui.goal && !ui.search.trim();
    const spotlightEl = $('spotlightCard');
    if (showSpotlight && data.RECIPES.length) {
      const dayIdx = Math.floor(Date.now() / 86400000) % data.RECIPES.length;
      const pick = data.RECIPES[dayIdx];
      spotlightEl.classList.remove('hidden');
      spotlightEl.dataset.openRecipe = pick.id;
      spotlightEl.innerHTML = `
        <div class="spotlight-media">
          <img src="${escapeHtml(pick.image)}" alt="${escapeHtml(pick.title)}" />
          <div class="spotlight-scrim"></div>
          <div class="spotlight-overlay">
            <span class="spotlight-badge">Today's Fresh Pick · ${pick.totalMinutes} min</span>
            <h2 class="spotlight-title">${escapeHtml(pick.title)}</h2>
            <p class="spotlight-sub">${escapeHtml(pick.healthNote)}</p>
          </div>
        </div>
      `;
    } else {
      spotlightEl.classList.add('hidden');
    }

    const list = getFilteredRecipes();
    $('recipeGridHeading').textContent = ui.category === 'all' ? 'All Recipes' : getCategoryLabel(ui.category);
    $('recipeCountLabel').textContent = `${list.length} ${list.length === 1 ? 'dish' : 'dishes'}`;
    $('recipeGrid').innerHTML = list.length
      ? list.map((r) => renderRecipeCard(r)).join('')
      : `<div class="empty-state">No dishes match that filter yet. Try clearing the search or health tag.</div>`;
  }

  // Meal Calendar helpers
  function getDayRecord(ymd) {
    const rec = appState.calendarPlan[ymd];
    return {
      breakfast: Array.isArray(rec?.breakfast) ? rec.breakfast : [],
      lunch: Array.isArray(rec?.lunch) ? rec.lunch : [],
      dinner: Array.isArray(rec?.dinner) ? rec.dinner : [],
      juice: Array.isArray(rec?.juice) ? rec.juice : []
    };
  }

  function dayHasMeals(ymd) {
    const r = getDayRecord(ymd);
    return r.breakfast.length + r.lunch.length + r.dinner.length + r.juice.length > 0;
  }

  function getWeekDates(mondayYmd) {
    const start = parseYMD(mondayYmd);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      return { date: d, ymd: toYMD(d) };
    });
  }

  function renderMonthCalendar() {
    const box = $('monthCalendarBox');
    box.classList.toggle('hidden', !ui.showMonthCal);
    $('calMonthToggleBtn').classList.toggle('active', ui.showMonthCal);
    if (!ui.showMonthCal) return;

    const ref = parseYMD(ui.selectedDate);
    const y = ref.getFullYear();
    const m = ref.getMonth();
    const monthLabel = ref.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const first = new Date(y, m, 1);
    const startOffset = (first.getDay() + 6) % 7;
    const gridStart = new Date(y, m, 1 - startOffset);

    const cells = Array.from({ length: 42 }, (_, idx) => {
      const d = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + idx);
      const ymd = toYMD(d);
      const isOther = d.getMonth() !== m;
      const isSelected = ymd === ui.selectedDate;
      const hasDot = dayHasMeals(ymd);
      return `
        <button class="month-cell ${isOther ? 'other-month' : ''} ${isSelected ? 'active' : ''}" type="button" data-select-date="${ymd}">
          <span>${d.getDate()}</span>
          ${hasDot ? '<span class="day-dot"></span>' : ''}
        </button>
      `;
    }).join('');

    box.innerHTML = `
      <div class="month-cal-title">${escapeHtml(monthLabel)}</div>
      <div class="month-cal-grid">
        <span class="month-dow">M</span><span class="month-dow">T</span><span class="month-dow">W</span>
        <span class="month-dow">T</span><span class="month-dow">F</span><span class="month-dow">S</span><span class="month-dow">S</span>
        ${cells}
      </div>
    `;
  }

  function renderPlan() {
    const week = getWeekDates(ui.weekMonday);
    const firstLbl = week[0].date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const lastLbl = week[6].date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    $('calRangeLabel').textContent = `${firstLbl} – ${lastLbl}`;

    renderMonthCalendar();

    $('weekStrip').innerHTML = week.map(({ date, ymd }) => {
      const dow = date.toLocaleDateString('en-US', { weekday: 'short' });
      const active = ymd === ui.selectedDate;
      const isToday = ymd === todayStr;
      const has = dayHasMeals(ymd);
      return `
        <button class="week-day-pill ${active ? 'active' : ''} ${isToday ? 'today' : ''}" type="button" data-select-date="${ymd}">
          <small>${dow}</small>
          <strong>${date.getDate()}</strong>
          ${has ? '<span class="day-dot"></span>' : ''}
        </button>
      `;
    }).join('');

    const selDateObj = parseYMD(ui.selectedDate);
    const selHeading = selDateObj.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' });
    $('selectedDayTitle').textContent = ui.selectedDate === todayStr ? `${selHeading} · Today` : selHeading;

    const dayRec = getDayRecord(ui.selectedDate);
    $('daySlotsContainer').innerHTML = MEAL_SLOTS.map((slot) => {
      const ids = dayRec[slot.id] || [];
      const itemsHtml = ids.map((rId, idx) => {
        const r = getRecipeById(rId);
        if (!r) return '';
        return `
          <div class="slot-meal-row">
            <img src="${escapeHtml(r.image)}" alt="" />
            <div class="slot-meal-info" data-open-recipe="${escapeHtml(r.id)}">
              <strong>${escapeHtml(r.title)}</strong>
              <span>${r.totalMinutes} min · ${r.nutrition.kcal} kcal</span>
            </div>
            <button class="day-meal-remove" type="button" data-remove-slot="${slot.id}" data-remove-idx="${idx}" aria-label="Remove">&times;</button>
          </div>
        `;
      }).join('');

      return `
        <div class="meal-slot-card">
          <div class="meal-slot-head">
            <span class="meal-slot-label">${escapeHtml(slot.label)}</span>
            <button class="day-add-btn" type="button" data-pick-for-slot="${slot.id}" aria-label="Add ${escapeHtml(slot.label)}">
              ${icons.get('plus')}
            </button>
          </div>
          <div class="meal-slot-items">
            ${itemsHtml || '<span class="muted-label">Nothing planned yet</span>'}
          </div>
        </div>
      `;
    }).join('');

    const favRecipes = appState.favorites.map(getRecipeById).filter(Boolean);
    $('favCountLabel').textContent = `${favRecipes.length} saved`;
    $('favoritesGrid').innerHTML = favRecipes.length
      ? favRecipes.map((r) => renderRecipeCard(r)).join('')
      : `<div class="empty-state">Tap the heart on any salad, meal, breakfast, or juice to keep your go-to dishes right here.</div>`;
  }

  function buildAggregatedGroceries() {
    const map = new Map();
    for (const entry of appState.groceryEntries) {
      const recipe = getRecipeById(entry.recipeId);
      if (!recipe) continue;
      const ratio = (Number(entry.servings) || recipe.servings) / recipe.servings;
      for (const ing of recipe.ingredients) {
        const key = `${ing.id}__${ing.unit}`;
        const scaledAmt = ing.amount * ratio;
        const scaledUgx = Math.round((ing.estUgx || 0) * ratio);
        if (!map.has(key)) {
          map.set(key, {
            key,
            name: ing.name,
            amount: scaledAmt,
            unit: ing.unit,
            aisle: ing.aisle || 'produce',
            defaultUgx: scaledUgx,
            recipes: [recipe.title]
          });
        } else {
          const cur = map.get(key);
          cur.amount += scaledAmt;
          cur.defaultUgx += scaledUgx;
          if (!cur.recipes.includes(recipe.title)) cur.recipes.push(recipe.title);
        }
      }
    }

    const items = Array.from(map.values()).map((item) => {
      const override = appState.priceOverrides[item.key];
      const estUgx = override !== undefined ? Number(override) : item.defaultUgx;
      return {
        ...item,
        qtyText: `${formatAmount(item.amount)} ${item.unit}`,
        estUgx: Math.max(0, Math.round(estUgx)),
        checked: Boolean(appState.groceryChecked[item.key]),
        isCustom: false
      };
    });

    for (const c of appState.customGroceries) {
      items.push({
        key: c.id,
        name: c.name,
        qtyText: c.qtyText || 'Custom',
        aisle: c.aisle || 'produce',
        estUgx: Math.max(0, Math.round(Number(c.estUgx) || 0)),
        checked: Boolean(c.checked),
        recipes: c.source ? [c.source] : ['Added manually'],
        isCustom: true
      });
    }

    return items;
  }

  function renderGroceries() {
    const items = buildAggregatedGroceries();
    const totalCount = items.length;
    const checkedCount = items.filter((i) => i.checked).length;
    const totalUgx = items.reduce((s, i) => s + i.estUgx, 0);

    $('groceryTotalUgx').textContent = formatUgx(totalUgx);
    $('groceryCheckedRatio').textContent = `${checkedCount}/${totalCount}`;
    $('grocerySummaryMeta').textContent = totalCount
      ? `${appState.groceryEntries.length} recipe(s) + ${appState.customGroceries.length} extra · Tap any UGX pill to adjust market price`
      : 'Add recipes or build from your Meal Calendar to generate a grouped market list.';

    const badge = $('navGroceryBadge');
    const remaining = totalCount - checkedCount;
    badge.textContent = String(remaining);
    badge.classList.toggle('hidden', remaining <= 0);

    $('groceryBasketChips').innerHTML = appState.groceryEntries.length
      ? appState.groceryEntries.map((e, idx) => {
          const r = getRecipeById(e.recipeId);
          if (!r) return '';
          return `
            <span class="basket-chip">
              <span>${escapeHtml(r.title)} (${e.servings}x)</span>
              <button type="button" data-remove-basket="${idx}" aria-label="Remove recipe">&times;</button>
            </span>
          `;
        }).join('')
      : '<span class="muted-label">No recipes in basket yet.</span>';

    if (!items.length) {
      $('groceryAislesContainer').innerHTML = `
        <div class="empty-state">
          Open any recipe and tap <strong>Add to Groceries</strong>, or build from <strong>Planner</strong>.
        </div>
      `;
      return;
    }

    const grouped = {};
    for (const it of items) {
      if (!grouped[it.aisle]) grouped[it.aisle] = [];
      grouped[it.aisle].push(it);
    }

    const sortedAisles = Object.keys(grouped).sort(
      (a, b) => (data.AISLE_META[a]?.order || 99) - (data.AISLE_META[b]?.order || 99)
    );

    $('groceryAislesContainer').innerHTML = sortedAisles.map((aisleKey) => {
      const label = data.AISLE_META[aisleKey]?.label || aisleKey;
      const rows = grouped[aisleKey].map((item) => `
        <div class="grocery-row ${item.checked ? 'done' : ''}">
          <button class="check-circle ${item.checked ? 'checked' : ''}" type="button" data-toggle-grocery="${escapeHtml(item.key)}" data-custom="${item.isCustom ? '1' : '0'}" aria-label="Mark ${escapeHtml(item.name)}">
            ${item.checked ? icons.get('check') : ''}
          </button>
          <div class="grocery-info">
            <div class="grocery-name">${escapeHtml(item.name)} · <span style="color:var(--accent)">${escapeHtml(item.qtyText)}</span></div>
            <div class="grocery-meta">${escapeHtml(item.recipes.join(', '))}</div>
          </div>
          <button class="price-edit-btn" type="button" data-edit-price="${escapeHtml(item.key)}" data-custom="${item.isCustom ? '1' : '0'}" data-current-price="${item.estUgx}">
            ${formatUgx(item.estUgx)}
          </button>
        </div>
      `).join('');
      return `
        <article class="aisle-card">
          <h3 class="aisle-title">${escapeHtml(label)}</h3>
          ${rows}
        </article>
      `;
    }).join('');
  }

  function renderGuide() {
    $('healthGuideList').innerHTML = data.UGANDA_HEALTH_GUIDE.map((sec) => `
      <article class="card guide-card">
        <h3 class="card-title">${escapeHtml(sec.title)}</h3>
        <ul>${sec.points.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
      </article>
    `).join('');

    const pairingEl = $('spicePairingBox');
    if (pairingEl && Array.isArray(data.HERB_SPICE_PAIRINGS)) {
      pairingEl.innerHTML = data.HERB_SPICE_PAIRINGS.map((row) => `
        <div class="meal-slot-card">
          <div class="meal-slot-label">${escapeHtml(row.ingredient)}</div>
          <div style="font-size:13.5px;font-weight:700;margin:4px 0 3px;">${escapeHtml(row.pairings)}</div>
          <div style="font-size:12.5px;color:var(--muted);">${escapeHtml(row.why)}</div>
        </div>
      `).join('');
    }

    $('palettePicker').innerHTML = PALETTES.map((p) => `
      <button class="palette-opt ${appState.settings.theme === p.id ? 'active' : ''}" type="button" data-pick-palette="${p.id}">
        <span class="swatch-pair">
          <span class="swatch-dot" style="background:${p.dots[0]}"></span>
          <span class="swatch-dot" style="background:${p.dots[1]}"></span>
        </span>
        <span>${escapeHtml(p.label)}</span>
      </button>
    `).join('');

    $('pocketLedgerUrlInput').value = appState.settings.pocketLedgerUrl || 'https://pocketledger-brd.pages.dev/';
    $('appVersionBadge').textContent = `NourishTable v${APP_VERSION}`;
  }

  function renderAll() {
    $('headerFavCount').textContent = String(appState.favorites.length);
    renderDiscover();
    renderPlan();
    renderGroceries();
    renderGuide();
  }

  // Recipe Detail Sheet
  function renderDetailFavBtn() {
    const saved = isFavorite(ui.detailRecipeId);
    const btn = $('detailFavBtn');
    btn.classList.toggle('saved', saved);
    btn.innerHTML = icons.get(saved ? 'heartFilled' : 'heart');
  }

  function renderRecipeDetailBody() {
    const r = getRecipeById(ui.detailRecipeId);
    if (!r) return;
    const ratio = ui.detailServings / r.servings;
    $('servingsLabel').textContent = `${ui.detailServings} ${ui.detailServings === 1 ? 'serving' : 'servings'}`;

    $('detailIngredientsList').innerHTML = r.ingredients.map((ing) => {
      const amt = formatAmount(ing.amount * ratio);
      return `
        <li>
          <div class="ing-main">
            <strong>${escapeHtml(amt)} ${escapeHtml(ing.unit)}</strong> ${escapeHtml(ing.name)}
            ${ing.prep ? `<span class="ing-prep">(${escapeHtml(ing.prep)})</span>` : ''}
          </div>
        </li>
      `;
    }).join('');
  }

  function openRecipeModal(id) {
    const r = getRecipeById(id);
    if (!r) return;
    ui.detailRecipeId = id;
    ui.detailServings = r.servings;

    $('detailImage').src = r.image;
    $('detailImage').alt = r.title;
    $('detailCategoryPill').textContent = r.cuisine
      ? `${r.cuisine} · ${getCategoryLabel(r.category)}`
      : getCategoryLabel(r.category);
    $('detailTitle').textContent = r.title;
    $('detailSubtitle').textContent = r.subtitle;
    $('detailHealthNote').textContent = r.healthNote;
    $('detailUgandaTip').textContent = r.ugandaTip;

    $('detailStatsStrip').innerHTML = `
      <div class="stat-box"><strong>${r.totalMinutes}m</strong><span>Total Time</span></div>
      <div class="stat-box"><strong>${r.nutrition.kcal}</strong><span>kcal / srv</span></div>
      <div class="stat-box"><strong>${escapeHtml(r.nutrition.protein)}</strong><span>Protein</span></div>
      <div class="stat-box"><strong>${escapeHtml(r.nutrition.fiber)}</strong><span>Fiber</span></div>
    `;

    $('detailStepsList').innerHTML = r.steps.map((s, idx) => `
      <li>
        <span class="step-num">${idx + 1}</span>
        <div>
          <div>${escapeHtml(s.text)}</div>
          ${s.timerMin ? `
            <button class="step-timer-btn" type="button" data-start-timer="${s.timerMin}" data-timer-label="${escapeHtml(r.title)} · Step ${idx + 1}">
              ${icons.get('timer')} Start ${s.timerMin}m timer
            </button>
          ` : ''}
        </div>
      </li>
    `).join('');

    renderDetailFavBtn();
    renderRecipeDetailBody();
    $('recipeModal').classList.remove('hidden');
  }

  function closeRecipeModal() {
    $('recipeModal').classList.add('hidden');
    ui.detailRecipeId = null;
    if (ui.wakeLock) {
      ui.wakeLock.release().catch(() => {});
      ui.wakeLock = null;
      $('wakeLockBtn').classList.remove('active');
    }
  }

  async function toggleWakeLock() {
    if (!('wakeLock' in navigator)) {
      showToast('Keep Awake is handled by your iPhone screen settings');
      return;
    }
    if (ui.wakeLock) {
      await ui.wakeLock.release().catch(() => {});
      ui.wakeLock = null;
      $('wakeLockBtn').classList.remove('active');
      showToast('Screen sleep restored');
      return;
    }
    try {
      ui.wakeLock = await navigator.wakeLock.request('screen');
      $('wakeLockBtn').classList.add('active');
      showToast('Screen will stay awake while cooking');
    } catch {
      showToast('Could not lock screen awake');
    }
  }

  function playTimerChime() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.08, ctx.currentTime + i * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.14 + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.14);
        osc.stop(ctx.currentTime + i * 0.14 + 0.5);
      });
    } catch {
      // audio optional
    }
  }

  function startCookingTimer(minutes, label) {
    clearInterval(ui.timerInterval);
    ui.timerEndMs = Date.now() + minutes * 60 * 1000;
    ui.timerLabel = label || 'Cooking timer';
    $('floatingTimerLabel').textContent = ui.timerLabel;
    $('floatingTimerBar').classList.remove('hidden');

    const tick = () => {
      const remSec = Math.max(0, Math.ceil((ui.timerEndMs - Date.now()) / 1000));
      const mm = String(Math.floor(remSec / 60)).padStart(2, '0');
      const ss = String(remSec % 60).padStart(2, '0');
      $('floatingTimerRemaining').textContent = `${mm}:${ss}`;
      if (remSec <= 0) {
        clearInterval(ui.timerInterval);
        ui.timerInterval = null;
        $('floatingTimerBar').classList.add('hidden');
        playTimerChime();
        showToast(`Timer done: ${ui.timerLabel}`);
      }
    };
    tick();
    ui.timerInterval = setInterval(tick, 1000);
    showToast(`Started ${minutes} min timer`);
  }

  function stopCookingTimer() {
    clearInterval(ui.timerInterval);
    ui.timerInterval = null;
    $('floatingTimerBar').classList.add('hidden');
  }

  // Schedule Pickers (Calendar Date + Meal Slot)
  function openSlotPickerForRecipe(recipeId) {
    const r = getRecipeById(recipeId);
    if (!r) return;
    if (r.category === 'breakfast') ui.pickerSlot = 'breakfast';
    else if (r.category === 'juices') ui.pickerSlot = 'juice';
    else ui.pickerSlot = 'dinner';

    const renderPicker = () => {
      const week = getWeekDates(ui.weekMonday);
      const slotButtons = MEAL_SLOTS.map((s) => `
        <button class="slot-pick-btn ${ui.pickerSlot === s.id ? 'active' : ''}" type="button" data-choose-picker-slot="${s.id}">
          ${escapeHtml(s.label)}
        </button>
      `).join('');

      const dayButtons = week.map(({ date, ymd }) => {
        const lbl = date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
        const count = getDayRecord(ymd)[ui.pickerSlot].length;
        return `
          <button class="day-pick-btn" type="button" data-assign-date="${ymd}" data-assign-slot="${ui.pickerSlot}" data-assign-recipe="${escapeHtml(recipeId)}">
            <span>${escapeHtml(lbl)}${ymd === todayStr ? ' (Today)' : ''}</span>
            <span class="muted-label">${count} planned</span>
          </button>
        `;
      }).join('');

      $('dayPickerTitle').textContent = `Schedule "${r.title}"`;
      $('dayPickerBody').innerHTML = `
        <div class="slot-pick-tabs">${slotButtons}</div>
        ${dayButtons}
      `;
    };
    openSlotPickerForRecipe._render = renderPicker;
    renderPicker();
    $('dayPickerModal').classList.remove('hidden');
  }

  function openRecipePickerForSlot(slotId) {
    const slotLabel = MEAL_SLOTS.find((s) => s.id === slotId)?.label || slotId;
    const selLabel = parseYMD(ui.selectedDate).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
    $('dayPickerTitle').textContent = `${slotLabel} · ${selLabel}`;

    const sorted = [...data.RECIPES].sort((a, b) => {
      const score = (rec) => {
        if (slotId === 'breakfast') return rec.category === 'breakfast' ? 0 : rec.category === 'juices' ? 1 : 2;
        if (slotId === 'juice') return rec.category === 'juices' ? 0 : rec.category === 'salads' ? 1 : 2;
        return rec.category === 'juices' ? 2 : 0;
      };
      return score(a) - score(b);
    });

    $('dayPickerBody').innerHTML = sorted.map((r) => `
      <button class="day-pick-btn" type="button" data-assign-date="${ui.selectedDate}" data-assign-slot="${slotId}" data-assign-recipe="${escapeHtml(r.id)}">
        <span>${escapeHtml(r.title)}</span>
        <span class="muted-label">${escapeHtml(getCategoryLabel(r.category))} · ${r.totalMinutes}m</span>
      </button>
    `).join('');
    $('dayPickerModal').classList.remove('hidden');
  }

  function closeDayPicker() {
    $('dayPickerModal').classList.add('hidden');
  }

  // Random Meal Generator
  const RANDOM_FILTERS = [
    { id: 'any', label: 'Any Meal' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunchdinner', label: 'Lunch / Dinner' },
    { id: 'salads', label: 'Salads' },
    { id: 'quick', label: '15-Min' },
    { id: 'juices', label: 'Juices' }
  ];

  function getRandomCandidates() {
    let pool = data.RECIPES.filter((r) => {
      if (ui.randomFilter === 'any') return true;
      if (ui.randomFilter === 'lunchdinner') return r.category !== 'breakfast' && r.category !== 'juices';
      return r.category === ui.randomFilter;
    });
    if ($('randomPantryOnly')?.checked && (appState.pantryHave || []).length > 0) {
      const matched = pool.filter((r) => getPantryMatchInfo(r).matchedCount > 0);
      if (matched.length) pool = matched;
    }
    return pool;
  }

  function pickRandomRecipe() {
    const pool = getRandomCandidates();
    if (!pool.length) {
      ui.randomRecipeId = null;
      return;
    }
    const filtered = pool.length > 1 ? pool.filter((r) => r.id !== ui.randomRecipeId) : pool;
    const chosen = filtered[Math.floor(Math.random() * filtered.length)];
    ui.randomRecipeId = chosen.id;
  }

  function renderRandomModal() {
    $('randomFilterRow').innerHTML = RANDOM_FILTERS.map((f) => `
      <button class="chip-btn ${ui.randomFilter === f.id ? 'active' : ''}" type="button" data-random-filter="${f.id}">
        ${escapeHtml(f.label)}
      </button>
    `).join('');

    const r = getRecipeById(ui.randomRecipeId);
    if (!r) {
      $('randomResultCard').innerHTML = `<div class="empty-state">No recipes found for that filter.</div>`;
      return;
    }
    $('randomResultCard').innerHTML = `
      <img class="random-result-img" src="${escapeHtml(r.image)}" alt="${escapeHtml(r.title)}" />
      <div class="random-result-body">
        <span class="recipe-cat-label">${escapeHtml(r.cuisine ? `${r.cuisine} · ${getCategoryLabel(r.category)}` : getCategoryLabel(r.category))}</span>
        <h4>${escapeHtml(r.title)}</h4>
        <p>${escapeHtml(r.subtitle)}</p>
        <div class="random-meta-row">
          <span class="mini-tag">${r.totalMinutes} min</span>
          <span class="mini-tag">${r.nutrition.kcal} kcal</span>
          <span class="mini-tag">${escapeHtml(r.nutrition.protein)} protein</span>
        </div>
      </div>
    `;
  }

  function openRandomModal() {
    if (!ui.randomRecipeId) pickRandomRecipe();
    renderRandomModal();
    $('randomMealModal').classList.remove('hidden');
  }

  function closeRandomModal() {
    $('randomMealModal').classList.add('hidden');
  }

  async function autoFillSelectedDay() {
    const rec = getDayRecord(ui.selectedDate);
    const used = new Set([...rec.breakfast, ...rec.lunch, ...rec.dinner, ...rec.juice]);
    const pickOne = (pool) => {
      const avail = pool.filter((r) => !used.has(r.id));
      const src = avail.length ? avail : pool;
      if (!src.length) return null;
      const hit = src[Math.floor(Math.random() * src.length)];
      used.add(hit.id);
      return hit.id;
    };

    if (!rec.breakfast.length) {
      const b = pickOne(data.RECIPES.filter((r) => r.category === 'breakfast'));
      if (b) rec.breakfast = [b];
    }
    if (!rec.lunch.length) {
      const l = pickOne(data.RECIPES.filter((r) => ['salads', 'quick', 'onepot'].includes(r.category)));
      if (l) rec.lunch = [l];
    }
    if (!rec.dinner.length) {
      const d = pickOne(data.RECIPES.filter((r) => ['onepot', 'slow', 'quick'].includes(r.category)));
      if (d) rec.dinner = [d];
    }
    if (!rec.juice.length) {
      const j = pickOne(data.RECIPES.filter((r) => r.category === 'juices'));
      if (j) rec.juice = [j];
    }

    appState.calendarPlan[ui.selectedDate] = rec;
    await persist();
    renderPlan();
    showToast('Auto-filled open meal slots for the day');
  }

  function sendGroceriesToPocketLedger() {
    const items = buildAggregatedGroceries();
    if (!items.length) {
      showToast('Add ingredients to your grocery list first');
      return;
    }
    const checkedItems = items.filter((i) => i.checked);
    const targetItems = checkedItems.length ? checkedItems : items;
    const totalAmount = targetItems.reduce((s, i) => s + i.estUgx, 0);
    const recipeNames = [...new Set(appState.groceryEntries.map((e) => getRecipeById(e.recipeId)?.title).filter(Boolean))];
    const note = recipeNames.length
      ? `NourishTable Market: ${recipeNames.slice(0, 3).join(', ')}${recipeNames.length > 3 ? ` +${recipeNames.length - 3}` : ''}`
      : 'NourishTable Healthy Market Run';

    let baseUrl = (appState.settings.pocketLedgerUrl || 'https://pocketledger-brd.pages.dev/').trim();
    if (!/^https?:\/\//i.test(baseUrl)) baseUrl = `https://${baseUrl}`;
    const url = new URL(baseUrl);
    url.searchParams.set('plAction', 'addExpense');
    url.searchParams.set('amount', String(totalAmount));
    url.searchParams.set('category', 'cat-groceries');
    url.searchParams.set('note', note);

    window.open(url.toString(), '_blank', 'noopener');
    showToast(`Opening PocketLedger (${formatUgx(totalAmount)})`);
  }

  async function copyGrocerySummary() {
    const items = buildAggregatedGroceries();
    if (!items.length) {
      showToast('Grocery list is empty');
      return;
    }
    const totalUgx = items.reduce((s, i) => s + i.estUgx, 0);
    const lines = [
      'NourishTable Market List',
      `Estimated Total: ${formatUgx(totalUgx)}`,
      ''
    ];
    for (const item of items) {
      lines.push(`${item.checked ? '[x]' : '[ ]'} ${item.name} (${item.qtyText}) — ${formatUgx(item.estUgx)}`);
    }
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      showToast('Market list copied');
    } catch {
      showToast('Could not access clipboard');
    }
  }

  function hydrateStaticIcons() {
    $('searchIconSlot').innerHTML = icons.get('search');
    $('clearSearchBtn').innerHTML = icons.get('close');
    $('closeRecipeBtn').innerHTML = icons.get('back');
    $('servingsMinusBtn').innerHTML = icons.get('minus');
    $('servingsPlusBtn').innerHTML = icons.get('plus');
    $('healthSparkSlot').innerHTML = icons.get('spark');
    $('floatingTimerIcon').innerHTML = icons.get('timer');
    $('closeDayPickerBtn').innerHTML = icons.get('close');
    $('closeRandomModalBtn').innerHTML = icons.get('close');
    $('openRandomMealBtn').innerHTML = `${icons.get('shuffle')} Surprise Me`;
    $('spinAgainBtn').innerHTML = `${icons.get('shuffle')} Spin Again`;

    $('addToGroceryBtn').innerHTML = `${icons.get('groceries')} Add to Groceries`;
    $('addToPlanBtn').innerHTML = `${icons.get('plan')} Add to Calendar`;
    $('sendToPocketLedgerBtn').innerHTML = `${icons.get('external')} Log in PocketLedger`;
    $('copyGrocerySummaryBtn').innerHTML = `${icons.get('copy')} Copy List`;

    document.querySelectorAll('.nav-icon[data-icon]').forEach((slot) => {
      slot.innerHTML = icons.get(slot.dataset.icon);
    });
  }

  function bindEvents() {
    document.querySelectorAll('.nav-btn[data-view]').forEach((btn) => {
      btn.addEventListener('click', () => setView(btn.dataset.view));
    });

    $('headerQuickFavBtn').addEventListener('click', () => setView('plan'));
    $('openRandomMealBtn').addEventListener('click', openRandomModal);
    $('closeRandomModalBtn').addEventListener('click', closeRandomModal);
    $('randomMealModal').addEventListener('click', (e) => {
      if (e.target === $('randomMealModal')) closeRandomModal();
    });
    $('randomPantryOnly').addEventListener('change', () => {
      pickRandomRecipe();
      renderRandomModal();
    });
    $('spinAgainBtn').addEventListener('click', () => {
      pickRandomRecipe();
      renderRandomModal();
    });
    $('randomOpenRecipeBtn').addEventListener('click', () => {
      const id = ui.randomRecipeId;
      closeRandomModal();
      if (id) openRecipeModal(id);
    });
    $('randomAddTodayBtn').addEventListener('click', async () => {
      const r = getRecipeById(ui.randomRecipeId);
      if (!r) return;
      const slot = r.category === 'breakfast' ? 'breakfast' : r.category === 'juices' ? 'juice' : 'dinner';
      const rec = getDayRecord(todayStr);
      if (!rec[slot].includes(r.id)) {
        rec[slot] = [...rec[slot], r.id];
        appState.calendarPlan[todayStr] = rec;
        await persist();
        renderPlan();
      }
      closeRandomModal();
      showToast(`Added to Today's ${MEAL_SLOTS.find((s) => s.id === slot)?.label || slot}`);
    });
    $('autoFillDayBtn').addEventListener('click', autoFillSelectedDay);

    $('searchInput').addEventListener('input', (e) => {
      ui.search = e.target.value;
      $('clearSearchBtn').classList.toggle('hidden', !ui.search.length);
      renderDiscover();
    });

    $('clearSearchBtn').addEventListener('click', () => {
      ui.search = '';
      $('searchInput').value = '';
      $('clearSearchBtn').classList.add('hidden');
      renderDiscover();
    });

    $('pantryAddForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const raw = $('pantryInput').value.trim();
      if (!raw) return;
      const parts = raw.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
      const next = new Set(appState.pantryHave || []);
      for (const part of parts) {
        const staple = PANTRY_STAPLES.find((s) => s.key === part || s.label.toLowerCase() === part);
        next.add(staple ? staple.key : part);
      }
      appState.pantryHave = Array.from(next);
      $('pantryInput').value = '';
      await persist();
      renderDiscover();
    });

    $('clearPantryBtn').addEventListener('click', async () => {
      appState.pantryHave = [];
      await persist();
      renderDiscover();
    });

    $('calPrevBtn').addEventListener('click', () => {
      const m = parseYMD(ui.weekMonday);
      m.setDate(m.getDate() - 7);
      ui.weekMonday = toYMD(m);
      ui.selectedDate = ui.weekMonday;
      renderPlan();
    });

    $('calNextBtn').addEventListener('click', () => {
      const m = parseYMD(ui.weekMonday);
      m.setDate(m.getDate() + 7);
      ui.weekMonday = toYMD(m);
      ui.selectedDate = ui.weekMonday;
      renderPlan();
    });

    $('calTodayBtn').addEventListener('click', () => {
      ui.selectedDate = todayStr;
      ui.weekMonday = toYMD(getMondayOfWeek(new Date()));
      renderPlan();
    });

    $('calMonthToggleBtn').addEventListener('click', () => {
      ui.showMonthCal = !ui.showMonthCal;
      renderPlan();
    });

    $('addDayToGroceriesBtn').addEventListener('click', async () => {
      const dayRec = getDayRecord(ui.selectedDate);
      const allIds = [...dayRec.breakfast, ...dayRec.lunch, ...dayRec.dinner, ...dayRec.juice];
      if (!allIds.length) {
        showToast('Add a meal to this day first');
        return;
      }
      for (const rId of allIds) {
        const r = getRecipeById(rId);
        if (!r) continue;
        const existing = appState.groceryEntries.find((e) => e.recipeId === rId);
        if (existing) existing.servings += r.servings;
        else appState.groceryEntries.push({ recipeId: rId, servings: r.servings });
      }
      await persist();
      renderGroceries();
      setView('groceries');
      showToast('Added day meals to Market List');
    });

    document.addEventListener('click', async (e) => {
      const randomFilterBtn = e.target.closest('[data-random-filter]');
      if (randomFilterBtn) {
        ui.randomFilter = randomFilterBtn.dataset.randomFilter;
        pickRandomRecipe();
        renderRandomModal();
        return;
      }

      const modeBtn = e.target.closest('[data-discover-mode]');
      if (modeBtn) {
        ui.discoverMode = modeBtn.dataset.discoverMode;
        renderDiscover();
        return;
      }

      const pantryBtn = e.target.closest('[data-toggle-pantry]');
      if (pantryBtn) {
        const key = pantryBtn.dataset.togglePantry;
        const cur = appState.pantryHave || [];
        appState.pantryHave = cur.includes(key) ? cur.filter((x) => x !== key) : [...cur, key];
        await persist();
        renderDiscover();
        return;
      }

      const addMissingBtn = e.target.closest('[data-add-missing]');
      if (addMissingBtn) {
        e.stopPropagation();
        const r = getRecipeById(addMissingBtn.dataset.addMissing);
        if (!r) return;
        const info = getPantryMatchInfo(r);
        for (const ing of info.missing) {
          appState.customGroceries.push({
            id: `miss_${r.id}_${ing.id}_${Date.now()}_${Math.random().toString(36).slice(2, 5)}`,
            name: ing.name,
            qtyText: `${formatAmount(ing.amount)} ${ing.unit}`,
            aisle: ing.aisle || 'produce',
            estUgx: ing.estUgx || 0,
            checked: false,
            source: `Missing for ${r.title}`
          });
        }
        await persist();
        renderGroceries();
        showToast(`Added ${info.missingCount} missing item(s) to Market List`);
        return;
      }

      const favBtn = e.target.closest('[data-fav-id]');
      if (favBtn) {
        e.stopPropagation();
        await toggleFavorite(favBtn.dataset.favId);
        return;
      }

      const openEl = e.target.closest('[data-open-recipe]');
      if (openEl) {
        openRecipeModal(openEl.dataset.openRecipe);
        return;
      }

      const catBtn = e.target.closest('[data-cat]');
      if (catBtn) {
        ui.category = catBtn.dataset.cat;
        renderDiscover();
        return;
      }

      const goalBtn = e.target.closest('[data-goal]');
      if (goalBtn) {
        ui.goal = ui.goal === goalBtn.dataset.goal ? '' : goalBtn.dataset.goal;
        renderDiscover();
        return;
      }

      const dateBtn = e.target.closest('[data-select-date]');
      if (dateBtn) {
        ui.selectedDate = dateBtn.dataset.selectDate;
        ui.weekMonday = toYMD(getMondayOfWeek(parseYMD(ui.selectedDate)));
        renderPlan();
        return;
      }

      const slotPickBtn = e.target.closest('[data-pick-for-slot]');
      if (slotPickBtn) {
        openRecipePickerForSlot(slotPickBtn.dataset.pickForSlot);
        return;
      }

      const choosePickerSlot = e.target.closest('[data-choose-picker-slot]');
      if (choosePickerSlot) {
        ui.pickerSlot = choosePickerSlot.dataset.choosePickerSlot;
        openSlotPickerForRecipe._render?.();
        return;
      }

      const assignBtn = e.target.closest('[data-assign-date]');
      if (assignBtn) {
        const ymd = assignBtn.dataset.assignDate;
        const slot = assignBtn.dataset.assignSlot;
        const rId = assignBtn.dataset.assignRecipe;
        const rec = getDayRecord(ymd);
        if (!rec[slot].includes(rId)) {
          rec[slot] = [...rec[slot], rId];
          appState.calendarPlan[ymd] = rec;
          await persist();
          ui.selectedDate = ymd;
          ui.weekMonday = toYMD(getMondayOfWeek(parseYMD(ymd)));
          renderPlan();
        }
        closeDayPicker();
        showToast(`Scheduled for ${MEAL_SLOTS.find((s) => s.id === slot)?.label || slot}`);
        return;
      }

      const remSlotBtn = e.target.closest('[data-remove-slot]');
      if (remSlotBtn) {
        const slot = remSlotBtn.dataset.removeSlot;
        const idx = Number(remSlotBtn.dataset.removeIdx);
        const rec = getDayRecord(ui.selectedDate);
        rec[slot] = rec[slot].filter((_, i) => i !== idx);
        appState.calendarPlan[ui.selectedDate] = rec;
        await persist();
        renderPlan();
        return;
      }

      const remBasketBtn = e.target.closest('[data-remove-basket]');
      if (remBasketBtn) {
        const idx = Number(remBasketBtn.dataset.removeBasket);
        appState.groceryEntries = appState.groceryEntries.filter((_, i) => i !== idx);
        await persist();
        renderGroceries();
        return;
      }

      const checkBtn = e.target.closest('[data-toggle-grocery]');
      if (checkBtn) {
        const key = checkBtn.dataset.toggleGrocery;
        if (checkBtn.dataset.custom === '1') {
          appState.customGroceries = appState.customGroceries.map((c) =>
            c.id === key ? { ...c, checked: !c.checked } : c
          );
        } else {
          appState.groceryChecked[key] = !appState.groceryChecked[key];
        }
        await persist();
        renderGroceries();
        return;
      }

      const priceBtn = e.target.closest('[data-edit-price]');
      if (priceBtn) {
        const key = priceBtn.dataset.editPrice;
        const cur = Number(priceBtn.dataset.currentPrice) || 0;
        const nextStr = prompt('Enter market price in UGX:', String(cur));
        if (nextStr === null) return;
        const nextVal = Math.max(0, Math.round(Number(nextStr.replace(/[^\d.]/g, '')) || 0));
        if (priceBtn.dataset.custom === '1') {
          appState.customGroceries = appState.customGroceries.map((c) =>
            c.id === key ? { ...c, estUgx: nextVal } : c
          );
        } else {
          appState.priceOverrides[key] = nextVal;
        }
        await persist();
        renderGroceries();
        return;
      }

      const timerBtn = e.target.closest('[data-start-timer]');
      if (timerBtn) {
        startCookingTimer(Number(timerBtn.dataset.startTimer), timerBtn.dataset.timerLabel);
        return;
      }

      const palBtn = e.target.closest('[data-pick-palette]');
      if (palBtn) {
        appState.settings.theme = palBtn.dataset.pickPalette;
        applyPalette(appState.settings.theme);
        await persist();
        renderGuide();
        showToast('Cookbook palette updated');
      }
    });

    $('closeRecipeBtn').addEventListener('click', closeRecipeModal);
    $('recipeModal').addEventListener('click', (e) => {
      if (e.target === $('recipeModal')) closeRecipeModal();
    });
    $('detailFavBtn').addEventListener('click', () => {
      if (ui.detailRecipeId) toggleFavorite(ui.detailRecipeId);
    });
    $('wakeLockBtn').addEventListener('click', toggleWakeLock);

    $('servingsMinusBtn').addEventListener('click', () => {
      ui.detailServings = Math.max(1, ui.detailServings - 1);
      renderRecipeDetailBody();
    });
    $('servingsPlusBtn').addEventListener('click', () => {
      ui.detailServings = Math.min(12, ui.detailServings + 1);
      renderRecipeDetailBody();
    });

    $('addToGroceryBtn').addEventListener('click', async () => {
      if (!ui.detailRecipeId) return;
      const existing = appState.groceryEntries.find((e) => e.recipeId === ui.detailRecipeId);
      if (existing) existing.servings += ui.detailServings;
      else appState.groceryEntries.push({ recipeId: ui.detailRecipeId, servings: ui.detailServings });
      await persist();
      renderGroceries();
      showToast('Added ingredients to Market List');
    });

    $('addToPlanBtn').addEventListener('click', () => {
      if (ui.detailRecipeId) openSlotPickerForRecipe(ui.detailRecipeId);
    });

    $('closeDayPickerBtn').addEventListener('click', closeDayPicker);
    $('dayPickerModal').addEventListener('click', (e) => {
      if (e.target === $('dayPickerModal')) closeDayPicker();
    });

    $('buildGroceriesFromWeekBtn').addEventListener('click', async () => {
      const counts = new Map();
      for (const { ymd } of getWeekDates(ui.weekMonday)) {
        const rec = getDayRecord(ymd);
        const ids = [...rec.breakfast, ...rec.lunch, ...rec.dinner, ...rec.juice];
        for (const rId of ids) {
          const r = getRecipeById(rId);
          if (!r) continue;
          counts.set(rId, (counts.get(rId) || 0) + r.servings);
        }
      }
      if (!counts.size) {
        showToast('Schedule at least one meal in this week first');
        return;
      }
      appState.groceryEntries = Array.from(counts.entries()).map(([recipeId, servings]) => ({ recipeId, servings }));
      appState.groceryChecked = {};
      await persist();
      renderGroceries();
      setView('groceries');
      showToast("Built Market List for this week's menu");
    });

    $('clearWeekPlanBtn').addEventListener('click', async () => {
      for (const { ymd } of getWeekDates(ui.weekMonday)) {
        delete appState.calendarPlan[ymd];
      }
      await persist();
      renderPlan();
      showToast('Cleared meals for this week');
    });

    $('clearGroceryBasketBtn').addEventListener('click', async () => {
      appState.groceryEntries = [];
      appState.groceryChecked = {};
      appState.customGroceries = [];
      await persist();
      renderGroceries();
      showToast('Market list cleared');
    });

    $('customGroceryForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = $('customItemName').value.trim();
      if (!name) return;
      const ugx = Math.max(0, Math.round(Number($('customItemUgx').value) || 0));
      appState.customGroceries.push({
        id: `custom_${Date.now()}`,
        name,
        qtyText: '1 item',
        aisle: 'produce',
        estUgx: ugx,
        checked: false
      });
      $('customItemName').value = '';
      $('customItemUgx').value = '';
      await persist();
      renderGroceries();
    });

    $('sendToPocketLedgerBtn').addEventListener('click', sendGroceriesToPocketLedger);
    $('copyGrocerySummaryBtn').addEventListener('click', copyGrocerySummary);
    $('stopTimerBtn').addEventListener('click', stopCookingTimer);

    $('savePlUrlBtn').addEventListener('click', async () => {
      const val = $('pocketLedgerUrlInput').value.trim() || 'https://pocketledger-brd.pages.dev/';
      appState.settings.pocketLedgerUrl = val;
      await persist();
      showToast('PocketLedger URL saved');
    });

    $('exportBackupBtn').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(appState, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `nourishtable-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
      showToast('Backup exported');
    });

    $('importBackupInput').addEventListener('change', async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const parsed = JSON.parse(await file.text());
        appState = window.NourishDB.mergeWithDefaults(parsed);
        await persist();
        applyPalette(appState.settings.theme);
        renderAll();
        showToast('Backup restored');
      } catch {
        showToast('Invalid JSON backup file');
      }
      e.target.value = '';
    });

    $('checkUpdateBtn').addEventListener('click', async () => {
      if (!('serviceWorker' in navigator)) {
        showToast(`NourishTable v${APP_VERSION}`);
        return;
      }
      const reg = await navigator.serviceWorker.getRegistration();
      if (!reg) {
        showToast(`NourishTable v${APP_VERSION}`);
        return;
      }
      await reg.update();
      showToast(reg.waiting ? 'Update ready — reloading...' : `Up to date (v${APP_VERSION})`);
      if (reg.waiting) {
        reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        setTimeout(() => location.reload(), 450);
      }
    });
  }

  async function registerSw() {
    if (!('serviceWorker' in navigator)) return;
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch {
      // ignore local file protocol
    }
  }

  async function init() {
    hydrateStaticIcons();
    appState = window.NourishDB.loadLocalSync();
    applyPalette(appState.settings.theme);
    bindEvents();
    renderAll();
    registerSw();
    const idbState = await window.NourishDB.loadState();
    if (idbState) {
      appState = idbState;
      applyPalette(appState.settings.theme);
      renderAll();
    }
  }

  init();
})();
