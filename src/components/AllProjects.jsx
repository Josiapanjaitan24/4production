import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const AllProjects = ({ onClose }) => {
  // Scroll to top when this page is opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      title: "F&B Brand Rebranding",
      category: "Social Media & Design",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Tech Startup Landing Page",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Fashion E-Commerce",
      category: "Web & Content",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Real Estate Company Profile",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Coffee Shop Instagram Feed",
      category: "Social Media & Design",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Fitness App Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Creative Agency Portfolio",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Local Restaurant Socials",
      category: "Social Media & Design",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop"
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
              window.location.href = '#portfolio';
            }, 50);
          }}
          className="flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors mb-12 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-lg">Kembali</span>
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-6">Semua <span className="text-brand-accent">Karya Kami</span></h1>
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
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
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
