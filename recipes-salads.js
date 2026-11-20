(() => {
  const SALAD_RECIPES = [
    {
      id: 'ugandan-tropical-fruit-mint-salad',
      title: 'Tropical Mango, Pineapple, Pawpaw & Mint Fruit Salad',
      subtitle: 'Sun-ripened Ugandan market fruits lifted with fresh lime juice, mint leaves, and chia seeds',
      cuisine: 'Ugandan',
      category: 'salads',
      mealSlots: ['breakfast', 'juice'],
      image: './images/ugandan-tropical-fruit-mint-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 3,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Whole fresh fruit delivers vitamin C, digestive enzymes, and fiber without any added syrup.',
      nutrition: { kcal: 155, protein: '2g', fiber: '5g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'mango', name: 'Ripe sweet mango', amount: 1, unit: 'large', aisle: 'produce', estUgx: 1500, prep: 'cubed' },
        { id: 'pineapple', name: 'Sweet pineapple', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'bite-sized chunks' },
        { id: 'pawpaw', name: 'Ripe pawpaw & watermelon', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'cubed' },
        { id: 'passion-fruit', name: 'Fresh passion fruits', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 800, prep: 'pulp drizzled over top' },
        { id: 'mint', name: 'Fresh mint, lime & 1 tsp chia seeds', amount: 1, unit: 'set', aisle: 'greens', estUgx: 800, prep: 'torn leaves & juiced' }
      ],
      steps: [
        { text: 'Combine chilled cubed mango, pineapple, pawpaw, and watermelon in a wide bowl.' },
        { text: 'Drizzle with fresh lime juice and passion fruit pulp, scatter torn mint leaves and chia seeds, and toss gently.' }
      ],
      ugandaTip: 'Spoon over plain unsweetened yogurt for an instant high-protein breakfast or afternoon snack.'
    },
    {
      id: 'watermelon-cucumber-feta-mint-salad',
      title: 'Chilled Watermelon, Cucumber & Mint Salad',
      subtitle: 'Ultra-hydrating sweet watermelon paired with crisp cucumber, lime, mint, and feta or avocado',
      cuisine: 'Mediterranean',
      category: 'salads',
      mealSlots: ['lunch', 'juice'],
      image: './images/watermelon-cucumber-feta-mint-salad.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Over 90% natural hydrating water plus electrolytes and antioxidants — refreshing on warm afternoons.',
      nutrition: { kcal: 175, protein: '5g', fiber: '3g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'watermelon', name: 'Chilled sweet watermelon', amount: 3, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'cubed' },
        { id: 'cucumber', name: 'Crisp cucumber', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1000, prep: 'half-moons' },
        { id: 'feta-or-avocado', name: 'Crumbled feta (or diced avocado)', amount: 60, unit: 'g', aisle: 'protein', estUgx: 2500, prep: 'scattered on top' },
        { id: 'mint', name: 'Fresh mint leaves & lime', amount: 1, unit: 'set', aisle: 'greens', estUgx: 700, prep: 'torn & juiced' }
      ],
      steps: [
        { text: 'Arrange chilled watermelon cubes and sliced cucumber on a shallow platter.' },
        { text: 'Squeeze fresh lime over top, add torn mint leaves, a tiny pinch of sea salt, black pepper, and crumbled feta or avocado.' }
      ],
      ugandaTip: 'Make right before serving so the watermelon stays crisp and juicy.'
    },
    {
      id: 'seared-beef-avocado-kachumbari-salad',
      title: 'Seared Garlic-Pepper Beef & Avocado Greens Salad',
      subtitle: 'Tender pan-seared lean beef strips over crisp lettuce, tomatoes, cucumber, and lime dressing',
      cuisine: 'Ugandan',
      category: 'salads',
      mealSlots: ['lunch', 'dinner'],
      image: './images/seared-beef-avocado-kachumbari-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 8,
      totalMinutes: 18,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'Low-Sugar'],
      healthNote: 'Lean seared beef delivers iron and B12 while raw greens and lime juice maximize iron absorption.',
      nutrition: { kcal: 410, protein: '34g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-meat', name: 'Lean beef steak (fillet or topside)', amount: 300, unit: 'g', aisle: 'protein', estUgx: 8000, prep: 'sliced thin across grain' },
        { id: 'lettuce-cabbage', name: 'Crisp lettuce or baby spinach', amount: 200, unit: 'g', aisle: 'greens', estUgx: 1500, prep: 'washed & torn' },
        { id: 'avocado', name: 'Ripe avocado', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1500, prep: 'sliced' },
        { id: 'tomatoes', name: 'Tomatoes, cucumber & red onion', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'garlic-lime', name: 'Garlic, black pepper, lime & 1 tsp oil', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 800, prep: 'marinade & dressing' }
      ],
      steps: [
        { text: 'Toss thin beef strips with minced garlic, black pepper, salt, and 1 teaspoon oil. Sear in a smoking-hot skillet for 3 to 4 minutes until browned yet tender.', timerMin: 4 },
        { text: 'Toss greens, tomatoes, cucumber, and soaked red onion with lime juice and 1 teaspoon olive oil.' },
        { text: 'Top with warm seared beef strips and fanned avocado slices.' }
      ],
      ugandaTip: 'Always slice steak thinly across the grain and sear hot and fast so lean local beef stays tender.'
    },
    {
      id: 'asian-ginger-beef-cabbage-salad',
      title: 'Asian Ginger-Lime Beef & Crunchy Cabbage Salad',
      subtitle: 'Savory seared beef strips over shredded cabbage, carrots, peppers, and toasted simsim',
      cuisine: 'Asian',
      category: 'salads',
      mealSlots: ['lunch', 'dinner'],
      image: './images/asian-ginger-beef-cabbage-salad.jpg',
      prepMinutes: 12,
      cookMinutes: 6,
      totalMinutes: 18,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'Low-Sugar'],
      healthNote: 'High-protein beef paired with crunchy raw cabbage and ginger-lime soy dressing makes a low-carb powerhouse.',
      nutrition: { kcal: 390, protein: '33g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-meat', name: 'Lean beef steak', amount: 300, unit: 'g', aisle: 'protein', estUgx: 8000, prep: 'thin strips' },
        { id: 'cabbage', name: 'Green & purple cabbage', amount: 250, unit: 'g', aisle: 'greens', estUgx: 1500, prep: 'finely shredded' },
        { id: 'carrots', name: 'Carrots & red bell pepper', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'thin matchsticks' },
        { id: 'ginger-soy', name: 'Grated ginger, light soy sauce & lime', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 900, prep: 'whisked dressing' },
        { id: 'simsim', name: 'Toasted simsim seeds & coriander', amount: 2, unit: 'tbsp', aisle: 'grains', estUgx: 800, prep: 'garnish' }
      ],
      steps: [
        { text: 'Sear beef strips in a hot lightly oiled skillet with half the ginger and soy sauce for 4 minutes until browned.', timerMin: 4 },
        { text: 'Toss shredded cabbage, carrots, bell pepper, and coriander with lime juice and remaining ginger-soy dressing.' },
        { text: 'Pile warm beef over the crunchy slaw and scatter toasted simsim seeds.' }
      ],
      ugandaTip: 'Add a pinch of fresh chili or crushed roasted groundnuts for extra Thai-style crunch.'
    },
    {
      id: 'creamy-yogurt-chicken-avocado-salad',
      title: 'No-Mayo Plain Yogurt, Chicken & Avocado Salad',
      subtitle: 'Shredded herb chicken folded with plain yogurt, lemon, crisp cucumber, and avocado',
      cuisine: 'Mediterranean',
      category: 'salads',
      mealSlots: ['lunch', 'dinner'],
      image: './images/creamy-yogurt-chicken-avocado-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Plain unsweetened yogurt gives all the creaminess of chicken salad with double the protein and zero mayo oil.',
      nutrition: { kcal: 365, protein: '36g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Cooked shredded or diced chicken breast', amount: 300, unit: 'g', aisle: 'protein', estUgx: 7500, prep: 'cooled' },
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 0.5, unit: 'cup', aisle: 'protein', estUgx: 1500, prep: 'creamy base' },
        { id: 'avocado', name: 'Ripe avocado', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 800, prep: 'cubed' },
        { id: 'cucumber', name: 'Cucumber, celery/onion & coriander', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 1200, prep: 'finely diced' },
        { id: 'lemon', name: 'Fresh lemon, garlic pinch & black pepper', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 600, prep: 'seasoning' }
      ],
      steps: [
        { text: 'Whisk plain yogurt with lemon juice, tiny garlic pinch, salt, and black pepper in a mixing bowl.' },
        { text: 'Fold in diced cooked chicken, cucumber, red onion, coriander, and avocado cubes until evenly coated.' }
      ],
      ugandaTip: 'Scoop onto crisp lettuce leaves, eat with whole-wheat toast, or pack straight into a lunch box.'
    },
    {
      id: 'grilled-chicken-mango-greens-salad',
      title: 'Grilled Herb Chicken, Sweet Mango & Spinach Salad',
      subtitle: 'Warm spiced chicken breast over leafy greens with juicy mango, avocado, and lime',
      cuisine: 'Ugandan',
      category: 'salads',
      mealSlots: ['lunch', 'dinner'],
      image: './images/grilled-chicken-mango-greens-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 10,
      totalMinutes: 20,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Sweet Ugandan mango and tangy lime replace sugary bottled dressings over lean grilled chicken.',
      nutrition: { kcal: 385, protein: '34g', fiber: '7g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'chicken-breast', name: 'Skinless chicken breast', amount: 300, unit: 'g', aisle: 'protein', estUgx: 7500, prep: 'seasoned with paprika & garlic' },
        { id: 'mango', name: 'Firm ripe mango', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1200, prep: 'diced' },
        { id: 'lettuce-cabbage', name: 'Baby spinach or crisp lettuce', amount: 200, unit: 'g', aisle: 'greens', estUgx: 1500, prep: 'washed' },
        { id: 'avocado', name: 'Ripe avocado & red onion', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1800, prep: 'sliced' },
        { id: 'lime', name: 'Fresh lime & 1 tsp olive oil', amount: 1.5, unit: 'pcs', aisle: 'produce', estUgx: 800, prep: 'whisked dressing' }
      ],
      steps: [
        { text: 'Sear or grill seasoned chicken breast for 5 minutes per side until juicy and cooked through, then rest 3 minutes and slice.', timerMin: 10 },
        { text: 'Toss leafy greens, mango cubes, soaked red onion, and avocado with lime juice and 1 teaspoon olive oil. Top with warm sliced chicken.' }
      ],
      ugandaTip: 'Swap mango for fresh pineapple chunks whenever mango is out of season.'
    },
    {
      id: 'roasted-beetroot-carrot-citrus-salad',
      title: 'Roasted Beetroot, Carrot & Citrus Herb Salad',
      subtitle: 'Sweet earthy beetroot and crisp grated carrots tossed with orange-lime juice and toasted g-nuts',
      cuisine: 'Mediterranean',
      category: 'salads',
      mealSlots: ['lunch', 'dinner'],
      image: './images/roasted-beetroot-carrot-citrus-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 3,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Beetroot nitrates and carrot beta-carotene support healthy blood flow, skin, and stamina.',
      nutrition: { kcal: 195, protein: '5g', fiber: '7g', sugar: 'Natural veg only' },
      ingredients: [
        { id: 'beetroot', name: 'Fresh red beetroot', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 2500, prep: 'peeled & cubed' },
        { id: 'carrots', name: 'Sweet carrots', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 1200, prep: 'coarsely grated or ribbons' },
        { id: 'coriander', name: 'Fresh coriander or mint', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' },
        { id: 'simsim', name: 'Crushed roasted g-nuts or simsim', amount: 2, unit: 'tbsp', aisle: 'grains', estUgx: 800, prep: 'for crunch' },
        { id: 'lemon', name: 'Lemon/orange juice, cumin & 1 tsp oil', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 800, prep: 'bright dressing' }
      ],
      steps: [
        { text: 'Boil or roast cubed beetroot for 20 to 25 minutes until fork-tender, then cool slightly.', timerMin: 22 },
        { text: 'Toss warm or chilled beetroot with grated carrots, chopped herbs, citrus juice, cumin pinch, salt, and 1 teaspoon oil. Top with crushed roasted groundnuts.' }
      ],
      ugandaTip: 'Boil extra beetroots at once — keep them in the fridge for 4 days to toss into any salad or juice.'
    },
    {
      id: 'crunchy-cucumber-tomato-avocado-salad',
      title: 'Crisp Garden Cucumber, Tomato & Pepper Salad',
      subtitle: 'Bright everyday Mediterranean-style chopped veggie salad with olive oil, oregano, and lemon',
      cuisine: 'Mediterranean',
      category: 'salads',
      mealSlots: ['lunch', 'dinner'],
      image: './images/crunchy-cucumber-tomato-avocado-salad.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Low-calorie, high-hydration raw vegetable salad that pairs with any Ugandan or international main dish.',
      nutrition: { kcal: 165, protein: '3g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'cucumber', name: 'Crisp cucumber', amount: 1, unit: 'large', aisle: 'produce', estUgx: 1000, prep: 'chunked' },
        { id: 'tomatoes', name: 'Ripe firm tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'chunked' },
        { id: 'bell-pepper', name: 'Sweet bell pepper', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'avocado', name: 'Ripe avocado & red onion', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 1000, prep: 'cubed & sliced' },
        { id: 'olive-oil', name: 'Lemon juice, 1 tbsp olive oil & oregano', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'whisked' }
      ],
      steps: [
        { text: 'Combine chunked cucumber, tomatoes, bell pepper, soaked red onion, and fresh coriander or parsley.' },
        { text: 'Whisk lemon juice, 1 tablespoon olive oil, dried oregano, salt, and black pepper; toss gently and fold in avocado.' }
      ],
      ugandaTip: 'Keep this 5-minute veggie salad beside pilau, baked Irish wedges, or grilled fish to hit half-a-plate of vegetables effortlessly.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(SALAD_RECIPES);
  }
})();
