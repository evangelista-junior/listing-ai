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
    "px-6 py-3 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-2 cursor-pointer inline-block text-center";

  const variants = {
    primary: "bg-primary text-white hover:bg-[#1d4ed8] focus:ring-primary",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary",
    outline:
      "border-2 border-black-soft text-black-soft hover:bg-black-soft hover:text-white focus:ring-black-soft",
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
