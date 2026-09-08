"use client";

import Link from "next/link";
import { useState } from "react";
import { products, formatPrice } from "@/data/products";
import { useComparisonStore } from "@/state/useComparisonStore";
import styles from "./compare.module.css";

export default function Compare() {
  const { compared, toggle } = useComparisonStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // If user hasn't chosen anything yet, provide a curated default set of 3 denim/jacket products
  const activeIds =
    compared.length > 0
      ? compared
      : ["CM-MSH-001", "CM-MSH-002", "CM-MSH-003"];

  const list = products.filter((product) => activeIds.includes(product.id));

  // Determine best attributes
  const bestPrice = Math.min(...list.map((p) => p.price));
  const highestDiscount = Math.max(
    ...list.map((p) => Math.round((1 - p.price / p.originalPrice) * 100))
  );
  const highestRating = Math.max(...list.map((p) => p.rating));

  // Recommendations to add to compare
  const addableProducts = products
    .filter(
      (p) =>
        !activeIds.includes(p.id) &&
        (!searchQuery.trim() ||
          `${p.title} ${p.brand} ${p.category}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()))
    )
    .slice(0, 6);

  return (
    <main className={`shell ${styles.page}`}>
      <div className={styles.header}>
        <p className="eyebrow">CROSS-PLATFORM COMPARISON TRAY</p>
        <h1 className={styles.title}>
          Compare Deals with <em>Clarity.</em>
        </h1>
        <p className={styles.lede}>
          Evaluate up to 3 fashion items side-by-side. The best available price, highest discount, and customer satisfaction metrics are highlighted automatically.
        </p>
      </div>

      {/* Quick Add Bar */}
      <div className={styles.addBar}>
        <div className={styles.addBarLeft}>
          <span className={styles.trayCount}>
            Tray: <b>{list.length} of 3</b> items selected
          </span>
          {compared.length > 0 && (
            <button
              className={styles.clearTrayBtn}
              onClick={() => {
                activeIds.forEach((id) => toggle(id));
              }}
            >
              Clear Tray
            </button>
          )}
        </div>

        {list.length < 3 && (
          <div className={styles.quickSearch}>
            <input
              type="text"
              placeholder="Search items to add to tray..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.addInput}
            />
          </div>
        )}
      </div>

      {/* Suggested items to add if tray is not full */}
      {list.length < 3 && addableProducts.length > 0 && (
        <div className={styles.suggestionsStrip}>
          <span className={styles.suggestTitle}>Quick Add to Tray:</span>
          <div className={styles.suggestPills}>
            {addableProducts.slice(0, 4).map((p) => (
              <button
                key={p.id}
                className={styles.suggestBtn}
                onClick={() => toggle(p.id)}
              >
                + {p.title.slice(0, 30)}... ({formatPrice(p.price)})
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Comparison Grid */}
      <div className={styles.cardsGrid}>
        {list.map((product) => {
          const discount = Math.round(
            (1 - product.price / product.originalPrice) * 100
          );
          const isLowest = product.price === bestPrice && list.length > 1;
          const isTopDiscount = discount === highestDiscount && list.length > 1;
          const isTopRated =
            product.rating === highestRating && list.length > 1;

          const observedLow =
            Array.isArray(product.priceHistory) && product.priceHistory.length > 0
              ? Math.min(...product.priceHistory)
              : product.price;

          return (
            <article
              key={product.id}
              className={`${styles.card} ${isLowest ? styles.bestCard : ""}`}
            >
              {isLowest && (
                <div className={styles.bestPriceBanner}>
                  ★ Best Listed Price
                </div>
              )}

              <div className={styles.cardTop}>
                <div className={styles.imageWrap}>
                  {imageErrors[product.id] ? (
                    <div className={styles.imageFallback}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                      </svg>
                      <span>{product.category}</span>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.title}
                      onError={() => setImageErrors((prev) => ({ ...prev, [product.id]: true }))}
                    />
                  )}
                  <span className={`platform-tag ${product.platform} ${styles.platformBadge}`}>
                    {product.platform}
                  </span>
                  <button
                    className={styles.removeBtn}
                    onClick={() => toggle(product.id)}
                    title="Remove from comparison tray"
                    aria-label={`Remove ${product.title} from comparison`}
                  >
                    ✕
                  </button>
                </div>

                <div className={styles.cardHeader}>
                  <span className={styles.categoryLabel}>{product.category}</span>
                  <h3>
                    <Link href={`/products/${product.id}`}>{product.title}</Link>
                  </h3>
                  <span className={styles.brandText}>{product.brand}</span>
                </div>
              </div>

              {/* Price Block */}
              <div className={styles.priceBlock}>
                <div className={styles.mainPriceRow}>
                  <strong>{formatPrice(product.price)}</strong>
                  <s>{formatPrice(product.originalPrice)}</s>
                </div>
                <span
                  className={`${styles.discountBadge} ${
                    isTopDiscount ? styles.topHighlight : ""
                  }`}
                >
                  {discount}% off {isTopDiscount && "• Highest Saving"}
                </span>
              </div>

              {/* Metrics Matrix */}
              <dl className={styles.matrix}>
                <div>
                  <dt>Platform</dt>
                  <dd>
                    <strong>{product.platform}</strong>
                  </dd>
                </div>

                <div>
                  <dt>Rating & Reviews</dt>
                  <dd className={isTopRated ? styles.topHighlightText : ""}>
                    ★ {product.rating} ({product.reviews.toLocaleString("en-IN")})
                  </dd>
                </div>

                <div>
                  <dt>30-Day Observed Low</dt>
                  <dd>{formatPrice(observedLow)}</dd>
                </div>

                <div>
                  <dt>Stock Status</dt>
                  <dd>
                    <span
                      className={
                        product.available ? styles.inStock : styles.outOfStock
                      }
                    >
                      {product.available ? "● In stock" : "○ Out of stock"}
                    </span>
                  </dd>
                </div>

                <div>
                  <dt>Available Sizes</dt>
                  <dd className={styles.variantLine}>
                    {product.sizes.slice(0, 4).join(", ")}
                    {product.sizes.length > 4 ? "..." : ""}
                  </dd>
                </div>

                <div>
                  <dt>Colours</dt>
                  <dd className={styles.variantLine}>
                    {product.colors.join(", ")}
                  </dd>
                </div>
              </dl>

              {/* Action Buttons */}
              <div className={styles.actions}>
                <Link
                  className={`button ${styles.visitBtn}`}
                  href={`/products/${product.id}`}
                >
                  Inspect Full Deal ↗
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
