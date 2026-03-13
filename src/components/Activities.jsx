import React from 'react';
import { motion } from 'framer-motion';

const activities = [
  {
    src: '/activity1.png',
    alt: 'Classroom learning',
    label: 'Academic Excellence',
    desc: 'Inspiring curious minds every day',
  },
  {
    src: '/activity2.png',
    alt: 'Sports & games',
    label: 'Sports & Fitness',
    desc: 'Healthy bodies, healthy minds',
  },
  {
    src: '/activity3.png',
    alt: 'Music & arts',
    label: 'Arts & Culture',
    desc: 'Nurturing creativity and talent',
  },
];

const Activities = () => {
  return (
    <section id="gallery" className="py-20 px-6 md:px-12" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#fbb03b' }}>
            School Life
          </p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ color: '#004b87' }}>
            Life at William Austin
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full" style={{ backgroundColor: '#fbb03b' }} />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{ background: 'linear-gradient(to top, rgba(0,75,135,0.85) 0%, transparent 60%)' }}
                >
                  <p className="text-white text-sm px-5 pb-4 font-medium">{item.desc}</p>
                </div>
              </div>
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ backgroundColor: '#004b87' }}
              >
                <span className="text-white font-bold tracking-wide text-sm">{item.label}</span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm"
                  style={{ backgroundColor: '#fbb03b', color: '#ffffff' }}
                >
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
