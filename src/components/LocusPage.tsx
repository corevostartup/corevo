"use client";

import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";
import type { Project } from "@/data/projects";

const copy = {
  pt: {
    eyebrow: "Plataforma imobiliária",
    title: "Locus",
    lead: "Plataforma imobiliária com foco em localização e preço.",
    body: "A Locus simplifica a descoberta de oportunidades imobiliárias com experiência visual direta, filtros eficientes e tomada de decisão sem fricção.",
    highlights: [
      "Busca orientada por localização",
      "Comparação de preço por região",
      "Experiência limpa e objetiva",
    ],
  },
  en: {
    eyebrow: "Real estate platform",
    title: "Locus",
    lead: "A real estate platform focused on location and price.",
    body: "Locus makes it easier to find property opportunities with a direct visual experience, efficient filters, and decisions without friction.",
    highlights: [
      "Location-led search",
      "Price comparison by area",
      "A clean, focused experience",
    ],
  },
};

export function LocusPage({ project }: { project: Project }) {
  const { locale, m } = useLanguage();
  const text = copy[locale];

  return (
    <div className="min-h-screen bg-[#F3F5F7] text-[#17191C]">
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <img
            src="/locus-banner.jpg"
            alt=""
            className="absolute inset-0 hidden h-full w-full object-cover object-center lg:block"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#F3F5F7_0%,rgba(243,245,247,0.88)_28%,rgba(243,245,247,0.28)_48%,transparent_64%)] lg:block" />

          <div className="relative mx-auto flex max-w-6xl items-center px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:min-h-[720px] lg:px-8 lg:pb-24 lg:pt-28">
            <div className="max-w-xl">
              <Link
                href="/#projetos"
                className="text-sm font-medium text-[#5A656E] transition-colors hover:text-[#17191C]"
              >
                ← {m.backToProjects}
              </Link>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-[#5A656E]">
                {text.eyebrow}
              </p>
              <h1 className="mt-4 max-w-xl font-[family-name:var(--font-locus)] text-5xl font-medium uppercase tracking-[0.22em] text-[#777777] sm:text-6xl lg:text-7xl lg:leading-none">
                {text.title}
              </h1>
              <p className="mt-6 max-w-[18rem] text-lg leading-relaxed text-[#5A656E] sm:max-w-md">
                {text.lead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.appStoreUrl ? (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#0E1015] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#17191C]"
                  >
                    {m.appStore}
                  </a>
                ) : null}
                {project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#929DA7]/50 bg-white text-sm font-semibold text-[#17191C] transition-colors hover:border-[#17191C]"
                    aria-label={m.officialSite}
                  >
                    ↗
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div className="relative mx-4 mb-10 h-72 overflow-hidden rounded-3xl sm:mx-6 sm:h-96 lg:hidden">
            <img
              src="/locus-banner.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
            />
          </div>
        </section>

        <section className="border-t border-[#929DA7]/25 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8 lg:py-20">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#17191C]">{m.highlights}</h2>
              <p className="mt-4 max-w-md leading-relaxed text-[#929DA7]">{text.body}</p>
            </div>
            <div className="grid gap-4">
              {text.highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#929DA7]/30 bg-[#F3F5F7] px-5 py-4 text-[#17191C]"
                >
                  {item}
                </div>
              ))}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-[#929DA7]/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#5A656E]"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
