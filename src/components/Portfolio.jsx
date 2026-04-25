import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = ({ onViewAll }) => {
  const projects = [
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
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Karya <span className="text-brand-accent">Terbaik</span> Kami</h2>
          <p className="text-brand-muted text-lg max-w-xl">Lihat bagaimana kami membantu berbagai brand bertransformasi dan mencapai target mereka melalui visual dan teknologi.</p>
        </div>
        <motion.button 
          onClick={onViewAll}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-brand-accent text-brand-accent rounded-full hover:bg-brand-accent hover:text-white transition-colors font-medium"
        >
          Lihat Semua
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
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
    </section>
  );
};

export default Portfolio;
