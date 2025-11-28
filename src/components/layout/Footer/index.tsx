import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Templates"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "API Reference", "Guides", "Support"],
    Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses"],
  };

  return (
    <footer
      className="bg-softBlack text-softWhite py-16 px-4 sm:px-6 lg:px-8"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="ml-3 text-xl font-bold">ListingAI</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered product listings for e-commerce sellers.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={link}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ListingAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
