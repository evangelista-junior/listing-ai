import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon, title, description, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white h-full p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 aspect-square bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center text-white">
          {icon}
        </div>
        <h3>{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
