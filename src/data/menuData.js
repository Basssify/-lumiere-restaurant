// Menu Categories and Items for The Lumière Restaurant & Lounge
// All prices in Nigerian Naira (₦)

export const MENU_CATEGORIES = [
  { id: "all", label: "Complete Menu", count: 20 },
  { id: "starters", label: "Entrées & Starters", count: 4 },
  { id: "mains", label: "Haute Mains", count: 4 },
  { id: "steaks", label: "Prime Steaks & Grills", count: 4 },
  { id: "specials", label: "Chef's Signature Tasting", count: 3 },
  { id: "desserts", label: "Artisanal Desserts", count: 3 },
  { id: "drinks", label: "Mixology & Cellar", count: 2 }
];

export const MENU_ITEMS = [
  // STARTERS
  {
    id: "dish-01",
    name: "Lumière Suya-Spiced Wagyu Carpaccio",
    category: "starters",
    price: 32000,
    rating: 4.9,
    isSignature: true,
    isPopular: true,
    tags: ["Chef's Signature", "Raw Bar", "Spiced"],
    description: "Ultra-thin slices of A5 Miyazaki Wagyu rubbed with artisan Northern Nigerian Yaji spices, micro arugula, pickled chanterelles, and 25-year aged Modena balsamic pearls.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: 2018 Barolo Serralunga"
  },
  {
    id: "dish-02",
    name: "Pan-Seared Atlantic Scallops",
    category: "starters",
    price: 28000,
    rating: 4.8,
    isSignature: false,
    isPopular: true,
    tags: ["Seafood", "Gluten-Free"],
    description: "Jumbo Hokkaido diver scallops crusted in herb panko, cauliflower parsnip purée, crispy Iberian chorizo crumb, and citrus beurre blanc.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Chablis Premier Cru 2020"
  },
  {
    id: "dish-03",
    name: "Truffled Plantain Croquettes",
    category: "starters",
    price: 18500,
    rating: 4.7,
    isSignature: false,
    isPopular: false,
    tags: ["Vegetarian", "Fusion"],
    description: "Sweet caramelized dodo blended with black Périgord truffle paste and aged smoked gouda, golden panko shell, paired with spicy scotch bonnet aioli.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Veuve Clicquot Yellow Label"
  },
  {
    id: "dish-04",
    name: "Smoked Goat Cheese & Golden Beet Tart",
    category: "starters",
    price: 21500,
    rating: 4.7,
    isSignature: false,
    isPopular: false,
    tags: ["Vegetarian", "Artisanal"],
    description: "Whipped French chèvre infused with thyme, roasted heirloom golden beets, candied walnuts, and honeycomb drizzle in a buttery shortcrust shell.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Sancerre Blanc 2021"
  },

  // MAINS
  {
    id: "dish-05",
    name: "Lumière Seafood Jollof Paella",
    category: "mains",
    price: 52000,
    rating: 5.0,
    isSignature: true,
    isPopular: true,
    tags: ["Signature Masterpiece", "Seafood Fusion"],
    description: "Smoky firewood-reduced Jollof arborio rice tossed with charcoal-roasted Atlantic lobster tail, colossal tiger prawns, calamari, calamansi saffron broth, and plantain ribbons.",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Ruinart Rosé Champagne"
  },
  {
    id: "dish-06",
    name: "Sous-Vide Chilean Seabass",
    category: "mains",
    price: 46000,
    rating: 4.9,
    isSignature: false,
    isPopular: true,
    tags: ["Gluten-Free", "Chef's Cut"],
    description: "Glazed in miso mirin reduction, served over lemongrass velouté, sautéed baby bok choy, lotus root crisp, and ginger herb oil.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Meursault 2019"
  },
  {
    id: "dish-07",
    name: "Slow-Braised Oxtail Tortelloni",
    category: "mains",
    price: 42500,
    rating: 4.8,
    isSignature: false,
    isPopular: false,
    tags: ["Handmade Pasta", "Rich & Savory"],
    description: "Handcrafted egg pasta parcels filled with 14-hour red wine braised Nigerian oxtail, parmigiano reggiano foam, bone marrow emulsion, and crispy sage.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Brunello di Montalcino 2016"
  },
  {
    id: "dish-08",
    name: "Herb-Crusted Colorado Rack of Lamb",
    category: "mains",
    price: 58000,
    rating: 4.9,
    isSignature: false,
    isPopular: true,
    tags: ["Prime Cut", "Halal"],
    description: "Dijon and rosemary crumb crust, sweet potato fondant, glazed baby carrots, and rosemary-infused lamb jus reduction.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Château Pontet-Canet Pauillac 2015"
  },

  // STEAKS & GRILLS
  {
    id: "dish-09",
    name: "Japanese A5 Miyazaki Wagyu Ribeye (250g)",
    category: "steaks",
    price: 95000,
    rating: 5.0,
    isSignature: true,
    isPopular: true,
    tags: ["A5 Certified", "Rare Cut", "Signature"],
    description: "BMS 11 graded Japanese Wagyu, charcoal grilled over white binchotan, smoked sea salt flakes, freshly grated Shizuoka wasabi, and garlic shoyu glaze.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Opus One 2017"
  },
  {
    id: "dish-10",
    name: "28-Day Dry-Aged Tomahawk (1kg, For Two)",
    category: "steaks",
    price: 140000,
    rating: 4.9,
    isSignature: true,
    isPopular: true,
    tags: ["Sharable", "Dry-Aged", "Spectacle"],
    description: "Prime bone-in ribeye dry-aged in Himalayan salt chambers for 28 days. Carved tableside with smoked compound butter, roasted bone marrow, and three signature reductions.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Caymus Special Selection Cabernet"
  },
  {
    id: "dish-11",
    name: "Prime Black Angus Tenderloin (220g)",
    category: "steaks",
    price: 62000,
    rating: 4.8,
    isSignature: false,
    isPopular: false,
    tags: ["Prime Beef", "Tender"],
    description: "Grass-fed USDA Prime tenderloin, pan-basted with thyme and clarified butter, served with truffled potato mousseline and green peppercorn cognac sauce.",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Stags' Leap Petite Sirah 2018"
  },
  {
    id: "dish-12",
    name: "Charcoal-Grilled Jumbo Tiger Prawns",
    category: "steaks",
    price: 48000,
    rating: 4.8,
    isSignature: false,
    isPopular: true,
    tags: ["Seafood Grill", "Spicy Garlic"],
    description: "Sustainably sourced giant prawns flame-grilled over open wood coals, garlic chili herb emulsion, grilled lime, and roasted baby potatoes.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Pouilly-Fumé La Moynerie 2021"
  },

  // CHEF'S SPECIALS
  {
    id: "dish-13",
    name: "The 24K Gold Royal Ossetra Caviar (50g)",
    category: "specials",
    price: 125000,
    rating: 5.0,
    isSignature: true,
    isPopular: true,
    tags: ["24K Gold", "Luxury Elite"],
    description: "Imperial Ossetra sturgeon caviar served on crystal ice bed, mother-of-pearl spoons, 24K edible gold leaf, warm buckwheat blinis, and crème fraîche.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Dom Pérignon Luminous Vintage"
  },
  {
    id: "dish-14",
    name: "Butter-Poached Brittany Blue Lobster",
    category: "specials",
    price: 78000,
    rating: 4.9,
    isSignature: true,
    isPopular: false,
    tags: ["French Import", "Seafood"],
    description: "Sustainably imported French blue lobster tail slowly poached in Normandy cultured butter, paired with saffron risotto and lobster coral bisque.",
    image: "/images/butter-poached-lobster.jpg",
    pairing: "Suggested pairing: Corton-Charlemagne Grand Cru"
  },
  {
    id: "dish-15",
    name: "24K Gold Crusted Côte de Boeuf",
    category: "specials",
    price: 110000,
    rating: 5.0,
    isSignature: true,
    isPopular: true,
    tags: ["TikTok Viral", "24K Gold", "VIP Exclusive"],
    description: "600g dry-aged ribeye steak wrapped completely in edible 24-karat gold leaf, served with black truffle fries and rich Morel mushroom sauce.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Sassicaia Tenuta San Guido 2018"
  },

  // DESSERTS
  {
    id: "dish-16",
    name: "Valrhona Dark Chocolate Sphere",
    category: "desserts",
    price: 19500,
    rating: 4.9,
    isSignature: true,
    isPopular: true,
    tags: ["Tableside Reveal", "Chocolate"],
    description: "Guanaja 70% dark chocolate dome filled with hazelnut praline mousse and gold sponge, melted tableside with warm salted caramel espresso ganache.",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Taylor's 20-Year Old Tawny Port"
  },
  {
    id: "dish-17",
    name: "Smoked Madagascar Vanilla Mille-Feuille",
    category: "desserts",
    price: 18000,
    rating: 4.8,
    isSignature: false,
    isPopular: false,
    tags: ["Classic French", "Crispy"],
    description: "Caramelized puff pastry layers with Bourbon vanilla diplomat cream, tart raspberry coulis, and edible gold dust.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Château d'Yquem Sauternes"
  },
  {
    id: "dish-18",
    name: "Gold-Dusted Pistachio Fondant",
    category: "desserts",
    price: 22000,
    rating: 4.9,
    isSignature: false,
    isPopular: true,
    tags: ["Warm Molten", "Pistachio"],
    description: "Warm molten Sicilian pistachio cake with liquid white chocolate center, paired with homemade clotted cream gelato and candied rose petals.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=85",
    pairing: "Suggested pairing: Tokaji Aszú 5 Puttonyos"
  },

  // DRINKS & COCKTAILS
  {
    id: "dish-19",
    name: "L'Or Noir (Black Gold Smoked Old Fashioned)",
    category: "drinks",
    price: 18500,
    rating: 5.0,
    isSignature: true,
    isPopular: true,
    tags: ["Signature Cocktail", "Smoked Tableside"],
    description: "Woodford Reserve bourbon infused with roasted cacao nibs, demerara syrup, Angostura bitters, flamed orange peel, enveloped in fragrant hickory wood smoke under a cloche.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=85",
    pairing: "Served with hand-carved ice sphere and 24K gold foil"
  },
  {
    id: "dish-20",
    name: "Lagos Dusk (Hibiscus Royal French 75)",
    category: "drinks",
    price: 16500,
    rating: 4.9,
    isSignature: true,
    isPopular: true,
    tags: ["Cocktail", "Sparkling"],
    description: "Botanist Islay dry gin, artisanal wild hibiscus Zobo reduction, fresh lemon essence, topped with Moët & Chandon Brut Imperial and edible orchid.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",
    pairing: "Chilled crystal flute with gold sugar rim"
  }
];

export const FORMAT_PRICE = (amount) => {
  return "₦" + amount.toLocaleString("en-NG");
};

