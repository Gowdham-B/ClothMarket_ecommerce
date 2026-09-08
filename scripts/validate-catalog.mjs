import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCTS_FILE = path.resolve(__dirname, "../frontend/src/data/products.ts");
const PUBLIC_DIR = path.resolve(__dirname, "../frontend/public");

const ALLOWED_PLATFORMS = new Set(["AJIO", "Amazon", "Flipkart", "Myntra", "Nike", "Meesho", "Trends"]);

function parseProductsFromTs(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/export const products: Product\[\] = (\[[\s\S]*?\]);\s*export const formatPrice/);
  if (!match) {
    throw new Error("Could not parse products array from " + filePath);
  }
  return JSON.parse(match[1]);
}

function runValidation() {
  console.log("==================================================");
  console.log("   CLOTHMARKET CATALOGUE VALIDATION REPORT");
  console.log("==================================================\n");

  const errors = [];
  const warnings = [];

  const products = parseProductsFromTs(PRODUCTS_FILE);
  console.log(`Checking products dataset at: ${PRODUCTS_FILE}`);
  console.log(`Total Products Count: ${products.length}`);

  // 1. Check Product Count >= 100
  if (products.length < 100) {
    errors.push(`Requirement failed: Catalogue has ${products.length} products (expected at least 100).`);
  }

  const seenIds = new Set();
  const seenImages = new Map();
  const categoryCounts = {};
  const platformCounts = {};

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const prefix = `[Product #${i + 1} | ${p.id || "MISSING_ID"}]`;

    // 2. Unique Product ID
    if (!p.id || typeof p.id !== "string" || p.id.trim() === "") {
      errors.push(`${prefix} Product ID is empty or not a string.`);
    } else if (seenIds.has(p.id)) {
      errors.push(`${prefix} Duplicate product ID: "${p.id}".`);
    } else {
      seenIds.add(p.id);
    }

    // 3. Missing Title
    if (!p.title || typeof p.title !== "string" || p.title.trim().length < 3) {
      errors.push(`${prefix} Product title is missing or suspiciously short.`);
    }

    // 4. Missing Category
    if (!p.category || typeof p.category !== "string" || p.category.trim() === "") {
      errors.push(`${prefix} Product category is missing.`);
    } else {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    }

    // 5. Missing / Invalid Source Platform
    if (!p.platform || !ALLOWED_PLATFORMS.has(p.platform)) {
      errors.push(`${prefix} Invalid or missing platform: "${p.platform}". Allowed: ${Array.from(ALLOWED_PLATFORMS).join(", ")}`);
    } else {
      platformCounts[p.platform] = (platformCounts[p.platform] || 0) + 1;
    }

    // 6. Missing / Invalid Price
    if (typeof p.price !== "number" || p.price <= 0) {
      errors.push(`${prefix} Invalid price: ${p.price}`);
    }
    if (typeof p.originalPrice !== "number" || p.originalPrice <= 0) {
      errors.push(`${prefix} Invalid originalPrice: ${p.originalPrice}`);
    }
    if (p.price > p.originalPrice) {
      errors.push(`${prefix} Current price (${p.price}) cannot exceed MRP/originalPrice (${p.originalPrice}).`);
    }

    // 7. Discount Check
    const discount = Math.round((1 - p.price / p.originalPrice) * 100);
    if (discount < 0 || discount > 90) {
      warnings.push(`${prefix} Extreme discount percentage: ${discount}% (Price: ₹${p.price}, MRP: ₹${p.originalPrice}).`);
    }

    // 8. Rating & Reviews Check
    if (typeof p.rating !== "number" || p.rating < 1 || p.rating > 5) {
      errors.push(`${prefix} Rating must be between 1.0 and 5.0, got: ${p.rating}`);
    }
    if (typeof p.reviews !== "number" || p.reviews < 0) {
      errors.push(`${prefix} Reviews count must be a non-negative number, got: ${p.reviews}`);
    }

    // 9. Variants Check (Sizes & Colors)
    if (!Array.isArray(p.sizes) || p.sizes.length === 0) {
      errors.push(`${prefix} Available sizes array must contain at least one size.`);
    }
    if (!Array.isArray(p.colors) || p.colors.length === 0) {
      errors.push(`${prefix} Available colors array must contain at least one color.`);
    }

    // 10. Price History Check
    if (!Array.isArray(p.priceHistory) || p.priceHistory.length < 2) {
      warnings.push(`${prefix} Price history should contain at least 2 data points.`);
    }

    // 11. Image Reference & Local File Existence Check (CRITICAL)
    if (!p.image || typeof p.image !== "string" || !p.image.startsWith("/")) {
      errors.push(`${prefix} Product image path must be an absolute web path starting with "/", got: "${p.image}"`);
    } else {
      const localDiskPath = path.join(PUBLIC_DIR, p.image.replace(/^\//, ""));
      if (!fs.existsSync(localDiskPath)) {
        errors.push(`${prefix} BROKEN IMAGE PATH: Local file does not exist on disk: ${localDiskPath}`);
      } else {
        const stats = fs.statSync(localDiskPath);
        if (stats.size < 1000) {
          errors.push(`${prefix} CORRUPT IMAGE: File size is suspiciously tiny (${stats.size} bytes): ${localDiskPath}`);
        }
      }

      if (seenImages.has(p.image)) {
        warnings.push(`${prefix} Notice: Image ${p.image} is also used by ${seenImages.get(p.image)}`);
      } else {
        seenImages.set(p.image, p.id);
      }
    }
  }

  console.log("\n==================================================");
  console.log("   CATEGORY DISTRIBUTION");
  console.log("==================================================");
  for (const [cat, count] of Object.entries(categoryCounts)) {
    console.log(` - ${cat.padEnd(20)}: ${count} products`);
  }

  console.log("\n==================================================");
  console.log("   PLATFORM DISTRIBUTION");
  console.log("==================================================");
  for (const [platform, count] of Object.entries(platformCounts)) {
    console.log(` - ${platform.padEnd(12)}: ${count} deals`);
  }

  console.log("\n==================================================");
  console.log("   VALIDATION RESULT");
  console.log("==================================================");

  if (warnings.length > 0) {
    console.log(`\nWarnings (${warnings.length}):`);
    warnings.slice(0, 10).forEach((w) => console.log(` [WARN] ${w}`));
    if (warnings.length > 10) console.log(` ... and ${warnings.length - 10} more warnings.`);
  }

  if (errors.length > 0) {
    console.error(`\nFAILED with ${errors.length} error(s):`);
    errors.forEach((e) => console.error(` [FAIL] ${e}`));
    process.exit(1);
  } else {
    console.log(`\nSUCCESS! All ${products.length} products passed validation.`);
    console.log(` - 100% of products have valid, existing local images on disk.`);
    console.log(` - Unique IDs, valid prices, discounts, variants, ratings, and platforms verified.`);
  }
}

runValidation();
