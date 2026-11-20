(() => {
  const BREAKFAST_RECIPES = [
    {
      id: 'egg-sukuma-scramble',
      title: '10-Min Egg, Sukuma & Avocado Plate',
      subtitle: 'Nutrient-dense morning scramble with bright greens and ripe avocado',
      cuisine: 'Ugandan',
      category: 'breakfast',
      mealSlots: ['breakfast', 'lunch'],
      image: './images/egg-sukuma-scramble.jpg',
      prepMinutes: 4,
      cookMinutes: 6,
      totalMinutes: 10,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Starting the day with protein and healthy fats prevents mid-morning energy crashes.',
      nutrition: { kcal: 395, protein: '21g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'eggs', name: 'Fresh farm eggs', amount: 3, unit: 'pcs', aisle: 'protein', estUgx: 1800, prep: 'whisked with pinch salt' },
        { id: 'sukuma', name: 'Sukuma wiki or dodo', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 500, prep: 'finely ribboned' },
        { id: 'tomatoes', name: 'Ripe tomato', amount: 1, unit: 'small', aisle: 'produce', estUgx: 500, prep: 'diced' },
        { id: 'onion', name: 'Onion', amount: 0.25, unit: 'pc', aisle: 'produce', estUgx: 300, prep: 'chopped' },
        { id: 'avocado', name: 'Ripe avocado', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 800, prep: 'sliced' }
      ],
      steps: [
        { text: 'Saute chopped onion and tomato in 1/2 teaspoon oil for 2 minutes until soft.' },
        { text: 'Toss in ribboned sukuma wiki and stir 1 minute until bright green.' },
        { text: 'Pour in whisked eggs over low heat, folding gently for 2 to 3 minutes until soft-set. Plate with sliced avocado.' }
      ],
      ugandaTip: 'Yellow-yolk local market eggs make this scramble naturally rich with zero butter.'
    },
    {
      id: 'savory-oat-simsim-bowl',
      title: 'Warm Oat, Fruit & Toasted Simsim Bowl',
      subtitle: 'Zero-sugar comforting porridge topped with fresh tropical fruit and crunch',
      cuisine: 'Ugandan',
      category: 'breakfast',
      mealSlots: ['breakfast'],
      image: './images/savory-oat-simsim-bowl.jpg',
      prepMinutes: 3,
      cookMinutes: 6,
      totalMinutes: 9,
      servings: 1,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Soluble oat fiber supports heart and gut health, naturally sweetened with ripe fruit only.',
      nutrition: { kcal: 330, protein: '10g', fiber: '8g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'rolled-oats', name: 'Rolled oats', amount: 0.5, unit: 'cup', aisle: 'grains', estUgx: 1000, prep: 'measured' },
        { id: 'pawpaw', name: 'Ripe pawpaw or mango', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 1000, prep: 'cubed' },
        { id: 'banana', name: 'Sweet yellow banana (bogoya)', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'sliced' },
        { id: 'simsim', name: 'Toasted simsim & crushed g-nuts', amount: 1.5, unit: 'tbsp', aisle: 'grains', estUgx: 700, prep: 'toasted' },
        { id: 'cinnamon', name: 'Cinnamon pinch', amount: 0.25, unit: 'tsp', aisle: 'pantry', estUgx: 200, prep: 'to taste' }
      ],
      steps: [
        { text: 'Simmer rolled oats in 1 cup water (or half water, half milk) with cinnamon for 5 minutes until creamy.', timerMin: 5 },
        { text: 'Pour into a bowl and top with sliced bogoya banana, fresh pawpaw or mango cubes, and toasted simsim or groundnuts.' }
      ],
      ugandaTip: 'Swap oats for roasted millet flour (obushera style) when you want a traditional gluten-free porridge.'
    },
    {
      id: 'veggie-herb-omelette',
      title: 'Fluffy Veggie & Herb Farm Egg Omelette',
      subtitle: 'Light 3-egg omelette folded with tomatoes, onions, bell pepper, and fresh coriander',
      cuisine: 'Ugandan',
      category: 'breakfast',
      mealSlots: ['breakfast', 'lunch'],
      image: './images/veggie-herb-omelette.jpg',
      prepMinutes: 4,
      cookMinutes: 5,
      totalMinutes: 9,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'High-protein, low-carb morning meal cooked with just 1 teaspoon of oil so you stay sharp and full.',
      nutrition: { kcal: 310, protein: '20g', fiber: '3g', sugar: 'Low' },
      ingredients: [
        { id: 'eggs', name: 'Fresh farm eggs', amount: 3, unit: 'pcs', aisle: 'protein', estUgx: 1800, prep: 'beaten with pinch salt & pepper' },
        { id: 'tomatoes', name: 'Ripe firm tomato', amount: 1, unit: 'small', aisle: 'produce', estUgx: 500, prep: 'seeded & diced' },
        { id: 'onion', name: 'Red onion', amount: 0.25, unit: 'pc', aisle: 'produce', estUgx: 300, prep: 'finely diced' },
        { id: 'bell-pepper', name: 'Green or red bell pepper', amount: 0.25, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'finely chopped' },
        { id: 'coriander', name: 'Fresh coriander (dhania)', amount: 2, unit: 'tbsp', aisle: 'greens', estUgx: 300, prep: 'chopped' }
      ],
      steps: [
        { text: 'Saute diced onion and bell pepper in 1 teaspoon oil over medium heat for 2 minutes until fragrant.' },
        { text: 'Pour in beaten eggs mixed with diced tomato and coriander; swirl gently so eggs spread evenly.' },
        { text: 'Cook covered on low heat for 2 to 3 minutes until set, fold in half, and serve hot with avocado slices or fresh fruit.' }
      ],
      ugandaTip: 'Seeding the tomato before dicing keeps your omelette fluffy instead of watery.'
    },
    {
      id: 'bread-and-eggs-plate',
      title: 'Whole-Wheat Toast, Eggs & Fresh Kachumbari',
      subtitle: 'Everyday Ugandan bread and eggs balanced with whole grain, soft eggs, and crisp tomatoes',
      cuisine: 'Ugandan',
      category: 'breakfast',
      mealSlots: ['breakfast'],
      image: './images/bread-and-eggs-plate.jpg',
      prepMinutes: 4,
      cookMinutes: 6,
      totalMinutes: 10,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Choosing brown whole-wheat bread over white bread doubles the fiber and pairs cleanly with 2 eggs.',
      nutrition: { kcal: 365, protein: '18g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'whole-bread', name: 'Whole-wheat (brown) bread', amount: 2, unit: 'slices', aisle: 'grains', estUgx: 1500, prep: 'lightly toasted' },
        { id: 'eggs', name: 'Fresh farm eggs', amount: 2, unit: 'pcs', aisle: 'protein', estUgx: 1200, prep: 'soft-boiled or pan-cooked' },
        { id: 'tomatoes', name: 'Ripe tomato & red onion', amount: 1, unit: 'small', aisle: 'produce', estUgx: 600, prep: 'diced with lime pinch' },
        { id: 'avocado', name: 'Ripe avocado', amount: 0.25, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'sliced on the side' }
      ],
      steps: [
        { text: 'Boil eggs for 7 minutes for jammy yolks (or pan-cook lightly in 1/2 teaspoon oil) while toasting whole-wheat bread.', timerMin: 7 },
        { text: 'Serve warm toast and eggs alongside quick diced tomato-onion kachumbari and sliced avocado.' }
      ],
      ugandaTip: 'Skip margarine and spread ripe avocado on the warm toast instead for clean heart-healthy fat.'
    },
    {
      id: 'bread-peanut-butter-banana',
      title: 'Whole-Grain Toast, Peanut Butter, Banana & Chia',
      subtitle: 'Natural unsweetened peanut butter on toasted brown bread with bogoya banana and chia seeds',
      cuisine: 'Ugandan',
      category: 'breakfast',
      mealSlots: ['breakfast'],
      image: './images/bread-peanut-butter-banana.jpg',
      prepMinutes: 4,
      cookMinutes: 2,
      totalMinutes: 6,
      servings: 1,
      tags: ['Plant-Forward', 'High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Natural groundnut butter, chia omega-3s, and banana potassium make a fast, sustained-energy breakfast.',
      nutrition: { kcal: 380, protein: '13g', fiber: '9g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'whole-bread', name: 'Whole-wheat (brown) bread', amount: 2, unit: 'slices', aisle: 'grains', estUgx: 1500, prep: 'toasted crisp' },
        { id: 'peanut-butter', name: 'Natural unsweetened peanut butter', amount: 1.5, unit: 'tbsp', aisle: 'grains', estUgx: 1000, prep: '100% roasted g-nuts' },
        { id: 'banana', name: 'Sweet yellow banana (bogoya)', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'thinly sliced' },
        { id: 'chia-seeds', name: 'Chia seeds & cinnamon pinch', amount: 1, unit: 'tsp', aisle: 'grains', estUgx: 400, prep: 'sprinkled on top' }
      ],
      steps: [
        { text: 'Toast whole-wheat bread slices until golden and crisp.' },
        { text: 'Spread natural peanut butter evenly, layer sliced bogoya banana on top, and finish with chia seeds and a light dusting of cinnamon.' }
      ],
      ugandaTip: 'Check the label or buy freshly ground roasted g-nut butter from the market so there is no added sugar or palm oil.'
    },
    {
      id: 'banana-oat-blender-pancakes',
      title: 'Flourless Banana, Oat & Egg Pancakes',
      subtitle: 'Naturally sweet bogoya banana and rolled oat pancakes with plain yogurt & mango',
      cuisine: 'Ugandan',
      category: 'breakfast',
      mealSlots: ['breakfast'],
      image: './images/banana-oat-blender-pancakes.jpg',
      prepMinutes: 5,
      cookMinutes: 8,
      totalMinutes: 13,
      servings: 2,
      tags: ['High-Protein', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Blending whole rolled oats and ripe banana replaces refined white flour and sugar completely.',
      nutrition: { kcal: 340, protein: '14g', fiber: '6g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'rolled-oats', name: 'Rolled oats', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 1800, prep: 'blended smooth' },
        { id: 'banana', name: 'Ripe sweet banana (bogoya)', amount: 1, unit: 'large', aisle: 'produce', estUgx: 500, prep: 'peeled' },
        { id: 'eggs', name: 'Farm eggs', amount: 2, unit: 'pcs', aisle: 'protein', estUgx: 1200, prep: 'whole' },
        { id: 'milk', name: 'Cow or soya milk', amount: 0.25, unit: 'cup', aisle: 'protein', estUgx: 500, prep: 'for batter' },
        { id: 'yogurt', name: 'Plain yogurt & cinnamon', amount: 0.25, unit: 'cup', aisle: 'protein', estUgx: 800, prep: 'topping' }
      ],
      steps: [
        { text: 'Blend rolled oats, ripe banana, eggs, milk, and cinnamon for 30 seconds until smooth; let batter rest 2 minutes.' },
        { text: 'Spoon small pancakes onto a lightly brushed non-stick pan over medium-low heat for 2 minutes per side (4 minutes total) until golden. Top with plain yogurt and fruit.', timerMin: 4 }
      ],
      ugandaTip: 'Riper spotty bogoya bananas make the pancakes naturally sweeter without honey or syrup.'
    },
    {
      id: 'boiled-sweet-potato-eggs-avocado',
      title: 'Steamed Sweet Potato, Boiled Eggs & Avocado',
      subtitle: 'Wholesome Ugandan morning plate with slow-energy sweet potato and fresh kachumbari',
      cuisine: 'Ugandan',
      category: 'breakfast',
      mealSlots: ['breakfast', 'lunch'],
      image: './images/boiled-sweet-potato-eggs-avocado.jpg',
      prepMinutes: 5,
      cookMinutes: 15,
      totalMinutes: 20,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Traditional steamed sweet potatoes paired with boiled eggs and avocado give clean morning fuel with zero fried oil.',
      nutrition: { kcal: 390, protein: '16g', fiber: '8g', sugar: 'Low' },
      ingredients: [
        { id: 'sweet-potato', name: 'Sweet potatoes (yellow or orange)', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'peeled & halved' },
        { id: 'eggs', name: 'Farm eggs', amount: 4, unit: 'pcs', aisle: 'protein', estUgx: 2400, prep: 'soft or hard boiled' },
        { id: 'avocado', name: 'Ripe avocado', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1500, prep: 'sliced' },
        { id: 'tomatoes', name: 'Tomatoes, red onion & lime', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1000, prep: 'diced kachumbari' }
      ],
      steps: [
        { text: 'Steam or boil sweet potato halves for 15 minutes until fork-tender, boiling the eggs alongside for 8 minutes.', timerMin: 15 },
        { text: 'Plate warm sweet potatoes with halved eggs, sliced avocado, and fresh tomato-lime kachumbari.' }
      ],
      ugandaTip: 'Steam extra sweet potatoes the night before — they are great lightly warmed or even at room temperature.'
    },
    {
      id: 'turkish-garlic-yogurt-poached-eggs',
      title: 'Mediterranean Garlic Yogurt & Poached Eggs',
      subtitle: 'Creamy herbed plain yogurt topped with soft eggs and warm paprika-olive oil',
      cuisine: 'Mediterranean',
      category: 'breakfast',
      mealSlots: ['breakfast'],
      image: './images/turkish-garlic-yogurt-poached-eggs.jpg',
      prepMinutes: 5,
      cookMinutes: 6,
      totalMinutes: 11,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'High-protein eggs over probiotic garlic-mint yogurt keep carbs ultra-low and energy sharp.',
      nutrition: { kcal: 320, protein: '20g', fiber: '2g', sugar: 'Low' },
      ingredients: [
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 0.75, unit: 'cup', aisle: 'protein', estUgx: 2000, prep: 'room-temp with grated garlic' },
        { id: 'eggs', name: 'Fresh farm eggs', amount: 2, unit: 'pcs', aisle: 'protein', estUgx: 1200, prep: 'poached or soft-boiled' },
        { id: 'paprika-olive', name: 'Olive oil, paprika & fresh mint/coriander', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 700, prep: 'warmed gently' }
      ],
      steps: [
        { text: 'Whisk plain yogurt with a tiny pinch of grated garlic, lemon, and salt; spread onto a shallow plate.' },
        { text: 'Poach or soft-boil eggs for 5 minutes and nestle onto the yogurt, finishing with 1 teaspoon warm paprika-infused olive oil and fresh herbs.', timerMin: 5 }
      ],
      ugandaTip: 'Serve with a slice of toasted whole-grain bread or warm steamed matooke to scoop up the yogurt sauce.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = BREAKFAST_RECIPES.concat(window.NourishData.RECIPES);
  }
})();
