import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import logoDark from '../assets/hero_section_gelap.png';
import logoLight from '../assets/hero_section_terang.png';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Efek untuk mendeteksi scroll agar background sedikit lebih gelap jika di-scroll (opsional untuk keterbacaan)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-full px-6 py-4 flex items-center justify-between ${scrolled || isOpen
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-black/10 dark:border-white/10 shadow-lg'
            : 'bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm'
          }`}
      >
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <img src={isDarkMode ? logoDark : logoLight} alt="4production Logo" className="h-10 object-contain transition-opacity duration-300" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#beranda" className="text-brand-text hover:text-brand-accent transition-colors">Beranda</a>
          <a href="#tentang" className="text-brand-muted hover:text-brand-accent transition-colors">Tentang</a>
          <a href="#why-us" className="text-brand-muted hover:text-brand-accent transition-colors">Why Us</a>
          <a href="#layanan" className="text-brand-muted hover:text-brand-accent transition-colors">Layanan</a>
          <a href="#portfolio" className="text-brand-muted hover:text-brand-accent transition-colors">Portfolio</a>
          <a href="#kontak" className="text-brand-muted hover:text-brand-accent transition-colors">Kontak</a>
        </div>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full text-brand-text hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-brand-accent" /> : <Moon className="w-5 h-5" />}
          </button>
          
          {/* CTA Button */}
          <motion.a
            href="#kontak"
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white transition-all font-semibold text-sm inline-block"
          >
            Mulai Proyek
          </motion.a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full text-brand-text hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-brand-accent" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="text-brand-text focus:outline-none p-2"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-4 w-56 z-40 bg-brand-bg-card border border-black/5 rounded-2xl shadow-2xl p-5 md:hidden flex flex-col gap-3 origin-top-right"
          >
            <a href="#beranda" onClick={closeMenu} className="text-brand-text text-sm font-medium py-2 border-b border-black/5 hover:text-brand-accent">Beranda</a>
            <a href="#tentang" onClick={closeMenu} className="text-brand-muted text-sm font-medium py-2 border-b border-black/5 hover:text-brand-accent">Tentang</a>
            <a href="#why-us" onClick={closeMenu} className="text-brand-muted text-sm font-medium py-2 border-b border-black/5 hover:text-brand-accent">Why Us</a>
            <a href="#layanan" onClick={closeMenu} className="text-brand-muted text-sm font-medium py-2 border-b border-black/5 hover:text-brand-accent">Layanan</a>
            <a href="#portfolio" onClick={closeMenu} className="text-brand-muted text-sm font-medium py-2 border-b border-black/5 hover:text-brand-accent">Portfolio</a>
            <a href="#kontak" onClick={closeMenu} className="text-brand-muted text-sm font-medium py-2 hover:text-brand-accent">Kontak</a>

            <motion.a
              href="#kontak"
              onClick={closeMenu}
              whileTap={{ scale: 0.95 }}
              className="mt-2 w-full py-2.5 rounded-xl bg-brand-accent text-white font-bold text-sm hover:bg-brand-accent-hover transition-colors text-center inline-block"
            >
              Mulai Proyek
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
