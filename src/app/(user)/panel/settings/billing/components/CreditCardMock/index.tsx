export type CardBrand =
  | "visa"
  | "mastercard"
  | "amex"
  | "diners"
  | "jcb"
  | "unionpay"
  | "discover"
  | "unknown";

export interface CardBrandStyle {
  name: string;
  displayName: string;
  gradient: string;
  textColor: string;
}

interface CreditCardMockProps {
  cardBrand: CardBrand;
}

export const cardBrandStyles: Record<CardBrand, CardBrandStyle> = {
  visa: {
    name: "visa",
    displayName: "VISA",
    gradient: "bg-gradient-to-r from-blue-600 to-blue-400",
    textColor: "text-white",
  },
  mastercard: {
    name: "mastercard",
    displayName: "MC",
    gradient: "bg-gradient-to-r from-yellow-400 via-red-500 to-red-700",
    textColor: "text-white",
  },
  amex: {
    name: "amex",
    displayName: "AMEX",
    gradient: "bg-gradient-to-r from-cyan-600 to-cyan-800",
    textColor: "text-white",
  },
  diners: {
    name: "diners",
    displayName: "DINERS",
    gradient: "bg-gradient-to-r from-slate-800 to-slate-600",
    textColor: "text-white",
  },
  jcb: {
    name: "jcb",
    displayName: "JCB",
    gradient: "bg-gradient-to-r from-blue-700 via-red-600 to-green-600",
    textColor: "text-white",
  },
  unionpay: {
    name: "unionpay",
    displayName: "UP",
    gradient: "bg-gradient-to-r from-red-700 to-teal-700",
    textColor: "text-white",
  },
  discover: {
    name: "discover",
    displayName: "DISC",
    gradient: "bg-gradient-to-r from-orange-500 to-orange-600",
    textColor: "text-white",
  },
  unknown: {
    name: "unknown",
    displayName: "CARD",
    gradient: "bg-gradient-to-r from-gray-500 to-gray-600",
    textColor: "text-white",
  },
};

export default function CreditCardMock({ cardBrand }: CreditCardMockProps) {
  return (
    <div
      className={`w-12 h-8 ${cardBrandStyles[cardBrand].gradient} rounded flex items-center justify-center ${cardBrandStyles[cardBrand].textColor} text-xs font-bold`}
    >
      {cardBrandStyles[cardBrand].displayName}
    </div>
  );
}
