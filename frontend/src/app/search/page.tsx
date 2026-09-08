"use client";

import { Suspense, useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ProductCard } from "@/features/catalog/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { products, type Platform } from "@/data/products";
import styles from "./search.module.css";

const PLATFORMS: Platform[] = [
  "AJIO",
  "Amazon",
  "Flipkart",
  "Myntra",
  "Nike",
  "Meesho",
  "Trends",
];

const CATEGORIES = [
  "Shirts",
  "T-Shirts",
  "Jeans",
  "Trousers",
  "Jackets",
  "Hoodies",
  "Dresses",
  "Tops",
  "Women's Jeans",
  "Kurtis",
  "Ethnic Wear",
  "Women's Jackets",
  "Kids Wear",
  "Sneakers",
  "Shoes",
  "Sportswear",
];

const PRICE_RANGES = [
  { label: "All Prices", value: "all", min: 0, max: Infinity },
  { label: "Under ₹999", value: "under-999", min: 0, max: 999 },
  { label: "₹1,000 – ₹1,999", value: "1000-1999", min: 1000, max: 1999 },
  { label: "₹2,000 – ₹3,499", value: "2000-3499", min: 2000, max: 3499 },
  { label: "₹3,500+", value: "3500-plus", min: 3500, max: Infinity },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const initialPlatform = searchParams.get("platform") || "All";
  const initialDiscount = searchParams.get("discount") || "all";

  const [query, setQuery] = useState(initialQuery);
  const [platform, setPlatform] = useState(initialPlatform);
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("all");
  const [minDiscount, setMinDiscount] = useState(initialDiscount);
  const [minRating, setMinRating] = useState("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sort, setSort] = useState("relevance");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  // Sync state if URL query changes
  useEffect(() => {
    if (searchParams.get("q") !== null) {
      setQuery(searchParams.get("q") || "");
    }
  }, [searchParams]);

  // Compute platform item counts
  const platformCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of products) {
      counts[p.platform] = (counts[p.platform] || 0) + 1;
    }
    return counts;
  }, []);

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of products) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    return products.filter((product) => {
      // Query filter (broad match across title, brand, category, subcategory, description)
      if (query.trim()) {
        const terms = query.toLowerCase().split(/\s+/);
        const searchable = `${product.title} ${product.brand} ${product.category} ${product.subcategory || ""} ${product.description || ""}`.toLowerCase();
        const matchesAll = terms.every((term) => searchable.includes(term));
        if (!matchesAll) return false;
      }

      // Platform filter
      if (platform !== "All" && product.platform !== platform) {
        return false;
      }

      // Category filter
      if (category !== "All" && product.category !== category) {
        return false;
      }

      // Price range filter
      if (priceRange !== "all") {
        const range = PRICE_RANGES.find((r) => r.value === priceRange);
        if (range && (product.price < range.min || product.price > range.max)) {
          return false;
        }
      }

      // Minimum discount filter
      if (minDiscount !== "all") {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        if (discount < parseInt(minDiscount, 10)) {
          return false;
        }
      }

      // Minimum rating filter
      if (minRating !== "all") {
        if (product.rating < parseFloat(minRating)) {
          return false;
        }
      }

      // Availability filter
      if (onlyAvailable && !product.available) {
        return false;
      }

      return true;
    });
  }, [query, platform, category, priceRange, minDiscount, minRating, onlyAvailable]);

  // Sort items
  const sortedItems = useMemo(() => {
    const list = [...filteredItems];
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "discount-desc":
        return list.sort((a, b) => {
          const discA = 1 - a.price / a.originalPrice;
          const discB = 1 - b.price / b.originalPrice;
          return discB - discA;
        });
      case "rating-desc":
        return list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
      case "relevance":
      default:
        // Rank by combination of rating and discount
        return list.sort((a, b) => b.rating * (1 - b.price / b.originalPrice) - a.rating * (1 - a.price / a.originalPrice));
    }
  }, [filteredItems, sort]);

  const activeFiltersCount =
    (platform !== "All" ? 1 : 0) +
    (category !== "All" ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    (minDiscount !== "all" ? 1 : 0) +
    (minRating !== "all" ? 1 : 0) +
    (onlyAvailable ? 1 : 0);

  const clearAllFilters = () => {
    setPlatform("All");
    setCategory("All");
    setPriceRange("all");
    setMinDiscount("all");
    setMinRating("all");
    setOnlyAvailable(false);
    setSort("relevance");
  };

  return (
    <main className={`shell ${styles.page}`}>
      {/* Header Banner */}
      <div className={styles.header}>
        <p className="eyebrow">DISCOVER & COMPARE FASHION DEALS</p>
        <h1 className={styles.title}>
          {query ? (
            <>
              Deals for “<em>{query}</em>”
            </>
          ) : (
            <>
              Explore <em>all fashion deals</em>
            </>
          )}
        </h1>

        <div className={styles.searchBarWrapper}>
          <SearchBar value={query} onChange={setQuery} large />
        </div>
      </div>

      {/* Main Layout */}
      <div className={styles.layout}>
        {/* Mobile Filter Button */}
        <div className={styles.mobileFilterBar}>
          <button
            className={styles.mobileFilterTrigger}
            onClick={() => setMobileDrawerOpen(true)}
            aria-expanded={mobileDrawerOpen}
          >
            <span>⚙ Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
          </button>

          <select
            className={styles.mobileSortSelect}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
          >
            <option value="relevance">Top Match</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="discount-desc">Biggest Discount</option>
            <option value="rating-desc">Top Rated</option>
          </select>
        </div>

        {/* Sidebar Filters (Desktop & Mobile Drawer) */}
        <aside
          className={`${styles.filters} ${
            mobileDrawerOpen ? styles.mobileOpen : ""
          }`}
          aria-label="Filter products"
        >
          <div className={styles.filtersHeader}>
            <h3>Filter Deals</h3>
            {mobileDrawerOpen && (
              <button
                className={styles.closeDrawerBtn}
                onClick={() => setMobileDrawerOpen(false)}
                aria-label="Close filters"
              >
                ✕
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button className={styles.clearBtn} onClick={clearAllFilters}>
                Reset all
              </button>
            )}
          </div>

          {/* Platform Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterTitle}>Platform / Store</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="All">All Stores (7)</option>
              {PLATFORMS.map((p) => (
                <option key={p} value={p}>
                  {p} ({platformCounts[p] || 0})
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.filterTitle}>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="All">All Categories (16)</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c} ({categoryCounts[c] || 0})
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className={styles.filterGroup}>
            <label className={styles.filterTitle}>Price Range</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className={styles.filterSelect}
            >
              {PRICE_RANGES.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Discount Tier */}
          <div className={styles.filterGroup}>
            <label className={styles.filterTitle}>Minimum Discount</label>
            <select
              value={minDiscount}
              onChange={(e) => setMinDiscount(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">Any Discount</option>
              <option value="30">30% Off & Above</option>
              <option value="40">40% Off & Above</option>
              <option value="50">50% Off & Above</option>
              <option value="60">60% Off & Above</option>
            </select>
          </div>

          {/* Minimum Rating */}
          <div className={styles.filterGroup}>
            <label className={styles.filterTitle}>Customer Rating</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">Any Rating</option>
              <option value="4.0">★ 4.0 & above</option>
              <option value="4.4">★ 4.4 & above</option>
              <option value="4.6">★ 4.6 & above</option>
            </select>
          </div>

          {/* Availability Checkbox */}
          <div className={styles.filterGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={onlyAvailable}
                onChange={(e) => setOnlyAvailable(e.target.checked)}
                className={styles.checkboxInput}
              />
              <span>In stock only</span>
            </label>
          </div>

          {mobileDrawerOpen && (
            <button
              className={`button ${styles.applyMobileBtn}`}
              onClick={() => setMobileDrawerOpen(false)}
            >
              View {sortedItems.length} Deals
            </button>
          )}
        </aside>

        {/* Results Area */}
        <section className={styles.resultsArea}>
          {/* Active Filter Chips & Sort Bar */}
          <div className={styles.resultsBar}>
            <div className={styles.resultsCount}>
              <strong>{sortedItems.length} deals discovered</strong>
              <span>across {platform === "All" ? "7 platforms" : platform}</span>
            </div>

            <div className={styles.desktopSortWrapper}>
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="relevance">Top Match / Value</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="discount-desc">Biggest Discount</option>
                <option value="rating-desc">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Active Filter Badges */}
          {activeFiltersCount > 0 && (
            <div className={styles.activeFiltersRow}>
              <span className={styles.activeFiltersTitle}>Active Filters:</span>
              {platform !== "All" && (
                <button
                  className={styles.filterBadge}
                  onClick={() => setPlatform("All")}
                >
                  Platform: {platform} ✕
                </button>
              )}
              {category !== "All" && (
                <button
                  className={styles.filterBadge}
                  onClick={() => setCategory("All")}
                >
                  Category: {category} ✕
                </button>
              )}
              {priceRange !== "all" && (
                <button
                  className={styles.filterBadge}
                  onClick={() => setPriceRange("all")}
                >
                  Price: {PRICE_RANGES.find((r) => r.value === priceRange)?.label} ✕
                </button>
              )}
              {minDiscount !== "all" && (
                <button
                  className={styles.filterBadge}
                  onClick={() => setMinDiscount("all")}
                >
                  Discount: {minDiscount}%+ ✕
                </button>
              )}
              {minRating !== "all" && (
                <button
                  className={styles.filterBadge}
                  onClick={() => setMinRating("all")}
                >
                  Rating: ★ {minRating}+ ✕
                </button>
              )}
              {onlyAvailable && (
                <button
                  className={styles.filterBadge}
                  onClick={() => setOnlyAvailable(false)}
                >
                  In Stock Only ✕
                </button>
              )}
              <button className={styles.clearAllText} onClick={clearAllFilters}>
                Clear all
              </button>
            </div>
          )}

          {/* Product Grid or Empty State */}
          {sortedItems.length > 0 ? (
            <div className="product-grid">
              {sortedItems.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>⌕</div>
              <h2>No close matches found</h2>
              <p>
                We couldn&apos;t find any deals matching your specific query and active filters. Try removing filters or searching for popular categories below:
              </p>
              <div className={styles.emptySuggestions}>
                {["Shirts", "Jeans", "Hoodies", "Kurtis", "Sneakers", "Dresses"].map(
                  (s) => (
                    <button
                      key={s}
                      className={styles.suggestionPill}
                      onClick={() => {
                        setQuery(s);
                        clearAllFilters();
                      }}
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
              <button
                className={`button ${styles.resetAllBtn}`}
                onClick={() => {
                  setQuery("");
                  clearAllFilters();
                }}
              >
                Browse all 110+ deals
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="shell" style={{ padding: "40px 0" }}>
          <p>Loading deal discovery…</p>
        </main>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
