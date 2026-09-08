"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/features/catalog/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { useRecentlyViewedStore } from "@/state/useRecentlyViewedStore";

const popularCategories = [
  { name: "Shirts", query: "Shirts", image: "/products/shirts/CM-MSH-001-front.jpg" },
  { name: "T-Shirts", query: "T-Shirts", image: "/products/t-shirts/CM-MTS-001-front.jpg" },
  { name: "Jeans", query: "Jeans", image: "/products/jeans/CM-MJN-001-front.jpg" },
  { name: "Kurtis", query: "Kurtis", image: "/products/kurtis/CM-WKT-001-front.jpg" },
  { name: "Hoodies", query: "Hoodies", image: "/products/hoodies/CM-MHD-001-front.jpg" },
  { name: "Dresses", query: "Dresses", image: "/products/dresses/CM-WDR-001-front.jpg" },
  { name: "Sneakers", query: "Sneakers", image: "/products/sneakers/CM-SNK-001-front.jpg" },
  { name: "Sportswear", query: "Sportswear", image: "/products/sportswear/CM-SPT-001-front.jpg" },
];

const platforms = [
  { name: "AJIO", tag: "Exclusive", bg: "#232323", text: "#f7e6b5", border: "rgba(247, 230, 181, 0.25)" },
  { name: "Myntra", tag: "Trends", bg: "#ff3f6c", text: "#ffffff", border: "transparent" },
  { name: "Flipkart", tag: "Deals", bg: "#2874f0", text: "#ffffff", border: "transparent" },
  { name: "Amazon", tag: "Prime", bg: "#232f3e", text: "#ff9900", border: "rgba(255, 153, 0, 0.25)" },
  { name: "Trends", tag: "Retail", bg: "#b71c1c", text: "#ffffff", border: "transparent" },
  { name: "Meesho", tag: "Factory", bg: "#7a1c8d", text: "#ffffff", border: "transparent" },
  { name: "Nike", tag: "Athletic", bg: "#111111", text: "#ffffff", border: "rgba(255, 255, 255, 0.2)" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const { recentlyViewed } = useRecentlyViewedStore();

  // Curated subsets
  const bestDeals = products
    .filter((p) => p.available && p.rating >= 4.4)
    .slice(0, 8);

  const bigDiscounts = products
    .filter((p) => Math.round((1 - p.price / p.originalPrice) * 100) >= 50)
    .slice(0, 4);

  const priceDrops = products
    .filter(
      (p) =>
        Array.isArray(p.priceHistory) &&
        p.price <= Math.min(...p.priceHistory)
    )
    .slice(0, 4);

  const recentProducts = products
    .filter((p) => recentlyViewed.includes(p.id))
    .slice(0, 4);

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="shell">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="eyebrow">CLOTHMARKET · DEAL DISCOVERY LAYER</p>
              <h1>
                Search once. Find the <em>better deal</em> across stores.
              </h1>
              <p className="lede">
                Compare fashion deals across Amazon, Flipkart, Myntra, AJIO, Meesho, Nike, and Trends — authentic pricing, true discounts, and price history in one clean view.
              </p>

              <div className="hero-search-wrap">
                <SearchBar value={query} onChange={setQuery} large />
              </div>

              <div className="quick-category-pills">
                <span className="pills-label">Trending:</span>
                {popularCategories.slice(0, 6).map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/search?q=${encodeURIComponent(cat.query)}`}
                    className="category-pill"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <aside className="hero-stat-card">
              <span className="card-badge">THE CLOTHMARKET WAY</span>
              <h3>Search → Discover → Compare → Buy</h3>
              <p>
                We are your neutral comparison engine, not a retailer. When you find your deal, we link you directly to the original seller.
              </p>
              <div className="stat-grid">
                <div className="stat-box">
                  <strong>110+</strong>
                  <span>Live Demo Deals</span>
                </div>
                <div className="stat-box">
                  <strong>7</strong>
                  <span>Major Platforms</span>
                </div>
                <div className="stat-box">
                  <strong>16</strong>
                  <span>Apparel Categories</span>
                </div>
                <div className="stat-box">
                  <strong>0%</strong>
                  <span>Sponsored Bias</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2. Supported Platforms Strip */}
      <section className="platforms-bar">
        <div className="shell platforms-inner">
          <div className="platforms-header">
            <span className="platforms-title">Shop across trusted marketplaces</span>
          </div>
          <div className="platforms-list">
            {platforms.map((p) => (
              <Link
                key={p.name}
                href={`/search?q=&platform=${encodeURIComponent(p.name)}`}
                className="platform-chip"
                style={{
                  backgroundColor: p.bg,
                  color: p.text,
                  borderColor: p.border,
                }}
              >
                <span className="platform-name">{p.name}</span>
                <span className="platform-tag-pill">{p.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Popular Categories Grid */}
      <section className="shell section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CURATED AISLES</p>
            <h2>Explore by Category</h2>
          </div>
          <Link href="/search" className="text-link">
            Browse all 16 categories ↗
          </Link>
        </div>

        <div className="categories-grid">
          {popularCategories.map((cat) => (
            <Link
              key={cat.name}
              href={`/search?q=${encodeURIComponent(cat.query)}`}
              className="category-card"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="category-card-bg"
                loading="lazy"
              />
              <div className="category-card-overlay" />
              <div className="category-card-content">
                <h4>{cat.name}</h4>
                <span>Explore Deals ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Today's Best Deals (8 items) */}
      <section className="shell section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TOP PICKS</p>
            <h2>Today&apos;s Best Deals</h2>
          </div>
          <Link href="/search" className="text-link">
            See all deals ↗
          </Link>
        </div>
        <div className="product-grid">
          {bestDeals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. Split Feature Promo: Compare Before You Buy */}
      <section className="shell section">
        <div className="split-promo-banner">
          <div className="promo-copy">
            <p className="eyebrow" style={{ color: "var(--pine)" }}>DECIDE WITH CLARITY</p>
            <h2>Same jacket. Three prices. One smart choice.</h2>
            <p>
              Different shopping sites price clothing dynamically. ClothMarket brings prices, ratings, and observed 30-day lows together side-by-side so you never overpay.
            </p>
            <div className="promo-actions">
              <Link className="button" href="/compare">
                Open Comparison Tray
              </Link>
              <Link className="button secondary" href="/search">
                Start Discovering
              </Link>
            </div>
          </div>

          <div className="example-comparison-box">
            <div className="comparison-header">
              <span className="item-tag">CROSS-PLATFORM PRICE CHECK</span>
              <h4>Oversized Black Denim Casual Shirt</h4>
            </div>
            <div className="store-row best-price-row">
              <div className="store-meta">
                <span className="store-badge" style={{ background: "#2a2a2a", color: "#f7e6b5" }}>AJIO</span>
                <span className="best-price-badge">Lowest Price</span>
              </div>
              <div className="price-meta">
                <strong>₹899</strong>
                <span className="savings-badge">Save ₹300</span>
              </div>
            </div>
            <div className="store-row">
              <div className="store-meta">
                <span className="store-badge" style={{ background: "#2874f0", color: "#fff" }}>Flipkart</span>
              </div>
              <div className="price-meta">
                <strong>₹949</strong>
                <s>₹1,799</s>
              </div>
            </div>
            <div className="store-row">
              <div className="store-meta">
                <span className="store-badge" style={{ background: "#232f3e", color: "#ff9900" }}>Amazon</span>
              </div>
              <div className="price-meta">
                <strong>₹999</strong>
                <s>₹1,799</s>
              </div>
            </div>
            <p className="deal-hint">
              ✓ ClothMarket shows you where each price lives so you choose before you checkout.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Biggest Discounts (50%+ Off) */}
      <section className="shell section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STEEP SAVINGS</p>
            <h2>50% Off &amp; Above</h2>
          </div>
          <Link href="/search?discount=50" className="text-link">
            View all 50%+ discounts ↗
          </Link>
        </div>
        <div className="product-grid">
          {bigDiscounts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 7. Price Drops / 30-Day Lows */}
      <section className="shell section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PRICE TRACKER</p>
            <h2>At Their 30-Day Low</h2>
          </div>
          <Link href="/search" className="text-link">
            Explore price journeys ↗
          </Link>
        </div>
        <div className="product-grid">
          {priceDrops.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 8. Recently Viewed (if available) */}
      {recentProducts.length > 0 && (
        <section className="shell section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR BROWSING HISTORY</p>
              <h2>Recently Viewed</h2>
            </div>
            <Link href="/saved" className="text-link">
              View saved rail ↗
            </Link>
          </div>
          <div className="product-grid">
            {recentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* 9. How It Works Section */}
      <section className="shell section how-it-works-section">
        <div className="how-header">
          <p className="eyebrow">HOW CLOTHMARKET WORKS</p>
          <h2>Four simple steps to a better clothing deal</h2>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>
            <h4>Search Across Stores</h4>
            <p>Type what you want once. We index clothing from Amazon, Flipkart, Myntra, AJIO, Meesho, Nike, and Trends simultaneously.</p>
          </div>
          <div className="step-card">
            <span className="step-number">02</span>
            <h4>Filter &amp; Refine</h4>
            <p>Narrow by size, color, brand, discount, and user ratings to isolate pieces that actually fit your preferences and budget.</p>
          </div>
          <div className="step-card">
            <span className="step-number">03</span>
            <h4>Compare Price Journeys</h4>
            <p>See current prices alongside 30-day historical movements to know if today's discount is genuine or inflated.</p>
          </div>
          <div className="step-card">
            <span className="step-number">04</span>
            <h4>Buy From the Source</h4>
            <p>Click through straight to the seller platform. You pay them directly; we don't mark up prices or hold inventory.</p>
          </div>
        </div>
      </section>

      {/* 10. Complete Footer */}
      <footer className="site-footer">
        <div className="shell footer-inner">
          <div className="footer-brand">
            <Link className="wordmark" href="/">
              Cloth<span>Market</span>
            </Link>
            <p className="footer-desc">
              Cross-platform fashion deal discovery and multi-store price comparison. Built to bring transparency and confidence to clothing purchases.
            </p>
            <p className="demo-disclaimer">
              <strong>Academic / Development Demo:</strong> Product listings, prices, and images are simulated for design evaluation. Direct links lead to official brand &amp; retailer homepages.
            </p>
          </div>

          <div className="footer-links-group">
            <h5>Popular Aisles</h5>
            <ul>
              {popularCategories.map((c) => (
                <li key={c.name}>
                  <Link href={`/search?q=${encodeURIComponent(c.query)}`}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h5>Tracked Stores</h5>
            <ul>
              {platforms.map((p) => (
                <li key={p.name}>
                  <Link href={`/search?q=&platform=${encodeURIComponent(p.name)}`}>
                    {p.name} Deals
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h5>Marketplace</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/search">Discover Deals</Link></li>
              <li><Link href="/compare">Comparison Tray</Link></li>
              <li><Link href="/saved">Saved Rail</Link></li>
              <li><Link href="/account">My Account</Link></li>
            </ul>
          </div>
        </div>

        <div className="shell footer-bottom">
          <p>© {new Date().getFullYear()} ClothMarket. Fashion deals, thoughtfully compared.</p>
          <div className="footer-meta-pills">
            <span>110 Products Indexed</span>
            <span>7 Stores Active</span>
            <span>Local Image Assets</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .hero-section {
          padding: 36px 0 28px;
          background: linear-gradient(180deg, rgba(244, 239, 228, 0.45) 0%, transparent 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 40px;
          align-items: center;
        }

        .hero-search-wrap {
          margin: 20px 0 16px;
          max-width: 620px;
        }

        .quick-category-pills {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pills-label {
          font-size: 0.73rem;
          font-weight: 700;
          color: var(--muted);
        }

        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 12px;
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 999px;
          font-size: 0.73rem;
          font-weight: 600;
          color: var(--ink);
          transition: all 0.15s ease;
        }

        .category-pill:hover {
          border-color: var(--pine);
          background: var(--pine-soft);
          color: var(--pine);
        }

        .hero-stat-card {
          background: var(--pine);
          color: #f7f5ec;
          padding: 28px;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-md);
        }

        .card-badge {
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #c6d7bf;
          margin-bottom: 8px;
        }

        .hero-stat-card h3 {
          font-family: var(--serif);
          font-size: 1.4rem;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 10px;
        }

        .hero-stat-card p {
          color: #d6e2d4;
          font-size: 0.8rem;
          line-height: 1.6;
          margin: 0 0 18px;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .stat-box {
          display: flex;
          flex-direction: column;
        }

        .stat-box strong {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
        }

        .stat-box span {
          font-size: 0.66rem;
          color: #c6d7bf;
        }

        /* Platforms Bar */
        .platforms-bar {
          background: var(--card);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 12px 0;
        }

        .platforms-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .platforms-header {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .platforms-title {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--pine);
        }

        .platforms-list {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .platform-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid transparent;
          padding: 5px 11px;
          border-radius: 7px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        }

        .platform-chip:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .platform-name {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .platform-tag-pill {
          font-size: 0.62rem;
          font-weight: 600;
          opacity: 0.8;
          padding-left: 6px;
          border-left: 1px solid rgba(255, 255, 255, 0.25);
        }

        /* Categories Grid */
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .category-card {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 14px;
          text-decoration: none;
          border: 1px solid var(--line);
          background: #e9e4d9;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .category-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: var(--pine);
        }

        .category-card-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
          z-index: 1;
        }

        .category-card:hover .category-card-bg {
          transform: scale(1.06);
        }

        .category-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(20, 30, 25, 0.05) 0%, rgba(15, 25, 20, 0.75) 100%);
          z-index: 2;
          transition: background 0.25s ease;
        }

        .category-card:hover .category-card-overlay {
          background: linear-gradient(180deg, rgba(20, 30, 25, 0.02) 0%, rgba(15, 25, 20, 0.85) 100%);
        }

        .category-card-content {
          position: relative;
          z-index: 3;
          color: #ffffff;
        }

        .category-card-content h4 {
          margin: 0;
          font-family: var(--serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .category-card-content span {
          display: inline-block;
          font-size: 0.72rem;
          color: #d1ded5;
          font-weight: 500;
          margin-top: 3px;
          transition: color 0.15s ease;
        }

        .category-card:hover .category-card-content span {
          color: #f7e6b5;
        }

        @media (max-width: 900px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }

        @media (max-width: 480px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .category-card {
            padding: 12px;
          }
          .category-card-content h4 {
            font-size: 1rem;
          }
        }

        /* Split Promo Banner */
        .split-promo-banner {
          background: #eadbc4;
          border-radius: 14px;
          padding: clamp(24px, 4vw, 40px);
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 32px;
          align-items: center;
        }

        .promo-copy p {
          color: #4a574f;
          line-height: 1.6;
        }

        .promo-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .example-comparison-box {
          background: #fffdf8;
          border: 1px solid #d5c5ad;
          border-radius: 10px;
          padding: 20px;
          box-shadow: var(--shadow-sm);
        }

        .comparison-header {
          margin-bottom: 12px;
        }

        .item-tag {
          font-size: 0.63rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--coral);
        }

        .comparison-header h4 {
          font-family: var(--serif);
          font-size: 1.1rem;
          margin: 4px 0 0;
        }

        .store-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px 12px;
          border-radius: 7px;
          margin-bottom: 5px;
          background: var(--card-subtle);
          border: 1px solid transparent;
        }

        .best-price-row {
          background: #edf5ee;
          border-color: #b7d6be;
        }

        .store-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .store-badge {
          font-size: 0.66rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 4px;
        }

        .best-price-badge {
          font-size: 0.63rem;
          font-weight: 800;
          color: var(--pine);
          background: #d4ebd8;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .price-meta {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .price-meta strong {
          font-size: 1rem;
          color: var(--pine);
        }

        .price-meta s {
          font-size: 0.76rem;
          color: var(--muted);
        }

        .savings-badge {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--coral);
        }

        .deal-hint {
          font-size: 0.7rem;
          color: var(--muted);
          margin: 10px 0 0;
          line-height: 1.45;
        }

        /* How it works */
        .how-it-works-section {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: clamp(24px, 4vw, 36px);
        }

        .how-header {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 28px;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .step-card {
          display: flex;
          flex-direction: column;
          padding: 14px;
          border-left: 2px solid var(--moss);
          background: var(--card-subtle);
          border-radius: 0 8px 8px 0;
        }

        .step-number {
          font-family: var(--serif);
          font-size: 1.4rem;
          color: var(--pine);
          font-weight: 800;
          margin-bottom: 6px;
        }

        .step-card h4 {
          margin: 0 0 6px;
          font-size: 0.92rem;
          font-weight: 700;
        }

        .step-card p {
          margin: 0;
          font-size: 0.76rem;
          color: var(--muted);
          line-height: 1.55;
        }

        /* Site Footer */
        .site-footer {
          margin-top: 48px;
          background: #192620;
          color: #e5ede8;
          padding: 44px 0 24px;
        }

        .footer-inner {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 36px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .footer-brand .wordmark {
          font-family: var(--serif);
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .footer-brand .wordmark span {
          color: var(--coral);
          font-style: italic;
        }

        .footer-desc {
          margin: 10px 0 14px;
          font-size: 0.8rem;
          line-height: 1.6;
          color: #b7c7be;
          max-width: 380px;
        }

        .demo-disclaimer {
          font-size: 0.7rem;
          line-height: 1.5;
          color: #8fa597;
          background: rgba(255, 255, 255, 0.05);
          padding: 10px 12px;
          border-radius: 6px;
          max-width: 400px;
        }

        .footer-links-group h5 {
          margin: 0 0 12px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .footer-links-group ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .footer-links-group a {
          color: #b7c7be;
          font-size: 0.78rem;
          transition: color 0.15s ease;
        }

        .footer-links-group a:hover {
          color: #ffffff;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          font-size: 0.73rem;
          color: #8fa597;
          flex-wrap: wrap;
          gap: 10px;
        }

        .footer-meta-pills {
          display: flex;
          gap: 8px;
        }

        .footer-meta-pills span {
          background: rgba(255, 255, 255, 0.08);
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 0.68rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .split-promo-banner {
            grid-template-columns: 1fr;
          }
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-inner {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 24px 0 16px;
          }
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .footer-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
