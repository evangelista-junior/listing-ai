import { cookies } from "next/headers";

const isProd = process.env.NODE_ENV === "production";

export const COOKIE_NAMES = {
  accessToken: "access_token",
  userInfo: "user_info",
} as const;

type CookieNameType = (typeof COOKIE_NAMES)[keyof typeof COOKIE_NAMES];

interface BaseCookieOptions {
  maxAge?: number;
  path?: string;
}

const defaultSecureOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: "lax" as const,
  path: "/",
};

export async function getCookie(name: CookieNameType) {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}

export async function setSecureCookie(
  name: CookieNameType,
  value: string,
  options: BaseCookieOptions
) {
  const cookieStore = await cookies();
  cookieStore.set(name, value, { ...defaultSecureOptions, ...options });
}

export async function deleteCookie(name: CookieNameType) {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}
