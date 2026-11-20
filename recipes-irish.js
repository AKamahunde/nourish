(() => {
  const IRISH_RECIPES = [
    {
      id: 'crispy-baked-irish-wedges',
      title: 'Crispy Baked Garlic & Paprika Irish Wedges',
      subtitle: 'Skin-on Irish potato wedges roasted crisp with rosemary, garlic, and just 1 tbsp oil',
      cuisine: 'Ugandan',
      category: 'slow',
      mealSlots: ['lunch', 'dinner'],
      image: './images/crispy-baked-irish-wedges.jpg',
      prepMinutes: 8,
      cookMinutes: 28,
      totalMinutes: 36,
      servings: 3,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Keeping the clean potato skin on adds extra fiber and potassium while oven-baking cuts deep-fry oil.',
      nutrition: { kcal: 245, protein: '5g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'irish-potatoes', name: 'Medium Irish potatoes (washed, skin on)', amount: 600, unit: 'g', aisle: 'produce', estUgx: 3000, prep: 'cut into thick wedges' },
        { id: 'garlic-rosemary', name: 'Garlic powder or minced garlic & rosemary', amount: 1.5, unit: 'tsp', aisle: 'pantry', estUgx: 600, prep: 'measured' },
        { id: 'paprika', name: 'Smoked or sweet paprika', amount: 1, unit: 'tsp', aisle: 'pantry', estUgx: 400, prep: 'for color & warmth' },
        { id: 'olive-oil', name: 'Olive or sunflower oil', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'measured' }
      ],
      steps: [
        { text: 'Pat washed Irish potato wedges dry with a clean cloth (dry skins crisp up best) and toss with 1 tablespoon oil, paprika, garlic, rosemary, and salt.' },
        { text: 'Spread in a single layer on a baking tray and bake at 210C (or air-fry at 200C) for 28 minutes, flipping halfway, until golden and crisp.', timerMin: 28 }
      ],
      ugandaTip: 'Dip in plain yogurt mixed with lemon, garlic, and chopped coriander instead of sugary ketchup.'
    },
    {
      id: 'boiled-irish-herb-plate',
      title: 'Boiled Irish Potatoes, Lemon Herbs & Soft Eggs',
      subtitle: 'Oil-free tender boiled Irish potatoes tossed with coriander, lemon, garlic, and farm eggs',
      cuisine: 'Ugandan',
      category: 'quick',
      mealSlots: ['breakfast', 'lunch', 'dinner'],
      image: './images/boiled-irish-herb-plate.jpg',
      prepMinutes: 5,
      cookMinutes: 15,
      totalMinutes: 20,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Boiled Irish potatoes have one of the highest satiety scores of any whole food, keeping hunger calm for hours.',
      nutrition: { kcal: 340, protein: '16g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'irish-potatoes', name: 'Small or medium Irish potatoes', amount: 500, unit: 'g', aisle: 'produce', estUgx: 2500, prep: 'halved or quartered' },
        { id: 'eggs', name: 'Fresh farm eggs', amount: 4, unit: 'pcs', aisle: 'protein', estUgx: 2400, prep: 'soft- or hard-boiled' },
        { id: 'coriander', name: 'Fresh coriander or parsley', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'finely chopped' },
        { id: 'lemon', name: 'Fresh lemon, 1 tsp olive oil & black pepper', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 700, prep: 'tossed while warm' }
      ],
      steps: [
        { text: 'Boil halved Irish potatoes in lightly salted water for 14 to 15 minutes until fork-tender, then drain.', timerMin: 15 },
        { text: 'While still steaming, toss gently with 1 teaspoon olive oil, lemon juice, chopped coriander, and black pepper.' },
        { text: 'Serve beside peeled boiled eggs and a crisp cucumber-tomato salad.' }
      ],
      ugandaTip: 'Tossing boiled potatoes with herbs and lemon while still hot lets the flavor soak right in without butter.'
    },
    {
      id: 'light-pan-fried-irish-potatoes',
      title: 'Light Pan-Fried Spiced Irish Potatoes',
      subtitle: 'Golden skillet-crisped Irish potato rounds with sweet onion, garlic, and coriander',
      cuisine: 'Ugandan',
      category: 'quick',
      mealSlots: ['breakfast', 'lunch', 'dinner'],
      image: './images/light-pan-fried-irish-potatoes.jpg',
      prepMinutes: 6,
      cookMinutes: 14,
      totalMinutes: 20,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Slicing potatoes thin and pan-frying in 1 measured tablespoon oil gives crisp fried flavor without heavy grease.',
      nutrition: { kcal: 270, protein: '5g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 450, unit: 'g', aisle: 'produce', estUgx: 2200, prep: 'thin 0.5cm rounds' },
        { id: 'red-onion', name: 'Red onion', amount: 1, unit: 'small', aisle: 'produce', estUgx: 600, prep: 'thinly sliced' },
        { id: 'garlic-paprika', name: 'Minced garlic, paprika & turmeric pinch', amount: 1.5, unit: 'tsp', aisle: 'pantry', estUgx: 500, prep: 'measured' },
        { id: 'olive-oil', name: 'Vegetable or olive oil', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'measured' },
        { id: 'coriander', name: 'Fresh coriander', amount: 2, unit: 'tbsp', aisle: 'greens', estUgx: 300, prep: 'chopped' }
      ],
      steps: [
        { text: 'Heat 1 tablespoon oil in a wide non-stick skillet over medium heat. Lay potato rounds flat and cook covered 7 minutes until tender underneath.', timerMin: 7 },
        { text: 'Uncover, flip potatoes, add sliced red onion, garlic, paprika, and salt, and crisp 6 minutes until golden-brown.', timerMin: 6 },
        { text: 'Scatter chopped fresh coriander over top and serve hot alongside grilled chicken, tilapia, or beans.' }
      ],
      ugandaTip: 'Covering the pan for the first half steams the center tender so you never need extra oil.'
    },
    {
      id: 'loaded-baked-jacket-irish',
      title: 'Baked Jacket Irish Potato with Black Beans & Yogurt',
      subtitle: 'Fluffy oven-baked whole Irish potato split and loaded with spiced black beans and yogurt',
      cuisine: 'Mediterranean',
      category: 'slow',
      mealSlots: ['lunch', 'dinner'],
      image: './images/loaded-baked-jacket-irish.jpg',
      prepMinutes: 8,
      cookMinutes: 45,
      totalMinutes: 53,
      servings: 2,
      tags: ['High-Protein', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Swapping butter and heavy cheese for spiced black beans and plain yogurt creates a high-fiber comfort dinner.',
      nutrition: { kcal: 390, protein: '16g', fiber: '12g', sugar: 'Low' },
      ingredients: [
        { id: 'irish-potatoes', name: 'Large baking Irish potatoes', amount: 2, unit: 'large', aisle: 'produce', estUgx: 2000, prep: 'scrubbed & pricked with fork' },
        { id: 'black-beans', name: 'Cooked black or red beans', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 1500, prep: 'warmed with cumin & garlic' },
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 4, unit: 'tbsp', aisle: 'protein', estUgx: 1000, prep: 'cooling topping' },
        { id: 'tomatoes', name: 'Diced tomato, onion & coriander', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 1000, prep: 'fresh kachumbari' }
      ],
      steps: [
        { text: 'Scrub large Irish potatoes, prick all over with a fork, rub with a tiny drop of oil and salt, and bake at 200C for 45 minutes until tender inside and crisp outside.', timerMin: 45 },
        { text: 'Warm black beans with ground cumin, garlic, and a splash of water for 3 minutes.' },
        { text: 'Slice a cross on top of each hot potato, fluff the inside with a fork, and load with spiced beans, fresh kachumbari, and a spoonful of plain yogurt.' }
      ],
      ugandaTip: 'To cut baking time in half, microwave the pricked potatoes for 6 minutes first, then crisp in the oven for 15 minutes.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(IRISH_RECIPES);
  }
})();
