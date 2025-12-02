"use server";

import { LoginFormTypes } from "@/src/app/auth/login/page";
import { redirect } from "next/navigation";

export async function Login(data: LoginFormTypes) {
  return redirect("/panel/dashboard");
}
