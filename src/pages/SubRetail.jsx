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
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const SubRetail = () => {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full overflow-x-hidden">
        <section className="lc-band bg-white">
          <div className="lc-shell py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              {/* Sisi Kiri: Premium Showcase Image */}
              <MotionReveal delay={0.15} yOffset={30} className="relative w-full max-w-[32rem] lg:max-w-none lg:pr-8">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-lg bg-slate-50 aspect-[4/3] w-full">
                  <img
                    src="/images/sub_retail_hero_cover.png"
                    alt="Layanan Sub Retail Ocean Space"
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
              </MotionReveal>

              {/* Sisi Ritel/Copy: Content, Highlight Text, Brand Shelf */}
              <MotionReveal yOffset={25} className="lc-hero-copy max-w-[42rem]">
                <p className="lc-eyebrow">Unit Bisnis: Sub Retail</p>

                <h1 className="mt-4 font-display text-[clamp(2.55rem,4.6vw,4rem)] font-[500] leading-[0.94] tracking-[-0.035em] text-[#171a22]">
                  Menjadi ekosistem ritel serta{' '}
                  <span className="relative text-[#1d4ed8]">
                    layanan teknologi
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-2.5 w-full bg-[#2563eb]/15"></span>
                  </span>{' '}
                  rumah tangga yang paling dipercaya.
                </h1>

                <p className="mt-5 max-w-[34rem] text-[1.05rem] leading-relaxed text-[#556070]">
                  Kejujuran bersama kinerja unggul, dengan pertumbuhan berkelanjutan di setiap rantaian ritel dan layanan purna jual.
                </p>

                {/* Brand Shelf / Entitas Operasional - Clean Inline Style */}
                <div className="mt-8 w-full" aria-label="Entitas unit Sub Retail">
                  <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">Entitas operasional resmi</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/unit-complite-plus.png"
                        alt="Logo Toko Complite+"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500">Toko Complite+</span>
                    </div>

                    <a href="https://unboxing.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-[#1d4ed8]">
                      <img
                        src="/images/unit-unboxing.png"
                        alt="Logo Toko Unboxing"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                        Toko Unboxing <ArrowUpRightIcon className="w-3 h-3 text-[#2563eb]" aria-hidden="true" />
                      </span>
                    </a>

                    <a href="https://completeselular.co.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-[#1d4ed8]">
                      <img
                        src="/images/unit-complete-selular.png"
                        alt="Logo Complete Selular"
                        className="h-8 object-contain"
                        loading="lazy"
                      />
                      <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                        Complete Selular <ArrowUpRightIcon className="w-3 h-3 text-[#2563eb]" aria-hidden="true" />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Actions */}
                <div className="lc-hero-actions mt-8 flex flex-wrap items-center gap-4">
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
            </div>

          </div>
        </section>

        <section className="lc-band bg-[#f6f9fd]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
              {/* Left Side: Clean List without Cards/Diagram */}
              <MotionReveal delay={0.12} className="w-full">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="border-t border-slate-200/80 pt-6">
                    <p className="font-mono text-xs font-bold text-blue-600 tracking-wider">SOROTAN 01</p>
                    <h3 className="mt-3 text-base font-semibold text-[#171a22]">Asli, Transparan, &amp; Bertanggung Jawab</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171]">
                      Menyediakan produk serta layanan asli dengan informasi yang jelas serta proses yang adil bagi pelanggan.
                    </p>
                  </div>

                  <div className="border-t border-slate-200/80 pt-6">
                    <p className="font-mono text-xs font-bold text-blue-600 tracking-wider">SOROTAN 02</p>
                    <h3 className="mt-3 text-base font-semibold text-[#171a22]">Operasional Unggul</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171]">
                      Pelayanan serta eksekusi operasional yang unggul melalui standar kerja yang rapi, sistem disiplin, and tim profesional.
                    </p>
                  </div>

                  <div className="border-t border-slate-200/80 pt-6">
                    <p className="font-mono text-xs font-bold text-blue-600 tracking-wider">SOROTAN 03</p>
                    <h3 className="mt-3 text-base font-semibold text-[#171a22]">Hubungan Jangka Panjang</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171]">
                      Membangun relasi yang adil dan aman dengan pelanggan serta lingkungan kerja yang penuh saling menghargai bagi tim.
                    </p>
                  </div>

                  <div className="border-t border-slate-200/80 pt-6">
                    <p className="font-mono text-xs font-bold text-blue-600 tracking-wider">SOROTAN 04</p>
                    <h3 className="mt-3 text-base font-semibold text-[#171a22]">Pertumbuhan Berkelanjutan</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#596171]">
                      Mengembangkan jaringan ritel dan kapabilitas tim secara bertahap sesuai kebutuhan riil pelanggan serta perkembangan pasar.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Right Side: Title */}
              <MotionReveal className="max-w-[28rem] lg:sticky lg:top-24">
                <p className="lc-eyebrow">Visi &amp; Misi</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22]">
                  Arah utama unit bisnis Sub Retail.
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-[#596171]">
                  Visi beserta misi yang memandu kerja unit ini dalam mengembangkan layanan berkualitas.
                </p>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="lc-band bg-white">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
              {/* Left Side: Clean List without Box Containers */}
              <MotionReveal delay={0.12} className="w-full">
                <div className="flex flex-col">
                  <div className="group flex gap-6 border-b border-slate-100 py-6 first:pt-0 last:border-b-0">
                    <p className="font-mono text-2xl font-bold text-slate-300 group-hover:text-blue-600 transition-colors duration-300">01</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-600">
                      Menyediakan produk serta layanan yang asli, transparan, penuh tanggung jawab, dengan informasi yang jelas serta proses yang adil bagi pelanggan.
                    </p>
                  </div>

                  <div className="group flex gap-6 border-b border-slate-100 py-6 last:border-b-0">
                    <p className="font-mono text-2xl font-bold text-slate-300 group-hover:text-blue-600 transition-colors duration-300">02</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-600">
                      Memberikan pelayanan serta eksekusi operasional yang unggul melalui standar kerja yang rapi, sistem yang disiplin, serta tim yang profesional.
                    </p>
                  </div>

                  <div className="group flex gap-6 border-b border-slate-100 py-6 last:border-b-0">
                    <p className="font-mono text-2xl font-bold text-slate-300 group-hover:text-blue-600 transition-colors duration-300">03</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-600">
                      Membangun hubungan jangka panjang dengan pelanggan serta menciptakan lingkungan kerja yang adil, aman, penuh saling menghargai bagi tim.
                    </p>
                  </div>

                  <div className="group flex gap-6 border-b border-slate-100 py-6 last:border-b-0">
                    <p className="font-mono text-2xl font-bold text-slate-300 group-hover:text-blue-600 transition-colors duration-300">04</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-600">
                      Mengembangkan jaringan, layanan, serta kapabilitas tim secara bertahap dan berkelanjutan sesuai kebutuhan pelanggan serta pasar.
                    </p>
                  </div>

                  <div className="group flex gap-6 border-b border-slate-100 py-6 last:border-b-0">
                    <p className="font-mono text-2xl font-bold text-slate-300 group-hover:text-blue-600 transition-colors duration-300">05</p>
                    <p className="text-sm font-medium leading-relaxed text-slate-600">
                      Menyelesaikan setiap transaksi, layanan purna jual, perbaikan, serta komitmen pelanggan secara tuntas dan dapat dipertanggungjawabkan.
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Right Side: Title */}
              <MotionReveal className="max-w-[28rem] lg:sticky lg:top-24">
                <p className="lc-eyebrow">Lima Misi</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22]">
                  Lima misi utama operasional.
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-[#596171]">
                  Komitmen utama kami di unit bisnis Sub Retail dalam menjaga kualitas transaksi dan kepercayaan konsumen.
                </p>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section className="lc-band bg-[#f6f9fd]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            
            <MotionReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-slate-200 pb-8">
              <div className="max-w-[42rem]">
                <p className="lc-eyebrow">Visi Utama</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.03em] text-[#171a22]">
                  Menjadi ekosistem ritel &amp; layanan teknologi paling tepercaya.
                </h2>
              </div>
              <p className="max-w-[24rem] text-[0.98rem] leading-7 text-[#596171]">
                Dibangun di atas pilar kejujuran, kinerja unggul, serta pertumbuhan yang berkelanjutan.
              </p>
            </MotionReveal>

            <MotionStagger className="mt-12 grid gap-8 md:grid-cols-3">
              <MotionStaggerItem>
                <div className="border-l-2 border-blue-600/30 pl-6 transition-all duration-300 hover:border-blue-600">
                  <p className="font-mono text-xs font-bold text-blue-600 tracking-wider">PILAR 01</p>
                  <h3 className="mt-3 text-[1.25rem] font-bold tracking-tight text-slate-900 leading-snug">
                    Paling Dipercaya
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#596171]">
                    Menjadi ekosistem ritel serta layanan teknologi rumah tangga yang kredibel dan memiliki transparansi penuh.
                  </p>
                </div>
              </MotionStaggerItem>

              <MotionStaggerItem>
                <div className="border-l-2 border-blue-600/30 pl-6 transition-all duration-300 hover:border-blue-600">
                  <p className="font-mono text-xs font-bold text-blue-600 tracking-wider">PILAR 02</p>
                  <h3 className="mt-3 text-[1.25rem] font-bold tracking-tight text-slate-900 leading-snug">
                    Kejujuran &amp; Kinerja
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#596171]">
                    Menjamin kepuasan pelanggan melalui integritas tinggi dan didukung oleh tim serta standar kerja unggul.
                  </p>
                </div>
              </MotionStaggerItem>

              <MotionStaggerItem>
                <div className="border-l-2 border-blue-600/30 pl-6 transition-all duration-300 hover:border-blue-600">
                  <p className="font-mono text-xs font-bold text-blue-600 tracking-wider">PILAR 03</p>
                  <h3 className="mt-3 text-[1.25rem] font-bold tracking-tight text-slate-900 leading-snug">
                    Purna Jual &amp; Perbaikan
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#596171]">
                    Menyelesaikan setiap komitmen klaim garansi, layanan purna jual, dan transaksi secara tuntas dan bertanggung jawab.
                  </p>
                </div>
              </MotionStaggerItem>
            </MotionStagger>
          </div>
        </section>

        <section className="bg-white">
          <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <MotionReveal className="mx-auto max-w-[42rem] text-center">
              <p className="lc-eyebrow">Langkah berikutnya</p>
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.035em] text-[#171a22]">Hubungi tim Ocean Space.</h2>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Buka halaman kontak atau lihat lowongan yang sedang dibuka.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <MotionButton>
                  <a href="/contact" className="os-btn os-btn--primary">Hubungi tim korporat</a>
                </MotionButton>
                <MotionButton>
                  <a href="/career" className="button-secondary">Lihat peluang karier</a>
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

export default SubRetail;