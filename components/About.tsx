
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-slate-800 rounded-full opacity-50 animate-pulse" />
            <div className="relative z-10 p-4 border-2 border-cyan-500/30">
              <img 
                src="https://picsum.photos/id/1073/800/800?grayscale" 
                alt="Engineering Workshop" 
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 -right-8 bg-cyan-500 p-8 shadow-2xl">
                <span className="block text-4xl font-black text-slate-900 leading-none">15+</span>
                <span className="block text-xs uppercase font-bold text-slate-900 technical-font tracking-widest mt-1">Years of Expertise</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="technical-font text-cyan-400 font-bold uppercase tracking-[0.4em] mb-4 block">The SM TECH Difference</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase italic leading-tight">
              Built on Expertise. <br />
              <span className="text-cyan-400">Driven by Innovation.</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                In the heart of Rawang's industrial corridor, SM TECH Engineering Works stands as a bridge between traditional engineering excellence and digital transformation.
              </p>
              <p>
                What makes us different? We don't just build structures or automate processes — <span className="text-white font-bold">we engineer complete ecosystems.</span> From the steel skeleton of your factory floor to the SAP system that manages your operations, we deliver end-to-end solutions that work seamlessly together.
              </p>
              <p>
                Our multidisciplinary team combines decades of hands-on experience with cutting-edge software expertise, making us uniquely positioned to tackle the complex challenges of modern manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="block text-cyan-400 text-3xl font-black mb-1">500+</span>
                <span className="text-xs uppercase font-bold technical-font tracking-widest text-slate-500">Projects Completed</span>
              </div>
              <div>
                <span className="block text-cyan-400 text-3xl font-black mb-1">100%</span>
                <span className="text-xs uppercase font-bold technical-font tracking-widest text-slate-500">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
