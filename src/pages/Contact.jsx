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

const Contact = () => {
  return (
    <>
      <Header />

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
                  <MotionCard className="os-card p-5">
                    <p className="os-data-label">Alamat Kantor Pusat</p>
                    <p className="mt-2 text-base font-semibold text-[#171a22]">Cirebon, Jawa Barat, Indonesia</p>
                  </MotionCard>
                  <MotionCard className="os-card p-5">
                    <p className="os-data-label">Jalur Media Sosial</p>
                    <div className="mt-2 flex gap-4">
                      <a href="https://www.linkedin.com/company/ocean-space-group/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center font-medium text-[#2563eb] hover:underline">LinkedIn Group</a>
                      <a href="https://www.instagram.com/oceanspace.career/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] min-w-[44px] items-center font-medium text-[#2563eb] hover:underline">Instagram Career</a>
                    </div>
                  </MotionCard>
                </div>
              </MotionReveal>

              <MotionReveal delay={0.15} yOffset={30} className="os-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#171a22]">Kirim Pesan</h2>
                <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-[#556070]">Nama Lengkap</label>
                    <input type="text" className="mt-1 min-h-[44px] w-full rounded-md border border-[#d4dbe6] px-4 py-2.5 text-sm focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15" placeholder="Masukkan nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#556070]">Email</label>
                    <input type="email" className="mt-1 min-h-[44px] w-full rounded-md border border-[#d4dbe6] px-4 py-2.5 text-sm focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15" placeholder="nama@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#556070]">Pesan / Keperluan</label>
                    <textarea rows={4} className="mt-1 min-h-[44px] w-full rounded-md border border-[#d4dbe6] px-4 py-2.5 text-sm focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15" placeholder="Tuliskan pesan Anda..."></textarea>
                  </div>
                  <MotionButton className="w-full">
                    <button type="submit" className="os-btn os-btn--primary w-full">Kirim Pesan Korporat</button>
                  </MotionButton>
                </form>
              </MotionReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
