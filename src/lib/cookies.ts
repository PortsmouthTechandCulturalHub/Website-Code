"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const SESSION_KEY = "session";
const EXPIRATION_TIME = 60 * 60 * 24 * 1000; // - one day

const secretKey = "simterest_secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(payload.expires).sign(key);
}

export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, { algorithms: ["HS256"] });
    return payload;
  } catch (error) {}
}

// App cookies
export async function createSession(formData: any) {
  const user = formData;
  const expires = new Date(Date.now() + 3 * EXPIRATION_TIME);
  const session = await encrypt({ user, expires });
  const cookiesStore = await cookies();
  cookiesStore.set(SESSION_KEY, session, { expires, httpOnly: true });
  return;
}

export async function getSession() {
  const cookiesStore = await cookies();
  const session = cookiesStore.get(SESSION_KEY)?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get(SESSION_KEY)?.value;
  if (!session) return;
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 3 * EXPIRATION_TIME);
  const res = NextResponse.next();
  res.cookies.set({
    name: SESSION_KEY,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function logout() {
  const cookiesStore = await cookies();
  cookiesStore.set(SESSION_KEY, "", { expires: new Date(0) });
}
