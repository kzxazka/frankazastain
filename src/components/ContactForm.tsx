"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/frankazastain@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Berhasil dikirim!");
        form.reset();
        setBudget(""); // reset dropdown
      } else {
        alert("Gagal mengirim form.");
      }
    } catch (err) {
      alert("Terjadi error: " + err);
    }

    setLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
    >
      {/* Hidden Inputs for FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://frankazastain.vercel.app/success"
      />

      {/* Name */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">Nama</label>
        <input
          name="name"
          type="text"
          required
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-brand-gold"
          placeholder="Nama lengkap"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-brand-gold"
          placeholder="emailmu@gmail.com"
        />
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">Budget</label>
        <select
          name="budget"
          required
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-brand-gold"
        >
          <option value="">Pilih budget</option>
          <option value="500-1 juta">500k–1 juta</option>
          <option value="1-3 juta">1–3 juta</option>
          <option value="3-5 juta">3–5 juta</option>
          <option value="10jt">5-10juta+</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-gray-300 mb-1">Pesan</label>
        <textarea
          name="message"
          required
          className="w-full p-3 rounded-lg h-32 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-brand-gold"
          placeholder="Ceritakan kebutuhan proyekmu..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-brand-gold text-black font-semibold hover:bg-yellow-400 transition disabled:opacity-60"
      >
        {loading ? "Mengirim..." : "Kirim Pesan"}
        {!loading && <SendHorizonal size={18} />}
      </motion.button>
    </motion.form>
  );
}
