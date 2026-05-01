"use client";

import { motion } from "framer-motion";

export function TrustBar() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
        >
          <p className="text-center text-sm font-medium uppercase tracking-widest text-slate-500 md:text-left">
            Quem confia na nossa execução
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            <div className="text-center">
              <p className="text-3xl font-semibold text-white">6+</p>
              <p className="text-xs text-slate-500">produtos lançados</p>
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-semibold text-gradient-corevo">
                iOS &amp; Android
              </p>
              <p className="text-xs text-slate-500">multiplataforma</p>
            </div>
            <div className="h-10 w-px bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-semibold text-white">100%</p>
              <p className="text-xs text-slate-500">foco em valor real</p>
            </div>
          </div>
        </motion.div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
          Simplicidade, performance e propósito — para navegar o digital com
          confiança e agilidade.
        </p>
      </div>
    </section>
  );
}
