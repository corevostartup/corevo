"use client";

import { FormEvent, useEffect, useState } from "react";
import type { NewsItem, SiteContent, TextPair } from "@/lib/site-content";

type Tab = "banner" | "areas" | "news";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white outline-none focus:border-[#246BFF]";
const labelClass = "mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500";

export function AdminApp() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [tab, setTab] = useState<Tab>("banner");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/content")
      .then(async (response) => {
        if (response.status === 401) {
          window.location.href = "/admin/login";
          return null;
        }
        return response.json();
      })
      .then((data) => {
        if (data) setContent(data);
      })
      .catch(() => setError("Não foi possível carregar o conteúdo."));
  }, []);

  async function save(next = content) {
    if (!next) return;
    setSaving(true);
    setError("");
    setStatus("");
    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    setSaving(false);
    if (!response.ok) {
      setError("Não foi possível salvar.");
      return;
    }
    setContent(await response.json());
    setStatus("Alterações salvas. Atualize o site para vê-las.");
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  if (!content) {
    return <main className="px-6 py-16 text-slate-300">{error || "Carregando..."}</main>;
  }

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="border-b border-white/10 px-5 py-6 lg:border-b-0 lg:border-r">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500">Corevo</p>
        <h1 className="mt-1 text-lg font-semibold text-white">Administração</h1>
        <nav className="mt-6 flex gap-2 lg:flex-col">
          {(
            [
              ["banner", "Banner inicial"],
              ["areas", "Áreas do site"],
              ["news", "Notícias"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`rounded-lg px-3 py-2 text-left text-sm ${
                tab === id ? "bg-[#246BFF] text-white" : "text-slate-300 hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
        <div className="mt-6 flex gap-4 text-sm">
          <a href="/" className="text-slate-400 hover:text-white">
            Ver o site
          </a>
          <button type="button" onClick={logout} className="text-slate-400 hover:text-white">
            Sair
          </button>
        </div>
      </aside>

      <main className="px-5 py-8 sm:px-8">
        {status && <p className="mb-4 text-sm text-emerald-300">{status}</p>}
        {error && <p className="mb-4 text-sm text-red-300">{error}</p>}
        {tab === "banner" && (
          <BannerEditor
            content={content}
            setContent={setContent}
            saving={saving}
            onSave={() => save()}
          />
        )}
        {tab === "areas" && (
          <AreasEditor content={content} setContent={setContent} saving={saving} onSave={() => save()} />
        )}
        {tab === "news" && (
          <NewsEditor content={content} setContent={setContent} saving={saving} onSave={(next) => save(next)} />
        )}
      </main>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {multiline ? (
        <textarea className={`${inputClass} min-h-24`} value={value} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input className={inputClass} value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </label>
  );
}

function BannerEditor({
  content,
  setContent,
  saving,
  onSave,
}: {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  saving: boolean;
  onSave: () => void;
}) {
  const [uploading, setUploading] = useState(false);
  const hero = content.hero;

  function patch(partial: Partial<SiteContent["hero"]>) {
    setContent({ ...content, hero: { ...hero, ...partial } });
  }

  async function onFile(event: FormEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    setUploading(true);
    const body = new FormData();
    body.set("file", file);
    const response = await fetch("/api/admin/banner", { method: "POST", body });
    setUploading(false);
    if (!response.ok) return;
    setContent(await response.json());
  }

  return (
    <section className="max-w-3xl space-y-5">
      <header>
        <h2 className="text-2xl font-semibold text-white">Banner inicial</h2>
        <p className="mt-1 text-sm text-slate-400">
          Troque a imagem e os textos da abertura. A imagem ocupa o lado direito, como no site.
        </p>
      </header>
      <div className="overflow-hidden rounded-xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.image} alt="" className="h-48 w-full object-cover object-right" />
      </div>
      <label className="block">
        <span className={labelClass}>Nova imagem (JPG, PNG ou WebP)</span>
        <input type="file" accept="image/jpeg,image/png,image/webp" onChange={onFile} className="text-sm text-slate-300" />
        {uploading && <span className="mt-1 block text-xs text-slate-400">Enviando imagem...</span>}
      </label>
      <Field label="Rótulo" value={hero.eyebrow} onChange={(eyebrow) => patch({ eyebrow })} />
      <Field label="Título — início" value={hero.titleBefore} onChange={(titleBefore) => patch({ titleBefore })} />
      <Field label="Título — destaque" value={hero.titleAccent} onChange={(titleAccent) => patch({ titleAccent })} />
      <Field label="Título — continuação" value={hero.titleAfter} onChange={(titleAfter) => patch({ titleAfter })} />
      <Field label="Texto" value={hero.description} multiline onChange={(description) => patch({ description })} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Botão" value={hero.ctaLabel} onChange={(ctaLabel) => patch({ ctaLabel })} />
        <Field label="Link do botão" value={hero.ctaHref} onChange={(ctaHref) => patch({ ctaHref })} />
      </div>
      <SaveButton saving={saving} onSave={onSave} />
    </section>
  );
}

function AreasEditor({
  content,
  setContent,
  saving,
  onSave,
}: {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  saving: boolean;
  onSave: () => void;
}) {
  const [area, setArea] = useState<keyof SiteContent>("trust");

  return (
    <section className="max-w-3xl">
      <h2 className="text-2xl font-semibold text-white">Áreas do site</h2>
      <p className="mt-1 text-sm text-slate-400">Edite os textos de cada seção. O layout permanece o mesmo.</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {AREA_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setArea(option.id)}
            className={`rounded-full px-3 py-1.5 text-xs ${
              area === option.id ? "bg-white text-slate-900" : "bg-white/5 text-slate-300"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        {area === "trust" && (
          <TrustFields value={content.trust} onChange={(trust) => setContent({ ...content, trust })} />
        )}
        {area === "benefits" && (
          <SectionFields
            title={content.benefits.title}
            intro={content.benefits.intro}
            onTitle={(title) => setContent({ ...content, benefits: { ...content.benefits, title } })}
            onIntro={(intro) => setContent({ ...content, benefits: { ...content.benefits, intro } })}
          >
            <PairList
              items={content.benefits.items}
              onChange={(items) => setContent({ ...content, benefits: { ...content.benefits, items } })}
            />
          </SectionFields>
        )}
        {area === "method" && (
          <SectionFields
            title={content.method.title}
            intro={content.method.intro}
            onTitle={(title) => setContent({ ...content, method: { ...content.method, title } })}
            onIntro={(intro) => setContent({ ...content, method: { ...content.method, intro } })}
          >
            <PairList
              items={content.method.steps}
              onChange={(steps) => setContent({ ...content, method: { ...content.method, steps } })}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Botão"
                value={content.method.ctaLabel}
                onChange={(ctaLabel) => setContent({ ...content, method: { ...content.method, ctaLabel } })}
              />
              <Field
                label="Link"
                value={content.method.ctaHref}
                onChange={(ctaHref) => setContent({ ...content, method: { ...content.method, ctaHref } })}
              />
            </div>
          </SectionFields>
        )}
        {area === "essence" && (
          <EssenceFields content={content} setContent={setContent} />
        )}
        {area === "testimonials" && (
          <TestimonialsFields content={content} setContent={setContent} />
        )}
        {area === "contact" && <ContactFields content={content} setContent={setContent} />}
        {area === "faq" && <FaqFields content={content} setContent={setContent} />}
        {area === "cta" && <CtaFields content={content} setContent={setContent} />}
        {area === "footer" && (
          <Field
            label="Texto do rodapé"
            value={content.footer.blurb}
            multiline
            onChange={(blurb) => setContent({ ...content, footer: { blurb } })}
          />
        )}
      </div>
      <div className="mt-6">
        <SaveButton saving={saving} onSave={onSave} />
      </div>
    </section>
  );
}

const AREA_OPTIONS: { id: keyof SiteContent; label: string }[] = [
  { id: "trust", label: "Portfólio" },
  { id: "benefits", label: "Por que a Corevo" },
  { id: "method", label: "Método" },
  { id: "essence", label: "Essência" },
  { id: "testimonials", label: "Depoimentos" },
  { id: "contact", label: "Contato" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Chamada final" },
  { id: "footer", label: "Rodapé" },
];

function SectionFields({
  title,
  intro,
  onTitle,
  onIntro,
  children,
}: {
  title: string;
  intro: string;
  onTitle: (value: string) => void;
  onIntro: (value: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <Field label="Título" value={title} onChange={onTitle} />
      <Field label="Introdução" value={intro} multiline onChange={onIntro} />
      {children}
    </div>
  );
}

function TrustFields({
  value,
  onChange,
}: {
  value: SiteContent["trust"];
  onChange: (value: SiteContent["trust"]) => void;
}) {
  const patch = (partial: Partial<SiteContent["trust"]>) => onChange({ ...value, ...partial });
  return (
    <div className="space-y-4">
      <Field label="Rótulo" value={value.label} onChange={(label) => patch({ label })} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Número 1" value={value.stat1Value} onChange={(stat1Value) => patch({ stat1Value })} />
        <Field label="Legenda 1" value={value.stat1Label} onChange={(stat1Label) => patch({ stat1Label })} />
        <Field label="Número 2" value={value.stat2Value} onChange={(stat2Value) => patch({ stat2Value })} />
        <Field label="Legenda 2" value={value.stat2Label} onChange={(stat2Label) => patch({ stat2Label })} />
        <Field label="Destaque 3" value={value.stat3Value} onChange={(stat3Value) => patch({ stat3Value })} />
        <Field label="Legenda 3" value={value.stat3Label} onChange={(stat3Label) => patch({ stat3Label })} />
      </div>
      <Field label="Nota" value={value.note} multiline onChange={(note) => patch({ note })} />
    </div>
  );
}

function PairList({ items, onChange }: { items: TextPair[]; onChange: (items: TextPair[]) => void }) {
  return (
    <ListShell
      onAdd={() => onChange([...items, { title: "", desc: "" }])}
      onRemove={(index) => onChange(items.filter((_, item) => item !== index))}
    >
      {items.map((item, index) => (
        <div key={index} className="space-y-3 rounded-xl border border-white/10 p-4">
          <Field
            label={`Título ${index + 1}`}
            value={item.title}
            onChange={(title) => onChange(items.map((entry, i) => (i === index ? { ...entry, title } : entry)))}
          />
          <Field
            label="Descrição"
            value={item.desc}
            multiline
            onChange={(desc) => onChange(items.map((entry, i) => (i === index ? { ...entry, desc } : entry)))}
          />
          <RemoveButton onClick={() => onChange(items.filter((_, i) => i !== index))} />
        </div>
      ))}
    </ListShell>
  );
}

function EssenceFields({
  content,
  setContent,
}: {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
}) {
  const essence = content.essence;
  const patch = (partial: Partial<SiteContent["essence"]>) =>
    setContent({ ...content, essence: { ...essence, ...partial } });
  return (
    <div className="space-y-4">
      <Field label="Título" value={essence.title} onChange={(title) => patch({ title })} />
      <Field label="Texto" value={essence.body} multiline onChange={(body) => patch({ body })} />
      <StringList
        label="Pontos"
        items={essence.points}
        onChange={(points) => patch({ points })}
      />
      <Field label="Frase de destaque" value={essence.highlight} onChange={(highlight) => patch({ highlight })} />
      <Field label="Filosofia" value={essence.philosophyTitle} onChange={(philosophyTitle) => patch({ philosophyTitle })} />
      <Field
        label="Texto da filosofia"
        value={essence.philosophyBody}
        multiline
        onChange={(philosophyBody) => patch({ philosophyBody })}
      />
      <PairList items={essence.principles} onChange={(principles) => patch({ principles })} />
    </div>
  );
}

function TestimonialsFields({
  content,
  setContent,
}: {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
}) {
  const block = content.testimonials;
  const patchItems = (items: SiteContent["testimonials"]["items"]) =>
    setContent({ ...content, testimonials: { ...block, items } });
  return (
    <SectionFields
      title={block.title}
      intro={block.intro}
      onTitle={(title) => setContent({ ...content, testimonials: { ...block, title } })}
      onIntro={(intro) => setContent({ ...content, testimonials: { ...block, intro } })}
    >
      <ListShell
        onAdd={() => patchItems([...block.items, { quote: "", name: "", role: "", org: "" }])}
      >
        {block.items.map((item, index) => (
          <div key={index} className="space-y-3 rounded-xl border border-white/10 p-4">
            <Field
              label="Depoimento"
              value={item.quote}
              multiline
              onChange={(quote) => patchItems(block.items.map((entry, i) => (i === index ? { ...entry, quote } : entry)))}
            />
            <div className="grid gap-3 sm:grid-cols-3">
              <Field
                label="Nome"
                value={item.name}
                onChange={(name) => patchItems(block.items.map((entry, i) => (i === index ? { ...entry, name } : entry)))}
              />
              <Field
                label="Cargo"
                value={item.role}
                onChange={(role) => patchItems(block.items.map((entry, i) => (i === index ? { ...entry, role } : entry)))}
              />
              <Field
                label="Organização"
                value={item.org}
                onChange={(org) => patchItems(block.items.map((entry, i) => (i === index ? { ...entry, org } : entry)))}
              />
            </div>
            <RemoveButton onClick={() => patchItems(block.items.filter((_, i) => i !== index))} />
          </div>
        ))}
      </ListShell>
    </SectionFields>
  );
}

function ContactFields({
  content,
  setContent,
}: {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
}) {
  const block = content.contact;
  const patch = (partial: Partial<SiteContent["contact"]>) =>
    setContent({ ...content, contact: { ...block, ...partial } });
  return (
    <div className="space-y-4">
      <Field label="Título" value={block.title} onChange={(title) => patch({ title })} />
      <Field label="Introdução" value={block.intro} multiline onChange={(intro) => patch({ intro })} />
      {block.cards.map((card, index) => (
        <div key={index} className="space-y-3 rounded-xl border border-white/10 p-4">
          <Field
            label={`Cartão ${index + 1}`}
            value={card.name}
            onChange={(name) =>
              patch({ cards: block.cards.map((entry, i) => (i === index ? { ...entry, name } : entry)) })
            }
          />
          <Field
            label="Descrição"
            value={card.desc}
            multiline
            onChange={(desc) =>
              patch({ cards: block.cards.map((entry, i) => (i === index ? { ...entry, desc } : entry)) })
            }
          />
          <StringList
            label="Pontos"
            items={card.points}
            onChange={(points) =>
              patch({ cards: block.cards.map((entry, i) => (i === index ? { ...entry, points } : entry)) })
            }
          />
          <Field
            label="Botão"
            value={card.cta}
            onChange={(cta) =>
              patch({ cards: block.cards.map((entry, i) => (i === index ? { ...entry, cta } : entry)) })
            }
          />
        </div>
      ))}
      <Field label="Nota final" value={block.footnote} multiline onChange={(footnote) => patch({ footnote })} />
    </div>
  );
}

function FaqFields({
  content,
  setContent,
}: {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
}) {
  const block = content.faq;
  const patchItems = (items: SiteContent["faq"]["items"]) =>
    setContent({ ...content, faq: { ...block, items } });
  return (
    <SectionFields
      title={block.title}
      intro={block.intro}
      onTitle={(title) => setContent({ ...content, faq: { ...block, title } })}
      onIntro={(intro) => setContent({ ...content, faq: { ...block, intro } })}
    >
      <ListShell onAdd={() => patchItems([...block.items, { q: "", a: "" }])}>
        {block.items.map((item, index) => (
          <div key={index} className="space-y-3 rounded-xl border border-white/10 p-4">
            <Field
              label="Pergunta"
              value={item.q}
              onChange={(q) => patchItems(block.items.map((entry, i) => (i === index ? { ...entry, q } : entry)))}
            />
            <Field
              label="Resposta"
              value={item.a}
              multiline
              onChange={(a) => patchItems(block.items.map((entry, i) => (i === index ? { ...entry, a } : entry)))}
            />
            <RemoveButton onClick={() => patchItems(block.items.filter((_, i) => i !== index))} />
          </div>
        ))}
      </ListShell>
    </SectionFields>
  );
}

function CtaFields({
  content,
  setContent,
}: {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
}) {
  const cta = content.cta;
  const patch = (partial: Partial<SiteContent["cta"]>) => setContent({ ...content, cta: { ...cta, ...partial } });
  return (
    <div className="space-y-4">
      <Field label="Título" value={cta.title} onChange={(title) => patch({ title })} />
      <Field label="Texto" value={cta.body} multiline onChange={(body) => patch({ body })} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Botão principal" value={cta.primaryLabel} onChange={(primaryLabel) => patch({ primaryLabel })} />
        <Field label="Link principal" value={cta.primaryHref} onChange={(primaryHref) => patch({ primaryHref })} />
        <Field label="Botão secundário" value={cta.secondaryLabel} onChange={(secondaryLabel) => patch({ secondaryLabel })} />
        <Field label="Link secundário" value={cta.secondaryHref} onChange={(secondaryHref) => patch({ secondaryHref })} />
      </div>
    </div>
  );
}

function NewsEditor({
  content,
  setContent,
  saving,
  onSave,
}: {
  content: SiteContent;
  setContent: (content: SiteContent) => void;
  saving: boolean;
  onSave: (next: SiteContent) => void;
}) {
  const [draft, setDraft] = useState<NewsItem>({
    id: "",
    title: "",
    summary: "",
    body: "",
    date: new Date().toISOString().slice(0, 10),
    status: "rascunho",
  });

  function upsert(event: FormEvent) {
    event.preventDefault();
    if (!draft.title.trim()) return;
    const item = { ...draft, id: draft.id || crypto.randomUUID() };
    const exists = content.news.some((news) => news.id === item.id);
    const news = exists
      ? content.news.map((newsItem) => (newsItem.id === item.id ? item : newsItem))
      : [item, ...content.news];
    const next = { ...content, news };
    setContent(next);
    setDraft({
      id: "",
      title: "",
      summary: "",
      body: "",
      date: new Date().toISOString().slice(0, 10),
      status: "rascunho",
    });
    onSave(next);
  }

  return (
    <section className="max-w-3xl space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-white">Notícias</h2>
        <p className="mt-1 text-sm text-slate-400">
          Cadastre notícias agora. Elas ficam guardadas e ainda não aparecem no site — a publicação entra numa etapa seguinte.
        </p>
      </header>
      <form onSubmit={upsert} className="space-y-4 rounded-xl border border-white/10 p-4">
        <Field label="Título" value={draft.title} onChange={(title) => setDraft({ ...draft, title })} />
        <Field label="Resumo" value={draft.summary} multiline onChange={(summary) => setDraft({ ...draft, summary })} />
        <Field label="Texto" value={draft.body} multiline onChange={(body) => setDraft({ ...draft, body })} />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Data" value={draft.date} onChange={(date) => setDraft({ ...draft, date })} />
          <label>
            <span className={labelClass}>Situação</span>
            <select
              className={inputClass}
              value={draft.status}
              onChange={(event) => setDraft({ ...draft, status: event.target.value as NewsItem["status"] })}
            >
              <option value="rascunho">Rascunho</option>
              <option value="pronta">Pronta para publicar</option>
            </select>
          </label>
        </div>
        <button type="submit" disabled={saving} className="rounded-full bg-gradient-corevo px-5 py-2.5 text-sm font-medium text-white">
          {draft.id ? "Atualizar notícia" : "Adicionar notícia"}
        </button>
      </form>
      <ul className="space-y-3">
        {content.news.length === 0 && <li className="text-sm text-slate-500">Nenhuma notícia cadastrada.</li>}
        {content.news.map((item) => (
          <li key={item.id} className="flex items-start justify-between gap-4 rounded-xl border border-white/10 p-4">
            <div>
              <p className="font-medium text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-400">{item.summary}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                {item.date} · {item.status === "pronta" ? "Pronta para publicar" : "Rascunho"}
              </p>
            </div>
            <div className="flex shrink-0 gap-3 text-sm">
              <button type="button" className="text-slate-300 hover:text-white" onClick={() => setDraft(item)}>
                Editar
              </button>
              <button
                type="button"
                className="text-red-300"
                onClick={() => {
                  const next = { ...content, news: content.news.filter((news) => news.id !== item.id) };
                  setContent(next);
                  onSave(next);
                }}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function StringList({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  return (
    <div className="space-y-2">
      <span className={labelClass}>{label}</span>
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <input
            className={inputClass}
            value={item}
            onChange={(event) => onChange(items.map((entry, i) => (i === index ? event.target.value : entry)))}
          />
          <RemoveButton onClick={() => onChange(items.filter((_, i) => i !== index))} />
        </div>
      ))}
      <button
        type="button"
        className="text-sm text-[#8EB4FF]"
        onClick={() => onChange([...items, ""])}
      >
        Adicionar
      </button>
    </div>
  );
}

function ListShell({
  onAdd,
  children,
}: {
  onAdd: () => void;
  onRemove?: (index: number) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      {children}
      <button type="button" onClick={onAdd} className="text-sm text-[#8EB4FF]">
        Adicionar item
      </button>
    </div>
  );
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="text-xs text-red-300">
      Remover
    </button>
  );
}

function SaveButton({ saving, onSave }: { saving: boolean; onSave: () => void }) {
  return (
    <button
      type="button"
      onClick={onSave}
      disabled={saving}
      className="rounded-full bg-gradient-corevo px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60"
    >
      {saving ? "Salvando..." : "Salvar"}
    </button>
  );
}
