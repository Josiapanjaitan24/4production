import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const ServiceDetail = ({ service, onClose }) => {
  // Scroll to top when opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-brand-bg overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <button 
          onClick={() => {
            onClose();
            setTimeout(() => {
              window.location.href = '#layanan';
            }, 50);
          }}
          className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-12 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-lg">Kembali</span>
        </button>

        <div className="flex items-center gap-6 mb-10">
          <div className="w-20 h-20 rounded-3xl bg-brand-accent/10 flex items-center justify-center">
            {service.icon && React.cloneElement(service.icon, { className: "w-10 h-10 text-brand-accent" })}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text">{service.title}</h1>
        </div>

        <div className="bg-brand-bg-card p-8 md:p-12 rounded-3xl border border-black/5 shadow-2xl">
          <h2 className="text-2xl font-bold text-brand-text mb-6">Tentang Layanan Ini</h2>
          <p className="text-lg text-brand-muted leading-relaxed mb-10">
            {service.detailedDescription || service.description} 
            Kami merancang layanan {service.title} dengan pendekatan strategis dan berbasis data. Tujuan utama kami adalah memastikan setiap visual, baris kode, dan teks copywriting bekerja optimal untuk menarik target audiens Anda dan memaksimalkan konversi bisnis.
          </p>

          <h2 className="text-2xl font-bold text-brand-text mb-6">Apa yang Anda Dapatkan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                <span className="text-brand-muted">Keunggulan strategis dan fitur khusus yang disesuaikan dengan kebutuhan {service.title} Anda.</span>
              </div>
            ))}
          </div>

          <div className="bg-brand-bg p-8 rounded-2xl border border-brand-accent/20 text-center">
            <h3 className="text-2xl font-bold text-brand-text mb-4">Siap untuk Memulai?</h3>
            <p className="text-brand-muted mb-6">Mari diskusikan bagaimana layanan {service.title} kami dapat membantu pertumbuhan bisnis Anda.</p>
            <button 
              onClick={() => {
                onClose();
                setTimeout(() => {
                  window.location.href = '#kontak';
                }, 500);
              }}
              className="px-8 py-4 bg-brand-accent text-white rounded-xl font-bold hover:bg-brand-accent-hover transition-colors shadow-xl shadow-brand-accent/30"
            >
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
