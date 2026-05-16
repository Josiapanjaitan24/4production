import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  // Phase 1: Typewriter Animation
  // Phase 2: Show Welcome Message (Phase 1 will exit)
  const [phase, setPhase] = useState(1);
  const { isDarkMode } = useTheme();

  return (
    <section id="beranda" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">

      {/* Background decoration - Soft Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-brand-accent/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Content - Ultra Minimalist */}
      <div className="max-w-5xl mx-auto text-center relative z-10 w-full h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {phase === 1 && (
            <motion.div
              key="typewriter"
              exit={{ scale: 15, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.9, ease: "easeIn" }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-text tracking-tight leading-tight origin-center absolute w-full px-4"
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Build Faster')
                    .pauseFor(1200)
                    .deleteAll(30)
                    .typeString('Launch Smarter')
                    .pauseFor(1200)
                    .deleteAll(30)
                    .typeString('Grow Together')
                    .pauseFor(1200)
                    .deleteAll(30)
                    .typeString(`Let's Build It <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">4Production</span>`)
                    .callFunction(() => {
                      // Memberikan jeda 1 detik sebelum transisi cinematic (zoom-out) dimulai
                      setTimeout(() => {
                        setPhase(2);
                      }, 1000);
                    })
                    .start();
                }}
                options={{
                  cursor: '<span class="text-brand-accent font-light animate-pulse">|</span>',
                  autoStart: true,
                  loop: false,
                  delay: 20, // Typing speed: 20ms per character
                }}
              />
            </motion.div>
          )}

          {phase === 2 && (
            <motion.div
              key="welcome"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-text tracking-tight leading-tight absolute w-full px-4"
            >
              <div className="mb-2">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">
                  4Production
                </span>.
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl text-brand-muted mt-4 md:mt-6 font-bold leading-snug">
                Websites. Social Media. Growth
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-base font-bold"
              >
                <a href="#harga" className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:bg-brand-accent-hover transition-transform hover:-translate-y-1 duration-300 shadow-lg shadow-brand-accent/20 w-full sm:w-auto">
                  Lihat Paket
                </a>
                <a href="https://wa.me/6285173339029" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-black/5 dark:bg-white/5 text-brand-text font-bold border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:-translate-y-1 transition-transform duration-300 rounded-full w-full sm:w-auto backdrop-blur-sm">
                  Chat Kami
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute -bottom-4 md:-bottom-8 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 flex justify-center opacity-40">
        <span className="text-[14vw] md:text-[11vw] leading-none font-black text-black/5 dark:text-white/5 whitespace-nowrap tracking-tight">
           4PRODUCTION
        </span>
      </div>

    </section>
  );
};

export default Hero;
