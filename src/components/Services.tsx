import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Palette, GraduationCap, Layout, ArrowUpRight } from 'lucide-react';
import type { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'web',
    title: 'Pembuatan Website',
    description: 'Company profile, landing page, toko online, hingga sistem custom dengan performa tinggi dan SEO friendly.',
    icon: <Globe size={32} className="text-white" />,
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Perancangan antarmuka aplikasi mobile dan website yang user-friendly, modern, dan memanjakan mata.',
    icon: <Layout size={32} className="text-white" />,
  },
  {
    id: 'academic',
    title: 'Joki UI/UX Tugas Kuliah',
    description: 'Bantuan profesional untuk tugas desain UI/UX mahasiswa. Hasil rapi, file source lengkap, dan tepat deadline.',
    icon: <GraduationCap size={32} className="text-white" />,
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    description: 'Logo branding, media sosial, poster, dan kebutuhan visual marketing lainnya dengan sentuhan artistik.',
    icon: <Palette size={32} className="text-white" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-black">
       
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Layanan Kami</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Solusi digital komprehensif yang dirancang untuk kebutuhan spesifik Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-brand-purple" />
              </div>
              
              <div className="w-14 h-14 bg-brand-purple/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;