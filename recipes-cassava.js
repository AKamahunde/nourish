(() => {
  const CASSAVA_RECIPES = [
    {
      id: 'boiled-cassava-eggs-breakfast',
      title: 'Boiled Cassava, Soft Eggs & Kachumbari',
      subtitle: 'Classic Ugandan morning muwogo balanced with boiled eggs, avocado, and fresh tomato salad',
      cuisine: 'Ugandan',
      category: 'breakfast',
      mealSlots: ['breakfast', 'lunch'],
      image: './images/boiled-cassava-eggs-breakfast.jpg',
      prepMinutes: 5,
      cookMinutes: 18,
      totalMinutes: 23,
      servings: 2,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Boiling cassava requires zero oil and provides clean slow-release energy balanced by eggs and avocado.',
      nutrition: { kcal: 410, protein: '15g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'cassava', name: 'Fresh peeled cassava (muwogo)', amount: 400, unit: 'g', aisle: 'produce', estUgx: 2000, prep: 'halved, center fiber removed' },
        { id: 'eggs', name: 'Fresh farm eggs', amount: 4, unit: 'pcs', aisle: 'protein', estUgx: 2400, prep: 'soft- or hard-boiled' },
        { id: 'avocado', name: 'Ripe avocado', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1500, prep: 'sliced' },
        { id: 'tomatoes', name: 'Tomatoes, red onion & lime', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1200, prep: 'diced kachumbari' }
      ],
      steps: [
        { text: 'Place peeled cassava chunks in salted water, cover, and boil 16 to 18 minutes until fork-tender, then drain.', timerMin: 18 },
        { text: 'Boil eggs in a separate small pot for 7 to 8 minutes while dicing quick tomato-onion kachumbari with lime.', timerMin: 8 },
        { text: 'Plate warm cassava with peeled eggs, sliced avocado, and fresh kachumbari.' }
      ],
      ugandaTip: 'Always pull out the tough stringy core after cutting cassava lengthwise so every piece cooks soft.'
    },
    {
      id: 'baked-herb-cassava-wedges',
      title: 'Crispy Baked Garlic & Rosemary Cassava Wedges',
      subtitle: 'Lightly brushed oven-baked muwogo wedges — all the crunch without deep-frying',
      cuisine: 'Ugandan',
      category: 'slow',
      mealSlots: ['lunch', 'dinner'],
      image: './images/baked-herb-cassava-wedges.jpg',
      prepMinutes: 10,
      cookMinutes: 30,
      totalMinutes: 40,
      servings: 3,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Par-boiling then baking cuts oil by over 80% compared to deep-fried cassava chips.',
      nutrition: { kcal: 275, protein: '3g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'cassava', name: 'Fresh peeled cassava (muwogo)', amount: 550, unit: 'g', aisle: 'produce', estUgx: 2500, prep: 'cut into thick wedges, core removed' },
        { id: 'garlic-rosemary', name: 'Crushed garlic, rosemary & paprika', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 700, prep: 'seasoning mix' },
        { id: 'olive-oil', name: 'Olive or sunflower oil', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'measured' },
        { id: 'lime', name: 'Fresh lime wedge', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'for serving' }
      ],
      steps: [
        { text: 'Par-boil cassava wedges in lightly salted water for 10 minutes until just starting to soften, then drain and steam dry for 2 minutes.', timerMin: 10 },
        { text: 'Toss wedges gently with 1 tablespoon oil, crushed garlic, rosemary, paprika, and salt.' },
        { text: 'Bake at 210C (or air-fry at 200C) for 20 minutes, flipping halfway, until golden and crisp outside. Squeeze lime over top.', timerMin: 20 }
      ],
      ugandaTip: 'Pairs wonderfully with grilled tilapia, chicken, or a cooling plain yogurt cucumber-mint dip.'
    },
    {
      id: 'cassava-beans-katogo',
      title: 'One-Pot Cassava & Red Beans Katogo',
      subtitle: 'Hearty Ugandan muwogo simmered slowly with pre-boiled Nambale beans and tender dodo',
      cuisine: 'Ugandan',
      category: 'onepot',
      mealSlots: ['breakfast', 'lunch', 'dinner'],
      image: './images/cassava-beans-katogo.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 3,
      tags: ['Plant-Forward', 'High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Combining cassava with high-fiber red beans slows glucose release and keeps you satisfied for hours.',
      nutrition: { kcal: 425, protein: '14g', fiber: '11g', sugar: 'Low' },
      ingredients: [
        { id: 'cassava', name: 'Fresh peeled cassava (muwogo)', amount: 450, unit: 'g', aisle: 'produce', estUgx: 2200, prep: '3cm chunks, core removed' },
        { id: 'cooked-beans', name: 'Pre-boiled Nambale or red beans', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'with a little bean broth' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'onion-garlic', name: 'Onion, garlic & fresh ginger', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1000, prep: 'chopped' },
        { id: 'dodo', name: 'Fresh dodo or sukuma greens', amount: 1, unit: 'bunch', aisle: 'greens', estUgx: 1000, prep: 'washed & chopped' }
      ],
      steps: [
        { text: 'Saute onion, garlic, and ginger in 1 measured tablespoon oil for 3 minutes, then cook diced tomatoes down for 2 more minutes (5 minutes total) into a rich paste.', timerMin: 5 },
        { text: 'Stir in pre-boiled beans and lay cassava chunks on top; add water just to cover, lid tightly, and simmer 20 minutes until cassava is tender.', timerMin: 20 },
        { text: 'Fold in chopped dodo greens for the final 2 minutes off heat so they stay bright green.' }
      ],
      ugandaTip: 'A spoonful of natural groundnut paste stirred in at the end makes the cassava katogo sauce velvety without extra oil.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(CASSAVA_RECIPES);
  }
})();
