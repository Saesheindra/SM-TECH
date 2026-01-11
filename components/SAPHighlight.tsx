
import React from 'react';

const SAPHighlight: React.FC = () => {
  return (
    <section id="sap" className="py-24 relative overflow-hidden">
      {/* Background with circuit pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00D4FF 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      <div className="container mx-auto px-6">
        <div className="bg-[#121212] border-4 border-slate-800 p-8 md:p-16 relative overflow-hidden group">
          {/* Neon accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1 bg-cyan-500 text-slate-900 font-black technical-font uppercase text-xs mb-6">
                Digital Core
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic uppercase leading-tight">
                SAP & SOFTWARE <br />
                <span className="text-cyan-400 underline decoration-cyan-400 decoration-2 underline-offset-8">SOLUTIONS</span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed italic font-light">
                "Where Engineering Meets Enterprise Software"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'SAP S/4HANA Implementation',
                  'SAP Business One Integration',
                  'Manufacturing MES Setup',
                  'Supply Chain Management',
                  'Business Intelligence & AI',
                  'ERP Customization & Support'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-slate-900/50 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    <div className="w-2 h-2 bg-cyan-400 rotate-45" />
                    <span className="text-sm font-bold uppercase technical-font text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-cyan-500/10 border-l-4 border-cyan-500 p-6 mb-10">
                <p className="text-slate-300 italic">
                  "Our unique advantage: We understand BOTH your factory floor AND your digital systems. We bridge the gap between machine data and boardroom decisions."
                </p>
              </div>

              <button className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black uppercase tracking-tighter text-lg shadow-xl shadow-cyan-500/20">
                Schedule SAP Consultation
              </button>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 shadow-2xl relative overflow-hidden">
                 {/* Mock UI Header */}
                 <div className="flex gap-2 mb-4 border-b border-slate-800 pb-3">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 {/* Mock Chart Content */}
                 <div className="space-y-4">
                   <div className="flex justify-between items-end gap-2 h-40 px-4">
                     <div className="w-full bg-cyan-500 h-[60%] animate-pulse" />
                     <div className="w-full bg-slate-800 h-[40%]" />
                     <div className="w-full bg-cyan-500 h-[90%] animate-pulse" />
                     <div className="w-full bg-slate-800 h-[30%]" />
                     <div className="w-full bg-cyan-500 h-[70%]" />
                   </div>
                   <div className="grid grid-cols-3 gap-4">
                     <div className="h-20 bg-slate-800/50 rounded p-2 border border-slate-700">
                       <div className="w-1/2 h-2 bg-slate-700 mb-2" />
                       <div className="w-full h-4 bg-cyan-500/30" />
                     </div>
                     <div className="h-20 bg-slate-800/50 rounded p-2 border border-slate-700">
                       <div className="w-1/2 h-2 bg-slate-700 mb-2" />
                       <div className="w-full h-4 bg-cyan-500/30" />
                     </div>
                     <div className="h-20 bg-slate-800/50 rounded p-2 border border-slate-700">
                       <div className="w-1/2 h-2 bg-slate-700 mb-2" />
                       <div className="w-full h-4 bg-cyan-500/30" />
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Floating Elements */}
               <div className="absolute -top-6 -right-6 w-32 h-32 bg-highlight flex items-center justify-center font-black text-slate-900 rounded-full shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform">
                 SAP <br /> EXPERT
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SAPHighlight;
