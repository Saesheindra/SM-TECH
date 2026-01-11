
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1117]/95 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-cyan-500 flex items-center justify-center font-black text-slate-900 text-xl transform group-hover:rotate-12 transition-transform">
            SM
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl leading-none tracking-tighter">TECH</span>
            <span className="text-[10px] technical-font text-cyan-400 tracking-widest uppercase font-bold">Engineering Works</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-sm font-medium hover:text-cyan-400 transition-colors uppercase tracking-wider technical-font"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-sm uppercase transition-all transform hover:scale-105"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D1117] border-b border-slate-800 p-6 flex flex-col gap-4 animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-lg font-bold hover:text-cyan-400 py-2 border-b border-slate-800/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full text-center px-6 py-4 bg-cyan-500 text-slate-900 font-bold uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
