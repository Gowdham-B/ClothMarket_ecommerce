import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { rawProducts } from "./catalog-data.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_FILE = path.resolve(
  __dirname,
  "../backend/src/main/java/com/clothmarket/api/catalog/MockPlatformAdapter.java"
);

function escapeJavaString(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const productLines = rawProducts.map((p) => {
  const imageUrl = `/products/${p.folder}/${p.id}-front.jpg`;
  return `        new ProductSummary("${escapeJavaString(p.id)}", "${escapeJavaString(
    p.title
  )}", "${escapeJavaString(p.brand)}", "${escapeJavaString(
    p.category
  )}", "${escapeJavaString(p.platform)}", new BigDecimal("${p.price}"), new BigDecimal("${
    p.originalPrice
  }"), ${p.rating}, ${p.available}, "${escapeJavaString(imageUrl)}")`;
});

const content = `package com.clothmarket.api.catalog;

import java.math.BigDecimal;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class MockPlatformAdapter implements PlatformAdapter {
    private static final List<ProductSummary> PRODUCTS = List.of(
${productLines.join(",\n")}
    );

    @Override
    public String platform() {
        return "DEMO";
    }

    @Override
    public List<ProductSummary> search(String query) {
        if (query == null || query.isBlank()) return PRODUCTS;
        String needle = query.toLowerCase();
        return PRODUCTS.stream()
            .filter(product -> (product.title() + " " + product.brand() + " " + product.category()).toLowerCase().contains(needle))
            .toList();
    }
}
`;

fs.writeFileSync(TARGET_FILE, content, "utf8");
console.log(`Successfully generated MockPlatformAdapter with ${rawProducts.length} items.`);
