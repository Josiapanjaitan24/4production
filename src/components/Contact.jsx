import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

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

const Contact = ({ selectedOption }) => {
  const [service, setService] = React.useState("Pilih Layanan");

  React.useEffect(() => {
    if (selectedOption) {
      setService(selectedOption);
    }
  }, [selectedOption]);

  return (
    <section id="kontak" className="py-24 px-4 max-w-7xl mx-auto border-t border-brand-muted/10 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-6">Mari Mulai <span className="text-brand-accent">Proyek Anda</span></h2>
          <p className="text-brand-muted text-lg mb-10 max-w-md">Punya ide cemerlang atau butuh bantuan untuk menumbuhkan bisnis Anda? Tim kami siap mendengarkan dan memberikan solusi.</p>

          <div className="space-y-6">
            <a href="https://wa.me/628123456778" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-brand-bg-card flex items-center justify-center border border-black/5 shadow-sm group-hover:border-brand-accent/50 group-hover:shadow-md transition-all">
                <MessageSquare className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-sm text-brand-muted">WhatsApp</p>
                <p className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">08123456778</p>
              </div>
            </a>

            <a href="mailto:production4id@gmail.com" className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-brand-bg-card flex items-center justify-center border border-black/5 shadow-sm group-hover:border-brand-accent/50 group-hover:shadow-md transition-all">
                <Mail className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-sm text-brand-muted">Email</p>
                <p className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">production4id@gmail.com</p>
              </div>
            </a>

            <a href="https://instagram.com/4.production.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-brand-bg-card flex items-center justify-center border border-black/5 shadow-sm group-hover:border-brand-accent/50 group-hover:shadow-md transition-all">
                <InstagramIcon className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-sm text-brand-muted">Instagram</p>
                <p className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">4.production.id</p>
              </div>
            </a>

            <a href="https://facebook.com/4.production.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-brand-bg-card flex items-center justify-center border border-black/5 shadow-sm group-hover:border-brand-accent/50 group-hover:shadow-md transition-all">
                <FacebookIcon className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="text-sm text-brand-muted">Facebook</p>
                <p className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">4.production.id</p>
              </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="bg-brand-bg-card p-8 rounded-2xl border border-black/5 shadow-xl"
        >
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-2">Nama Lengkap</label>
                <input type="text" className="w-full bg-brand-bg border border-black/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-muted mb-2">Nomor HP / WA</label>
                <input type="text" className="w-full bg-brand-bg border border-black/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" placeholder="+62..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-muted mb-2">Layanan yang Dibutuhkan</label>
              <select 
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-brand-bg border border-brand-muted/20 rounded-lg px-4 py-3 text-brand-muted focus:outline-none focus:border-brand-accent transition-colors"
              >
                <option>Pilih Layanan</option>
                <option>Web Development</option>
                <option>Social Media Management</option>
                <option>Website + Konten</option>
                <option>Paket Lengkap</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-muted mb-2">Pesan</label>
              <textarea rows="4" className="w-full bg-brand-bg border border-black/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" placeholder="Ceritakan tentang bisnis Anda..."></textarea>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-accent-hover transition-colors mt-4"
            >
              Kirim Pesan
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
