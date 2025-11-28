"use client";

import { Button } from "../../ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="ml-3 text-xl font-bold text-softBlack">
              LaunchPad
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-softBlack hover:text-primary transition-colors"
              aria-label="Product section"
            >
              About
            </a>
            <a
              href="#product"
              className="text-softBlack hover:text-primary transition-colors"
              aria-label="Product section"
            >
              Product
            </a>
            <a
              href="#pricing"
              className="text-softBlack hover:text-primary transition-colors"
              aria-label="Pricing section"
            >
              Pricing
            </a>
            <a
              href="#benefits"
              className="text-softBlack hover:text-primary transition-colors"
              aria-label="Pricing section"
            >
              Benefits
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-softBlack hover:text-primary transition-colors px-4 py-2"
              aria-label="Login to account"
            >
              Login
            </Link>
            <Link href="/signup">
              <Button variant="primary" aria-label="Sign up for account">
                Sign up
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#product"
                className="text-softBlack hover:text-primary transition-colors py-2"
                aria-label="Product section"
              >
                Product
              </a>
              <a
                href="#pricing"
                className="text-softBlack hover:text-primary transition-colors py-2"
                aria-label="Pricing section"
              >
                Pricing
              </a>
              <a
                href="#docs"
                className="text-softBlack hover:text-primary transition-colors py-2"
                aria-label="Documentation"
              >
                Docs
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <button
                  className="text-softBlack hover:text-primary transition-colors py-2 text-left"
                  aria-label="Login to account"
                >
                  Login
                </button>
                <Button variant="primary" aria-label="Sign up for account">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
