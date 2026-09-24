# NEXT SEO24 — Google ranking policy (read before writing/publishing content)

This is the standing content/technical policy for this site, as directed by
the site owner (a Malaysia-based online marketing / Google top-ranking
expert). Apply it to every new page, blog post and on-site change —
not just the magazine. Update this file if Google's guidance changes.

## 1. E-E-A-T
"Experience" was added to E-A-T in late 2022 — content built on real,
first-hand use of a product or a real visit to a place is weighted more
than secondhand summary. YMYL topics (health, finance, safety) demand much
stronger E-E-A-T signals. Every page needs: a clear author byline, a linked
author/company bio (`why-us.html`), and credible external citations —
not just internal claims.

## 2. Helpful Content system
Folded into the core ranking algorithm since March 2024 — not a separate,
occasional update. It is a **site-wide** signal: a meaningful amount of
low-quality content anywhere on the domain can drag down otherwise-good
pages. Treat it as a continuously-applied quality signal, not something
that "runs" periodically. Never publish thin/filler pages just to add URL
count.

## 3. "Who, How, Why" (Dec 2025 guideline update)
Google evaluates content by who made it, how it was made, and why — not
whether AI was used. AI-assisted content is fine when there's expert
review, original data/experience behind it, and a named, accountable
author. Never publish unreviewed AI output as-is.

## 4. Spam policies — hard rules
Never: mass-produce low-value content to manipulate rankings, abuse
domain trust with third-party/scraped content, buy an expired domain to
publish unrelated content on it, keyword-stuff, cloak, run link schemes,
or build doorway pages.

## 5. Page experience / technical
Core Web Vitals: INP replaced FID. Every page needs to be mobile-friendly,
fast, and served over HTTPS as baseline requirements, not differentiators.

## 6. "Information gain" (informal term — use Google's actual language)
Google doesn't use "Information Gain" as an official policy name; the
correct framing is **unique perspective, first-hand experience reviews,
and non-generic content**. Prioritize original data, real case studies and
direct experience over content that just re-summarizes what's already
findable elsewhere — this is the single biggest lever for content that
gets cited (including by AI Overviews) instead of ignored.

## 7. March 2026 core + spam update overlap
A spam update starting 24 Mar 2026 and a core update starting 27 Mar 2026
ran concurrently for ~2 weeks, producing unusually volatile rankings and
making it hard to attribute traffic drops to spam vs. quality causes during
that window. Keep this in mind when explaining historical ranking
volatility to clients.

## 8. Structured data — forums/Q&A
24 Mar 2026: Google added new supported attributes for discussion-forum
and Q&A markup, to better understand comment-thread structure. Apply
`DiscussionForumPosting` schema if/when this site adds forum or community
Q&A content.

## 9. Preferred image markup
2 Mar 2026: Google documented using schema.org markup + `og:image` together
to explicitly declare a preferred thumbnail, instead of leaving thumbnail
selection to crawling. Important for Google News/Discover surfaces. Every
page on this site already sets `og:image`; add matching `ImageObject`
schema where a page has a dedicated hero image worth preferring.

## 10. JavaScript policy
Google has clarified that loading content via JavaScript does not, by
itself, make Search harder — the old "avoid JS for content" advice is
outdated. Rendering *performance* (slow client-side rendering, delayed
content) is still a real, separate problem to manage.

## 11. Google News
Different ranking system from web SEO — no separate submission needed;
Google auto-discovers qualifying sites. Purely promotional content, press
releases and ad copy are excluded; content must be independent, fact-based
current-events reporting with visible author bylines, an about page,
contact info and a published editorial policy. AMP is no longer required;
speed and mobile optimization matter more now. (Not directly relevant to
NEXT SEO24's own site today, but relevant when advising News-eligible
clients.)

## Content-quality bar for this site specifically

- No generic "everyone already knows this" filler. Every magazine post
  must give the reader something they couldn't get from a five-second
  Google summary — a checklist they can actually run, a specific number,
  a real diagnostic, a genuine opinion.
- Long-form is fine and often correct (existing posts run well past 1,500
  words / ~8-9 min read) — length itself isn't the goal, but thin content
  fails both Helpful Content and E-E-A-T, so don't pad OR truncate to hit
  an arbitrary word count. Match depth to the topic.
- Every new page should link to (a) at least one other relevant page on
  this site using descriptive, long-tail anchor text (not "click here" /
  "read more" alone), and (b) where genuinely relevant, an authoritative
  external source (e.g. official Google Search Central documentation) to
  support a specific claim — real citation, not decoration.
- See `magazine/CONTENT-LOG.md` for the internal-linking pass already done
  across `index.html` and `markets/*.html`, and for the backlog of topics
  that are still safe to write about without duplicating existing posts.
