import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const PricingCard = ({ title, price, tagline, description, features, badge, savings, note, isPopular, delay = 0, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`relative p-6 md:p-8 rounded-3xl flex flex-col h-full ${
        isPopular || badge
          ? 'bg-brand-bg-card border-2 border-brand-accent shadow-xl shadow-brand-accent/10' 
          : 'bg-brand-bg-card shadow-sm border border-black/5 dark:border-white/5 hover:border-brand-accent/50 transition-colors'
      }`}
    >
      {(badge || isPopular) && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md whitespace-nowrap">
          {badge || 'PALING DIMINATI'}
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-brand-text mb-1">{title}</h3>
        {tagline && <p className="text-sm font-semibold text-brand-accent mb-4">{tagline}</p>}
        
        <div className="flex flex-col gap-1 my-4">
          <span className="text-3xl font-bold text-brand-text tracking-tight">{price}</span>
          {savings && (
            <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-md w-fit mt-1">
              {savings}
            </span>
          )}
        </div>
        
        {description && (
          <div className="text-sm text-brand-muted leading-relaxed mt-4 space-y-2">
            {description.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1">
        <div className="h-px w-full bg-black/5 dark:bg-white/5 mb-6"></div>
        <p className="text-sm font-bold text-brand-text mb-4">Yang Didapat:</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <span className="text-sm text-brand-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {note && (
        <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5">
          <p className="text-xs text-brand-muted italic">{note}</p>
        </div>
      )}

      <button 
        onClick={() => onSelect && onSelect(title)}
        className={`w-full py-3 rounded-xl font-bold text-sm transition-all mt-6 ${
          isPopular || badge
            ? 'bg-brand-accent text-white hover:bg-brand-accent-hover shadow-md shadow-brand-accent/20' 
            : 'bg-black/5 dark:bg-white/5 text-brand-text hover:bg-brand-accent hover:text-white'
        }`}
      >
        Pilih Paket
      </button>
    </motion.div>
  );
};

export default PricingCard;
