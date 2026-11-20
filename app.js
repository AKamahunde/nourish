(() => {
  const APP_VERSION = 2;
  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const PALETTES = [
    { id: 'sage', label: 'Botanical Sage', dots: ['#1F4E3D', '#D98A1E'], themeColor: '#FBF9F5' },
    { id: 'terracotta', label: 'Terracotta Clay', dots: ['#9A3F26', '#2A5C48'], themeColor: '#FCF8F5' },
    { id: 'mango', label: 'Mango Harvest', dots: ['#B36811', '#2B5E44'], themeColor: '#FCFBF5' },
    { id: 'hibiscus', label: 'Hibiscus Berry', dots: ['#7A2347', '#255E4B'], themeColor: '#FCF8FA' }
  ];

  const data = window.NourishData;
  const icons = window.NourishIcons;

  const ui = {
    view: 'discover',
    category: 'all',
    goal: '',
    search: '',
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
    const n = Math.round(Number(val) || 0);
    return `UGX ${n.toLocaleString('en-US')}`;
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
      plan: 'Saved & Menu',
      groceries: 'Market List',
      guide: 'Health Guide'
    };
    $('viewTitle').textContent = titles[viewName] || 'Cookbook';
    window.scrollTo({ top: 0, behavior: 'instant' });
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

  function renderRecipeCard(r) {
    const saved = isFavorite(r.id);
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
          <div class="card-tags">
            ${r.tags.slice(0, 2).map((t) => `<span class="mini-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      </article>
    `;
  }

  function renderDiscover() {
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

    if (!list.length) {
      $('recipeGrid').innerHTML = `<div class="empty-state">No dishes match that filter yet. Try clearing the search or health tag.</div>`;
    } else {
      $('recipeGrid').innerHTML = list.map(renderRecipeCard).join('');
    }
  }

  function renderPlan() {
    $('weekPlanList').innerHTML = DAYS.map((day) => {
      const ids = appState.mealPlan[day] || [];
      const chips = ids.map((id, idx) => {
        const r = getRecipeById(id);
        if (!r) return '';
        return `
          <span class="day-meal-chip">
            <span data-open-recipe="${escapeHtml(r.id)}" style="cursor:pointer">${escapeHtml(r.title)}</span>
            <button class="day-meal-remove" type="button" data-remove-day="${day}" data-remove-idx="${idx}" aria-label="Remove">&times;</button>
          </span>
        `;
      }).join('');
      return `
        <div class="day-row">
          <span class="day-name">${day}</span>
          <div class="day-meals">${chips || '<span class="muted-label">Open day</span>'}</div>
          <button class="day-add-btn" type="button" data-pick-for-day="${day}" aria-label="Add dish to ${day}">
            ${icons.get('plus')}
          </button>
        </div>
      `;
    }).join('');

    const favRecipes = appState.favorites.map(getRecipeById).filter(Boolean);
    $('favCountLabel').textContent = `${favRecipes.length} saved`;
    $('favoritesGrid').innerHTML = favRecipes.length
      ? favRecipes.map(renderRecipeCard).join('')
      : `<div class="empty-state">Tap the heart on any salad, meal, or juice to keep your go-to dishes right here.</div>`;
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
        recipes: ['Added manually'],
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
      : 'Add recipes or build from your weekly menu to generate a grouped market list.';

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
          Open any recipe and tap <strong>Add to Groceries</strong>, or build from <strong>Menu</strong>.
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
      const est = Math.round((ing.estUgx || 0) * ratio);
      return `
        <li>
          <div class="ing-main">
            <strong>${escapeHtml(amt)} ${escapeHtml(ing.unit)}</strong> ${escapeHtml(ing.name)}
            ${ing.prep ? `<span class="ing-prep">(${escapeHtml(ing.prep)})</span>` : ''}
          </div>
          <span class="ing-cost">~${formatUgx(est)}</span>
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

  // Wake lock for kitchen cooking
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

  // Cooking timer with subtle WebAudio chime
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

  // Day Picker Modal
  function openDayPickerForRecipe(recipeId) {
    const r = getRecipeById(recipeId);
    if (!r) return;
    $('dayPickerTitle').textContent = `Schedule "${r.title}"`;
    $('dayPickerBody').innerHTML = DAYS.map((day) => `
      <button class="day-pick-btn" type="button" data-assign-day="${day}" data-assign-recipe="${escapeHtml(recipeId)}">
        <span>${day}</span>
        <span class="muted-label">${(appState.mealPlan[day] || []).length} planned</span>
      </button>
    `).join('');
    $('dayPickerModal').classList.remove('hidden');
  }

  function openRecipePickerForDay(day) {
    $('dayPickerTitle').textContent = `Add dish to ${day}`;
    $('dayPickerBody').innerHTML = data.RECIPES.map((r) => `
      <button class="day-pick-btn" type="button" data-assign-day="${day}" data-assign-recipe="${escapeHtml(r.id)}">
        <span>${escapeHtml(r.title)}</span>
        <span class="muted-label">${r.totalMinutes}m</span>
      </button>
    `).join('');
    $('dayPickerModal').classList.remove('hidden');
  }

  function closeDayPicker() {
    $('dayPickerModal').classList.add('hidden');
  }

  // PocketLedger Bridge
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

    $('addToGroceryBtn').innerHTML = `${icons.get('groceries')} Add to Groceries`;
    $('addToPlanBtn').innerHTML = `${icons.get('plan')} Add to Menu`;
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

    document.addEventListener('click', async (e) => {
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

      const pickDayBtn = e.target.closest('[data-pick-for-day]');
      if (pickDayBtn) {
        openRecipePickerForDay(pickDayBtn.dataset.pickForDay);
        return;
      }

      const assignBtn = e.target.closest('[data-assign-day]');
      if (assignBtn) {
        const day = assignBtn.dataset.assignDay;
        const rId = assignBtn.dataset.assignRecipe;
        const existing = appState.mealPlan[day] || [];
        if (!existing.includes(rId)) {
          appState.mealPlan[day] = [...existing, rId];
          await persist();
          renderPlan();
        }
        closeDayPicker();
        showToast(`Added to ${day}`);
        return;
      }

      const remDayBtn = e.target.closest('[data-remove-day]');
      if (remDayBtn) {
        const day = remDayBtn.dataset.removeDay;
        const idx = Number(remDayBtn.dataset.removeIdx);
        appState.mealPlan[day] = (appState.mealPlan[day] || []).filter((_, i) => i !== idx);
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
      if (existing) {
        existing.servings += ui.detailServings;
      } else {
        appState.groceryEntries.push({ recipeId: ui.detailRecipeId, servings: ui.detailServings });
      }
      await persist();
      renderGroceries();
      showToast('Added ingredients to Market List');
    });

    $('addToPlanBtn').addEventListener('click', () => {
      if (ui.detailRecipeId) openDayPickerForRecipe(ui.detailRecipeId);
    });

    $('closeDayPickerBtn').addEventListener('click', closeDayPicker);
    $('dayPickerModal').addEventListener('click', (e) => {
      if (e.target === $('dayPickerModal')) closeDayPicker();
    });

    $('buildGroceriesFromWeekBtn').addEventListener('click', async () => {
      const counts = new Map();
      for (const day of DAYS) {
        for (const rId of (appState.mealPlan[day] || [])) {
          const r = getRecipeById(rId);
          if (!r) continue;
          counts.set(rId, (counts.get(rId) || 0) + r.servings);
        }
      }
      if (!counts.size) {
        showToast('Add at least one dish to your week first');
        return;
      }
      appState.groceryEntries = Array.from(counts.entries()).map(([recipeId, servings]) => ({ recipeId, servings }));
      appState.groceryChecked = {};
      await persist();
      renderGroceries();
      setView('groceries');
      showToast('Built Market List from weekly menu');
    });

    $('clearWeekPlanBtn').addEventListener('click', async () => {
      DAYS.forEach((d) => { appState.mealPlan[d] = []; });
      await persist();
      renderPlan();
      showToast('Weekly menu cleared');
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
