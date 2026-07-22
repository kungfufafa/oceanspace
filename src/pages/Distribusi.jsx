import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Distribusi = () => {
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
        <div className="lc-hero-grid grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(22rem,0.84fr)] lg:items-center lg:gap-12">
          <div className="lc-hero-copy max-w-[40rem]">
            <p data-motion-enter="eyebrow" className="lc-eyebrow">Unit Bisnis: HP Distribusi</p>
            <h1 data-motion-enter="heading" className="lc-hero-title mt-4 max-w-full sm:max-w-[14ch] font-display text-[clamp(2.55rem,4.6vw,4rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">Menjadi perusahaan distribusi terpercaya.</h1>
            <p data-motion-enter="summary" className="lc-hero-body mt-5 max-w-[33rem] text-[1rem] leading-8 text-[#556070]">Tim menumbuhkan brand dengan jujur dan kinerja unggul di Indonesia.</p>
            <div data-motion-enter="meta" className="lc-brand-shelf" aria-label="Entitas unit HP Distribusi">
              <p className="lc-brand-kicker">Entitas operasional</p>
              <div className="lc-brand-grid">
                <article className="lc-brand-card">
                  <div className="lc-brand-mark">
                    <img src="/images/unit-media-selular-indonesia.png" alt="Logo PT. Media Selular Indonesia" loading="lazy" decoding="async" />
                  </div>
                  <p className="lc-brand-name">PT. Media Selular Indonesia</p>
                </article>
                <article className="lc-brand-card">
                  <div className="lc-brand-mark">
                    <img src="/images/unit-cv-top-selular.png" alt="Logo CV. Top Selular" loading="lazy" decoding="async" />
                  </div>
                  <p className="lc-brand-name">CV. Top Selular</p>
                </article>
              </div>
            </div>
            <div data-motion-enter="actions" className="lc-hero-actions mt-8 flex flex-wrap items-center gap-4">
              <a href="/contact" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Hubungi tim korporat</a>
              <a href="/career" data-motion-cta="true" className="button-secondary">Lihat peluang karier</a>
            </div>
          </div>
          {/*  Ultra-Clean Laravel 11 Vector/Bento Wrapper  */}
          <div data-motion-enter="panel" className="relative mx-auto w-full max-w-[36rem] lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
              <div className="relative z-10 grid gap-3 sm:gap-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(11rem,0.8fr)]">
                <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 text-sm bg-white">
                    <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#1e40af] shadow-[0_0_8px_rgba(30,64,175,0.4)]"></span><span className="font-bold tracking-tight text-slate-900">Distribution Matrix</span></div>
                    <span className="font-mono text-[0.66rem] uppercase tracking-widest text-[#1e40af]">Live</span>
                  </div>
                  <div className="relative flex-1 overflow-hidden bg-white flex items-center justify-center p-0 aspect-[1.12/1]">
                    <img src="/images/distribusi_hero_cover.png" alt="Dashboard Distribusi Ocean Space" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" loading="eager" fetchpriority="high" />
                  </div>
                </div>
                <div className="grid gap-3 sm:gap-4">
                  <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"><p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#1e40af]">Entitas</p><p className="mt-2 text-[2.5rem] font-extrabold tracking-tight text-slate-900 leading-none">2</p></div>
                  <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"><p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#0062FF]">Visi</p><p className="mt-2 text-[1.5rem] font-extrabold tracking-tight text-slate-900 leading-none">Terpercaya</p></div>
                  <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md"><p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#1e40af]">Nilai</p><p className="mt-2 text-[1.4rem] font-extrabold tracking-tight text-slate-900 leading-none">Unggul</p></div>
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
          <div data-motion-reveal="intro" className="max-w-[28rem]">
            <p className="lc-eyebrow">Visi &amp; Misi</p>
            <h2 className="mt-3 max-w-full sm:max-w-[14ch] font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Arah utama unit bisnis HP Distribusi.</h2>
            <p className="mt-4 max-w-[27rem] text-[0.98rem] leading-7 text-[#596171]">Visi dan misi yang memandu kerja unit ini.</p>
          </div>
          <div data-motion-reveal="panel" className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
            <div className="relative z-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[minmax(14rem,0.85fr)_minmax(0,1.15fr)]">
              <div className="relative overflow-hidden border-b border-slate-100 bg-slate-50 lg:border-b-0 lg:border-r flex items-center justify-center min-h-[300px]">
                <img src="/images/distribusi_hero.png" alt="Diagram operasional unit HP Distribusi Ocean Space" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute bottom-6 left-6 z-20 pr-4">
                  <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#0062FF] font-semibold">Visi &amp; Misi</p>
                  <p className="mt-1 text-[2.5rem] font-extrabold tracking-tight text-slate-900 drop-shadow-sm leading-tight">Terpercaya</p>
                  <p className="mt-2 rounded bg-white px-2 text-sm font-medium leading-relaxed text-slate-600 shadow-sm">Menjadi perusahaan distribusi terpercaya.</p>
                </div>
              </div>
              <div className="px-6 py-8 sm:px-8 bg-white">
                <div className="flex items-center justify-between gap-4"><p className="text-sm font-bold tracking-tight text-slate-900">Poin Utama</p><p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500">4 Sorotan</p></div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <article className="group rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 group-hover:text-[#FF2D20] transition-colors">01</p>
                    <h3 className="mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Transparan, Adil, dan Bertanggung Jawab</h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-slate-500">kepada pelanggan, principal, dan mitra di setiap proses bisnis.</p>
                  </article>
                  <article className="group rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 group-hover:text-[#0062FF] transition-colors">02</p>
                    <h3 className="mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Kinerja Penjualan dan Distribusi yang Unggul</h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-slate-500">melalui disiplin eksekusi, data yang akurat, dan standar kerja yang konsisten.</p>
                  </article>
                  <article className="group rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 group-hover:text-[#FF2D20] transition-colors">03</p>
                    <h3 className="mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Hubungan Jangka Panjang</h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-slate-500">dengan pelanggan serta lingkungan kerja yang saling menghargai, aman, dan bertumbuh bagi tim.</p>
                  </article>
                  <article className="group rounded-xl border border-slate-100 bg-slate-50 px-5 py-5 transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-sm">
                    <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400 group-hover:text-[#0062FF] transition-colors">04</p>
                    <h3 className="mt-2 text-[1.1rem] font-extrabold tracking-tight text-slate-900">Organisasi, Wilayah, dan Kapabilitas Tim</h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-slate-500">dikembangkan secara bertahap, disiplin, dan berkelanjutan bersama pertumbuhan brand.</p>
                  </article>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-3 sm:mt-4 grid gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-5 text-sm font-medium text-slate-600 shadow-sm sm:grid-cols-3">
              <p className="flex items-start gap-2"><svg className="size-5 shrink-0 text-[#FF2D20]/70" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Tim menumbuhkan brand.</p>
              <p className="flex items-start gap-2"><svg className="size-5 shrink-0 text-[#FF2D20]/70" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Data akurat.</p>
              <p className="flex items-start gap-2"><svg className="size-5 shrink-0 text-[#FF2D20]/70" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Komitmen tuntas dan tepat waktu.</p>
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div data-motion-reveal="intro" className="max-w-[28rem]">
            <p className="lc-eyebrow">Lima Misi</p>
            <h2 className="mt-3 max-w-full sm:max-w-[14ch] font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Lima misi unit bisnis HP Distribusi.</h2>
            <p className="mt-4 max-w-[27rem] text-[0.98rem] leading-7 text-[#596171]">Komitmen utama unit ini.</p>
          </div>
          <div data-motion-reveal="panel" className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
            <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col">
              <div className="group grid gap-4 border-b border-slate-100 px-6 py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:items-start hover:bg-slate-50 transition-colors">
                <p className="font-mono text-[1.75rem] font-extrabold tracking-tight text-slate-300 group-hover:text-[#0062FF] transition-colors">01</p>
                <p className="text-sm font-medium leading-relaxed text-slate-600">Menjalankan distribusi secara transparan, adil, dan bertanggung jawab kepada pelanggan, principal, dan mitra di setiap proses bisnis.</p>
              </div>
              <div className="group grid gap-4 border-b border-slate-100 px-6 py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:items-start hover:bg-slate-50 transition-colors">
                <p className="font-mono text-[1.75rem] font-extrabold tracking-tight text-slate-300 group-hover:text-[#FF2D20] transition-colors">02</p>
                <p className="text-sm font-medium leading-relaxed text-slate-600">Mencapai kinerja penjualan dan distribusi yang unggul melalui disiplin eksekusi, data yang akurat, dan standar kerja yang konsisten.</p>
              </div>
              <div className="group grid gap-4 border-b border-slate-100 px-6 py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:items-start hover:bg-slate-50 transition-colors">
                <p className="font-mono text-[1.75rem] font-extrabold tracking-tight text-slate-300 group-hover:text-[#0062FF] transition-colors">03</p>
                <p className="text-sm font-medium leading-relaxed text-slate-600">Membangun hubungan jangka panjang dengan pelanggan serta menciptakan lingkungan kerja yang saling menghargai, aman, dan bertumbuh bagi tim.</p>
              </div>
              <div className="group grid gap-4 border-b border-slate-100 px-6 py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:items-start hover:bg-slate-50 transition-colors">
                <p className="font-mono text-[1.75rem] font-extrabold tracking-tight text-slate-300 group-hover:text-[#FF2D20] transition-colors">04</p>
                <p className="text-sm font-medium leading-relaxed text-slate-600">Mengembangkan organisasi, wilayah, dan kapabilitas tim secara bertahap, disiplin, dan berkelanjutan bersama pertumbuhan brand.</p>
              </div>
              <div className="group grid gap-4 border-b border-slate-100 px-6 py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:items-start hover:bg-slate-50 transition-colors">
                <p className="font-mono text-[1.75rem] font-extrabold tracking-tight text-slate-300 group-hover:text-[#0062FF] transition-colors">05</p>
                <p className="text-sm font-medium leading-relaxed text-slate-600">Menyelesaikan setiap komitmen dan tanggung jawab dengan tuntas, tepat waktu, dan dapat dipertanggungjawabkan.</p>
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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[32rem]">
            <p className="lc-eyebrow">Visi Utama</p>
            <h2 className="mt-3 max-w-full sm:max-w-[17ch] font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Menjadi perusahaan distribusi terpercaya yang menumbuhkan brand dengan jujur, unggul, dan berkelanjutan di Indonesia.</h2>
          </div>
          <p className="max-w-[24rem] text-[0.98rem] leading-7 text-[#596171]">Jujur, unggul, dan berkelanjutan di Indonesia.</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
            <span aria-hidden="true" className="absolute right-6 top-6 font-mono text-[2.5rem] font-extrabold tracking-tight text-slate-100 transition-colors group-hover:text-slate-200">01</span>
            <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#0062FF]">Visi</p>
            <h3 className="mt-8 text-[1.5rem] font-extrabold tracking-tight text-slate-900 leading-tight">Perusahaan Distribusi Terpercaya</h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">Menjadi perusahaan distribusi terpercaya.</p>
            <div className="mt-8 border-t border-slate-100 pt-5">
              <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400">Inti</p>
              <p className="mt-1 text-sm font-bold text-slate-900">Terpercaya.</p>
            </div>
          </article>
          <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
            <span aria-hidden="true" className="absolute right-6 top-6 font-mono text-[2.5rem] font-extrabold tracking-tight text-slate-100 transition-colors group-hover:text-slate-200">02</span>
            <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#FF2D20]">Arah</p>
            <h3 className="mt-8 text-[1.5rem] font-extrabold tracking-tight text-slate-900 leading-tight">Menumbuhkan Brand</h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">dengan jujur, unggul, dan berkelanjutan di Indonesia.</p>
            <div className="mt-8 border-t border-slate-100 pt-5">
              <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400">Inti</p>
              <p className="mt-1 text-sm font-bold text-slate-900">Jujur, unggul, dan berkelanjutan.</p>
            </div>
          </article>
          <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
            <span aria-hidden="true" className="absolute right-6 top-6 font-mono text-[2.5rem] font-extrabold tracking-tight text-slate-100 transition-colors group-hover:text-slate-200">03</span>
            <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#0062FF]">Komitmen</p>
            <h3 className="mt-8 text-[1.5rem] font-extrabold tracking-tight text-slate-900 leading-tight">Tuntas dan Tepat Waktu</h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">Menyelesaikan setiap komitmen dan tanggung jawab dengan tuntas, tepat waktu, dan dapat dipertanggungjawabkan.</p>
            <div className="mt-8 border-t border-slate-100 pt-5">
              <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-400">Inti</p>
              <p className="mt-1 text-sm font-bold text-slate-900">Dapat dipertanggungjawabkan.</p>
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
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#171a22]">Hubungi tim Ocean Space.</h2>
          <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Buka halaman kontak atau lihat lowongan yang sedang dibuka.</p>
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

export default Distribusi;
