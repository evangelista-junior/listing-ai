import { AlertCircle } from "lucide-react";
interface ErrorCardProps {
  errorMessage: string;
}

export default function ErrorCard({ errorMessage }: ErrorCardProps) {
  return (
    <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="bg-red-100 p-1.5 rounded-full">
        <AlertCircle className="w-5 h-5 text-red-600" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-red-800">Something went wrong</p>
        <p className="text-xs text-red-600">{errorMessage}</p>
      </div>
    </div>
  );
}
