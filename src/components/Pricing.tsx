"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Period = "monthly" | "yearly";

const plans = [
  {
    name: "Discovery",
    desc: "Ideal para validar ideia e desenhar o primeiro passo com clareza.",
    monthly: "Sob consulta",
    yearly: "Condições para pacote estendido",
    featured: false,
    features: [
      "Workshop de alinhamento",
      "Mapa de produto e riscos",
      "Protótipo navegável",
      "Estimativa de esforço",
    ],
    cta: "Agendar conversa",
  },
  {
    name: "Squads",
    desc: "Time dedicado para construir e iterar com ritmo de startup.",
    monthly: "Sob consulta",
    yearly: "Benefício em compromisso anual",
    featured: true,
    features: [
      "Design + engenharia integrados",
      "Sprints quinzenais",
      "CI/CD e observabilidade",
      "Suporte prioritário",
      "Roadmap compartilhado",
    ],
    cta: "Falar com vendas",
  },
  {
    name: "Enterprise",
    desc: "Parceria profunda: múltiplos produtos, integrações e governança.",
    monthly: "Personalizado",
    yearly: "Personalizado",
    featured: false,
    features: [
      "Arquitetura multi-produto",
      "SLAs e segurança reforçada",
      "Integrações sob medida",
      "Canal direto com liderança",
    ],
    cta: "Solicitar proposta",
  },
];

export function Pricing() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <section id="planos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Escolha como evoluir
          </h2>
          <p className="mt-4 text-slate-400">
            Modelos transparentes para cada estágio — escale sem surpresas,
            com propósito e engenharia alinhados.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
            <button
              type="button"
              onClick={() => setPeriod("monthly")}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                period === "monthly"
                  ? "bg-white text-slate-900"
                  : "text-slate-400 hover:text-white",
              )}
            >
              Mensal
            </button>
            <button
              type="button"
              onClick={() => setPeriod("yearly")}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                period === "yearly"
                  ? "bg-white text-slate-900"
                  : "text-slate-400 hover:text-white",
              )}
            >
              Anual
              <span className="ml-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                plan.featured
                  ? "border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-purple-500/5 shadow-xl shadow-indigo-500/10"
                  : "border-white/[0.08] bg-white/[0.03]",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-corevo px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>
              <p className="mt-6 text-3xl font-semibold text-white">
                {period === "monthly" ? plan.monthly : plan.yearly}
              </p>
              {plan.name === "Squads" && (
                <p className="text-xs text-slate-500">
                  {period === "monthly"
                    ? "Valores alinhados ao escopo e prazo"
                    : "Desconto proporcional ao período contratado"}
                </p>
              )}
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2 text-sm text-slate-300"
                  >
                    <span className="text-emerald-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors",
                  plan.featured
                    ? "bg-gradient-corevo text-white shadow-lg shadow-indigo-500/25"
                    : "border border-white/15 bg-white/[0.05] text-white hover:bg-white/[0.1]",
                )}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
