export const AI_WORKBENCH = {
  url: "https://aimarketingworkbench.com",
  name: "AI Marketing Workbench",
  tagline: "Your complete marketing OS—powered by AI",
} as const;

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
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOME = {
  hero: {
    headline: "We Design Brands. We Build Experiences.",
    subtext:
      "Orah Tech and Marketing is a creative-first agency helping ambitious brands stand out with high-impact design, conversion-focused websites, and content systems built for consistency.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "See Our Work",
    ticker: ["Creative Systems", "Conversion-focused Design", "Fast Turnarounds"],
  },
  marquee: [
    "Branding",
    "Creative Design",
    "Web Design & Development",
    "UI/UX",
    "Social Media Creatives",
    "Content Design",
    "Pitch Decks",
    "AI Creative Automation",
  ],
  services: {
    title: "Creative & design that looks premium—and works.",
    subtitle:
      "We blend brand strategy, design craft, and technical execution to create experiences people remember (and act on).",
    items: [
      {
        title: "Creative Strategy & Design",
        desc: "Campaign concepts, content systems, and design that scales.",
        icon: "spark",
        bullets: [
          "Creative direction, moodboards, and production-ready briefs",
          "Design systems for repeatable, on-brand output",
          "Ad/landing-page creative design (design-only)",
          "Fast iteration cycles and consistent quality control",
        ],
      },
      {
        title: "Branding & Identity",
        desc: "Positioning, visual identity, and guidelines your team can use.",
        icon: "palette",
        bullets: [
          "Brand positioning + messaging foundations",
          "Logo refresh, color, typography, and visual language",
          "Brand guidelines + templates for social and marketing",
          "Design assets for product, web, and content teams",
        ],
      },
      {
        title: "Web Design & Development",
        desc: "Fast, modern websites built for clarity and conversion.",
        icon: "code",
        bullets: [
          "Next.js websites with clean UI, strong IA, and SEO fundamentals",
          "Landing pages for offers, campaigns, and lead capture",
          "Performance improvements (Core Web Vitals) and UX polish",
          "Integrations: forms, analytics, CRM, and automation tools",
        ],
      },
      {
        title: "UI/UX for Products",
        desc: "Design flows, interfaces, and systems users love to use.",
        icon: "search",
        bullets: [
          "UX audits + friction mapping for key flows",
          "Wireframes, prototypes, and UI design systems",
          "Design handoff ready for engineering teams",
          "Accessibility and consistency checks",
        ],
      },
      {
        title: "Social Media Creatives",
        desc: "Scroll-stopping designs for consistent, on-brand growth.",
        icon: "social",
        bullets: [
          "Static + carousel creatives and reel cover systems",
          "Content calendars aligned to brand pillars",
          "Template packs for faster in-house production",
          "Monthly refreshes to avoid creative fatigue",
        ],
      },
      {
        title: "AI Creative Automation",
        desc: "Workflows that speed up design ops—without losing brand control.",
        icon: "rocket",
        bullets: [
          "Brief → variant → review workflows for faster production",
          "Asset organisation + naming + version control systems",
          "AI-assisted repurposing for multi-format content",
          "Automation for approvals and handoffs",
        ],
      },
    ],
  },
  why: {
    title: "Why Orah",
    blurb:
      "We’re a creative partner—built for speed, consistency, and quality. You get senior-level taste, clear process, and delivery that feels effortless.",
    metrics: [
      { value: "200+", label: "Brands Supported" },
      { value: "1,000+", label: "Creatives Delivered" },
      { value: "8+", label: "Industries Served" },
    ],
  },
  industries: [
    "E-commerce",
    "SaaS",
    "Healthcare",
    "Real Estate",
    "D2C",
    "Education",
    "Hospitality",
    "NGO / Non-profit",
  ],
  testimonials: [
    {
      quote:
        "The design quality is premium and consistent. Our social content finally looks like a real brand.",
      name: "Aditi Sharma",
      company: "D2C Skincare Brand",
    },
    {
      quote:
        "They redesigned our website with a clean narrative and better UX. The team is fast, collaborative, and detail-obsessed.",
      name: "Rahul Mehta",
      company: "B2B SaaS Founder",
    },
    {
      quote:
        "From brand guidelines to templates, everything is systemised. We’re able to ship content faster without compromising quality.",
      name: "Priya Nair",
      company: "Healthcare Services",
    },
  ],
  process: [
    {
      title: "Discovery & Audit",
      desc: "Understand your brand, audience, and what the creative must achieve.",
    },
    {
      title: "Strategy & Direction",
      desc: "Messaging, design direction, systems, and a clear production plan.",
    },
    {
      title: "Design & Build",
      desc: "Branding, creatives, websites, and templates—delivered in sprints.",
    },
    {
      title: "Refine & Scale",
      desc: "Iterate, standardise, and scale output with better systems.",
    },
  ],
  cta: {
    title: "Ready to Look Premium?",
    subtitle: "Book a free creative consult and get an action plan for your next 30 days.",
    button: "Book a Free Creative Consult",
  },
  footer: {
    quickLinks: ["Services", "About", "Work", "Contact"],
    contact: {
      email: "orahhechandmarketing@gmail.com",
      city: "USA + India (remote)",
    },
  },
} as const;

export type IndustrySlug =
  | "ecommerce"
  | "saas"
  | "healthcare"
  | "real-estate"
  | "d2c"
  | "education"
  | "hospitality"
  | "ngo";

export const INDUSTRIES: Record<
  IndustrySlug,
  {
    slug: IndustrySlug;
    name: string;
    hero: { headline: string; subtext: string };
    whoItsFor: string[];
    outcomes: string[];
    howWeHelp: Array<{ title: string; desc: string }>;
    recommendedServices: Array<(typeof HOME.services.items)[number]["title"]>;
  }
> = {
  ecommerce: {
    slug: "ecommerce",
    name: "E-commerce",
    hero: {
      headline: "Make your store look premium—and convert better.",
      subtext:
        "We design product-first creatives and high-trust landing experiences that improve clarity and conversion across the funnel.",
    },
    whoItsFor: ["D2C brands", "Catalog-heavy stores", "New launches and seasonal drops"],
    outcomes: ["Higher trust + clarity", "Better product storytelling", "Stronger creative consistency"],
    howWeHelp: [
      { title: "Discovery & Audit", desc: "Store UX audit, product storytelling gaps, and creative consistency check." },
      { title: "Strategy & Direction", desc: "Creative angles, design system, and templates for fast production." },
      { title: "Design & Build", desc: "Product creatives, landing pages, PDP improvements, and template packs." },
      { title: "Refine & Scale", desc: "Monthly refreshes, variants, and better content operations." },
    ],
    recommendedServices: ["Creative Strategy & Design", "Branding & Identity", "Web Design & Development", "Social Media Creatives"],
  },
  saas: {
    slug: "saas",
    name: "SaaS",
    hero: {
      headline: "Tell your story clearly—then make the UI feel premium.",
      subtext:
        "We design messaging and product experiences that reduce confusion, increase trust, and make your brand feel enterprise-ready.",
    },
    whoItsFor: ["B2B SaaS founders", "Product-led teams", "Teams preparing for scale"],
    outcomes: ["Clearer messaging", "Better landing page UX", "Stronger product UI consistency"],
    howWeHelp: [
      { title: "Discovery & Audit", desc: "Website narrative audit, UX review, and brand consistency scan." },
      { title: "Strategy & Direction", desc: "Positioning, page architecture, and design system planning." },
      { title: "Design & Build", desc: "Website redesign, UI components, and brand templates." },
      { title: "Refine & Scale", desc: "Ongoing design support and systemisation for faster shipping." },
    ],
    recommendedServices: ["Branding & Identity", "Web Design & Development", "UI/UX for Products"],
  },
  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    hero: {
      headline: "Build trust through design—before the first call.",
      subtext:
        "We create credibility-first websites and content systems that communicate expertise, care, and clarity.",
    },
    whoItsFor: ["Clinics & hospitals", "Diagnostics", "Wellness brands"],
    outcomes: ["Stronger credibility", "Clearer service communication", "Better enquiry experience"],
    howWeHelp: [
      { title: "Discovery & Audit", desc: "Trust signal audit, UX clarity check, and content gaps mapping." },
      { title: "Strategy & Direction", desc: "Service narrative, visual direction, and template system plan." },
      { title: "Design & Build", desc: "Website pages, content templates, and brand-safe creatives." },
      { title: "Refine & Scale", desc: "Standardise content production and improve consistency over time." },
    ],
    recommendedServices: ["Branding & Identity", "Web Design & Development", "Social Media Creatives"],
  },
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    hero: {
      headline: "Sell the lifestyle with high-trust creative systems.",
      subtext:
        "We design premium presentation—project pages, brochures, social creatives, and storytelling that builds confidence.",
    },
    whoItsFor: ["Builders & developers", "Broker networks", "Commercial real estate"],
    outcomes: ["Premium project presentation", "Consistent creative output", "Clearer enquiry journey"],
    howWeHelp: [
      { title: "Discovery & Audit", desc: "Project messaging audit, brochure/creative review, and website UX check." },
      { title: "Strategy & Direction", desc: "Narrative structure, creative direction, and template plan." },
      { title: "Design & Build", desc: "Landing pages, brochures, social creatives, and template packs." },
      { title: "Refine & Scale", desc: "Variant creatives and monthly refresh system for new phases/projects." },
    ],
    recommendedServices: ["Creative Strategy & Design", "Web Design & Development", "Social Media Creatives", "Branding & Identity"],
  },
  d2c: {
    slug: "d2c",
    name: "D2C",
    hero: {
      headline: "Build a brand people remember—visually and emotionally.",
      subtext:
        "We craft identity, content systems, and website experiences that feel premium and consistent across every touchpoint.",
    },
    whoItsFor: ["Consumer brands", "Subscription products", "New launches & expansion"],
    outcomes: ["Higher brand recall", "Better consistency", "Faster content production"],
    howWeHelp: [
      { title: "Discovery & Audit", desc: "Brand consistency audit and content system review." },
      { title: "Strategy & Direction", desc: "Visual direction, content pillars, and templates roadmap." },
      { title: "Design & Build", desc: "Brand kit, creative packs, and conversion-focused website pages." },
      { title: "Refine & Scale", desc: "Monthly creative sprints and system improvements." },
    ],
    recommendedServices: ["Branding & Identity", "Social Media Creatives", "Web Design & Development", "Creative Strategy & Design"],
  },
  education: {
    slug: "education",
    name: "Education",
    hero: {
      headline: "Communicate outcomes with clarity and trust.",
      subtext:
        "We design websites and content that makes your programs easy to understand—and easy to choose.",
    },
    whoItsFor: ["EdTech", "Coaching institutes", "Schools & colleges"],
    outcomes: ["Clearer program storytelling", "Better landing page UX", "Stronger credibility"],
    howWeHelp: [
      { title: "Discovery & Audit", desc: "Program page audit and content clarity mapping." },
      { title: "Strategy & Direction", desc: "Message hierarchy, visual direction, and templates plan." },
      { title: "Design & Build", desc: "Program landing pages, brochure/pitch assets, and content templates." },
      { title: "Refine & Scale", desc: "Template systems to scale new batches/programs quickly." },
    ],
    recommendedServices: ["Web Design & Development", "Branding & Identity", "Social Media Creatives"],
  },
  hospitality: {
    slug: "hospitality",
    name: "Hospitality",
    hero: {
      headline: "Make people feel the experience before they book.",
      subtext:
        "We design premium presentation—web pages, menus, social creatives, and content systems that match your vibe.",
    },
    whoItsFor: ["Hotels & resorts", "Restaurants", "Experience brands"],
    outcomes: ["Premium presentation", "Better storytelling", "Consistent content production"],
    howWeHelp: [
      { title: "Discovery & Audit", desc: "Brand vibe audit and content/story review." },
      { title: "Strategy & Direction", desc: "Creative direction and template system planning." },
      { title: "Design & Build", desc: "Website pages, menus/collateral, and social creative packs." },
      { title: "Refine & Scale", desc: "Seasonal refreshes and faster production systems." },
    ],
    recommendedServices: ["Social Media Creatives", "Web Design & Development", "Creative Strategy & Design"],
  },
  ngo: {
    slug: "ngo",
    name: "NGO / Non-profit",
    hero: {
      headline: "Storytelling that builds trust—and drives action.",
      subtext:
        "We design donor-friendly pages, impact storytelling, and credibility-first brand systems—so supporters feel confident to contribute.",
    },
    whoItsFor: ["NGOs", "Charities & foundations", "Community initiatives"],
    outcomes: ["Higher credibility", "Clearer impact communication", "Better supporter journey"],
    howWeHelp: [
      { title: "Discovery & Audit", desc: "Impact narrative audit, donation journey review, trust signal check." },
      { title: "Strategy & Direction", desc: "Story framework, visual direction, and templates roadmap." },
      { title: "Design & Build", desc: "Donation/impact pages, social templates, and campaign creative packs." },
      { title: "Refine & Scale", desc: "Ongoing creative support and system improvements for campaigns." },
    ],
    recommendedServices: ["Branding & Identity", "Web Design & Development", "Creative Strategy & Design", "Social Media Creatives"],
  },
};

