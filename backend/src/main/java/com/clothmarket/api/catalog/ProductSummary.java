package com.clothmarket.api.catalog;

import java.math.BigDecimal;

public record ProductSummary(String id, String title, String brand, String category, String platform, BigDecimal price, BigDecimal originalPrice, double rating, boolean available, String imageUrl) { }
