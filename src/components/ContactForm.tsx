import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kirimkan pesan Anda dan kami akan menghubungi Anda kembali secepat mungkin.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          action="https://formsubmit.co/frankazastain@gmail.com"
          method="POST"
          className="space-y-6 max-w-3xl mx-auto"
        >
          {/* Hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Contact Message — FRANKAZASTAIN" />
          <input type="hidden" name="_next" value="https://your-vercel-domain.com/success" />

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-white/80">Nama</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-white/80">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-white/80">Pesan</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Kirim Pesan
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
