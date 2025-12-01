import { Clock, DollarSign, Target, BarChart3, Globe, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";

export function Benefits() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" aria-hidden="true" />,
      title: "Save Time",
      description:
        "Generate complete product listings in seconds instead of hours. Spend more time sourcing products and less time writing.",
    },
    {
      icon: <DollarSign className="w-6 h-6" aria-hidden="true" />,
      title: "Increase Sales",
      description:
        "Our AI creates conversion-optimized copy proven to increase click-through rates and sales by an average of 35%.",
    },
    {
      icon: <Target className="w-6 h-6" aria-hidden="true" />,
      title: "Better Rankings",
      description:
        "Built-in SEO optimization ensures your products rank higher in search results on Amazon, eBay, and other platforms.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" aria-hidden="true" />,
      title: "Consistent Quality",
      description:
        "Maintain professional, on-brand listings across all your products. No more inconsistent descriptions or typos.",
    },
    {
      icon: <Globe className="w-6 h-6" aria-hidden="true" />,
      title: "Multi-Platform Ready",
      description:
        "Create optimized listings for Amazon, eBay, Shopify, Etsy, and Walmart—all from one dashboard.",
    },
    {
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      title: "Bulk Generation",
      description:
        "Upload hundreds of products and generate all listings at once. Perfect for large catalogs and seasonal inventory.",
    },
  ];

  return (
    <section
      className="relative mx-auto py-18 px-3 sm:px-6 lg:px-6 bg-white"
      id="benefits"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-3 animate-fade-in" id="benefits-heading">
            Why Choose{" "}
            <span className="bg-linear-to-r from-primary to-auxiliar bg-clip-text text-transparent">
              Listing Engine
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in stagger-1">
            Join thousands of successful sellers who are scaling their
            businesses with AI-powered listings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        <div className="mt-15 text-center bg-linear-to-br from-primary to-auxiliar rounded-2xl p-12 text-white animate-fade-in stagger-6">
          <h3 className="text-white mb-4">
            Stop Losing Sales to Dull Descriptions !
          </h3>
          <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required. Cancel
            anytime.
          </p>
          <Link href="/auth/signup">
            <Button variant="white">Get Started Free</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
