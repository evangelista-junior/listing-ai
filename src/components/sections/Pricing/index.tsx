import { PricingCard } from "./PricingCard";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "50",
      period: "month",
      description: "Perfect for individual sellers",
      buttonText: "Get Started",
      features: [
        "35 AI listings per month",
        "3 platform integrations",
        "Basic SEO optimization",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "€75",
      period: "month",
      description: "Best for growing businesses",
      buttonText: "Start Free Trial",
      highlighted: true,
      features: [
        "Unlimited AI listings",
        "All platform integrations",
        "Advanced SEO & keywords",
        "Priority support",
        "Custom brand voice",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      description: "For large-scale operations",
      buttonText: "Contact Sales",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "White-label solution",
        "API access",
        "Custom integrations",
        "Team collaboration tools",
      ],
    },
  ];

  return (
    <section
      className="relative mx-auto py-18 px-3 sm:px-6 lg:px-6 bg-white-soft"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-3 animate-fade-in" id="pricing-heading">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in stagger-1">
            Choose the plan that fits your business. Start with a 14-day free
            trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`animate-fade-in stagger-€{index + 2}`}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12 animate-fade-in stagger-5">
          All plans include 14-day free trial. Cancel anytime, no questions
          asked.
        </p>
      </div>
    </section>
  );
}
