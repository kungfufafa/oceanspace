import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
        <a href="/" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Beranda</a>
        <a href="/about" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Tentang</a>
        <a href="/distribusi" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">HP Distribusi</a>
        <a href="/retail" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Retail</a>
        <a href="/sub-retail" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Sub Retail</a>
        <a href="/lifestyle" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Lifestyle</a>
      </nav>
      <div className="hidden items-center gap-2 lg:flex">
        <a href="/career" data-header-action="secondary"
          className="inline-flex min-h-[44px] items-center justify-center rounded-[0.14rem] border border-[#d4dbe6] bg-[#f7f9fc] px-4 text-[0.84rem] font-medium leading-[1.1] text-[#243041] transition-colors hover:border-[#2563eb]/35 hover:text-[#1d4ed8]">Karier</a>
        <a href="/contact" data-header-action="primary"
          className="inline-flex min-h-[44px] items-center justify-center rounded-[0.14rem] bg-[#2563eb] px-4 text-[0.84rem] font-medium leading-[1.1] text-white transition-colors hover:bg-[#1d4ed8]">Kontak</a>
      </div>
    </div>
    <nav id="mobile-nav" data-mobile-nav className="absolute inset-x-0 top-full hidden border border-[#d8e0ec] border-t-0 bg-white px-4 py-3 shadow-[0_20px_40px_rgba(18,24,38,0.08)] lg:hidden"
      aria-label="Navigasi utama mobile">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-1">
        <a href="/" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Beranda</a>
        <a href="/about" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Tentang</a>
        <a href="/distribusi" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">HP Distribusi</a>
        <a href="/retail" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Retail</a>
        <a href="/sub-retail" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Sub Retail</a>
        <a href="/lifestyle" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Lifestyle</a>
        <a href="/career" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Karier</a>
        <a href="/contact" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Kontak</a>
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
            <p data-motion-enter="eyebrow" className="lc-eyebrow">Grup perusahaan distribusi, retail, sub retail, dan lifestyle</p>
            <h1 data-motion-enter="heading" className="mt-4 max-w-full sm:max-w-[12ch] font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">Ocean Space menjalankan empat unit bisnis dengan tata kelola dan eksekusi yang jelas.</h1>
            <p data-motion-enter="summary" className="mt-5 max-w-[33rem] text-[1rem] leading-8 text-[#556070]">Tim kami memakai satu standar operasi untuk kemitraan, ekspansi, dan keputusan sehari-hari.</p>
            <div data-motion-enter="actions" className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/contact" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Hubungi tim korporat</a>
              <span className="text-sm font-medium text-[#5c667b]">4 unit bisnis / 16 titik aktif</span>
            </div>
          </div>
          <div data-motion-enter="panel" className="relative mx-auto w-full max-w-[36rem]">
            {/*  Ultra-Clean Laravel 11 Vector/Bento Wrapper  */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/60 p-2 sm:p-4 shadow-sm">
              <div className="relative z-10 grid gap-3 sm:gap-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(11rem,0.8fr)]">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 text-sm bg-white">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#FF2D20] shadow-[0_0_8px_rgba(255,45,32,0.4)]"></span>
                      <span className="font-bold tracking-tight text-slate-900">Network Matrix</span>
                    </div>
                    <span className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500">Live</span>
                  </div>
                  <div className="relative overflow-hidden bg-white flex-1 flex items-center justify-center p-0 aspect-[1.12/1]">
                    <img src="/images/hero-vector-laravel.png" alt="Ocean Space Dashboard Interface" className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105" loading="eager" fetchpriority="high" />
                  </div>
                </div>
                <div className="grid gap-3 sm:gap-4">
                  <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                    <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#FF2D20]">Unit Bisnis</p>
                    <p className="mt-2 text-[2.5rem] font-extrabold tracking-tight text-slate-900 leading-none">4</p>
                  </div>
                  <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                    <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#0062FF]">Titik Aktif</p>
                    <p className="mt-2 text-[2.5rem] font-extrabold tracking-tight text-slate-900 leading-none">16</p>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#FF2D20]/5 blur-2xl transition-all duration-500 group-hover:bg-[#FF2D20]/10"></div>
                    <p className="relative z-10 font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#FF2D20]">Budaya Inti</p>
                    <p className="relative z-10 mt-3 text-[1.25rem] font-extrabold tracking-tight text-slate-900 leading-tight">JUJUR</p>
                    <p className="relative z-10 mt-1 text-sm text-slate-500 font-medium">5 prinsip kerja</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-3 sm:mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-600 shadow-sm sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <p>Empat unit bisnis, satu standar operasi.</p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0062FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0062FF]"></span>
                  </span>
                  <p className="font-mono text-[0.68rem] uppercase tracking-widest text-slate-500">ID / NODE-16</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="lc-band bg-[#f6f9fd]">
      <div className="lc-shell px-0 md:pl-5 md:pr-0 lg:pl-6 lg:pr-0">
        <div className="relative grid gap-0 md:grid-cols-[minmax(15rem,0.7fr)_minmax(0,1.3fr)]">
          <div className="flex items-center border-b border-black/10 py-6 md:border-b-0 md:pr-8">
            <p className="font-mono text-[0.8rem] uppercase leading-[1.9] tracking-[0.16em] text-[#62718a]">Powering ideas for disciplined growth</p>
          </div>
          <div className="relative overflow-hidden border-x border-black/10 bg-white">
            <div className="flex w-max animate-home-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
              <div className="lc-logo-marquee-card"><img src="/images/unit-media-selular-indonesia.png" alt="Logo PT. Media Selular Indonesia" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
              <div className="lc-logo-marquee-card"><img src="/images/unit-cv-top-selular.png" alt="Logo CV. Top Selular" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
              <div className="lc-logo-marquee-card"><img src="/images/unit-retail-indonesia-selalu-maju.png" alt="Logo PT. Retail Indonesia Selalu Maju" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
              <div className="lc-logo-marquee-card"><img src="/images/unit-complete-solusi-nusantara.png" alt="Logo PT. Complete Solusi Nusantara" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
              <div className="lc-logo-marquee-card"><img src="/images/unit-complite-plus.png" alt="Logo Toko Complite+" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
              <div className="lc-logo-marquee-card"><img src="/images/unit-unboxing.png" alt="Logo Toko Unboxing" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
              <div className="lc-logo-marquee-card"><img src="/images/unit-complete-selular.png" alt="Logo Complete Selular" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
              <div className="lc-logo-marquee-card"><img src="/images/unit-mari-sukses-gemilang.png" alt="Logo PT. Mari Sukses Gemilang" loading="lazy" decoding="async" className="transition-transform duration-300 hover:scale-105" /></div>
              <div aria-hidden="true" className="lc-logo-marquee-card"><img src="/images/unit-media-selular-indonesia.png" alt="" loading="lazy" decoding="async" /></div>
              <div aria-hidden="true" className="lc-logo-marquee-card"><img src="/images/unit-cv-top-selular.png" alt="" loading="lazy" decoding="async" /></div>
              <div aria-hidden="true" className="lc-logo-marquee-card"><img src="/images/unit-retail-indonesia-selalu-maju.png" alt="" loading="lazy" decoding="async" /></div>
              <div aria-hidden="true" className="lc-logo-marquee-card"><img src="/images/unit-complete-solusi-nusantara.png" alt="" loading="lazy" decoding="async" /></div>
              <div aria-hidden="true" className="lc-logo-marquee-card"><img src="/images/unit-complite-plus.png" alt="" loading="lazy" decoding="async" /></div>
              <div aria-hidden="true" className="lc-logo-marquee-card"><img src="/images/unit-unboxing.png" alt="" loading="lazy" decoding="async" /></div>
              <div aria-hidden="true" className="lc-logo-marquee-card"><img src="/images/unit-complete-selular.png" alt="" loading="lazy" decoding="async" /></div>
              <div aria-hidden="true" className="lc-logo-marquee-card"><img src="/images/unit-mari-sukses-gemilang.png" alt="" loading="lazy" decoding="async" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="lc-band bg-white">
      <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
        <div data-motion-reveal="intro" className="mx-auto max-w-[54rem] text-center">
          <h2 className="font-display text-[clamp(2rem,4.6vw,4.35rem)] font-[500] leading-[0.96] tracking-[-0.05em] text-[#171a22]">Tiap unit mandiri. Seluruh grup bergerak dengan standar kerja yang sama.</h2>
        </div>
      </div>
    </section>

    <section className="lc-band bg-[#f6f9fd]">
      <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-start">
          <div data-motion-reveal="intro" className="max-w-[29rem]">
            <p className="lc-eyebrow">Kerangka kerja untuk tim dan mitra</p>
            <h2 className="mt-3 max-w-full sm:max-w-[11ch] font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Satu standar kerja untuk empat unit bisnis.</h2>
            <p className="mt-4 max-w-[28rem] text-[0.98rem] leading-7 text-[#596171]">Partner, kandidat, dan tim internal melihat peran, ritme, dan jalur keputusan yang sama.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="border border-[#d9e2ef] bg-white px-4 py-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Core</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">JUJUR</p>
                <p className="mt-2 text-sm text-[#556070]">5 prinsip kerja</p>
              </div>
              <div className="border border-[#d9e2ef] bg-white px-4 py-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Model</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">4 Unit</p>
              </div>
              <div className="border border-[#d9e2ef] bg-white px-4 py-4">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Operasi</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">16 Titik</p>
              </div>
            </div>
          </div>
          <div data-motion-reveal="panel" className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
            <div className="relative z-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[minmax(14rem,0.85fr)_minmax(0,1.15fr)]">
              <div className="relative overflow-hidden border-b border-slate-100 bg-white lg:border-b-0 lg:border-r flex items-center justify-center min-h-[300px]">
                <img src="/images/struktur-vector-laravel.png" alt="Arsitektur Organisasi Ocean Space" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#0062FF] font-semibold">Architecture</p>
                  <p className="mt-1 rounded bg-white px-2 text-[1.75rem] font-extrabold leading-tight tracking-tight text-slate-900 shadow-sm">4 Unit Bisnis</p>
                </div>
              </div>
              <div className="px-6 py-8 sm:px-8 bg-white">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-bold tracking-tight text-slate-900">Struktur Terintegrasi</p>
                  <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500">Node Array</p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <article className="group rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 transition-colors group-hover:text-slate-600">01 / Node</p>
                    <h3 className="mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">HP Distribusi</h3>
                    <p className="mt-1 text-sm text-slate-500 font-medium leading-relaxed">PT. Media Selular Indonesia & CV. Top Selular</p>
                  </article>
                  <article className="group rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 transition-colors group-hover:text-slate-600">02 / Node</p>
                    <h3 className="mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Retail</h3>
                    <p className="mt-1 text-sm text-slate-500 font-medium leading-relaxed">PT RISM & PT CSN</p>
                  </article>
                  <article className="group rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 transition-colors group-hover:text-slate-600">03 / Node</p>
                    <h3 className="mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Sub Retail</h3>
                    <p className="mt-1 text-sm text-slate-500 font-medium leading-relaxed">Complite+, Unboxing &amp; Complete Selular</p>
                  </article>
                  <article className="group rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 transition-colors group-hover:text-slate-600">04 / Node</p>
                    <h3 className="mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Lifestyle</h3>
                    <p className="mt-1 text-sm text-slate-500 font-medium leading-relaxed">PT Mari Sukses Gemilang</p>
                  </article>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-3 sm:mt-4 grid gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 text-sm font-medium text-slate-600 shadow-sm sm:grid-cols-3">
              <p className="flex items-start gap-2"><svg className="size-5 shrink-0 text-[#FF2D20]/70" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Partner membaca struktur tanpa briefing panjang.</p>
              <p className="flex items-start gap-2"><svg className="size-5 shrink-0 text-[#FF2D20]/70" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Peran unit tidak tumpang tindih.</p>
              <p className="flex items-start gap-2"><svg className="size-5 shrink-0 text-[#FF2D20]/70" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Tim mengeksekusi dengan bahasa kerja yang sama.</p>
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start">
          <div data-motion-reveal="intro" className="max-w-[28rem]">
            <p className="lc-eyebrow">Operasi skala nasional</p>
            <h2 className="mt-3 max-w-full sm:max-w-[10ch] font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Skala nasional tetap cepat dan terbaca.</h2>
            <p className="mt-4 max-w-[27rem] text-[0.98rem] leading-7 text-[#596171]">Cakupan wilayah, kapasitas aktif, dan ritme kerja terlihat dalam satu papan.</p>
          </div>
          <div data-motion-reveal="panel" className="overflow-hidden border border-[#d9e2ef] bg-[#f8fbff]">
            <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(14rem,0.92fr)]">
              <div className="border-b border-black/10 bg-white px-5 py-5 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-[#171a22]">Coverage Grid</p>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">All active</p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="border border-[#d9e2ef] bg-[#f8fbff] px-4 py-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Cluster 01</p>
                    <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Jawa</p>
                    <p className="mt-2 text-sm text-[#556070]">Primary distribution</p>
                  </div>
                  <div className="border border-[#d9e2ef] bg-white px-4 py-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Cluster 02</p>
                    <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Jabodetabek</p>
                    <p className="mt-2 text-sm text-[#556070]">Commercial acceleration</p>
                  </div>
                  <div className="border border-[#d9e2ef] bg-white px-4 py-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Cluster 03</p>
                    <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Sumatera</p>
                    <p className="mt-2 text-sm text-[#556070]">Regional growth</p>
                  </div>
                  <div className="border border-[#d9e2ef] bg-[#f8fbff] px-4 py-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Cluster 04</p>
                    <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Sulawesi</p>
                    <p className="mt-2 text-sm text-[#556070]">Operational reach</p>
                  </div>
                </div>
              </div>
              <div className="grid">
                <div className="border-b border-black/10 bg-white px-5 py-5">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">Titik Aktif</p>
                  <p className="mt-3 text-[2.5rem] font-semibold tracking-[-0.05em] text-[#171a22]">16</p>
                </div>
                <div className="border-b border-black/10 bg-[#f8fbff] px-5 py-5">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">Depo Aktif</p>
                  <p className="mt-3 text-[2.5rem] font-semibold tracking-[-0.05em] text-[#171a22]">16</p>
                </div>
                <div className="bg-white px-5 py-5">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">Mode Kerja</p>
                  <p className="mt-3 text-[1.15rem] font-semibold tracking-[-0.04em] text-[#171a22]">Tertib dan cepat</p>
                </div>
              </div>
            </div>
            <div className="grid gap-3 border-t border-black/10 bg-white px-5 py-4 text-sm text-[#556070] sm:grid-cols-3">
              <p>Tim mengontrol distribusi lintas wilayah.</p>
              <p>Kapasitas terbaca di setiap unit.</p>
              <p>Wilayah tumbuh tanpa kehilangan ritme kerja.</p>
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
          <div data-motion-reveal="intro" className="max-w-[28rem]">
            <p className="lc-eyebrow">Budaya kerja</p>
            <h2 className="mt-3 max-w-full sm:max-w-[11ch] font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Operasi membesar. Budaya kerja tetap manusiawi.</h2>
            <p className="mt-4 max-w-[27rem] text-[0.98rem] leading-7 text-[#596171]">Tim memakai empat motivasi untuk membaca dorongan kerja dan tanggung jawab harian.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/career" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Buka halaman karier</a>
              <a href="/about" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-black/10 bg-white px-5 text-sm font-semibold text-[#151821] transition-colors hover:border-black/20">Pelajari budaya JUJUR</a>
            </div>
          </div>
          <div data-motion-reveal="panel" className="overflow-hidden border border-[#d9e2ef] bg-white">
            <div className="grid border-b border-black/10 lg:grid-cols-[minmax(12rem,0.78fr)_minmax(0,1.22fr)]">
              <div className="border-b border-black/10 bg-[#f8fbff] px-5 py-5 lg:border-b-0 lg:border-r">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">Culture Model</p>
                <p className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-[#171a22]">JUJUR</p>
                <p className="mt-3 text-sm leading-6 text-[#556070]">Jujur dan Berintegritas, Unggul dalam Berkinerja, Jaga Pelanggan dan Tim, Ulet dan Bertumbuh, dan Rampung.</p>
              </div>
              <div className="px-5 py-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-[#171a22]">Empat motivasi kerja</p>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#62718a]">driver model</p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <article className="border border-[#d9e2ef] bg-white px-4 py-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">01</p>
                    <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Fear</h3>
                    <p className="mt-2 text-sm text-[#556070]">Menjaga disiplin dan mitigasi risiko.</p>
                  </article>
                  <article className="border border-[#d9e2ef] bg-[#f8fbff] px-4 py-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">02</p>
                    <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Desire</h3>
                    <p className="mt-2 text-sm text-[#556070]">Mendorong target dan pertumbuhan.</p>
                  </article>
                  <article className="border border-[#d9e2ef] bg-[#f8fbff] px-4 py-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">03</p>
                    <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Duty</h3>
                    <p className="mt-2 text-sm text-[#556070]">Menjaga tanggung jawab kepada tim dan pelanggan.</p>
                  </article>
                  <article className="border border-[#d9e2ef] bg-white px-4 py-4">
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">04</p>
                    <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#171a22]">Love</h3>
                    <p className="mt-2 text-sm text-[#556070]">Menjaga kepedulian dan keberlanjutan nilai.</p>
                  </article>
                </div>
              </div>
            </div>
            <div className="grid gap-3 bg-[#f6f9fd] px-5 py-4 text-sm text-[#556070] sm:grid-cols-3">
              <p>JUJUR menetapkan lima prinsip kerja.</p>
              <p>Fear, Desire, Duty, Love menjelaskan dorongan tim.</p>
              <p>Tim memakai keduanya bersama saat bekerja.</p>
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
            <p className="lc-eyebrow">Untuk partner, kandidat, dan publik</p>
            <h2 className="mt-3 max-w-full sm:max-w-[12ch] font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Partner, kandidat, dan publik butuh jawaban berbeda.</h2>
          </div>
          <p data-motion-reveal="intro" className="max-w-[24rem] text-[0.98rem] leading-7 text-[#596171]">Anda menemukan peran unit, budaya kerja, dan kredibilitas grup tanpa berpindah halaman.</p>
        </div>
        <div data-motion-group="cards" className="mt-10 grid gap-0 border-y border-black/10 lg:grid-cols-3">
          <article data-motion-reveal="card" className="relative border-b border-black/10 bg-white p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <span aria-hidden="true" className="absolute right-6 top-6 text-[2.5rem] font-semibold tracking-[-0.06em] text-[#6179a8]">01</span>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#1e40af]">Partner</p>
            <h3 className="mt-8 text-[1.45rem] font-semibold tracking-[-0.04em] text-[#171a22]">Struktur kolaborasi yang cepat terbaca</h3>
            <p className="mt-3 text-sm leading-6 text-[#596171]">Anda melihat peran unit dan jalur kerja sama tanpa membuka banyak halaman.</p>
            <p className="mt-6 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Hasilnya</p>
            <p className="mt-2 text-sm font-medium text-[#243041]">Peran unit jelas. Tidak tumpang tindih.</p>
          </article>
          <article data-motion-reveal="card" className="relative border-b border-black/10 bg-[#f8fbff] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <span aria-hidden="true" className="absolute right-6 top-6 text-[2.5rem] font-semibold tracking-[-0.06em] text-[#6179a8]">02</span>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#1e40af]">Calon karyawan</p>
            <h3 className="mt-8 text-[1.45rem] font-semibold tracking-[-0.04em] text-[#171a22]">Budaya kerja yang konkret</h3>
            <p className="mt-3 text-sm leading-6 text-[#596171]">Tim menerjemahkan JUJUR dan empat motivasi menjadi perilaku kerja nyata.</p>
            <p className="mt-6 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Hasilnya</p>
            <p className="mt-2 text-sm font-medium text-[#243041]">Budaya kerja muncul di perilaku harian.</p>
          </article>
          <article data-motion-reveal="card" className="relative bg-white p-6 sm:p-8">
            <span aria-hidden="true" className="absolute right-6 top-6 text-[2.5rem] font-semibold tracking-[-0.06em] text-[#6179a8]">03</span>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#1e40af]">Publik umum</p>
            <h3 className="mt-8 text-[1.45rem] font-semibold tracking-[-0.04em] text-[#171a22]">Organisasi yang tertib</h3>
            <p className="mt-3 text-sm leading-6 text-[#596171]">Struktur informasi dan bahasa visual menunjukkan perusahaan yang rapi.</p>
            <p className="mt-6 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[#62718a]">Hasilnya</p>
            <p className="mt-2 text-sm font-medium text-[#243041]">Perusahaan terasa modern dan teratur.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="bg-[#f6f9fd]">
      <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <div data-motion-reveal="intro" className="mx-auto max-w-[42rem] text-center">
          <p className="lc-eyebrow">Hubungi Ocean Space</p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#171a22]">Bicarakan kemitraan, ekspansi, atau rekrutmen dengan tim kami.</h2>
          <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Kirim kebutuhan korporat atau peluang kerja sama lewat jalur kontak yang sama.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/contact" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Hubungi tim korporat</a>
            <a href="/career" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-black/10 bg-white px-5 text-sm font-semibold text-[#151821] transition-colors hover:border-black/20">Lihat peluang karier</a>
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
              <a href="https://www.linkedin.com/company/ocean-space-group/" target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]">
                LinkedIn
                <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/oceanspace.career/" target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]">
                Instagram
                <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" />
              </a>
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
            <a href="https://apriansyah.rizqis.com" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]" target="_blank" rel="noopener noreferrer">Dibuat oleh Web App Developer</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  
    </>
  );
};

export default Home;
