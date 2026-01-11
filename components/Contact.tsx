
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact Info & Map */}
          <div className="lg:w-2/5">
            <span className="technical-font text-cyan-400 font-bold uppercase tracking-[0.4em] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8">Start Your <span className="text-cyan-400">Project</span></h2>
            
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              Ready to transform your operations? Get in touch with our expert team for a free consultation or technical site visit.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase technical-font text-slate-500 tracking-widest mb-1">Our Location</h4>
                  <p className="font-bold text-white">No. 23, Jalan Bersatu 4, Taman Bersatu, 48000 Rawang, Selangor</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase technical-font text-slate-500 tracking-widest mb-1">Direct Line</h4>
                  <p className="font-bold text-white text-xl">012-295 8924</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase technical-font text-slate-500 tracking-widest mb-1">Email</h4>
                  <p className="font-bold text-white">info@smtech.com.my</p>
                </div>
              </div>
            </div>

            {/* Simple Map Embed Placeholder */}
            <div className="w-full h-64 bg-slate-800 grayscale border border-slate-700 relative group overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center text-slate-600 technical-font uppercase font-bold text-xs">
                 Google Maps Integration
               </div>
               <img src="https://picsum.photos/id/10/800/400?grayscale" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all" alt="Map Location" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-highlight rounded-full animate-ping" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-highlight rounded-full" />
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="lg:w-3/5">
            <div className="bg-[#0A2540]/50 p-8 md:p-12 border border-slate-800 shadow-2xl relative">
              {/* Form Corner Decor */}
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-cyan-500" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-cyan-500" />
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase technical-font text-slate-500 tracking-widest mb-2">Full Name*</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 p-4 focus:border-cyan-500 outline-none transition-all text-white" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase technical-font text-slate-500 tracking-widest mb-2">Company</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 p-4 focus:border-cyan-500 outline-none transition-all text-white" placeholder="Company Name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase technical-font text-slate-500 tracking-widest mb-2">Email Address*</label>
                    <input type="email" className="w-full bg-slate-900 border border-slate-700 p-4 focus:border-cyan-500 outline-none transition-all text-white" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase technical-font text-slate-500 tracking-widest mb-2">Phone Number*</label>
                    <input type="tel" className="w-full bg-slate-900 border border-slate-700 p-4 focus:border-cyan-500 outline-none transition-all text-white" placeholder="012-345 6789" required />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase technical-font text-slate-500 tracking-widest mb-2">Required Service</label>
                  <select className="w-full bg-slate-900 border border-slate-700 p-4 focus:border-cyan-500 outline-none transition-all text-white">
                    <option>Select a service...</option>
                    <option>Industrial Automation</option>
                    <option>Steel Fabrication</option>
                    <option>Mechanical Works</option>
                    <option>Civil Infrastructure</option>
                    <option>SAP / Software Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase technical-font text-slate-500 tracking-widest mb-2">Project Details</label>
                  <textarea className="w-full bg-slate-900 border border-slate-700 p-4 focus:border-cyan-500 outline-none transition-all text-white h-40" placeholder="Tell us about your project requirements..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-black uppercase text-xl shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-3">
                  Submit Inquiry
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
