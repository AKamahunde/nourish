(() => {
  const EXPANDED_RECIPES = [
    // BREAKFAST (+4)
    {
      id: 'mediterranean-shakshuka-greens',
      title: 'Mediterranean Shakshuka with Dodo Greens',
      subtitle: 'Farm eggs poached in spiced tomato, bell pepper, garlic, and tender greens',
      cuisine: 'Mediterranean',
      category: 'breakfast',
      image: './images/mediterranean-shakshuka-greens.jpg',
      prepMinutes: 8,
      cookMinutes: 14,
      totalMinutes: 22,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Eggs cooked gently in lycopene-rich tomatoes and iron-packed greens make a deeply filling breakfast.',
      nutrition: { kcal: 310, protein: '18g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'eggs', name: 'Fresh farm eggs', amount: 4, unit: 'pcs', aisle: 'protein', estUgx: 2400, prep: 'whole' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'finely diced' },
        { id: 'bell-pepper', name: 'Red or green bell pepper', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'dodo', name: 'Dodo or spinach leaves', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 600, prep: 'chopped' },
        { id: 'onion-garlic', name: 'Onion, garlic & cumin', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'minced' }
      ],
      steps: [
        { text: 'Saute onion, bell pepper, and garlic in 1 teaspoon olive oil for 4 minutes. Stir in cumin, paprika, and diced tomatoes.', timerMin: 4 },
        { text: 'Simmer 6 minutes into a thick sauce, then fold in chopped dodo greens.', timerMin: 6 },
        { text: 'Make 4 small wells, crack an egg into each, cover, and poach gently for 4 minutes until whites set.' }
      ],
      ugandaTip: 'Add a pinch of fresh bird-eye chili if you like gentle morning heat.'
    },
    {
      id: 'avocado-poached-egg-toast',
      title: 'Smashed Avocado, Lime & Egg Whole-Grain Toast',
      subtitle: 'Creamy market avocado with soft eggs, chili flakes, and lemon on toasted whole bread',
      cuisine: 'Mediterranean',
      category: 'breakfast',
      image: './images/avocado-poached-egg-toast.jpg',
      prepMinutes: 5,
      cookMinutes: 5,
      totalMinutes: 10,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Healthy fats plus whole-grain fiber slow digestion and prevent sugar spikes all morning.',
      nutrition: { kcal: 390, protein: '17g', fiber: '8g', sugar: 'Low' },
      ingredients: [
        { id: 'whole-bread', name: 'Whole-wheat bread slices', amount: 2, unit: 'slices', aisle: 'grains', estUgx: 1500, prep: 'toasted' },
        { id: 'avocado', name: 'Ripe avocado', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 800, prep: 'mashed with lime & salt' },
        { id: 'eggs', name: 'Farm eggs', amount: 2, unit: 'pcs', aisle: 'protein', estUgx: 1200, prep: 'poached or soft-boiled' },
        { id: 'tomatoes', name: 'Cherry or firm tomato', amount: 1, unit: 'small', aisle: 'produce', estUgx: 400, prep: 'sliced' }
      ],
      steps: [
        { text: 'Toast whole-wheat bread until crisp while soft-boiling or poaching eggs for 5 minutes.', timerMin: 5 },
        { text: 'Mash avocado with a squeeze of lime and pinch of salt; spread over warm toast and top with sliced tomato, eggs, and black pepper.' }
      ],
      ugandaTip: 'No whole-grain bread on hand? Use grilled sweet potato slabs instead of bread for a naturally gluten-free base.'
    },
    {
      id: 'green-power-smoothie-bowl',
      title: 'Tropical Green Mango & Simsim Smoothie Bowl',
      subtitle: 'Thick chilled mango, banana, and tender spinach blended smooth with crunchy seeds',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/green-power-smoothie-bowl.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 1,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Packs a full serving of leafy greens inside naturally sweet frozen banana and mango.',
      nutrition: { kcal: 315, protein: '8g', fiber: '8g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'mango', name: 'Ripe sweet mango', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 1200, prep: 'cubed & chilled' },
        { id: 'banana', name: 'Frozen ripe banana', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'sliced' },
        { id: 'dodo', name: 'Baby spinach or young dodo', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 500, prep: 'washed well' },
        { id: 'simsim', name: 'Toasted simsim or chia seeds', amount: 1, unit: 'tbsp', aisle: 'grains', estUgx: 600, prep: 'topping' }
      ],
      steps: [
        { text: 'Blend frozen banana slices, mango, washed greens, and 1/3 cup cold water or yogurt until thick and spoonable.' },
        { text: 'Pour into a chilled bowl and finish with toasted simsim seeds and fresh fruit slices.' }
      ],
      ugandaTip: 'Peel and freeze ripe bogoya bananas in a zip bag so your morning smoothie bowl turns out thick like sorbet.'
    },
    {
      id: 'roasted-millet-fruit-porridge',
      title: 'Warm Millet (Obushera) & Groundnut Morning Bowl',
      subtitle: 'Nutty roasted Ugandan millet porridge swirled with g-nut paste and sweet banana',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/roasted-millet-fruit-porridge.jpg',
      prepMinutes: 3,
      cookMinutes: 10,
      totalMinutes: 13,
      servings: 2,
      tags: ['Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Finger millet is rich in natural calcium, iron, and slow-release energy with zero refined sugar.',
      nutrition: { kcal: 340, protein: '11g', fiber: '7g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'millet-flour', name: 'Roasted millet flour (kalo)', amount: 0.5, unit: 'cup', aisle: 'grains', estUgx: 1500, prep: 'whisked smooth in cold water' },
        { id: 'gnut-paste', name: 'Natural groundnut paste', amount: 1.5, unit: 'tbsp', aisle: 'grains', estUgx: 800, prep: 'for swirling' },
        { id: 'banana', name: 'Sweet yellow banana', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'sliced' },
        { id: 'cinnamon', name: 'Cinnamon & ginger pinch', amount: 0.5, unit: 'tsp', aisle: 'pantry', estUgx: 300, prep: 'measured' }
      ],
      steps: [
        { text: 'Whisk millet flour into 1/2 cup cold water until lump-free, then pour into 2 cups simmering water while stirring.' },
        { text: 'Cook over medium-low heat for 8 minutes until velvety, stir in cinnamon and groundnut paste, and top with sliced banana.', timerMin: 8 }
      ],
      ugandaTip: 'Use fermented obushera flour for extra gut-friendly probiotics.'
    },

    // SALADS (+2)
    {
      id: 'chicken-cabbage-simsim-slaw',
      title: 'Asian Chicken, Cabbage & Toasted Simsim Slaw',
      subtitle: 'Crunchy shredded cabbage, carrots, grilled chicken, and ginger-lime soy dressing',
      cuisine: 'Asian',
      category: 'salads',
      image: './images/chicken-cabbage-simsim-slaw.jpg',
      prepMinutes: 12,
      cookMinutes: 8,
      totalMinutes: 20,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Crisp raw cabbage and toasted sesame deliver crunch and high protein without heavy mayonnaise.',
      nutrition: { kcal: 370, protein: '34g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Skinless chicken breast', amount: 300, unit: 'g', aisle: 'protein', estUgx: 7500, prep: 'sliced thin' },
        { id: 'cabbage', name: 'Green & purple cabbage', amount: 250, unit: 'g', aisle: 'greens', estUgx: 1500, prep: 'finely shredded' },
        { id: 'carrots', name: 'Carrots', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'julienned or grated' },
        { id: 'simsim', name: 'White simsim seeds', amount: 2, unit: 'tbsp', aisle: 'grains', estUgx: 800, prep: 'dry toasted' },
        { id: 'ginger-soy', name: 'Ginger, lime & light soy sauce', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 900, prep: 'whisked dressing' }
      ],
      steps: [
        { text: 'Toast simsim seeds in a dry pan for 3 minutes until golden.', timerMin: 3 },
        { text: 'Sear seasoned chicken strips in 1 teaspoon oil for 6 minutes until cooked through.', timerMin: 6 },
        { text: 'Toss shredded cabbage and carrots with ginger-lime soy dressing; top with warm chicken and toasted simsim.' }
      ],
      ugandaTip: 'Shred cabbage extra fine so it stays crunchy even if packed for lunch.'
    },
    {
      id: 'sweet-potato-avocado-bowl',
      title: 'Roasted Sweet Potato, Dodo & Avocado Bowl',
      subtitle: 'Pan-toasted sweet potato cubes over wilted greens with lemon-groundnut drizzle',
      cuisine: 'Ugandan',
      category: 'salads',
      image: './images/sweet-potato-avocado-bowl.jpg',
      prepMinutes: 8,
      cookMinutes: 12,
      totalMinutes: 20,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Warm complex carbs paired with raw avocado and iron-rich amaranth keep energy steady.',
      nutrition: { kcal: 385, protein: '9g', fiber: '9g', sugar: 'Low' },
      ingredients: [
        { id: 'sweet-potato', name: 'Sweet potatoes (yellow or orange)', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: '1.5cm cubes' },
        { id: 'dodo', name: 'Fresh dodo greens', amount: 1, unit: 'bunch', aisle: 'greens', estUgx: 1000, prep: 'washed & chopped' },
        { id: 'avocado', name: 'Ripe avocado', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1500, prep: 'sliced' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'quartered' },
        { id: 'gnut-paste', name: 'Groundnut or simsim paste', amount: 1.5, unit: 'tbsp', aisle: 'grains', estUgx: 800, prep: 'whisked with lime & warm water' }
      ],
      steps: [
        { text: 'Pan-roast diced sweet potatoes in 1 teaspoon oil covered for 10 minutes until golden and tender.', timerMin: 10 },
        { text: 'Wilt chopped dodo in the warm pan for 2 minutes with a splash of water.' },
        { text: 'Layer greens, warm sweet potatoes, tomatoes, and avocado; drizzle with lime-thinned g-nut dressing.' }
      ],
      ugandaTip: 'Orange-fleshed sweet potatoes add extra vitamin A and natural sweetness.'
    },

    // 15-MIN (+2)
    {
      id: 'pilau-bean-sweet-potato-hash',
      title: '15-Min Spiced Pilau Bean & Sweet Potato Hash',
      subtitle: 'Aromatic cumin, cardamom, and cinnamon skillet with kidney beans and sweet potato',
      cuisine: 'Ugandan',
      category: 'quick',
      image: './images/pilau-bean-sweet-potato-hash.jpg',
      prepMinutes: 5,
      cookMinutes: 10,
      totalMinutes: 15,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Delivers classic East African pilau warmth with high fiber and zero heavy white rice crash.',
      nutrition: { kcal: 350, protein: '13g', fiber: '10g', sugar: 'Low' },
      ingredients: [
        { id: 'cooked-beans', name: 'Pre-cooked red beans', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 1500, prep: 'rinsed' },
        { id: 'sweet-potato', name: 'Sweet potato', amount: 1, unit: 'large', aisle: 'produce', estUgx: 1200, prep: 'micro-diced' },
        { id: 'red-onion', name: 'Red onion', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 700, prep: 'sliced' },
        { id: 'pilau-spices', name: 'Cumin, cinnamon & cardamom', amount: 1.5, unit: 'tsp', aisle: 'pantry', estUgx: 600, prep: 'ground blend' },
        { id: 'coriander', name: 'Fresh coriander', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' }
      ],
      steps: [
        { text: 'Saute onion and micro-diced sweet potato in 1 teaspoon oil for 4 minutes.', timerMin: 4 },
        { text: 'Stir in pilau spices for 30 seconds, then add beans and 1/2 cup water; cover and simmer 6 minutes until tender.', timerMin: 6 }
      ],
      ugandaTip: 'Top with a fried or poached egg when you want extra post-workout protein.'
    },
    {
      id: 'asian-garlic-soy-egg-rice',
      title: '15-Min Asian Veggie & Egg Fried Rice',
      subtitle: 'Light pan-tossed rice packed with carrots, cabbage, ginger, garlic, and eggs',
      cuisine: 'Asian',
      category: 'quick',
      image: './images/asian-garlic-soy-egg-rice.jpg',
      prepMinutes: 5,
      cookMinutes: 8,
      totalMinutes: 13,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Doubling the vegetables and eggs keeps portions balanced and much lighter than takeout fried rice.',
      nutrition: { kcal: 380, protein: '16g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'cooked-rice', name: 'Cooked brown or basmati rice', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 1800, prep: 'chilled leftover works best' },
        { id: 'eggs', name: 'Farm eggs', amount: 3, unit: 'pcs', aisle: 'protein', estUgx: 1800, prep: 'beaten' },
        { id: 'carrots', name: 'Carrots & shredded cabbage', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 1200, prep: 'finely diced' },
        { id: 'ginger-garlic', name: 'Ginger, garlic & spring onion', amount: 2, unit: 'tbsp', aisle: 'produce', estUgx: 800, prep: 'minced' },
        { id: 'soy-sauce', name: 'Light soy sauce', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'measured' }
      ],
      steps: [
        { text: 'Scramble beaten eggs quickly in 1 teaspoon oil for 1 minute, then push to the side of the pan.' },
        { text: 'Saute carrots, cabbage, ginger, and garlic over high heat for 3 minutes until crisp-tender.', timerMin: 3 },
        { text: 'Toss in cooked rice and soy sauce for 3 minutes until hot and smoky; scatter sliced spring onions.', timerMin: 3 }
      ],
      ugandaTip: 'Always cook extra rice on Sunday — chilled day-old rice fries cleanly with almost no oil.'
    },

    // ONE-POT (+2)
    {
      id: 'coconut-cassava-blackeye-peas',
      title: 'Coconut Cassava & Black-Eyed Pea (Mpindi) Pot',
      subtitle: 'Creamy turmeric coconut simmer with tender cassava chunks and high-fiber peas',
      cuisine: 'Ugandan',
      category: 'onepot',
      image: './images/coconut-cassava-blackeye-peas.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 3,
      tags: ['Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Pre-boiled black-eyed peas and root cassava deliver clean fuel, potassium, and gut fiber.',
      nutrition: { kcal: 420, protein: '13g', fiber: '11g', sugar: 'Low' },
      ingredients: [
        { id: 'cassava', name: 'Fresh peeled cassava', amount: 450, unit: 'g', aisle: 'produce', estUgx: 2500, prep: 'cut in 3cm chunks, core removed' },
        { id: 'black-eyed-peas', name: 'Pre-boiled black-eyed peas (mpindi)', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'rinsed' },
        { id: 'coconut-milk', name: 'Light coconut milk', amount: 0.75, unit: 'cup', aisle: 'pantry', estUgx: 3000, prep: 'plus 1 cup water' },
        { id: 'onion-garlic', name: 'Onion, garlic & turmeric', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'chopped' },
        { id: 'coriander', name: 'Fresh coriander', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' }
      ],
      steps: [
        { text: 'Saute onion, garlic, and turmeric in 1 teaspoon oil for 3 minutes.' },
        { text: 'Add cassava chunks, coconut milk, and water; simmer covered for 18 minutes until cassava begins to soften.', timerMin: 18 },
        { text: 'Stir in black-eyed peas and simmer 6 more minutes until sauce turns creamy and cassava is fork-tender. Finish with coriander.', timerMin: 6 }
      ],
      ugandaTip: 'Always slice out the fibrous center vein of cassava before simmering so every bite is silky.'
    },
    {
      id: 'italian-lemon-chicken-orzo-rice',
      title: 'Italian Lemon-Garlic Chicken & Rice One-Pot',
      subtitle: 'Juicy chicken breast simmered with aromatic rice, tomatoes, and wilted greens',
      cuisine: 'Italian',
      category: 'onepot',
      image: './images/italian-lemon-chicken-orzo-rice.jpg',
      prepMinutes: 8,
      cookMinutes: 22,
      totalMinutes: 30,
      servings: 3,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Everything cooks in one pot so chicken juices and lemon zest flavor the rice without butter.',
      nutrition: { kcal: 410, protein: '34g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Chicken breast', amount: 400, unit: 'g', aisle: 'protein', estUgx: 9500, prep: 'cubed' },
        { id: 'rice', name: 'Basmati or long-grain rice', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2500, prep: 'rinsed' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'diced' },
        { id: 'dodo', name: 'Spinach or tender sukuma', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 700, prep: 'shredded' },
        { id: 'lemon', name: 'Lemon, garlic & oregano', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'juiced & minced' }
      ],
      steps: [
        { text: 'Brown chicken cubes with salt, pepper, garlic, and oregano in 1 teaspoon olive oil for 4 minutes.', timerMin: 4 },
        { text: 'Add rinsed rice, diced tomatoes, lemon juice, and 2 cups water. Bring to a boil, cover low, and simmer 16 minutes.', timerMin: 16 },
        { text: 'Fold in shredded greens, cover 2 minutes off heat to steam, and fluff before serving.' }
      ],
      ugandaTip: 'Use broken pasta (orzo) or local basmati rice — both cook cleanly in the exact same 1:2 liquid ratio.'
    },

    // WORTH THE TIME (+2)
    {
      id: 'roasted-kuroiler-root-tray',
      title: 'Herb-Roasted Chicken & Pumpkin Root Tray',
      subtitle: 'Skinless chicken drumsticks roasted with orange pumpkin, sweet potato, and rosemary',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/roasted-kuroiler-root-tray.jpg',
      prepMinutes: 15,
      cookMinutes: 40,
      totalMinutes: 55,
      servings: 3,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Removing chicken skin before roasting cuts saturated fat while pumpkin provides rich beta-carotene.',
      nutrition: { kcal: 430, protein: '33g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Chicken drumsticks (skinless)', amount: 600, unit: 'g', aisle: 'protein', estUgx: 12000, prep: 'scored slightly' },
        { id: 'pumpkin', name: 'Orange pumpkin (ensujju)', amount: 300, unit: 'g', aisle: 'produce', estUgx: 1800, prep: 'wedges' },
        { id: 'sweet-potato', name: 'Sweet potatoes', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'chunks' },
        { id: 'red-onion', name: 'Red onion', amount: 1, unit: 'large', aisle: 'produce', estUgx: 700, prep: 'petals' },
        { id: 'garlic-rosemary', name: 'Garlic, rosemary & paprika', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 900, prep: 'rubbed with 1 tbsp oil' }
      ],
      steps: [
        { text: 'Toss chicken, pumpkin wedges, sweet potato, and onion with garlic, rosemary, paprika, salt, and 1 tablespoon oil on a tray.' },
        { text: 'Roast at 200C for 40 minutes until chicken reaches juicy perfection and roots caramelize at the edges.', timerMin: 40 }
      ],
      ugandaTip: 'Roast two trays on Sunday so weekday lunches are just heat-and-eat.'
    },
    {
      id: 'asian-sesame-glazed-tilapia',
      title: 'Asian Sesame-Ginger Baked Tilapia Rice Bowl',
      subtitle: 'Flaky Lake Victoria tilapia glazed in soy, ginger, and lime with cucumber & rice',
      cuisine: 'Asian',
      category: 'slow',
      image: './images/asian-sesame-glazed-tilapia.jpg',
      prepMinutes: 15,
      cookMinutes: 20,
      totalMinutes: 35,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Baking fish in ginger-lime soy glaze locks in moisture and omega-3s with almost zero oil.',
      nutrition: { kcal: 410, protein: '35g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'tilapia-fillet', name: 'Fresh tilapia fillets', amount: 350, unit: 'g', aisle: 'protein', estUgx: 9500, prep: 'patted dry' },
        { id: 'rice', name: 'Steamed rice', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2500, prep: 'dry measure' },
        { id: 'cucumber', name: 'Crisp cucumber', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1000, prep: 'thin ribbons' },
        { id: 'soy-ginger', name: 'Light soy sauce, ginger & honey pinch', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 1000, prep: 'whisked glaze' },
        { id: 'simsim', name: 'Toasted simsim seeds & lime', amount: 1, unit: 'tbsp', aisle: 'grains', estUgx: 600, prep: 'garnish' }
      ],
      steps: [
        { text: 'Marinate tilapia fillets in soy-ginger-lime glaze for 15 minutes while steaming rice.', timerMin: 15 },
        { text: 'Bake fish at 200C (or cover-steam in a skillet) for 15 minutes until flaky.', timerMin: 15 },
        { text: 'Serve warm fish over steamed rice alongside crisp cucumber ribbons and toasted simsim seeds.' }
      ],
      ugandaTip: 'A single teaspoon of raw honey balances the salty soy sauce without spiking blood sugar.'
    },

    // JUICES & TONICS (+3)
    {
      id: 'mango-pawpaw-turmeric-tonic',
      title: 'Golden Mango, Pawpaw & Turmeric Morning Juice',
      subtitle: 'Creamy sunlit tropical blend spiced with fresh turmeric root and lemon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/mango-pawpaw-turmeric-tonic.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Turmeric curcumin plus pawpaw digestive enzymes soothe the gut and support immunity.',
      nutrition: { kcal: 105, protein: '1g', fiber: '3g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'mango', name: 'Ripe sweet mango', amount: 1, unit: 'large', aisle: 'produce', estUgx: 1500, prep: 'peeled & cubed' },
        { id: 'pawpaw', name: 'Ripe pawpaw', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 1200, prep: 'cubed' },
        { id: 'turmeric-ginger', name: 'Fresh turmeric & ginger', amount: 1, unit: 'thumb', aisle: 'produce', estUgx: 500, prep: 'peeled' },
        { id: 'lemon', name: 'Fresh lemon', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Blend mango, pawpaw, fresh turmeric, ginger, lemon juice, and 1.5 cups chilled water until velvety smooth.' },
        { text: 'Add a tiny pinch of black pepper (helps turmeric absorb) and pour straight into chilled glasses.' }
      ],
      ugandaTip: 'If fresh turmeric root is out of season, 1/2 teaspoon ground turmeric works cleanly.'
    },
    {
      id: 'watermelon-mint-lime-cooler',
      title: 'Watermelon, Garden Mint & Lime Cooler',
      subtitle: 'Crisp post-workout electrolyte hydration with zero added sugar',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/watermelon-mint-lime-cooler.jpg',
      prepMinutes: 6,
      cookMinutes: 0,
      totalMinutes: 6,
      servings: 3,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Natural watermelon L-citrulline and potassium rehydrate rapidly after warm-weather workouts.',
      nutrition: { kcal: 54, protein: '1g', fiber: '1g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'watermelon', name: 'Sweet red watermelon', amount: 4, unit: 'cups', aisle: 'produce', estUgx: 2500, prep: 'cubed' },
        { id: 'mint', name: 'Fresh garden mint leaves', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'washed' },
        { id: 'lime', name: 'Fresh lime', amount: 1.5, unit: 'pcs', aisle: 'produce', estUgx: 750, prep: 'juiced' }
      ],
      steps: [
        { text: 'Pulse watermelon chunks, mint leaves, and lime juice in a blender for 20 seconds until liquid.' },
        { text: 'Pour through a coarse strainer over ice cubes with a tiny pinch of sea salt if drinking after exercise.' }
      ],
      ugandaTip: 'No water needed — watermelon is already over 90% natural hydrating water.'
    },
    {
      id: 'pineapple-ginger-lemongrass-tea',
      title: 'Chilled Pineapple, Ginger & Lemongrass (Kisubi) Brew',
      subtitle: 'Aromatic Ugandan lemongrass steeped with fresh pineapple peels and spicy ginger',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/pineapple-ginger-lemongrass-tea.jpg',
      prepMinutes: 8,
      cookMinutes: 15,
      totalMinutes: 23,
      servings: 5,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Lemongrass and ginger calm digestion and curb sweet cravings with minimal calories.',
      nutrition: { kcal: 42, protein: '0g', fiber: '1g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'lemongrass', name: 'Fresh lemongrass stalks (kisubi)', amount: 3, unit: 'stalks', aisle: 'greens', estUgx: 1000, prep: 'bruised & knotted' },
        { id: 'pineapple', name: 'Ripe pineapple (flesh + clean peels)', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 2000, prep: 'chopped' },
        { id: 'ginger', name: 'Fresh ginger root', amount: 2, unit: 'thumbs', aisle: 'produce', estUgx: 800, prep: 'sliced' },
        { id: 'lemon', name: 'Fresh lemon', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced after cooling' }
      ],
      steps: [
        { text: 'Simmer bruised lemongrass, sliced ginger, and clean pineapple peels in 2 liters of water for 15 minutes.', timerMin: 15 },
        { text: 'Strain into a pitcher, stir in blended pineapple flesh and fresh lemon juice, and chill completely before serving.' }
      ],
      ugandaTip: 'Serve hot as an evening digestive tea or ice-cold during the afternoon.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(EXPANDED_RECIPES);
  }
})();
