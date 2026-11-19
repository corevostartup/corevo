import { NextResponse } from "next/server";
import { translateFromPortuguese } from "@/lib/translate";

const fields = ["theme", "title", "summary", "body", "date"] as const;

type NewsPayload = {
  id?: string;
  theme?: string;
  title?: string;
  summary?: string;
  body?: string;
  date?: string;
};

async function translateItem(item: NewsPayload) {
  const next: Record<string, string> = { id: typeof item.id === "string" ? item.id : "" };
  await Promise.all(
    fields.map(async (field) => {
      const value = typeof item[field] === "string" ? item[field].slice(0, 500) : "";
      next[field] = await translateFromPortuguese(value);
    }),
  );
  return next;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const items = Array.isArray(body?.items) ? (body.items as NewsPayload[]).slice(0, 50) : [];
  const translated = await Promise.all(items.map(translateItem));
  return NextResponse.json({ items: translated });
}
