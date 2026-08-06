import React from 'react';
import { CheckCircle2, FileText, Globe, GraduationCap, Building2, BookOpen } from 'lucide-react';
import sipnaGate from '../assets/sipna-gate.jpg';

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
      className="relative py-20 px-4 bg-[#E5DFD0] text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-black uppercase tracking-wider">
            About the Program
          </span>
          <h2 className="text-center text-base md:text-lg font-black text-[#0F172A] tracking-tight uppercase max-w-4xl mx-auto mb-2 leading-relaxed">
            SIPNA COLLEGE OF ENGINEERING AND TECHNOLOGY, AMRAVATI
          </h2>
          <p className="max-w-3xl mx-auto text-slate-655 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            AICTE-VAANI Sponsored Scheme Regional Language Initiative
          </p>
        </div>

        {/* 2-Column Bento Grid Split 7-5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tile 1 (AICTE-VAANI Regional Scope - 7 Columns) - Luminous Frosted Glass Card */}
          <div className="lg:col-span-7 bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-8 shadow-[0_20px_40px_rgba(15,23,42,0.06)] flex flex-col justify-between space-y-6 text-slate-900">
            <div className="space-y-6">
              
              {/* Scheme Detail */}
              <div className="space-y-3">
                <h3 className="text-lg font-black text-[#0F172A] flex items-center gap-2 border-b border-slate-200 pb-3">
                  <GraduationCap className="w-5.5 h-5.5 text-blue-600" />
                  AICTE-VAANI Regional Language Initiative
                </h3>
                
                {/* Metallic Amber Tint Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-900 border border-amber-600/30 shadow-xs">
                    Language Inclusivity
                  </span>
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-900 border border-amber-600/30 shadow-xs">
                    Regional Curriculum
                  </span>
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-900 border border-amber-600/30 shadow-xs">
                    National Integration
                  </span>
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-900 border border-amber-600/30 shadow-xs">
                    Frontier Technology
                  </span>
                </div>

                <p className="text-sm text-[#334155] font-medium leading-relaxed pt-2">
                  <strong>AICTE-VAANI</strong> (Vibrant Advocacy for Advancement and Nurturing of Indian Languages) is a landmark initiative by AICTE to promote technical education in 22 regional Indian languages. Under this scheme, SCOET organizes this national technical workshop delivered in Hindi medium to democratize advanced frontier technologies for <strong>Viksit Bharat 2047</strong>.
                </p>
              </div>

              {/* Department of CSE Highlights */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <h3 className="text-sm font-black text-[#0F172A] flex items-center gap-2">
                  <BookOpen className="w-4.5 h-4.5 text-blue-600" />
                  Department of Computer Science & Engineering
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed font-semibold">
                  Established in 1999, the CSE Department offers B.Tech (Intake: 180), M.Tech (Intake: 24), and a Ph.D. Research Center approved by SGBAU. It is powered by 34 highly qualified faculty members and has been NBA accredited 3 times.
                </p>
              </div>

              {/* 8 Workshop Objectives */}
              <div className="space-y-4 pt-2 border-t border-slate-200">
                <h4 className="text-xs text-black font-black uppercase tracking-widest text-slate-400">
                  Workshop Objectives
                </h4>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {workshopObjectives.map((obj, index) => (
                    <li key={index} className="flex gap-2.5 text-sm text-[#334155] leading-relaxed font-semibold">
                      <span className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-600/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-650" />
                      </span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Apple-style dark slate pill buttons with hover effects */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
              <a
                href="https://atalacademy.aicte.gov.in/vaani-documents"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0F172A] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer text-xs uppercase tracking-wider inline-flex items-center gap-2 border border-slate-700/20"
              >
                <FileText className="w-4 h-4" />
                AICTE VAANI Documents
              </a>

              <a
                href="https://www.aicteducation.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0F172A] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer text-xs uppercase tracking-wider inline-flex items-center gap-2 border border-slate-700/20"
              >
                <Globe className="w-4 h-4" />
                AICTE Official Portal
              </a>
            </div>
          </div>

          {/* Tile 2 (Visual Institutional Anchor - 5 Columns) - Entrance Gate Photo */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Gate Image with overlay info */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/50 group cursor-pointer aspect-[3/4] w-full flex flex-col justify-end flex-1">
              <img
                src={sipnaGate}
                alt="Sipna Gate Entrance"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
              />
              
              {/* Bottom Gradient Overlay */}
              <div className="bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end absolute inset-0 transition-opacity duration-300 z-10">
                <h4 className="text-lg font-bold text-white mb-1">
                  Sipna College of Engineering & Technology, Amravati
                </h4>
                <p className="text-xs font-semibold text-amber-400/90 tracking-wide uppercase mb-2">
                  UGC Autonomous | NAAC 'A+' Grade | NBA Accredited
                </p>
                {/* Hover Reveal Overlay */}
                <p className="text-xs text-slate-300 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  Mentee Institute of COEP Tech University under Margadarshan Scheme
                </p>
              </div>
            </div>

            {/* Additional Fact Card (Official Institute Profile) */}
            <div className="bg-white/50 border border-white/80 p-6 rounded-2xl shadow-md space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                Official Institute Profile
              </h4>
              <p className="text-[11px] sm:text-xs text-[#334155] leading-relaxed font-semibold">
                Established in 1999 under Sipna Shikshan Prasarak Mandal (SSPM, estd. 1995), Sipna College of Engineering & Technology (SCOET), Amravati is an Autonomous, AICTE-approved, NAAC 'A+' accredited institute affiliated with Sant Gadge Baba Amravati University. It holds ISO 9001:2015 & ISO 14001:2015 certifications and NBA accreditation for 5 UG programs. SCOET is a mentee institute of COEP Technological University, Pune under the AICTE Margadarshan Scheme and the sole CII member in its university.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};