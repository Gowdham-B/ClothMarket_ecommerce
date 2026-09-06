"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/features/catalog/ProductCard";
import { SearchBar } from "@/components/SearchBar";

const categories = ["Shirts", "Hoodies", "Kurtis", "Denim", "Sneakers"];

export default function Home() {
  const [query, setQuery] = useState("");
  const deals = products.slice(0, 4);
  return (
    <main>
      <section className="hero shell">
        <p className="eyebrow">CLOTHMARKET / DEAL DISCOVERY</p>
        <div className="hero-grid">
          <div>
            <h1>Where your<br /><em>style takes root.</em></h1>
            <p className="lede">Search once. See clothing deals from the stores you already trust—then decide with the price story in view.</p>
            <SearchBar value={query} onChange={setQuery} large />
            <div className="quick-links" aria-label="Popular categories">
              {categories.map((category) => <Link key={category} href={`/search?q=${category}`}>{category}</Link>)}
            </div>
          </div>
          <aside className="hero-note">
            <span>THE CLOTHMARKET WAY</span>
            <strong>Search → Discover → Compare → Buy</strong>
            <p>We are your comparison layer, not another store. Every purchase button tells you where it goes.</p>
          </aside>
        </div>
      </section>
      <section className="shell section">
        <div className="section-heading"><div><p className="eyebrow">TODAY&apos;S EDIT</p><h2>Deals worth a closer look</h2></div><Link href="/search" className="text-link">Explore all deals <span aria-hidden>↗</span></Link></div>
        <div className="product-grid">{deals.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="shell section split-promo">
        <div><p className="eyebrow">COMPARE WITH CLARITY</p><h2>Price is only the first signal.</h2><p>See platform, availability, rating and price movement together so the better choice is easier to recognise.</p><Link className="button secondary" href="/compare">Open comparison tray</Link></div>
        <div className="comparison-preview" aria-label="Example price comparison">
          <p>Oversized denim shirt</p>
          <div><span>AJIO <small>Best price</small></span><b>₹899</b></div>
          <div><span>Flipkart</span><b>₹949</b></div>
          <div><span>Amazon</span><b>₹999</b></div>
        </div>
      </section>
    </main>
  );
}
