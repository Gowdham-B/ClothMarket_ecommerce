"use client";

import Link from "next/link";
import { Product, formatPrice } from "@/data/products";
import { useSavedStore } from "@/state/useSavedStore";
import { useComparisonStore } from "@/state/useComparisonStore";

export function ProductCard({ product }: { product: Product }) {
  const { saved, toggle: toggleSaved } = useSavedStore();
  const { compared, toggle: toggleCompared } = useComparisonStore();
  const saving = saved.includes(product.id);
  const comparing = compared.includes(product.id);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  return <article className="product-card"><div className="product-media"><Link className="product-image-link" href={`/products/${product.id}`} aria-label={`View details for ${product.title}`}><img src={product.image} alt={product.title} /><span className="deal-badge">{discount}% off</span></Link><button className="icon-button" aria-label={`${saving ? "Remove" : "Save"} ${product.title}`} aria-pressed={saving} onClick={() => toggleSaved(product.id)}>{saving ? "♥" : "♡"}</button></div><div className="product-copy"><p className="platform">{product.platform}</p><h3><Link href={`/products/${product.id}`}>{product.title}</Link></h3><p className="brand">{product.brand} · ★ {product.rating} ({product.reviews})</p><div className="price-row"><strong>{formatPrice(product.price)}</strong><s>{formatPrice(product.originalPrice)}</s></div><p className="deal-note">Lowest in the last 30 days</p><button className="mt-3 min-h-10 border border-[var(--pine)] px-3 text-xs font-bold text-[var(--pine)] hover:bg-[#dce8df] focus-visible:outline-offset-2" aria-pressed={comparing} onClick={() => toggleCompared(product.id)}>{comparing ? "✓ In comparison" : "+ Compare"}</button></div></article>;
}
