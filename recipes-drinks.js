(() => {
  const DRINKS_EXPANSION = [
    {
      id: 'passion-mango-mint-cooler',
      title: 'Passion Fruit, Mango & Fresh Mint Cooler',
      subtitle: 'Sweet-tart golden Ugandan passion fruit blended with ripe mango cheeks and muddled garden mint',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/passion-mango-mint-cooler.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Ripe sweet mango naturally balances tangy vitamin-C-rich passion fruit so you need zero refined sugar.',
      nutrition: { kcal: 94, protein: '1g', fiber: '3g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'passion-fruit', name: 'Ripe wrinkled purple passion fruits', amount: 6, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'halved & scooped' },
        { id: 'mango', name: 'Ripe sweet mango', amount: 1, unit: 'large', aisle: 'produce', estUgx: 1500, prep: 'peeled & cubed' },
        { id: 'mint', name: 'Fresh garden mint leaves', amount: 10, unit: 'leaves', aisle: 'greens', estUgx: 400, prep: 'rinsed' },
        { id: 'lime', name: 'Fresh lime & chilled water', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Halve 6 ripe passion fruits and scoop the fragrant pulp into a blender, reserving 1 tablespoon of whole seeds in a small bowl for garnish.' },
        { text: 'Add cubed sweet mango and 1.5 cups cold filtered water; pulse gently for 10 to 15 seconds only (short pulsing keeps passion seeds whole instead of turning bitter).' },
        { text: 'Pour through a medium mesh strainer into a pitcher, pressing the pulp firmly with the back of a spoon to extract every drop of golden juice.' },
        { text: 'Lightly clap 10 fresh mint leaves between your palms to release their oils, stir into the pitcher with fresh lime juice, pour over ice, and spoon reserved passion seeds on top.' }
      ],
      ugandaTip: 'Pick slightly wrinkled purple passion fruits at the market — they are sweeter and far juicier than smooth tight ones. Keeps chilled up to 24 hours.'
    },
    {
      id: 'tamarind-ginger-lime-cooler',
      title: 'Tamarind (Nkoggo), Ginger & Lime Spiced Cooler',
      subtitle: 'Tangy-sweet East African tamarind infusion brightened with fresh crushed ginger, lime, and sea salt',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/tamarind-ginger-lime-cooler.jpg',
      prepMinutes: 10,
      cookMinutes: 10,
      totalMinutes: 20,
      servings: 3,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Tamarind is packed with natural polyphenols, magnesium, and potassium — refreshing and gentle on digestion after a heavy meal.',
      nutrition: { kcal: 68, protein: '1g', fiber: '2g', sugar: 'Low' },
      ingredients: [
        { id: 'tamarind', name: 'Dried tamarind pods or pulp block (nkoggo)', amount: 80, unit: 'g', aisle: 'produce', estUgx: 2000, prep: 'shelled & veined' },
        { id: 'ginger', name: 'Fresh ginger root (tangawizi)', amount: 1, unit: 'thumb', aisle: 'produce', estUgx: 500, prep: 'peeled & thinly sliced' },
        { id: 'lime', name: 'Fresh lime', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced + wheels' },
        { id: 'honey-salt', name: 'Natural honey (1 tbsp) & tiny sea salt pinch', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 500, prep: 'optional balance' }
      ],
      steps: [
        { text: 'Crack open tamarind pods (or break up tamarind paste), remove hard shells and long outer strings, and place the sticky pulp in a heatproof bowl.' },
        { text: 'Bring 3 cups water and thinly sliced fresh ginger to a gentle boil for 5 minutes so the ginger turns fragrant, then pour hot ginger water over the tamarind pulp and soak covered for 10 minutes.', timerMin: 10 },
        { text: 'Mash the softened pulp firmly with a clean spoon or fingers to loosen flesh from seeds, then strain through a fine mesh sieve into a clean jug.' },
        { text: 'Stir in fresh lime juice, a tiny pinch of sea salt (lifts the sweet-tart flavor), and up to 1 tablespoon honey if desired; chill thoroughly and serve over ice with mint.' }
      ],
      ugandaTip: 'Make a double batch on Sunday — strained tamarind-ginger concentrate keeps fresh in a glass bottle in the fridge for up to 5 days.'
    },
    {
      id: 'watermelon-beetroot-ginger-juice',
      title: 'Watermelon, Beetroot & Ginger Stamina Juice',
      subtitle: 'Deep crimson natural pre-workout and afternoon energy blend with hydrating watermelon and earthy beet',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/watermelon-beetroot-ginger-juice.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Watermelon citrulline and beetroot natural nitrates work together to support smooth blood flow, hydration, and clean energy.',
      nutrition: { kcal: 82, protein: '2g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'watermelon', name: 'Chilled ripe red watermelon', amount: 3, unit: 'cups', aisle: 'produce', estUgx: 2500, prep: 'cubed' },
        { id: 'beetroot', name: 'Fresh raw beetroot', amount: 0.5, unit: 'medium', aisle: 'produce', estUgx: 800, prep: 'peeled & finely diced' },
        { id: 'ginger', name: 'Fresh ginger root', amount: 1, unit: 'thumb', aisle: 'produce', estUgx: 400, prep: 'peeled & grated' },
        { id: 'lime', name: 'Fresh lime', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Peel half a medium beetroot and dice into small 1 cm cubes so your blender breaks it down smoothly without chunks.' },
        { text: 'Add cubed chilled watermelon first (its juice starts the blades easily without needing extra water), then drop in diced beetroot and grated fresh ginger.' },
        { text: 'Blend on high speed for 45 to 60 seconds until deep crimson and silky smooth.' },
        { text: 'Strain through a fine mesh sieve into two cold glasses, stir in fresh lime juice to brighten the earthy beetroot flavor, and drink immediately.' }
      ],
      ugandaTip: 'Starting with half a beetroot keeps the taste crisp and sweet rather than overly earthy — increase to a whole beetroot once you love the flavor.'
    },
    {
      id: 'pawpaw-lime-chia-smoothie',
      title: 'Velvety Pawpaw (Papaya), Lime & Chia Digestive Smoothie',
      subtitle: 'Creamy coral-orange Ugandan pawpaw blended with plain yogurt or soya milk, zesty lime, and chia',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/pawpaw-lime-chia-smoothie.jpg',
      prepMinutes: 7,
      cookMinutes: 0,
      totalMinutes: 7,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Ripe pawpaw contains natural papain digestive enzymes paired with probiotic plain yogurt and soluble chia fiber.',
      nutrition: { kcal: 155, protein: '6g', fiber: '6g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'pawpaw', name: 'Ripe orange pawpaw (papaya)', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'seeded & cubed chilled' },
        { id: 'yogurt', name: 'Plain unsweetened yogurt or soya milk', amount: 0.75, unit: 'cup', aisle: 'protein', estUgx: 2000, prep: 'chilled' },
        { id: 'chia-seeds', name: 'Chia seeds', amount: 1, unit: 'tbsp', aisle: 'grains', estUgx: 800, prep: 'whole' },
        { id: 'lime-ginger', name: 'Fresh lime juice & tiny pinch grated ginger', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 600, prep: 'juiced' }
      ],
      steps: [
        { text: 'Scoop black seeds cleanly out of ripe chilled pawpaw, peel off the skin, and cut into chunks (chilled fruit gives a thick smoothie without watering it down with ice).' },
        { text: 'Combine pawpaw, plain yogurt or soya milk, half the chia seeds, 1/4 cup cold water, and a tiny pinch of grated ginger in the blender.' },
        { text: 'Blend on medium-high for 30 to 40 seconds until completely velvety and coral-orange.' },
        { text: 'Squeeze in fresh lime juice (this cuts any muskiness and makes pawpaw pop), pour into glasses, and swirl remaining chia seeds on top; let rest 3 minutes to thicken slightly.' }
      ],
      ugandaTip: 'Freeze extra ripe pawpaw cubes in a zip bag so you can blend a cold, thick 2-minute breakfast smoothie any morning.'
    },
    {
      id: 'soursop-kitafeeri-pineapple-juice',
      title: 'Soursop (Kitafeeri), Pineapple & Mint Tropical Juice',
      subtitle: 'Naturally creamy fragrant Ugandan kitafeeri blended with sweet golden pineapple and cool mint',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/soursop-kitafeeri-pineapple-juice.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Ugandan soursop (kitafeeri) delivers rich vitamin C, potassium, and creamy milkshake texture with zero dairy or added sugar.',
      nutrition: { kcal: 112, protein: '2g', fiber: '4g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'soursop', name: 'Ripe soft soursop (kitafeeri) pulp', amount: 1.5, unit: 'cups', aisle: 'produce', estUgx: 3500, prep: 'seeded carefully' },
        { id: 'pineapple', name: 'Ripe sweet Ugandan pineapple', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 1500, prep: 'peeled & cubed' },
        { id: 'mint', name: 'Fresh mint leaves & squeeze of lime', amount: 6, unit: 'leaves', aisle: 'greens', estUgx: 500, prep: 'rinsed' }
      ],
      steps: [
        { text: 'Cut open a soft ripe kitafeeri, scoop out the white fibrous pulp into a bowl, and remove every shiny black seed by hand (never blend soursop seeds).' },
        { text: 'Place seeded soursop pulp, cubed sweet pineapple, and 1.25 cups chilled water into a blender.' },
        { text: 'Blend on high for 30 seconds until creamy and pale ivory-gold, then press through a coarse strainer if you prefer a silkier texture without pulp fibers.' },
        { text: 'Stir in a light squeeze of fresh lime juice, pour into chilled glasses over ice, and garnish with fresh mint sprigs.' }
      ],
      ugandaTip: 'A kitafeeri is perfectly ripe when the green spiky skin yields gently to your thumb like a ripe avocado.'
    },
    {
      id: 'rosemary-lemon-ginger-tea',
      title: 'Fresh Rosemary, Lemon & Ginger Focus Tea',
      subtitle: 'Crisp pine-scented herbal infusion steeped with garden rosemary sprigs, ginger slices, and bright lemon',
      cuisine: 'Mediterranean',
      category: 'juices',
      image: './images/rosemary-lemon-ginger-tea.jpg',
      prepMinutes: 3,
      cookMinutes: 6,
      totalMinutes: 9,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Naturally caffeine-free rosemary polyphenols support mental clarity and gentle afternoon alertness without coffee jitters.',
      nutrition: { kcal: 8, protein: '0g', fiber: '0g', sugar: 'Zero' },
      ingredients: [
        { id: 'rosemary', name: 'Fresh rosemary sprigs', amount: 2, unit: 'sprigs', aisle: 'greens', estUgx: 500, prep: 'rinsed & lightly bruised' },
        { id: 'ginger', name: 'Fresh ginger root', amount: 0.75, unit: 'thumb', aisle: 'produce', estUgx: 400, prep: 'thinly sliced' },
        { id: 'lemon', name: 'Fresh lemon', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'sliced & juiced' }
      ],
      steps: [
        { text: 'Bring 2.5 cups fresh water and thinly sliced ginger to a gentle simmer in a small saucepan for 4 minutes so the ginger infuses deeply.', timerMin: 4 },
        { text: 'Turn off the heat completely, lightly bruise 2 fresh rosemary sprigs between your fingers to awaken the oils, and drop them into the hot pot.' },
        { text: 'Cover the pot with a lid (traps aromatic essential oils inside the tea) and steep for 4 to 5 minutes — avoid boiling rosemary directly or it turns woody and bitter.', timerMin: 5 },
        { text: 'Strain into warm mugs, add a squeeze of fresh lemon juice and a thin lemon wheel, and sip warm.' }
      ],
      ugandaTip: 'Delicious iced too — cool it down and pour over ice with a slice of cucumber for a crisp Kampala afternoon refresher.'
    },
    {
      id: 'moringa-ginger-lemon-tea',
      title: 'Moringa Leaf, Ginger & Lemon Energy Tea',
      subtitle: 'Earthy green Ugandan moringa infusion brightened with fresh ginger warmth and zesty lemon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/moringa-ginger-lemon-tea.jpg',
      prepMinutes: 3,
      cookMinutes: 5,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Moringa leaves are naturally rich in iron, antioxidants, and plant minerals — pairing with lemon vitamin C boosts iron absorption.',
      nutrition: { kcal: 12, protein: '1g', fiber: '0g', sugar: 'Zero' },
      ingredients: [
        { id: 'moringa', name: 'Dried moringa leaf tea (or 1 tbsp fresh leaves)', amount: 2, unit: 'tsp', aisle: 'pantry', estUgx: 1000, prep: 'loose leaf or tea bags' },
        { id: 'ginger', name: 'Fresh ginger root', amount: 0.75, unit: 'thumb', aisle: 'produce', estUgx: 400, prep: 'thinly sliced' },
        { id: 'lemon', name: 'Fresh lemon', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 400, prep: 'juiced' }
      ],
      steps: [
        { text: 'Simmer 2.5 cups water with sliced fresh ginger for 4 minutes on medium heat until aromatic.', timerMin: 4 },
        { text: 'Remove pot from the stove and let the water cool for 1 full minute (around 85C) so delicate moringa nutrients and smooth green flavor are preserved.' },
        { text: 'Add dried moringa leaves (or fresh washed leaflets), cover, and steep for 4 minutes until the brew turns a clear emerald-gold.', timerMin: 4 },
        { text: 'Strain into mugs and stir in fresh lemon juice right before drinking (avoid boiling lemon so vitamin C stays intact).' }
      ],
      ugandaTip: 'Add 4 fresh mint leaves while steeping if you want a softer, cooler taste alongside moringa.'
    },
    {
      id: 'chamomile-mint-fennel-bedtime-tea',
      title: 'Chamomile, Fresh Mint & Fennel Bedtime Tea',
      subtitle: 'Calming floral caffeine-free evening tea designed to ease bloating and wind down before sleep',
      cuisine: 'Mediterranean',
      category: 'juices',
      image: './images/chamomile-mint-fennel-bedtime-tea.jpg',
      prepMinutes: 3,
      cookMinutes: 5,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Zero-caffeine chamomile blossoms, cooling mint, and sweet fennel seeds soothe evening digestion and promote restful sleep.',
      nutrition: { kcal: 6, protein: '0g', fiber: '0g', sugar: 'Zero' },
      ingredients: [
        { id: 'chamomile', name: 'Chamomile tea bags or dried blossoms', amount: 2, unit: 'bags', aisle: 'pantry', estUgx: 1200, prep: 'ready to steep' },
        { id: 'mint', name: 'Fresh garden mint leaves', amount: 8, unit: 'leaves', aisle: 'greens', estUgx: 400, prep: 'rinsed' },
        { id: 'fennel', name: 'Fennel seeds (optional, or 2 cardamom pods)', amount: 0.5, unit: 'tsp', aisle: 'pantry', estUgx: 300, prep: 'lightly crushed' }
      ],
      steps: [
        { text: 'Lightly crush 1/2 teaspoon fennel seeds (or 2 green cardamom pods) with the flat of a knife to release their natural sweet oils.' },
        { text: 'Bring 2 cups water just to a boil, remove from heat, and drop in crushed fennel seeds and fresh mint leaves.' },
        { text: 'Add 2 chamomile tea bags (or 2 teaspoons dried flowers), cover your mug or teapot with a saucer, and steep for 5 minutes.', timerMin: 5 },
        { text: 'Strain gently (do not squeeze chamomile bags hard or the brew turns slightly bitter) and sip slowly 30 to 60 minutes before bed.' }
      ],
      ugandaTip: 'No fennel seeds on hand? Two bruised green cardamom pods or a strip of fresh lemongrass (kisubi) gives a lovely bedtime twist.'
    },
    {
      id: 'cinnamon-apple-clove-tea',
      title: 'Warm Cinnamon, Apple & Clove Cozy Evening Tea',
      subtitle: 'Naturally sweet spiced fruit infusion simmered from fresh apple slices, cinnamon bark, and whole cloves',
      cuisine: 'Mediterranean',
      category: 'juices',
      image: './images/cinnamon-apple-clove-tea.jpg',
      prepMinutes: 4,
      cookMinutes: 12,
      totalMinutes: 16,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Simmered apple slices and sweet Ceylon cinnamon satisfy late-night sweet cravings warmly with almost zero calories and no caffeine.',
      nutrition: { kcal: 28, protein: '0g', fiber: '1g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'apple', name: 'Sweet red apple (skin on)', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 1500, prep: 'cored & thinly sliced' },
        { id: 'cinnamon', name: 'Cinnamon stick (or 1/2 tsp ground)', amount: 1, unit: 'stick', aisle: 'pantry', estUgx: 600, prep: 'whole' },
        { id: 'cloves', name: 'Whole cloves & thin slice of ginger', amount: 3, unit: 'pcs', aisle: 'pantry', estUgx: 400, prep: 'whole' },
        { id: 'lemon', name: 'Fresh lemon wedge', amount: 0.5, unit: 'pc', aisle: 'produce', estUgx: 300, prep: 'squeeze to finish' }
      ],
      steps: [
        { text: 'Wash 1 sweet red apple well (keep the skin on for color and aroma), core it, and slice into thin half-moons.' },
        { text: 'Place apple slices, 1 cinnamon stick, 3 whole cloves, 2 thin slices of ginger, and 3 cups water in a small pot.' },
        { text: 'Bring just to a boil, then lower heat to a gentle covered simmer for 10 to 12 minutes until the kitchen smells warmly spiced and apples turn tender.', timerMin: 12 },
        { text: 'Strain into mugs with a bright squeeze of lemon juice (eat the warm cinnamon-spiced apple slices with a spoon as a healthy evening treat!).' }
      ],
      ugandaTip: 'Also works brilliantly with washed apple peels left over from making breakfast bowls or juices — zero waste.'
    },
    {
      id: 'citrus-spiced-orange-chai',
      title: 'Spiced Orange Peel, Cardamom & Black Tea Chai',
      subtitle: 'Fragrant morning black tea steeped with fresh orange zest, crushed cardamom, cinnamon, and warm milk',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/citrus-spiced-orange-chai.jpg',
      prepMinutes: 4,
      cookMinutes: 7,
      totalMinutes: 11,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Citrus zest essential oils and sweet cardamom add rich bakery-like aroma to cow or soya milk tea without needing spoons of sugar.',
      nutrition: { kcal: 92, protein: '5g', fiber: '0g', sugar: 'Low' },
      ingredients: [
        { id: 'cow-milk', name: 'Fresh cow milk or unsweetened soya milk', amount: 1.5, unit: 'cups', aisle: 'protein', estUgx: 2000, prep: 'chilled' },
        { id: 'orange', name: 'Fresh orange peel strips (no white pith)', amount: 2, unit: 'strips', aisle: 'produce', estUgx: 700, prep: 'washed & peeled thinly' },
        { id: 'chai-spices', name: 'Crushed cardamom (3 pods), cinnamon & black tea', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 700, prep: 'lightly bruised' }
      ],
      steps: [
        { text: 'Use a vegetable peeler to shave 2 thin strips of bright outer orange peel (avoid the thick white pith underneath, which tastes bitter).' },
        { text: 'Simmer 1 cup water with 3 lightly crushed cardamom pods, a small piece of cinnamon stick, and 1.5 teaspoons black tea leaves for 3 minutes until rich amber.', timerMin: 3 },
        { text: 'Pour in 1.5 cups cow milk or unsweetened soya milk, bring gently to a low frothy simmer over medium-low heat for 3 minutes, stirring so it does not boil over.', timerMin: 3 },
        { text: 'Turn off heat, drop in the fresh orange peel strips to infuse for 1 full minute off-heat (boiling citrus peel with milk can curdle it), then strain into warm mugs.' }
      ],
      ugandaTip: 'Adding orange peel *after* turning off the heat gives bright citrus aroma while keeping cow or soya milk completely silky.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(DRINKS_EXPANSION);
  }
})();
