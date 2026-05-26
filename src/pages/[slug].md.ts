import type { APIRoute, GetStaticPaths } from 'astro';
import { MARKDOWN_PAGES } from '../content/markdown';

export const getStaticPaths: GetStaticPaths = () => {
  return Object.keys(MARKDOWN_PAGES)
    .filter((p) => p !== '/')
    .map((p) => ({ params: { slug: p.replace(/^\//, '') } }));
};

export const GET: APIRoute = ({ params }) => {
  const key = `/${params.slug}` as keyof typeof MARKDOWN_PAGES;
  const page = MARKDOWN_PAGES[key];
  if (!page) {
    return new Response('Not found', { status: 404 });
  }
  return new Response(page.body(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
};
