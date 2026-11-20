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
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = BREAKFAST_RECIPES.concat(window.NourishData.RECIPES);
  }
})();
