"use client";

import { Sparkles, Mail, CheckCircle, Rocket, Zap, User } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import Image from "next/image";
import logo from "@/public/transparent_logo.svg";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BuildingFormSchema, BuildingFormType } from "@/src/lib/zod/schemas";
import { Input } from "@/src/components/ui/Input";

export default function UnderConstructionPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<BuildingFormType>({ resolver: zodResolver(BuildingFormSchema) });

  const onSubmit: SubmitHandler<BuildingFormType> = (data) => {
    console.log("data: ", data);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white-soft via-white to-white-soft flex items-center justify-center p-3">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="relative flex items-center justify-center">
              <Image
                src={logo}
                alt="Company Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h1 className="mb-3 bg-linear-to-r from-primary to-auxiliar bg-clip-text text-transparent">
            We're Building Something Amazing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered listing tool is under construction. Get ready to
            transform your e-commerce listings with intelligent automation.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-9 max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-linear-to-br from-primary to-auxiliar rounded-lg flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-black-soft mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-600">
              Generate optimized listings with advanced AI technology
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-linear-to-br from-secondary to-auxiliar rounded-lg flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-black-soft mb-2">SEO Optimised</h3>
            <p className="text-sm text-gray-600">
              Expertly crafted titles and descriptions to boost visibility,
              ranking, and conversion
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-linear-to-br from-auxiliar to-primary rounded-lg flex items-center justify-center mx-auto mb-3">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-black-soft mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-600">
              Create professional listings in seconds, not hours
            </p>
          </div>
        </div>

        {/* Email Signup */}
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-black-soft">
                Get Notified at Launch
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Be the first to know when we go live. Join our waitlist for
              exclusive early access.
            </p>

            {!isSubmitSuccessful ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-3 text-start"
              >
                <Input
                  type="text"
                  icon={User}
                  placeholder="Enter your full name"
                  error={errors.fullName?.message}
                  {...register("fullName")}
                />
                <Input
                  type="email"
                  icon={Mail}
                  error={errors.email?.message}
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <Button variant="primary" type="submit" className="w-full">
                  Join Waitlist
                </Button>
              </form>
            ) : (
              <div className="py-3 flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-linear-to-br from-secondary to-auxiliar rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium text-secondary">
                  Thanks! You're on the list.
                </p>
                <p className="text-sm text-gray-600">
                  We'll notify you when we launch.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-auxiliar rounded-full shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-white font-medium">Launching Soon - 2025</span>
        </div>

        {/* Footer */}
        <div className="mt-9 text-sm text-gray-500">
          <p>
            Questions? Contact us at{" "}
            <Link
              href="mailto:hello@listingai.com"
              className="text-primary hover:underline"
            >
              hello@listingai.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
