import type { APIRoute } from 'astro';
import { MARKDOWN_PAGES } from '../content/markdown';

export const GET: APIRoute = () =>
  new Response(MARKDOWN_PAGES['/'].body(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
