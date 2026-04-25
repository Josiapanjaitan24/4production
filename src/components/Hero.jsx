import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text mb-8 tracking-tight leading-tight">
            Tingkatkan Skala Bisnis Anda dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500 leading-tight">Visual yang Memukau</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl text-brand-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Dari pembuatan website modern hingga manajemen sosial media yang engaging. Kami hadir untuk membuat brand Anda mendominasi era digital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.a 
            href="#kontak"
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-brand-accent text-white rounded-full font-bold text-xl hover:bg-brand-accent-hover transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-accent/30 inline-block"
          >
            Konsultasi Gratis
          </motion.a>
          <motion.a 
            href="#layanan" 
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-transparent border-2 border-brand-muted/50 text-brand-text rounded-full font-bold text-xl hover:border-brand-accent hover:text-brand-accent transition-all hover:-translate-y-1 inline-block"
          >
            Lihat Layanan
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
