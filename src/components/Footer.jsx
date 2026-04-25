import React from 'react';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-brand-surface border-t border-black/5 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-brand-text mb-4">4production.</h3>
            <p className="text-brand-muted leading-relaxed mb-6">
              Meningkatkan skala bisnis Anda melalui layanan digital komprehensif. Solusi inovatif untuk brand yang ingin mendominasi era digital.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/4.production.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-bg-card border border-black/5 flex items-center justify-center text-brand-muted hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all hover:-translate-y-1"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/4.production.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-bg-card border border-black/5 flex items-center justify-center text-brand-muted hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all hover:-translate-y-1"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/628123456778" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-bg-card border border-black/5 flex items-center justify-center text-brand-muted hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-brand-text mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#beranda" className="text-brand-muted hover:text-brand-accent transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="text-brand-muted hover:text-brand-accent transition-colors">Tentang Kami</a></li>
              <li><a href="#layanan" className="text-brand-muted hover:text-brand-accent transition-colors">Layanan</a></li>
              <li><a href="#portofolio" className="text-brand-muted hover:text-brand-accent transition-colors">Portofolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-brand-text mb-4">Layanan Kami</h4>
            <ul className="space-y-3">
              <li className="text-brand-muted">Pembuatan Website</li>
              <li className="text-brand-muted">Manajemen Sosial Media</li>
              <li className="text-brand-muted">Desain Konten</li>
              <li className="text-brand-muted">Konsultasi Digital</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-brand-text mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-muted">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-brand-muted">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>+62 812 3456 778</span>
              </li>
              <li className="flex items-center gap-3 text-brand-muted">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>production4id@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} 4production. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-brand-muted">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
