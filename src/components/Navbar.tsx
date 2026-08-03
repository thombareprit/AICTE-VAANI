import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import sipnaLogo from '../assets/sipna-logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold set strictly to 150px
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Committee', href: '#committee' },
    { label: 'Venue', href: '#venue' },
    { label: 'Registration', href: '#registration' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(targetId);
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

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[9999] bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300 py-3.5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Scroll-Triggered Morphing Logo */}
            <div className="flex items-center min-w-[150px] h-[36px]">
              <AnimatePresence>
                {isScrolled && (
                  <motion.img
                    layoutId="sipnaLogoMorph"
                    src={sipnaLogo}
                    alt="SCOET Logo"
                    style={{
                      height: '36px',
                      width: 'auto',
                      objectFit: 'contain',
                      transformOrigin: 'center left', // Enforce strict center left transform origin
                    }}
                    className="select-none"
                    transition={{ layout: { type: "spring", stiffness: 350, damping: 35, bounce: 0 } }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Center: Clean Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
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
                className="bg-[#1D4ED8] hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center gap-1 text-xs uppercase tracking-wider"
              >
                Register Now
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-950 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
              </button>
            </div>
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
                  <div className="flex items-center">
                    <img src={sipnaLogo} alt="SCOET Logo" className="h-7 w-auto object-contain" />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className="text-[14px] font-black text-slate-700 hover:text-[#1D4ED8] py-1.5 transition-colors border-b border-slate-50 uppercase tracking-wide"
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
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 bg-[#1D4ED8] hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-all duration-200 uppercase tracking-wider"
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
