import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { FloatingNav } from "@/components/FloatingNav";
import { AppAccessGate } from "@/components/AppAccessGate";

export const metadata: Metadata = {
  title: "ClothMarket — Fashion deal discovery",
  description: "Search once, compare fashion deals across stores.",
};

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}><AppAccessGate><a className="skip-link" href="#content">Skip to content</a><header className="topbar shell"><Link className="wordmark" href="/" style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: "clamp(1.55rem, 2.5vw, 2.25rem)", letterSpacing: "-0.075em", lineHeight: 1 }}>Cloth<span style={{ fontStyle: "italic", letterSpacing: "-0.1em" }}>Market</span></Link><p>Fashion deals, thoughtfully compared.</p></header><div id="content">{children}</div><FloatingNav /></AppAccessGate></body></html>;
}
