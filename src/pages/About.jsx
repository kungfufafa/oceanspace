import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <header className="sticky top-0 z-50 overflow-visible border-b border-[#d8e0ec] bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]">
    <div className="mx-auto flex min-h-[4.25rem] w-full max-w-[88rem] items-center gap-4 px-4 sm:min-h-[4.5rem] sm:px-5 lg:px-6">
      <a href="/" className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center" aria-label="Beranda Ocean Space">
        <img src="/images/logo-color.png" alt="Logo Ocean Space" className="h-7 w-auto sm:h-8" loading="eager" decoding="async" />
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
  <main id="main-content" tabIndex={-1} className="w-full overflow-x-hidden">
    <section className="lc-band bg-white">
      <div className="lc-shell py-14 sm:py-16 lg:py-20">
        <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(22rem,0.86fr)] lg:items-center lg:gap-12">
          <div className="max-w-[38rem]">
            <p data-motion-enter="eyebrow" className="lc-eyebrow">Tentang Ocean Space</p>
            <h1 data-motion-enter="heading" className="mt-4 max-w-full sm:max-w-[12ch] font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">Ocean Space tumbuh lewat integritas dan disiplin eksekusi.</h1>
            <p data-motion-enter="summary" className="mt-5 max-w-[33rem] text-[1rem] leading-8 text-[#556070]">Kami menaungi distribusi, retail, sub retail, dan lifestyle dalam satu ekosistem operasional nasional.</p>
            <div data-motion-enter="actions" className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/contact" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Hubungi tim korporat</a>
              <a href="/career" data-motion-cta="true" className="button-secondary">Lihat peluang karier</a>
            </div>
          </div>
          {/*  Ultra-Clean Laravel 11 Vector/Bento Wrapper  */}
          <div data-motion-enter="panel" className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
            <div className="relative z-10 grid gap-3 sm:gap-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(11rem,0.8fr)]">
              <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 text-sm bg-white">
                  <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#FF2D20] shadow-[0_0_8px_rgba(255,45,32,0.4)]"></span><span className="font-bold tracking-tight text-slate-900">Ringkasan Grup</span></div>
                  <span className="font-mono text-[0.66rem] uppercase tracking-widest text-[#0062FF]">Ecosystem</span>
                </div>
                <div className="relative flex-1 overflow-hidden bg-white flex items-center justify-center p-0 aspect-[16/9] border-b border-slate-100">
                   <img src="/images/about_ecosystem.png" alt="Visual ekosistem 4 node Ocean Space" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" loading="eager" />
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm font-medium leading-relaxed text-slate-600">Kami membangun grup dari standar kerja. Tim menjaga pertumbuhan lewat operasional terpusat.</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-slate-700">Fondasi: JUJUR</span>
                    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-slate-700">Model: 4 Unit</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:gap-4">
                <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"><p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#FF2D20]">Unit Bisnis</p><p className="mt-2 text-[2.5rem] font-extrabold tracking-tight text-slate-900 leading-none">4</p></div>
                <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"><p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#0062FF]">Titik Aktif</p><p className="mt-2 text-[2.5rem] font-extrabold tracking-tight text-slate-900 leading-none">16</p></div>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#FF2D20]/5 blur-2xl transition-all duration-500 group-hover:bg-[#FF2D20]/10"></div>
                  <p className="relative z-10 font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#FF2D20]">Budaya Inti</p><p className="relative z-10 mt-3 text-[1.25rem] font-extrabold tracking-tight text-slate-900 leading-tight">JUJUR</p><p className="relative z-10 mt-1 text-sm font-medium text-slate-500">5 prinsip kerja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="lc-band bg-[#f6f9fd]">
      <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start">
          <div data-motion-reveal="intro" className="max-w-[29rem]">
            <p className="lc-eyebrow">Cara Grup Ini Bekerja</p>
            <h2 className="mt-3 max-w-full sm:max-w-[11ch] font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Pertumbuhan dibangun dari standar kerja yang sama.</h2>
            <p className="mt-4 max-w-[28rem] text-[0.98rem] leading-7 text-[#596171]">Ocean Space menambah unit bisnis tanpa memisahkan bahasa operasional. Organisasi tetap terbaca saat skala naik.</p>
          </div>
          <div data-motion-reveal="panel" className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
            <div className="relative z-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[minmax(14rem,0.85fr)_minmax(0,1.15fr)]">
              <div className="relative overflow-hidden border-b border-slate-100 bg-white lg:border-b-0 lg:border-r flex items-center justify-center min-h-[300px]">
                <img src="/images/jujur-core-vector.png" alt="JUJUR Core Principles" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" />
                <div className="absolute bottom-6 left-6 z-20 pr-4">
                  <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#0062FF] font-semibold">Operating Model</p>
                  <p className="mt-1 text-[2.5rem] font-extrabold tracking-tight text-slate-900 drop-shadow-sm leading-tight">JUJUR</p>
                  <p className="mt-2 rounded bg-white px-2 text-sm font-medium leading-relaxed text-slate-600 shadow-sm">Lima prinsip kerja inti grup.</p>
                </div>
              </div>
              <div className="px-6 py-8 sm:px-8 bg-white">
                <div className="flex items-center justify-between gap-4"><p className="text-sm font-bold tracking-tight text-slate-900">Lima Prinsip JUJUR</p><p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500">Core Values</p></div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <article className="group relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="relative z-10 font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 group-hover:text-[#FF2D20] transition-colors">Prinsip 01</p>
                    <h3 className="relative z-10 mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Jujur & Integritas</h3>
                    <p className="relative z-10 mt-1 text-sm font-medium leading-relaxed text-slate-500 transition-colors">Keputusan dari transparansi dan tanggung jawab.</p>
                  </article>
                  <article className="group relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="relative z-10 font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 group-hover:text-[#0062FF] transition-colors">Prinsip 02</p>
                    <h3 className="relative z-10 mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Unggul Berkinerja</h3>
                    <p className="relative z-10 mt-1 text-sm font-medium leading-relaxed text-slate-500 transition-colors">Eksekusi disiplin dan mengejar kualitas.</p>
                  </article>
                  <article className="group relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="relative z-10 font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 group-hover:text-[#FF2D20] transition-colors">Prinsip 03</p>
                    <h3 className="relative z-10 mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Jaga Pelanggan</h3>
                    <p className="relative z-10 mt-1 text-sm font-medium leading-relaxed text-slate-500 transition-colors">Hubungan jangka panjang dengan penghargaan penuh.</p>
                  </article>
                  <article className="group relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="relative z-10 font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 group-hover:text-[#0062FF] transition-colors">Prinsip 04</p>
                    <h3 className="relative z-10 mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Ulet & Bertumbuh</h3>
                    <p className="relative z-10 mt-1 text-sm font-medium leading-relaxed text-slate-500 transition-colors">Selalu belajar memegang tanggung jawab lebih.</p>
                  </article>
                  <article className="group relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 sm:col-span-2 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="relative z-10 font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 group-hover:text-[#FF2D20] transition-colors">Prinsip 05</p>
                    <h3 className="relative z-10 mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Rampung Tuntas</h3>
                    <p className="relative z-10 mt-1 text-sm font-medium leading-relaxed text-slate-500 transition-colors">Tim menyelesaikan setiap eksekusi sampai tuntas.</p>
                  </article>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-3 sm:mt-4 grid gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 text-sm font-medium text-slate-600 shadow-sm sm:grid-cols-3">
              <p className="flex items-start gap-2"><svg className="size-5 shrink-0 text-[#FF2D20]/70" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Tim memakai lima prinsip JUJUR sebagai standar kerja.</p>
              <p className="flex items-start gap-2"><svg className="size-5 shrink-0 text-[#FF2D20]/70" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Fear, Desire, Duty, dan Love mempercepat eksekusi.</p>
              <p className="flex items-start gap-2"><svg className="size-5 shrink-0 text-[#FF2D20]/70" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Tim menambah skala tanpa mengorbankan ketajaman kerja.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="lc-band bg-white">
      <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div data-motion-reveal="intro" className="max-w-[32rem]">
            <p className="lc-eyebrow">Peta Ekosistem</p>
            <h2 className="mt-3 max-w-full sm:max-w-[12ch] font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Empat unit bisnis, satu bahasa operasional.</h2>
          </div>
          <p data-motion-reveal="intro" className="max-w-[24rem] text-[0.98rem] leading-7 text-[#596171]">Empat unit bisnis. Tiap unit menaungi badan usaha atau brand di bawah standar operasi yang sama.</p>
        </div>
        <div data-motion-group="cards" className="lc-ecosystem-grid">
          <article data-motion-reveal="card" className="lc-ecosystem-card">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">01</p>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#171a22]">HP Distribusi</h3>
              <p className="mt-2 text-sm leading-6 text-[#596171]">PT. Media Selular Indonesia dan CV. Top Selular.</p>
            </div>
            <div className="lc-ecosystem-logos">
              <div className="lc-ecosystem-logo"><img src="/images/unit-media-selular-indonesia.png" alt="Logo PT. Media Selular Indonesia" loading="lazy" decoding="async" /></div>
              <div className="lc-ecosystem-logo"><img src="/images/unit-cv-top-selular.png" alt="Logo CV. Top Selular" loading="lazy" decoding="async" /></div>
            </div>
          </article>
          <article data-motion-reveal="card" className="lc-ecosystem-card lc-ecosystem-card--soft">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">02</p>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Retail</h3>
              <p className="mt-2 text-sm leading-6 text-[#596171]">PT. Retail Indonesia Selalu Maju dan PT. Complete Solusi Nusantara.</p>
            </div>
            <div className="lc-ecosystem-logos">
              <div className="lc-ecosystem-logo"><img src="/images/unit-retail-indonesia-selalu-maju.png" alt="Logo PT. Retail Indonesia Selalu Maju" loading="lazy" decoding="async" /></div>
              <div className="lc-ecosystem-logo"><img src="/images/unit-complete-solusi-nusantara.png" alt="Logo PT. Complete Solusi Nusantara" loading="lazy" decoding="async" /></div>
            </div>
          </article>
          <article data-motion-reveal="card" className="lc-ecosystem-card">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">03</p>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Sub Retail</h3>
              <p className="mt-2 text-sm leading-6 text-[#596171]">Toko Complite+, <a href="https://unboxing.id/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4 transition-colors hover:text-[#2563eb]">Toko Unboxing</a>, dan <a href="https://completeselular.co.id/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4 transition-colors hover:text-[#2563eb]">Complete Selular</a>.</p>
            </div>
            <div className="lc-ecosystem-logos">
              <div className="lc-ecosystem-logo"><img src="/images/unit-complite-plus.png" alt="Logo Toko Complite+" loading="lazy" decoding="async" /></div>
              <div className="lc-ecosystem-logo"><img src="/images/unit-unboxing.png" alt="Logo Toko Unboxing" loading="lazy" decoding="async" /></div>
              <div className="lc-ecosystem-logo"><img src="/images/unit-complete-selular.png" alt="Logo Complete Selular" loading="lazy" decoding="async" /></div>
            </div>
          </article>
          <article data-motion-reveal="card" className="lc-ecosystem-card lc-ecosystem-card--soft">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">04</p>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Lifestyle</h3>
              <p className="mt-2 text-sm leading-6 text-[#596171]">PT. Mari Sukses Gemilang.</p>
            </div>
            <div className="lc-ecosystem-logos">
              <div className="lc-ecosystem-logo"><img src="/images/unit-mari-sukses-gemilang.png" alt="Logo PT. Mari Sukses Gemilang" loading="lazy" decoding="async" /></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <div data-motion-reveal="intro" className="mx-auto max-w-[42rem] text-center">
          <p className="lc-eyebrow">Langkah berikutnya</p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#171a22]">Hubungi tim untuk budaya kerja, struktur grup, atau kolaborasi.</h2>
          <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Tim menjawab pertanyaan tentang karier dan kerja sama strategis.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/contact" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Hubungi tim korporat</a>
            <a href="/career" data-motion-cta="true" className="button-secondary">Lihat peluang karier</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="border-t border-[#d8e0ec] bg-white text-[#121826]">
    <div className="lc-shell py-14 sm:py-16">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
        <div className="pb-10 lg:border-r lg:border-black/10 lg:pb-0 lg:pr-12">
          <p className="lc-eyebrow">Terhubung dengan Ocean Space</p>
          <p className="mt-4 max-w-[31rem] text-[1.05rem] leading-8 text-[#4f5868]">Distribusi, retail, sub retail, dan lifestyle. Empat unit, satu standar operasi.</p>
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
                <li><a href="/privacy" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Kebijakan Privasi</a></li>
                <li><a href="/subprocessors" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Sub-processor / DPA</a></li>
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
            <a href="/privacy" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Kebijakan Privasi</a>
            <a href="/subprocessors" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Sub-processor / DPA</a>
            <a href="/sitemap.xml" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Jelajahi Sitemap</a>
            <a href="https://apriansyah.rizqis.com" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]" target="_blank" rel="noopener noreferrer">Crafted by Web App Developer</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
    </>
  );
};

export default About;
