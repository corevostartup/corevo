"use client";

import { createContext, useContext } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeContent } from "@/i18n/english-content";
import type { SiteContent } from "@/lib/site-content";

const SiteContentContext = createContext<SiteContent | null>(null);

export function SiteContentProvider({
  content,
  children,
}: {
  content: SiteContent;
  children: React.ReactNode;
}) {
  return <SiteContentContext.Provider value={content}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const content = useContext(SiteContentContext);
  const { locale } = useLanguage();
  if (!content) {
    throw new Error("Conteúdo do site indisponível.");
  }
  return localizeContent(content, locale);
}
