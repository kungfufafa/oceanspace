# Panduan SEO — OCEANSPACE

Status teknis diselaraskan dengan codebase SPA (React + Vite) saat ini. Claim di dokumen ini hanya mencerminkan file yang benar-benar ada.

## Status SEO Saat Ini

### Yang sudah ada

| Komponen | Status | Catatan |
|----------|--------|---------|
| `robots.txt` | Ada | Allow `/` + sitemap `https://oceanspace.co.id/sitemap.xml` |
| `sitemap.xml` | Ada | 8 URL clean path (tanpa `.html`); belum termasuk `/career-apply` |
| Title (global) | Ada | Di `index.html`: `Ocean Space \| Bertumbuh dengan Integritas` |
| Favicon | Ada | `/images/logo.png` |
| Mobile viewport | Ada | Meta viewport di `index.html` |
| Clean URLs | Ada | Routes React (`/about`, `/career`, …) |
| Aset OG | Partial | `public/images/og-image.png` ada; belum dipakai di meta tag |
| HTTPS | Deploy-time | Setup di hosting |

### Belum / gap (penting untuk crawler SPA)

| Komponen | Status | Catatan |
|----------|--------|---------|
| Meta description per halaman | Belum | `index.html` tidak punya description |
| Title unik per route | Belum | Satu title global; React belum set `document.title` / Helmet |
| Canonical per halaman | Belum | — |
| Open Graph / Twitter Cards | Belum | Tidak ada tag OG/Twitter di head |
| JSON-LD (Organization, WebSite, Breadcrumb) | Belum | Tidak ada schema di source |
| SSR / prerender | Belum | Crawler yang tidak menjalankan JS hanya melihat shell kosong `#root` |
| SPA fallback di `.htaccess` | Partial | File masih rewrite legacy `.html`; untuk production SPA perlu fallback ke `index.html` |

---

## Sitemap (sumber kebenaran)

URL di `sitemap.xml` saat ini:

- `https://oceanspace.co.id/`
- `https://oceanspace.co.id/about`
- `https://oceanspace.co.id/distribusi`
- `https://oceanspace.co.id/retail`
- `https://oceanspace.co.id/sub-retail`
- `https://oceanspace.co.id/lifestyle`
- `https://oceanspace.co.id/career`
- `https://oceanspace.co.id/contact`

Opsional ditambahkan nanti: `/career-apply` (biasanya `noindex` karena form dinamis).

---

## Prioritas perbaikan on-page

Urutan yang paling berdampak untuk SPA:

1. **Prerender atau SSR** untuk route publik (atau meta diinject saat build) agar bot melihat HTML berisi konten
2. **Title + meta description unik** per route
3. **Open Graph / Twitter** memakai `/images/og-image.png`
4. **JSON-LD** Organization (+ WebSite); BreadcrumbList di sub-halaman
5. **Canonical** per URL
6. Pastikan host: HTTPS + rewrite semua path non-file → `index.html`

Tanpa langkah 1, checklist “title/meta/schema lengkap di React” tetap lemah untuk Googlebot jika JS tidak dijalankan.

---

## Cara mendarat di Page 1 Google

### 1. On-page (sedang dikerjakan / gap di atas)

- [x] Mobile-friendly layout
- [x] Clean URLs
- [x] Sitemap + robots
- [ ] Meta & title per halaman
- [ ] OG / Twitter / JSON-LD
- [ ] Prerender atau setara untuk crawlability
- [ ] SSL di production

### 2. Off-page (setelah deploy)

#### Google Search Console (wajib)

1. https://search.google.com/search-console
2. Property: `https://oceanspace.co.id`
3. Verifikasi (HTML file / DNS)
4. Submit sitemap: `https://oceanspace.co.id/sitemap.xml`

#### Backlinks & social

- Google Business Profile
- LinkedIn / Facebook company page + tautan ke situs
- Partner/client link & guest post industri terkait

### 3. Sitelinks

Google menentukan sendiri. Bantu dengan navigasi jelas, internal link konsisten, dan (nanti) `SiteNavigationElement`. Tidak bisa dipaksa.

### 4. Timeline realistis

| Periode | Target |
|---------|--------|
| Minggu 1–2 | Deploy, SSL, GSC, submit sitemap |
| Bulan 1 | Mulai terindex |
| Bulan 2–3 | Ranking brand “OCEANSPACE” |
| Bulan 4–6 | Sitelinks mungkin muncul |
| Bulan 6–12 | Keyword bisnis non-brand |

### 5. Keyword target

**Brand:** OCEANSPACE, OCEANSPACE Indonesia, OCEANSPACE distribusi / retail

**Bisnis:** distribusi handphone Indonesia, toko handphone terpercaya, retail HP Indonesia

**Long-tail:** distribusi handphone terpercaya di Indonesia, grup retail dan distribusi, toko HP asli bergaransi

---

## Checklist setelah deploy

### Minggu 1

- [ ] `npm run build` + deploy `dist/`
- [ ] SPA fallback ke `index.html` aktif
- [ ] HTTPS
- [ ] GSC + sitemap
- [ ] Bing Webmaster Tools

### Bulan 1+

- [ ] Google Business Profile
- [ ] Social pages + posting rutin
- [ ] Monitor GSC (coverage, crawl errors)
- [ ] Update `sitemap.xml` `lastmod` bila konten berubah

---

## Tools

| Tool | Fungsi |
|------|--------|
| Google Search Console | Indexing & ranking |
| Google Analytics | Traffic |
| PageSpeed Insights | Performance |
| Screaming Frog / setara | Audit teknis |
| Playwright + axe (`tests/audit.spec.js`) | A11y regresi lokal |

---

© 2026 OCEANSPACE
