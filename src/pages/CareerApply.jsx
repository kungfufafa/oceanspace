import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CareerApply = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const baseSrc = src.split('?')[0];
        if (document.querySelector(`script[src^="${baseSrc}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    };

    const initScripts = async () => {
      const ts = Date.now();
      await loadScript(`/js/career-api.js?v=${ts}`);
      await loadScript(`/js/career-apply.js?v=${ts}`);
      
      if (window.initCareerApply) {
         window.initCareerApply();
      }
    };
    
    initScripts();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 overflow-visible border-b border-[#d8e0ec] bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]">
    <div className="mx-auto flex min-h-[4.25rem] w-full max-w-[88rem] items-center gap-4 px-4 sm:min-h-[4.5rem] sm:px-5 lg:px-6">
      <a href="/" className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center" aria-label="Beranda Ocean Space">
        <img src="images/logo-color.png" alt="Logo Ocean Space" className="h-7 w-auto sm:h-8" loading="eager" decoding="async" />
      </a>
      <button type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav"
        className="ml-auto inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[0.14rem] border border-[#d4dbe6] bg-[#f7f9fc] px-3 py-2 text-sm font-semibold text-[#243041] transition-colors hover:border-[#2563eb]/30 hover:text-[#1d4ed8] lg:hidden">
        Menu
      </button>
      <nav className="mx-auto hidden flex-1 items-center justify-center gap-[1.35rem] lg:flex xl:gap-[1.55rem]" aria-label="Navigasi utama">
        <a href="/" data-header-nav className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Beranda</a>
        <a href="/about" data-header-nav className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Tentang</a>
        <a href="/distribusi" data-header-nav className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">HP Distribusi</a>
        <a href="/retail" data-header-nav className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Retail</a>
        <a href="/sub-retail" data-header-nav className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Sub Retail</a>
        <a href="/lifestyle" data-header-nav className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Lifestyle</a>
      </nav>
      <div className="hidden items-center gap-2 lg:flex">
        <a href="/career" data-header-action="secondary" className="inline-flex min-h-[44px] items-center justify-center rounded-[0.14rem] border border-[#d4dbe6] bg-[#f7f9fc] px-4 text-[0.84rem] font-medium leading-[1.1] text-[#243041] transition-colors hover:border-[#2563eb]/35 hover:text-[#1d4ed8]">Karier</a>
        <a href="/contact" data-header-action="primary" className="inline-flex min-h-[44px] items-center justify-center rounded-[0.14rem] bg-[#2563eb] px-4 text-[0.84rem] font-medium leading-[1.1] text-white transition-colors hover:bg-[#1d4ed8]">Kontak</a>
      </div>
    </div>
    <nav id="mobile-nav" data-mobile-nav className="absolute inset-x-0 top-full hidden border border-[#d8e0ec] border-t-0 bg-white px-4 py-3 shadow-[0_20px_40px_rgba(18,24,38,0.08)] lg:hidden" aria-label="Navigasi utama mobile">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-1">
        <a href="/" data-mobile-link className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Beranda</a>
        <a href="/about" data-mobile-link className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Tentang</a>
        <a href="/distribusi" data-mobile-link className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">HP Distribusi</a>
        <a href="/retail" data-mobile-link className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Retail</a>
        <a href="/sub-retail" data-mobile-link className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Sub Retail</a>
        <a href="/lifestyle" data-mobile-link className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Lifestyle</a>
        <a href="/career" data-mobile-link className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Karier</a>
        <a href="/contact" data-mobile-link className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Kontak</a>
      </div>
    </nav>
  </header>

  <main className="w-full">
    <section id="apply-hero-section" className="border-b border-black/10 bg-white">
      <div className="relative mx-auto w-full max-w-[88rem] px-4 py-10 sm:px-5 sm:py-12 lg:px-6 lg:py-14">
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden border-l border-dashed border-black/20 lg:block"></span>
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden border-r border-dashed border-black/20 lg:block"></span>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-2 w-2 -translate-x-1/2 translate-y-1/2 bg-[#2563eb] shadow-[0_0_0_2px_#fbfaf7] lg:block"></span>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-20 hidden h-2 w-2 translate-x-1/2 translate-y-1/2 bg-[#2563eb] shadow-[0_0_0_2px_#fbfaf7] lg:block"></span>

        {/*  Skeleton loading state  */}
        <div id="apply-page-loading" className="animate-pulse space-y-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.72fr)]">
            <div className="max-w-[36rem] space-y-4">
              <div className="h-3 w-24 rounded bg-[#dfe7f5]"></div>
              <div className="h-16 w-3/4 rounded bg-[#dfe7f5]"></div>
              <div className="h-4 w-2/3 rounded bg-[#edf2fb]"></div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="h-20 rounded bg-[#edf2fb]"></div>
                <div className="h-20 rounded bg-[#edf2fb]"></div>
              </div>
            </div>
            <div className="overflow-hidden border border-black/10 bg-white px-6 py-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="space-y-4">
                <div className="h-3 w-28 rounded bg-[#dfe7f5]"></div>
                <div className="h-20 w-full rounded bg-[#edf2fb]"></div>
                <div className="h-3 w-24 rounded bg-[#dfe7f5]"></div>
                <div className="h-20 w-full rounded bg-[#edf2fb]"></div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden border border-black/10 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="h-3 w-32 rounded bg-[#dfe7f5] m-6"></div>
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="border-t border-black/10 px-6 py-6 lg:border-r">
                <div className="h-3 w-28 rounded bg-[#dfe7f5]"></div>
                <div className="mt-4 h-24 w-full rounded bg-[#edf2fb]"></div>
              </div>
              <div className="border-t border-black/10 px-6 py-6">
                <div className="h-3 w-24 rounded bg-[#dfe7f5]"></div>
                <div className="mt-4 h-24 w-full rounded bg-[#edf2fb]"></div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden border border-black/10 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="space-y-4 px-6 py-6">
              <div className="h-3 w-24 rounded bg-[#dfe7f5]"></div>
              <div className="h-8 w-1/2 rounded bg-[#dfe7f5]"></div>
              <div className="h-4 w-full rounded bg-[#edf2fb]"></div>
              <div className="h-11 w-full rounded bg-[#edf2fb]"></div>
              <div className="h-11 w-full rounded bg-[#edf2fb]"></div>
              <div className="h-24 w-full rounded bg-[#edf2fb]"></div>
              <div className="h-11 w-full rounded bg-[#dfe7f5]"></div>
            </div>
          </div>
        </div>

        {/*  Content state (toggled by JS)  */}
        <div id="apply-page-content" className="hidden">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(18rem,0.72fr)] lg:items-start">
            <div className="max-w-[38rem] pt-2">
              <a href="/career" data-motion-reveal="intro" className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[#1d4ed8]">Karier <span aria-hidden="true">/</span> Lamaran</a>
              <h1 id="apply-page-title" data-motion-reveal="intro" className="mt-4 max-w-full sm:max-w-[14ch] font-display text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#171a22] [text-wrap:balance]">Memuat posisi yang dipilih.</h1>
              <p id="apply-page-summary" data-motion-reveal="intro" className="mt-3 max-w-[30rem] text-[0.98rem] leading-7 text-[#556070]">Baca dulu konteks perannya, lalu lanjut isi lamaran jika posisi ini cocok.</p>
              <div id="apply-page-meta" data-motion-group="soft" className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="border border-black/10 bg-[#f8fbff] p-4">
                  <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500">Lokasi</p>
                  <p className="mt-2 text-sm font-bold text-slate-900">Menunggu data</p>
                </div>
                <div className="border border-black/10 bg-white p-4">
                  <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500">Penutupan</p>
                  <p className="mt-2 text-sm font-bold text-slate-900">Menunggu data</p>
                </div>
              </div>
            </div>

            <aside data-motion-reveal="panel" className="overflow-hidden border border-black/10 bg-white px-6 py-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#006AFF]">Sebelum Mulai</p>
              <div id="apply-page-prep" className="mt-4 space-y-3 text-sm leading-7 text-[#556070]"></div>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <section id="apply-content-band" className="border-b border-black/10 bg-[#f6f9fd]">
      <div className="relative mx-auto w-full max-w-[88rem] px-4 py-8 sm:px-5 sm:py-10 lg:px-6 lg:py-12">
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden border-l border-dashed border-black/20 lg:block"></span>
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden border-r border-dashed border-black/20 lg:block"></span>
        <span data-content-band-node aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-20 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-[#2563eb] shadow-[0_0_0_2px_#fbfaf7] lg:block"></span>
        <span data-content-band-node aria-hidden="true" className="pointer-events-none absolute right-0 top-0 z-20 hidden h-2 w-2 translate-x-1/2 -translate-y-1/2 bg-[#2563eb] shadow-[0_0_0_2px_#fbfaf7] lg:block"></span>
        <span data-content-band-node aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-2 w-2 -translate-x-1/2 translate-y-1/2 bg-[#2563eb] shadow-[0_0_0_2px_#fbfaf7] lg:block"></span>
        <span data-content-band-node aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-20 hidden h-2 w-2 translate-x-1/2 translate-y-1/2 bg-[#2563eb] shadow-[0_0_0_2px_#fbfaf7] lg:block"></span>

        <div id="apply-page-empty" data-motion-reveal="panel" className="hidden border border-[#d9e2ef] bg-white p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="lc-eyebrow">Pilih Posisi Dulu</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[#171a22]">Halaman ini membutuhkan posisi yang dipilih.</h2>
              <p className="mt-3 max-w-[34rem] text-[15px] leading-7 text-[#596171]">Kembali ke halaman karier, lalu buka halaman lamaran dari posisi yang ingin Anda lihat.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/career" data-motion-cta="true" className="button-primary sm:w-auto">Lihat posisi terbuka</a>
            </div>
          </div>
        </div>

        <div id="apply-page-error" data-motion-reveal="panel" className="hidden border border-red-100 bg-red-50 p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="lc-eyebrow text-red-700">Terjadi Kendala</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-red-700">Detail posisi gagal dimuat.</h2>
              <p className="mt-3 max-w-[34rem] text-[15px] leading-7 text-red-700">Posisi yang Anda buka tidak tersedia atau sedang tidak dapat diakses. Kembali ke halaman karier untuk memilih posisi lain.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/career" data-motion-cta="true" className="button-primary sm:w-auto">Kembali ke Karier</a>
              <a href="/contact" data-motion-cta="true" className="button-secondary sm:w-auto">Hubungi kami</a>
            </div>
          </div>
        </div>

        <div id="apply-page-details" className="hidden space-y-5">
          <article data-motion-reveal="panel" className="overflow-hidden border border-black/10 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="border-b border-black/10 px-6 py-5">
              <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500">Detail Posisi</p>
            </div>
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)]">
              <div className="border-b border-black/10 p-6 lg:border-b-0 lg:border-r">
                <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500">Deskripsi Pekerjaan</p>
                <p id="apply-page-description" className="mt-3 text-[15px] leading-8 text-[#556070]">Menunggu data.</p>
              </div>
              <div className="p-6">
                <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500">Kualifikasi</p>
                <div id="apply-page-requirements" className="mt-3 space-y-3 text-[15px] leading-8 text-[#556070]"></div>
              </div>
            </div>
          </article>

          <article data-motion-reveal="panel" className="overflow-hidden border border-black/10 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="border-b border-black/10 px-6 py-5">
              <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#006AFF]">Form Lamaran</p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold tracking-[-0.04em] text-[#171a22]">Kirim Lamaran</h2>
              <p className="mt-2 max-w-[40rem] text-sm leading-7 text-[#556070]">Isi informasi inti yang diminta, lalu kirim lamaran untuk posisi ini.</p>
            </div>
            <div className="px-6 py-6">
              <div id="form-alerts"></div>
              <form id="apply-form" className="space-y-5" encType="multipart/form-data"></form>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer className="border-t border-[#d8e0ec] bg-white text-[#121826]">
    <div className="relative mx-auto w-full max-w-[88rem] px-4 py-14 sm:px-5 sm:py-16 lg:px-6">
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 hidden border-l border-dashed border-black/20 lg:block"></span>
      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden border-r border-dashed border-black/20 lg:block"></span>
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
        <div className="pb-10 lg:border-r lg:border-black/10 lg:pb-0 lg:pr-12">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[#1d4ed8]">Terhubung dengan Ocean Space</p>
          <p className="mt-4 max-w-[31rem] text-[1.05rem] leading-8 text-[#4f5868]">Ekosistem distribusi, retail, sub retail, dan lifestyle yang dibangun untuk kecepatan eksekusi, kontrol operasional, dan pertumbuhan berkelanjutan.</p>
          <div className="mt-8 border-t border-black/10 pt-5">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <a href="https://www.linkedin.com/company/ocean-space-group/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]">LinkedIn <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" /></a>
              <a href="https://www.instagram.com/oceanspace.career/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]">Instagram <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="pt-10 lg:pl-12 lg:pt-0">
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
            <div>
              <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22]">Perusahaan</h3>
              <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171]">
                <li><a href="/" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Beranda</a></li>
                <li><a href="/about" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Tentang</a></li>
                <li><a href="/career" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Karier</a></li>
                <li><a href="/contact" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22]">Unit Bisnis</h3>
              <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171]">
                <li><a href="/distribusi" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">HP Distribusi</a></li>
                <li><a href="/retail" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Retail</a></li>
                <li><a href="/sub-retail" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Sub Retail</a></li>
                <li><a href="/lifestyle" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Lifestyle</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22]">Operasional</h3>
              <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171]">
                <li className="flex min-h-[44px] items-center">16 Titik Operasional</li>
                <li className="flex min-h-[44px] items-center">16 Depo Aktif</li>
                <li className="flex min-h-[44px] items-center">4 Klaster Wilayah</li>
                <li><a href="/contact" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Lihat Detail Lokasi</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-black/10 pt-6">
        <div className="grid gap-4 text-sm text-[#6b7280] sm:grid-cols-2 sm:items-center">
          <p>&copy; <span data-year></span> Ocean Space | Tumbuh dengan Integritas, Melaju dengan Eksekusi.</p>
          <div className="flex flex-wrap items-center gap-6 sm:justify-end">
            <a href="sitemap.xml" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Jelajahi Sitemap</a>
            <a href="https://apriansyah.rizqis.com" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]" target="_blank" rel="noopener noreferrer">Crafted by Web App Developer</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  
  
  
    </>
  );
};

export default CareerApply;
