import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: 'Healthy School', color: '#10b981', label: 'HEALTHY CHOICE', emoji: '🍎' },
    { name: 'Artsmark Gold', color: '#f59e0b', label: 'CREATIVE GOLD', emoji: '🎨' },
    { name: 'Luton Council', color: '#3b82f6', label: 'LOCAL COUNCIL', emoji: '🏛️' },
    { name: 'Eco-Schools', color: '#22c55e', label: 'ECO FRIENDLY', emoji: '🌿' },
    { name: 'Ofsted', color: '#004b87', label: 'TOP RATED', emoji: '⭐' },
    { name: 'Music Hub', color: '#ef4444', label: 'ELITE MUSIC', emoji: '🎻' },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Background abstract shapes for "modern" feel */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.25em] text-primary bg-primary/5 uppercase mb-4"
          >
            Trust & Accreditations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-gray-900"
          >
            Recognized for <span className="text-primary italic">Excellence</span>
          </motion.h2>
        </div>

        {/* Modern Grid with Interactive Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.2 }
              }}
              className="group relative flex flex-col items-center p-6 rounded-[2rem] border border-gray-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              {/* Colored Glow on Hover */}
              <div 
                className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: partner.color }}
              />

              {/* Icon Container */}
              <div className="relative mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-500 group-hover:rotate-[10deg]"
                  style={{ 
                    backgroundColor: `${partner.color}10`,
                    border: `1px solid ${partner.color}20` 
                  }}
                >
                  {partner.emoji}
                </div>
                
                {/* Floating dot */}
                <div 
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: partner.color }}
                />
              </div>

              <div className="text-center">
                <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary transition-colors">
                  {partner.name}
                </h4>
                <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                  {partner.label}
                </p>
              </div>

              {/* Bottom line decorator */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: partner.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Dynamic decorative line */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gray-100" />
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <div className="h-px w-12 bg-gray-100" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
