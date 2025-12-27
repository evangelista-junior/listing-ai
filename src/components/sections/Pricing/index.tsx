import Link from "next/link";
import { PricingCard } from "./PricingCard";
import { Button } from "../../ui/Button";
import { Check } from "lucide-react";

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
        <div className="text-center mb-15">
          <h2 className="mb-3 animate-fade-in" id="pricing-heading">
            Simple, transparent pricing, no monthly subscriptions
          </h2>
          <p className="text-xl text-transparent bg-linear-to-br from-primary to-secondary hover:to-auxiliar duration-300 bg-clip-text max-w-2xl mx-auto animate-fade-in stagger-1">
            <Link href="/auth/signup">
              Sign up today to receive 100 free listing credits
            </Link>
          </p>
        </div>

        <div className="flex justify-center items-center">
          {/* {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`animate-fade-in stagger-€{index + 2}`}
            >
              <PricingCard {...plan} />
            </div>
          ))} */}
          <div
            className={`bg-white p-6 rounded-xl border-2 transition-all duration-300 border-primary shadow-2xl scale-105 relative text-center`}
            role="article"
            aria-label={`Free Trial pricing plan`}
          >
            <div className="mb-6">
              <h3 className="mb-1">Free Trial</h3>
              <p className="text-gray-600 mb-3">100 free credits</p>
            </div>
            <Button
              variant="primary"
              className="w-full mb-6"
              aria-label="Start Free Trial"
            >
              Start Free Trial
            </Button>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check
                  className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700">
                  £0.20 per listing thereafter.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
