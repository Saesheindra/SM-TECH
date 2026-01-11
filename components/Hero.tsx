
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/80 to-transparent z-10" />
      
      {/* Video Placeholder Background (using high-quality image) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/id/445/1920/1080?grayscale)' }}
      >
        <div className="absolute inset-0 bg-[#0A2540]/40 mix-blend-overlay" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 blueprint-grid opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-cyan-400" />
            <span className="technical-font text-cyan-400 tracking-[0.3em] font-bold uppercase text-sm">
              Precision & Power
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">
            Engineering <br />
            <span className="text-cyan-400">Tomorrow.</span> <br />
            Automating <span className="underline decoration-highlight decoration-4 underline-offset-8">Today.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
            Complete engineering solutions from industrial automation to SAP implementation — all under one roof in Rawang, Selangor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black uppercase text-lg transition-all transform hover:scale-105 shadow-xl shadow-cyan-500/20 text-center"
            >
              Get a Free Consultation
            </a>
            <a 
              href="#services" 
              className="px-10 py-5 border-2 border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10 text-white font-black uppercase text-lg transition-all text-center"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-20 flex gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="technical-font text-xs flex flex-col">
               <span className="font-bold text-cyan-400">01</span>
               <span>PLC & SCADA</span>
             </div>
             <div className="w-px h-8 bg-slate-700" />
             <div className="technical-font text-xs flex flex-col">
               <span className="font-bold text-cyan-400">02</span>
               <span>SAP S/4HANA</span>
             </div>
             <div className="w-px h-8 bg-slate-700" />
             <div className="technical-font text-xs flex flex-col">
               <span className="font-bold text-cyan-400">03</span>
               <span>STEEL FABRICATION</span>
             </div>
          </div>
        </div>
      </div>

      {/* Floating Gear Decoration */}
      <div className="absolute right-[-10%] bottom-[-10%] opacity-10 animate-spin-slow pointer-events-none hidden lg:block">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 30c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 30c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zM50 0l-5 10c-3 0-6 1-9 2L30 5l-10 6 6 10c-2 3-3 6-4 9l-10 4v12l10 5c1 3 2 6 4 9l-6 10 10 6 7-8c3 2 6 3 9 4l4 10h12l5-10c3-1 6-2 9-4l7 8 10-6-6-10c2-3 3-6 4-9l10-5V44l-10-4c-1-3-2-6-4-9l6-10-10-6-7 8c-3-2-6-3-9-4l-5-10H50z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
