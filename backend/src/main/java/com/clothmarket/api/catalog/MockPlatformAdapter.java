package com.clothmarket.api.catalog;

import java.math.BigDecimal;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class MockPlatformAdapter implements PlatformAdapter {
    private static final List<ProductSummary> PRODUCTS = List.of(
        new ProductSummary("oversized-denim-shirt", "Oversized Black Denim Shirt", "Roadster", "Shirts", "AJIO", new BigDecimal("899"), new BigDecimal("1799"), 4.4, true, "https://images.unsplash.com/photo-1598032895397-b9472444bf93"),
        new ProductSummary("essential-hoodie", "Essential Oversized Hoodie", "H&M", "Hoodies", "Myntra", new BigDecimal("1299"), new BigDecimal("2499"), 4.2, true, "https://images.unsplash.com/photo-1556821840-3a63f95609a7"),
        new ProductSummary("indigo-kurti", "Indigo Block Print Kurti", "Anouk", "Kurtis", "Flipkart", new BigDecimal("749"), new BigDecimal("1499"), 4.5, true, "https://images.unsplash.com/photo-1583391733981-8498409f4c65")
    );
    @Override public String platform() { return "DEMO"; }
    @Override public List<ProductSummary> search(String query) {
        if (query == null || query.isBlank()) return PRODUCTS;
        String needle = query.toLowerCase();
        return PRODUCTS.stream().filter(product -> (product.title() + " " + product.brand() + " " + product.category()).toLowerCase().contains(needle)).toList();
    }
}
