(() => {
  const COMFORT_RECIPES = [
    {
      id: 'lean-mince-tomato-pasta',
      title: 'Lean Beef Mince, Tomato & Carrot Spaghetti',
      subtitle: 'High-protein lean beef ragu simmered with sweet carrots, garlic, and whole-wheat pasta',
      cuisine: 'Italian',
      category: 'quick',
      image: './images/lean-mince-tomato-pasta.jpg',
      prepMinutes: 6,
      cookMinutes: 14,
      totalMinutes: 20,
      servings: 3,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Grating carrots into lean beef mince boosts fiber and natural sweetness with zero jar sugar.',
      nutrition: { kcal: 445, protein: '32g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-mince', name: 'Lean beef mince', amount: 350, unit: 'g', aisle: 'protein', estUgx: 8500, prep: 'fat drained after browning' },
        { id: 'spaghetti', name: 'Whole-wheat or durum spaghetti', amount: 220, unit: 'g', aisle: 'grains', estUgx: 3500, prep: 'dry' },
        { id: 'tomatoes', name: 'Ripe market tomatoes', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'grated or blended' },
        { id: 'carrots', name: 'Sweet carrots', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 1000, prep: 'finely grated' },
        { id: 'onion-garlic', name: 'Onion, garlic & dried oregano', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'chopped' }
      ],
      steps: [
        { text: 'Brown lean beef mince in a dry hot pan for 5 minutes until crumbly, draining off excess liquid if needed.', timerMin: 5 },
        { text: 'Add onion, garlic, grated carrots, oregano, and grated tomatoes; simmer covered 9 minutes while spaghetti boils al dente.', timerMin: 9 },
        { text: 'Toss drained spaghetti with the thick mince sauce and a splash of pasta water.' }
      ],
      ugandaTip: 'Grated carrots melt into the tomato sauce and replace added sugar completely.'
    },
    {
      id: 'healthy-mince-irish-shepherd-skillet',
      title: 'One-Pot Lean Mince & Irish Potato Skillet',
      subtitle: 'Savory minced beef simmered with diced Irish potatoes, carrots, and herbs',
      cuisine: 'Ugandan',
      category: 'onepot',
      image: './images/healthy-mince-irish-shepherd-skillet.jpg',
      prepMinutes: 10,
      cookMinutes: 20,
      totalMinutes: 30,
      servings: 3,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'One-pot cooking keeps fat low while pairing iron-rich beef mince with potassium-packed Irish potatoes.',
      nutrition: { kcal: 420, protein: '29g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-mince', name: 'Lean beef mince', amount: 350, unit: 'g', aisle: 'protein', estUgx: 8500, prep: 'fresh' },
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 4, unit: 'medium', aisle: 'produce', estUgx: 2500, prep: 'peeled & 2cm diced' },
        { id: 'carrots', name: 'Carrots & green peas/beans', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'garlic-thyme', name: 'Onion, garlic, thyme & paprika', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 800, prep: 'chopped' }
      ],
      steps: [
        { text: 'Brown mince with onion, garlic, paprika, and thyme in a dry pot for 5 minutes.', timerMin: 5 },
        { text: 'Add diced Irish potatoes, carrots, tomatoes, and 1.5 cups water; cover and simmer 15 minutes until potatoes are fork-tender.', timerMin: 15 }
      ],
      ugandaTip: 'Finish with chopped fresh coriander (dhania) or shredded sukuma wiki stirred in for the final minute.'
    },
    {
      id: 'ugandan-irish-potato-herb-hash',
      title: '15-Min Crispy Herb Irish Potatoes & Soft Eggs',
      subtitle: 'Lightly pan-crisped diced Irish potatoes with rosemary, peppers, and farm eggs',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/ugandan-irish-potato-herb-hash.jpg',
      prepMinutes: 6,
      cookMinutes: 12,
      totalMinutes: 18,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Pan-steaming small Irish potato cubes with just 1 teaspoon oil gives crisp edges without deep frying.',
      nutrition: { kcal: 365, protein: '16g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'small 1cm cubes' },
        { id: 'eggs', name: 'Farm eggs', amount: 3, unit: 'pcs', aisle: 'protein', estUgx: 1800, prep: 'whole' },
        { id: 'bell-pepper', name: 'Bell pepper & onion', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1200, prep: 'diced' },
        { id: 'rosemary-garlic', name: 'Garlic, rosemary & paprika', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'minced' }
      ],
      steps: [
        { text: 'Cook 1cm diced Irish potatoes in a covered pan with 1 teaspoon oil and 2 tablespoons water for 7 minutes until tender.', timerMin: 7 },
        { text: 'Uncover, add onion, bell pepper, garlic, and rosemary, and toss 3 minutes until crisp.', timerMin: 3 },
        { text: 'Make small spaces in the pan, crack in the eggs, cover 2 minutes until whites set, and serve warm.' }
      ],
      ugandaTip: 'Cutting Irish potatoes into small 1cm cubes halves cooking time and skips deep-frying chips.'
    },
    {
      id: 'mediterranean-chicken-pasta-salad',
      title: 'Mediterranean Herb Pasta, Cucumber & Chicken Salad',
      subtitle: 'Chilled pasta tossed with crisp cucumber, tomatoes, grilled chicken, and lemon',
      cuisine: 'Mediterranean',
      category: 'salads',
      image: './images/mediterranean-chicken-pasta-salad.jpg',
      prepMinutes: 8,
      cookMinutes: 9,
      totalMinutes: 17,
      servings: 3,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Cooled cooked pasta forms resistant starch while crisp market vegetables keep every bowl refreshing.',
      nutrition: { kcal: 390, protein: '28g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'pasta-shapes', name: 'Penne or fusilli pasta', amount: 180, unit: 'g', aisle: 'grains', estUgx: 3500, prep: 'boiled & rinsed cool' },
        { id: 'chicken-breast', name: 'Grilled or leftover chicken breast', amount: 250, unit: 'g', aisle: 'protein', estUgx: 6500, prep: 'diced' },
        { id: 'cucumber', name: 'Cucumber & ripe tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'red-onion', name: 'Red onion & fresh coriander', amount: 1, unit: 'set', aisle: 'greens', estUgx: 800, prep: 'finely chopped' },
        { id: 'lemon', name: 'Lemon juice, oregano & 1 tbsp olive oil', amount: 1, unit: 'pc', aisle: 'pantry', estUgx: 1000, prep: 'whisked dressing' }
      ],
      steps: [
        { text: 'Boil pasta 9 minutes until al dente, drain, and rinse briefly under cold water to cool.', timerMin: 9 },
        { text: 'Toss cooled pasta with diced chicken, cucumber, tomatoes, red onion, coriander, lemon juice, oregano, and olive oil.' }
      ],
      ugandaTip: 'Keeps cleanly in the fridge for 2 days — great ready-made lunch box.'
    },
    {
      id: 'creamy-yogurt-irish-potato-salad',
      title: 'No-Mayo Plain Yogurt & Herb Irish Potato Salad',
      subtitle: 'Tender boiled Irish potatoes dressed in plain yogurt, lemon, garlic, and herbs',
      cuisine: 'Mediterranean',
      category: 'salads',
      image: './images/creamy-yogurt-irish-potato-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 15,
      totalMinutes: 25,
      servings: 3,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Replacing heavy mayonnaise with plain yogurt cuts calories in half while adding gut-friendly protein.',
      nutrition: { kcal: 240, protein: '8g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 500, unit: 'g', aisle: 'produce', estUgx: 2500, prep: 'cubed' },
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 0.5, unit: 'cup', aisle: 'protein', estUgx: 1500, prep: 'base dressing' },
        { id: 'lemon', name: 'Lemon juice & minced garlic', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 600, prep: 'whisked with yogurt' },
        { id: 'spring-onion', name: 'Spring onions & coriander', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 600, prep: 'chopped' }
      ],
      steps: [
        { text: 'Boil cubed Irish potatoes in lightly salted water for 12 minutes until just tender; drain and let cool 5 minutes.', timerMin: 12 },
        { text: 'Whisk plain yogurt, lemon juice, tiny garlic pinch, black pepper, and salt; fold gently over warm potatoes with spring onions and coriander.' }
      ],
      ugandaTip: 'Add 2 chopped boiled eggs for an instant high-protein lunch.'
    },
    {
      id: 'slow-baked-mince-irish-potato-casserole',
      title: 'Healthy Baked Mince & Mashed Irish Potato Pie',
      subtitle: 'Lean spiced beef mince & veggie base topped with olive-oil mashed Irish potatoes',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/slow-baked-mince-irish-potato-casserole.jpg',
      prepMinutes: 15,
      cookMinutes: 35,
      totalMinutes: 50,
      servings: 4,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Mashing Irish potatoes with warm cooking water and 1 tbsp olive oil skips heavy butter and cream.',
      nutrition: { kcal: 415, protein: '28g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-mince', name: 'Lean beef mince', amount: 400, unit: 'g', aisle: 'protein', estUgx: 9500, prep: 'browned dry' },
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 600, unit: 'g', aisle: 'produce', estUgx: 3000, prep: 'peeled & quartered' },
        { id: 'carrots', name: 'Carrots & green peas', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 1500, prep: 'finely diced' },
        { id: 'tomatoes', name: 'Tomatoes, onion & garlic', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1500, prep: 'chopped' },
        { id: 'thyme-olive', name: 'Thyme, paprika & 1 tbsp olive oil', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'measured' }
      ],
      steps: [
        { text: 'Boil Irish potatoes 15 minutes until soft, then mash with 1 tablespoon olive oil, garlic pinch, and splash of potato water.', timerMin: 15 },
        { text: 'Brown mince with onion, garlic, carrots, peas, tomatoes, and thyme for 10 minutes until thick.', timerMin: 10 },
        { text: 'Spread mince in a baking dish, spoon mashed Irish potatoes over top, and bake at 200C for 20 minutes until golden.', timerMin: 20 }
      ],
      ugandaTip: 'No oven? Put the mashed potato layer right over the mince in a wide heavy pot, cover tightly, and cook on very low heat for 10 minutes.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(COMFORT_RECIPES);
  }
})();
