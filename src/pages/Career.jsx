import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React, { useEffect } from 'react';
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
import { loadExternalScript } from '../lib/loadExternalScript';

const Career = () => {
  useEffect(() => {
    let cancelled = false;

    const initScripts = async () => {
      try {
        const ts = Date.now();
        await loadExternalScript(`/js/career-api.js?v=${ts}`, () => Boolean(window.OceanSpaceCareerApi));
        await loadExternalScript(`/js/career.js?v=${ts}`, () => typeof window.initCareer === 'function');

        if (!cancelled && window.initCareer) {
          window.initCareer();
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          document.getElementById('jobs-loading')?.classList.add('hidden');
          document.getElementById('jobs-error')?.classList.remove('hidden');
        }
      }
    };

    initScripts();

    return () => {
      cancelled = true;
      window.__oceanSpaceCareerAbort?.abort();
    };
  }, []);

  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full overflow-x-hidden">
        <section className="lc-band bg-white">
          <div className="lc-shell py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            <MotionReveal yOffset={25} className="max-w-[42rem]">
              <p className="lc-eyebrow">Karier Ocean Space</p>
              <h1 className="mt-4 font-display text-[clamp(2.65rem,4.7vw,4.1rem)] font-[500] leading-[0.94] tracking-[-0.05em] text-[#171a22]">Bergabung dan bertumbuh dengan integritas.</h1>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Temukan posisi lowongan kerja aktif di seluruh jaringan unit bisnis Ocean Space.</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MotionButton>
                  <a href="#jobs-open" data-motion-cta="true" className="os-btn os-btn--primary">
                    Lihat posisi terbuka
                    <ArrowUpRightIcon className="h-4 w-4 text-white" aria-hidden="true" />
                  </a>
                </MotionButton>
                <MotionButton>
                  <a href="/about" data-motion-cta="true" className="os-btn os-btn--secondary">Pelajari budaya kerja</a>
                </MotionButton>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="jobs-open" className="lc-band bg-[#f6f9fd]">
          <div className="lc-shell relative py-14 sm:py-16 lg:py-20">
            <span aria-hidden="true" className="lc-node left-0 top-0 -translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 top-0 translate-x-1/2 -translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            <div className="mb-8 max-w-[34rem]">
              <p className="lc-eyebrow">Lowongan Terbuka</p>
              <h2 className="mt-3 font-display text-[clamp(1.95rem,3.2vw,3rem)] font-[500] leading-[0.98] tracking-[-0.045em] text-[#171a22]">Cari peran yang sedang dibuka saat ini.</h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-[#596171]">Posisi terbaru di Ocean Space.</p>
            </div>

            <form id="jobs-filters" className="jobs-filters">
              <div>
                <input id="jobs-search" name="search" type="search" maxLength="100" placeholder="Cari lowongan" aria-label="Cari lowongan" className="apply-input" />
              </div>
              <div>
                <input id="jobs-location" name="location" type="text" maxLength="100" placeholder="Filter lokasi" aria-label="Filter lokasi" className="apply-input" />
              </div>
              <div className="jobs-filters__actions">
                <button type="submit" data-motion-cta="true" className="os-btn os-btn--primary">Terapkan</button>
                <button type="button" id="jobs-reset" data-motion-cta="true" className="button-secondary sm:w-auto">Atur ulang</button>
              </div>
            </form>

            <div id="jobs-loading" className="jobs-grid mt-10" aria-hidden="false">
              <div className="comparison-card animate-pulse">
                <div className="comparison-card__media"></div>
                <div className="comparison-card__body space-y-4">
                  <div className="h-7 w-3/4 rounded bg-[#dfe7f5]"></div>
                  <div className="h-4 w-full rounded bg-[#edf2fb]"></div>
                  <div className="h-4 w-2/3 rounded bg-[#edf2fb]"></div>
                  <div className="mt-6 h-11 w-full rounded bg-[#dfe7f5]"></div>
                </div>
              </div>
              <div className="comparison-card animate-pulse">
                <div className="comparison-card__media"></div>
                <div className="comparison-card__body space-y-4">
                  <div className="h-7 w-4/5 rounded bg-[#dfe7f5]"></div>
                  <div className="h-4 w-full rounded bg-[#edf2fb]"></div>
                  <div className="h-4 w-1/2 rounded bg-[#edf2fb]"></div>
                  <div className="mt-6 h-11 w-full rounded bg-[#dfe7f5]"></div>
                </div>
              </div>
              <div className="comparison-card animate-pulse">
                <div className="comparison-card__media"></div>
                <div className="comparison-card__body space-y-4">
                  <div className="h-7 w-2/3 rounded bg-[#dfe7f5]"></div>
                  <div className="h-4 w-full rounded bg-[#edf2fb]"></div>
                  <div className="h-4 w-3/5 rounded bg-[#edf2fb]"></div>
                  <div className="mt-6 h-11 w-full rounded bg-[#dfe7f5]"></div>
                </div>
              </div>
            </div>
            <div id="jobs-empty" data-motion-reveal="panel" className="mt-10 hidden rounded-2xl border border-[#d9e2ef] bg-white p-8 sm:p-10" aria-hidden="true">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="lc-eyebrow">Belum Ada Posisi Aktif</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-[#171a22]">Posisi baru belum tersedia saat ini.</h3>
                  <p className="mt-3 max-w-[34rem] text-[15px] leading-7 text-[#596171]">Cek lagi nanti, atau hubungi tim jika Anda ingin menyampaikan minat.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="/contact" data-motion-cta="true" className="os-btn os-btn--primary sm:w-auto">Hubungi tim korporat</a>
                </div>
              </div>
            </div>
            <div id="jobs-error" data-motion-reveal="panel" className="mt-10 hidden rounded-2xl border border-red-100 bg-red-50 p-8 sm:p-10" aria-hidden="true">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <p className="lc-eyebrow text-red-700">Terjadi Kendala</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-red-700">Daftar lowongan online sedang tidak tersedia.</h3>
                  <p id="jobs-error-message" className="mt-3 max-w-[34rem] text-[15px] leading-7 text-red-700">Coba lagi, atau hubungi tim untuk menyampaikan minat.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button type="button" id="jobs-retry" data-motion-cta="true" className="button-secondary sm:w-auto">Coba lagi</button>
                  <a href="/contact" data-motion-cta="true" className="button-primary sm:w-auto">Sampaikan minat</a>
                </div>
              </div>
            </div>
            <div id="jobs-container" data-motion-group="cards" className="jobs-grid mt-10 hidden" aria-hidden="true"></div>
            <div id="jobs-load-more-wrap" className="mt-8 hidden justify-center">
              <div className="flex w-full max-w-[32rem] flex-col items-center gap-3">
                <button type="button" id="jobs-load-more" data-motion-cta="true" className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-[#c7d5ea] bg-white px-6 text-sm font-semibold text-[#243041] transition-colors hover:border-[#2563eb]/35 hover:text-[#1d4ed8]">Muat lebih banyak</button>
                <p id="jobs-load-more-status" className="text-center text-sm leading-7 text-[#596171]"></p>
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
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4.5vw,4rem)] font-[500] leading-[0.98] tracking-[-0.05em] text-[#171a22]">Gabung dengan tim yang bergerak cepat.</h2>
              <p className="mt-5 text-[1rem] leading-8 text-[#556070]">Ocean Space membuka jalur karier di empat unit bisnis nasional.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="/contact" data-motion-cta="true" className="os-btn os-btn--primary">Hubungi tim korporat</a>
                <a href="/about" data-motion-cta="true" className="button-secondary">Lihat profil grup</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Career;
