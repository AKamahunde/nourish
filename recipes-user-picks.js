(() => {
  const USER_PICK_RECIPES = [
    {
      id: 'baked-crispy-chicken-spring-rolls',
      title: 'Crispy Oven-Baked Chicken & Veggie Spring Rolls',
      subtitle: 'Golden crunchy spring rolls filled with shredded chicken, cabbage, carrots, and ginger',
      cuisine: 'Asian',
      category: 'slow',
      image: './images/baked-crispy-chicken-spring-rolls.jpg',
      prepMinutes: 20,
      cookMinutes: 18,
      totalMinutes: 38,
      servings: 3,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Oven-baking brushed wrappers gives crisp crunch with a fraction of deep-frying oil.',
      nutrition: { kcal: 280, protein: '19g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'chicken-breast', name: 'Shredded cooked chicken breast', amount: 250, unit: 'g', aisle: 'protein', estUgx: 6500, prep: 'finely shredded' },
        { id: 'cabbage', name: 'Cabbage & grated carrots', amount: 2, unit: 'cups', aisle: 'greens', estUgx: 1500, prep: 'finely shredded' },
        { id: 'spring-roll-sheets', name: 'Spring roll wrapper sheets', amount: 10, unit: 'sheets', aisle: 'grains', estUgx: 5000, prep: 'thawed' },
        { id: 'ginger-garlic', name: 'Ginger, garlic & light soy sauce', amount: 1.5, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'seasoning' }
      ],
      steps: [
        { text: 'Preheat your oven to 200°C / 390°F (or air-fryer to 190°C / 375°F) and line a baking tray with parchment paper or a very light brush of oil. Keep thawed spring roll sheets covered with a damp cloth so edges do not dry out.' },
        { text: 'Heat a wide pan over medium-high heat with 1/2 teaspoon oil; saute 1 teaspoon grated ginger, 2 minced garlic cloves, shredded cabbage, and grated carrots for 3 minutes until softened and dry. Fold in shredded chicken, 1 tablespoon light soy sauce, and black pepper, then cool for 5 minutes so steam does not tear the wrappers.', timerMin: 3 },
        { text: 'Place 2 tablespoons of cooled filling near the bottom corner of each wrapper, fold the bottom corner over, tuck both sides in tightly, and roll forward cleanly. Dab the final tip with a little water-flour paste to seal.' },
        { text: 'Arrange rolls seam-side down on the tray, brush all over with 1 teaspoon oil, and bake for 16 to 18 minutes (flipping halfway at 9 minutes) until deep golden and crisp to the tap. Cool 2 minutes before serving.', timerMin: 18 }
      ],
      ugandaTip: 'Serve with lime-chili vinegar or tomato-garlic sauce instead of sugary bottled chili glaze.'
    },
    {
      id: 'baked-spiced-lentil-samosas',
      title: 'Baked Spiced Lentil & Coriander Samosas',
      subtitle: 'Light crunchy samosas stuffed with cumin-spiced brown lentils, peas, and fresh herbs',
      cuisine: 'Ugandan',
      category: 'slow',
      image: './images/baked-spiced-lentil-samosas.jpg',
      prepMinutes: 20,
      cookMinutes: 20,
      totalMinutes: 40,
      servings: 4,
      tags: ['Plant-Forward', 'High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Lentils and green peas pack clean plant protein inside oven-crisped pastry with zero deep-frying.',
      nutrition: { kcal: 245, protein: '11g', fiber: '7g', sugar: 'Low' },
      ingredients: [
        { id: 'lentils', name: 'Cooked brown/green lentils & peas', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 2500, prep: 'drained well' },
        { id: 'samosa-sheets', name: 'Samosa wrapper sheets', amount: 12, unit: 'sheets', aisle: 'grains', estUgx: 4500, prep: 'ready to fold' },
        { id: 'onion-garlic', name: 'Onion, garlic, cumin & coriander', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 1000, prep: 'chopped' }
      ],
      steps: [
        { text: 'Preheat oven to 200°C / 390°F (or air-fryer to 190°C / 375°F). Drain cooked lentils and green peas thoroughly in a sieve so the filling stays dry and pastry bakes crisp.' },
        { text: 'Heat 1 teaspoon oil in a skillet over medium heat; saute 1 finely diced onion and 2 minced garlic cloves for 4 minutes until translucent. Stir in 1 teaspoon ground cumin, 1/2 teaspoon turmeric, 1/2 teaspoon salt, and black pepper for 30 seconds until fragrant.', timerMin: 4 },
        { text: 'Add drained lentils and peas, cooking 2 minutes while mashing a few lightly with a spoon so the filling holds together; remove from heat, fold in chopped fresh coriander and a squeeze of lime, and let cool 5 minutes.' },
        { text: 'Fold wrappers into neat cones, fill with 1.5 tablespoons mixture, seal edges with water-flour paste, brush lightly with oil, and bake 18 minutes (turning halfway) until golden-brown and crunchy.', timerMin: 18 }
      ],
      ugandaTip: 'Pair with plain yogurt mixed with mint and lemon for a refreshing snack.'
    },
    {
      id: 'spiced-ugandan-egg-biryani',
      title: 'One-Pot Spiced Egg & Herb Biryani',
      subtitle: 'Fragrant spiced basmati rice layered with boiled farm eggs, caramelized onions, and coriander',
      cuisine: 'Asian',
      category: 'onepot',
      image: './images/spiced-ugandan-egg-biryani.jpg',
      prepMinutes: 10,
      cookMinutes: 25,
      totalMinutes: 35,
      servings: 3,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Eggs and aromatic spices deliver rich biryani satisfaction with minimal oil and no heavy cream.',
      nutrition: { kcal: 425, protein: '18g', fiber: '4g', sugar: 'Low' },
      ingredients: [
        { id: 'eggs', name: 'Hard-boiled farm eggs', amount: 6, unit: 'pcs', aisle: 'protein', estUgx: 3600, prep: 'peeled & halved' },
        { id: 'rice', name: 'Basmati rice', amount: 1.5, unit: 'cups', aisle: 'grains', estUgx: 3500, prep: 'rinsed' },
        { id: 'tomatoes', name: 'Ripe tomatoes & red onion', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'sliced' },
        { id: 'pilau-spices', name: 'Turmeric, cumin, cardamom & ginger', amount: 2, unit: 'tsp', aisle: 'pantry', estUgx: 700, prep: 'spice blend' },
        { id: 'coriander', name: 'Fresh coriander & mint', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' }
      ],
      steps: [
        { text: 'Rinse basmati rice 3 times in cold water until the water runs mostly clear, then soak for 10 minutes and drain. Peel hard-boiled eggs and prick them gently with a fork or halve them so they absorb the spice aroma.' },
        { text: 'Heat 1 tablespoon oil in a heavy pot over medium heat; saute thinly sliced red onion for 5 to 6 minutes until deep golden-brown at the edges. Add minced garlic, grated ginger, 1 teaspoon cumin, 1/2 teaspoon turmeric, and 3 crushed cardamom pods, stirring 30 seconds.', timerMin: 6 },
        { text: 'Add diced ripe tomatoes and 1 teaspoon salt; simmer uncovered for 4 minutes until tomatoes break down into a thick, glossy masala paste. Stir in half the chopped coriander and mint.' },
        { text: 'Fold in drained basmati rice and pour in 2.5 cups hot water; bring to a gentle boil, reduce heat to the lowest setting, cover tightly, and cook 14 minutes until water is absorbed. Nestle eggs on top, cover off-heat 5 minutes to steam, then fluff gently with remaining fresh herbs.', timerMin: 15 }
      ],
      ugandaTip: 'Serve alongside crisp tomato-cucumber kachumbari or a spoon of plain yogurt.'
    },
    {
      id: 'ugandan-beans-rice-kachumbari',
      title: 'Ugandan Nambale Beans, Rice & Kachumbari Plate',
      subtitle: 'Classic nourishing plate of spiced red kidney beans, fluffy rice, and crisp red-onion salad',
      cuisine: 'Ugandan',
      category: 'onepot',
      image: './images/ugandan-beans-rice-kachumbari.jpg',
      prepMinutes: 8,
      cookMinutes: 22,
      totalMinutes: 30,
      servings: 3,
      tags: ['Plant-Forward', 'High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Combining beans and rice forms a complete protein while fresh kachumbari adds vitamin C for iron absorption.',
      nutrition: { kcal: 430, protein: '16g', fiber: '11g', sugar: 'Low' },
      ingredients: [
        { id: 'cooked-beans', name: 'Pre-boiled Nambale red beans', amount: 2, unit: 'cups', aisle: 'grains', estUgx: 2500, prep: 'with broth' },
        { id: 'rice', name: 'Basmati or brown rice', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2500, prep: 'steamed' },
        { id: 'tomatoes', name: 'Tomatoes & red onion', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced & sliced' },
        { id: 'garlic-cumin', name: 'Garlic, ginger & cumin', amount: 1, unit: 'tbsp', aisle: 'pantry', estUgx: 600, prep: 'minced' }
      ],
      steps: [
        { text: 'Rinse 1 cup rice until water runs clear, place in a pot with 2 cups water and 1/2 teaspoon salt, bring to a boil, then cover on low heat for 15 minutes until fluffy. Let rest covered 5 minutes off-heat.', timerMin: 15 },
        { text: 'While rice steams, heat 1 teaspoon oil in a separate pot over medium heat; saute half the diced onion, 2 minced garlic cloves, 1 teaspoon grated ginger, and 1/2 teaspoon cumin for 3 minutes until sweet and fragrant.' },
        { text: 'Add 2 diced ripe tomatoes and cook 4 minutes until soft and saucy. Pour in pre-boiled Nambale beans with 1/2 cup of their broth, season with salt and black pepper, and simmer gently for 10 minutes (mash a spoonful of beans against the pot to thicken naturally).', timerMin: 10 },
        { text: 'Toss remaining sliced red onion (rinsed in cold salted water), remaining diced tomato, fresh coriander, and lime juice for kachumbari; plate beside fluffy rice and rich red bean stew.' }
      ],
      ugandaTip: 'Keep the bean portion generous and the rice portion to 1/2 cup for steady afternoon energy.'
    },
    {
      id: 'boiled-matooke-eggs-breakfast',
      title: 'Boiled Matooke Fingers with Egg & Tomato Scramble',
      subtitle: 'Simple, comforting Ugandan breakfast pairing tender green bananas with savory soft eggs',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/boiled-matooke-eggs-breakfast.jpg',
      prepMinutes: 8,
      cookMinutes: 15,
      totalMinutes: 23,
      servings: 2,
      tags: ['High-Protein', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Boiled green matooke gives clean potassium and resistant starch paired with protein-rich farm eggs.',
      nutrition: { kcal: 360, protein: '16g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'matooke', name: 'Green matooke', amount: 5, unit: 'fingers', aisle: 'produce', estUgx: 2500, prep: 'peeled' },
        { id: 'eggs', name: 'Farm eggs', amount: 4, unit: 'pcs', aisle: 'protein', estUgx: 2400, prep: 'beaten' },
        { id: 'tomatoes', name: 'Ripe tomatoes & onion', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 1000, prep: 'diced' }
      ],
      steps: [
        { text: 'Peel green matooke fingers cleanly into a bowl of cold water (prevents browning), then rinse and place in a saucepan with just enough water to cover plus 1/2 teaspoon salt.' },
        { text: 'Cover and boil over medium heat for 14 to 16 minutes until a knife slides easily into the center of a finger; drain completely and keep covered warm.', timerMin: 15 },
        { text: 'Meanwhile, whisk 4 farm eggs in a bowl with a pinch of salt, cracked black pepper, and 1 tablespoon water for fluffiness. Heat 1 teaspoon oil in a skillet over medium heat and saute diced onion and tomatoes for 3 minutes until soft and juicy.' },
        { text: 'Lower heat to medium-low, pour in beaten eggs, and fold gently with a spatula for 2 to 3 minutes until just set into soft glossy curds (remove slightly early so they stay tender). Plate beside warm matooke fingers.' }
      ],
      ugandaTip: 'Add sliced avocado on the side for extra healthy fats.'
    },
    {
      id: 'ugandan-mukene-tomato-rice',
      title: 'Crispy Tomato-Onion Silverfish (Mukene) & Rice',
      subtitle: 'Traditional high-calcium Lake Victoria mukene pan-toasted with tomatoes, onions, and rice',
      cuisine: 'Ugandan',
      category: 'quick',
      image: './images/ugandan-mukene-tomato-rice.jpg',
      prepMinutes: 5,
      cookMinutes: 12,
      totalMinutes: 17,
      servings: 2,
      tags: ['High-Protein', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Cleaned silverfish (mukene) is one of Uganda’s richest natural sources of protein, calcium, and omega-3s.',
      nutrition: { kcal: 395, protein: '28g', fiber: '3g', sugar: 'Low' },
      ingredients: [
        { id: 'mukene', name: 'Cleaned dried silverfish (mukene)', amount: 150, unit: 'g', aisle: 'protein', estUgx: 3500, prep: 'rinsed & drained' },
        { id: 'tomatoes', name: 'Ripe tomatoes & onion', amount: 3, unit: 'pcs', aisle: 'produce', estUgx: 1500, prep: 'diced' },
        { id: 'rice', name: 'Steamed rice', amount: 1, unit: 'cup', aisle: 'grains', estUgx: 2500, prep: 'cooked' },
        { id: 'garlic-ginger', name: 'Garlic, curry pinch & lime', amount: 1, unit: 'set', aisle: 'pantry', estUgx: 500, prep: 'minced' }
      ],
      steps: [
        { text: 'Sort cleaned mukene briefly, rinse in warm water twice (removes excess dust and softens saltiness), then drain very well in a sieve and pat dry.' },
        { text: 'Place drained mukene in a wide dry skillet over medium-high heat and dry-toast for 4 minutes, stirring often, until crisp, golden, and aromatic; push to one side of the pan.', timerMin: 4 },
        { text: 'Add 1 teaspoon oil to the clear side of the pan; saute diced onion, 2 minced garlic cloves, and 1/2 teaspoon curry powder for 2 minutes until fragrant, then stir in diced ripe tomatoes and 2 tablespoons water.' },
        { text: 'Simmer everything together over medium-low heat for 5 to 6 minutes until tomatoes melt into a thick savory coat around the mukene. Finish with fresh lime juice and serve hot beside steamed rice.', timerMin: 6 }
      ],
      ugandaTip: 'Buy pre-cleaned, sand-free mukene from trusted market stalls or supermarkets to save prep time.'
    },
    {
      id: 'classic-ugandan-kachumbari',
      title: 'Classic Ugandan Tomato, Onion & Coriander Kachumbari',
      subtitle: 'Crisp, refreshing raw market salad tossed with lime juice and fresh dhania',
      cuisine: 'Ugandan',
      category: 'salads',
      image: './images/classic-ugandan-kachumbari.jpg',
      prepMinutes: 10,
      cookMinutes: 0,
      totalMinutes: 10,
      servings: 3,
      tags: ['Light & Lean', 'Plant-Forward', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Ultra-light raw vitamin C booster that pairs with grilled meats, beans, eggs, or matooke.',
      nutrition: { kcal: 55, protein: '1g', fiber: '2g', sugar: 'Low' },
      ingredients: [
        { id: 'tomatoes', name: 'Firm ripe tomatoes', amount: 4, unit: 'pcs', aisle: 'produce', estUgx: 2000, prep: 'diced' },
        { id: 'red-onion', name: 'Red onion', amount: 1, unit: 'medium', aisle: 'produce', estUgx: 700, prep: 'thinly sliced & soaked' },
        { id: 'coriander', name: 'Fresh coriander (dhania)', amount: 0.5, unit: 'bunch', aisle: 'greens', estUgx: 500, prep: 'chopped' },
        { id: 'lime', name: 'Fresh lime', amount: 1.5, unit: 'pcs', aisle: 'produce', estUgx: 750, prep: 'juiced' }
      ],
      steps: [
        { text: 'Slice red onion paper-thin into half-rings and rub gently with 1/2 teaspoon salt in a bowl of cold water; soak for 10 minutes to remove sharp raw bite while keeping the crunch.', timerMin: 10 },
        { text: 'While onions soak, dice firm ripe tomatoes into neat bite-sized cubes (discard watery seeds if you want a crisper salad) and finely chop fresh coriander leaves and tender stems.' },
        { text: 'Drain the soaked onions thoroughly, rinse once in cold water, and squeeze dry in a clean cloth or sieve.' },
        { text: 'Combine drained onions, diced tomatoes, and chopped coriander in a serving bowl; dress with fresh lime juice, a pinch of sea salt, and optional minced chili right before serving so it stays bright and crisp.' }
      ],
      ugandaTip: 'Add 1 finely chopped bird-eye chili if you want classic Ugandan heat.'
    },
    {
      id: 'pan-roasted-gonja-slices',
      title: 'Lightly Pan-Roasted Sweet Plantain (Gonja)',
      subtitle: 'Caramelized golden ripe plantain slices brushed with a hint of oil and cinnamon',
      cuisine: 'Ugandan',
      category: 'breakfast',
      image: './images/roasted-gonja-sweet-plantain.jpg',
      prepMinutes: 4,
      cookMinutes: 8,
      totalMinutes: 12,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Dry-roasting or lightly brushing ripe gonja gives sweet comfort without deep-frying.',
      nutrition: { kcal: 215, protein: '2g', fiber: '3g', sugar: 'Natural fruit only' },
      ingredients: [
        { id: 'gonja', name: 'Ripe sweet plantains (gonja)', amount: 2, unit: 'pcs', aisle: 'produce', estUgx: 2500, prep: 'sliced diagonally' },
        { id: 'oil', name: 'Olive or sunflower oil', amount: 1, unit: 'tsp', aisle: 'pantry', estUgx: 300, prep: 'light brush' },
        { id: 'cinnamon', name: 'Cinnamon & sea salt pinch', amount: 0.25, unit: 'tsp', aisle: 'pantry', estUgx: 100, prep: 'dusting' }
      ],
      steps: [
        { text: 'Trim ends of ripe yellow-spotted gonja, score lengthwise through the peel, remove skin, and slice diagonally into even 1.5 cm ovals so every piece cooks at the same pace.' },
        { text: 'Toss or brush slices lightly with 1 teaspoon oil, 1/4 teaspoon ground cinnamon, and a tiny pinch of sea salt (salt intensifies natural plantain sweetness).' },
        { text: 'Place in a single layer on a hot nonstick skillet over medium heat (or bake at 200°C / 390°F on a lined oven tray) for 4 minutes without moving until deep golden caramelized underneath.', timerMin: 4 },
        { text: 'Flip each slice and cook 4 more minutes until tender when pierced with a fork and crisp-edged; serve warm beside boiled eggs, plain yogurt, or spicy beans.', timerMin: 4 }
      ],
      ugandaTip: 'Choose yellow gonja with a few black spots — they caramelize naturally without adding sugar.'
    },
    {
      id: 'asian-veggie-soy-noodles',
      title: '15-Min Asian Veggie & Soy Noodle Stir-Fry',
      subtitle: 'Quick wok-tossed noodles with crisp cabbage, carrots, peppers, garlic, and ginger',
      cuisine: 'Asian',
      category: 'quick',
      image: './images/asian-veggie-soy-noodles.jpg',
      prepMinutes: 6,
      cookMinutes: 8,
      totalMinutes: 14,
      servings: 2,
      tags: ['Plant-Forward', 'Light & Lean', 'No Red Meat', 'Low-Sugar'],
      healthNote: 'Loading up twice as many crunchy vegetables as noodles keeps this 15-minute bowl light and colorful.',
      nutrition: { kcal: 360, protein: '10g', fiber: '6g', sugar: 'Low' },
      ingredients: [
        { id: 'noodles', name: 'Whole-wheat or rice noodles', amount: 150, unit: 'g', aisle: 'grains', estUgx: 3500, prep: 'boiled & drained' },
        { id: 'cabbage', name: 'Shredded cabbage, carrots & bell pepper', amount: 2.5, unit: 'cups', aisle: 'produce', estUgx: 2000, prep: 'thinly sliced' },
        { id: 'ginger-garlic', name: 'Fresh ginger, garlic & spring onion', amount: 2, unit: 'tbsp', aisle: 'produce', estUgx: 800, prep: 'minced' },
        { id: 'soy-sauce', name: 'Light soy sauce & lime juice', amount: 2, unit: 'tbsp', aisle: 'pantry', estUgx: 800, prep: 'whisked' }
      ],
      steps: [
        { text: 'Prep all vegetables first (thin matchstick carrots, shredded cabbage, sliced bell pepper, minced ginger & garlic) and whisk 1.5 tablespoons light soy sauce, juice of 1/2 lime, and 1 tablespoon water in a small cup — stir-frying moves fast.' },
        { text: 'Boil noodles in salted water for 4 to 5 minutes until just tender (al dente), drain immediately, and rinse briefly in cool water so they do not clump.', timerMin: 5 },
        { text: 'Heat 1 teaspoon oil in a wide skillet or wok over high heat until shimmering; toss ginger, garlic, carrots, bell pepper, and cabbage for 3 minutes until crisp-tender and bright.', timerMin: 3 },
        { text: 'Add drained noodles and pour in the soy-lime sauce; toss vigorously for 1 to 2 minutes until evenly glossy and heated through, finishing with chopped spring onions.' }
      ],
      ugandaTip: 'Drop in 2 scrambled eggs or leftover chicken strips for an extra protein boost.'
    }
  ];

  if (window.NourishData) {
    window.NourishData.RECIPES = window.NourishData.RECIPES.concat(USER_PICK_RECIPES);
  }
})();
