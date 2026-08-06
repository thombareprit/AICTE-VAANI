import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap, MapPin } from 'lucide-react';
import speakerImg from '../assets/Speaker.jpg';

interface Speaker {
  name: string;
  role: string;
  institution: string;
  credentials: string[];
  color: string;
  tagText: string;
}

export const SpeakersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [currentSpeakerIdx, setCurrentSpeakerIdx] = useState(1);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const speakers: Speaker[] = [
    {
      name: 'Dr. Kumar Gautam',
      role: 'Keynote Speaker',
      institution: 'NIT Delhi & RMoC AIM-NITI Aayog',
      credentials: [
        'PhD in Quantum Computing',
        'Postdoc GIST South Korea',
        'Adjunct Faculty at NIT Delhi',
      ],
      color: '#1D4ED8',
      tagText: 'Quantum Computing',
    },
    {
      name: 'Dr. Neha Gupta',
      role: 'Invited Speaker',
      institution: 'Symbiosis University, Indore',
      credentials: [
        'Deputy Director, CS & IT',
        'Expert in Quantum Algorithms',
        'Doctorate in Computer Science',
      ],
      color: '#6366F1',
      tagText: 'Quantum Algorithms',
    },
    {
      name: 'Dr. Satish Salunke',
      role: 'Invited Speaker',
      institution: 'VCET, Vasai Road, Palghar',
      credentials: [
        'Quantum AI & Machine Learning',
        'Research Specialist in Neural Net',
        'Senior Academic & IEEE Member',
      ],
      color: '#6366F1',
      tagText: 'Quantum AI & ML',
    },
    {
      name: 'Prof. Vishal Chandel',
      role: 'Industry Expert',
      institution: 'Sunstone Education Tech, Pune',
      credentials: [
        'Senior IT Trainer & Consultant',
        'Healthcare Quantum Specialist',
        'Industry Integration Expert',
      ],
      color: '#1D4ED8',
      tagText: 'Healthcare Systems',
    },
    {
      name: 'Dr. Harish Sahu',
      role: 'Defence Scientist',
      institution: 'SAG DRDO, Delhi',
      credentials: [
        'Scientist at SAG DRDO',
        'Expert in Quantum Safe Crypto',
        'National Security Technology Advisor',
      ],
      color: '#059669',
      tagText: 'Cryptography',
    },
  ];

  // useScroll target pointing to the vertical container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  // 3. Pinned Scroll Drive: translateX(0%) -> translateX(-52%) matching the 5th card grounding precisely
  const xTranslate = useTransform(scrollYProgress, [0.08, 0.92], ['0%', '-52%']);
  const xSpring = useSpring(xTranslate, { stiffness: 85, damping: 20 });

  // Update dynamic speaker index indicator based on scroll progress
  useEffect(() => {
    return scrollYProgress.on('change', (latest: number) => {
      const idx = Math.min(5, Math.max(1, Math.round(latest * 4) + 1));
      setCurrentSpeakerIdx(idx);
    });
  }, [scrollYProgress]);

  // Calculate constraints for dragging
  useEffect(() => {
    if (trackRef.current && constraintsRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = constraintsRef.current.clientWidth;
      setMaxDrag(Math.max(0, trackWidth - containerWidth + 80));
    }
  }, [isMobile]);

  const handleMobileScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 310;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      // Update index on manual arrow click
      const scrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      const idx = Math.min(5, Math.max(1, Math.round(scrollLeft / 310) + 1));
      setCurrentSpeakerIdx(idx);
    }
  };

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
        key={speaker.name}
        onMouseMove={(e) => handleMouseMove(e, index)}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[3/4] w-[280px] sm:w-[315px] shrink-0 snap-center rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 hover:-translate-y-1.5 transition-all duration-350 group cursor-default"
      >
        {/* Grayscale/vibrant hover effect based on viewport layout */}
        <img
          src={speakerImg}
          alt={speaker.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 pointer-events-none ${
            isMobile 
              ? 'filter-none scale-100' 
              : 'grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105'
          }`}
        />

        {/* Spotlight Overlay */}
        {activeSpotlightIdx === index && (
          <div
            className="absolute inset-0 pointer-events-none z-5 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(4, 4, 4, 0.09), transparent 60%)`,
            }}
          />
        )}

        {/* Linear gradient shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent z-6 pointer-events-none" />

        {/* Role badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full bg-slate-950/90 text-white text-[9px] font-black tracking-wider uppercase backdrop-blur-sm shadow-md">
            {speaker.role}
          </span>
        </div>

        {/* Tag text badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wider uppercase border"
            style={{
              backgroundColor: `${speaker.color}15`,
              color: speaker.color,
              borderColor: `${speaker.color}40`,
            }}
          >
            {speaker.tagText}
          </span>
        </div>

        {/* Dark Glass Bio Card */}
        <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-2.5 z-10 text-white">
          <div>
            <h3 className="text-sm sm:text-base font-black text-white leading-snug">
              {speaker.name}
            </h3>
            <div className="flex gap-1.5 text-[10px] sm:text-xs text-slate-400 font-bold items-start mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>{speaker.institution}</span>
            </div>
          </div>

          {/* Credentials - scaled up to text-xs md:text-sm text-slate-300 */}
          <div className="border-t border-white/10 pt-2 space-y-1.5">
            {speaker.credentials.slice(0, 2).map((cred, i) => (
              <div key={i} className="flex gap-1.5 text-xs md:text-sm font-semibold text-slate-300 leading-snug">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="truncate">{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render Pinned Horizontal Scroll on Desktop
  if (!isMobile) {
    return (
      <div ref={sectionRef} className="h-[120vh] relative bg-slate-50/50 mb-0 pb-4">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          
          {/* Header Row with Title and Floating Progress Indicator */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8 flex justify-between items-end">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-black uppercase tracking-wider mb-3">
                Resource Persons
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Distinguished Speakers
              </h2>
              <p className="max-w-2xl text-slate-600 text-sm sm:text-base font-semibold">
                Scroll down to explore technical scientists, defence research leaders, and coordinators.
              </p>
            </div>
            
            {/* 4. Subtle, neutral slate chip Floating Progress Indicator */}
            <div className="mb-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/60 border border-slate-300/80 text-slate-500 text-[10px] font-medium tracking-normal shadow-xs opacity-75 hover:opacity-100 transition-opacity">
                ← Scroll / Drag to Explore Speakers ({currentSpeakerIdx}/5) →
              </span>
            </div>
          </div>

          {/* Sliding Track Constraints Container */}
          <div ref={constraintsRef} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
            <motion.div
              ref={trackRef}
              drag="x"
              dragConstraints={{ left: -maxDrag, right: 0 }}
              dragElastic={0.1}
              style={{ x: xSpring }}
              className="flex gap-8 pl-4 pr-[35vw] w-max cursor-grab active:cursor-grabbing"
            >
              {speakers.map((speaker, idx) => renderCard(speaker, idx))}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback Swipe Carousel for Mobile
  return (
    <section id="speakers" className="py-16 bg-slate-55 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-black uppercase tracking-wider">
              Resource Persons
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Distinguished Speakers ({currentSpeakerIdx}/5)
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleMobileScroll('left')}
              className="p-2.5 bg-white border border-slate-200 rounded-full shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4.5 h-4.5 text-slate-700" />
            </button>
            <button
              onClick={() => handleMobileScroll('right')}
              className="p-2.5 bg-white border border-slate-200 rounded-full shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-4.5 h-4.5 text-slate-700" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-5 pb-4 scroll-smooth w-full"
        >
          {speakers.map((speaker, idx) => renderCard(speaker, idx))}
        </div>
      </div>
    </section>
  );
};
