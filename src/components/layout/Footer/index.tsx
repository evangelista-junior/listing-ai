import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import transparentLogo from "@/public/inverted_transparent_logo.svg";
import Link from "next/link";

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Templates"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "API Reference", "Guides", "Support"],
    Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses"],
  };

  return (
    <footer
      className="bg-black-soft text-white-soft py-15 px-3 sm:px-6 lg:px-6"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-9">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-3">
              <Image
                src={transparentLogo}
                alt="Company logo."
                className="max-w-[170px]"
              />
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered product listings for e-commerce sellers.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={link}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-3 md:mb-0">
            © {new Date().getFullYear()} Listing Engine. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
