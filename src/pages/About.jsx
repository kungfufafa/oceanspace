import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import {
  MotionReveal,
  MotionCard,
  MotionButton,
  MotionStagger,
  MotionStaggerItem,
} from '../components/Motion.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const JUJUR_PRINCIPLES = [
  {
    id: '01',
    label: 'Prinsip 01',
    title: 'Jujur & Integritas',
    description: 'Keputusan dari transparansi dan tanggung jawab.',
    detail: 'Seluruh operasional berjalan dari data yang valid. Integritas memastikan setiap janji kerja selaras dengan eksekusi di lapangan.',
  },
  {
    id: '02',
    label: 'Prinsip 02',
    title: 'Unggul Berkinerja',
    description: 'Eksekusi disiplin dan mengejar kualitas.',
    detail: 'Kami mengukur pencapaian berdasarkan indikator operasional yang jelas, mendorong setiap unit bekerja melampaui standar dasar.',
  },
  {
    id: '03',
    label: 'Prinsip 03',
    title: 'Jaga Pelanggan',
    description: 'Hubungan jangka panjang dengan penghargaan penuh.',
    detail: 'Pelanggan dan mitra bisnis adalah pusat dari pertumbuhan grup. Pelayanan yang konsisten menjaga tingkat kepercayaan di setiap wilayah.',
  },
  {
    id: '04',
    label: 'Prinsip 04',
    title: 'Ulet & Bertumbuh',
    description: 'Selalu belajar memegang tanggung jawab lebih.',
    detail: 'Tantangan lapangan dihadapi secara proaktif. Karyawan dan unit bisnis diberi ruang berkembang seiring bertambahnya kapasitas organisasi.',
  },
  {
    id: '05',
    label: 'Prinsip 05',
    title: 'Rasa Memiliki',
    description: 'Tanggung jawab penuh atas efisiensi dan hasil grup.',
    detail: 'Menjaga aset, kualitas kerja, dan reputasi grup seolah milik sendiri. Memperkuat sinergi antar unit bisnis.',
  },
];

const UNITS = [
  {
    id: '01',
    tag: 'HP Distribusi',
    title: 'Distribusi',
    desc: 'Penyalur resmi handphone dan perangkat teknologi skala nasional. Menjadi perusahaan distribusi terpercaya yang menumbuhkan brand dengan jujur, unggul, dan berkelanjutan di Indonesia.',
    highlights: [
      'Transparan, adil, dan bertanggung jawab kepada pelanggan & mitra',
      'Kinerja unggul lewat disiplin eksekusi dan data akurat',
      'Hubungan jangka panjang dengan lingkungan kerja yang bertumbuh',
      'Komitmen tuntas dan tepat waktu',
    ],
    logos: [
      { src: '/images/unit-media-selular-indonesia.png', alt: 'Logo PT. Media Selular Indonesia', name: 'PT. Media Selular Indonesia' },
      { src: '/images/unit-satu-media-indonesia.png', alt: 'Logo PT. Satu Media Indonesia', name: 'PT. Satu Media Indonesia' },
      { src: '/images/unit-cv-top-selular.png', alt: 'Logo CV. Top Selular', name: 'CV. Top Selular' },
    ],
    href: '/distribusi',
  },
  {
    id: '02',
    tag: 'Retail',
    title: 'Retail',
    desc: 'Jaringan gerai langsung dengan standar pelayanan konsisten. Menjadi retail handphone dan aksesoris yang paling dipercaya pelanggan melalui kejujuran, pelayanan unggul, dan pertumbuhan berkelanjutan.',
    highlights: [
      'Produk asli, bergaransi, dengan informasi harga transparan',
      'Pelayanan cepat, tepat, dan profesional di setiap gerai',
      'Lingkungan kerja yang adil dan aman bagi seluruh tim',
      'Transaksi dan purna jual diselesaikan tuntas',
    ],
    logos: [
      { src: '/images/unit-retail-indonesia-selalu-maju.png', alt: 'Logo PT. Retail Indonesia Selalu Maju', name: 'PT. Retail Indonesia Selalu Maju' },
      { src: '/images/unit-complete-solusi-nusantara.png', alt: 'Logo PT. Complete Solusi Nusantara', name: 'PT. Complete Solusi Nusantara' },
    ],
    href: '/retail',
  },
  {
    id: '03',
    tag: 'Sub Retail',
    title: 'Sub Retail',
    desc: 'Tiga brand aktif menjangkau segmen komunitas lewat standar kerja yang sama. Menjadi ekosistem ritel serta layanan teknologi rumah tangga yang paling dipercaya, dibangun atas kejujuran, kinerja unggul, dan pertumbuhan berkelanjutan.',
    highlights: [
      'Produk & layanan asli, transparan, penuh tanggung jawab',
      'Standar kerja rapi, sistem disiplin, tim profesional',
      'Hubungan jangka panjang dengan pelanggan dan komunitas',
      'Purna jual dan perbaikan tuntas, dapat dipertanggungjawabkan',
    ],
    logos: [
      { src: '/images/unit-complite-plus.png', alt: 'Logo Toko Complite+', name: 'Toko Complite+' },
      { src: '/images/unit-unboxing.png', alt: 'Logo Toko Unboxing', name: 'Toko Unboxing' },
      { src: '/images/unit-complete-selular.png', alt: 'Logo Complete Selular', name: 'Complete Selular' },
    ],
    href: '/sub-retail',
  },
  {
    id: '04',
    tag: 'Lifestyle',
    title: 'Lifestyle',
    desc: 'Unit pendukung gaya hidup yang mengembangkan layanan terpadu di luar rantai distribusi. Menjadi kelompok usaha lifestyle yang dipercaya, memberi pengalaman berkualitas, dan bertumbuh secara sehat melalui kejujuran dan kinerja unggul.',
    highlights: [
      'Layanan aman, transparan, dan bertanggung jawab kepada komunitas',
      'Standar operasional unggul, konsisten, profesional di setiap unit usaha',
      'Lingkungan kerja yang aman, adil, dan bertumbuh bagi tim',
      'Komitmen layanan dan tanggung jawab sosial diselesaikan tuntas',
    ],
    logos: [
      { src: '/images/unit-mari-sukses-gemilang.png', alt: 'Logo PT. Mari Sukses Gemilang', name: 'PT. Mari Sukses Gemilang' },
    ],
    href: '/lifestyle',
  },
];

const About = () => {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full overflow-x-hidden">

        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-black/10 bg-white">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_20%_50%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true"></div>

          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-28">
            <MotionReveal yOffset={20}>
              <p className="lc-eyebrow">Tentang Ocean Space</p>
              <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(2.65rem,4.7vw,4.5rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">
                Tumbuh lewat integritas dan disiplin eksekusi.
              </h1>
            </MotionReveal>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
              <MotionReveal delay={0.08}>
                <p className="text-[1.05rem] leading-8 text-[#556070]">
                  Ocean Space adalah grup usaha yang menaungi empat unit bisnis — distribusi, retail, sub retail, dan lifestyle. Kami berdiri di atas satu prinsip: bahwa pertumbuhan yang berkelanjutan hanya bisa dibangun dari standar kerja yang konsisten dan budaya yang jujur.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.14}>
                <p className="text-[1.05rem] leading-8 text-[#556070]">
                  Dari jaringan distribusi nasional hingga gerai ritel dan titik komunitas, setiap unit beroperasi dalam satu bahasa yang sama — JUJUR. Lima prinsip ini menjadi fondasi bagaimana kami merekrut, mengeksekusi, dan bertumbuh.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <MotionButton>
                    <a href="/contact" className="os-btn os-btn--primary w-full sm:w-auto">
                      Hubungi tim korporat
                      <ArrowUpRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </a>
                  </MotionButton>
                  <MotionButton>
                    <a href="/career" className="os-btn os-btn--secondary w-full sm:w-auto">Lihat peluang karier</a>
                  </MotionButton>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        {/* 2. LIMA PRINSIP JUJUR */}
        <section className="relative overflow-hidden border-b border-black/10 bg-[#f6f9fd]">
          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end mb-10">
              {/* Kiri — stats */}
              <MotionReveal className="flex flex-wrap gap-8 lg:gap-10">
                <div>
                  <p className="font-display text-[3rem] font-bold leading-none text-[#171a22]">5</p>
                  <p className="mt-1.5 text-xs font-medium text-[#596171]">Prinsip kerja</p>
                </div>
                <div className="h-12 w-px bg-black/10 self-center hidden sm:block" aria-hidden="true"></div>
                <div>
                  <p className="font-display text-[3rem] font-bold leading-none text-[#171a22]">4</p>
                  <p className="mt-1.5 text-xs font-medium text-[#596171]">Unit bisnis</p>
                </div>
                <div className="h-12 w-px bg-black/10 self-center hidden sm:block" aria-hidden="true"></div>
                <div>
                  <p className="font-display text-[3rem] font-bold leading-none text-[#1d4ed8]">JUJUR</p>
                  <p className="mt-1.5 text-xs font-medium text-[#596171]">Fondasi budaya</p>
                </div>
              </MotionReveal>

              {/* Kanan — teks */}
              <MotionReveal delay={0.1}>
                <p className="lc-eyebrow">Cara Grup Ini Bekerja</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.3vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">
                  Lima prinsip yang menggerakkan setiap keputusan.
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-[#596171]">
                  Nilai JUJUR diterjemahkan menjadi perilaku kerja nyata di setiap unit bisnis.
                </p>
              </MotionReveal>
            </div>

            <MotionStagger className="grid gap-0 border-y border-black/10 sm:grid-cols-2 lg:grid-cols-5">
              {JUJUR_PRINCIPLES.map((p, i) => (
                <MotionStaggerItem key={p.id} className="h-full">
                  <MotionCard className={`relative flex flex-col justify-between h-full p-6 sm:p-8 border-b border-black/10 sm:border-b-0 transition-colors hover:bg-[#0062FF] group
                    ${i < 4 ? 'sm:border-r border-black/10' : ''}
                  `}>
                    <span aria-hidden="true" className="absolute right-5 top-5 font-sans text-[2rem] font-bold tracking-[-0.06em] text-slate-200 group-hover:text-white/20 transition-colors duration-300">{p.id}</span>
                    <div>
                      <p className="text-[0.7rem] font-bold text-[#1d4ed8] group-hover:text-white/70 transition-colors duration-300">{p.label}</p>
                      <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#171a22] group-hover:text-white transition-colors duration-300">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#596171] group-hover:text-white/70 transition-colors duration-300">{p.description}</p>
                    </div>
                    <p className="mt-6 text-xs leading-relaxed text-slate-400 group-hover:text-white/60 transition-colors duration-300">{p.detail}</p>
                  </MotionCard>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </section>

        {/* 3. PETA EKOSISTEM — 4 UNIT */}
        <section className="relative overflow-hidden border-b border-black/10 bg-white">
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#d8e0ec_1px,transparent_1px),linear-gradient(to_bottom,#d8e0ec_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_80%_30%,#000_20%,transparent_100%)] opacity-20" aria-hidden="true"></div>
          <div className="lc-shell relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6 mb-12">
              <MotionReveal className="max-w-[32rem]">
                <p className="lc-eyebrow">Peta Ekosistem</p>
                <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">
                  Empat unit bisnis, satu bahasa operasional.
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.1} className="max-w-[24rem] text-[0.98rem] leading-7 text-[#596171]">
                Tiap unit menaungi badan usaha atau brand di bawah standar operasi yang sama.
              </MotionReveal>
            </div>

            <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
              {UNITS.map((unit, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <MotionReveal key={unit.id}>
                    <div className={`grid gap-0 lg:grid-cols-2 ${isEven ? 'bg-[#f8fbff]' : 'bg-white'}`}>

                      {/* Panel identitas */}
                      <div className={`py-10 px-4 sm:px-6 lg:py-16 lg:px-14 ${isEven ? 'lg:order-2 lg:border-l border-black/10' : 'lg:order-1 lg:border-r border-black/10'}`}>
                        <div className="flex items-center gap-3 mb-5">
                          <span className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#1d4ed8]">Unit {unit.id}</span>
                          <span className="h-px flex-1 bg-black/10" aria-hidden="true"></span>
                          <span className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-slate-400">{unit.tag}</span>
                        </div>
                        <h3 className="text-[clamp(1.8rem,2.8vw,2.4rem)] font-bold tracking-[-0.04em] text-[#171a22] leading-tight">{unit.title}</h3>
                        <p className="mt-4 text-[0.95rem] leading-8 text-[#596171] max-w-[32rem]">{unit.desc}</p>
                        <Link
                          to={unit.href}
                          className="mt-8 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#1d4ed8] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1e40af]"
                        >
                          <span>Lihat {unit.title}</span>
                          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>

                      {/* Panel konten */}
                      <div className={`border-t border-black/10 py-10 px-4 sm:px-6 lg:border-t-0 lg:py-16 lg:px-14 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-400 mb-5">Komitmen utama</p>
                        <ul className="space-y-4">
                          {unit.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#1d4ed8]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {h}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-slate-100">
                          <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-400 mb-4">Entitas / Brand</p>
                          <div className="flex flex-col gap-2">
                            {unit.logos.map((logo) => (
                              <div key={logo.src} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition-colors hover:border-[#1d4ed8]/30 hover:bg-[#f8fbff]">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 p-1">
                                  <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" loading="lazy" decoding="async" />
                                </div>
                                <p className="text-[0.75rem] font-semibold leading-tight text-slate-700">{logo.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. CTA */}
        <section className="bg-[#f6f9fd]">
          <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
            <MotionReveal className="mx-auto max-w-[42rem] text-center">
              <p className="lc-eyebrow">Bergabung dengan Ocean Space</p>
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.035em] text-[#171a22]">
                Bangun karier di ekosistem yang tumbuh dengan integritas.
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Lihat posisi yang tersedia atau hubungi tim korporat untuk peluang kemitraan.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                <MotionButton>
                  <a href="/career" className="os-btn os-btn--primary w-full sm:w-auto">Lihat peluang karier</a>
                </MotionButton>
                <MotionButton>
                  <a href="/contact" className="os-btn os-btn--secondary w-full sm:w-auto">Hubungi tim korporat</a>
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

export default About;
