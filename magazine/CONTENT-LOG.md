# NEXT SEO24 Magazine — content log

Persona: Malaysia-based online marketing / Google top-ranking (SEO) expert,
writing for Malaysian SME owners (with Korea/Japan/SEA crossover audience).

Read this file before writing any new `magazine/*.html` post — do not
republish a topic already covered below. Add new entries here every time a
post is published so future sessions don't duplicate work.

## Published articles

| Date | Slug | Topic | Category |
|---|---|---|---|
| 2026-04-08 | seo-vs-sem.html | SEO vs SEM (Google Ads) — when to use each | Strategy |
| 2026-04-15 | how-much-does-seo-cost-malaysia.html | Malaysia SEO pricing/retainer ranges | Pricing |
| 2026-04-22 | how-long-does-seo-take.html | Realistic SEO results timeline | SEO |
| 2026-04-29 | sports-game-app-marketing.html | ASO + web SEO for a sports game app | App Marketing |
| 2026-05-06 | southeast-asia-localization.html | Localization playbook for MY/SG/TH | Markets |
| 2026-05-13 | core-web-vitals-inp.html | Core Web Vitals & INP speed checklist | Web |
| 2026-05-20 | white-hat-backlinks.html | White-hat backlink building | Backlinks |
| 2026-05-27 | helpful-content-2026.html | Google Helpful Content system explained | SEO |
| 2026-06-03 | naver-vs-google-korea.html | Naver vs Google search strategy | Korea |
| 2026-07-28 | why-website-not-ranking-google.html | 12 real reasons a site fails to rank (diagnostic) | SEO |
| 2026-07-28 | local-seo-google-maps-malaysia.html | Google Business Profile / Local Pack ranking in Malaysia | Local SEO |
| 2026-07-28 | ai-overviews-seo-2026.html | Google AI Overviews / generative search SEO | AI Search |

Each new article was also added to: `magazine/index.html` (card grid + i18n),
`sitemap.xml`, and `rss.xml`. Hero images live in `img/cover-*`.

See `../SEO-POLICY.md` at the repo root for the standing Google-ranking
policy (E-E-A-T, Helpful Content, linking bar, content-quality bar) that
every new post and site edit must follow.

## Internal linking pass (2026-07-28)

When the three articles above were published, internal links using
long-tail anchor text were also added from:
- `index.html` — new "From the magazine" teaser section (3 cards) linking
  to all three new posts.
- `markets/malaysia.html` — in-body links + expanded related-pages block
  (local SEO + why-not-ranking posts).
- `markets/korea.html` — in-body link + related-pages block (AI Overviews
  + why-not-ranking posts).
- `markets/japan.html` — in-body links + related-pages block (AI Overviews
  + why-not-ranking posts).
- `markets/southeast-asia.html` — in-body links + related-pages block
  (local SEO + why-not-ranking posts).

Each of those pages also got one outbound citation link to Google's
official Search Central documentation on helpful content
(`developers.google.com/search/docs/fundamentals/creating-helpful-content`)
where it was contextually natural — a real citation per `SEO-POLICY.md`,
not decoration. Next time new magazine posts are published, repeat this
pattern: link them from at least one relevant market/home page with
descriptive anchor text, not just from the magazine index.

## Not yet covered — safe backlog ideas for future posts

Pick from here first before inventing a new topic, to keep the magazine
building toward full topical coverage without overlap:

- E-commerce SEO for Malaysian Shopee/Lazada + own-website sellers
- Keyword research across BM / English / Mandarin for the Malaysian market
- On-page SEO / technical audit checklist (distinct from the cost/timeline/
  ranking-diagnostic posts already published)
- Google algorithm update history & how to recover from a ranking drop
- E-E-A-T in practice: author pages, credentials, trust signals
- Content marketing / blog strategy for lead generation (not just ranking)
- Social media + SEO crossover (Instagram/TikTok discovery vs Google)
- Video SEO / YouTube for Malaysian businesses
- Migrating a website (redesign/replatform) without losing rankings
- SEO for multi-branch / franchise businesses in Malaysia
- B2B SEO / lead-gen for professional services (law, finance, consulting)
- Voice search and conversational query optimization

## Style/template notes for new posts

- Copy the structure of an existing `magazine/*.html` file exactly: head
  meta + 3x JSON-LD (Article, BreadcrumbList, FAQPage) + nav + article body
  (lead, byline, H2 sections, FAQ matching the JSON-LD, CTA box with
  WhatsApp link, related links) + footer + `#page-i18n` script + `i18n.js`.
- New articles in this log were written with full English content and a
  Korean (`ko`) translation in `PAGE_I18N`; zh/ja/th were intentionally
  left untranslated for the body copy (they gracefully fall back to
  English via `i18n.js`) to keep turnaround fast. The magazine **index**
  card copy (title/excerpt/category/read time) was translated into all
  four languages (zh/ja/th/ko) since that's small and high-visibility.
  If full zh/ja/th article-body translation is wanted later, do it here.
- Hero images are hand-built SVGs (dark background `#0B0D0C`/`#161B17`,
  lime accent `#CBF24A`, Bricolage Grotesque/Archivo fonts) matching the
  site's existing `img/dashboard.svg` style — used because no real
  photo/screenshot exists yet. Swap for a real screenshot/photo when
  available, same as the raster `cover-*.jpg` images used by earlier posts.
