import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import sipnaLogo from '../assets/sipna-logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      // Trigger docking after scrolling past the Hero header threshold
      setIsScrolledPastHero(latest > 110);
    });
  }, [scrollY]);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Venue', href: '#venue' },
    { label: 'Committee', href: '#committee' },
    { label: 'Registration', href: '#registration' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = id.startsWith('#') ? id.slice(1) : id;
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Animation Timers
  const MOBILE_DURATION = 0.8; // Smooth slow glide transition

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          
          {/* =====================================================================
              BRAND DOCKING SLOT: BLANK AT TOP -> REVEALS ON SCROLL
          ===================================================================== */}
          <div className="flex items-center min-w-[32px]">
            {/* 1. DESKTOP VIEWPORT: CONTINUOUS SHARED LAYOUT ID LOGO FLIGHT */}
            {isScrolledPastHero && (
              <motion.div
                layoutId="sipna-flying-logo"
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                  mass: 0.8
                }}
                className="hidden md:flex items-center cursor-pointer select-none"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img
                  src={sipnaLogo}
                  alt="Sipna Logo"
                  className="h-10 lg:h-11 w-auto object-contain"
                />
              </motion.div>
            )}

            {/* 2. MOBILE VIEWPORT: LOGO + FULL SINGLE-LINE TITLE (SMOOTH GLIDE) */}
            <AnimatePresence>
              {isScrolledPastHero && (
                <motion.div
                  key="mobile-brand-dock"
                  initial={{ opacity: 0, y: 14, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: MOBILE_DURATION, ease: [0.16, 1, 0.3, 1] }}
                  className="flex md:hidden items-center gap-2 cursor-pointer select-none"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <img
                    src={sipnaLogo}
                    alt="Sipna Logo"
                    className="h-7 sm:h-8 w-auto object-contain shrink-0"
                  />
                  <span className="text-[9.5px] min-[375px]:text-[10.5px] min-[400px]:text-[11.5px] font-black text-[#0F172A] uppercase tracking-tighter whitespace-nowrap">
                    Sipna College of Engineering & Technology
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center: Clean Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[13px] font-bold text-slate-600 hover:text-[#1D4ED8] transition-colors duration-150 uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: High-contrast Royal Academic Blue CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://atalacademy.aicte-india.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E36414] hover:bg-[#C25512] text-white font-semibold px-5 py-2.5 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center gap-1 text-xs uppercase tracking-wider min-h-[44px]"
            >
              Register Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-w-[44px] min-h-[44px] p-2 rounded-lg text-slate-600 hover:text-slate-950 focus:outline-none flex items-center justify-center cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[9998] bg-slate-955 md:hidden"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[9999] w-72 bg-white shadow-2xl p-6 flex flex-col justify-between border-l border-slate-200 md:hidden"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <img src={sipnaLogo} alt="SCOET Logo" className="h-8 w-auto object-contain" />
                    <span className="text-xs font-black text-[#0F172A] tracking-tight uppercase leading-tight">
                      Sipna College of Engineering & Technology
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="min-w-[44px] min-h-[44px] p-2 rounded-lg text-slate-500 hover:text-slate-900 flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="min-h-[44px] flex items-center text-[14px] font-black text-slate-700 hover:text-[#1D4ED8] py-2 transition-colors border-b border-slate-50 uppercase tracking-wide"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href="https://atalacademy.aicte-india.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 min-h-[44px] bg-[#1D4ED8] hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-all duration-200 uppercase tracking-wider"
                >
                  Register Now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-3 font-semibold">
                  Workshop ID: 2565537652
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
