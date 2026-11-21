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
        { text: 'Gently separate whole crisp lettuce leaves, rinse in cold water, shake dry thoroughly, and arrange on a serving platter so they stay crunchy.' },
        { text: 'Heat a wide skillet over medium-high heat with no oil (or 1/2 teaspoon if very lean); add beef mince, breaking it into fine crumbles with a wooden spoon, and brown for 5 minutes until no pink remains and moisture evaporates.', timerMin: 5 },
        { text: 'Stir in 1 tablespoon grated fresh ginger, 2 minced garlic cloves, white parts of spring onions, and a pinch of chili flakes; saute 1 minute until deeply aromatic.' },
        { text: 'Pour in 1.5 tablespoons light soy sauce and juice of 1/2 lime, tossing 2 minutes until glossy and lightly caramelized. Spoon warm beef into crisp lettuce cups and scatter green spring onion tops and extra lime wedges.' }
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
        { text: 'Wash and core crisp apple (leave skin on for fiber) and dice into even bite-sized cubes; slice ripe yellow banana into coins and cube chilled sweet pineapple or mango.' },
        { text: 'Toss the diced apple immediately with a light squeeze of fresh lemon or lime juice so it stays crisp and bright without browning.' },
        { text: 'Whisk chilled plain unsweetened yogurt in a small bowl with 1/4 teaspoon ground cinnamon (and a tiny splash of milk if very thick) until smooth and pourable.' },
        { text: 'Combine all chilled fruit in a wide serving bowl, pour creamy yogurt over top, fold gently so fruit stays intact, and finish with a sprinkle of toasted simsim or chia seeds.' }
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
        { text: 'Remove skin and visible fat from chicken drumsticks or thighs so the broth stays light and clean. Peel and cut Irish potatoes into 2.5 cm chunks and slice carrots into coins.' },
        { text: 'Place chicken, quartered onion, 3 smashed garlic cloves, 4 slices fresh ginger, 1/2 teaspoon dried thyme (or 2 fresh sprigs), 1 teaspoon salt, and 4.5 cups cold water in a heavy pot. Bring slowly to a boil over medium heat, skimming off any gray foam that rises to the surface.' },
        { text: 'Lower heat to a gentle covered simmer for 18 to 20 minutes so the chicken bones release rich flavor and meat turns tender.', timerMin: 20 },
        { text: 'Add cubed Irish potatoes and sliced carrots; cover and simmer 12 more minutes until a fork slides cleanly into the potatoes. Taste broth for salt and cracked black pepper, finish with chopped fresh coriander, and serve piping hot.', timerMin: 12 }
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
        { text: 'Scrub carrots and peel fresh beetroot, orange (removing seeds and thick white pith), and ginger root. Core the apple and chop all ingredients into small 1–2 cm cubes so your blender processes them effortlessly.' },
        { text: 'Place the juiciest pieces (orange and apple) at the bottom of the blender first, add beetroot, carrots, sliced ginger, and 1.5 cups cold filtered water.' },
        { text: 'Blend on high speed for 60 seconds until completely smooth and ruby-red with no gritty carrot pieces.' },
        { text: 'Pour through a fine mesh sieve or clean muslin cloth into a pitcher, pressing pulp firmly with a spoon; stir in a bright squeeze of fresh lemon juice and serve chilled over ice.' }
      ],
      ugandaTip: 'Swap apple for sweet pineapple anytime for an all-local Kampala market version.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(BATCH2_RECIPES);
  }
})();
