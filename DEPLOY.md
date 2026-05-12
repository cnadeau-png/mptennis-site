# MPTennis · Cloudflare Pages deploy guide

You're skipping the WordPress half of the video — your site is **already** static HTML. So your path is shorter and simpler.

---

## Recommended path: Direct upload (10 minutes, free)

This matches the video at the 1:35 mark, just without the "convert WordPress" step.

### 1. Download this project

In this project pane, click the **⋯** menu (top right) → **Download project as zip**. You'll get every file you need.

> **Optional:** if you don't want browser-based editing later, delete the `/admin/` folder before zipping. Otherwise leave it — it does nothing until you wire up GitHub.

### 2. Cloudflare Pages → Direct upload

1. https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Direct Upload**
2. Project name: `mptennis` (or whatever you like)
3. Drag the zip onto the upload area
4. Wait ~30 seconds for the green success message → **Deploy site** → **Continue**

Cloudflare gives you a temporary `mptennis.pages.dev` URL. Wait 2–3 minutes after first deploy, then click **Visit** to check it works.

### 3. Custom domain → mptennis.ca

In your new Pages project → **Custom domains** → **Set up a custom domain** → enter `mptennis.ca`.

If your domain DNS is already on Cloudflare, the link is automatic — Cloudflare handles everything in the background. If your DNS is at GoDaddy / Namecheap / etc., Cloudflare gives you nameserver records to paste into your registrar (5-min job; the video at 3:24 walks through this for Namecheap).

Repeat for `www.mptennis.ca`.

### 4. You're live

Push updates by going back to Cloudflare Pages → your project → **Create new deployment** → drag a fresh zip. Each upload becomes a new deployment, and the live site updates in ~30 seconds.

---

## Do you need GitHub or Netlify?

**No.** Direct upload is enough.

GitHub + Netlify only matter if you want **Decap CMS** — the browser-based editor at `/admin/` that lets you edit posts/pages without re-uploading zips. If you want that later, ping me and I'll walk you through it. For now, edit files in this project and re-upload.

---

## Cloudflare Pages limits (none of these affect you)

- 25 MB max file size — fine for HTML/CSS/JS, fine for any image you'd embed in a blog post
- 20,000 files per site — you're not close
- 100 custom domains free — you need 2

The "host video elsewhere" caveat the video mentions doesn't affect you — your YouTube videos are already on YouTube.

---

## Pre-launch checklist

- [x] `robots.txt` (allows all crawlers including AI)
- [x] `sitemap.xml`
- [x] All 7 pages built (home, blog × 4, tools × 2, shop, admin)
- [x] Real partner affiliate links wired into shop
- [ ] **Add `assets/og-cover.jpg`** — already generated (1200×630). Verify it looks right before launch.
- [ ] **Add favicon set** — `assets/favicon.ico` + `assets/apple-touch-icon.png` still need to be created. Tell me the vibe and I'll generate.
- [ ] Spot-check all external links (Ace, YouTube, IG, Facebook, Tenniszon, ShopRestring, Toroline, mailto)
- [ ] (Optional) Migrate the 30 posts from old mptennis.ca — see **Blog migration** below.

---

## What's already done for SEO + AI discovery

- Schema.org JSON-LD: Organization, WebSite, Person (Cade & Chris), SportsActivityLocation, SoftwareApplication (Ace), BlogPosting (each post)
- Open Graph + Twitter cards on every page
- Canonical URLs
- `lang="en"`, `inLanguage="en-CA"`
- `sameAs` links to YouTube, Instagram, Facebook, Ace
- robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot

The single biggest leverage from here: **publish blog posts regularly**. AI crawlers and search both reward freshness.

---

## Blog migration

The current site ships with **3 fully migrated posts** (rewritten in the new MPTennis voice) plus an **archive list** that links the rest back to the live mptennis.ca pages until they're brought over. Why partial:

- This environment can't crawl mptennis.ca's full post HTML + download all featured images programmatically (cross-origin restrictions on the build sandbox).
- The right way to move 30 posts cleanly is one of:
  1. **Showit export.** Download the post bodies + images as a zip from your Showit dashboard, attach it here, and I'll convert each one to a clean static post in `/blog/`.
  2. **Decap CMS.** After GitHub+Cloudflare are wired up, you (or I) can paste post bodies into `/admin/` one at a time — each save creates a real `/blog/<slug>.html` and adds an entry to `posts.json`.
  3. **Manual paste.** Send me 5–10 posts at a time as plain text + the hero image, and I'll write them into the new format in batches.

Until then, every old post URL **still resolves at mptennis.ca**, so the archive cards in `/blog/` point there. After DNS flips to Cloudflare, those URLs will 404 — so migrate before you flip DNS, or set up 301 redirects in `_redirects`.

