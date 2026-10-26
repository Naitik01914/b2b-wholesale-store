/**
 * ============================================================================
 * B2B Wholesale - Core Application Script (Vanilla JavaScript)
 * ============================================================================
 */

// Storage key rule
const CART_STORAGE_KEY = 'b2b-wholesale-cart';

// Default Product Data fallback (guarantees 100% functionality even on file:// protocol without local server CORS issues)
const DEFAULT_PRODUCTS = [
  {
    "id": 1,
    "name": "Cotton Hoodie",
    "slug": "cotton-hoodie",
    "sku": "FAS-2001",
    "price": 289,
    "category": "Fashion & Apparel",
    "categorySlug": "fashion-apparel",
    "moq": "20 Pcs",
    "rating": 5,
    "reviewsCount": 18,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/24.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/24.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/a4-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/a3-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/a5-1.jpg"
    ],
    "description": "Premium 100% heavyweight cotton hoodie tailored for wholesale orders. Breathable, durable, and available for custom embroidery and private labeling.",
    "featured": true
  },
  {
    "id": 2,
    "name": "Crew Neck T-Shirt",
    "slug": "crew-neck-t-shirt",
    "sku": "FAS-2002",
    "price": 298,
    "category": "Fashion & Apparel",
    "categorySlug": "fashion-apparel",
    "moq": "50 Pcs",
    "rating": 5,
    "reviewsCount": 24,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/23.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/23.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/a2-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/a1-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/ab-1.jpg"
    ],
    "description": "Classic crew neck t-shirt crafted from combed organic cotton. Perfect for retail brands, corporate apparel, and custom printing.",
    "featured": true
  },
  {
    "id": 3,
    "name": "Hair Care Collection",
    "slug": "hair-care-collection",
    "sku": "BEA-3001",
    "price": 459,
    "category": "Beauty & Personal Care",
    "categorySlug": "beauty-personal-care",
    "moq": "15 Sets",
    "rating": 5,
    "reviewsCount": 12,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/22.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/22.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/40-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/38-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/39-1.jpg"
    ],
    "description": "Salon-grade organic hair care formulation including sulfate-free shampoo, nourishing conditioner, and revitalizing hair serum.",
    "featured": true
  },
  {
    "id": 4,
    "name": "Cooker Set",
    "slug": "cooker-set",
    "sku": "HK-4001",
    "price": 640,
    "oldPrice": 689,
    "category": "Home & Kitchen",
    "categorySlug": "home-kitchen",
    "moq": "10 Sets",
    "rating": 5,
    "reviewsCount": 31,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/21.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1584990347449-a2924294a2fa?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/21.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/35-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/36-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/37-1.jpg"
    ],
    "description": "Complete non-stick granite cookware set with heat-resistant ergonomic handles. Induction and gas compatible.",
    "featured": true
  },
  {
    "id": 5,
    "name": "Body Lotion Set",
    "slug": "body-lotion-set",
    "sku": "BEA-5001",
    "price": 599,
    "category": "Beauty & Personal Care",
    "categorySlug": "beauty-personal-care",
    "moq": "25 Packs",
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/20.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1608248597359-3e3c23d40131?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/20.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/32-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/33-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/34-1.jpg"
    ],
    "description": "Ultra-hydrating botanical body lotions enriched with shea butter and vitamin E. Ideal for beauty spas and retail distributors.",
    "featured": true
  },
  {
    "id": 6,
    "name": "Hand Bag",
    "slug": "hand-bag",
    "sku": "FAS-6001",
    "price": 369,
    "category": "Fashion & Apparel",
    "categorySlug": "fashion-apparel",
    "moq": "15 Pcs",
    "rating": 5,
    "reviewsCount": 14,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/18.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/18.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/26-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/28-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/27-1.jpg"
    ],
    "description": "Designer luxury leather handbag with golden hardware accents and multi-compartment interior storage.",
    "featured": true
  },
  {
    "id": 7,
    "name": "Wooden Chair",
    "slug": "wooden-chair",
    "sku": "OFF-7001",
    "price": 589,
    "category": "Office Supplies",
    "categorySlug": "office-supplies",
    "moq": "8 Pcs",
    "rating": 5,
    "reviewsCount": 9,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/17.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/17.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/23-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/24-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/25-1.jpg"
    ],
    "description": "Ergonomic solid oak wood chair with curved back support, designed for modern workspaces, cafes, and executive suites.",
    "featured": true
  },
  {
    "id": 8,
    "name": "Office Chair",
    "slug": "office-chair",
    "sku": "Off-321",
    "brand": "HOMETECH",
    "price": 299,
    "category": "Office Supplies",
    "categorySlug": "office-supplies",
    "categories": "Electronics , Office Supplies",
    "moq": "10 Pcs",
    "rating": 5,
    "reviewsCount": 27,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/16.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1580481077195-c9998379294a?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/16.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/20a-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/19a-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/221-1.jpg"
    ],
    "shortDescription": "Facilisis netus leo maximus bibendum nascetur vel cras. Justo orci urna curae ligula potenti inceptos. Tortor nibh nisi nascetur porttitor fames.",
    "description": "High-back breathable mesh ergonomic office chair with adjustable lumbar support, 3D armrests, and pneumatic lift. Durable chrome base with synchronous tilt lock mechanism for commercial and executive office workspaces.",
    "featured": true
  },
  {
    "id": 9,
    "name": "Cordless Power Drill",
    "slug": "cordless-power-drill",
    "sku": "IND-9001",
    "price": 489,
    "category": "Industrial Supplies",
    "categorySlug": "industrial-supplies",
    "moq": "12 Units",
    "rating": 5,
    "reviewsCount": 38,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/15.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/15.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/16a-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/17a-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/18a-1.jpg"
    ],
    "description": "Brushless 20V heavy-duty cordless power drill with 2-speed transmission and 24+1 torque clutch for industrial applications.",
    "featured": true
  },
  {
    "id": 10,
    "name": "Steel Dish Rack",
    "slug": "steel-dish-rack",
    "sku": "HK-1001",
    "price": 225,
    "category": "Home & Kitchen",
    "categorySlug": "home-kitchen",
    "moq": "20 Pcs",
    "rating": 5,
    "reviewsCount": 16,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/14.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/14.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/13-a1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/14-a1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/15a-1.jpg"
    ],
    "description": "2-tier rust-proof stainless steel dish drying rack with automatic drainage spout and utensil caddy.",
    "featured": true
  },
  {
    "id": 11,
    "name": "Cooker",
    "slug": "cooker",
    "sku": "HK-1101",
    "price": 349,
    "category": "Home & Kitchen",
    "categorySlug": "home-kitchen",
    "moq": "15 Units",
    "rating": 5,
    "reviewsCount": 21,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/13.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1585695163986-06138d81ce4e?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/13.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/12a-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/11-a1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/10-1-1.jpg"
    ],
    "description": "Multi-functional smart electric pressure cooker with 12 preset cooking programs and safety lock mechanism.",
    "featured": true
  },
  {
    "id": 12,
    "name": "Washing Machine",
    "slug": "washing-machine",
    "sku": "ELE-1201",
    "price": 459,
    "category": "Electronics",
    "categorySlug": "electronics",
    "moq": "5 Units",
    "rating": 5,
    "reviewsCount": 35,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/12.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/12.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/7a-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/8-a1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/9-1-1.jpg"
    ],
    "description": "Energy-efficient 8kg front-load smart washing machine with inverter motor and steam allergy care technology.",
    "featured": true
  },
  {
    "id": 13,
    "name": "4K Smart LED TV",
    "slug": "4k-smart-led-tv",
    "sku": "ELE-1301",
    "price": 499,
    "category": "Electronics",
    "categorySlug": "electronics",
    "moq": "6 Units",
    "rating": 5,
    "reviewsCount": 42,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/11.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/11.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/3-1-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/2-1-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/1-1-1.jpg"
    ],
    "description": "55-inch Ultra HD 4K Smart TV featuring HDR10+, bezel-less display, Dolby Audio, and built-in voice assistants.",
    "featured": true
  },
  {
    "id": 14,
    "name": "Stand Mixer",
    "slug": "stand-mixer",
    "sku": "HK-1401",
    "price": 459,
    "category": "Home & Kitchen",
    "categorySlug": "home-kitchen",
    "moq": "10 Units",
    "rating": 5,
    "reviewsCount": 19,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/8.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/8.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/21-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/20-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/19-1.jpg"
    ],
    "description": "Commercial-grade 6.5L tilt-head stand mixer with planetary mixing action, dough hook, whisk, and flat beater.",
    "featured": true
  },
  {
    "id": 15,
    "name": "Earbuds Pro",
    "slug": "earbuds-pro",
    "sku": "ELE-1501",
    "price": 359,
    "category": "Electronics",
    "categorySlug": "electronics",
    "moq": "30 Pcs",
    "rating": 5,
    "reviewsCount": 58,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/6.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/6.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/13-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/15-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/14-1.jpg"
    ],
    "description": "Active noise cancelling wireless earbuds with spatial audio, IPX7 water resistance, and 36-hour battery case.",
    "featured": true
  },
  {
    "id": 16,
    "name": "Fitness Watch",
    "slug": "fitness-watch",
    "sku": "ELE-1601",
    "price": 249,
    "category": "Electronics",
    "categorySlug": "electronics",
    "moq": "25 Pcs",
    "rating": 5,
    "reviewsCount": 33,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/7-1.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/7-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/8-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/9-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/3.jpg"
    ],
    "description": "Smart fitness smartwatch with AMOLED touch display, heart rate monitor, SpO2 sensor, and 14-day standby time.",
    "featured": true
  },
  {
    "id": 17,
    "name": "Party Speaker",
    "slug": "party-speaker",
    "sku": "ELE-1701",
    "price": 319,
    "category": "Electronics",
    "categorySlug": "electronics",
    "moq": "20 Pcs",
    "rating": 5,
    "reviewsCount": 26,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/2.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/2.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/6-1-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/4-1-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/5-1-1.jpg"
    ],
    "description": "Rugged waterproof Bluetooth 5.3 portable speaker delivering 360-degree stereo sound with deep bass radiators.",
    "featured": true
  },
  {
    "id": 18,
    "name": "Water Bottle",
    "slug": "water-bottle",
    "sku": "OUT-1801",
    "price": 219,
    "category": "Outdoor & Drinkware",
    "categorySlug": "outdoor-drinkware",
    "moq": "50 Pcs",
    "rating": 5,
    "reviewsCount": 29,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/1.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/3-1-2.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/2-1-2.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/1-1-2.jpg"
    ],
    "description": "Vacuum-insulated double-wall stainless steel thermal water bottle. Keeps drinks cold for 24h and hot for 12h.",
    "featured": true
  },
  {
    "id": 19,
    "name": "Wireless Airpods",
    "slug": "wireless-airpods",
    "sku": "ELE-1901",
    "price": 149,
    "oldPrice": 199,
    "category": "Electronics",
    "categorySlug": "electronics",
    "moq": "20 Pcs",
    "rating": 5,
    "reviewsCount": 45,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/5.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/5.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/10-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/12-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/11-1.jpg"
    ],
    "description": "True wireless earbuds with smart noise reduction, quick-charge case, and seamless Bluetooth connectivity.",
    "featured": true
  },
  {
    "id": 20,
    "name": "Accessory bag",
    "slug": "Accessory-bag",
    "sku": "OFF-8001",
    "price": 299,
    "category": "Office Supplies",
    "categorySlug": "office-supplies",
    "moq": "10 Pcs",
    "rating": 5,
    "reviewsCount": 27,
    "image": "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/19.jpg",
    "fallbackImage": "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80",
    "gallery": [
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/19.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/31-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/29-1.jpg",
      "https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/30-1.jpg"
    ],
    "description": "Durable multipurpose zippered accessory bag designed for tech accessories, office stationery, and travel essentials.",
    "featured": true
  }
];;

// App State
let allProducts = [...DEFAULT_PRODUCTS];
let currentCart = [];

// Initialize Cart from localStorage
function initCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved !== null) {
      currentCart = JSON.parse(saved);
    } else {
      // First visit demo seed matching ThemeHunk demo screenshot
      const defaultProduct = allProducts.find(p => p.id === 3);
      if (defaultProduct) {
        currentCart = [{ ...defaultProduct, quantity: 1 }];
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(currentCart));
      } else {
        currentCart = [];
      }
    }
  } catch (e) {
    console.warn('Could not read cart from localStorage', e);
    currentCart = [];
  }
  updateCartUI();
}

// Save Cart to localStorage
function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(currentCart));
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
  updateCartUI();
}

// Add Item to Cart
function addToCart(productId, quantity = 1) {
  const product = allProducts.find(p => p.id === Number(productId));
  if (!product) return;

  const existing = currentCart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += Number(quantity);
  } else {
    currentCart.push({
      ...product,
      quantity: Number(quantity)
    });
  }

  saveCart();
  showToast(`Added <strong>${product.name}</strong> to your cart!`);
}

// Update Cart Item Quantity
function updateCartQuantity(productId, delta) {
  const item = currentCart.find(i => i.id === Number(productId));
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveCart();
  }
}

// Remove Item from Cart (Removes all pieces of this item)
function removeFromCart(productId) {
  const item = currentCart.find(i => i.id === Number(productId));
  const itemName = item ? item.name : 'Item';
  currentCart = currentCart.filter(i => i.id !== Number(productId));
  saveCart();
  if (currentCart.length === 0) {
    showToast(`Removed all pieces of <strong>${itemName}</strong>. Cart is now empty.`);
  } else {
    showToast(`Removed all pieces of <strong>${itemName}</strong> from cart`);
  }
}

// Update Cart Badge, Subtotal & Drawer UI
// Ensure Cart Drawer Exists on ANY Page
function ensureCartDrawerExists() {
  let overlay = document.getElementById('cartDrawerOverlay');
  let drawer = document.getElementById('cartDrawer');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'cartDrawerOverlay';
    overlay.className = 'cart-drawer-overlay';
    overlay.onclick = closeCartDrawer;
    document.body.appendChild(overlay);
  }

  if (!drawer) {
    drawer = document.createElement('aside');
    drawer.id = 'cartDrawer';
    drawer.className = 'cart-drawer';
    document.body.appendChild(drawer);
  }
}

// Update Cart Badge, Subtotal & ThemeHunk Drawer UI
function updateCartUI() {
  ensureCartDrawerExists();
  const totalCount = currentCart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = currentCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Update badges
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  // Update header cart amount: only show when items exist (subtotal > 0), otherwise hide completely so only logo shows
  document.querySelectorAll('.cart-header-amount').forEach(amountEl => {
    if (totalCount > 0 && subtotal > 0) {
      amountEl.textContent = `$${subtotal.toFixed(2)}`;
      amountEl.style.display = 'inline-flex';
    } else {
      amountEl.textContent = '';
      amountEl.style.display = 'none';
    }
  });

  // Render Cart Drawer
  const drawer = document.getElementById('cartDrawer');
  if (drawer) {
    // Pick suggested product (Hand Bag id: 6 or first available product not in cart)
    const suggestedProduct = allProducts.find(p => p.id === 6 && !currentCart.some(c => c.id === p.id))
      || allProducts.find(p => !currentCart.some(c => c.id === p.id))
      || allProducts[0];

    drawer.innerHTML = `
      <!-- Header -->
      <div class="cart-drawer-header">
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-bag text-dark" style="font-size: 19px;"></i>
          <span class="cart-drawer-title">Your Cart</span>
          <span class="cart-drawer-count-badge">${totalCount}</span>
        </div>
        <button class="cart-drawer-close-btn" onclick="closeCartDrawer()" aria-label="Close">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <!-- Drawer Body -->
      <div class="cart-drawer-body">
        ${currentCart.length === 0 ? `
          <div class="text-center py-5 text-muted">
            <i class="bi bi-cart-x display-3 d-block mb-3 text-secondary"></i>
            <h5 class="fw-bold">Your cart is currently empty</h5>
            <p class="small text-muted">Explore our wholesale catalog to source quality products.</p>
            <a href="shop.html" class="btn btn-dark mt-2 px-4 py-2" onclick="closeCartDrawer()">Start Sourcing</a>
          </div>
        ` : `
          <!-- Cart Items List -->
          <div class="th-cart-items-list mb-3">
            ${currentCart.map(item => `
              <div class="th-cart-item">
                <button class="th-cart-item-delete" onclick="removeFromCart(${item.id})" title="Remove all pieces of this item" aria-label="Remove item">
                  <i class="bi bi-trash3"></i>
                </button>
                <img src="${item.image}" onerror="this.onerror=null; this.src='${item.fallbackImage}'" alt="${item.name}" class="th-cart-item-img">
                <div class="th-cart-item-info">
                  <h6 class="th-cart-item-title">${item.name}</h6>
                  <div class="th-cart-item-bottom-row">
                    <div class="th-cart-item-stepper">
                      <button class="th-stepper-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                      <span class="th-stepper-qty">${item.quantity}</span>
                      <button class="th-stepper-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="th-cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Products you may like Section -->
          ${suggestedProduct ? `
            <div class="th-suggested-section">
              <div class="th-suggested-header">Products you may like</div>
              <div class="th-suggested-card">
                <img src="${suggestedProduct.image}" onerror="this.onerror=null; this.src='${suggestedProduct.fallbackImage}'" alt="${suggestedProduct.name}" class="th-suggested-img">
                <div class="th-suggested-info">
                  <div class="th-suggested-title">${suggestedProduct.name}</div>
                  <div class="th-suggested-price">$${suggestedProduct.price.toFixed(2)}</div>
                </div>
                <button class="th-suggested-add-btn" onclick="addToCart(${suggestedProduct.id}, 1)" title="Add to Cart">
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          ` : ''}
        `}
      </div>

      <!-- Drawer Footer -->
      ${currentCart.length > 0 ? `
        <div class="cart-drawer-footer">
          <div class="th-payment-heading">Payment Details</div>
          <div class="th-subtotal-row">
            <span class="th-subtotal-lbl">Sub Total</span>
            <span class="th-subtotal-val">$${subtotal.toFixed(2)}</span>
          </div>

          <!-- Promo Code Input Group -->
          <div class="th-promo-group">
            <input type="text" id="thPromoInput" class="th-promo-input" placeholder="Enter your Promo Code">
            <button class="th-promo-apply-btn" onclick="applyPromoCode()">APPLY</button>
          </div>

          <!-- Action Buttons (View Cart & Checkout) -->
          <div class="th-action-buttons-row">
            <a href="cart.html" class="th-btn-view-cart" onclick="closeCartDrawer()">View cart</a>
            <button class="th-btn-checkout" onclick="proceedToCheckoutFromDrawer(${subtotal})">Checkout - $${subtotal.toFixed(2)}</button>
          </div>

          <!-- Powered by ThemeHunk -->
          <div class="th-powered-by">
            Powered by <span>ThemeHunk</span>
          </div>
        </div>
      ` : ''}
    `;
  }

  // Update Cart Page Table if on cart.html
  renderCartPageTable(subtotal);

  // Update Checkout Page if on checkout.html
  renderCheckoutPage(subtotal);
}

function proceedToCheckoutFromDrawer(subtotal) {
  closeCartDrawer();
  window.location.href = 'checkout.html';
}

function renderCheckoutPage(subtotal) {
  const checkoutItemsList = document.getElementById('checkoutItemsList');
  const checkoutSubtotal = document.getElementById('checkoutSubtotal');
  const checkoutTotal = document.getElementById('checkoutTotal');

  if (!checkoutItemsList) return;

  if (currentCart.length === 0) {
    checkoutItemsList.innerHTML = `
      <div class="text-center py-4 text-muted">
        <i class="bi bi-cart-x fs-2 d-block mb-2 text-secondary"></i>
        <p class="mb-0">Your cart is currently empty.</p>
        <a href="shop.html" class="btn btn-outline-dark btn-sm mt-2">Return to shop</a>
      </div>
    `;
  } else {
    checkoutItemsList.innerHTML = currentCart.map(item => `
      <div class="checkout-item-row">
        <div class="d-flex align-items-center gap-3">
          <div class="checkout-item-img-wrap">
            <img src="${item.image}" onerror="this.onerror=null; this.src='${item.fallbackImage}'" alt="${item.name}" class="checkout-item-img">
            <span class="checkout-item-qty-badge">${item.quantity}</span>
          </div>
          <div>
            <h6 class="checkout-item-name mb-0">${item.name}</h6>
            <span class="checkout-item-unit-price text-muted small">$${item.price.toFixed(2)}</span>
          </div>
        </div>
        <div class="checkout-item-total fw-bold text-dark">
          $${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    `).join('');
  }

  if (checkoutSubtotal) checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (checkoutTotal) checkoutTotal.textContent = `$${subtotal.toFixed(2)}`;
}

function toggleCheckoutCoupon() {
  const collapse = document.getElementById('checkoutCouponCollapse');
  const icon = document.getElementById('checkoutCouponIcon');
  if (collapse) {
    collapse.classList.toggle('d-none');
    if (icon) {
      icon.classList.toggle('bi-chevron-up');
      icon.classList.toggle('bi-chevron-down');
    }
  }
}

function applyCheckoutCoupon() {
  const input = document.getElementById('checkoutCouponInput');
  const code = input ? input.value.trim().toUpperCase() : '';
  if (!code) {
    showToast('Please enter a coupon code');
    return;
  }
  showToast(`🎉 Coupon "${code}" applied successfully!`);
}

function selectPaymentMethod(method) {
  document.querySelectorAll('.payment-method-card').forEach(card => card.classList.remove('active'));
  const radio = document.querySelector(`input[name="paymentOption"][value="${method}"]`);
  if (radio) {
    radio.checked = true;
    const card = radio.closest('.payment-method-card');
    if (card) card.classList.add('active');
  }
}

function handlePlaceOrder(event) {
  event.preventDefault();
  if (currentCart.length === 0) {
    showToast('Your cart is empty. Add products before placing order.');
    return;
  }
  const selectedPayment = document.querySelector('input[name="paymentOption"]:checked');
  const paymentValue = selectedPayment ? selectedPayment.value : 'bank';
  const paymentLabels = {
    bank: 'Direct Bank Wire Transfer (NEFT/RTGS)',
    upi: 'UPI / QR Code / Net Banking',
    card: 'Credit / Debit Card',
    cod: 'Cash on Delivery (Pay on Delivery)'
  };
  const paymentName = paymentLabels[paymentValue] || 'Direct Bank Wire Transfer';
  const orderId = `B2B-${Math.floor(100000 + Math.random() * 900000)}`;

  alert(`🎉 Wholesale Order Placed Successfully!\n\nOrder ID: #${orderId}\nPayment Method: ${paymentName}\n\nThank you for sourcing with B2B Wholesale. Your proforma invoice, payment reference, and order confirmation have been sent to your email.`);
  currentCart = [];
  saveCart();
  window.location.href = 'index.html';
}

function applyPromoCode() {
  const input = document.getElementById('thPromoInput');
  const code = input ? input.value.trim().toUpperCase() : '';
  if (!code) {
    showToast('Please enter a promo code');
    return;
  }
  if (code === 'B2B10' || code === 'SAVE10' || code === 'WHOLESALE') {
    showToast(`🎉 Promo code ${code} applied! 10% wholesale discount activated.`);
  } else {
    showToast(`Promo code "${code}" applied successfully!`);
  }
}

function applyPageCoupon() {
  const input = document.getElementById('cartCouponInput');
  const code = input ? input.value.trim().toUpperCase() : '';
  if (!code) {
    showToast('Please enter a coupon code');
    return;
  }
  showToast(`🎉 Coupon code "${code}" applied successfully!`);
}

// Render Cart Page (cart.html)
function renderCartPageTable(subtotal) {
  const cartTableBody = document.getElementById('cartPageTableBody');
  const cartSummarySubtotal = document.getElementById('cartSummarySubtotal');
  const cartSummaryTotal = document.getElementById('cartSummaryTotal');

  if (cartTableBody) {
    if (currentCart.length === 0) {
      cartTableBody.innerHTML = `
        <tr>
          <td colspan="2" class="text-center py-5 text-muted">
            <i class="bi bi-cart-x display-4 text-secondary d-block mb-3"></i>
            <h4 class="fw-bold text-dark">Your cart is currently empty.</h4>
            <p class="small text-muted mb-4">Before proceeding to checkout you must add some products to your shopping cart.</p>
            <a href="shop.html" class="btn btn-dark px-4 py-2 rounded-3">Return to shop</a>
          </td>
        </tr>
      `;
    } else {
      cartTableBody.innerHTML = currentCart.map(item => `
        <tr>
          <td class="th-col-product py-4">
            <div class="d-flex align-items-center gap-3 gap-md-4">
              <img src="${item.image}" onerror="this.onerror=null; this.src='${item.fallbackImage}'" alt="${item.name}" class="th-page-item-img">
              <div class="th-page-item-details">
                <h5 class="th-page-item-name">${item.name}</h5>
                <div class="th-page-item-price">$${item.price.toFixed(2)}</div>
                <div class="th-page-stepper-wrap">
                  <div class="th-page-stepper">
                    <button class="th-stepper-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span class="th-stepper-qty">${item.quantity}</span>
                    <button class="th-stepper-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                  </div>
                  <button class="th-page-trash-btn" onclick="removeFromCart(${item.id})" title="Remove item">
                    <i class="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </td>
          <td class="th-col-total text-end align-middle py-4">
            <span class="th-page-line-total">$${(item.price * item.quantity).toFixed(2)}</span>
          </td>
        </tr>
      `).join('');
    }

    if (cartSummarySubtotal) cartSummarySubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (cartSummaryTotal) cartSummaryTotal.textContent = `$${subtotal.toFixed(2)}`;
  }
}

// Open / Close Cart Drawer
function openCartDrawer() {
  ensureCartDrawerExists();
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Universal Category Gallery Fallbacks
const CATEGORY_GALLERIES = {
  'fashion-apparel': [
    'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80'
  ],
  'beauty-personal-care': [
    'https://images.unsplash.com/photo-1608248597359-3e3c23d40131?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&auto=format&fit=crop&q=80'
  ],
  'home-kitchen': [
    'https://images.unsplash.com/photo-1584990347449-a2924294a2fa?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80'
  ],
  'electronics': [
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80'
  ],
  'office-supplies': [
    'https://wpthemes.themehunk.com/b2b-wholesale/wp-content/uploads/sites/385/2026/08/16.jpg',
    'https://images.unsplash.com/photo-1580481077195-c9998379294a?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=80'
  ],
  'industrial-supplies': [
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&auto=format&fit=crop&q=80'
  ],
  'outdoor-drinkware': [
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=600&auto=format&fit=crop&q=80'
  ]
};

// Returns guaranteed 4 sub-images for hover sliding
function getProductGallery(p) {
  if (Array.isArray(p.gallery) && p.gallery.length >= 2) {
    return p.gallery;
  }
  const primary = p.image || p.fallbackImage;
  const secondary = p.fallbackImage || p.image;
  const catList = CATEGORY_GALLERIES[p.categorySlug] || CATEGORY_GALLERIES['electronics'];
  return [
    primary,
    secondary !== primary ? secondary : (catList[0] || primary),
    catList[1] || catList[0] || secondary,
    catList[2] || catList[3] || primary
  ];
}

// Generate Product Card HTML with multi-image sliding track and hover dots
function createProductCardHTML(product) {
  const saleBadge = product.oldPrice ? `<span class="product-sale-badge">Sale</span>` : '';
  const moqBadge = '';
  const oldPriceHtml = product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : '';
  const gallery = getProductGallery(product);

  const slidesHtml = gallery.map((imgUrl) => `
    <div class="product-slide-item">
      <img src="${imgUrl}" onerror="this.onerror=null; this.src='${product.fallbackImage || product.image}'" alt="${product.name}" loading="lazy">
    </div>
  `).join('');

  const dotsHtml = gallery.map((_, idx) => `
    <span class="p-dot ${idx === 0 ? 'active' : ''}"></span>
  `).join('');

  return `
    <div class="col">
      <div class="product-card" data-product-id="${product.id}" onmouseenter="startCardSlide(this)" onmouseleave="stopCardSlide(this)">
        <div class="product-image-container">
          ${saleBadge}
          ${moqBadge}
          <a href="product.html?id=${product.id}" class="product-slider-link">
            <div class="product-slider-track">
              ${slidesHtml}
            </div>
          </a>
          <div class="product-card-dots">
            ${dotsHtml}
          </div>
          <div class="product-hover-actions">
            <button class="btn-hover-icon" onclick="openQuickView(${product.id})" title="Quick View">
              <i class="bi bi-eye"></i>
            </button>
            <button class="btn-hover-icon" onclick="addToCart(${product.id})" title="Add to Cart">
              <i class="bi bi-bag-plus"></i>
            </button>
          </div>
        </div>
        <div class="product-body">
          <div class="product-category-label">${product.category}</div>
          <h4 class="product-title">
            <a href="product.html?id=${product.id}">${product.name}</a>
          </h4>
          <div class="product-rating">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <span>(${product.reviewsCount || 15})</span>
          </div>
          <div class="product-footer">
            <div class="product-price">
              <span class="current-price">$${product.price.toFixed(2)}</span>
              ${oldPriceHtml}
            </div>
            <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
              <i class="bi bi-bag"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Automatic Hover Slide on Product Cards
function startCardSlide(cardEl) {
  const track = cardEl.querySelector('.product-slider-track');
  const dots = cardEl.querySelectorAll('.product-card-dots .p-dot');
  if (!track || dots.length <= 1) return;

  if (cardEl._slideInterval) {
    clearInterval(cardEl._slideInterval);
    cardEl._slideInterval = null;
  }
  if (cardEl._slideTimeout) {
    clearTimeout(cardEl._slideTimeout);
    cardEl._slideTimeout = null;
  }

  let currentIndex = cardEl._currentSlideIndex || 0;
  const totalSlides = dots.length;

  // Immediate smooth slide transition after 300ms, then recurring every 1200ms
  cardEl._slideTimeout = setTimeout(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    cardEl._currentSlideIndex = currentIndex;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      if (i === currentIndex) dot.classList.add('active');
      else dot.classList.remove('active');
    });

    cardEl._slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      cardEl._currentSlideIndex = currentIndex;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, i) => {
        if (i === currentIndex) dot.classList.add('active');
        else dot.classList.remove('active');
      });
    }, 1200);
  }, 300);
}

function stopCardSlide(cardEl) {
  if (cardEl._slideTimeout) {
    clearTimeout(cardEl._slideTimeout);
    cardEl._slideTimeout = null;
  }
  if (cardEl._slideInterval) {
    clearInterval(cardEl._slideInterval);
    cardEl._slideInterval = null;
  }
  cardEl._currentSlideIndex = 0;
  const track = cardEl.querySelector('.product-slider-track');
  const dots = cardEl.querySelectorAll('.product-card-dots .p-dot');
  if (track) {
    track.style.transform = 'translateX(0%)';
  }
  if (dots && dots.length) {
    dots.forEach((dot, i) => {
      if (i === 0) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }
}

// Render Products Grid
function renderProducts(targetContainerId, productsList) {
  const container = document.getElementById(targetContainerId);
  if (!container) return;

  if (productsList.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search display-4 text-muted d-block mb-3"></i>
        <h5>No products match your search or filter</h5>
        <p class="text-muted">Try checking your spelling or clearing filters.</p>
        <button class="btn btn-outline-dark btn-sm" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = productsList.map(p => createProductCardHTML(p)).join('');
}

// Ensure Quick View Modal is present in DOM with ThemeHunk markup
function ensureQuickViewModal() {
  let modalEl = document.getElementById('quickViewModal');
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.className = 'modal fade';
    modalEl.id = 'quickViewModal';
    modalEl.tabIndex = -1;
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.innerHTML = `
      <div class="modal-dialog modal-lg modal-dialog-centered qv-modal-dialog">
        <div class="modal-content border-0 qv-modal-card">
          <button type="button" class="qv-close-btn" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x-lg"></i>
          </button>
          <div class="modal-body p-0">
            <div class="row g-0 align-items-center">
              <div class="col-md-6 qv-gallery-col">
                <div class="qv-slider-container" id="qvSliderContainer">
                  <div class="qv-slider-track" id="qvSliderTrack"></div>
                </div>
                <div class="qv-dots" id="qvDots"></div>
              </div>
              <div class="col-md-6 qv-info-col">
                <div class="qv-brand" id="qvBrand">HOMETECH</div>
                <h2 class="qv-title" id="qvTitle">Office Chair</h2>
                <div class="qv-price" id="qvPrice">$299.00</div>
                <div class="qv-meta-list">
                  <div class="qv-meta-item">
                    <span class="qv-meta-label">SKU:</span>
                    <span class="qv-meta-value" id="qvSku">Off-321</span>
                  </div>
                  <div class="qv-meta-item">
                    <span class="qv-meta-label">Categories:</span>
                    <span class="qv-meta-value" id="qvCategories">Electronics , Office Supplies</span>
                  </div>
                </div>
                <div class="qv-share-row">
                  <span class="qv-share-label">Share:</span>
                  <div class="qv-share-icons">
                    <a href="#" class="qv-share-icon" title="Share on Facebook" onclick="event.preventDefault(); window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="qv-share-icon" title="Share on X" onclick="event.preventDefault(); window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), '_blank');"><i class="bi bi-twitter-x"></i></a>
                    <a href="#" class="qv-share-icon" title="Share on Pinterest" onclick="event.preventDefault(); window.open('https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href), '_blank');"><i class="bi bi-pinterest"></i></a>
                    <a href="#" class="qv-share-icon" title="Share on LinkedIn" onclick="event.preventDefault(); window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href), '_blank');"><i class="bi bi-linkedin"></i></a>
                    <a href="#" class="qv-share-icon" title="Copy Link" onclick="event.preventDefault(); copyProductLink();"><i class="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                <div class="qv-accordion-section">
                  <div class="qv-accordion-item">
                    <button type="button" class="qv-accordion-header" onclick="toggleQvAccordion(this)">
                      <span>Short Description</span>
                      <i class="bi bi-dash qv-accordion-icon"></i>
                    </button>
                    <div class="qv-accordion-body show" id="qvShortDesc">
                      Facilisis netus leo maximus bibendum nascetur vel cras. Justo orci urna curae ligula potenti inceptos. Tortor nibh nisi nascetur porttitor fames.
                    </div>
                  </div>
                  <div class="qv-accordion-item">
                    <button type="button" class="qv-accordion-header" onclick="toggleQvAccordion(this)">
                      <span>Description</span>
                      <i class="bi bi-plus qv-accordion-icon"></i>
                    </button>
                    <div class="qv-accordion-body" id="qvFullDesc">
                      Premium commercial wholesale merchandise with high-durability finish.
                    </div>
                  </div>
                </div>
                <div class="qv-action-row">
                  <div class="qv-stepper">
                    <button type="button" class="qv-stepper-btn" onclick="stepQvQty(-1)" title="Decrease quantity">−</button>
                    <input type="number" id="qvQuantity" class="qv-stepper-input" value="1" min="1" readonly>
                    <button type="button" class="qv-stepper-btn" onclick="stepQvQty(1)" title="Increase quantity">+</button>
                  </div>
                  <button type="button" id="qvAddToCartBtn" class="qv-add-to-cart-btn">
                    <i class="bi bi-bag"></i> ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalEl);
  }
  return modalEl;
}

// Quick View Slider & State
let qvSlideInterval = null;
let qvCurrentSlide = 0;

// Open ThemeHunk Quick View Modal
function openQuickView(productId) {
  const product = allProducts.find(p => p.id === Number(productId));
  if (!product) return;

  const modalEl = ensureQuickViewModal();
  if (!modalEl) return;

  // Set brand, title, price, SKU, Categories
  const brandEl = document.getElementById('qvBrand');
  if (brandEl) brandEl.textContent = product.brand || 'HOMETECH';

  const titleEl = document.getElementById('qvTitle');
  if (titleEl) titleEl.textContent = product.name;

  const priceEl = document.getElementById('qvPrice');
  if (priceEl) priceEl.textContent = `$${Number(product.price).toFixed(2)}`;

  const skuEl = document.getElementById('qvSku');
  if (skuEl) skuEl.textContent = product.sku || 'Off-321';

  const catEl = document.getElementById('qvCategories');
  if (catEl) catEl.textContent = product.categories || (product.category + (product.categorySlug === 'office-supplies' ? ' , Electronics' : ''));

  // Accordion descriptions
  const shortDescEl = document.getElementById('qvShortDesc');
  if (shortDescEl) {
    shortDescEl.textContent = product.shortDescription || product.description || 'Facilisis netus leo maximus bibendum nascetur vel cras. Justo orci urna curae ligula potenti inceptos. Tortor nibh nisi nascetur porttitor fames.';
  }

  const fullDescEl = document.getElementById('qvFullDesc');
  if (fullDescEl) {
    fullDescEl.textContent = product.description || 'High-back breathable mesh ergonomic office chair with adjustable lumbar support, 3D armrests, and pneumatic lift.';
  }

  // Reset Quantity
  const qtyInput = document.getElementById('qvQuantity');
  if (qtyInput) qtyInput.value = '1';

  // Build Gallery Slides & Dots
  const gallery = getProductGallery(product);
  const trackEl = document.getElementById('qvSliderTrack');
  const dotsEl = document.getElementById('qvDots');

  if (trackEl) {
    trackEl.innerHTML = gallery.map((imgUrl) => `
      <div class="qv-slide-item">
        <img src="${imgUrl}" onerror="this.onerror=null; this.src='${product.fallbackImage || product.image}'" alt="${product.name}">
      </div>
    `).join('');
    trackEl.style.transform = 'translateX(0%)';
  }

  qvCurrentSlide = 0;
  if (dotsEl) {
    dotsEl.innerHTML = gallery.map((_, idx) => `
      <span class="qv-dot ${idx === 0 ? 'active' : ''}" onclick="goToQvSlide(${idx}, true)" title="Slide ${idx + 1}"></span>
    `).join('');
  }

  // Start automatic sliding IMMEDIATELY upon modal opening (No manual click needed!)
  stopQvAutoSlide();
  if (gallery.length > 1) {
    startQvAutoSlide(gallery.length);
  }

  // When hovering on slider container, pause; when mouse leaves, continue auto-sliding
  const sliderContainer = document.getElementById('qvSliderContainer');
  if (sliderContainer) {
    sliderContainer.onmouseenter = () => {
      stopQvAutoSlide();
    };
    sliderContainer.onmouseleave = () => {
      if (gallery.length > 1) {
        startQvAutoSlide(gallery.length);
      }
    };
  }

  // Add to cart button binding
  const addBtn = document.getElementById('qvAddToCartBtn');
  if (addBtn) {
    addBtn.onclick = () => {
      const qty = parseInt(document.getElementById('qvQuantity')?.value || '1', 10);
      addToCart(product.id, qty);
      const bsModal = bootstrap.Modal.getInstance(modalEl);
      if (bsModal) bsModal.hide();
    };
  }

  // Clean up timer on modal close
  modalEl.addEventListener('hidden.bs.modal', () => {
    stopQvAutoSlide();
  }, { once: true });

  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.show();
}

function goToQvSlide(index, restartTimer = false) {
  const trackEl = document.getElementById('qvSliderTrack');
  const dots = document.querySelectorAll('.qv-dot');
  if (!trackEl) return;
  qvCurrentSlide = index;
  trackEl.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    if (i === index) dot.classList.add('active');
    else dot.classList.remove('active');
  });
  if (restartTimer && dots.length > 1) {
    startQvAutoSlide(dots.length);
  }
}

function startQvAutoSlide(total) {
  if (qvSlideInterval) clearInterval(qvSlideInterval);
  if (!total || total <= 1) return;
  qvSlideInterval = setInterval(() => {
    qvCurrentSlide = (qvCurrentSlide + 1) % total;
    goToQvSlide(qvCurrentSlide, false);
  }, 1800);
}

function stopQvAutoSlide() {
  if (qvSlideInterval) {
    clearInterval(qvSlideInterval);
    qvSlideInterval = null;
  }
}

function stepQvQty(delta) {
  const input = document.getElementById('qvQuantity');
  if (!input) return;
  let val = parseInt(input.value || '1', 10) + delta;
  if (val < 1) val = 1;
  input.value = val;
}

function toggleQvAccordion(headerBtn) {
  const item = headerBtn.closest('.qv-accordion-item');
  const body = item.querySelector('.qv-accordion-body');
  const icon = headerBtn.querySelector('.qv-accordion-icon');
  if (!body) return;

  const isShown = body.classList.contains('show');
  if (isShown) {
    body.classList.remove('show');
    if (icon) {
      icon.classList.remove('bi-dash');
      icon.classList.add('bi-plus');
    }
  } else {
    body.classList.add('show');
    if (icon) {
      icon.classList.remove('bi-plus');
      icon.classList.add('bi-dash');
    }
  }
}

function copyProductLink() {
  const url = window.location.href;
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('Product link copied to clipboard!');
    }).catch(() => {
      showToast('Link ready to share: ' + url);
    });
  } else {
    showToast('Link ready to share: ' + url);
  }
}

// Show Toast Message
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="bi bi-check-circle-fill"></i> <span>${message}</span>`;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}

// Global Search Handler
function handleSearch(keyword, category = '') {
  let filtered = [...allProducts];

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.categorySlug === category || p.category.toLowerCase() === category.toLowerCase());
  }

  if (keyword && keyword.trim() !== '') {
    const q = keyword.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  return filtered;
}

// Reset Filters
function resetFilters() {
  const searchInput = document.getElementById('globalSearchInput');
  const catSelect = document.getElementById('searchCategorySelect');
  if (searchInput) searchInput.value = '';
  if (catSelect) catSelect.value = 'all';

  renderProducts('featuredProductsGrid', allProducts.slice(0, 8));
  renderProducts('shopProductsGrid', allProducts);
}

// Fetch JSON data if available
async function loadCatalogData() {
  try {
    const response = await fetch('data/products.json');
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        allProducts = data;
      }
    }
  } catch (err) {
    console.log('Using default product catalog array');
  }

  // Initial page renders
  if (document.getElementById('featuredProductsGrid')) {
    renderProducts('featuredProductsGrid', allProducts.slice(0, 12));
  }
  if (document.getElementById('popularProductsGrid')) {
    const popularIds = [4, 8, 12, 15, 17, 19, 9, 14, 16, 13, 18, 20];
    const popularItems = popularIds.map(id => allProducts.find(p => p.id === id)).filter(Boolean);
    renderProducts('popularProductsGrid', popularItems.length > 0 ? popularItems : allProducts.slice(8, 14));
  }
  if (document.getElementById('shopProductsGrid')) {
    renderProducts('shopProductsGrid', allProducts);
  }

  initCart();
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadCatalogData();

  // Search Submit Listener
  const searchForm = document.getElementById('globalSearchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const keyword = document.getElementById('globalSearchInput')?.value || '';
      const category = document.getElementById('searchCategorySelect')?.value || '';

      // If on home page and shop page exists, or filter on current page
      if (document.getElementById('shopProductsGrid')) {
        const results = handleSearch(keyword, category);
        renderProducts('shopProductsGrid', results);
      } else if (document.getElementById('featuredProductsGrid')) {
        const results = handleSearch(keyword, category);
        renderProducts('featuredProductsGrid', results);
        document.getElementById('featuredSection')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = `shop.html?search=${encodeURIComponent(keyword)}&category=${encodeURIComponent(category)}`;
      }
    });
  }

  // Check URL params on shop page
  if (window.location.pathname.includes('shop.html')) {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search');
    const catParam = params.get('category');
    if (searchParam || catParam) {
      setTimeout(() => {
        const results = handleSearch(searchParam || '', catParam || '');
        renderProducts('shopProductsGrid', results);
      }, 100);
    }
  }
});
// Auto-highlight active navigation link
document.querySelectorAll('.nav-links-list a').forEach(link => {
  const currentUrl = window.location.pathname.split('/').pop() + window.location.search;
  const linkHref = link.getAttribute('href');
  if (linkHref && currentUrl.includes(linkHref)) {
    document.querySelectorAll('.nav-links-list a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  }
});

