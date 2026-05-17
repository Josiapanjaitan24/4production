import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Smartphone, Package } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AllProjects from './components/AllProjects';
import ServiceDetail from './components/ServiceDetail';
import Contact from './components/Contact';
import PricingCard from './components/PricingCard';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import WhyUs from './components/WhyUs';
import HowWeWork from './components/HowWeWork';

import { Helmet } from 'react-helmet-async'

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [contactService, setContactService] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const categoryTiles = [
    {
      id: 'webdev',
      title: 'Website Development',
      subtitle: 'Website yang bisa kerja, bukan cuma untuk pajangan.',
      icon: Globe,
      description: 'Banyak website dibuat sekali lalu ditinggal. Tampilannya bagus tapi tidak ada yang kontak, tidak ada yang beli.\n\nKami bikin website dengan satu tujuan: orang yang datang harus tahu kamu siapa, apa yang kamu jual, dan bagaimana cara hubungi kamu dalam 10 detik pertama. Semua mobile responsive, domain sudah include, dan pengerjaan cepat tanpa mengorbankan hasil.'
    },
    {
      id: 'social',
      title: 'Social Media Management',
      subtitle: 'Instagram yang dikelola, bukan ditinggal.',
      icon: Smartphone,
      description: 'Punya Instagram tapi tidak punya waktu urus kontennya adalah masalah yang hampir semua pemilik bisnis hadapi.\n\nKami yang pegang. Dari bikin strategi, desain feed, nulis caption, edit reels, sampai upload tergantung paket yang kamu pilih. Kamu tetap yang punya akunnya, kami yang jalankan kontennya. Setiap bulan kamu dapat laporan performa: konten mana yang bagus, mana yang kurang, dan apa yang kami rencanakan bulan depan.'
    },
    {
      id: 'komplit',
      title: 'Paket Komplit',
      subtitle: 'Web dan Instagram, beres dalam satu paket.',
      icon: Package,
      description: 'Beli terpisah bisa. Tapi kalau web dan Instagram-nya dikerjakan bareng, ada satu hal yang otomatis lebih baik: tampilannya konsisten. Warna, font, feel-nya sama antara website dan feed Instagram. Tidak perlu koordinasi bolak-balik.'
    }
  ];

  const categoryPackages = {
    webdev: [
      {
        title: 'Landing Page',
        price: 'Rp 700.000',
        tagline: 'Satu halaman. Langsung online.',
        description: 'Cocok untuk bisnis yang baru mau go-online atau butuh halaman promosi cepat. Satu halaman yang dirancang untuk satu tujuan: bikin orang yang datang langsung paham dan langsung action.\n\nLayout dari template kami. Warna dan isi konten bisa request. Kamu kasih teks dan foto, lalu kami yang rakit dan pasang. Domain dan hosting sudah include, jadi begitu selesai langsung bisa dibuka.',
        features: [
          'One page website, mobile responsive',
          'Layout dari template 4Production',
          'Colour palette sesuai request',
          'Free domain .my.id 1 tahun',
          'WhatsApp button & form kontak',
          'SEO dasar',
          'Revisi 2x',
          'Selesai 1–2 hari kerja'
        ],
        note: 'Teks, logo, dan foto dari kamu. Kami yang susun dan pasang. Pengerjaan dimulai setelah aset diterima lengkap.',
        isPopular: false,
        delay: 0.1,
      },
      {
        title: 'Company Profile',
        price: 'Rp 1.500.000',
        badge: 'Paling Diminati',
        tagline: 'Lima halaman. Tampil kredibel.',
        description: 'Untuk bisnis yang butuh tampil lebih lengkap. Lima halaman (biasanya Home, About, Service, Contact, dan Gallery) yang disusun supaya calon klien bisa kenalan dulu sebelum memutuskan.\n\nDesainnya kami buat custom sesuai brand kamu, bukan tempel template. Teksnya kami tulis dan kamu cukup kasih informasi dasarnya. Logo sederhana juga kami bantu buatkan kalau belum punya. Domain dan hosting sudah include, perawatan satu bulan juga masuk.',
        features: [
          '5 halaman custom (contoh: Home, About, Service, Contact, Gallery)',
          'Desain custom sesuai brand',
          'Copywriting oleh tim 4Production',
          'Colour palette sesuai request',
          'Free domain .my.id 1 tahun',
          'Hosting berbayar (include, kami yang setup)',
          'Perawatan 1 bulan (bug fix, ganti teks/foto maks 3x)',
          'Mobile responsive',
          'Revisi 3x',
          'Selesai 3–4 hari kerja'
        ],
        note: 'Foto dan informasi bisnis dari kamu. Pengerjaan dimulai setelah aset diterima lengkap.',
        isPopular: true,
        delay: 0.2,
      }
    ],
    social: [
      {
        title: 'Basic',
        price: 'Rp 650.000 / bulan',
        tagline: 'Mulai aktif dulu.',
        description: 'Delapan feed visual per bulan yaitu dua per minggu secara konsisten. Setiap post sudah include desain grafis, caption yang relevan, dan riset hashtag. Kami yang upload langsung ke akun Instagram kamu.\n\nTidak ada reels, tidak ada strategy session. Ini paket untuk yang mau mulai dulu, lihat hasilnya, baru nambah.',
        features: [
          '8 feed visual Instagram',
          'Caption & hashtag tiap post',
          'Riset hashtag',
          'Tim 4Production yang upload',
          'Laporan mingguan',
          'Kontrak 1 bulan'
        ],
        isPopular: false,
        delay: 0.1,
      },
      {
        title: 'Content Strategy',
        price: 'Rp 900.000 / bulan',
        badge: 'Paling Diminati',
        tagline: 'Konten yang punya arah.',
        description: 'Dua belas feed dan tiga reels per bulan. Sebelum produksi, kami susun dulu content plan bulanan seperti tema apa yang diangkat, format apa yang dipakai, dan kapan posting.\n\nCaption kami tulis, script reels kami buat, semua kami upload. Di akhir bulan kamu dapat laporan performa lengkap.',
        features: [
          '12 feed visual Instagram',
          '3 reels grafis',
          'Caption & script reels',
          'Kalender konten bulanan',
          'Riset hashtag',
          'Tim 4Production yang upload',
          'Laporan performa akhir bulan',
          'Revisi 2x per batch',
          'Kontrak 1 bulan'
        ],
        isPopular: true,
        delay: 0.2,
      },
      {
        title: 'Full Management',
        price: 'Rp 1.200.000 / bulan',
        tagline: 'Kami yang jalankan, kamu yang fokus bisnis.',
        description: 'Lima belas feed dan lima reels per bulan. Kami yang desain, tulis, upload, dan schedule. Selain itu kami juga aktif di akun kamu untuk membalas komentar dan DM sesuai SOP yang sudah disepakati.\n\nSetiap bulan ada satu campaign mini dan laporan lengkap. Ada evaluasi singkat via WhatsApp atau Meet di akhir bulan.',
        features: [
          '15 feed visual Instagram',
          '5 reels grafis',
          'Caption & script reels',
          'Upload & scheduling oleh tim',
          'Interaksi audiens (komen & DM)',
          'Campaign mini 1x / bulan',
          'Laporan bulanan lengkap',
          'Revisi 2x per batch',
          'Kontrak 1 bulan'
        ],
        note: 'Budget iklan tidak termasuk.',
        isPopular: false,
        delay: 0.3,
      }
    ],
    komplit: [
      {
        title: 'Komplit A',
        price: 'Rp 1.200.000',
        tagline: 'Landing page + Basic',
        description: 'Landing page yang online dalam dua hari, plus Instagram yang aktif selama sebulan penuh. Colour palette web dan Instagram otomatis kami selaraskan. Hemat Rp 150.000 dibanding beli terpisah.',
        features: [
          'Landing page 1 halaman, mobile responsive',
          'Free domain .my.id 1 tahun',
          '12 feed visual Instagram',
          '3 reels grafis',
          'Caption & upload oleh tim',
          'Laporan performa akhir bulan',
          'Colour palette web & Instagram diselaraskan',
          'Revisi web 2x, konten 2x per batch'
        ],
        savings: 'Hemat Rp 150.000',
        isPopular: false,
        delay: 0.1,
      },
      {
        title: 'Komplit B',
        price: 'Rp 2.300.000',
        badge: 'Rekomendasi',
        tagline: 'Company profile + Content Strategy',
        description: 'Website company profile profesional plus pengelolaan Instagram selama 1 bulan. Cocok untuk bisnis yang ingin tampil lebih serius dengan branding yang konsisten di website dan sosial media.',
        features: [
          'Company profile 5 halaman',
          'Free domain .my.id 1 tahun',
          'Hosting berbayar (include, kami yang setup)',
          'Perawatan web 1 bulan',
          'Copywriting oleh tim',
          '15 feed visual Instagram',
          '5 reels grafis',
          'Caption & upload oleh tim',
          'Laporan performa akhir bulan',
          'Colour palette web & Instagram diselaraskan',
          'Revisi web 3x, konten 2x per batch'
        ],
        savings: 'Hemat Rp 100.000',
        isPopular: true,
        delay: 0.2,
      },
      {
        title: 'Komplit C',
        price: 'Rp 2.600.000',
        tagline: 'Company profile + Full Management',
        description: 'Company profile lengkap plus Instagram dikelola sebulan penuh. Untuk bisnis yang mau masuk dunia digital dengan serius sehingga website ada, konten jalan, dan tampilan konsisten dari atas ke bawah.',
        features: [
          'Company profile 5 halaman',
          'Free domain .my.id 1 tahun',
          'Hosting berbayar (include, kami yang setup)',
          'Perawatan web 1 bulan',
          'Campaign mini 1x / bulan',
          '15 feed visual Instagram',
          '5 reels grafis',
          'Interaksi audiens (komen & DM)',
          'Laporan performa akhir bulan',
          'Colour palette web & Instagram diselaraskan',
          'Revisi web 3x, konten 2x per batch'
        ],
        savings: 'Hemat Rp 100.000',
        isPopular: false,
        delay: 0.2,
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>
          4Production - Website & Social Media Agency
        </title>

        <meta
          name="description"
          content="Jasa pembuatan website, landing page, company profile, dan social media management untuk bisnis modern."
        />

        <meta
          name="keywords"
          content="jasa website, landing page, company profile, social media management"
        />

        <meta
          property="og:title"
          content="4Production"
        />

        <meta
          property="og:description"
          content="Website dan social media untuk bisnis modern."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://4production.vercel.app/"
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <div id="beranda">
          <Hero />
        </div>

        <About onShowTeam={() => setShowTeam(true)} />
        <WhyUs />

        <Portfolio onViewAll={() => setShowAllProjects(true)} />
        <Services onSelectService={setSelectedService} />

        <section id="harga" className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text mb-4">Investasi Transparan untuk <span className="text-brand-accent">Hasil Maksimal</span></h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">Pilih layanan yang ingin Anda eksplor untuk menemukan paket terbaik sesuai kebutuhan bisnis Anda.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-0 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              {categoryTiles.map((category) => {
                const CategoryIcon = category.icon;
                const isActive = activeCategory === category.id;

                return (
                  <motion.button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className={`group shrink-0 w-[85vw] md:w-auto snap-center relative rounded-2xl border p-6 md:p-8 text-left overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'border-brand-accent bg-brand-accent/10 text-brand-text shadow-lg shadow-brand-accent/20 dark:bg-brand-accent/20' : 'border-black/5 bg-brand-bg-card text-brand-muted shadow-sm hover:border-brand-accent/30 hover:shadow-md dark:border-white/5'}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${isActive ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/30' : 'bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent/20'}`}>
                        <CategoryIcon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-sm text-brand-muted mt-1">{category.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold ${isActive ? 'text-cyan-200' : 'text-slate-500'}`}>Pilih kategori</span>
                      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${isActive ? 'border-cyan-300 bg-cyan-300/10 text-cyan-300' : 'border-slate-200 bg-white text-slate-500'}`}>›</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-12 mb-8 text-center max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                {activeCategory ? (
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {categoryTiles.find(c => c.id === activeCategory)?.description.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-brand-muted text-base md:text-lg text-left md:text-center leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-brand-muted text-base md:text-lg">
                      Pilih layanan yang ingin Anda eksplor untuk melihat paket terbaik.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              {activeCategory && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
                >
                  {categoryPackages[activeCategory].map((plan, index) => (
                    <motion.div
                      key={plan.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeInOut' }}
                      className="rounded-3xl"
                    >
                      <PricingCard
                        {...plan}
                        onSelect={(title) => {
                          const msg = encodeURIComponent(`Halo 4Production! Saya tertarik dengan paket ${title}. Boleh diskusi lebih lanjut?`);
                          window.open(`https://wa.me/6285173339029?text=${msg}`, '_blank');
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <HowWeWork />

        <Contact selectedOption={contactService} />

        <Footer />

        <AnimatePresence>
          {showAllProjects && (
            <AllProjects onClose={() => setShowAllProjects(false)} />
          )}
          {showTeam && (
            <Team onClose={() => setShowTeam(false)} />
          )}
          {selectedService && (
            <ServiceDetail service={selectedService} onClose={() => setSelectedService(null)} />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default App;