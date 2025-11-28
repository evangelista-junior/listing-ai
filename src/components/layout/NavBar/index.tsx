"use client";

import { Button } from "@/src/components/ui/Button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import transparentLogo from "@/public/transparent_logo.svg";

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
            <Image
              src={transparentLogo}
              alt="Company logo."
              className="max-w-[230px]"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-black-soft hover:text-primary transition-colors"
              aria-label="Product section"
            >
              About
            </a>
            <a
              href="#product"
              className="text-black-soft hover:text-primary transition-colors"
              aria-label="Product section"
            >
              Product
            </a>
            <a
              href="#pricing"
              className="text-black-soft hover:text-primary transition-colors"
              aria-label="Pricing section"
            >
              Pricing
            </a>
            <a
              href="#benefits"
              className="text-black-soft hover:text-primary transition-colors"
              aria-label="Pricing section"
            >
              Benefits
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-black-soft hover:text-primary transition-colors px-4 py-2"
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
                className="text-black-soft hover:text-primary transition-colors py-2"
                aria-label="Product section"
              >
                Product
              </a>
              <a
                href="#pricing"
                className="text-black-soft hover:text-primary transition-colors py-2"
                aria-label="Pricing section"
              >
                Pricing
              </a>
              <a
                href="#docs"
                className="text-black-soft hover:text-primary transition-colors py-2"
                aria-label="Documentation"
              >
                Docs
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <button
                  className="text-black-soft hover:text-primary transition-colors py-2 text-left"
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
