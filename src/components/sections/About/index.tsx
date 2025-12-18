import Image from "next/image";
import transparentLogo from "@/public/transparent_logo.svg";
import jamesPhoto from "@/public/james.png";

export function About() {
  return (
    <section
      className="relative mx-auto py-18 px-3 sm:px-6 lg:px-6 bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-9 items-center">
          <div className="animate-fade-in">
            <h2 className="mb-6 flex items-center gap-3">
              About
              <Image
                src={transparentLogo}
                alt="Company logo."
                className="max-w-[180px]"
              />
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We built Listing Engine because creating product listings that
              actually convert is time-consuming and often frustrating. As
              former e‑commerce sellers, we spent many hours writing
              descriptions, researching keywords, and adapting listings for
              different platforms.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our AI‑assisted platform studies successful listings across
              Amazon, eBay, Shopify and other marketplaces to generate optimized
              product descriptions that save time and improve visibility.
            </p>
            <p className="text-lg text-gray-600">
              We’re a new company and like to be realistic: we’ve already helped
              dozens of sellers simplify their listing creation so they can
              focus on what matters — growing their business.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in stagger-1">
            <Image
              src={jamesPhoto}
              alt="James photo, one of the founders of the product"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
