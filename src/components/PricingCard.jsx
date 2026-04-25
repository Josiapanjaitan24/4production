import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const PricingCard = ({ title, price, features, isPopular, delay = 0, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-2xl flex flex-col h-full ${
        isPopular 
          ? 'bg-brand-bg-card border-2 border-brand-accent shadow-xl shadow-brand-accent/20' 
          : 'bg-brand-bg-card shadow-sm border border-black/5 hover:border-brand-accent/50 transition-colors'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
          PALING DIMINATI
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-brand-text mb-2">{title}</h3>
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">Estimasi Mulai</p>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-medium text-brand-muted">Rp</span>
          <span className="text-4xl font-bold text-brand-text">{price}</span>
          <span className="text-sm font-medium text-brand-muted">k*</span>
        </div>
      </div>

      <div className="flex-1">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <span className="text-brand-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.a 
        href="#kontak"
        onClick={() => onSelect && onSelect(title)}
        whileTap={{ scale: 0.95 }}
        className={`mt-8 w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 text-center inline-block ${
        isPopular 
          ? 'bg-brand-accent text-white hover:bg-brand-accent-hover shadow-md hover:shadow-xl shadow-brand-accent/30'
          : 'bg-white border border-black/5 text-brand-text hover:border-brand-accent hover:text-brand-accent'
      }`}>
        Pilih Paket
      </motion.a>
    </motion.div>
  );
};

export default PricingCard;
