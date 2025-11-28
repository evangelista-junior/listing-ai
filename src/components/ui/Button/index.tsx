import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: Props) {
  const baseStyles =
    "flex justify-center items-center gap-1 px-6 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-gradient-to-br hover:from-primary hover:to-auxiliar focus:ring-primary transition-colors duration-150",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary",
    outline:
      "border-2 border-black-soft text-black-soft hover:bg-black-soft hover:text-white focus:ring-black-soft",
    white:
      "bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl",
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
