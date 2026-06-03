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
└── README.md
```

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
