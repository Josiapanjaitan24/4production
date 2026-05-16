import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import lotusImg from '../assets/lotus.png';
import jualBeliImg from '../assets/jual_beli_web.png';
import catalogParfumeImg from '../assets/Catalog_parfume.png';
import ciptaKreasiImg from '../assets/ciptaKreasi.png';


const AllProjects = ({ onClose }) => {
  // Scroll to top when this page is opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      title: "Lotus Bali Website",
      category: "Web Development",
      image: lotusImg,
      link: "https://lotus-six-green.vercel.app/pages/home.html"
    },
    {
      title: "Jual Beli Web",
      category: "Web Development",
      image: jualBeliImg
    },
    {
      title: "Catalog Parfume",
      category: "Design & Branding",
      image: catalogParfumeImg
    },
    {
      title: "Company Profile CIPTA KREASI INDONESIA",
      category: "Web Development",
      image: ciptaKreasiImg,
      link: "https://desainature.vercel.app/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-brand-bg overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <button
          onClick={() => {
            onClose();
            // Timeout ensures the exit animation plays smoothly or states update before scrolling
            setTimeout(() => {
              window.location.href = '#portfolio';
            }, 50);
          }}
          className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-12 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-lg">Kembali</span>
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">Semua <span className="text-brand-accent">4Production Portofolio</span></h1>
          <p className="text-xl text-brand-muted max-w-2xl">Jelajahi berbagai proyek sukses yang telah kami kerjakan untuk klien-klien luar biasa kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => project.link && window.open(project.link, '_blank', 'noopener noreferrer')}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-4">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p className="text-brand-accent text-sm font-semibold mb-1 tracking-wider uppercase">{project.category}</p>
              <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AllProjects;
