import { BuildingOffice2Icon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const expoEase = [0.16, 1, 0.3, 1];
const springCard = { type: 'spring', stiffness: 350, damping: 24 };
const WHATSAPP_NUMBER = '6288222841728';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const text = `Halo Ocean Space,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white">
      <Header />

      <main id="main-content" tabIndex={-1} className="w-full flex-1 flex items-center">
        <section className="w-full py-8 sm:py-10 lg:py-12">
          <div className="lc-shell relative">
            <span aria-hidden="true" className="lc-node left-0 bottom-0 -translate-x-1/2 translate-y-1/2"></span>
            <span aria-hidden="true" className="lc-node right-0 bottom-0 translate-x-1/2 translate-y-1/2"></span>
            
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              {/* Kolom Kiri: Header & Informasi Head Office */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: expoEase }}
                className="max-w-[38rem]"
              >
                <p className="lc-eyebrow">Kontak Korporat</p>
                <h1 className="mt-3 font-display text-[clamp(2.2rem,4vw,3.5rem)] font-[500] leading-[0.96] tracking-[-0.04em] text-[#171a22]">
                  Hubungi Tim Ocean Space.
                </h1>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-[#556070]">
                  Bicarakan kemitraan, ekspansi, atau pertanyaan umum dengan tim korporat kami.
                </p>

                <div className="mt-6 space-y-3.5">
                  {/* Card Head Office Jakarta */}
                  <motion.div
                    whileHover={{ y: -3, transition: springCard }}
                    className="os-card p-4 sm:p-4.5 rounded-xl border border-slate-200/80 bg-white transition-colors hover:border-slate-300 hover:shadow-xs"
                  >
                    <div className="flex items-start gap-3">
                      <BuildingOffice2Icon className="h-5 w-5 text-[#2563eb] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="os-data-label">Head Office · Jakarta</p>
                        <p className="mt-0.5 text-[0.92rem] font-semibold text-[#171a22]">
                          Pantai Indah Kapuk (PIK)
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-[#556070]">
                          Rukan Golf Island Blok RGII No. 27–28, Jl. Pantai Maju Bersama, Pantai Indah Kapuk (PIK), Kamal Muara, Penjaringan, Jakarta Utara, DKI Jakarta 14470
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card Head Office Cirebon */}
                  <motion.div
                    whileHover={{ y: -3, transition: springCard }}
                    className="os-card p-4 sm:p-4.5 rounded-xl border border-slate-200/80 bg-white transition-colors hover:border-slate-300 hover:shadow-xs"
                  >
                    <div className="flex items-start gap-3">
                      <BuildingOffice2Icon className="h-5 w-5 text-[#2563eb] shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <p className="os-data-label">Head Office · Cirebon</p>
                        <p className="mt-0.5 text-[0.92rem] font-semibold text-[#171a22]">
                          Petratean, Pekalipan
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-[#556070]">
                          Jl. Petratean No. 11B, Pekalipan, Kec. Pekalipan, Kota Cirebon, Jawa Barat 45118
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Kolom Kanan: Card Kirim Pesan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: expoEase }}
                className="os-card rounded-2xl p-6 sm:p-7 border border-slate-200/80 bg-white shadow-xs"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-[#171a22]">Kirim Pesan</h2>
                <p className="mt-1 text-xs sm:text-sm text-[#556070]">
                  Sampaikan pesan Anda dan tim kami akan segera merespons.
                </p>

                {isSubmitted ? (
                  <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-5 text-center">
                    <p className="text-sm font-semibold text-slate-900">Menghubungkan ke WhatsApp...</p>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                      Jika percakapan tidak terbuka otomatis, gunakan tombol di bawah untuk melanjutkan.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo Ocean Space,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="os-btn os-btn--primary text-xs py-2 px-4"
                      >
                        Buka WhatsApp Lagi
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ name: '', email: '', message: '' });
                          setIsSubmitted(false);
                        }}
                        className="os-btn os-btn--secondary text-xs py-2 px-4"
                      >
                        Tulis Pesan Baru
                      </button>
                    </div>
                  </div>
                ) : (
                  <form className="mt-5 space-y-3.5" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-xs font-semibold text-[#556070] mb-1">Nama Lengkap</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="min-h-[42px] w-full rounded-lg border border-[#d4dbe6] px-3.5 py-2 text-sm focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15 transition-all"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#556070] mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="min-h-[42px] w-full rounded-lg border border-[#d4dbe6] px-3.5 py-2 text-sm focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15 transition-all"
                        placeholder="nama@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#556070] mb-1">Pesan / Keperluan</label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="min-h-[42px] w-full rounded-lg border border-[#d4dbe6] px-3.5 py-2 text-sm focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15 resize-none transition-all"
                        placeholder="Tuliskan pesan Anda..."
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={isSubmitting ? {} : { y: -2, scale: 1.01 }}
                      whileTap={isSubmitting ? {} : { scale: 0.97 }}
                      disabled={isSubmitting}
                      type="submit"
                      className="os-btn os-btn--primary w-full mt-2 inline-flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Memproses...</span>
                        </>
                      ) : (
                        <span>Kirim Pesan Korporat</span>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
