import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";
import { NEWS_LIMITS } from "@/data/news";
import defaults from "@/data/site-content.json";

export type TextPair = { title: string; desc: string };

export type SiteContent = {
  hero: {
    image: string;
    eyebrow: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  trust: {
    label: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    note: string;
  };
  benefits: { title: string; intro: string; items: TextPair[] };
  method: {
    title: string;
    intro: string;
    ctaLabel: string;
    ctaHref: string;
    steps: TextPair[];
  };
  essence: {
    title: string;
    body: string;
    points: string[];
    highlight: string;
    philosophyTitle: string;
    philosophyBody: string;
    principles: TextPair[];
  };
  testimonials: {
    title: string;
    intro: string;
    items: { quote: string; name: string; role: string; org: string }[];
  };
  contact: {
    title: string;
    intro: string;
    footnote: string;
    cards: { name: string; desc: string; points: string[]; cta: string }[];
  };
  faq: { title: string; intro: string; items: { q: string; a: string }[] };
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  footer: { blurb: string };
  news: NewsItem[];
};

export type NewsItem = {
  id: string;
  theme: string;
  title: string;
  summary: string;
  body: string;
  date: string;
  hidden: boolean;
};

const FILE = path.join(process.cwd(), "src/data/site-content.json");

function text(value: unknown, max: number, fallback = "") {
  const raw = typeof value === "string" ? value : fallback;
  return raw.replace(/\u0000/g, "").slice(0, max);
}

function pairs(value: unknown, fallback: TextPair[]): TextPair[] {
  if (!Array.isArray(value)) return fallback;
  return value.slice(0, 12).map((item, index) => ({
    title: text((item as TextPair)?.title, 160, fallback[index]?.title ?? ""),
    desc: text((item as TextPair)?.desc, 800, fallback[index]?.desc ?? ""),
  }));
}

function lines(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) return fallback;
  return value.slice(0, 12).map((item, index) => text(item, 300, fallback[index] ?? ""));
}

export function normalizeSiteContent(input: unknown): SiteContent {
  const base = defaults as SiteContent;
  const data = (input && typeof input === "object" ? input : {}) as Partial<SiteContent>;
  const hero = { ...base.hero, ...data.hero };
  const trust = { ...base.trust, ...data.trust };
  const benefits = { ...base.benefits, ...data.benefits };
  const method = { ...base.method, ...data.method };
  const essence = { ...base.essence, ...data.essence };
  const testimonials = { ...base.testimonials, ...data.testimonials };
  const contact = { ...base.contact, ...data.contact };
  const faq = { ...base.faq, ...data.faq };
  const cta = { ...base.cta, ...data.cta };
  const footer = { ...base.footer, ...data.footer };

  return {
    hero: {
      image: text(hero.image, 240, base.hero.image).startsWith("/")
        ? text(hero.image, 240, base.hero.image)
        : base.hero.image,
      eyebrow: text(hero.eyebrow, 120, base.hero.eyebrow),
      titleBefore: text(hero.titleBefore, 180, base.hero.titleBefore),
      titleAccent: text(hero.titleAccent, 120, base.hero.titleAccent),
      titleAfter: text(hero.titleAfter, 180, base.hero.titleAfter),
      description: text(hero.description, 1200, base.hero.description),
      ctaLabel: text(hero.ctaLabel, 60, base.hero.ctaLabel),
      ctaHref: text(hero.ctaHref, 240, base.hero.ctaHref),
    },
    trust: {
      label: text(trust.label, 80, base.trust.label),
      stat1Value: text(trust.stat1Value, 20, base.trust.stat1Value),
      stat1Label: text(trust.stat1Label, 80, base.trust.stat1Label),
      stat2Value: text(trust.stat2Value, 20, base.trust.stat2Value),
      stat2Label: text(trust.stat2Label, 80, base.trust.stat2Label),
      stat3Value: text(trust.stat3Value, 40, base.trust.stat3Value),
      stat3Label: text(trust.stat3Label, 80, base.trust.stat3Label),
      note: text(trust.note, 300, base.trust.note),
    },
    benefits: {
      title: text(benefits.title, 120, base.benefits.title),
      intro: text(benefits.intro, 500, base.benefits.intro),
      items: pairs(benefits.items, base.benefits.items),
    },
    method: {
      title: text(method.title, 120, base.method.title),
      intro: text(method.intro, 500, base.method.intro),
      ctaLabel: text(method.ctaLabel, 60, base.method.ctaLabel),
      ctaHref: text(method.ctaHref, 240, base.method.ctaHref),
      steps: pairs(method.steps, base.method.steps),
    },
    essence: {
      title: text(essence.title, 120, base.essence.title),
      body: text(essence.body, 900, base.essence.body),
      points: lines(essence.points, base.essence.points),
      highlight: text(essence.highlight, 200, base.essence.highlight),
      philosophyTitle: text(essence.philosophyTitle, 80, base.essence.philosophyTitle),
      philosophyBody: text(essence.philosophyBody, 900, base.essence.philosophyBody),
      principles: pairs(essence.principles, base.essence.principles),
    },
    testimonials: {
      title: text(testimonials.title, 120, base.testimonials.title),
      intro: text(testimonials.intro, 400, base.testimonials.intro),
      items: (Array.isArray(testimonials.items) ? testimonials.items : base.testimonials.items)
        .slice(0, 8)
        .map((item, index) => ({
          quote: text(item?.quote, 600, base.testimonials.items[index]?.quote ?? ""),
          name: text(item?.name, 80, base.testimonials.items[index]?.name ?? ""),
          role: text(item?.role, 80, base.testimonials.items[index]?.role ?? ""),
          org: text(item?.org, 80, base.testimonials.items[index]?.org ?? ""),
        })),
    },
    contact: {
      title: text(contact.title, 120, base.contact.title),
      intro: text(contact.intro, 500, base.contact.intro),
      footnote: text(contact.footnote, 400, base.contact.footnote),
      cards: (Array.isArray(contact.cards) ? contact.cards : base.contact.cards)
        .slice(0, 6)
        .map((card, index) => ({
          name: text(card?.name, 80, base.contact.cards[index]?.name ?? ""),
          desc: text(card?.desc, 300, base.contact.cards[index]?.desc ?? ""),
          points: lines(card?.points, base.contact.cards[index]?.points ?? []),
          cta: text(card?.cta, 60, base.contact.cards[index]?.cta ?? ""),
        })),
    },
    faq: {
      title: text(faq.title, 120, base.faq.title),
      intro: text(faq.intro, 400, base.faq.intro),
      items: (Array.isArray(faq.items) ? faq.items : base.faq.items).slice(0, 20).map((item, index) => ({
        q: text(item?.q, 200, base.faq.items[index]?.q ?? ""),
        a: text(item?.a, 1200, base.faq.items[index]?.a ?? ""),
      })),
    },
    cta: {
      title: text(cta.title, 160, base.cta.title),
      body: text(cta.body, 500, base.cta.body),
      primaryLabel: text(cta.primaryLabel, 80, base.cta.primaryLabel),
      primaryHref: text(cta.primaryHref, 240, base.cta.primaryHref),
      secondaryLabel: text(cta.secondaryLabel, 80, base.cta.secondaryLabel),
      secondaryHref: text(cta.secondaryHref, 240, base.cta.secondaryHref),
    },
    footer: { blurb: text(footer.blurb, 300, base.footer.blurb) },
    news: (Array.isArray(data.news) ? data.news : []).slice(0, 50).map((item) => {
      const legacy = item as NewsItem & { kind?: string; status?: string };
      const summary = text(legacy.summary, NEWS_LIMITS.summary);
      const body = text(legacy.body, NEWS_LIMITS.body);
      return {
        id: text(legacy.id, 80) || crypto.randomUUID(),
        theme: text(legacy.theme || legacy.kind, NEWS_LIMITS.theme),
        title: text(legacy.title, NEWS_LIMITS.title),
        summary: summary || text(body, NEWS_LIMITS.summary),
        body: body || summary,
        date: text(legacy.date, NEWS_LIMITS.date),
        hidden: legacy.hidden === true || legacy.status === "rascunho",
      };
    }),
  };
}

export function readSiteContent(): SiteContent {
  try {
    return normalizeSiteContent(JSON.parse(readFileSync(FILE, "utf8")));
  } catch {
    return normalizeSiteContent(defaults);
  }
}

export function writeSiteContent(input: unknown) {
  const content = normalizeSiteContent(input);
  mkdirSync(path.dirname(FILE), { recursive: true });
  writeFileSync(FILE, `${JSON.stringify(content, null, 2)}\n`);
  return content;
}
