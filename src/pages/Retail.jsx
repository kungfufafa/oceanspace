import {
  ArrowUpRightIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
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

const Retail = () => {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full overflow-x-hidden">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Atmospheric High-Impact Hero - Mirrored: Card on Left, Copy on Right) */}
        {/* ========================================================================= */}
        <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden border-b border-black/10 bg-white sm:min-h-[88vh]">
          {/* Hero Shell Content */}
          <div className="relative z-10 mx-auto w-full max-w-[88rem] px-4 pt-28 pb-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col items-center text-center max-w-[54rem] mx-auto">
              
              {/* Sisi Kiri / Atas: Content, Highlight Text, Brand Shelf */}
              <MotionReveal yOffset={25} className="flex flex-col items-center">
                <p className="lc-eyebrow text-center">Unit Bisnis: Retail</p>

                <h1 className="mt-4 font-display text-[clamp(2.65rem,4.7vw,4.25rem)] font-[500] leading-[0.94] tracking-[-0.035em] text-[#171a22] text-center">
                  Menjadi retail handphone dan aksesoris yang paling dipercaya{' '}
                  <span className="relative text-[#1d4ed8]">
                    pelanggan
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-2.5 w-full bg-[#2563eb]/15"></span>
                  </span>.
                </h1>

                <p className="mt-5 max-w-[36rem] text-[1.05rem] leading-relaxed text-[#556070] text-center mx-auto">
                  Kejujuran dan pelayanan unggul, dengan pertumbuhan yang berkelanjutan di seluruh jaringan gerai retail handphone dan teknologi.
                </p>

                {/* Brand Shelf / Entitas Operasional - Clean Inline Style */}
                <div className="mt-8 w-full" aria-label="Entitas unit Retail">
                  <p className="text-xs font-semibold tracking-wider uppercase text-slate-400 text-center">Entitas operasional resmi</p>
                  <div className="mt-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-retail-indonesia-selalu-maju.png"
                        alt="Logo PT. Retail Indonesia Selalu Maju"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">PT. Retail Indonesia Selalu Maju</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-complete-solusi-nusantara.png"
                        alt="Logo PT. Complete Solusi Nusantara"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">PT. Complete Solusi Nusantara</span>
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
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#171a22]">100%</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">Garansi &amp; Produk Asli</p>
                  </div>

                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1d4ed8]">Direct</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">Pelayanan Retail Langsung</p>
                  </div>

                  <div className="group">
                    <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#171a22]">2 Lini</p>
                    <p className="mt-1.5 text-xs font-semibold tracking-widest uppercase text-blue-600">Operasi Resmi Terpadu</p>
                  </div>
                </div>
              </MotionReveal>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. GERAI & TATA KELOLA RETAIL (Clean Centered Section - Card Removed) */}
        {/* ========================================================================= */}
        <section className="lc-band bg-[#f6f9fd]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>

            <MotionReveal className="mx-auto max-w-[38rem] text-center">
              <p className="lc-eyebrow">Jaringan &amp; Layanan Gerai</p>
              <h2 className="mt-3 font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22]">
                Standar pelayanan konsisten di setiap titik toko.
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-[#596171]">
                Menghadirkan pengalaman belanja handphone dan aksesori yang nyaman, terpercaya, dan transparan bagi pelanggan.
              </p>
            </MotionReveal>

            {/* 4-Column Summary Bar */}
            <MotionReveal delay={0.12} className="mt-10 max-w-[44rem] mx-auto grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-8 sm:grid-cols-4 text-center">
              <div>
                <p className="os-data-label">Prinsip Belanja</p>
                <p className="mt-1.5 font-display text-xl font-bold text-[#171a22]">JUJUR</p>
                <p className="mt-0.5 text-xs text-[#596171]">Harga transparan</p>
              </div>
              <div>
                <p className="os-data-label">Jaminan Produk</p>
                <p className="mt-1.5 font-display text-xl font-bold text-[#171a22]">100% Asli</p>
                <p className="mt-0.5 text-xs text-[#596171]">Garansi resmi brand</p>
              </div>
              <div>
                <p className="os-data-label">Purna Jual</p>
                <p className="mt-1.5 font-display text-xl font-bold text-[#1d4ed8]">Tuntas</p>
                <p className="mt-0.5 text-xs text-[#596171]">Dukungan klaim garansi</p>
              </div>
              <div>
                <p className="os-data-label">Kualitas Layanan</p>
                <p className="mt-1.5 font-display text-xl font-bold text-[#171a22]">Unggul</p>
                <p className="mt-0.5 text-xs text-[#596171]">Tim profesional</p>
              </div>
            </MotionReveal>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. LIMA MISI RETAIL (Spacious Grid Card Layout) */}
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
                  Lima misi utama unit Retail.
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.1} className="max-w-[26rem] text-[0.98rem] leading-7 text-[#596171]">
                Komitmen kejujuran, garansi resmi, dan pelayanan pelanggan unggul di setiap gerai.
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
                      Produk Handphone &amp; Aksesoris Asli
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                      Menyediakan produk handphone dan aksesoris yang asli, bergaransi jelas, dengan informasi harga dan spesifikasi yang transparan kepada pelanggan.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Jaminan Garansi Resmi</span>
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
                      Pelayanan Cepat &amp; Profesional
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                      Memberikan pelayanan cepat, tepat, dan profesional melalui standar operasional yang konsisten serta tim yang terlatih dan bertanggung jawab.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standardized Service</span>
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
                      Membangun hubungan jangka panjang dengan pelanggan serta menciptakan lingkungan kerja yang saling menghargai, adil, dan aman bagi seluruh tim.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kepuasan Pelanggan Setia</span>
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
                      Pengembangan Jaringan Toko
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                      Mengembangkan jaringan toko, kualitas layanan, dan kompetensi tim secara bertahap, disiplin, dan berkelanjutan.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pertumbuhan Terukur</span>
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
                      Transaksi &amp; Purna Jual Tuntas
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-7 text-[#596171]">
                      Menyelesaikan setiap transaksi, layanan purna jual, dan komitmen kepada pelanggan dengan tuntas dan bertanggung jawab.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <svg className="h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tanggung Jawab Purna Jual</span>
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
                  Empat pilar utama operasional retail.
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.1} className="max-w-[24rem] text-[0.98rem] leading-7 text-[#596171]">
                Standar pelayanan, jaminan produk asli, dan purna jual yang mengutamakan kepuasan pelanggan.
              </MotionReveal>
            </div>

            <MotionStagger className="grid gap-0 border-y border-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pilar 01 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 sm:border-r transition-colors hover:bg-[#1d4ed8] group">
                  <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">01</span>
                  <div>
                    <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">Pilar 01 · Keaslian</p>
                    <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">Produk 100% Asli</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">
                      Jaminan perangkat handphone dan aksesoris original bergaransi resmi dari produsen terpercaya.
                    </p>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">Garansi Resmi Brand</p>
                </MotionCard>
              </MotionStaggerItem>

              {/* Pilar 02 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 sm:border-r transition-colors hover:bg-[#1d4ed8] group">
                  <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">02</span>
                  <div>
                    <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">Pilar 02 · Layanan</p>
                    <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">Standar Servis Tinggi</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">
                      Tim sales &amp; customer service profesional yang ramah dan siap memberikan rekomendasi produk tepat.
                    </p>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">Pelayanan Cepat &amp; Ramah</p>
                </MotionCard>
              </MotionStaggerItem>

              {/* Pilar 03 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 sm:border-r transition-colors hover:bg-[#1d4ed8] group">
                  <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">03</span>
                  <div>
                    <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">Pilar 03 · Transparansi</p>
                    <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">Informasi Harga Jujur</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">
                      Informasi spesifikasi lengkap dan penawaran harga transparan tanpa biaya atau syarat tersembunyi.
                    </p>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">Tanpa Syarat Tersembunyi</p>
                </MotionCard>
              </MotionStaggerItem>

              {/* Pilar 04 */}
              <MotionStaggerItem className="h-full">
                <MotionCard className="relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 transition-colors hover:bg-[#1d4ed8] group">
                  <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">04</span>
                  <div>
                    <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">Pilar 04 · Purna Jual</p>
                    <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">Dukungan Garansi Tuntas</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">
                      Kemudahan proses klaim garansi dan asistensi purna jual yang sigap di seluruh jaringan toko.
                    </p>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">Komitmen Purna Jual Tuntas</p>
                </MotionCard>
              </MotionStaggerItem>
            </MotionStagger>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CLOSING CTA SECTION */}
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

export default Retail;