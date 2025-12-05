import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Berapa lama waktu pengerjaan proyek?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas. Untuk landing page sederhana biasanya 3-5 hari kerja, sedangkan sistem custom bisa memakan waktu 2-4 minggu."
  },
  {
    question: "Apakah menyediakan source file untuk desain?",
    answer: "Ya, untuk layanan desain (UI/UX, Grafis), kami akan memberikan source file lengkap (Figma/Adobe AI/PSD) setelah pelunasan."
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Kami menerapkan sistem DP 50% di awal sebelum pengerjaan dimulai, dan pelunasan 50% setelah proyek selesai dan disetujui."
  },
  {
    question: "Apakah bisa revisi jika hasil tidak sesuai?",
    answer: "Tentu. Setiap paket memiliki kuota revisi (minor) gratis. Kami akan memastikan hasil akhir sesuai dengan brief yang disepakati di awal."
  },
  {
    question: "Apakah melayani tugas kuliah/joki UI UX dadakan?",
    answer: "Kami bisa membantu tugas dengan deadline ketat (Express Service) dengan biaya tambahan, selama slot tim kami tersedia."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Pertanyaan Umum</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-lg text-gray-200">{item.question}</span>
                {activeIndex === index ? (
                  <Minus className="text-brand-purple shrink-0" size={20} />
                ) : (
                  <Plus className="text-gray-400 shrink-0" size={20} />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;