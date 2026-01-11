
import React from 'react';
import { INDUSTRIES } from '../constants';

const Industries: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A2540]/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="technical-font text-cyan-400 font-bold uppercase tracking-[0.4em] mb-4 block">Our Reach</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-12">Industries We <span className="text-cyan-400">Power</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => (
            <div 
              key={industry.name} 
              className="p-8 bg-slate-900/50 border border-slate-800 hover:border-cyan-500 transition-all flex flex-col items-center justify-center text-center group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                {industry.icon}
              </div>
              <span className="font-bold technical-font uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                {industry.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-slate-500 technical-font text-sm uppercase tracking-[0.2em] font-bold">
            Trusted by manufacturing leaders across Klang Valley and nationwide.
          </div>
          <div className="flex gap-12 opacity-30 grayscale hover:opacity-60 transition-all">
            <span className="text-xl font-black uppercase">SIEMENS</span>
            <span className="text-xl font-black uppercase">ABB</span>
            <span className="text-xl font-black uppercase">SAP</span>
            <span className="text-xl font-black uppercase">FANUC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
