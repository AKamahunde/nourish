(() => {
  const VEGGIE_INTL_RECIPES = [
    // MEDITERRANEAN (+4)
    {
      id: 'med-roasted-cauliflower-bean-salad',
      title: 'Roasted Cauliflower, Black Bean & Simsim Warm Salad',
      subtitle: 'Golden cumin-roasted cauliflower tossed with black beans, tomatoes, and lemon',
      cuisine: 'Mediterranean',
      category: 'salads',
      image: './images/med-roasted-cauliflower-bean-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 18,
      totalMinutes: 28,
      servings: 2,
      tags: ['Plant-Forward', 'High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Cruciferous cauliflower and black beans deliver high fiber, antioxidants, and steady plant protein.',
      nutrition: { kcal: 355, protein: '15g', fiber: '12g', sugar: 'Low' },
      ingredients: [
        { id: 'cauliflower', name: 'Fresh cauliflower florets', amount: 350, unit: 'g', aisle: 'produce', estUgx: 4000, prep: 'cut bite-sized' },
        { id: 'black-beans', name: 'Pre-boiled black beans', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'rinsed & drained' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'coriander', name: 'Fresh parsley or coriander', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' },
        { id: 'simsim-lemon', name: 'Toasted simsim, cumin & lemon', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 1000, prep: 'with 1 tsp olive oil' }
      ],
      steps: [
        { text: 'Toss cauliflower florets with 1 teaspoon oil, cumin, paprika, and salt; roast at 200C (or pan-sear covered) for 16 minutes until golden at the edges.', timerMin: 16 },
        { text: 'Toss warm cauliflower with black beans, diced tomatoes, herbs, fresh lemon juice, and toasted simsim seeds.' }
      ],
      ugandaTip: 'Works just as well in a wide covered frying pan if you prefer not to turn on an oven.'
    },
    {
      id: 'med-stuffed-bell-peppers',
      title: 'Mediterranean Herb-Stuffed Bell Peppers',
      subtitle: 'Sweet bell peppers baked with spiced black beans, zucchini, carrots, and rice',
      cuisine: 'Mediterranean',
      category: 'slow',
      image: './images/med-stuffed-bell-peppers.jpg',
      prepMinutes: 15,
      cookMinutes: 25,
      totalMinutes: 40,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Bell peppers pack more vitamin C per serving than oranges, stuffed with fiber-rich beans and veg.',
      nutrition: { kcal: 365, protein: '13g', fiber: '10g', sugar: 'Low' },
      ingredients: [
        { id: 'bell-pepper', name: 'Large red or yellow bell peppers', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 2500, prep: 'halved & seeded' },
        { id: 'black-beans', name: 'Pre-boiled black beans', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 1500, prep: 'drained' },
        { id: 'courgette', name: 'Zucchini (courgette) & carrot', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1500, prep: 'finely diced' },
        { id: 'cooked-rice', name: 'Cooked rice', amount: 0.75, unit: 'cup', aisle: 'grains', estUgx: 1200, prep: 'fluffed' },
        { id: 'tomatoes', name: 'Tomatoes, garlic & oregano', amount: 2, unit: 'pcs', aisle: 'pantry', estUgx: 1200, prep: 'chopped' }
      ],
      steps: [
        { text: 'Saute diced zucchini, carrot, garlic, tomatoes, oregano, black beans, and rice in 1 teaspoon oil for 5 minutes.', timerMin: 5 },
        { text: 'Spoon filling into halved bell peppers, place in a baking dish (or covered pot with 2 tbsp water), and cook 22 minutes until peppers are tender.', timerMin: 22 }
      ],
      ugandaTip: 'Drizzle a spoonful of plain yogurt + lemon over the hot peppers right before serving.'
    },
    {
      id: 'med-zucchini-chicken-skewers',
      title: 'Grilled Zucchini, Pepper & Chicken Skewers',
      subtitle: 'Herb-marinated chicken and crisp market veggies with cooling yogurt-mint dip',
      cuisine: 'Mediterranean',
      category: 'onepot',
      image: './images/med-zucchini-chicken-skewers.jpg',
      prepMinutes: 12,
      cookMinutes: 14,
      totalMinutes: 26,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Lean grilled protein paired with plain yogurt-mint sauce keeps calories low and flavor bright.',
      nutrition: { kcal: 380, protein: '38g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Skinless chicken breast', amount: 350, unit: 'g', aisle: 'protein', estUgx: 8500, prep: '2.5cm cubes' },
        { id: 'courgette', name: 'Zucchini (courgette)', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1200, prep: 'thick rounds' },
        { id: 'bell-pepper', name: 'Bell pepper & red onion', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1600, prep: 'cut in squares' },
        { id: 'yogurt', name: 'Plain unsweetened yogurt', amount: 0.5, unit: 'cup', aisle: 'protein', estUgx: 2000, prep: 'mixed with mint, garlic & lemon' },
        { id: 'herbs', name: 'Garlic, oregano & lemon', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'marinade' }
      ],
      steps: [
        { text: 'Toss chicken cubes, zucchini, bell pepper, and onion with lemon juice, garlic, oregano, paprika, and 1 teaspoon oil.' },
        { text: 'Thread onto skewers (or cook directly in a grill pan) for 12 to 14 minutes, turning until lightly charred and cooked through.', timerMin: 13 },
        { text: 'Serve hot with chilled plain yogurt stirred with chopped mint, grated garlic, and a squeeze of lemon.' }
      ],
      ugandaTip: 'No skewers needed — sear the chicken and veggies in one hot frying pan for the exact same flavor.'
    },
    {
      id: 'med-broccoli-lemon-garlic-bowl',
      title: '15-Min Lemon-Garlic Broccoli & White Bean Bowl',
      subtitle: 'Crisp-tender broccoli florets sautéed with garlic, olive oil, lemon, and beans',
      cuisine: 'Mediterranean',
      category: 'quick',
      image: './images/med-broccoli-lemon-garlic-bowl.jpg',
      prepMinutes: 5,
      cookMinutes: 10,
      totalMinutes: 15,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Steaming broccoli briefly preserves sulforaphane and vitamin C while white beans add clean protein.',
      nutrition: { kcal: 320, protein: '15g', fiber: '10g', sugar: 'Low' },
      ingredients: [
        { id: 'broccoli', name: 'Fresh broccoli florets', amount: 300, unit: 'g', aisle: 'greens', estUgx: 4000, prep: 'bite-sized' },
        { id: 'white-beans', name: 'Pre-boiled white or black beans', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'rinsed' },
        { id: 'garlic', name: 'Fresh garlic cloves', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 400, prep: 'thinly sliced' },
        { id: 'lemon', name: 'Fresh lemon & olive oil', amount: 1, unit: 'pc', aisle: 'pantry', estUgx: 1200, prep: 'zest & juice' }
      ],
      steps: [
        { text: 'Steam or blanch broccoli florets in 1/4 cup simmering water in a covered pan for 3 minutes until bright emerald green.', timerMin: 3 },
        { text: 'Drain excess water, drizzle 1 tablespoon olive oil, and saute sliced garlic and beans with the broccoli for 3 minutes.' },
        { text: 'Finish off heat with lemon zest, lemon juice, chili flakes, and black pepper.' }
      ],
      ugandaTip: 'Fresh broccoli is easiest to find at Nakasero Market, Carrefour, or Quality Supermarket.'
    },

    // ITALIAN (+4)
    {
      id: 'italian-zucchini-pepper-bean-skillet',
      title: '15-Min Italian Zucchini, Bell Pepper & Bean Skillet',
      subtitle: 'Rustic one-pan courgette, sweet peppers, tomatoes, garlic, and tender beans',
      cuisine: 'Italian',
      category: 'quick',
      image: './images/italian-zucchini-pepper-bean-skillet.jpg',
      prepMinutes: 6,
      cookMinutes: 9,
      totalMinutes: 15,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Low-calorie Mediterranean vegetables cooked fast in olive oil and herbs make an effortless dinner.',
      nutrition: { kcal: 305, protein: '13g', fiber: '9g', sugar: 'Low' },
      ingredients: [
        { id: 'courgette', name: 'Zucchini (courgettes)', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'half-moons' },
        { id: 'bell-pepper', name: 'Red & green bell peppers', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'sliced strips' },
        { id: 'white-beans', name: 'Pre-boiled white or black beans', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'drained' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'garlic-herbs', name: 'Garlic, oregano & basil', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 800, prep: 'minced' }
      ],
      steps: [
        { text: 'Saute sliced bell peppers and zucchini in 1 tablespoon olive oil over medium-high heat for 5 minutes until lightly seared.', timerMin: 5 },
        { text: 'Add garlic, oregano, diced tomatoes, and beans; simmer 4 minutes until saucy and fragrant.', timerMin: 4 }
      ],
      ugandaTip: 'Serve on its own for a light evening meal or spoon over a small portion of whole-wheat pasta.'
    },
    {
      id: 'italian-broccoli-cauliflower-chicken-tray',
      title: 'Italian Herb-Roasted Broccoli, Cauliflower & Chicken',
      subtitle: 'One-tray roast of lean chicken, broccoli, cauliflower, carrots, and rosemary',
      cuisine: 'Italian',
      category: 'slow',
      image: './images/italian-broccoli-cauliflower-chicken-tray.jpg',
      prepMinutes: 12,
      cookMinutes: 28,
      totalMinutes: 40,
      servings: 3,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Cruciferous florets plus lean chicken give high volume and protein with zero heavy sauces.',
      nutrition: { kcal: 390, protein: '37g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Skinless chicken breast or thighs', amount: 450, unit: 'g', aisle: 'protein', estUgx: 10500, prep: 'chunked' },
        { id: 'broccoli', name: 'Fresh broccoli', amount: 250, unit: 'g', aisle: 'greens', estUgx: 3500, prep: 'florets' },
        { id: 'cauliflower', name: 'Fresh cauliflower', amount: 250, unit: 'g', aisle: 'produce', estUgx: 3000, prep: 'florets' },
        { id: 'carrots', name: 'Carrots', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'sliced rounds' },
        { id: 'garlic-herbs', name: 'Garlic, rosemary, thyme & lemon', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'with 1 tbsp olive oil' }
      ],
      steps: [
        { text: 'Toss chicken, carrots, and cauliflower with garlic, herbs, salt, and 1 tablespoon oil; roast at 200C for 15 minutes.', timerMin: 15 },
        { text: 'Add broccoli florets to the tray and roast 12 more minutes so broccoli turns crisp-tender without burning. Finish with lemon juice.', timerMin: 12 }
      ],
      ugandaTip: 'Adding broccoli halfway keeps it vibrant green instead of overcooked.'
    },
    {
      id: 'italian-creamy-cauliflower-garlic-soup',
      title: 'Velvety Italian Roasted Garlic & Cauliflower Soup',
      subtitle: 'Naturally creamy dairy-free soup blended smooth with thyme and black pepper',
      cuisine: 'Italian',
      category: 'onepot',
      image: './images/italian-creamy-cauliflower-garlic-soup.jpg',
      prepMinutes: 8,
      cookMinutes: 18,
      totalMinutes: 26,
      servings: 3,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Blended cauliflower creates restaurant-style creaminess with zero heavy cream and under 180 kcal.',
      nutrition: { kcal: 165, protein: '6g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'cauliflower', name: 'Fresh cauliflower', amount: 500, unit: 'g', aisle: 'produce', estUgx: 5000, prep: 'roughly chopped' },
        { id: 'onion-garlic', name: 'Onion & 4 garlic cloves', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1000, prep: 'chopped' },
        { id: 'carrots', name: 'Carrot or white potato', amount: 1, unit: 'small', aisle: 'produce', estUgx: 500, prep: 'diced' },
        { id: 'herbs', name: 'Thyme, rosemary & olive oil', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'measured' }
      ],
      steps: [
        { text: 'Saute chopped onion and garlic in 1 teaspoon olive oil for 3 minutes until sweet and fragrant.' },
        { text: 'Add cauliflower, diced carrot, thyme, salt, and 3.5 cups water; cover and simmer 15 minutes until completely tender.', timerMin: 15 },
        { text: 'Blend smooth in your blender, taste for salt and cracked black pepper, and drizzle 1/2 teaspoon olive oil on top.' }
      ],
      ugandaTip: 'Top with toasted simsim seeds or roasted black beans for a crunchy high-protein garnish.'
    },
    {
      id: 'italian-sukuma-garlic-spaghetti',
      title: '15-Min Italian Sukuma Wiki, Garlic & Chili Spaghetti',
      subtitle: 'Light aglio e olio pasta tossed with bright Ugandan sukuma greens and lemon',
      cuisine: 'Italian',
      category: 'quick',
      image: './images/italian-sukuma-garlic-spaghetti.jpg',
      prepMinutes: 5,
      cookMinutes: 10,
      totalMinutes: 15,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'A 50/50 mix of whole-wheat pasta and iron-rich sukuma greens cuts calories while boosting micronutrients.',
      nutrition: { kcal: 365, protein: '12g', fiber: '8g', sugar: 'Low' },
      ingredients: [
        { id: 'spaghetti', name: 'Whole-wheat spaghetti', amount: 160, unit: 'g', aisle: 'grains', estUgx: 3200, prep: 'dry' },
        { id: 'sukuma', name: 'Fresh sukuma wiki', amount: 1, unit: 'bunch', aisle: 'greens', estUgx: 1000, prep: 'finely ribboned' },
        { id: 'garlic', name: 'Fresh garlic cloves', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 500, prep: 'thinly sliced' },
        { id: 'lemon', name: 'Fresh lemon, chili & olive oil', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1200, prep: 'measured' }
      ],
      steps: [
        { text: 'Boil spaghetti in salted water for 9 minutes, dropping the ribboned sukuma wiki into the pasta pot for the final 2 minutes.', timerMin: 9 },
        { text: 'Warm sliced garlic and chili flakes gently in 1 tablespoon olive oil for 1 minute until golden.' },
        { text: 'Toss drained pasta and bright greens into the garlic oil with a splash of pasta water and fresh lemon juice.' }
      ],
      ugandaTip: 'Adding sukuma straight into the boiling pasta water for the last 2 minutes saves a pot and keeps it vibrant.'
    },

    // ASIAN (+4)
    {
      id: 'asian-chicken-broccoli-stirfry',
      title: '15-Min Asian Chicken & Broccoli Stir-Fry',
      subtitle: 'Tender chicken breast and crisp broccoli florets glazed in ginger-garlic soy',
      cuisine: 'Asian',
      category: 'quick',
      image: './images/asian-chicken-broccoli-stirfry.jpg',
      prepMinutes: 6,
      cookMinutes: 9,
      totalMinutes: 15,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Classic high-protein fitness meal with crisp cruciferous greens and minimal oil.',
      nutrition: { kcal: 350, protein: '36g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Skinless chicken breast', amount: 320, unit: 'g', aisle: 'protein', estUgx: 8000, prep: 'thin slices' },
        { id: 'broccoli', name: 'Fresh broccoli florets', amount: 250, unit: 'g', aisle: 'greens', estUgx: 3500, prep: 'cut small' },
        { id: 'carrots', name: 'Carrot', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 500, prep: 'thin coins' },
        { id: 'ginger-garlic', name: 'Fresh ginger & garlic', amount: 1.5, unit: 'tbsp', aisle: 'produce', estUgx: 700, prep: 'grated' },
        { id: 'soy-sauce', name: 'Light soy sauce & lime', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'mixed with 3 tbsp water' }
      ],
      steps: [
        { text: 'Sear chicken slices in 1 teaspoon oil over high heat for 4 minutes until browned, then set aside briefly.', timerMin: 4 },
        { text: 'Toss broccoli, carrots, ginger, and garlic in the hot pan with 2 tablespoons water; cover 2 minutes to steam-crisp.' },
        { text: 'Return chicken, pour in soy-lime mixture, and toss 2 minutes until glossy.', timerMin: 2 }
      ],
      ugandaTip: 'Cutting broccoli florets small helps them steam-sear tender in 2 minutes flat.'
    },
    {
      id: 'asian-cauliflower-carrot-fried-rice',
      title: '15-Min Cauliflower, Carrot & Egg "Fried Rice"',
      subtitle: 'Light grated cauliflower wok-tossed with carrots, cabbage, ginger, and eggs',
      cuisine: 'Asian',
      category: 'quick',
      image: './images/asian-cauliflower-carrot-fried-rice.jpg',
      prepMinutes: 7,
      cookMinutes: 8,
      totalMinutes: 15,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Grating cauliflower into rice-sized grains cuts calories in half while doubling your daily vegetable intake.',
      nutrition: { kcal: 235, protein: '14g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'cauliflower', name: 'Fresh cauliflower', amount: 350, unit: 'g', aisle: 'produce', estUgx: 4000, prep: 'grated on coarse box grater' },
        { id: 'eggs', name: 'Farm eggs', amount: 3, unit: 'pcs', aisle: 'protein', estUgx: 1800, prep: 'beaten' },
        { id: 'carrots', name: 'Carrots & cabbage', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 1200, prep: 'finely diced' },
        { id: 'bell-pepper', name: 'Bell pepper', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 600, prep: 'diced' },
        { id: 'soy-ginger', name: 'Ginger, garlic & light soy sauce', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 900, prep: 'minced & measured' }
      ],
      steps: [
        { text: 'Scramble beaten eggs in 1 teaspoon oil for 1 minute and push to the pan edge.' },
        { text: 'Stir-fry carrots, bell pepper, cabbage, ginger, and garlic over high heat for 3 minutes.', timerMin: 3 },
        { text: 'Add grated cauliflower and soy sauce; toss uncovered on high heat for 4 minutes until tender and fluffy.', timerMin: 4 }
      ],
      ugandaTip: 'A standard kitchen box grater turns cauliflower into perfect "rice" in 2 minutes — no food processor required.'
    },
    {
      id: 'asian-sesame-cabbage-pepper-bowl',
      title: 'Asian Sesame Cabbage, Zucchini & Pepper Crunch Bowl',
      subtitle: 'Rainbow shredded cabbage, zucchini ribbons, carrots, and bell peppers in lime-soy',
      cuisine: 'Asian',
      category: 'salads',
      image: './images/asian-sesame-cabbage-pepper-bowl.jpg',
      prepMinutes: 12,
      cookMinutes: 0,
      totalMinutes: 12,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Five raw colorful vegetables deliver enzymes, crunch, and gut-loving prebiotic fiber.',
      nutrition: { kcal: 195, protein: '6g', fiber: '8g', sugar: 'Low' },
      ingredients: [
        { id: 'cabbage', name: 'Green & purple cabbage', amount: 200, unit: 'g', aisle: 'greens', estUgx: 1200, prep: 'thinly shredded' },
        { id: 'courgette', name: 'Young fresh zucchini', amount: 1, unit: 'small', aisle: 'produce', estUgx: 1000, prep: 'peeled into thin ribbons' },
        { id: 'carrots', name: 'Carrots & red bell pepper', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'thin matchsticks' },
        { id: 'simsim', name: 'Toasted simsim & crushed g-nuts', amount: 2, unit: 'tbsp', aisle: 'grains', estUgx: 900, prep: 'crunchy topping' },
        { id: 'soy-ginger', name: 'Lime, ginger & light soy sauce', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'whisked dressing' }
      ],
      steps: [
        { text: 'Combine shredded cabbage, zucchini ribbons, carrot matchsticks, and thin bell pepper strips in a large bowl.' },
        { text: 'Whisk fresh lime juice, grated ginger, light soy sauce, and 1 teaspoon oil; toss thoroughly and scatter toasted simsim.' }
      ],
      ugandaTip: 'Use a vegetable peeler to shave raw zucchini into delicate noodle ribbons.'
    },
    {
      id: 'asian-ginger-glazed-cauliflower-broccoli',
      title: 'Asian Ginger-Garlic Glazed Cauliflower & Broccoli',
      subtitle: 'Seared broccoli, cauliflower, and sweet bell pepper in glossy ginger-lime glaze',
      cuisine: 'Asian',
      category: 'onepot',
      image: './images/asian-ginger-glazed-cauliflower-broccoli.jpg',
      prepMinutes: 8,
      cookMinutes: 12,
      totalMinutes: 20,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Double cruciferous vegetables cooked quickly retain crunch, potassium, and anti-inflammatory compounds.',
      nutrition: { kcal: 215, protein: '8g', fiber: '8g', sugar: 'Low' },
      ingredients: [
        { id: 'cauliflower', name: 'Fresh cauliflower', amount: 250, unit: 'g', aisle: 'produce', estUgx: 3000, prep: 'small florets' },
        { id: 'broccoli', name: 'Fresh broccoli', amount: 250, unit: 'g', aisle: 'greens', estUgx: 3500, prep: 'small florets' },
        { id: 'bell-pepper', name: 'Red bell pepper', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1000, prep: 'chunked' },
        { id: 'soy-ginger', name: 'Ginger, garlic, soy & lime', amount: 2.5, unit: 'tbsp', aisle: 'pantry', estUgx: 1000, prep: 'whisked with 1 tsp cornstarch or water' },
        { id: 'simsim', name: 'Toasted simsim seeds', amount: 1, unit: 'tbsp', aisle: 'grains', estUgx: 400, prep: 'garnish' }
      ],
      steps: [
        { text: 'Sear cauliflower florets and bell pepper in 1 teaspoon oil for 5 minutes with a 2-tablespoon splash of water.', timerMin: 5 },
        { text: 'Add broccoli, ginger, garlic, and soy-lime glaze; toss 4 minutes over high heat until bright and lightly coated. Finish with toasted simsim.', timerMin: 4 }
      ],
      ugandaTip: 'Pair with a soft-boiled egg or grilled tilapia fillet for a complete high-protein meal.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(VEGGIE_INTL_RECIPES);
  }
})();
