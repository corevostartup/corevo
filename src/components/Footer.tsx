"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "#o-que-fazemos", label: "O que fazemos" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Nosso Método" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const toSection = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-deep)] py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10 lg:flex-row lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-2 font-semibold text-white">
              <span className="relative h-9 w-9 shrink-0">
                <Image
                  src="/corevo-logo.png"
                  alt="Logo da Corevo"
                  fill
                  className="object-contain"
                />
              </span>
              COREVO
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              Seguro, rápido e consistente. A Corevo torna a evolução digital
              objetiva — com propósito e engenharia.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Navegação
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={toSection(l.href)}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
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
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/corevo.startup"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
        <p className="mt-12 border-t border-white/[0.06] pt-8 text-center text-xs text-slate-600">
          © {year} COREVO. Todos os direitos reservados. Core Evolution.
        </p>
      </div>
    </footer>
  );
}
