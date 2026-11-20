(() => {
  const MORE_RECIPES = [
    {
      id: 'gnut-mushroom-stew',
      title: 'Creamy Groundnut & Mushroom Stew',
      subtitle: 'Oil-free Ugandan ebinyebwa simmered with mushrooms and bright dodo greens',
      category: 'onepot',
      image: './images/gnut-mushroom-stew.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 3,
      tags: ['Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Groundnuts bring natural healthy fats, magnesium, and protein with zero added cooking oil.',
      nutrition: { kcal: 390, protein: '15g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'gnut-paste', name: 'Raw groundnut (ebinyebwa) paste', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 3500, prep: 'whisked smooth in warm water' },
        { id: 'mushrooms', name: 'Fresh oyster or button mushrooms', amount: 200, unit: 'g', aisle: 'produce', estUgx: 3500, prep: 'sliced' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'finely diced' },
        { id: 'onion', name: 'Onion', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 700, prep: 'chopped' },
        { id: 'dodo', name: 'Fresh dodo (amaranth) leaves', amount: 1, unit: 'bunch', aisle: 'greens', estUgx: 1000, prep: 'washed & chopped' }
      ],
      steps: [
        { text: 'Simmer chopped onion, tomatoes, and mushrooms in 1/3 cup water (no oil needed) for 6 minutes until tomatoes soften.', timerMin: 6 },
        { text: 'Whisk groundnut paste with 1.5 cups warm water until completely smooth, then pour slowly into the pot while stirring.' },
        { text: 'Simmer gently uncovered on low heat for 18 minutes, stirring occasionally so the bottom stays smooth. Serve with steamed dodo greens.', timerMin: 18 }
      ],
      ugandaTip: 'Always use low heat after adding g-nut paste so it thickens evenly without sticking.'
    },
    {
      id: 'whole-grilled-tilapia',
      title: 'Herb-Marinated Whole Grilled Tilapia',
      subtitle: 'Charred lake tilapia with garlic, ginger, lime, sukuma wiki, and sweet potato',
      category: 'slow',
      image: './images/whole-grilled-tilapia.jpg',
      prepMinutes: 20,
      cookMinutes: 25,
      totalMinutes: 45,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Whole-food meal pairing lean grilled fish with potassium-rich sweet potato and sautéed collard greens.',
      nutrition: { kcal: 460, protein: '42g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'whole-tilapia', name: 'Whole fresh tilapia (cleaned)', amount: 1, unit: 'large', aisle: 'protein', estUgx: 20000, prep: 'scored on both sides' },
        { id: 'sweet-potato', name: 'Sweet potatoes', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'steamed rounds' },
        { id: 'sukuma', name: 'Sukuma wiki greens', amount: 1, unit: 'bunch', aisle: 'greens', estUgx: 1000, prep: 'shredded' },
        { id: 'garlic-ginger', name: 'Garlic, ginger & turmeric', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 1000, prep: 'crushed paste' },
        { id: 'lemon', name: 'Fresh lemon or lime', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'halved & juiced' }
      ],
      steps: [
        { text: 'Rub fish inside and out with lemon juice, crushed garlic, ginger, turmeric, salt, and 1 teaspoon oil. Marinate 20 minutes.', timerMin: 20 },
        { text: 'Grill or bake at 200C for 22 to 25 minutes until skin blisters and flesh flakes cleanly from the bone.', timerMin: 24 },
        { text: 'Steam sweet potato rounds alongside and flash-saute sukuma wiki for 3 minutes with onion and tomato.' }
      ],
      ugandaTip: 'Stuff the fish cavity with sliced onion and lemon slices to keep it juicy on charcoal or oven heat.'
    },
    {
      id: 'steamed-matooke-dodo',
      title: 'Steamed Matooke with Light G-Nut & Dodo',
      subtitle: 'Traditional Ugandan banana-leaf steamed matooke with clean vegetable sides',
      category: 'slow',
      image: './images/steamed-matooke-dodo.jpg',
      prepMinutes: 20,
      cookMinutes: 55,
      totalMinutes: 75,
      servings: 3,
      tags: ['Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Steaming locks in natural potassium and B6 without heavy frying, paired with iron-rich leafy dodo.',
      nutrition: { kcal: 420, protein: '12g', fiber: '9g', sugar: 'Low' },
      ingredients: [
        { id: 'matooke', name: 'Green matooke', amount: 8, unit: 'fingers', aisle: 'produce', estUgx: 4000, prep: 'peeled & wrapped in banana leaf' },
        { id: 'gnut-paste', name: 'Natural groundnut paste', amount: 0.75, unit: 'cup', aisle: 'grains', estUgx: 2800, prep: 'whisked with warm water' },
        { id: 'dodo', name: 'Fresh dodo leaves', amount: 2, unit: 'bunches', aisle: 'greens', estUgx: 2000, prep: 'washed & chopped' },
        { id: 'tomatoes', name: 'Tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'onion', name: 'Onion', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 700, prep: 'sliced' }
      ],
      steps: [
        { text: 'Line a pot with clean banana leaf ribs and 2 cups water. Wrap peeled matooke tightly in banana leaves (or foil) and steam gently for 50 minutes.', timerMin: 50 },
        { text: 'Simmer half the tomatoes and onion with diluted g-nut paste on low heat for 20 minutes into a silky sauce.', timerMin: 20 },
        { text: 'Lightly mash the steamed matooke while wrapped, then serve warm with g-nut sauce and 4-minute sautéed dodo greens.' }
      ],
      ugandaTip: 'Make extra steamed matooke and portion into containers — it reheats wonderfully for lunch.'
    },
    {
      id: 'beef-pumpkin-stew',
      title: 'Slow-Braised Lean Beef & Pumpkin Pot',
      subtitle: 'Herb-simmered lean beef cubes with sweet orange ensujju pumpkin and carrots',
      category: 'slow',
      image: './images/beef-pumpkin-stew.jpg',
      prepMinutes: 15,
      cookMinutes: 65,
      totalMinutes: 80,
      servings: 4,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Trimming visible fat from lean beef yields high iron and zinc alongside antioxidant-rich pumpkin.',
      nutrition: { kcal: 410, protein: '36g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-meat', name: 'Lean beef steak (fat trimmed)', amount: 500, unit: 'g', aisle: 'protein', estUgx: 11500, prep: 'cut into cubes' },
        { id: 'pumpkin', name: 'Orange pumpkin (ensujju)', amount: 350, unit: 'g', aisle: 'produce', estUgx: 2000, prep: 'peeled & chunked' },
        { id: 'carrots', name: 'Carrots', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'thick rounds' },
        { id: 'tomatoes', name: 'Ripe tomatoes', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'chopped' },
        { id: 'garlic-ginger', name: 'Garlic, ginger & rosemary', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 1000, prep: 'minced' }
      ],
      steps: [
        { text: 'Brown trimmed beef cubes in a dry heavy pot for 6 minutes with salt, garlic, and ginger.', timerMin: 6 },
        { text: 'Add onions, tomatoes, rosemary, and 2 cups water; cover and simmer gently for 45 minutes until tender.', timerMin: 45 },
        { text: 'Add pumpkin chunks and carrots; simmer 15 more minutes so the vegetables thicken the rich broth naturally.', timerMin: 15 }
      ],
      ugandaTip: 'Ask your butcher for lean topside or steak without visible fat so the stew stays light and clean.'
    },
    {
      id: 'hibiscus-sobolo',
      title: 'Zero-Sugar Hibiscus Sobolo & Ginger',
      subtitle: 'Ruby hibiscus tea infused with pineapple peels, fresh ginger, and cloves',
      category: 'juices',
      image: './images/hibiscus-sobolo.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 6,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Hibiscus anthocyanins support healthy blood pressure while fresh pineapple gives natural sweetness.',
      nutrition: { kcal: 48, protein: '0g', fiber: '1g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'hibiscus', name: 'Dried hibiscus flowers (sobolo)', amount: 1.5, unit: 'cups', aisle: 'pantry', estUgx: 3000, prep: 'rinsed quickly in cold water' },
        { id: 'pineapple', name: 'Whole sweet pineapple', amount: 1, unit: 'large', aisle: 'produce', estUgx: 4000, prep: 'washed, peels kept & flesh chopped' },
        { id: 'ginger', name: 'Fresh ginger root', amount: 2, unit: 'thumbs', aisle: 'produce', estUgx: 800, prep: 'sliced or crushed' },
        { id: 'cloves-cinnamon', name: 'Whole cloves & cinnamon stick', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 600, prep: 'optional warm spice' },
        { id: 'mint', name: 'Fresh mint sprigs', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'for serving' }
      ],
      steps: [
        { text: 'Boil washed pineapple peels, rinsed hibiscus flowers, crushed ginger, and spices in 2.5 liters of water for 20 minutes.', timerMin: 20 },
        { text: 'Blend the fresh pineapple flesh with 1 cup water until smooth, then strain through a fine sieve.' },
        { text: 'Strain the cooled hibiscus infusion into a jug, stir in the fresh pineapple juice, chill, and serve over ice with mint.' }
      ],
      ugandaTip: 'Store chilled in glass bottles for up to 4 days — zero sugar needed when your pineapple is sweet.'
    },
    {
      id: 'beet-carrot-passion',
      title: 'Beetroot, Carrot, Pineapple & Passion Juice',
      subtitle: 'Vibrant natural energy tonic packed with vitamin C, folate, and ginger',
      category: 'juices',
      image: './images/beet-carrot-passion.jpg',
      prepMinutes: 15,
      cookMinutes: 0,
      totalMinutes: 15,
      servings: 4,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Natural beetroot nitrates boost stamina and circulation alongside beta-carotene from carrots.',
      nutrition: { kcal: 92, protein: '1g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'beetroot', name: 'Fresh red beetroot', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'peeled & chopped' },
        { id: 'carrots', name: 'Sweet carrots', amount: 4, unit: 'medium', aisle: 'produce', estUgx: 1500, prep: 'washed & chopped' },
        { id: 'pineapple', name: 'Ripe pineapple flesh', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 2000, prep: 'cubed' },
        { id: 'passion-fruit', name: 'Fresh passion fruits', amount: 5, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'pulp scooped' },
        { id: 'ginger', name: 'Fresh ginger', amount: 1, unit: 'thumb', aisle: 'produce', estUgx: 400, prep: 'peeled' }
      ],
      steps: [
        { text: 'Blend beetroot, carrots, pineapple cubes, ginger, and 2 cups cold water until completely smooth.' },
        { text: 'Press through a fine sieve or clean juice cloth into a pitcher to extract every drop.' },
        { text: 'Stir in strained passion fruit pulp and 1 more cup chilled water to balance richness. Serve cold.' }
      ],
      ugandaTip: 'Rinse your blender immediately after beetroot so the jug stays stain-free.'
    },
    {
      id: 'green-dodo-detox',
      title: 'Green Market Dodo, Cucumber & Lime Tonic',
      subtitle: 'Crisp emerald hydration drink blending tender greens with pineapple and lime',
      category: 'juices',
      image: './images/green-dodo-detox.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Low-calorie hydration rich in chlorophyll, potassium, and vitamin C without fruit-juice sugar spikes.',
      nutrition: { kcal: 68, protein: '2g', fiber: '2g', sugar: 'Low' },
      ingredients: [
        { id: 'dodo', name: 'Young tender dodo or spinach', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 700, prep: 'thoroughly washed' },
        { id: 'cucumber', name: 'Fresh cucumber', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1000, prep: 'sliced' },
        { id: 'pineapple', name: 'Sweet pineapple', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 1500, prep: 'cubed' },
        { id: 'lime', name: 'Fresh lime', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' },
        { id: 'ginger', name: 'Fresh ginger', amount: 0.5, unit: 'thumb', aisle: 'produce', estUgx: 300, prep: 'peeled' }
      ],
      steps: [
        { text: 'Blend washed tender dodo leaves, cucumber, pineapple, ginger, and 1 cup cold water on high until silky.' },
        { text: 'Pour straight for high fiber or strain lightly through a sieve, then stir in fresh lime juice and serve over ice.' }
      ],
      ugandaTip: 'Use only young tender dodo leaves (or baby spinach) so the juice tastes fresh and bright.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(MORE_RECIPES);
  }
})();
