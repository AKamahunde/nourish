(() => {
  const PANTRY_RECIPES = [
    {
      id: 'yogurt-chia-mango-parfait',
      title: 'Plain Yogurt, Chia Seeds & Mango Cinnamon Bowl',
      subtitle: 'Creamy probiotic plain yogurt layered with soaked chia seeds, mango, and warm spice',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/yogurt-chia-mango-parfait.jpg',
      prepMinutes: 5,
      cookMinutes: 0,
      totalMinutes: 5,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Plain yogurt probiotics plus chia omega-3 fiber keep digestion calm and fullness steady for hours.',
      nutrition: { kcal: 295, protein: '13g', fiber: '10g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 1, unit: 'cup', aisle: 'protein', estUgx: 2500, prep: 'chilled' },
        { id: 'chia-seeds', name: 'Chia seeds', amount: 1.5, unit: 'tbsp', aisle: 'grains', estUgx: 1000, prep: 'stirred in or soaked 5 min' },
        { id: 'mango', name: 'Ripe sweet mango or pawpaw', amount: 0.75, unit: 'cup', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'cinnamon-cardamom', name: 'Cinnamon & pinch of cardamom', amount: 0.5, unit: 'tsp', aisle: 'pantry', estUgx: 200, prep: 'warm spice pairing' },
        { id: 'simsim', name: 'Toasted simsim or crushed g-nuts', amount: 1, unit: 'tbsp', aisle: 'grains', estUgx: 400, prep: 'crunch topping' }
      ],
      steps: [
        { text: 'Stir chia seeds, cinnamon, and a tiny pinch of cardamom into chilled plain yogurt and let sit 5 minutes so chia begins to gel.' },
        { text: 'Top with diced sweet mango (or pawpaw) and toasted simsim or groundnuts for crunch.' }
      ],
      ugandaTip: 'Always pick plain unsweetened yogurt — ripe Ugandan mango gives all the sweetness you need.'
    },
    {
      id: 'overnight-chia-pineapple-pudding',
      title: 'Overnight Chia, Yogurt & Passion Fruit Pot',
      subtitle: 'Make-ahead chilled chia pudding layered with tangy Ugandan passion fruit and mint',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/overnight-chia-pineapple-pudding.jpg',
      prepMinutes: 5,
      cookMinutes: 0,
      totalMinutes: 5,
      servings: 1,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Soaking chia seeds overnight unlocks soluble fiber that supports gut health and steady energy.',
      nutrition: { kcal: 270, protein: '10g', fiber: '12g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'chia-seeds', name: 'Chia seeds', amount: 2.5, unit: 'tbsp', aisle: 'grains', estUgx: 1500, prep: 'whole' },
        { id: 'yogurt', name: 'Plain yogurt + splash milk/water', amount: 0.75, unit: 'cup', aisle: 'protein', estUgx: 2000, prep: 'whisked smooth' },
        { id: 'passion-fruit', name: 'Fresh passion fruits', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 800, prep: 'pulp scooped' },
        { id: 'banana', name: 'Sweet banana slices', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'sliced' },
        { id: 'mint', name: 'Fresh mint & cinnamon', amount: 1, unit: 'pinch', aisle: 'greens', estUgx: 300, prep: 'garnish' }
      ],
      steps: [
        { text: 'Stir chia seeds into plain yogurt thinned with 3 tablespoons milk or water, plus cinnamon. Rest 5 minutes, stir again so no clumps form, then chill overnight (or 30 minutes).' },
        { text: 'Top with sliced banana, fresh passion fruit pulp, and torn mint leaves before eating.' }
      ],
      ugandaTip: 'Make 3 jars on Sunday night for grab-and-go weekday breakfasts.'
    },
    {
      id: 'black-bean-avocado-lime-salad',
      title: 'Cumin-Lime Black Bean, Avocado & Mango Salad',
      subtitle: 'Fiber-packed black beans tossed with roasted cumin, coriander, tomatoes, and lime',
      cuisine: 'Mediterranean',
      category: 'salads',
      image: './images/black-bean-avocado-lime-salad.jpg',
      prepMinutes: 12,
      cookMinutes: 0,
      totalMinutes: 12,
      servings: 2,
      tags: ['High-Protein', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Black beans are loaded with antioxidants, plant protein, and resistant starch for gut health.',
      nutrition: { kcal: 355, protein: '15g', fiber: '13g', sugar: 'Low' },
      ingredients: [
        { id: 'black-beans', name: 'Cooked black beans', amount: 2, unit: 'cups', aisle: 'grains', estUgx: 2500, prep: 'rinsed & drained' },
        { id: 'avocado', name: 'Ripe avocado', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1500, prep: 'cubed' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'red-onion', name: 'Red onion', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'finely diced' },
        { id: 'cumin-coriander', name: 'Ground cumin, paprika & fresh coriander', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 700, prep: 'herb & spice pairing' },
        { id: 'lime', name: 'Fresh lime & 1 tsp olive oil', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Toss rinsed black beans with ground cumin, smoked or sweet paprika, garlic pinch, lime juice, and 1 teaspoon oil so beans absorb the spices.' },
        { text: 'Fold in diced tomatoes, soaked red onion, chopped coriander, and avocado cubes just before serving.' }
      ],
      ugandaTip: 'Black beans pair naturally with cumin, garlic, lime, and coriander — skip heavy sauces completely.'
    },
    {
      id: 'spiced-yogurt-herb-chicken',
      title: 'Yogurt, Turmeric & Garlic Herb Chicken',
      subtitle: 'Plain yogurt tenderizes lean chicken with turmeric, cumin, garlic, and cucumber-mint sauce',
      cuisine: 'Mediterranean',
      category: 'quick',
      image: './images/spiced-yogurt-herb-chicken.jpg',
      prepMinutes: 8,
      cookMinutes: 10,
      totalMinutes: 18,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Using plain yogurt as a marinade keeps lean chicken juicy with almost zero oil while adding gut-friendly herbs.',
      nutrition: { kcal: 340, protein: '36g', fiber: '3g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Skinless chicken breast', amount: 350, unit: 'g', aisle: 'protein', estUgx: 8500, prep: 'cut in strips' },
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 0.5, unit: 'cup', aisle: 'protein', estUgx: 1500, prep: 'split for marinade & mint dip' },
        { id: 'turmeric-cumin', name: 'Turmeric, cumin, garlic & ginger', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'spiced paste' },
        { id: 'cucumber-mint', name: 'Grated cucumber & fresh mint', amount: 0.5, unit: 'cup', aisle: 'greens', estUgx: 800, prep: 'stirred into remaining yogurt' },
        { id: 'lemon', name: 'Fresh lemon', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Coat chicken strips in half the plain yogurt mixed with garlic, ginger, turmeric, cumin, lemon juice, and salt.' },
        { text: 'Sear in a hot lightly oiled skillet for 4 minutes per side (8 minutes total) until golden-charred and cooked through.', timerMin: 8 },
        { text: 'Mix remaining plain yogurt with grated cucumber, chopped mint, lemon pinch, and salt as a cooling drizzle over the chicken and salad.' }
      ],
      ugandaTip: 'That savory cucumber-mint yogurt sauce (tzatziki/raita style) also tastes amazing over grilled tilapia or roasted sweet potatoes.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(PANTRY_RECIPES);
  }
})();
