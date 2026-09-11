import React, { useState } from 'react';
import { Landmark, CalendarRange, GraduationCap, CheckSquare, Download, ArrowUpRight } from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  // Directly downloads the official brochure PDF from the public folder
  const downloadBrochure = () => {
    setDownloading(true);

    const pdfUrl = './AICTE-Workshop-Brochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'AICTE_VAANI_Quantum_Technologies_Workshop_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 600);
  };

  return (
    <section id="registration" className="scroll-mt-24 py-12 md:py-16 px-4 bg-canvas border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-bold uppercase tracking-wider">
            Join the Workshop
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Registration & Criteria
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base font-semibold">
            Participate in this fully-funded academic initiative. Review the deadlines and ATAL certificate standards below.
          </p>
        </div>

        {/* Executive 4-Card Grid (Intake Caption Removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          {/* Card 1: Fees */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center border border-amber-100">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-[11px] font-black text-slate-400 tracking-widest uppercase">
                  Registration Fees
                </span>
                <h3 className="text-lg font-black text-[#D97706] font-semibold uppercase tracking-tight">
                  NO REGISTRATION FEE
                </h3>
                {/* <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  The workshop is fully funded under the AICTE-VAANI Sponsored Scheme.
                </p> */}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-[11px] text-slate-500 font-normal leading-relaxed">
                Note: No TA/DA or accommodation will be provided to the participants.
              </p>
            </div>
          </div>

          {/* Card 2: Mode & Criteria */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center border border-blue-100">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-[11px] font-black text-slate-400 tracking-widest uppercase">
                  ATAL Standards
                </span>
                <h3 className="text-lg font-black font-semibold text-slate-900 tracking-tight">
                  Offline Mode
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Candidates must qualify standards mandated by the AICTE ATAL academy.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-xs font-normal text-slate-600">
                <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Min 80% Attendance</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-normal text-slate-600">
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
                <span className="block text-[11px]  font-black text-slate-400 tracking-widest uppercase">
                  Important Dates
                </span>
                <h3 className="text-lg font-black font-semibold text-slate-900 tracking-tight">
                  Timeline Deadlines
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Ensure you complete registration before the portals lock.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-1.5 text-xs font-normal text-slate-600">
              <div className="flex justify-between">
                <span>Opens:</span>
                <span className="text-slate-900 font-medium">Aug 01, 2026</span>
              </div>
              <div className="flex justify-between border-t border-slate-50 pt-1.5">
                <span>Closes:</span>
                <span className="text-amber-700 font-medium">Oct 20, 2026</span>
              </div>
              <div className="flex justify-between border-t border-slate-50 pt-1.5">
                <span>Workshop:</span>
                <span className="text-primary font-medium">Oct 29–31, 2026</span>
              </div>
            </div>
          </div>

          {/* Card 4: Action Links & Direct PDF Download */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="block text-[11px] font-black text-slate-400 tracking-widest uppercase">
                  Sign Up Actions
                </span>
                <h3 className="text-lg font-black font-semibold text-slate-900 tracking-tight">
                  Apply on ATAL Portal
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Apply using Workshop ID 2565537652 on the official portal.
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
                <Download className={`w-4 h-4 ${downloading ? 'animate-bounce text-primary' : ''}`} />
                {downloading ? 'Downloading PDF...' : 'Download Brochure'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};