"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  large?: boolean;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  large = false,
  placeholder = "Search shirts, hoodies, kurtis, jeans...",
}: SearchBarProps) {
  const router = useRouter();

  function submit(event: FormEvent) {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(value.trim() || "clothing")}`);
  }

  return (
    <form
      className={`search-bar ${large ? "large" : ""}`}
      onSubmit={submit}
      role="search"
    >
      <label className="sr-only" htmlFor="product-search">
        Search clothing deals across platforms
      </label>
      <span className="search-bar-icon" aria-hidden="true">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
      <input
        id="product-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck="false"
      />
      <button type="submit" aria-label="Search deals">
        Search
      </button>
    </form>
  );
}
