"use client";

import { Button } from "@/src/components/ui/Button";
import { LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import transparentLogo from "@/public/transparent_logo.svg";
import { usePathname } from "next/navigation";
import { useLoginStore } from "@/src/store/Auth/Login";

const navLinks = [
  { label: "About", href: "about", aria: "About section" },
  { label: "Product", href: "product", aria: "Product section" },
  { label: "Pricing", href: "pricing", aria: "Pricing section" },
  { label: "Benefits", href: "benefits", aria: "Benefits section" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();
  const { isLoggedIn } = useLoginStore();

  const isPanelPage = pathName.startsWith("/panel");

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {isLoggedIn && isPanelPage && (
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#2563EB]"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}

          <Link href="/" className="flex items-center">
            <Image
              src={transparentLogo}
              alt="Company logo."
              className="max-w-[180px]"
            />
          </Link>

          {!isLoggedIn && !isPanelPage && (
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  aria-label={link.aria}
                  href={pathName == "/" ? `#${link.href}` : `/#${link.href}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {!isLoggedIn && !isPanelPage && (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-black-soft hover:text-primary transition-colors px-3 py-2"
                aria-label="Login to account"
              >
                Login
              </Link>
              <Link href="/auth/signup">
                <Button variant="primary" aria-label="Sign up for account">
                  Sign up
                </Button>
              </Link>
            </div>
          )}

          {isLoggedIn && (
            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <span className="text-sm text-gray-600">john@example.com</span>
              </div>
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-[#2563EB] transition-colors"
                aria-label="Logout"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </Link>
            </div>
          )}

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
          <div className="md:hidden py-3 border-t border-gray-200">
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
              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
                <button
                  className="text-black-soft hover:text-primary transition-colors py-1 text-left"
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
