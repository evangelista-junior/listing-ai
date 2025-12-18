"use client";

import React, { useState } from "react";
import { Button } from "@/src/components/ui/Button";
import { Mail, Lock, User, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import transparentLogo from "@/public/transparent_logo.svg";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";
import { SignupFormSchema, SignupFormType } from "@/src/lib/zod/schemas";
import { Input } from "@/src/components/ui/Input";
import { Checkbox } from "@/src/components/ui/Checkbox";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormType>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-white-soft flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="w-full flex flex-col items-center justify-center mb-6">
          <Image
            src={transparentLogo}
            alt="Company logo."
            className="max-w-[230px]"
          />
          <h1 className="mb-2">Create Account</h1>
          <p className="text-gray-600">Start your listing journey with AI</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              icon={User}
              error={errors.fullName?.message}
              {...register("fullName")}
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              icon={Mail}
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              error={errors.password?.message}
              {...register("password")}
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
            <Checkbox
              label={
                <>
                  I agree to the{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </>
              }
              {...register("acceptTerms")}
              error={errors.acceptTerms?.message}
            />
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          By signing up, you agree to our data protection and privacy practices.
        </p>
      </div>
    </div>
  );
}
