import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Globe } from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">FRANKAZASTAIN</h3>
            <p className="text-gray-500 mb-6">
              Digital Studio premium yang mengutamakan kualitas, estetika, dan kepuasan klien dalam setiap goresan desain dan baris kode.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-purple hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-purple hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-purple hover:text-white transition-all">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Layanan</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#contact" className="hover:text-brand-purple transition-colors">Website Development</a></li>
              <li><a href="#contact" className="hover:text-brand-purple transition-colors">UI/UX Design</a></li>
              <li><a href="#contact" className="hover:text-brand-purple transition-colors">Academic Assistance</a></li>
              <li><a href="#contact" className="hover:text-brand-purple transition-colors">Graphic Design</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-purple" />
                <span>+62 857 1840 6768</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-purple" />
                <span>frankazastain@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 <span className="text-green-400">Open for Projects</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} FRANKAZASTAIN Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;