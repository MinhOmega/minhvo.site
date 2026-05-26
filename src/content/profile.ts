// Single source of truth for site content. Derived from CVs.
export const SITE = {
  url: 'https://minhvo.site',
  domain: 'minhvo.site',
  name: 'Minh Vo',
  fullName: 'Vo Ngoc Quang Minh',
  title: 'Software Engineer',
  tagline: 'Building enterprise SaaS and Gen AI platforms.',
  description:
    'Software Engineer with 7 years building enterprise SaaS and Gen AI platforms. Specialist in multi-tenant RAG, vector search, real-time AI streaming, and Model Context Protocol across OpenAI, Anthropic, and Google.',
  locale: 'en_US',
  twitter: '@MinhOmega',
} as const;

export const CONTACT = {
  email: 'vnqminh0502@gmail.com',
  phone: '+84 83 555 9175',
  location: 'Vietnam',
  github: 'https://github.com/MinhOmega',
  linkedin: 'https://www.linkedin.com/in/minhvo-orient',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: '/contact' },
] as const;

export const HERO = {
  greeting: 'Hello, I am Minh.',
  headline: 'Software Engineer crafting AI-native products.',
  body:
    "I architect enterprise SaaS and Gen AI platforms — multi-tenant RAG, vector search, real-time streaming, and MCP integrations across OpenAI, Anthropic, and Google. Seven years of shipping production systems for global clients.",
  ctaPrimary: { label: 'See my work', href: '/works' },
  ctaSecondary: { label: 'Get in touch', href: '/contact' },
} as const;

export const SERVICES = [
  {
    title: 'AI Engineering',
    summary:
      'Multi-tenant RAG, pgvector + HNSW search, multi-provider LLM orchestration (OpenAI, Anthropic, Google, XAI), MCP tool-calling agents, and streaming UX.',
  },
  {
    title: 'Full-Stack Web',
    summary:
      'TypeScript, React, Next.js, NestJS. Performance-first architectures with code splitting, lazy loading, caching, and GraphQL via AWS AppSync.',
  },
  {
    title: 'Cloud Infrastructure',
    summary:
      'Azure (Entra ID, Key Vault, Blob, AKS) and AWS (Lambda, DynamoDB, S3, AppSync). Terraform IaC, Karpenter NAP, spot + on-demand strategies.',
  },
  {
    title: 'Mobile (React Native)',
    summary:
      'Tablet-first scheduling and real-time apps with offline support, IAP, and drag-and-drop UX. Published to Google Play and the App Store.',
  },
] as const;

export const EXPERIENCE = [
  {
    company: 'Neurond AI',
    role: 'AI Engineer',
    period: 'May 2025 — Present',
    stack: 'Next.js 16 · React 19 · TypeScript · PostgreSQL/pgvector · Azure',
    highlights: [
      'Architect and drive end-to-end delivery of the Enterprise AI Assistant Platform — owning roadmap, architecture, and stakeholder alignment.',
      'Operate the Azure cloud foundation: Terraform IaC for AKS with Karpenter NAP, Key Vault, networking; spot + on-demand fallback across prod and staging.',
      'Champion AI-Native engineering — Agent Coding Tools for code generation, automated unit and e2e tests, and structured implementation planning.',
    ],
  },
  {
    company: 'Snaptec Vietnam',
    role: 'Software Engineer',
    period: 'Sep 2019 — Apr 2025',
    stack: 'JavaScript · Next.js · Redux · AWS',
    highlights: [
      'Owned end-to-end delivery of the SaaS Theme storefront and rebuilt the MID admin dashboard — replacing Magento with a custom Next.js console.',
      'Migrated REST APIs to GraphQL via AWS AppSync.',
      'Led sprint planning, code reviews, and architecture decisions across squads; mentored junior engineers on Next.js and performance best practices.',
    ],
  },
  {
    company: 'Instasalon (Freelance)',
    role: 'React Native Developer',
    period: 'Aug 2021 — Nov 2023',
    stack: 'TypeScript · React Native · Redux · Firebase',
    highlights: [
      'Scoped features directly with the client and delivered a tablet-first scheduling system for US nail salons.',
      'Real-time chat, drag-and-drop appointments, IAP, offline-first.',
      'Published on Google Play and the App Store.',
    ],
  },
] as const;

export const PROJECTS = [
  {
    name: 'Enterprise AI Assistant Platform',
    org: 'Neurond AI',
    period: '2025 — Present',
    stack:
      'TypeScript · Next.js 16 · React 19 · PostgreSQL/pgvector · Azure · Vercel AI SDK',
    bullets: [
      'Multi-tenant SaaS with PostgreSQL row-level security, Redis tenant cache, and Drizzle ORM.',
      'Chain-of-RAG on pgvector + HNSW for iterative retrieval and semantic search over enterprise knowledge bases.',
      'Multi-provider orchestration (OpenAI, Anthropic, Google, XAI, MCP) with streaming UX and tool-calling agents.',
      'Azure Entra ID SSO, Key Vault, Blob + SharePoint/OneDrive integration.',
    ],
  },
  {
    name: 'SaaS Theme',
    org: 'Snaptec Vietnam',
    period: '2019 — 2025',
    stack: 'JavaScript · Next.js · Redux · AWS S3',
    bullets: [
      'Customizable storefront with country-specific payments and translations.',
      'A scores on GTmetrix via code splitting, lazy loading, and caching.',
    ],
  },
  {
    name: 'MID Dashboard',
    org: 'Snaptec Vietnam',
    period: '2019 — 2025',
    stack: 'JavaScript · Next.js · Redux · AWS (S3, AppSync)',
    bullets: [
      'Admin dashboard replacing Magento with a custom Next.js console.',
      'Migrated REST APIs to GraphQL via AWS AppSync; designed core UI components.',
    ],
  },
  {
    name: 'Instasalon',
    org: 'Freelance',
    period: '2021 — 2023',
    stack: 'TypeScript · React Native · Redux · Firebase',
    bullets: [
      'Tablet-first scheduling system for US nail salons.',
      'Real-time chat, drag-and-drop appointments, IAP, offline.',
      'Published to Google Play and the App Store.',
    ],
  },
] as const;

export const SKILLS = {
  Languages: ['TypeScript', 'JavaScript', 'GraphQL', 'SQL'],
  Frameworks: [
    'React',
    'Next.js',
    'NestJS',
    'React Native',
    'Redux',
    'Tailwind CSS',
    'Vercel AI SDK',
  ],
  Cloud: [
    'Azure (Entra ID, Key Vault, Blob, AKS)',
    'AWS (Lambda, DynamoDB, S3, AppSync)',
    'Docker',
    'Kubernetes',
    'CI/CD',
  ],
  AI: [
    'RAG',
    'pgvector',
    'HNSW',
    'Multi-provider LLM orchestration',
    'Prompt engineering',
    'MCP',
  ],
  Workflow: ['Agent Coding Tools', 'Automated test generation'],
} as const;

export const EDUCATION = {
  school: 'Hue University of Sciences',
  degree: 'Bachelor of Science in Software Engineering',
  period: '2016 — 2020',
} as const;

export const AWARDS = [
  {
    name: 'Hero of the Year',
    org: 'Snaptec',
    period: 'Aug 2021',
    note: 'Outstanding technical contribution and product impact.',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'Minh consistently delivers production-grade systems with rare attention to architecture and performance.',
    author: 'Engineering Lead',
    org: 'Snaptec Vietnam',
  },
  {
    quote:
      'A rigorous AI engineer — multi-tenant RAG, MCP, and observability handled end-to-end.',
    author: 'Product Manager',
    org: 'Neurond AI',
  },
] as const;
