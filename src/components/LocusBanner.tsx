"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/** Resolução nativa do arquivo — não exibir acima disso para evitar upscale borrado */
const BANNER_WIDTH = 1024;
const BANNER_HEIGHT = 409;

export function LocusBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 w-full sm:mb-10"
    >
      <Link
        href="/projetos/locus"
        className="mx-auto block max-w-[1024px] overflow-hidden rounded-2xl border border-white/[0.08] shadow-lg shadow-black/25 transition-colors duration-300 hover:border-indigo-500/30"
        aria-label="Conheça o Locus — plataforma imobiliária"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banners/locus-banner.png"
          alt="Locus — conheça o app imobiliário da Corevo"
          width={BANNER_WIDTH}
          height={BANNER_HEIGHT}
          className="block h-auto w-full"
          loading="eager"
          decoding="sync"
          draggable={false}
        />
      </Link>
    </motion.div>
  );
}
