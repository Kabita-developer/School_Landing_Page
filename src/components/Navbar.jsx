import React, { useState, useEffect } from 'react';
import { Phone, Search, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'PARENTS', href: '#parents' },
    { name: 'SCHOOL CALENDAR', href: '#calendar' },
    { name: 'FAMILY CENTRE', href: '#family' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <header
        className="w-full py-3 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center"
        style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb' }}
      >
        <div className="flex items-center mb-3 md:mb-0">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full mr-4" style={{ background: 'linear-gradient(135deg, #004b87 60%, #fbb03b 100%)' }}>
            <span className="text-white font-black text-2xl tracking-tight">WA</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wider leading-tight" style={{ color: '#004b87' }}>
              WILLIAM AUSTIN
            </h1>
            <p className="text-xs font-bold tracking-[0.2em]" style={{ color: '#fbb03b' }}>
              CARE • INSPIRE • ACHIEVE
            </p>
          </div>
        </div>
        <a
          href="tel:01582572100"
          className="flex items-center gap-3 px-6 py-3 rounded-full font-bold text-lg transition-transform hover:scale-105"
          style={{ backgroundColor: '#fbb03b', color: '#ffffff' }}
        >
          <Phone className="w-5 h-5" />
          <span>01582 572 100</span>
        </a>
      </header>

      {/* Sticky Navbar */}
      <nav
        className={`w-full sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
        style={{ backgroundColor: '#004b87' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="hidden lg:flex justify-between items-center h-12">
            <div className="flex items-center space-x-1 text-xs font-bold tracking-wider">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className="px-3 py-3 transition-all duration-200 relative group"
                  style={{
                    color: activeLink === link.name ? '#fbb03b' : '#ffffff',
                  }}
                >
                  {link.name}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-200 scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: '#fbb03b', transformOrigin: 'center' }}
                  />
                </a>
              ))}
            </div>
            <button className="text-white hover:text-yellow-400 transition-colors p-2">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex justify-between items-center h-12">
            <span className="font-bold text-xs tracking-widest text-white">MENU</span>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
          style={{ backgroundColor: '#003d72' }}
        >
          <div className="px-6 py-2 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 text-sm font-bold tracking-wider border-b transition-colors hover:pl-4 duration-200"
                style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.1)' }}
                onClick={() => { setIsOpen(false); setActiveLink(link.name); }}
              >
                {link.name}
              </a>
            ))}
            <div className="py-3 flex items-center gap-2 text-sm font-bold tracking-wider" style={{ color: '#fbb03b' }}>
              <Search className="w-4 h-4" /> SEARCH
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
