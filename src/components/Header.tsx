"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, m } = useLanguage();
  const isHome = pathname === "/";
  const light = pathname === "/projetos/locus";

  const toSection = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = light
    ? "text-sm text-[#5A656E] transition-colors hover:text-[#17191C]"
    : "text-sm text-slate-300 transition-colors hover:text-white";

  const ctaClass = light
    ? "inline-flex items-center justify-center rounded-full bg-[#0E1015] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#17191C]"
    : "inline-flex items-center justify-center rounded-full bg-gradient-corevo px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/45 hover:brightness-110";

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        light
          ? "border-b border-[#929DA7]/30 bg-[#F3F5F7]/95 backdrop-blur-xl"
          : scrolled
            ? "glass-nav shadow-lg shadow-black/20"
            : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="COREVO — Core Evolution">
          <span className="relative h-9 w-9 shrink-0">
            <Image
              src="/corevo-logo.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </span>
          <Image
            src="/corevo-wordmark.png"
            alt=""
            width={973}
            height={169}
            priority
            className={cn("h-[19.6px] w-auto sm:h-[22.4px]", light && "brightness-0")}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {m.nav.map((item) => (
            <Link key={item.href} href={toSection(item.href)} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch
            locale={locale}
            label={m.language}
            light={light}
            onChange={setLocale}
          />
          <Link href={toSection("#contato")} className={ctaClass}>
            {m.contact}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch
            locale={locale}
            label={m.language}
            light={light}
            onChange={setLocale}
          />
          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg border",
              light ? "border-[#929DA7]/40 bg-white" : "border-white/10 bg-white/5",
            )}
            aria-expanded={open}
            aria-label={m.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-full rounded transition-transform",
                  light ? "bg-[#17191C]" : "bg-white",
                  open && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-full rounded transition-opacity",
                  light ? "bg-[#17191C]" : "bg-white",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-full rounded transition-transform",
                  light ? "bg-[#17191C]" : "bg-white",
                  open && "-translate-y-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "overflow-hidden border-t backdrop-blur-xl md:hidden",
              light
                ? "border-[#929DA7]/30 bg-[#F3F5F7]/95"
                : "border-white/10 bg-[var(--bg-deep)]/95",
            )}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {m.nav.map((item) => (
                <Link
                  key={item.href}
                  href={toSection(item.href)}
                  className={cn(
                    "rounded-lg px-3 py-3",
                    light ? "text-[#17191C] hover:bg-white" : "text-slate-200 hover:bg-white/5",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={toSection("#contato")}
                className={cn("mt-2 py-3 text-center font-medium", ctaClass)}
                onClick={() => setOpen(false)}
              >
                {m.contact}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function LanguageSwitch({
  locale,
  label,
  light,
  onChange,
}: {
  locale: "pt" | "en";
  label: string;
  light: boolean;
  onChange: (locale: "pt" | "en") => void;
}) {
  return (
    <div
      className={cn(
        "flex items-center rounded-full border p-0.5 text-xs font-semibold",
        light ? "border-[#929DA7]/50 bg-white" : "border-white/15 bg-white/5",
      )}
      role="group"
      aria-label={label}
    >
      {(["pt", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(code)}
            className={cn(
              "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
              active
                ? light
                  ? "bg-[#17191C] text-white"
                  : "bg-white text-[#17191C]"
                : light
                  ? "text-[#5A656E] hover:text-[#17191C]"
                  : "text-slate-300 hover:text-white",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
