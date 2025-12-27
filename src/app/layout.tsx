import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/components/layout/NavBar";
import { Footer } from "@/src/components/layout/Footer";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ListingEngine AI | Optimise E-commerce Listings for UK Sellers",
  description:
    "Ditch the guesswork. Use ListingEngine AI to generate and optimise high-converting product descriptions for Amazon.co.uk and Shopify. Boost your UK sales today.",
  keywords: [
    "AI listing tool UK",
    "Amazon SEO optimisation",
    "ecommerce copywriting AI",
    "product description generator",
    "listing optimiser",
    "eBay listing copywriter",
    "Shopify SEO UK",
    "AI for sellers",
    "marketplace listing automation",
    "increase product visibility",
  ],

  openGraph: {
    title: "ListingEngine AI: The Future of E-commerce Listing Optimisation",
    description:
      "Transform struggling products into best-sellers. ListingEngine AI uses advanced models to craft powerful, high-ranking product copy for UK marketplaces.",
    url: "https://www.listingengine.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ListingEngine AI: The Future of E-commerce Listing Optimisation",
    description:
      "Transform struggling products into best-sellers. ListingEngine AI crafts powerful, high-ranking product copy for UK marketplaces.",
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
