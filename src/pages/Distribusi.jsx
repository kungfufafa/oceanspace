import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MotionReveal,
  MotionCard,
  MotionButton,
  MotionStagger,
  MotionStaggerItem,
} from '../components/Motion.jsx';

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
              <MotionReveal yOffset={25} className="lc-hero-copy max-w-[40rem]">
                <p className="lc-eyebrow">Unit Bisnis: HP Distribusi</p>
                <h1 className="lc-hero-title mt-4 max-w-full sm:max-w-[14ch] font-display text-[clamp(2.55rem,4.6vw,4rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">Menjadi perusahaan distribusi terpercaya.</h1>
                <p className="lc-hero-body mt-5 max-w-[33rem] text-[1rem] leading-8 text-[#556070]">Tim menumbuhkan brand dengan jujur dan kinerja unggul di Indonesia.</p>
                <div className="lc-brand-shelf" aria-label="Entitas unit HP Distribusi">
                  <p className="lc-brand-kicker">Entitas operasional</p>
                  <MotionStagger className="lc-brand-grid">
                    <MotionStaggerItem>
                      <MotionCard className="lc-brand-card">
                        <div className="lc-brand-mark">
                          <img src="/images/unit-media-selular-indonesia.png" alt="Logo PT. Media Selular Indonesia" loading="lazy" decoding="async" />
                        </div>
                        <p className="lc-brand-name">PT. Media Selular Indonesia</p>
                      </MotionCard>
                    </MotionStaggerItem>
                    <MotionStaggerItem>
                      <MotionCard className="lc-brand-card">
                        <div className="lc-brand-mark">
                          <img src="/images/unit-cv-top-selular.png" alt="Logo CV. Top Selular" loading="lazy" decoding="async" />
                        </div>
                        <p className="lc-brand-name">CV. Top Selular</p>
                      </MotionCard>
                    </MotionStaggerItem>
                  </MotionStagger>
                </div>
                <div className="lc-hero-actions mt-8 flex flex-wrap items-center gap-4">
                  <MotionButton>
                    <a href="/contact" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Hubungi tim korporat</a>
                  </MotionButton>
                  <MotionButton>
                    <a href="/career" className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#d4dbe6] bg-[#f7f9fc] px-5 text-sm font-semibold text-[#243041] transition-colors hover:border-[#2563eb]/35 hover:text-[#1d4ed8]">Lihat peluang karier</a>
                  </MotionButton>
                </div>
              </MotionReveal>
              <MotionReveal delay={0.15} yOffset={30} className="relative mx-auto w-full max-w-[36rem] lg:max-w-none">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
                  <div className="relative z-10 grid gap-3 sm:gap-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(11rem,0.8fr)]">
                    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 text-sm bg-white">
                        <div className="flex items-center gap-3"><span className="os-pulse-dot h-2 w-2 rounded-full bg-[#1e40af] text-[#1e40af]"></span><span className="font-bold tracking-tight text-slate-900">Distribution Matrix</span></div>
                        <span className="font-mono text-[0.66rem] uppercase tracking-widest text-[#1e40af]">Live</span>
                      </div>
                      <div className="relative flex-1 overflow-hidden bg-white flex items-center justify-center p-0 aspect-[1.12/1]">
                        <img src="/images/distribusi_hero_cover.png" alt="Dashboard Distribusi Ocean Space" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" loading="eager" fetchpriority="high" />
                      </div>
                    </div>
                    <div className="grid gap-3 sm:gap-4">
                      <MotionCard className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
                        <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#1e40af]">Entitas</p>
                        <p className="mt-2 text-[2.5rem] font-extrabold tracking-tight text-slate-900 leading-none">2</p>
                      </MotionCard>
                      <MotionCard className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
                        <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#0062FF]">Visi</p>
                        <p className="mt-2 text-[1.5rem] font-extrabold tracking-tight text-slate-900 leading-none">Terpercaya</p>
                      </MotionCard>
                      <MotionCard className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
                        <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#1e40af]">Nilai</p>
                        <p className="mt-2 text-[1.4rem] font-extrabold tracking-tight text-slate-900 leading-none">Unggul</p>
                      </MotionCard>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="lc-band bg-[#f6f9fd]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <MotionReveal className="max-w-[32rem]">
              <p className="lc-eyebrow">Dua Badan Usaha Distribusi</p>
              <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Badan Usaha Resmi HP Distribusi.</h2>
            </MotionReveal>
            <MotionStagger className="mt-10 grid gap-6 sm:grid-cols-2">
              <MotionStaggerItem>
                <MotionCard className="border border-[#d9e2ef] bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#171a22]">PT. Media Selular Indonesia</h3>
                  <p className="mt-3 text-sm leading-6 text-[#596171]">Mendistribusikan perangkat pintar dan kebutuhan jaringan seluler dengan cakupan luas dan manajemen stok teruji.</p>
                </MotionCard>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <MotionCard className="border border-[#d9e2ef] bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#171a22]">CV. Top Selular</h3>
                  <p className="mt-3 text-sm leading-6 text-[#596171]">Mendukung rantai pasok dan pasokan grosir ke berbagai titik penjualan regional dengan keandalan operasional.</p>
                </MotionCard>
              </MotionStaggerItem>
            </MotionStagger>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d8e0ec] bg-white text-[#121826]">
        <div className="lc-shell py-14 sm:py-16">
          <div className="grid gap-4 text-sm text-[#6b7280] sm:grid-cols-2 sm:items-center">
            <p>&copy; <span data-year></span> Ocean Space | HP Distribusi</p>
            <div className="flex flex-wrap items-center gap-6 sm:justify-end">
              <a href="/privacy" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Kebijakan Privasi</a>
              <a href="/contact" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Kontak</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Distribusi;
