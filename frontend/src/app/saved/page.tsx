"use client";

import Link from "next/link";
import { products, formatPrice } from "@/data/products";
import { ProductCard } from "@/features/catalog/ProductCard";
import { useSavedStore } from "@/state/useSavedStore";
import { useComparisonStore } from "@/state/useComparisonStore";

export default function Saved() {
  const { saved, toggle } = useSavedStore();
  const { toggle: toggleCompare } = useComparisonStore();

  const savedProducts = products.filter((product) =>
    saved.includes(product.id)
  );

  // Calculate total savings
  const totalSavings = savedProducts.reduce(
    (acc, p) => acc + (p.originalPrice - p.price),
    0
  );

  // Recommendations to show when empty
  const trendingDeals = products
    .filter((p) => p.available && p.rating >= 4.4)
    .slice(0, 4);

  return (
    <main className="shell" style={{ padding: "28px 0 48px" }}>
      <div style={{ marginBottom: "22px" }}>
        <p className="eyebrow">YOUR SAVED RAIL</p>
        <h1 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", marginBottom: "8px" }}>
          Saved Deals &amp; <em>Watchlist.</em>
        </h1>
        <p className="lede">
          Keep track of items across different platforms. Price drops and availability are tracked right here in your browser.
        </p>
      </div>

      {savedProducts.length > 0 ? (
        <>
          {/* Summary Strip */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              padding: "12px 18px",
              background: "var(--card)",
              border: "1px solid var(--line)",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <div>
              <strong style={{ fontSize: "1rem", color: "var(--pine)" }}>
                {savedProducts.length} items saved
              </strong>
              <span style={{ color: "var(--muted)", fontSize: "0.8rem", marginLeft: "12px" }}>
                Total potential saving:{" "}
                <b style={{ color: "var(--coral)" }}>{formatPrice(totalSavings)}</b>
              </span>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                className="button secondary"
                style={{ fontSize: "0.76rem", padding: "6px 14px" }}
                onClick={() => {
                  savedProducts.slice(0, 3).forEach((p) => toggleCompare(p.id));
                }}
              >
                Send top 3 to Compare ↗
              </button>
              <button
                style={{
                  border: 0,
                  background: "transparent",
                  color: "var(--coral)",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => {
                  saved.forEach((id) => toggle(id));
                }}
              >
                Clear all
              </button>
            </div>
          </div>

          <div className="product-grid">
            {savedProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {/* Informative Empty State */}
          <div
            style={{
              background: "var(--card)",
              border: "1px dashed var(--line)",
              borderRadius: "12px",
              padding: "36px 24px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            <div style={{ fontSize: "2.4rem", color: "var(--muted)", marginBottom: "10px" }}>
              ♡
            </div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "6px" }}>
              Your saved rail is empty
            </h2>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.85rem",
                lineHeight: "1.6",
                maxWidth: "400px",
                marginBottom: "18px",
              }}
            >
              When exploring fashion across Amazon, Flipkart, Myntra, and AJIO, tap the heart icon on any card to save pieces and track prices.
            </p>
            <Link className="button" href="/search">
              Start Discovering Deals ↗
            </Link>
          </div>

          {/* Curated Recommendations Below Empty State */}
          <div>
            <div className="section-heading">
              <div>
                <p className="eyebrow">TRENDING RIGHT NOW</p>
                <h2>Popular Deals to Get You Started</h2>
              </div>
              <Link href="/search" className="text-link">
                Explore full catalog ↗
              </Link>
            </div>
            <div className="product-grid">
              {trendingDeals.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
