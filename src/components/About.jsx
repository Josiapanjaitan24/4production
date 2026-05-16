import React from 'react';
import { motion } from 'framer-motion';

const About = ({ onShowTeam }) => {
  return (
    <section id="tentang" className="min-h-screen relative flex items-center justify-center py-24 px-4 overflow-hidden">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">Tentang <span className="text-brand-accent">Kami</span></h2>
          <div className="w-24 h-2 bg-brand-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Kolom Kiri */}
          <div className="space-y-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-brand-bg-card p-10 md:p-12 rounded-3xl shadow-xl border border-black/5 dark:border-white/5 relative overflow-hidden group hover:border-brand-accent/30 transition-colors w-full"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/10 rounded-bl-[100px] z-0 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 flex flex-col gap-8">
                <p className="text-xl md:text-2xl text-brand-text leading-relaxed font-medium">
                  <span className="text-brand-accent font-bold">4production</span> lahir dari satu masalah sederhana.
                  Banyak bisnis bagus sulit berkembang karena tidak terlihat secara digital.
                  Website tidak ada. Instagram tidak aktif. Atau keduanya tidak berjalan selaras.
                </p>
                
                <button
                  onClick={onShowTeam}
                  className="group inline-flex items-center gap-3 rounded-full border border-brand-accent/30 bg-brand-accent/5 px-5 py-3 text-sm font-bold uppercase tracking-wider text-brand-text hover:border-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-300 w-fit mt-2"
                >
                  <span>Kenalan dengan Tim</span>
                  <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pl-8 border-l-4 border-brand-accent py-2"
            >
              <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
                Karena itu, kami hadir untuk membantu bisnis membangun identitas digital yang lebih profesional, konsisten, dan terpercaya melalui website dan social media yang berjalan dalam satu visi.
              </p>
            </motion.div>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-10 lg:pt-8 w-full">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-4xl font-medium text-brand-text leading-snug"
            >
              Kami menangani website dan social media dalam satu tim, sehingga semuanya berjalan lebih konsisten, terarah, dan selaras dengan brand bisnis kamu.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-brand-muted leading-relaxed"
            >
              Kami percaya bisnis yang sedang berkembang tetap bisa memiliki tampilan digital yang profesional tanpa biaya yang berlebihan. Karena itu, kami menghadirkan solusi yang terjangkau dengan hasil yang tetap berkualitas.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
