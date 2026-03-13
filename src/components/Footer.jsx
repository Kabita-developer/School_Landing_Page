import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 px-6 md:px-12 overflow-hidden text-white" style={{ backgroundColor: '#004b87' }}>
      {/* Decorative Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-16 w-full fill-white opacity-5">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,-1.5,1200,0V0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f1f1f1 100%)' }}>
                <span className="text-primary font-black text-xl">WA</span>
              </div>
              <h3 className="text-xl font-black tracking-wider">WILLIAM AUSTIN</h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
              Providing a nurturing and challenging environment where every child can grow, learn and achieve their full potential since 1992.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white hover:text-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-8 pb-2 inline-block border-b-4 border-secondary">Useful Links</h4>
            <ul className="space-y-4">
              {['About Our School', 'Admissions', 'Curriculum', 'School News', 'Gallery', 'Job Vacancies'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white hover:translate-x-2 transition-all inline-block text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-8 pb-2 inline-block border-b-4 border-secondary">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div className="text-sm text-blue-100 italic">
                  Austin Road, Luton,<br />Bedfordshire, LU3 1UA
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-sm font-bold">01582 572100</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-sm">admin@williamaustin.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Action */}
          <div className="lg:text-right">
             <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10 lg:text-left">
                <h4 className="text-white font-black text-lg mb-2">School Intranet</h4>
                <p className="text-blue-200 text-xs mb-6">Secure access for staff and governors only.</p>
                <button className="w-full py-4 rounded-xl bg-secondary text-white font-black text-sm tracking-widest hover:brightness-110 transition-all shadow-lg">
                  PORTAL LOGIN
                </button>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-blue-300 font-medium tracking-wide">
            ©2024 William Austin Junior School. All rights reserved. 
            <span className="mx-2 opacity-50">|</span> 
            Designed with excellence by Brothers Creative
          </p>
          <div className="flex items-center gap-8">
            <div className="flex gap-1">
              {['🇬🇧', '🇪🇸', '🇫🇷', '🇩🇪'].map(flag => (
                <span key={flag} className="cursor-pointer grayscale hover:grayscale-0 transition-all text-sm">{flag}</span>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-blue-200 hover:text-white transition-colors"
            >
              BACK TO TOP <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
