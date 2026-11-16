export type Locale = "pt" | "en";

const PT_REGIONS = new Set(["br", "pt", "ao", "mz", "cv", "gw", "st", "tl"]);

const PT_TIMEZONES = new Set([
  "America/Sao_Paulo",
  "America/Bahia",
  "America/Fortaleza",
  "America/Recife",
  "America/Maceio",
  "America/Araguaina",
  "America/Belem",
  "America/Santarem",
  "America/Manaus",
  "America/Boa_Vista",
  "America/Porto_Velho",
  "America/Rio_Branco",
  "America/Cuiaba",
  "America/Campo_Grande",
  "America/Noronha",
  "Europe/Lisbon",
  "Atlantic/Azores",
  "Atlantic/Madeira",
  "Africa/Luanda",
  "Africa/Maputo",
  "Atlantic/Cape_Verde",
]);

export function localeFromLanguageTag(tag: string): Locale | null {
  const value = tag.trim().toLowerCase();
  if (!value || value === "*") return null;
  if (value.startsWith("pt")) return "pt";
  if (value.startsWith("en")) return "en";
  const region = value.split("-")[1];
  if (region && PT_REGIONS.has(region)) return "pt";
  return null;
}

export function localeFromAcceptLanguage(header: string): Locale {
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const qualityParam = params.find((item) => item.trim().startsWith("q="));
      const quality = qualityParam ? Number.parseFloat(qualityParam.split("=")[1]) : 1;
      return { tag, quality: Number.isFinite(quality) ? quality : 0 };
    })
    .filter((item) => item.tag)
    .sort((a, b) => b.quality - a.quality);

  for (const item of ranked) {
    const locale = localeFromLanguageTag(item.tag);
    if (locale) return locale;
  }

  return "en";
}

export function localeFromTimeZone(timeZone: string): Locale | null {
  return PT_TIMEZONES.has(timeZone) ? "pt" : null;
}
