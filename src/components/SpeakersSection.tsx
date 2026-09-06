import React, { useState } from 'react';
import { MapPin, GraduationCap } from 'lucide-react';
import kumarGautamImg from '../assets/Kumar-gautam.jpeg';
import nehaGuptaImg from '../assets/Neha-gupta.jpeg';
import satishSalunkeImg from '../assets/Satish-salunke.jpeg';
import vishalChandelImg from '../assets/Vishal-chandel.jpeg';
import tapanKumarJainImg from '../assets/Tapan-kumar-jain.jpeg';

interface Speaker {
  name: string;
  tag: string;
  role: string;
  affiliation: string;
  image: string;
}

export const SpeakersSection: React.FC = () => {
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const speakers: Speaker[] = [
    {
      name: 'Dr. Kumar Gautam',
      tag: 'Keynote Speaker • Quantum Computing',
      role: 'Adjunct Faculty, NIT Delhi & Research Consultant',
      affiliation: 'RMOC (AIM-NITI Aayog) | Postdoc GIST South Korea',
      image: kumarGautamImg,
    },
    {
      name: 'Dr. Neha Gupta',
      tag: 'Quantum Algorithms',
      role: 'Dy Director, School of Computer Science & IT',
      affiliation: 'Symbiosis University of Applied Sciences, Indore',
      image: nehaGuptaImg,
    },
    {
      name: 'Dr. Satish Salunkhe',
      tag: 'AI & Quantum ML',
      role: 'HOD & Professor, Dept. of Computer Engineering',
      affiliation: "Vidyavardhini's College of Engg. & Tech. (VCET), Palghar",
      image: satishSalunkeImg,
    },
    {
      name: 'Prof. Vishal Chandel',
      tag: 'Healthcare & Smart Systems',
      role: 'Senior IT Trainer & Industry Expert',
      affiliation: 'Sunstone Education Technology Pvt. Ltd., Pune',
      image: vishalChandelImg,
    },
    {
      name: 'Dr. Tapan Kumar Jain',
      tag: 'Quantum Cryptography & QKD',
      role: 'Associate Professor(ECE), IIIT Nagpur',
      affiliation: 'COEP | RGPV, Bhopal',
      image: tapanKumarJainImg,
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveSpotlightIdx(index);
  };

  const handleMouseLeave = () => {
    setActiveSpotlightIdx(null);
  };

  const renderCard = (speaker: Speaker, index: number) => {
    return (
      <div
        onMouseMove={(e) => handleMouseMove(e, index)}
        onMouseLeave={handleMouseLeave}
        className="bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group min-h-[340px] w-full relative overflow-hidden cursor-default"
      >
        {/* Spotlight Overlay */}
        {activeSpotlightIdx === index && (
          <div
            className="absolute inset-0 pointer-events-none z-5 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29,78,216,0.08), transparent 60%)`,
            }}
          />
        )}

        <div className="relative z-10">
          {/* Image Container - STRICT 3:4 aspect ratio */}
          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/60">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover object-top filter transition-transform duration-500 group-hover:scale-105"
            />
            {/* Domain Badge */}
            <span className="bg-slate-900/85 backdrop-blur-md text-amber-300 border border-white/20 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full absolute top-2.5 left-2.5 z-10">
              {speaker.tag}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-[#0F172A] tracking-tight group-hover:text-blue-700 transition-colors">
              {speaker.name}
            </h3>
            <div className="flex gap-1.5 text-[11px] sm:text-xs text-slate-700 font-bold items-start mt-0.5 leading-snug">
              <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
              <span>{speaker.role}</span>
            </div>
          </div>
        </div>

        {/* Affiliation / Credentials */}
        <div className="relative z-10 mt-4 border-t border-slate-100 pt-2 flex gap-1.5 text-xs font-semibold text-slate-500 leading-relaxed">
          <GraduationCap className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
          <span>{speaker.affiliation}</span>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="speakers" 
      className="scroll-mt-24 py-12 md:py-16 bg-slate-50/50 border-b border-slate-200/60 overflow-hidden"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Row */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-black uppercase tracking-wider mb-3">
              Resource Persons
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Distinguished Speakers
            </h2>
            <p className="max-w-2xl text-slate-600 text-sm sm:text-base font-semibold mt-1">
              National integration through technical curriculum delivery in native languages.
            </p>
          </div>
        </div>

        {/* Balanced 3 + 2 Grid Layout using FlexWrap for equal geometry sizing */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
          {speakers.map((speaker, idx) => (
            <div key={speaker.name} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[290px] flex">
              {renderCard(speaker, idx)}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
