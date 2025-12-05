import React, { useState } from "react";

// Komponen Modal/Popup Sederhana (ditambahkan)
const NotificationModal: React.FC<{
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}> = ({ type, message, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const icon = type === 'success' ? '✅' : '❌';

  return (
    // Overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className={`p-6 rounded-lg shadow-2xl max-w-sm w-full ${bgColor} text-white transform transition-all duration-300 scale-100`}>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold flex items-center">
            {icon} &nbsp; Notifikasi
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition"
          >
            &times;
          </button>
        </div>
        <p className="mt-4">{message}</p>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-white text-gray-800 font-semibold py-1 px-4 rounded hover:bg-gray-100 transition"
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
  // Mengubah state success/error menjadi boolean, dan menyimpan pesan di state lain
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
    closeModal(); // Pastikan modal tertutup sebelum submit

    try {
      // Formsubmit bekerja paling andal dengan form-data, bukan JSON,
      // tapi karena ini di Vercel/React, kita lanjutkan dengan AJAX.
      // Solusi Vercel/CORS: Formsubmit merekomendasikan menambahkan input 'template' atau 'subject' 
      // untuk memastikan Formsubmit mengidentifikasi request dengan benar.
      
      const payload = { 
        ...formData, 
        // Penambahan field honeypot (_honey) dan subject, untuk menghindari spam/error Formsubmit.
        _subject: `Pesan Baru dari FRANKAZASTAIN Studio: ${formData.service}`, 
        _template: "box", // Menggunakan template box
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
        // Reset form hanya jika sukses
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
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">Hubungi Kami</h2>

        {/* Notifikasi Inline (opsional, bisa dihapus jika hanya pakai modal) */}
        {/*
        {modalType === 'success' && <p className="text-green-600 text-center">{modalMessage}</p>}
        {modalType === 'error' && <p className="text-red-600 text-center">{modalMessage}</p>}
        */}

        {/* ... (Form fields Anda) ... */}

        <div>
          <label className="block font-semibold mb-1">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Jenis Layanan</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Pilih layanan</option>
            <option value="Website Development">Website Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Branding Design">Branding Design</option>
            <option value="System Development">System Development</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          >
            <option value="">Pilih budget</option>
            <option value="< 1 Juta">{`< 1 Juta`}</option>
            <option value="1 - 3 Juta">1 - 3 Juta</option>
            <option value="3 - 5 Juta">3 - 5 Juta</option>
            <option value="> 5 Juta">{`> 5 Juta`}</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Pesan</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded p-2 h-24"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>

      {/* Tampilkan Modal jika modalMessage ada */}
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