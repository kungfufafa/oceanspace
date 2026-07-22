import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Subprocessors = () => {
  return (
    <>
      <header className="sticky top-0 z-50 overflow-visible border-b border-[#d8e0ec] bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]">
        <div className="mx-auto flex min-h-[4.25rem] w-full max-w-[88rem] items-center gap-4 px-4 sm:min-h-[4.5rem] sm:px-5 lg:px-6">
          <a
            href="/"
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center"
            aria-label="Beranda Ocean Space"
          >
            <img
              src="/images/logo-color.png"
              alt="Logo Ocean Space"
              className="h-7 w-auto sm:h-8"
              loading="eager"
              decoding="async"
            />
          </a>
          <button
            type="button"
            data-menu-toggle
            aria-expanded="false"
            aria-controls="mobile-nav"
            className="ml-auto inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[0.14rem] border border-[#d4dbe6] bg-[#f7f9fc] px-3 py-2 text-sm font-semibold text-[#243041] transition-colors hover:border-[#2563eb]/30 hover:text-[#1d4ed8] lg:hidden"
          >
            Menu
          </button>
          <nav
            className="mx-auto hidden flex-1 items-center justify-center gap-[1.35rem] lg:flex xl:gap-[1.55rem]"
            aria-label="Navigasi utama"
          >
            <a
              href="/"
              data-header-nav
              className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]"
            >
              Beranda
            </a>
            <a
              href="/about"
              data-header-nav
              className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]"
            >
              Tentang
            </a>
            <a
              href="/distribusi"
              data-header-nav
              className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]"
            >
              HP Distribusi
            </a>
            <a
              href="/retail"
              data-header-nav
              className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]"
            >
              Retail
            </a>
            <a
              href="/sub-retail"
              data-header-nav
              className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]"
            >
              Sub Retail
            </a>
            <a
              href="/lifestyle"
              data-header-nav
              className="inline-flex min-h-[44px] items-center whitespace-nowrap px-[0.15rem] text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]"
            >
              Lifestyle
            </a>
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="/career"
              data-header-action="secondary"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[0.14rem] border border-[#d4dbe6] bg-[#f7f9fc] px-4 text-[0.84rem] font-medium leading-[1.1] text-[#243041] transition-colors hover:border-[#2563eb]/35 hover:text-[#1d4ed8]"
            >
              Karier
            </a>
            <a
              href="/contact"
              data-header-action="primary"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[0.14rem] bg-[#2563eb] px-4 text-[0.84rem] font-medium leading-[1.1] text-white transition-colors hover:bg-[#1d4ed8]"
            >
              Kontak
            </a>
          </div>
        </div>
        <nav
          id="mobile-nav"
          data-mobile-nav
          className="absolute inset-x-0 top-full hidden border border-[#d8e0ec] border-t-0 bg-white px-4 py-3 shadow-[0_20px_40px_rgba(18,24,38,0.08)] lg:hidden"
          aria-label="Navigasi utama mobile"
        >
          <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-1">
            <a
              href="/"
              data-mobile-link
              className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              Beranda
            </a>
            <a
              href="/about"
              data-mobile-link
              className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              Tentang
            </a>
            <a
              href="/distribusi"
              data-mobile-link
              className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              HP Distribusi
            </a>
            <a
              href="/retail"
              data-mobile-link
              className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              Retail
            </a>
            <a
              href="/sub-retail"
              data-mobile-link
              className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              Sub Retail
            </a>
            <a
              href="/lifestyle"
              data-mobile-link
              className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              Lifestyle
            </a>
            <a
              href="/career"
              data-mobile-link
              className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              Karier
            </a>
            <a
              href="/contact"
              data-mobile-link
              className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              Kontak
            </a>
            <a
              href="/privacy"
              data-mobile-link
              className="block rounded-[0.14rem] px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
            >
              Kebijakan Privasi
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1} className="w-full overflow-x-hidden">
        <section className="lc-band bg-white">
          <div className="lc-shell py-14 sm:py-16 lg:py-20">
            <p className="lc-eyebrow">Legal</p>
            <h1 className="mt-4 max-w-[20ch] font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">
              Sub-processor dan Data Processing Agreement (DPA)
            </h1>
            <p className="mt-5 max-w-[40rem] text-[1rem] leading-8 text-[#556070]">
              Pengungkapan sub-processor / data-processing yang digunakan Ocean Space untuk hosting situs dan proses rekrutmen.
            </p>
            <p className="mt-3 text-sm text-[#708198]">Terakhir diperbarui: 22 Juli 2026</p>
          </div>
        </section>

        <section className="lc-band bg-[#f7f9fc]">
          <div className="lc-shell space-y-10 py-14 sm:py-16">
            <article className="max-w-[42rem]">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">Hosting situs</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                Infrastruktur web yang menayangkan oceanspace.co.id, termasuk aset statis dan pengiriman halaman. Tujuan: ketersediaan dan keamanan situs bagi pengunjung, mitra, serta kandidat.
              </p>
            </article>
            <article className="max-w-[42rem]">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">API rekrutmen (Complete Selular / CESA)</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                Layanan di{' '}
                <a href="https://cesa.completeselular.com" className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4" target="_blank" rel="noopener noreferrer">cesa.completeselular.com</a>
                {' '}mendukung daftar lowongan dan pengiriman lamaran. Tujuan: memproses data pelamar untuk seleksi dan komunikasi rekrutmen.
              </p>
            </article>
            <article className="max-w-[42rem]">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">Platform sosial</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                LinkedIn dan Instagram digunakan untuk informasi perusahaan dan karier. Interaksi di platform tersebut mengikuti kebijakan privasi masing-masing penyedia.
              </p>
            </article>
            <article className="max-w-[42rem]">
              <h2 className="font-display text-xl font-semibold text-[#171a22]">Data Processing Agreement</h2>
              <p className="mt-4 text-[1rem] leading-8 text-[#556070]">
                Untuk pertanyaan DPA atau permintaan terkait data pribadi, hubungi Head Office melalui halaman{' '}
                <a href="/contact" className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4">Kontak</a>
                {' '}dan rujuk{' '}
                <a href="/privacy" className="font-medium text-[#1d4ed8] underline decoration-[#bfd3ff] underline-offset-4">Kebijakan Privasi</a>.
              </p>
            </article>
          </div>
        </section>

        <section className="lc-band bg-white">
          <div className="lc-shell py-14 sm:py-16">
            <p className="lc-eyebrow">Langkah berikutnya</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/privacy" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Baca kebijakan privasi</a>
              <a href="/contact" className="button-secondary">Hubungi tim korporat</a>
            </div>
          </div>
        </section>
      </main>

<footer className="border-t border-[#d8e0ec] bg-white text-[#121826]">
        <div className="lc-shell py-14 sm:py-16">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="pb-10 lg:border-r lg:border-black/10 lg:pb-0 lg:pr-12">
              <p className="lc-eyebrow">Terhubung dengan Ocean Space</p>
              <p className="mt-4 max-w-[31rem] text-[1.05rem] leading-8 text-[#4f5868]">
                Distribusi, retail, sub retail, dan lifestyle. Empat unit, satu standar operasi.
              </p>
              <div className="mt-8 border-t border-black/10 pt-5">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                  <a
                    href="https://www.linkedin.com/company/ocean-space-group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]"
                  >
                    LinkedIn
                    <ArrowUpRightIcon className="h-4 w-4 text-[#2563eb]" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.instagram.com/oceanspace.career/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]"
                  >
                    Instagram
                    <ArrowUpRightIcon className="h-4 w-4 text-[#2563eb]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-10 lg:pl-12 lg:pt-0">
              <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
                <div>
                  <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22]">
                    Perusahaan
                  </h3>
                  <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171]">
                    <li>
                      <a href="/" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">
                        Beranda
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        Tentang
                      </a>
                    </li>
                    <li>
                      <a
                        href="/career"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        Karier
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        Kontak
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        Kebijakan Privasi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/subprocessors"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        Sub-processor / DPA
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22]">
                    Unit Bisnis
                  </h3>
                  <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171]">
                    <li>
                      <a
                        href="/distribusi"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        HP Distribusi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/retail"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        Retail
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sub-retail"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        Sub Retail
                      </a>
                    </li>
                    <li>
                      <a
                        href="/lifestyle"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        Lifestyle
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-[15px] font-semibold tracking-wide text-[#171a22]">
                    Operasional
                  </h3>
                  <ul className="mt-5 space-y-1 text-[15px] leading-7 text-[#596171]">
                    <li className="flex min-h-[44px] items-center">16 Titik Operasional</li>
                    <li className="flex min-h-[44px] items-center">16 Depo Aktif</li>
                    <li className="flex min-h-[44px] items-center">4 Klaster Wilayah</li>
                    <li>
                      <a
                        href="/contact"
                        className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                      >
                        Lihat Detail Lokasi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-black/10 pt-6">
            <div className="grid gap-4 text-sm text-[#6b7280] sm:grid-cols-2 sm:items-center">
              <p>
                &copy; <span data-year></span> Ocean Space | Tumbuh dengan Integritas, Melaju dengan
                Eksekusi.
              </p>
              <div className="flex flex-wrap items-center gap-6 sm:justify-end">
                <a
                  href="/privacy"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                >
                  Kebijakan Privasi
                </a>
                <a
                  href="/sitemap.xml"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]"
                >
                  Jelajahi Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Subprocessors
