"use client";

import Link from "next/link";
import { products, formatPrice } from "@/data/products";
import { useComparisonStore } from "@/state/useComparisonStore";
import styles from "./compare.module.css";

export default function Compare() {
  const { compared, toggle } = useComparisonStore();
  const selected = compared.length ? compared : products.slice(0, 3).map((product) => product.id);
  const list = products.filter((product) => selected.includes(product.id));
  const best = Math.min(...list.map((product) => product.price));
  return <main className={`shell ${styles.page}`}><p className="eyebrow">DECIDE WITH LESS GUESSWORK</p><h1 className={styles.title}>Your comparison <em>tray.</em></h1><p className={styles.lede}>Choose up to three products. The best available price is highlighted; differences stay visible instead of living in your memory.</p><div className={styles.picker} aria-label="Products to compare">{products.map((product) => <button aria-pressed={selected.includes(product.id)} onClick={() => toggle(product.id)} key={product.id}>{selected.includes(product.id) ? "✓ " : "+ "}{product.title}</button>)}</div><div className={styles.cards}>{list.map((product) => <article key={product.id} className={`${styles.card} ${product.price === best ? styles.best : ""}`}>{product.price === best && <span className={styles.bestTag}>Best listed price</span>}<img src={product.image} alt="" /><p className="platform">{product.platform}</p><h2>{product.title}</h2><strong>{formatPrice(product.price)}</strong><dl><div><dt>Saving</dt><dd>{Math.round((1 - product.price / product.originalPrice) * 100)}% off</dd></div><div><dt>Rating</dt><dd>★ {product.rating}</dd></div><div><dt>Status</dt><dd>{product.available ? "In stock" : "Unavailable"}</dd></div></dl><Link className={`text-link ${styles.textLink}`} href={`/products/${product.id}`}>Inspect deal ↗</Link></article>)}</div></main>;
}
