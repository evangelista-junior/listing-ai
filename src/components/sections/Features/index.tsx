import { Card } from "@/src/components/ui/Card";
import { Zap, Shield, Rocket } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      title: "AI-Powered",
      description:
        "Our advanced AI identifies your product in seconds and intelligently maps item specifics to their corresponding fields.",
    },
    {
      icon: <Shield className="w-6 h-6" aria-hidden="true" />,
      title: "SEO Optimized",
      description:
        "Expertly crafted titles and descriptions, fully eBay-optimized for maximum search visibility and conversion.",
    },
    {
      icon: <Rocket className="w-6 h-6" aria-hidden="true" />,
      title: "Lighning Fast",
      description: "Create multiple listings simultaneously, done in seconds.",
    },
  ];

  return (
    <section
      className="relative mx-auto py-18px-3 sm:px-6 lg:px-6 bg-white"
      id="features"
    >
      <div className="max-w-7xl py-18 mx-auto">
        <div className="text-center mb-15">
          <h2 className="mb-3 animate-fade-in" id="features-heading">
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
