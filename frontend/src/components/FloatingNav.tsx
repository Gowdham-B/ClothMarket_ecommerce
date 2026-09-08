"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSavedStore } from "@/state/useSavedStore";
import { useComparisonStore } from "@/state/useComparisonStore";

const links = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: "/search",
    label: "Deals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    href: "/saved",
    label: "Saved",
    countKey: "saved" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    href: "/compare",
    label: "Compare",
    countKey: "compare" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    href: "/account",
    label: "Account",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export function FloatingNav() {
  const pathname = usePathname();
  const { saved } = useSavedStore();
  const { compared } = useComparisonStore();

  return (
    <nav className="floating-nav" aria-label="Primary navigation">
      {links.map((link) => {
        const count =
          link.countKey === "saved"
            ? saved.length
            : link.countKey === "compare"
            ? compared.length
            : 0;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            title={link.label}
          >
            <span className="nav-icon" aria-hidden>
              {link.icon}
            </span>
            <span className="nav-label">{link.label}</span>
            {count > 0 && (
              <span className="nav-counter-badge" aria-label={`${count} items`}>
                {count}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
