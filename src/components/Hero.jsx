import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: 'min(600px, 85vh)' }}>
      <img
        src="/hero.png"
        alt="Students running joyfully on the school playground"
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,75,135,0.25) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.65) 100%)'
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.05em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-white text-sm md:text-base font-semibold uppercase mb-4"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            William Austin Junior School
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-white font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(2rem, 7vw, 5.5rem)',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)',
              letterSpacing: '0.05em'
            }}
          >
            CARE{' '}
            <span style={{ color: '#fbb03b' }}>•</span>{' '}
            INSPIRE{' '}
            <span style={{ color: '#fbb03b' }}>•</span>{' '}
            ACHIEVE
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#about"
              className="px-8 py-3 rounded-full font-bold text-sm tracking-wider transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#fbb03b', color: '#ffffff' }}
            >
              DISCOVER MORE
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-bold text-sm tracking-wider border-2 border-white text-white transition-all hover:bg-white hover:scale-105"
              style={{ color: '#ffffff' }}
            >
              CONTACT US
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs mb-1 opacity-70 tracking-widest">SCROLL</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default Hero;
