"use client";

import Link from "next/link";
import { useState } from "react";
import { Product, formatPrice } from "@/data/products";
import { useSavedStore } from "@/state/useSavedStore";
import { useComparisonStore } from "@/state/useComparisonStore";

export function ProductCard({ product }: { product: Product }) {
  const { saved, toggle: toggleSaved } = useSavedStore();
  const { compared, toggle: toggleCompared } = useComparisonStore();
  const [imageError, setImageError] = useState(false);

  const saving = saved.includes(product.id);
  const comparing = compared.includes(product.id);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  // Compute a realistic price insight
  const is30DayLow =
    Array.isArray(product.priceHistory) &&
    product.price <= Math.min(...product.priceHistory);

  const dealNote = is30DayLow
    ? "● Lowest in 30 days"
    : discount >= 50
    ? "● Steep 50%+ discount"
    : discount >= 35
    ? "● Strong multi-platform deal"
    : "● Verified deal price";

  return (
    <article className="product-card">
      <div className="product-media">
        <Link
          href={`/products/${product.id}`}
          aria-label={`View details for ${product.title}`}
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          {imageError ? (
            <div className="image-fallback">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
              </svg>
              <span>{product.category}</span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.title}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          )}

          <span className="deal-badge">{discount}% off</span>
        </Link>

        <button
          className={`icon-button ${saving ? "saved" : ""}`}
          aria-label={saving ? `Remove ${product.title} from saved` : `Save ${product.title} for later`}
          aria-pressed={saving}
          onClick={() => toggleSaved(product.id)}
          title={saving ? "Remove from saved" : "Save for later"}
        >
          <span aria-hidden>{saving ? "♥" : "♡"}</span>
        </button>
      </div>

      <div className="product-copy">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
          <span className={`platform-tag ${product.platform}`}>
            {product.platform}
          </span>
          <span style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
            {product.category}
          </span>
        </div>

        <h3>
          <Link href={`/products/${product.id}`} title={product.title}>
            {product.title}
          </Link>
        </h3>

        <p className="brand">
          {product.brand} · <span style={{ color: "#c85335" }}>★</span> {product.rating} ({product.reviews.toLocaleString("en-IN")})
        </p>

        <div className="price-row">
          <strong>{formatPrice(product.price)}</strong>
          <s>{formatPrice(product.originalPrice)}</s>
          <span className="discount-percent">{discount}% off</span>
        </div>

        <div className="deal-note">{dealNote}</div>

        <div className="card-actions">
          <button
            className={`compare-toggle-btn ${comparing ? "active" : ""}`}
            aria-pressed={comparing}
            onClick={() => toggleCompared(product.id)}
            title={comparing ? "Remove from comparison" : "Add to comparison"}
          >
            {comparing ? "✓ In Compare" : "+ Compare"}
          </button>
          <Link className="view-deal-btn" href={`/products/${product.id}`}>
            View Deal ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
