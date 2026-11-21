(() => {
  const BATCH4_RECIPES = [
    {
      id: 'carrot-orange-turmeric-glow-juice',
      title: 'Carrot, Orange, Turmeric & Ginger Skin Glow Juice',
      subtitle: 'Bright sunset-orange antioxidant juice blending sweet carrots, juicy orange, turmeric, and lemon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/carrot-orange-turmeric-glow-juice.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Beta-carotene from carrots, vitamin C from fresh orange, and turmeric curcumin support glowing skin and calm inflammation.',
      nutrition: { kcal: 88, protein: '1g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'carrots', name: 'Large fresh carrots', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'scrubbed & thinly sliced' },
        { id: 'orange', name: 'Sweet juicy oranges', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 1500, prep: 'peeled & seeded' },
        { id: 'turmeric-ginger', name: 'Turmeric (1 tsp) & grated ginger (1 tsp)', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 600, prep: 'fresh or ground' },
        { id: 'lemon', name: 'Fresh lemon & tiny pinch black pepper', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Scrub 2 large carrots and slice into thin coins so they blend effortlessly; peel 2 sweet oranges cleanly, removing seeds and thick white pith.' },
        { text: 'Place peeled orange segments at the bottom of the blender with 1 cup chilled filtered water so blades catch smoothly, then add sliced carrots, 1 teaspoon turmeric, and 1 teaspoon grated fresh ginger.' },
        { text: 'Blend on high speed for 60 seconds until vivid sunset-orange and silky smooth with no carrot grit.' },
        { text: 'Strain through a fine mesh sieve into two glasses, stir in fresh lemon juice plus a tiny pinch of black pepper (boosts turmeric absorption), and serve chilled immediately.' }
      ],
      ugandaTip: 'Drink mid-morning with a small handful of roasted groundnuts or avocado toast — healthy fats help your body absorb beta-carotene and turmeric.'
    },
    {
      id: 'pineapple-turmeric-golden-healing-drink',
      title: 'Pineapple, Turmeric, Ginger & Black Pepper Healing Drink',
      subtitle: 'Anti-inflammatory golden tropical drink with pineapple bromelain, warm ginger, lemon, and black pepper',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/pineapple-turmeric-golden-healing-drink.jpg',
      prepMinutes: 7,
      cookMinutes: 0,
      totalMinutes: 7,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Pineapple bromelain enzymes paired with turmeric and black pepper soothe joint stiffness and aid post-meal digestion.',
      nutrition: { kcal: 76, protein: '1g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'pineapple', name: 'Ripe sweet Ugandan pineapple', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'peeled & cubed' },
        { id: 'turmeric-ginger', name: 'Ground/fresh turmeric (1 tsp) & ginger (1 tsp)', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 600, prep: 'measured' },
        { id: 'lemon', name: 'Fresh lemon', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced + garnish' },
        { id: 'black-pepper', name: 'Freshly cracked black pepper', amount: 0.25, unit: 'tsp', aisle: 'pantry', estUgx: 200, prep: 'tiny pinch' }
      ],
      steps: [
        { text: 'Peel ripe pineapple and cut 2 cups of sweet yellow flesh (include the tender core — it holds the highest concentration of soothing bromelain).' },
        { text: 'Place pineapple cubes, 1 teaspoon turmeric, 1 teaspoon grated fresh ginger, and 1.25 cups chilled water into your blender.' },
        { text: 'Blend on high for 45 seconds until frothy and vibrant golden-yellow, then pass through a fine strainer to remove coarse pineapple fibers.' },
        { text: 'Stir in juice of 1 fresh lemon and a tiny pinch of cracked black pepper right before serving over ice with a lemon wheel and mint sprig.' }
      ],
      ugandaTip: 'Rinse your blender jar immediately with warm soapy water after using turmeric so the yellow pigment does not stain plastic.'
    },
    {
      id: 'carrot-orange-apple-ginger-juice',
      title: 'Carrot, Orange, Red Apple & Ginger Skin Glow Juice',
      subtitle: 'Sweet-crisp morning tonic pressed from 3 carrots, sweet oranges, red apple, and fresh ginger',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/carrot-orange-apple-ginger-juice.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Naturally sweet red apple and orange brighten earthy carrots while fresh ginger wakes up sluggish morning digestion.',
      nutrition: { kcal: 105, protein: '1g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'carrots', name: 'Fresh carrots', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 1200, prep: 'scrubbed & sliced' },
        { id: 'orange', name: 'Juicy oranges', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'peeled & seeded' },
        { id: 'apple', name: 'Sweet red apple', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1500, prep: 'cored & diced' },
        { id: 'ginger', name: 'Fresh ginger knob', amount: 1, unit: 'thumb', aisle: 'produce', estUgx: 500, prep: 'peeled & sliced' }
      ],
      steps: [
        { text: 'Peel 3 juicy oranges and remove seeds; wash and core 1 sweet red apple (keep the skin on for extra antioxidants); scrub and thinly slice 3 carrots and 1 thumb of peeled ginger.' },
        { text: 'Drop the oranges and apple into the blender first with 1 cup chilled water, then layer the sliced carrots and ginger on top.' },
        { text: 'Blend on high speed for 60 seconds until completely smooth and bright tangerine-orange.' },
        { text: 'Strain through a fine sieve or cheesecloth into a cold pitcher, pressing pulp dry with a spoon, and serve immediately over ice.' }
      ],
      ugandaTip: 'Use Kampala sweet green-skinned oranges — they are often juicier and sweeter than imported orange-skinned ones.'
    },
    {
      id: 'apple-cucumber-lemon-hydration-juice',
      title: 'Crisp Green Apple, Cucumber & Lemon Hydrating Juice',
      subtitle: 'Light pale-green refresher made from crisp green apples, cooling cucumber, and bright lemon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/apple-cucumber-lemon-hydration-juice.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Ultra-hydrating cucumber electrolytes paired with crisp green apple and lemon flush sodium bloat cleanly.',
      nutrition: { kcal: 72, protein: '1g', fiber: '2g', sugar: 'Low' },
      ingredients: [
        { id: 'apple', name: 'Crisp green apples', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 3500, prep: 'cored & chopped' },
        { id: 'cucumber', name: 'Fresh cucumber', amount: 1, unit: 'large', aisle: 'produce', estUgx: 1000, prep: 'washed & chunked' },
        { id: 'lemon', name: 'Fresh lemon', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'juiced' }
      ],
      steps: [
        { text: 'Wash 1 large cucumber and 3 crisp green apples well (leave skins on for fresh color and minerals); core the apples and chop both into 2 cm chunks.' },
        { text: 'Add cucumber chunks and 1 cup ice-cold water to the blender first, then drop in the chopped green apples.' },
        { text: 'Blend on high speed for 45 seconds until pale green, smooth, and frothy.' },
        { text: 'Strain through a fine mesh sieve into chilled glass jars or bottles, stir in fresh lemon juice immediately so the green color stays vibrant, and keep chilled.' }
      ],
      ugandaTip: 'Bottle in a sealed glass jar right after straining — fresh lemon keeps it bright and crisp in the fridge for up to 24 hours.'
    },
    {
      id: 'pineapple-apple-carrot-cleanse-juice',
      title: 'Pineapple, Crisp Apple & Carrot Cooling Juice',
      subtitle: 'Naturally sweet golden-yellow cooling juice combining sweet pineapple, red apple, and tender carrot',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/pineapple-apple-carrot-cleanse-juice.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'A gentle, kid-friendly vitamin A and C juice with zero added sugar and zero spicy bite.',
      nutrition: { kcal: 94, protein: '1g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'pineapple', name: 'Ripe Ugandan pineapple', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'peeled & cubed' },
        { id: 'apple', name: 'Crisp red apple', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1500, prep: 'cored & diced' },
        { id: 'carrots', name: 'Fresh carrot', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 500, prep: 'scrubbed & thinly sliced' }
      ],
      steps: [
        { text: 'Peel and cube half a ripe pineapple (about 2 cups), core and dice 1 crisp red apple, and thinly slice 1 scrubbed carrot.' },
        { text: 'Place juicy pineapple cubes and 1 cup cold water in the blender first, then add diced apple and carrot slices.' },
        { text: 'Blend on high for 50 to 60 seconds until smooth and golden-yellow.' },
        { text: 'Strain cleanly through a fine sieve into tall chilled glasses, garnish with a small pineapple triangle, and serve ice-cold.' }
      ],
      ugandaTip: 'Chill the pineapple and apple in the fridge overnight so the juice pours frosty-cold without diluting it with ice.'
    },
    {
      id: 'fresh-mango-pepper-coriander-salsa',
      title: 'Fresh Mango, Bell Pepper & Coriander Salsa',
      subtitle: 'Vibrant sweet-tangy diced ripe mango tossed with red bell pepper, red onion, lime, and fresh dhania',
      cuisine: 'Ugandan',
      category: 'salads',
      image: './images/fresh-mango-pepper-coriander-salsa.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 3,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Bright raw vitamin C and natural sweetness transform grilled tilapia, chicken, or plain beans with almost zero calories.',
      nutrition: { kcal: 78, protein: '1g', fiber: '3g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'mango', name: 'Firm-ripe sweet mangoes', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 2500, prep: 'finely diced' },
        { id: 'bell-peppers', name: 'Red bell pepper (hooho)', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 1000, prep: 'finely diced' },
        { id: 'red-onion', name: 'Red onion', amount: 0.5, unit: 'small', aisle: 'produce', estUgx: 500, prep: 'minced & rinsed' },
        { id: 'coriander', name: 'Fresh coriander (dhania) & lime', amount: 1, unit: 'set', aisle: 'greens', estUgx: 1000, prep: 'chopped & juiced' }
      ],
      steps: [
        { text: 'Soak finely minced red onion in cold salted water for 5 minutes, then drain and pat dry so it stays crisp without overpowering the sweet mango.' },
        { text: 'Choose firm-ripe mangoes (soft enough to smell sweet, firm enough to hold clean cubes); score the cheeks into a 1 cm grid and scoop neat cubes into a serving bowl.' },
        { text: 'Add finely diced red bell pepper, drained red onion, optional minced bird-eye chili, and 3 tablespoons chopped fresh coriander leaves.' },
        { text: 'Squeeze juice of 1 fresh lime plus a pinch of sea salt over top; fold gently so mango cubes stay intact and rest 5 minutes before spooning over grilled fish, chicken, or rice.' }
      ],
      ugandaTip: 'Firm-ripe Tommy or Apple mangoes hold clean, jewel-like cubes without turning mushy.'
    },
    {
      id: 'tricolor-bell-pepper-herb-salad',
      title: 'Tricolor Bell Pepper, Red Onion & Herb Crunch Salad',
      subtitle: 'Crisp ribbons of red, yellow, and green bell peppers tossed with red onion, parsley, and lemon-olive dressing',
      cuisine: 'Mediterranean',
      category: 'salads',
      image: './images/tricolor-bell-pepper-herb-salad.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 3,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Sweet bell peppers deliver more vitamin C per cup than oranges with ultra-low carbs and satisfying crunch.',
      nutrition: { kcal: 95, protein: '2g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'bell-peppers', name: 'Red, yellow & green bell peppers', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 3500, prep: 'seeded & thinly sliced' },
        { id: 'red-onion', name: 'Red onion', amount: 0.5, unit: 'medium', aisle: 'produce', estUgx: 500, prep: 'paper-thin slices' },
        { id: 'parsley', name: 'Fresh parsley or coriander', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 600, prep: 'roughly chopped' },
        { id: 'olive-lemon', name: 'Olive oil (1 tbsp), lemon, oregano & garlic', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'whisked dressing' }
      ],
      steps: [
        { text: 'Slice red, yellow, and green bell peppers lengthwise into thin, even strips, discarding white ribs and seeds; slice half a red onion paper-thin and rinse briefly in cold water.' },
        { text: 'Whisk 1 tablespoon extra-virgin olive oil, juice of 1 fresh lemon, 1/2 grated garlic clove, 1/2 teaspoon dried oregano, 1/2 teaspoon salt, and cracked black pepper in a small jar until emulsified.' },
        { text: 'Combine the tricolor pepper strips, drained red onion, and chopped fresh parsley or coriander in a wide bowl.' },
        { text: 'Pour the lemon-oregano dressing over top, toss well to coat every ribbon, and chill 10 minutes before serving so flavors meld while peppers stay ultra-crunchy.' }
      ],
      ugandaTip: 'Unlike leafy lettuce, bell pepper salad stays crunchy in the fridge for up to 2 days — great for weekday lunch prep.'
    },
    {
      id: 'island-potato-carrot-pea-salad',
      title: 'Creamy Yogurt, Irish Potato, Carrot & Green Pea Salad',
      subtitle: 'Lightened Kampala-meets-Island classic with tender Irish potatoes, sweet carrots, peas, and tangy yogurt dressing',
      cuisine: 'Ugandan',
      category: 'salads',
      image: './images/island-potato-carrot-pea-salad.jpg',
      prepMinutes: 12,
      cookMinutes: 16,
      totalMinutes: 28,
      servings: 4,
      tags: ['Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Swapping heavy bottled mayonnaise for plain yogurt, mustard, and lemon cuts saturated fat by over 70% while keeping it rich and creamy.',
      nutrition: { kcal: 235, protein: '7g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'irish-potatoes', name: 'Firm Irish potatoes', amount: 500, unit: 'g', aisle: 'produce', estUgx: 2500, prep: 'peeled & 2 cm diced' },
        { id: 'carrots', name: 'Carrots & green garden peas', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 1800, prep: 'diced finely' },
        { id: 'yogurt', name: 'Thick plain unsweetened yogurt', amount: 0.75, unit: 'cup', aisle: 'protein', estUgx: 2000, prep: 'chilled' },
        { id: 'mustard-herbs', name: 'Mustard (1 tsp), lemon, spring onion & parsley', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'whisked' }
      ],
      steps: [
        { text: 'Peel and cut Irish potatoes into neat 2 cm cubes and dice carrots into smaller 1 cm cubes so both finish cooking at the same time.' },
        { text: 'Place potatoes and carrots in a pot of cold salted water, bring to a boil over medium-high heat, then simmer gently 12 to 14 minutes until fork-tender (do not overboil to mush). Drop in green peas for the final 2 minutes, then drain thoroughly and let cool 10 minutes.', timerMin: 15 },
        { text: 'Whisk 3/4 cup thick plain yogurt, 1 teaspoon mustard, juice of 1/2 lemon, 1 teaspoon olive oil, 1/2 teaspoon salt, cracked black pepper, and finely sliced spring onion in a large bowl.' },
        { text: 'Fold the cooled potatoes, carrots, and peas gently into the creamy yogurt dressing, garnish with fresh parsley or coriander, and chill 20 minutes before serving beside grilled chicken or fish.' }
      ],
      ugandaTip: 'Chilling boiled Irish potatoes before eating increases resistant starch, which keeps blood sugar steadier and feeds good gut bacteria.'
    },
    {
      id: 'citrus-banana-grape-fruit-bowl',
      title: 'Chilled Citrus, Banana, Mango & Grape Fruit Bowl',
      subtitle: 'Bright zero-syrup morning fruit bowl of sweet yellow banana, juicy orange segments, grapes, and mango',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/citrus-banana-grape-fruit-bowl.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Whole fresh fruit fiber slows natural sugar absorption while loading your morning with potassium and vitamin C.',
      nutrition: { kcal: 165, protein: '2g', fiber: '5g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'banana', name: 'Ripe sweet bananas (bogoya)', amount: 2, unit: 'small', aisle: 'produce', estUgx: 800, prep: 'sliced' },
        { id: 'orange', name: 'Sweet tangerine or orange', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'peeled segments' },
        { id: 'mango', name: 'Ripe mango or pineapple chunks', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 1500, prep: 'cubed' },
        { id: 'grapes', name: 'Seedless grapes (or passion pulp) & lime', amount: 0.75, unit: 'cup', aisle: 'produce', estUgx: 2500, prep: 'halved & rinsed' }
      ],
      steps: [
        { text: 'Rinse grapes well and halve them lengthwise; peel sweet oranges or tangerines cleanly, separating into neat bite-sized segments and removing any seeds.' },
        { text: 'Cube chilled ripe mango or sweet pineapple into bite-sized pieces and place in a wide white serving bowl with the citrus segments and grapes.' },
        { text: 'Slice ripe yellow bogoya bananas last (right before serving so they stay firm and bright) and add to the bowl.' },
        { text: 'Squeeze a light mist of fresh lime juice across the fruit to brighten the flavors, toss gently, and serve chilled on its own or beside 2 boiled eggs for extra protein.' }
      ],
      ugandaTip: 'Whenever grapes are pricey, swap them for fresh sweet passion fruit pulp spooned over the banana and mango.'
    },
    {
      id: 'watermelon-pineapple-evening-platter',
      title: 'Chilled Watermelon & Sweet Pineapple Hydration Platter',
      subtitle: 'Crisp zero-cook evening platter of ruby watermelon triangles and golden Ugandan pineapple wedges',
      cuisine: 'Ugandan',
      category: 'salads',
      image: './images/watermelon-pineapple-evening-platter.jpg',
      prepMinutes: 7,
      cookMinutes: 0,
      totalMinutes: 7,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Light, water-rich fruit satisfies late-evening sweet cravings without heavy calories or disturbing sleep.',
      nutrition: { kcal: 118, protein: '1g', fiber: '3g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'watermelon', name: 'Chilled ripe red watermelon', amount: 2.5, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'cut into triangles' },
        { id: 'pineapple', name: 'Chilled sweet Ugandan pineapple', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'cut into wedges' },
        { id: 'lime-mint', name: 'Fresh lime wedge & mint leaves (optional)', amount: 1, unit: 'set', aisle: 'greens', estUgx: 500, prep: 'garnish' }
      ],
      steps: [
        { text: 'Chill whole watermelon and pineapple in the fridge for at least 1 hour so the platter serves crisp and refreshing.' },
        { text: 'Slice off the thick pineapple skin cleanly, remove dark eyes with shallow diagonal cuts, quarter lengthwise, and slice into bite-sized golden wedges.' },
        { text: 'Cut chilled watermelon into neat seed-flicked triangles and arrange both fruits side by side on a wide platter.' },
        { text: 'Finish with a light squeeze of fresh lime juice and a tiny pinch of sea salt (optional — brings out deep tropical sweetness) right before enjoying.' }
      ],
      ugandaTip: 'Light fruit platters are ideal 2 hours after dinner when you want something sweet without heavy desserts.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(BATCH4_RECIPES);
  }
})();
