"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useSiteContent } from "@/components/SiteContentProvider";

const icons = ["◇", "◈", "⬡", "◎"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemMotion = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Benefits() {
  const { benefits } = useSiteContent();

  return (
    <section id="o-que-fazemos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {benefits.title}
          </h2>
          <p className="mt-4 text-slate-400">
            {benefits.intro}
          </p>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.items.map((item, index) => (
            <motion.li
              key={`${item.title}-${index}`}
              variants={itemMotion}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors duration-300",
                "hover:border-indigo-500/30 hover:bg-white/[0.05]",
              )}
            >
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-lg text-indigo-300">
                {icons[index] ?? "◇"}
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.desc}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
