export const BRAND = {
  name: "Orah Tech and Marketing",
  domain: "orahtechandmarketing.com",
  tagline: "Where Technology Meets Growth",
  colors: {
    primary: "#0A0F2C",
    accent: "#FF5C1A",
    cyan: "#00D4FF",
    bg: "#050A18",
  },
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOME = {
  hero: {
    headline: "We Build Tech. We Drive Growth.",
    subtext:
      "Orah Tech and Marketing is a full-service digital agency helping ambitious brands scale with AI-powered marketing, performance campaigns, and custom technology solutions.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "See Our Work",
    ticker: ["500+ Campaigns", "98% Client Retention", "₹10Cr+ Revenue Generated"],
  },
  marquee: [
    "SEO",
    "Performance Marketing",
    "Web Development",
    "AI Automation",
    "Social Media",
    "Branding",
    "Content Marketing",
    "Email Marketing",
  ],
  services: {
    title: "Services built for growth—engineered for performance.",
    subtitle:
      "From acquisition to automation, we blend strategy + execution so your marketing compounds month after month.",
    items: [
      {
        title: "Performance Marketing",
        desc: "Google, Meta & programmatic campaigns focused on ROAS.",
        icon: "rocket",
        bullets: [
          "Full-funnel campaigns across Search, Shopping, Meta, and programmatic",
          "Creative testing frameworks + landing-page aligned messaging",
          "Conversion tracking, attribution sanity checks, weekly optimisation",
          "Transparent reporting tied to CAC, ROAS, and revenue impact",
        ],
      },
      {
        title: "SEO & Content",
        desc: "Rank higher, get found faster.",
        icon: "search",
        bullets: [
          "Technical SEO audits, on-page fixes, and schema where it matters",
          "Topic clusters + content strategy aligned to pipeline",
          "Content production with briefs, review loops, and QA",
          "Monthly reporting on rankings, traffic quality, and conversions",
        ],
      },
      {
        title: "Web & App Development",
        desc: "Fast, scalable, conversion-optimised experiences.",
        icon: "code",
        bullets: [
          "Next.js websites built for speed, SEO, and conversion",
          "Landing pages that match ad intent and improve ROAS",
          "Performance improvements (Core Web Vitals) and technical cleanup",
          "Integrations: analytics, forms, CRM, payment, and automation tools",
        ],
      },
      {
        title: "AI Marketing Automation",
        desc: "Workflows that work while you sleep.",
        icon: "spark",
        bullets: [
          "Lead capture → enrichment → routing automations",
          "Reporting pipelines to reduce manual work and improve decisions",
          "AI-assisted content ops: briefs, variants, repurposing",
          "Chat/support automations with safe guardrails",
        ],
      },
      {
        title: "Social Media Management",
        desc: "Content, community & growth—consistent and on brand.",
        icon: "social",
        bullets: [
          "Content strategy, calendars, and creative systems",
          "Reels/shorts-driven distribution with performance learnings",
          "Community management and response playbooks",
          "Monthly review of reach, engagement, and lead contribution",
        ],
      },
      {
        title: "Branding & Design",
        desc: "Identity systems that command attention.",
        icon: "palette",
        bullets: [
          "Brand positioning, messaging, and visual direction",
          "Design systems for web, social, and marketing assets",
          "High-impact landing page and ad creative design",
          "Guidelines so teams stay consistent as you scale",
        ],
      },
    ],
  },
  why: {
    title: "Why Orah",
    blurb:
      "We're not a vendor. We're your growth partner — combining strategic thinking with technical execution to deliver results that compound.",
    metrics: [
      { value: "₹50Cr+", label: "Ad Spend Managed" },
      { value: "200+", label: "Brands Grown" },
      { value: "12+", label: "Industries Served" },
    ],
  },
  industries: [
    "E-commerce",
    "SaaS",
    "Healthcare",
    "Real Estate",
    "D2C",
    "Education",
    "Fintech",
    "Hospitality",
  ],
  testimonials: [
    {
      quote:
        "Their performance campaigns scaled our leads without burning budget. Clear reporting, fast iterations, real results.",
      name: "Aditi Sharma",
      company: "D2C Skincare Brand",
    },
    {
      quote:
        "Orah rebuilt our website and improved conversions immediately. The team feels like an extension of our business.",
      name: "Rahul Mehta",
      company: "B2B SaaS Founder",
    },
    {
      quote:
        "From SEO strategy to content execution, everything is data-led. Our rankings and inbound pipeline both grew steadily.",
      name: "Priya Nair",
      company: "Healthcare Services",
    },
  ],
  process: [
    {
      title: "Discovery & Audit",
      desc: "Deep dive into your funnel, analytics, and competitors.",
    },
    {
      title: "Strategy & Planning",
      desc: "Clear roadmap with channels, KPIs, and timelines.",
    },
    {
      title: "Execution",
      desc: "Design, dev, creatives, and campaigns—built to ship fast.",
    },
    {
      title: "Optimise & Scale",
      desc: "Weekly optimisation, experiments, and performance sprints.",
    },
  ],
  cta: {
    title: "Ready to Grow?",
    subtitle: "Book a free strategy call and get a quick-win plan for the next 30 days.",
    button: "Book a Free Strategy Call",
  },
  footer: {
    quickLinks: ["Services", "About", "Work", "Contact"],
    contact: {
      email: "hello@orahtechandmarketing.com",
      phone: "+91 90000 00000",
      city: "India",
    },
  },
} as const;

