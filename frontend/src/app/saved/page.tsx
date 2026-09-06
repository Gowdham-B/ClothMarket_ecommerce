"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/features/catalog/ProductCard";
import { useSavedStore } from "@/state/useSavedStore";
import styles from "../state-page.module.css";

export default function Saved() {
  const { saved } = useSavedStore();
  const result = products.filter((product) => saved.includes(product.id));
  return <main className={`shell ${styles.page}`}><p className="eyebrow">YOUR EDIT</p><h1 className={styles.title}>Saved for <em>later.</em></h1>{result.length ? <div className="product-grid">{result.map((product) => <ProductCard product={product} key={product.id} />)}</div> : <div className={styles.empty}><h2>Your saved rail is empty.</h2><p>Save pieces while exploring to keep price changes in sight.</p><Link className="button" href="/search">Start discovering</Link></div>}</main>;
}
