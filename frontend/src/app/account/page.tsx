"use client";

import Link from "next/link";
import { useState } from "react";
import { useDemoAuth } from "@/state/useDemoAuth";
import { useSavedStore } from "@/state/useSavedStore";
import { useComparisonStore } from "@/state/useComparisonStore";
import { usePriceAlertsStore } from "@/state/usePriceAlertsStore";
import { useRecentlyViewedStore } from "@/state/useRecentlyViewedStore";
import { products, formatPrice } from "@/data/products";
import { ProductCard } from "@/features/catalog/ProductCard";

export default function Account() {
  const { user, ready, signOut } = useDemoAuth();
  const { saved } = useSavedStore();
  const { compared } = useComparisonStore();
  const { alerts, removeAlert } = usePriceAlertsStore();
  const { recentlyViewed } = useRecentlyViewedStore();

  const [favStores, setFavStores] = useState<string[]>([
    "AJIO",
    "Myntra",
    "Amazon",
  ]);

  const toggleStore = (store: string) => {
    setFavStores((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]
    );
  };

  const recentProducts = products
    .filter((p) => recentlyViewed.includes(p.id))
    .slice(0, 4);

  const alertedProducts = alerts
    .map((alert) => {
      const prod = products.find((p) => p.id === alert.productId);
      return prod ? { ...prod, targetPrice: alert.targetPrice } : null;
    })
    .filter(Boolean);

  if (!ready) {
    return (
      <main className="shell" style={{ padding: "40px 0" }}>
        <p>Loading account profile…</p>
      </main>
    );
  }

  // If user is not signed in, show clean guest sign-in state
  if (!user) {
    return (
      <main className="shell" style={{ padding: "36px 0 60px" }}>
        <div className="acct-guest-card">
          <div style={{ fontSize: "2.2rem", marginBottom: "10px" }}>👤</div>
          <h1 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>
            Sign in to ClothMarket
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: "1.6", marginBottom: "20px" }}>
            Sign in to sync your saved fashion deals, active comparison trays, and personalized price drop alerts across devices.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <Link className="button" href="/login">
              Sign In
            </Link>
            <Link className="button secondary" href="/register">
              Create Account
            </Link>
          </div>
        </div>

        <style jsx>{`
          .acct-guest-card {
            max-width: 500px;
            margin: 0 auto;
            background: var(--card);
            border: 1px solid var(--line);
            border-radius: 12px;
            padding: 36px 24px;
            text-align: center;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="shell" style={{ padding: "28px 0 60px" }}>
      {/* Profile Header */}
      <div className="acct-profile-header">
        <div className="acct-profile-left">
          <div className="acct-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="acct-name-row">
              <h1 className="acct-name">{user.name}</h1>
              <span className="acct-badge">PRO DEAL HUNTER</span>
            </div>
            <p className="acct-email">
              {user.email} · Demo Local Session Active
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="button secondary"
            style={{ fontSize: "0.78rem", padding: "8px 16px" }}
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      </div>

      {/* Metrics Row (4 Cards) */}
      <div className="acct-metrics-grid">
        <div className="acct-metric-card">
          <span className="acct-metric-label">SAVED PICKS</span>
          <div className="acct-metric-value" style={{ color: "var(--pine)" }}>
            {saved.length}
          </div>
          <Link href="/saved" className="acct-metric-link">
            View saved rail ↗
          </Link>
        </div>

        <div className="acct-metric-card">
          <span className="acct-metric-label">IN COMPARISON</span>
          <div className="acct-metric-value" style={{ color: "var(--pine)" }}>
            {compared.length} / 3
          </div>
          <Link href="/compare" className="acct-metric-link">
            Inspect comparison ↗
          </Link>
        </div>

        <div className="acct-metric-card">
          <span className="acct-metric-label">ACTIVE PRICE ALERTS</span>
          <div className="acct-metric-value" style={{ color: "var(--coral)" }}>
            {alerts.length}
          </div>
          <span className="acct-metric-hint">Tracking 30-day lows</span>
        </div>

        <div className="acct-metric-card">
          <span className="acct-metric-label">TRACKED STORES</span>
          <div className="acct-metric-value" style={{ color: "var(--pine)" }}>
            7
          </div>
          <span className="acct-metric-hint">Amazon, Myntra, AJIO +</span>
        </div>
      </div>

      {/* Active Price Alerts Section */}
      <section style={{ marginBottom: "32px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">AUTOMATED PRICE MONITORING</p>
            <h2 style={{ fontSize: "1.3rem", margin: 0 }}>Active Price Alerts</h2>
          </div>
        </div>

        {alertedProducts.length > 0 ? (
          <div style={{ display: "grid", gap: "8px" }}>
            {alertedProducts.map((item: any) => (
              <div key={item.id} className="acct-alert-row">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "40px", height: "50px", objectFit: "cover", borderRadius: "4px" }}
                  />
                  <div>
                    <h4 style={{ margin: "0 0 2px", fontSize: "0.9rem" }}>
                      <Link href={`/products/${item.id}`}>{item.title}</Link>
                    </h4>
                    <span style={{ fontSize: "0.73rem", color: "var(--muted)" }}>
                      Current: <b>{formatPrice(item.price)}</b> ({item.platform})
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span className="acct-alert-target">
                    Target: {formatPrice(item.targetPrice)}
                  </span>
                  <button
                    className="acct-alert-remove"
                    onClick={() => removeAlert(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="acct-alert-empty">
            <span>
              You haven&apos;t set any price drop alerts yet. Open any product and click &ldquo;🔔 Price Alert&rdquo; to monitor it.
            </span>
            <Link className="button secondary" href="/search" style={{ fontSize: "0.76rem" }}>
              Explore Deals
            </Link>
          </div>
        )}
      </section>

      {/* Shopping Preferences */}
      <section className="acct-preferences">
        <p className="eyebrow">DEAL DISCOVERY PREFERENCES</p>
        <h3 style={{ fontSize: "1.15rem", marginBottom: "6px" }}>
          Preferred Shopping Platforms
        </h3>
        <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "14px" }}>
          Select the stores you check most frequently to highlight their deals in your feed.
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[
            "Amazon",
            "Flipkart",
            "Myntra",
            "AJIO",
            "Meesho",
            "Nike",
            "Trends",
          ].map((store) => {
            const isFav = favStores.includes(store);
            return (
              <button
                key={store}
                onClick={() => toggleStore(store)}
                className="acct-store-chip"
                style={{
                  borderColor: isFav ? "var(--pine)" : "var(--line)",
                  background: isFav ? "var(--pine-soft)" : "#ffffff",
                  color: isFav ? "var(--pine)" : "var(--ink)",
                  fontWeight: isFav ? 700 : 500,
                }}
              >
                {isFav ? "✓ " : "+ "}
                {store}
              </button>
            );
          })}
        </div>
      </section>

      {/* Recently Viewed Products */}
      {recentProducts.length > 0 && (
        <section>
          <div className="section-heading">
            <div>
              <p className="eyebrow">BROWSING HISTORY</p>
              <h2 style={{ fontSize: "1.3rem", margin: 0 }}>Recently Viewed Deals</h2>
            </div>
          </div>
          <div className="product-grid">
            {recentProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
      )}

      <style jsx>{`
        .acct-profile-header {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 22px;
        }

        .acct-profile-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .acct-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--pine);
          color: #ffffff;
          font-size: 1.35rem;
          font-weight: 800;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .acct-name-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .acct-name {
          font-size: 1.35rem;
          margin: 0;
        }

        .acct-badge {
          font-size: 0.65rem;
          font-weight: 800;
          background: var(--pine-soft);
          color: var(--pine);
          padding: 2px 7px;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }

        .acct-email {
          color: var(--muted);
          font-size: 0.82rem;
          margin: 3px 0 0;
        }

        .acct-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 28px;
        }

        .acct-metric-card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 14px;
        }

        .acct-metric-label {
          font-size: 0.7rem;
          color: var(--muted);
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .acct-metric-value {
          font-size: 1.6rem;
          font-weight: 800;
          margin: 3px 0;
        }

        .acct-metric-link {
          font-size: 0.73rem;
          color: var(--pine);
          font-weight: 700;
        }

        .acct-metric-hint {
          font-size: 0.73rem;
          color: var(--muted);
        }

        .acct-alert-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 10px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .acct-alert-target {
          background: var(--coral-soft);
          color: var(--coral);
          padding: 3px 9px;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 700;
        }

        .acct-alert-remove {
          border: 0;
          background: transparent;
          color: var(--coral);
          font-size: 0.76rem;
          cursor: pointer;
          text-decoration: underline;
        }

        .acct-alert-empty {
          padding: 20px;
          background: var(--card);
          border: 1px dashed var(--line);
          border-radius: 10px;
          color: var(--muted);
          font-size: 0.82rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .acct-preferences {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 32px;
        }

        .acct-store-chip {
          padding: 5px 13px;
          border-radius: 999px;
          border: 1px solid;
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .acct-store-chip:hover {
          border-color: var(--pine);
          background: var(--pine-soft);
        }

        @media (max-width: 900px) {
          .acct-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .acct-metrics-grid {
            grid-template-columns: 1fr;
          }
          .acct-profile-header {
            padding: 16px;
          }
          .acct-avatar {
            width: 42px;
            height: 42px;
            font-size: 1.1rem;
          }
          .acct-name {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </main>
  );
}
