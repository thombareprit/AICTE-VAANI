import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import sipnaLogo from '../assets/sipna-logo.png';
import naacLogo from '../assets/naac-logo.png';
import nbaLogo from '../assets/nba-logo.svg';
import aicteLogo from '../assets/aicte-logo.png';
import sipnaBuilding from '../assets/sipna-building.svg';

export const HeroSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D physics tilt motion values with dampening springs
  const xVal = useMotionValue(0.5);
  const yVal = useMotionValue(0.5);

  const xSpring = useSpring(xVal, { stiffness: 150, damping: 20 });
  const ySpring = useSpring(yVal, { stiffness: 150, damping: 20 });

  // Map to rotations dampened strictly to max +-2.5 degrees
  const rotateX = useTransform(ySpring, [0, 1], [2.5, -2.5]);
  const rotateY = useTransform(xSpring, [0, 1], [-2.5, 2.5]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Set normalized values for 3D tilt transformation
    xVal.set(mouseX / width);
    yVal.set(mouseY / height);
    
    // Set pixel coordinates for spotlight cursor background
    setMousePos({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    xVal.set(0.5);
    yVal.set(0.5);
  };

  const handleScrollToTimeline = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#schedule');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const credentials = [
    { key: 'Workshop Dates', value: '29th October – 31st October 2026' },
    { key: 'Workshop ID', value: '2565537652' },
    { key: 'Conduct Mode', value: 'Offline Mode' },
    { key: 'Medium of Instruction', value: 'Hindi Medium (AICTE-VAANI Regional Language Initiative)' },
    { key: 'Venue', value: 'Sipna College of Engineering & Technology, Amravati' },
    { key: 'Seat Limit', value: 'Max 50 Participants (First-Come, First-Served Basis)' },
    { key: 'Certification', value: 'Min 80% Attendance & 70% Test Score required for ATAL Certificate' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] min-h-screen pt-4 pb-16 px-4">
      {/* Layer 1 (Background Asset Layer) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={sipnaBuilding} 
          alt="Sipna Building Background" 
          className="w-full h-full object-cover object-center opacity-[0.8] contrast-125 scale-105 transition-transform duration-1000"
        />
      </div>

      {/* Layer 2 (Soft Gradient Color Tint Overlay) */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/80 to-[#F8FAFC] backdrop-blur-[2px]" />

      {/* Layer 3 (Hero Content Wrapper) */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
        
        {/* 1. Centered Institutional Crest Header */}
        <div className="w-full max-w-5xl mx-auto text-center pt-8 pb-6 flex flex-col items-center justify-center border-b border-slate-200/60 mb-8">
          
          {/* Logo container preventing layout shifting when morphing logo docks into Navbar */}
          <div className="h-16 flex items-center justify-center mb-3">
            {!isScrolled && (
              <motion.img
                layoutId="sipnaLogoMorph"
                src={sipnaLogo}
                alt="Sipna Logo"
                style={{
                  transformOrigin: 'center left', // Fixed transform origin center left strictly
                }}
                className="h-16 w-auto object-contain"
                transition={{ layout: { type: "spring", stiffness: 350, damping: 35, bounce: 0 } }}
              />
            )}
          </div>

          <span className="text-[0.75rem] font-bold tracking-[0.2em] text-slate-500 uppercase mb-1">
            SIPNA SHIKSHAN PRASARAK MANDAL'S
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-[#0F172A] tracking-tight uppercase mb-1">
            SIPNA COLLEGE OF ENGINEERING AND TECHNOLOGY, AMRAVATI
          </h1>
          <span className="text-sm font-extrabold text-red-600 tracking-wide mb-2">
            ESTD - 1999 | An Autonomous Institute
          </span>
          <div className="flex items-center justify-center gap-3 text-xs font-semibold text-slate-600 flex-wrap">
            <img
              src={naacLogo}
              alt="NAAC Logo"
              style={{ maxHeight: '58px', width: 'auto', objectFit: 'contain' }}
            />
            <span>
              (Affiliated to Sant Gadge Baba Amravati University) | Accredited by NAAC with grade A+ | Accredited by NBA | Accredited by IAO
            </span>
            <img
              src={nbaLogo}
              alt="NBA Logo"
              style={{ maxHeight: '48px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* 1. Hero Grid Structure (2-Column Layout) */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (7 Columns) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Interactive Sponsor Box with gold fill transition */}
            <div className="flex items-center shadow-premium gap-4 mb-4 bg-slate-100 shadow-xl border border-slate-200 p-3 rounded-2xl w-fit cursor-default hover:bg-amber-500/15 hover:border-amber-500/40 hover:shadow-lg transition-all duration-300 group">
              <img
                src={aicteLogo}
                alt="AICTE Logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="text-base md:text-lg font-black tracking-wider text-[#B45309] uppercase block transition-colors duration-300 group-hover:text-amber-700">
                  AICTE-VAANI SPONSORED SCHEME
                </span>
                <span className="text-sm font-bold text-slate-700 block">
                  3-Day National Technical Workshop
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight mb-4 tracking-tight">
              Quantum Technologies{' '}
              <span className="text-[#E36414] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
                for Viksit Bharat
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base text-slate-600 leading-relaxed mb-6 max-w-xl font-semibold">
              National integration through technical curriculum delivery in native languages. Exploring the convergence of Quantum Computing, Cryptography, AI/ML, and Blockchain for Viksit Bharat 2047.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-2">
              <a
                href="https://atalacademy.aicte-india.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E36414] hover:bg-[#AE4C0F] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] cursor-pointer inline-flex items-center"
              >
                Register for Free
              </a>
              <button
                onClick={handleScrollToTimeline}
                className="border-2 border-slate-300 hover:border-slate-800 text-slate-800 font-bold px-7 py-3.5 rounded-xl transition-all hover:bg-slate-100 cursor-pointer"
              >
                Explore Timeline
              </button>
            </div>

          </div>

          {/* Right Column: Subtle 3D Tilt + Spotlight Credentials Card (5 Columns) */}
          <div className="lg:col-span-5 w-full [perspective:1000px]">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-premium shadow-xl transition-shadow duration-350 hover:shadow-lg overflow-hidden cursor-default"
            >
              {/* Radial Cursor Spotlight Layer */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 6, 6, 0.09), transparent 40%)`,
                }}
              />

              <div style={{ transform: 'translateZ(10px)' }} className="relative z-10 space-y-4">
                <div>
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1 block">
                    WORKSHOP SPECS
                  </span>
                  <h3 className="text-lg font-black text-[#0F172A] pb-2 border-b border-slate-100">
                    Key Details
                  </h3>
                </div>

                <div className="space-y-4">
                  {credentials.map((cred, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-3 pb-3 border-b border-slate-50 last:border-b-0 last:pb-0">
                      <div className="col-span-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {cred.key}
                      </div>
                      <div className="col-span-7 text-xs sm:text-sm font-bold text-[#0F172A] leading-normal">
                        {cred.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
