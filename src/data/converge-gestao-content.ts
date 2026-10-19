type ConvergeSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const convergeGestaoMeta = {
  title: "Converge Gestão | Plataforma para entidades e associações | Corevo",
  description:
    "Site, sistema administrativo e app integrados para associações, CDLs e sindicatos. Eventos, pagamentos, credenciamento e certificados num só lugar.",
};

export const convergeGestaoSections: ConvergeSection[] = [
  {
    title: "O problema",
    paragraphs: [
      "Associações, sindicatos, CDLs, câmaras e federações costumam operar com site desatualizado, planilhas soltas e eventos montados no improviso.",
      "O resultado é uma equipe enxuta gastando tempo em tarefa operacional, em vez de gerar valor para o associado.",
    ],
    bullets: [
      "Site difícil de editar sem chamar um técnico",
      "Planilhas soltas para associados, inscrições, contratos e finanças",
      "Formulário, pagamento, lista de presença e certificado em ferramentas separadas",
      "Pouca visibilidade do retorno entregue aos associados",
      "Ferramentas pagas que não conversam entre si",
    ],
  },
  {
    title: "A solução",
    paragraphs: [
      "Converge Gestão junta site institucional, painel administrativo, app e integrações numa plataforma única. Um login, uma base de dados, uma equipe no controle.",
    ],
    bullets: [
      "Site institucional: portal público moderno, rápido e editável pelo administrador",
      "Sistema administrativo: conteúdo, associados, eventos, finanças e serviços",
      "App: experiência mobile para associados e participantes, com check-in no celular",
      "Integrações: pagamentos online, e-mail transacional e emissão de documentos",
    ],
  },
  {
    title: "Como funciona",
    paragraphs: [
      "Site público divulga; inscrição e interação capturam o associado; o painel administrativo concentra a gestão; relatórios, certificados e receita fecham o ciclo.",
    ],
    bullets: [
      "A entidade publica conteúdo, eventos e serviços no site",
      "O associado ou participante se inscreve, paga e acessa o que precisa",
      "A equipe acompanha tudo em tempo real no painel",
      "A plataforma automatiza confirmações, credenciamento e certificados",
    ],
  },
  {
    title: "Comunicação e presença digital",
    bullets: [
      "Site institucional com páginas sobre a entidade, diretoria e história",
      "Notícias e informativos com links e anexos",
      "Histórias e cases dos associados",
      "Página da cidade e da região",
      "Mensagens e contato com o público",
      "Botão de WhatsApp configurável",
    ],
  },
  {
    title: "Eventos: do anúncio ao certificado",
    paragraphs: [
      "Ciclo completo do evento sem trocar de sistema. O que antes levava dias de trabalho manual vira alguns cliques.",
    ],
    bullets: [
      "Landing page do evento com programação, palestrantes e patrocinadores",
      "Inscrição online com formulário configurável e limite de vagas",
      "Pagamento integrado: PIX, boleto e cartão de crédito",
      "Vouchers de desconto e preço diferenciado para associados",
      "Credenciamento por QR Code na portaria, com link público para recepção",
      "Etiquetas em PDF prontas para impressão",
      "Certificados em PDF com identidade visual da entidade",
      "Envio de certificados por e-mail em lote, com reenvio",
    ],
  },
  {
    title: "Gestão e serviços",
    bullets: [
      "Associados: base cadastral e verificação por CNPJ",
      "Benefícios: vitrine de vantagens e parcerias",
      "Soluções para empresas: catálogo de serviços da entidade",
      "Vagas de emprego: publicação e moderação",
      "Banco de currículos: recebimento e gestão de candidatos",
      "Auditório e agendamentos: reserva de espaços",
      "Contratos: gestão documental",
      "Livro caixa: controle financeiro de entradas e saídas",
    ],
  },
  {
    title: "App e mobilidade",
    bullets: [
      "Acesso do associado e do participante pelo celular",
      "Check-in do inscrito no app com QR Code de credenciamento",
      "Credenciamento móvel para a equipe na entrada do evento",
      "Experiência integrada ao site e ao painel, sem cadastro duplicado",
    ],
  },
  {
    title: "Diferenciais",
    bullets: [
      "Site, sistema e app integrados, frente a ferramentas avulsas desconectadas",
      "Evento completo da inscrição ao certificado, não apenas partes do fluxo",
      "Pagamento online nativo, sem integração extra obrigatória",
      "Certificados automáticos por e-mail, em vez de processo manual",
      "Administração pelo próprio time, sem depender de técnico no dia a dia",
      "Produto pensado para entidades e associações, não genérico",
      "Segurança desde a concepção: credenciais protegidas no servidor, acesso autenticado e regras por perfil",
    ],
  },
  {
    title: "Público-alvo",
    paragraphs: [
      "Perfil ideal: entidades com associados, agenda de eventos e equipe administrativa enxuta.",
    ],
    bullets: [
      "Câmaras de Dirigentes Lojistas (CDLs)",
      "Associações comerciais e empresariais",
      "Sindicatos patronais e laborais",
      "Federações e confederações",
      "Conselhos e entidades de classe",
      "Associações culturais, esportivas e comunitárias",
    ],
  },
  {
    title: "Case: CDL Paulo Afonso (BA)",
    paragraphs: [
      "Plataforma em produção com site institucional, painel administrativo e app em operação. Eventos com inscrição, pagamento online, credenciamento por QR Code e certificados.",
      "Exemplo em operação: evento Cenários e Tendências 2026, do anúncio ao envio de certificados.",
      "Indicadores de resultado podem ser publicados conforme autorização da entidade: inscrições processadas, participantes credenciados, certificados emitidos e ganho de eficiência operacional.",
    ],
  },
  {
    title: "Modelo de negócio",
    paragraphs: [
      "SaaS por assinatura, com implantação dedicada. Taxas de pagamento repassadas conforme o gateway. Valores sob consulta.",
    ],
    bullets: [
      "Essencial: site, painel, notícias e informativos (entidades pequenas)",
      "Profissional: Essencial mais eventos, pagamentos, credenciamento e certificados",
      "Completo: Profissional mais app, gestão financeira, contratos e módulos avançados",
      "Implantação: configuração, identidade visual e migração de conteúdo",
    ],
  },
  {
    title: "Roadmap",
    bullets: [
      "Disponível hoje: site, painel, eventos completos, pagamentos, credenciamento e certificados por e-mail",
      "Próximos passos: painel de indicadores para a diretoria",
      "Próximos passos: gestão de mensalidades dos associados",
      "Próximos passos: multi-entidade para federações e filiadas",
      "Próximos passos: comunicação segmentada por e-mail e WhatsApp",
      "Próximos passos: área do associado com histórico de eventos e certificados",
    ],
  },
  {
    title: "Sobre a Corevo",
    paragraphs: [
      "A Corevo é a startup responsável pelo desenvolvimento do Converge Gestão, com foco em transformação digital para entidades e associações, produto validado em operação real e implantação acompanhada.",
    ],
  },
  {
    title: "Demonstração",
    paragraphs: [
      "Leve sua entidade para o próximo nível. Agende uma demonstração do Converge Gestão pelo contato no site da Corevo.",
    ],
  },
];
