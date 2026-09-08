import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { FloatingNav } from "@/components/FloatingNav";
import { AppAccessGate } from "@/components/AppAccessGate";

export const metadata: Metadata = {
  title: "ClothMarket — Fashion Deal Discovery Across Stores",
  description:
    "Search once, discover and compare fashion deals across Amazon, Flipkart, Myntra, AJIO, Meesho, Nike, and Trends.",
};

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <AppAccessGate>
          <a className="skip-link" href="#content">
            Skip to content
          </a>
          <Header />
          <div id="content">{children}</div>
          <FloatingNav />
        </AppAccessGate>
      </body>
    </html>
  );
}
