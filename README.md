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

- Phone number in the JSON-LD (`+60-3-0000-0000`)
- Email address (`hello@rankforge.my`) and office address
- Contact form currently only shows a success message — wire it to a real
  backend or form service (e.g. Formspree, a serverless function, etc.)
- Add an `og.jpg` social-share image at the site root
- Confirm the production domain (`www.rankforge.my`) across meta tags,
  `robots.txt`, and `sitemap.xml`
