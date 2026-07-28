# NEXT SEO24 — repo notes

Static marketing site (no build step) for **NEXT SEO24**, a Kuala
Lumpur-based SEO/backlink agency. Deployed via **Cloudflare Pages**
(project `seo-my`) with custom domain `nextseo24.com`, auto-deployed on
push to the tracked branch. See `README.md` for the general project
overview.

## SEO / content policy

Before writing or publishing **any** new content or on-site change, read
**`SEO-POLICY.md`** — the site owner's standing Google-ranking policy
(E-E-A-T, Helpful Content, spam policy, structured data, internal/external
linking bar, content-quality bar). It applies site-wide, not just to blog
posts.

## Magazine / blog posts

Before writing a new post under `magazine/`, **read
`magazine/CONTENT-LOG.md` first** — it tracks every published article's
topic and slug (so you don't duplicate one) and a backlog of unclaimed
topic ideas. Update that file whenever you publish a new post, and mirror
the change into `magazine/index.html` (card grid + i18n), `sitemap.xml`,
and `rss.xml` — new posts need all four touched to actually appear
site-wide. Also add a contextual internal link (long-tail anchor text)
from at least one relevant `markets/*.html` page or `index.html`, per
`SEO-POLICY.md`.
