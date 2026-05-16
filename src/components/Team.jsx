import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import gungdeImg from '../assets/gungde.png';
import josiaImg from '../assets/josia.png';
import wenImg from '../assets/wen.png';
import malikImg from '../assets/mzidan.png';
import pairusImg from '../assets/pairus.png';

const Team = ({ onClose }) => {
  // Scroll to top when this page is opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Agung",
      role: "Founder & Business Development",
      image: gungdeImg,
      description: "Bertanggung jawab mencari klien baru, membangun relasi bisnis, serta mengatur arah dan perkembangan bisnis agar terus berkembang secara stabil."
    },
    {
      name: "Josia",
      role: "Web Developer",
      image: josiaImg,
      description: "Bertanggung jawab membangun website yang responsive dan fungsional, mulai dari landing page hingga company profile, serta memastikan website berjalan dengan baik setelah launch."
    },
    {
      name: "Daffa",
      role: "Content Strategist & Copywriter",
      image: wenImg,
      description: "Bertanggung jawab menyusun strategi konten, membuat copywriting, mengatur alur produksi konten, serta memastikan hasil konten sesuai dengan kualitas dan tujuan brand klien."
    },
    {
      name: "Malik",
      role: "Visual & Creative Designer",
      image: malikImg,
      description: "Bertanggung jawab membuat desain visual untuk kebutuhan media sosial dan website, sekaligus menjaga tampilan brand klien tetap konsisten dan menarik."
    },
    {
      name: "Fairuuz",
      role: "Content Strategist & Copywriter",
      image: pairusImg,
      description: "Bertanggung jawab membangun website yang responsive dan fungsional, mulai dari landing page hingga company profile, serta memastikan website berjalan dengan baik setelah launch."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-brand-bg overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <button
          onClick={() => {
            onClose();
            // Timeout ensures the exit animation plays smoothly or states update before scrolling
            setTimeout(() => {
              window.location.href = '#tentang';
            }, 50);
          }}
          className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-12 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-lg">Kembali</span>
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">Orang di Balik <span className="text-brand-accent">Layar</span></h1>
          <p className="text-xl text-brand-muted max-w-2xl">Kenali tim kreatif di balik 4Production yang berdedikasi untuk menghadirkan solusi digital terbaik untuk bisnis Anda.</p>
        </div>

        <div className="overflow-hidden w-full relative py-8 -mx-4 px-4 sm:mx-0 sm:px-0 group">
          <div className="flex w-max animate-marquee gap-6">
            {[0, 1].map((copyIndex) => (
              <div key={copyIndex} className="flex gap-6 pr-6 shrink-0 items-stretch">
                {teamMembers.map((member, index) => (
                  <div key={`${copyIndex}-${index}`} className="w-[300px] md:w-[340px] lg:w-[380px] shrink-0">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03 }}
                      className="group relative rounded-2xl h-[320px] md:h-[360px] overflow-hidden shadow-2xl shadow-black/10 border border-white/10 transition-transform duration-500 ease-in-out"
                      style={{
                        backgroundImage: `url(${member.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-400 ease-in-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out" />

                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-left opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-in-out">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90 mb-2">{member.role}</p>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight drop-shadow-lg mb-3">{member.name}</h3>
                        <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-[95%] drop-shadow-md">{member.description}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;