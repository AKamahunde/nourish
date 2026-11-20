(() => {
  window.NourishData = {
  "CATEGORIES": [
    {
      "id": "all",
      "label": "All Recipes"
    },
    {
      "id": "breakfast",
      "label": "Breakfast"
    },
    {
      "id": "salads",
      "label": "Salads"
    },
    {
      "id": "quick",
      "label": "15-Min"
    },
    {
      "id": "onepot",
      "label": "One-Pot"
    },
    {
      "id": "slow",
      "label": "Worth the Time"
    },
    {
      "id": "juices",
      "label": "Juices & Tonics"
    }
  ],
  "CUISINES": [
    "All",
    "Ugandan",
    "Mediterranean",
    "Italian",
    "Asian"
  ],
  "HEALTH_GOALS": [
    "High-Protein",
    "Light & Lean",
    "Plant-Forward",
    "No Red Meat",
    "Low-Sugar"
  ],
  "AISLE_META": {
    "produce": {
      "label": "Fresh Market Produce",
      "order": 1
    },
    "greens": {
      "label": "Greens & Fresh Herbs",
      "order": 2
    },
    "protein": {
      "label": "Fish, Poultry & Meat",
      "order": 3
    },
    "grains": {
      "label": "Beans, Grains & G-Nuts",
      "order": 4
    },
    "pantry": {
      "label": "Spices, Oils & Pantry",
      "order": 5
    }
  },
  "HERB_SPICE_PAIRINGS": [
    {
      "ingredient": "Tilapia & Fish",
      "pairings": "Lemon or lime + Garlic + Fresh ginger + Turmeric + Coriander or Parsley",
      "why": "Citrus cuts fishiness while turmeric and ginger brighten lake fish with zero heavy frying."
    },
    {
      "ingredient": "Chicken (Breast / Kuroiler)",
      "pairings": "Garlic + Ginger + Rosemary or Thyme + Paprika + Cumin (or Plain Yogurt + Turmeric)",
      "why": "Yogurt + warm spices tenderizes lean chicken; rosemary + garlic shines on roasted trays."
    },
    {
      "ingredient": "Black Beans & Red Beans",
      "pairings": "Cumin + Garlic + Onion + Paprika + Thyme/Bay + Fresh Lime & Coriander at the end",
      "why": "Earthy cumin makes black beans taste rich and savory without needing fatty meats."
    },
    {
      "ingredient": "Matooke, Sweet Potato & Cassava",
      "pairings": "Ginger + Garlic + Turmeric + Curry Powder + Cardamom & Cinnamon (for pilau-style)",
      "why": "Warm spices bring natural sweetness out of root starches and green bananas."
    },
    {
      "ingredient": "Dodo, Nakati & Sukuma Wiki",
      "pairings": "Onion + Garlic + Tomato + Black Pepper or Bird-Eye Chili + a squeeze of Lemon",
      "why": "Simple aromatics let the bright green taste shine; vitamin C in lemon boosts iron absorption."
    },
    {
      "ingredient": "Plain Yogurt & Chia Seeds",
      "pairings": "Sweet: Cinnamon + Cardamom + Mango/Pawpaw/Passion · Savory: Garlic + Mint + Cucumber + Lemon",
      "why": "Plain yogurt switches effortlessly between sweet breakfast bowls and cooling sauces for grilled meats."
    },
    {
      "ingredient": "Fresh Juices & Tonics",
      "pairings": "Fresh Ginger + Mint + Lime/Lemon + Cinnamon/Cloves (Sobolo) + Turmeric & Black Pepper pinch",
      "why": "Herbs and spices turn plain fruit blends into refreshing, low-sugar wellness tonics."
    }
  ],
  "UGANDA_HEALTH_GUIDE": [
    {
      "title": "The Healthy Ugandan Plate",
      "points": [
        "Fill half your plate with colorful greens (dodo, nakati, sukuma wiki, cabbage) or fresh kachumbari.",
        "Keep a quarter of the plate for slow-energy starches: steamed matooke, sweet potato, pumpkin, or brown millet.",
        "Use the final quarter for lean protein: Lake Victoria tilapia, skinless chicken, boiled eggs, or well-cooked beans."
      ]
    },
    {
      "title": "Smart Cooking Oil & Salt Rules",
      "points": [
        "Measure oil with a spoon (1 tablespoon per pot) instead of pouring straight from the bottle.",
        "When making groundnut (ebinyebwa) or simsim stew, skip added cooking oil completely — the nuts release healthy natural oils as they simmer.",
        "Build bold flavor with fresh ginger, garlic, turmeric, lime juice, coriander, and bird-eye chili so you need far less salt."
      ]
    },
    {
      "title": "Fresh Juice & Sugar Habits",
      "points": [
        "Let ripe Ugandan pineapples, mangoes, and pawpaws sweeten your juices naturally — zero refined white sugar needed.",
        "Include fiber-rich pairings (cucumber, carrot, beetroot, or dodo leaves) and enjoy fresh juices alongside breakfast or after exercise.",
        "Soak and strain dried hibiscus (sobolo) with boiled pineapple peels and ginger for a zero-sugar antioxidant drink."
      ]
    },
    {
      "title": "15-Minute Kitchen Prep Shortcuts",
      "points": [
        "Boil a big batch of Nambale or kidney beans on Sunday and freeze in 1-cup portions for instant weekday katogo or salads.",
        "Dice sweet potatoes into small cubes so they cook tender in 8 minutes inside one-pot curries and hashes.",
        "Soak sliced red onions in salted cold water for 10 minutes before salads to remove sharpness while keeping crunch."
      ]
    }
  ],
  "RECIPES": [
    {
      "id": "egg-sukuma-scramble",
      "title": "10-Min Egg, Sukuma & Avocado Plate",
      "subtitle": "Nutrient-dense morning scramble with bright greens and ripe avocado",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "mealSlots": [
        "breakfast",
        "lunch"
      ],
      "image": "./images/egg-sukuma-scramble.jpg",
      "prepMinutes": 4,
      "cookMinutes": 6,
      "totalMinutes": 10,
      "servings": 1,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Starting the day with protein and healthy fats prevents mid-morning energy crashes.",
      "nutrition": {
        "kcal": 395,
        "protein": "21g",
        "fiber": "7g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "eggs",
          "name": "Fresh farm eggs",
          "amount": 3,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 1800,
          "prep": "whisked with pinch salt"
        },
        {
          "id": "sukuma",
          "name": "Sukuma wiki or dodo",
          "amount": 1,
          "unit": "handful",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "finely ribboned"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomato",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "diced"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 0.25,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "chopped"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 800,
          "prep": "sliced"
        }
      ],
      "steps": [
        {
          "text": "Saute chopped onion and tomato in 1/2 teaspoon oil for 2 minutes until soft."
        },
        {
          "text": "Toss in ribboned sukuma wiki and stir 1 minute until bright green."
        },
        {
          "text": "Pour in whisked eggs over low heat, folding gently for 2 to 3 minutes until soft-set. Plate with sliced avocado."
        }
      ],
      "ugandaTip": "Yellow-yolk local market eggs make this scramble naturally rich with zero butter."
    },
    {
      "id": "savory-oat-simsim-bowl",
      "title": "Warm Oat, Fruit & Toasted Simsim Bowl",
      "subtitle": "Zero-sugar comforting porridge topped with fresh tropical fruit and crunch",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "mealSlots": [
        "breakfast"
      ],
      "image": "./images/savory-oat-simsim-bowl.jpg",
      "prepMinutes": 3,
      "cookMinutes": 6,
      "totalMinutes": 9,
      "servings": 1,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Soluble oat fiber supports heart and gut health, naturally sweetened with ripe fruit only.",
      "nutrition": {
        "kcal": 330,
        "protein": "10g",
        "fiber": "8g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "rolled-oats",
          "name": "Rolled oats",
          "amount": 0.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1000,
          "prep": "measured"
        },
        {
          "id": "pawpaw",
          "name": "Ripe pawpaw or mango",
          "amount": 1,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "cubed"
        },
        {
          "id": "banana",
          "name": "Sweet yellow banana (bogoya)",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "sliced"
        },
        {
          "id": "simsim",
          "name": "Toasted simsim & crushed g-nuts",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 700,
          "prep": "toasted"
        },
        {
          "id": "cinnamon",
          "name": "Cinnamon pinch",
          "amount": 0.25,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 200,
          "prep": "to taste"
        }
      ],
      "steps": [
        {
          "text": "Simmer rolled oats in 1 cup water (or half water, half milk) with cinnamon for 5 minutes until creamy.",
          "timerMin": 5
        },
        {
          "text": "Pour into a bowl and top with sliced bogoya banana, fresh pawpaw or mango cubes, and toasted simsim or groundnuts."
        }
      ],
      "ugandaTip": "Swap oats for roasted millet flour (obushera style) when you want a traditional gluten-free porridge."
    },
    {
      "id": "veggie-herb-omelette",
      "title": "Fluffy Veggie & Herb Farm Egg Omelette",
      "subtitle": "Light 3-egg omelette folded with tomatoes, onions, bell pepper, and fresh coriander",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "mealSlots": [
        "breakfast",
        "lunch"
      ],
      "image": "./images/veggie-herb-omelette.jpg",
      "prepMinutes": 4,
      "cookMinutes": 5,
      "totalMinutes": 9,
      "servings": 1,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "High-protein, low-carb morning meal cooked with just 1 teaspoon of oil so you stay sharp and full.",
      "nutrition": {
        "kcal": 310,
        "protein": "20g",
        "fiber": "3g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "eggs",
          "name": "Fresh farm eggs",
          "amount": 3,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 1800,
          "prep": "beaten with pinch salt & pepper"
        },
        {
          "id": "tomatoes",
          "name": "Ripe firm tomato",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "seeded & diced"
        },
        {
          "id": "onion",
          "name": "Red onion",
          "amount": 0.25,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "finely diced"
        },
        {
          "id": "bell-pepper",
          "name": "Green or red bell pepper",
          "amount": 0.25,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "finely chopped"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander (dhania)",
          "amount": 2,
          "unit": "tbsp",
          "aisle": "greens",
          "estUgx": 300,
          "prep": "chopped"
        }
      ],
      "steps": [
        {
          "text": "Saute diced onion and bell pepper in 1 teaspoon oil over medium heat for 2 minutes until fragrant."
        },
        {
          "text": "Pour in beaten eggs mixed with diced tomato and coriander; swirl gently so eggs spread evenly."
        },
        {
          "text": "Cook covered on low heat for 2 to 3 minutes until set, fold in half, and serve hot with avocado slices or fresh fruit."
        }
      ],
      "ugandaTip": "Seeding the tomato before dicing keeps your omelette fluffy instead of watery."
    },
    {
      "id": "bread-and-eggs-plate",
      "title": "Whole-Wheat Toast, Eggs & Fresh Kachumbari",
      "subtitle": "Everyday Ugandan bread and eggs balanced with whole grain, soft eggs, and crisp tomatoes",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "mealSlots": [
        "breakfast"
      ],
      "image": "./images/bread-and-eggs-plate.jpg",
      "prepMinutes": 4,
      "cookMinutes": 6,
      "totalMinutes": 10,
      "servings": 1,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Choosing brown whole-wheat bread over white bread doubles the fiber and pairs cleanly with 2 eggs.",
      "nutrition": {
        "kcal": 365,
        "protein": "18g",
        "fiber": "6g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "whole-bread",
          "name": "Whole-wheat (brown) bread",
          "amount": 2,
          "unit": "slices",
          "aisle": "grains",
          "estUgx": 1500,
          "prep": "lightly toasted"
        },
        {
          "id": "eggs",
          "name": "Fresh farm eggs",
          "amount": 2,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 1200,
          "prep": "soft-boiled or pan-cooked"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomato & red onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "diced with lime pinch"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado",
          "amount": 0.25,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "sliced on the side"
        }
      ],
      "steps": [
        {
          "text": "Boil eggs for 7 minutes for jammy yolks (or pan-cook lightly in 1/2 teaspoon oil) while toasting whole-wheat bread.",
          "timerMin": 7
        },
        {
          "text": "Serve warm toast and eggs alongside quick diced tomato-onion kachumbari and sliced avocado."
        }
      ],
      "ugandaTip": "Skip margarine and spread ripe avocado on the warm toast instead for clean heart-healthy fat."
    },
    {
      "id": "bread-peanut-butter-banana",
      "title": "Whole-Grain Toast, Peanut Butter, Banana & Chia",
      "subtitle": "Natural unsweetened peanut butter on toasted brown bread with bogoya banana and chia seeds",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "mealSlots": [
        "breakfast"
      ],
      "image": "./images/bread-peanut-butter-banana.jpg",
      "prepMinutes": 4,
      "cookMinutes": 2,
      "totalMinutes": 6,
      "servings": 1,
      "tags": [
        "Plant-Forward",
        "High-Protein",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Natural groundnut butter, chia omega-3s, and banana potassium make a fast, sustained-energy breakfast.",
      "nutrition": {
        "kcal": 380,
        "protein": "13g",
        "fiber": "9g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "whole-bread",
          "name": "Whole-wheat (brown) bread",
          "amount": 2,
          "unit": "slices",
          "aisle": "grains",
          "estUgx": 1500,
          "prep": "toasted crisp"
        },
        {
          "id": "peanut-butter",
          "name": "Natural unsweetened peanut butter",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 1000,
          "prep": "100% roasted g-nuts"
        },
        {
          "id": "banana",
          "name": "Sweet yellow banana (bogoya)",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "thinly sliced"
        },
        {
          "id": "chia-seeds",
          "name": "Chia seeds & cinnamon pinch",
          "amount": 1,
          "unit": "tsp",
          "aisle": "grains",
          "estUgx": 400,
          "prep": "sprinkled on top"
        }
      ],
      "steps": [
        {
          "text": "Toast whole-wheat bread slices until golden and crisp."
        },
        {
          "text": "Spread natural peanut butter evenly, layer sliced bogoya banana on top, and finish with chia seeds and a light dusting of cinnamon."
        }
      ],
      "ugandaTip": "Check the label or buy freshly ground roasted g-nut butter from the market so there is no added sugar or palm oil."
    },
    {
      "id": "banana-oat-blender-pancakes",
      "title": "Flourless Banana, Oat & Egg Pancakes",
      "subtitle": "Naturally sweet bogoya banana and rolled oat pancakes with plain yogurt & mango",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "mealSlots": [
        "breakfast"
      ],
      "image": "./images/banana-oat-blender-pancakes.jpg",
      "prepMinutes": 5,
      "cookMinutes": 8,
      "totalMinutes": 13,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Blending whole rolled oats and ripe banana replaces refined white flour and sugar completely.",
      "nutrition": {
        "kcal": 340,
        "protein": "14g",
        "fiber": "6g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "rolled-oats",
          "name": "Rolled oats",
          "amount": 1,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1800,
          "prep": "blended smooth"
        },
        {
          "id": "banana",
          "name": "Ripe sweet banana (bogoya)",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "peeled"
        },
        {
          "id": "eggs",
          "name": "Farm eggs",
          "amount": 2,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 1200,
          "prep": "whole"
        },
        {
          "id": "milk",
          "name": "Cow or soya milk",
          "amount": 0.25,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 500,
          "prep": "for batter"
        },
        {
          "id": "yogurt",
          "name": "Plain yogurt & cinnamon",
          "amount": 0.25,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 800,
          "prep": "topping"
        }
      ],
      "steps": [
        {
          "text": "Blend rolled oats, ripe banana, eggs, milk, and cinnamon for 30 seconds until smooth; let batter rest 2 minutes."
        },
        {
          "text": "Spoon small pancakes onto a lightly brushed non-stick pan over medium-low heat for 2 minutes per side (4 minutes total) until golden. Top with plain yogurt and fruit.",
          "timerMin": 4
        }
      ],
      "ugandaTip": "Riper spotty bogoya bananas make the pancakes naturally sweeter without honey or syrup."
    },
    {
      "id": "boiled-sweet-potato-eggs-avocado",
      "title": "Steamed Sweet Potato, Boiled Eggs & Avocado",
      "subtitle": "Wholesome Ugandan morning plate with slow-energy sweet potato and fresh kachumbari",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "mealSlots": [
        "breakfast",
        "lunch"
      ],
      "image": "./images/boiled-sweet-potato-eggs-avocado.jpg",
      "prepMinutes": 5,
      "cookMinutes": 15,
      "totalMinutes": 20,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Traditional steamed sweet potatoes paired with boiled eggs and avocado give clean morning fuel with zero fried oil.",
      "nutrition": {
        "kcal": 390,
        "protein": "16g",
        "fiber": "8g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "sweet-potato",
          "name": "Sweet potatoes (yellow or orange)",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "peeled & halved"
        },
        {
          "id": "eggs",
          "name": "Farm eggs",
          "amount": 4,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 2400,
          "prep": "soft or hard boiled"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "sliced"
        },
        {
          "id": "tomatoes",
          "name": "Tomatoes, red onion & lime",
          "amount": 1,
          "unit": "set",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced kachumbari"
        }
      ],
      "steps": [
        {
          "text": "Steam or boil sweet potato halves for 15 minutes until fork-tender, boiling the eggs alongside for 8 minutes.",
          "timerMin": 15
        },
        {
          "text": "Plate warm sweet potatoes with halved eggs, sliced avocado, and fresh tomato-lime kachumbari."
        }
      ],
      "ugandaTip": "Steam extra sweet potatoes the night before — they are great lightly warmed or even at room temperature."
    },
    {
      "id": "turkish-garlic-yogurt-poached-eggs",
      "title": "Mediterranean Garlic Yogurt & Poached Eggs",
      "subtitle": "Creamy herbed plain yogurt topped with soft eggs and warm paprika-olive oil",
      "cuisine": "Mediterranean",
      "category": "breakfast",
      "mealSlots": [
        "breakfast"
      ],
      "image": "./images/turkish-garlic-yogurt-poached-eggs.jpg",
      "prepMinutes": 5,
      "cookMinutes": 6,
      "totalMinutes": 11,
      "servings": 1,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "High-protein eggs over probiotic garlic-mint yogurt keep carbs ultra-low and energy sharp.",
      "nutrition": {
        "kcal": 320,
        "protein": "20g",
        "fiber": "2g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "yogurt",
          "name": "Plain unsweetened yogurt",
          "amount": 0.75,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 2000,
          "prep": "room-temp with grated garlic"
        },
        {
          "id": "eggs",
          "name": "Fresh farm eggs",
          "amount": 2,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 1200,
          "prep": "poached or soft-boiled"
        },
        {
          "id": "paprika-olive",
          "name": "Olive oil, paprika & fresh mint/coriander",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 700,
          "prep": "warmed gently"
        }
      ],
      "steps": [
        {
          "text": "Whisk plain yogurt with a tiny pinch of grated garlic, lemon, and salt; spread onto a shallow plate."
        },
        {
          "text": "Poach or soft-boil eggs for 5 minutes and nestle onto the yogurt, finishing with 1 teaspoon warm paprika-infused olive oil and fresh herbs.",
          "timerMin": 5
        }
      ],
      "ugandaTip": "Serve with a slice of toasted whole-grain bread or warm steamed matooke to scoop up the yogurt sauce."
    },
    {
      "id": "avocado-mango-kachumbari",
      "title": "Avocado & Mango Kachumbari",
      "subtitle": "Crisp Ugandan tomato salad lifted with sweet mango and creamy avocado",
      "category": "salads",
      "image": "./images/avocado-mango-kachumbari.jpg",
      "prepMinutes": 12,
      "cookMinutes": 0,
      "totalMinutes": 12,
      "servings": 2,
      "tags": [
        "Light & Lean",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Monounsaturated avocado fats boost absorption of lycopene and vitamin A from tomatoes and mango.",
      "nutrition": {
        "kcal": 245,
        "protein": "4g",
        "fiber": "7g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "tomatoes",
          "name": "Ripe firm tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "finely diced"
        },
        {
          "id": "red-onion",
          "name": "Red onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 700,
          "prep": "thinly sliced & soaked"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "cubed"
        },
        {
          "id": "mango",
          "name": "Firm ripe mango",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "diced"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander (dhania)",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "chopped"
        },
        {
          "id": "lime",
          "name": "Fresh lime",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "juiced"
        },
        {
          "id": "olive-oil",
          "name": "Cold-pressed oil",
          "amount": 0.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 400,
          "prep": "optional drizzle"
        }
      ],
      "steps": [
        {
          "text": "Place sliced red onion in a bowl with cold water and a pinch of salt for 10 minutes, then drain well so the bite stays mild.",
          "timerMin": 10
        },
        {
          "text": "Combine diced tomatoes, drained onions, chopped coriander, and fresh lime juice in a wide mixing bowl."
        },
        {
          "text": "Gently fold in diced mango and avocado cubes last so they hold their shape. Finish with black pepper, an optional drizzle of cold-pressed oil, and serve fresh."
        }
      ],
      "ugandaTip": "Pair this beside grilled tilapia or roasted sweet potato instead of heavy fried sides.",
      "cuisine": "Ugandan"
    },
    {
      "id": "tilapia-avocado-salad",
      "title": "Grilled Tilapia & Avocado Herb Salad",
      "subtitle": "Flaked spiced tilapia over crisp greens, cucumber, and lime dressing",
      "category": "salads",
      "image": "./images/tilapia-avocado-salad.jpg",
      "prepMinutes": 10,
      "cookMinutes": 10,
      "totalMinutes": 20,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Lean Lake Victoria fish delivers clean protein and omega-3s with zero heavy dressing.",
      "nutrition": {
        "kcal": 360,
        "protein": "32g",
        "fiber": "6g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "tilapia-fillet",
          "name": "Fresh tilapia fillets",
          "amount": 350,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 9500,
          "prep": "patted dry"
        },
        {
          "id": "lettuce-cabbage",
          "name": "Crisp lettuce or tender cabbage",
          "amount": 200,
          "unit": "g",
          "aisle": "greens",
          "estUgx": 1500,
          "prep": "finely shredded"
        },
        {
          "id": "cucumber",
          "name": "Cucumber",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 800,
          "prep": "sliced"
        },
        {
          "id": "tomatoes",
          "name": "Cherry or firm tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "halved"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "sliced"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        },
        {
          "id": "lime",
          "name": "Fresh lime",
          "amount": 1.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 750,
          "prep": "juiced"
        }
      ],
      "steps": [
        {
          "text": "Rub tilapia fillets with half the lime juice, minced garlic, ginger, salt, and black pepper."
        },
        {
          "text": "Pan-sear or grill on a lightly oiled hot pan for 4 to 5 minutes per side until flaky and golden.",
          "timerMin": 5
        },
        {
          "text": "Toss shredded greens, cucumber, and tomatoes with the remaining lime juice. Top with sliced avocado and warm flaked tilapia."
        }
      ],
      "ugandaTip": "Ask your fishmonger to fillet fresh tilapia or use leftover grilled whole tilapia from dinner.",
      "cuisine": "Ugandan"
    },
    {
      "id": "nambale-bean-salad",
      "title": "Warm Nambale Bean & Pepper Salad",
      "subtitle": "Filling Ugandan kidney bean salad with crisp cucumber, tomato, and lime",
      "category": "salads",
      "image": "./images/nambale-bean-salad.jpg",
      "prepMinutes": 10,
      "cookMinutes": 5,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "High soluble fiber and plant protein stabilize blood sugar and keep hunger steady for hours.",
      "nutrition": {
        "kcal": 340,
        "protein": "16g",
        "fiber": "12g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "red-beans",
          "name": "Pre-cooked Nambale or red beans",
          "amount": 2,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "rinsed & warm"
        },
        {
          "id": "cucumber",
          "name": "Cucumber",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 800,
          "prep": "diced"
        },
        {
          "id": "bell-pepper",
          "name": "Red or green bell pepper",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "red-onion",
          "name": "Red onion",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "finely diced"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "chopped"
        },
        {
          "id": "lime",
          "name": "Lime & 1 tsp oil",
          "amount": 1,
          "unit": "pcs",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "whisked with pinch chili"
        }
      ],
      "steps": [
        {
          "text": "Warm pre-cooked beans gently in a dry pan for 3 minutes if using chilled beans, then transfer to a bowl."
        },
        {
          "text": "Add diced bell pepper, cucumber, tomatoes, soaked red onion, and coriander."
        },
        {
          "text": "Whisk lime juice, 1 teaspoon oil, cumin pinch, and salt; toss well so beans soak up the bright dressing."
        }
      ],
      "ugandaTip": "Works brilliantly as a packed office lunch — stays crisp for hours without wilting.",
      "cuisine": "Ugandan"
    },
    {
      "id": "chicken-sweet-potato-curry",
      "title": "15-Min Chicken & Sweet Potato Coconut Curry",
      "subtitle": "Quick one-pot turmeric coconut stew with tender sweet potato and sukuma",
      "category": "quick",
      "image": "./images/chicken-sweet-potato-curry.jpg",
      "prepMinutes": 5,
      "cookMinutes": 10,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "High-Protein",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Turmeric, garlic, and lean chicken create an anti-inflammatory weeknight dinner in 15 minutes.",
      "nutrition": {
        "kcal": 440,
        "protein": "33g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-breast",
          "name": "Chicken breast",
          "amount": 300,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 7500,
          "prep": "bite-sized cubes"
        },
        {
          "id": "sweet-potato",
          "name": "Sweet potato",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "micro-diced 1cm"
        },
        {
          "id": "coconut-milk",
          "name": "Light coconut milk",
          "amount": 0.5,
          "unit": "cups",
          "aisle": "pantry",
          "estUgx": 2500,
          "prep": "mixed with 1/2 cup water"
        },
        {
          "id": "sukuma",
          "name": "Sukuma wiki (collard greens)",
          "amount": 1,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 800,
          "prep": "finely shredded"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "curry-turmeric",
          "name": "Curry powder & turmeric",
          "amount": 1.5,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 500,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Saute chicken cubes and chopped onion in 1 teaspoon oil for 3 minutes over medium-high heat.",
          "timerMin": 3
        },
        {
          "text": "Stir in garlic, curry powder, and turmeric for 30 seconds until fragrant."
        },
        {
          "text": "Add tiny sweet potato cubes, coconut milk, and water. Cover and simmer 8 minutes until potatoes are fork-tender.",
          "timerMin": 8
        },
        {
          "text": "Fold in shredded sukuma wiki for the last 60 seconds so it stays vibrant green."
        }
      ],
      "ugandaTip": "Cutting sweet potato into 1cm dice is the secret to getting it tender inside 8 minutes.",
      "cuisine": "Ugandan"
    },
    {
      "id": "swahili-tilapia-beans",
      "title": "Swahili Garlic-Lime Tilapia & Beans",
      "subtitle": "Tender fish chunks poached in tomato, cumin, and bean broth",
      "category": "quick",
      "image": "./images/swahili-tilapia-beans.jpg",
      "prepMinutes": 5,
      "cookMinutes": 10,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Dual protein from fresh lake fish and beans keeps fat minimal while delivering rich flavor.",
      "nutrition": {
        "kcal": 380,
        "protein": "36g",
        "fiber": "8g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "tilapia-fillet",
          "name": "Tilapia fillet",
          "amount": 320,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 9000,
          "prep": "large chunks"
        },
        {
          "id": "red-beans",
          "name": "Pre-cooked red beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1500,
          "prep": "rinsed"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "grated or blended"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "cumin",
          "name": "Ground cumin",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 300,
          "prep": "measured"
        },
        {
          "id": "lime",
          "name": "Fresh lime",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "juiced"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "chopped"
        }
      ],
      "steps": [
        {
          "text": "Simmer grated tomatoes, garlic, cumin, beans, and 1/2 cup water in a wide skillet for 4 minutes.",
          "timerMin": 4
        },
        {
          "text": "Nestle tilapia chunks into the bubbling tomato-bean sauce, cover, and poach gently for 5 minutes until opaque.",
          "timerMin": 5
        },
        {
          "text": "Finish off heat with fresh lime juice and chopped coriander."
        }
      ],
      "ugandaTip": "Grating tomatoes on a box grater gives an instant thick sauce with zero blender cleanup.",
      "cuisine": "Ugandan"
    },
    {
      "id": "matooke-beans-katogo",
      "title": "Healthy Matooke & Beans Katogo",
      "subtitle": "Classic one-pot Ugandan comfort with katunkuma and minimal oil",
      "category": "onepot",
      "image": "./images/matooke-beans-katogo.jpg",
      "prepMinutes": 12,
      "cookMinutes": 25,
      "totalMinutes": 37,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Green bananas offer resistant starch for gut health, balanced with iron-rich beans and medicinal katunkuma.",
      "nutrition": {
        "kcal": 410,
        "protein": "14g",
        "fiber": "11g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "matooke",
          "name": "Green cooking matooke",
          "amount": 7,
          "unit": "fingers",
          "aisle": "produce",
          "estUgx": 3500,
          "prep": "peeled & kept in water"
        },
        {
          "id": "red-beans",
          "name": "Pre-boiled red beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "with a splash of bean broth"
        },
        {
          "id": "katunkuma",
          "name": "Katunkuma (bitter berries)",
          "amount": 6,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "washed, stems removed"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "diced"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "olive-oil",
          "name": "Vegetable oil",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 500,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Saute onion, garlic, and ginger in 1 measured tablespoon oil for 3 minutes, then add tomatoes and cook down 2 more minutes (5 minutes total) into a thick paste.",
          "timerMin": 5
        },
        {
          "text": "Stir in pre-boiled beans and katunkuma berries with a pinch of salt and turmeric."
        },
        {
          "text": "Lay peeled matooke fingers over the beans, add water just up to the top of the bananas, cover tightly, and simmer on medium-low for 20 to 25 minutes until fork-tender.",
          "timerMin": 22
        }
      ],
      "ugandaTip": "Avoid stirring while the matooke cooks so the fingers stay intact and soak up the bean sauce.",
      "cuisine": "Ugandan"
    },
    {
      "id": "chicken-greenbeans-nakati",
      "title": "Lean Chicken, Green Beans & Nakati One-Pot",
      "subtitle": "Light tomato-garlic chicken simmered with crisp French beans and local greens",
      "category": "onepot",
      "image": "./images/chicken-greenbeans-nakati.jpg",
      "prepMinutes": 10,
      "cookMinutes": 25,
      "totalMinutes": 35,
      "servings": 3,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Crisp French green beans add fiber and crunch while nakati greens bring natural calcium and plant micronutrients.",
      "nutrition": {
        "kcal": 365,
        "protein": "34g",
        "fiber": "6g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-pieces",
          "name": "Skinless chicken thighs or breast",
          "amount": 450,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 11000,
          "prep": "cut in medium pieces"
        },
        {
          "id": "green-beans",
          "name": "Fresh French green beans",
          "amount": 150,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "trimmed & halved"
        },
        {
          "id": "nakati",
          "name": "Fresh nakati greens",
          "amount": 1,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "washed, tough stems removed"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "diced"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        }
      ],
      "steps": [
        {
          "text": "Brown chicken pieces in a dry or 1-teaspoon oiled pot for 5 minutes with salt and black pepper.",
          "timerMin": 5
        },
        {
          "text": "Add onions, garlic, ginger, and tomatoes; cover and simmer 15 minutes until chicken is tender and saucy.",
          "timerMin": 15
        },
        {
          "text": "Stir in French green beans and chopped nakati; simmer uncovered for 5 minutes until greens wilt and beans stay crisp-tender.",
          "timerMin": 5
        }
      ],
      "ugandaTip": "Adding nakati right at the end keeps its clean bright flavor without turning bitter.",
      "cuisine": "Ugandan"
    },
    {
      "id": "gnut-mushroom-stew",
      "title": "Creamy Groundnut & Mushroom Stew",
      "subtitle": "Oil-free Ugandan ebinyebwa simmered with mushrooms and bright dodo greens",
      "category": "onepot",
      "image": "./images/gnut-mushroom-stew.jpg",
      "prepMinutes": 10,
      "cookMinutes": 25,
      "totalMinutes": 35,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Groundnuts bring natural healthy fats, magnesium, and protein with zero added cooking oil.",
      "nutrition": {
        "kcal": 390,
        "protein": "15g",
        "fiber": "7g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "gnut-paste",
          "name": "Raw groundnut (ebinyebwa) paste",
          "amount": 1,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 3500,
          "prep": "whisked smooth in warm water"
        },
        {
          "id": "mushrooms",
          "name": "Fresh oyster or button mushrooms",
          "amount": 200,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 3500,
          "prep": "sliced"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "finely diced"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 700,
          "prep": "chopped"
        },
        {
          "id": "dodo",
          "name": "Fresh dodo (amaranth) leaves",
          "amount": 1,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "washed & chopped"
        }
      ],
      "steps": [
        {
          "text": "Simmer chopped onion, tomatoes, and mushrooms in 1/3 cup water (no oil needed) for 6 minutes until tomatoes soften.",
          "timerMin": 6
        },
        {
          "text": "Whisk groundnut paste with 1.5 cups warm water until completely smooth, then pour slowly into the pot while stirring."
        },
        {
          "text": "Simmer gently uncovered on low heat for 18 minutes, stirring occasionally so the bottom stays smooth. Serve with steamed dodo greens.",
          "timerMin": 18
        }
      ],
      "ugandaTip": "Always use low heat after adding g-nut paste so it thickens evenly without sticking.",
      "cuisine": "Ugandan"
    },
    {
      "id": "whole-grilled-tilapia",
      "title": "Herb-Marinated Whole Grilled Tilapia",
      "subtitle": "Charred lake tilapia with garlic, ginger, lime, sukuma wiki, and sweet potato",
      "category": "slow",
      "image": "./images/whole-grilled-tilapia.jpg",
      "prepMinutes": 20,
      "cookMinutes": 25,
      "totalMinutes": 45,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Whole-food meal pairing lean grilled fish with potassium-rich sweet potato and sautéed collard greens.",
      "nutrition": {
        "kcal": 460,
        "protein": "42g",
        "fiber": "7g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "whole-tilapia",
          "name": "Whole fresh tilapia (cleaned)",
          "amount": 1,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 20000,
          "prep": "scored on both sides"
        },
        {
          "id": "sweet-potato",
          "name": "Sweet potatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "steamed rounds"
        },
        {
          "id": "sukuma",
          "name": "Sukuma wiki greens",
          "amount": 1,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "shredded"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        },
        {
          "id": "lemon",
          "name": "Fresh lemon or lime",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "halved & juiced"
        }
      ],
      "steps": [
        {
          "text": "Rub fish inside and out with lemon juice, crushed garlic, ginger, turmeric, salt, and 1 teaspoon oil. Marinate 20 minutes.",
          "timerMin": 20
        },
        {
          "text": "Grill or bake at 200C for 22 to 25 minutes until skin blisters and flesh flakes cleanly from the bone.",
          "timerMin": 24
        },
        {
          "text": "Steam sweet potato rounds alongside and flash-saute sukuma wiki for 3 minutes with onion and tomato."
        }
      ],
      "ugandaTip": "Stuff the fish cavity with sliced onion and lemon slices to keep it juicy on charcoal or oven heat.",
      "cuisine": "Ugandan"
    },
    {
      "id": "steamed-matooke-dodo",
      "title": "Steamed Matooke with Light G-Nut & Dodo",
      "subtitle": "Traditional Ugandan banana-leaf steamed matooke with clean vegetable sides",
      "category": "slow",
      "image": "./images/steamed-matooke-dodo.jpg",
      "prepMinutes": 20,
      "cookMinutes": 55,
      "totalMinutes": 75,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Steaming locks in natural potassium and B6 without heavy frying, paired with iron-rich leafy dodo.",
      "nutrition": {
        "kcal": 420,
        "protein": "12g",
        "fiber": "9g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "matooke",
          "name": "Green matooke",
          "amount": 8,
          "unit": "fingers",
          "aisle": "produce",
          "estUgx": 4000,
          "prep": "peeled & wrapped in banana leaf"
        },
        {
          "id": "gnut-paste",
          "name": "Natural groundnut paste",
          "amount": 0.75,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2800,
          "prep": "whisked with warm water"
        },
        {
          "id": "dodo",
          "name": "Fresh dodo leaves",
          "amount": 2,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 2000,
          "prep": "washed & chopped"
        },
        {
          "id": "tomatoes",
          "name": "Tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "diced"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 700,
          "prep": "sliced"
        }
      ],
      "steps": [
        {
          "text": "Line a pot with clean banana leaf ribs and 2 cups water. Wrap peeled matooke tightly in banana leaves (or foil) and steam gently for 50 minutes.",
          "timerMin": 50
        },
        {
          "text": "Simmer half the tomatoes and onion with diluted g-nut paste on low heat for 20 minutes into a silky sauce.",
          "timerMin": 20
        },
        {
          "text": "Lightly mash the steamed matooke while wrapped, then serve warm with g-nut sauce and 4-minute sautéed dodo greens."
        }
      ],
      "ugandaTip": "Make extra steamed matooke and portion into containers — it reheats wonderfully for lunch.",
      "cuisine": "Ugandan"
    },
    {
      "id": "beef-pumpkin-stew",
      "title": "Slow-Braised Lean Beef & Pumpkin Pot",
      "subtitle": "Herb-simmered lean beef cubes with sweet orange ensujju pumpkin and carrots",
      "category": "slow",
      "image": "./images/beef-pumpkin-stew.jpg",
      "prepMinutes": 15,
      "cookMinutes": 65,
      "totalMinutes": 80,
      "servings": 4,
      "tags": [
        "High-Protein",
        "Low-Sugar"
      ],
      "healthNote": "Trimming visible fat from lean beef yields high iron and zinc alongside antioxidant-rich pumpkin.",
      "nutrition": {
        "kcal": 410,
        "protein": "36g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "beef-meat",
          "name": "Lean beef steak (fat trimmed)",
          "amount": 500,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 11500,
          "prep": "cut into cubes"
        },
        {
          "id": "pumpkin",
          "name": "Orange pumpkin (ensujju)",
          "amount": 350,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "peeled & chunked"
        },
        {
          "id": "carrots",
          "name": "Carrots",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "thick rounds"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        }
      ],
      "steps": [
        {
          "text": "Brown trimmed beef cubes in a dry heavy pot for 6 minutes with salt, garlic, and ginger.",
          "timerMin": 6
        },
        {
          "text": "Add onions, tomatoes, rosemary, and 2 cups water; cover and simmer gently for 45 minutes until tender.",
          "timerMin": 45
        },
        {
          "text": "Add pumpkin chunks and carrots; simmer 15 more minutes so the vegetables thicken the rich broth naturally.",
          "timerMin": 15
        }
      ],
      "ugandaTip": "Ask your butcher for lean topside or steak without visible fat so the stew stays light and clean.",
      "cuisine": "Ugandan"
    },
    {
      "id": "hibiscus-sobolo",
      "title": "Zero-Sugar Hibiscus Sobolo & Ginger",
      "subtitle": "Ruby hibiscus tea infused with pineapple peels, fresh ginger, and cloves",
      "category": "juices",
      "image": "./images/hibiscus-sobolo.jpg",
      "prepMinutes": 10,
      "cookMinutes": 25,
      "totalMinutes": 35,
      "servings": 6,
      "tags": [
        "Light & Lean",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Hibiscus anthocyanins support healthy blood pressure while fresh pineapple gives natural sweetness.",
      "nutrition": {
        "kcal": 48,
        "protein": "0g",
        "fiber": "1g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "hibiscus",
          "name": "Dried hibiscus flowers (sobolo)",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "pantry",
          "estUgx": 3000,
          "prep": "rinsed quickly in cold water"
        },
        {
          "id": "pineapple",
          "name": "Whole sweet pineapple",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 4000,
          "prep": "washed, peels kept & flesh chopped"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger root",
          "amount": 2,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 800,
          "prep": "sliced or crushed"
        },
        {
          "id": "cloves-cinnamon",
          "name": "Whole cloves & cinnamon stick",
          "amount": 1,
          "unit": "set",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "optional warm spice"
        },
        {
          "id": "mint",
          "name": "Fresh mint sprigs",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "for serving"
        }
      ],
      "steps": [
        {
          "text": "Boil washed pineapple peels, rinsed hibiscus flowers, crushed ginger, and spices in 2.5 liters of water for 20 minutes.",
          "timerMin": 20
        },
        {
          "text": "Blend the fresh pineapple flesh with 1 cup water until smooth, then strain through a fine sieve."
        },
        {
          "text": "Strain the cooled hibiscus infusion into a jug, stir in the fresh pineapple juice, chill, and serve over ice with mint."
        }
      ],
      "ugandaTip": "Store chilled in glass bottles for up to 4 days — zero sugar needed when your pineapple is sweet.",
      "cuisine": "Ugandan"
    },
    {
      "id": "beet-carrot-passion",
      "title": "Beetroot, Carrot, Pineapple & Passion Juice",
      "subtitle": "Vibrant natural energy tonic packed with vitamin C, folate, and ginger",
      "category": "juices",
      "image": "./images/beet-carrot-passion.jpg",
      "prepMinutes": 15,
      "cookMinutes": 0,
      "totalMinutes": 15,
      "servings": 4,
      "tags": [
        "Light & Lean",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Natural beetroot nitrates boost stamina and circulation alongside beta-carotene from carrots.",
      "nutrition": {
        "kcal": 92,
        "protein": "1g",
        "fiber": "2g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "beetroot",
          "name": "Fresh red beetroot",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "peeled & chopped"
        },
        {
          "id": "carrots",
          "name": "Sweet carrots",
          "amount": 4,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "washed & chopped"
        },
        {
          "id": "pineapple",
          "name": "Ripe pineapple flesh",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "cubed"
        },
        {
          "id": "passion-fruit",
          "name": "Fresh passion fruits",
          "amount": 5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "pulp scooped"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "peeled"
        }
      ],
      "steps": [
        {
          "text": "Blend beetroot, carrots, pineapple cubes, ginger, and 2 cups cold water until completely smooth."
        },
        {
          "text": "Press through a fine sieve or clean juice cloth into a pitcher to extract every drop."
        },
        {
          "text": "Stir in strained passion fruit pulp and 1 more cup chilled water to balance richness. Serve cold."
        }
      ],
      "ugandaTip": "Rinse your blender immediately after beetroot so the jug stays stain-free.",
      "cuisine": "Ugandan"
    },
    {
      "id": "green-dodo-detox",
      "title": "Green Market Dodo, Cucumber & Lime Tonic",
      "subtitle": "Crisp emerald hydration drink blending tender greens with pineapple and lime",
      "category": "juices",
      "image": "./images/green-dodo-detox.jpg",
      "prepMinutes": 10,
      "cookMinutes": 0,
      "totalMinutes": 10,
      "servings": 2,
      "tags": [
        "Light & Lean",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Low-calorie hydration rich in chlorophyll, potassium, and vitamin C without fruit-juice sugar spikes.",
      "nutrition": {
        "kcal": 68,
        "protein": "2g",
        "fiber": "2g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "dodo",
          "name": "Young tender dodo or spinach",
          "amount": 1,
          "unit": "handful",
          "aisle": "greens",
          "estUgx": 700,
          "prep": "thoroughly washed"
        },
        {
          "id": "cucumber",
          "name": "Fresh cucumber",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "sliced"
        },
        {
          "id": "pineapple",
          "name": "Sweet pineapple",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "cubed"
        },
        {
          "id": "lime",
          "name": "Fresh lime",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "juiced"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 0.5,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "peeled"
        }
      ],
      "steps": [
        {
          "text": "Blend washed tender dodo leaves, cucumber, pineapple, ginger, and 1 cup cold water on high until silky."
        },
        {
          "text": "Pour straight for high fiber or strain lightly through a sieve, then stir in fresh lime juice and serve over ice."
        }
      ],
      "ugandaTip": "Use only young tender dodo leaves (or baby spinach) so the juice tastes fresh and bright.",
      "cuisine": "Ugandan"
    },
    {
      "id": "mediterranean-chickpea-salad",
      "title": "Mediterranean Cucumber, Tomato & Black Bean Salad",
      "subtitle": "Crisp Greek-style chopped salad with black or white beans, herbs, lemon, and olive oil",
      "cuisine": "Mediterranean",
      "category": "salads",
      "image": "./images/mediterranean-chickpea-salad.jpg",
      "prepMinutes": 12,
      "cookMinutes": 0,
      "totalMinutes": 12,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Black or white beans and extra-virgin olive oil offer steady plant protein, fiber, and heart-protective fats.",
      "nutrition": {
        "kcal": 330,
        "protein": "13g",
        "fiber": "9g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "black-beans",
          "name": "Pre-boiled black or white beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "rinsed & drained"
        },
        {
          "id": "cucumber",
          "name": "Fresh cucumber",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "chunked"
        },
        {
          "id": "tomatoes",
          "name": "Ripe firm tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "cut in wedges"
        },
        {
          "id": "red-onion",
          "name": "Red onion",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "thin rings"
        },
        {
          "id": "feta-or-avocado",
          "name": "Feta cheese (or cubed avocado)",
          "amount": 80,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 3500,
          "prep": "crumbled"
        },
        {
          "id": "olive-oil",
          "name": "Olive oil & lemon juice",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 1000,
          "prep": "with dried oregano"
        }
      ],
      "steps": [
        {
          "text": "Combine cucumber chunks, tomato wedges, thin red onion rings, and rinsed black or white beans in a shallow salad bowl."
        },
        {
          "text": "Whisk olive oil, fresh lemon juice, dried oregano, salt, and black pepper; pour over the vegetables and toss gently."
        },
        {
          "text": "Scatter crumbled feta (or diced ripe avocado if skipping dairy) over the top and serve chilled."
        }
      ],
      "ugandaTip": "Use your pre-boiled black beans or Nambale beans — no hard-to-find chickpeas needed."
    },
    {
      "id": "mediterranean-herb-chicken",
      "title": "Mediterranean Lemon-Herb Roasted Chicken & Veg",
      "subtitle": "One-pan roast chicken with sweet peppers, zucchini, onions, and rosemary",
      "cuisine": "Mediterranean",
      "category": "slow",
      "image": "./images/mediterranean-herb-chicken.jpg",
      "prepMinutes": 12,
      "cookMinutes": 35,
      "totalMinutes": 47,
      "servings": 3,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Oven-roasting on one tray locks in juiciness with minimal oil while caramelizing fiber-rich vegetables.",
      "nutrition": {
        "kcal": 405,
        "protein": "36g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-pieces",
          "name": "Skinless chicken thighs or drumsticks",
          "amount": 550,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 12000,
          "prep": "trimmed"
        },
        {
          "id": "courgette",
          "name": "Courgettes (zucchini)",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "thick slices"
        },
        {
          "id": "bell-pepper",
          "name": "Red & yellow bell peppers",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "chunked"
        },
        {
          "id": "red-onion",
          "name": "Red onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 700,
          "prep": "wedges"
        },
        {
          "id": "lemon",
          "name": "Lemon, garlic & rosemary",
          "amount": 1,
          "unit": "set",
          "aisle": "pantry",
          "estUgx": 1000,
          "prep": "juiced & minced"
        },
        {
          "id": "olive-oil",
          "name": "Olive or sunflower oil",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "for tossing"
        }
      ],
      "steps": [
        {
          "text": "Toss chicken and chopped vegetables on a baking tray with 1 tablespoon oil, minced garlic, lemon juice, rosemary, salt, and pepper."
        },
        {
          "text": "Roast at 200C for 35 minutes, turning vegetables halfway, until chicken is golden and cooked through.",
          "timerMin": 35
        }
      ],
      "ugandaTip": "No oven? Brown the chicken first in a covered heavy pot, then add the vegetables for the last 12 minutes."
    },
    {
      "id": "italian-tomato-basil-pasta",
      "title": "15-Min Italian Garlic, Tomato & Basil Pasta",
      "subtitle": "Light whole-wheat spaghetti tossed in fresh market tomato sauce and herbs",
      "cuisine": "Italian",
      "category": "quick",
      "image": "./images/italian-tomato-basil-pasta.jpg",
      "prepMinutes": 5,
      "cookMinutes": 10,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Cooking fresh market tomatoes briefly with garlic and olive oil creates a clean sauce with zero jar sugar.",
      "nutrition": {
        "kcal": 380,
        "protein": "12g",
        "fiber": "7g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "spaghetti",
          "name": "Whole-wheat (or durum) spaghetti",
          "amount": 180,
          "unit": "g",
          "aisle": "grains",
          "estUgx": 3500,
          "prep": "dry"
        },
        {
          "id": "tomatoes",
          "name": "Ripe sweet tomatoes",
          "amount": 5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "finely chopped"
        },
        {
          "id": "garlic",
          "name": "Fresh garlic cloves",
          "amount": 4,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "thinly sliced"
        },
        {
          "id": "basil",
          "name": "Fresh basil (or parsley/coriander)",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "torn leaves"
        },
        {
          "id": "olive-oil",
          "name": "Extra-virgin olive oil",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 800,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Boil spaghetti in salted water for 9 minutes until al dente, saving 1/3 cup starchy pasta water before draining.",
          "timerMin": 9
        },
        {
          "text": "Meanwhile gently warm sliced garlic in 1 tablespoon olive oil for 1 minute, add chopped tomatoes and pinch of salt, and simmer 6 minutes.",
          "timerMin": 6
        },
        {
          "text": "Toss drained pasta into the tomato sauce with a splash of pasta water and fresh torn basil."
        }
      ],
      "ugandaTip": "Pair with grilled chicken breast strips or a handful of white beans to turn this into a high-protein dinner."
    },
    {
      "id": "italian-tuscan-bean-soup",
      "title": "Tuscan White Bean, Carrot & Sukuma Minestrone",
      "subtitle": "Hearty Italian one-pot vegetable and bean soup adapted with local greens",
      "cuisine": "Italian",
      "category": "onepot",
      "image": "./images/italian-tuscan-bean-soup.jpg",
      "prepMinutes": 10,
      "cookMinutes": 20,
      "totalMinutes": 30,
      "servings": 3,
      "tags": [
        "High-Protein",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Warm broth, beans, carrots, and leafy greens satisfy big appetites for very few calories.",
      "nutrition": {
        "kcal": 310,
        "protein": "15g",
        "fiber": "11g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "white-beans",
          "name": "Pre-boiled white or kidney beans",
          "amount": 2,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "rinsed"
        },
        {
          "id": "carrots",
          "name": "Carrots",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "diced"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "sukuma",
          "name": "Sukuma wiki or spinach",
          "amount": 1,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "shredded"
        },
        {
          "id": "herbs",
          "name": "Dried thyme or oregano",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 400,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Saute onion, carrots, and garlic in 1 teaspoon olive oil for 4 minutes until fragrant.",
          "timerMin": 4
        },
        {
          "text": "Add diced tomatoes, thyme, beans, and 3.5 cups water; simmer covered for 15 minutes until carrots are tender.",
          "timerMin": 15
        },
        {
          "text": "Stir in shredded sukuma wiki for 2 minutes until bright green. Season with salt, pepper, and a squeeze of lemon."
        }
      ],
      "ugandaTip": "Mash 1/3 cup of the beans against the pot side so the soup turns creamy without cream."
    },
    {
      "id": "asian-ginger-chicken-stirfry",
      "title": "15-Min Asian Ginger-Garlic Chicken Stir-Fry",
      "subtitle": "Crisp carrots, cabbage, peppers, and chicken glazed in light soy & ginger",
      "cuisine": "Asian",
      "category": "quick",
      "image": "./images/asian-ginger-chicken-stirfry.jpg",
      "prepMinutes": 8,
      "cookMinutes": 7,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Fast high-heat stir-frying keeps vegetables crunchy and vitamin C intact with just 1 teaspoon oil.",
      "nutrition": {
        "kcal": 345,
        "protein": "33g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-breast",
          "name": "Skinless chicken breast",
          "amount": 300,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 7500,
          "prep": "thin strips"
        },
        {
          "id": "cabbage",
          "name": "Green cabbage or bok choy",
          "amount": 200,
          "unit": "g",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "sliced ribbons"
        },
        {
          "id": "carrots",
          "name": "Carrots & bell pepper",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "thin matchsticks"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        },
        {
          "id": "soy-sauce",
          "name": "Light soy sauce & lime",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 800,
          "prep": "mixed with 2 tbsp water"
        },
        {
          "id": "simsim",
          "name": "Toasted simsim seeds",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 400,
          "prep": "garnish"
        }
      ],
      "steps": [
        {
          "text": "Stir-fry chicken strips in a very hot pan with 1 teaspoon oil for 4 minutes until browned and cooked through; transfer briefly to a plate.",
          "timerMin": 4
        },
        {
          "text": "Toss carrots, bell pepper, cabbage, ginger, and garlic in the hot pan for 2 minutes until crisp-tender."
        },
        {
          "text": "Return chicken, pour in soy-lime splash, toss 30 seconds until glossy, and scatter toasted simsim seeds."
        }
      ],
      "ugandaTip": "Serve on its own for a light evening meal or beside 1/2 cup steamed rice after training."
    },
    {
      "id": "mediterranean-shakshuka-greens",
      "title": "Mediterranean Shakshuka with Dodo Greens",
      "subtitle": "Farm eggs poached in spiced tomato, bell pepper, garlic, and tender greens",
      "cuisine": "Mediterranean",
      "category": "breakfast",
      "image": "./images/mediterranean-shakshuka-greens.jpg",
      "prepMinutes": 8,
      "cookMinutes": 14,
      "totalMinutes": 22,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Eggs cooked gently in lycopene-rich tomatoes and iron-packed greens make a deeply filling breakfast.",
      "nutrition": {
        "kcal": 310,
        "protein": "18g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "eggs",
          "name": "Fresh farm eggs",
          "amount": 4,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 2400,
          "prep": "whole"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 4,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "finely diced"
        },
        {
          "id": "bell-pepper",
          "name": "Red or green bell pepper",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "dodo",
          "name": "Dodo or spinach leaves",
          "amount": 1,
          "unit": "handful",
          "aisle": "greens",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        }
      ],
      "steps": [
        {
          "text": "Saute onion, bell pepper, and garlic in 1 teaspoon olive oil for 4 minutes. Stir in cumin, paprika, and diced tomatoes.",
          "timerMin": 4
        },
        {
          "text": "Simmer 6 minutes into a thick sauce, then fold in chopped dodo greens.",
          "timerMin": 6
        },
        {
          "text": "Make 4 small wells, crack an egg into each, cover, and poach gently for 4 minutes until whites set."
        }
      ],
      "ugandaTip": "Add a pinch of fresh bird-eye chili if you like gentle morning heat."
    },
    {
      "id": "avocado-poached-egg-toast",
      "title": "Smashed Avocado, Lime & Egg Whole-Grain Toast",
      "subtitle": "Creamy market avocado with soft eggs, chili flakes, and lemon on toasted whole bread",
      "cuisine": "Mediterranean",
      "category": "breakfast",
      "image": "./images/avocado-poached-egg-toast.jpg",
      "prepMinutes": 5,
      "cookMinutes": 5,
      "totalMinutes": 10,
      "servings": 1,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Healthy fats plus whole-grain fiber slow digestion and prevent sugar spikes all morning.",
      "nutrition": {
        "kcal": 390,
        "protein": "17g",
        "fiber": "8g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "whole-bread",
          "name": "Whole-wheat bread slices",
          "amount": 2,
          "unit": "slices",
          "aisle": "grains",
          "estUgx": 1500,
          "prep": "toasted"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 800,
          "prep": "mashed with lime & salt"
        },
        {
          "id": "eggs",
          "name": "Farm eggs",
          "amount": 2,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 1200,
          "prep": "poached or soft-boiled"
        },
        {
          "id": "tomatoes",
          "name": "Cherry or firm tomato",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "sliced"
        }
      ],
      "steps": [
        {
          "text": "Toast whole-wheat bread until crisp while soft-boiling or poaching eggs for 5 minutes.",
          "timerMin": 5
        },
        {
          "text": "Mash avocado with a squeeze of lime and pinch of salt; spread over warm toast and top with sliced tomato, eggs, and black pepper."
        }
      ],
      "ugandaTip": "No whole-grain bread on hand? Use grilled sweet potato slabs instead of bread for a naturally gluten-free base."
    },
    {
      "id": "green-power-smoothie-bowl",
      "title": "Tropical Green Mango & Simsim Smoothie Bowl",
      "subtitle": "Thick chilled mango, banana, and tender spinach blended smooth with crunchy seeds",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "image": "./images/green-power-smoothie-bowl.jpg",
      "prepMinutes": 8,
      "cookMinutes": 0,
      "totalMinutes": 8,
      "servings": 1,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Packs a full serving of leafy greens inside naturally sweet frozen banana and mango.",
      "nutrition": {
        "kcal": 315,
        "protein": "8g",
        "fiber": "8g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "mango",
          "name": "Ripe sweet mango",
          "amount": 1,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "cubed & chilled"
        },
        {
          "id": "banana",
          "name": "Frozen ripe banana",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "sliced"
        },
        {
          "id": "dodo",
          "name": "Baby spinach or young dodo",
          "amount": 1,
          "unit": "handful",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "washed well"
        },
        {
          "id": "simsim",
          "name": "Toasted simsim or chia seeds",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 600,
          "prep": "topping"
        }
      ],
      "steps": [
        {
          "text": "Blend frozen banana slices, mango, washed greens, and 1/3 cup cold water or yogurt until thick and spoonable."
        },
        {
          "text": "Pour into a chilled bowl and finish with toasted simsim seeds and fresh fruit slices."
        }
      ],
      "ugandaTip": "Peel and freeze ripe bogoya bananas in a zip bag so your morning smoothie bowl turns out thick like sorbet."
    },
    {
      "id": "roasted-millet-fruit-porridge",
      "title": "Warm Millet (Obushera) & Groundnut Morning Bowl",
      "subtitle": "Nutty roasted Ugandan millet porridge swirled with g-nut paste and sweet banana",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "image": "./images/roasted-millet-fruit-porridge.jpg",
      "prepMinutes": 3,
      "cookMinutes": 10,
      "totalMinutes": 13,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Finger millet is rich in natural calcium, iron, and slow-release energy with zero refined sugar.",
      "nutrition": {
        "kcal": 340,
        "protein": "11g",
        "fiber": "7g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "millet-flour",
          "name": "Roasted millet flour (kalo)",
          "amount": 0.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1500,
          "prep": "whisked smooth in cold water"
        },
        {
          "id": "gnut-paste",
          "name": "Natural groundnut paste",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 800,
          "prep": "for swirling"
        },
        {
          "id": "banana",
          "name": "Sweet yellow banana",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "sliced"
        },
        {
          "id": "cinnamon",
          "name": "Cinnamon & ginger pinch",
          "amount": 0.5,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 300,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Whisk millet flour into 1/2 cup cold water until lump-free, then pour into 2 cups simmering water while stirring."
        },
        {
          "text": "Cook over medium-low heat for 8 minutes until velvety, stir in cinnamon and groundnut paste, and top with sliced banana.",
          "timerMin": 8
        }
      ],
      "ugandaTip": "Use fermented obushera flour for extra gut-friendly probiotics."
    },
    {
      "id": "chicken-cabbage-simsim-slaw",
      "title": "Asian Chicken, Cabbage & Toasted Simsim Slaw",
      "subtitle": "Crunchy shredded cabbage, carrots, grilled chicken, and ginger-lime soy dressing",
      "cuisine": "Asian",
      "category": "salads",
      "image": "./images/chicken-cabbage-simsim-slaw.jpg",
      "prepMinutes": 12,
      "cookMinutes": 8,
      "totalMinutes": 20,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Crisp raw cabbage and toasted sesame deliver crunch and high protein without heavy mayonnaise.",
      "nutrition": {
        "kcal": 370,
        "protein": "34g",
        "fiber": "6g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-breast",
          "name": "Skinless chicken breast",
          "amount": 300,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 7500,
          "prep": "sliced thin"
        },
        {
          "id": "cabbage",
          "name": "Green & purple cabbage",
          "amount": 250,
          "unit": "g",
          "aisle": "greens",
          "estUgx": 1500,
          "prep": "finely shredded"
        },
        {
          "id": "carrots",
          "name": "Carrots",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "julienned or grated"
        },
        {
          "id": "simsim",
          "name": "White simsim seeds",
          "amount": 2,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 800,
          "prep": "dry toasted"
        },
        {
          "id": "soy-sauce",
          "name": "Light soy sauce",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        }
      ],
      "steps": [
        {
          "text": "Toast simsim seeds in a dry pan for 3 minutes until golden.",
          "timerMin": 3
        },
        {
          "text": "Sear seasoned chicken strips in 1 teaspoon oil for 6 minutes until cooked through.",
          "timerMin": 6
        },
        {
          "text": "Toss shredded cabbage and carrots with ginger-lime soy dressing; top with warm chicken and toasted simsim."
        }
      ],
      "ugandaTip": "Shred cabbage extra fine so it stays crunchy even if packed for lunch."
    },
    {
      "id": "sweet-potato-avocado-bowl",
      "title": "Roasted Sweet Potato, Dodo & Avocado Bowl",
      "subtitle": "Pan-toasted sweet potato cubes over wilted greens with lemon-groundnut drizzle",
      "cuisine": "Ugandan",
      "category": "salads",
      "image": "./images/sweet-potato-avocado-bowl.jpg",
      "prepMinutes": 8,
      "cookMinutes": 12,
      "totalMinutes": 20,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Warm complex carbs paired with raw avocado and iron-rich amaranth keep energy steady.",
      "nutrition": {
        "kcal": 385,
        "protein": "9g",
        "fiber": "9g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "sweet-potato",
          "name": "Sweet potatoes (yellow or orange)",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "1.5cm cubes"
        },
        {
          "id": "dodo",
          "name": "Fresh dodo greens",
          "amount": 1,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "washed & chopped"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "sliced"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "quartered"
        },
        {
          "id": "gnut-paste",
          "name": "Groundnut or simsim paste",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 800,
          "prep": "whisked with lime & warm water"
        }
      ],
      "steps": [
        {
          "text": "Pan-roast diced sweet potatoes in 1 teaspoon oil covered for 10 minutes until golden and tender.",
          "timerMin": 10
        },
        {
          "text": "Wilt chopped dodo in the warm pan for 2 minutes with a splash of water."
        },
        {
          "text": "Layer greens, warm sweet potatoes, tomatoes, and avocado; drizzle with lime-thinned g-nut dressing."
        }
      ],
      "ugandaTip": "Orange-fleshed sweet potatoes add extra vitamin A and natural sweetness."
    },
    {
      "id": "pilau-bean-sweet-potato-hash",
      "title": "15-Min Spiced Pilau Bean & Sweet Potato Hash",
      "subtitle": "Aromatic cumin, cardamom, and cinnamon skillet with kidney beans and sweet potato",
      "cuisine": "Ugandan",
      "category": "quick",
      "image": "./images/pilau-bean-sweet-potato-hash.jpg",
      "prepMinutes": 5,
      "cookMinutes": 10,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Delivers classic East African pilau warmth with high fiber and zero heavy white rice crash.",
      "nutrition": {
        "kcal": 350,
        "protein": "13g",
        "fiber": "10g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "red-beans",
          "name": "Pre-cooked red beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1500,
          "prep": "rinsed"
        },
        {
          "id": "sweet-potato",
          "name": "Sweet potato",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "micro-diced"
        },
        {
          "id": "red-onion",
          "name": "Red onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 700,
          "prep": "sliced"
        },
        {
          "id": "pilau-spices",
          "name": "Cumin, cinnamon & cardamom",
          "amount": 1.5,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "ground blend"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "chopped"
        }
      ],
      "steps": [
        {
          "text": "Saute onion and micro-diced sweet potato in 1 teaspoon oil for 4 minutes.",
          "timerMin": 4
        },
        {
          "text": "Stir in pilau spices for 30 seconds, then add beans and 1/2 cup water; cover and simmer 6 minutes until tender. Scatter fresh chopped coriander on top.",
          "timerMin": 6
        }
      ],
      "ugandaTip": "Top with a fried or poached egg when you want extra post-workout protein."
    },
    {
      "id": "asian-garlic-soy-egg-rice",
      "title": "15-Min Asian Veggie & Egg Fried Rice",
      "subtitle": "Light pan-tossed rice packed with carrots, cabbage, ginger, garlic, and eggs",
      "cuisine": "Asian",
      "category": "quick",
      "image": "./images/asian-garlic-soy-egg-rice.jpg",
      "prepMinutes": 5,
      "cookMinutes": 8,
      "totalMinutes": 13,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Doubling the vegetables and eggs keeps portions balanced and much lighter than takeout fried rice.",
      "nutrition": {
        "kcal": 380,
        "protein": "16g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cooked-rice",
          "name": "Cooked brown or basmati rice",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1800,
          "prep": "chilled leftover works best"
        },
        {
          "id": "eggs",
          "name": "Farm eggs",
          "amount": 3,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 1800,
          "prep": "beaten"
        },
        {
          "id": "carrots",
          "name": "Carrots & shredded cabbage",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "finely diced"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        },
        {
          "id": "soy-sauce",
          "name": "Light soy sauce",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Scramble beaten eggs quickly in 1 teaspoon oil for 1 minute, then push to the side of the pan."
        },
        {
          "text": "Saute carrots, cabbage, ginger, and garlic over high heat for 3 minutes until crisp-tender.",
          "timerMin": 3
        },
        {
          "text": "Toss in cooked rice and soy sauce for 3 minutes until hot and smoky; scatter sliced spring onions.",
          "timerMin": 3
        }
      ],
      "ugandaTip": "Always cook extra rice on Sunday — chilled day-old rice fries cleanly with almost no oil."
    },
    {
      "id": "coconut-cassava-blackeye-peas",
      "title": "Coconut Cassava & Black-Eyed Pea (Mpindi) Pot",
      "subtitle": "Creamy turmeric coconut simmer with tender cassava chunks and high-fiber peas",
      "cuisine": "Ugandan",
      "category": "onepot",
      "image": "./images/coconut-cassava-blackeye-peas.jpg",
      "prepMinutes": 10,
      "cookMinutes": 25,
      "totalMinutes": 35,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Pre-boiled black-eyed peas and root cassava deliver clean fuel, potassium, and gut fiber.",
      "nutrition": {
        "kcal": 420,
        "protein": "13g",
        "fiber": "11g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cassava",
          "name": "Fresh peeled cassava",
          "amount": 450,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 2500,
          "prep": "cut in 3cm chunks, core removed"
        },
        {
          "id": "black-eyed-peas",
          "name": "Pre-boiled black-eyed peas (mpindi)",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "rinsed"
        },
        {
          "id": "coconut-milk",
          "name": "Light coconut milk",
          "amount": 0.75,
          "unit": "cups",
          "aisle": "pantry",
          "estUgx": 3000,
          "prep": "plus 1 cup water"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "chopped"
        }
      ],
      "steps": [
        {
          "text": "Saute onion, garlic, and turmeric in 1 teaspoon oil for 3 minutes."
        },
        {
          "text": "Add cassava chunks, coconut milk, and water; simmer covered for 18 minutes until cassava begins to soften.",
          "timerMin": 18
        },
        {
          "text": "Stir in black-eyed peas and simmer 6 more minutes until sauce turns creamy and cassava is fork-tender. Finish with coriander.",
          "timerMin": 6
        }
      ],
      "ugandaTip": "Always slice out the fibrous center vein of cassava before simmering so every bite is silky."
    },
    {
      "id": "italian-lemon-chicken-orzo-rice",
      "title": "Italian Lemon-Garlic Chicken & Rice One-Pot",
      "subtitle": "Juicy chicken breast simmered with aromatic rice, tomatoes, and wilted greens",
      "cuisine": "Italian",
      "category": "onepot",
      "image": "./images/italian-lemon-chicken-orzo-rice.jpg",
      "prepMinutes": 8,
      "cookMinutes": 22,
      "totalMinutes": 30,
      "servings": 3,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Everything cooks in one pot so chicken juices and lemon zest flavor the rice without butter.",
      "nutrition": {
        "kcal": 410,
        "protein": "34g",
        "fiber": "4g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-breast",
          "name": "Chicken breast",
          "amount": 400,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 9500,
          "prep": "cubed"
        },
        {
          "id": "rice",
          "name": "Basmati or long-grain rice",
          "amount": 1,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2500,
          "prep": "rinsed"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "dodo",
          "name": "Spinach or tender sukuma",
          "amount": 1,
          "unit": "handful",
          "aisle": "greens",
          "estUgx": 700,
          "prep": "shredded"
        },
        {
          "id": "lemon",
          "name": "Lemon, garlic & oregano",
          "amount": 1,
          "unit": "set",
          "aisle": "pantry",
          "estUgx": 1000,
          "prep": "juiced & minced"
        }
      ],
      "steps": [
        {
          "text": "Brown chicken cubes with salt, pepper, garlic, and oregano in 1 teaspoon olive oil for 4 minutes.",
          "timerMin": 4
        },
        {
          "text": "Add rinsed rice, diced tomatoes, lemon juice, and 2 cups water. Bring to a boil, cover low, and simmer 16 minutes.",
          "timerMin": 16
        },
        {
          "text": "Fold in shredded greens, cover 2 minutes off heat to steam, and fluff before serving."
        }
      ],
      "ugandaTip": "Use broken pasta (orzo) or local basmati rice — both cook cleanly in the exact same 1:2 liquid ratio."
    },
    {
      "id": "roasted-kuroiler-root-tray",
      "title": "Herb-Roasted Chicken & Pumpkin Root Tray",
      "subtitle": "Skinless chicken drumsticks roasted with orange pumpkin, sweet potato, and rosemary",
      "cuisine": "Ugandan",
      "category": "slow",
      "image": "./images/roasted-kuroiler-root-tray.jpg",
      "prepMinutes": 15,
      "cookMinutes": 40,
      "totalMinutes": 55,
      "servings": 3,
      "tags": [
        "High-Protein",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Removing chicken skin before roasting cuts saturated fat while pumpkin provides rich beta-carotene.",
      "nutrition": {
        "kcal": 430,
        "protein": "33g",
        "fiber": "7g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-pieces",
          "name": "Chicken drumsticks (skinless)",
          "amount": 600,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 12000,
          "prep": "scored slightly"
        },
        {
          "id": "pumpkin",
          "name": "Orange pumpkin (ensujju)",
          "amount": 300,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 1800,
          "prep": "wedges"
        },
        {
          "id": "sweet-potato",
          "name": "Sweet potatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "chunks"
        },
        {
          "id": "red-onion",
          "name": "Red onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 700,
          "prep": "petals"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "herbs",
          "name": "Rosemary or thyme",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 400,
          "prep": "chopped or dried"
        }
      ],
      "steps": [
        {
          "text": "Toss chicken, pumpkin wedges, sweet potato, and onion with garlic, rosemary, paprika, salt, and 1 tablespoon oil on a tray."
        },
        {
          "text": "Roast at 200C for 40 minutes until chicken reaches juicy perfection and roots caramelize at the edges.",
          "timerMin": 40
        }
      ],
      "ugandaTip": "Roast two trays on Sunday so weekday lunches are just heat-and-eat."
    },
    {
      "id": "asian-sesame-glazed-tilapia",
      "title": "Asian Sesame-Ginger Baked Tilapia Rice Bowl",
      "subtitle": "Flaky Lake Victoria tilapia glazed in soy, ginger, and lime with cucumber & rice",
      "cuisine": "Asian",
      "category": "slow",
      "image": "./images/asian-sesame-glazed-tilapia.jpg",
      "prepMinutes": 15,
      "cookMinutes": 20,
      "totalMinutes": 35,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Baking fish in ginger-lime soy glaze locks in moisture and omega-3s with almost zero oil.",
      "nutrition": {
        "kcal": 410,
        "protein": "35g",
        "fiber": "4g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "tilapia-fillet",
          "name": "Fresh tilapia fillets",
          "amount": 350,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 9500,
          "prep": "patted dry"
        },
        {
          "id": "rice",
          "name": "Steamed rice",
          "amount": 1,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2500,
          "prep": "dry measure"
        },
        {
          "id": "cucumber",
          "name": "Crisp cucumber",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "thin ribbons"
        },
        {
          "id": "soy-sauce",
          "name": "Light soy sauce",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        },
        {
          "id": "simsim",
          "name": "Toasted simsim seeds & lime",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 600,
          "prep": "garnish"
        }
      ],
      "steps": [
        {
          "text": "Marinate tilapia fillets in soy-ginger-lime glaze for 15 minutes while steaming rice.",
          "timerMin": 15
        },
        {
          "text": "Bake fish at 200C (or cover-steam in a skillet) for 15 minutes until flaky.",
          "timerMin": 15
        },
        {
          "text": "Serve warm fish over steamed rice alongside crisp cucumber ribbons and toasted simsim seeds."
        }
      ],
      "ugandaTip": "A single teaspoon of raw honey balances the salty soy sauce without spiking blood sugar."
    },
    {
      "id": "mango-pawpaw-turmeric-tonic",
      "title": "Golden Mango, Pawpaw & Turmeric Morning Juice",
      "subtitle": "Creamy sunlit tropical blend spiced with fresh turmeric root and lemon",
      "cuisine": "Ugandan",
      "category": "juices",
      "image": "./images/mango-pawpaw-turmeric-tonic.jpg",
      "prepMinutes": 8,
      "cookMinutes": 0,
      "totalMinutes": 8,
      "servings": 2,
      "tags": [
        "Light & Lean",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Turmeric curcumin plus pawpaw digestive enzymes soothe the gut and support immunity.",
      "nutrition": {
        "kcal": 105,
        "protein": "1g",
        "fiber": "3g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "mango",
          "name": "Ripe sweet mango",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "peeled & cubed"
        },
        {
          "id": "pawpaw",
          "name": "Ripe pawpaw",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "cubed"
        },
        {
          "id": "turmeric",
          "name": "Turmeric",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 200,
          "prep": "fresh or ground"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 0.5,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "grated"
        },
        {
          "id": "lemon",
          "name": "Fresh lemon",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "juiced"
        }
      ],
      "steps": [
        {
          "text": "Blend mango, pawpaw, fresh turmeric, ginger, lemon juice, and 1.5 cups chilled water until velvety smooth."
        },
        {
          "text": "Add a tiny pinch of black pepper (helps turmeric absorb) and pour straight into chilled glasses."
        }
      ],
      "ugandaTip": "If fresh turmeric root is out of season, 1/2 teaspoon ground turmeric works cleanly."
    },
    {
      "id": "watermelon-mint-lime-cooler",
      "title": "Watermelon, Garden Mint & Lime Cooler",
      "subtitle": "Crisp post-workout electrolyte hydration with zero added sugar",
      "cuisine": "Ugandan",
      "category": "juices",
      "image": "./images/watermelon-mint-lime-cooler.jpg",
      "prepMinutes": 6,
      "cookMinutes": 0,
      "totalMinutes": 6,
      "servings": 3,
      "tags": [
        "Light & Lean",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Natural watermelon L-citrulline and potassium rehydrate rapidly after warm-weather workouts.",
      "nutrition": {
        "kcal": 54,
        "protein": "1g",
        "fiber": "1g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "watermelon",
          "name": "Sweet red watermelon",
          "amount": 4,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 2500,
          "prep": "cubed"
        },
        {
          "id": "mint",
          "name": "Fresh garden mint leaves",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "washed"
        },
        {
          "id": "lime",
          "name": "Fresh lime",
          "amount": 1.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 750,
          "prep": "juiced"
        }
      ],
      "steps": [
        {
          "text": "Pulse watermelon chunks, mint leaves, and lime juice in a blender for 20 seconds until liquid."
        },
        {
          "text": "Pour through a coarse strainer over ice cubes with a tiny pinch of sea salt if drinking after exercise."
        }
      ],
      "ugandaTip": "No water needed — watermelon is already over 90% natural hydrating water."
    },
    {
      "id": "pineapple-ginger-lemongrass-tea",
      "title": "Chilled Pineapple, Ginger & Lemongrass (Kisubi) Brew",
      "subtitle": "Aromatic Ugandan lemongrass steeped with fresh pineapple peels and spicy ginger",
      "cuisine": "Ugandan",
      "category": "juices",
      "image": "./images/pineapple-ginger-lemongrass-tea.jpg",
      "prepMinutes": 8,
      "cookMinutes": 15,
      "totalMinutes": 23,
      "servings": 5,
      "tags": [
        "Light & Lean",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Lemongrass and ginger calm digestion and curb sweet cravings with minimal calories.",
      "nutrition": {
        "kcal": 42,
        "protein": "0g",
        "fiber": "1g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "lemongrass",
          "name": "Fresh lemongrass stalks (kisubi)",
          "amount": 3,
          "unit": "stalks",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "bruised & knotted"
        },
        {
          "id": "pineapple",
          "name": "Ripe pineapple (flesh + clean peels)",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "chopped"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger root",
          "amount": 2,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 800,
          "prep": "sliced"
        },
        {
          "id": "lemon",
          "name": "Fresh lemon",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "juiced after cooling"
        }
      ],
      "steps": [
        {
          "text": "Simmer bruised lemongrass, sliced ginger, and clean pineapple peels in 2 liters of water for 15 minutes.",
          "timerMin": 15
        },
        {
          "text": "Strain into a pitcher, stir in blended pineapple flesh and fresh lemon juice, and chill completely before serving."
        }
      ],
      "ugandaTip": "Serve hot as an evening digestive tea or ice-cold during the afternoon."
    },
    {
      "id": "yogurt-chia-mango-parfait",
      "title": "Plain Yogurt, Chia Seeds & Mango Cinnamon Bowl",
      "subtitle": "Creamy probiotic plain yogurt layered with soaked chia seeds, mango, and warm spice",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "image": "./images/yogurt-chia-mango-parfait.jpg",
      "prepMinutes": 5,
      "cookMinutes": 0,
      "totalMinutes": 5,
      "servings": 1,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Plain yogurt probiotics plus chia omega-3 fiber keep digestion calm and fullness steady for hours.",
      "nutrition": {
        "kcal": 295,
        "protein": "13g",
        "fiber": "10g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "yogurt",
          "name": "Plain unsweetened yogurt",
          "amount": 1,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 2500,
          "prep": "chilled"
        },
        {
          "id": "chia-seeds",
          "name": "Chia seeds",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 1000,
          "prep": "stirred in or soaked 5 min"
        },
        {
          "id": "mango",
          "name": "Ripe sweet mango or pawpaw",
          "amount": 0.75,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "cinnamon",
          "name": "Cinnamon & cardamom pinch",
          "amount": 0.5,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 200,
          "prep": "warm spice"
        },
        {
          "id": "simsim",
          "name": "Toasted simsim or crushed g-nuts",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 400,
          "prep": "crunch topping"
        }
      ],
      "steps": [
        {
          "text": "Stir chia seeds, cinnamon, and a tiny pinch of cardamom into chilled plain yogurt and let sit 5 minutes so chia begins to gel."
        },
        {
          "text": "Top with diced sweet mango (or pawpaw) and toasted simsim or groundnuts for crunch."
        }
      ],
      "ugandaTip": "Always pick plain unsweetened yogurt — ripe Ugandan mango gives all the sweetness you need."
    },
    {
      "id": "overnight-chia-pineapple-pudding",
      "title": "Overnight Chia, Yogurt & Passion Fruit Pot",
      "subtitle": "Make-ahead chilled chia pudding layered with tangy Ugandan passion fruit and mint",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "image": "./images/overnight-chia-pineapple-pudding.jpg",
      "prepMinutes": 5,
      "cookMinutes": 0,
      "totalMinutes": 5,
      "servings": 1,
      "tags": [
        "Light & Lean",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Soaking chia seeds overnight unlocks soluble fiber that supports gut health and steady energy.",
      "nutrition": {
        "kcal": 270,
        "protein": "10g",
        "fiber": "12g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "chia-seeds",
          "name": "Chia seeds",
          "amount": 2.5,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 1500,
          "prep": "whole"
        },
        {
          "id": "yogurt",
          "name": "Plain yogurt + splash milk/water",
          "amount": 0.75,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 2000,
          "prep": "whisked smooth"
        },
        {
          "id": "passion-fruit",
          "name": "Fresh passion fruits",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 800,
          "prep": "pulp scooped"
        },
        {
          "id": "banana",
          "name": "Sweet banana slices",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "sliced"
        },
        {
          "id": "mint",
          "name": "Fresh mint & cinnamon",
          "amount": 1,
          "unit": "pinch",
          "aisle": "greens",
          "estUgx": 300,
          "prep": "garnish"
        }
      ],
      "steps": [
        {
          "text": "Stir chia seeds into plain yogurt thinned with 3 tablespoons milk or water, plus cinnamon. Rest 5 minutes, stir again so no clumps form, then chill overnight (or 30 minutes)."
        },
        {
          "text": "Top with sliced banana, fresh passion fruit pulp, and torn mint leaves before eating."
        }
      ],
      "ugandaTip": "Make 3 jars on Sunday night for grab-and-go weekday breakfasts."
    },
    {
      "id": "black-bean-avocado-lime-salad",
      "title": "Cumin-Lime Black Bean, Avocado & Mango Salad",
      "subtitle": "Fiber-packed black beans tossed with roasted cumin, coriander, tomatoes, and lime",
      "cuisine": "Mediterranean",
      "category": "salads",
      "image": "./images/black-bean-avocado-lime-salad.jpg",
      "prepMinutes": 12,
      "cookMinutes": 0,
      "totalMinutes": 12,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Black beans are loaded with antioxidants, plant protein, and resistant starch for gut health.",
      "nutrition": {
        "kcal": 355,
        "protein": "15g",
        "fiber": "13g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "black-beans",
          "name": "Cooked black beans",
          "amount": 2,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2500,
          "prep": "rinsed & drained"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "cubed"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "red-onion",
          "name": "Red onion",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "finely diced"
        },
        {
          "id": "cumin-coriander",
          "name": "Ground cumin, paprika & fresh coriander",
          "amount": 1,
          "unit": "set",
          "aisle": "pantry",
          "estUgx": 700,
          "prep": "herb & spice pairing"
        },
        {
          "id": "lime",
          "name": "Fresh lime & 1 tsp olive oil",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "juiced"
        }
      ],
      "steps": [
        {
          "text": "Toss rinsed black beans with ground cumin, smoked or sweet paprika, garlic pinch, lime juice, and 1 teaspoon oil so beans absorb the spices."
        },
        {
          "text": "Fold in diced tomatoes, soaked red onion, chopped coriander, and avocado cubes just before serving."
        }
      ],
      "ugandaTip": "Black beans pair naturally with cumin, garlic, lime, and coriander — skip heavy sauces completely."
    },
    {
      "id": "spiced-yogurt-herb-chicken",
      "title": "Yogurt, Turmeric & Garlic Herb Chicken",
      "subtitle": "Plain yogurt tenderizes lean chicken with turmeric, cumin, garlic, and cucumber-mint sauce",
      "cuisine": "Mediterranean",
      "category": "quick",
      "image": "./images/spiced-yogurt-herb-chicken.jpg",
      "prepMinutes": 8,
      "cookMinutes": 10,
      "totalMinutes": 18,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Using plain yogurt as a marinade keeps lean chicken juicy with almost zero oil while adding gut-friendly herbs.",
      "nutrition": {
        "kcal": 340,
        "protein": "36g",
        "fiber": "3g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-breast",
          "name": "Skinless chicken breast",
          "amount": 350,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 8500,
          "prep": "cut in strips"
        },
        {
          "id": "yogurt",
          "name": "Plain unsweetened yogurt",
          "amount": 0.5,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 1500,
          "prep": "split for marinade & mint dip"
        },
        {
          "id": "turmeric",
          "name": "Turmeric",
          "amount": 0.5,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 200,
          "prep": "ground"
        },
        {
          "id": "cumin",
          "name": "Ground cumin",
          "amount": 0.5,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 200,
          "prep": "ground"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "cucumber",
          "name": "Cucumber",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "grated"
        },
        {
          "id": "mint",
          "name": "Fresh mint",
          "amount": 0.25,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 300,
          "prep": "chopped"
        },
        {
          "id": "lemon",
          "name": "Fresh lemon",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "juiced"
        }
      ],
      "steps": [
        {
          "text": "Coat chicken strips in half the plain yogurt mixed with garlic, ginger, turmeric, cumin, lemon juice, and salt."
        },
        {
          "text": "Sear in a hot lightly oiled skillet for 4 minutes per side (8 minutes total) until golden-charred and cooked through.",
          "timerMin": 8
        },
        {
          "text": "Mix remaining plain yogurt with grated cucumber, chopped mint, lemon pinch, and salt as a cooling drizzle over the chicken and salad."
        }
      ],
      "ugandaTip": "That savory cucumber-mint yogurt sauce (tzatziki/raita style) also tastes amazing over grilled tilapia or roasted sweet potatoes."
    },
    {
      "id": "boiled-cassava-eggs-breakfast",
      "title": "Boiled Cassava, Soft Eggs & Kachumbari",
      "subtitle": "Classic Ugandan morning muwogo balanced with boiled eggs, avocado, and fresh tomato salad",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "mealSlots": [
        "breakfast",
        "lunch"
      ],
      "image": "./images/boiled-cassava-eggs-breakfast.jpg",
      "prepMinutes": 5,
      "cookMinutes": 18,
      "totalMinutes": 23,
      "servings": 2,
      "tags": [
        "High-Protein",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Boiling cassava requires zero oil and provides clean slow-release energy balanced by eggs and avocado.",
      "nutrition": {
        "kcal": 410,
        "protein": "15g",
        "fiber": "7g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cassava",
          "name": "Fresh peeled cassava (muwogo)",
          "amount": 400,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "halved, center fiber removed"
        },
        {
          "id": "eggs",
          "name": "Fresh farm eggs",
          "amount": 4,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 2400,
          "prep": "soft- or hard-boiled"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "sliced"
        },
        {
          "id": "tomatoes",
          "name": "Tomatoes, red onion & lime",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "diced kachumbari"
        }
      ],
      "steps": [
        {
          "text": "Place peeled cassava chunks in salted water, cover, and boil 16 to 18 minutes until fork-tender, then drain.",
          "timerMin": 18
        },
        {
          "text": "Boil eggs in a separate small pot for 7 to 8 minutes while dicing quick tomato-onion kachumbari with lime.",
          "timerMin": 8
        },
        {
          "text": "Plate warm cassava with peeled eggs, sliced avocado, and fresh kachumbari."
        }
      ],
      "ugandaTip": "Always pull out the tough stringy core after cutting cassava lengthwise so every piece cooks soft."
    },
    {
      "id": "baked-herb-cassava-wedges",
      "title": "Crispy Baked Garlic & Rosemary Cassava Wedges",
      "subtitle": "Lightly brushed oven-baked muwogo wedges — all the crunch without deep-frying",
      "cuisine": "Ugandan",
      "category": "slow",
      "mealSlots": [
        "lunch",
        "dinner"
      ],
      "image": "./images/baked-herb-cassava-wedges.jpg",
      "prepMinutes": 10,
      "cookMinutes": 30,
      "totalMinutes": 40,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Par-boiling then baking cuts oil by over 80% compared to deep-fried cassava chips.",
      "nutrition": {
        "kcal": 275,
        "protein": "3g",
        "fiber": "4g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cassava",
          "name": "Fresh peeled cassava (muwogo)",
          "amount": 550,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 2500,
          "prep": "cut into thick wedges, core removed"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "herbs",
          "name": "Rosemary or thyme",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 400,
          "prep": "chopped or dried"
        },
        {
          "id": "olive-oil",
          "name": "Olive or sunflower oil",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        },
        {
          "id": "lime",
          "name": "Fresh lime wedge",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "for serving"
        }
      ],
      "steps": [
        {
          "text": "Par-boil cassava wedges in lightly salted water for 10 minutes until just starting to soften, then drain and steam dry for 2 minutes.",
          "timerMin": 10
        },
        {
          "text": "Toss wedges gently with 1 tablespoon oil, crushed garlic, rosemary, paprika, and salt."
        },
        {
          "text": "Bake at 210C (or air-fry at 200C) for 20 minutes, flipping halfway, until golden and crisp outside. Squeeze lime over top.",
          "timerMin": 20
        }
      ],
      "ugandaTip": "Pairs wonderfully with grilled tilapia, chicken, or a cooling plain yogurt cucumber-mint dip."
    },
    {
      "id": "cassava-beans-katogo",
      "title": "One-Pot Cassava & Red Beans Katogo",
      "subtitle": "Hearty Ugandan muwogo simmered slowly with pre-boiled Nambale beans and tender dodo",
      "cuisine": "Ugandan",
      "category": "onepot",
      "mealSlots": [
        "breakfast",
        "lunch",
        "dinner"
      ],
      "image": "./images/cassava-beans-katogo.jpg",
      "prepMinutes": 10,
      "cookMinutes": 25,
      "totalMinutes": 35,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "High-Protein",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Combining cassava with high-fiber red beans slows glucose release and keeps you satisfied for hours.",
      "nutrition": {
        "kcal": 425,
        "protein": "14g",
        "fiber": "11g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cassava",
          "name": "Fresh peeled cassava (muwogo)",
          "amount": 450,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 2200,
          "prep": "3cm chunks, core removed"
        },
        {
          "id": "red-beans",
          "name": "Pre-boiled Nambale or red beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "with a little bean broth"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "diced"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "dodo",
          "name": "Fresh dodo or sukuma greens",
          "amount": 1,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "washed & chopped"
        }
      ],
      "steps": [
        {
          "text": "Saute onion, garlic, and ginger in 1 measured tablespoon oil for 3 minutes, then cook diced tomatoes down for 2 more minutes (5 minutes total) into a rich paste.",
          "timerMin": 5
        },
        {
          "text": "Stir in pre-boiled beans and lay cassava chunks on top; add water just to cover, lid tightly, and simmer 20 minutes until cassava is tender.",
          "timerMin": 20
        },
        {
          "text": "Fold in chopped dodo greens for the final 2 minutes off heat so they stay bright green."
        }
      ],
      "ugandaTip": "A spoonful of natural groundnut paste stirred in at the end makes the cassava katogo sauce velvety without extra oil."
    },
    {
      "id": "crispy-baked-irish-wedges",
      "title": "Crispy Baked Garlic & Paprika Irish Wedges",
      "subtitle": "Skin-on Irish potato wedges roasted crisp with rosemary, garlic, and just 1 tbsp oil",
      "cuisine": "Ugandan",
      "category": "slow",
      "mealSlots": [
        "lunch",
        "dinner"
      ],
      "image": "./images/crispy-baked-irish-wedges.jpg",
      "prepMinutes": 8,
      "cookMinutes": 28,
      "totalMinutes": 36,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Keeping the clean potato skin on adds extra fiber and potassium while oven-baking cuts deep-fry oil.",
      "nutrition": {
        "kcal": 245,
        "protein": "5g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "irish-potatoes",
          "name": "Medium Irish potatoes (washed, skin on)",
          "amount": 600,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 3000,
          "prep": "cut into thick wedges"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "herbs",
          "name": "Rosemary or thyme",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 400,
          "prep": "chopped or dried"
        },
        {
          "id": "paprika",
          "name": "Smoked or sweet paprika",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 400,
          "prep": "for color & warmth"
        },
        {
          "id": "olive-oil",
          "name": "Olive or sunflower oil",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Pat washed Irish potato wedges dry with a clean cloth (dry skins crisp up best) and toss with 1 tablespoon oil, paprika, garlic, rosemary, and salt."
        },
        {
          "text": "Spread in a single layer on a baking tray and bake at 210C (or air-fry at 200C) for 28 minutes, flipping halfway, until golden and crisp.",
          "timerMin": 28
        }
      ],
      "ugandaTip": "Dip in plain yogurt mixed with lemon, garlic, and chopped coriander instead of sugary ketchup."
    },
    {
      "id": "boiled-irish-herb-plate",
      "title": "Boiled Irish Potatoes, Lemon Herbs & Soft Eggs",
      "subtitle": "Oil-free tender boiled Irish potatoes tossed with coriander, lemon, garlic, and farm eggs",
      "cuisine": "Ugandan",
      "category": "quick",
      "mealSlots": [
        "breakfast",
        "lunch",
        "dinner"
      ],
      "image": "./images/boiled-irish-herb-plate.jpg",
      "prepMinutes": 5,
      "cookMinutes": 15,
      "totalMinutes": 20,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Boiled Irish potatoes have one of the highest satiety scores of any whole food, keeping hunger calm for hours.",
      "nutrition": {
        "kcal": 340,
        "protein": "16g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "irish-potatoes",
          "name": "Small or medium Irish potatoes",
          "amount": 500,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 2500,
          "prep": "halved or quartered"
        },
        {
          "id": "eggs",
          "name": "Fresh farm eggs",
          "amount": 4,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 2400,
          "prep": "soft- or hard-boiled"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander or parsley",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "finely chopped"
        },
        {
          "id": "lemon",
          "name": "Fresh lemon, 1 tsp olive oil & black pepper",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 700,
          "prep": "tossed while warm"
        }
      ],
      "steps": [
        {
          "text": "Boil halved Irish potatoes in lightly salted water for 14 to 15 minutes until fork-tender, while boiling the eggs in a small pot for 7 to 8 minutes.",
          "timerMin": 15
        },
        {
          "text": "While still steaming, toss gently with 1 teaspoon olive oil, lemon juice, chopped coriander, and black pepper."
        },
        {
          "text": "Serve beside peeled boiled eggs and a crisp cucumber-tomato salad."
        }
      ],
      "ugandaTip": "Tossing boiled potatoes with herbs and lemon while still hot lets the flavor soak right in without butter."
    },
    {
      "id": "light-pan-fried-irish-potatoes",
      "title": "Light Pan-Fried Spiced Irish Potatoes",
      "subtitle": "Golden skillet-crisped Irish potato rounds with sweet onion, garlic, and coriander",
      "cuisine": "Ugandan",
      "category": "quick",
      "mealSlots": [
        "breakfast",
        "lunch",
        "dinner"
      ],
      "image": "./images/light-pan-fried-irish-potatoes.jpg",
      "prepMinutes": 6,
      "cookMinutes": 14,
      "totalMinutes": 20,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Slicing potatoes thin and pan-frying in 1 measured tablespoon oil gives crisp fried flavor without heavy grease.",
      "nutrition": {
        "kcal": 270,
        "protein": "5g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "irish-potatoes",
          "name": "Irish potatoes",
          "amount": 450,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 2200,
          "prep": "thin 0.5cm rounds"
        },
        {
          "id": "red-onion",
          "name": "Red onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "thinly sliced"
        },
        {
          "id": "garlic-paprika",
          "name": "Minced garlic, paprika & turmeric pinch",
          "amount": 1.5,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 500,
          "prep": "measured"
        },
        {
          "id": "olive-oil",
          "name": "Vegetable or olive oil",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander",
          "amount": 2,
          "unit": "tbsp",
          "aisle": "greens",
          "estUgx": 300,
          "prep": "chopped"
        }
      ],
      "steps": [
        {
          "text": "Heat 1 tablespoon oil in a wide non-stick skillet over medium heat. Lay potato rounds flat and cook covered 7 minutes until tender underneath.",
          "timerMin": 7
        },
        {
          "text": "Uncover, flip potatoes, add sliced red onion, garlic, paprika, and salt, and crisp 6 minutes until golden-brown.",
          "timerMin": 6
        },
        {
          "text": "Scatter chopped fresh coriander over top and serve hot alongside grilled chicken, tilapia, or beans."
        }
      ],
      "ugandaTip": "Covering the pan for the first half steams the center tender so you never need extra oil."
    },
    {
      "id": "loaded-baked-jacket-irish",
      "title": "Baked Jacket Irish Potato with Black Beans & Yogurt",
      "subtitle": "Fluffy oven-baked whole Irish potato split and loaded with spiced black beans and yogurt",
      "cuisine": "Mediterranean",
      "category": "slow",
      "mealSlots": [
        "lunch",
        "dinner"
      ],
      "image": "./images/loaded-baked-jacket-irish.jpg",
      "prepMinutes": 8,
      "cookMinutes": 45,
      "totalMinutes": 53,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Swapping butter and heavy cheese for spiced black beans and plain yogurt creates a high-fiber comfort dinner.",
      "nutrition": {
        "kcal": 390,
        "protein": "16g",
        "fiber": "12g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "irish-potatoes",
          "name": "Large baking Irish potatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "scrubbed & pricked with fork"
        },
        {
          "id": "black-beans",
          "name": "Cooked black or red beans",
          "amount": 1,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1500,
          "prep": "warmed with cumin & garlic"
        },
        {
          "id": "yogurt",
          "name": "Plain unsweetened yogurt",
          "amount": 4,
          "unit": "tbsp",
          "aisle": "protein",
          "estUgx": 1000,
          "prep": "cooling topping"
        },
        {
          "id": "tomatoes",
          "name": "Diced tomato, onion & coriander",
          "amount": 1,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "fresh kachumbari"
        }
      ],
      "steps": [
        {
          "text": "Scrub large Irish potatoes, prick all over with a fork, rub with a tiny drop of oil and salt, and bake at 200C for 45 minutes until tender inside and crisp outside.",
          "timerMin": 45
        },
        {
          "text": "Warm black beans with ground cumin, garlic, and a splash of water for 3 minutes."
        },
        {
          "text": "Slice a cross on top of each hot potato, fluff the inside with a fork, and load with spiced beans, fresh kachumbari, and a spoonful of plain yogurt."
        }
      ],
      "ugandaTip": "To cut baking time in half, microwave the pricked potatoes for 6 minutes first, then crisp in the oven for 15 minutes."
    },
    {
      "id": "light-ugandan-beef-pilau",
      "title": "Light Spiced Ugandan Beef Pilau & Kachumbari",
      "subtitle": "Fragrant basmati rice simmered with lean beef, caramelized onions, garlic, ginger, and pilau masala",
      "cuisine": "Ugandan",
      "category": "onepot",
      "mealSlots": [
        "lunch",
        "dinner"
      ],
      "image": "./images/light-ugandan-beef-pilau.jpg",
      "prepMinutes": 12,
      "cookMinutes": 33,
      "totalMinutes": 45,
      "servings": 4,
      "tags": [
        "High-Protein",
        "Low-Sugar"
      ],
      "healthNote": "Cooking lean beef and basmati rice with 1 measured tablespoon oil gives full East African pilau flavor without grease.",
      "nutrition": {
        "kcal": 440,
        "protein": "28g",
        "fiber": "4g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "rice",
          "name": "Basmati or super rice",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 3500,
          "prep": "washed & soaked 10 min"
        },
        {
          "id": "beef-meat",
          "name": "Lean beef cubes (pre-boiled tender)",
          "amount": 350,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 8500,
          "prep": "save 2.5 cups lean broth"
        },
        {
          "id": "red-onion",
          "name": "Red onions",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "thinly sliced"
        },
        {
          "id": "pilau-spices",
          "name": "Pilau masala (cumin, cardamom, cinnamon, cloves)",
          "amount": 2,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 800,
          "prep": "freshly ground"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes & lime (for kachumbari)",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "served fresh on the side"
        }
      ],
      "steps": [
        {
          "text": "Caramelize sliced onions slowly in 1 tablespoon oil with a splash of water for 7 minutes until deep golden-brown.",
          "timerMin": 7
        },
        {
          "text": "Stir in garlic, ginger, pilau masala, and tender beef cubes for 2 minutes until deeply aromatic."
        },
        {
          "text": "Fold in drained rice, pour in 2.5 cups lean beef broth (or water), cover tightly, and simmer on low for 18 minutes until fluffy. Rest 5 minutes and serve with crisp kachumbari.",
          "timerMin": 18
        }
      ],
      "ugandaTip": "Always pair pilau with a generous bowl of raw tomato-onion kachumbari to add fresh fiber and vitamin C."
    },
    {
      "id": "swahili-coconut-rice-beans",
      "title": "Swahili Coconut Rice & Spiced Red Beans",
      "subtitle": "Fragrant rice steamed in light coconut milk served with protein-rich Nambale beans",
      "cuisine": "Ugandan",
      "category": "onepot",
      "mealSlots": [
        "lunch",
        "dinner"
      ],
      "image": "./images/swahili-coconut-rice-beans.jpg",
      "prepMinutes": 8,
      "cookMinutes": 22,
      "totalMinutes": 30,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "High-Protein",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Rice and beans form a complete plant protein while light coconut milk adds richness without heavy frying.",
      "nutrition": {
        "kcal": 425,
        "protein": "14g",
        "fiber": "9g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "rice",
          "name": "Basmati or long-grain rice",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 3500,
          "prep": "rinsed until clear"
        },
        {
          "id": "red-beans",
          "name": "Pre-boiled Nambale or red beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "drained"
        },
        {
          "id": "coconut-milk",
          "name": "Light coconut milk",
          "amount": 0.75,
          "unit": "cups",
          "aisle": "pantry",
          "estUgx": 3000,
          "prep": "plus 2 cups water"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "chopped"
        }
      ],
      "steps": [
        {
          "text": "Saute chopped onion and garlic in 1 teaspoon oil for 3 minutes until soft and fragrant."
        },
        {
          "text": "Add rinsed rice, beans, cardamom pinch, salt, coconut milk, and water. Bring to a gentle boil."
        },
        {
          "text": "Cover tightly and simmer on lowest heat for 18 minutes until liquid absorbs and rice is fluffy. Finish with fresh coriander.",
          "timerMin": 18
        }
      ],
      "ugandaTip": "Pairs brilliantly with sautéed dodo or sukuma wiki and a slice of ripe avocado."
    },
    {
      "id": "onepot-tomato-veggie-rice",
      "title": "One-Pot Spiced Tomato, Carrot & Pea Rice",
      "subtitle": "Vibrant market tomato rice loaded with sweet carrots, green peas, and bell pepper",
      "cuisine": "Ugandan",
      "category": "onepot",
      "mealSlots": [
        "lunch",
        "dinner"
      ],
      "image": "./images/onepot-tomato-veggie-rice.jpg",
      "prepMinutes": 8,
      "cookMinutes": 22,
      "totalMinutes": 30,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Blending fresh market tomatoes directly into the cooking liquid infuses every grain with lycopene and flavor.",
      "nutrition": {
        "kcal": 355,
        "protein": "9g",
        "fiber": "6g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "rice",
          "name": "Long-grain or basmati rice",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 3500,
          "prep": "rinsed well"
        },
        {
          "id": "tomatoes",
          "name": "Ripe red tomatoes",
          "amount": 4,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "blended or grated smooth"
        },
        {
          "id": "carrots",
          "name": "Carrots & green peas",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "finely diced"
        },
        {
          "id": "bell-pepper",
          "name": "Green or red bell pepper",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        }
      ],
      "steps": [
        {
          "text": "Saute onion, garlic, ginger, and thyme in 1 tablespoon oil for 3 minutes, then simmer blended tomatoes for 5 minutes until thick.",
          "timerMin": 5
        },
        {
          "text": "Stir in rinsed rice, carrots, peas, bell pepper, salt, and 2 cups water. Bring to a boil."
        },
        {
          "text": "Cover tightly and cook on low heat for 18 minutes until fluffy, then fluff gently with a fork.",
          "timerMin": 18
        }
      ],
      "ugandaTip": "Serve alongside grilled chicken, boiled eggs, or slow-simmered mince-cabbage soup."
    },
    {
      "id": "garlic-turmeric-chicken-rice",
      "title": "Golden Turmeric-Garlic Rice & Herb Chicken Bowl",
      "subtitle": "Fragrant yellow turmeric rice topped with pan-seared chicken breast, cucumber, and avocado",
      "cuisine": "Mediterranean",
      "category": "quick",
      "mealSlots": [
        "lunch",
        "dinner"
      ],
      "image": "./images/garlic-turmeric-chicken-rice.jpg",
      "prepMinutes": 6,
      "cookMinutes": 18,
      "totalMinutes": 24,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Turmeric and black pepper add anti-inflammatory warmth to a clean protein-and-rice fitness bowl.",
      "nutrition": {
        "kcal": 445,
        "protein": "35g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "rice",
          "name": "Basmati rice",
          "amount": 1,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2500,
          "prep": "rinsed"
        },
        {
          "id": "chicken-breast",
          "name": "Skinless chicken breast",
          "amount": 300,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 7500,
          "prep": "sliced strips"
        },
        {
          "id": "turmeric-garlic",
          "name": "Turmeric, minced garlic & black pepper",
          "amount": 1.5,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        },
        {
          "id": "avocado",
          "name": "Ripe avocado & cucumber",
          "amount": 1,
          "unit": "set",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "sliced fresh"
        }
      ],
      "steps": [
        {
          "text": "Warm garlic and turmeric in 1 teaspoon oil for 30 seconds, add rinsed rice, salt, and 2 cups water, cover, and simmer 15 minutes until fluffy.",
          "timerMin": 15
        },
        {
          "text": "Meanwhile sear seasoned chicken strips in a hot pan for 6 minutes until golden.",
          "timerMin": 6
        },
        {
          "text": "Serve golden rice topped with warm chicken, crisp cucumber, sliced avocado, and a squeeze of lemon."
        }
      ],
      "ugandaTip": "Add a spoonful of plain yogurt with lemon and mint on top to make it taste like a gourmet Mediterranean rice bowl."
    },
    {
      "id": "mediterranean-herb-rice-salad",
      "title": "Chilled Lemon-Herb Rice, Chickpea & Cucumber Bowl",
      "subtitle": "Refreshing cooled rice salad with chickpeas, tomatoes, coriander, and olive-lemon dressing",
      "cuisine": "Mediterranean",
      "category": "salads",
      "mealSlots": [
        "lunch",
        "dinner"
      ],
      "image": "./images/mediterranean-herb-rice-salad.jpg",
      "prepMinutes": 10,
      "cookMinutes": 0,
      "totalMinutes": 10,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Chilled cooked rice develops gut-friendly resistant starch and makes an ideal no-reheat office lunch.",
      "nutrition": {
        "kcal": 360,
        "protein": "12g",
        "fiber": "8g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cooked-rice",
          "name": "Cooked chilled basmati or brown rice",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1800,
          "prep": "fluffed cool"
        },
        {
          "id": "chickpeas",
          "name": "Cooked chickpeas or black beans",
          "amount": 1,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2500,
          "prep": "rinsed & drained"
        },
        {
          "id": "cucumber",
          "name": "Cucumber & ripe tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "finely diced"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander or parsley & mint",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "lemon",
          "name": "Lemon juice & 1 tbsp olive oil",
          "amount": 1,
          "unit": "pcs",
          "aisle": "pantry",
          "estUgx": 1000,
          "prep": "whisked with cumin pinch"
        }
      ],
      "steps": [
        {
          "text": "Combine cooled rice, chickpeas, diced cucumber, tomatoes, and chopped herbs in a wide bowl."
        },
        {
          "text": "Whisk lemon juice, olive oil, cumin pinch, salt, and black pepper; toss thoroughly and chill 10 minutes before serving."
        }
      ],
      "ugandaTip": "Perfect way to turn leftover boiled rice into a fresh, energizing next-day lunch."
    },
    {
      "id": "med-roasted-cauliflower-bean-salad",
      "title": "Roasted Cauliflower, Black Bean & Simsim Warm Salad",
      "subtitle": "Golden cumin-roasted cauliflower tossed with black beans, tomatoes, and lemon",
      "cuisine": "Mediterranean",
      "category": "salads",
      "image": "./images/med-roasted-cauliflower-bean-salad.jpg",
      "prepMinutes": 10,
      "cookMinutes": 18,
      "totalMinutes": 28,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "High-Protein",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Cruciferous cauliflower and black beans deliver high fiber, antioxidants, and steady plant protein.",
      "nutrition": {
        "kcal": 355,
        "protein": "15g",
        "fiber": "12g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cauliflower",
          "name": "Fresh cauliflower florets",
          "amount": 350,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 4000,
          "prep": "cut bite-sized"
        },
        {
          "id": "black-beans",
          "name": "Pre-boiled black beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "rinsed & drained"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "coriander",
          "name": "Fresh parsley or coriander",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "chopped"
        },
        {
          "id": "simsim-lemon",
          "name": "Toasted simsim, cumin & lemon",
          "amount": 2,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 1000,
          "prep": "with 1 tsp olive oil"
        }
      ],
      "steps": [
        {
          "text": "Toss cauliflower florets with 1 teaspoon oil, cumin, paprika, and salt; roast at 200C (or pan-sear covered) for 16 minutes until golden at the edges.",
          "timerMin": 16
        },
        {
          "text": "Toss warm cauliflower with black beans, diced tomatoes, herbs, fresh lemon juice, and toasted simsim seeds."
        }
      ],
      "ugandaTip": "Works just as well in a wide covered frying pan if you prefer not to turn on an oven."
    },
    {
      "id": "med-stuffed-bell-peppers",
      "title": "Mediterranean Herb-Stuffed Bell Peppers",
      "subtitle": "Sweet bell peppers baked with spiced black beans, zucchini, carrots, and rice",
      "cuisine": "Mediterranean",
      "category": "slow",
      "image": "./images/med-stuffed-bell-peppers.jpg",
      "prepMinutes": 15,
      "cookMinutes": 25,
      "totalMinutes": 40,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Bell peppers pack more vitamin C per serving than oranges, stuffed with fiber-rich beans and veg.",
      "nutrition": {
        "kcal": 365,
        "protein": "13g",
        "fiber": "10g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "bell-pepper",
          "name": "Large red or yellow bell peppers",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2500,
          "prep": "halved & seeded"
        },
        {
          "id": "black-beans",
          "name": "Pre-boiled black beans",
          "amount": 1,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1500,
          "prep": "drained"
        },
        {
          "id": "courgette",
          "name": "Zucchini (courgette) & carrot",
          "amount": 1,
          "unit": "set",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "finely diced"
        },
        {
          "id": "cooked-rice",
          "name": "Cooked rice",
          "amount": 0.75,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1200,
          "prep": "fluffed"
        },
        {
          "id": "tomatoes",
          "name": "Tomatoes, garlic & oregano",
          "amount": 2,
          "unit": "pcs",
          "aisle": "pantry",
          "estUgx": 1200,
          "prep": "chopped"
        }
      ],
      "steps": [
        {
          "text": "Saute diced zucchini, carrot, garlic, tomatoes, oregano, black beans, and rice in 1 teaspoon oil for 5 minutes.",
          "timerMin": 5
        },
        {
          "text": "Spoon filling into halved bell peppers, place in a baking dish (or covered pot with 2 tbsp water), and cook 22 minutes until peppers are tender.",
          "timerMin": 22
        }
      ],
      "ugandaTip": "Drizzle a spoonful of plain yogurt + lemon over the hot peppers right before serving."
    },
    {
      "id": "med-zucchini-chicken-skewers",
      "title": "Grilled Zucchini, Pepper & Chicken Skewers",
      "subtitle": "Herb-marinated chicken and crisp market veggies with cooling yogurt-mint dip",
      "cuisine": "Mediterranean",
      "category": "onepot",
      "image": "./images/med-zucchini-chicken-skewers.jpg",
      "prepMinutes": 12,
      "cookMinutes": 14,
      "totalMinutes": 26,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Lean grilled protein paired with plain yogurt-mint sauce keeps calories low and flavor bright.",
      "nutrition": {
        "kcal": 380,
        "protein": "38g",
        "fiber": "4g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-breast",
          "name": "Skinless chicken breast",
          "amount": 350,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 8500,
          "prep": "2.5cm cubes"
        },
        {
          "id": "courgette",
          "name": "Zucchini (courgette)",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "thick rounds"
        },
        {
          "id": "bell-pepper",
          "name": "Bell pepper & red onion",
          "amount": 1,
          "unit": "set",
          "aisle": "produce",
          "estUgx": 1600,
          "prep": "cut in squares"
        },
        {
          "id": "yogurt",
          "name": "Plain unsweetened yogurt",
          "amount": 0.5,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 2000,
          "prep": "mixed with mint, garlic & lemon"
        },
        {
          "id": "herbs",
          "name": "Garlic, oregano & lemon",
          "amount": 1,
          "unit": "set",
          "aisle": "pantry",
          "estUgx": 900,
          "prep": "marinade"
        }
      ],
      "steps": [
        {
          "text": "Toss chicken cubes, zucchini, bell pepper, and onion with lemon juice, garlic, oregano, paprika, and 1 teaspoon oil."
        },
        {
          "text": "Thread onto skewers (or cook directly in a grill pan) for 12 to 14 minutes, turning until lightly charred and cooked through.",
          "timerMin": 13
        },
        {
          "text": "Serve hot with chilled plain yogurt stirred with chopped mint, grated garlic, and a squeeze of lemon."
        }
      ],
      "ugandaTip": "No skewers needed — sear the chicken and veggies in one hot frying pan for the exact same flavor."
    },
    {
      "id": "med-broccoli-lemon-garlic-bowl",
      "title": "15-Min Lemon-Garlic Broccoli & White Bean Bowl",
      "subtitle": "Crisp-tender broccoli florets sautéed with garlic, olive oil, lemon, and beans",
      "cuisine": "Mediterranean",
      "category": "quick",
      "image": "./images/med-broccoli-lemon-garlic-bowl.jpg",
      "prepMinutes": 5,
      "cookMinutes": 10,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Steaming broccoli briefly preserves sulforaphane and vitamin C while white beans add clean protein.",
      "nutrition": {
        "kcal": 320,
        "protein": "15g",
        "fiber": "10g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "broccoli",
          "name": "Fresh broccoli florets",
          "amount": 300,
          "unit": "g",
          "aisle": "greens",
          "estUgx": 4000,
          "prep": "bite-sized"
        },
        {
          "id": "white-beans",
          "name": "Pre-boiled white or black beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "rinsed"
        },
        {
          "id": "garlic",
          "name": "Fresh garlic cloves",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "thinly sliced"
        },
        {
          "id": "lemon",
          "name": "Fresh lemon & olive oil",
          "amount": 1,
          "unit": "pcs",
          "aisle": "pantry",
          "estUgx": 1200,
          "prep": "zest & juice"
        }
      ],
      "steps": [
        {
          "text": "Steam or blanch broccoli florets in 1/4 cup simmering water in a covered pan for 3 minutes until bright emerald green.",
          "timerMin": 3
        },
        {
          "text": "Drain excess water, drizzle 1 tablespoon olive oil, and saute sliced garlic and beans with the broccoli for 3 minutes."
        },
        {
          "text": "Finish off heat with lemon zest, lemon juice, chili flakes, and black pepper."
        }
      ],
      "ugandaTip": "Fresh broccoli is easiest to find at Nakasero Market, Carrefour, or Quality Supermarket."
    },
    {
      "id": "italian-zucchini-pepper-bean-skillet",
      "title": "15-Min Italian Zucchini, Bell Pepper & Bean Skillet",
      "subtitle": "Rustic one-pan courgette, sweet peppers, tomatoes, garlic, and tender beans",
      "cuisine": "Italian",
      "category": "quick",
      "image": "./images/italian-zucchini-pepper-bean-skillet.jpg",
      "prepMinutes": 6,
      "cookMinutes": 9,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Low-calorie Mediterranean vegetables cooked fast in olive oil and herbs make an effortless dinner.",
      "nutrition": {
        "kcal": 305,
        "protein": "13g",
        "fiber": "9g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "courgette",
          "name": "Zucchini (courgettes)",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "half-moons"
        },
        {
          "id": "bell-pepper",
          "name": "Red & green bell peppers",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "sliced strips"
        },
        {
          "id": "white-beans",
          "name": "Pre-boiled white or black beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 2000,
          "prep": "drained"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "herbs",
          "name": "Mixed herbs (oregano/thyme)",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 400,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Saute sliced bell peppers and zucchini in 1 tablespoon olive oil over medium-high heat for 5 minutes until lightly seared.",
          "timerMin": 5
        },
        {
          "text": "Add garlic, oregano, diced tomatoes, and beans; simmer 4 minutes until saucy and fragrant.",
          "timerMin": 4
        }
      ],
      "ugandaTip": "Serve on its own for a light evening meal or spoon over a small portion of whole-wheat pasta."
    },
    {
      "id": "italian-broccoli-cauliflower-chicken-tray",
      "title": "Italian Herb-Roasted Broccoli, Cauliflower & Chicken",
      "subtitle": "One-tray roast of lean chicken, broccoli, cauliflower, carrots, and rosemary",
      "cuisine": "Italian",
      "category": "slow",
      "image": "./images/italian-broccoli-cauliflower-chicken-tray.jpg",
      "prepMinutes": 12,
      "cookMinutes": 28,
      "totalMinutes": 40,
      "servings": 3,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Cruciferous florets plus lean chicken give high volume and protein with zero heavy sauces.",
      "nutrition": {
        "kcal": 390,
        "protein": "37g",
        "fiber": "7g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-breast",
          "name": "Skinless chicken breast or thighs",
          "amount": 450,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 10500,
          "prep": "chunked"
        },
        {
          "id": "broccoli",
          "name": "Fresh broccoli",
          "amount": 250,
          "unit": "g",
          "aisle": "greens",
          "estUgx": 3500,
          "prep": "florets"
        },
        {
          "id": "cauliflower",
          "name": "Fresh cauliflower",
          "amount": 250,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 3000,
          "prep": "florets"
        },
        {
          "id": "carrots",
          "name": "Carrots",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "sliced rounds"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "herbs",
          "name": "Mixed herbs (oregano/thyme)",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 400,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Toss chicken, carrots, and cauliflower with garlic, herbs, salt, and 1 tablespoon oil; roast at 200C for 15 minutes.",
          "timerMin": 15
        },
        {
          "text": "Add broccoli florets to the tray and roast 12 more minutes so broccoli turns crisp-tender without burning. Finish with lemon juice.",
          "timerMin": 12
        }
      ],
      "ugandaTip": "Adding broccoli halfway keeps it vibrant green instead of overcooked."
    },
    {
      "id": "italian-creamy-cauliflower-garlic-soup",
      "title": "Velvety Italian Roasted Garlic & Cauliflower Soup",
      "subtitle": "Naturally creamy dairy-free soup blended smooth with thyme and black pepper",
      "cuisine": "Italian",
      "category": "onepot",
      "image": "./images/italian-creamy-cauliflower-garlic-soup.jpg",
      "prepMinutes": 8,
      "cookMinutes": 18,
      "totalMinutes": 26,
      "servings": 3,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Blended cauliflower creates restaurant-style creaminess with zero heavy cream and under 180 kcal.",
      "nutrition": {
        "kcal": 165,
        "protein": "6g",
        "fiber": "6g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cauliflower",
          "name": "Fresh cauliflower",
          "amount": 500,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 5000,
          "prep": "roughly chopped"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "carrots",
          "name": "Carrot or white potato",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "diced"
        },
        {
          "id": "herbs",
          "name": "Thyme, rosemary & olive oil",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 800,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Saute chopped onion and garlic in 1 teaspoon olive oil for 3 minutes until sweet and fragrant."
        },
        {
          "text": "Add cauliflower, diced carrot, thyme, salt, and 3.5 cups water; cover and simmer 15 minutes until completely tender.",
          "timerMin": 15
        },
        {
          "text": "Blend smooth in your blender, taste for salt and cracked black pepper, and drizzle 1/2 teaspoon olive oil on top."
        }
      ],
      "ugandaTip": "Top with toasted simsim seeds or roasted black beans for a crunchy high-protein garnish."
    },
    {
      "id": "italian-sukuma-garlic-spaghetti",
      "title": "15-Min Italian Sukuma Wiki, Garlic & Chili Spaghetti",
      "subtitle": "Light aglio e olio pasta tossed with bright Ugandan sukuma greens and lemon",
      "cuisine": "Italian",
      "category": "quick",
      "image": "./images/italian-sukuma-garlic-spaghetti.jpg",
      "prepMinutes": 5,
      "cookMinutes": 10,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "A 50/50 mix of whole-wheat pasta and iron-rich sukuma greens cuts calories while boosting micronutrients.",
      "nutrition": {
        "kcal": 365,
        "protein": "12g",
        "fiber": "8g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "spaghetti",
          "name": "Whole-wheat spaghetti",
          "amount": 160,
          "unit": "g",
          "aisle": "grains",
          "estUgx": 3200,
          "prep": "dry"
        },
        {
          "id": "sukuma",
          "name": "Fresh sukuma wiki",
          "amount": 1,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 1000,
          "prep": "finely ribboned"
        },
        {
          "id": "garlic",
          "name": "Fresh garlic cloves",
          "amount": 4,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "thinly sliced"
        },
        {
          "id": "lemon",
          "name": "Fresh lemon, chili & olive oil",
          "amount": 1,
          "unit": "set",
          "aisle": "pantry",
          "estUgx": 1200,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Boil spaghetti in salted water for 9 minutes, dropping the ribboned sukuma wiki into the pasta pot for the final 2 minutes.",
          "timerMin": 9
        },
        {
          "text": "Warm sliced garlic and chili flakes gently in 1 tablespoon olive oil for 1 minute until golden."
        },
        {
          "text": "Toss drained pasta and bright greens into the garlic oil with a splash of pasta water and fresh lemon juice."
        }
      ],
      "ugandaTip": "Adding sukuma straight into the boiling pasta water for the last 2 minutes saves a pot and keeps it vibrant."
    },
    {
      "id": "asian-chicken-broccoli-stirfry",
      "title": "15-Min Asian Chicken & Broccoli Stir-Fry",
      "subtitle": "Tender chicken breast and crisp broccoli florets glazed in ginger-garlic soy",
      "cuisine": "Asian",
      "category": "quick",
      "image": "./images/asian-chicken-broccoli-stirfry.jpg",
      "prepMinutes": 6,
      "cookMinutes": 9,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Classic high-protein fitness meal with crisp cruciferous greens and minimal oil.",
      "nutrition": {
        "kcal": 350,
        "protein": "36g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "chicken-breast",
          "name": "Skinless chicken breast",
          "amount": 320,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 8000,
          "prep": "thin slices"
        },
        {
          "id": "broccoli",
          "name": "Fresh broccoli florets",
          "amount": 250,
          "unit": "g",
          "aisle": "greens",
          "estUgx": 3500,
          "prep": "cut small"
        },
        {
          "id": "carrots",
          "name": "Carrot",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "thin coins"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        },
        {
          "id": "soy-sauce",
          "name": "Light soy sauce & lime",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 800,
          "prep": "mixed with 3 tbsp water"
        }
      ],
      "steps": [
        {
          "text": "Sear chicken slices in 1 teaspoon oil over high heat for 4 minutes until browned, then set aside briefly.",
          "timerMin": 4
        },
        {
          "text": "Toss broccoli, carrots, ginger, and garlic in the hot pan with 2 tablespoons water; cover 2 minutes to steam-crisp."
        },
        {
          "text": "Return chicken, pour in soy-lime mixture, and toss 2 minutes until glossy.",
          "timerMin": 2
        }
      ],
      "ugandaTip": "Cutting broccoli florets small helps them steam-sear tender in 2 minutes flat."
    },
    {
      "id": "asian-cauliflower-carrot-fried-rice",
      "title": "15-Min Cauliflower, Carrot & Egg \"Fried Rice\"",
      "subtitle": "Light grated cauliflower wok-tossed with carrots, cabbage, ginger, and eggs",
      "cuisine": "Asian",
      "category": "quick",
      "image": "./images/asian-cauliflower-carrot-fried-rice.jpg",
      "prepMinutes": 7,
      "cookMinutes": 8,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Grating cauliflower into rice-sized grains cuts calories in half while doubling your daily vegetable intake.",
      "nutrition": {
        "kcal": 235,
        "protein": "14g",
        "fiber": "7g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cauliflower",
          "name": "Fresh cauliflower",
          "amount": 350,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 4000,
          "prep": "grated on coarse box grater"
        },
        {
          "id": "eggs",
          "name": "Farm eggs",
          "amount": 3,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 1800,
          "prep": "beaten"
        },
        {
          "id": "carrots",
          "name": "Carrots & cabbage",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "finely diced"
        },
        {
          "id": "bell-pepper",
          "name": "Bell pepper",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "diced"
        },
        {
          "id": "soy-sauce",
          "name": "Light soy sauce",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        }
      ],
      "steps": [
        {
          "text": "Scramble beaten eggs in 1 teaspoon oil for 1 minute and push to the pan edge."
        },
        {
          "text": "Stir-fry carrots, bell pepper, cabbage, ginger, and garlic over high heat for 3 minutes.",
          "timerMin": 3
        },
        {
          "text": "Add grated cauliflower and soy sauce; toss uncovered on high heat for 4 minutes until tender and fluffy.",
          "timerMin": 4
        }
      ],
      "ugandaTip": "A standard kitchen box grater turns cauliflower into perfect \"rice\" in 2 minutes — no food processor required."
    },
    {
      "id": "asian-sesame-cabbage-pepper-bowl",
      "title": "Asian Sesame Cabbage, Zucchini & Pepper Crunch Bowl",
      "subtitle": "Rainbow shredded cabbage, zucchini ribbons, carrots, and bell peppers in lime-soy",
      "cuisine": "Asian",
      "category": "salads",
      "image": "./images/asian-sesame-cabbage-pepper-bowl.jpg",
      "prepMinutes": 12,
      "cookMinutes": 0,
      "totalMinutes": 12,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Five raw colorful vegetables deliver enzymes, crunch, and gut-loving prebiotic fiber.",
      "nutrition": {
        "kcal": 195,
        "protein": "6g",
        "fiber": "8g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cabbage",
          "name": "Green & purple cabbage",
          "amount": 200,
          "unit": "g",
          "aisle": "greens",
          "estUgx": 1200,
          "prep": "thinly shredded"
        },
        {
          "id": "courgette",
          "name": "Young fresh zucchini",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "peeled into thin ribbons"
        },
        {
          "id": "carrots",
          "name": "Carrots & red bell pepper",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "thin matchsticks"
        },
        {
          "id": "simsim",
          "name": "Toasted simsim & crushed g-nuts",
          "amount": 2,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 900,
          "prep": "crunchy topping"
        },
        {
          "id": "soy-sauce",
          "name": "Light soy sauce",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        }
      ],
      "steps": [
        {
          "text": "Combine shredded cabbage, zucchini ribbons, carrot matchsticks, and thin bell pepper strips in a large bowl."
        },
        {
          "text": "Whisk fresh lime juice, grated ginger, light soy sauce, and 1 teaspoon oil; toss thoroughly and scatter toasted simsim."
        }
      ],
      "ugandaTip": "Use a vegetable peeler to shave raw zucchini into delicate noodle ribbons."
    },
    {
      "id": "asian-ginger-glazed-cauliflower-broccoli",
      "title": "Asian Ginger-Garlic Glazed Cauliflower & Broccoli",
      "subtitle": "Seared broccoli, cauliflower, and sweet bell pepper in glossy ginger-lime glaze",
      "cuisine": "Asian",
      "category": "onepot",
      "image": "./images/asian-ginger-glazed-cauliflower-broccoli.jpg",
      "prepMinutes": 8,
      "cookMinutes": 12,
      "totalMinutes": 20,
      "servings": 2,
      "tags": [
        "Plant-Forward",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Double cruciferous vegetables cooked quickly retain crunch, potassium, and anti-inflammatory compounds.",
      "nutrition": {
        "kcal": 215,
        "protein": "8g",
        "fiber": "8g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "cauliflower",
          "name": "Fresh cauliflower",
          "amount": 250,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 3000,
          "prep": "small florets"
        },
        {
          "id": "broccoli",
          "name": "Fresh broccoli",
          "amount": 250,
          "unit": "g",
          "aisle": "greens",
          "estUgx": 3500,
          "prep": "small florets"
        },
        {
          "id": "bell-pepper",
          "name": "Red bell pepper",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "chunked"
        },
        {
          "id": "soy-sauce",
          "name": "Light soy sauce",
          "amount": 1.5,
          "unit": "tbsp",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "measured"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 1,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 400,
          "prep": "grated"
        },
        {
          "id": "simsim",
          "name": "Toasted simsim seeds",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 400,
          "prep": "garnish"
        }
      ],
      "steps": [
        {
          "text": "Sear cauliflower florets and bell pepper in 1 teaspoon oil for 5 minutes with a 2-tablespoon splash of water.",
          "timerMin": 5
        },
        {
          "text": "Add broccoli, ginger, garlic, and soy-lime glaze; toss 4 minutes over high heat until bright and lightly coated. Finish with toasted simsim.",
          "timerMin": 4
        }
      ],
      "ugandaTip": "Pair with a soft-boiled egg or grilled tilapia fillet for a complete high-protein meal."
    },
    {
      "id": "lean-mince-tomato-pasta",
      "title": "Lean Beef Mince, Tomato & Carrot Spaghetti",
      "subtitle": "High-protein lean beef ragu simmered with sweet carrots, garlic, and whole-wheat pasta",
      "cuisine": "Italian",
      "category": "quick",
      "image": "./images/lean-mince-tomato-pasta.jpg",
      "prepMinutes": 6,
      "cookMinutes": 14,
      "totalMinutes": 20,
      "servings": 3,
      "tags": [
        "High-Protein",
        "Low-Sugar"
      ],
      "healthNote": "Grating carrots into lean beef mince boosts fiber and natural sweetness with zero jar sugar.",
      "nutrition": {
        "kcal": 445,
        "protein": "32g",
        "fiber": "7g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "beef-mince",
          "name": "Lean beef mince",
          "amount": 350,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 8500,
          "prep": "fat drained after browning"
        },
        {
          "id": "spaghetti",
          "name": "Whole-wheat or durum spaghetti",
          "amount": 220,
          "unit": "g",
          "aisle": "grains",
          "estUgx": 3500,
          "prep": "dry"
        },
        {
          "id": "tomatoes",
          "name": "Ripe market tomatoes",
          "amount": 4,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "grated or blended"
        },
        {
          "id": "carrots",
          "name": "Sweet carrots",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "finely grated"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        }
      ],
      "steps": [
        {
          "text": "Brown lean beef mince in a dry hot pan for 5 minutes until crumbly, draining off excess liquid if needed.",
          "timerMin": 5
        },
        {
          "text": "Add onion, garlic, grated carrots, oregano, and grated tomatoes; simmer covered 9 minutes while spaghetti boils al dente.",
          "timerMin": 9
        },
        {
          "text": "Toss drained spaghetti with the thick mince sauce and a splash of pasta water."
        }
      ],
      "ugandaTip": "Grated carrots melt into the tomato sauce and replace added sugar completely."
    },
    {
      "id": "healthy-mince-irish-shepherd-skillet",
      "title": "One-Pot Lean Mince & Irish Potato Skillet",
      "subtitle": "Savory minced beef simmered with diced Irish potatoes, carrots, and herbs",
      "cuisine": "Ugandan",
      "category": "onepot",
      "image": "./images/healthy-mince-irish-shepherd-skillet.jpg",
      "prepMinutes": 10,
      "cookMinutes": 20,
      "totalMinutes": 30,
      "servings": 3,
      "tags": [
        "High-Protein",
        "Low-Sugar"
      ],
      "healthNote": "One-pot cooking keeps fat low while pairing iron-rich beef mince with potassium-packed Irish potatoes.",
      "nutrition": {
        "kcal": 420,
        "protein": "29g",
        "fiber": "6g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "beef-mince",
          "name": "Lean beef mince",
          "amount": 350,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 8500,
          "prep": "fresh"
        },
        {
          "id": "irish-potatoes",
          "name": "Irish potatoes",
          "amount": 4,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2500,
          "prep": "peeled & 2cm diced"
        },
        {
          "id": "carrots",
          "name": "Carrots & green peas/beans",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "diced"
        },
        {
          "id": "tomatoes",
          "name": "Ripe tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1000,
          "prep": "diced"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "herbs",
          "name": "Thyme & paprika",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 300,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Brown mince with onion, garlic, paprika, and thyme in a dry pot for 5 minutes.",
          "timerMin": 5
        },
        {
          "text": "Add diced Irish potatoes, carrots, tomatoes, and 1.5 cups water; cover and simmer 15 minutes until potatoes are fork-tender.",
          "timerMin": 15
        }
      ],
      "ugandaTip": "Finish with chopped fresh coriander (dhania) or shredded sukuma wiki stirred in for the final minute."
    },
    {
      "id": "ugandan-irish-potato-herb-hash",
      "title": "15-Min Crispy Herb Irish Potatoes & Soft Eggs",
      "subtitle": "Lightly pan-crisped diced Irish potatoes with rosemary, peppers, and farm eggs",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "image": "./images/ugandan-irish-potato-herb-hash.jpg",
      "prepMinutes": 6,
      "cookMinutes": 12,
      "totalMinutes": 18,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Pan-steaming small Irish potato cubes with just 1 teaspoon oil gives crisp edges without deep frying.",
      "nutrition": {
        "kcal": 365,
        "protein": "16g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "irish-potatoes",
          "name": "Irish potatoes",
          "amount": 3,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "small 1cm cubes"
        },
        {
          "id": "eggs",
          "name": "Farm eggs",
          "amount": 3,
          "unit": "pcs",
          "aisle": "protein",
          "estUgx": 1800,
          "prep": "whole"
        },
        {
          "id": "bell-pepper",
          "name": "Bell pepper & onion",
          "amount": 1,
          "unit": "set",
          "aisle": "produce",
          "estUgx": 1200,
          "prep": "diced"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "herbs",
          "name": "Rosemary or thyme",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 400,
          "prep": "chopped or dried"
        }
      ],
      "steps": [
        {
          "text": "Cook 1cm diced Irish potatoes in a covered pan with 1 teaspoon oil and 2 tablespoons water for 7 minutes until tender.",
          "timerMin": 7
        },
        {
          "text": "Uncover, add onion, bell pepper, garlic, and rosemary, and toss 3 minutes until crisp.",
          "timerMin": 3
        },
        {
          "text": "Make small spaces in the pan, crack in the eggs, cover 2 minutes until whites set, and serve warm."
        }
      ],
      "ugandaTip": "Cutting Irish potatoes into small 1cm cubes halves cooking time and skips deep-frying chips."
    },
    {
      "id": "mediterranean-chicken-pasta-salad",
      "title": "Mediterranean Herb Pasta, Cucumber & Chicken Salad",
      "subtitle": "Chilled pasta tossed with crisp cucumber, tomatoes, grilled chicken, and lemon",
      "cuisine": "Mediterranean",
      "category": "salads",
      "image": "./images/mediterranean-chicken-pasta-salad.jpg",
      "prepMinutes": 8,
      "cookMinutes": 9,
      "totalMinutes": 17,
      "servings": 3,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Cooled cooked pasta forms resistant starch while crisp market vegetables keep every bowl refreshing.",
      "nutrition": {
        "kcal": 390,
        "protein": "28g",
        "fiber": "5g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "pasta-shapes",
          "name": "Penne or fusilli pasta",
          "amount": 180,
          "unit": "g",
          "aisle": "grains",
          "estUgx": 3500,
          "prep": "boiled & rinsed cool"
        },
        {
          "id": "chicken-breast",
          "name": "Grilled or leftover chicken breast",
          "amount": 250,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 6500,
          "prep": "diced"
        },
        {
          "id": "cucumber",
          "name": "Cucumber & ripe tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "diced"
        },
        {
          "id": "red-onion",
          "name": "Red onion & fresh coriander",
          "amount": 1,
          "unit": "set",
          "aisle": "greens",
          "estUgx": 800,
          "prep": "finely chopped"
        },
        {
          "id": "lemon",
          "name": "Lemon juice, oregano & 1 tbsp olive oil",
          "amount": 1,
          "unit": "pcs",
          "aisle": "pantry",
          "estUgx": 1000,
          "prep": "whisked dressing"
        }
      ],
      "steps": [
        {
          "text": "Boil pasta 9 minutes until al dente, drain, and rinse briefly under cold water to cool.",
          "timerMin": 9
        },
        {
          "text": "Toss cooled pasta with diced chicken, cucumber, tomatoes, red onion, coriander, lemon juice, oregano, and olive oil."
        }
      ],
      "ugandaTip": "Keeps cleanly in the fridge for 2 days — great ready-made lunch box."
    },
    {
      "id": "creamy-yogurt-irish-potato-salad",
      "title": "No-Mayo Plain Yogurt & Herb Irish Potato Salad",
      "subtitle": "Tender boiled Irish potatoes dressed in plain yogurt, lemon, garlic, and herbs",
      "cuisine": "Mediterranean",
      "category": "salads",
      "image": "./images/creamy-yogurt-irish-potato-salad.jpg",
      "prepMinutes": 10,
      "cookMinutes": 15,
      "totalMinutes": 25,
      "servings": 3,
      "tags": [
        "Light & Lean",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Replacing heavy mayonnaise with plain yogurt cuts calories in half while adding gut-friendly protein.",
      "nutrition": {
        "kcal": 240,
        "protein": "8g",
        "fiber": "4g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "irish-potatoes",
          "name": "Irish potatoes",
          "amount": 500,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 2500,
          "prep": "cubed"
        },
        {
          "id": "yogurt",
          "name": "Plain unsweetened yogurt",
          "amount": 0.5,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 1500,
          "prep": "base dressing"
        },
        {
          "id": "lemon",
          "name": "Lemon juice & minced garlic",
          "amount": 1,
          "unit": "set",
          "aisle": "pantry",
          "estUgx": 600,
          "prep": "whisked with yogurt"
        },
        {
          "id": "spring-onion",
          "name": "Spring onions & coriander",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 600,
          "prep": "chopped"
        }
      ],
      "steps": [
        {
          "text": "Boil cubed Irish potatoes in lightly salted water for 12 minutes until just tender; drain and let cool 5 minutes.",
          "timerMin": 12
        },
        {
          "text": "Whisk plain yogurt, lemon juice, tiny garlic pinch, black pepper, and salt; fold gently over warm potatoes with spring onions and coriander."
        }
      ],
      "ugandaTip": "Add 2 chopped boiled eggs for an instant high-protein lunch."
    },
    {
      "id": "slow-baked-mince-irish-potato-casserole",
      "title": "Healthy Baked Mince & Mashed Irish Potato Pie",
      "subtitle": "Lean spiced beef mince & veggie base topped with olive-oil mashed Irish potatoes",
      "cuisine": "Ugandan",
      "category": "slow",
      "image": "./images/slow-baked-mince-irish-potato-casserole.jpg",
      "prepMinutes": 15,
      "cookMinutes": 35,
      "totalMinutes": 50,
      "servings": 4,
      "tags": [
        "High-Protein",
        "Low-Sugar"
      ],
      "healthNote": "Mashing Irish potatoes with warm cooking water and 1 tbsp olive oil skips heavy butter and cream.",
      "nutrition": {
        "kcal": 415,
        "protein": "28g",
        "fiber": "6g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "beef-mince",
          "name": "Lean beef mince",
          "amount": 400,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 9500,
          "prep": "browned dry"
        },
        {
          "id": "irish-potatoes",
          "name": "Irish potatoes",
          "amount": 600,
          "unit": "g",
          "aisle": "produce",
          "estUgx": 3000,
          "prep": "peeled & quartered"
        },
        {
          "id": "carrots",
          "name": "Carrots & green peas",
          "amount": 1.5,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "finely diced"
        },
        {
          "id": "tomatoes",
          "name": "Tomatoes, onion & garlic",
          "amount": 1,
          "unit": "set",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "chopped"
        },
        {
          "id": "thyme-olive",
          "name": "Thyme, paprika & 1 tbsp olive oil",
          "amount": 1,
          "unit": "set",
          "aisle": "pantry",
          "estUgx": 900,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Boil Irish potatoes 15 minutes until soft, then mash with 1 tablespoon olive oil, garlic pinch, and splash of potato water.",
          "timerMin": 15
        },
        {
          "text": "Brown mince with onion, garlic, carrots, peas, tomatoes, and thyme for 10 minutes until thick.",
          "timerMin": 10
        },
        {
          "text": "Spread mince in a baking dish, spoon mashed Irish potatoes over top, and bake at 200C for 20 minutes until golden.",
          "timerMin": 20
        }
      ],
      "ugandaTip": "No oven? Put the mashed potato layer right over the mince in a wide heavy pot, cover tightly, and cook on very low heat for 10 minutes."
    },
    {
      "id": "mince-cabbage-veggie-soup",
      "title": "Slow-Simmered Mince, Cabbage & Veggie Soup",
      "subtitle": "Rich one-pot lean beef mince simmered slowly with sweet cabbage, carrots, and peppers — great on its own or over pasta, rice, or Irish",
      "cuisine": "Ugandan",
      "category": "onepot",
      "mealSlots": [
        "lunch",
        "dinner"
      ],
      "image": "./images/mince-cabbage-veggie-soup.jpg",
      "prepMinutes": 10,
      "cookMinutes": 35,
      "totalMinutes": 45,
      "servings": 4,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "Low-Sugar"
      ],
      "healthNote": "Slow-simmering lean mince with high-volume cabbage and veggies makes a filling, nutrient-packed pot with minimal oil.",
      "nutrition": {
        "kcal": 295,
        "protein": "26g",
        "fiber": "6g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "beef-mince",
          "name": "Lean beef mince",
          "amount": 400,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 9500,
          "prep": "browned dry, excess fat drained"
        },
        {
          "id": "cabbage",
          "name": "Fresh green cabbage",
          "amount": 0.5,
          "unit": "medium head",
          "aisle": "greens",
          "estUgx": 1500,
          "prep": "coarsely shredded"
        },
        {
          "id": "carrots",
          "name": "Carrots & bell pepper",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "diced"
        },
        {
          "id": "tomatoes",
          "name": "Ripe market tomatoes",
          "amount": 4,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 2000,
          "prep": "chopped or blended"
        },
        {
          "id": "onion",
          "name": "Onion",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 600,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 2,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "minced"
        },
        {
          "id": "coriander",
          "name": "Fresh coriander (dhania)",
          "amount": 0.5,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 500,
          "prep": "chopped for garnish"
        }
      ],
      "steps": [
        {
          "text": "Brown lean beef mince in a dry heavy pot over medium-high heat for 5 minutes until crumbly, draining off any excess surface fat.",
          "timerMin": 5
        },
        {
          "text": "Stir in onion, garlic, ginger, thyme, paprika pinch, and tomatoes; cook 5 minutes until tomatoes soften into a rich base.",
          "timerMin": 5
        },
        {
          "text": "Add diced carrots, bell pepper, shredded cabbage, salt, black pepper, and 3.5 cups water. Cover and simmer gently on low heat for 25 to 30 minutes until the broth is deeply flavorful and veggies are tender.",
          "timerMin": 28
        },
        {
          "text": "Finish with chopped fresh coriander. Enjoy as a hearty bowl on its own, or ladle over boiled Irish potatoes, steamed rice, or pasta."
        }
      ],
      "ugandaTip": "Make a big pot once — eat it straight as a light evening soup, then toss leftovers with pasta or spoon over boiled Irish potatoes or rice for lunch."
    },
    {
      "id": "turmeric-ginger-golden-milk",
      "title": "Warm Turmeric, Ginger & Cinnamon Golden Milk",
      "subtitle": "Soothing cow or soya milk infused with fresh ginger, turmeric, and cinnamon",
      "cuisine": "Ugandan",
      "category": "juices",
      "image": "./images/turmeric-ginger-golden-milk.jpg",
      "prepMinutes": 3,
      "cookMinutes": 5,
      "totalMinutes": 8,
      "servings": 1,
      "tags": [
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Turmeric, ginger, and warm milk calm inflammation and make a comforting zero-sugar evening drink.",
      "nutrition": {
        "kcal": 140,
        "protein": "7g",
        "fiber": "1g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "milk",
          "name": "Cow milk or unsweetened soya milk",
          "amount": 1,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 1500,
          "prep": "chilled"
        },
        {
          "id": "turmeric",
          "name": "Turmeric",
          "amount": 1,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 200,
          "prep": "fresh or ground"
        },
        {
          "id": "ginger",
          "name": "Fresh ginger",
          "amount": 0.5,
          "unit": "thumbs",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "grated"
        },
        {
          "id": "cinnamon",
          "name": "Ground cinnamon or cardamom",
          "amount": 0.25,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 200,
          "prep": "measured"
        }
      ],
      "steps": [
        {
          "text": "Warm cow milk or soya milk in a small saucepan with turmeric, grated ginger, cinnamon, and a pinch of black pepper for 4 minutes without boiling over.",
          "timerMin": 4
        },
        {
          "text": "Strain into a mug and sip warm — no refined sugar needed."
        }
      ],
      "ugandaTip": "Black pepper helps your body absorb turmeric curcumin much better."
    },
    {
      "id": "soya-milk-chia-banana-shake",
      "title": "Creamy Soya Milk, Chia & Banana Protein Shake",
      "subtitle": "Chilled soya or cow milk blended with sweet banana, chia seeds, and cinnamon",
      "cuisine": "Ugandan",
      "category": "juices",
      "image": "./images/soya-milk-chia-banana-shake.jpg",
      "prepMinutes": 5,
      "cookMinutes": 0,
      "totalMinutes": 5,
      "servings": 1,
      "tags": [
        "High-Protein",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Soya milk and chia seeds deliver plant protein and omega-3s with natural sweetness from ripe bogoya banana.",
      "nutrition": {
        "kcal": 245,
        "protein": "11g",
        "fiber": "7g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "milk",
          "name": "Soya milk (or cow milk)",
          "amount": 1,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 1500,
          "prep": "chilled"
        },
        {
          "id": "banana",
          "name": "Ripe yellow banana (bogoya)",
          "amount": 1,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 500,
          "prep": "sliced"
        },
        {
          "id": "chia-seeds",
          "name": "Chia seeds",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 700,
          "prep": "whole"
        },
        {
          "id": "cinnamon",
          "name": "Cinnamon & vanilla pinch",
          "amount": 0.25,
          "unit": "tsp",
          "aisle": "pantry",
          "estUgx": 200,
          "prep": "optional spice"
        }
      ],
      "steps": [
        {
          "text": "Blend chilled soya or cow milk, banana slices, chia seeds, and cinnamon for 30 seconds until frothy and smooth."
        },
        {
          "text": "Pour into a tall glass and drink right away or chill 10 minutes for a thicker shake."
        }
      ],
      "ugandaTip": "Add 1 teaspoon natural groundnut paste if you want an extra post-gym protein boost."
    },
    {
      "id": "milk-soaked-oats-chia-berry-jar",
      "title": "Milk-Soaked Overnight Oats, Chia & Fruit Jar",
      "subtitle": "Rolled oats and chia seeds soaked in cow or soya milk with yogurt and mango",
      "cuisine": "Ugandan",
      "category": "breakfast",
      "image": "./images/milk-soaked-oats-chia-berry-jar.jpg",
      "prepMinutes": 5,
      "cookMinutes": 0,
      "totalMinutes": 5,
      "servings": 1,
      "tags": [
        "High-Protein",
        "Plant-Forward",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Soaking oats overnight in milk and yogurt softens fiber for gentle digestion and effortless mornings.",
      "nutrition": {
        "kcal": 335,
        "protein": "14g",
        "fiber": "9g",
        "sugar": "Natural fruit only"
      },
      "ingredients": [
        {
          "id": "rolled-oats",
          "name": "Rolled oats",
          "amount": 0.5,
          "unit": "cups",
          "aisle": "grains",
          "estUgx": 1000,
          "prep": "dry"
        },
        {
          "id": "milk",
          "name": "Cow milk or soya milk",
          "amount": 0.75,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 1200,
          "prep": "cold"
        },
        {
          "id": "yogurt",
          "name": "Plain unsweetened yogurt",
          "amount": 2,
          "unit": "tbsp",
          "aisle": "protein",
          "estUgx": 600,
          "prep": "creamy boost"
        },
        {
          "id": "chia-seeds",
          "name": "Chia seeds",
          "amount": 1,
          "unit": "tbsp",
          "aisle": "grains",
          "estUgx": 700,
          "prep": "whole"
        },
        {
          "id": "mango",
          "name": "Diced mango, pawpaw or banana",
          "amount": 0.5,
          "unit": "cups",
          "aisle": "produce",
          "estUgx": 800,
          "prep": "fresh topping"
        }
      ],
      "steps": [
        {
          "text": "Combine rolled oats, chia seeds, cinnamon pinch, milk, and plain yogurt in a jar and stir well."
        },
        {
          "text": "Refrigerate overnight (or at least 2 hours), then top with fresh diced mango, pawpaw, or banana before eating."
        }
      ],
      "ugandaTip": "Prepare 2 or 3 jars at once — they stay fresh and creamy in the fridge for up to 3 days."
    },
    {
      "id": "creamy-yogurt-herb-tilapia-bowl",
      "title": "Spiced Tilapia & Garlicky Mint-Yogurt Bowl",
      "subtitle": "Pan-seared turmeric tilapia over cucumber-tomato salad with cooling herb yogurt",
      "cuisine": "Mediterranean",
      "category": "quick",
      "image": "./images/creamy-yogurt-herb-tilapia-bowl.jpg",
      "prepMinutes": 6,
      "cookMinutes": 9,
      "totalMinutes": 15,
      "servings": 2,
      "tags": [
        "High-Protein",
        "Light & Lean",
        "No Red Meat",
        "Low-Sugar"
      ],
      "healthNote": "Crisp spiced tilapia paired with probiotic plain yogurt sauce gives restaurant-grade flavor in 15 minutes.",
      "nutrition": {
        "kcal": 350,
        "protein": "34g",
        "fiber": "4g",
        "sugar": "Low"
      },
      "ingredients": [
        {
          "id": "tilapia-fillet",
          "name": "Fresh tilapia fillets",
          "amount": 320,
          "unit": "g",
          "aisle": "protein",
          "estUgx": 9000,
          "prep": "seasoned with turmeric & cumin"
        },
        {
          "id": "yogurt",
          "name": "Plain unsweetened yogurt",
          "amount": 0.5,
          "unit": "cups",
          "aisle": "protein",
          "estUgx": 1500,
          "prep": "sauce base"
        },
        {
          "id": "cucumber",
          "name": "Cucumber & tomatoes",
          "amount": 2,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 1500,
          "prep": "diced"
        },
        {
          "id": "mint",
          "name": "Fresh mint",
          "amount": 0.25,
          "unit": "bunch",
          "aisle": "greens",
          "estUgx": 300,
          "prep": "chopped"
        },
        {
          "id": "garlic",
          "name": "Garlic",
          "amount": 1,
          "unit": "cloves",
          "aisle": "produce",
          "estUgx": 200,
          "prep": "minced"
        },
        {
          "id": "lemon",
          "name": "Fresh lemon",
          "amount": 0.5,
          "unit": "pcs",
          "aisle": "produce",
          "estUgx": 300,
          "prep": "juiced"
        }
      ],
      "steps": [
        {
          "text": "Rub tilapia fillets with turmeric, cumin, salt, and lemon; sear in 1 teaspoon oil for 4 minutes per side (8 minutes total) until flaky.",
          "timerMin": 8
        },
        {
          "text": "Whisk plain yogurt with minced garlic, chopped mint, and lemon juice; spoon alongside cucumber-tomato salad and warm fish."
        }
      ],
      "ugandaTip": "Swap tilapia for pan-seared chicken strips anytime using the exact same yogurt-mint sauce."
    }
  ]
};
})();
