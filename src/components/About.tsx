import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "Desain Modern & Aesthetic",
    "Pengerjaan Cepat & Tepat Waktu",
    "Harga Kompetitif dengan Kualitas Premium",
    "Revisi Fleksibel & Konsultasi Gratis"
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark relative">

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Tentang FRANKAZASTAIN Studio</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              FRANKAZASTAIN Studio adalah mitra kreatif digital yang berfokus pada estetika, fungsionalitas, dan pengalaman pengguna. Kami tidak hanya membuat desain, tetapi menciptakan solusi visual yang membantu bisnis dan individu menonjol di era digital.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Dengan tim yang berpengalaman di bidang pengembangan web, desain UI/UX, dan grafis, kami menjamin hasil akhir yang memadukan seni dan teknologi.
            </p>
            
            <div className="space-y-3">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-brand-purple shrink-0" size={20} />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border border-white/10 relative group">
                {/* Decorative image placeholder */}
                <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Studio Workspace" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-5xl font-bold text-white mb-2">20+</p>
                  <p className="text-gray-400 uppercase tracking-widest text-sm">Proyek Selesai</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;