"use client";

import { Button } from "@/src/components/ui/Button";
import { Mail, Lock, Home } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import transparentLogo from "@/public/transparent_logo.svg";
import { Login } from "@/src/lib/server";
import { useAuthStore, UserAuthType } from "@/src/store/Auth";
import Link from "next/link";
import { LoginFormSchema, LoginFormType } from "@/src/lib/zod/schemas";
import { Input } from "@/src/components/ui/Input";
import { Checkbox } from "@/src/components/ui/Checkbox";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const router = useRouter();
  const { setUser } = useAuthStore();

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      const res: { ok: boolean; user?: UserAuthType; message?: string } =
        await Login(data);

      if (!res.ok || !res.user) {
        throw new Error(res.message);
      }

      setUser(res.user);
      router.push("/panel/dashboard");
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-white-soft to-white flex items-center justify-center px-3 sm:px-6 lg:px-6">
      <div className="max-w-md w-full">
        <div className="w-full flex flex-col items-center justify-center mb-6">
          <Image
            src={transparentLogo}
            alt="Company logo."
            className="max-w-[230px]"
          />
          <h1 className="mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              icon={Mail}
              placeholder="you@example.com"
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

            <div className="flex items-center justify-between">
              <Checkbox label="Remember me" {...register("rememberMe")} />

              <Link href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button variant="primary" className="w-full" type="submit">
              {isSubmitting ? "Signin in" : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?
              <Link
                href="/auth/signup"
                className="text-primary ml-1 hover:underline cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/"
            className="flex justify-center gap-1 items-center text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4" />
            <p>Back to home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
