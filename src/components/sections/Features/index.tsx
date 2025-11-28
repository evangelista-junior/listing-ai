import { Card } from "@/src/components/ui/Card";
import { Zap, Shield, Rocket } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      title: "AI-Powered Generation",
      description:
        "Advanced AI creates compelling product titles, descriptions, and bullet points optimized for conversions.",
    },
    {
      icon: <Shield className="w-6 h-6" aria-hidden="true" />,
      title: "SEO Optimization",
      description:
        "Automatic keyword research and integration to boost your product rankings on Amazon, eBay, and Shopify.",
    },
    {
      icon: <Rocket className="w-6 h-6" aria-hidden="true" />,
      title: "Multi-Platform Support",
      description:
        "Create listings for Amazon, eBay, Shopify, Etsy, and Walmart with platform-specific optimization.",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 animate-fade-in" id="features-heading">
            Powerful Features for Sellers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in stagger-1">
            Everything you need to create professional, high-converting product
            listings in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`animate-fade-in stagger-${index + 2}`}
            >
              <Card
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
