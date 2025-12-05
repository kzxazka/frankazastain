import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Basic',
    price: 'Mulai 500rb',
    description: 'Cocok untuk landing page sederhana atau tugas kuliah.',
    features: ['1 Halaman Responsive', 'Desain Modern Standard', 'Revisi 2x', 'Waktu Pengerjaan 3-5 Hari'],
  },
  {
    name: 'Professional',
    price: 'Mulai 1.5jt',
    description: 'Solusi terbaik untuk bisnis dan company profile.',
    features: ['Hingga 5 Halaman', 'Desain Premium & Custom', 'Optimasi SEO Dasar', 'Revisi 5x', 'Gratis Domain 1 Tahun', 'Prioritas Support'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Sistem kompleks dan kebutuhan skala besar.',
    features: ['Halaman Unlimited', 'Sistem Custom (React/Next.js)', 'UI/UX Research Mendalam', 'Maintenance 3 Bulan', 'Dedicated Project Manager', 'Revisi Unlimited'],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Penawaran Paket</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Investasi transparan untuk hasil digital yang maksimal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                tier.recommended 
                  ? 'bg-white/5 border-brand-purple shadow-2xl shadow-brand-purple/10' 
                  : 'bg-transparent border-white/10 hover:border-white/30'
              } flex flex-col transition-all`}
            >
              {tier.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Best Value
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-serif font-bold text-white mb-2">{tier.price}</p>
                <p className="text-gray-400 text-sm">{tier.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check size={18} className="text-brand-purple mt-0.5 shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full py-3 rounded-lg text-center font-semibold transition-colors ${
                  tier.recommended 
                    ? 'bg-brand-purple hover:bg-brand-purple/90 text-white' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;