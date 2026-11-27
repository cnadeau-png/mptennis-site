// MPTennis Worker. Serves the static site, plus one small API:
//   GET /api/latest-video  -> newest LONG video on the MPTennis channel (Shorts skipped)
// Reads YouTube's public channel feed (no API key), caches the answer for 1 hour.
// If anything fails it returns 503 and the home page keeps its built in video.

const CHANNEL_ID = 'UCFxH4IPA7ItHuiIsChplWLQ'; // @mptennis
const FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const TTL = 3600;

function pick(xml, tag) {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? m[1].trim() : '';
}
function decode(s) {
  return s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

// A Short answers 200 on /shorts/<id>; a normal video redirects to /watch.
async function isShort(id) {
  const r = await fetch(`https://www.youtube.com/shorts/${id}`, { method: 'HEAD', redirect: 'manual' });
  if (r.status === 200) return true;
  if (r.status >= 300 && r.status < 400) return false;
  throw new Error(`shorts check ${r.status}`);
}

async function latestVideo(env, origin) {
  const res = await fetch(FEED, { cf: { cacheTtl: 600 } });
  if (!res.ok) throw new Error(`feed ${res.status}`);
  const xml = await res.text();
  const entries = xml.split('<entry>').slice(1, 11);

  // Blog posts, to link "Read the write up" when one exists for this video.
  let posts = [];
  try {
    const pr = await env.ASSETS.fetch(new Request(`${origin}/blog/posts.json`));
    if (pr.ok) posts = await pr.json();
  } catch {}

  for (const e of entries) {
    const id = pick(e, 'yt:videoId');
    if (!id) continue;
    if (await isShort(id)) continue;
    const post = posts.find(p => (p.cover || '').includes(`/vi/${id}/`));
    return {
      id,
      title: decode(pick(e, 'title')),
      published: pick(e, 'published'),
      post: post ? `blog/${post.slug}.html` : null,
    };
  }
  throw new Error('no long video in feed');
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/latest-video') return env.ASSETS.fetch(request);

    const cache = caches.default;
    const key = new Request(`${url.origin}/api/latest-video`);
    const hit = await cache.match(key);
    if (hit && !url.searchParams.has('fresh')) return hit;

    try {
      const data = await latestVideo(env, url.origin);
      const out = new Response(JSON.stringify(data), {
        headers: { 'content-type': 'application/json', 'cache-control': `public, max-age=${TTL}` },
      });
      ctx.waitUntil(cache.put(key, out.clone()));
      return out;
    } catch (err) {
      return new Response(JSON.stringify({ error: String(err.message || err) }), {
        status: 503, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
      });
    }
  },
};
