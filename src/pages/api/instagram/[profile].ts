import type { APIRoute } from 'astro';
import {
  INSTAGRAM_GRAPH_VERSION,
  INSTAGRAM_PMU_ACCESS_TOKEN,
  INSTAGRAM_PMU_USER_ID,
  INSTAGRAM_SCHOOL_ACCESS_TOKEN,
  INSTAGRAM_SCHOOL_USER_ID,
} from 'astro:env/server';
import { readInstagramPosts } from '../../../lib/instagramFeed';

export const prerender = false;

const json = (body: unknown, status: number, cache = 'no-store') => Response.json(body, {
  status,
  headers: { 'Cache-Control': cache },
});

export const GET: APIRoute = async ({ params }) => {
  const profile = params.profile;
  if (profile !== 'school' && profile !== 'pmu') return json({ status: 'unavailable', posts: [] }, 404);

  const school = profile === 'school';
  const username = school ? 'miskolczikinga_makeup_school' : 'sminktetovalas_miskolczikinga';
  const userId = school ? INSTAGRAM_SCHOOL_USER_ID : INSTAGRAM_PMU_USER_ID;
  const token = school ? INSTAGRAM_SCHOOL_ACCESS_TOKEN : INSTAGRAM_PMU_ACCESS_TOKEN;
  const version = INSTAGRAM_GRAPH_VERSION;
  const feed = { username, profileUrl: `https://www.instagram.com/${username}/`, posts: [] };

  if (!userId || !/^\d{1,30}$/.test(userId) || !token || !version || !/^v\d{1,3}\.\d{1,2}$/.test(version)) {
    return json({ ...feed, status: 'not_connected' }, 200);
  }

  try {
    const posts = await readInstagramPosts({ userId, username, token, version });
    return json({ ...feed, posts, status: 'ok', updatedAt: new Date().toISOString() }, 200, 'public, max-age=300, s-maxage=300');
  } catch {
    return json({ ...feed, status: 'unavailable' }, 502);
  }
};
