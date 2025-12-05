import React from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip } from 'lucide-react';

// Konstanta Styling
const BRAND_PURPLE = 'purple-600'; 
const ACCENT_COLOR = 'text-purple-400';
const ACCENT_RING = 'focus:ring-purple-500';

const ContactForm: React.FC = () => {
    // Styling untuk radio button saat terpilih (dipakai di bawah)
    const radioCheckedStyle = `has-[:checked]:border-${BRAND_PURPLE} has-[:checked]:bg-purple-600/20 text-white`;

    // Pastikan URL di bawah ini diisi dengan domain Vercel Anda + /thanks.html
    const REDIRECT_URL = "https://frankazastain.vercel.app/thanks.html"; 

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden text-white">
            {/* Background Gradient & Blur Effect */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-${BRAND_PURPLE}/10 rounded-full blur-[100px] pointer-events-none`} />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                        Mulai Proyek <span className={`text-${BRAND_PURPLE}`}>Anda</span>
                    </h2>
                    <p className="text-gray-400">
                        Kami siap membantu mewujudkan visi Anda menjadi produk digital premium.
                    </p>
                </motion.div>

                {/* FORM: Menggunakan Metode Redirect Formsubmit (Paling Stabil) */}
                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    
                    // --- KUNCI STABILITAS FORM ---
                    action="https://formsubmit.co/frankazastain@gmail.com"
                    method="POST"
                    // enctype dipertahankan HANYA JIKA Anda butuh file upload
                    encType="multipart/form-data" 
                    
                    className="bg-gray-900 border border-purple-600/20 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
                >
                    
                    {/* HIDDEN FIELDS OPTIMASI & REDIRECT */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={REDIRECT_URL} />
                    <input type="hidden" name="_subject" value="[HIGH PRIORITY] Permintaan Proyek Baru" />
                    {/* Tambahkan template untuk optimasi server 524 */}
                    <input type="hidden" name="_template" value="box" /> 

                    {/* Nama + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className={`text-sm font-medium ${ACCENT_COLOR}`}>Nama Lengkap</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className={`w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-${BRAND_PURPLE} focus:ring-1 ${ACCENT_RING} transition-all placeholder-gray-500`}
                                placeholder="ismail"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="email" className={`text-sm font-medium ${ACCENT_COLOR}`}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className={`w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-${BRAND_PURPLE} focus:ring-1 ${ACCENT_RING} transition-all placeholder-gray-500`}
                                placeholder="ismail@gmail.com"
                            />
                        </div>
                    </div>

                    {/* WhatsApp + Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label htmlFor="whatsapp" className={`text-sm font-medium ${ACCENT_COLOR}`}>Nomor WhatsApp</label>
                            <input
                                type="tel"
                                id="whatsapp"
                                name="whatsapp"
                                required
                                className={`w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-${BRAND_PURPLE} focus:ring-1 ${ACCENT_RING} transition-all placeholder-gray-500`}
                                placeholder="+62 812..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className={`text-sm font-medium ${ACCENT_COLOR}`}>Jenis Layanan</label>
                            <select
                                id="service"
                                name="service"
                                required
                                className={`w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-${BRAND_PURPLE} focus:ring-1 ${ACCENT_RING} transition-all appearance-none`}
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

                    {/* Budget (Menggunakan Radio Button) */}
                    <div className="mb-6">
                        <label className={`text-sm font-medium ${ACCENT_COLOR} mb-2 block`}>Perkiraan Budget</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { val: '< 1 Juta', label: '< 1 Juta' },
                                { val: '1 - 3 Juta', label: '1 - 3 Juta' },
                                { val: '3 - 5 Juta', label: '3 - 5 Juta' },
                                { val: '> 5 Juta', label: '> 5 Juta' },
                            ].map((option) => (
                                <label
                                    key={option.val}
                                    className={`cursor-pointer border-2 rounded-lg p-3 text-center text-sm transition-all text-gray-400 hover:border-purple-500 ${radioCheckedStyle}`}
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
                        <label htmlFor="description" className={`text-sm font-medium ${ACCENT_COLOR}`}>Deskripsi Proyek</label>
                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            required
                            className={`w-full bg-black/50 border border-purple-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-${BRAND_PURPLE} focus:ring-1 ${ACCENT_RING} transition-all placeholder-gray-500`}
                            placeholder="Ceritakan detail kebutuhan proyek Anda..."
                        ></textarea>
                    </div>

                    {/* Upload */}
                    <div className="space-y-2 mb-8">
                        <label className={`text-sm font-medium ${ACCENT_COLOR}`}>Upload Referensi (Opsional)</label>
                        <div className={`relative border-2 border-dashed border-purple-600/50 rounded-lg p-6 hover:border-purple-500 transition-colors text-center cursor-pointer group`}>
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