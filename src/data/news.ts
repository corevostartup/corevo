export const NEWS_LIMITS = {
  theme: 18,
  title: 32,
  summary: 80,
  body: 450,
  date: 16,
} as const;

export const newsCopy = {
  pt: {
    eyebrow: "Corevo",
    title: "Notas",
    intro: "Eventos, palestras e registros da atuação da Corevo.",
    more: "Ver mais",
    less: "Ver menos",
    previous: "Notas anteriores",
    next: "Próximas notas",
  },
  en: {
    eyebrow: "Corevo",
    title: "Notes",
    intro: "Events, talks, and notes on Corevo’s work.",
    more: "See more",
    less: "See less",
    previous: "Previous notes",
    next: "Next notes",
  },
} as const;
