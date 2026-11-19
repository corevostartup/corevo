const cache = new Map<string, string>();

function readTranslation(data: unknown) {
  if (!Array.isArray(data) || !Array.isArray(data[0])) return "";
  return data[0]
    .map((part) => (Array.isArray(part) && typeof part[0] === "string" ? part[0] : ""))
    .join("");
}

export async function translateFromPortuguese(text: string) {
  const source = text.trim();
  if (!source) return text;
  const cached = cache.get(source);
  if (cached) return cached;

  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "pt");
  url.searchParams.set("tl", "en");
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", source);

  const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!response.ok) return text;
  const translated = readTranslation(await response.json());
  const result = translated || text;
  cache.set(source, result);
  return result;
}
