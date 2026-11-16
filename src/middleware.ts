import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE, isValidAdminToken } from "@/lib/admin-session";
import { localeFromAcceptLanguage, type Locale } from "@/i18n/locale";

const YEAR = 60 * 60 * 24 * 365;

function resolveLocale(request: NextRequest): Locale {
  const manual = request.cookies.get("corevo-locale-manual")?.value === "1";
  const saved = request.cookies.get("corevo-locale")?.value;
  if (manual && (saved === "pt" || saved === "en")) return saved;
  return localeFromAcceptLanguage(request.headers.get("accept-language") || "");
}

function stampLocale(request: NextRequest, response: NextResponse) {
  response.cookies.set("corevo-locale", resolveLocale(request), {
    path: "/",
    maxAge: YEAR,
    sameSite: "lax",
  });
  return response;
}

function nextWithLocale(request: NextRequest) {
  const locale = resolveLocale(request);
  const headers = new Headers(request.headers);
  headers.set("x-corevo-locale", locale);
  const response = NextResponse.next({ request: { headers } });
  response.cookies.set("corevo-locale", locale, {
    path: "/",
    maxAge: YEAR,
    sameSite: "lax",
  });
  return response;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api/admin")) {
    return nextWithLocale(request);
  }

  if (pathname === "/admin" || pathname === "/admin/") {
    return stampLocale(request, NextResponse.redirect(new URL("/admin/login", request.url)));
  }

  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return nextWithLocale(request);
  }

  const token = request.cookies.get(COOKIE)?.value;
  if (await isValidAdminToken(token)) return nextWithLocale(request);

  if (pathname.startsWith("/api/")) {
    return stampLocale(
      request,
      NextResponse.json({ error: "Não autorizado." }, { status: 401 }),
    );
  }

  return stampLocale(request, NextResponse.redirect(new URL("/admin/login", request.url)));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
