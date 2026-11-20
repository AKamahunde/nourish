(() => {
  const RICE_RECIPES = [
    {
      id: 'light-ugandan-beef-pilau',
      title: 'Light Spiced Ugandan Beef Pilau & Kachumbari',
      subtitle: 'Fragrant basmati rice simmered with lean beef, caramelized onions, garlic, ginger, and pilau masala',
      cuisine: 'Ugandan',
      category: 'onepot',
      mealSlots: ['lunch', 'dinner'],
      image: './images/light-ugandan-beef-pilau.jpg',
      prepMinutes: 12,
      cookMinutes: 33,
      totalMinutes: 45,
      servings: 4,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Cooking lean beef and basmati rice with 1 measured tablespoon oil gives full East African pilau flavor without grease.',
      nutrition: { kcal: 440, protein: '28g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'rice', name: 'Basmati or super rice', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 3500, prep: 'washed & soaked 10 min' },
        { id: 'beef-meat', name: 'Lean beef cubes (pre-boiled tender)', amount: 350, unit: 'g', aisle: 'protein', estUgx: 8500, prep: 'save 2.5 cups lean broth' },
        { id: 'red-onion', name: 'Red onions', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 1200, prep: 'thinly sliced' },
        { id: 'pilau-spices', name: 'Pilau masala (cumin, cardamom, cinnamon, cloves)', amount: 2, unit: 'tsp', aisle: 'pantry', estUgx: 800, prep: 'freshly ground' },
        { id: 'garlic-ginger', name: 'Fresh garlic & ginger', amount: 1.5, unit: 'tbsp', aisle: 'produce', estUgx: 700, prep: 'crushed paste' },
        { id: 'tomatoes', name: 'Ripe tomatoes & lime (for kachumbari)', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'served fresh on the side' }
      ],
      steps: [
        { text: 'Caramelize sliced onions slowly in 1 tablespoon oil with a splash of water for 7 minutes until deep golden-brown.', timerMin: 7 },
        { text: 'Stir in garlic, ginger, pilau masala, and tender beef cubes for 2 minutes until deeply aromatic.' },
        { text: 'Fold in drained rice, pour in 2.5 cups lean beef broth (or water), cover tightly, and simmer on low for 18 minutes until fluffy. Rest 5 minutes and serve with crisp kachumbari.', timerMin: 18 }
      ],
      ugandaTip: 'Always pair pilau with a generous bowl of raw tomato-onion kachumbari to add fresh fiber and vitamin C.'
    },
    {
      id: 'swahili-coconut-rice-beans',
      title: 'Swahili Coconut Rice & Spiced Red Beans',
      subtitle: 'Fragrant rice steamed in light coconut milk served with protein-rich Nambale beans',
      cuisine: 'Ugandan',
      category: 'onepot',
      mealSlots: ['lunch', 'dinner'],
      image: './images/swahili-coconut-rice-beans.jpg',
      prepMinutes: 8,
      cookMinutes: 22,
      totalMinutes: 30,
      servings: 3,
      tags: ['Plant-Forward', 'High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Rice and beans form a complete plant protein while light coconut milk adds richness without heavy frying.',
      nutrition: { kcal: 425, protein: '14g', fiber: '9g', sugar: 'Low' },
      ingredients: [
        { id: 'rice', name: 'Basmati or long-grain rice', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 3500, prep: 'rinsed until clear' },
        { id: 'cooked-beans', name: 'Pre-boiled Nambale or red beans', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'drained' },
        { id: 'coconut-milk', name: 'Light coconut milk', amount: 0.75, unit: 'cup', aisle: 'pantry', estUgx: 3000, prep: 'plus 2 cups water' },
        { id: 'onion-garlic', name: 'Onion, garlic & cardamom pinch', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'finely chopped' },
        { id: 'coriander', name: 'Fresh coriander', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' }
      ],
      steps: [
        { text: 'Saute chopped onion and garlic in 1 teaspoon oil for 3 minutes until soft and fragrant.' },
        { text: 'Add rinsed rice, beans, cardamom pinch, salt, coconut milk, and water. Bring to a gentle boil.' },
        { text: 'Cover tightly and simmer on lowest heat for 18 minutes until liquid absorbs and rice is fluffy. Finish with fresh coriander.', timerMin: 18 }
      ],
      ugandaTip: 'Pairs brilliantly with sautéed dodo or sukuma wiki and a slice of ripe avocado.'
    },
    {
      id: 'onepot-tomato-veggie-rice',
      title: 'One-Pot Spiced Tomato, Carrot & Pea Rice',
      subtitle: 'Vibrant market tomato rice loaded with sweet carrots, green peas, and bell pepper',
      cuisine: 'Ugandan',
      category: 'onepot',
      mealSlots: ['lunch', 'dinner'],
      image: './images/onepot-tomato-veggie-rice.jpg',
      prepMinutes: 8,
      cookMinutes: 22,
      totalMinutes: 30,
      servings: 3,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Blending fresh market tomatoes directly into the cooking liquid infuses every grain with lycopene and flavor.',
      nutrition: { kcal: 355, protein: '9g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'rice', name: 'Long-grain or basmati rice', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 3500, prep: 'rinsed well' },
        { id: 'tomatoes', name: 'Ripe red tomatoes', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'blended or grated smooth' },
        { id: 'carrots', name: 'Carrots & green peas', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 1500, prep: 'finely diced' },
        { id: 'bell-pepper', name: 'Green or red bell pepper', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'onion-garlic', name: 'Onion, garlic, ginger & thyme', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'chopped' }
      ],
      steps: [
        { text: 'Saute onion, garlic, ginger, and thyme in 1 tablespoon oil for 3 minutes, then simmer blended tomatoes for 5 minutes until thick.', timerMin: 5 },
        { text: 'Stir in rinsed rice, carrots, peas, bell pepper, salt, and 2 cups water. Bring to a boil.' },
        { text: 'Cover tightly and cook on low heat for 18 minutes until fluffy, then fluff gently with a fork.', timerMin: 18 }
      ],
      ugandaTip: 'Serve alongside grilled chicken, boiled eggs, or slow-simmered mince-cabbage soup.'
    },
    {
      id: 'garlic-turmeric-chicken-rice',
      title: 'Golden Turmeric-Garlic Rice & Herb Chicken Bowl',
      subtitle: 'Fragrant yellow turmeric rice topped with pan-seared chicken breast, cucumber, and avocado',
      cuisine: 'Mediterranean',
      category: 'quick',
      mealSlots: ['lunch', 'dinner'],
      image: './images/garlic-turmeric-chicken-rice.jpg',
      prepMinutes: 6,
      cookMinutes: 18,
      totalMinutes: 24,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Turmeric and black pepper add anti-inflammatory warmth to a clean protein-and-rice fitness bowl.',
      nutrition: { kcal: 445, protein: '35g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'rice', name: 'Basmati rice', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2500, prep: 'rinsed' },
        { id: 'chicken-breast', name: 'Skinless chicken breast', amount: 300, unit: 'g', aisle: 'protein', estUgx: 7500, prep: 'sliced strips' },
        { id: 'turmeric-garlic', name: 'Turmeric, minced garlic & black pepper', amount: 1.5, unit: 'tsp', aisle: 'pantry', estUgx: 600, prep: 'measured' },
        { id: 'avocado', name: 'Ripe avocado & cucumber', amount: 1, unit: 'set', aisle: 'produce', estUgx: 2000, prep: 'sliced fresh' }
      ],
      steps: [
        { text: 'Warm garlic and turmeric in 1 teaspoon oil for 30 seconds, add rinsed rice, salt, and 2 cups water, cover, and simmer 15 minutes until fluffy.', timerMin: 15 },
        { text: 'Meanwhile sear seasoned chicken strips in a hot pan for 6 minutes until golden.', timerMin: 6 },
        { text: 'Serve golden rice topped with warm chicken, crisp cucumber, sliced avocado, and a squeeze of lemon.' }
      ],
      ugandaTip: 'Add a spoonful of plain yogurt with lemon and mint on top to make it taste like a gourmet Mediterranean rice bowl.'
    },
    {
      id: 'mediterranean-herb-rice-salad',
      title: 'Chilled Lemon-Herb Rice, Chickpea & Cucumber Bowl',
      subtitle: 'Refreshing cooled rice salad with chickpeas, tomatoes, coriander, and olive-lemon dressing',
      cuisine: 'Mediterranean',
      category: 'salads',
      mealSlots: ['lunch', 'dinner'],
      image: './images/mediterranean-herb-rice-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Chilled cooked rice develops gut-friendly resistant starch and makes an ideal no-reheat office lunch.',
      nutrition: { kcal: 360, protein: '12g', fiber: '8g', sugar: 'Low' },
      ingredients: [
        { id: 'cooked-rice', name: 'Cooked chilled basmati or brown rice', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 1800, prep: 'fluffed cool' },
        { id: 'chickpeas', name: 'Cooked chickpeas or black beans', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2500, prep: 'rinsed & drained' },
        { id: 'cucumber', name: 'Cucumber & ripe tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'finely diced' },
        { id: 'coriander', name: 'Fresh coriander or parsley & mint', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 600, prep: 'chopped' },
        { id: 'lemon', name: 'Lemon juice & 1 tbsp olive oil', amount: 1, unit: 'pc', aisle: 'pantry', estUgx: 1000, prep: 'whisked with cumin pinch' }
      ],
      steps: [
        { text: 'Combine cooled rice, chickpeas, diced cucumber, tomatoes, and chopped herbs in a wide bowl.' },
        { text: 'Whisk lemon juice, olive oil, cumin pinch, salt, and black pepper; toss thoroughly and chill 10 minutes before serving.' }
      ],
      ugandaTip: 'Perfect way to turn leftover boiled rice into a fresh, energizing next-day lunch.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(RICE_RECIPES);
  }
})();
