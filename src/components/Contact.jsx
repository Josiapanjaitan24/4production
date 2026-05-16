import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const Contact = () => {
  return (
    <section id="kontak" className="py-24 px-4 max-w-4xl mx-auto text-center mt-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="bg-brand-bg-card p-10 md:p-20 rounded-[3rem] border border-black/5 dark:border-white/5 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">Siap <span className="text-brand-accent">mulai?</span></h2>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Cerita dulu soal bisnis kamu. Kami bantu tentukan paket yang paling masuk akal dan tidak harus yang paling mahal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/6285173339029" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-accent text-white font-bold text-base hover:bg-brand-accent-hover hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-brand-accent/30 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat WhatsApp
            </a>
            
            <a 
              href="#harga"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/5 dark:bg-white/5 text-brand-text font-bold text-base hover:bg-black/10 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <LayoutGrid className="w-5 h-5 text-brand-muted" />
              Lihat Paket
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
