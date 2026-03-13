import React from 'react';
import { Phone, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto w-full">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="flex items-center">
          <div className="text-primary font-bold text-3xl mr-2 flex items-center">
            <span className="text-4xl">W</span>
            <span className="text-4xl ml-[-10px] transform translate-y-2">A</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-wider text-primary leading-tight">WILLIAM AUSTIN</h1>
            <p className="text-[10px] tracking-[0.2em] font-medium text-secondary">CARE • INSPIRE • ACHIEVE</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-secondary font-bold text-xl md:text-2xl">
          <Phone className="w-6 h-6 mr-2 fill-secondary text-white" />
          <span>01582 572 100</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
