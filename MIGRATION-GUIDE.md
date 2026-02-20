# Panduan Migration WordPress → Static HTML

## Keuntungan Migration

### SEO Yang Sudah Ada ✅
| Asset | Cara Pertahankan |
|-------|-----------------|
| Domain authority | Tetap pakai domain yang sama |
| Backlinks | Redirect 301 semua URL lama |
| Index Google | Update sitemap + submit ulang |
| Ranking | Redirect proper = transfer authority |

### Keuntungan Pindah ke Static HTML
- **Kecepatan**: 10-50x lebih cepat dari WordPress
- **Security**: Tidak ada database yang bisa di-hack
- **Maintenance**: Tidak perlu update plugin/theme
- **Cost**: Hosting lebih murah (bisa gratis di Netlify/Vercel)
- **SEO**: Google menyukai website cepat

---

## Langkah Migration

### Fase 1: Persiapan (Sebelum Switch)

#### 1. Audit Website WordPress Lama
```bash
# Catat semua URL yang ada di Google
# Gunakan: Google Search Console > Index > Pages

# Tools untuk crawl:
# - Screaming Frog SEO Spider (free version)
# - atau online: https://www.xml-sitemaps.com
```

**Yang perlu dicatat:**
- [ ] Semua halaman yang terindex Google
- [ ] URL dengan traffic tinggi
- [ ] Halaman dengan backlinks
- [ ] Blog posts (jika ada)

#### 2. Export Data dari WordPress
```
- Download semua gambar dari /wp-content/uploads/
- Export database jika ada data penting
- Screenshot halaman penting untuk referensi
```

#### 3. Buat Mapping URL
Buat daftar:
```
URL WordPress Lama → URL Baru

/about-us/ → /about
/contact-us/ → /contact
/distribusi-hp/ → /distribusi
/dll...
```

---

### Fase 2: Setup Redirects (PENTING!)

#### Opsi 1: Netlify (Recommended)
File `_redirects` sudah dibuat. Edit sesuai URL WordPress Anda:

```
# Format:
/url-lama /url-baru 301

# Contoh:
/about-us /about 301
/contact-us /contact 301
```

#### Opsi 2: Vercel
Tambahkan ke `vercel.json`:
```json
{
  "redirects": [
    { "source": "/about-us", "destination": "/about", "permanent": true },
    { "source": "/contact-us", "destination": "/contact", "permanent": true }
  ]
}
```

#### Opsi 3: Apache (.htaccess)
```
Redirect 301 /about-us https://oceanspace.co.id/about
Redirect 301 /contact-us https://oceanspace.co.id/contact
```

---

### Fase 3: Deploy Website Baru

#### Step-by-Step:

1. **Backup WordPress**
   - Export database
   - Download semua file
   - Screenshot halaman

2. **Deploy Static HTML**
   - Upload ke Netlify/Vercel
   - Pastikan SSL aktif
   - Test semua halaman

3. **Update DNS** (jika di server berbeda)
   - Point domain ke hosting baru
   - Tunggu propagasi (1-24 jam)

4. **Test Redirects**
   - Coba akses URL lama
   - Pastikan redirect ke URL baru dengan benar

---

### Fase 4: Post-Migration SEO

#### 1. Google Search Console
```
1. Buka Google Search Console
2. Pilih property oceanspace.co.id
3. Submit sitemap baru: https://oceanspace.co.id/sitemap.xml
4. Gunakan URL Inspection untuk request indexing halaman baru
5. Monitor untuk 404 errors di Coverage Report
```

#### 2. Fix 404 Errors
Jika ada URL yang belum di-redirect:
```
1. Buka GSC > Coverage > Excluded > 404
2. Tambahkan redirect untuk setiap URL
3. Request indexing ulang
```

#### 3. Monitor Ranking
```
- Week 1-2: Mungkin ada fluctuation
- Week 3-4: Ranking stabil kembali
- Month 2+: Seharusnya naik karena website lebih cepat
```

---

## Checklist Migration

### Sebelum Switch
- [ ] Audit semua URL WordPress
- [ ] Catat URL dengan backlinks
- [ ] Export gambar dan aset
- [ ] Buat mapping URL lama → baru
- [ ] Siapkan file redirects
- [ ] Backup WordPress

### Saat Switch
- [ ] Deploy website baru
- [ ] Aktifkan SSL/HTTPS
- [ ] Test semua redirect
- [ ] Test semua halaman
- [ ] Update DNS (jika perlu)

### Setelah Switch
- [ ] Submit sitemap baru ke GSC
- [ ] Request indexing halaman penting
- [ ] Monitor 404 errors
- [ ] Check ranking harian (minggu pertama)
- [ ] Update social media links
- [ ] Update Google My Business

---

## Tips Penting

### DO ✅
1. **Redirect SEMUA URL lama** - Jangan biarkan 404
2. **Pakai 301 redirect** - Transfer SEO authority
3. **Keep URL structure mirip** - Memudahkan mapping
4. **Monitor GSC setiap hari** - Awal migration
5. **Test di mobile** - Pastikan responsive

### DON'T ❌
1. Jangan hapus WordPress sebelum redirect OK
2. Jangan skip redirect - SEO akan drop
3. Jangan panic kalau ranking turun sebentar
4. Jangan lupa update social media links
5. Jangan abaiki 404 errors

---

## Expected Timeline

| Periode | Status |
|---------|--------|
| **Day 1** | Deploy + redirects aktif |
| **Day 2-7** | Google re-indexing |
| **Week 2** | Ranking mungkin turun sebentar |
| **Week 3-4** | Ranking kembali normal |
| **Month 2+** | Ranking naik (website lebih cepat) |

---

## Troubleshooting

### Ranking Drop Drastis?
```
1. Check semua redirect OK
2. Check tidak ada 404 massal
3. Submit sitemap ulang
4. Request indexing manual
5. Tunggu 2-4 minggu
```

### Banyak 404 di GSC?
```
1. Download list 404 dari GSC
2. Tambahkan redirect untuk semua
3. Mark as fixed di GSC
```

### Traffic Drop?
```
1. Check redirects
2. Check website loading speed
3. Check mobile usability
4. Update internal links
```

---

## Contact untuk Bantuan

Jika butuh bantuan teknis:
1. Screenshot error
2. Catat URL yang bermasalah
3. Check GSC untuk details

---

**Good luck dengan migration! Dengan redirect yang benar, SEO tidak akan drop dan justru akan meningkat karena website lebih cepat.**
