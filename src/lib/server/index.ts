"use server";

import { LoginFormType } from "../zod/schemas";
import { COOKIE_NAMES, setSecureCookie } from "../cookies";
import { UserAuthType } from "@/src/store/Auth";
import { Time } from "../utils/time";

export async function Login(data: LoginFormType) {
  try {
    const userFullName = "Roberval Soares";
    const newToken: UserAuthType = {
      name: userFullName,
      email: "jhon.jonnes@gmail.com",
      company: "Listing Company",
    };

    await setSecureCookie(COOKIE_NAMES.accessToken, JSON.stringify(newToken), {
      maxAge: Time.months(1),
    });

    return { ok: true, user: newToken };
  } catch (err) {
    return { ok: false, message: "Change this message in future" };
  }
}
