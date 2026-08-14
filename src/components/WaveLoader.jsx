import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const expoEase = [0.16, 1, 0.3, 1];

export const WaveLoader = ({
  isLoading = true,
  label = 'Ocean Space',
  fullscreen = true,
}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="wave-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.96,
            transition: { duration: 0.35, ease: expoEase },
          }}
          className={
            fullscreen
              ? 'fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md select-none'
              : 'flex items-center justify-center p-6 select-none'
          }
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Real Liquid Ocean Wave Orb */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-200/90 bg-gradient-to-b from-sky-50 via-blue-50 to-blue-100 shadow-lg shadow-blue-500/15 flex items-center justify-center">
              
              {/* Back Wave (Deep Indigo Blue - Slow fluid flow) */}
              <motion.div
                className="absolute -bottom-1 -left-[100%] w-[300%] h-16 opacity-30 text-[#1e40af]"
                animate={{ x: ['0%', '33.33%'] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: 'linear' }}
              >
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
                  <path d="M0,0 C150,70 350,-30 500,35 C650,100 850,-20 1000,35 C1150,90 1200,10 1200,10 L1200,120 L0,120 Z" />
                </svg>
              </motion.div>

              {/* Middle Wave (Vibrant Brand Blue - Opposite fluid drift) */}
              <motion.div
                className="absolute -bottom-1 -left-[100%] w-[300%] h-14 opacity-55 text-[#2563eb]"
                animate={{ x: ['0%', '-33.33%'] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: 'linear' }}
              >
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
                  <path d="M0,20 C180,80 320,-10 500,40 C680,90 820,-10 1000,40 C1120,80 1200,10 1200,20 L1200,120 L0,120 Z" />
                </svg>
              </motion.div>

              {/* Front Wave (Bright Ocean Cyan/Blue - Faster fluid crest) */}
              <motion.div
                className="absolute -bottom-1 -left-[100%] w-[300%] h-12 opacity-85 text-[#3b82f6]"
                animate={{ x: ['0%', '33.33%'] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: 'linear' }}
              >
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
                  <path d="M0,10 C150,60 300,-10 450,30 C600,70 750,0 900,30 C1050,60 1200,10 1200,10 L1200,120 L0,120 Z" />
                </svg>
              </motion.div>

              {/* Shimmer / Water Highlight Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-white/70 pointer-events-none" />
            </div>

            {/* Official Ocean Space Logo */}
            <div className="mt-5 flex items-center justify-center">
              {label === 'Ocean Space' ? (
                <img
                  src="/images/logo-color.png"
                  alt="Ocean Space"
                  className="h-6 w-auto object-contain"
                  loading="eager"
                />
              ) : (
                <p className="text-xs font-semibold tracking-wider text-[#171a22] font-display">
                  {label}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaveLoader;
