(() => {
  const DAIRY_RECIPES = [
    {
      id: 'turmeric-ginger-golden-milk',
      title: 'Warm Turmeric, Ginger & Cinnamon Golden Milk',
      subtitle: 'Soothing cow or soya milk infused with fresh ginger, turmeric, and cinnamon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/turmeric-ginger-golden-milk.jpg',
      prepMinutes: 3,
      cookMinutes: 5,
      totalMinutes: 8,
      servings: 1,
      tags: ['Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Turmeric, ginger, and warm milk calm inflammation and make a comforting zero-sugar evening drink.',
      nutrition: { kcal: 140, protein: '7g', fiber: '1g', sugar: 'Low' },
      ingredients: [
        { id: 'milk', name: 'Cow milk or unsweetened soya milk', amount: 1, unit: 'cup', aisle: 'protein', estUgx: 1500, prep: 'chilled' },
        { id: 'turmeric-ginger', name: 'Turmeric & fresh grated ginger', amount: 1, unit: 'tsp', aisle: 'pantry', estUgx: 400, prep: 'plus black pepper pinch' },
        { id: 'cinnamon', name: 'Ground cinnamon or cardamom', amount: 0.25, unit: 'tsp', aisle: 'pantry', estUgx: 200, prep: 'measured' }
      ],
      steps: [
        { text: 'Warm cow milk or soya milk in a small saucepan with turmeric, grated ginger, cinnamon, and a pinch of black pepper for 4 minutes without boiling over.', timerMin: 4 },
        { text: 'Strain into a mug and sip warm — no refined sugar needed.' }
      ],
      ugandaTip: 'Black pepper helps your body absorb turmeric curcumin much better.'
    },
    {
      id: 'soya-milk-chia-banana-shake',
      title: 'Creamy Soya Milk, Chia & Banana Protein Shake',
      subtitle: 'Chilled soya or cow milk blended with sweet banana, chia seeds, and cinnamon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/soya-milk-chia-banana-shake.jpg',
      prepMinutes: 5,
      cookMinutes: 0,
      totalMinutes: 5,
      servings: 1,
      tags: ['High-Protein', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Soya milk and chia seeds deliver plant protein and omega-3s with natural sweetness from ripe bogoya banana.',
      nutrition: { kcal: 245, protein: '11g', fiber: '7g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'milk', name: 'Soya milk (or cow milk)', amount: 1, unit: 'cup', aisle: 'protein', estUgx: 1500, prep: 'chilled' },
        { id: 'banana', name: 'Ripe yellow banana (bogoya)', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'sliced' },
        { id: 'chia-seeds', name: 'Chia seeds', amount: 1, unit: 'tbsp', aisle: 'grains', estUgx: 700, prep: 'whole' },
        { id: 'cinnamon', name: 'Cinnamon & vanilla pinch', amount: 0.25, unit: 'tsp', aisle: 'pantry', estUgx: 200, prep: 'optional spice' }
      ],
      steps: [
        { text: 'Blend chilled soya or cow milk, banana slices, chia seeds, and cinnamon for 30 seconds until frothy and smooth.' },
        { text: 'Pour into a tall glass and drink right away or chill 10 minutes for a thicker shake.' }
      ],
      ugandaTip: 'Add 1 teaspoon natural groundnut paste if you want an extra post-gym protein boost.'
    },
    {
      id: 'milk-soaked-oats-chia-berry-jar',
      title: 'Milk-Soaked Overnight Oats, Chia & Fruit Jar',
      subtitle: 'Rolled oats and chia seeds soaked in cow or soya milk with yogurt and mango',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/milk-soaked-oats-chia-berry-jar.jpg',
      prepMinutes: 5,
      cookMinutes: 0,
      totalMinutes: 5,
      servings: 1,
      tags: ['High-Protein', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Soaking oats overnight in milk and yogurt softens fiber for gentle digestion and effortless mornings.',
      nutrition: { kcal: 335, protein: '14g', fiber: '9g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'rolled-oats', name: 'Rolled oats', amount: 0.5, unit: 'cup', aisle: 'grains', estUgx: 1000, prep: 'dry' },
        { id: 'milk', name: 'Cow milk or soya milk', amount: 0.75, unit: 'cup', aisle: 'protein', estUgx: 1200, prep: 'cold' },
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 2, unit: 'tbsp', aisle: 'protein', estUgx: 600, prep: 'creamy boost' },
        { id: 'chia-seeds', name: 'Chia seeds', amount: 1, unit: 'tbsp', aisle: 'grains', estUgx: 700, prep: 'whole' },
        { id: 'mango', name: 'Diced mango, pawpaw or banana', amount: 0.5, unit: 'cup', aisle: 'produce', estUgx: 800, prep: 'fresh topping' }
      ],
      steps: [
        { text: 'Combine rolled oats, chia seeds, cinnamon pinch, milk, and plain yogurt in a jar and stir well.' },
        { text: 'Refrigerate overnight (or at least 2 hours), then top with fresh diced mango, pawpaw, or banana before eating.' }
      ],
      ugandaTip: 'Prepare 2 or 3 jars at once — they stay fresh and creamy in the fridge for up to 3 days.'
    },
    {
      id: 'creamy-yogurt-herb-tilapia-bowl',
      title: 'Spiced Tilapia & Garlicky Mint-Yogurt Bowl',
      subtitle: 'Pan-seared turmeric tilapia over cucumber-tomato salad with cooling herb yogurt',
      cuisine: 'Mediterranean',
      category: 'quick',
      image: './images/creamy-yogurt-herb-tilapia-bowl.jpg',
      prepMinutes: 6,
      cookMinutes: 9,
      totalMinutes: 15,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Crisp spiced tilapia paired with probiotic plain yogurt sauce gives restaurant-grade flavor in 15 minutes.',
      nutrition: { kcal: 350, protein: '34g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'tilapia-fillet', name: 'Fresh tilapia fillets', amount: 320, unit: 'g', aisle: 'protein', estUgx: 9000, prep: 'seasoned with turmeric & cumin' },
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 0.5, unit: 'cup', aisle: 'protein', estUgx: 1500, prep: 'sauce base' },
        { id: 'cucumber', name: 'Cucumber & tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'mint-garlic', name: 'Fresh mint, garlic & lemon', amount: 1, unit: 'set', aisle: 'greens', estUgx: 800, prep: 'stirred into yogurt' }
      ],
      steps: [
        { text: 'Rub tilapia fillets with turmeric, cumin, salt, and lemon; sear in 1 teaspoon oil for 4 minutes per side until flaky.', timerMin: 8 },
        { text: 'Whisk plain yogurt with minced garlic, chopped mint, and lemon juice; spoon alongside cucumber-tomato salad and warm fish.' }
      ],
      ugandaTip: 'Swap tilapia for pan-seared chicken strips anytime using the exact same yogurt-mint sauce.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(DAIRY_RECIPES);
  }
})();
