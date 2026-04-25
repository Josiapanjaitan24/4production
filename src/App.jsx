import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AllProjects from './components/AllProjects';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import PricingCard from './components/PricingCard';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [contactService, setContactService] = useState("");

  const pricingPlans = [
    {
      title: "Web Development",
      price: "300",
      features: [
        "Desain responsif & modern",
        "Optimasi SEO dasar",
        "Integrasi form kontak",
        "Domain & Hosting (Opsional)"
      ],
      isPopular: false,
      delay: 0.1
    },
    {
      title: "Social Media Management",
      price: "650",
      features: [
        "Desain feed & story",
        "Copywriting profesional",
        "Riset hashtag tertarget",
        "Revisi tak terbatas"
      ],
      isPopular: false,
      delay: 0.2
    },
    {
      title: "Website + Konten",
      price: "750",
      features: [
        "Website custom profesional",
        "Desain konten sosmed bulanan",
        "Integrasi sosmed ke website",
        "Prioritas support"
      ],
      isPopular: true,
      delay: 0.3
    },
    {
      title: "Paket Lengkap",
      price: "1.000",
      features: [
        "Semua fitur Web + Konten",
        "Manajemen sosmed penuh (Posting & Interaksi)",
        "Laporan analitik bulanan",
        "Konsultasi strategi digital"
      ],
      isPopular: false,
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="beranda">
        <Hero />
      </div>

      <About />

      <Portfolio onViewAll={() => setShowAllProjects(true)} />
      <Services onSelectService={setSelectedService} />

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Investasi Transparan untuk <span className="text-brand-accent">Hasil Maksimal</span></h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda. Tidak ada biaya tersembunyi.</p>
        </div>

        <div className="overflow-hidden w-full relative py-8 -mx-4 px-4 sm:mx-0 sm:px-0 group">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((set) => (
              <div key={set} className="flex gap-6 pr-6 shrink-0 items-stretch">
                {pricingPlans.map((plan, index) => (
                  <div key={`${set}-${index}`} className="w-[300px] md:w-[350px] shrink-0 flex flex-col">
                    <div className="flex-1">
                      <PricingCard {...plan} onSelect={setContactService} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-brand-muted mt-10 max-w-2xl mx-auto">
          * Harga di atas merupakan estimasi awal. Total investasi akan disesuaikan dengan kebutuhan spesifik dan kompleksitas proyek Anda.
        </p>
      </section>

      <Contact selectedOption={contactService} />

      <Footer />

      <AnimatePresence>
        {showAllProjects && (
          <AllProjects onClose={() => setShowAllProjects(false)} />
        )}
        {selectedService && (
          <ServiceDetail service={selectedService} onClose={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App;