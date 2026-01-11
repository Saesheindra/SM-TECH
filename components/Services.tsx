
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="technical-font text-cyan-400 font-bold uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">One Partner. <span className="text-cyan-400">Complete Solutions.</span></h2>
          <div className="w-24 h-[4px] bg-highlight mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`group relative p-8 bg-[#0A2540]/40 border border-slate-800 hover:border-cyan-500 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full ${
                service.id === 'software' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black uppercase mb-4 italic leading-none">{service.title}</h3>
              <p className="text-slate-400 mb-8 flex-grow">{service.description}</p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase text-xs tracking-widest technical-font group-hover:gap-4 transition-all"
              >
                Learn More <span>&rarr;</span>
              </a>

              {/* Decorative Number */}
              <div className="absolute top-4 right-8 text-6xl font-black text-white/5 technical-font pointer-events-none group-hover:text-cyan-400/10 transition-colors">
                {service.id.slice(0, 2).toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
