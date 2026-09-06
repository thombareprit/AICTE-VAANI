import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import jagdishGupta from '../assets/jagdish-gupta.jpg';
import sanjayKherde from '../assets/sanjay-kherde.jpg';
import vkShandilya from '../assets/v-k-shandilya.jpg';
import sRathod from '../assets/s-rathod.jpg';
import hGulhane from '../assets/h-gulhane.jpg';
import sDhande from '../assets/s-dhande.jpg';
import aBardekar from '../assets/a-bardekar.jpg';
import kIngole from '../assets/k-ingole.jpg';

export const CommitteeSection: React.FC = () => {
  const leadership = [
    {
      role: 'Patron',
      name: "Hon'ble Shri Jagdishji Gupta",
      title: 'President, Sipna Shikshan Prasarak Mandal (SSPM)',
      image: jagdishGupta,
    },
    {
      role: 'Chairman',
      name: 'Dr. Sanjay M. Kherde',
      title: 'Principal, Sipna College of Engineering & Technology',
      image: sanjayKherde,
    },
    {
      role: 'Convenor',
      name: 'Dr. Vijaya K. Shandilya',
      title: 'HOD, Department of Computer Science and Engineering',
      image: vkShandilya,
    },
  ];

  const coordinators = [
    {
      role: 'Coordinator',
      name: 'Dr. Seema B. Rathod',
      phone: '+91 9423622703',
      email: 'sbrathod@sipnaengg.ac.in',
      image: sRathod,
    },
    {
      role: 'Co-Coordinator',
      name: 'Dr. Harsha S. Gulhane',
      phone: '+91 9561584815',
      email: 'hrvyawahare@sipnaengg.ac.in',
      image: hGulhane,
    },
  ];

  const advisors = [
    { name: 'Dr. S. S. Dhande', role: 'Professor', image: sDhande },
    { name: 'Dr. A. A. Bardekar', role: 'Professor', image: aBardekar },
    { name: 'Dr. K. R. Ingole', role: 'Assistant Professor', image: kIngole },
  ];

  // Framer Motion variants for parent card hover ring trigger
  const cardVariants = {
    rest: { y: 0, shadow: '0 10px 30px rgba(15, 23, 42, 0.04)' },
    hover: { y: -5, shadow: '0 20px 40px rgba(15, 23, 42, 0.09)' },
  };

  const ringVariants = {
    rest: { borderColor: '#CBD5E1', scale: 1 },
    hover: { borderColor: '#2563EB', scale: 1.05 },
  };

  return (
    <section id="committee" className="scroll-mt-24 py-12 md:py-16 bg-canvas border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-bold uppercase tracking-wider">
            Organizers
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Administration
          </h2>
        </div>

        {/* 1. Row 1: Leadership (3 Centered Cards) with 130px circular avatar frames */}
        <div className="space-y-6">
          {/* <h3 className="text-sm font-black text-slate-400 tracking-widest uppercase text-center">
            Organizing Leadership
          </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
            {leadership.map((leader) => (
              <div
                key={leader.role}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col items-center text-center space-y-4 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group"
              >
                {/* 130px avatar frames */}
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-[130px] h-[130px] rounded-full object-cover border-4 border-slate-200 hover:border-[#1D4ED8] transition-all duration-300 shadow-md mx-auto mb-4 select-none"
                />
                
                <div className="space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-primary border border-blue-250 text-[10px] font-black tracking-wider uppercase">
                    {leader.role}
                  </span>
                  <h4 className="text-base font-extrabold text-slate-950 group-hover:text-primary transition-colors duration-200">{leader.name}</h4>
                  <p className="text-xs text-slate-500 font-semibold leading-normal max-w-[220px] mx-auto">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 1. Row 2: Workshop Coordinators centered horizontally with parent card hover ring trigger */}
        <div className="space-y-6 pt-4">
          <h3 className="text-sm font-black text-slate-400 tracking-widest uppercase text-center">
            Workshop Coordinators
          </h3>
          <div className="flex flex-wrap gap-8 justify-center items-stretch mx-auto">
            {coordinators.map((coord) => (
              <motion.div
                key={coord.role}
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={cardVariants}
                className="w-full md:w-[340px] bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col justify-between items-center text-center space-y-4 transition-all duration-300 cursor-default"
              >
                {/* Card-level hover ring trigger: Image ring border transforms Gray -> Royal Blue */}
                <motion.img
                  variants={ringVariants}
                  src={coord.image}
                  alt={coord.name}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-[3px] shadow-sm mx-auto mb-3 select-none"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-150 text-[10px] font-black tracking-wider uppercase">
                    {coord.role}
                  </span>
                  <h4 className="text-base font-extrabold text-slate-955 transition-colors duration-200">{coord.name}</h4>
                  <p className="text-xs text-slate-400 font-bold">Dept. of CSE, SCOET</p>
                </div>

                {/* Contacts */}
                <div className="w-full border-t border-slate-100 pt-4 space-y-2 text-xs">
                  <a
                    href={`tel:${coord.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 text-slate-600 hover:text-[#1D4ED8] transition-colors font-semibold"
                  >
                    <Phone className="w-4 h-4 text-slate-405 shrink-0" />
                    {coord.phone}
                  </a>
                  <a
                    href={`mailto:${coord.email}`}
                    className="flex items-center justify-center gap-2 text-slate-655 hover:text-[#1D4ED8] transition-colors font-semibold overflow-hidden text-ellipsis"
                  >
                    <Mail className="w-4 h-4 text-slate-405 shrink-0" />
                    {coord.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 1. Row 3: Advisory Committee rendered as a clean 3-card horizontal row with circular photo avatars */}
        <div className="space-y-6 pt-4">
          <h3 className="text-sm font-black text-slate-400 tracking-widest uppercase text-center">
            Advisory Committee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                whileHover="hover"
                initial="rest"
                animate="rest"
                variants={cardVariants}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-premium flex flex-col justify-between items-center text-center space-y-4 transition-all duration-300 cursor-default"
              >
                {/* 1. Image ring border transforms Gray -> Royal Blue with parent card hover trigger */}
                <motion.img
                  variants={ringVariants}
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-[3px] shadow-sm mx-auto mb-3 select-none"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="space-y-1.5">
                  <h4 className="text-base font-extrabold text-slate-950 transition-colors duration-200">
                    {advisor.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-semibold leading-normal">
                    {advisor.role}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold">SCOET, Amravati</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 1. Bottom Badge: EXACTLY ONE "SCOET CSE Academic Counsel" badge centered at the bottom of the section */}
        {/* <div className="w-full max-w-md mx-auto text-center mt-12 py-3 px-6 bg-slate-105 rounded-full border border-slate-200 text-xs font-bold text-slate-600 shadow-inner select-none">
          SCOET CSE Academic Counsel
        </div> */}

      </div>
    </section>
  );
};
