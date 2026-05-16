import React from 'react';
import { Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoDark from '../assets/hero_section_gelap.png';
import logoLight from '../assets/hero_section_terang.png';

const LinkedInIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className="bg-brand-surface border-t border-black/5 dark:border-white/5 pt-20 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-12 lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img
                src={isDarkMode ? logoDark : logoLight}
                alt="4Production Logo"
                className="h-10 object-contain"
              />
            </div>
            <p className="text-brand-muted leading-relaxed mb-8 max-w-xs">
              Satu tim untuk website dan Instagram bisnis kamu.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/4.production.id" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-accent transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://wa.me/62881037387241" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-accent transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 flex items-center justify-center text-brand-muted hover:text-brand-accent hover:border-brand-accent transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-xs font-bold text-brand-muted tracking-wider uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-text/80 dark:text-brand-muted">
              <li><a href="#beranda" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#tentang" className="hover:text-brand-accent transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-brand-accent transition-colors">Portofolio</a></li>
              <li><a href="#why-us" className="hover:text-brand-accent transition-colors">Why Us</a></li>
            </ul>
          </div>

          {/* Layanan */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-xs font-bold text-brand-muted tracking-wider uppercase mb-6">Layanan</h4>
            <ul className="space-y-4 text-brand-text/80 dark:text-brand-muted">
              <li><a href="#harga" className="hover:text-brand-accent transition-colors">Website Development</a></li>
              <li><a href="#harga" className="hover:text-brand-accent transition-colors">Social Media Management</a></li>
              <li><a href="#cara-kerja" className="hover:text-brand-accent transition-colors">Cara Kerja</a></li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs font-bold text-brand-muted tracking-wider uppercase mb-6">Hubungi Kami</h4>
            <ul className="space-y-5 text-brand-text/80 dark:text-brand-muted">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-70 shrink-0" />
                <a href="mailto:productioniddd04@gmail.com.id" className="hover:text-brand-accent transition-colors">productioniddd04@gmail.com.id</a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 opacity-70 shrink-0" />
                <a href="https://wa.me/62881037387241" className="hover:text-brand-accent transition-colors">+62 881-0373-87241</a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5 opacity-70 shrink-0" />
                <a href="https://www.instagram.com/4production.id?igsh=MXR1ZjhlNDZzYnUzdw==" className="hover:text-brand-accent transition-colors">4production.id</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-sm text-center md:text-left">
            &copy; 2025 4Production. All rights reserved.
          </p>
          <div className="text-sm text-brand-muted">
            Made with passion in Indonesia ID
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
