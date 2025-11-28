import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: Props) {
  const baseStyles =
    "px-6 py-3 rounded-lg transition-all duration-200 font-medium focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1d4ed8] focus:ring-[#2563EB]",
    secondary:
      "bg-[#10B981] text-white hover:bg-[#059669] focus:ring-[#10B981]",
    outline:
      "border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white focus:ring-[#0F172A]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
