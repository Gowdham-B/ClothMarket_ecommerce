"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSavedStore } from "@/state/useSavedStore";
import { useComparisonStore } from "@/state/useComparisonStore";
const links = [{ href: "/", icon: "⌂", label: "Home" }, { href: "/search", icon: "⌕", label: "Search" }, { href: "/saved", icon: "♡", label: "Saved" }, { href: "/compare", icon: "⇄", label: "Compare" }, { href: "/account", icon: "◉", label: "Account" }];
export function FloatingNav() { const pathname = usePathname(); const { saved } = useSavedStore(); const { compared } = useComparisonStore(); return <nav className="floating-nav" aria-label="Primary navigation">{links.map((link) => { const count = link.href === "/saved" ? saved.length : link.href === "/compare" ? compared.length : 0; return <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} title={link.label}><span aria-hidden>{link.icon}</span><span className="nav-label">{link.label}{count ? ` (${count})` : ""}</span></Link>; })}</nav>; }
