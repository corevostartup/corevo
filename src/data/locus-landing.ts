export type LocusListing = {
  id: string;
  title: string;
  place: string;
  price: string;
  detail: string;
};

export type LocusCopy = {
  eyebrow: string;
  wordmark: string;
  headline: string;
  lead: string;
  explore: string;
  visionCta: string;
  store: string;
  site: string;
  instagram: string;
  quote: string;
  problemKicker: string;
  problemTitle: string;
  problemBody: string;
  traditionalLabel: string;
  traditionalBody: string;
  locusLabel: string;
  locusBody: string;
  solutionKicker: string;
  solutionTitle: string;
  solutionBody: string;
  pillars: { title: string; body: string }[];
  productKicker: string;
  productTitle: string;
  productBody: string;
  moments: { title: string; body: string }[];
  demoTitle: string;
  demoNote: string;
  productProof: string;
  stage: string;
  audiencesKicker: string;
  audiencesTitle: string;
  seekerTitle: string;
  seeker: string[];
  advertiserTitle: string;
  advertiser: string[];
  audiencesNote: string;
  compareKicker: string;
  compareTitle: string;
  compareNote: string;
  compareTraditional: string;
  compareLocus: string;
  compareRows: { traditional: string; locus: string }[];
  marketKicker: string;
  marketTitle: string;
  marketBody: string;
  marketFacts: { label: string; body: string; source?: string; href?: string }[];
  modelKicker: string;
  modelTitle: string;
  modelBody: string;
  modelPaths: { title: string; body: string; tag?: string }[];
  growthKicker: string;
  growthTitle: string;
  growthBody: string;
  growthSteps: { title: string; body: string }[];
  cycleTitle: string;
  cycle: string[];
  techKicker: string;
  techTitle: string;
  techBody: string;
  techItems: string[];
  teamTitle: string;
  teamBody: string;
  visionKicker: string;
  visionTitle: string;
  visionBody: string;
  investKicker: string;
  investTitle: string;
  investBody: string;
  investCta: string;
  investApp: string;
  investSign: string;
  listings: LocusListing[];
};

const listingsPt: LocusListing[] = [
  {
    id: "orla",
    title: "Apartamento",
    place: "Orla",
    price: "R$ 1.240.000",
    detail: "2 quartos · vista",
  },
  {
    id: "reserva",
    title: "Casa",
    place: "Reserva",
    price: "R$ 2.890.000",
    detail: "4 quartos · jardim",
  },
  {
    id: "centro",
    title: "Studio",
    place: "Centro",
    price: "R$ 485.000",
    detail: "1 quarto · pronto",
  },
  {
    id: "vista",
    title: "Cobertura",
    place: "Alto",
    price: "R$ 3.150.000",
    detail: "3 suítes · terraço",
  },
];

export const locusCopy: Record<"pt" | "en", LocusCopy> = {
  pt: {
    eyebrow: "Proptech · Mercado imobiliário",
    wordmark: "locus",
    headline: "O mercado imobiliário começa pela localização.",
    lead: "Uma nova experiência para descobrir imóveis. Mais visual, mais intuitiva, mais direta.",
    explore: "Explore o Locus",
    visionCta: "Conheça nossa visão",
    store: "Apple Store",
    site: "Site",
    instagram: "Instagram",
    quote:
      "O mercado imobiliário sempre foi sobre localização. A experiência digital também deveria ser.",
    problemKicker: "O mercado atual",
    problemTitle: "Encontrar um imóvel não deveria ser tão complicado.",
    problemBody:
      "O mercado imobiliário evoluiu, mas a experiência digital de busca ainda apresenta excesso de informações, filtros complexos e anúncios que dificultam a descoberta. A pessoa não quer atravessar dezenas de páginas. Quer ver onde o imóvel está e quanto custa.",
    traditionalLabel: "Experiência tradicional",
    traditionalBody: "Excesso de informações, filtros e navegação fragmentada.",
    locusLabel: "Experiência Locus",
    locusBody: "Localização, preço e descoberta em uma experiência visual.",
    solutionKicker: "A solução",
    solutionTitle: "Uma nova perspectiva sobre a busca imobiliária.",
    solutionBody:
      "O Locus coloca o mapa no centro da experiência. Em vez de começar por uma lista interminável de anúncios, a pessoa vê os imóveis onde eles estão, explora o que existe por perto e chega ao essencial.",
    pillars: [
      {
        title: "Mapa como ponto de partida",
        body: "Visualize os imóveis onde realmente estão. Descubra oportunidades pela localização.",
      },
      {
        title: "O essencial em destaque",
        body: "Localização, preço e o que importa para decidir, sem distrações no caminho.",
      },
      {
        title: "Contato direto",
        body: "Salve favoritos e fale com proprietários, corretores e imobiliárias pelo WhatsApp.",
      },
    ],
    productKicker: "O produto",
    productTitle: "Menos navegação. Mais descoberta.",
    productBody:
      "O aplicativo já está no ar para iOS. A sequência abaixo é o caminho que a pessoa percorre: do mapa ao contato.",
    moments: [
      {
        title: "Mapa",
        body: "Os imóveis aparecem onde estão, não numa lista sem lugar.",
      },
      {
        title: "Detalhe",
        body: "Preço, localização e o que é preciso para seguir ou descartar.",
      },
      {
        title: "Fotografias",
        body: "A leitura do imóvel continua visual, sem perder o contexto do mapa.",
      },
      {
        title: "Favoritos e WhatsApp",
        body: "A comparação fica com a pessoa. O contato, com quem anuncia.",
      },
    ],
    demoTitle: "Toque um ponto no mapa",
    demoNote:
      "Imóveis ilustrativos. A interação mostra o princípio do produto — mapa, preço e lugar — e não o inventário publicado no aplicativo.",
    productProof: "O aplicativo, no lugar em que a descoberta acontece.",
    stage:
      "Produto em operação na App Store. Volume de imóveis, parceiros, cidades e contatos entra na página quando a base for consistente.",
    audiencesKicker: "Dois lados",
    audiencesTitle: "Dois públicos. Uma plataforma.",
    seekerTitle: "Para quem procura",
    seeker: [
      "Busca visual e intuitiva",
      "Imóveis organizados por localização",
      "Informações essenciais em destaque",
      "Favoritos para comparar",
      "Contato direto pelo WhatsApp",
    ],
    advertiserTitle: "Para quem anuncia",
    advertiser: [
      "Mais um canal de divulgação",
      "Apresentação visual valorizada",
      "Ambiente sofisticado",
      "Contato com potenciais interessados",
      "Complemento aos canais próprios",
    ],
    audiencesNote:
      "O Locus não substitui corretores e imobiliárias. Amplia as possibilidades de conexão entre imóveis e pessoas.",
    compareKicker: "Posicionamento",
    compareTitle: "Outra lógica de descoberta.",
    compareNote:
      "A tabela descreve a experiência que o Locus propõe. Não é um julgamento absoluto sobre cada portal do mercado.",
    compareTraditional: "Experiência tradicional",
    compareLocus: "Locus",
    compareRows: [
      { traditional: "Busca baseada em listas", locus: "Busca baseada em mapa" },
      { traditional: "Muitos filtros", locus: "Foco no essencial" },
      { traditional: "Navegação fragmentada", locus: "Descoberta visual" },
      { traditional: "Excesso de informações", locus: "Informação objetiva" },
      { traditional: "Anúncios genéricos", locus: "Apresentação valorizada" },
    ],
    marketKicker: "Oportunidade",
    marketTitle: "Um mercado tradicional. Uma oportunidade de transformação.",
    marketBody:
      "O mercado imobiliário é um dos maiores setores da economia e ainda concentra a descoberta digital em portais de lista. As proptechs estão mudando como imóveis são anunciados, encontrados e negociados. O Locus nasce nessa camada: localização, preço e uma experiência mais direta para quem procura e para quem anuncia.",
    marketFacts: [
      {
        label: "Ritmo do setor",
        body: "Em 2024, os lançamentos medidos pela ABRAINC com a Fipe subiram 24,4% em valor e as vendas, 16,5% — o maior patamar da série desde 2014. É o ritmo da incorporação, não o tamanho do Locus.",
        source: "Relatório Anual ABRAINC 2024",
        href: "https://www.abrainc.org.br/uploads/2025/4/Relatorio_ABRAINC_2024_digital.pdf",
      },
      {
        label: "Camada digital",
        body: "O anúncio digital de imóveis já sustenta operações de grande porte no Brasil. O Grupo OLX reportou R$ 1 bilhão de faturamento ao fim de 2023, com cerca de metade vinda da frente imobiliária. Contexto de mercado, não meta do Locus.",
        source: "Exame",
        href: "https://exame.com/mercado-imobiliario/vamos-crescer-diferente-como-a-olx-mira-triplicar-faturamento-de-r-1-bi-em-5-anos/",
      },
      {
        label: "Dimensionamento do Locus",
        body: "TAM, SAM e SOM ficam de fora até o recorte estar fechado com fonte primária. Poucos dados com lastro valem mais do que uma estimativa sem sustentação.",
      },
    ],
    modelKicker: "Modelo",
    modelTitle: "Uma plataforma construída para gerar valor.",
    modelBody:
      "O primeiro movimento é conquistar anunciantes, formar inventário e criar demanda. A receita acompanha essa base. A hipótese principal é assinatura, com serviços ao redor — não um catálogo de cobranças no primeiro dia.",
    modelPaths: [
      {
        title: "Assinaturas para anunciantes",
        body: "Planos recorrentes para corretores e imobiliárias, com limites e recursos de divulgação.",
        tag: "Hipótese principal",
      },
      {
        title: "Destaque de imóveis",
        body: "Mais visibilidade e posição privilegiada dentro da plataforma.",
      },
      {
        title: "Planos profissionais",
        body: "Recursos para imobiliárias, equipes e quem publica em volume.",
      },
      {
        title: "Expansão de serviços",
        body: "Novas ferramentas para o ecossistema, quando o uso justificar.",
      },
    ],
    growthKicker: "Crescimento",
    growthTitle: "Crescimento baseado em conexões.",
    growthBody:
      "Uma plataforma imobiliária precisa dos dois lados ao mesmo tempo: imóveis anunciados e pessoas procurando. A expansão replica o que funcionar numa praça, em vez de abrir o mapa inteiro de uma vez.",
    growthSteps: [
      {
        title: "Entrada no mercado",
        body: "Aproximação com corretores e imobiliárias estratégicas, com barreira baixa de adesão.",
      },
      {
        title: "Inventário",
        body: "Uma base consistente de imóveis relevantes e bem apresentados.",
      },
      {
        title: "Pessoas procurando",
        body: "Presença regional, campanhas e o hábito de descobrir e compartilhar imóveis.",
      },
      {
        title: "Novas praças",
        body: "A mesma lógica em outros mercados, quando a primeira estiver de pé.",
      },
    ],
    cycleTitle: "O ciclo de crescimento",
    cycle: [
      "Mais corretores e imobiliárias",
      "Mais imóveis disponíveis",
      "Mais pessoas interessadas",
      "Mais oportunidades para quem anuncia",
    ],
    techKicker: "Execução",
    techTitle: "Produto no ar. Arquitetura pronta para crescer.",
    techBody:
      "Investir no Locus é investir num produto que já existe e numa equipe que o opera. A base combina mapa, mobile e contato direto, sem depender de uma promessa de plataforma futura.",
    techItems: [
      "Geolocalização e visualização cartográfica",
      "Experiência mobile-first",
      "Organização de imóveis em torno do lugar e do preço",
      "Conexão direta entre quem procura e quem anuncia",
      "Base preparada para evoluir com o uso",
    ],
    teamTitle: "COREVO",
    teamBody:
      "O Locus é um produto da COREVO. A startup desenha, desenvolve e opera o próprio software — e é quem constrói esta plataforma.",
    visionKicker: "Visão",
    visionTitle: "Mais do que encontrar imóveis. Transformar a descoberta imobiliária.",
    visionBody:
      "A visão é uma plataforma de referência na descoberta de imóveis, conectando pessoas, profissionais e oportunidades. O começo é simples: localização, preço e objetividade. O produto cresce com o que o mercado validar — sem antecipar função que ainda não existe.",
    investKicker: "Locus · Proptech",
    investTitle: "Uma nova forma de encontrar imóveis. Uma nova oportunidade de mercado.",
    investBody:
      "Estamos construindo uma experiência imobiliária mais simples, visual e ligada ao lugar. Se quiser conhecer o projeto, a visão de negócio e as conversas de parceria e investimento, fale com a equipe.",
    investCta: "Converse com nossa equipe",
    investApp: "Abrir o aplicativo",
    investSign: "COREVO · Tecnologia e inovação",
    listings: listingsPt,
  },
  en: {
    eyebrow: "Proptech · Real estate",
    wordmark: "locus",
    headline: "Real estate starts with location.",
    lead: "A new way to discover properties. More visual, more intuitive, more direct.",
    explore: "Explore Locus",
    visionCta: "See the vision",
    store: "App Store",
    site: "Website",
    instagram: "Instagram",
    quote: "Real estate has always been about location. The digital experience should be too.",
    problemKicker: "The market today",
    problemTitle: "Finding a property should not be this complicated.",
    problemBody:
      "Real estate moved forward. The digital search experience often did not. Too much information, heavy filters, and listings that get in the way of discovery. People do not want dozens of pages. They want to see where a property is and what it costs.",
    traditionalLabel: "Traditional experience",
    traditionalBody: "Too much information, filters, and fragmented navigation.",
    locusLabel: "Locus experience",
    locusBody: "Location, price, and discovery in one visual experience.",
    solutionKicker: "The solution",
    solutionTitle: "A new perspective on property search.",
    solutionBody:
      "Locus puts the map at the center. Instead of starting from an endless list, people see properties where they actually are, explore what is nearby, and reach what matters.",
    pillars: [
      {
        title: "The map comes first",
        body: "See properties where they really are. Discover opportunities by location.",
      },
      {
        title: "The essentials, up front",
        body: "Location, price, and what it takes to decide, without noise along the way.",
      },
      {
        title: "Direct contact",
        body: "Save favorites and reach owners, brokers, and agencies on WhatsApp.",
      },
    ],
    productKicker: "The product",
    productTitle: "Less browsing. More discovery.",
    productBody:
      "The app is live on iOS. The path below is what a person actually does: from the map to a conversation.",
    moments: [
      {
        title: "Map",
        body: "Properties show up where they are, not in a list without a place.",
      },
      {
        title: "Detail",
        body: "Price, location, and enough to continue or move on.",
      },
      {
        title: "Photographs",
        body: "The property stays visual, without losing the map.",
      },
      {
        title: "Favorites and WhatsApp",
        body: "Comparison stays with the person. Contact stays with the advertiser.",
      },
    ],
    demoTitle: "Tap a point on the map",
    demoNote:
      "Illustrative properties. The interaction shows the product principle — map, price, and place — not the live inventory in the app.",
    productProof: "The app, in the setting where discovery happens.",
    stage:
      "The product is live on the App Store. Inventory, partners, cities, and contacts will be published when the base is consistent.",
    audiencesKicker: "Both sides",
    audiencesTitle: "Two audiences. One platform.",
    seekerTitle: "For people searching",
    seeker: [
      "Visual, intuitive search",
      "Properties organized by location",
      "Essential information up front",
      "Favorites to compare",
      "Direct contact on WhatsApp",
    ],
    advertiserTitle: "For people listing",
    advertiser: [
      "Another channel for exposure",
      "A presentation that values the property",
      "A refined environment",
      "Contact with interested people",
      "A complement to their own channels",
    ],
    audiencesNote:
      "Locus does not replace brokers and agencies. It widens the ways properties and people can meet.",
    compareKicker: "Positioning",
    compareTitle: "A different logic of discovery.",
    compareNote:
      "The table describes the experience Locus is built for. It is not an absolute judgment of every portal in the market.",
    compareTraditional: "Traditional experience",
    compareLocus: "Locus",
    compareRows: [
      { traditional: "List-based search", locus: "Map-based search" },
      { traditional: "Many filters", locus: "Focus on the essentials" },
      { traditional: "Fragmented navigation", locus: "Visual discovery" },
      { traditional: "Too much information", locus: "Objective information" },
      { traditional: "Generic listings", locus: "A valued presentation" },
    ],
    marketKicker: "Opportunity",
    marketTitle: "A traditional market. A chance to change how people look.",
    marketBody:
      "Real estate is one of the largest sectors in the economy, and digital discovery still concentrates on list-based portals. Proptechs are changing how properties are listed, found, and negotiated. Locus sits in that layer: location, price, and a more direct experience for people searching and people listing.",
    marketFacts: [
      {
        label: "Sector pace",
        body: "In 2024, launches measured by ABRAINC with Fipe rose 24.4% in value and sales rose 16.5% — the highest level in the series since 2014. That is the pace of new development, not the size of Locus.",
        source: "ABRAINC Annual Report 2024",
        href: "https://www.abrainc.org.br/uploads/2025/4/Relatorio_ABRAINC_2024_digital.pdf",
      },
      {
        label: "Digital layer",
        body: "Digital property advertising already supports large businesses in Brazil. Grupo OLX reported R$ 1 billion in revenue at the end of 2023, with about half coming from real estate. Market context, not a Locus target.",
        source: "Exame",
        href: "https://exame.com/mercado-imobiliario/vamos-crescer-diferente-como-a-olx-mira-triplicar-faturamento-de-r-1-bi-em-5-anos/",
      },
      {
        label: "Locus sizing",
        body: "TAM, SAM, and SOM stay out until the cut is closed with a primary source. A few grounded figures are worth more than an estimate with nothing behind it.",
      },
    ],
    modelKicker: "Model",
    modelTitle: "A platform built to create value.",
    modelBody:
      "The first move is to win advertisers, build inventory, and create demand. Revenue follows that base. The leading hypothesis is subscription, with services around it — not a catalog of charges on day one.",
    modelPaths: [
      {
        title: "Subscriptions for advertisers",
        body: "Recurring plans for brokers and agencies, with limits and distribution features.",
        tag: "Leading hypothesis",
      },
      {
        title: "Featured properties",
        body: "More visibility and a privileged position inside the platform.",
      },
      {
        title: "Professional plans",
        body: "Tools for agencies, teams, and people who publish at volume.",
      },
      {
        title: "Further services",
        body: "New tools for the ecosystem, once usage justifies them.",
      },
    ],
    growthKicker: "Growth",
    growthTitle: "Growth built on connections.",
    growthBody:
      "A property platform needs both sides at once: listed properties and people searching. Expansion repeats what works in one market instead of opening the whole map at once.",
    growthSteps: [
      {
        title: "Market entry",
        body: "Work with strategic brokers and agencies, and keep the first step easy.",
      },
      {
        title: "Inventory",
        body: "A consistent base of relevant, well-presented properties.",
      },
      {
        title: "People searching",
        body: "Regional presence, campaigns, and the habit of discovering and sharing properties.",
      },
      {
        title: "New markets",
        body: "The same logic elsewhere, once the first market is standing.",
      },
    ],
    cycleTitle: "The growth cycle",
    cycle: [
      "More brokers and agencies",
      "More properties available",
      "More interested people",
      "More opportunities for advertisers",
    ],
    techKicker: "Execution",
    techTitle: "A live product. A base ready to grow.",
    techBody:
      "Backing Locus means backing a product that already exists and a team that runs it. The base combines map, mobile, and direct contact — not a promise of a future platform.",
    techItems: [
      "Geolocation and map visualization",
      "A mobile-first experience",
      "Properties organized around place and price",
      "A direct line between people searching and people listing",
      "A base ready to evolve with use",
    ],
    teamTitle: "COREVO",
    teamBody:
      "Locus is a COREVO product. The startup designs, builds, and operates its own software — and it is the team building this platform.",
    visionKicker: "Vision",
    visionTitle: "More than finding properties. Changing how discovery works.",
    visionBody:
      "The vision is a reference platform for property discovery, connecting people, professionals, and opportunities. The start is simple: location, price, and clarity. The product grows with what the market validates — without announcing a feature that does not exist yet.",
    investKicker: "Locus · Proptech",
    investTitle: "A new way to find properties. A new market opportunity.",
    investBody:
      "We are building a simpler, visual real estate experience tied to place. If you want the project, the business view, and a conversation about partnership or investment, talk to the team.",
    investCta: "Talk to the team",
    investApp: "Open the app",
    investSign: "COREVO · Technology and innovation",
    listings: [
      {
        id: "orla",
        title: "Apartment",
        place: "Waterfront",
        price: "R$ 1,240,000",
        detail: "2 bedrooms · view",
      },
      {
        id: "reserva",
        title: "House",
        place: "Reserve",
        price: "R$ 2,890,000",
        detail: "4 bedrooms · garden",
      },
      {
        id: "centro",
        title: "Studio",
        place: "Center",
        price: "R$ 485,000",
        detail: "1 bedroom · ready",
      },
      {
        id: "vista",
        title: "Penthouse",
        place: "Heights",
        price: "R$ 3,150,000",
        detail: "3 suites · terrace",
      },
    ],
  },
};
