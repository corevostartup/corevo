"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { useSiteContent } from "@/components/SiteContentProvider";
import { cn } from "@/lib/cn";

export function Footer() {
  const year = new Date().getFullYear();
  const { footer } = useSiteContent();
  const { m } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const light = pathname === "/projetos/locus";
  const toSection = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer
      className={cn(
        "border-t py-14",
        light
          ? "border-[#929DA7]/30 bg-[#F3F5F7]"
          : "border-white/[0.06] bg-[var(--bg-deep)]",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10 lg:flex-row lg:justify-between"
        >
          <div>
            <div className={cn("flex items-center gap-2 font-semibold", light ? "text-[#17191C]" : "text-white")}>
              <span className="relative h-9 w-9 shrink-0">
                <Image
                  src="/corevo-logo.png"
                  alt={m.logoAlt}
                  fill
                  className="object-contain"
                />
              </span>
              COREVO
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              {footer.blurb}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              {m.footerNav}
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {m.footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={toSection(l.href)}
                    className={cn(
                      "text-sm transition-colors",
                      light ? "text-[#5A656E] hover:text-[#17191C]" : "text-slate-400 hover:text-white",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Social
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://www.linkedin.com/company/corevo-startup/"
                  target="_blank"
                  rel="noreferrer"
                  className={light ? "hover:text-[#17191C]" : "hover:text-white"}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/corevo.startup"
                  target="_blank"
                  rel="noreferrer"
                  className={light ? "hover:text-[#17191C]" : "hover:text-white"}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        <p
          className={cn(
            "mt-12 border-t pt-8 text-center text-xs",
            light ? "border-[#929DA7]/30 text-[#929DA7]" : "border-white/[0.06] text-slate-600",
          )}
        >
          © {year} COREVO. {m.rights}
        </p>
      </div>
    </footer>
  );
}
