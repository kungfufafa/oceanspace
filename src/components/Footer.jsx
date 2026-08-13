import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[#d8e0ec] bg-white text-[#121826]">
      <div className="lc-shell py-14 sm:py-16">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="pb-10 lg:border-r lg:border-black/10 lg:pb-0 lg:pr-12">
            <p className="lc-eyebrow">Terhubung dengan Ocean Space</p>
            <p className="mt-4 max-w-[31rem] text-[1.05rem] leading-8 text-[#4f5868]">Distribusi, retail, sub retail, dan lifestyle. Empat unit, satu standar operasi.</p>
            <div className="mt-8 border-t border-black/10 pt-5">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <a href="https://www.linkedin.com/company/ocean-space-group/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]">
                  LinkedIn
                  <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/oceanspace.career/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-[#243041] transition-colors hover:text-[#1d4ed8]">
                  Instagram
                  <ArrowUpRightIcon className="w-4 h-4 text-[#2563eb]" aria-hidden="true" />
                </a>
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
                  <li><a href="/privacy" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Kebijakan Privasi</a></li>
                  <li><a href="/subprocessors" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Sub-processor / DPA</a></li>
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
              <a href="/privacy" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Kebijakan Privasi</a>
              <a href="/subprocessors" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Sub-processor / DPA</a>
              <a href="/sitemap.xml" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]">Jelajahi Sitemap</a>
              <a href="https://apriansyah.rizqis.com" className="inline-flex min-h-[44px] min-w-[44px] items-center hover:text-[#1e40af]" target="_blank" rel="noopener noreferrer">Dibuat oleh Web App Developer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
