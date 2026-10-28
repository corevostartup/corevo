"use client";

import { motion } from "framer-motion";
import { LocusBanner } from "@/components/LocusBanner";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-purple-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <LocusBanner />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            Tecnologia · apps e plataformas
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Produtos digitais: do{" "}
            <span className="text-gradient-corevo">aplicativo mobile</span> ao
            painel de gestão da operação.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            A Corevo é uma startup de tecnologia que desenvolve e opera software
            próprio — incluindo Locus, PINEE e Converge Gestão — e realiza
            projetos sob medida alinhados à operação do cliente. Nossas soluções
            cobrem mobile, desktop e web, com interfaces objetivas e fluxos
            consistentes, pensados para uso contínuo por equipes e usuários
            finais.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#projetos"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-base font-medium text-white transition-colors hover:border-white/25 hover:bg-white/[0.08] sm:w-auto"
            >
              Ver projetos
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
