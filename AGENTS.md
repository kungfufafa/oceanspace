# Ocean Space — notes for coding agents

This repository is the corporate marketing site for Ocean Space (`https://oceanspace.co.id`), built with React + Vite and deployed as a static SPA with per-route HTML shells for LiteSpeed.

## Commands

- `npm run dev` — local Vite dev server
- `npm run build` — production build + minify `dist/js/*`
- `npm run preview` — preview `dist/`

## Structure

- `src/pages/*` — route pages (header/footer currently duplicated per page)
- `src/seo/pages.js` — shared SEO metadata used at build time and runtime
- `src/components/PageSeo.jsx` — updates document head on client navigation
- `public/.htaccess` — SPA fallback, cache, and security headers for LiteSpeed/Apache
- `public/llms.txt` — agent-oriented site summary

## SEO / crawlability

Build injects unique `<title>`, meta/OG/Twitter, JSON-LD, and crawlable `#root` HTML into each route shell (`dist/<route>/index.html`). Prefer editing `src/seo/pages.js` when changing page titles/descriptions.

## Career API

Job listing/apply calls `https://cesa.completeselular.com/api` via `public/js/career-api.js`.
