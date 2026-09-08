import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rawProducts } from "./catalog-data.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_FILE = path.resolve(__dirname, "../frontend/src/data/products.ts");

const products = rawProducts.map((p) => {
  const imagePath = `/products/${p.folder}/${p.id}-front.jpg`;
  return {
    id: p.id,
    title: p.title,
    brand: p.brand,
    category: p.category,
    subcategory: p.subcategory,
    gender: p.gender,
    price: p.price,
    originalPrice: p.originalPrice,
    rating: p.rating,
    reviews: p.reviews,
    platform: p.platform,
    image: imagePath,
    images: [imagePath],
    colors: p.colors,
    sizes: p.sizes,
    available: p.available,
    description: p.description,
    priceHistory: p.priceHistory,
  };
});

const content = `export type Platform = "AJIO" | "Amazon" | "Flipkart" | "Myntra" | "Nike" | "Meesho" | "Trends";

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

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
`;

fs.writeFileSync(TARGET_FILE, content, "utf8");
console.log(`Successfully generated ${products.length} products in ${TARGET_FILE}`);
