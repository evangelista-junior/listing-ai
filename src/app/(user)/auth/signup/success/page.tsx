"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/Button";
import { Mail } from "lucide-react";

export default function Success() {
  const router = useRouter();

  return (
    <div className="h-dvh flex justify-center items-center">
      <div className="relative w-full max-w-2xl">
        <div
          className={`bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12 transition-all duration-700 delay-200 transform `}
        >
          <div className="text-center mb-8">
            <h1 className="mb-1">Welcome Aboard!</h1>
            <p className="text-gray-600 text-lg">
              Your account has been successfully created
            </p>
          </div>

          <div className="bg-linear-to-r from-primary/10 to-auxiliar/10 border border-primary/20 rounded-md p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-black-soft mb-1">
                  Welcome to Listing Engine!
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Your account is officially ready. You now have full access to
                  all our features and tools to help you get started.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              className="flex-1 group"
              onClick={() => router.push("/auth/login")}
            >
              <div className="flex items-center justify-center gap-2">
                Login and Start Selling
              </div>
            </Button>
          </div>
        </div>

        <div
          className={`text-center mt-6 transition-all duration-700 delay-300`}
        >
          <p className="text-sm text-gray-600">
            Questions or concerns?{" "}
            <a
              href="/#support"
              className="text-primary hover:underline font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
