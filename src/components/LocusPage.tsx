"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLanguage } from "@/components/LanguageProvider";
import { locusCopy } from "@/data/locus-landing";
import type { Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#5A656E]">
      {children}
    </p>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-locus)] text-4xl leading-tight text-[#17191C] sm:text-5xl">
      {children}
    </h2>
  );
}

export function LocusPage({ project }: { project: Project }) {
  const { locale, m } = useLanguage();
  const text = locusCopy[locale];
  const mail = "mailto:corevostartup@gmail.com?subject=Locus";

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
          <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#F3F5F7_0%,rgba(243,245,247,0.92)_34%,rgba(243,245,247,0.35)_58%,transparent_72%)] lg:block" />

          <div className="relative mx-auto flex max-w-6xl items-center px-4 pb-8 pt-28 sm:px-6 sm:pt-32 lg:min-h-[760px] lg:px-8 lg:pb-24 lg:pt-32">
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
              <p className="mt-4 font-[family-name:var(--font-locus)] text-5xl uppercase tracking-[0.22em] text-[#777777] sm:text-6xl">
                {text.wordmark}
              </p>
              <h1 className="mt-6 max-w-lg font-[family-name:var(--font-locus)] text-4xl leading-[1.05] text-[#17191C] sm:text-5xl">
                {text.headline}
              </h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-[#5A656E]">
                {text.lead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#0E1015] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#17191C]"
                >
                  {text.explore}
                </a>
                <a
                  href="#visao"
                  className="inline-flex items-center justify-center rounded-full border border-[#929DA7]/50 bg-white px-6 py-3 text-sm font-medium text-[#17191C] transition-colors hover:border-[#17191C]"
                >
                  {text.visionCta}
                </a>
              </div>
            </div>
          </div>
          <div className="relative mx-4 mb-10 h-72 overflow-hidden rounded-3xl sm:mx-6 sm:h-96 lg:hidden">
            <img
              src="/locus-banner.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
            />
          </div>
        </section>

        <section className="border-t border-[#929DA7]/25 bg-white">
          <Reveal className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <blockquote className="font-[family-name:var(--font-locus)] text-3xl leading-snug text-[#17191C] sm:text-5xl sm:leading-tight">
              {text.quote}
            </blockquote>
          </Reveal>
        </section>

        <section className="border-t border-[#929DA7]/25">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:px-8 lg:py-28">
            <Reveal>
              <Kicker>{text.problemKicker}</Kicker>
              <Title>{text.problemTitle}</Title>
              <p className="mt-6 max-w-md leading-relaxed text-[#5A656E]">{text.problemBody}</p>
            </Reveal>
            <Reveal className="grid gap-4">
              <article className="rounded-3xl border border-[#929DA7]/30 bg-white p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#929DA7]">
                  {text.traditionalLabel}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-[#17191C]">
                  {text.traditionalBody}
                </p>
              </article>
              <article className="rounded-3xl bg-[#17191C] p-6 text-white sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  {text.locusLabel}
                </p>
                <p className="mt-3 text-lg leading-relaxed">{text.locusBody}</p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-[#929DA7]/25 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <Kicker>{text.solutionKicker}</Kicker>
              <Title>{text.solutionTitle}</Title>
              <p className="mt-6 max-w-2xl leading-relaxed text-[#5A656E]">{text.solutionBody}</p>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {text.pillars.map((pillar, index) => (
                <Reveal key={pillar.title}>
                  <article className="h-full rounded-3xl border border-[#929DA7]/25 bg-[#F3F5F7] p-6">
                    <p className="text-xs font-medium tracking-[0.18em] text-[#929DA7]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-6 text-lg font-medium text-[#17191C]">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5A656E]">{pillar.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="produto" className="scroll-mt-20 border-t border-[#929DA7]/25">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <Reveal>
              <Kicker>{text.productKicker}</Kicker>
              <Title>{text.productTitle}</Title>
              <p className="mt-6 leading-relaxed text-[#5A656E]">{text.productBody}</p>
              <ol className="mt-8 space-y-5">
                {text.moments.map((moment, index) => (
                  <li key={moment.title} className="grid grid-cols-[auto_1fr] gap-4">
                    <span className="mt-0.5 text-xs font-medium tracking-[0.16em] text-[#929DA7]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-[#17191C]">{moment.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5A656E]">{moment.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal>
              <img
                src="/locus-0002.jpg"
                alt={text.productProof}
                className="h-auto w-full rounded-[28px]"
              />
            </Reveal>
          </div>
          <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <figure>
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src="/locus-appstore.jpg"
                  alt={text.productProof}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 flex flex-col gap-4 text-sm text-[#5A656E] sm:flex-row sm:items-center sm:justify-between">
                <span>{text.productProof}</span>
                <span className="flex flex-col items-start gap-3 sm:items-end">
                  <span>{text.stage}</span>
                  {project.appStoreUrl ? (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#0E1015] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#17191C]"
                    >
                      {text.store}
                    </a>
                  ) : null}
                </span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-t border-[#929DA7]/25 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <Kicker>{text.audiencesKicker}</Kicker>
              <Title>{text.audiencesTitle}</Title>
            </Reveal>
            <div className="mt-12 grid gap-4 lg:grid-cols-2">
              {[
                { title: text.seekerTitle, items: text.seeker },
                { title: text.advertiserTitle, items: text.advertiser },
              ].map((group) => (
                <Reveal key={group.title}>
                  <article className="h-full rounded-3xl border border-[#929DA7]/25 bg-[#F3F5F7] p-6 sm:p-8">
                    <h3 className="font-[family-name:var(--font-locus)] text-3xl text-[#17191C]">
                      {group.title}
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#5A656E]">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#17191C]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#17191C]">
              {text.audiencesNote}
            </p>
          </div>
        </section>

        <section className="border-t border-[#929DA7]/25">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <Kicker>{text.compareKicker}</Kicker>
              <Title>{text.compareTitle}</Title>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#5A656E]">
                {text.compareNote}
              </p>
            </Reveal>
            <div className="mt-10 overflow-hidden rounded-3xl border border-[#929DA7]/30 bg-white">
              <div className="grid grid-cols-2 border-b border-[#929DA7]/25 bg-[#F3F5F7] text-xs font-medium uppercase tracking-[0.16em] text-[#5A656E]">
                <div className="px-5 py-4">{text.compareTraditional}</div>
                <div className="border-l border-[#929DA7]/25 px-5 py-4">{text.compareLocus}</div>
              </div>
              {text.compareRows.map((row) => (
                <div
                  key={row.locus}
                  className="grid grid-cols-2 border-b border-[#929DA7]/15 text-sm last:border-b-0"
                >
                  <div className="px-5 py-4 text-[#929DA7]">{row.traditional}</div>
                  <div className="border-l border-[#929DA7]/15 px-5 py-4 font-medium text-[#17191C]">
                    {row.locus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0E1015] text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                {text.marketKicker}
              </p>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-locus)] text-4xl leading-tight sm:text-5xl">
                {text.marketTitle}
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-white/70">{text.marketBody}</p>
            </Reveal>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {text.marketFacts.map((fact) => (
                <article
                  key={fact.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-white/50">
                    {fact.label}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">{fact.body}</p>
                  {fact.href && fact.source ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-block text-xs text-white/45 underline-offset-4 hover:text-white hover:underline"
                    >
                      {fact.source}
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#929DA7]/25 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <Kicker>{text.modelKicker}</Kicker>
              <Title>{text.modelTitle}</Title>
              <p className="mt-6 max-w-2xl leading-relaxed text-[#5A656E]">{text.modelBody}</p>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {text.modelPaths.map((path) => (
                <article
                  key={path.title}
                  className="rounded-3xl border border-[#929DA7]/25 bg-[#F3F5F7] p-6"
                >
                  {path.tag ? (
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#5A656E]">
                      {path.tag}
                    </p>
                  ) : null}
                  <h3 className={`text-lg font-medium text-[#17191C] ${path.tag ? "mt-3" : ""}`}>
                    {path.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A656E]">{path.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#929DA7]/25">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
              <Kicker>{text.growthKicker}</Kicker>
              <Title>{text.growthTitle}</Title>
              <p className="mt-6 max-w-2xl leading-relaxed text-[#5A656E]">{text.growthBody}</p>
            </Reveal>
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {text.growthSteps.map((step, index) => (
                <li key={step.title} className="rounded-3xl border border-[#929DA7]/25 bg-white p-5">
                  <p className="text-xs font-medium tracking-[0.18em] text-[#929DA7]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-medium text-[#17191C]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A656E]">{step.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-3xl bg-[#17191C] p-6 text-white sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                {text.cycleTitle}
              </p>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {text.cycle.map((item, index) => (
                  <li key={item} className="border-t border-white/15 pt-4">
                    <p className="text-xs text-white/40">0{index + 1}</p>
                    <p className="mt-2 text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-t border-[#929DA7]/25 bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8 lg:py-28">
            <Reveal>
              <Kicker>{text.techKicker}</Kicker>
              <Title>{text.techTitle}</Title>
              <p className="mt-6 max-w-xl leading-relaxed text-[#5A656E]">{text.techBody}</p>
              <ul className="mt-8 space-y-3">
                {text.techItems.map((item) => (
                  <li key={item} className="border-t border-[#929DA7]/25 py-3 text-sm text-[#17191C]">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <article className="flex h-full flex-col justify-between rounded-3xl bg-[#0E1015] p-8 text-white">
                <div>
                  <img
                    src="/corevo-density.png"
                    alt={text.teamTitle}
                    className="h-14 w-auto"
                  />
                  <p className="mt-6 leading-relaxed text-white/70">{text.teamBody}</p>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section id="visao" className="scroll-mt-20 border-t border-[#929DA7]/25">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
            <Reveal className="order-2 lg:order-1">
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src="/locus-2.jpg"
                  alt=""
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <Kicker>{text.visionKicker}</Kicker>
              <Title>{text.visionTitle}</Title>
              <p className="mt-6 leading-relaxed text-[#5A656E]">{text.visionBody}</p>
            </Reveal>
          </div>
        </section>

        <section id="investidores" className="scroll-mt-20 border-t border-white/10 bg-[#0E1015] text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                {text.investKicker}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-locus)] text-4xl leading-tight sm:text-6xl">
                {text.investTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{text.investBody}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={mail}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#17191C] transition-colors hover:bg-[#F3F5F7]"
                >
                  {text.investCta}
                </a>
              </div>
              <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/40">
                {text.investSign}
              </p>
              {project.instagramUrl ? (
                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {text.instagram}
                </a>
              ) : null}
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
