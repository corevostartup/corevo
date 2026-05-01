export type Project = {
  slug: string;
  name: string;
  tag: string;
  trend: string;
  logo?: string;
  logoTitle?: string;
  logoSubtitle?: string;
  iosIconStyle?: boolean;
  iconWithoutWhiteFrame?: boolean;
  disableLogoBlend?: boolean;
  appStoreUrl?: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  instagramUrl?: string;
  summary: string;
  description: string;
  highlights: string[];
  platforms: string[];
};

export const projects: Project[] = [
  {
    slug: "locus",
    name: "Locus",
    tag: "Imobiliario",
    trend: "+foco",
    logo: "/locus-logo.png",
    logoTitle: "Locus",
    logoSubtitle: "Plataforma imobiliaria",
    iosIconStyle: true,
    appStoreUrl: "https://apps.apple.com/br/app/locus-imob/id6759474553",
    websiteUrl: "https://locusimob.com",
    instagramUrl:
      "https://www.instagram.com/locusimob?igsh=cGV1eTVyemVvZzU3&utm_source=qr",
    summary: "Plataforma imobiliaria com foco em localizacao e preco.",
    description:
      "A Locus simplifica a descoberta de oportunidades imobiliarias com experiencia visual direta, filtros eficientes e tomada de decisao sem friccao.",
    highlights: [
      "Busca orientada por localizacao",
      "Comparacao de preco por regiao",
      "Experiencia limpa e objetiva",
    ],
    platforms: ["iOS"],
  },
  {
    slug: "pinee",
    name: "PINEE",
    tag: "Financas",
    trend: "+clareza",
    logo: "/pinee-logo.png",
    logoTitle: "PINEE",
    logoSubtitle: "Controle financeiro",
    iosIconStyle: true,
    iconWithoutWhiteFrame: true,
    disableLogoBlend: true,
    appStoreUrl: "https://apps.apple.com/br/app/pinee/id6751927815",
    summary: "Controle financeiro pessoal com abordagem pratica.",
    description:
      "O PINEE foi desenhado para transformar rotina financeira em habito simples: registrar, entender e evoluir com consistencia.",
    highlights: [
      "Visao rapida de entradas e saidas",
      "Organizacao de categorias e metas",
      "Acompanhamento de evolucao mensal",
    ],
    platforms: ["iOS"],
  },
  {
    slug: "pollen",
    name: "Pollen",
    tag: "Habitos",
    trend: "+consistencia",
    logo: "/pollen-logo.png",
    logoTitle: "Pollen",
    logoSubtitle: "Micro-habitos e evolucao diaria",
    iosIconStyle: true,
    iconWithoutWhiteFrame: true,
    disableLogoBlend: true,
    appStoreUrl:
      "https://apps.apple.com/br/app/pollen-h%C3%A1bitos-di%C3%A1rios/id6752633472",
    summary: "Sistema de micro-habitos para evolucao diaria.",
    description:
      "O Pollen transforma pequenas acoes em progresso continuo com reforcos visuais, ciclos de consistencia e foco em longo prazo.",
    highlights: [
      "Micro-acoes de baixa friccao",
      "Ritmo diario com feedback constante",
      "Progresso medido por consistencia",
    ],
    platforms: ["iOS"],
  },
  {
    slug: "petmemorial",
    name: "PetMemorial",
    tag: "Memorias",
    trend: "+significado",
    logo: "/petmemorial-logo.png",
    logoTitle: "PetMemorial",
    logoSubtitle: "Memorias e homenagens para pets",
    iosIconStyle: true,
    appStoreUrl: "https://apps.apple.com/br/app/petmemorial/id6757993280",
    summary: "Espaco digital para memorias e historias de pets.",
    description:
      "O PetMemorial oferece um ambiente sensivel e acolhedor para preservar lembrancas, homenagens e momentos especiais.",
    highlights: [
      "Timeline de memorias",
      "Registro de historias e fotos",
      "Experiencia emocional e leve",
    ],
    platforms: ["iOS"],
  },
  {
    slug: "lyka",
    name: "Lyka",
    tag: "Pets",
    trend: "+bem-estar",
    logo: "/lyka-logo.png",
    logoTitle: "Lyka",
    logoSubtitle: "Cuidado, monitoramento e bem-estar animal",
    iosIconStyle: true,
    iconWithoutWhiteFrame: true,
    disableLogoBlend: true,
    summary: "Cuidado, monitoramento e bem-estar animal.",
    description:
      "A Lyka conecta dados e rotina para apoiar tutores com acompanhamento continuo e pratico da saude e protecao dos animais.",
    highlights: [
      "Monitoramento de rotina",
      "Acompanhamento de cuidados",
      "Foco em prevencao e bem-estar",
    ],
    platforms: ["Em desenvolvimento"],
  },
  {
    slug: "julius-compras",
    name: "Julius Compras",
    tag: "Compras",
    trend: "+organizacao",
    summary: "Gestao inteligente de compras do dia a dia.",
    description:
      "O Julius Compras organiza listas, prioridades e recorrencias para facilitar decisoes rapidas em mercado e rotina domestica.",
    highlights: [
      "Listas compartilhaveis",
      "Priorizacao por necessidade",
      "Fluxo simples e funcional",
    ],
    platforms: ["Android"],
  },
  {
    slug: "brain2",
    name: "Brain2",
    tag: "Produtividade",
    trend: "+inteligencia",
    logo: "/brain2-logo.png",
    logoTitle: "Brain2",
    logoSubtitle: "Produtividade com inteligencia aplicada",
    iosIconStyle: true,
    iconWithoutWhiteFrame: true,
    disableLogoBlend: true,
    summary: "Sistema para organizar foco, tarefas e evolucao com clareza.",
    description:
      "O Brain2 centraliza organizacao pessoal e de trabalho em fluxos objetivos, transformando intencao em execucao consistente.",
    highlights: [
      "Gestao de foco e prioridades",
      "Fluxos simples de acompanhamento",
      "Clareza para decidir e agir",
    ],
    platforms: ["Em desenvolvimento"],
  },
  {
    slug: "comunicachat",
    name: "ComunicaChat",
    tag: "Comunicacao",
    trend: "+conexao",
    logoTitle: "ComunicaChat",
    logoSubtitle: "Comunicacao simples e objetiva",
    summary:
      "Plataforma de comunicacao para aproximar equipes e usuarios com fluidez.",
    description:
      "O ComunicaChat conecta pessoas em conversas diretas, com foco em clareza, velocidade e experiencia sem atrito no dia a dia.",
    highlights: [
      "Troca de mensagens em tempo real",
      "Experiencia intuitiva e funcional",
      "Fluxo pensado para engajamento continuo",
    ],
    platforms: ["Android", "iOS"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
