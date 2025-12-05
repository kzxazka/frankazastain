import React from 'react';
import { motion } from 'framer-motion';
import type { PortfolioItem } from '../types';


const projects: PortfolioItem[] = [
  { id: '1', title: 'E-Commerce Fashion', category: 'Website Development', imageUrl: 'https://picsum.photos/id/1/800/600' },
  { id: '2', title: 'Fintech Dashboard', category: 'UI/UX Design', imageUrl: 'https://picsum.photos/id/20/800/600' },
  { id: '3', title: 'Coffee Shop Brand', category: 'Graphic Design', imageUrl: 'https://picsum.photos/id/42/800/600' },
  { id: '4', title: 'Travel App Concept', category: 'Mobile App Design', imageUrl: 'https://picsum.photos/id/48/800/600' },
  { id: '5', title: 'Corporate Landing', category: 'Website Development', imageUrl: 'https://picsum.photos/id/60/800/600' },
  { id: '6', title: 'Medical System', category: 'UI/UX Case Study', imageUrl: 'https://picsum.photos/id/180/800/600' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Karya Terpilih</h2>
            <p className="text-gray-400">Beberapa proyek terbaik yang telah kami selesaikan.</p>
          </div>
          <a href="#" className="hidden md:block text-brand-purple hover:text-white transition-colors mt-4 md:mt-0 font-medium">
            Lihat Semua Proyek &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-800">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-brand-purple text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-brand-purple hover:text-white transition-colors font-medium">
            Lihat Semua Proyek &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;