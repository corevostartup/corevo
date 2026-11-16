import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { readSiteContent, writeSiteContent } from "@/lib/site-content";

export const runtime = "nodejs";

const TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Envie uma imagem." }, { status: 400 });
  }

  const ext = TYPES[file.type];
  if (!ext) {
    return NextResponse.json({ error: "Use JPG, PNG ou WebP." }, { status: 400 });
  }
  if (file.size > 8 * 1024 * 1024) {
    return NextResponse.json({ error: "A imagem deve ter no máximo 8 MB." }, { status: 400 });
  }

  const filename = `banner-${Date.now()}.${ext}`;
  const directory = path.join(process.cwd(), "public", "uploads");
  mkdirSync(directory, { recursive: true });
  writeFileSync(path.join(directory, filename), Buffer.from(await file.arrayBuffer()));

  const content = readSiteContent();
  content.hero.image = `/uploads/${filename}`;
  return NextResponse.json(writeSiteContent(content));
}
