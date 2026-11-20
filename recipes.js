(() => {
  const CATEGORIES = [
    { id: 'all', label: 'All Recipes' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'salads', label: 'Salads' },
    { id: 'quick', label: '15-Min' },
    { id: 'onepot', label: 'One-Pot' },
    { id: 'slow', label: 'Worth the Time' },
    { id: 'juices', label: 'Juices & Tonics' }
  ];

  const HEALTH_GOALS = [
    'High-Protein',
    'Light & Lean',
    'Plant-Forward',
    'No Red Meat',
    'Low-Sugar'
  ];

  const AISLE_META = {
    produce: { label: 'Fresh Market Produce', order: 1 },
    greens: { label: 'Greens & Fresh Herbs', order: 2 },
    protein: { label: 'Fish, Poultry & Meat', order: 3 },
    grains: { label: 'Beans, Grains & G-Nuts', order: 4 },
    pantry: { label: 'Spices, Oils & Pantry', order: 5 }
  };

  const HERB_SPICE_PAIRINGS = [
    {
      ingredient: 'Tilapia & Fish',
      pairings: 'Lemon or lime + Garlic + Fresh ginger + Turmeric + Coriander or Parsley',
      why: 'Citrus cuts fishiness while turmeric and ginger brighten lake fish with zero heavy frying.'
    },
    {
      ingredient: 'Chicken (Breast / Kuroiler)',
      pairings: 'Garlic + Ginger + Rosemary or Thyme + Paprika + Cumin (or Plain Yogurt + Turmeric)',
      why: 'Yogurt + warm spices tenderizes lean chicken; rosemary + garlic shines on roasted trays.'
    },
    {
      ingredient: 'Black Beans & Red Beans',
      pairings: 'Cumin + Garlic + Onion + Paprika + Thyme/Bay + Fresh Lime & Coriander at the end',
      why: 'Earthy cumin makes black beans taste rich and savory without needing fatty meats.'
    },
    {
      ingredient: 'Matooke, Sweet Potato & Cassava',
      pairings: 'Ginger + Garlic + Turmeric + Curry Powder + Cardamom & Cinnamon (for pilau-style)',
      why: 'Warm spices bring natural sweetness out of root starches and green bananas.'
    },
    {
      ingredient: 'Dodo, Nakati & Sukuma Wiki',
      pairings: 'Onion + Garlic + Tomato + Black Pepper or Bird-Eye Chili + a squeeze of Lemon',
      why: 'Simple aromatics let the bright green taste shine; vitamin C in lemon boosts iron absorption.'
    },
    {
      ingredient: 'Plain Yogurt & Chia Seeds',
      pairings: 'Sweet: Cinnamon + Cardamom + Mango/Pawpaw/Passion · Savory: Garlic + Mint + Cucumber + Lemon',
      why: 'Plain yogurt switches effortlessly between sweet breakfast bowls and cooling sauces for grilled meats.'
    },
    {
      ingredient: 'Fresh Juices & Tonics',
      pairings: 'Fresh Ginger + Mint + Lime/Lemon + Cinnamon/Cloves (Sobolo) + Turmeric & Black Pepper pinch',
      why: 'Herbs and spices turn plain fruit blends into refreshing, low-sugar wellness tonics.'
    }
  ];

  const UGANDA_HEALTH_GUIDE = [
    {
      title: 'The Healthy Ugandan Plate',
      points: [
        'Fill half your plate with colorful greens (dodo, nakati, sukuma wiki, cabbage) or fresh kachumbari.',
        'Keep a quarter of the plate for slow-energy starches: steamed matooke, sweet potato, pumpkin, or brown millet.',
        'Use the final quarter for lean protein: Lake Victoria tilapia, skinless chicken, boiled eggs, or well-cooked beans.'
      ]
    },
    {
      title: 'Smart Cooking Oil & Salt Rules',
      points: [
        'Measure oil with a spoon (1 tablespoon per pot) instead of pouring straight from the bottle.',
        'When making groundnut (ebinyebwa) or simsim stew, skip added cooking oil completely — the nuts release healthy natural oils as they simmer.',
        'Build bold flavor with fresh ginger, garlic, turmeric, lime juice, coriander, and bird-eye chili so you need far less salt.'
      ]
    },
    {
      title: 'Fresh Juice & Sugar Habits',
      points: [
        'Let ripe Ugandan pineapples, mangoes, and pawpaws sweeten your juices naturally — zero refined white sugar needed.',
        'Include fiber-rich pairings (cucumber, carrot, beetroot, or dodo leaves) and enjoy fresh juices alongside breakfast or after exercise.',
        'Soak and strain dried hibiscus (sobolo) with boiled pineapple peels and ginger for a zero-sugar antioxidant drink.'
      ]
    },
    {
      title: '15-Minute Kitchen Prep Shortcuts',
      points: [
        'Boil a big batch of Nambale or kidney beans on Sunday and freeze in 1-cup portions for instant weekday katogo or salads.',
        'Dice sweet potatoes into small cubes so they cook tender in 8 minutes inside one-pot curries and hashes.',
        'Soak sliced red onions in salted cold water for 10 minutes before salads to remove sharpness while keeping crunch.'
      ]
    }
  ];

  const RECIPES_PART_1 = [
    {
      id: 'avocado-mango-kachumbari',
      title: 'Avocado & Mango Kachumbari',
      subtitle: 'Crisp Ugandan tomato salad lifted with sweet mango and creamy avocado',
      category: 'salads',
      image: './images/avocado-mango-kachumbari.jpg',
      prepMinutes: 12,
      cookMinutes: 0,
      totalMinutes: 12,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Monounsaturated avocado fats boost absorption of lycopene and vitamin A from tomatoes and mango.',
      nutrition: { kcal: 245, protein: '4g', fiber: '7g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'tomatoes', name: 'Ripe firm tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'finely diced' },
        { id: 'red-onion', name: 'Red onion', amount: 1, unit: 'small', aisle: 'produce', estUgx: 700, prep: 'thinly sliced & soaked' },
        { id: 'avocado', name: 'Ripe avocado', amount: 1, unit: 'large', aisle: 'produce', estUgx: 1500, prep: 'cubed' },
        { id: 'mango', name: 'Firm ripe mango', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1200, prep: 'diced' },
        { id: 'coriander', name: 'Fresh coriander (dhania)', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' },
        { id: 'lime', name: 'Fresh lime', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' },
        { id: 'olive-oil', name: 'Cold-pressed oil', amount: 0.5, unit: 'tbsp', aisle: 'pantry', estUgx: 400, prep: 'optional drizzle' }
      ],
      steps: [
        { text: 'Place sliced red onion in a bowl with cold water and a pinch of salt for 10 minutes, then drain well so the bite stays mild.', timerMin: 10 },
        { text: 'Combine diced tomatoes, drained onions, chopped coriander, and fresh lime juice in a wide mixing bowl.' },
        { text: 'Gently fold in diced mango and avocado cubes last so they hold their shape. Finish with black pepper and serve fresh.' }
      ],
      ugandaTip: 'Pair this beside grilled tilapia or roasted sweet potato instead of heavy fried sides.'
    },
    {
      id: 'tilapia-avocado-salad',
      title: 'Grilled Tilapia & Avocado Herb Salad',
      subtitle: 'Flaked spiced tilapia over crisp greens, cucumber, and lime dressing',
      category: 'salads',
      image: './images/tilapia-avocado-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 10,
      totalMinutes: 20,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Lean Lake Victoria fish delivers clean protein and omega-3s with zero heavy dressing.',
      nutrition: { kcal: 360, protein: '32g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'tilapia-fillet', name: 'Fresh tilapia fillets', amount: 350, unit: 'g', aisle: 'protein', estUgx: 9500, prep: 'patted dry' },
        { id: 'lettuce-cabbage', name: 'Crisp lettuce or tender cabbage', amount: 200, unit: 'g', aisle: 'greens', estUgx: 1500, prep: 'finely shredded' },
        { id: 'cucumber', name: 'Cucumber', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 800, prep: 'sliced' },
        { id: 'tomatoes', name: 'Cherry or firm tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'halved' },
        { id: 'avocado', name: 'Ripe avocado', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1500, prep: 'sliced' },
        { id: 'garlic-ginger', name: 'Garlic & fresh ginger', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'minced' },
        { id: 'lime', name: 'Fresh lime', amount: 1.5, unit: 'pcs', aisle: 'produce', estUgx: 750, prep: 'juiced' }
      ],
      steps: [
        { text: 'Rub tilapia fillets with half the lime juice, minced garlic, ginger, salt, and black pepper.' },
        { text: 'Pan-sear or grill on a lightly oiled hot pan for 4 to 5 minutes per side until flaky and golden.', timerMin: 5 },
        { text: 'Toss shredded greens, cucumber, and tomatoes with the remaining lime juice. Top with sliced avocado and warm flaked tilapia.' }
      ],
      ugandaTip: 'Ask your fishmonger to fillet fresh tilapia or use leftover grilled whole tilapia from dinner.'
    },
    {
      id: 'nambale-bean-salad',
      title: 'Warm Nambale Bean & Pepper Salad',
      subtitle: 'Filling Ugandan kidney bean salad with crisp cucumber, tomato, and lime',
      category: 'salads',
      image: './images/nambale-bean-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 5,
      totalMinutes: 15,
      servings: 2,
      tags: ['High-Protein', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'High soluble fiber and plant protein stabilize blood sugar and keep hunger steady for hours.',
      nutrition: { kcal: 340, protein: '16g', fiber: '12g', sugar: 'Low' },
      ingredients: [
        { id: 'cooked-beans', name: 'Pre-cooked Nambale or red beans', amount: 2, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'rinsed & warm' },
        { id: 'cucumber', name: 'Cucumber', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 800, prep: 'diced' },
        { id: 'bell-pepper', name: 'Red or green bell pepper', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'red-onion', name: 'Red onion', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'finely diced' },
        { id: 'coriander', name: 'Fresh coriander', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' },
        { id: 'lime', name: 'Lime & 1 tsp oil', amount: 1, unit: 'pc', aisle: 'pantry', estUgx: 600, prep: 'whisked with pinch chili' }
      ],
      steps: [
        { text: 'Warm pre-cooked beans gently in a dry pan for 3 minutes if using chilled beans, then transfer to a bowl.' },
        { text: 'Add diced bell pepper, cucumber, tomatoes, soaked red onion, and coriander.' },
        { text: 'Whisk lime juice, 1 teaspoon oil, cumin pinch, and salt; toss well so beans soak up the bright dressing.' }
      ],
      ugandaTip: 'Works brilliantly as a packed office lunch — stays crisp for hours without wilting.'
    },
    {
      id: 'chicken-sweet-potato-curry',
      title: '15-Min Chicken & Sweet Potato Coconut Curry',
      subtitle: 'Quick one-pot turmeric coconut stew with tender sweet potato and sukuma',
      category: 'quick',
      image: './images/chicken-sweet-potato-curry.jpg',
      prepMinutes: 5,
      cookMinutes: 10,
      totalMinutes: 15,
      servings: 2,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Turmeric, garlic, and lean chicken create an anti-inflammatory weeknight dinner in 15 minutes.',
      nutrition: { kcal: 440, protein: '33g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Chicken breast', amount: 300, unit: 'g', aisle: 'protein', estUgx: 7500, prep: 'bite-sized cubes' },
        { id: 'sweet-potato', name: 'Sweet potato', amount: 1, unit: 'large', aisle: 'produce', estUgx: 1200, prep: 'micro-diced 1cm' },
        { id: 'coconut-milk', name: 'Light coconut milk', amount: 0.5, unit: 'cup', aisle: 'pantry', estUgx: 2500, prep: 'mixed with 1/2 cup water' },
        { id: 'sukuma', name: 'Sukuma wiki (collard greens)', amount: 1, unit: 'small bunch', aisle: 'greens', estUgx: 800, prep: 'finely shredded' },
        { id: 'onion-garlic', name: 'Onion & garlic', amount: 1, unit: 'set', aisle: 'produce', estUgx: 800, prep: 'finely chopped' },
        { id: 'curry-turmeric', name: 'Curry powder & turmeric', amount: 1.5, unit: 'tsp', aisle: 'pantry', estUgx: 500, prep: 'measured' }
      ],
      steps: [
        { text: 'Saute chicken cubes and chopped onion in 1 teaspoon oil for 3 minutes over medium-high heat.', timerMin: 3 },
        { text: 'Stir in garlic, curry powder, and turmeric for 30 seconds until fragrant.' },
        { text: 'Add tiny sweet potato cubes, coconut milk, and water. Cover and simmer 8 minutes until potatoes are fork-tender.', timerMin: 8 },
        { text: 'Fold in shredded sukuma wiki for the last 60 seconds so it stays vibrant green.' }
      ],
      ugandaTip: 'Cutting sweet potato into 1cm dice is the secret to getting it tender inside 8 minutes.'
    },
    {
      id: 'swahili-tilapia-beans',
      title: 'Swahili Garlic-Lime Tilapia & Beans',
      subtitle: 'Tender fish chunks poached in tomato, cumin, and bean broth',
      category: 'quick',
      image: './images/swahili-tilapia-beans.jpg',
      prepMinutes: 5,
      cookMinutes: 10,
      totalMinutes: 15,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Dual protein from fresh lake fish and beans keeps fat minimal while delivering rich flavor.',
      nutrition: { kcal: 380, protein: '36g', fiber: '8g', sugar: 'Low' },
      ingredients: [
        { id: 'tilapia-fillet', name: 'Tilapia fillet', amount: 320, unit: 'g', aisle: 'protein', estUgx: 9000, prep: 'large chunks' },
        { id: 'cooked-beans', name: 'Pre-cooked red beans', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 1500, prep: 'rinsed' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'grated or blended' },
        { id: 'garlic-cumin', name: 'Garlic & ground cumin', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'minced' },
        { id: 'lime', name: 'Fresh lime', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' },
        { id: 'coriander', name: 'Fresh coriander', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' }
      ],
      steps: [
        { text: 'Simmer grated tomatoes, garlic, cumin, beans, and 1/2 cup water in a wide skillet for 4 minutes.', timerMin: 4 },
        { text: 'Nestle tilapia chunks into the bubbling tomato-bean sauce, cover, and poach gently for 5 minutes until opaque.', timerMin: 5 },
        { text: 'Finish off heat with fresh lime juice and chopped coriander.' }
      ],
      ugandaTip: 'Grating tomatoes on a box grater gives an instant thick sauce with zero blender cleanup.'
    },
    {
      id: 'matooke-beans-katogo',
      title: 'Healthy Matooke & Beans Katogo',
      subtitle: 'Classic one-pot Ugandan comfort with katunkuma and minimal oil',
      category: 'onepot',
      image: './images/matooke-beans-katogo.jpg',
      prepMinutes: 12,
      cookMinutes: 25,
      totalMinutes: 37,
      servings: 3,
      tags: ['Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Green bananas offer resistant starch for gut health, balanced with iron-rich beans and medicinal katunkuma.',
      nutrition: { kcal: 410, protein: '14g', fiber: '11g', sugar: 'Low' },
      ingredients: [
        { id: 'matooke', name: 'Green cooking matooke', amount: 7, unit: 'fingers', aisle: 'produce', estUgx: 3500, prep: 'peeled & kept in water' },
        { id: 'cooked-beans', name: 'Pre-boiled red beans', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'with a splash of bean broth' },
        { id: 'katunkuma', name: 'Katunkuma (bitter berries)', amount: 6, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'washed, stems removed' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'onion-garlic', name: 'Onion, garlic & ginger', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1000, prep: 'chopped' },
        { id: 'oil', name: 'Vegetable oil', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 500, prep: 'measured' }
      ],
      steps: [
        { text: 'Saute onion, garlic, and ginger in 1 measured tablespoon oil for 3 minutes. Add tomatoes and cook down into a thick paste.', timerMin: 5 },
        { text: 'Stir in pre-boiled beans and katunkuma berries with a pinch of salt and turmeric.' },
        { text: 'Lay peeled matooke fingers over the beans, add water just up to the top of the bananas, cover tightly, and simmer on medium-low for 20 to 25 minutes until fork-tender.', timerMin: 22 }
      ],
      ugandaTip: 'Avoid stirring while the matooke cooks so the fingers stay intact and soak up the bean sauce.'
    },
    {
      id: 'chicken-okra-nakati',
      title: 'Lean Chicken, Okra & Nakati One-Pot',
      subtitle: 'Light tomato-garlic chicken simmered with tender okra and local greens',
      category: 'onepot',
      image: './images/chicken-okra-nakati.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 3,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Okra fiber aids gentle digestion while nakati greens add natural calcium and plant micronutrients.',
      nutrition: { kcal: 365, protein: '34g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Skinless chicken thighs or breast', amount: 450, unit: 'g', aisle: 'protein', estUgx: 11000, prep: 'cut in medium pieces' },
        { id: 'okra', name: 'Fresh green okra', amount: 150, unit: 'g', aisle: 'produce', estUgx: 1500, prep: 'trimmed & sliced' },
        { id: 'nakati', name: 'Fresh nakati greens', amount: 1, unit: 'bunch', aisle: 'greens', estUgx: 1000, prep: 'washed, tough stems removed' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'onion-garlic', name: 'Onion, garlic & ginger', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1000, prep: 'minced' }
      ],
      steps: [
        { text: 'Brown chicken pieces in a dry or 1-teaspoon oiled pot for 5 minutes with salt and black pepper.', timerMin: 5 },
        { text: 'Add onions, garlic, ginger, and tomatoes; cover and simmer 15 minutes until chicken is tender and saucy.', timerMin: 15 },
        { text: 'Stir in sliced okra and chopped nakati; simmer uncovered for 5 minutes until greens wilt and okra is tender.', timerMin: 5 }
      ],
      ugandaTip: 'Adding nakati right at the end keeps its clean bright flavor without turning bitter.'
    }
  ];

  window.NourishData = {
    CATEGORIES,
    HEALTH_GOALS,
    AISLE_META,
    HERB_SPICE_PAIRINGS,
    UGANDA_HEALTH_GUIDE,
    RECIPES: [...RECIPES_PART_1]
  };
})();
