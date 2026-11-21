(() => {
  const BATCH3_RECIPES = [
    {
      id: 'flaky-chapati-spiced-chai',
      title: 'Light Flaky Chapati & Ugandan Spiced Milk Tea (Chai)',
      subtitle: 'Soft whole-wheat pan-toasted chapatis served warm beside cardamom-ginger milk tea',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/flaky-chapati-spiced-chai.jpg',
      prepMinutes: 12,
      cookMinutes: 15,
      totalMinutes: 27,
      servings: 2,
      tags: ['Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Whole-wheat atta flour and minimal pan oil keep traditional Ugandan chapati & chai lighter and steady on blood sugar.',
      nutrition: { kcal: 365, protein: '12g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'wheat-flour', name: 'Whole-wheat & plain wheat flour', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2000, prep: 'mixed 50/50' },
        { id: 'cow-milk', name: 'Fresh cow or soya milk', amount: 1.5, unit: 'cups', aisle: 'protein', estUgx: 2000, prep: 'for chai' },
        { id: 'ginger-cardamom', name: 'Crushed ginger, cardamom & black tea', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 800, prep: 'whole or ground' },
        { id: 'oil', name: 'Sunflower or olive oil', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'light brushing' }
      ],
      steps: [
        { text: 'Knead flour, pinch of salt, warm water, and 1 teaspoon oil into a soft dough; rest 10 minutes, roll into thin rounds, and dry-toast in a hot skillet brushing sparingly with oil.', timerMin: 10 },
        { text: 'Simmer black tea leaves, crushed fresh ginger, and cardamom pods in water for 3 minutes, then add cow or soya milk until frothy and strain.', timerMin: 5 }
      ],
      ugandaTip: 'Pair 1 warm chapati with 2 boiled eggs or sliced avocado to turn tea-time into a complete balanced breakfast.'
    },
    {
      id: 'spiced-vegetable-pulao-basmati',
      title: 'Fragrant Whole-Spice Basmati Vegetable Pulao',
      subtitle: 'Light aromatic basmati rice steamed with sweet carrots, green peas, green beans, and cumin',
      cuisine: 'Asian',
      category: 'onepot',
      image: './images/spiced-vegetable-pulao-basmati.jpg',
      prepMinutes: 10,
      cookMinutes: 20,
      totalMinutes: 30,
      servings: 3,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Fluffy basmati loaded with colorful crunchy vegetables gives high fiber and aromatic satisfaction without heavy ghee.',
      nutrition: { kcal: 335, protein: '8g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'rice', name: 'Aged basmati rice', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 3500, prep: 'rinsed & soaked 15 min' },
        { id: 'carrots', name: 'Carrots, French green beans & peas', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 2500, prep: 'diced' },
        { id: 'onion-garlic', name: 'Onion, garlic & ginger', amount: 1, unit: 'set', aisle: 'produce', estUgx: 1000, prep: 'sliced & minced' },
        { id: 'pulao-spices', name: 'Cumin seeds, cardamom, bay leaf & cloves', amount: 2, unit: 'tsp', aisle: 'pantry', estUgx: 700, prep: 'whole spices' }
      ],
      steps: [
        { text: 'Toast cumin seeds, bay leaf, cardamom, and cloves in 1 tablespoon oil for 30 seconds; saute onion, garlic, and ginger 3 minutes.', timerMin: 4 },
        { text: 'Fold in diced carrots, green beans, peas, and soaked basmati rice; pour 2.75 cups water and simmer covered on low for 15 minutes until fluffy.', timerMin: 15 }
      ],
      ugandaTip: 'Serve alongside chilled plain yogurt spiced with cucumber and mint (raita) or grilled tilapia.'
    },
    {
      id: 'roast-chicken-oven-fries-kachumbari',
      title: 'Herb-Roast Chicken Quarter, Crispy Oven Fries & Yogurt Dip',
      subtitle: 'Golden spiced chicken leg quarter roasted beside crisp Irish potato fries and cool herb-yogurt dip',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/roast-chicken-oven-fries-kachumbari.jpg',
      prepMinutes: 12,
      cookMinutes: 35,
      totalMinutes: 47,
      servings: 2,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Oven-roasting potato batons with 1 teaspoon oil delivers crisp Kampala roast-chicken flavor without deep-frying fat.',
      nutrition: { kcal: 485, protein: '36g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Chicken leg quarters (skin trimmed)', amount: 2, unit: 'pcs', aisle: 'protein', estUgx: 10000, prep: 'scored' },
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 2000, prep: 'cut into fries' },
        { id: 'yogurt', name: 'Plain yogurt, coriander & garlic', amount: 0.5, unit: 'cup', aisle: 'protein', estUgx: 1800, prep: 'blended smooth' },
        { id: 'tomatoes', name: 'Tomatoes, red onion & lime (kachumbari)', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1200, prep: 'sliced' }
      ],
      steps: [
        { text: 'Rub chicken quarters with garlic, paprika, rosemary, lemon juice, and salt; roast on a tray at 210C for 20 minutes.', timerMin: 20 },
        { text: 'Toss Irish potato fries in 1 teaspoon oil and salt, spread on a separate hot tray, and bake 25 minutes alongside chicken until crisp; plate with kachumbari and yogurt-herb dip.', timerMin: 25 }
      ],
      ugandaTip: 'Par-boil potato fries for 4 minutes first, then oven-bake — they turn crisp outside with almost zero oil.'
    },
    {
      id: 'ugandan-beef-tripe-byenda-stew',
      title: 'Slow-Simmered Ugandan Beef Tripe (Byenda / Matumbo) Stew',
      subtitle: 'Tender honeycomb beef tripe braised in rich tomato, onion, garlic, and green pepper gravy',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/ugandan-beef-tripe-byenda-stew.jpg',
      prepMinutes: 15,
      cookMinutes: 55,
      totalMinutes: 70,
      servings: 4,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Beef tripe (byenda) is naturally lean, high in protein, zinc, and B12 when trimmed well and simmered gently with fresh vegetables.',
      nutrition: { kcal: 295, protein: '30g', fiber: '3g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-tripe', name: 'Cleaned honeycomb beef tripe (byenda)', amount: 600, unit: 'g', aisle: 'protein', estUgx: 10000, prep: 'washed & chopped' },
        { id: 'tomatoes', name: 'Ripe tomatoes & tomato paste', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'grated' },
        { id: 'bell-peppers', name: 'Green & red bell peppers (hooho)', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'garlic-ginger', name: 'Onion, garlic, ginger & turmeric', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'minced' }
      ],
      steps: [
        { text: 'Boil washed beef tripe with bruised ginger, garlic, and salt until tender (40 to 50 minutes in pot or 20 minutes pressure cooker), reserving 1 cup broth.', timerMin: 45 },
        { text: 'Saute onion, turmeric, tomato, and bell peppers in 1 teaspoon oil for 6 minutes; fold in tender tripe and broth and simmer 10 minutes until glossy.', timerMin: 10 }
      ],
      ugandaTip: 'Rinse tripe with lime juice or vinegar before boiling, then serve hot with steamed matooke, posho, or rice.'
    },
    {
      id: 'garlic-broccoli-greenbean-skillet',
      title: '15-Min Garlic Broccoli, French Beans & Bell Pepper Stir-Fry',
      subtitle: 'Bright crisp-tender green broccoli florets, French beans, and sweet orange peppers with garlic',
      cuisine: 'Mediterranean',
      category: 'quick',
      image: './images/garlic-broccoli-greenbean-skillet.jpg',
      prepMinutes: 6,
      cookMinutes: 7,
      totalMinutes: 13,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Flash-sauteing vibrant broccoli, green beans, and sweet bell peppers locks in vitamin C, fiber, and antioxidants.',
      nutrition: { kcal: 155, protein: '6g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'broccoli', name: 'Fresh broccoli florets', amount: 2, unit: 'cups', aisle: 'greens', estUgx: 3500, prep: 'trimmed bite-sized' },
        { id: 'green-beans', name: 'Fresh French green beans', amount: 150, unit: 'g', aisle: 'produce', estUgx: 2000, prep: 'topped & tailed' },
        { id: 'bell-peppers', name: 'Yellow & orange bell peppers & onion', amount: 1.5, unit: 'pcs', aisle: 'produce', estUgx: 1800, prep: 'sliced' },
        { id: 'garlic', name: 'Garlic cloves, olive oil & lemon', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 700, prep: 'minced' }
      ],
      steps: [
        { text: 'Heat 2 teaspoons olive oil in a wide skillet; toss sliced onion, green beans, and broccoli stems with 2 tablespoons water covered for 3 minutes.', timerMin: 3 },
        { text: 'Add sliced peppers and minced garlic; stir-fry over high heat 3 to 4 minutes until crisp-tender, finishing with lemon and black pepper.', timerMin: 4 }
      ],
      ugandaTip: 'Top with 2 poached eggs or pan-seared chicken strips for a quick, filling high-protein weeknight dinner.'
    },
    {
      id: 'honey-garlic-chicken-potatoes-carrots',
      title: 'Honey-Garlic Chicken Thighs, Roasted Potatoes & Carrots',
      subtitle: 'Caramelized golden skinless chicken thighs baked in one pan with baby Irish potatoes and carrots',
      cuisine: 'Mediterranean',
      category: 'slow',
      image: './images/honey-garlic-chicken-potatoes-carrots.jpg',
      prepMinutes: 10,
      cookMinutes: 35,
      totalMinutes: 45,
      servings: 3,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Using just 1 tablespoon natural Ugandan forest honey with garlic, soy, and thyme glazes lean chicken without sticky sugary sauces.',
      nutrition: { kcal: 420, protein: '32g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Skinless bone-in chicken thighs', amount: 500, unit: 'g', aisle: 'protein', estUgx: 11000, prep: 'patted dry' },
        { id: 'irish-potatoes', name: 'Baby Irish potatoes & carrots', amount: 450, unit: 'g', aisle: 'produce', estUgx: 3000, prep: 'halved & sliced' },
        { id: 'garlic', name: 'Fresh garlic cloves & thyme', amount: 4, unit: 'cloves', aisle: 'pantry', estUgx: 700, prep: 'crushed' },
        { id: 'honey-soy', name: 'Natural honey & light soy glaze', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 900, prep: 'whisked (1 tbsp each)' }
      ],
      steps: [
        { text: 'Season chicken thighs, potatoes, and carrots with garlic, thyme, salt, black pepper, and 1 tablespoon oil in a roasting dish.', timerMin: 5 },
        { text: 'Roast at 200C for 25 minutes, brush chicken with honey-soy glaze, and roast 10 minutes more until golden.', timerMin: 35 }
      ],
      ugandaTip: 'No oven? Sear thighs in a covered heavy sufuria first, then glaze and simmer gently beside steamed potatoes and carrots.'
    },
    {
      id: 'ugandan-beef-potato-carrot-pea-stew',
      title: 'Slow-Simmered Beef Chunks, Irish Potato & Carrot Stew',
      subtitle: 'Hearty comfort pot of tender braised lean beef cubes, Irish potatoes, sweet carrots, and peas',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/ugandan-beef-potato-carrot-pea-stew.jpg',
      prepMinutes: 12,
      cookMinutes: 50,
      totalMinutes: 62,
      servings: 4,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Trimmed lean beef simmered slowly with nutrient-rich potatoes, carrots, and peas creates rich comfort without heavy thickeners.',
      nutrition: { kcal: 390, protein: '31g', fiber: '5g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-steak', name: 'Lean boneless beef chunks', amount: 500, unit: 'g', aisle: 'protein', estUgx: 12500, prep: 'trimmed & cubed' },
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 4, unit: 'medium', aisle: 'produce', estUgx: 2500, prep: 'peeled & chunked' },
        { id: 'carrots', name: 'Carrots & green garden peas', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 1800, prep: 'sliced' },
        { id: 'tomatoes', name: 'Onion, garlic, tomato & rosemary', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1200, prep: 'chopped' }
      ],
      steps: [
        { text: 'Brown cubed beef cleanly in a hot dry pot for 5 minutes; saute onion, garlic, tomato, and rosemary, then add 2.5 cups water and simmer covered 30 minutes.', timerMin: 30 },
        { text: 'Add cubed Irish potatoes and sliced carrots; simmer 15 minutes until tender, folding in green peas for the final 4 minutes.', timerMin: 18 }
      ],
      ugandaTip: 'Crush 2 cooked potato cubes slightly against the pot wall to thicken the savory gravy naturally.'
    },
    {
      id: 'local-chicken-ntula-tomato-stew',
      title: 'Local Chicken, Tomato & Garden Egg (Ntula) Stew',
      subtitle: 'Rich Ugandan free-range chicken stew simmered with ripe tomatoes, red chili, and bitter garden eggs',
      cuisine: 'Ugandan',
      category: 'onepot',
      image: './images/local-chicken-ntula-tomato-stew.jpg',
      prepMinutes: 10,
      cookMinutes: 40,
      totalMinutes: 50,
      servings: 4,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Garden eggs (ntula) add soluble fiber and gentle blood-sugar-friendly bitterness to deeply flavorful local chicken broth.',
      nutrition: { kcal: 360, protein: '32g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-pieces', name: 'Free-range (kuroiler/local) chicken pieces', amount: 650, unit: 'g', aisle: 'protein', estUgx: 14000, prep: 'jointed' },
        { id: 'ntula', name: 'Green African garden eggs (ntula)', amount: 8, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'washed & whole/halved' },
        { id: 'tomatoes', name: 'Ripe tomatoes, red onion & green chili', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'blended or grated' },
        { id: 'ginger-garlic', name: 'Fresh ginger, garlic & thyme', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 800, prep: 'minced' }
      ],
      steps: [
        { text: 'Season local chicken with ginger, garlic, and salt; sear lightly in a hot pot for 5 minutes until golden, then add blended tomatoes and 2 cups water.', timerMin: 25 },
        { text: 'Drop whole washed garden eggs (ntula) into the simmering stew and cook covered for 15 minutes until tender and chicken falls off the bone.', timerMin: 15 }
      ],
      ugandaTip: 'Mash 2 softened ntula directly on your plate into steamed matooke or posho for authentic Ugandan flavor.'
    },
    {
      id: 'soy-glazed-beef-baked-chips-slaw',
      title: 'Soy-Glazed Beef Strips, Crispy Baked Chips & Coleslaw',
      subtitle: 'Tender peppered soy-glazed beef strips served beside golden oven fries and crunchy cabbage slaw',
      cuisine: 'Asian',
      category: 'slow',
      image: './images/soy-glazed-beef-baked-chips-slaw.jpg',
      prepMinutes: 12,
      cookMinutes: 25,
      totalMinutes: 37,
      servings: 2,
      tags: ['High-Protein', 'Low-Sugar'],
      healthNote: 'Oven-baked potato chips plus a generous raw cabbage-carrot slaw turn a takeout favorite into a balanced, lighter plate.',
      nutrition: { kcal: 470, protein: '30g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-steak', name: 'Lean beef sirloin strips', amount: 300, unit: 'g', aisle: 'protein', estUgx: 8500, prep: 'thinly sliced' },
        { id: 'irish-potatoes', name: 'Irish potatoes', amount: 2, unit: 'large', aisle: 'produce', estUgx: 1500, prep: 'cut into chips' },
        { id: 'cabbage', name: 'Shredded cabbage & grated carrots (coleslaw)', amount: 2, unit: 'cups', aisle: 'greens', estUgx: 1500, prep: 'dressed with yogurt & lime' },
        { id: 'soy-ginger', name: 'Light soy sauce, garlic, ginger & onion', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 900, prep: 'whisked' }
      ],
      steps: [
        { text: 'Toss Irish potato chips in 1 teaspoon oil and roast at 215C for 22 to 25 minutes until golden crisp.', timerMin: 25 },
        { text: 'Quickly sear beef strips, sliced onion, garlic, and ginger over high heat for 4 minutes; splash with soy sauce and lime juice and serve beside chips and lime-dressed slaw.', timerMin: 4 }
      ],
      ugandaTip: 'Skip heavy bottled mayonnaise in coleslaw — toss cabbage & carrots with 2 tablespoons plain yogurt, lime juice, and black pepper.'
    },
    {
      id: 'scrambled-eggs-avocado-seared-tomatoes',
      title: 'Creamy Scrambled Eggs, Avocado & Seared Cherry Tomatoes',
      subtitle: 'Soft pasture-egg scramble folded with chives alongside ripe avocado slices and blistered tomatoes',
      cuisine: 'Mediterranean',
      category: 'breakfast',
      image: './images/scrambled-eggs-avocado-seared-tomatoes.jpg',
      prepMinutes: 4,
      cookMinutes: 6,
      totalMinutes: 10,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Low-carb, high-satiety morning plate packed with choline, healthy monounsaturated fats, and lycopene.',
      nutrition: { kcal: 345, protein: '20g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'eggs', name: 'Fresh farm eggs', amount: 3, unit: 'pcs', aisle: 'protein', estUgx: 1800, prep: 'beaten gently' },
        { id: 'avocado', name: 'Ripe avocado', amount: 0.5, unit: 'large', aisle: 'produce', estUgx: 1000, prep: 'sliced' },
        { id: 'tomatoes', name: 'Cherry or firm small tomatoes', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 1000, prep: 'halved' },
        { id: 'herbs', name: 'Fresh parsley or spring onion chives', amount: 1, unit: 'tbsp', aisle: 'greens', estUgx: 300, prep: 'chopped' }
      ],
      steps: [
        { text: 'Sear halved cherry tomatoes cut-side down in a hot pan with 1/2 teaspoon olive oil for 2 minutes until caramelized; transfer to plate.', timerMin: 2 },
        { text: 'Cook beaten eggs over gentle low heat for 3 minutes, stirring softly into curds; top with herbs and plate beside sliced avocado.', timerMin: 3 }
      ],
      ugandaTip: 'A pinch of cracked black pepper and lime squeeze over sliced avocado keeps it bright and fresh.'
    },
    {
      id: 'soft-boiled-eggs-avocado-tomato-bowl',
      title: 'Soft-Boiled Eggs, Avocado & Herb Tomato Breakfast Plate',
      subtitle: 'Jammy 7-minute farm eggs plated with ripe avocado wedges and sesame-kissed fresh tomato salad',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/soft-boiled-eggs-avocado-tomato-bowl.jpg',
      prepMinutes: 4,
      cookMinutes: 8,
      totalMinutes: 12,
      servings: 1,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Zero added cooking oil and zero refined carbs — an effortless clean breakfast that keeps hunger away until lunch.',
      nutrition: { kcal: 330, protein: '18g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'eggs', name: 'Fresh farm eggs', amount: 2.5, unit: 'pcs', aisle: 'protein', estUgx: 1500, prep: 'soft-boiled 7 min' },
        { id: 'avocado', name: 'Ripe avocado', amount: 0.5, unit: 'large', aisle: 'produce', estUgx: 1000, prep: 'sliced' },
        { id: 'tomatoes', name: 'Firm ripe tomatoes', amount: 2, unit: 'medium', aisle: 'produce', estUgx: 1000, prep: 'wedges' },
        { id: 'simsim', name: 'Toasted simsim seeds & black pepper', amount: 1, unit: 'tsp', aisle: 'pantry', estUgx: 300, prep: 'garnish' }
      ],
      steps: [
        { text: 'Lower eggs gently into simmering water for 7 minutes for jammy yolks; plunge into cold water for 2 minutes and peel.', timerMin: 7 },
        { text: 'Plate halved eggs beside sliced avocado and fresh tomato wedges tossed with lime juice, black pepper, and toasted simsim seeds.' }
      ],
      ugandaTip: 'Boil 6 extra eggs on Sunday night so this nutritious 3-minute breakfast is ready anytime during the week.'
    },
    {
      id: 'yogurt-granola-banana-berry-bowl',
      title: 'Yogurt, Crunchy Granola, Banana & Berry Chia Bowl',
      subtitle: 'Thick plain unsweetened yogurt topped with toasted oat granola, sliced bogoya banana, berries, and chia',
      cuisine: 'Mediterranean',
      category: 'breakfast',
      image: './images/yogurt-granola-banana-berry-bowl.jpg',
      prepMinutes: 5,
      cookMinutes: 0,
      totalMinutes: 5,
      servings: 1,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Gut-friendly plain yogurt and chia seeds balance the natural fruit sweetness for sustained morning focus.',
      nutrition: { kcal: 325, protein: '13g', fiber: '7g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'yogurt', name: 'Thick plain unsweetened yogurt', amount: 1, unit: 'cup', aisle: 'protein', estUgx: 2500, prep: 'chilled' },
        { id: 'oats', name: 'Low-sugar toasted oat granola', amount: 0.25, unit: 'cup', aisle: 'grains', estUgx: 1500, prep: 'crunchy topping' },
        { id: 'banana', name: 'Ripe yellow banana & fresh berries (or mango)', amount: 1, unit: 'cup', aisle: 'produce', estUgx: 2000, prep: 'sliced' },
        { id: 'chia-seeds', name: 'Chia seeds', amount: 1, unit: 'tsp', aisle: 'pantry', estUgx: 500, prep: 'sprinkled' }
      ],
      steps: [
        { text: 'Spoon thick chilled plain yogurt into a wide breakfast bowl; arrange sliced banana, berries, toasted granola, and chia seeds neatly across the top.' }
      ],
      ugandaTip: 'In Kampala fruit season, diced sweet strawberries from Wakiso or ripe mango cubes & passion pulp work wonderfully with crunchy granola.'
    },
    {
      id: 'warm-banana-walnut-honey-oatmeal',
      title: 'Warm Rolled Oats, Banana, Walnuts & Honey Bowl',
      subtitle: 'Comforting warm oat bowl crowned with ripe sliced banana, crunchy walnuts/g-nuts, and a cinnamon-honey drizzle',
      cuisine: 'Mediterranean',
      category: 'breakfast',
      image: './images/warm-banana-walnut-honey-oatmeal.jpg',
      prepMinutes: 3,
      cookMinutes: 7,
      totalMinutes: 10,
      servings: 1,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Beta-glucan oat fiber paired with crunchy nuts slows glucose release and keeps cholesterol healthy.',
      nutrition: { kcal: 340, protein: '10g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'oats', name: 'Whole rolled oats', amount: 0.5, unit: 'cup', aisle: 'grains', estUgx: 1500, prep: 'dry' },
        { id: 'cow-milk', name: 'Cow milk or soya milk', amount: 1, unit: 'cup', aisle: 'protein', estUgx: 1500, prep: 'for cooking' },
        { id: 'banana', name: 'Ripe sweet banana', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 500, prep: 'sliced' },
        { id: 'nuts', name: 'Crushed walnuts or roasted g-nuts & honey', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 1500, prep: 'topping' }
      ],
      steps: [
        { text: 'Simmer rolled oats with milk (or 50/50 water and milk) and a pinch of cinnamon for 6 to 7 minutes, stirring until creamy.', timerMin: 7 },
        { text: 'Transfer to a bowl and top with sliced banana, chopped walnuts or g-nuts, and just 1 teaspoon raw honey.' }
      ],
      ugandaTip: 'Stirring 1 tablespoon plain yogurt into hot cooked oats makes the porridge extra velvety.'
    },
    {
      id: 'spinach-celery-apple-ginger-juice',
      title: 'Spinach, Celery, Green Apple & Ginger Magic Juice',
      subtitle: 'Crisp emerald morning tonic pressed from baby spinach, celery, cucumber, green apple, ginger, and chia',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/spinach-celery-apple-ginger-juice.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Alkalizing green spinach, crisp celery, and ginger wake up digestion and hydrate cleanly with minimal natural sugar.',
      nutrition: { kcal: 72, protein: '2g', fiber: '3g', sugar: 'Low' },
      ingredients: [
        { id: 'spinach', name: 'Fresh baby spinach leaves', amount: 2, unit: 'handfuls', aisle: 'greens', estUgx: 1000, prep: 'washed' },
        { id: 'celery', name: 'Celery stalks & cucumber', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'chopped' },
        { id: 'apple', name: 'Crisp green apple', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 1500, prep: 'cored' },
        { id: 'ginger-lemon', name: 'Fresh ginger, lemon & soaked chia seeds', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'peeled & juiced' }
      ],
      steps: [
        { text: 'Blend spinach, celery, cucumber, green apple, peeled ginger, lemon juice, and 1.25 cups chilled water until bright and smooth.' },
        { text: 'Strain lightly if desired, stir in 1 teaspoon chia seeds, and drink fresh.' }
      ],
      ugandaTip: 'Tender young dodo or kale works effortlessly whenever baby spinach is unavailable at the market.'
    },
    {
      id: 'apple-ginger-lemon-juice',
      title: 'Crisp Apple, Ginger & Lemon Morning Juice',
      subtitle: 'Bright zesty cold-pressed style blend of sweet-tart apples, fiery fresh ginger, and lemon juice',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/apple-ginger-lemon-juice.jpg',
      prepMinutes: 8,
      cookMinutes: 0,
      totalMinutes: 8,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Crisp apple pectin paired with warming ginger root and vitamin-C-rich lemon kickstarts digestion without added sugar.',
      nutrition: { kcal: 78, protein: '1g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'apple', name: 'Crisp green or red apples', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 3500, prep: 'cored & chopped' },
        { id: 'ginger', name: 'Fresh ginger root', amount: 1.5, unit: 'thumbs', aisle: 'produce', estUgx: 600, prep: 'peeled & sliced' },
        { id: 'lemon', name: 'Fresh lemons', amount: 1.5, unit: 'pcs', aisle: 'produce', estUgx: 800, prep: 'juiced' }
      ],
      steps: [
        { text: 'Blend chopped apples, sliced fresh ginger, and 1.25 cups chilled water until completely smooth.' },
        { text: 'Strain through a fine sieve or cheesecloth, stir in freshly squeezed lemon juice, and serve chilled over ice.' }
      ],
      ugandaTip: 'Leave the apple skins on before blending for extra polyphenols and a brighter golden hue.'
    },
    {
      id: 'pineapple-ginger-turmeric-carrot-juice',
      title: 'Pineapple, Ginger, Turmeric & Carrot Anti-Inflammatory Juice',
      subtitle: 'Vibrant golden-orange tonic blending sweet pineapple, beta-carotene carrots, turmeric, and ginger',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/pineapple-ginger-turmeric-carrot-juice.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Fresh pineapple bromelain, curcumin from turmeric, and carrot antioxidants make a soothing anti-inflammatory tonic.',
      nutrition: { kcal: 96, protein: '1g', fiber: '2g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'pineapple', name: 'Ripe sweet Ugandan pineapple', amount: 2, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'peeled & cubed' },
        { id: 'carrots', name: 'Fresh carrots', amount: 3, unit: 'medium', aisle: 'produce', estUgx: 1200, prep: 'scrubbed & chopped' },
        { id: 'turmeric-ginger', name: 'Fresh turmeric (or 1 tsp ground) & ginger root', amount: 1, unit: 'set', aisle: 'produce', estUgx: 800, prep: 'peeled' },
        { id: 'lemon', name: 'Lemon juice & tiny pinch black pepper', amount: 1, unit: 'pc', aisle: 'pantry', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Blend pineapple cubes, chopped carrots, turmeric, fresh ginger, and 1 cup cold water until completely smooth.' },
        { text: 'Strain through a fine mesh strainer, add fresh lemon juice plus a tiny pinch of black pepper (boosts turmeric absorption), and serve chilled.' }
      ],
      ugandaTip: 'Add a squeeze of fresh lime or passion fruit pulp at the end for an unmistakable Kampala market twist.'
    },
    {
      id: 'ugandan-tangawizi-masala-chai',
      title: 'Ugandan Ginger, Cardamom & Clove Spiced Chai',
      subtitle: 'Creamy comforting East African milk tea simmered with crushed tangawizi, green cardamom, and cinnamon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/spiced-milk-chai-tea.jpg',
      prepMinutes: 3,
      cookMinutes: 7,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Naturally sweet warm cow or soya milk plus crushed ginger and cardamom let you skip refined sugar altogether.',
      nutrition: { kcal: 95, protein: '5g', fiber: '0g', sugar: 'Low' },
      ingredients: [
        { id: 'cow-milk', name: 'Fresh cow milk or unsweetened soya milk', amount: 1.5, unit: 'cups', aisle: 'protein', estUgx: 2000, prep: 'chilled' },
        { id: 'ginger', name: 'Fresh ginger (tangawizi)', amount: 1, unit: 'thumb', aisle: 'produce', estUgx: 400, prep: 'crushed' },
        { id: 'chai-spices', name: 'Cardamom pods, cinnamon bark, cloves & black tea', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 600, prep: 'lightly bruised' }
      ],
      steps: [
        { text: 'Simmer 1 cup water with crushed ginger, bruised cardamom, cloves, cinnamon stick, and black tea leaves for 4 minutes until deeply fragrant.', timerMin: 4 },
        { text: 'Pour in fresh cow or soya milk, bring gently just to a frothy simmer for 3 minutes, strain into warm mugs, and serve hot.', timerMin: 3 }
      ],
      ugandaTip: 'Use soya milk with just a pinch of cinnamon for a super-light dairy-free evening cup.'
    },
    {
      id: 'fresh-kisubi-lemongrass-mint-tea',
      title: 'Hot Lemongrass (Kisubi), Fresh Mint & Ginger Tea',
      subtitle: 'Caffeine-free soothing Kampala garden infusion steeped with lemongrass stalks, mint, and lemon',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/kisubi-lemongrass-mint-tea.jpg',
      prepMinutes: 4,
      cookMinutes: 6,
      totalMinutes: 10,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Zero calories and caffeine-free — calms digestion after dinner while reducing evening cravings.',
      nutrition: { kcal: 8, protein: '0g', fiber: '0g', sugar: 'Zero' },
      ingredients: [
        { id: 'lemongrass', name: 'Fresh lemongrass (kisubi) stalks', amount: 2, unit: 'stalks', aisle: 'greens', estUgx: 500, prep: 'bruised & tied' },
        { id: 'mint', name: 'Fresh garden mint leaves', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 500, prep: 'rinsed' },
        { id: 'ginger-lemon', name: 'Sliced fresh ginger & lemon wedge', amount: 1, unit: 'set', aisle: 'produce', estUgx: 600, prep: 'sliced' }
      ],
      steps: [
        { text: 'Simmer bruised lemongrass stalks and sliced ginger in 2.5 cups water covered for 5 minutes.', timerMin: 5 },
        { text: 'Take off heat, drop in fresh mint leaves to steep 2 minutes, then strain into cups with a bright squeeze of lemon.' }
      ],
      ugandaTip: 'Grow a pot of kisubi and mint on your kitchen veranda — both thrive effortlessly year-round in Uganda.'
    },
    {
      id: 'iced-mint-green-tea-lime',
      title: 'Chilled Green Tea, Fresh Mint & Lime Hydration Cooler',
      subtitle: 'Crisp antioxidant green tea steeped warm, chilled over ice with crushed garden mint and lime',
      cuisine: 'Asian',
      category: 'juices',
      image: './images/iced-mint-green-tea-lime.jpg',
      prepMinutes: 6,
      cookMinutes: 3,
      totalMinutes: 9,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Green tea catechins paired with lime vitamin C hydrate cleanly and gently lift afternoon focus without jitters.',
      nutrition: { kcal: 10, protein: '0g', fiber: '0g', sugar: 'Zero' },
      ingredients: [
        { id: 'green-tea', name: 'Green tea bags or loose leaves', amount: 2, unit: 'bags', aisle: 'pantry', estUgx: 800, prep: 'steep 3 min only' },
        { id: 'mint', name: 'Fresh mint leaves & thin cucumber slices', amount: 1, unit: 'handful', aisle: 'greens', estUgx: 700, prep: 'lightly crushed' },
        { id: 'lime', name: 'Fresh lime', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 500, prep: 'juiced' }
      ],
      steps: [
        { text: 'Steep green tea in 2 cups hot (not boiling) water for 3 minutes only so it stays smooth and never bitter.', timerMin: 3 },
        { text: 'Remove tea bags, cool slightly, and pour over ice with crushed fresh mint, cucumber ribbons, and fresh lime juice.' }
      ],
      ugandaTip: 'Never boil green tea leaves directly — letting hot water cool 1 minute first keeps the flavor fresh and mellow.'
    },
    {
      id: 'cinnamon-clove-hibiscus-hot-tea',
      title: 'Warm Hibiscus, Clove, Ginger & Orange Peel Tea',
      subtitle: 'Deep ruby antioxidant herbal tea spiced gently with cloves, cinnamon bark, and citrus zest',
      cuisine: 'Ugandan',
      category: 'juices',
      image: './images/cinnamon-clove-hibiscus-tea.jpg',
      prepMinutes: 4,
      cookMinutes: 8,
      totalMinutes: 12,
      servings: 2,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Rich in anthocyanin antioxidants, tart hibiscus naturally helps support healthy blood pressure without caffeine.',
      nutrition: { kcal: 14, protein: '0g', fiber: '0g', sugar: 'Zero' },
      ingredients: [
        { id: 'hibiscus', name: 'Dried red hibiscus petals (karkadeh/sobolo)', amount: 3, unit: 'tbsp', aisle: 'pantry', estUgx: 1000, prep: 'rinsed briefly' },
        { id: 'cloves-cinnamon', name: 'Whole cloves, cinnamon stick & ginger slices', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 600, prep: 'whole spices' },
        { id: 'orange', name: 'Fresh orange peel strip & lime juice', amount: 1, unit: 'pc', aisle: 'produce', estUgx: 700, prep: 'washed peel' }
      ],
      steps: [
        { text: 'Simmer water with ginger slices, cloves, cinnamon stick, and a strip of orange peel for 5 minutes.', timerMin: 5 },
        { text: 'Stir in hibiscus petals off the heat, steep 4 minutes until deep ruby, then strain and enjoy hot or over ice.', timerMin: 4 }
      ],
      ugandaTip: 'If tartness feels sharp at first, drop in 2 slices of fresh sweet pineapple while steeping instead of adding sugar.'
    },
    {
      id: 'mince-cabbage-pasta-soup',
      title: 'One-Pot Beef Mince, Cabbage & Pasta Soup',
      subtitle: 'Cozy savory tomato-herb broth simmered with lean beef mince, sweet cabbage ribbons, carrots, and short pasta',
      cuisine: 'Ugandan',
      category: 'onepot',
      image: './images/mince-cabbage-pasta-soup.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 4,
      tags: ['High-Protein', 'Light & Lean', 'Low-Sugar'],
      healthNote: 'Cooking pasta directly in a lean beef mince and cabbage vegetable broth creates a deeply comforting, fiber-rich one-pot meal.',
      nutrition: { kcal: 365, protein: '26g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'beef-mince', name: 'Lean beef mince', amount: 350, unit: 'g', aisle: 'protein', estUgx: 8500, prep: 'fresh' },
        { id: 'cabbage', name: 'Fresh green cabbage', amount: 3, unit: 'cups', aisle: 'greens', estUgx: 1500, prep: 'coarsely shredded' },
        { id: 'pasta', name: 'Short macaroni, shells or broken spaghetti', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2000, prep: 'uncooked' },
        { id: 'tomatoes', name: 'Ripe tomatoes, carrots & onion', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2500, prep: 'diced & sliced' },
        { id: 'garlic-thyme', name: 'Garlic, ginger, thyme & fresh coriander', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 900, prep: 'minced' }
      ],
      steps: [
        { text: 'Brown lean beef mince in a dry heavy pot over medium-high heat for 5 minutes until crumbly, draining off any excess fat.', timerMin: 5 },
        { text: 'Stir in diced onion, minced garlic, ginger, thyme, paprika pinch, and tomatoes; cook 4 minutes until saucy.', timerMin: 4 },
        { text: 'Add sliced carrots, shredded green cabbage, salt, black pepper, and 4.5 cups water; cover and simmer gently for 10 minutes.', timerMin: 10 },
        { text: 'Stir in uncooked short pasta and simmer uncovered 8 to 10 minutes until pasta is tender and broth is rich; finish with fresh coriander.', timerMin: 9 }
      ],
      ugandaTip: 'If reheating leftovers the next day, add a splash of hot water since pasta continues absorbing the savory broth.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(BATCH3_RECIPES);
  }
})();
