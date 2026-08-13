import {
  ArrowUpRightIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
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
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full overflow-x-hidden">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Atmospheric High-Impact Hero matching Home.jsx) */}
        {/* ========================================================================= */}
        <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden border-b border-black/10 bg-white sm:min-h-[88vh]">
          {/* Hero Shell Content */}
          <div className="relative z-10 mx-auto w-full max-w-[88rem] px-4 pt-28 pb-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col items-center text-center max-w-[54rem] mx-auto">
              
              {/* Sisi Kiri / Atas: Content, Highlight Text, Brand Shelf */}
              <MotionReveal yOffset={25} className="flex flex-col items-center">
                <p className="lc-eyebrow text-center">Unit Bisnis: HP Distribusi</p>

                <h1 className="mt-4 font-display text-[clamp(2.65rem,4.7vw,4.25rem)] font-[500] leading-[0.94] tracking-[-0.035em] text-[#171a22] text-center">
                  Menjadi perusahaan distribusi terpercaya dengan satu standar{' '}
                  <span className="relative text-[#1d4ed8]">
                    eksekusi
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-2.5 w-full bg-[#2563eb]/15"></span>
                  </span>.
                </h1>

                <p className="mt-5 max-w-[36rem] text-[1.05rem] leading-relaxed text-[#556070] text-center mx-auto">
                  Penyalur resmi handphone dan perangkat teknologi skala nasional. Menumbuhkan brand dengan kejujuran, data akurat, dan komitmen tuntas di seluruh Indonesia.
                </p>

                {/* Brand Shelf / Entitas Operasional - Clean Inline Style */}
                <div className="mt-8 w-full" aria-label="Entitas unit HP Distribusi">
                  <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 text-center">Entitas operasional resmi</p>
                  <div className="mt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-media-selular-indonesia.png"
                        alt="Logo PT. Media Selular Indonesia"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">PT. Media Selular Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-cv-top-selular.png"
                        alt="Logo CV. Top Selular"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">CV. Top Selular</span>
                    </div>
                  </div>
                </div>

                {/* Hero Action Buttons */}
                <div className="lc-hero-actions mt-8 flex flex-wrap items-center justify-center gap-4">
                  <MotionButton>
                    <Link to="/contact" className="os-btn os-btn--primary">
                      <span>Hubungi tim korporat</span>
                      <ArrowUpRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </Link>
                  </MotionButton>
                  <MotionButton>
                    <Link to="/career" className="button-secondary">
                      Lihat peluang karier
                    </Link>
                  </MotionButton>
                </div>
              </MotionReveal>

              {/* Sisi Kanan / Bawah: Super Clean Typographic Highlights */}
              <MotionReveal delay={0.15} yOffset={30} className="w-full mt-16 pt-12 border-t border-slate-100 max-w-[48rem]">
                <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center">
                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#171a22]">5000+</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">Mitra Dealer Aktif</p>
                  </div>

                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1d4ed8]">99.4%</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">SLA Transaksi Penyaluran</p>
                  </div>

                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#171a22]">2 Lini</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">Entitas Resmi Terdaftar</p>
                  </div>
                </div>
              </MotionReveal>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. OPERASI SKALA NASIONAL / PETA JARINGAN (Exact layout match with Home.jsx) */}
        {/* ========================================================================= */}
        <section className="lc-band bg-[#f6f9fd]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
              <MotionReveal>
                <p className="lc-eyebrow">Jaringan &amp; Jangkauan</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22]">
                  Cakupan distribusi nasional dengan sistem terintegrasi.
                </h2>
                <p className="mt-4 max-w-[28rem] text-[0.98rem] leading-7 text-[#596171]">
                  Didukung jaringan gudang regional, manajemen pasokan real-time, dan standar eksekusi yang konsisten di setiap wilayah.
                </p>

                {/* Stats summary matching Home */}
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-6">
                  <div>
                    <p className="os-data-label">Mitra Penyaluran</p>
                    <p className="mt-1 font-display text-2xl font-bold text-[#171a22]">5000+ Dealer</p>
                    <p className="text-xs text-[#596171]">Toko &amp; retail partner</p>
                  </div>
                  <div>
                    <p className="os-data-label">Komitmen SLA</p>
                    <p className="mt-1 font-display text-2xl font-bold text-[#1d4ed8]">99.4%</p>
                    <p className="text-xs text-[#596171]">Pengiriman tepat waktu</p>
                  </div>
                </div>
              </MotionReveal>

              {/* Map Card */}
              <MotionReveal delay={0.12} className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">

                <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/60 p-2 sm:p-3">
                  <img
                    src="/images/indonesia-map.png"
                    alt="Peta Jaringan Distribusi Indonesia Ocean Space"
                    className="h-auto w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    width="1694"
                    height="929"
                  />
                </div>

                {/* Coverage Breakdown Grid matching Home.jsx */}
                <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 sm:grid-cols-4">
                  <div className="rounded-xl bg-slate-50/80 p-3 border border-slate-100">
                    <p className="os-data-label">Sumatera</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#171a22]">5 Hub</p>
                  </div>
                  <div className="rounded-xl bg-slate-50/80 p-3 border border-slate-100">
                    <p className="os-data-label">Jabodetabek</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#171a22]">3 Hub</p>
                  </div>
                  <div className="rounded-xl bg-slate-50/80 p-3 border border-slate-100">
                    <p className="os-data-label">Jawa</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#171a22]">7 Depo</p>
                  </div>
                  <div className="rounded-xl bg-slate-50/80 p-3 border border-slate-100">
                    <p className="os-data-label">Sulawesi &amp; Timur</p>
                    <p className="mt-1 font-display text-lg font-bold text-[#171a22]">1 Hub</p>
                  </div>
                </div>
              </MotionReveal>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. LIMA MISI / PRINSIP OPERASIONAL (Spacious Grid Card Layout) */}
        {/* ========================================================================= */}
        <section className="lc-band bg-white">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6 mb-12">
              <MotionReveal className="max-w-[32rem]">
                <p className="lc-eyebrow">Prinsip Operasional</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">
                  Lima misi utama HP Distribusi.
                </h2>
              </MotionReveal>
            </div>

            <MotionStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Misi 01 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-slate-300 hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <span className="os-data-label text-[#1d4ed8]">Misi 01</span>
                      <span className="font-mono text-xl font-bold text-slate-300 group-hover:text-[#1d4ed8] transition-colors">01</span>
                    </div>
                    <h3 className="font-display text-[1.2rem] font-[500] tracking-[-0.03em] text-[#171a22]">
                      Transparansi &amp; Integritas
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                      Menjalankan distribusi secara transparan, adil, dan bertanggung jawab kepada pelanggan, principal, dan mitra di setiap proses bisnis.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Keterbukaan Data Bisnis</span>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

              {/* Misi 02 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-slate-300 hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <span className="os-data-label text-[#1d4ed8]">Misi 02</span>
                      <span className="font-mono text-xl font-bold text-slate-300 group-hover:text-[#1d4ed8] transition-colors">02</span>
                    </div>
                    <h3 className="font-display text-[1.2rem] font-[500] tracking-[-0.03em] text-[#171a22]">
                      Eksekusi Penyaluran Unggul
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                      Mencapai kinerja penjualan dan distribusi yang unggul melalui disiplin eksekusi, data yang akurat, dan standar kerja yang konsisten.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Disiplin Operasional SLA</span>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

              {/* Misi 03 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-slate-300 hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <span className="os-data-label text-[#1d4ed8]">Misi 03</span>
                      <span className="font-mono text-xl font-bold text-slate-300 group-hover:text-[#1d4ed8] transition-colors">03</span>
                    </div>
                    <h3 className="font-display text-[1.2rem] font-[500] tracking-[-0.03em] text-[#171a22]">
                      Hubungan Jangka Panjang
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                      Membangun hubungan jangka panjang dengan pelanggan serta menciptakan lingkungan kerja yang saling menghargai, aman, dan bertumbuh bagi tim.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kemitraan Berkelanjutan</span>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

              {/* Misi 04 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-slate-300 hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <span className="os-data-label text-[#1d4ed8]">Misi 04</span>
                      <span className="font-mono text-xl font-bold text-slate-300 group-hover:text-[#1d4ed8] transition-colors">04</span>
                    </div>
                    <h3 className="font-display text-[1.2rem] font-[500] tracking-[-0.03em] text-[#171a22]">
                      Pengembangan Berkelanjutan
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                      Mengembangkan organisasi, jangkauan wilayah, dan kapabilitas tim secara bertahap, disiplin, dan berkelanjutan bersama pertumbuhan brand.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Perluasan Kapasitas Terukur</span>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

              {/* Misi 05 */}
              <MotionStaggerItem className="h-full sm:col-span-2 lg:col-span-2">
                <MotionCard className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 transition-all duration-200 hover:border-slate-300 hover:shadow-xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <span className="os-data-label text-[#1d4ed8]">Misi 05</span>
                      <span className="font-mono text-xl font-bold text-slate-300 group-hover:text-[#1d4ed8] transition-colors">05</span>
                    </div>
                    <h3 className="font-display text-[1.2rem] font-[500] tracking-[-0.03em] text-[#171a22]">
                      Komitmen &amp; Tanggung Jawab Tuntas
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                      Menyelesaikan setiap komitmen pengiriman, kewajiban bisnis, dan penanganan purna jual dengan tuntas, tepat waktu, dan dapat dipertanggungjawabkan.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Akuntabilitas Purna Jual</span>
                  </div>
                </MotionCard>
              </MotionStaggerItem>

            </MotionStagger>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PILAR KAPABILITAS BISNIS (Exact Card Grid Style from About.jsx) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden border-b border-black/10 bg-white">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_80%_30%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true"></div>
          
          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6 mb-12">
              <MotionReveal className="max-w-[32rem]">
                <p className="lc-eyebrow">Kapabilitas Bisnis</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">
                  Empat pilar utama operasional distribusi.
                </h2>
              </MotionReveal>
            </div>

            <MotionStagger className="grid gap-0 border-y border-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pilar 01 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 sm:border-r transition-colors hover:bg-[#1d4ed8] group">
                  <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">01</span>
                  <div>
                    <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">Pilar 01 · Logistik</p>
                    <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">Logistik &amp; Gudang</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">
                      Manajemen stok terpusat di tiap depo regional dengan armada antar yang menjamin keamanan dan ketepatan barang.
                    </p>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">SLA Pengiriman Tepat Waktu</p>
                </MotionCard>
              </MotionStaggerItem>

              {/* Pilar 02 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 sm:border-r transition-colors hover:bg-[#1d4ed8] group">
                  <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">02</span>
                  <div>
                    <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">Pilar 02 · Mitra Brand</p>
                    <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">Principal Resmi</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">
                      Kepercayaan brand smartphone dalam mengelola alokasi produk, garansi resmi, dan strategi promosi regional.
                    </p>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">Garansi Resmi 100%</p>
                </MotionCard>
              </MotionStaggerItem>

              {/* Pilar 03 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 sm:border-r transition-colors hover:bg-[#1d4ed8] group">
                  <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">03</span>
                  <div>
                    <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">Pilar 03 · Pasokan</p>
                    <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">Sistem Data Terukur</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">
                      Pemantauan tren permintaan pasar dan estimasi stok regional untuk meminimalkan risiko kelangkaan unit.
                    </p>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">Real-time Monitoring</p>
                </MotionCard>
              </MotionStaggerItem>

              {/* Pilar 04 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 transition-colors hover:bg-[#1d4ed8] group">
                  <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">04</span>
                  <div>
                    <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">Pilar 04 · Ekosistem</p>
                    <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">Dukungan Dealer</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">
                      Pemesanan cepat, skema kemitraan transparan, dan pendampingan tim lapangan untuk pertumbuhan mitra retail.
                    </p>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">5000+ Jaringan Mitra Toko</p>
                </MotionCard>
              </MotionStaggerItem>
            </MotionStagger>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CLOSING CTA SECTION (Identical with Home.jsx & About.jsx) */}
        {/* ========================================================================= */}
        <section className="bg-white">
          <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <MotionReveal className="mx-auto max-w-[42rem] text-center">
              <p className="lc-eyebrow">Langkah berikutnya</p>
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.035em] text-[#171a22]">
                Hubungi tim Ocean Space.
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070]">
                Buka halaman kontak atau lihat lowongan yang sedang dibuka.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <MotionButton>
                  <Link to="/contact" className="os-btn os-btn--primary">
                    <span>Hubungi tim korporat</span>
                    <ArrowUpRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
                  </Link>
                </MotionButton>
                <MotionButton>
                  <Link to="/career" className="os-btn os-btn--secondary">
                    <span>Lihat peluang karier</span>
                  </Link>
                </MotionButton>
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Distribusi;