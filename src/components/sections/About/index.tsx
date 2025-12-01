import Image from "next/image";
import transparentLogo from "@/public/transparent_logo.svg";
import { Sparkles, TrendingUp, Clock } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: <Sparkles className="w-6 h-6" aria-hidden="true" />,
      value: "10M+",
      label: "Listings Generated",
    },
    {
      icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
      value: "35%",
      label: "Average Sales Increase",
    },
    {
      icon: <Clock className="w-6 h-6" aria-hidden="true" />,
      value: "5 min",
      label: "Average Time Saved",
    },
  ];

  return (
    <section
      className="relative mx-auto py-18 px-3 sm:px-6 lg:px-6 bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-linear-to-br from-white-soft to-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 animate-fade-in stagger-${
                  index + 2
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center text-white fshrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-black-soft mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
