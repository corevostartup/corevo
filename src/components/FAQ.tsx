"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "O que é a Corevo?",
    a: "Somos uma startup de tecnologia focada em conectar inteligência, pessoas e negócios. Criamos ecossistemas digitais com propósito — não apenas telas, mas produtos que resolvem problemas reais.",
  },
  {
    q: "Quais tecnologias vocês usam?",
    a: "Trabalhamos com stack moderna: React, Next.js, plataformas nativas e híbridas para mobile, APIs bem definidas e infraestrutura preparada para escala. A escolha é sempre adequada ao produto e ao tempo de mercado.",
  },
  {
    q: "Vocês fazem apenas apps?",
    a: "Apps são parte do que fazemos, mas nosso escopo inclui estratégia de produto, integrações, backends e experiências web completas — sempre com foco em valor e simplicidade.",
  },
  {
    q: "Como é o processo de contratação?",
    a: "Começamos com uma conversa de alinhamento, seguimos para proposta clara com escopo e investimento, e então iniciamos ciclos de entrega com transparência de progresso.",
  },
  {
    q: "Atendem fora do Brasil?",
    a: "Sim. Trabalhamos com equipes remotas e parceiros internacionais. Idioma de projeto: português ou inglês, conforme necessidade.",
  },
  {
    q: "Como falar com suporte?",
    a: "Para projetos e parcerias: corevostartup@gmail.com. Para suporte aos produtos: supportcorevo@gmail.com.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-slate-400">
            Do posicionamento ao dia a dia — tudo o que você precisa saber
            antes de evoluir com a Corevo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 space-y-3"
        >
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-white">{item.q}</span>
                  <span
                    className={cn(
                      "text-slate-400 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  >
                    ▼
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="border-t border-white/5 px-5 pb-4 pt-0 text-sm leading-relaxed text-slate-400">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#contato"
            className="rounded-full bg-gradient-corevo px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20"
          >
            Criar conta / conversar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
