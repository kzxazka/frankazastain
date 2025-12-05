import React from 'react';
// Asumsi Anda menggunakan Lucide-React (seperti di kode lama Anda)
import { Send, Paperclip } from 'lucide-react';
// Asumsi Anda menggunakan Framer Motion (seperti di kode lama Anda)
import { motion } from 'framer-motion'; 

// Konstanta Styling (Menggantikan Tailwind default di form lama)
const BRAND_PURPLE = 'purple-600'; // Warna aksen utama

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden text-white">
      {/* Background Gradient & Blur Effect (dipertahankan) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Mulai Proyek <span className={`text-${BRAND_PURPLE}`}>Anda</span>
          </h2>
          <p className="text-gray-400">
            Isi formulir di bawah ini dan biarkan kami mewujudkan visi Anda.
          </p>
        </motion.div>

        {/* FORM MENGGUNAKAN METODE REDIRECT (PALING STABIL) */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          // --- KUNCI: MENGGUNAKAN ACTION DAN METHOD STANDAR ---
          action="https://formsubmit.co/frankazastain@gmail.com"
          method="POST"
          encType="multipart/form-data" // Penting untuk field upload
          className="bg-gray-900 border border-purple-600/20 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
        >
          
          {/* Hidden Fields: Anti-Spam dan Redirect Setelah Kirim */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://frankazastain.vercel.app/thanks.html" />
          <input type="hidden" name="_subject" value="Permintaan Proyek Baru dari Website" />

          {/* Nama + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-purple-400">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                // Styling Premium Gelap
                className="w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-purple-400">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* WhatsApp + Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-sm font-medium text-purple-400">Nomor WhatsApp</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                className="w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
                placeholder="+62 812..."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-purple-400">Jenis Layanan</label>
              <select
                id="service"
                name="service"
                required
                // Styling Select: appearance-none penting untuk visual kustom
                className="w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none"
              >
                <option value="" disabled selected hidden className="bg-gray-800">Pilih Layanan...</option>
                <option value="Pembuatan Website" className="bg-gray-800">Pembuatan Website</option>
                <option value="UI/UX Design" className="bg-gray-800">UI/UX Design</option>
                <option value="Joki UI/UX / Tugas" className="bg-gray-800">Joki UI/UX / Tugas</option>
                <option value="Graphic Design" className="bg-gray-800">Graphic Design</option>
                <option value="Lainnya" className="bg-gray-800">Lainnya</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div className="mb-6">
            <label className="text-sm font-medium text-purple-400 mb-2 block">Perkiraan Budget</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { val: '< 1 Juta', label: '< 1 Juta' },
                { val: '1 - 2 Juta', label: '1 - 2 Juta' },
                { val: '3 - 5 Juta', label: '3 - 5 Juta' },
                { val: '> 5 Juta', label: '> 5 Juta' },
              ].map((option) => (
                <label
                  key={option.val}
                  // Radio Button Styling yang disempurnakan
                  className={`cursor-pointer border-2 rounded-lg p-3 text-center text-sm transition-all text-gray-300 hover:border-${BRAND_PURPLE} has-[:checked]:border-${BRAND_PURPLE} has-[:checked]:bg-${BRAND_PURPLE}/20`}
                >
                  <input
                    type="radio"
                    name="budget"
                    value={option.val}
                    className="hidden"
                    required
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Deskripsi */}
          <div className="space-y-2 mb-6">
            <label htmlFor="description" className="text-sm font-medium text-purple-400">Deskripsi Proyek</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              className="w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-500"
              placeholder="Ceritakan detail kebutuhan proyek Anda..."
            ></textarea>
          </div>

          {/* Upload */}
          <div className="space-y-2 mb-8">
            <label className="text-sm font-medium text-purple-400">Upload Referensi (Opsional)</label>
            <div className="relative border-2 border-dashed border-purple-600/50 rounded-lg p-6 hover:border-purple-500 transition-colors text-center cursor-pointer group">
              <input
                type="file"
                name="attachment"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Paperclip className={`mx-auto text-purple-400 group-hover:text-${BRAND_PURPLE} mb-2 transition-colors`} />
              <p className="text-sm text-gray-400">Klik atau drag file ke sini (Max 10MB)</p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-${BRAND_PURPLE} to-indigo-600 hover:from-indigo-600 hover:to-${BRAND_PURPLE} text-white font-bold py-4 rounded-lg shadow-lg transform transition-all active:scale-[0.98] flex items-center justify-center space-x-2`}
          >
            <span>Kirim Permintaan</span>
            <Send size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;