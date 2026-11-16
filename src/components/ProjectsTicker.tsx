"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { projects } from "@/data/projects";


export function ProjectsTicker() {
  const { m } = useLanguage();
  const tagLabel = (tag: string) => m.tags[tag] ?? tag;
  return (
    <section id="projetos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {m.projectsTitle}
            </h2>
            <p className="mt-4 text-slate-400">
              {m.projectsIntro}
            </p>
          </div>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex shrink-0 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white hover:border-white/25"
          >
            {m.projectsCta}
          </motion.a>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projetos/${project.slug}`}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.04] px-5 py-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-white">{project.name}</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-400">
                  {project.trend}
                </span>
              </div>
              <span className="mt-1 text-xs text-slate-500">{tagLabel(project.tag)}</span>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <h3 className="text-sm font-medium uppercase tracking-widest text-slate-500">
            {m.launched}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {[
              "Locus (iOS)",
              "PINEE (iOS)",
              "Pollen (iOS)",
              "PetMemorial (iOS)",
              "Julius Compras (Android)",
              "ComunicaChat (Android e iOS)",
            ].map((app) => (
              <li
                key={app}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
              >
                {app}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
