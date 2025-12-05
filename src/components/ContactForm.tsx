import React from "react";
import { motion } from "framer-motion";
import { Send, Paperclip } from "lucide-react";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Mulai Proyek Anda</h2>
          <p className="text-gray-400">Isi formulir di bawah ini dan biarkan kami mewujudkan visi Anda.</p>
        </motion.div>

        {/* FORM UNTUK FORMSUBMIT */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          action="https://formsubmit.co/frankazastain@gmail.com"
          method="POST"
          encType="multipart/form-data"
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
        >
          {/* Anti CAPTCHA */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect Berhasil */}
          <input
            type="hidden"
            name="_next"
            value="https://frankazastain.vercel.app/thanks.html"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="whatsapp" className="text-sm font-medium text-gray-300">Nomor WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                required
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
                placeholder="+62 812..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Jenis Layanan</label>
              <select
                name="service"
                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
              >
                <option value="website">Pembuatan Website</option>
                <option value="uiux">UI/UX Design</option>
                <option value="joki">Joki UI/UX / Tugas</option>
                <option value="graphic">Graphic Design</option>
                <option value="other">Lainnya</option>
              </select>
            </div>
          </div>

          {/* BUDGET */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Perkiraan Budget</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

              {[
                { val: "small", label: "< 1 Juta" },
                { val: "medium", label: "1 - 5 Juta" },
                { val: "large", label: "5 - 10 Juta" },
                { val: "enterprise", label: "> 10 Juta" },
              ].map((o) => (
                <label
                  key={o.val}
                  className="cursor-pointer border border-white/10 hover:border-white/30 rounded-lg p-3 text-center text-sm text-gray-400 transition-all"
                >
                  <input type="radio" name="budget" value={o.val} className="hidden" />
                  {o.label}
                </label>
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-2 mb-6">
            <label className="text-sm font-medium text-gray-300">Deskripsi Proyek</label>
            <textarea
              name="description"
              rows={4}
              required
              className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all"
              placeholder="Ceritakan detail kebutuhan proyek Anda..."
            ></textarea>
          </div>

          {/* FILE UPLOAD */}
          <div className="space-y-2 mb-8">
            <label className="text-sm font-medium text-gray-300">Upload Referensi (Opsional)</label>
            <div className="relative border-2 border-dashed border-white/10 rounded-lg p-6 hover:border-brand-purple/50 transition-colors text-center cursor-pointer group">
              <input type="file" name="attachment" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <Paperclip className="mx-auto text-gray-400 group-hover:text-brand-purple mb-2 transition-colors" />
              <p className="text-sm text-gray-500">Klik atau drag file ke sini</p>
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-brand-purple to-indigo-600 hover:from-indigo-600 hover:to-brand-purple text-white font-bold py-4 rounded-lg shadow-lg transform transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
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
