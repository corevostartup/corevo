"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSiteContent } from "@/components/SiteContentProvider";

export function Hero() {
  const { hero } = useSiteContent();

  return (
    <section id="topo" className="relative overflow-hidden">
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-[right_18%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(14,16,21,0.96)_0%,rgba(14,16,21,0.9)_58%,rgba(14,16,21,0.62)_100%)] lg:bg-[linear-gradient(90deg,#0e1015_0%,rgba(14,16,21,0.55)_32%,transparent_56%)]" />

      <div className="relative mx-auto flex max-w-6xl items-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:min-h-[720px] lg:px-8 lg:pb-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-xl text-left lg:max-w-2xl"
        >
          <span className="mb-6 block h-0.5 w-10 bg-[#246BFF]" />
          <p className="mb-5 text-xs font-medium uppercase tracking-widest text-slate-400">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            {hero.titleBefore}
            <span className="text-gradient-corevo">{hero.titleAccent}</span>
            {hero.titleAfter}
          </h1>
          <p className="mt-6 max-w-[18rem] text-base leading-relaxed text-slate-400 sm:max-w-lg sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-10">
            <motion.a
              href={hero.ctaHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-corevo px-6 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:brightness-110"
            >
              {hero.ctaLabel}
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
