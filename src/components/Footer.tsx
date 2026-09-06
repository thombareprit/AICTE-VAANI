import React from 'react';
import { Landmark, Mail, Phone, ArrowUp, Info } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="p-2 bg-primary/20 rounded-lg text-primary">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="leading-tight">
                <span className="font-extrabold tracking-tight text-base uppercase block">
                  Sipna SCOET
                </span>
                <span className="text-[10px] font-black text-slate-400 tracking-wider">
                  DEPT. OF COMPUTER SCIENCE AND ENGINEERING
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              Autonomous engineering institute accredited with NAAC 'A+' and NBA. Promoting technological innovations in regional Indian languages under the sponsored national AICTE-VAANI scheme.
            </p>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-[11px] text-slate-400 font-semibold leading-normal">
              <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                Medium of Instruction: Hindi Language. The workshop aims to bridge technical language gaps in Quantum computational mechanics.
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links Map */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-slate-400 tracking-widest uppercase">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
              <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
              <a href="#committee" className="hover:text-white transition-colors">Committee</a>
              <a href="#venue" className="hover:text-white transition-colors">Venue</a>
              <a href="#registration" className="hover:text-white transition-colors">Registration</a>
            </div>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black text-slate-400 tracking-widest uppercase">
              Department Contacts
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-slate-500 shrink-0 mt-1" />
                <div>
                  <span className="block text-base md:text-lg font-black text-white">Dr. Seema B. Rathod</span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Coordinator</span>
                  <span className="block text-sm md:text-base font-semibold text-slate-200 tracking-wide">+91 9423622703</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-slate-500 shrink-0 mt-1" />
                <div>
                  <span className="block text-base md:text-lg font-black text-white">Dr. Harsha S. Gulhane</span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Co-Coordinator</span>
                  <span className="block text-sm md:text-base font-semibold text-slate-200 tracking-wide">+91 9561584815</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 border-t border-slate-800 pt-3">
                <Mail className="w-4.5 h-4.5 text-slate-500 shrink-0" />
                <a href="mailto:sbrathod@sipnaengg.ac.in" className="text-xs hover:text-white transition-colors font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                  sbrathod@sipnaengg.ac.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-semibold text-slate-500 text-center">
          <div>
            &copy; {new Date().getFullYear()} Department of CSE, Sipna College of Engineering & Technology, Amravati.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-default select-none">AICTE VAANI Sponsored</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-colors inline-flex items-center gap-1"
              title="Scroll to Top"
            >
              Scroll Top
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
