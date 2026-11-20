(() => {
  const INTL_RECIPES = [
    {
      id: 'mediterranean-chickpea-salad',
      title: 'Mediterranean Cucumber, Tomato & Chickpea Salad',
      subtitle: 'Crisp Greek-style chopped salad with chickpeas, herbs, lemon, and olive oil',
      cuisine: 'Mediterranean',
      category: 'salads',
      image: './images/mediterranean-chickpea-salad.jpg',
      prepMinutes: 12,
      cookMinutes: 0,
      totalMinutes: 12,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Chickpeas and extra-virgin olive oil offer steady plant protein, fiber, and heart-protective fats.',
      nutrition: { kcal: 330, protein: '13g', fiber: '9g', sugar: 'Low' },
      ingredients: [
        { id: 'chickpeas', name: 'Cooked or canned chickpeas', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 3500, prep: 'rinsed & drained' },
        { id: 'cucumber', name: 'Fresh cucumber', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1000, prep: 'chunked' },
        { id: 'tomatoes', name: 'Ripe firm tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'cut in wedges' },
        { id: 'red-onion', name: 'Red onion', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'thin rings' },
        { id: 'feta-or-avocado', name: 'Feta cheese (or cubed avocado)', amount: 80, unit: 'g', aisle: 'protein', estUgx: 3500, prep: 'crumbled' },
        { id: 'olive-oil', name: 'Olive oil & lemon juice', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 1000, prep: 'with dried oregano' }
      ],
      steps: [
        { text: 'Combine cucumber chunks, tomato wedges, thin red onion rings, and rinsed chickpeas in a shallow salad bowl.' },
        { text: 'Whisk olive oil, fresh lemon juice, dried oregano, salt, and black pepper; pour over the vegetables and toss gently.' },
        { text: 'Scatter crumbled feta (or diced ripe avocado if skipping dairy) over the top and serve chilled.' }
      ],
      ugandaTip: 'Dry chickpeas (chana) are sold cheaply in Nakasero & Owino spice stalls, or grab canned chickpeas at any Kampala supermarket.'
    },
    {
      id: 'mediterranean-herb-chicken',
      title: 'Mediterranean Lemon-Herb Roasted Chicken & Veg',
      subtitle: 'One-pan roast chicken with sweet peppers, zucchini, onions, and rosemary',
      cuisine: 'Mediterranean',
      category: 'slow',
      image: './images/mediterranean-herb-chicken.jpg',
      prepMinutes: 12,
      cookMinutes: 35,
      totalMinutes: 47,
      servings: 3,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Oven-roasting on one tray locks in juiciness with minimal oil while caramelizing fiber-rich vegetables.',
      nutrition: { kcal: 405, protein: '36g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Skinless chicken thighs or drumsticks', amount: 550, unit: 'g', aisle: 'protein', estUgx: 12000, prep: 'trimmed' },
        { id: 'courgette', name: 'Courgettes (zucchini)', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'thick slices' },
        { id: 'bell-pepper', name: 'Red & yellow bell peppers', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'chunked' },
        { id: 'red-onion', name: 'Red onion', amount: 1, unit: 'large', aisle: 'produce', estUgx: 700, prep: 'wedges' },
        { id: 'lemon', name: 'Lemon, garlic & rosemary', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'juiced & minced' },
        { id: 'olive-oil', name: 'Olive or sunflower oil', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'for tossing' }
      ],
      steps: [
        { text: 'Toss chicken and chopped vegetables on a baking tray with 1 tablespoon oil, minced garlic, lemon juice, rosemary, salt, and pepper.' },
        { text: 'Roast at 200C for 35 minutes, turning vegetables halfway, until chicken is golden and cooked through.', timerMin: 35 }
      ],
      ugandaTip: 'No oven? Brown the chicken first in a covered heavy pot, then add the vegetables for the last 12 minutes.'
    },
    {
      id: 'italian-tomato-basil-pasta',
      title: '15-Min Italian Garlic, Tomato & Basil Pasta',
      subtitle: 'Light whole-wheat spaghetti tossed in fresh market tomato sauce and herbs',
      cuisine: 'Italian',
      category: 'quick',
      image: './images/italian-tomato-basil-pasta.jpg',
      prepMinutes: 5,
      cookMinutes: 10,
      totalMinutes: 15,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Cooking fresh market tomatoes briefly with garlic and olive oil creates a clean sauce with zero jar sugar.',
      nutrition: { kcal: 380, protein: '12g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'spaghetti', name: 'Whole-wheat (or durum) spaghetti', amount: 180, unit: 'g', aisle: 'grains', estUgx: 3500, prep: 'dry' },
        { id: 'tomatoes', name: 'Ripe sweet tomatoes', amount: 5, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'finely chopped' },
        { id: 'garlic', name: 'Fresh garlic cloves', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 500, prep: 'thinly sliced' },
        { id: 'basil', name: 'Fresh basil (or parsley/coriander)', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 1000, prep: 'torn leaves' },
        { id: 'olive-oil', name: 'Extra-virgin olive oil', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'measured' }
      ],
      steps: [
        { text: 'Boil spaghetti in salted water for 9 minutes until al dente, saving 1/3 cup starchy pasta water before draining.', timerMin: 9 },
        { text: 'Meanwhile gently warm sliced garlic in 1 tablespoon olive oil for 1 minute, add chopped tomatoes and pinch of salt, and simmer 6 minutes.', timerMin: 6 },
        { text: 'Toss drained pasta into the tomato sauce with a splash of pasta water and fresh torn basil.' }
      ],
      ugandaTip: 'Pair with grilled chicken breast strips or a handful of white beans to turn this into a high-protein dinner.'
    },
    {
      id: 'italian-tuscan-bean-soup',
      title: 'Tuscan White Bean, Carrot & Sukuma Minestrone',
      subtitle: 'Hearty Italian one-pot vegetable and bean soup adapted with local greens',
      cuisine: 'Italian',
      category: 'onepot',
      image: './images/italian-tuscan-bean-soup.jpg',
      prepMinutes: 10,
      cookMinutes: 20,
      totalMinutes: 30,
      servings: 3,
      tags: ['High-Protein', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Warm broth, beans, carrots, and leafy greens satisfy big appetites for very few calories.',
      nutrition: { kcal: 310, protein: '15g', fiber: '11g', sugar: 'Low' },
      ingredients: [
        { id: 'white-beans', name: 'Pre-boiled white or kidney beans', amount: 2, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'rinsed' },
        { id: 'carrots', name: 'Carrots', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'onion-garlic', name: 'Onion, celery/leek & garlic', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1200, prep: 'chopped' },
        { id: 'sukuma', name: 'Sukuma wiki or spinach', amount: 1, unit: 'bunch', aisle: 'greens', estUgx: 1000, prep: 'shredded' },
        { id: 'herbs', name: 'Dried thyme or oregano', amount: 1, unit: 'tsp', aisle: 'pantry', estUgx: 400, prep: 'measured' }
      ],
      steps: [
        { text: 'Saute onion, carrots, and garlic in 1 teaspoon olive oil for 4 minutes until fragrant.', timerMin: 4 },
        { text: 'Add diced tomatoes, thyme, beans, and 3.5 cups water; simmer covered for 15 minutes until carrots are tender.', timerMin: 15 },
        { text: 'Stir in shredded sukuma wiki for 2 minutes until bright green. Season with salt, pepper, and a squeeze of lemon.' }
      ],
      ugandaTip: 'Mash 1/3 cup of the beans against the pot side so the soup turns creamy without cream.'
    },
    {
      id: 'asian-ginger-chicken-stirfry',
      title: '15-Min Asian Ginger-Garlic Chicken Stir-Fry',
      subtitle: 'Crisp carrots, cabbage, peppers, and chicken glazed in light soy & ginger',
      cuisine: 'Asian',
      category: 'quick',
      image: './images/asian-ginger-chicken-stirfry.jpg',
      prepMinutes: 8,
      cookMinutes: 7,
      totalMinutes: 15,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Fast high-heat stir-frying keeps vegetables crunchy and vitamin C intact with just 1 teaspoon oil.',
      nutrition: { kcal: 345, protein: '33g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Skinless chicken breast', amount: 300, unit: 'g', aisle: 'protein', estUgx: 7500, prep: 'thin strips' },
        { id: 'cabbage', name: 'Green cabbage or bok choy', amount: 200, unit: 'g', aisle: 'greens', estUgx: 1000, prep: 'sliced ribbons' },
        { id: 'carrots', name: 'Carrots & bell pepper', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'thin matchsticks' },
        { id: 'ginger-garlic', name: 'Fresh ginger & garlic', amount: 1.5, unit: 'tbsp', aisle: 'produce', estUgx: 700, prep: 'finely grated' },
        { id: 'soy-sauce', name: 'Light soy sauce & lime', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'mixed with 2 tbsp water' },
        { id: 'simsim', name: 'Toasted simsim seeds', amount: 1, unit: 'tbsp', aisle: 'grains', estUgx: 400, prep: 'garnish' }
      ],
      steps: [
        { text: 'Stir-fry chicken strips in a very hot pan with 1 teaspoon oil for 4 minutes until browned and cooked through; transfer briefly to a plate.', timerMin: 4 },
        { text: 'Toss carrots, bell pepper, cabbage, ginger, and garlic in the hot pan for 2 minutes until crisp-tender.' },
        { text: 'Return chicken, pour in soy-lime splash, toss 30 seconds until glossy, and scatter toasted simsim seeds.' }
      ],
      ugandaTip: 'Serve on its own for a light evening meal or beside 1/2 cup steamed rice after training.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(INTL_RECIPES);
  }
})();
