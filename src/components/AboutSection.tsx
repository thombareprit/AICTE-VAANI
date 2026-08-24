import React from 'react';
import { CheckCircle2, FileText, Globe, GraduationCap, ExternalLink, BookOpen, Award } from 'lucide-react';
import sipnaGate from '../assets/sipna-gate.png';

export const AboutSection: React.FC = () => {
  const workshopObjectives = [
    'Provide fundamental and advanced knowledge of Quantum Technologies.',
    'Promote interdisciplinary research and innovation.',
    'Enhance faculty expertise in emerging technologies.',
    'Strengthen industry-academia collaboration.',
    'Explore applications of Quantum Computing, AI, and Blockchain.',
    'Support research aligned with the vision of Viksit Bharat 2047.',
    'Inspire innovation and future-ready technology skills.',
    'Develop a roadmap for integrating Quantum Technologies into education and industry.',
  ];

  return (
    <section 
      id="about" 
      className="scroll-mt-24 relative py-20 px-4 bg-[#E5DFD0] text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/10 border border-slate-900/15 text-slate-900 text-xs font-black uppercase tracking-wider backdrop-blur-md">
            About the Program
          </span>
        </div>

        {/* 2-Column Bento Grid Split 7-5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tile 1: Luminous Warm Frosted Glass Card */}
          <div className="lg:col-span-7 bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_rgba(15,23,42,0.06)] flex flex-col justify-between space-y-6 text-slate-900">
            <div className="space-y-6">
              
              {/* Scheme Detail */}
              <div className="space-y-3">
                <h3 className="text-base md:text-lg font-black text-[#0F172A] flex items-center gap-2 border-b border-slate-900/10 pb-3">
                  <GraduationCap className="w-5.5 h-5.5 text-blue-700" />
                  AICTE-VAANI Scheme & Workshop Details
                </h3>
                
                {/* Metallic Amber Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-900 border border-amber-600/30 shadow-xs backdrop-blur-md">
                    Language Inclusivity
                  </span>
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-900 border border-amber-600/30 shadow-xs backdrop-blur-md">
                    Regional Curriculum
                  </span>
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-900 border border-amber-600/30 shadow-xs backdrop-blur-md">
                    National Integration
                  </span>
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-900 border border-amber-600/30 shadow-xs backdrop-blur-md">
                    Frontier Technology
                  </span>
                </div>

                <p className="text-sm text-slate-700 font-medium leading-relaxed pt-2">
                  <strong>AICTE-VAANI</strong> (Vibrant Advocacy for Advancement and Nurturing of Indian Languages) is a financial scheme to promote technical education across 22 regional Indian languages. Under this landmark initiative, SCOET organizes this national technical workshop delivered in **Hindi medium** to break language barriers in frontier technologies for <strong>Viksit Bharat 2047</strong>.
                </p>
              </div>

              {/* Department of CSE */}
              <div className="space-y-2 border-t border-slate-900/10 pt-4">
                <h3 className="text-sm font-black text-[#0F172A] flex items-center gap-2">
                  <BookOpen className="w-4.5 h-4.5 text-blue-700" />
                  Department of Computer Science & Engineering (estd. 1999)
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                  The CSE Department has <strong>35 qualified faculty members</strong> and offers comprehensive academic programs including B.Tech, M.Tech, and an SGBAU-approved Ph.D. Research Center to foster next-generation engineering leadership.
                </p>
              </div>

              {/* Core Objectives */}
              <div className="space-y-4 border-t border-slate-900/10 pt-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Workshop Objectives (8 Core Points)
                </h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {workshopObjectives.map((obj, index) => (
                    <li key={index} className="flex gap-2 text-xs text-slate-800 leading-relaxed font-semibold">
                      <span className="w-4.5 h-4.5 rounded-full bg-amber-500/15 border border-amber-600/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-700" />
                      </span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-900/10 space-y-3">
              <p className="text-[11px] font-bold tracking-wide uppercase text-slate-500">
                Explore Official AICTE Schemes & Portals:
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://atalacademy.aicte.gov.in/vaani-documents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0F172A] hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-[11px] uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  AICTE VAANI Documents
                </a>

                <a
                  href="https://www.aicteducation.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0F172A] hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-[11px] uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  AICTE Official Portal
                </a>

                <a
                  href="https://www.aicte.gov.in/schemes/staff-development-schemes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0F172A] hover:bg-amber-700 text-white font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-[11px] uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  AICTE Staff Development Schemes
                </a>
              </div>
            </div>
          </div>

          {/* Tile 2: Gate Photo Card & Institutional Profile (Reversed Stack) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Additional Fact Card (Official Institute Profile) */}
            <div className="bg-white/50 border border-white/80 p-6 rounded-2xl shadow-md space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <Award className="w-4.5 h-4.5 text-blue-700" />
                Institutional Details (Sipna SCOET)
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed font-semibold">
                Sipna College of Engineering & Technology (SCOET), Amravati is an <strong>Autonomous institute affiliated with Sant Gadge Baba Amravati University (SGBAU)</strong>. Established in 1999 by Sipna Shikshan Prasarak Mandal (SSPM, estd. 1995), it is accredited with <strong>Grade 'A+' by NAAC</strong>, and is ISO 9001:2015 & ISO 14001:2015 certified. The college holds <strong>NBA accreditation for UG programs in 5 departments</strong>: Computer Science & Engineering, Electronics & Telecommunication, Information Technology, Civil Engineering, and Mechanical Engineering. It is a Mentee Institute of COEP Technological University, Pune under the AICTE Margadarshan Scheme, and the sole member of the Confederation of Indian Industry (CII) in the university.
              </p>
            </div>

            {/* Bottom Sub-Panel: Gate Photo Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.1)] border border-white/60 group cursor-pointer aspect-[3/4] w-full flex flex-col justify-end flex-1">
              <img
                src={sipnaGate}
                alt="Sipna Gate Entrance"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
              />
              
              <div className="bg-gradient-to-t from-slate-900 via-slate-950/25 to-transparent p-6 flex flex-col justify-end absolute inset-0 transition-opacity duration-300 z-10">
                <h4 className="text-lg font-bold text-white mb-1">
                  Sipna College of Engineering & Technology, Amravati
                </h4>
                <p className="text-xs font-semibold text-amber-300 tracking-wide uppercase mb-2">
                  UGC Autonomous | NAAC 'A+' Grade | NBA Accredited
                </p>
                <p className="text-xs text-slate-200 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  Mentee Institute of COEP Tech University under Margadarshan Scheme
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};