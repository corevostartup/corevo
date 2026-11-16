import { NextResponse } from "next/server";
import { readSiteContent, writeSiteContent } from "@/lib/site-content";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(readSiteContent());
}

export async function PUT(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Conteúdo inválido." }, { status: 400 });
  }
  return NextResponse.json(writeSiteContent(body));
}
