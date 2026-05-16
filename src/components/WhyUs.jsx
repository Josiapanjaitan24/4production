import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Wallet } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Cepat",
      description: "Landing page selesai dalam 1–2 hari kerja. Company profile 3–4 hari. Tidak ada proyek yang ngaret tanpa kabar.",
      delay: 0.2
    },
    {
      icon: Users,
      title: "Satu Tim, Semua Beres",
      description: "Web dan Instagram dikerjakan tim yang sama. Tampilannya konsisten, koordinasinya tidak ribet, dan kamu hanya perlu brief satu kali.",
      delay: 0.3
    },
    {
      icon: Wallet,
      title: "Harga yang Masuk Akal",
      description: "Kami tahu UMKM tidak selalu punya budget besar. Paket kami dirancang dari situ, bukan yang paling murah, tapi yang paling worth it untuk ukuran bisnis kamu.",
      delay: 0.4
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6">WHY US: <span className="text-brand-accent"></span></h2>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: reason.delay }}
                className="bg-brand-bg-card p-8 rounded-3xl shadow-lg border border-black/5 dark:border-white/5 hover:border-brand-accent/30 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-brand-text mb-4 group-hover:text-brand-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
