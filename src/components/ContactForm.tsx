import React, { useState } from "react";

// Definisikan warna aksen (sesuaikan dengan CSS global Anda, misal #8A2BE2)
// Di Tailwind, kita gunakan warna terdekat: 'purple-500' atau 'indigo-400'
const ACCENT_COLOR = 'text-purple-400';
const ACCENT_BORDER = 'border-purple-500';

// Komponen Modal/Popup Sederhana (tetap sama)
const NotificationModal: React.FC<{
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}> = ({ type, message, onClose }) => {
  const bgColor = type === 'success' ? 'bg-purple-500' : 'bg-red-500';
  const icon = type === 'success' ? '✅' : '❌';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className={`p-6 rounded-xl shadow-2xl max-w-sm w-full ${bgColor} text-white transform transition-all duration-300 scale-100`}>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold flex items-center">
            {icon} &nbsp; Notifikasi
          </h3>
          <button
            onClick={onClose}
            className="text-white opacity-75 hover:opacity-100 transition text-2xl"
          >
            &times;
          </button>
        </div>
        <p className="mt-4">{message}</p>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-white text-gray-800 font-semibold py-1 px-4 rounded-full hover:bg-gray-100 transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};


export default function ContactForm(): React.ReactElement {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error' | null>(null);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setModalType(null);
    setModalMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    closeModal(); 

    try {
      const payload = { 
        ...formData, 
        _subject: `Pesan Baru dari FRANKAZASTAIN Studio: ${formData.service}`, 
        _template: "box", 
      };
      
      const res = await fetch("https://formsubmit.co/ajax/frankazastain@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setModalType("success");
        setModalMessage("Permintaan Anda berhasil dikirim! Kami akan menghubungi Anda segera.");
        setFormData({ name: "", email: "", service: "", budget: "", message: "" });
      } else {
        setModalType("error");
        setModalMessage(data.message || "Gagal mengirim form. Coba lagi.");
      }
    } catch (err) {
      console.error(err);
      setModalType("error");
      setModalMessage("Terjadi kesalahan koneksi saat mengirim form.");
    }

    setLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        // --- STYLING FORM DI SINI ---
        className="bg-black border border-purple-500 shadow-2xl rounded-xl p-6 w-full max-w-xl mx-auto space-y-5"
      >
        <h2 className="text-3xl font-extrabold mb-4 text-white text-center">
            Mulai <span className={ACCENT_COLOR}>Proyek</span> Anda
        </h2>

        {/* --- FIELD INPUT DI SINI --- */}
        <div className="space-y-4">
            {/* Nama */}
            <div>
              <label className={`block font-semibold mb-1 ${ACCENT_COLOR}`}>Nama Lengkap</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                // Styling Input: BG gelap, text putih, border aksen
                className={`w-full bg-gray-900 text-white border-2 ${ACCENT_BORDER} rounded-lg p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
                placeholder="Nama Anda"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className={`block font-semibold mb-1 ${ACCENT_COLOR}`}>Email Aktif</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-gray-900 text-white border-2 ${ACCENT_BORDER} rounded-lg p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
                placeholder="nama@email.com"
                required
              />
            </div>

            {/* Layanan */}
            <div>
              <label className={`block font-semibold mb-1 ${ACCENT_COLOR}`}>Jenis Layanan</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                // Styling Select: Sama seperti input, ditambah arrow putih
                className={`w-full bg-gray-900 text-white border-2 ${ACCENT_BORDER} rounded-lg p-3 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
                required
              >
                <option value="" disabled className="text-gray-500 bg-gray-800">Pilih layanan...</option>
                <option value="Website Development" className="bg-gray-800">Pembuatan Website</option>
                <option value="UI/UX Design" className="bg-gray-800">UI/UX Design</option>
                <option value="Joki UI/UX Tugas Kuliah" className="bg-gray-800">Joki UI/UX Tugas Kuliah</option>
                <option value="Graphic Design" className="bg-gray-800">Graphic Design</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className={`block font-semibold mb-1 ${ACCENT_COLOR}`}>Estimasi Budget</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`w-full bg-gray-900 text-white border-2 ${ACCENT_BORDER} rounded-lg p-3 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
                required
              >
                <option value="" disabled className="text-gray-500 bg-gray-800">Pilih estimasi budget Anda...</option>
                <option value="< 2 Juta" className="bg-gray-800">{`< 2 Juta`}</option>
                <option value="2 - 5 Juta" className="bg-gray-800">2 - 5 Juta</option>
                <option value="5 - 10 Juta" className="bg-gray-800">5 - 10 Juta</option>
                <option value="> 10 Juta" className="bg-gray-800">{`> 10 Juta (Custom)`}</option>
              </select>
            </div>

            {/* Pesan */}
            <div>
              <label className={`block font-semibold mb-1 ${ACCENT_COLOR}`}>Deskripsi Proyek</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-gray-900 text-white border-2 ${ACCENT_BORDER} rounded-lg p-3 h-24 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition`}
                placeholder="Jelaskan kebutuhan dan ekspektasi proyek Anda."
                required
              />
            </div>
        </div>

        {/* Tombol Kirim */}
        <button
          type="submit"
          disabled={loading}
          // Styling Tombol: Aksen Ungu/Putih
          className={`w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-[1.01] ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {loading ? "Mengirim..." : "Kirim Permintaan"}
        </button>
      </form>

      {/* Tampilkan Modal */}
      {modalMessage && modalType && (
        <NotificationModal 
          type={modalType} 
          message={modalMessage} 
          onClose={closeModal} 
        />
      )}
    </>
  );
}