import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <header
    className="sticky top-0 z-50 overflow-visible border-b border-[#d8e0ec] bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]">
    <div
      className="mx-auto flex min-h-[4.25rem] w-full max-w-[88rem] items-center gap-4 px-4 sm:min-h-[4.5rem] sm:px-5 lg:px-6">
      <a href="/" className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center"
        aria-label="Beranda Ocean Space">
        <img src="images/logo-color.png" alt="Logo Ocean Space" className="h-7 w-auto sm:h-8" loading="eager"
          decoding="async" />
      </a>
      <button type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav"
        className="ml-auto inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[0.14rem] border border-[#d4dbe6] bg-[#f7f9fc] px-3 py-2 text-sm font-semibold text-[#243041] transition-colors hover:border-[#2563eb]/30 hover:text-[#1d4ed8] lg:hidden">
        Menu
      </button>
      <nav className="mx-auto hidden flex-1 items-center justify-center gap-[1.35rem] lg:flex xl:gap-[1.55rem]"
        aria-label="Navigasi utama">
        <a href="/" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Beranda</a>
        <a href="/about" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Tentang</a>
        <a href="/distribusi" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">HP
          Distribusi</a>
        <a href="/retail" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Retail</a>
        <a href="/sub-retail" data-header-nav
          className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Sub
          Retail</a>
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
    <nav id="mobile-nav" data-mobile-nav
      className="absolute inset-x-0 top-full hidden border border-[#d8e0ec] border-t-0 bg-white px-4 py-3 shadow-[0_20px_40px_rgba(18,24,38,0.08)] lg:hidden"
      aria-label="Navigasi utama mobile">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-1">
        <a href="/" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Beranda</a>
        <a href="/about" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Tentang</a>
        <a href="/distribusi" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">HP
          Distribusi</a>
        <a href="/retail" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Retail</a>
        <a href="/sub-retail" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Sub
          Retail</a>
        <a href="/lifestyle" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Lifestyle</a>
        <a href="/career" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Karier</a>
        <a href="/contact" data-mobile-link
          className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Kontak</a>
      </div>
    </nav>
  </header>
  <main className="w-full overflow-x-hidden">
    <section className="lc-band bg-white">
      <div className="lc-shell py-14 sm:py-16 lg:py-20">
        <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(22rem,0.86fr)] lg:items-center lg:gap-12">
          <div className="max-w-[38rem]">
            <p data-motion-enter="eyebrow" className="lc-eyebrow">Kontak Ocean Space</p>
            <h1 data-motion-enter="heading"
              className="mt-4 max-w-full sm:max-w-[12ch] font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">
              Mulai dari Head Office, lalu lanjut ke wilayah yang relevan.</h1>
            <p data-motion-enter="summary" className="mt-5 max-w-[34rem] text-[1rem] leading-8 text-[#556070]">Gunakan Head Office untuk rekrutmen dan
              komunikasi utama. Untuk kebutuhan lapangan, lanjutkan ke jaringan operasional berdasarkan wilayah.</p>
            <div data-motion-enter="actions" className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#head-office"
                data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Lihat
                kantor pusat</a>
              <a href="#peta-operasional" data-motion-cta="true" className="button-secondary">Lihat jaringan wilayah</a>
            </div>
          </div>
          {/*  Ultra-Clean Laravel 11 Bento Wrapper  */}
          <div data-motion-enter="panel" className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
            <div className="relative z-10 grid gap-3 sm:gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(11rem,0.9fr)]">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 text-sm bg-white">
                  <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#0062FF] shadow-[0_0_8px_rgba(0,98,255,0.4)]"></span><span className="font-bold tracking-tight text-slate-900">Alur Komunikasi</span></div>
                  <span className="font-mono text-[0.66rem] uppercase tracking-widest text-[#0062FF]">Head Office First</span>
                </div>
                <div className="p-6 sm:p-8 bg-white flex-1 flex flex-col justify-center">
                  <p className="text-[1.15rem] sm:text-[1.35rem] font-medium leading-relaxed text-slate-700">Mulai dari <span className="text-slate-900 font-semibold">Head Office</span> untuk kebutuhan rekrutmen dan komunikasi utama. Jika urusan Anda membutuhkan tindak lanjut lapangan, silakan gunakan direktori wilayah.</p>
                </div>
              </div>
              <div className="grid gap-3 sm:gap-4">
                <div className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md flex flex-col justify-center">
                  <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-[#0062FF]">Pusat Komunikasi</p>
                  <p className="mt-2 text-[1.4rem] font-extrabold tracking-tight text-slate-900 leading-none">JKT &amp; CRB</p>
                </div>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <div className="group rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md flex flex-col justify-center text-center">
                    <p className="text-[2rem] font-extrabold tracking-tight text-slate-900 leading-none">16</p>
                    <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 group-hover:text-[#0062FF]">Depo</p>
                  </div>
                  <div className="group rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md flex flex-col justify-center text-center">
                    <p className="text-[2rem] font-extrabold tracking-tight text-slate-900 leading-none">4</p>
                    <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 group-hover:text-[#0062FF]">Wilayah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="head-office" className="lc-band bg-white">
      <div className="lc-shell relative py-12 sm:py-14 lg:py-16">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <div data-motion-reveal="intro" className="max-w-[28rem]">
            <p className="lc-eyebrow">Head Office</p>
            <h2
              className="mt-3 max-w-full sm:max-w-[11ch] font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">
              Kontak utama untuk rekrutmen dan komunikasi pusat.</h2>
            <p className="mt-4 max-w-[27rem] text-[0.98rem] leading-7 text-[#596171]">Jika kebutuhan Anda belum spesifik ke
              satu lokasi operasional, mulai dari salah satu kontak pusat berikut terlebih dahulu.</p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
            <div className="relative z-10 grid gap-3 sm:gap-4 lg:grid-cols-2">
              <div data-motion-group="cards" className="grid gap-3 sm:gap-4 sm:col-span-2 sm:grid-cols-2">
                <a href="tel:+6288222841728" data-motion-reveal="card" data-motion-card="true" data-motion-cta="true" className="group rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm transition-all duration-300 hover:border-[#bfd3ff] hover:bg-[#f8fbff]">
                  <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 group-hover:text-[#0062FF]">Pusat Panggilan</p>
                  <p className="mt-3 text-[1.2rem] font-bold text-[#1d4ed8]">+62 882-2284-1728</p>
                </a>
                <a href="mailto:recruitment@completeselular.com" data-motion-reveal="card" data-motion-card="true" data-motion-cta="true" className="group rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm transition-all duration-300 hover:border-[#bfd3ff] hover:bg-[#f8fbff]">
                  <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500 group-hover:text-[#0062FF]">Email Rekrutmen</p>
                  <p className="mt-3 break-all text-[1.2rem] font-bold text-[#1d4ed8]">recruitment@completeselular.com</p>
                </a>
              </div>
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#0062FF]">Head Office 01</p>
                <h3 className="mt-3 text-[1.35rem] font-extrabold tracking-tight text-slate-900">Pantai Indah Kapuk, Jakarta</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Jl. Pantai Maju Bersama RGII No. 27 - 28, Pantai Indah Kapuk Jakarta Utara Indonesia Kode Pos 14460</p>
              </article>
              <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <p className="font-mono text-[0.66rem] uppercase tracking-widest text-[#0062FF]">Head Office 02</p>
                <h3 className="mt-3 text-[1.35rem] font-extrabold tracking-tight text-slate-900">Tuparev, Cirebon</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Jl. Tuparev No.109F, Kertawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45153</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="peta-operasional" className="lc-band bg-[#f6f9fd]">
      <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-start">
          <div data-motion-reveal="intro" className="max-w-[29rem]">
            <p className="lc-eyebrow">Peta Operasional</p>
            <h2
              className="mt-3 max-w-full sm:max-w-[11ch] font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">
              Empat klaster wilayah untuk respons yang lebih cepat.</h2>
            <p className="mt-4 max-w-[28rem] text-[0.98rem] leading-7 text-[#596171]">Struktur klaster mempermudah
              koordinasi logistik, dukungan mitra, dan komunikasi langsung dengan kontak lokasi.</p>
          </div>
          <div data-motion-reveal="panel" className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
            <div className="relative z-10 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <article
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                <p
                  className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-400 group-hover:text-[#0062FF] transition-colors">
                  Jawa</p>
                <p className="mt-4 text-[2.25rem] font-extrabold tracking-tight text-slate-900">5 Titik</p>
              </article>
              <article
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                <p
                  className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-400 group-hover:text-[#FF2D20] transition-colors">
                  Jabodetabek</p>
                <p className="mt-4 text-[2.25rem] font-extrabold tracking-tight text-slate-900">2 Titik</p>
              </article>
              <article
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                <p
                  className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-400 group-hover:text-[#0062FF] transition-colors">
                  Sumatera</p>
                <p className="mt-4 text-[2.25rem] font-extrabold tracking-tight text-slate-900">6 Titik</p>
              </article>
              <article
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md">
                <p
                  className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-400 group-hover:text-slate-800 transition-colors">
                  Sulawesi</p>
                <p className="mt-4 text-[2.25rem] font-extrabold tracking-tight text-slate-900">3 Titik</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="lc-band bg-white">
      <div className="lc-shell py-12 sm:py-14 lg:py-16">
        <div className="mb-6">
          <p className="lc-eyebrow">Jawa</p>
          <h2 className="mt-2 font-display text-[1.75rem] font-extrabold tracking-tight text-slate-900">5 Titik Operasional
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-100 bg-slate-50/50">
                <tr>
                  <th className="px-5 py-4 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Lokasi
                  </th>
                  <th className="px-5 py-4 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Alamat
                  </th>
                </tr>
              </thead>
              <tbody
                className="divide-y divide-slate-100 text-sm font-medium text-slate-600 [&_tr]:transition-colors [&_tr]:hover:bg-slate-50">
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Semarang</td>
                  <td className="px-5 py-4">Perumahan Griya Arteri Sari No.33, Tlogosari Kulon, Kec. Pedurungan, Kota
                    Semarang, Jawa Tengah 50196</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Purwokerto</td>
                  <td className="px-5 py-4">Perumahan Bumi Arca Indah No 5B Blok Raya, Purwokerto</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Cirebon</td>
                  <td className="px-5 py-4">Jl. Tuparev No.109F, Kertawinangun, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat 45153</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Cirebon ACC</td>
                  <td className="px-5 py-4">Jl. Tentara Pelajar No.72B&C, Kejaksan, Kesambi, Cirebon 45131</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Bandung</td>
                  <td className="px-5 py-4">Jl. Mangga No.33, Kel. Cihapit, Kec. Bandung Wetan, Kota Bandung</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section className="lc-band bg-white">
      <div className="lc-shell py-12 sm:py-14 lg:py-16">
        <div className="mb-6">
          <p className="lc-eyebrow">Jabodetabek</p>
          <h2 className="mt-2 font-display text-[1.75rem] font-extrabold tracking-tight text-slate-900">2 Titik Operasional
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-100 bg-slate-50/50">
                <tr>
                  <th className="px-5 py-4 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Lokasi
                  </th>
                  <th className="px-5 py-4 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Alamat
                  </th>
                </tr>
              </thead>
              <tbody
                className="divide-y divide-slate-100 text-sm font-medium text-slate-600 [&_tr]:transition-colors [&_tr]:hover:bg-slate-50">
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Jakarta Prima Center</td>
                  <td className="px-5 py-4">Prima Center 2 Blok B.6, Jl. Pool PPD, Jl. Pesing Poglar No.2, RT.4/RW.02,
                    Kedaung Kali Angke, Cengkareng, Jakarta 11710 (samping Netviel)</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Jakarta PIK Office</td>
                  <td className="px-5 py-4">Rukan Golf Island Blok I No 27-28, Jl. Pantai Indah Kapuk 14460 (samping Martha
                    Tilaar)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section className="lc-band bg-white">
      <div className="lc-shell py-12 sm:py-14 lg:py-16">
        <div className="mb-6">
          <p className="lc-eyebrow">Sumatera</p>
          <h2 className="mt-2 font-display text-[1.75rem] font-extrabold tracking-tight text-slate-900">6 Titik Operasional
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-100 bg-slate-50/50">
                <tr>
                  <th className="px-5 py-4 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Lokasi
                  </th>
                  <th className="px-5 py-4 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Alamat
                  </th>
                </tr>
              </thead>
              <tbody
                className="divide-y divide-slate-100 text-sm font-medium text-slate-600 [&_tr]:transition-colors [&_tr]:hover:bg-slate-50">
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Bengkulu</td>
                  <td className="px-5 py-4">Jl. Flamboyan Raya Rt.4 Rw.2, Ruko Vista Zone, Kel. Kebun Kenanga, Kec. Ratu
                    Agung, Kota Bengkulu, Provinsi Bengkulu</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Palembang</td>
                  <td className="px-5 py-4">Perumahan Yuka Residence Blk.D No.8, Kel. Suka Maju, Kec. Sako, Kota Palembang,
                    Sumatera Selatan 30164</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Padang</td>
                  <td className="px-5 py-4">Komplek Belanti Permai 1 Blok A No.7, Kel. Lapai Nanggalo, Kec. Nanggalo, Kota
                    Padang 25142</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Jambi</td>
                  <td className="px-5 py-4">Jl. Matahari I No.05 Rt.09, Kel. Selamat, Kec. Danau Sipin, Kota Jambi</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Pekanbaru</td>
                  <td className="px-5 py-4">Jl. Tengku Bey 2, Perum Villa Anggrek Mas 3 Blok H6, Kel. Air Dingin, Kec. Bukit
                    Raya, Kota Pekanbaru</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Medan</td>
                  <td className="px-5 py-4">Jl. Bajak 2-H No.4, Harjosari II, Kec. Medan Amplas, Kota Medan, Sumatera Utara
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <section className="lc-band bg-white">
      <div className="lc-shell py-12 sm:py-14 lg:py-16">
        <div className="mb-6">
          <p className="lc-eyebrow">Sulawesi</p>
          <h2 className="mt-2 font-display text-[1.75rem] font-extrabold tracking-tight text-slate-900">3 Titik Operasional
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-100 bg-slate-50/50">
                <tr>
                  <th className="px-5 py-4 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Lokasi
                  </th>
                  <th className="px-5 py-4 text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Alamat
                  </th>
                </tr>
              </thead>
              <tbody
                className="divide-y divide-slate-100 text-sm font-medium text-slate-600 [&_tr]:transition-colors [&_tr]:hover:bg-slate-50">
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Makassar</td>
                  <td className="px-5 py-4">Perumahan Royal Spring, Jl. Tun Abdul Razak Blok D7 No.32, Kel. Samanta, Kec.
                    Somba Opu, Kab. Gowa, Makassar</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Palu</td>
                  <td className="px-5 py-4">Perumahan Dewi Sartika Blok D1, Birobuli Selatan (depan SMAN 3 Palu), Palu
                    Selatan, Sulawesi Tengah</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-900 font-bold tracking-tight">Depo Manado</td>
                  <td className="px-5 py-4">Cluster Eden Bridge Blok EB 05 No.06, Perumahan Citraland, Desa Winangun Atas,
                    Kec. Pineleng, Kab. Minahasa, Sulawesi Utara</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#f6f9fd]">
      <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <div data-motion-reveal="intro" className="mx-auto max-w-[42rem] text-center">
          <p className="lc-eyebrow">Butuh Bantuan Lanjut?</p>
          <h2
            className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#171a22]">
            Mulai dari Head Office, lalu lanjutkan ke wilayah yang relevan.</h2>
          <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Jika Anda masih belum yakin harus menghubungi siapa,
            gunakan kontak pusat terlebih dahulu. Setelah itu, tim dapat mengarahkan Anda ke lokasi yang paling tepat.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:recruitment@completeselular.com" data-motion-cta="true"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Email
              Head Office</a>
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
          <p className="mt-4 max-w-[31rem] text-[1.05rem] leading-8 text-[#4f5868]">Ekosistem distribusi, retail, sub
            retail, dan lifestyle yang dibangun untuk kecepatan eksekusi, kontrol operasional, dan pertumbuhan
            berkelanjutan.</p>
          <div className="mt-8 border-t border-black/10 pt-5">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <a href="https://www.linkedin.com/company/ocean-space-group/" target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]">LinkedIn
                <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" /></a>
              <a href="https://www.instagram.com/oceanspace.career/" target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]">Instagram
                <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="pt-10 lg:pl-12 lg:pt-0">
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
            <div>
              <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22]">Perusahaan</h3>
              <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171]">
                <li><a href="/"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Beranda</a></li>
                <li><a href="/about"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Tentang</a></li>
                <li><a href="/career"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Karier</a></li>
                <li><a href="/contact"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22]">Unit Bisnis</h3>
              <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171]">
                <li><a href="/distribusi"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">HP Distribusi</a>
                </li>
                <li><a href="/retail"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Retail</a></li>
                <li><a href="/sub-retail"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Sub Retail</a></li>
                <li><a href="/lifestyle"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Lifestyle</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22]">Operasional</h3>
              <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171]">
                <li className="flex min-h-[44px] items-center">16 Titik Operasional</li>
                <li className="flex min-h-[44px] items-center">16 Depo Aktif</li>
                <li className="flex min-h-[44px] items-center">4 Klaster Wilayah</li>
                <li><a href="/contact"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Lihat Detail
                    Lokasi</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-black/10 pt-6">
        <div className="grid gap-4 text-sm text-[#6b7280] sm:grid-cols-2 sm:items-center">
          <p>&copy; <span data-year></span> Ocean Space | Tumbuh dengan Integritas, Melaju dengan Eksekusi.</p>
          <div className="flex flex-wrap items-center gap-6 sm:justify-end">
            <a href="sitemap.xml"
              className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Jelajahi Sitemap</a>
            <a href="https://apriansyah.rizqis.com"
              className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]" target="_blank"
              rel="noopener noreferrer">Crafted by Web App Developer</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
    </>
  );
};

export default Contact;
