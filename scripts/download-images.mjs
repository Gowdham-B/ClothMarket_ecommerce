import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rawProducts } from "./catalog-data.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_PRODUCTS_DIR = path.resolve(__dirname, "../frontend/public/products");

// Category fallback photo IDs in case any specific photo ID fails to download
const CATEGORY_FALLBACKS = {
  shirts: "1598032895397-b9472444bf93",
  "t-shirts": "1521572267360-ee0c2909d518",
  jeans: "1542272604-787c3835535d",
  trousers: "1473966968600-fa801b869a1a",
  jackets: "1551028719-00167b16eac5",
  hoodies: "1556821840-3a63f95609a7",
  dresses: "1595777457583-95e059d581b8",
  tops: "1503342394128-c104d54dba01",
  "women-jeans": "1541099649105-f69ad21f3246",
  kurtis: "1583391733981-8498409f4c65",
  "ethnic-wear": "1610030469983-98e550d6193c",
  "women-jackets": "1539533018447-63fcce2678e3",
  "kids-wear": "1519238263530-99bdd11df2ea",
  sneakers: "1542291026-7eec264c27ff",
  shoes: "1533867617858-e7b97e060509",
  sportswear: "1517838277536-f5f99be501cd",
};

async function downloadPhoto(photoId, destinationPath, fallbackId) {
  const urls = [
    `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=800&q=80`,
    `https://images.unsplash.com/photo-${fallbackId}?auto=format&fit=crop&w=800&q=80`,
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      });

      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        if (buffer.length > 5000) {
          fs.writeFileSync(destinationPath, buffer);
          return { success: true, bytes: buffer.length };
        }
      }
    } catch (err) {
      // try next URL
    }
  }

  throw new Error(`Failed to download valid image for ${destinationPath}`);
}

async function main() {
  console.log(`Starting image provisioning for ${rawProducts.length} products...`);
  console.log(`Target directory: ${PUBLIC_PRODUCTS_DIR}`);

  if (!fs.existsSync(PUBLIC_PRODUCTS_DIR)) {
    fs.mkdirSync(PUBLIC_PRODUCTS_DIR, { recursive: true });
  }

  let downloadedCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < rawProducts.length; i++) {
    const product = rawProducts[i];
    const folderPath = path.join(PUBLIC_PRODUCTS_DIR, product.folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filename = `${product.id}-front.jpg`;
    const targetPath = path.join(folderPath, filename);

    if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 5000) {
      skippedCount++;
      continue;
    }

    const fallbackId = CATEGORY_FALLBACKS[product.folder] || CATEGORY_FALLBACKS.shirts;
    try {
      const result = await downloadPhoto(product.photoId, targetPath, fallbackId);
      downloadedCount++;
      if (downloadedCount % 10 === 0 || i === rawProducts.length - 1) {
        console.log(`[${i + 1}/${rawProducts.length}] Downloaded ${filename} (${Math.round(result.bytes / 1024)} KB)`);
      }
    } catch (err) {
      console.error(`Error downloading ${product.id}:`, err.message);
    }
  }

  console.log(`\nImage provisioning completed: ${downloadedCount} downloaded, ${skippedCount} already existed.`);
}

main().catch((err) => {
  console.error("Fatal error in download-images script:", err);
  process.exit(1);
});
