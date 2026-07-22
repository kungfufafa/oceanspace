# Product

## Register

brand

## Platform

web (SPA — React + Vite)

## Users

1. **Pengunjung korporat** — calon partner, klien, atau publik yang mencari siapa OCEANSPACE, unit bisnisnya (distribusi, retail, sub retail, lifestyle), dan cara menghubungi.
2. **Calon pelamar** — talenta yang mencari lowongan, mengevaluasi lingkungan kerja, lalu mengirim lamaran lewat `/career` → `/career-apply`.

## Product Purpose

Pintu gerbang digital OCEANSPACE: menyampaikan kredibilitas grup dan unit bisnis dengan jelas, lalu mengarahkan aksi utama (kontak bisnis atau lamaran kerja) tanpa hambatan kognitif.

## Positioning

Ekosistem bisnis yang bergerak cepat — dari distribusi hingga lifestyle — dengan standar eksekusi tinggi; untuk talenta, tempat paling dinamis untuk bertindak nyata.

## Surfaces & conversion

| Surface | Job to be done | CTA utama |
|---------|----------------|-----------|
| `/` Home | Memahami brand & ekosistem | Jelajahi unit / karier / kontak |
| `/about` | Kredibilitas & cerita perusahaan | Kontak / karier |
| Unit pages (`/distribusi`, `/retail`, `/sub-retail`, `/lifestyle`) | Memahami fokus tiap unit | Kontak |
| `/career` | Temukan posisi cocok | Apply Job |
| `/career-apply` | Kirim lamaran | Submit aplikasi |
| `/contact` | Hubungi perusahaan | Kirim pesan / info kontak |

### Career funnel (conversion utama rekrutmen)

- Primary CTA: Melamar langsung di posisi tersedia (Apply Job)
- Secondary CTA: Pelajari perusahaan via navigasi (`/about`, unit pages)
- Garis yang diingat dalam 10 detik: Ocean Space adalah tempat talenta terbaik bertindak cepat dan nyata
- Belief ladder:
  1. Perusahaan modern dan kredibel
  2. Lingkungan dinamis, tidak membosankan
  3. Ada posisi yang cocok
  4. Proses lamaran cepat dan menghargai waktu
- Proof: antarmuka lowongan yang langsung ke daftar posisi (bukan portal yang banyak basa-basi)

## Brand Personality

Modern, Cepat, Action-Oriented, Kredibel.

## Anti-references

- Desain korporat lama yang kaku dan lambat
- Halaman kosong / “jelek” tanpa hierarki visual
- Teks deskripsi panjang yang tele-tele
- Portal lowongan konvensional yang menunda daftar posisi
- Stack dokumentasi palsu (multi-HTML statis) — produk ini SPA React

## Design Principles

1. **Fokus pada aksi** — pengguna cepat sampai ke unit bisnis, kontak, atau apply
2. **Cepat & minimalis** — hilangkan ornamen tanpa fungsi jelas
3. **DNA premium** — tipografi kuat (Instrument Sans), tata letak bersih; minimalis tetap terasa eksklusif
4. **Satu komposisi per viewport** — terutama hero; brand sebagai sinyal utama

## Accessibility & Inclusion

Kontras baik pada elemen utama; interaksi tanpa lag atau layout shift berlebihan (mis. saat filter/pagination karier). Target a11y diverifikasi lewat Playwright + axe (`tests/audit.spec.js`).

## Tech constraints (relevan produk)

- Routing client-side (`react-router-dom`); deploy butuh SPA fallback ke `index.html`
- Script karier dimuat on-demand lewat `src/lib/loadExternalScript.js` dari `public/js/`
- Warna brand: `#006AFF` (lihat `tailwind.config.js`)
