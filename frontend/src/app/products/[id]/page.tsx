"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { products, formatPrice, type Platform } from "@/data/products";
import { useSavedStore } from "@/state/useSavedStore";
import { useComparisonStore } from "@/state/useComparisonStore";
import { useRecentlyViewedStore } from "@/state/useRecentlyViewedStore";
import { usePriceAlertsStore } from "@/state/usePriceAlertsStore";
import { ProductCard } from "@/features/catalog/ProductCard";
import styles from "./product.module.css";

const platformUrls: Record<Platform, string> = {
  AJIO: "https://www.ajio.com",
  Amazon: "https://www.amazon.in",
  Flipkart: "https://www.flipkart.com",
  Myntra: "https://www.myntra.com",
  Nike: "https://www.nike.com/in",
  Meesho: "https://www.meesho.com",
  Trends: "https://www.mytrends.in",
};

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((item) => item.id === id);

  const { saved, toggle: toggleSaved } = useSavedStore();
  const { compared, toggle: toggleCompared } = useComparisonStore();
  const { addViewed } = useRecentlyViewedStore();
  const { setAlert, removeAlert, hasAlert } = usePriceAlertsStore();

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [imageError, setImageError] = useState(false);
  const [alertTargetPrice, setAlertTargetPrice] = useState<number>(0);
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [alertSuccessMsg, setAlertSuccessMsg] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || "");
      setSelectedColor(product.colors[0] || "");
      setSelectedImage(product.image);
      setAlertTargetPrice(Math.round(product.price * 0.9));
      addViewed(product.id);
    }
  }, [product, addViewed]);

  if (!product) notFound();

  const discount = Math.round(
    (1 - product.price / product.originalPrice) * 100
  );

  const is30DayLow =
    Array.isArray(product.priceHistory) &&
    product.price <= Math.min(...product.priceHistory);

  const maxPrice = Math.max(...product.priceHistory);
  const minPrice = Math.min(...product.priceHistory);

  // Alternative products in the same category
  const comparable = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .slice(0, 4);

  // Multi-platform simulated price comparison table
  const crossPlatformOffers = [
    {
      platform: product.platform,
      price: product.price,
      isCurrent: true,
      url: platformUrls[product.platform],
    },
    {
      platform: product.platform === "AJIO" ? "Flipkart" : "AJIO",
      price: Math.round(product.price * 1.06),
      isCurrent: false,
      url: platformUrls[product.platform === "AJIO" ? "Flipkart" : "AJIO"],
    },
    {
      platform: product.platform === "Amazon" ? "Myntra" : "Amazon",
      price: Math.round(product.price * 1.12),
      isCurrent: false,
      url: platformUrls[product.platform === "Amazon" ? "Myntra" : "Amazon"],
    },
  ].sort((a, b) => a.price - b.price);

  const isBestPrice = crossPlatformOffers[0]?.platform === product.platform;
  const isAlertActive = hasAlert(product.id);

  const handleSaveAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertTargetPrice > 0) {
      setAlert(product.id, alertTargetPrice);
      setAlertSuccessMsg(`Alert active for ${formatPrice(alertTargetPrice)}`);
      setTimeout(() => {
        setAlertModalOpen(false);
        setAlertSuccessMsg("");
      }, 1500);
    }
  };

  const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <main className={`shell ${styles.page}`}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/search?q=${encodeURIComponent(product.category)}`}>
          {product.category}
        </Link>
        <span>/</span>
        <span className={styles.currentCrumb}>{product.title}</span>
      </nav>

      {/* Main Product Layout */}
      <div className={styles.grid}>
        {/* Left: Gallery Column */}
        <div className={styles.galleryCol}>
          <div className={styles.mainMedia}>
            {imageError ? (
              <div className={styles.imageFallbackLarge}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                </svg>
                <span>{product.category} Image</span>
              </div>
            ) : (
              <img
                src={selectedImage || product.image}
                alt={product.title}
                onError={() => setImageError(true)}
              />
            )}
            <span className={styles.dealBadgeFloat}>{discount}% off</span>
          </div>

          {imagesList.length > 1 && (
            <div className={styles.thumbnailRow}>
              {imagesList.map((imgUrl, i) => (
                <button
                  key={i}
                  className={`${styles.thumbBtn} ${
                    selectedImage === imgUrl ? styles.activeThumb : ""
                  }`}
                  onClick={() => setSelectedImage(imgUrl)}
                >
                  <img src={imgUrl} alt={`${product.title} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Buy Section */}
        <section className={styles.copyCol}>
          <div className={styles.platformHeader}>
            <span className={`platform-tag ${product.platform}`}>
              {product.platform}
            </span>
            <span className={styles.sellerNote}>
              Verified seller listing · In stock
            </span>
          </div>

          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.ratingBar}>
            <span className={styles.brandName}>{product.brand}</span>
            <span className={styles.divider}>•</span>
            <span className={styles.stars}>★ {product.rating}</span>
            <span className={styles.reviewCount}>
              ({product.reviews.toLocaleString("en-IN")} ratings)
            </span>
          </div>

          {/* Pricing Row */}
          <div className={styles.priceContainer}>
            <div className={styles.priceMain}>
              <strong>{formatPrice(product.price)}</strong>
              <s>{formatPrice(product.originalPrice)}</s>
              <span className={styles.discountPill}>{discount}% off</span>
            </div>
            {is30DayLow && (
              <div className={styles.lowPricePill}>
                ● Lowest observed price in the last 30 days
              </div>
            )}
          </div>

          {/* Color Selector */}
          <fieldset className={styles.fieldset}>
            <legend>
              Colour: <b>{selectedColor}</b>
            </legend>
            <div className={styles.chips}>
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={selectedColor === color ? styles.selectedChip : ""}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Size Selector */}
          <fieldset className={styles.fieldset}>
            <legend>
              Size: <b>{selectedSize}</b>
            </legend>
            <div className={styles.chips}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? styles.selectedChip : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Primary Actions */}
          <div className={styles.actionBlock}>
            {product.available ? (
              <a
                className={`button ${styles.buyBtn}`}
                target="_blank"
                rel="noreferrer"
                href={platformUrls[product.platform]}
              >
                Visit {product.platform} to Buy <span aria-hidden>↗</span>
              </a>
            ) : (
              <button className={`button ${styles.buyBtn}`} disabled>
                Currently Out of Stock
              </button>
            )}

            <p className={styles.disclosure}>
              You will complete your purchase directly on {product.platform}. ClothMarket never marks up prices or charges commission to shoppers.
            </p>

            <div className={styles.secondaryActions}>
              <button
                className={`button secondary ${styles.utilityBtn}`}
                onClick={() => toggleSaved(product.id)}
              >
                {saved.includes(product.id)
                  ? "♥ Saved in your rail"
                  : "♡ Save for later"}
              </button>

              <button
                className={`button secondary ${styles.utilityBtn}`}
                onClick={() => toggleCompared(product.id)}
              >
                {compared.includes(product.id)
                  ? "✓ In comparison tray"
                  : "+ Add to compare"}
              </button>

              <button
                className={`button secondary ${styles.utilityBtn}`}
                onClick={() => setAlertModalOpen(true)}
              >
                {isAlertActive ? "🔔 Alert Active" : "🔔 Price Alert"}
              </button>
            </div>
          </div>

          {/* Price Alert Modal */}
          {alertModalOpen && (
            <div className={styles.alertModalOverlay}>
              <div className={styles.alertModalCard}>
                <div className={styles.alertModalHeader}>
                  <h4>Set Price Drop Alert</h4>
                  <button
                    onClick={() => setAlertModalOpen(false)}
                    className={styles.closeModalBtn}
                  >
                    ✕
                  </button>
                </div>
                <p>
                  Notify me when {product.title} drops below:
                </p>
                <form onSubmit={handleSaveAlert} className={styles.alertForm}>
                  <div className={styles.alertInputRow}>
                    <span>₹</span>
                    <input
                      type="number"
                      value={alertTargetPrice}
                      onChange={(e) =>
                        setAlertTargetPrice(Number(e.target.value))
                      }
                      min="100"
                      max={product.price}
                      required
                    />
                  </div>
                  {alertSuccessMsg && (
                    <p className={styles.alertSuccess}>{alertSuccessMsg}</p>
                  )}
                  <div className={styles.alertFormBtns}>
                    <button type="submit" className="button">
                      Save Alert
                    </button>
                    {isAlertActive && (
                      <button
                        type="button"
                        className="button secondary"
                        onClick={() => {
                          removeAlert(product.id);
                          setAlertModalOpen(false);
                        }}
                      >
                        Remove Alert
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Cross-Platform Price Comparison Box */}
          <div className={styles.crossPlatformBox}>
            <div className={styles.crossHeader}>
              <h5>Cross-Platform Price Comparison</h5>
              <span>{isBestPrice ? "✓ Best price observed on " + product.platform : "Compare options"}</span>
            </div>
            <div className={styles.crossTable}>
              {crossPlatformOffers.map((offer) => (
                <div
                  key={offer.platform}
                  className={`${styles.crossRow} ${
                    offer.isCurrent ? styles.currentCrossRow : ""
                  }`}
                >
                  <div className={styles.crossStore}>
                    <span className={`platform-tag ${offer.platform}`}>
                      {offer.platform}
                    </span>
                    {offer.price === crossPlatformOffers[0].price && (
                      <span className={styles.bestOfferBadge}>Best Price</span>
                    )}
                  </div>
                  <div className={styles.crossPrice}>
                    <strong>{formatPrice(offer.price)}</strong>
                    <a
                      href={offer.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.crossVisit}
                    >
                      Visit ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lower Section: Price Journey & Details */}
      <div className={styles.lowerSection}>
        {/* Price Journey */}
        <section className={styles.journeyCard}>
          <p className="eyebrow">OBSERVED PRICE MOVEMENT</p>
          <h2>30-Day Price Journey</h2>
          <p className={styles.journeyLede}>
            Historical sample checkpoints tracked across stores to help you verify true discount depth.
          </p>

          <div
            className={styles.chart}
            aria-label={`Price journey between ${formatPrice(minPrice)} and ${formatPrice(maxPrice)}`}
          >
            {product.priceHistory.map((price, index) => {
              const isLatest = index === product.priceHistory.length - 1;
              const heightPercent = Math.max(
                20,
                Math.round((price / maxPrice) * 90)
              );
              return (
                <div
                  key={index}
                  className={`${styles.chartBar} ${
                    isLatest ? styles.latestBar : ""
                  }`}
                  style={{ height: `${heightPercent}%` }}
                >
                  <span className={styles.barLabel}>{formatPrice(price)}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.chartLabels}>
            <span>6 weeks ago</span>
            <span>4 weeks ago</span>
            <span>2 weeks ago</span>
            <span>Today (Current)</span>
          </div>

          <div className={styles.priceMetricsRow}>
            <div>
              <span>30-Day Low</span>
              <strong>{formatPrice(minPrice)}</strong>
            </div>
            <div>
              <span>30-Day High</span>
              <strong>{formatPrice(maxPrice)}</strong>
            </div>
            <div>
              <span>Current Deal</span>
              <strong style={{ color: "var(--coral)" }}>
                {formatPrice(product.price)}
              </strong>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className={styles.specsCard}>
          <p className="eyebrow">ITEM DETAILS</p>
          <h2>Product Specifications</h2>
          <p className={styles.descText}>{product.description}</p>

          <dl className={styles.specList}>
            <div>
              <dt>Category</dt>
              <dd>{product.category}</dd>
            </div>
            <div>
              <dt>Brand</dt>
              <dd>{product.brand}</dd>
            </div>
            <div>
              <dt>Stock Status</dt>
              <dd>{product.available ? "In Stock" : "Out of Stock"}</dd>
            </div>
            <div>
              <dt>Source Listing</dt>
              <dd>{product.platform} Fashion</dd>
            </div>
            <div>
              <dt>Available Sizes</dt>
              <dd>{product.sizes.join(", ")}</dd>
            </div>
            <div>
              <dt>Available Colours</dt>
              <dd>{product.colors.join(", ")}</dd>
            </div>
          </dl>
        </section>
      </div>

      {/* Alternatives Grid */}
      {comparable.length > 0 && (
        <section className={styles.similarSection}>
          <div className="section-heading">
            <div>
              <p className="eyebrow">MORE OPTIONS IN {product.category.toUpperCase()}</p>
              <h2>Similar Deals Worth Comparing</h2>
            </div>
            <Link
              href={`/search?q=${encodeURIComponent(product.category)}`}
              className="text-link"
            >
              Browse all {product.category} deals ↗
            </Link>
          </div>
          <div className="product-grid">
            {comparable.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
