import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CreditCard, ClipboardCheck, CheckCircle } from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Ngobrol dulu',
      description: 'Kamu cerita soal bisnis kamu, kami dengerin. Tidak perlu brief yang panjang, cukup jawab beberapa pertanyaan dari kami dan project bisa mulai.',
      delay: 0.1
    },
    {
      icon: CreditCard,
      title: 'DP masuk, kami mulai',
      description: 'Setelah DP 50% masuk dan aset diterima, tim langsung jalan. Desainer, developer, dan strategist kerjakan bagiannya masing-masing secara paralel.',
      delay: 0.2
    },
    {
      icon: ClipboardCheck,
      title: 'Kamu review',
      description: 'Sebelum selesai, kami kirim dulu untuk kamu cek. Kalau ada yang mau diubah, bilang karena masih ada jatah revisi.',
      delay: 0.3
    },
    {
      icon: CheckCircle,
      title: 'Selesai, serah terima',
      description: 'Semua file, akses, dan aset diserahkan setelah pelunasan. Tidak ada yang ditahan.',
      delay: 0.4
    }
  ];

  return (
    <section id="cara-kerja" className="py-24 px-4 bg-black/5 dark:bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Cara <span className="text-brand-accent">Kerja</span></h2>
          <p className="text-brand-muted text-lg md:text-xl">Dari brief sampai selesai, begini prosesnya.</p>
        </motion.div>

        <div className="relative max-w-sm md:max-w-none mx-auto">
          {/* Vertical Connecting Line for Mobile */}
          <div className="absolute top-8 bottom-8 left-[2rem] md:hidden w-px bg-brand-accent/30 z-0" />
          
          {/* Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-brand-accent/0 via-brand-accent/30 to-brand-accent/0 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center group gap-6 md:gap-0"
                >
                  <div className="w-16 h-16 shrink-0 bg-brand-bg-card rounded-2xl shadow-lg flex items-center justify-center md:mb-8 relative group-hover:-translate-y-2 transition-transform duration-300 border border-black/5 dark:border-white/5">
                    <span className="absolute -top-3 -right-3 w-7 h-7 bg-brand-accent text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md ring-4 ring-brand-bg-card">
                      {index + 1}
                    </span>
                    <Icon className="w-7 h-7 text-brand-accent" />
                  </div>
                  
                  <div className="pt-2 md:pt-0">
                    <h3 className="text-xl font-bold text-brand-text mb-2 md:mb-3 group-hover:text-brand-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
