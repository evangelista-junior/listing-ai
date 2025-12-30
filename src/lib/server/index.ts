"use server";

import { LoginFormType, SignupFormType } from "../zod/schemas";
import { COOKIE_NAMES, setSecureCookie } from "../cookies";
import { UserAuthType } from "@/src/store/Auth";
import { decodeJwt } from "../jwt";

export async function postLogin(data: LoginFormType) {
  try {
    const formData = new URLSearchParams();
    formData.append("username", data.username);
    formData.append("password", data.password);

    const response = await fetch(`${process.env.API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!response.ok) {
      const errorDetail = (await response.json()).detail;
      throw new Error(errorDetail);
    }

    const accessToken = (await response.json()).access_token;
    const { valid: isJwtValid, payload: jwtPayload } = await decodeJwt(
      accessToken
    );

    if (!isJwtValid || !jwtPayload) {
      throw new Error("Login Token is not valid!");
    }

    const { exp, ...userInfo } = jwtPayload;
    const nowInSeconds = new Date().getTime() / 1000;
    if (nowInSeconds > exp) {
      throw new Error("Token expiration date is invalid!");
    }
    const secondsUntilExpiry = Math.ceil(exp - nowInSeconds);
    await setSecureCookie(
      COOKIE_NAMES.accessToken,
      JSON.stringify(accessToken),
      {
        maxAge: secondsUntilExpiry,
      }
    );

    await setSecureCookie(COOKIE_NAMES.userInfo, JSON.stringify(userInfo), {
      maxAge: secondsUntilExpiry,
    });

    return {
      ok: response.ok,
      user: userInfo,
      message: response.ok
        ? "User found successfully!"
        : "Something went wrong",
    };
  } catch (err) {
    if (err instanceof Error) {
      return {
        ok: false,
        message: err.message,
      };
    }

    return {
      ok: false,
      message: "An unexpected error occurred",
    };
  }
}

export async function postSignUp(data: SignupFormType) {
  try {
    const response = await fetch(`${process.env.API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return {
      ok: response.ok,
      data: responseData,
      message: response.ok
        ? "User created successfully"
        : responseData.detail || "Something went wrong",
    };
  } catch (err) {
    if (err instanceof Error) {
      return {
        ok: false,
        message: err.message,
      };
    }

    return {
      ok: false,
      message: "An unexpected error occurred",
    };
  }
}
