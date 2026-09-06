package com.clothmarket.api.catalog;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class CatalogController {
    private final MockPlatformAdapter adapter;
    public CatalogController(MockPlatformAdapter adapter) { this.adapter = adapter; }
    @GetMapping("/products") public List<ProductSummary> products(@RequestParam(required = false) String q) { return adapter.search(q); }
    @GetMapping("/search") public List<ProductSummary> search(@RequestParam String q) { return adapter.search(q); }
    @GetMapping("/products/{id}") public ResponseEntity<ProductSummary> product(@PathVariable String id) { return adapter.search("").stream().filter(product -> product.id().equals(id)).findFirst().map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build()); }
    @GetMapping("/platforms") public List<String> platforms() { return List.of("AJIO", "Amazon", "Flipkart", "Meesho", "Myntra", "Nike"); }
}
