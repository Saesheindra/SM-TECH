
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import SAPHighlight from './components/SAPHighlight';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1117]">
      <Navbar scrolled={scrollY > 50} />
      
      <main>
        <Hero />
        
        <div className="relative z-10 bg-[#0D1117] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="py-12 border-y border-slate-800 bg-[#0A2540]/30 technical-font tracking-widest text-sm text-center uppercase">
            <div className="container mx-auto px-4 flex flex-wrap justify-around gap-8">
              <span className="flex items-center gap-2"><span className="text-cyan-400 font-bold">5+</span> Divisions</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400 font-bold">📍</span> Rawang HQ</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400 font-bold">⚡</span> 24/7 Support</span>
              <span className="flex items-center gap-2"><span className="text-cyan-400 font-bold">🇲🇾</span> Nationwide</span>
            </div>
          </div>

          <About />
          <Services />
          <SAPHighlight />
          <Industries />
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <AIConsultant />
    </div>
  );
};

export default App;
