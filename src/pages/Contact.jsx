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

const Contact = () => {
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
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <MotionReveal yOffset={25} className="max-w-[38rem]">
                <p className="lc-eyebrow">Kontak Korporat</p>
                <h1 className="mt-4 font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">Hubungi Tim Ocean Space.</h1>
                <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Bicarakan kemitraan, ekspansi, atau pertanyaan umum dengan tim korporat kami.</p>

                <div className="mt-8 space-y-4">
                  <MotionCard className="p-5 border border-[#d9e2ef] bg-[#f8fbff] rounded-xl">
                    <p className="font-mono text-xs uppercase text-[#62718a]">Alamat Kantor Pusat</p>
                    <p className="mt-2 text-base font-semibold text-[#171a22]">Cirebon, Jawa Barat, Indonesia</p>
                  </MotionCard>
                  <MotionCard className="p-5 border border-[#d9e2ef] bg-[#f8fbff] rounded-xl">
                    <p className="font-mono text-xs uppercase text-[#62718a]">Jalur Media Sosial</p>
                    <div className="mt-2 flex gap-4">
                      <a href="https://www.linkedin.com/company/ocean-space-group/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2563eb] hover:underline">LinkedIn Group</a>
                      <a href="https://www.instagram.com/oceanspace.career/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2563eb] hover:underline">Instagram Career</a>
                    </div>
                  </MotionCard>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.15} yOffset={30} className="p-8 border border-[#d9e2ef] bg-[#f8fbff] rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-[#171a22]">Kirim Pesan</h2>
                <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-[#556070]">Nama Lengkap</label>
                    <input type="text" className="mt-1 w-full rounded-md border border-[#d4dbe6] px-4 py-2.5 text-sm focus:border-[#2563eb] focus:outline-none" placeholder="Masukkan nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#556070]">Email</label>
                    <input type="email" className="mt-1 w-full rounded-md border border-[#d4dbe6] px-4 py-2.5 text-sm focus:border-[#2563eb] focus:outline-none" placeholder="nama@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#556070]">Pesan / Keperluan</label>
                    <textarea rows={4} className="mt-1 w-full rounded-md border border-[#d4dbe6] px-4 py-2.5 text-sm focus:border-[#2563eb] focus:outline-none" placeholder="Tuliskan pesan Anda..."></textarea>
                  </div>
                  <MotionButton className="w-full">
                    <button type="submit" className="w-full rounded-md bg-[#2563eb] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Kirim Pesan Korporat</button>
                  </MotionButton>
                </form>
              </MotionReveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d8e0ec] bg-white text-[#121826]">
        <div className="lc-shell py-14 sm:py-16">
          <div className="grid gap-4 text-sm text-[#6b7280] sm:grid-cols-2 sm:items-center">
            <p>&copy; <span data-year></span> Ocean Space | Kontak Korporat</p>
            <div className="flex flex-wrap items-center gap-6 sm:justify-end">
              <a href="/privacy" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
