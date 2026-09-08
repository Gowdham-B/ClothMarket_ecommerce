export type Platform = "AJIO" | "Amazon" | "Flipkart" | "Myntra" | "Nike" | "Meesho" | "Trends";

export type Product = {
  id: string;
  title: string;
  brand: string;
  category: string;
  subcategory?: string;
  gender?: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  platform: Platform;
  image: string;
  images?: string[];
  colors: string[];
  sizes: string[];
  available: boolean;
  description: string;
  priceHistory: number[];
};

export const products: Product[] = [
  {
    "id": "CM-MSH-001",
    "title": "Oversized Black Denim Casual Shirt",
    "brand": "Roadster",
    "category": "Shirts",
    "subcategory": "Casual Shirts",
    "gender": "Men",
    "price": 899,
    "originalPrice": 1799,
    "rating": 4.4,
    "reviews": 1240,
    "platform": "AJIO",
    "image": "/products/shirts/CM-MSH-001-front.jpg",
    "images": [
      "/products/shirts/CM-MSH-001-front.jpg"
    ],
    "colors": [
      "Black",
      "Washed Charcoal"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "description": "Relaxed-fit washed black denim shirt featuring twin flap pockets, drop shoulders, and buttoned cuffs. Ideal for streetwear layering.",
    "priceHistory": [
      1199,
      1099,
      1099,
      999,
      949,
      899
    ]
  },
  {
    "id": "CM-MSH-002",
    "title": "Classic Oxford Cotton Button-Down Shirt",
    "brand": "Allen Solly",
    "category": "Shirts",
    "subcategory": "Formal Shirts",
    "gender": "Men",
    "price": 1199,
    "originalPrice": 2199,
    "rating": 4.3,
    "reviews": 870,
    "platform": "Myntra",
    "image": "/products/shirts/CM-MSH-002-front.jpg",
    "images": [
      "/products/shirts/CM-MSH-002-front.jpg"
    ],
    "colors": [
      "Light Blue",
      "Classic White"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "available": true,
    "description": "Tailored slim-fit formal shirt crafted in pure breathable Oxford cotton with button-down collar and curved hemline.",
    "priceHistory": [
      1499,
      1399,
      1299,
      1299,
      1199,
      1199
    ]
  },
  {
    "id": "CM-MSH-003",
    "title": "Vintage Plaid Flannel Casual Shirt",
    "brand": "Highlander",
    "category": "Shirts",
    "subcategory": "Casual Shirts",
    "gender": "Men",
    "price": 649,
    "originalPrice": 1599,
    "rating": 4.2,
    "reviews": 2150,
    "platform": "Flipkart",
    "image": "/products/shirts/CM-MSH-003-front.jpg",
    "images": [
      "/products/shirts/CM-MSH-003-front.jpg"
    ],
    "colors": [
      "Red Plaid",
      "Forest Green Plaid"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Brushed heavyweight cotton flannel shirt with buffalo check pattern, warm texture, and casual spread collar.",
    "priceHistory": [
      899,
      799,
      749,
      699,
      649,
      649
    ]
  },
  {
    "id": "CM-MSH-004",
    "title": "Pure Linen Relaxed Resort Shirt",
    "brand": "Zara",
    "category": "Shirts",
    "subcategory": "Resort Shirts",
    "gender": "Men",
    "price": 1899,
    "originalPrice": 2990,
    "rating": 4.5,
    "reviews": 640,
    "platform": "Amazon",
    "image": "/products/shirts/CM-MSH-004-front.jpg",
    "images": [
      "/products/shirts/CM-MSH-004-front.jpg"
    ],
    "colors": [
      "Beige",
      "Olive",
      "White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Breezy French linen shirt with camp collar, short sleeves, and relaxed silhouette. Built for sunny getaways and summer lounging.",
    "priceHistory": [
      2490,
      2290,
      2090,
      1990,
      1899,
      1899
    ]
  },
  {
    "id": "CM-MSH-005",
    "title": "Slim Fit Micro-Print Cotton Formal Shirt",
    "brand": "Van Heusen",
    "category": "Shirts",
    "subcategory": "Formal Shirts",
    "gender": "Men",
    "price": 1049,
    "originalPrice": 1999,
    "rating": 4.1,
    "reviews": 512,
    "platform": "Trends",
    "image": "/products/shirts/CM-MSH-005-front.jpg",
    "images": [
      "/products/shirts/CM-MSH-005-front.jpg"
    ],
    "colors": [
      "Navy Blue",
      "Charcoal"
    ],
    "sizes": [
      "39",
      "40",
      "42",
      "44"
    ],
    "available": true,
    "description": "Wrinkle-resistant fine cotton formal shirt boasting understated geometric micro-prints and an easy-iron finish.",
    "priceHistory": [
      1399,
      1299,
      1199,
      1149,
      1049,
      1049
    ]
  },
  {
    "id": "CM-MSH-006",
    "title": "Mandarin Collar Textured Cotton Shirt",
    "brand": "FabIndia",
    "category": "Shirts",
    "subcategory": "Casual Shirts",
    "gender": "Men",
    "price": 1399,
    "originalPrice": 1899,
    "rating": 4.6,
    "reviews": 930,
    "platform": "Myntra",
    "image": "/products/shirts/CM-MSH-006-front.jpg",
    "images": [
      "/products/shirts/CM-MSH-006-front.jpg"
    ],
    "colors": [
      "Earthy Mustard",
      "Natural Off-White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Slub-cotton casual shirt highlighted by a clean mandarin collar, wooden buttons, and half-placket detailing.",
    "priceHistory": [
      1699,
      1599,
      1499,
      1399,
      1399,
      1399
    ]
  },
  {
    "id": "CM-MSH-007",
    "title": "Cuban Collar Tropical Printed Shirt",
    "brand": "H&M",
    "category": "Shirts",
    "subcategory": "Casual Shirts",
    "gender": "Men",
    "price": 799,
    "originalPrice": 1499,
    "rating": 4.3,
    "reviews": 1420,
    "platform": "AJIO",
    "image": "/products/shirts/CM-MSH-007-front.jpg",
    "images": [
      "/products/shirts/CM-MSH-007-front.jpg"
    ],
    "colors": [
      "Sage Botanical",
      "Navy Floral"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Flowy viscose shirt with an open notched collar, subtle drape, and artistic tropical palm leaf patterns.",
    "priceHistory": [
      1199,
      999,
      899,
      849,
      799,
      799
    ]
  },
  {
    "id": "CM-MSH-008",
    "title": "Checked Heavy Cotton Overshirt",
    "brand": "Jack & Jones",
    "category": "Shirts",
    "subcategory": "Overshirts",
    "gender": "Men",
    "price": 1599,
    "originalPrice": 3299,
    "rating": 4.4,
    "reviews": 780,
    "platform": "Amazon",
    "image": "/products/shirts/CM-MSH-008-front.jpg",
    "images": [
      "/products/shirts/CM-MSH-008-front.jpg"
    ],
    "colors": [
      "Brown Plaid",
      "Monochrome Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": false,
    "description": "Heavyweight utility overshirt with deep chest pockets, snap closures, and durable twill cotton construction.",
    "priceHistory": [
      2199,
      1999,
      1899,
      1699,
      1599,
      1599
    ]
  },
  {
    "id": "CM-MTS-001",
    "title": "Heavyweight Boxy Drop-Shoulder T-Shirt",
    "brand": "Souled Store",
    "category": "T-Shirts",
    "subcategory": "Oversized Tees",
    "gender": "Men",
    "price": 699,
    "originalPrice": 1299,
    "rating": 4.5,
    "reviews": 3100,
    "platform": "Myntra",
    "image": "/products/t-shirts/CM-MTS-001-front.jpg",
    "images": [
      "/products/t-shirts/CM-MTS-001-front.jpg"
    ],
    "colors": [
      "Sage Green",
      "Jet Black",
      "Off White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "description": "240 GSM combed cotton oversized streetwear tee with ribbed crew neck, structured boxy silhouette, and minimal branding.",
    "priceHistory": [
      999,
      899,
      799,
      749,
      699,
      699
    ]
  },
  {
    "id": "CM-MTS-002",
    "title": "Classic Pima Cotton Crew Neck Tee",
    "brand": "Marks & Spencer",
    "category": "T-Shirts",
    "subcategory": "Basic Tees",
    "gender": "Men",
    "price": 849,
    "originalPrice": 1499,
    "rating": 4.6,
    "reviews": 980,
    "platform": "AJIO",
    "image": "/products/t-shirts/CM-MTS-002-front.jpg",
    "images": [
      "/products/t-shirts/CM-MTS-002-front.jpg"
    ],
    "colors": [
      "Navy Blue",
      "Heather Grey",
      "Pure White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Ultra-soft Peruvian Pima cotton tee with natural stretch, color-lock tech, and clean tailored seams.",
    "priceHistory": [
      1199,
      1099,
      999,
      899,
      849,
      849
    ]
  },
  {
    "id": "CM-MTS-003",
    "title": "Graphic Vintage Typography T-Shirt",
    "brand": "Roadster",
    "category": "T-Shirts",
    "subcategory": "Graphic Tees",
    "gender": "Men",
    "price": 399,
    "originalPrice": 999,
    "rating": 4.1,
    "reviews": 4200,
    "platform": "Flipkart",
    "image": "/products/t-shirts/CM-MTS-003-front.jpg",
    "images": [
      "/products/t-shirts/CM-MTS-003-front.jpg"
    ],
    "colors": [
      "Vintage Mustard",
      "Faded Rust"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Bio-washed cotton graphic tee featuring retro California typography print and ribbed collar.",
    "priceHistory": [
      599,
      499,
      449,
      399,
      399,
      399
    ]
  },
  {
    "id": "CM-MTS-004",
    "title": "Solid Pique Cotton Polo T-Shirt",
    "brand": "U.S. Polo Assn.",
    "category": "T-Shirts",
    "subcategory": "Polo T-Shirts",
    "gender": "Men",
    "price": 999,
    "originalPrice": 1899,
    "rating": 4.3,
    "reviews": 1820,
    "platform": "Amazon",
    "image": "/products/t-shirts/CM-MTS-004-front.jpg",
    "images": [
      "/products/t-shirts/CM-MTS-004-front.jpg"
    ],
    "colors": [
      "Crimson Red",
      "Royal Blue",
      "Forest Green"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "description": "Classic honeycomb pique polo with signature embroidered crest, ribbed armbands, and 2-button placket.",
    "priceHistory": [
      1399,
      1299,
      1199,
      1099,
      999,
      999
    ]
  },
  {
    "id": "CM-MTS-005",
    "title": "Acid Wash Street Culture Oversized Tee",
    "brand": "Bewakoof",
    "category": "T-Shirts",
    "subcategory": "Oversized Tees",
    "gender": "Men",
    "price": 499,
    "originalPrice": 1199,
    "rating": 4.2,
    "reviews": 2650,
    "platform": "Meesho",
    "image": "/products/t-shirts/CM-MTS-005-front.jpg",
    "images": [
      "/products/t-shirts/CM-MTS-005-front.jpg"
    ],
    "colors": [
      "Mineral Wash Black",
      "Dusty Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Heavy mineral acid-washed casual tee with raw edge aesthetics and drop-shoulder relaxed cut.",
    "priceHistory": [
      699,
      599,
      549,
      499,
      499,
      499
    ]
  },
  {
    "id": "CM-MTS-006",
    "title": "Dri-FIT Breathable Training T-Shirt",
    "brand": "Nike",
    "category": "T-Shirts",
    "subcategory": "Sports Tees",
    "gender": "Men",
    "price": 1495,
    "originalPrice": 1995,
    "rating": 4.7,
    "reviews": 1430,
    "platform": "Nike",
    "image": "/products/t-shirts/CM-MTS-006-front.jpg",
    "images": [
      "/products/t-shirts/CM-MTS-006-front.jpg"
    ],
    "colors": [
      "Black / Reflective Silver",
      "Obsidian"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Moisture-wicking athletic tee engineered with sweat-dispersion technology to keep you dry through strenuous gym sets.",
    "priceHistory": [
      1895,
      1795,
      1695,
      1495,
      1495,
      1495
    ]
  },
  {
    "id": "CM-MTS-007",
    "title": "Striped Nautical Crew Neck T-Shirt",
    "brand": "Trends",
    "category": "T-Shirts",
    "subcategory": "Striped Tees",
    "gender": "Men",
    "price": 449,
    "originalPrice": 899,
    "rating": 4,
    "reviews": 730,
    "platform": "Trends",
    "image": "/products/t-shirts/CM-MTS-007-front.jpg",
    "images": [
      "/products/t-shirts/CM-MTS-007-front.jpg"
    ],
    "colors": [
      "Navy & White",
      "Black & Cream"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Yarn-dyed horizontal striped cotton tee with comfortable crew neck and regular daily fit.",
    "priceHistory": [
      699,
      599,
      499,
      449,
      449,
      449
    ]
  },
  {
    "id": "CM-MTS-008",
    "title": "Waffle Knit Thermal Raglan Tee",
    "brand": "H&M",
    "category": "T-Shirts",
    "subcategory": "Long Sleeve Tees",
    "gender": "Men",
    "price": 899,
    "originalPrice": 1499,
    "rating": 4.3,
    "reviews": 620,
    "platform": "Myntra",
    "image": "/products/t-shirts/CM-MTS-008-front.jpg",
    "images": [
      "/products/t-shirts/CM-MTS-008-front.jpg"
    ],
    "colors": [
      "Charcoal",
      "Oatmeal"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": false,
    "description": "Textured honeycomb waffle knit long-sleeve tee with raglan sleeves and ribbed cuffs for cozy layering.",
    "priceHistory": [
      1299,
      1199,
      999,
      899,
      899,
      899
    ]
  },
  {
    "id": "CM-MJN-001",
    "title": "511 Slim Fit Stretch Denim Jeans",
    "brand": "Levi's",
    "category": "Jeans",
    "subcategory": "Slim Jeans",
    "gender": "Men",
    "price": 1999,
    "originalPrice": 3999,
    "rating": 4.5,
    "reviews": 3890,
    "platform": "Amazon",
    "image": "/products/jeans/CM-MJN-001-front.jpg",
    "images": [
      "/products/jeans/CM-MJN-001-front.jpg"
    ],
    "colors": [
      "Dark Indigo",
      "Light Stone Wash"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "available": true,
    "description": "The iconic modern slim cut with room to move. Built with premium stretch denim that holds its shape all day long.",
    "priceHistory": [
      2799,
      2499,
      2299,
      2199,
      1999,
      1999
    ]
  },
  {
    "id": "CM-MJN-002",
    "title": "Vintage Loose Fit Baggy Skater Jeans",
    "brand": "Spykar",
    "category": "Jeans",
    "subcategory": "Baggy Jeans",
    "gender": "Men",
    "price": 1299,
    "originalPrice": 2899,
    "rating": 4.3,
    "reviews": 1450,
    "platform": "Flipkart",
    "image": "/products/jeans/CM-MJN-002-front.jpg",
    "images": [
      "/products/jeans/CM-MJN-002-front.jpg"
    ],
    "colors": [
      "Vintage Washed Blue",
      "Dirty Wash Grey"
    ],
    "sizes": [
      "28",
      "30",
      "32",
      "34"
    ],
    "available": true,
    "description": "90s nostalgic relaxed baggy jeans with a wide-leg profile, mid-rise waist, and vintage fading around the thighs.",
    "priceHistory": [
      1799,
      1599,
      1499,
      1399,
      1299,
      1299
    ]
  },
  {
    "id": "CM-MJN-003",
    "title": "Tapered Fit Clean Black Stretch Jeans",
    "brand": "Wrangler",
    "category": "Jeans",
    "subcategory": "Tapered Jeans",
    "gender": "Men",
    "price": 1499,
    "originalPrice": 2999,
    "rating": 4.4,
    "reviews": 920,
    "platform": "AJIO",
    "image": "/products/jeans/CM-MJN-003-front.jpg",
    "images": [
      "/products/jeans/CM-MJN-003-front.jpg"
    ],
    "colors": [
      "Pitch Black"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "available": true,
    "description": "Deep jet-black sulfur dyed denim that resists color fading. Tapered through the ankle for a clean sneaker drop.",
    "priceHistory": [
      1999,
      1799,
      1699,
      1499,
      1499,
      1499
    ]
  },
  {
    "id": "CM-MJN-004",
    "title": "Mid-Rise Distressed Knee Cut Jeans",
    "brand": "Flying Machine",
    "category": "Jeans",
    "subcategory": "Distressed Jeans",
    "gender": "Men",
    "price": 1149,
    "originalPrice": 2499,
    "rating": 4.2,
    "reviews": 1120,
    "platform": "Myntra",
    "image": "/products/jeans/CM-MJN-004-front.jpg",
    "images": [
      "/products/jeans/CM-MJN-004-front.jpg"
    ],
    "colors": [
      "Faded Ice Blue"
    ],
    "sizes": [
      "30",
      "32",
      "34"
    ],
    "available": true,
    "description": "Edgy distressed jeans with handcrafted slash tears at the knees, whiskering details, and frayed pocket trims.",
    "priceHistory": [
      1599,
      1399,
      1299,
      1149,
      1149,
      1149
    ]
  },
  {
    "id": "CM-MJN-005",
    "title": "Classic Straight Leg Raw Denim Jeans",
    "brand": "Lee",
    "category": "Jeans",
    "subcategory": "Straight Jeans",
    "gender": "Men",
    "price": 1399,
    "originalPrice": 2799,
    "rating": 4.4,
    "reviews": 810,
    "platform": "Trends",
    "image": "/products/jeans/CM-MJN-005-front.jpg",
    "images": [
      "/products/jeans/CM-MJN-005-front.jpg"
    ],
    "colors": [
      "Raw Rigid Navy"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "available": true,
    "description": "Authentic unwashed rigid indigo denim jeans that contour and develop unique personal fade patterns over time.",
    "priceHistory": [
      1899,
      1699,
      1599,
      1399,
      1399,
      1399
    ]
  },
  {
    "id": "CM-MJN-006",
    "title": "Comfort Relaxed Fit Stretch Denim",
    "brand": "Peter England",
    "category": "Jeans",
    "subcategory": "Relaxed Jeans",
    "gender": "Men",
    "price": 799,
    "originalPrice": 1699,
    "rating": 4,
    "reviews": 2310,
    "platform": "Meesho",
    "image": "/products/jeans/CM-MJN-006-front.jpg",
    "images": [
      "/products/jeans/CM-MJN-006-front.jpg"
    ],
    "colors": [
      "Medium Wash Indigo"
    ],
    "sizes": [
      "32",
      "34",
      "36",
      "38"
    ],
    "available": true,
    "description": "Easy-wear everyday denim featuring an elastane blend for flexible bending, walking, and active commutes.",
    "priceHistory": [
      999,
      899,
      849,
      799,
      799,
      799
    ]
  },
  {
    "id": "CM-MJN-007",
    "title": "Selvedge Heritage Indigo Denim Jeans",
    "brand": "Jack & Jones",
    "category": "Jeans",
    "subcategory": "Selvedge Jeans",
    "gender": "Men",
    "price": 2499,
    "originalPrice": 4999,
    "rating": 4.6,
    "reviews": 430,
    "platform": "AJIO",
    "image": "/products/jeans/CM-MJN-007-front.jpg",
    "images": [
      "/products/jeans/CM-MJN-007-front.jpg"
    ],
    "colors": [
      "Deep Indigo Selvedge"
    ],
    "sizes": [
      "30",
      "32",
      "34"
    ],
    "available": false,
    "description": "Woven on vintage shuttle looms with red-line selvedge outseam, heavy copper rivets, and a timeless straight silhouette.",
    "priceHistory": [
      3499,
      2999,
      2799,
      2499,
      2499,
      2499
    ]
  },
  {
    "id": "CM-MTR-001",
    "title": "Slim Fit Stretch Twill Chino Trousers",
    "brand": "Blackberrys",
    "category": "Trousers",
    "subcategory": "Chinos",
    "gender": "Men",
    "price": 1399,
    "originalPrice": 2799,
    "rating": 4.4,
    "reviews": 1340,
    "platform": "Myntra",
    "image": "/products/trousers/CM-MTR-001-front.jpg",
    "images": [
      "/products/trousers/CM-MTR-001-front.jpg"
    ],
    "colors": [
      "Khaki Tan",
      "Olive Green",
      "Charcoal"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "available": true,
    "description": "Versatile smart-casual chinos tailored with smooth stretch-cotton twill, clean welt back pockets, and flat-front waist.",
    "priceHistory": [
      1899,
      1699,
      1499,
      1399,
      1399,
      1399
    ]
  },
  {
    "id": "CM-MTR-002",
    "title": "Multi-Pocket Tactical Cargo Pants",
    "brand": "Roadster",
    "category": "Trousers",
    "subcategory": "Cargo Pants",
    "gender": "Men",
    "price": 1099,
    "originalPrice": 2299,
    "rating": 4.3,
    "reviews": 2190,
    "platform": "AJIO",
    "image": "/products/trousers/CM-MTR-002-front.jpg",
    "images": [
      "/products/trousers/CM-MTR-002-front.jpg"
    ],
    "colors": [
      "Camo Olive",
      "Stealth Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Functional streetwear cargo trousers equipped with 6 utility flap pockets, adjustable ankle toggles, and ripstop cotton fabric.",
    "priceHistory": [
      1499,
      1349,
      1199,
      1099,
      1099,
      1099
    ]
  },
  {
    "id": "CM-MTR-003",
    "title": "Formal Flat Front Poly-Viscose Trousers",
    "brand": "Raymond",
    "category": "Trousers",
    "subcategory": "Formal Trousers",
    "gender": "Men",
    "price": 1499,
    "originalPrice": 2499,
    "rating": 4.5,
    "reviews": 870,
    "platform": "Amazon",
    "image": "/products/trousers/CM-MTR-003-front.jpg",
    "images": [
      "/products/trousers/CM-MTR-003-front.jpg"
    ],
    "colors": [
      "Steel Grey",
      "Dark Navy"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "available": true,
    "description": "Executive-grade formal trousers featuring crease-retention technology, soft viscose blend, and tailored waistband.",
    "priceHistory": [
      1999,
      1799,
      1599,
      1499,
      1499,
      1499
    ]
  },
  {
    "id": "CM-MTR-004",
    "title": "Pleated Relaxed Linen-Blend Trousers",
    "brand": "Zara",
    "category": "Trousers",
    "subcategory": "Relaxed Trousers",
    "gender": "Men",
    "price": 1799,
    "originalPrice": 3290,
    "rating": 4.2,
    "reviews": 510,
    "platform": "Trends",
    "image": "/products/trousers/CM-MTR-004-front.jpg",
    "images": [
      "/products/trousers/CM-MTR-004-front.jpg"
    ],
    "colors": [
      "Sand Beige",
      "Cream"
    ],
    "sizes": [
      "30",
      "32",
      "34"
    ],
    "available": true,
    "description": "Contemporary double-pleated linen trousers offering effortless drape, side slant pockets, and breezy summer charm.",
    "priceHistory": [
      2490,
      2190,
      1990,
      1799,
      1799,
      1799
    ]
  },
  {
    "id": "CM-MTR-005",
    "title": "Everyday Stretch Cotton Tapered Trousers",
    "brand": "John Players",
    "category": "Trousers",
    "subcategory": "Casual Trousers",
    "gender": "Men",
    "price": 799,
    "originalPrice": 1799,
    "rating": 4.1,
    "reviews": 1680,
    "platform": "Flipkart",
    "image": "/products/trousers/CM-MTR-005-front.jpg",
    "images": [
      "/products/trousers/CM-MTR-005-front.jpg"
    ],
    "colors": [
      "Coffee Brown",
      "Slate"
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36"
    ],
    "available": true,
    "description": "Budget-friendly durable daily trousers designed with mid-rise waist and versatile tapered leg openings.",
    "priceHistory": [
      1199,
      999,
      899,
      799,
      799,
      799
    ]
  },
  {
    "id": "CM-MTR-006",
    "title": "Drawstring Elastic Waist Commuter Pants",
    "brand": "H&M",
    "category": "Trousers",
    "subcategory": "Jogger Trousers",
    "gender": "Men",
    "price": 999,
    "originalPrice": 1999,
    "rating": 4.3,
    "reviews": 940,
    "platform": "Myntra",
    "image": "/products/trousers/CM-MTR-006-front.jpg",
    "images": [
      "/products/trousers/CM-MTR-006-front.jpg"
    ],
    "colors": [
      "Dark Khaki",
      "Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": false,
    "description": "Hybrid formal-casual joggers with an internal drawstring waistband, false fly, and cuffed clean hem.",
    "priceHistory": [
      1499,
      1299,
      1199,
      999,
      999,
      999
    ]
  },
  {
    "id": "CM-MJK-001",
    "title": "Faux Leather Asymmetrical Biker Jacket",
    "brand": "Roadster",
    "category": "Jackets",
    "subcategory": "Biker Jackets",
    "gender": "Men",
    "price": 2199,
    "originalPrice": 4999,
    "rating": 4.4,
    "reviews": 1420,
    "platform": "Myntra",
    "image": "/products/jackets/CM-MJK-001-front.jpg",
    "images": [
      "/products/jackets/CM-MJK-001-front.jpg"
    ],
    "colors": [
      "Matte Black"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Edgy moto biker jacket tailored with premium PU leather, silver metal zip hardware, notch lapels, and quilted shoulder panels.",
    "priceHistory": [
      3199,
      2799,
      2499,
      2199,
      2199,
      2199
    ]
  },
  {
    "id": "CM-MJK-002",
    "title": "Sherpa Lined Vintage Trucker Denim Jacket",
    "brand": "Levi's",
    "category": "Jackets",
    "subcategory": "Denim Jackets",
    "gender": "Men",
    "price": 3499,
    "originalPrice": 6999,
    "rating": 4.7,
    "reviews": 2180,
    "platform": "Amazon",
    "image": "/products/jackets/CM-MJK-002-front.jpg",
    "images": [
      "/products/jackets/CM-MJK-002-front.jpg"
    ],
    "colors": [
      "Stonewash Blue",
      "Washed Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Authentic denim trucker jacket insulated with cozy sherpa fleece lining and quilted soft sleeve padding for cold weather warmth.",
    "priceHistory": [
      4999,
      4499,
      3999,
      3499,
      3499,
      3499
    ]
  },
  {
    "id": "CM-MJK-003",
    "title": "Classic Flight Bomber Jacket",
    "brand": "Zara",
    "category": "Jackets",
    "subcategory": "Bomber Jackets",
    "gender": "Men",
    "price": 1999,
    "originalPrice": 3990,
    "rating": 4.3,
    "reviews": 880,
    "platform": "AJIO",
    "image": "/products/jackets/CM-MJK-003-front.jpg",
    "images": [
      "/products/jackets/CM-MJK-003-front.jpg"
    ],
    "colors": [
      "Military Olive",
      "Midnight Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Sleek satin-finish water-resistant bomber jacket featuring ribbed collar, sleeve utility zip pocket, and interior slip pocket.",
    "priceHistory": [
      2990,
      2590,
      2290,
      1999,
      1999,
      1999
    ]
  },
  {
    "id": "CM-MJK-004",
    "title": "Lightweight Quilted Puffer Winter Jacket",
    "brand": "Wildcraft",
    "category": "Jackets",
    "subcategory": "Puffer Jackets",
    "gender": "Men",
    "price": 1699,
    "originalPrice": 3499,
    "rating": 4.5,
    "reviews": 1640,
    "platform": "Flipkart",
    "image": "/products/jackets/CM-MJK-004-front.jpg",
    "images": [
      "/products/jackets/CM-MJK-004-front.jpg"
    ],
    "colors": [
      "Cobalt Blue",
      "Jet Black"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "description": "Feather-light packable puffer jacket filled with thermo-insulation tech and water-repellent micro-ripstop shell.",
    "priceHistory": [
      2499,
      2199,
      1899,
      1699,
      1699,
      1699
    ]
  },
  {
    "id": "CM-MJK-005",
    "title": "Hooded Windbreaker Training Track Jacket",
    "brand": "Nike",
    "category": "Jackets",
    "subcategory": "Sport Jackets",
    "gender": "Men",
    "price": 2995,
    "originalPrice": 4295,
    "rating": 4.6,
    "reviews": 950,
    "platform": "Nike",
    "image": "/products/jackets/CM-MJK-005-front.jpg",
    "images": [
      "/products/jackets/CM-MJK-005-front.jpg"
    ],
    "colors": [
      "Black / White Windrunner"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Heritage chevron design track jacket engineered with lightweight woven taffeta, mesh vent at the back, and adjustable hood.",
    "priceHistory": [
      3895,
      3495,
      3295,
      2995,
      2995,
      2995
    ]
  },
  {
    "id": "CM-MJK-006",
    "title": "Single-Breasted Casual Knit Blazer Jacket",
    "brand": "Allen Solly",
    "category": "Jackets",
    "subcategory": "Blazers",
    "gender": "Men",
    "price": 2499,
    "originalPrice": 5499,
    "rating": 4.2,
    "reviews": 410,
    "platform": "Trends",
    "image": "/products/jackets/CM-MJK-006-front.jpg",
    "images": [
      "/products/jackets/CM-MJK-006-front.jpg"
    ],
    "colors": [
      "Navy Heather"
    ],
    "sizes": [
      "38",
      "40",
      "42"
    ],
    "available": false,
    "description": "Unstructured casual blazer in textured poly-cotton knit with patch pockets, two-button closure, and double back vents.",
    "priceHistory": [
      3999,
      3499,
      2999,
      2499,
      2499,
      2499
    ]
  },
  {
    "id": "CM-MHD-001",
    "title": "Essential Heavyweight Oversized Hoodie",
    "brand": "H&M",
    "category": "Hoodies",
    "subcategory": "Pullover Hoodies",
    "gender": "Men",
    "price": 1299,
    "originalPrice": 2499,
    "rating": 4.2,
    "reviews": 890,
    "platform": "Myntra",
    "image": "/products/hoodies/CM-MHD-001-front.jpg",
    "images": [
      "/products/hoodies/CM-MHD-001-front.jpg"
    ],
    "colors": [
      "Charcoal",
      "Cream Oatmeal",
      "Moss Green"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "320 GSM heavyweight brushed fleece hoodie engineered for easy, oversized layering with double-layer hood and kangaroo pouch.",
    "priceHistory": [
      1599,
      1599,
      1499,
      1399,
      1299,
      1299
    ]
  },
  {
    "id": "CM-MHD-002",
    "title": "Club Fleece Sport Pullover Hoodie",
    "brand": "Nike",
    "category": "Hoodies",
    "subcategory": "Sports Hoodies",
    "gender": "Men",
    "price": 2495,
    "originalPrice": 3695,
    "rating": 4.6,
    "reviews": 610,
    "platform": "Nike",
    "image": "/products/hoodies/CM-MHD-002-front.jpg",
    "images": [
      "/products/hoodies/CM-MHD-002-front.jpg"
    ],
    "colors": [
      "Black",
      "Heather Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "A classic fleece hoodie designed for comfort before and after movement, featuring embroidered Swoosh chest branding.",
    "priceHistory": [
      2995,
      2795,
      2795,
      2495,
      2495,
      2495
    ]
  },
  {
    "id": "CM-MHD-003",
    "title": "Full-Zip French Terry Athletic Hoodie",
    "brand": "Puma",
    "category": "Hoodies",
    "subcategory": "Zip Hoodies",
    "gender": "Men",
    "price": 1599,
    "originalPrice": 3299,
    "rating": 4.3,
    "reviews": 1140,
    "platform": "Amazon",
    "image": "/products/hoodies/CM-MHD-003-front.jpg",
    "images": [
      "/products/hoodies/CM-MHD-003-front.jpg"
    ],
    "colors": [
      "Navy Blue",
      "Slate Grey"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "description": "Breathable all-season French terry zip-up hoodie with metal zip puller, split kangaroo pocket, and drawcord hood.",
    "priceHistory": [
      2199,
      1999,
      1799,
      1599,
      1599,
      1599
    ]
  },
  {
    "id": "CM-MHD-004",
    "title": "Streetwear Acid Wash Graphic Print Hoodie",
    "brand": "Souled Store",
    "category": "Hoodies",
    "subcategory": "Graphic Hoodies",
    "gender": "Men",
    "price": 1199,
    "originalPrice": 2199,
    "rating": 4.4,
    "reviews": 1780,
    "platform": "AJIO",
    "image": "/products/hoodies/CM-MHD-004-front.jpg",
    "images": [
      "/products/hoodies/CM-MHD-004-front.jpg"
    ],
    "colors": [
      "Vintage Acid Grey",
      "Midnight Purple"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Drop-shoulder relaxed hoodie with anime back print, brushed interior, and ribbed cuffs that retain snug elasticity.",
    "priceHistory": [
      1699,
      1499,
      1349,
      1199,
      1199,
      1199
    ]
  },
  {
    "id": "CM-MHD-005",
    "title": "Colorblocked Casual Fleece Sweatshirt Hoodie",
    "brand": "Roadster",
    "category": "Hoodies",
    "subcategory": "Pullover Hoodies",
    "gender": "Men",
    "price": 799,
    "originalPrice": 1999,
    "rating": 4.1,
    "reviews": 2900,
    "platform": "Flipkart",
    "image": "/products/hoodies/CM-MHD-005-front.jpg",
    "images": [
      "/products/hoodies/CM-MHD-005-front.jpg"
    ],
    "colors": [
      "Maroon & Navy",
      "Olive & Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Sporty tricolor colorblocked fleece hoodie offering soft next-to-skin touch and great thermal retention.",
    "priceHistory": [
      1199,
      999,
      899,
      799,
      799,
      799
    ]
  },
  {
    "id": "CM-MHD-006",
    "title": "Thermal Polar Fleece Quarter-Zip Hoodie",
    "brand": "Quechua",
    "category": "Hoodies",
    "subcategory": "Fleece Hoodies",
    "gender": "Men",
    "price": 999,
    "originalPrice": 1799,
    "rating": 4.5,
    "reviews": 730,
    "platform": "Trends",
    "image": "/products/hoodies/CM-MHD-006-front.jpg",
    "images": [
      "/products/hoodies/CM-MHD-006-front.jpg"
    ],
    "colors": [
      "Forest Green",
      "Earth Brown"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "available": false,
    "description": "Insulating polar fleece pullover hoodie designed for outdoor trails and chilly morning commutes.",
    "priceHistory": [
      1399,
      1249,
      1099,
      999,
      999,
      999
    ]
  },
  {
    "id": "CM-WDR-001",
    "title": "Floral Tiered Bohemian Maxi Dress",
    "brand": "Zara",
    "category": "Dresses",
    "subcategory": "Maxi Dresses",
    "gender": "Women",
    "price": 1899,
    "originalPrice": 3590,
    "rating": 4.5,
    "reviews": 1450,
    "platform": "Myntra",
    "image": "/products/dresses/CM-WDR-001-front.jpg",
    "images": [
      "/products/dresses/CM-WDR-001-front.jpg"
    ],
    "colors": [
      "Dusty Pink Floral",
      "Sage Green Floral"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Romantic floral maxi dress designed with ruffled tiered skirt, smocked elastic bodice, and delicate flutter sleeves.",
    "priceHistory": [
      2590,
      2290,
      2090,
      1899,
      1899,
      1899
    ]
  },
  {
    "id": "CM-WDR-002",
    "title": "V-Neck Satin Slip Cocktail Dress",
    "brand": "Mango",
    "category": "Dresses",
    "subcategory": "Slip Dresses",
    "gender": "Women",
    "price": 2299,
    "originalPrice": 4590,
    "rating": 4.6,
    "reviews": 620,
    "platform": "AJIO",
    "image": "/products/dresses/CM-WDR-002-front.jpg",
    "images": [
      "/products/dresses/CM-WDR-002-front.jpg"
    ],
    "colors": [
      "Champagne Gold",
      "Emerald Green"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Bias-cut lustrous satin slip dress with adjustable spaghetti straps, draped cowl neckline, and subtle thigh slit.",
    "priceHistory": [
      3290,
      2890,
      2590,
      2299,
      2299,
      2299
    ]
  },
  {
    "id": "CM-WDR-003",
    "title": "A-Line Cotton Shirt Dress with Belt",
    "brand": "Marks & Spencer",
    "category": "Dresses",
    "subcategory": "Shirt Dresses",
    "gender": "Women",
    "price": 1699,
    "originalPrice": 2999,
    "rating": 4.3,
    "reviews": 840,
    "platform": "Amazon",
    "image": "/products/dresses/CM-WDR-003-front.jpg",
    "images": [
      "/products/dresses/CM-WDR-003-front.jpg"
    ],
    "colors": [
      "Navy Stripe",
      "Crisp White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Timeless collared shirt dress made in pure poplin cotton featuring button-through front, roll-up sleeves, and matching fabric belt.",
    "priceHistory": [
      2299,
      1999,
      1849,
      1699,
      1699,
      1699
    ]
  },
  {
    "id": "CM-WDR-004",
    "title": "Ribbed Knit Bodycon Midi Dress",
    "brand": "Forever 21",
    "category": "Dresses",
    "subcategory": "Bodycon Dresses",
    "gender": "Women",
    "price": 899,
    "originalPrice": 1999,
    "rating": 4.2,
    "reviews": 1980,
    "platform": "Flipkart",
    "image": "/products/dresses/CM-WDR-004-front.jpg",
    "images": [
      "/products/dresses/CM-WDR-004-front.jpg"
    ],
    "colors": [
      "Terracotta",
      "Classic Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Figure-hugging ribbed jersey midi dress with square neck and back walking vent. Versatile styling with boots or sneakers.",
    "priceHistory": [
      1399,
      1199,
      999,
      899,
      899,
      899
    ]
  },
  {
    "id": "CM-WDR-005",
    "title": "Fit & Flare Polka Dot Summer Dress",
    "brand": "Tokyo Talkies",
    "category": "Dresses",
    "subcategory": "Skater Dresses",
    "gender": "Women",
    "price": 549,
    "originalPrice": 1299,
    "rating": 4.1,
    "reviews": 3200,
    "platform": "Meesho",
    "image": "/products/dresses/CM-WDR-005-front.jpg",
    "images": [
      "/products/dresses/CM-WDR-005-front.jpg"
    ],
    "colors": [
      "Black & White Dots",
      "Red Dots"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Retro-inspired fit and flare dress with sweetheart neckline, short puff sleeves, and flared twirl-friendly hem.",
    "priceHistory": [
      799,
      699,
      599,
      549,
      549,
      549
    ]
  },
  {
    "id": "CM-WDR-006",
    "title": "Embroidered Broderie Anglaise Midi Dress",
    "brand": "H&M",
    "category": "Dresses",
    "subcategory": "Midi Dresses",
    "gender": "Women",
    "price": 1799,
    "originalPrice": 2999,
    "rating": 4.4,
    "reviews": 580,
    "platform": "Trends",
    "image": "/products/dresses/CM-WDR-006-front.jpg",
    "images": [
      "/products/dresses/CM-WDR-006-front.jpg"
    ],
    "colors": [
      "Snow White",
      "Pastel Yellow"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Pure cotton midi dress detailed with delicate eyelet embroidery, scalloped hem, and flattering square neck.",
    "priceHistory": [
      2399,
      2199,
      1999,
      1799,
      1799,
      1799
    ]
  },
  {
    "id": "CM-WDR-007",
    "title": "Wrap Style Floral Georgette Ruffle Dress",
    "brand": "Vero Moda",
    "category": "Dresses",
    "subcategory": "Wrap Dresses",
    "gender": "Women",
    "price": 1499,
    "originalPrice": 2999,
    "rating": 4.5,
    "reviews": 1120,
    "platform": "Myntra",
    "image": "/products/dresses/CM-WDR-007-front.jpg",
    "images": [
      "/products/dresses/CM-WDR-007-front.jpg"
    ],
    "colors": [
      "Burgundy Floral"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Flattering true wrap silhouette with cascading ruffle trims along the neckline and hem, lined with soft stretch crepe.",
    "priceHistory": [
      2199,
      1899,
      1699,
      1499,
      1499,
      1499
    ]
  },
  {
    "id": "CM-WDR-008",
    "title": "Smocked Bodice Linen Mini Dress",
    "brand": "Only",
    "category": "Dresses",
    "subcategory": "Mini Dresses",
    "gender": "Women",
    "price": 1199,
    "originalPrice": 2499,
    "rating": 4.2,
    "reviews": 740,
    "platform": "AJIO",
    "image": "/products/dresses/CM-WDR-008-front.jpg",
    "images": [
      "/products/dresses/CM-WDR-008-front.jpg"
    ],
    "colors": [
      "Lilac Purple",
      "Sage"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": false,
    "description": "Breathable linen-blend mini dress with all-over smocked stretch bodice, elasticated puff shoulders, and airy flare.",
    "priceHistory": [
      1799,
      1599,
      1399,
      1199,
      1199,
      1199
    ]
  },
  {
    "id": "CM-WTP-001",
    "title": "Floral Printed Peplum Wrap Top",
    "brand": "Vero Moda",
    "category": "Tops",
    "subcategory": "Peplum Tops",
    "gender": "Women",
    "price": 799,
    "originalPrice": 1799,
    "rating": 4.3,
    "reviews": 1150,
    "platform": "Myntra",
    "image": "/products/tops/CM-WTP-001-front.jpg",
    "images": [
      "/products/tops/CM-WTP-001-front.jpg"
    ],
    "colors": [
      "Blush Pink",
      "Sky Blue"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Romantic crepe wrap top with self-tie waist belt, flared peplum hem, and subtle bell sleeves.",
    "priceHistory": [
      1199,
      1049,
      899,
      799,
      799,
      799
    ]
  },
  {
    "id": "CM-WTP-002",
    "title": "Ribbed Square-Neck Fitted Knit Crop Top",
    "brand": "H&M",
    "category": "Tops",
    "subcategory": "Crop Tops",
    "gender": "Women",
    "price": 499,
    "originalPrice": 999,
    "rating": 4.4,
    "reviews": 2400,
    "platform": "AJIO",
    "image": "/products/tops/CM-WTP-002-front.jpg",
    "images": [
      "/products/tops/CM-WTP-002-front.jpg"
    ],
    "colors": [
      "Classic White",
      "Mocha Brown",
      "Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Seamless stretch-rib knit crop top cut with a dramatic square neckline and wide bra-friendly shoulder straps.",
    "priceHistory": [
      799,
      699,
      599,
      499,
      499,
      499
    ]
  },
  {
    "id": "CM-WTP-003",
    "title": "Puff Sleeve Swiss Dot Chiffon Blouse",
    "brand": "Forever New",
    "category": "Tops",
    "subcategory": "Blouses",
    "gender": "Women",
    "price": 1399,
    "originalPrice": 2600,
    "rating": 4.5,
    "reviews": 580,
    "platform": "Amazon",
    "image": "/products/tops/CM-WTP-003-front.jpg",
    "images": [
      "/products/tops/CM-WTP-003-front.jpg"
    ],
    "colors": [
      "Ivory Cream",
      "Soft Mint"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Elegant textured Swiss-dot chiffon blouse with voluminous puff sleeves, delicate ruffle collar, and keyhole button back.",
    "priceHistory": [
      1999,
      1799,
      1599,
      1399,
      1399,
      1399
    ]
  },
  {
    "id": "CM-WTP-004",
    "title": "Button-Down Broderie Cotton Peasant Top",
    "brand": "Zara",
    "category": "Tops",
    "subcategory": "Peasant Tops",
    "gender": "Women",
    "price": 1199,
    "originalPrice": 2290,
    "rating": 4.2,
    "reviews": 690,
    "platform": "Trends",
    "image": "/products/tops/CM-WTP-004-front.jpg",
    "images": [
      "/products/tops/CM-WTP-004-front.jpg"
    ],
    "colors": [
      "Pure White"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Bohemian inspired cotton top detailed with cutwork eyelet lace, mother-of-pearl buttons, and elasticated wrist cuffs.",
    "priceHistory": [
      1690,
      1490,
      1290,
      1199,
      1199,
      1199
    ]
  },
  {
    "id": "CM-WTP-005",
    "title": "Graphic Casual Cotton Boxy Tee",
    "brand": "Ginger",
    "category": "Tops",
    "subcategory": "Tees",
    "gender": "Women",
    "price": 399,
    "originalPrice": 799,
    "rating": 4.1,
    "reviews": 1820,
    "platform": "Trends",
    "image": "/products/tops/CM-WTP-005-front.jpg",
    "images": [
      "/products/tops/CM-WTP-005-front.jpg"
    ],
    "colors": [
      "Lilac Graphic",
      "Butter Yellow"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Breathable cotton tee featuring minimal botanical line art, relaxed drop-shoulder cut, and soft bio-wash touch.",
    "priceHistory": [
      599,
      499,
      449,
      399,
      399,
      399
    ]
  },
  {
    "id": "CM-WTP-006",
    "title": "Satin Cowl-Neck Camisole Evening Top",
    "brand": "Urbanic",
    "category": "Tops",
    "subcategory": "Camisoles",
    "gender": "Women",
    "price": 449,
    "originalPrice": 1199,
    "rating": 4,
    "reviews": 2150,
    "platform": "Meesho",
    "image": "/products/tops/CM-WTP-006-front.jpg",
    "images": [
      "/products/tops/CM-WTP-006-front.jpg"
    ],
    "colors": [
      "Rose Gold",
      "Midnight Navy"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Silky soft satin cami top featuring a flowing cowl neck and adjustable micro-straps. Elevates jeans or blazer sets.",
    "priceHistory": [
      699,
      599,
      499,
      449,
      449,
      449
    ]
  },
  {
    "id": "CM-WTP-007",
    "title": "Smocked Ruffled Off-Shoulder Bardot Top",
    "brand": "Athena",
    "category": "Tops",
    "subcategory": "Bardot Tops",
    "gender": "Women",
    "price": 649,
    "originalPrice": 1499,
    "rating": 4.3,
    "reviews": 890,
    "platform": "Flipkart",
    "image": "/products/tops/CM-WTP-007-front.jpg",
    "images": [
      "/products/tops/CM-WTP-007-front.jpg"
    ],
    "colors": [
      "Coral Red",
      "Navy Dots"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": false,
    "description": "Charming elasticated off-shoulder top with smocked waistline, flared ruffle trim, and soft floral print.",
    "priceHistory": [
      999,
      899,
      749,
      649,
      649,
      649
    ]
  },
  {
    "id": "CM-WJN-001",
    "title": "High-Rise Wide-Leg Flare Denim Jeans",
    "brand": "Levi's",
    "category": "Women's Jeans",
    "subcategory": "Wide Leg Jeans",
    "gender": "Women",
    "price": 1899,
    "originalPrice": 3899,
    "rating": 4.6,
    "reviews": 2310,
    "platform": "Amazon",
    "image": "/products/women-jeans/CM-WJN-001-front.jpg",
    "images": [
      "/products/women-jeans/CM-WJN-001-front.jpg"
    ],
    "colors": [
      "Classic Medium Indigo",
      "Light Bleach Wash"
    ],
    "sizes": [
      "26",
      "28",
      "30",
      "32"
    ],
    "available": true,
    "description": "Flattering high-waisted wide-leg jeans with 70s flair, crafted in vintage-feel non-stretch denim with fitted hip.",
    "priceHistory": [
      2699,
      2399,
      2099,
      1899,
      1899,
      1899
    ]
  },
  {
    "id": "CM-WJN-002",
    "title": "Ankle-Length Vintage Mom Fit Jeans",
    "brand": "H&M",
    "category": "Women's Jeans",
    "subcategory": "Mom Jeans",
    "gender": "Women",
    "price": 1499,
    "originalPrice": 2499,
    "rating": 4.4,
    "reviews": 1870,
    "platform": "Myntra",
    "image": "/products/women-jeans/CM-WJN-002-front.jpg",
    "images": [
      "/products/women-jeans/CM-WJN-002-front.jpg"
    ],
    "colors": [
      "Washed Denim Blue",
      "Charcoal Grey"
    ],
    "sizes": [
      "26",
      "28",
      "30",
      "32"
    ],
    "available": true,
    "description": "Relaxed high-waist 5-pocket mom jeans in washed cotton denim with tapered legs and comfortable room through hips.",
    "priceHistory": [
      1999,
      1799,
      1599,
      1499,
      1499,
      1499
    ]
  },
  {
    "id": "CM-WJN-003",
    "title": "Super Skinny Sculpt High-Waist Jeans",
    "brand": "Only",
    "category": "Women's Jeans",
    "subcategory": "Skinny Jeans",
    "gender": "Women",
    "price": 1299,
    "originalPrice": 2799,
    "rating": 4.3,
    "reviews": 1420,
    "platform": "AJIO",
    "image": "/products/women-jeans/CM-WJN-003-front.jpg",
    "images": [
      "/products/women-jeans/CM-WJN-003-front.jpg"
    ],
    "colors": [
      "Dark Navy",
      "Solid Black"
    ],
    "sizes": [
      "26",
      "28",
      "30",
      "32",
      "34"
    ],
    "available": true,
    "description": "Contouring high-waist power stretch jeans that sculpt the hips and calves while offering 360-degree all-day flexibility.",
    "priceHistory": [
      1899,
      1699,
      1499,
      1299,
      1299,
      1299
    ]
  },
  {
    "id": "CM-WJN-004",
    "title": "Straight Fit Slit Hem Fashion Jeans",
    "brand": "Zara",
    "category": "Women's Jeans",
    "subcategory": "Straight Jeans",
    "gender": "Women",
    "price": 1699,
    "originalPrice": 3290,
    "rating": 4.5,
    "reviews": 640,
    "platform": "Trends",
    "image": "/products/women-jeans/CM-WJN-004-front.jpg",
    "images": [
      "/products/women-jeans/CM-WJN-004-front.jpg"
    ],
    "colors": [
      "Mid-Wash Vintage"
    ],
    "sizes": [
      "26",
      "28",
      "30"
    ],
    "available": true,
    "description": "Full-length straight leg jeans featuring clean side ankle slits tailored to showcase designer heels or chunky platform sneakers.",
    "priceHistory": [
      2490,
      2190,
      1890,
      1699,
      1699,
      1699
    ]
  },
  {
    "id": "CM-WJN-005",
    "title": "Distressed Knee Cut Boyfriend Jeans",
    "brand": "Kraus Jeans",
    "category": "Women's Jeans",
    "subcategory": "Boyfriend Jeans",
    "gender": "Women",
    "price": 999,
    "originalPrice": 2299,
    "rating": 4.1,
    "reviews": 1530,
    "platform": "Flipkart",
    "image": "/products/women-jeans/CM-WJN-005-front.jpg",
    "images": [
      "/products/women-jeans/CM-WJN-005-front.jpg"
    ],
    "colors": [
      "Light Acid Wash"
    ],
    "sizes": [
      "28",
      "30",
      "32"
    ],
    "available": true,
    "description": "Slouchy mid-rise boyfriend jeans with laid-back ripped knee details, rolled hem cuffs, and soft washed denim handfeel.",
    "priceHistory": [
      1499,
      1299,
      1149,
      999,
      999,
      999
    ]
  },
  {
    "id": "CM-WJN-006",
    "title": "Paperbag Waist Belted Denim Trousers",
    "brand": "Tokyo Talkies",
    "category": "Women's Jeans",
    "subcategory": "Paperbag Jeans",
    "gender": "Women",
    "price": 699,
    "originalPrice": 1599,
    "rating": 4.2,
    "reviews": 980,
    "platform": "Meesho",
    "image": "/products/women-jeans/CM-WJN-006-front.jpg",
    "images": [
      "/products/women-jeans/CM-WJN-006-front.jpg"
    ],
    "colors": [
      "Indigo Blue",
      "Ice Wash"
    ],
    "sizes": [
      "26",
      "28",
      "30",
      "32"
    ],
    "available": false,
    "description": "Trendy paperbag denim trousers with gathered ruffle waist, removable denim tie belt, and tapered cropped ankles.",
    "priceHistory": [
      999,
      899,
      799,
      699,
      699,
      699
    ]
  },
  {
    "id": "CM-WKT-001",
    "title": "Indigo Block Print Straight Cotton Kurti",
    "brand": "Anouk",
    "category": "Kurtis",
    "subcategory": "Straight Kurtis",
    "gender": "Women",
    "price": 749,
    "originalPrice": 1499,
    "rating": 4.5,
    "reviews": 2080,
    "platform": "Flipkart",
    "image": "/products/kurtis/CM-WKT-001-front.jpg",
    "images": [
      "/products/kurtis/CM-WKT-001-front.jpg"
    ],
    "colors": [
      "Indigo Blue",
      "Rust Orange"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "description": "Breathable pure cotton daily kurti with artisanal hand-block inspired all-over motifs, side slits, and round neck with notch.",
    "priceHistory": [
      899,
      849,
      799,
      749,
      749,
      749
    ]
  },
  {
    "id": "CM-WKT-002",
    "title": "Flared Anarkali Chanderi Silk Kurti",
    "brand": "Biba",
    "category": "Kurtis",
    "subcategory": "Anarkali Kurtis",
    "gender": "Women",
    "price": 1799,
    "originalPrice": 3599,
    "rating": 4.6,
    "reviews": 1320,
    "platform": "Myntra",
    "image": "/products/kurtis/CM-WKT-002-front.jpg",
    "images": [
      "/products/kurtis/CM-WKT-002-front.jpg"
    ],
    "colors": [
      "Teal Green",
      "Deep Maroon"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Regal floor-length Anarkali kurti crafted in gossamer Chanderi silk blend with gold zari border and woven floral yoke.",
    "priceHistory": [
      2599,
      2299,
      1999,
      1799,
      1799,
      1799
    ]
  },
  {
    "id": "CM-WKT-003",
    "title": "Embroidered Chikankari Handcrafted Kurti",
    "brand": "Ada Lucknow",
    "category": "Kurtis",
    "subcategory": "Chikankari Kurtis",
    "gender": "Women",
    "price": 1299,
    "originalPrice": 2499,
    "rating": 4.7,
    "reviews": 940,
    "platform": "Amazon",
    "image": "/products/kurtis/CM-WKT-003-front.jpg",
    "images": [
      "/products/kurtis/CM-WKT-003-front.jpg"
    ],
    "colors": [
      "Pristine White",
      "Pastel Peach",
      "Sky Blue"
    ],
    "sizes": [
      "38",
      "40",
      "42",
      "44"
    ],
    "available": true,
    "description": "Authentic Lucknowi hand-embroidered modal cotton kurti showcasing intricate Bakhiya and Phanda stitches with inner slip included.",
    "priceHistory": [
      1899,
      1699,
      1499,
      1299,
      1299,
      1299
    ]
  },
  {
    "id": "CM-WKT-004",
    "title": "A-Line Floral Print Tunic Kurti",
    "brand": "W for Woman",
    "category": "Kurtis",
    "subcategory": "A-Line Kurtis",
    "gender": "Women",
    "price": 999,
    "originalPrice": 1999,
    "rating": 4.3,
    "reviews": 1110,
    "platform": "AJIO",
    "image": "/products/kurtis/CM-WKT-004-front.jpg",
    "images": [
      "/products/kurtis/CM-WKT-004-front.jpg"
    ],
    "colors": [
      "Mustard Floral",
      "Ivory Olive"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Modern fusion A-line tunic kurti with mandarin collar, rolled-up sleeve tabs, and contemporary asymmetrical hemline.",
    "priceHistory": [
      1499,
      1299,
      1149,
      999,
      999,
      999
    ]
  },
  {
    "id": "CM-WKT-005",
    "title": "Bandhani Print Rayon Flared Kurti",
    "brand": "Jaipur Kurti",
    "category": "Kurtis",
    "subcategory": "Flared Kurtis",
    "gender": "Women",
    "price": 499,
    "originalPrice": 1299,
    "rating": 4.2,
    "reviews": 3450,
    "platform": "Meesho",
    "image": "/products/kurtis/CM-WKT-005-front.jpg",
    "images": [
      "/products/kurtis/CM-WKT-005-front.jpg"
    ],
    "colors": [
      "Ruby Red",
      "Royal Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "description": "Vibrant Rajasthani tie-dye Bandhani print rayon kurti featuring gota patti lace border and 3/4th regular sleeves.",
    "priceHistory": [
      799,
      699,
      599,
      499,
      499,
      499
    ]
  },
  {
    "id": "CM-WKT-006",
    "title": "Khadi Cotton Casual Everyday Kurti",
    "brand": "FabIndia",
    "category": "Kurtis",
    "subcategory": "Casual Kurtis",
    "gender": "Women",
    "price": 1199,
    "originalPrice": 1890,
    "rating": 4.4,
    "reviews": 620,
    "platform": "Trends",
    "image": "/products/kurtis/CM-WKT-006-front.jpg",
    "images": [
      "/products/kurtis/CM-WKT-006-front.jpg"
    ],
    "colors": [
      "Earthy Terracotta",
      "Off White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Hand-spun breathable khadi cotton kurti tailored with coconut shell buttons, side pockets, and relaxed straight silhouette.",
    "priceHistory": [
      1590,
      1450,
      1290,
      1199,
      1199,
      1199
    ]
  },
  {
    "id": "CM-WKT-007",
    "title": "Mirror Work Festive Rayon Kurti",
    "brand": "Aurelia",
    "category": "Kurtis",
    "subcategory": "Festive Kurtis",
    "gender": "Women",
    "price": 899,
    "originalPrice": 1799,
    "rating": 4.3,
    "reviews": 1540,
    "platform": "Myntra",
    "image": "/products/kurtis/CM-WKT-007-front.jpg",
    "images": [
      "/products/kurtis/CM-WKT-007-front.jpg"
    ],
    "colors": [
      "Magenta Pink",
      "Emerald"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Festive jewel-toned straight kurti highlighted with genuine mirror work on the neck placket and gold foil prints.",
    "priceHistory": [
      1399,
      1199,
      999,
      899,
      899,
      899
    ]
  },
  {
    "id": "CM-WKT-008",
    "title": "Layered Angrakha Style Ethnic Kurti",
    "brand": "Libas",
    "category": "Kurtis",
    "subcategory": "Angrakha Kurtis",
    "gender": "Women",
    "price": 949,
    "originalPrice": 2199,
    "rating": 4.4,
    "reviews": 1890,
    "platform": "Flipkart",
    "image": "/products/kurtis/CM-WKT-008-front.jpg",
    "images": [
      "/products/kurtis/CM-WKT-008-front.jpg"
    ],
    "colors": [
      "Navy Gold"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": false,
    "description": "Traditional overlap Angrakha style kurti with side dori tie-up tassels, tiered hem, and contrast piping accents.",
    "priceHistory": [
      1499,
      1299,
      1099,
      949,
      949,
      949
    ]
  },
  {
    "id": "CM-WET-001",
    "title": "Banarasi Silk Jacquard Woven Saree",
    "brand": "Kalamandir",
    "category": "Ethnic Wear",
    "subcategory": "Sarees",
    "gender": "Women",
    "price": 2499,
    "originalPrice": 5999,
    "rating": 4.6,
    "reviews": 1840,
    "platform": "Myntra",
    "image": "/products/ethnic-wear/CM-WET-001-front.jpg",
    "images": [
      "/products/ethnic-wear/CM-WET-001-front.jpg"
    ],
    "colors": [
      "Royal Crimson Red",
      "Peacock Blue"
    ],
    "sizes": [
      "Free Size (5.5m + Blouse)"
    ],
    "available": true,
    "description": "Traditional Banarasi art silk saree woven with intricate floral zari jaal all over the body, heavy pallu, and matching unstitched blouse piece.",
    "priceHistory": [
      3899,
      3299,
      2899,
      2499,
      2499,
      2499
    ]
  },
  {
    "id": "CM-WET-002",
    "title": "Sequined Semi-Stitched Net Lehenga Choli",
    "brand": "Chhabra 555",
    "category": "Ethnic Wear",
    "subcategory": "Lehengas",
    "gender": "Women",
    "price": 3499,
    "originalPrice": 8999,
    "rating": 4.5,
    "reviews": 790,
    "platform": "Amazon",
    "image": "/products/ethnic-wear/CM-WET-002-front.jpg",
    "images": [
      "/products/ethnic-wear/CM-WET-002-front.jpg"
    ],
    "colors": [
      "Blush Rose Gold",
      "Navy Blue"
    ],
    "sizes": [
      "Semi-Stitched (Up to 42)"
    ],
    "available": true,
    "description": "Bridal and festive semi-stitched lehenga with tiered can-can flare, shimmer sequin work, embroidered blouse piece, and scalloped net dupatta.",
    "priceHistory": [
      5499,
      4699,
      3999,
      3499,
      3499,
      3499
    ]
  },
  {
    "id": "CM-WET-003",
    "title": "Embroidered Kurta with Palazzo & Dupatta Set",
    "brand": "Biba",
    "category": "Ethnic Wear",
    "subcategory": "Suit Sets",
    "gender": "Women",
    "price": 2199,
    "originalPrice": 4299,
    "rating": 4.4,
    "reviews": 1120,
    "platform": "AJIO",
    "image": "/products/ethnic-wear/CM-WET-003-front.jpg",
    "images": [
      "/products/ethnic-wear/CM-WET-003-front.jpg"
    ],
    "colors": [
      "Powder Blue",
      "Peach"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Complete 3-piece festive ethnic suit set featuring pure chanderi embroidered straight kurta, matching flared palazzo pants, and printed organza dupatta.",
    "priceHistory": [
      3199,
      2799,
      2499,
      2199,
      2199,
      2199
    ]
  },
  {
    "id": "CM-WET-004",
    "title": "Pure Handloom Kanjeevaram Silk Saree",
    "brand": "Pothys",
    "category": "Ethnic Wear",
    "subcategory": "Sarees",
    "gender": "Women",
    "price": 3999,
    "originalPrice": 7999,
    "rating": 4.7,
    "reviews": 620,
    "platform": "Trends",
    "image": "/products/ethnic-wear/CM-WET-004-front.jpg",
    "images": [
      "/products/ethnic-wear/CM-WET-004-front.jpg"
    ],
    "colors": [
      "Temple Gold & Maroon"
    ],
    "sizes": [
      "Free Size"
    ],
    "available": true,
    "description": "Heirloom grade woven silk saree featuring traditional temple borders, contrast korvai pallu, and rich antique golden threads.",
    "priceHistory": [
      5999,
      4999,
      4499,
      3999,
      3999,
      3999
    ]
  },
  {
    "id": "CM-WET-005",
    "title": "Printed Cotton Sharara Suit Set",
    "brand": "Aasiya",
    "category": "Ethnic Wear",
    "subcategory": "Sharara Sets",
    "gender": "Women",
    "price": 1199,
    "originalPrice": 2799,
    "rating": 4.2,
    "reviews": 2310,
    "platform": "Flipkart",
    "image": "/products/ethnic-wear/CM-WET-005-front.jpg",
    "images": [
      "/products/ethnic-wear/CM-WET-005-front.jpg"
    ],
    "colors": [
      "Mint Green",
      "Sunny Yellow"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Playful floral printed cotton peplum short kurta paired with voluminous multi-tiered ruffled sharara pants and matching voile dupatta.",
    "priceHistory": [
      1699,
      1499,
      1349,
      1199,
      1199,
      1199
    ]
  },
  {
    "id": "CM-WET-006",
    "title": "Floral Printed Ready-to-Wear Georgette Saree",
    "brand": "Saree Swarg",
    "category": "Ethnic Wear",
    "subcategory": "Sarees",
    "gender": "Women",
    "price": 699,
    "originalPrice": 1999,
    "rating": 4.1,
    "reviews": 3100,
    "platform": "Meesho",
    "image": "/products/ethnic-wear/CM-WET-006-front.jpg",
    "images": [
      "/products/ethnic-wear/CM-WET-006-front.jpg"
    ],
    "colors": [
      "Lavender Floral",
      "Black Rose"
    ],
    "sizes": [
      "Free Size (Pre-Pleated)"
    ],
    "available": false,
    "description": "Hassle-free 1-minute pre-stitched pleated georgette saree with adjustable waist hooks and stitched sleeveless blouse.",
    "priceHistory": [
      1099,
      899,
      799,
      699,
      699,
      699
    ]
  },
  {
    "id": "CM-WJK-001",
    "title": "Double-Breasted Classic Belted Trench Coat",
    "brand": "Mango",
    "category": "Women's Jackets",
    "subcategory": "Trench Coats",
    "gender": "Women",
    "price": 3299,
    "originalPrice": 6990,
    "rating": 4.7,
    "reviews": 580,
    "platform": "Myntra",
    "image": "/products/women-jackets/CM-WJK-001-front.jpg",
    "images": [
      "/products/women-jackets/CM-WJK-001-front.jpg"
    ],
    "colors": [
      "Camel Beige",
      "Classic Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Water-repellent tailored trench coat crafted with storm flaps, tortoiseshell buttons, buckle waist belt, and deep welt pockets.",
    "priceHistory": [
      4990,
      4290,
      3790,
      3299,
      3299,
      3299
    ]
  },
  {
    "id": "CM-WJK-002",
    "title": "Cropped Moto Faux Leather Biker Jacket",
    "brand": "Zara",
    "category": "Women's Jackets",
    "subcategory": "Leather Jackets",
    "gender": "Women",
    "price": 2499,
    "originalPrice": 4590,
    "rating": 4.5,
    "reviews": 940,
    "platform": "AJIO",
    "image": "/products/women-jackets/CM-WJK-002-front.jpg",
    "images": [
      "/products/women-jackets/CM-WJK-002-front.jpg"
    ],
    "colors": [
      "Black",
      "Oxblood Burgundy"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Sleek cropped vegan leather biker jacket with asymmetrical silver front zipper, lapel snap studs, and belted waist trim.",
    "priceHistory": [
      3590,
      3190,
      2790,
      2499,
      2499,
      2499
    ]
  },
  {
    "id": "CM-WJK-003",
    "title": "Oversized Drop-Shoulder Denim Jacket",
    "brand": "Levi's",
    "category": "Women's Jackets",
    "subcategory": "Denim Jackets",
    "gender": "Women",
    "price": 2199,
    "originalPrice": 4299,
    "rating": 4.4,
    "reviews": 1420,
    "platform": "Amazon",
    "image": "/products/women-jackets/CM-WJK-003-front.jpg",
    "images": [
      "/products/women-jackets/CM-WJK-003-front.jpg"
    ],
    "colors": [
      "Vintage Light Blue",
      "Washed Charcoal"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Boyfriend-fit rugged cotton trucker jacket designed with drop shoulders, chest button-flap pockets, and adjustable waist tabs.",
    "priceHistory": [
      2999,
      2699,
      2399,
      2199,
      2199,
      2199
    ]
  },
  {
    "id": "CM-WJK-004",
    "title": "Short Padded Puffer Winter Jacket with Hood",
    "brand": "H&M",
    "category": "Women's Jackets",
    "subcategory": "Puffer Jackets",
    "gender": "Women",
    "price": 1799,
    "originalPrice": 3499,
    "rating": 4.3,
    "reviews": 810,
    "platform": "Trends",
    "image": "/products/women-jackets/CM-WJK-004-front.jpg",
    "images": [
      "/products/women-jackets/CM-WJK-004-front.jpg"
    ],
    "colors": [
      "Sage Green",
      "Matte Black"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Thermal insulated quilted puffer jacket featuring high stand collar, removable hood, fleece-lined pockets, and wind-seal elastic cuffs.",
    "priceHistory": [
      2599,
      2299,
      1999,
      1799,
      1799,
      1799
    ]
  },
  {
    "id": "CM-WJK-005",
    "title": "Tailored Open-Front Formal Work Blazer",
    "brand": "Van Heusen",
    "category": "Women's Jackets",
    "subcategory": "Blazers",
    "gender": "Women",
    "price": 1699,
    "originalPrice": 3499,
    "rating": 4.4,
    "reviews": 670,
    "platform": "Flipkart",
    "image": "/products/women-jackets/CM-WJK-005-front.jpg",
    "images": [
      "/products/women-jackets/CM-WJK-005-front.jpg"
    ],
    "colors": [
      "Powder Pink",
      "Navy Blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Structured workwear blazer with peaked lapels, shoulder padding for crisp silhouette, and full satin interior lining.",
    "priceHistory": [
      2499,
      2199,
      1899,
      1699,
      1699,
      1699
    ]
  },
  {
    "id": "CM-WJK-006",
    "title": "Faux Shearling Teddy Fleece Zip Jacket",
    "brand": "Forever 21",
    "category": "Women's Jackets",
    "subcategory": "Fleece Jackets",
    "gender": "Women",
    "price": 999,
    "originalPrice": 2299,
    "rating": 4.2,
    "reviews": 1530,
    "platform": "Meesho",
    "image": "/products/women-jackets/CM-WJK-006-front.jpg",
    "images": [
      "/products/women-jackets/CM-WJK-006-front.jpg"
    ],
    "colors": [
      "Teddy Beige",
      "Dusty Rose"
    ],
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "available": false,
    "description": "Ultra-plush cozy sherpa fleece zip-up jacket with contrast nylon chest pocket and funnel collar.",
    "priceHistory": [
      1499,
      1299,
      1149,
      999,
      999,
      999
    ]
  },
  {
    "id": "CM-KID-001",
    "title": "Boys Pure Cotton Graphic T-Shirt & Shorts Set",
    "brand": "Mothercare",
    "category": "Kids Wear",
    "subcategory": "Boys Sets",
    "gender": "Kids",
    "price": 699,
    "originalPrice": 1499,
    "rating": 4.5,
    "reviews": 1240,
    "platform": "Myntra",
    "image": "/products/kids-wear/CM-KID-001-front.jpg",
    "images": [
      "/products/kids-wear/CM-KID-001-front.jpg"
    ],
    "colors": [
      "Dino Yellow & Navy",
      "Safari Green"
    ],
    "sizes": [
      "2-3Y",
      "3-4Y",
      "5-6Y",
      "7-8Y"
    ],
    "available": true,
    "description": "100% hypoallergenic soft cotton 2-piece outfit featuring dinosaur graphic print tee and elasticated drawstring shorts.",
    "priceHistory": [
      999,
      899,
      799,
      699,
      699,
      699
    ]
  },
  {
    "id": "CM-KID-002",
    "title": "Girls Floral Tiered Cotton Summer Frock",
    "brand": "Gini & Jony",
    "category": "Kids Wear",
    "subcategory": "Girls Dresses",
    "gender": "Kids",
    "price": 799,
    "originalPrice": 1699,
    "rating": 4.6,
    "reviews": 980,
    "platform": "Amazon",
    "image": "/products/kids-wear/CM-KID-002-front.jpg",
    "images": [
      "/products/kids-wear/CM-KID-002-front.jpg"
    ],
    "colors": [
      "Pastel Floral Pink",
      "Sky Floral"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "available": true,
    "description": "Charming breathable cotton frock with gathered tier ruffles, back button closure, and matching hairband included.",
    "priceHistory": [
      1199,
      1049,
      899,
      799,
      799,
      799
    ]
  },
  {
    "id": "CM-KID-003",
    "title": "Unisex Denim Dungarees with Striped Inner Tee",
    "brand": "H&M",
    "category": "Kids Wear",
    "subcategory": "Dungarees",
    "gender": "Kids",
    "price": 1199,
    "originalPrice": 2299,
    "rating": 4.4,
    "reviews": 650,
    "platform": "AJIO",
    "image": "/products/kids-wear/CM-KID-003-front.jpg",
    "images": [
      "/products/kids-wear/CM-KID-003-front.jpg"
    ],
    "colors": [
      "Medium Denim Blue"
    ],
    "sizes": [
      "1-2Y",
      "2-3Y",
      "3-4Y"
    ],
    "available": true,
    "description": "Adjustable clasp denim dungarees with front bib pocket, soft washed denim, and long-sleeve striped jersey tee.",
    "priceHistory": [
      1699,
      1499,
      1349,
      1199,
      1199,
      1199
    ]
  },
  {
    "id": "CM-KID-004",
    "title": "Boys Hooded Lightweight Padded Winter Vest",
    "brand": "U.S. Polo Assn. Kids",
    "category": "Kids Wear",
    "subcategory": "Kids Jackets",
    "gender": "Kids",
    "price": 899,
    "originalPrice": 1899,
    "rating": 4.3,
    "reviews": 430,
    "platform": "Trends",
    "image": "/products/kids-wear/CM-KID-004-front.jpg",
    "images": [
      "/products/kids-wear/CM-KID-004-front.jpg"
    ],
    "colors": [
      "Navy / Red Colorblock"
    ],
    "sizes": [
      "4-5Y",
      "6-7Y",
      "8-9Y"
    ],
    "available": true,
    "description": "Sleeveless insulated puffer gilet jacket with warm hood, zip pockets, and water-resistant shell for outdoor play.",
    "priceHistory": [
      1399,
      1199,
      999,
      899,
      899,
      899
    ]
  },
  {
    "id": "CM-KID-005",
    "title": "Girls Sparkle Tulle Birthday Party Dress",
    "brand": "Hopscotch",
    "category": "Kids Wear",
    "subcategory": "Girls Party Wear",
    "gender": "Kids",
    "price": 1049,
    "originalPrice": 2499,
    "rating": 4.5,
    "reviews": 1420,
    "platform": "Flipkart",
    "image": "/products/kids-wear/CM-KID-005-front.jpg",
    "images": [
      "/products/kids-wear/CM-KID-005-front.jpg"
    ],
    "colors": [
      "Frozen Blue Tulle",
      "Princess Pink"
    ],
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y"
    ],
    "available": true,
    "description": "Magical multi-layer shimmer tulle party dress with sequin-embroidered bodice and comfortable 100% cotton inner lining.",
    "priceHistory": [
      1599,
      1399,
      1199,
      1049,
      1049,
      1049
    ]
  },
  {
    "id": "CM-KID-006",
    "title": "Toddlers Organic Cotton Printed Sleepsuit 2-Pack",
    "brand": "FirstCry",
    "category": "Kids Wear",
    "subcategory": "Baby Wear",
    "gender": "Kids",
    "price": 499,
    "originalPrice": 1199,
    "rating": 4.2,
    "reviews": 2150,
    "platform": "Meesho",
    "image": "/products/kids-wear/CM-KID-006-front.jpg",
    "images": [
      "/products/kids-wear/CM-KID-006-front.jpg"
    ],
    "colors": [
      "Animals & Clouds"
    ],
    "sizes": [
      "0-3M",
      "3-6M",
      "6-12M"
    ],
    "available": true,
    "description": "Pack of 2 ultra-soft GOTS certified organic cotton footed onesies with two-way easy diaper change zippers.",
    "priceHistory": [
      799,
      699,
      599,
      499,
      499,
      499
    ]
  },
  {
    "id": "CM-KID-007",
    "title": "Boys Cotton Chino Pants with Suspenders",
    "brand": "Marks & Spencer Kids",
    "category": "Kids Wear",
    "subcategory": "Boys Formal",
    "gender": "Kids",
    "price": 949,
    "originalPrice": 1999,
    "rating": 4.4,
    "reviews": 380,
    "platform": "AJIO",
    "image": "/products/kids-wear/CM-KID-007-front.jpg",
    "images": [
      "/products/kids-wear/CM-KID-007-front.jpg"
    ],
    "colors": [
      "Classic Beige"
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y"
    ],
    "available": false,
    "description": "Smart twill chino trousers with adjustable inner waist button tabs and removable striped elastic suspenders.",
    "priceHistory": [
      1499,
      1299,
      1099,
      949,
      949,
      949
    ]
  },
  {
    "id": "CM-SNK-001",
    "title": "Air Max Retro Low Lifestyle Sneakers",
    "brand": "Nike",
    "category": "Sneakers",
    "subcategory": "Lifestyle Sneakers",
    "gender": "Unisex",
    "price": 4495,
    "originalPrice": 6495,
    "rating": 4.8,
    "reviews": 2890,
    "platform": "Nike",
    "image": "/products/sneakers/CM-SNK-001-front.jpg",
    "images": [
      "/products/sneakers/CM-SNK-001-front.jpg"
    ],
    "colors": [
      "Triple White",
      "Black / University Red"
    ],
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "available": true,
    "description": "Iconic streetwear silhouette with visible Max Air heel cushioning, durable stitched leather overlays, and rubber waffle outsole.",
    "priceHistory": [
      5795,
      5295,
      4995,
      4495,
      4495,
      4495
    ]
  },
  {
    "id": "CM-SNK-002",
    "title": "Classic Canvas Everyday Low-Top Sneakers",
    "brand": "Puma",
    "category": "Sneakers",
    "subcategory": "Canvas Sneakers",
    "gender": "Unisex",
    "price": 1399,
    "originalPrice": 2999,
    "rating": 4.1,
    "reviews": 404,
    "platform": "Meesho",
    "image": "/products/sneakers/CM-SNK-002-front.jpg",
    "images": [
      "/products/sneakers/CM-SNK-002-front.jpg"
    ],
    "colors": [
      "Bright Crimson Red",
      "Cloud White"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    "available": true,
    "description": "Lightweight canvas vulcanized sneakers engineered with a cushioned SoftFoam+ comfort sockliner for all-day city walking.",
    "priceHistory": [
      1799,
      1699,
      1599,
      1399,
      1399,
      1399
    ]
  },
  {
    "id": "CM-SNK-003",
    "title": "Grand Court Cloudfoam Leather Tennis Sneakers",
    "brand": "Adidas",
    "category": "Sneakers",
    "subcategory": "Court Sneakers",
    "gender": "Men",
    "price": 2699,
    "originalPrice": 5599,
    "rating": 4.5,
    "reviews": 3410,
    "platform": "Myntra",
    "image": "/products/sneakers/CM-SNK-003-front.jpg",
    "images": [
      "/products/sneakers/CM-SNK-003-front.jpg"
    ],
    "colors": [
      "Cloud White / Core Black",
      "White / Green"
    ],
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "available": true,
    "description": "Vintage 70s court-inspired synthetic leather shoes with contrast 3-Stripes and plush Cloudfoam midsole cushioning.",
    "priceHistory": [
      3999,
      3499,
      2999,
      2699,
      2699,
      2699
    ]
  },
  {
    "id": "CM-SNK-004",
    "title": "574 Core Heritage Suede Running Sneakers",
    "brand": "New Balance",
    "category": "Sneakers",
    "subcategory": "Retro Runners",
    "gender": "Unisex",
    "price": 3999,
    "originalPrice": 7999,
    "rating": 4.7,
    "reviews": 1890,
    "platform": "Amazon",
    "image": "/products/sneakers/CM-SNK-004-front.jpg",
    "images": [
      "/products/sneakers/CM-SNK-004-front.jpg"
    ],
    "colors": [
      "Heritage Grey",
      "Navy Blue"
    ],
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "available": true,
    "description": "Timeless hybrid road/trail sneaker with ENCAP midsole support, premium pigskin suede upper, and breathable mesh inserts.",
    "priceHistory": [
      5999,
      5299,
      4499,
      3999,
      3999,
      3999
    ]
  },
  {
    "id": "CM-SNK-005",
    "title": "Chuck 70 High-Top Vintage Canvas Sneakers",
    "brand": "Converse",
    "category": "Sneakers",
    "subcategory": "High-Top Sneakers",
    "gender": "Unisex",
    "price": 2999,
    "originalPrice": 4999,
    "rating": 4.6,
    "reviews": 2150,
    "platform": "AJIO",
    "image": "/products/sneakers/CM-SNK-005-front.jpg",
    "images": [
      "/products/sneakers/CM-SNK-005-front.jpg"
    ],
    "colors": [
      "Classic Black",
      "Parchment White"
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "available": true,
    "description": "Upgraded premium high-top sneakers with 12oz organic canvas, winged tongue stitching, OrthoLite insole, and vintage ankle patch.",
    "priceHistory": [
      3999,
      3599,
      3299,
      2999,
      2999,
      2999
    ]
  },
  {
    "id": "CM-SNK-006",
    "title": "Old Skool Suede Stripe Skate Sneakers",
    "brand": "Vans",
    "category": "Sneakers",
    "subcategory": "Skate Shoes",
    "gender": "Unisex",
    "price": 2399,
    "originalPrice": 4499,
    "rating": 4.5,
    "reviews": 1720,
    "platform": "Flipkart",
    "image": "/products/sneakers/CM-SNK-006-front.jpg",
    "images": [
      "/products/sneakers/CM-SNK-006-front.jpg"
    ],
    "colors": [
      "Black & White Sidestripe",
      "Checkerboard"
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "available": true,
    "description": "Heritage low-top skate shoe with durable canvas and suede uppers, re-enforced toe caps, padded collars, and signature waffle rubber sole.",
    "priceHistory": [
      3299,
      2899,
      2599,
      2399,
      2399,
      2399
    ]
  },
  {
    "id": "CM-SNK-007",
    "title": "Slip-On Chunky Knit Walking Sneakers",
    "brand": "Red Tape",
    "category": "Sneakers",
    "subcategory": "Walking Shoes",
    "gender": "Men",
    "price": 1199,
    "originalPrice": 3899,
    "rating": 4.2,
    "reviews": 3100,
    "platform": "Trends",
    "image": "/products/sneakers/CM-SNK-007-front.jpg",
    "images": [
      "/products/sneakers/CM-SNK-007-front.jpg"
    ],
    "colors": [
      "All Black",
      "Grey Heather"
    ],
    "sizes": [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    "available": true,
    "description": "Sock-like slip-on athletic sneakers with breathable mesh knit upper, memory foam footbed, and shock-absorbing chunky EVA sole.",
    "priceHistory": [
      1699,
      1499,
      1299,
      1199,
      1199,
      1199
    ]
  },
  {
    "id": "CM-SNK-008",
    "title": "Rebound Joy High-Top Basketball Sneakers",
    "brand": "Puma",
    "category": "Sneakers",
    "subcategory": "High-Top Sneakers",
    "gender": "Men",
    "price": 2799,
    "originalPrice": 5499,
    "rating": 4.4,
    "reviews": 890,
    "platform": "AJIO",
    "image": "/products/sneakers/CM-SNK-008-front.jpg",
    "images": [
      "/products/sneakers/CM-SNK-008-front.jpg"
    ],
    "colors": [
      "White / Black / Red"
    ],
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "available": false,
    "description": "Retro basketball silhouette featuring padded high collar for ankle support, perforated vamp, and durable rubber traction cupsole.",
    "priceHistory": [
      3899,
      3499,
      3099,
      2799,
      2799,
      2799
    ]
  },
  {
    "id": "CM-CSH-001",
    "title": "Genuine Leather Handcrafted Oxford Brogues",
    "brand": "Bata",
    "category": "Shoes",
    "subcategory": "Formal Shoes",
    "gender": "Men",
    "price": 1899,
    "originalPrice": 3499,
    "rating": 4.4,
    "reviews": 1450,
    "platform": "Amazon",
    "image": "/products/shoes/CM-CSH-001-front.jpg",
    "images": [
      "/products/shoes/CM-CSH-001-front.jpg"
    ],
    "colors": [
      "Tan Brown",
      "Classic Black"
    ],
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11"
    ],
    "available": true,
    "description": "Polished genuine crust leather oxford shoes with decorative wingtip brogue perforations, stacked heel, and leather-lined insole.",
    "priceHistory": [
      2599,
      2299,
      2099,
      1899,
      1899,
      1899
    ]
  },
  {
    "id": "CM-CSH-002",
    "title": "Suede Penny Loafers with Moccasin Stitching",
    "brand": "Hush Puppies",
    "category": "Shoes",
    "subcategory": "Loafers",
    "gender": "Men",
    "price": 2499,
    "originalPrice": 4999,
    "rating": 4.6,
    "reviews": 820,
    "platform": "Myntra",
    "image": "/products/shoes/CM-CSH-002-front.jpg",
    "images": [
      "/products/shoes/CM-CSH-002-front.jpg"
    ],
    "colors": [
      "Navy Suede",
      "Camel Brown"
    ],
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "available": true,
    "description": "Velvety genuine suede slip-on penny loafers detailed with hand-sewn apron moccasin toe and flexible driving shoe rubber nubs.",
    "priceHistory": [
      3499,
      3099,
      2799,
      2499,
      2499,
      2499
    ]
  },
  {
    "id": "CM-CSH-003",
    "title": "Classic Chelsea Leather Ankle Boots",
    "brand": "Red Chief",
    "category": "Shoes",
    "subcategory": "Boots",
    "gender": "Men",
    "price": 2299,
    "originalPrice": 4899,
    "rating": 4.3,
    "reviews": 1670,
    "platform": "Flipkart",
    "image": "/products/shoes/CM-CSH-003-front.jpg",
    "images": [
      "/products/shoes/CM-CSH-003-front.jpg"
    ],
    "colors": [
      "Rust Tan",
      "Jet Black"
    ],
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "available": true,
    "description": "Rugged pull-on Chelsea boots featuring elasticated side gores, back pull loop, genuine leather upper, and anti-slip lug tread.",
    "priceHistory": [
      3199,
      2899,
      2599,
      2299,
      2299,
      2299
    ]
  },
  {
    "id": "CM-CSH-004",
    "title": "Breathable Canvas Espadrilles Slip-Ons",
    "brand": "Soludos",
    "category": "Shoes",
    "subcategory": "Casual Shoes",
    "gender": "Unisex",
    "price": 999,
    "originalPrice": 1999,
    "rating": 4.2,
    "reviews": 540,
    "platform": "AJIO",
    "image": "/products/shoes/CM-CSH-004-front.jpg",
    "images": [
      "/products/shoes/CM-CSH-004-front.jpg"
    ],
    "colors": [
      "Sand White",
      "Navy Stripe"
    ],
    "sizes": [
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9"
    ],
    "available": true,
    "description": "Mediterranean-inspired summer espadrilles with natural jute braided rope midsole, cotton canvas upper, and rubber sole.",
    "priceHistory": [
      1499,
      1299,
      1149,
      999,
      999,
      999
    ]
  },
  {
    "id": "CM-CSH-005",
    "title": "Formal Slip-On Derby Shoes with Elastic Gusset",
    "brand": "Woodland",
    "category": "Shoes",
    "subcategory": "Formal Shoes",
    "gender": "Men",
    "price": 1799,
    "originalPrice": 3295,
    "rating": 4.4,
    "reviews": 930,
    "platform": "Trends",
    "image": "/products/shoes/CM-CSH-005-front.jpg",
    "images": [
      "/products/shoes/CM-CSH-005-front.jpg"
    ],
    "colors": [
      "Deep Brown",
      "Black"
    ],
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "available": true,
    "description": "Supple polished leather office shoes with hidden elasticated tongue gussets for quick entry and durable rubber soles.",
    "priceHistory": [
      2495,
      2195,
      1995,
      1799,
      1799,
      1799
    ]
  },
  {
    "id": "CM-CSH-006",
    "title": "Casual Driving Shoes with Metal Bit Buckle",
    "brand": "Carlton London",
    "category": "Shoes",
    "subcategory": "Loafers",
    "gender": "Men",
    "price": 849,
    "originalPrice": 1999,
    "rating": 4,
    "reviews": 1840,
    "platform": "Meesho",
    "image": "/products/shoes/CM-CSH-006-front.jpg",
    "images": [
      "/products/shoes/CM-CSH-006-front.jpg"
    ],
    "colors": [
      "Tan Brown"
    ],
    "sizes": [
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10"
    ],
    "available": false,
    "description": "Smart textured synthetic leather moccasins embellished with horsebit metal hardware across the vamp.",
    "priceHistory": [
      1199,
      1049,
      949,
      849,
      849,
      849
    ]
  },
  {
    "id": "CM-SPT-001",
    "title": "Dri-FIT Moisture-Wicking Training Shorts",
    "brand": "Nike",
    "category": "Sportswear",
    "subcategory": "Gym Shorts",
    "gender": "Men",
    "price": 1495,
    "originalPrice": 2195,
    "rating": 4.7,
    "reviews": 1650,
    "platform": "Nike",
    "image": "/products/sportswear/CM-SPT-001-front.jpg",
    "images": [
      "/products/sportswear/CM-SPT-001-front.jpg"
    ],
    "colors": [
      "Black / White Swoosh",
      "Iron Grey"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Lightweight 7-inch running and gym shorts featuring breathable mesh side panels, elastic drawcord waist, and deep media pocket.",
    "priceHistory": [
      1995,
      1895,
      1695,
      1495,
      1495,
      1495
    ]
  },
  {
    "id": "CM-SPT-002",
    "title": "Tiro 23 Tapered Soccer Track Pants",
    "brand": "Adidas",
    "category": "Sportswear",
    "subcategory": "Track Pants",
    "gender": "Men",
    "price": 1899,
    "originalPrice": 3599,
    "rating": 4.6,
    "reviews": 2980,
    "platform": "Myntra",
    "image": "/products/sportswear/CM-SPT-002-front.jpg",
    "images": [
      "/products/sportswear/CM-SPT-002-front.jpg"
    ],
    "colors": [
      "Black / White Stripes",
      "Navy / White"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Football-inspired AEROREADY track pants with iconic 3-Stripes along the sides, ankle zips for quick shoe clearance, and secure zip pockets.",
    "priceHistory": [
      2699,
      2399,
      2099,
      1899,
      1899,
      1899
    ]
  },
  {
    "id": "CM-SPT-003",
    "title": "Seamless High-Waist Workout Leggings",
    "brand": "Puma",
    "category": "Sportswear",
    "subcategory": "Tights",
    "gender": "Women",
    "price": 1299,
    "originalPrice": 2799,
    "rating": 4.5,
    "reviews": 1420,
    "platform": "Amazon",
    "image": "/products/sportswear/CM-SPT-003-front.jpg",
    "images": [
      "/products/sportswear/CM-SPT-003-front.jpg"
    ],
    "colors": [
      "Plum Purple",
      "Charcoal Black"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "available": true,
    "description": "Squat-proof compression yoga tights engineered with compressive ribbed high waistband that never rolls down during high-intensity intervals.",
    "priceHistory": [
      1999,
      1699,
      1499,
      1299,
      1299,
      1299
    ]
  },
  {
    "id": "CM-SPT-004",
    "title": "High-Support Zip-Front Sports Bra",
    "brand": "Decathlon",
    "category": "Sportswear",
    "subcategory": "Sports Bras",
    "gender": "Women",
    "price": 899,
    "originalPrice": 1799,
    "rating": 4.4,
    "reviews": 1890,
    "platform": "AJIO",
    "image": "/products/sportswear/CM-SPT-004-front.jpg",
    "images": [
      "/products/sportswear/CM-SPT-004-front.jpg"
    ],
    "colors": [
      "Coral Pink",
      "Slate Black"
    ],
    "sizes": [
      "32B",
      "34B",
      "34C",
      "36C",
      "38D"
    ],
    "available": true,
    "description": "Maximum bounce-reduction sports bra for running and cardio with easy front zipper, padded wide straps, and breathable racerback mesh.",
    "priceHistory": [
      1299,
      1149,
      999,
      899,
      899,
      899
    ]
  },
  {
    "id": "CM-SPT-005",
    "title": "Active Quarter-Zip Thermal Running Pullover",
    "brand": "Under Armour",
    "category": "Sportswear",
    "subcategory": "Gym Tops",
    "gender": "Men",
    "price": 1599,
    "originalPrice": 2999,
    "rating": 4.5,
    "reviews": 780,
    "platform": "Flipkart",
    "image": "/products/sportswear/CM-SPT-005-front.jpg",
    "images": [
      "/products/sportswear/CM-SPT-005-front.jpg"
    ],
    "colors": [
      "Carbon Heather",
      "Academy Blue"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "ColdGear microfleece quarter-zip top designed with 4-way stretch fabric, thumbholes on cuffs, and reflective chest logo for night safety.",
    "priceHistory": [
      2199,
      1899,
      1749,
      1599,
      1599,
      1599
    ]
  },
  {
    "id": "CM-SPT-006",
    "title": "Relaxed Fit Cotton French Terry Joggers",
    "brand": "Performax",
    "category": "Sportswear",
    "subcategory": "Joggers",
    "gender": "Men",
    "price": 799,
    "originalPrice": 1499,
    "rating": 4.2,
    "reviews": 1610,
    "platform": "Trends",
    "image": "/products/sportswear/CM-SPT-006-front.jpg",
    "images": [
      "/products/sportswear/CM-SPT-006-front.jpg"
    ],
    "colors": [
      "Melange Grey",
      "Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available": true,
    "description": "Soft unbrushed French terry athletic joggers with comfortable ribbed waistband, deep zippered pockets, and tapered cuffs.",
    "priceHistory": [
      1099,
      999,
      899,
      799,
      799,
      799
    ]
  },
  {
    "id": "CM-SPT-007",
    "title": "Quick-Dry Anti-Odor Gym Stringer Vest",
    "brand": "HRX by Hrithik Roshan",
    "category": "Sportswear",
    "subcategory": "Vests",
    "gender": "Men",
    "price": 349,
    "originalPrice": 899,
    "rating": 4.1,
    "reviews": 2450,
    "platform": "Meesho",
    "image": "/products/sportswear/CM-SPT-007-front.jpg",
    "images": [
      "/products/sportswear/CM-SPT-007-front.jpg"
    ],
    "colors": [
      "Neon Lime",
      "Charcoal Black"
    ],
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "available": false,
    "description": "Deep-cut bodybuilding gym tank top with antibacterial silver ion finish and flatlock seams to prevent chafing during heavy lifts.",
    "priceHistory": [
      599,
      499,
      429,
      349,
      349,
      349
    ]
  }
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
