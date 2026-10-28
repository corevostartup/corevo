"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const items = [
  {
    title: "Usabilidade no dia a dia",
    desc: "Interfaces claras e fluxos diretos, pensados para quem usa o sistema com frequência — equipe ou público final.",
    icon: "◇",
  },
  {
    title: "Performance e estabilidade",
    desc: "Aplicações rápidas e arquitetura que suporta crescimento de usuários e volume de dados sem perder confiabilidade.",
    icon: "◈",
  },
  {
    title: "Sistemas integrados",
    desc: "Site, painel administrativo e mobile no mesmo projeto quando necessário — uma base, menos retrabalho e dados dispersos.",
    icon: "⬡",
  },
  {
    title: "Da ideação à publicação",
    desc: "Discovery, desenvolvimento e colocação em produção com escopo definido, prazos acordados e entrega publicada.",
    icon: "◎",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Benefits() {
  return (
    <section id="o-que-fazemos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Por que a Corevo?
          </h2>
          <p className="mt-4 text-slate-400">
            Desenvolvemos apps e plataformas com foco em operação real: software
            que a equipe consegue usar e manter após o lançamento.
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item) => (
            <motion.li
              key={item.title}
              variants={itemMotion}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-300",
                "hover:border-indigo-500/30 hover:bg-white/[0.05]",
              )}
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-lg text-indigo-300">
                {item.icon}
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.desc}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
