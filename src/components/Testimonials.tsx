"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    quote:
      "A Corevo entrega produto com clareza e ritmo. Da estratégia ao lançamento, a comunicação foi objetiva e o resultado, acima do esperado.",
    name: "Marina V.",
    role: "Product Lead",
    org: "Scale-up de serviços",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Menos enrolação, mais execução. O time entende negócio e tecnologia — isso encurta muito o caminho entre ideia e app nas lojas.",
    name: "Ricardo T.",
    role: "Founder",
    org: "Healthtech",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Design limpo, performance sólida e visão de longo prazo. Exatamente o parceiro que queríamos para evoluir nosso ecossistema digital.",
    name: "Ana L.",
    role: "CMO",
    org: "Retail digital",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v === 0 ? slides.length - 1 : v - 1));
  const next = () => setI((v) => (v === slides.length - 1 ? 0 : v + 1));
  const current = slides[i];

  return (
    <section className="border-y border-white/[0.06] bg-white/[0.02] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Quem já evoluiu com a gente
          </h2>
          <p className="mt-4 text-slate-400">
            Uma comunidade em crescimento que escolhe propósito, segurança de
            entrega e design premium.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-indigo-500/30">
                  <Image
                    src={current.image}
                    alt=""
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 sm:ml-8 sm:mt-0">
                  <p className="text-lg leading-relaxed text-slate-200">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <p className="mt-6 font-semibold text-white">{current.name}</p>
                  <p className="text-sm text-slate-500">
                    {current.role} · {current.org}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-sm text-slate-500">
                {i + 1} / {slides.length}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
                >
                  Próximo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
