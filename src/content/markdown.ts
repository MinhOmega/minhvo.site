import {
  SITE,
  CONTACT,
  HERO,
  SERVICES,
  PROJECTS,
  EXPERIENCE,
  SKILLS,
  EDUCATION,
  AWARDS,
  TESTIMONIALS,
} from './profile';

const indexMd = () => `# ${SITE.fullName} — ${SITE.title}

${SITE.description}

- Site: ${SITE.url}
- Email: ${CONTACT.email}
- GitHub: ${CONTACT.github}
- LinkedIn: ${CONTACT.linkedin}

## ${HERO.headline}

${HERO.body}

## Services
${SERVICES.map((s) => `- **${s.title}** — ${s.summary}`).join('\n')}

## Selected work
${PROJECTS.slice(0, 3)
  .map((p) => `- **${p.name}** (${p.org}, ${p.period}) — ${p.stack}`)
  .join('\n')}

## Experience (summary)
${EXPERIENCE.map((e) => `- **${e.role}**, ${e.company} — ${e.period}`).join('\n')}

## Testimonials
${TESTIMONIALS.map((t) => `> ${t.quote}  \n> — ${t.author}, ${t.org}`).join('\n\n')}

## Contact
Email **${CONTACT.email}** to start a conversation.
`;

const aboutMd = () => `# About — ${SITE.fullName}

${SITE.description}

## Experience

${EXPERIENCE.map(
  (e) => `### ${e.role} — ${e.company}
*${e.period} · ${e.stack}*

${e.highlights.map((h) => `- ${h}`).join('\n')}`,
).join('\n\n')}

## Skills

${Object.entries(SKILLS)
  .map(([group, items]) => `- **${group}:** ${items.join(', ')}`)
  .join('\n')}

## Education
- **${EDUCATION.school}** — ${EDUCATION.degree} (${EDUCATION.period})

## Awards
${AWARDS.map((a) => `- **${a.name}** — ${a.org}, ${a.period}. ${a.note}`).join('\n')}
`;

const servicesMd = () => `# Services — ${SITE.fullName}

Focused engagements across AI engineering, full-stack web, cloud architecture, and mobile.

${SERVICES.map((s) => `## ${s.title}\n${s.summary}`).join('\n\n')}

## Start a project
Email **${CONTACT.email}**.
`;

const worksMd = () => `# Works — ${SITE.fullName}

Selected production projects.

${PROJECTS.map(
  (p) => `## ${p.name} — ${p.org}
*${p.period} · ${p.stack}*

${p.bullets.map((b) => `- ${b}`).join('\n')}`,
).join('\n\n')}
`;

const contactMd = () => `# Contact — ${SITE.fullName}

- **Email:** ${CONTACT.email}
- **Phone:** ${CONTACT.phone}
- **Location:** ${CONTACT.location}
- **GitHub:** ${CONTACT.github}
- **LinkedIn:** ${CONTACT.linkedin}

Reply within 24 hours on weekdays.
`;

export const MARKDOWN_PAGES = {
  '/': { title: 'Home', body: indexMd },
  '/about': { title: 'About', body: aboutMd },
  '/services': { title: 'Services', body: servicesMd },
  '/works': { title: 'Works', body: worksMd },
  '/contact': { title: 'Contact', body: contactMd },
} as const;

export type MarkdownPath = keyof typeof MARKDOWN_PAGES;
