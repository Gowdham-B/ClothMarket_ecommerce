"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
export function SearchBar({ value, onChange, large = false }: { value: string; onChange: (value: string) => void; large?: boolean }) {
  const router = useRouter();
  function submit(event: FormEvent) { event.preventDefault(); router.push(`/search?q=${encodeURIComponent(value || "clothing")}`); }
  return <form className={`search-bar ${large ? "large" : ""}`} onSubmit={submit} role="search"><label className="sr-only" htmlFor="product-search">Search clothing deals</label><span aria-hidden>⌕</span><input id="product-search" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search shirts, hoodies, kurtis..." /><button type="submit">Search</button></form>;
}
