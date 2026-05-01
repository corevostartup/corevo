"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contato" className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-indigo-600/30 via-[var(--bg-surface)] to-purple-600/20 px-8 py-16 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Pronto para evoluir com propósito?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              A verdadeira inovação acontece quando talentos diferentes se
              conectam em um único objetivo. Vamos conversar.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="mailto:corevostartup@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-xl sm:w-auto"
              >
                corevostartup@gmail.com
              </motion.a>
              <motion.a
                href="mailto:supportcorevo@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur sm:w-auto"
              >
                Suporte: supportcorevo@gmail.com
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
