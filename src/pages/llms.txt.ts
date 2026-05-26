import type { APIRoute } from 'astro';
import { SITE, CONTACT } from '../content/profile';
import { MARKDOWN_PAGES } from '../content/markdown';

export const GET: APIRoute = () => {
  const lines: string[] = [];
  lines.push(`# ${SITE.fullName}`);
  lines.push('');
  lines.push(`> ${SITE.description}`);
  lines.push('');
  lines.push(`- Site: ${SITE.url}`);
  lines.push(`- Email: ${CONTACT.email}`);
  lines.push(`- GitHub: ${CONTACT.github}`);
  lines.push(`- LinkedIn: ${CONTACT.linkedin}`);
  lines.push('');
  lines.push('## Pages');
  for (const [path, page] of Object.entries(MARKDOWN_PAGES)) {
    const mdUrl =
      path === '/'
        ? `${SITE.url}/index.md`
        : `${SITE.url}${path}.md`;
    const htmlUrl = `${SITE.url}${path === '/' ? '' : path}`;
    lines.push(`- [${page.title}](${htmlUrl}) — Markdown: ${mdUrl}`);
  }
  lines.push('');
  lines.push('## Optional');
  lines.push(`- [Sitemap](${SITE.url}/sitemap-index.xml)`);

  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
};
