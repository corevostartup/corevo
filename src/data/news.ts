export type NewsItem = {
  kind: string;
  date: string;
  title: string;
  body: string;
};

export const newsCopy = {
  pt: {
    eyebrow: "Corevo",
    title: "Notas",
    intro: "Eventos, palestras e registros da atuação da Corevo.",
    more: "Ver mais",
    less: "Ver menos",
    previous: "Notas anteriores",
    next: "Próximas notas",
    items: [
      {
        kind: "Palestra",
        date: "Exemplo",
        title: "Tema de uma palestra",
        body: "Espaço para data, local e o que foi apresentado.",
      },
      {
        kind: "Evento",
        date: "Exemplo",
        title: "Participação em um evento",
        body: "Espaço para o nome do encontro e o papel da Corevo.",
      },
      {
        kind: "Nota",
        date: "Exemplo",
        title: "Uma informação relevante",
        body: "Espaço para um aviso curto sobre a empresa ou um produto.",
      },
      {
        kind: "Palestra",
        date: "Exemplo",
        title: "Outra fala da equipe",
        body: "Segundo registro, visível ao abrir o restante das notas.",
      },
      {
        kind: "Evento",
        date: "Exemplo",
        title: "Outro encontro",
        body: "Use este cartão quando houver mais um evento para contar.",
      },
      {
        kind: "Nota",
        date: "Exemplo",
        title: "Atualização da Corevo",
        body: "Um terceiro item da segunda linha, no mesmo formato.",
      },
      {
        kind: "Palestra",
        date: "Exemplo",
        title: "Conversa com o público",
        body: "Visível ao avançar pelas setas, depois das seis primeiras notas.",
      },
      {
        kind: "Evento",
        date: "Exemplo",
        title: "Encontro seguinte",
        body: "Segundo cartão da página seguinte.",
      },
      {
        kind: "Nota",
        date: "Exemplo",
        title: "Nota extra",
        body: "Terceiro cartão para completar o teste das setas.",
      },
    ] satisfies NewsItem[],
  },
  en: {
    eyebrow: "Corevo",
    title: "Notes",
    intro: "Events, talks, and notes on Corevo’s work.",
    more: "See more",
    less: "See less",
    previous: "Previous notes",
    next: "Next notes",
    items: [
      {
        kind: "Talk",
        date: "Example",
        title: "A talk topic",
        body: "Room for the date, the place, and what was presented.",
      },
      {
        kind: "Event",
        date: "Example",
        title: "Taking part in an event",
        body: "Room for the event name and Corevo’s role.",
      },
      {
        kind: "Note",
        date: "Example",
        title: "A relevant update",
        body: "Room for a short note about the company or a product.",
      },
      {
        kind: "Talk",
        date: "Example",
        title: "Another talk",
        body: "A second record, shown when the rest of the notes open.",
      },
      {
        kind: "Event",
        date: "Example",
        title: "Another gathering",
        body: "Use this card when there is one more event to record.",
      },
      {
        kind: "Note",
        date: "Example",
        title: "A Corevo update",
        body: "A third item on the second row, in the same format.",
      },
      {
        kind: "Talk",
        date: "Example",
        title: "A conversation with the audience",
        body: "Shown with the arrows, after the first six notes.",
      },
      {
        kind: "Event",
        date: "Example",
        title: "The following gathering",
        body: "Second card on the next page.",
      },
      {
        kind: "Note",
        date: "Example",
        title: "An extra note",
        body: "Third card, so the arrows can be tried.",
      },
    ] satisfies NewsItem[],
  },
} as const;
