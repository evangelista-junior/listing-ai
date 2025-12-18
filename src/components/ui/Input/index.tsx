// src/components/ui/Input.tsx
import { type InputHTMLAttributes } from "react";
import { type LucideIcon } from "lucide-react";
import { type UseFormRegisterReturn } from "react-hook-form";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  registration?: UseFormRegisterReturn;
}
export function Input({
  label,
  error,
  icon: Icon,
  className = "",
  registration,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-black-soft mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            aria-hidden="true"
          />
        )}

        <input
          className={`
            w-full pr-3 py-3 border rounded-lg outline-none transition-all focus:ring-2 
            ${!error && "focus:ring-primary focus:border-transparent "}
            ${Icon ? "pl-10" : "pl-3"}
            ${error ? " border-red-500 focus:ring-red-500" : " border-gray-300"}
            ${className}
          `}
          {...registration}
          {...props}
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
