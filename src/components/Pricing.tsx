"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useSiteContent } from "@/components/SiteContentProvider";

export function Pricing() {
  const { contact } = useSiteContent();

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
            {contact.title}
          </h2>
          <p className="mt-4 text-slate-400">
            {contact.intro}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {contact.cards.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                index === 0
                  ? "border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 to-purple-500/5 shadow-xl shadow-indigo-500/10"
                  : "border-white/[0.08] bg-white/[0.03]",
              )}
            >
              {index === 0 && (
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
                  index === 0
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
          {contact.footnote}
        </motion.p>
      </div>
    </section>
  );
}
