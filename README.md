# RANKFORGE

Marketing website for **RANKFORGE** — an SEO &amp; backlink agency based in
Kuala Lumpur, Malaysia, serving Korea, Japan and Southeast Asia.

## Overview

A single-page static website (`index.html`) with no build step. It includes:

- Responsive, dark-theme landing page (hero, services, backlinks, stats,
  process, markets, testimonial, contact form, footer)
- Built-in language switcher: English / 中文 / ไทย / 日本語
- SEO basics: meta tags, Open Graph, `ProfessionalService` JSON-LD,
  `robots.txt`, and `sitemap.xml`

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
.
├── index.html      # the whole site (HTML + CSS + JS inline)
├── robots.txt      # crawler directives
├── sitemap.xml     # sitemap for search engines
├── img/            # placeholder images (replace with real assets)
├── kr/             # Korean cross-border landing pages
└── README.md
```

## Replacing the placeholder images

The site ships with on-brand SVG placeholders in `img/` so it looks complete
before real assets exist. Swap them for real photos/logos to maximise trust —
keep the same file names (or update the `src` in `index.html`):

| Placeholder | Replace with | Used in |
|-------------|--------------|---------|
| `img/logo-1/2/3.svg` | Real **client / partner logos** (SVG or transparent PNG) | "Trusted by" logo wall |
| `img/dashboard.svg` | Real **Search Console / Analytics screenshots** | "Proven results" section |
| `img/portrait.svg` | Real **team & testimonial photos** (square, ~400×400) | Team section + testimonial |

Tips for keeping the site fast (you're an SEO agency — this matters):

- Export photos as **WebP** and compress them; keep each under ~150 KB
- Keep the `width`/`height` and `loading="lazy"` attributes already on the
  `<img>` tags to avoid layout shift (good Core Web Vitals)
- Write a descriptive `alt` for every image
- Only use **real** client logos — placeholder/fake logos hurt trust and
  can be misleading. Remove the logo wall until you have real clients.

## Notes / TODO

The following placeholders should be replaced with real details before launch:

- **`WHATSAPP_NUMBER`** at the top of the `<script>` in `index.html` — set
  this to the client's real WhatsApp number (international format, digits
  only, no `+`). The contact form and the "WhatsApp" link both open a
  pre-filled chat via `wa.me`, so no backend is needed.
- Phone number in the JSON-LD (`+60-3-0000-0000`)
- Email address (`hello@rankforge.my`) and office address
- Add an `og.jpg` social-share image at the site root
- Confirm the production domain (`www.rankforge.my`) across meta tags,
  `robots.txt`, and `sitemap.xml`
