"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { useSiteContent } from "@/components/SiteContentProvider";
import { newsCopy } from "@/data/news";

const previewCount = 3;
const pageSize = 6;

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
      <path
        d={direction === "left" ? "M12.5 4.5 7 10l5.5 5.5" : "M7.5 4.5 13 10l-5.5 5.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function News() {
  const { locale } = useLanguage();
  const text = newsCopy[locale];
  const items = useSiteContent().news.filter((item) => !item.hidden);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const pageCount = Math.ceil(items.length / pageSize);
  const start = open ? page * pageSize : 0;
  const count = open ? pageSize : previewCount;
  const visible = items.slice(start, start + count);
  const expanded = expandedId !== null && visible.some((item) => item.id === expandedId);
  const showArrows = open && items.length > pageSize && !expanded;

  const close = () => {
    setOpen(false);
    setPage(0);
    setExpandedId(null);
  };

  const toggleNote = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  if (items.length === 0) return null;

  return (
    <section id="notas" className="border-t border-white/[0.06] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {text.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {text.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-500">{text.intro}</p>
        </div>

        <div className="relative mt-8">
          {showArrows ? (
            <button
              type="button"
              aria-label={text.previous}
              disabled={page === 0}
              onClick={() => {
                setExpandedId(null);
                setPage((value) => Math.max(0, value - 1));
              }}
              className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0E1015] text-slate-200 transition-colors hover:border-white/30 hover:text-white disabled:cursor-default disabled:border-white/10 disabled:text-slate-600"
            >
              <Arrow direction="left" />
            </button>
          ) : null}

          <ul
            className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${open && items.length > pageSize ? "px-12" : ""}`}
          >
            {visible.map((item) => {
              const isExpanded = expandedId === item.id;
              if (expanded && !isExpanded) return null;

              return (
                <motion.li
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={
                    isExpanded
                      ? "col-span-full min-h-[calc(6*8.25rem+5*1rem)] sm:min-h-[calc(3*8.25rem+2*1rem)] lg:min-h-[calc(2*8.25rem+1rem)]"
                      : ""
                  }
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => toggleNote(item.id)}
                    className="flex h-full min-h-full w-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-5 text-left transition-colors hover:border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                  >
                    <p className="flex items-center justify-between gap-3 text-xs text-slate-500">
                      <span className="uppercase tracking-[0.14em]">{item.theme}</span>
                      <span>{item.date}</span>
                    </p>
                    <h3
                      className={`mt-3 font-medium text-white ${isExpanded ? "text-2xl" : "text-base"}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed text-slate-400 ${isExpanded ? "max-w-2xl text-base" : "text-sm"}`}
                    >
                      {isExpanded ? item.body || item.summary : item.summary}
                    </p>
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {showArrows ? (
            <button
              type="button"
              aria-label={text.next}
              disabled={page >= pageCount - 1}
              onClick={() => {
                setExpandedId(null);
                setPage((value) => Math.min(pageCount - 1, value + 1));
              }}
              className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0E1015] text-slate-200 transition-colors hover:border-white/30 hover:text-white disabled:cursor-default disabled:border-white/10 disabled:text-slate-600"
            >
              <Arrow direction="right" />
            </button>
          ) : null}
        </div>

        {items.length > previewCount ? (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => {
                setExpandedId(null);
                if (open) close();
                else setOpen(true);
              }}
              aria-expanded={open}
              className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
            >
              {open ? text.less : text.more}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
