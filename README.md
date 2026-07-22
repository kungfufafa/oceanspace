# OCEANSPACE Website

Website korporat OCEANSPACE — grup distribusi, retail, sub retail, dan lifestyle di Indonesia. Dibangun sebagai SPA React dengan Vite.

## Tech Stack

- React 19 + React Router 7
- Vite 8
- Tailwind CSS 3 (Instrument Sans)
- Vanilla JS di `public/js/` untuk chrome situs & alur karier
- Playwright untuk E2E / a11y

## Struktur Proyek

```
oceanspace/
├── index.html              # SPA shell (entry Vite)
├── src/
│   ├── main.jsx            # Mount React
│   ├── App.jsx             # BrowserRouter + routes
│   ├── input.css           # Tailwind entry
│   ├── lib/
│   │   └── loadExternalScript.js
│   └── pages/              # Halaman per route
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Distribusi.jsx
│       ├── Retail.jsx
│       ├── SubRetail.jsx
│       ├── Lifestyle.jsx
│       ├── Career.jsx
│       ├── CareerApply.jsx
│       └── Contact.jsx
├── public/
│   ├── images/             # Aset gambar & og-image.png
│   └── js/
│       ├── main.js         # Nav / site chrome
│       ├── career-api.js   # Client API karier
│       ├── career.js       # UI daftar lowongan
│       └── career-apply.js # Form lamaran
├── tests/                  # Playwright specs
├── robots.txt
├── sitemap.xml
├── .htaccess               # Apache (legacy .html redirects)
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Routes

| Path | Halaman |
|------|---------|
| `/` | Beranda |
| `/about` | Tentang |
| `/distribusi` | Unit Distribusi |
| `/retail` | Unit Retail |
| `/sub-retail` | Unit Sub Retail |
| `/lifestyle` | Unit Lifestyle |
| `/career` | Karier / lowongan |
| `/career-apply` | Form lamaran |
| `/contact` | Kontak |

## Development

```bash
npm install
npm run dev      # Vite dev server
npm run build    # Production build → dist/
npm run preview  # Preview build lokal
```

### Tests

```bash
npx playwright test
```

## Deployment

1. `npm run build`
2. Deploy isi `dist/` ke static host (Netlify, Vercel, Apache, dll.)
3. Pastikan host mengarahkan semua path SPA ke `index.html` (fallback rewrite), bukan hanya file `.html` terpisah
4. `robots.txt` dan `sitemap.xml` harus ikut ter-serve di root domain

Domain referensi SEO: `https://oceanspace.co.id`

## SEO & Performance

Lihat [SEO-GUIDE.md](./SEO-GUIDE.md) untuk status on-page dan checklist setelah deploy.

Ringkas:

- Sitemap & robots ada di root repo
- Meta per-halaman (OG / Twitter / JSON-LD) belum di-inject dari React — `index.html` hanya punya title global
- Gambar `public/images/og-image.png` tersedia untuk Open Graph

## Dokumen Terkait

- [PRODUCT.md](./PRODUCT.md) — tujuan produk, positioning, prinsip desain
- [SEO-GUIDE.md](./SEO-GUIDE.md) — status SEO & langkah indexing

---

© 2026 OCEANSPACE | Tumbuh dengan Integritas, Melaju dengan Eksekusi.
