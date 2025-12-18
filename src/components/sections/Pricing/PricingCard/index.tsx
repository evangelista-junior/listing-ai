import { Button } from "@/src/components/ui/Button";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  description: string;
}

export function PricingCard({
  name,
  price,
  period,
  features,
  highlighted = false,
  buttonText,
  description,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white p-6 rounded-xl border-2 transition-all duration-300 ${
        highlighted
          ? "border-primary shadow-2xl scale-105 relative"
          : "border-gray-200 shadow-lg hover:shadow-xl"
      }`}
      role="article"
      aria-label={`${name} pricing plan`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="mb-1">{name}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="flex items-baseline">
          <span className="text-5xl font-bold text-black-soft">{price}</span>
          <span className="text-gray-600 ml-2">/{period}</span>
        </div>
      </div>
      <Button
        variant={highlighted ? "primary" : "outline"}
        className="w-full mb-6"
        aria-label={`${buttonText} for ${name} plan`}
      >
        {buttonText}
      </Button>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              className="w-5 h-5 text-secondary mr-3 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
