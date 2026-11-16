"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/components/SiteContentProvider";

export function TrustBar() {
  const { trust } = useSiteContent();

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
            {trust.label}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            <div className="text-center">
              <p className="text-3xl font-semibold text-white">{trust.stat1Value}</p>
              <p className="text-xs text-slate-500">{trust.stat1Label}</p>
            </div>
            <div className="hidden h-10 w-px bg-white/10 sm:block" />
            <div className="text-center">
              <p className="text-3xl font-semibold text-gradient-corevo">{trust.stat2Value}</p>
              <p className="text-xs text-slate-500">
                {trust.stat2Label}
              </p>
            </div>
            <div className="hidden h-10 w-px bg-white/10 sm:block" />
            <div className="max-w-[11rem] text-center">
              <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
                {trust.stat3Value}
              </p>
              <p className="text-xs text-slate-500">{trust.stat3Label}</p>
            </div>
          </div>
        </motion.div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
          {trust.note}
        </p>
      </div>
    </section>
  );
}
