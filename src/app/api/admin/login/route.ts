import { NextResponse } from "next/server";
import { adminCookieOptions, createAdminToken, credentialsMatch } from "@/lib/admin-session";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { username?: string; password?: string } | null;
  if (!credentialsMatch(body?.username ?? "", body?.password ?? "")) {
    return NextResponse.json({ error: "Usuário ou senha incorretos." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  const cookie = adminCookieOptions();
  response.cookies.set(cookie.name, await createAdminToken(), cookie);
  return response;
}
