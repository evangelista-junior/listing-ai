import { JWTPayload, jwtVerify } from "jose";

interface UserPayload extends JWTPayload {
  full_name: string;
  email: string;
  exp: number;
}

interface DecodeJwtReturn {
  valid: boolean;
  payload?: UserPayload;
  message?: string;
}

function getSecretKey() {
  const secret = process.env.API_SECRET_KEY;
  if (!secret) throw new Error("Secret API key not found!");
  return new TextEncoder().encode(secret);
}

export async function decodeJwt(token: string): Promise<DecodeJwtReturn> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return { valid: true, payload: payload as UserPayload };
  } catch (e) {
    if (e == "ERR_JWT_EXPIRED") {
      return { valid: false, message: "JWT has expired!" };
    }
    return { valid: false, message: "Something went wrong!" };
  }
}
