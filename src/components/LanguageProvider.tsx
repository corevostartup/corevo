"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages, type Messages } from "@/i18n/messages";
import { localeFromLanguageTag, localeFromTimeZone, type Locale } from "@/i18n/locale";

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  m: Messages;
} | null>(null);

const YEAR = 60 * 60 * 24 * 365;

function writeLocale(locale: Locale) {
  document.cookie = `corevo-locale=${locale};path=/;max-age=${YEAR};samesite=lax`;
  document.cookie = `corevo-locale-manual=1;path=/;max-age=${YEAR};samesite=lax`;
  document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
}

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    if (document.cookie.includes("corevo-locale-manual=1")) return;
    const detected = localeFromLanguageTag(navigator.language || "");
    if (detected) return;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const fromRegion = localeFromTimeZone(timeZone);
    if (!fromRegion || fromRegion === locale) return;
    document.cookie = `corevo-locale=${fromRegion};path=/;max-age=${YEAR};samesite=lax`;
    document.documentElement.lang = fromRegion === "en" ? "en" : "pt-BR";
    setLocaleState(fromRegion);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (next: Locale) => {
        writeLocale(next);
        setLocaleState(next);
      },
      m: messages[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("Idioma indisponível.");
  }
  return value;
}
