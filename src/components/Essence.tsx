"use client";

import { motion } from "framer-motion";

export function Essence() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Nossa essência
            </h2>
            <p className="mt-4 text-slate-400">
              Tecnologia sem direção é apenas código. O que nos move é a
              convergência entre visão e inovação, estratégia e propósito, e
              execução de engenharia que entrega no mundo real.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Visão tecnológica e inovação",
                "Estratégia, liderança e propósito",
                "Execução, engenharia e construção real",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-corevo" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg font-medium text-gradient-corevo">
              O resultado nasce da conexão.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 lg:p-10"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
            <div className="relative">
              <h3 className="text-xl font-semibold text-white">
                Filosofia
              </h3>
              <p className="mt-4 text-slate-400">
                A filosofia da Corevo e baseada em construcao inteligente de
                solucoes que conectam tecnologia, pessoas e negocios de forma
                pratica e escalavel, com foco em impacto real e sem
                complexidade desnecessaria.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <p className="text-sm font-semibold text-blue-300">
                    1. Simplicidade estrategica
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Criar produtos diretos, intuitivos e eficientes, eliminando
                    o excesso e focando no que realmente gera valor.
                  </p>
                </div>
                <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4">
                  <p className="text-sm font-semibold text-purple-300">
                    2. Execucao acelerada com inteligencia
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Transformar ideias em solucoes reais rapidamente, usando
                    tecnologia e IA para validar, lancar e evoluir produtos em
                    alta velocidade.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
