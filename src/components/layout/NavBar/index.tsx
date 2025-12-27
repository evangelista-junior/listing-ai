"use client";

import { Button } from "@/src/components/ui/Button";
import { LogOut, Menu, PanelsTopLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import transparentLogo from "@/public/transparent_logo.svg";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/src/store/Auth";
import { usePanelStore } from "@/src/store/Panel";

const navLinks = [
  { label: "About", href: "about", aria: "About section" },
  // { label: "Product", href: "product", aria: "Product section" },
  { label: "Features", href: "features", aria: "Product section" },
  // { label: "Benefits", href: "benefits", aria: "Benefits section" },
  { label: "Pricing", href: "pricing", aria: "Pricing section" },
  { label: "Support", href: "support", aria: "Support section" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathName = usePathname();

  const { isAuthenticated, user } = useAuthStore();
  const { toggleSideMenu, isSideMenuOpen } = usePanelStore();

  const isPanelPage = pathName.startsWith("/panel");

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow"
      aria-label="Main navigation"
    >
      <div className=" mx-auto px-3 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            {isAuthenticated && isPanelPage && (
              <button
                onClick={() => toggleSideMenu()}
                className="p-2 rounded-md text-gray-400 transition-colors duration-300 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-label="Toggle sidebar"
              >
                {isSideMenuOpen ? (
                  <X className="w-9 h-9 text-secondary bg-white-soft shadow p-1 rounded-md" />
                ) : (
                  <Menu className="w-9 h-9 text-primary bg-white-soft shadow p-1 rounded-md" />
                )}
              </button>
            )}
            <Link href="/" className="flex items-center">
              <Image
                src={transparentLogo}
                alt="Company logo."
                className="w-4/5 max-w-[180px]"
              />
            </Link>
          </div>

          {!isAuthenticated && !isPanelPage && (
            <div className="hidden text-sm xl:text-base md:flex items-center space-x-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  aria-label={link.aria}
                  href={pathName == "/" ? `#${link.href}` : `/#${link.href}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {!isAuthenticated && !isPanelPage && (
            <div className="hidden text-sm xl:text-base md:flex items-center space-x-3">
              <Link
                href="/auth/login"
                className="text-black-soft hover:text-primary transition-colors px-1 py-2"
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

          {isAuthenticated && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div>
                  <Link
                    href="/panel/settings/profile"
                    className="text-xs md:text-sm text-gray-600 transition-colors duration-200 hover:bg-linear-to-r hover:from-primary hover:to-secondary  hover:text-transparent  hover:bg-clip-text"
                  >
                    {user?.email}
                  </Link>
                </div>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                  aria-label="Logout"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm md:text-base">Logout</span>
                </Link>
              </div>

              {!isPanelPage && (
                <div className="flex items-center gap-3">
                  <Link href="/panel/dashboard">
                    <Button variant="secondary">
                      <PanelsTopLeft className="w-4 h-4" />
                      Panel
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {!isPanelPage && !isAuthenticated && (
            <button
              className="md:hidden p-2 cursor-pointer"
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
          )}
        </div>

        {mobileMenuOpen && (
          <div className="py-3 border-t border-gray-200">
            <div className="flex flex-col justify-center items-center space-y-3">
              {!isAuthenticated && !isPanelPage && (
                <>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      aria-label={link.aria}
                      href={
                        pathName == "/" ? `#${link.href}` : `/#${link.href}`
                      }
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="flex flex-col items-center space-x-3">
                    <Link
                      href="/auth/login"
                      aria-label="Login to account"
                      className="font-bold text-black-soft hover:text-primary transition-colors px-1 py-2"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      Login
                    </Link>
                    <Link href="/auth/signup">
                      <Button
                        variant="primary"
                        aria-label="Sign up for account"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      >
                        Sign up
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
