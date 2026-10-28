"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const topics = [
  {
    name: "Projeto sob medida",
    desc: "Você precisa de app, site ou painel para a operação da empresa.",
    featured: true,
    points: [
      "Conte o contexto e o processo que quer digitalizar",
      "Alinhamos escopo, prazo e forma de entrega",
      "Desenvolvimento com acompanhamento até a publicação",
    ],
    cta: "Iniciar conversa",
  },
  {
    name: "Plataforma para entidade",
    desc: "Associação, CDL, sindicato ou entidade com associados e eventos.",
    featured: false,
    points: [
      "Site, painel e mobile integrados",
      "Eventos, cadastros, pagamentos e credenciamento",
      "Demonstração do que já entregamos em produção",
    ],
    cta: "Agendar demonstração",
  },
  {
    name: "Nossos produtos",
    desc: "Dúvidas sobre apps do portfólio, parceria ou suporte a usuários.",
    featured: false,
    points: [
      "Informações sobre apps publicados",
      "Canal para suporte e feedback",
      "Oportunidades de parceria comercial",
    ],
    cta: "Enviar mensagem",
  },
];

export function Pricing() {
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
            Fale com a Corevo
          </h2>
          <p className="mt-4 text-slate-400">
            Conte o que você precisa. Respondemos com próximo passo claro — sem
            pacote genérico nem tabela de preço fixa no site.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                topic.featured
                  ? "border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-purple-500/5 shadow-xl shadow-indigo-500/10"
                  : "border-white/[0.08] bg-white/[0.03]",
              )}
            >
              {topic.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-corevo px-3 py-1 text-xs font-semibold text-white">
                  Mais comum
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{topic.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{topic.desc}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {topic.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-indigo-400">·</span>
                    {point}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors",
                  topic.featured
                    ? "bg-gradient-corevo text-white shadow-lg shadow-indigo-500/25"
                    : "border border-white/15 bg-white/[0.05] text-white hover:bg-white/[0.1]",
                )}
              >
                {topic.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-xl text-center text-sm text-slate-500"
        >
          Todos os caminhos levam ao contato abaixo. Escolha o assunto e use o
          e-mail que preferir — comercial ou suporte.
        </motion.p>
      </div>
    </section>
  );
}
