(() => {
  const BATCH3_RECIPES = [
    {
      id: 'flaky-chapati-spiced-chai',
      title: 'Light Flaky Chapati & Ugandan Spiced Milk Tea (Chai)',
      subtitle: 'Soft whole-wheat pan-toasted chapatis served warm beside cardamom-ginger milk tea',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/flaky-chapati-spiced-chai.jpg',
      prepMinutes: 12,
      cookMinutes: 15,
      totalMinutes: 27,
      servings: 2,
      tags: ['Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Whole-wheat atta flour and minimal pan oil keep traditional Ugandan chapati & chai lighter and steady on blood sugar.',
      nutrition: { kcal: 365, protein: '12g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'wheat-flour', name: 'Whole-wheat & plain wheat flour', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'mixed 50/50' },
        { id: 'cow-milk', name: 'Fresh cow or soya milk', amount: 1.5, unit: 'cups', aisle: 'protein', estUgx: 2000, prep: 'for chai' },
        { id: 'ginger-cardamom', name: 'Crushed ginger, cardamom & black tea', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 800, prep: 'whole or ground' },
        { id: 'oil', name: 'Sunflower or olive oil', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'light brushing' }
      ],
      steps: [
        { text: 'Whisk 3/4 cup whole-wheat flour, 3/4 cup plain wheat flour, and 1/2 teaspoon salt in a bowl. Gradually mix in about 1/2 cup warm water plus 1 teaspoon oil, kneading 4 minutes until smooth and elastic; cover and rest 10 minutes so the dough rolls out soft.', timerMin: 10 },
        { text: 'Divide into 4 balls, roll each thin on a lightly floured surface, brush with a few drops of oil, roll into a spiral coil, and flatten again into a thin 20 cm round for light flaky layers.' },
        { text: 'Heat a heavy dry skillet or tawa over medium-high heat; cook each chapati 1 minute per side until dry bubbles appear, then brush lightly with 1/4 teaspoon oil per side and cook 30 seconds more until spotted golden-brown. Stack wrapped in a clean cloth to stay soft.' },
        { text: 'For spiced chai, simmer 1 cup water with 1 tablespoon crushed fresh ginger, 3 bruised cardamom pods, and 1.5 teaspoons black tea leaves for 3 minutes; pour in 1.5 cups cow or soya milk, simmer gently 3 minutes until frothy, and strain hot beside warm chapatis.', timerMin: 6 }
      ],
      ugandaTip: 'Pair 1 warm chapati with 2 boiled eggs or sliced avocado to turn tea-time into a complete balanced breakfast.'
    },
    {
      id: 'spiced-vegetable-pulao-basmati',
      title: 'Fragrant Whole-Spice Basmati Vegetable Pulao',
      subtitle: 'Light aromatic basmati rice steamed with sweet carrots, green peas, green beans, and cumin',
      cuisine: 'Asian',
      category: 'onepot',
      image: './images/spiced-vegetable-pulao-basmati.jpg',
      prepMinutes: 10,
      cookMinutes: 20,
      totalMinutes: 30,
      servings: 3,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Fluffy basmati loaded with colorful crunchy vegetables gives high fiber and aromatic satisfaction without heavy ghee.',
      nutrition: { kcal: 335, protein: '8g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'rice', name: 'Aged basmati rice', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 3500, prep: 'rinsed & soaked 15 min' },
        { id: 'carrots', name: 'Carrots, French green beans & peas', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 2500, prep: 'diced' },
        { id: 'onion-garlic', name: 'Onion, garlic & ginger', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1000, prep: 'sliced & minced' },
        { id: 'pulao-spices', name: 'Cumin seeds, cardamom, bay leaf & cloves', amount: 2, unit: 'tsp', aisle: 'pantry', estUgx: 700, prep: 'whole spices' }
      ],
      steps: [
        { text: 'Rinse aged basmati rice 3 times until water runs mostly clear, soak in cold water for 15 minutes (gives long separate grains), then drain completely. Dice carrots and trim green beans into 1 cm pieces.' },
        { text: 'Heat 1 tablespoon oil in a wide pot over medium heat; drop in 1 teaspoon cumin seeds, 1 bay leaf, 3 green cardamom pods, and 3 cloves for 30 seconds until they crackle and smell sweet. Saute sliced onion, 2 minced garlic cloves, and 1 teaspoon grated ginger for 3 minutes until translucent.', timerMin: 4 },
        { text: 'Stir in diced carrots, green beans, peas, 1 teaspoon salt, and drained basmati rice; gently turn for 1 minute so every rice grain is coated in aromatic oil without breaking.' },
        { text: 'Pour in 2.75 cups hot water, bring to a lively boil, then turn heat to the lowest setting, cover tightly, and steam untouched for 15 minutes. Turn off heat, rest covered 5 minutes, and fluff gently with a fork and fresh coriander.', timerMin: 15 }
      ],
      ugandaTip: 'Serve alongside chilled plain yogurt spiced with cucumber and mint (raita) or grilled tilapia.'
    },
    {
      id: 'roast-chicken-oven-fries-kachumbari',
      title: 'Herb-Roast Chicken Quarter, Crispy Oven Fries & Yogurt Dip',
      subtitle: 'Golden spiced chicken leg quarter roasted beside crisp Irish potato fries and cool herb-yogurt dip',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/roast-chicken-oven-fries-kachumbari.jpg',
      prepMinutes: 12,
      cookMinutes: 35,
      totalMinutes: 47,
      servings: 2,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Oven-roasting potato batons with 1 teaspoon oil delivers crisp Kampala roast-chicken flavor without deep-frying fat.',
      nutrition: { kcal: 485, protein: '36g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Chicken leg quarters (skin trimmed)', amount: 2, unit: 'pcs', aisle: 'protein', estUgx: 10000, prep: 'scored' },
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'cut into fries' },
        { id: 'yogurt', name: 'Plain yogurt, coriander & garlic', amount: 0.5, unit: 'cup', aisle: 'protein', estUgx: 1800, prep: 'blended smooth' },
        { id: 'tomatoes', name: 'Tomatoes, red onion & lime (kachumbari)', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1200, prep: 'sliced' }
      ],
      steps: [
        { text: 'Preheat oven to 210°C / 410°F. Cut 2 shallow diagonal slashes into each trimmed chicken quarter so marinade reaches the bone; rub all over with 2 minced garlic cloves, 1 teaspoon paprika, 1/2 teaspoon dried rosemary, 1 teaspoon salt, black pepper, 1 teaspoon oil, and squeeze of lemon.' },
        { text: 'Place chicken quarters on a lined roasting tray and roast for 15 minutes first so they get a head start.', timerMin: 15 },
        { text: 'Meanwhile, cut Irish potatoes into even 1 cm batons, par-boil in salted water for 4 minutes, drain, steam dry 1 minute, and toss with 1 teaspoon oil, salt, and paprika. Spread in a single layer on a second hot tray and bake 22 to 25 minutes alongside the chicken (flip fries halfway) until golden crisp and chicken juices run clear.', timerMin: 25 },
        { text: 'Blend or stir 1/2 cup plain yogurt with chopped coriander, 1/2 grated garlic clove, lemon juice, and salt for the cool green dip; toss sliced tomatoes, soaked red onion, and lime for kachumbari, and plate everything hot.' }
      ],
      ugandaTip: 'Par-boil potato fries for 4 minutes first, then oven-bake — they turn crisp outside with almost zero oil.'
    },
    {
      id: 'ugandan-beef-tripe-byenda-stew',
      title: 'Slow-Simmered Ugandan Beef Tripe (Byenda / Matumbo) Stew',
      subtitle: 'Tender honeycomb beef tripe braised in rich tomato, onion, garlic, and green pepper gravy',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/ugandan-beef-tripe-byenda-stew.jpg',
      prepMinutes: 15,
      cookMinutes: 55,
      totalMinutes: 70,
      servings: 4,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Beef tripe (byenda) is naturally lean, high in protein, zinc, and B12 when trimmed well and simmered gently with fresh vegetables.',
      nutrition: { kcal: 295, protein: '30g', fiber: '3g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-tripe', name: 'Cleaned honeycomb beef tripe (byenda)', amount: 600, unit: 'g', aisle: 'protein', estUgx: 10000, prep: 'washed & chopped' },
        { id: 'tomatoes', name: 'Ripe tomatoes & tomato paste', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'grated' },
        { id: 'bell-peppers', name: 'Green & red bell peppers (hooho)', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'garlic-ginger', name: 'Onion, garlic, ginger & turmeric', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'minced' }
      ],
      steps: [
        { text: 'Scrub cleaned honeycomb tripe thoroughly in warm water rubbed with juice of 1 lime (or 1 tablespoon vinegar), rinse twice, trim excess fat, and cut into neat bite-sized squares.' },
        { text: 'Place tripe in a heavy pot with 4 cups water, 4 slices fresh ginger, 2 smashed garlic cloves, and 1 teaspoon salt. Boil covered over medium-low heat for 45 minutes (or 20 minutes in a pressure cooker) until tender when pierced with a fork; reserve 1 cup of the savory broth.', timerMin: 45 },
        { text: 'In a wide sufuria over medium heat, saute 1 diced onion in 1 teaspoon oil for 4 minutes until soft; stir in 2 minced garlic cloves, 1/2 teaspoon turmeric, 1/2 teaspoon cumin, and 1 tablespoon tomato paste for 1 minute, then add grated tomatoes and simmer 5 minutes until thick and glossy.' },
        { text: 'Fold in the tender tripe, diced green and red bell peppers, and 3/4 cup reserved broth; simmer covered on low heat for 10 minutes until peppers soften slightly and gravy clings richly to every piece. Taste for salt and finish with fresh coriander.', timerMin: 10 }
      ],
      ugandaTip: 'Rinse tripe with lime juice or vinegar before boiling, then serve hot with steamed matooke, posho, or rice.'
    },
    {
      id: 'garlic-broccoli-greenbean-skillet',
      title: '15-Min Garlic Broccoli, French Beans & Bell Pepper Stir-Fry',
      subtitle: 'Bright crisp-tender green broccoli florets, French beans, and sweet orange peppers with garlic',
      cuisine: 'Mediterranean',
      category: 'quick',
      image: './images/garlic-broccoli-greenbean-skillet.jpg',
      prepMinutes: 6,
      cookMinutes: 7,
      totalMinutes: 13,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Flash-sauteing vibrant broccoli, green beans, and sweet bell peppers locks in vitamin C, fiber, and antioxidants.',
      nutrition: { kcal: 155, protein: '6g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'broccoli', name: 'Fresh broccoli florets', amount: 2, unit: 'cups', aisle: 'greens', estUgx: 3500, prep: 'trimmed bite-sized' },
        { id: 'green-beans', name: 'Fresh French green beans', amount: 150, unit: 'g', aisle: 'produce', estUgx: 2000, prep: 'topped & tailed' },
        { id: 'bell-peppers', name: 'Yellow & orange bell peppers & onion', amount: 1.5, unit: 'pcs', aisle: 'produce', estUgx: 1800, prep: 'sliced' },
        { id: 'garlic', name: 'Garlic cloves, olive oil & lemon', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 700, prep: 'minced' }
      ],
      steps: [
        { text: 'Cut broccoli into small even florets (peel and slice the tender stem too — it is sweet and crunchy), top-and-tail French green beans, slice yellow/orange bell peppers into strips, and thinly slice 3 garlic cloves.' },
        { text: 'Heat 2 teaspoons olive oil in a wide skillet over medium-high heat; toss sliced onion, French beans, and broccoli with 2 tablespoons water and a pinch of salt, covering with a lid for 3 minutes to steam-sear until bright emerald green.', timerMin: 3 },
        { text: 'Uncover so any remaining water evaporates, then add sliced bell peppers, sliced garlic, and 1/4 teaspoon cracked black pepper; stir-fry briskly over high heat for 3 minutes until peppers are tender-crisp and garlic is fragrant (do not burn garlic).', timerMin: 3 },
        { text: 'Take off heat immediately, squeeze fresh lemon juice over top, taste for salt, and serve hot while vibrant and crunchy.' }
      ],
      ugandaTip: 'Top with 2 poached eggs or pan-seared chicken strips for a quick, filling high-protein weeknight dinner.'
    },
    {
      id: 'honey-garlic-chicken-potatoes-carrots',
      title: 'Honey-Garlic Chicken Thighs, Roasted Potatoes & Carrots',
      subtitle: 'Caramelized golden skinless chicken thighs baked in one pan with baby Irish potatoes and carrots',
      cuisine: 'Mediterranean',
      category: 'slow',
      image: './images/honey-garlic-chicken-potatoes-carrots.jpg',
      prepMinutes: 10,
      cookMinutes: 35,
      totalMinutes: 45,
      servings: 3,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Using just 1 tablespoon natural Ugandan forest honey with garlic, soy, and thyme glazes lean chicken without sticky sugary sauces.',
      nutrition: { kcal: 420, protein: '32g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Skinless bone-in chicken thighs', amount: 500, unit: 'g', aisle: 'protein', estUgx: 11000, prep: 'patted dry' },
        { id: 'irish-potatoes', name: 'Baby Irish potatoes & carrots', amount: 450, unit: 'g', aisle: 'produce', estUgx: 3000, prep: 'halved & sliced' },
        { id: 'garlic', name: 'Fresh garlic cloves & thyme', amount: 4, unit: 'cloves', aisle: 'pantry', estUgx: 700, prep: 'crushed' },
        { id: 'honey-soy', name: 'Natural honey & light soy glaze', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 900, prep: 'whisked (1 tbsp each)' }
      ],
      steps: [
        { text: 'Preheat oven to 200°C / 390°F. Pat chicken thighs completely dry with paper towel (helps them brown instead of steam). Halve baby Irish potatoes and cut carrots into thick 4 cm batons so they finish at the exact same time as the chicken.' },
        { text: 'Toss potatoes and carrots in a roasting dish with 2 teaspoons oil, 1/2 teaspoon salt, black pepper, and half the dried thyme; nestle chicken thighs in the center seasoned with 1/2 teaspoon salt, paprika, and remaining thyme.' },
        { text: 'Roast uncovered for 25 minutes until chicken is nearly cooked through and potatoes are golden at the edges. Meanwhile, whisk 1 tablespoon honey, 1 tablespoon light soy sauce, 4 minced garlic cloves, and 1 tablespoon warm water.', timerMin: 25 },
        { text: 'Spoon the honey-garlic glaze evenly over the chicken thighs and roast 10 minutes more until glossy, sticky-golden, and potatoes are fork-tender. Rest 5 minutes before serving with pan juices.', timerMin: 10 }
      ],
      ugandaTip: 'No oven? Sear thighs in a covered heavy sufuria first, then glaze and simmer gently beside steamed potatoes and carrots.'
    },
    {
      id: 'ugandan-beef-potato-carrot-pea-stew',
      title: 'Slow-Simmered Beef Chunks, Irish Potato & Carrot Stew',
      subtitle: 'Hearty comfort pot of tender braised lean beef cubes, Irish potatoes, sweet carrots, and peas',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/ugandan-beef-potato-carrot-pea-stew.jpg',
      prepMinutes: 12,
      cookMinutes: 50,
      totalMinutes: 62,
      servings: 4,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Trimmed lean beef simmered slowly with nutrient-rich potatoes, carrots, and peas creates rich comfort without heavy thickeners.',
      nutrition: { kcal: 390, protein: '31g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-steak', name: 'Lean boneless beef chunks', amount: 500, unit: 'g', aisle: 'protein', estUgx: 12500, prep: 'trimmed & cubed' },
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 4, unit: 'medium', aisle: 'produce', estUgx: 2500, prep: 'peeled & chunked' },
        { id: 'carrots', name: 'Carrots & green garden peas', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 1800, prep: 'sliced' },
        { id: 'tomatoes', name: 'Onion, garlic, tomato & rosemary', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1200, prep: 'chopped' }
      ],
      steps: [
        { text: 'Trim visible fat from beef and cut into uniform 3 cm cubes; season with 1 teaspoon salt and 1/2 teaspoon black pepper. Heat a heavy pot over medium-high heat with 1 teaspoon oil and sear beef cubes undisturbed for 5 minutes until deeply browned on the edges.', timerMin: 5 },
        { text: 'Lower heat to medium; stir in 1 diced onion, 3 minced garlic cloves, 1/2 teaspoon dried rosemary (or 1 fresh sprig), and 2 grated tomatoes, cooking 4 minutes until tomatoes thicken around the meat.' },
        { text: 'Pour in 2.5 cups hot water, scrape up browned flavor bits from the bottom of the pot, cover tightly, and simmer gently on low heat for 30 minutes until beef starts turning tender.', timerMin: 30 },
        { text: 'Add chunked Irish potatoes and thick carrot rounds; simmer covered 15 minutes until fork-tender, then fold in green peas for the final 4 minutes so they stay bright green. Crush 2 potato cubes gently against the pot side to thicken the gravy naturally.', timerMin: 18 }
      ],
      ugandaTip: 'Crush 2 cooked potato cubes slightly against the pot wall to thicken the savory gravy naturally.'
    },
    {
      id: 'local-chicken-ntula-tomato-stew',
      title: 'Local Chicken, Tomato & Garden Egg (Ntula) Stew',
      subtitle: 'Rich Ugandan free-range chicken stew simmered with ripe tomatoes, red chili, and bitter garden eggs',
      cuisine: 'Ugandan',
      category: 'onepot',
      image: './images/local-chicken-ntula-tomato-stew.jpg',
      prepMinutes: 10,
      cookMinutes: 40,
      totalMinutes: 50,
      servings: 4,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Garden eggs (ntula) add soluble fiber and gentle blood-sugar-friendly bitterness to deeply flavorful local chicken broth.',
      nutrition: { kcal: 360, protein: '32g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Free-range (kuroiler/local) chicken pieces', amount: 650, unit: 'g', aisle: 'protein', estUgx: 14000, prep: 'jointed' },
        { id: 'ntula', name: 'Green African garden eggs (ntula)', amount: 8, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'washed & whole/halved' },
        { id: 'tomatoes', name: 'Ripe tomatoes, red onion & green chili', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'blended or grated' },
        { id: 'ginger-garlic', name: 'Fresh ginger, garlic & thyme', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 800, prep: 'minced' }
      ],
      steps: [
        { text: 'Rub jointed free-range chicken pieces with 1 teaspoon salt, 1 tablespoon grated ginger, 3 minced garlic cloves, and 1/2 teaspoon dried thyme; rest 5 minutes while you grate or blend ripe tomatoes with red onion.' },
        { text: 'Place chicken in a heavy dry pot over medium-high heat and sear 5 to 6 minutes, turning until lightly golden and fragrant with ginger-garlic.', timerMin: 6 },
        { text: 'Pour in the blended tomato-onion mixture and 2 cups hot water; cover and simmer over medium-low heat for 25 minutes (add 10 minutes extra if using tougher older local chicken) until chicken is nearly tender.', timerMin: 25 },
        { text: 'Remove stems from washed garden eggs (ntula) and drop them whole into the simmering stew with optional whole green chili; cover and cook 12 to 15 minutes until ntula are soft enough to mash gently with a fork and broth is rich ruby-red.', timerMin: 15 }
      ],
      ugandaTip: 'Mash 2 softened ntula directly on your plate into steamed matooke or posho for authentic Ugandan flavor.'
    },
    {
      id: 'soy-glazed-beef-baked-chips-slaw',
      title: 'Soy-Glazed Beef Strips, Crispy Baked Chips & Coleslaw',
      subtitle: 'Tender peppered soy-glazed beef strips served beside golden oven fries and crunchy cabbage slaw',
      cuisine: 'Asian',
      category: 'slow',
      image: './images/soy-glazed-beef-baked-chips-slaw.jpg',
      prepMinutes: 12,
      cookMinutes: 25,
      totalMinutes: 37,
      servings: 2,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Oven-baked potato chips plus a generous raw cabbage-carrot slaw turn a takeout favorite into a balanced, lighter plate.',
      nutrition: { kcal: 470, protein: '30g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-steak', name: 'Lean beef sirloin strips', amount: 300, unit: 'g', aisle: 'protein', estUgx: 8500, prep: 'thinly sliced' },
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 2, unit: 'large', aisle: 'produce', estUgx: 1500, prep: 'cut into chips' },
        { id: 'cabbage', name: 'Shredded cabbage & grated carrots (coleslaw)', amount: 2, unit: 'cups', aisle: 'greens', estUgx: 1500, prep: 'dressed with yogurt & lime' },
        { id: 'soy-ginger', name: 'Light soy sauce, garlic, ginger & onion', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 900, prep: 'whisked' }
      ],
      steps: [
        { text: 'Preheat oven to 215°C / 420°F. Cut Irish potatoes into finger-thick chips, soak in cold water 5 minutes, pat completely dry with a towel, toss with 1 teaspoon oil and 1/2 teaspoon salt, and spread in a single layer on a lined tray.' },
        { text: 'Bake chips for 22 to 25 minutes (flipping once halfway) until crisp and golden-brown outside and fluffy inside.', timerMin: 25 },
        { text: 'While chips bake, toss finely shredded cabbage and grated carrots with 2 tablespoons plain yogurt, squeeze of fresh lime, and black pepper to make light coleslaw; chill until serving.' },
        { text: 'Heat 1 teaspoon oil in a smoking-hot skillet over high heat; sear thinly sliced beef strips (sliced against the grain) with sliced onion, 2 minced garlic cloves, and 1 teaspoon grated ginger for 3 to 4 minutes. Splash in 1.5 tablespoons light soy sauce and lime juice, toss 30 seconds until glossy, and plate beside hot chips and cool coleslaw.', timerMin: 4 }
      ],
      ugandaTip: 'Skip heavy bottled mayonnaise in coleslaw — toss cabbage & carrots with 2 tablespoons plain yogurt, lime juice, and black pepper.'
    },
    {
      id: 'scrambled-eggs-avocado-seared-tomatoes',
      title: 'Creamy Scrambled Eggs, Avocado & Seared Cherry Tomatoes',
      subtitle: 'Soft pasture-egg scramble folded with chives alongside ripe avocado slices and blistered tomatoes',
      cuisine: 'Mediterranean',
      category: 'breakfast',
      image: './images/scrambled-eggs-avocado-seared-tomatoes.jpg',
      prepMinutes: 4,
      cookMinutes: 6,
      totalMinutes: 10,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Low-carb, high-satiety morning plate packed with choline, healthy monounsaturated fats, and lycopene.',
      nutrition: { kcal: 345, protein: '20g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'eggs', name: 'Fresh farm eggs', amount: 3, unit: 'pcs', aisle: 'protein', estUgx: 1800, prep: 'beaten gently' },
        { id: 'avocado', name: 'Ripe avocado', amount: 0.5, unit: 'large', aisle: 'produce', estUgx: 1000, prep: 'sliced' },
        { id: 'tomatoes', name: 'Cherry or firm small tomatoes', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 1000, prep: 'halved' },
        { id: 'herbs', name: 'Fresh parsley or spring onion chives', amount: 1, unit: 'tbsp', aisle: 'greens', estUgx: 300, prep: 'chopped' }
      ],
      steps: [
        { text: 'Crack 3 farm eggs into a bowl with a pinch of salt, cracked black pepper, and 1 tablespoon milk or water; whisk lightly until yolks and whites just blend (over-whisking makes eggs airy and dry).' },
        { text: 'Heat 1/2 teaspoon olive oil in a nonstick skillet over medium-high heat; place halved cherry tomatoes cut-side down undisturbed for 2 minutes until lightly blistered and sweet, then slide onto your warm breakfast plate.', timerMin: 2 },
        { text: 'Lower burner to gentle low heat, wipe pan quickly, add 1/2 teaspoon oil, and pour in the eggs. Let sit 20 seconds, then gently sweep a spatula across the bottom every few seconds for 2 to 3 minutes until soft, creamy, glossy curds form (pull off heat while still slightly shiny).', timerMin: 3 },
        { text: 'Fan sliced ripe avocado next to the blistered tomatoes, season avocado with a pinch of salt and lime squeeze, pile warm creamy eggs alongside, and finish with chopped parsley or chives.' }
      ],
      ugandaTip: 'A pinch of cracked black pepper and lime squeeze over sliced avocado keeps it bright and fresh.'
    },
    {
      id: 'soft-boiled-eggs-avocado-tomato-bowl',
      title: 'Soft-Boiled Eggs, Avocado & Herb Tomato Breakfast Plate',
      subtitle: 'Jammy 7-minute farm eggs plated with ripe avocado wedges and sesame-kissed fresh tomato salad',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/soft-boiled-eggs-avocado-tomato-bowl.jpg',
      prepMinutes: 4,
      cookMinutes: 8,
      totalMinutes: 12,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Zero added cooking oil and zero refined carbs — an effortless clean breakfast that keeps hunger away until lunch.',
      nutrition: { kcal: 330, protein: '18g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'eggs', name: 'Fresh farm eggs', amount: 2.5, unit: 'pcs', aisle: 'protein', estUgx: 1500, prep: 'soft-boiled 7 min' },
        { id: 'avocado', name: 'Ripe avocado', amount: 0.5, unit: 'large', aisle: 'produce', estUgx: 1000, prep: 'sliced' },
        { id: 'tomatoes', name: 'Firm ripe tomatoes', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 1000, prep: 'wedges' },
        { id: 'simsim', name: 'Toasted simsim seeds & black pepper', amount: 1, unit: 'tsp', aisle: 'pantry', estUgx: 300, prep: 'garnish' }
      ],
      steps: [
        { text: 'Bring a small saucepan of water to a gentle rolling boil over medium-high heat. Carefully lower eggs in with a spoon so shells do not crack, then reduce slightly to a steady simmer and cook for exactly 7 minutes for jammy golden yolks (9 minutes if you prefer firm yolks).', timerMin: 7 },
        { text: 'Transfer eggs immediately into a bowl of cold tap water for 2 minutes — this stops cooking instantly and makes shells peel off cleanly without tearing the whites.' },
        { text: 'While eggs cool, cut firm ripe tomatoes into bite-sized wedges and toss in a small bowl with a squeeze of fresh lime juice, pinch of sea salt, and finely chopped coriander; slice half a ripe avocado into neat wedges.' },
        { text: 'Peel and halve the warm eggs lengthwise, arrange beside avocado and tomato salad, and finish with generous cracked black pepper and 1 teaspoon toasted simsim seeds.' }
      ],
      ugandaTip: 'Boil 6 extra eggs on Sunday night so this nutritious 3-minute breakfast is ready anytime during the week.'
    },
    {
      id: 'yogurt-granola-banana-berry-bowl',
      title: 'Yogurt, Crunchy Granola, Banana & Berry Chia Bowl',
      subtitle: 'Thick plain unsweetened yogurt topped with toasted oat granola, sliced bogoya banana, berries, and chia',
      cuisine: 'Mediterranean',
      category: 'breakfast',
      image: './images/yogurt-granola-banana-berry-bowl.jpg',
      prepMinutes: 5,
      cookMinutes: 0,
      totalMinutes: 5,
      servings: 1,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Gut-friendly plain yogurt and chia seeds balance the natural fruit sweetness for sustained morning focus.',
      nutrition: { kcal: 325, protein: '13g', fiber: '7g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'yogurt', name: 'Thick plain unsweetened yogurt', amount: 1, unit: 'cup', aisle: 'protein', estUgx: 2500, prep: 'chilled' },
        { id: 'oats', name: 'Low-sugar toasted oat granola', amount: 0.25, unit: 'cup', aisle: 'grains', estUgx: 1500, prep: 'crunchy topping' },
        { id: 'banana', name: 'Ripe yellow banana & fresh berries (or mango)', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 2000, prep: 'sliced' },
        { id: 'chia-seeds', name: 'Chia seeds', amount: 1, unit: 'tsp', aisle: 'pantry', estUgx: 500, prep: 'sprinkled' }
      ],
      steps: [
        { text: 'Give chilled plain unsweetened yogurt a quick stir with a pinch of ground cinnamon (or 1/4 teaspoon vanilla) so it becomes smooth and creamy, then swirl into a wide shallow bowl.' },
        { text: 'Slice ripe yellow bogoya banana into even coins and hull and quarter fresh strawberries (or cube sweet ripe mango) while rinsing blueberries gently.' },
        { text: 'Arrange banana coins, berries, and 1/4 cup crunchy oat granola in neat rows over the yogurt so every spoonful gets both fruit and crunch.' },
        { text: 'Scatter 1 teaspoon chia seeds across the top and eat right away while the granola stays crisp.' }
      ],
      ugandaTip: 'In Kampala fruit season, diced sweet strawberries from Wakiso or ripe mango cubes & passion pulp work wonderfully with crunchy granola.'
    },
    {
      id: 'warm-banana-walnut-honey-oatmeal',
      title: 'Warm Rolled Oats, Banana, Walnuts & Honey Bowl',
      subtitle: 'Comforting warm oat bowl crowned with ripe sliced banana, crunchy walnuts/g-nuts, and a cinnamon-honey drizzle',
      cuisine: 'Mediterranean',
      category: 'breakfast',
      image: './images/warm-banana-walnut-honey-oatmeal.jpg',
      prepMinutes: 3,
      cookMinutes: 7,
      totalMinutes: 10,
      servings: 1,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Beta-glucan oat fiber paired with crunchy nuts slows glucose release and keeps cholesterol healthy.',
      nutrition: { kcal: 340, protein: '10g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'oats', name: 'Whole rolled oats', amount: 0.5, unit: 'cup', aisle: 'grains', estUgx: 1500, prep: 'dry' },
        { id: 'cow-milk', name: 'Cow milk or soya milk', amount: 1, unit: 'cup', aisle: 'protein', estUgx: 1500, prep: 'for cooking' },
        { id: 'banana', name: 'Ripe sweet banana', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 500, prep: 'sliced' },
        { id: 'nuts', name: 'Crushed walnuts or roasted g-nuts & honey', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 1500, prep: 'topping' }
      ],
      steps: [
        { text: 'Combine 1/2 cup whole rolled oats, 1 cup cow or soya milk (or half milk, half water for a lighter bowl), 1/4 teaspoon ground cinnamon, and a tiny pinch of salt in a small saucepan.' },
        { text: 'Bring to a gentle simmer over medium heat, then lower to medium-low and cook 6 to 7 minutes, stirring often so oats do not stick, until thick, creamy, and tender.', timerMin: 7 },
        { text: 'While oats simmer, slice 1 ripe banana into neat coins and roughly chop walnuts or roasted groundnuts.' },
        { text: 'Spoon warm oats into a bowl (add a splash of cold milk if you prefer a looser porridge), arrange banana slices and chopped nuts over top, and finish with just 1 teaspoon raw honey.' }
      ],
      ugandaTip: 'Stirring 1 tablespoon plain yogurt into hot cooked oats makes the porridge extra velvety.'
    },
    {
      id: 'spinach-celery-apple-ginger-juice',
      title: 'Spinach, Celery, Green Apple & Ginger Magic Juice',
      subtitle: 'Crisp emerald morning tonic pressed from baby spinach, celery, cucumber, green apple, ginger, and chia',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/spinach-celery-apple-ginger-juice.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Alkalizing green spinach, crisp celery, and ginger wake up digestion and hydrate cleanly with minimal natural sugar.',
      nutrition: { kcal: 72, protein: '2g', fiber: '3g', sugar: 'Low' },
      ingredients: [
        { id: 'spinach', name: 'Fresh baby spinach leaves', amount: 2, unit: 'handfuls', aisle: 'greens', estUgx: 1000, prep: 'washed' },
        { id: 'celery', name: 'Celery stalks & cucumber', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'chopped' },
        { id: 'apple', name: 'Crisp green apple', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1500, prep: 'cored' },
        { id: 'ginger-lemon', name: 'Fresh ginger, lemon & soaked chia seeds', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'peeled & juiced' }
      ],
      steps: [
        { text: 'Wash baby spinach, celery stalks, and cucumber well; core the green apple (leave green skin on for fresh flavor), peel a 2 cm thumb of ginger, and chop everything into small pieces.' },
        { text: 'Add cucumber, chopped green apple, and 1.25 cups cold water to the bottom of the blender first, then pack celery, spinach, and sliced ginger on top.' },
        { text: 'Blend on high speed for 45 to 60 seconds until bright emerald-green and completely smooth with no leafy bits.' },
        { text: 'Strain through a fine sieve into two chilled glasses (or leave unstrained for extra fiber), stir in fresh lemon juice and 1 teaspoon chia seeds, and drink fresh.' }
      ],
      ugandaTip: 'Tender young dodo or kale works effortlessly whenever baby spinach is unavailable at the market.'
    },
    {
      id: 'apple-ginger-lemon-juice',
      title: 'Crisp Apple, Ginger & Lemon Morning Juice',
      subtitle: 'Bright zesty cold-pressed style blend of sweet-tart apples, fiery fresh ginger, and lemon juice',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/apple-ginger-lemon-juice.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Crisp apple pectin paired with warming ginger root and vitamin-C-rich lemon kickstarts digestion without added sugar.',
      nutrition: { kcal: 78, protein: '1g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'apple', name: 'Crisp green or red apples', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 3500, prep: 'cored & chopped' },
        { id: 'ginger', name: 'Fresh ginger root', amount: 1.5, unit: 'thumbs', aisle: 'produce', estUgx: 600, prep: 'peeled & sliced' },
        { id: 'lemon', name: 'Fresh lemons', amount: 1.5, unit: 'pcs', aisle: 'produce', estUgx: 800, prep: 'juiced' }
      ],
      steps: [
        { text: 'Wash 3 crisp apples well (keep skins on for extra antioxidants), core them to remove seeds, and dice into 2 cm chunks. Peel fresh ginger root and slice thinly across the fibers.' },
        { text: 'Place chopped apples, sliced ginger, and 1.25 cups chilled filtered water in a blender; blend on high for 45 to 60 seconds until completely smooth and frothy.' },
        { text: 'Pour through a fine mesh sieve or clean muslin cloth into a jug, pressing the apple pulp firmly with the back of a spoon to release all the golden juice.' },
        { text: 'Stir in freshly squeezed juice of 1.5 lemons (prevents oxidation and keeps the taste zesty and bright), pour over ice, and garnish with a thin lemon wheel.' }
      ],
      ugandaTip: 'Leave the apple skins on before blending for extra polyphenols and a brighter golden hue.'
    },
    {
      id: 'pineapple-ginger-turmeric-carrot-juice',
      title: 'Pineapple, Ginger, Turmeric & Carrot Anti-Inflammatory Juice',
      subtitle: 'Vibrant golden-orange tonic blending sweet pineapple, beta-carotene carrots, turmeric, and ginger',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/pineapple-ginger-turmeric-carrot-juice.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Fresh pineapple bromelain, curcumin from turmeric, and carrot antioxidants make a soothing anti-inflammatory tonic.',
      nutrition: { kcal: 96, protein: '1g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'pineapple', name: 'Ripe sweet Ugandan pineapple', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'peeled & cubed' },
        { id: 'carrots', name: 'Fresh carrots', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 1200, prep: 'scrubbed & chopped' },
        { id: 'turmeric-ginger', name: 'Fresh turmeric (or 1 tsp ground) & ginger root', amount: 1, unit: 'set', aisle: 'produce', estUgx: 800, prep: 'peeled' },
        { id: 'lemon', name: 'Lemon juice & tiny pinch black pepper', amount: 1, unit: 'pc', aisle: 'pantry', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Peel ripe pineapple and cut into 2 cm cubes; scrub carrots and slice into thin coins so they blend cleanly; peel and slice fresh ginger and fresh turmeric root (or measure 1 teaspoon ground turmeric).' },
        { text: 'Add juicy pineapple cubes to the blender first with 1 cup cold water, then top with sliced carrots, ginger, and turmeric.' },
        { text: 'Blend on high speed for 60 seconds until vivid deep orange and completely smooth.' },
        { text: 'Strain through a fine mesh strainer into a pitcher, stir in fresh lemon juice plus a tiny pinch of freshly cracked black pepper (black pepper helps your body absorb turmeric curcumin), and serve chilled over ice.' }
      ],
      ugandaTip: 'Add a squeeze of fresh lime or passion fruit pulp at the end for an unmistakable Kampala market twist.'
    },
    {
      id: 'ugandan-tangawizi-masala-chai',
      title: 'Ugandan Ginger, Cardamom & Clove Spiced Chai',
      subtitle: 'Creamy comforting East African milk tea simmered with crushed tangawizi, green cardamom, and cinnamon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/spiced-milk-chai-tea.jpg',
      prepMinutes: 3,
      cookMinutes: 7,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Naturally sweet warm cow or soya milk plus crushed ginger and cardamom let you skip refined sugar altogether.',
      nutrition: { kcal: 95, protein: '5g', fiber: '0g', sugar: 'Low' },
      ingredients: [
        { id: 'cow-milk', name: 'Fresh cow milk or unsweetened soya milk', amount: 1.5, unit: 'cups', aisle: 'protein', estUgx: 2000, prep: 'chilled' },
        { id: 'ginger', name: 'Fresh ginger (tangawizi)', amount: 1, unit: 'thumb', aisle: 'produce', estUgx: 400, prep: 'crushed' },
        { id: 'chai-spices', name: 'Cardamom pods, cinnamon bark, cloves & black tea', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 600, prep: 'lightly bruised' }
      ],
      steps: [
        { text: 'Lightly crush 1 thumb of washed fresh ginger (tangawizi) and crack open 3 green cardamom pods with the flat of a knife so the fragrant inner seeds infuse into the tea.' },
        { text: 'Place 1 cup water, crushed ginger, cardamom pods, 2 whole cloves, and a small piece of cinnamon bark in a saucepan; bring to a boil and simmer 3 minutes until spicy and aromatic.', timerMin: 3 },
        { text: 'Stir in 1.5 teaspoons black tea leaves (or 2 tea bags) and boil 1 minute until deep amber, then pour in 1.5 cups cow milk or unsweetened soya milk.' },
        { text: 'Simmer gently over medium-low heat for 3 minutes, stirring so milk rises into a light froth without boiling over; strain through a fine sieve into warm mugs and enjoy hot.', timerMin: 3 }
      ],
      ugandaTip: 'Use soya milk with just a pinch of cinnamon for a super-light dairy-free evening cup.'
    },
    {
      id: 'fresh-kisubi-lemongrass-mint-tea',
      title: 'Hot Lemongrass (Kisubi), Fresh Mint & Ginger Tea',
      subtitle: 'Caffeine-free soothing Kampala garden infusion steeped with lemongrass stalks, mint, and lemon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/kisubi-lemongrass-mint-tea.jpg',
      prepMinutes: 4,
      cookMinutes: 6,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Zero calories and caffeine-free — calms digestion after dinner while reducing evening cravings.',
      nutrition: { kcal: 8, protein: '0g', fiber: '0g', sugar: 'Zero' },
      ingredients: [
        { id: 'lemongrass', name: 'Fresh lemongrass (kisubi) stalks', amount: 2, unit: 'stalks', aisle: 'greens', estUgx: 500, prep: 'bruised & tied' },
        { id: 'mint', name: 'Fresh garden mint leaves', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 500, prep: 'rinsed' },
        { id: 'ginger-lemon', name: 'Sliced fresh ginger & lemon wedge', amount: 1, unit: 'set', aisle: 'produce', estUgx: 600, prep: 'sliced' }
      ],
      steps: [
        { text: 'Rinse fresh lemongrass (kisubi) stalks well, bash the thicker lower ends lightly with the back of a knife to release citrus oils, and fold or tie them into a loose knot.' },
        { text: 'Place knotted lemongrass and 4 thin slices of fresh ginger in a small pot with 2.5 cups water; bring to a boil, then cover and simmer gently for 5 minutes until fragrant and pale golden.', timerMin: 5 },
        { text: 'Turn off the heat completely, drop in a handful of rinsed fresh garden mint leaves, and cover for 2 minutes (steeping mint off-heat keeps it bright and sweet instead of grassy).' },
        { text: 'Strain into warm mugs, add a bright squeeze of fresh lemon juice, and sip warm after lunch or dinner.' }
      ],
      ugandaTip: 'Grow a pot of kisubi and mint on your kitchen veranda — both thrive effortlessly year-round in Uganda.'
    },
    {
      id: 'iced-mint-green-tea-lime',
      title: 'Chilled Green Tea, Fresh Mint & Lime Hydration Cooler',
      subtitle: 'Crisp antioxidant green tea steeped warm, chilled over ice with crushed garden mint and lime',
      cuisine: 'Asian',
      category: 'juices',
      image: './images/iced-mint-green-tea-lime.jpg',
      prepMinutes: 6,
      cookMinutes: 3,
      totalMinutes: 9,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Green tea catechins paired with lime vitamin C hydrate cleanly and gently lift afternoon focus without jitters.',
      nutrition: { kcal: 10, protein: '0g', fiber: '0g', sugar: 'Zero' },
      ingredients: [
        { id: 'green-tea', name: 'Green tea bags or loose leaves', amount: 2, unit: 'bags', aisle: 'pantry', estUgx: 800, prep: 'steep 3 min only' },
        { id: 'mint', name: 'Fresh mint leaves & thin cucumber slices', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 700, prep: 'lightly crushed' },
        { id: 'lime', name: 'Fresh lime', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Boil 2 cups fresh water, then remove from heat and let it cool for 1 to 2 full minutes (around 80°C) — pouring boiling water straight onto green tea scorches the leaves and turns it bitter.' },
        { text: 'Add 2 green tea bags (or 2 teaspoons loose green tea) and steep for exactly 3 minutes, then lift out the bags cleanly without squeezing.', timerMin: 3 },
        { text: 'Let the green tea cool to room temperature (or pour over plenty of ice cubes in a jug), then lightly muddle fresh mint leaves and add thin cucumber ribbons.' },
        { text: 'Squeeze in juice of 1 fresh lime right before serving (vitamin C keeps green tea antioxidants active), stir well, and enjoy ice-cold.' }
      ],
      ugandaTip: 'Never boil green tea leaves directly — letting hot water cool 1 minute first keeps the flavor fresh and mellow.'
    },
    {
      id: 'cinnamon-clove-hibiscus-hot-tea',
      title: 'Warm Hibiscus, Clove, Ginger & Orange Peel Tea',
      subtitle: 'Deep ruby antioxidant herbal tea spiced gently with cloves, cinnamon bark, and citrus zest',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/cinnamon-clove-hibiscus-tea.jpg',
      prepMinutes: 4,
      cookMinutes: 8,
      totalMinutes: 12,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Rich in anthocyanin antioxidants, tart hibiscus naturally helps support healthy blood pressure without caffeine.',
      nutrition: { kcal: 14, protein: '0g', fiber: '0g', sugar: 'Zero' },
      ingredients: [
        { id: 'hibiscus', name: 'Dried red hibiscus petals (karkadeh/sobolo)', amount: 3, unit: 'tbsp', aisle: 'pantry', estUgx: 1000, prep: 'rinsed briefly' },
        { id: 'cloves-cinnamon', name: 'Whole cloves, cinnamon stick & ginger slices', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 600, prep: 'whole spices' },
        { id: 'orange', name: 'Fresh orange peel strip & lime juice', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 700, prep: 'washed peel' }
      ],
      steps: [
        { text: 'Give 3 tablespoons dried hibiscus petals a quick 5-second rinse in a sieve under cool water to remove any market dust; shave 1 thin strip of washed outer orange peel (avoiding bitter white pith).' },
        { text: 'Simmer 2.5 cups water with 4 thin slices fresh ginger, 3 whole cloves, 1 cinnamon stick, and the orange peel strip for 5 minutes until warmly spiced.', timerMin: 5 },
        { text: 'Turn off the heat, stir in rinsed hibiscus petals, cover with a lid, and steep for 4 to 5 minutes until deep crimson-ruby (steeping off-heat keeps hibiscus smooth and floral instead of sharply sour).', timerMin: 5 },
        { text: 'Strain cleanly into mugs, add a squeeze of fresh lime if desired, and enjoy piping hot in the evening or chilled over ice.' }
      ],
      ugandaTip: 'If tartness feels sharp at first, drop in 2 slices of fresh sweet pineapple while steeping instead of adding sugar.'
    },
    {
      id: 'mince-cabbage-pasta-soup',
      title: 'One-Pot Beef Mince, Cabbage & Pasta Soup',
      subtitle: 'Cozy savory tomato-herb broth simmered with lean beef mince, sweet cabbage ribbons, carrots, and short pasta',
      cuisine: 'Ugandan',
      category: 'onepot',
      image: './images/mince-cabbage-pasta-soup.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 4,
      tags: ['High-Protein', 'Light & Lean', 'Low-Sugar'],
      healthNote: 'Cooking pasta directly in a lean beef mince and cabbage vegetable broth creates a deeply comforting, fiber-rich one-pot meal.',
      nutrition: { kcal: 365, protein: '26g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-mince', name: 'Lean beef mince', amount: 350, unit: 'g', aisle: 'protein', estUgx: 8500, prep: 'fresh' },
        { id: 'cabbage', name: 'Fresh green cabbage', amount: 3, unit: 'cups', aisle: 'greens', estUgx: 1500, prep: 'coarsely shredded' },
        { id: 'pasta', name: 'Short macaroni, shells or broken spaghetti', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2000, prep: 'uncooked' },
        { id: 'tomatoes', name: 'Ripe tomatoes, carrots & onion', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2500, prep: 'diced & sliced' },
        { id: 'garlic-thyme', name: 'Garlic, ginger, thyme & fresh coriander', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'minced' }
      ],
      steps: [
        { text: 'Brown lean beef mince in a dry heavy pot over medium-high heat for 5 minutes until crumbly, draining off any excess fat.', timerMin: 5 },
        { text: 'Stir in diced onion, minced garlic, ginger, thyme, paprika pinch, and tomatoes; cook 4 minutes until saucy.', timerMin: 4 },
        { text: 'Add sliced carrots, shredded green cabbage, salt, black pepper, and 4.5 cups water; cover and simmer gently for 10 minutes.', timerMin: 10 },
        { text: 'Stir in uncooked short pasta and simmer uncovered 8 to 10 minutes until pasta is tender and broth is rich; finish with fresh coriander.', timerMin: 9 }
      ],
      ugandaTip: 'If reheating leftovers the next day, add a splash of hot water since pasta continues absorbing the savory broth.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(BATCH3_RECIPES);
  }
})();
