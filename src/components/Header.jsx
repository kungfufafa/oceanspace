import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-[#d8e0ec] bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)]">
      <div className="mx-auto flex min-h-[4.25rem] w-full max-w-[88rem] items-center gap-4 px-4 sm:min-h-[4.5rem] sm:px-5 lg:px-6">
        <a href="/" className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center" aria-label="Beranda Ocean Space">
          <img src="/images/logo-color.png" alt="Logo Ocean Space" className="h-7 w-auto sm:h-8" loading="eager" decoding="async" />
        </a>
        <button type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-nav"
          className="ml-auto inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#d4dbe6] bg-[#f7f9fc] px-3 py-2 text-sm font-semibold text-[#243041] transition-colors hover:border-[#2563eb]/30 hover:text-[#1d4ed8] lg:hidden">
          Menu
        </button>
        <nav className="mx-auto hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-6" aria-label="Navigasi utama">
          <a href="/" data-header-nav
            className="inline-flex min-h-[44px] items-center whitespace-nowrap px-1 text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Beranda</a>
          <a href="/about" data-header-nav
            className="inline-flex min-h-[44px] items-center whitespace-nowrap px-1 text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Tentang</a>
          <a href="/distribusi" data-header-nav
            className="inline-flex min-h-[44px] items-center whitespace-nowrap px-1 text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">HP Distribusi</a>
          <a href="/retail" data-header-nav
            className="inline-flex min-h-[44px] items-center whitespace-nowrap px-1 text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Retail</a>
          <a href="/sub-retail" data-header-nav
            className="inline-flex min-h-[44px] items-center whitespace-nowrap px-1 text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Sub Retail</a>
          <a href="/lifestyle" data-header-nav
            className="inline-flex min-h-[44px] items-center whitespace-nowrap px-1 text-[15px] font-medium text-[#556070] transition-colors hover:text-[#1d4ed8]">Lifestyle</a>
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="/career" data-header-action="secondary"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#d4dbe6] bg-[#f7f9fc] px-4 text-[0.84rem] font-medium leading-[1.1] text-[#243041] transition-colors hover:border-[#2563eb]/35 hover:text-[#1d4ed8]">Karier</a>
          <a href="/contact" data-header-action="primary"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#2563eb] px-4 text-[0.84rem] font-medium leading-[1.1] text-white transition-colors hover:bg-[#1d4ed8]">Kontak</a>
        </div>
      </div>
      <nav id="mobile-nav" data-mobile-nav className="absolute inset-x-0 top-full hidden border border-[#d8e0ec] border-t-0 bg-white px-4 py-3 shadow-[0_20px_40px_rgba(18,24,38,0.08)] lg:hidden"
        aria-label="Navigasi utama mobile">
        <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-1">
          <a href="/" data-mobile-link
            className="block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Beranda</a>
          <a href="/about" data-mobile-link
            className="block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Tentang</a>
          <a href="/distribusi" data-mobile-link
            className="block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">HP Distribusi</a>
          <a href="/retail" data-mobile-link
            className="block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Retail</a>
          <a href="/sub-retail" data-mobile-link
            className="block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Sub Retail</a>
          <a href="/lifestyle" data-mobile-link
            className="block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Lifestyle</a>
          <a href="/career" data-mobile-link
            className="block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Karier</a>
          <a href="/contact" data-mobile-link
            className="block min-h-[44px] rounded-lg px-3 py-2 text-sm font-semibold text-[#556070] transition-colors hover:bg-[#eef4ff] hover:text-[#1d4ed8]">Kontak</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
