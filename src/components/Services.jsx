import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, PenTool } from 'lucide-react';

const Services = ({ onSelectService }) => {
  const services = [
    {
      title: "Web Development",
      description: "Website modern, responsif, dan cepat yang dirancang khusus untuk meningkatkan konversi dan kredibilitas bisnis Anda.",
      detailedDescription: "Di era digital, website adalah etalase utama bisnis Anda. Kami membangun website custom dengan teknologi terkini (React, Next.js, Vite) yang tidak hanya tampil memukau tetapi juga sangat cepat dan responsif di semua perangkat.",
      icon: <Globe className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Social Media Management",
      description: "Pengelolaan akun media sosial secara profesional untuk meningkatkan engagement dan menjangkau audiens yang tepat.",
      detailedDescription: "Kembangkan audiens yang setia dan berinteraksi aktif dengan brand Anda. Kami menangani riset hashtag, penjadwalan konten, interaksi dengan followers, hingga pelaporan metrik pertumbuhan akun.",
      icon: <Smartphone className="w-8 h-8 text-brand-accent" />
    },
  ];

  return (
    <section id="layanan" className="py-24 px-4 max-w-7xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Solusi Digital <span className="text-brand-accent">Menyeluruh</span></h2>
        <p className="text-brand-muted text-lg max-w-2xl mx-auto">Kami tidak hanya membuat desain yang bagus, tapi juga membangun sistem yang bekerja untuk bisnis Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            onClick={() => onSelectService(service)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileTap={{ scale: 0.98 }}
            className="p-8 rounded-2xl bg-brand-bg-card shadow-sm border border-black/5 hover:border-brand-accent/50 transition-colors group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-3 flex items-center justify-between">
              {service.title}
              <span className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity text-sm font-normal">Detail →</span>
            </h3>
            <p className="text-brand-muted leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
