import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Kolom Kiri */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-bg-card p-8 md:p-10 rounded-3xl shadow-xl border border-black/5 relative overflow-hidden group hover:border-brand-accent/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-bl-full z-0 group-hover:scale-125 transition-transform duration-700" />
              <p className="relative z-10 text-xl md:text-2xl text-brand-text leading-relaxed font-medium">
                <span className="text-brand-accent font-bold">4production</span> adalah agensi digital yang berfokus pada penyediaan solusi terintegrasi untuk membantu bisnis membangun, mengembangkan, dan mengoptimalkan kehadiran mereka di dunia digital.
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-brand-muted leading-relaxed pl-8 border-l-4 border-brand-accent py-2"
            >
              Kami menggabungkan keahlian dalam pembuatan website, produksi konten kreatif, serta manajemen media sosial untuk memastikan setiap brand tampil profesional, relevan, dan mampu bersaing di era yang terus berkembang.
            </motion.p>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-10 mt-8 lg:mt-0">
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-4xl font-medium text-brand-text leading-snug"
            >
              Didirikan oleh empat individu dengan visi yang selaras, kami dibangun di atas nilai kolaborasi, inovasi, dan pendekatan berbasis data.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-brand-muted leading-relaxed"
            >
              Kami percaya bahwa solusi digital yang efektif tidak hanya harus menarik secara visual, tetapi juga mampu memberikan dampak nyata terhadap pertumbuhan dan engagement bisnis.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
