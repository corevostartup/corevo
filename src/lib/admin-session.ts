const COOKIE = "corevo_admin";
const WEEK = 60 * 60 * 24 * 7;

export function adminUsername() {
  return process.env.ADMIN_USER || (process.env.NODE_ENV === "production" ? "" : "admin");
}

export function adminPassword() {
  return process.env.ADMIN_PASSWORD || (process.env.NODE_ENV === "production" ? "" : "corevo-admin");
}

export function credentialsMatch(username: string, password: string) {
  const expectedUser = adminUsername();
  const expectedPassword = adminPassword();
  if (!expectedUser || !expectedPassword) return false;
  return safeEqual(username, expectedUser) && safeEqual(password, expectedPassword);
}

function secret() {
  return adminPassword() || "corevo-admin-disabled";
}

function toHex(buffer: ArrayBuffer) {
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function sign(value: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return toHex(signature);
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function createAdminToken() {
  const exp = String(Math.floor(Date.now() / 1000) + WEEK);
  return `${exp}.${await sign(exp)}`;
}

export async function isValidAdminToken(token: string | undefined | null) {
  if (!token || !adminUsername() || !adminPassword()) return false;
  const [exp, signature] = token.split(".");
  if (!exp || !signature) return false;
  if (Number(exp) < Math.floor(Date.now() / 1000)) return false;
  return safeEqual(signature, await sign(exp));
}

export function adminCookieOptions() {
  return {
    name: COOKIE,
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: WEEK,
    secure: process.env.NODE_ENV === "production",
  };
}

export { COOKIE };
