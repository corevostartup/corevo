"use client";

import { motion } from "framer-motion";

const projects = [
  { name: "Locus", tag: "Imobiliário", trend: "+foco" },
  { name: "PINEE", tag: "Finanças", trend: "+clareza" },
  { name: "Pollen", tag: "Hábitos", trend: "+consistência" },
  { name: "PetMemorial", tag: "Memórias", trend: "+significado" },
  { name: "Lyka", tag: "Pets", trend: "+bem-estar" },
  { name: "Julius Compras", tag: "Compras", trend: "+organização" },
];

function Row({ reverse }: { reverse?: boolean }) {
  const doubled = [...projects, ...projects];
  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex gap-4"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          x: { repeat: Infinity, duration: 28, ease: "linear" },
        }}
      >
        {doubled.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="flex min-w-[200px] shrink-0 flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-4 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold text-white">{p.name}</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-400">
                {p.trend}
              </span>
            </div>
            <span className="mt-1 text-xs text-slate-500">{p.tag}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ProjectsTicker() {
  return (
    <section id="projetos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Todos os projetos, uma visão
            </h2>
            <p className="mt-4 text-slate-400">
              Do imobiliário ao financeiro, de hábitos ao bem-estar animal —
              produtos distintos, mesma obsessão: valor imediato e menos
              fricção.
            </p>
          </div>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex shrink-0 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white hover:border-white/25"
          >
            Construir com a Corevo
          </motion.a>
        </motion.div>

        <div className="mt-12 space-y-3 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-4">
          <Row />
          <Row reverse />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="text-sm font-medium uppercase tracking-widest text-slate-500">
            Apps lançados
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {[
              "Locus (iOS)",
              "PINEE (iOS)",
              "Pollen (iOS)",
              "PetMemorial (iOS)",
              "Julius Compras (Android)",
              "ComunicaChat (Android e iOS)",
            ].map((app) => (
              <li
                key={app}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
              >
                {app}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
