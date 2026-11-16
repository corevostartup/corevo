"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/components/SiteContentProvider";

export function Essence() {
  const { essence } = useSiteContent();

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
              {essence.title}
            </h2>
            <p className="mt-4 text-slate-400">
              {essence.body}
            </p>
            <ul className="mt-8 space-y-4">
              {essence.points.map((line) => (
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
              {essence.highlight}
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
                {essence.philosophyTitle}
              </h3>
              <p className="mt-4 text-slate-400">
                {essence.philosophyBody}
              </p>
              <div className="mt-8 space-y-4">
                {essence.principles.map((principle, index) => (
                  <div
                    key={`${principle.title}-${index}`}
                    className={
                      index % 2 === 0
                        ? "rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4"
                        : "rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4"
                    }
                  >
                    <p className={index % 2 === 0 ? "text-sm font-semibold text-blue-300" : "text-sm font-semibold text-purple-300"}>
                      {principle.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
