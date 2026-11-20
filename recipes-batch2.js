(() => {
  const BATCH2_RECIPES = [
    {
      id: 'asian-mince-lettuce-wraps',
      title: '15-Min Asian Spiced Beef Mince Lettuce Wraps',
      subtitle: 'Savory garlic-ginger lean beef mince spooned into crisp lettuce cups with lime and chili',
      cuisine: 'Asian',
      category: 'quick',
      image: './images/asian-mince-lettuce-wraps.jpg',
      prepMinutes: 6,
      cookMinutes: 9,
      totalMinutes: 15,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'Low-Sugar'],
      healthNote: 'Replacing heavy wraps or buns with crisp lettuce leaves cuts carbs while keeping full savory flavor.',
      nutrition: { kcal: 315, protein: '29g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-mince', name: 'Lean beef mince', amount: 300, unit: 'g', aisle: 'protein', estUgx: 7500, prep: 'fresh' },
        { id: 'lettuce', name: 'Crisp whole lettuce leaves', amount: 1, unit: 'head', aisle: 'greens', estUgx: 2000, prep: 'washed & cupped' },
        { id: 'ginger-garlic', name: 'Ginger, garlic & spring onion', amount: 2, unit: 'tbsp', aisle: 'produce', estUgx: 800, prep: 'minced' },
        { id: 'soy-sauce', name: 'Light soy sauce & lime juice', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'whisked' }
      ],
      steps: [
        { text: 'Brown lean beef mince in a dry hot pan for 5 minutes with garlic, ginger, and spring onions.', timerMin: 5 },
        { text: 'Pour in light soy sauce and lime juice, toss 2 minutes until glazed, and spoon into crisp lettuce cups with fresh chili.' }
      ],
      ugandaTip: 'Shredded cabbage leaves also work cleanly as sturdy cups if crisp lettuce is out of season.'
    },
    {
      id: 'yogurt-fresh-fruit-medley-bowl',
      title: 'Creamy Plain Yogurt & Fresh Fruit Medley Bowl',
      subtitle: 'Cool plain yogurt folded with sweet banana, mango, pineapple, and crisp apple',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/yogurt-fresh-fruit-medley-bowl.jpg',
      prepMinutes: 6,
      cookMinutes: 0,
      totalMinutes: 6,
      servings: 2,
      tags: ['Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Natural fruit sugars and probiotic plain yogurt satisfy sweet cravings cleanly with zero syrups.',
      nutrition: { kcal: 230, protein: '8g', fiber: '5g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 1, unit: 'cup', aisle: 'protein', estUgx: 2500, prep: 'chilled' },
        { id: 'banana', name: 'Ripe banana & pineapple chunks', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 1800, prep: 'bite-sized' },
        { id: 'apple', name: 'Crisp apple or mango', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1200, prep: 'diced' }
      ],
      steps: [
        { text: 'Combine chopped fresh fruit in a wide bowl, pour chilled plain yogurt over top, and fold gently.' }
      ],
      ugandaTip: 'Sprinkle 1 tablespoon chia seeds or toasted simsim on top for extra crunch and omega-3s.'
    },
    {
      id: 'ugandan-chicken-carrot-potato-soup',
      title: 'Light Chicken, Carrot & Irish Potato Healing Broth',
      subtitle: 'Clear slow-simmered chicken drumstick soup with tender carrots, Irish potatoes, and herbs',
      cuisine: 'Ugandan',
      category: 'onepot',
      image: './images/ugandan-chicken-carrot-potato-soup.jpg',
      prepMinutes: 10,
      cookMinutes: 30,
      totalMinutes: 40,
      servings: 3,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Gentle warm chicken broth with zero frying oil is deeply soothing on the stomach and immune-supportive.',
      nutrition: { kcal: 340, protein: '28g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Skinless chicken drumsticks or thighs', amount: 500, unit: 'g', aisle: 'protein', estUgx: 11000, prep: 'trimmed' },
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'cubed' },
        { id: 'carrots', name: 'Carrots & onion', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1200, prep: 'sliced' },
        { id: 'garlic-thyme', name: 'Garlic, fresh ginger & thyme', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 700, prep: 'bruised' }
      ],
      steps: [
        { text: 'Place chicken, onion, garlic, ginger, thyme, salt, and 4 cups water in a pot; simmer gently covered for 20 minutes.', timerMin: 20 },
        { text: 'Add cubed Irish potatoes and sliced carrots; simmer 12 more minutes until tender and flavorful.', timerMin: 12 }
      ],
      ugandaTip: 'Skim any surface foam early so the broth stays crystal-clear and light.'
    },
    {
      id: 'beetroot-carrot-apple-ginger-juice',
      title: 'Beetroot, Carrot, Apple & Ginger Detox Juice',
      subtitle: 'Ruby-red fresh blend of beetroot, carrots, crisp apple, orange, and spicy ginger',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/beetroot-carrot-apple-ginger-juice.jpg',
      prepMinutes: 12,
      cookMinutes: 0,
      totalMinutes: 12,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Beetroot, carrot, and ginger support liver cleansing, blood flow, and clean morning stamina.',
      nutrition: { kcal: 110, protein: '2g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'beetroot', name: 'Fresh beetroot', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1000, prep: 'peeled & chopped' },
        { id: 'carrots', name: 'Carrots', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 800, prep: 'chopped' },
        { id: 'apple', name: 'Crisp apple & orange', amount: 1, unit: 'set', aisle: 'produce', estUgx: 2000, prep: 'cored & peeled' },
        { id: 'ginger', name: 'Fresh ginger & lemon', amount: 1, unit: 'thumb', aisle: 'produce', estUgx: 600, prep: 'peeled' }
      ],
      steps: [
        { text: 'Blend beetroot, carrots, apple, peeled orange, ginger, and 1.5 cups cold water until completely smooth.' },
        { text: 'Strain through a fine sieve or cloth, stir in a squeeze of fresh lemon, and serve chilled.' }
      ],
      ugandaTip: 'Swap apple for sweet pineapple anytime for an all-local Kampala market version.'
    },
    {
      id: 'celery-cucumber-ginger-detox',
      title: 'Cucumber, Celery, Ginger & Lemon Green Detox',
      subtitle: 'Crisp hydrating green tonic with garden greens, green apple, and zesty lemon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/celery-cucumber-ginger-detox.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Ultra-low-sugar green hydration packed with electrolytes, ginger warmth, and vitamin C.',
      nutrition: { kcal: 58, protein: '1g', fiber: '2g', sugar: 'Low' },
      ingredients: [
        { id: 'cucumber', name: 'Fresh cucumber & celery stalks', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'chopped' },
        { id: 'dodo', name: 'Spinach or tender kale/dodo', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 700, prep: 'washed' },
        { id: 'apple', name: 'Green apple', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1500, prep: 'cored' },
        { id: 'ginger-lemon', name: 'Fresh ginger & lemon', amount: 1, unit: 'set', aisle: 'produce', estUgx: 700, prep: 'peeled & juiced' }
      ],
      steps: [
        { text: 'Blend cucumber, celery, leafy greens, green apple, ginger, and 1 cup cold water until smooth.' },
        { text: 'Strain lightly through a mesh sieve, stir in fresh lemon juice, and bottle chilled.' }
      ],
      ugandaTip: 'Drink first thing in the morning or mid-afternoon before coffee to feel refreshed.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(BATCH2_RECIPES);
  }
})();
