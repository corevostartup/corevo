"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#o-que-fazemos", label: "O que fazemos" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const year = new Date().getFullYear();

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
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-corevo text-sm font-bold">
                C
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
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
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
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
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
