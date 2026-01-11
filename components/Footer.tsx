
import React from 'react';
import { NAV_ITEMS, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-cyan-500 flex items-center justify-center font-black text-slate-900 text-base">
                SM
              </div>
              <span className="font-black text-lg tracking-tighter">TECH ENGINEERING</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Leading engineering solutions provider in Rawang, Selangor. Specializing in industrial automation, fabrication, and SAP implementations.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'Facebook', 'Twitter'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-slate-900 hover:bg-cyan-500 hover:text-slate-900 flex items-center justify-center transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="technical-font font-bold uppercase text-white tracking-[0.2em] mb-8 text-sm">Services</h4>
            <ul className="space-y-4">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <a href={`#${service.id}`} className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="technical-font font-bold uppercase text-white tracking-[0.2em] mb-8 text-sm">Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">{item.label}</a>
                </li>
              ))}
              <li><a href="#" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="technical-font font-bold uppercase text-white tracking-[0.2em] mb-8 text-sm">HQ Office</h4>
            <div className="text-slate-500 text-sm space-y-4">
              <p>No. 23, Jalan Bersatu 4,<br />Taman Bersatu, 48000 Rawang,<br />Selangor, Malaysia</p>
              <p className="font-bold text-white">T: 012-295 8924</p>
              <p>E: info@smtech.com.my</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs technical-font uppercase tracking-widest font-bold">
            &copy; 2025 SM TECH Engineering Works. All Rights Reserved.
          </p>
          <p className="text-slate-600 text-xs technical-font uppercase tracking-widest font-bold">
            Engineering Tomorrow, Automating Today.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
