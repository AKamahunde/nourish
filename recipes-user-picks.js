(() => {
  const USER_PICK_RECIPES = [
    {
      id: 'baked-crispy-chicken-spring-rolls',
      title: 'Crispy Oven-Baked Chicken & Veggie Spring Rolls',
      subtitle: 'Golden crunchy spring rolls filled with shredded chicken, cabbage, carrots, and ginger',
      cuisine: 'Asian',
      category: 'slow',
      image: './images/baked-crispy-chicken-spring-rolls.jpg',
      prepMinutes: 20,
      cookMinutes: 18,
      totalMinutes: 38,
      servings: 3,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Oven-baking brushed wrappers gives crisp crunch with a fraction of deep-frying oil.',
      nutrition: { kcal: 280, protein: '19g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Shredded cooked chicken breast', amount: 250, unit: 'g', aisle: 'protein', estUgx: 6500, prep: 'finely shredded' },
        { id: 'cabbage', name: 'Cabbage & grated carrots', amount: 2, unit: 'cups', aisle: 'greens', estUgx: 1500, prep: 'finely shredded' },
        { id: 'spring-roll-sheets', name: 'Spring roll wrapper sheets', amount: 10, unit: 'sheets', aisle: 'grains', estUgx: 5000, prep: 'thawed' },
        { id: 'ginger-garlic', name: 'Ginger, garlic & light soy sauce', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'seasoning' }
      ],
      steps: [
        { text: 'Toss shredded chicken, cabbage, carrots, ginger, garlic, and soy sauce in a dry hot pan for 3 minutes until veggies soften; cool slightly.', timerMin: 3 },
        { text: 'Roll filling tightly in spring roll wrappers, brush lightly with 1 teaspoon oil, and bake at 200°C / 400°F for 16 to 18 minutes until crisp and golden.', timerMin: 18 }
      ],
      ugandaTip: 'Serve with lime-chili vinegar or tomato-garlic sauce instead of sugary bottled chili glaze.'
    },
    {
      id: 'baked-spiced-lentil-samosas',
      title: 'Baked Spiced Lentil & Coriander Samosas',
      subtitle: 'Light crunchy samosas stuffed with cumin-spiced brown lentils, peas, and fresh herbs',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/baked-spiced-lentil-samosas.jpg',
      prepMinutes: 20,
      cookMinutes: 20,
      totalMinutes: 40,
      servings: 4,
      tags: ['Plant-Forward', 'High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Lentils and green peas pack clean plant protein inside oven-crisped pastry with zero deep-frying.',
      nutrition: { kcal: 245, protein: '11g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'lentils', name: 'Cooked brown/green lentils & peas', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2500, prep: 'drained well' },
        { id: 'samosa-sheets', name: 'Samosa wrapper sheets', amount: 12, unit: 'sheets', aisle: 'grains', estUgx: 4500, prep: 'ready to fold' },
        { id: 'onion-garlic', name: 'Onion, garlic, cumin & coriander', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'chopped' }
      ],
      steps: [
        { text: 'Saute onion, garlic, cumin, and turmeric in 1 teaspoon oil for 3 minutes; fold in cooked lentils, peas, and fresh coriander.' },
        { text: 'Fold into triangular pockets, brush lightly with oil, and bake at 200°C / 400°F for 18 minutes until golden crisp.', timerMin: 18 }
      ],
      ugandaTip: 'Pair with plain yogurt mixed with mint and lemon for a refreshing snack.'
    },
    {
      id: 'spiced-ugandan-egg-biryani',
      title: 'One-Pot Spiced Egg & Herb Biryani',
      subtitle: 'Fragrant spiced basmati rice layered with boiled farm eggs, caramelized onions, and coriander',
      cuisine: 'Asian',
      category: 'onepot',
      image: './images/spiced-ugandan-egg-biryani.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 3,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Eggs and aromatic spices deliver rich biryani satisfaction with minimal oil and no heavy cream.',
      nutrition: { kcal: 425, protein: '18g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'eggs', name: 'Hard-boiled farm eggs', amount: 6, unit: 'pcs', aisle: 'protein', estUgx: 3600, prep: 'peeled & halved' },
        { id: 'rice', name: 'Basmati rice', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 3500, prep: 'rinsed' },
        { id: 'tomatoes', name: 'Ripe tomatoes & red onion', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'sliced' },
        { id: 'pilau-spices', name: 'Turmeric, cumin, cardamom & ginger', amount: 2, unit: 'tsp', aisle: 'pantry', estUgx: 700, prep: 'spice blend' },
        { id: 'coriander', name: 'Fresh coriander & mint', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' }
      ],
      steps: [
        { text: 'Saute sliced onion, garlic, ginger, and biryani spices in 1 tablespoon oil for 5 minutes; add chopped tomatoes and simmer 3 minutes.', timerMin: 5 },
        { text: 'Stir in rinsed basmati rice and 2.5 cups water; cover low for 15 minutes until fluffy, then nestle halved boiled eggs and fresh herbs on top.', timerMin: 15 }
      ],
      ugandaTip: 'Serve alongside crisp tomato-cucumber kachumbari or a spoon of plain yogurt.'
    },
    {
      id: 'ugandan-beans-rice-kachumbari',
      title: 'Ugandan Nambale Beans, Rice & Kachumbari Plate',
      subtitle: 'Classic nourishing plate of spiced red kidney beans, fluffy rice, and crisp red-onion salad',
      cuisine: 'Ugandan',
      category: 'onepot',
      image: './images/ugandan-beans-rice-kachumbari.jpg',
      prepMinutes: 8,
      cookMinutes: 22,
      totalMinutes: 30,
      servings: 3,
      tags: ['Plant-Forward', 'High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Combining beans and rice forms a complete protein while fresh kachumbari adds vitamin C for iron absorption.',
      nutrition: { kcal: 430, protein: '16g', fiber: '11g', sugar: 'Low' },
      ingredients: [
        { id: 'cooked-beans', name: 'Pre-boiled Nambale red beans', amount: 2, unit: 'cups', aisle: 'grains', estUgx: 2500, prep: 'with broth' },
        { id: 'rice', name: 'Basmati or brown rice', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2500, prep: 'steamed' },
        { id: 'tomatoes', name: 'Tomatoes & red onion', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced & sliced' },
        { id: 'garlic-cumin', name: 'Garlic, ginger & cumin', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'minced' }
      ],
      steps: [
        { text: 'Steam rice in 2 cups water for 16 minutes while simmering beans with sautéed onion, tomato, garlic, ginger, and cumin for 12 minutes.', timerMin: 16 },
        { text: 'Plate rice alongside rich red bean stew and fresh lime-tossed red onion kachumbari.' }
      ],
      ugandaTip: 'Keep the bean portion generous and the rice portion to 1/2 cup for steady afternoon energy.'
    },
    {
      id: 'boiled-matooke-eggs-breakfast',
      title: 'Boiled Matooke Fingers with Egg & Tomato Scramble',
      subtitle: 'Simple, comforting Ugandan breakfast pairing tender green bananas with savory soft eggs',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/boiled-matooke-eggs-breakfast.jpg',
      prepMinutes: 8,
      cookMinutes: 15,
      totalMinutes: 23,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Boiled green matooke gives clean potassium and resistant starch paired with protein-rich farm eggs.',
      nutrition: { kcal: 360, protein: '16g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'matooke', name: 'Green matooke', amount: 5, unit: 'fingers', aisle: 'produce', estUgx: 2500, prep: 'peeled' },
        { id: 'eggs', name: 'Farm eggs', amount: 4, unit: 'pcs', aisle: 'protein', estUgx: 2400, prep: 'beaten' },
        { id: 'tomatoes', name: 'Ripe tomatoes & onion', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'diced' }
      ],
      steps: [
        { text: 'Boil or steam peeled matooke fingers in lightly salted water for 15 minutes until fork-tender.', timerMin: 15 },
        { text: 'Scramble beaten eggs gently with sautéed tomato and onion in 1 teaspoon oil for 3 minutes; plate beside warm matooke.' }
      ],
      ugandaTip: 'Add sliced avocado on the side for extra healthy fats.'
    },
    {
      id: 'ugandan-mukene-tomato-rice',
      title: 'Crispy Tomato-Onion Silverfish (Mukene) & Rice',
      subtitle: 'Traditional high-calcium Lake Victoria mukene pan-toasted with tomatoes, onions, and rice',
      cuisine: 'Ugandan',
      category: 'quick',
      image: './images/ugandan-mukene-tomato-rice.jpg',
      prepMinutes: 5,
      cookMinutes: 12,
      totalMinutes: 17,
      servings: 2,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Cleaned silverfish (mukene) is one of Uganda’s richest natural sources of protein, calcium, and omega-3s.',
      nutrition: { kcal: 395, protein: '28g', fiber: '3g', sugar: 'Low' },
      ingredients: [
        { id: 'mukene', name: 'Cleaned dried silverfish (mukene)', amount: 150, unit: 'g', aisle: 'protein', estUgx: 3500, prep: 'rinsed & drained' },
        { id: 'tomatoes', name: 'Ripe tomatoes & onion', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'rice', name: 'Steamed rice', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2500, prep: 'cooked' },
        { id: 'garlic-ginger', name: 'Garlic, curry pinch & lime', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 500, prep: 'minced' }
      ],
      steps: [
        { text: 'Dry-toast rinsed mukene in a hot pan for 4 minutes until crisp and fragrant.', timerMin: 4 },
        { text: 'Add 1 teaspoon oil, onion, garlic, and tomatoes; simmer 6 minutes until saucy and serve warm with steamed rice and lime.', timerMin: 6 }
      ],
      ugandaTip: 'Buy pre-cleaned, sand-free mukene from trusted market stalls or supermarkets to save prep time.'
    },
    {
      id: 'classic-ugandan-kachumbari',
      title: 'Classic Ugandan Tomato, Onion & Coriander Kachumbari',
      subtitle: 'Crisp, refreshing raw market salad tossed with lime juice and fresh dhania',
      cuisine: 'Ugandan',
      category: 'salads',
      image: './images/classic-ugandan-kachumbari.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 3,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Ultra-light raw vitamin C booster that pairs with grilled meats, beans, eggs, or matooke.',
      nutrition: { kcal: 55, protein: '1g', fiber: '2g', sugar: 'Low' },
      ingredients: [
        { id: 'tomatoes', name: 'Firm ripe tomatoes', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'diced' },
        { id: 'red-onion', name: 'Red onion', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 700, prep: 'thinly sliced & soaked' },
        { id: 'coriander', name: 'Fresh coriander (dhania)', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' },
        { id: 'lime', name: 'Fresh lime', amount: 1.5, unit: 'pcs', aisle: 'produce', estUgx: 750, prep: 'juiced' }
      ],
      steps: [
        { text: 'Soak sliced red onion in salted cold water for 10 minutes, then drain well.', timerMin: 10 },
        { text: 'Toss drained onions, diced tomatoes, chopped coriander, fresh lime juice, and salt right before serving.' }
      ],
      ugandaTip: 'Add 1 finely chopped bird-eye chili if you want classic Ugandan heat.'
    },
    {
      id: 'pan-roasted-gonja-slices',
      title: 'Lightly Pan-Roasted Sweet Plantain (Gonja)',
      subtitle: 'Caramelized golden ripe plantain slices brushed with a hint of oil and cinnamon',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/roasted-gonja-sweet-plantain.jpg',
      prepMinutes: 4,
      cookMinutes: 8,
      totalMinutes: 12,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Dry-roasting or lightly brushing ripe gonja gives sweet comfort without deep-frying.',
      nutrition: { kcal: 215, protein: '2g', fiber: '3g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'gonja', name: 'Ripe sweet plantains (gonja)', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 2500, prep: 'sliced diagonally' },
        { id: 'oil', name: 'Olive or sunflower oil', amount: 1, unit: 'tsp', aisle: 'pantry', estUgx: 300, prep: 'light brush' },
        { id: 'cinnamon', name: 'Cinnamon & sea salt pinch', amount: 0.25, unit: 'tsp', aisle: 'pantry', estUgx: 100, prep: 'dusting' }
      ],
      steps: [
        { text: 'Brush diagonal gonja slices lightly with 1 teaspoon oil and cook on a hot dry skillet or 200°C / 400°F oven tray for 4 minutes per side until golden and tender.', timerMin: 8 },
        { text: 'Serve warm beside boiled eggs, plain yogurt, or spicy beans.' }
      ],
      ugandaTip: 'Choose yellow gonja with a few black spots — they caramelize naturally without adding sugar.'
    },
    {
      id: 'asian-veggie-soy-noodles',
      title: '15-Min Asian Veggie & Soy Noodle Stir-Fry',
      subtitle: 'Quick wok-tossed noodles with crisp cabbage, carrots, peppers, garlic, and ginger',
      cuisine: 'Asian',
      category: 'quick',
      image: './images/asian-veggie-soy-noodles.jpg',
      prepMinutes: 6,
      cookMinutes: 8,
      totalMinutes: 14,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Loading up twice as many crunchy vegetables as noodles keeps this 15-minute bowl light and colorful.',
      nutrition: { kcal: 360, protein: '10g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'noodles', name: 'Whole-wheat or rice noodles', amount: 150, unit: 'g', aisle: 'grains', estUgx: 3500, prep: 'boiled & drained' },
        { id: 'cabbage', name: 'Shredded cabbage, carrots & bell pepper', amount: 2.5, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'thinly sliced' },
        { id: 'ginger-garlic', name: 'Fresh ginger, garlic & spring onion', amount: 2, unit: 'tbsp', aisle: 'produce', estUgx: 800, prep: 'minced' },
        { id: 'soy-sauce', name: 'Light soy sauce & lime juice', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'whisked' }
      ],
      steps: [
        { text: 'Boil noodles 4 to 5 minutes until tender, then drain.', timerMin: 5 },
        { text: 'Stir-fry cabbage, carrots, pepper, ginger, and garlic in 1 teaspoon oil over high heat for 3 minutes, then toss in noodles and soy-lime splash.', timerMin: 3 }
      ],
      ugandaTip: 'Drop in 2 scrambled eggs or leftover chicken strips for an extra protein boost.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(USER_PICK_RECIPES);
  }
})();
