import React, { useState } from 'react';
import { Landmark, CalendarRange, GraduationCap, CheckSquare, Download, ArrowUpRight } from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const downloadBrochure = () => {
    setDownloading(true);
    
    // Markdown brochure content
    const brochureText = `================================================================================
AICTE-VAANI SPONSORED 3-DAY NATIONAL TECHNICAL WORKSHOP
Topic: "Quantum Technologies for Viksit Bharat"
Organized by: Department of Computer Science & Engineering
Venue: Sipna College of Engineering & Technology (SCOET), Amravati
Dates: October 29 - 31, 2026
================================================================================

--------------------------------------------------------------------------------
1. INSTITUTION OVERVIEW
--------------------------------------------------------------------------------
Sipna College of Engineering & Technology (SCOET), Amravati (Autonomous)
* NAAC 'A+' Grade Accredited
* NBA Accredited Programs
* ISO 9001:2015 Certified
* Mentee Institute of COEP Technological University under Margadarshan Scheme

--------------------------------------------------------------------------------
2. WORKSHOP OVERVIEW & MOTTO
--------------------------------------------------------------------------------
Under the AICTE-VAANI sponsored scheme, this workshop is designed to deliver
technical education in regional Indian languages (Hindi medium of instruction).
It aims to foster deep national integration by connecting the fields of:
* Quantum Computing
* AI / ML & Quantum AI
* Cryptography & QKD (Quantum Key Distribution)
* Blockchain Technologies
with the strategic vision of national progress under Viksit Bharat 2047.

--------------------------------------------------------------------------------
3. DISTINGUISHED SPEAKERS & EXPERTS
--------------------------------------------------------------------------------
* Dr. Kumar Gautam (NIT Delhi & RMoC AIM-NITI Aayog)
* Dr. Neha Gupta (Deputy Director, Symbiosis University, Indore)
* Dr. Satish Salunke (Professor, VCET, Vasai Road, Palghar)
* Prof. Vishal Chandel (Senior IT Trainer, Sunstone Education Tech, Pune)
* Dr. Harish Sahu (Defence Scientist, SAG DRDO, Delhi)

--------------------------------------------------------------------------------
4. REGISTRATION DETAILS
--------------------------------------------------------------------------------
* Fee: NO REGISTRATION FEE (Fully Sponsored by AICTE VAANI)
* Intake: Strict cap of 50 Seats (First-Come, First-Served Basis)
* Workshop ID: 2565537652
* Registration Portal: https://atalacademy.aicte-india.org/
* Registration Open: August 01, 2026
* Registration Close: October 27, 2026
* Workshop Dates: October 29 - 31, 2026

--------------------------------------------------------------------------------
5. CERTIFICATION ELIGIBILITY (ATAL STANDARDS)
--------------------------------------------------------------------------------
1. Minimum 80% Attendance across all sessions.
2. Minimum 70% Score in the comprehensive valedictory test.

--------------------------------------------------------------------------------
6. CONTACT COORDINATORS
--------------------------------------------------------------------------------
* Coordinator: Dr. Seema B. Rathod (+91 9423622703 | sbrathod@sipnaengg.ac.in)
* Co-Coordinator: Dr. Harsha S. Gulhane (+91 9561584815 | hrvyawahare@sipnaengg.ac.in)

================================================================================
Generated on: ${new Date().toLocaleDateString()}
Sipna College of Engineering & Technology, Badnera Road, Amravati, MS, India.
================================================================================`;

    const blob = new Blob([brochureText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'SCOET_Quantum_Technologies_Workshop_Brochure.md';
    document.body.appendChild(link);
    
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDownloading(false);
    }, 850);
  };

  return (
    <section id="registration" className="py-20 bg-canvas border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-bold uppercase tracking-wider">
            Join the Workshop
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Registration & Criteria
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base font-semibold">
            Participate in this fully-funded academic initiative. Review the seats, deadlines, and ATAL certificate standards below.
          </p>
        </div>

        {/* 6. Classic Executive 4-Card Grid Restored */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Fees & Intake */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center border border-amber-100">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-[11px] font-black text-slate-400 tracking-widest uppercase">
                  Fees & Intake
                </span>
                <h3 className="text-lg font-black text-[#D97706] uppercase tracking-tight">
                  NO REGISTRATION FEE
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  The workshop is fully funded under the AICTE-VAANI Sponsored Scheme.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 bg-slate-55 px-2.5 py-1 rounded border border-slate-100 block text-center">
                Max Intake: <strong className="text-slate-905">50 Participants</strong> (FCFS)
              </span>
            </div>
          </div>

          {/* Card 2: Mode & Rules */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center border border-blue-100">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-[11px] font-black text-slate-400 tracking-widest uppercase">
                  ATAL Standards
                </span>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Offline Mode
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Candidates must qualify standards mandated by the AICTE ATAL academy.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Min 80% Attendance</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Min 70% Test Score</span>
              </div>
            </div>
          </div>

          {/* Card 3: Important Dates */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                <CalendarRange className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-[11px] font-black text-slate-400 tracking-widest uppercase">
                  Important Dates
                </span>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Timeline Deadlines
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Ensure you complete registration before the portals lock.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-1.5 text-xs font-bold text-slate-700">
              <div className="flex justify-between">
                <span>Opens:</span>
                <span className="text-slate-900">Aug 01, 2026</span>
              </div>
              <div className="flex justify-between border-t border-slate-50 pt-1.5">
                <span>Closes:</span>
                <span className="text-amber-700">Oct 27, 2026</span>
              </div>
              <div className="flex justify-between border-t border-slate-50 pt-1.5">
                <span>Workshop:</span>
                <span className="text-primary">Oct 29–31, 2026</span>
              </div>
            </div>
          </div>

          {/* Card 4: Action Links */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-[11px] font-black text-slate-400 tracking-widest uppercase">
                  Sign Up Actions
                </span>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Apply on ATAL Portal
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Apply using Workshop ID <strong>2565537652</strong> on the official portal.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href="https://atalacademy.aicte-india.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-primary hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                Register on ATAL Portal
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={downloadBrochure}
                disabled={downloading}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 border border-slate-200 hover:border-slate-350 hover:bg-slate-50/50 text-slate-700 font-bold text-xs rounded-xl transition-all duration-200 disabled:opacity-50 cursor-pointer"
              >
                <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                {downloading ? 'Preparing...' : 'Download Brochure'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
