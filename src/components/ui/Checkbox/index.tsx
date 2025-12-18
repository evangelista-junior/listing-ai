import { type InputHTMLAttributes, type ReactNode } from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> {
  label?: ReactNode;
  error?: string;
  registration?: UseFormRegisterReturn;
  labelClassName?: string;
}

export function Checkbox({
  label,
  error,
  className = "",
  labelClassName = "",
  registration,
  ...props
}: CheckboxProps) {
  return (
    <div className="w-full">
      <label
        className={`flex items-start gap-3 cursor-pointer ${labelClassName}`}
      >
        <input
          type="checkbox"
          className={`w-4 h-4 mt-0.5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer ${
            error ? "border-red-500" : ""
          } ${className}`}
          {...registration}
          {...props}
        />
        {label && <span className="text-sm text-gray-600">{label}</span>}
      </label>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
