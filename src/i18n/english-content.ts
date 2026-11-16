import type { SiteContent } from "@/lib/site-content";

const english: Omit<SiteContent, "news"> = {
  hero: {
    image: "",
    eyebrow: "Technology · apps and platforms",
    titleBefore: "Digital products: from the ",
    titleAccent: "mobile app",
    titleAfter: " to the operations dashboard.",
    description:
      "Corevo is a technology startup that builds and runs its own software — including Locus, PINEE, and Converge — and delivers custom projects aligned with how the client operates. Our solutions cover mobile, desktop, and web, with clear interfaces and consistent flows designed for everyday use by teams and end users.",
    ctaLabel: "View projects",
    ctaHref: "#projetos",
  },
  trust: {
    label: "Corevo portfolio",
    stat1Value: "4",
    stat1Label: "apps on the App Store",
    stat2Value: "1",
    stat2Label: "full platform in production",
    stat3Value: "Mobile · Web · Dashboard",
    stat3Label: "typical delivery scope",
    note: "Our own software and custom projects — from the app to the dashboard that runs the operation.",
  },
  benefits: {
    title: "Why Corevo?",
    intro:
      "We build apps and platforms for real operations: software teams can use and maintain after launch.",
    items: [
      {
        title: "Everyday usability",
        desc: "Clear interfaces and direct flows for people who use the system often — the team or the end customer.",
      },
      {
        title: "Performance and stability",
        desc: "Fast applications and an architecture that can grow in users and data without losing reliability.",
      },
      {
        title: "Integrated systems",
        desc: "Website, admin dashboard, and mobile in the same project when needed — one base, less rework, and less scattered data.",
      },
      {
        title: "From idea to release",
        desc: "Discovery, development, and production with a defined scope, agreed timelines, and a published delivery.",
      },
    ],
  },
  method: {
    title: "Our method",
    intro: "A simple, fast, and consistent way to go from idea to product — without losing the point along the way.",
    ctaLabel: "Create with Corevo",
    ctaHref: "#contato",
    steps: [
      {
        title: "Align the vision",
        desc: "We understand the problem, the audience, and the expected outcome — technology in service of a purpose.",
      },
      {
        title: "Prototype and validate",
        desc: "Short cycles: MVP, feedback, iteration. Less assumption, more evidence.",
      },
      {
        title: "Launch and evolve",
        desc: "Product live, clear metrics, and a continuous roadmap to scale with confidence.",
      },
    ],
  },
  essence: {
    title: "Our essence",
    body: "We are a software startup: we build apps and platforms for companies and organizations that need to organize operations, service, and digital presence — with a published delivery and follow-up after launch.",
    points: [
      "Understand the client's process before defining scope",
      "Build mobile, web, and an admin dashboard when it makes sense",
      "Publish, measure, and evolve — not deliver and disappear",
    ],
    highlight: "Software that is useful in the team's day to day — that is the standard.",
    philosophyTitle: "Philosophy",
    philosophyBody:
      "Corevo's philosophy is based on building solutions that connect technology, people, and business in a practical, scalable way, focused on real impact and without unnecessary complexity.",
    principles: [
      {
        title: "1. Strategic simplicity",
        desc: "Create direct, intuitive, and efficient products, removing the excess and focusing on what actually creates value.",
      },
      {
        title: "2. Accelerated execution with intelligence",
        desc: "Turn ideas into real solutions quickly, using technology and AI to validate, launch, and evolve products at high speed.",
      },
    ],
  },
  testimonials: {
    title: "Who has already evolved with us",
    intro: "A growing community that chooses purpose, reliable delivery, and premium design.",
    items: [
      {
        quote:
          "Corevo delivers product with clarity and pace. From strategy to launch, the communication was direct and the result better than expected.",
        name: "Marina V.",
        role: "Product Lead",
        org: "Services scale-up",
      },
      {
        quote:
          "Less talk, more execution. The team understands business and technology — that shortens the path from idea to an app in the stores.",
        name: "Ricardo T.",
        role: "Founder",
        org: "Healthtech",
      },
      {
        quote:
          "Clean design, solid performance, and a long-term view. Exactly the partner we wanted to evolve our digital ecosystem.",
        name: "Ana L.",
        role: "CMO",
        org: "Digital retail",
      },
    ],
  },
  contact: {
    title: "Talk to Corevo",
    intro:
      "Tell us what you need. We reply with a clear next step — no generic package and no fixed price table on the site.",
    footnote:
      "Every path leads to the contact below. Choose the subject and the email you prefer — commercial or support.",
    cards: [
      {
        name: "Custom project",
        desc: "You need an app, website, or dashboard for the company's operation.",
        points: [
          "Share the context and the process you want to digitize",
          "We align scope, timeline, and how it will be delivered",
          "Development with follow-up through publication",
        ],
        cta: "Start a conversation",
      },
      {
        name: "Platform for an organization",
        desc: "Association, chamber, union, or organization with members and events.",
        points: [
          "Website, dashboard, and mobile integrated",
          "Events, registrations, payments, and check-in",
          "A demo of what we already run in production",
        ],
        cta: "Book a demo",
      },
      {
        name: "Our products",
        desc: "Questions about portfolio apps, partnerships, or user support.",
        points: [
          "Information about published apps",
          "A channel for support and feedback",
          "Commercial partnership opportunities",
        ],
        cta: "Send a message",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    intro: "From positioning to day-to-day work — what you need to know before evolving with Corevo.",
    items: [
      {
        q: "What is Corevo?",
        a: "We are a technology startup focused on connecting intelligence, people, and business. We create digital ecosystems with purpose — not just screens, but products that solve real problems.",
      },
      {
        q: "Which technologies do you use?",
        a: "We work with a modern stack: React, Next.js, native and hybrid mobile platforms, well-defined APIs, and infrastructure ready to scale. The choice always fits the product and the time to market.",
      },
      {
        q: "Do you only build apps?",
        a: "Apps are part of what we do, but our scope includes product strategy, integrations, backends, and complete web experiences — always focused on value and simplicity.",
      },
      {
        q: "How does hiring work?",
        a: "We start with an alignment conversation, move to a clear proposal with scope and investment, and then run delivery cycles with transparent progress.",
      },
      {
        q: "Do you work outside Brazil?",
        a: "Yes. We work with remote teams and international partners. Project language: Portuguese or English, as needed.",
      },
      {
        q: "How do I reach support?",
        a: "For projects and partnerships: corevostartup@gmail.com. For product support: supportcorevo@gmail.com.",
      },
    ],
  },
  cta: {
    title: "Ready to evolve with purpose?",
    body: "Real innovation happens when different talents connect around one goal. Let's talk.",
    primaryLabel: "corevostartup@gmail.com",
    primaryHref: "mailto:corevostartup@gmail.com",
    secondaryLabel: "Support: supportcorevo@gmail.com",
    secondaryHref: "mailto:supportcorevo@gmail.com",
  },
  footer: {
    blurb: "Secure, fast, and consistent. Corevo makes digital evolution objective — with purpose and engineering.",
  },
};

export function localizeContent(content: SiteContent, locale: "pt" | "en"): SiteContent {
  if (locale === "pt") return content;
  return {
    ...english,
    hero: { ...english.hero, image: content.hero.image, ctaHref: content.hero.ctaHref },
    method: { ...english.method, ctaHref: content.method.ctaHref },
    cta: {
      ...english.cta,
      primaryHref: content.cta.primaryHref,
      secondaryHref: content.cta.secondaryHref,
      primaryLabel: content.cta.primaryLabel,
      secondaryLabel: content.cta.secondaryLabel.replace(/^Suporte:/, "Support:"),
    },
    news: content.news,
  };
}
