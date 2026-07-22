import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { loadExternalScript } from '../lib/loadExternalScript';

const CareerApply = () => {
  const [searchParams] = useSearchParams();
  const jobSlug = searchParams.get('job') || '';

  useEffect(() => {
    let cancelled = false;

    const initScripts = async () => {
      try {
        const ts = Date.now();
        await loadExternalScript(`/js/career-api.js?v=${ts}`, () => Boolean(window.OceanSpaceCareerApi));
        await loadExternalScript(`/js/career-apply.js?v=${ts}`, () => typeof window.initCareerApply === 'function');

        if (!cancelled && window.initCareerApply) {
          window.initCareerApply();
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          document.getElementById('apply-page-loading')?.classList.add('hidden');
          document.getElementById('apply-page-error')?.classList.remove('hidden');
        }
      }
    };

    initScripts();

    return () => {
      cancelled = true;
      window.__oceanSpaceApplyRunId = (window.__oceanSpaceApplyRunId || 0) + 1;
    };
  }, [jobSlug]);

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

  <main className="w-full overflow-x-hidden">
    <section className="lc-band bg-white">
      <div className="lc-shell py-14 sm:py-16 lg:py-20">
        <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>

        <div id="apply-page-loading" className="grid animate-pulse gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(22rem,0.86fr)] lg:items-center lg:gap-12" aria-hidden="false">
          <div className="max-w-[38rem] space-y-4">
            <div className="h-3 w-40 rounded bg-[#dfe7f5]"></div>
            <div className="h-16 w-4/5 rounded bg-[#dfe7f5]"></div>
            <div className="h-4 w-2/3 rounded bg-[#edf2fb]"></div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="h-20 rounded-2xl border border-[#d9e2ef] bg-[#edf2fb]"></div>
              <div className="h-20 rounded-2xl border border-[#d9e2ef] bg-[#edf2fb]"></div>
            </div>
            <div className="h-11 w-40 rounded bg-[#dfe7f5]"></div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-3 w-28 rounded bg-[#dfe7f5]"></div>
              <div className="mt-4 space-y-3">
                <div className="h-4 w-full rounded bg-[#edf2fb]"></div>
                <div className="h-4 w-5/6 rounded bg-[#edf2fb]"></div>
                <div className="h-4 w-4/5 rounded bg-[#edf2fb]"></div>
              </div>
            </div>
          </div>
        </div>

        <div id="apply-page-empty" data-motion-reveal="panel" className="hidden border border-[#d9e2ef] bg-white p-8 sm:p-10" aria-hidden="true">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="lc-eyebrow">Pilih Posisi Dulu</p>
              <h1 className="mt-3 font-display text-2xl font-[500] tracking-[-0.04em] text-[#171a22]">Halaman ini membutuhkan posisi yang dipilih.</h1>
              <p className="mt-3 max-w-[34rem] text-[15px] leading-7 text-[#596171]">Kembali ke karier, lalu buka lamaran dari posisi yang ingin Anda lihat.</p>
            </div>
            <a href="/career" data-motion-cta="true" className="button-primary sm:w-auto">Lihat posisi terbuka</a>
          </div>
        </div>

        <div id="apply-page-error" data-motion-reveal="panel" className="hidden border border-red-100 bg-red-50 p-8 sm:p-10" aria-hidden="true">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="lc-eyebrow text-red-700">Terjadi Kendala</p>
              <h1 className="mt-3 font-display text-2xl font-[500] tracking-[-0.04em] text-red-700">Detail posisi gagal dimuat.</h1>
              <p className="mt-3 max-w-[34rem] text-[15px] leading-7 text-red-700">Posisi tidak tersedia atau tidak dapat diakses. Kembali ke karier untuk memilih posisi lain.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/career" data-motion-cta="true" className="button-primary sm:w-auto">Kembali ke Karier</a>
              <a href="/contact" data-motion-cta="true" className="button-secondary sm:w-auto">Hubungi kami</a>
            </div>
          </div>
        </div>

        <div id="apply-page-content" className="hidden" aria-hidden="true">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(22rem,0.86fr)] lg:items-center lg:gap-12">
            <div className="max-w-[38rem]">
              <p data-motion-enter="eyebrow" className="lc-eyebrow">Karier / Lamaran</p>
              <h1 id="apply-page-title" data-motion-enter="heading" className="mt-4 max-w-full sm:max-w-[16ch] font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">
                Memuat posisi yang dipilih.
              </h1>
              <p id="apply-page-summary" data-motion-enter="summary" className="mt-5 max-w-[33rem] text-[1rem] leading-8 text-[#556070]">
                Baca konteks peran, lalu isi lamaran jika cocok.
              </p>
              <div id="apply-page-meta" className="mt-7 grid gap-3 sm:grid-cols-2"></div>
              <div data-motion-enter="actions" className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#apply-form-card" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Isi lamaran</a>
                <a href="#apply-page-details" data-motion-cta="true" className="button-secondary">Baca detail posisi</a>
              </div>
            </div>

            <aside id="apply-page-prep-wrap" data-motion-enter="panel" className="relative hidden overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
              <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <p className="font-bold tracking-tight text-slate-900">Siapkan dulu</p>
                  <span className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500">Checklist</span>
                </div>
                <ul id="apply-page-prep" className="mt-5 space-y-3 text-sm leading-7 text-[#556070]"></ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <section id="apply-page-details" className="lc-band hidden bg-[#f6f9fd]" aria-hidden="true">
      <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>

        <div className="mb-8 max-w-[34rem]">
          <p className="lc-eyebrow">Detail posisi</p>
          <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Deskripsi, kualifikasi, dan form lamaran.</h2>
          <p className="mt-4 text-[0.98rem] leading-7 text-[#596171]">Baca konteks peran, lalu isi data yang diminta di bawah.</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 p-2 sm:p-4 shadow-sm">
          <div className="relative z-10 grid gap-3 sm:gap-4">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-5 py-4 sm:px-6 sm:py-5">
                <p className="font-mono text-[0.66rem] uppercase tracking-widest text-slate-500">Ringkasan peran</p>
              </div>
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="border-b border-slate-100 p-5 sm:p-6 lg:border-b-0 lg:border-r">
                  <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500">Deskripsi pekerjaan</p>
                  <div id="apply-page-description" className="mt-3 text-[15px] leading-7 text-[#556070]">Menunggu data.</div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="font-mono text-[0.64rem] uppercase tracking-widest text-slate-500">Kualifikasi</p>
                  <div id="apply-page-requirements" className="mt-3 space-y-3 text-[15px] leading-7 text-[#556070]"></div>
                </div>
              </div>
            </article>

            <article id="apply-form-card" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
                <p className="lc-eyebrow">Form lamaran</p>
                <h2 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.2rem)] font-[500] tracking-[-0.04em] text-[#171a22]">Kirim lamaran</h2>
                <p className="mt-2 max-w-[40rem] text-sm leading-7 text-[#556070]">Isi data yang diminta. Bidang bertanda * wajib diisi.</p>
              </div>
              <div className="px-5 py-6 sm:px-6">
                <div id="form-alerts"></div>
                <form id="apply-form" className="space-y-5" encType="multipart/form-data"></form>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="lc-shell relative py-16 sm:py-20 lg:py-24">
        <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
        <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
        <div data-motion-reveal="intro" className="mx-auto max-w-[42rem] text-center">
          <p className="lc-eyebrow">Langkah berikutnya</p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#171a22]">Siap melamar, atau masih melihat posisi lain?</h2>
          <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Kembali ke daftar lowongan, atau hubungi tim jika Anda butuh klarifikasi.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/career" data-motion-cta="true" className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#2563eb] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">Lihat posisi terbuka</a>
            <a href="/contact" data-motion-cta="true" className="button-secondary">Hubungi tim korporat</a>
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
            <a href="sitemap.xml" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Jelajahi Sitemap</a>
            <a href="https://apriansyah.rizqis.com" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]" target="_blank" rel="noopener noreferrer">Crafted by Web App Developer</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  
  
  
    </>
  );
};

export default CareerApply;
