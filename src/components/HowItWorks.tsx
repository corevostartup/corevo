"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "1",
    title: "Alinhar visão",
    desc: "Entendemos problema, público e resultado esperado — tecnologia a serviço de propósito.",
  },
  {
    n: "2",
    title: "Prototipar e validar",
    desc: "Ciclos curtos: MVP, feedback, iteração. Menos suposição, mais evidência.",
  },
  {
    n: "3",
    title: "Lançar e evoluir",
    desc: "Produto no ar, métricas claras e roadmap contínuo para escalar com segurança.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Nosso Método
          </h2>
          <p className="mt-4 text-slate-400">
            Uma forma simples, rápida e consistente de ir da ideia ao produto —
            sem perder a essência no caminho.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-corevo text-lg font-bold text-white shadow-lg shadow-indigo-500/20">
                {step.n}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {step.desc}
              </p>
              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-indigo-500/50 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#contato"
            className="rounded-full bg-white/[0.06] px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 transition-all hover:bg-white/[0.1]"
          >
            Criar com a Corevo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
