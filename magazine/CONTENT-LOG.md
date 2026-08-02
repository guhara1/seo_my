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
| 2026-07-29 | recover-google-ranking-drop.html | Diagnosing & recovering from a sudden ranking drop | SEO |
| 2026-07-29 | website-migration-seo-checklist.html | Website migration/redesign SEO checklist (redirect mapping) | Technical SEO |
| 2026-07-29 | ecommerce-seo-malaysia-marketplace-vs-website.html | Shopee/Lazada marketplace SEO vs owned website | E-commerce |
| 2026-07-30 | keyword-research-malaysia-languages.html | Multilingual keyword research (EN/BM/Chinese) for Malaysia | SEO Strategy |
| 2026-07-30 | eeat-author-trust-signals.html | E-E-A-T in practice: author pages, Person schema, trust signals | SEO |
| 2026-07-30 | faq-howto-schema-implementation.html | FAQ/HowTo schema hands-on implementation guide | Technical SEO |
| 2026-07-31 | on-page-seo-technical-audit-checklist.html | On-page/technical SEO audit checklist — the real order of operations | Technical SEO |
| 2026-07-31 | b2b-seo-professional-services-malaysia.html | B2B SEO for law firms, accountants & consultants | B2B SEO |
| 2026-07-31 | social-media-seo-instagram-tiktok-vs-google.html | Social media + SEO crossover — Instagram/TikTok discovery vs Google | Social Media |
| 2026-07-31 | content-marketing-blog-strategy-lead-generation.html | Content marketing/blog strategy mapped to buyer funnel, for leads not just traffic | Content Marketing |
| 2026-07-31 | video-seo-youtube-malaysia.html | Video SEO for YouTube — keywords, captions, VideoObject schema | Video SEO |
| 2026-07-31 | multi-branch-franchise-seo-malaysia.html | SEO for multi-branch/franchise businesses — duplicate content, GBP at scale, hub-and-spoke linking | Local SEO |
| 2026-08-01 | voice-search-conversational-seo-malaysia.html | Voice search & conversational SEO — the real story past the 2016 hype, featured snippets, Speakable schema | SEO Strategy |
| 2026-08-02 | international-hreflang-seo-multi-market.html | International SEO/hreflang for a site spanning MY/KR/JP/SEA — working code, self-reference bug, x-default | Technical SEO |

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

## Internal linking pass (2026-07-29)

Repeated the same pattern for the three 2026-07-29 posts:
- `index.html` — "From the magazine" teaser section swapped to feature
  the three newest posts (ranking-drop recovery, migration checklist,
  marketplace vs website).
- `markets/malaysia.html` — in-body link from the existing Shopee/Lazada
  mention to the new e-commerce post, plus related-pages entry.
- `markets/korea.html`, `markets/japan.html`, `markets/southeast-asia.html`
  — related-pages entries for the ranking-drop recovery and/or migration
  checklist posts (both are market-agnostic, so relevant everywhere);
  southeast-asia.html also links the e-commerce post since Shopee/Lazada
  operate across the region, not just Malaysia.

## Internal linking pass (2026-07-30)

Same pattern for the three 2026-07-30 posts (keyword research, E-E-A-T
author signals, FAQ/HowTo schema):
- `index.html` — "From the magazine" teaser swapped to the three newest
  posts.
- `markets/malaysia.html` — in-body link from the existing multilingual
  (EN/BM/Chinese) discussion to the new keyword-research post.
- `markets/korea.html`, `markets/japan.html` — in-body/related links to
  the E-E-A-T post (both already discuss E-E-A-T conceptually — this adds
  the hands-on follow-up) and the schema post.
- `markets/southeast-asia.html` — related-pages entry for the keyword
  research post (its multilingual framing applies regionally, not just to
  Malaysia).

## Internal linking pass (2026-07-31)

Same pattern for the three 2026-07-31 posts (on-page/technical audit,
B2B professional services, social media crossover):
- `index.html` — "From the magazine" teaser swapped to the three newest
  posts.
- `markets/malaysia.html` — related-pages entries for all three; the
  B2B post is relevant to Malaysia's professional-services sector.
- `markets/korea.html`, `markets/japan.html` — related-pages entries for
  the B2B professional-services post (both markets have significant
  outbound B2B/corporate clients).
- `markets/southeast-asia.html` — related-pages entry for the social
  media crossover post (mobile-first, social-heavy region).

## Internal linking pass (2026-07-31, batch 2)

Same pattern for the second 2026-07-31 batch (content marketing/lead-gen,
video SEO, multi-branch/franchise SEO):
- `index.html` — "From the magazine" teaser swapped to the three newest
  posts.
- `markets/malaysia.html` — related-pages entry for the multi-branch/
  franchise post (directly relevant to KL/Selangor/Penang multi-location
  SMEs) and an in-body link for the content-marketing post.
- `markets/korea.html`, `markets/japan.html` — in-body/related links for
  the video SEO post (both markets have strong video-content culture).
- `markets/southeast-asia.html` — related-pages entry for the
  multi-branch/franchise post (regional chains spanning MY/SG/TH).

## Internal linking pass (2026-08-01)

Single-post batch (voice search / conversational SEO):
- `magazine/index.html` — new feature card at top of grid.
- `index.html` — "From the magazine" teaser: swapped the multi-branch/
  franchise card for the new voice-search post (kept content-marketing
  and video-SEO cards, since they're still fresh from the prior batch).
- `markets/malaysia.html` — related-pages entry + in-body link from the
  FAQ page context.

## Internal linking pass (2026-08-02)

Single-post batch (international SEO / hreflang):
- `magazine/index.html` — new feature card at top of grid.
- `index.html` — "From the magazine" teaser: swapped the content-
  marketing card for the new hreflang post (kept video-SEO and
  voice-search cards, still fresh from prior batches).
- `markets/korea.html` and `markets/japan.html` — in-body links, since
  hreflang correctness matters most for the multi-language market pages.

## Not yet covered — safe backlog ideas for future posts

Pick from here first before inventing a new topic, to keep the magazine
building toward full topical coverage without overlap:

- Image SEO in practice: preferred-thumbnail markup (schema + og:image),
  alt text and file naming that actually helps (ties to the March 2026
  preferred-image Google update noted in SEO-POLICY.md)
- Google News eligibility criteria, for clients who publish news-adjacent
  content (independent, fact-based reporting, bylines, editorial policy)

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
