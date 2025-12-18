import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "white"
    | "success"
    | "danger";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: Props) {
  const baseStyles =
    "text-sm md:text-base font-bold flex justify-center items-center gap-1 px-3 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-gradient-to-br hover:from-primary hover:to-auxiliar focus:ring-primary transition-colors duration-150",
    secondary:
      "bg-secondary text-white hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-dark focus:ring-secondary",
    outline:
      "border-2 border-black-soft text-black-soft hover:bg-black-soft hover:text-white focus:ring-black-soft",
    white:
      "bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors",
    success:
      "bg-green-600 text-white hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400 focus:ring-green-500 transition-colors duration-150",
    danger:
      "bg-red-600 text-white hover:bg-gradient-to-br hover:from-red-600 hover:to-red-400 focus:ring-red-500 transition-colors duration-150",
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
