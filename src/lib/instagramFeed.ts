const GRAPH_ORIGINS = ['https://graph.instagram.com', 'https://graph.facebook.com'] as const;
const MEDIA_FIELDS = 'id,username,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_type,media_url,thumbnail_url}';
const MAX_RESPONSE_BYTES = 512 * 1024;
const MAX_POSTS = 12;
const MAX_PAGES = 3;

type GraphObject = Record<string, unknown>;
type Account = { userId: string; username: string; token: string; version: string };
type Post = {
  id: string;
  type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  imageUrl: string;
  permalink: string;
  caption: string;
  timestamp: string;
};

function isObject(value: unknown): value is GraphObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function mediaLink(value: unknown, kind: 'image' | 'post') {
  if (typeof value !== 'string' || value.length > 8192) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password || url.port) return null;
    if (kind === 'post') {
      if (!['instagram.com', 'www.instagram.com'].includes(url.hostname) ||
        !/^\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?$/.test(url.pathname)) return null;
      url.search = '';
      url.hash = '';
    } else if (!['cdninstagram.com', 'fbcdn.net'].some(host => url.hostname === host || url.hostname.endsWith(`.${host}`))) {
      return null;
    }
    return url.href;
  } catch {
    return null;
  }
}

function coverFor(media: GraphObject) {
  const cover = mediaLink(media.media_type === 'VIDEO' ? media.thumbnail_url : media.media_url, 'image');
  if (cover || media.media_type !== 'CAROUSEL_ALBUM') return cover;
  const first = isObject(media.children) && Array.isArray(media.children.data) ? media.children.data[0] : undefined;
  return isObject(first) ? mediaLink(first.media_type === 'VIDEO' ? first.thumbnail_url : first.media_url, 'image') : null;
}

function postFrom(media: unknown, username: string): Post | null {
  if (!isObject(media) || typeof media.id !== 'string' || !/^\d{1,30}$/.test(media.id)) return null;
  const type = media.media_type;
  if (type !== 'IMAGE' && type !== 'VIDEO' && type !== 'CAROUSEL_ALBUM') return null;
  if (typeof media.username === 'string' && media.username.toLowerCase() !== username) return null;
  const time = typeof media.timestamp === 'string' ? Date.parse(media.timestamp) : NaN;
  if (!Number.isFinite(time)) return null;
  const imageUrl = coverFor(media);
  const permalink = mediaLink(media.permalink, 'post');
  if (!imageUrl || !permalink) return null;
  return {
    id: media.id, type, imageUrl, permalink,
    caption: typeof media.caption === 'string' ? media.caption.slice(0, 2200) : '',
    timestamp: new Date(time).toISOString(),
  };
}

async function fetchGraph(url: URL, token: string, signal: AbortSignal): Promise<unknown> {
  const response = await fetch(url, {
    headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
    redirect: 'error',
    signal,
  });
  if (!response.ok || !response.body || Number(response.headers.get('content-length')) > MAX_RESPONSE_BYTES) {
    await response.body?.cancel();
    throw new Error('Instagram response unavailable');
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let size = 0;
  let text = '';
  try {
    for (let chunk = await reader.read(); !chunk.done; chunk = await reader.read()) {
      size += chunk.value.byteLength;
      if (size > MAX_RESPONSE_BYTES) {
        await reader.cancel();
        throw new Error('Instagram response too large');
      }
      text += decoder.decode(chunk.value, { stream: true });
    }
    return JSON.parse(text + decoder.decode());
  } finally {
    reader.releaseLock();
  }
}

async function readFromOrigin(origin: typeof GRAPH_ORIGINS[number], { userId, username, token, version }: Account) {
  const signal = AbortSignal.timeout(5_000);
  const accountPath = `/${version}/${userId}`;
  const accountUrl = new URL(accountPath, origin);
  accountUrl.searchParams.set('fields', 'id,username');
  const account = await fetchGraph(accountUrl, token, signal);
  if (!isObject(account) || account.id !== userId ||
    typeof account.username !== 'string' || account.username.toLowerCase() !== username) {
    throw new Error('Instagram account mismatch');
  }

  const mediaUrl = new URL(`${accountPath}/media`, origin);
  mediaUrl.searchParams.set('fields', MEDIA_FIELDS);
  mediaUrl.searchParams.set('limit', '50');
  const posts = new Map<string, Post>();
  const cursors = new Set<string>();
  for (let page = 0; page < MAX_PAGES; page++) {
    const result = await fetchGraph(mediaUrl, token, signal);
    if (!isObject(result) || !Array.isArray(result.data)) throw new Error('Invalid Instagram media response');
    for (const media of result.data) {
      const post = postFrom(media, username);
      if (!post) continue;
      const previous = posts.get(post.id);
      if (!previous || post.timestamp > previous.timestamp) posts.set(post.id, post);
    }
    if (posts.size >= MAX_POSTS || !isObject(result.paging) || !result.paging.next || !isObject(result.paging.cursors)) break;
    const next = result.paging.cursors.after;
    if (typeof next !== 'string' || !next || next.length > 2048 || cursors.has(next)) break;
    cursors.add(next);
    mediaUrl.searchParams.set('after', next);
  }
  return Array.from(posts.values()).sort((a, b) => b.timestamp.localeCompare(a.timestamp)).slice(0, MAX_POSTS);
}

export async function readInstagramPosts(account: Account) {
  for (const origin of GRAPH_ORIGINS) {
    try {
      return await readFromOrigin(origin, account);
    } catch {
      // The two Meta login flows use different fixed Graph hosts. Verify the account on each.
    }
  }
  throw new Error('Instagram feed unavailable');
}
