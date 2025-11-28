import React from "react";
import { X, Check } from "lucide-react";

export function Product() {
  const oldWay = [
    "Manually write each product listing",
    "Hours spent on SEO research",
    "Inconsistent descriptions",
    "Generic, non-converting copy",
    "No multi-platform optimization",
  ];

  const newWay = [
    "AI generates perfect listings instantly",
    "Built-in SEO optimization",
    "Consistent brand voice",
    "Conversion-optimized copy",
    "Works across all platforms",
  ];

  return (
    <section
      className="relative mx-auto py-18 px-3 sm:px-6 lg:px-6 bg-white-soft"
      id="product"
    >
      <div>
        <div className="text-center mb-16">
          <h2 className="mb-3 animate-fade-in">
            The Smarter Way to Create Listings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in stagger-1">
            Stop wasting time on manual listing creation. Let AI do the work for
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Old Way */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 animate-fade-in stagger-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" aria-hidden="true" />
              </div>
              <h3>Manual Listing</h3>
            </div>
            <ul className="space-y-3">
              {oldWay.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X
                    className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-linear-to-br from-primary to-auxiliar rounded-xl p-6 shadow-xl text-white animate-fade-in stagger-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Check className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-white">AI-Powered Listing</h3>
            </div>
            <ul className="space-y-3">
              {newWay.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 text-secondary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
