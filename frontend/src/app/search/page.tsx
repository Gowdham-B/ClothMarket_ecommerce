"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/features/catalog/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { products } from "@/data/products";
import styles from "./search.module.css";

function SearchContent() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [platform, setPlatform] = useState("All");
  const [sort, setSort] = useState("relevance");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const items = useMemo(() => products.filter((product) => (!query || `${product.title} ${product.brand} ${product.category}`.toLowerCase().includes(query.toLowerCase())) && (platform === "All" || product.platform === platform) && (!onlyAvailable || product.available)).sort((first, second) => sort === "price" ? first.price - second.price : sort === "discount" ? second.originalPrice - second.price - (first.originalPrice - first.price) : second.rating - first.rating), [query, platform, sort, onlyAvailable]);
  const clearFilters = () => { setPlatform("All"); setSort("relevance"); setOnlyAvailable(false); };

  return <main className={`shell ${styles.page}`}><p className="eyebrow">DISCOVER / COMPARE</p><h1 className={styles.title}>Find your next <em>better deal.</em></h1><SearchBar value={query} onChange={setQuery} /><div className={styles.layout}><aside className={styles.filters} aria-label="Search filters"><h2>Refine</h2><label>Platform<select value={platform} onChange={(event) => setPlatform(event.target.value)}><option>All</option>{["AJIO", "Amazon", "Flipkart", "Myntra", "Nike", "Meesho"].map((value) => <option key={value}>{value}</option>)}</select></label><label>Sort by<select value={sort} onChange={(event) => setSort(event.target.value)}><option value="relevance">Top rated</option><option value="price">Price: low first</option><option value="discount">Biggest saving</option></select></label><label className={styles.check}><input type="checkbox" checked={onlyAvailable} onChange={(event) => setOnlyAvailable(event.target.checked)} /> In stock only</label><button className={styles.clear} onClick={clearFilters}>Clear filters</button></aside><section className={styles.results}><div className={styles.meta}><b>{items.length} curated matches</b><span>Prices are demo listings, checked in one view.</span></div>{items.length ? <div className="product-grid">{items.map((product) => <ProductCard product={product} key={product.id} />)}</div> : <div className={styles.empty}><h2>No close matches yet.</h2><p>Try a broader term such as “shirt” or remove a filter.</p><button className="button" onClick={() => setQuery("")}>Browse all deals</button></div>}</section></div></main>;
}

export default function SearchPage() { return <Suspense fallback={<main className="shell"><p>Loading discovery…</p></main>}><SearchContent /></Suspense>; }
