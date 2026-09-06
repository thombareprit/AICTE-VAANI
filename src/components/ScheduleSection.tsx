import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Clock, User, Coffee, Utensils, Tag } from 'lucide-react';

interface TimelineItem {
  time: string;
  title: string;
  speaker?: string;
  role?: string;
  type: 'session' | 'break' | 'event';
  domain: 'quantum' | 'aiml' | 'crypto' | 'blockchain' | 'general' | 'break';
  color: string;
  tagText: string;
  details?: string;
}

interface DayTimelineProps {
  items: TimelineItem[];
}

const DayTimeline: React.FC<DayTimelineProps> = ({
  items,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstNodeRef = useRef<HTMLDivElement>(null);
  const lastNodeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
  });
  
  const [spineBounds, setSpineBounds] = useState({ top: 28, bottom: 28 });
  const [activeIndex, setActiveIndex] = useState(-1);

  // Calculate dynamic spine bounds to start exactly at Node 1 center and end at Node N center
  useEffect(() => {
    const updateBounds = () => {
      if (firstNodeRef.current && lastNodeRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const firstRect = firstNodeRef.current.getBoundingClientRect();
        const lastRect = lastNodeRef.current.getBoundingClientRect();

        const top = (firstRect.top + firstRect.height / 2) - containerRect.top;
        const bottom = containerRect.bottom - (lastRect.top + lastRect.height / 2);

        setSpineBounds({ top, bottom });
      }
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    const timer = setTimeout(updateBounds, 150);
    return () => {
      window.removeEventListener('resize', updateBounds);
      clearTimeout(timer);
    };
  }, [items]);

  // Bind vertical Y-scroll progress directly to index thresholds
  useEffect(() => {
    return scaleY.on('change', (latest: number) => {
      const idx = latest * (items.length - 0.5);
      setActiveIndex(idx);
    });
  }, [items, scaleY]);

  // Domain-specific active styles (opaque bg-slate-50/95 + z-20 relative masks the connector endpoints)
  const activeStyles = {
    quantum: {
      card: "bg-slate-50/95 border-2 border-[#1D4ED8] shadow-[0_10px_30px_rgba(29,78,216,0.12)] scale-[1.02] opacity-100 z-20 relative",
      tag: "bg-[#1D4ED8] text-white shadow-md border-[#1D4ED8]"
    },
    aiml: {
      card: "bg-slate-50/95 border-2 border-[#6366F1] shadow-[0_10px_30px_rgba(99,102,241,0.12)] scale-[1.02] opacity-100 z-20 relative",
      tag: "bg-[#6366F1] text-white shadow-md border-[#6366F1]"
    },
    crypto: {
      card: "bg-slate-50/95 border-2 border-[#059669] shadow-[0_10px_30px_rgba(5,150,105,0.12)] scale-[1.02] opacity-100 z-20 relative",
      tag: "bg-[#059669] text-white shadow-md border-[#059669]"
    },
    blockchain: {
      card: "bg-slate-50/95 border-2 border-[#D97706] shadow-[0_10px_30px_rgba(217,119,6,0.12)] scale-[1.02] opacity-100 z-20 relative",
      tag: "bg-[#D97706] text-white shadow-md border-[#D97706]"
    },
    general: {
      card: "bg-slate-50/95 border-2 border-[#1D4ED8] shadow-[0_10px_30px_rgba(29,78,216,0.12)] scale-[1.02] opacity-100 z-20 relative",
      tag: "bg-[#1D4ED8] text-white shadow-md border-[#1D4ED8]"
    },
    break: {
      card: "bg-slate-50/95 border-2 border-[#D97706] shadow-[0_10px_30px_rgba(217,119,6,0.12)] scale-[1.02] opacity-100 z-20 relative",
      tag: "bg-[#D97706] text-white shadow-md border-[#D97706]"
    }
  };

  return (
    <div ref={containerRef} className="w-[33.333%] px-2 sm:px-6 shrink-0 relative overflow-visible">
      
      {/* Central spine line (z-10) running from Node 1 center to Node N center */}
      <div
        className="absolute md:left-1/2 left-[18px] w-[2px] -translate-x-1/2 pointer-events-none z-10"
        style={{
          top: `${spineBounds.top}px`,
          bottom: `${spineBounds.bottom}px`,
        }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="0" y2="100%" stroke="#E2E8F0" strokeWidth="2" />
          <motion.line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#1D4ED8"
            strokeWidth="2"
            style={{ pathLength: scaleY }}
          />
        </svg>
      </div>

      <div className="space-y-12 overflow-visible">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLunch = item.tagText === 'Lunch Break';
          const isTea = item.tagText.includes('Tea') || item.tagText.includes('Refreshment');
          
          const isNodeActive = activeIndex >= index;
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          // Resolve domain styling
          const domainKey = item.domain;
          const activeStyle = activeStyles[domainKey] || activeStyles.general;
          
          // Neutral State Styles (opaque bg-white/90 + relative z-20 masks connector ends)
          const neutralCardStyle = "bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs opacity-75 grayscale-[30%] z-20 relative";
          const neutralTagStyle = "bg-slate-100 text-slate-500 border-slate-200";

          return (
            <div
              key={index}
              className="relative w-full min-h-[130px] flex items-center md:block overflow-visible"
            >
              
              {/* Pulse Ring Node Dot (z-10) */}
              <div
                ref={isFirst ? firstNodeRef : isLast ? lastNodeRef : undefined}
                className={`absolute md:left-1/2 left-[18px] top-1/2 md:top-[28px] -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 z-10 opacity-100 transition-all duration-300 ${
                  isNodeActive 
                    ? 'bg-[#1D4ED8] border-blue-200 shadow-md ring-4 ring-blue-500/20 animate-pulse' 
                    : 'bg-white border-slate-300 shadow-sm'
                }`}
              />

              {/* 1. PHYSICAL BRANCH CONNECTORS (z-0, originating at left: 50% / right: 50% and terminating strictly at card outer boundaries) */}
              {/* Desktop Even (Left Card) Connector: Starts at 50% (center), width 6%, ends at 44% (left card boundary) */}
              {isEven && (
                <div 
                  className="hidden md:block absolute top-[28px] z-0 pointer-events-none"
                  style={{ left: '44%', width: '6%', height: '2px' }}
                >
                  <svg className="w-full h-full" overflow="visible">
                    <line x1="100%" y1="0" x2="0" y2="0" stroke="#E2E8F0" strokeWidth="2" />
                    <motion.line
                      x1="100%"
                      y1="0"
                      x2="0"
                      y2="0"
                      stroke={item.color}
                      strokeWidth="2"
                      animate={{ pathLength: isNodeActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </svg>
                </div>
              )}

              {/* Desktop Odd (Right Card) Connector: Starts at 50% (center), width 6%, ends at 56% (right card boundary) */}
              {!isEven && (
                <div 
                  className="hidden md:block absolute top-[28px] z-0 pointer-events-none"
                  style={{ left: '50%', width: '6%', height: '2px' }}
                >
                  <svg className="w-full h-full" overflow="visible">
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="#E2E8F0" strokeWidth="2" />
                    <motion.line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                      stroke={item.color}
                      strokeWidth="2"
                      animate={{ pathLength: isNodeActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    />
                  </svg>
                </div>
              )}

              {/* Mobile (All Right Cards) Connector: Starts at 18px, ends at 44px (card padding boundary) */}
              <div className="md:hidden absolute top-1/2 left-[18px] w-[26px] h-[2px] z-0 -translate-y-1/2 pointer-events-none">
                <svg className="w-full h-full" overflow="visible">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#E2E8F0" strokeWidth="2" />
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke={item.color}
                    strokeWidth="2"
                    animate={{ pathLength: isNodeActive ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                </svg>
              </div>

              {/* Card Container (z-20 relative) */}
              <div
                className={`w-full md:w-[44%] pl-11 md:pl-0 transition-all duration-300 relative z-20 ${
                  isEven
                    ? 'md:mr-auto md:text-right text-left'
                    : 'md:ml-auto md:text-left text-left'
                }`}
              >
                {/* Opaque card masks the connector line ends cleanly */}
                <div
                  className={`p-6 min-h-[130px] rounded-2xl border transition-all duration-500 ${
                    isNodeActive 
                      ? activeStyle.card 
                      : neutralCardStyle
                  }`}
                >
                  {/* Time & Badge */}
                  <div
                    className={`flex flex-col sm:flex-row gap-2.5 mb-3 pb-2 border-b border-slate-100 ${
                      isEven 
                        ? 'md:flex-row-reverse md:justify-between sm:justify-start'
                        : 'md:justify-between'
                    }`}
                  >
                    <div className={`flex items-center gap-1.5 text-xs font-bold tracking-wide shrink-0 ${isNodeActive ? 'text-slate-700' : 'text-slate-400'}`}>
                      <Clock className="w-4 h-4 text-slate-350" />
                      {item.time}
                    </div>
                    
                    <div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-wide uppercase inline-flex items-center gap-1.5 border transition-all duration-300 ${
                          isNodeActive 
                            ? activeStyle.tag 
                            : neutralTagStyle
                        }`}
                      >
                        {isLunch ? (
                          <Utensils className="w-3 h-3" />
                        ) : isTea ? (
                          <Coffee className="w-3 h-3" />
                        ) : (
                          <Tag className="w-2.5 h-2.5" />
                        )}
                        {item.tagText}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-sm sm:text-base font-extrabold leading-snug transition-colors duration-500 ${isNodeActive ? 'text-slate-900' : 'text-slate-500'}`}>
                    {item.title}
                  </h3>

                  {/* Speaker details block */}
                  {item.speaker && (
                    <div
                      className={`flex items-start gap-2.5 p-2 rounded-lg border mt-3 text-left transition-colors duration-500 ${
                        isEven ? 'md:flex-row-reverse md:text-right' : ''
                      } ${isNodeActive ? 'bg-slate-50 border-slate-200' : 'bg-slate-50/50 border-slate-100'}`}
                    >
                      <div className="p-1 bg-white border border-slate-200 rounded text-slate-500 shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className={`block text-xs font-black transition-colors ${isNodeActive ? 'text-slate-800' : 'text-slate-500'}`}>
                          {item.speaker}
                        </span>
                        {item.role && (
                          <span className={`block text-[10px] font-bold leading-tight mt-0.5 ${isNodeActive ? 'text-slate-550' : 'text-slate-400'}`}>
                            {item.role}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Details text */}
                  {item.details && (
                    <p className={`text-xs font-semibold leading-relaxed mt-3 transition-colors ${isNodeActive ? 'text-slate-600' : 'text-slate-400'}`}>
                      {item.details}
                    </p>
                  )}

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const days = [
    { id: 1, label: 'Day 1', date: '29 Oct 2026' },
    { id: 2, label: 'Day 2', date: '30 Oct 2026' },
    { id: 3, label: 'Day 3', date: '31 Oct 2026' },
  ];

  const scheduleData: Record<1 | 2 | 3, TimelineItem[]> = {
    1: [
      {
        time: '09:30 AM – 11:00 AM',
        title: 'Registration & Inauguration Ceremony',
        type: 'event',
        domain: 'general',
        color: '#1D4ED8',
        tagText: 'Inaugural',
        details: 'Welcome address by SSPM leadership, Patrons, and Convenor. Highlighting the VAANI scheme regional roadmap.',
      },
      {
        time: '11:00 AM – 12:00 PM',
        title: 'Session I: Introduction to Quantum Technologies and Viksit Bharat',
        speaker: 'Dr. Kumar Gautam',
        role: 'Adjunct Faculty, NIT Delhi & RMoC AIM-NITI Aayog',
        type: 'session',
        domain: 'quantum',
        color: '#1D4ED8',
        tagText: 'Session I',
        details: 'Overview of quantum mechanics, quantum initiatives, and role of regional language instruction for Viksit Bharat 2047.',
      },
      {
        time: '12:00 PM – 01:00 PM',
        title: 'Session II: Fundamentals of Quantum Computing',
        speaker: 'Dr. Kumar Gautam',
        role: 'Adjunct Faculty, NIT Delhi & RMoC AIM-NITI Aayog',
        type: 'session',
        domain: 'quantum',
        color: '#1D4ED8',
        tagText: 'Session II',
        details: 'Understanding superposition, entanglement, qubits, Bloch sphere representation, and quantum logic gates.',
      },
      {
        time: '01:00 PM – 02:00 PM',
        title: 'Networking Lunch Break',
        type: 'break',
        domain: 'break',
        color: '#D97706',
        tagText: 'Lunch Break',
      },
      {
        time: '02:00 PM – 03:00 PM',
        title: 'Session III: Quantum Communication',
        speaker: 'Dr. Neha Gupta',
        role: 'Dy Director, School of Computer Science & IT, Indore',
        type: 'session',
        domain: 'aiml',
        color: '#6366F1',
        tagText: 'Session III',
        details: 'Introduction to secure channels, quantum teleportation, and quantum noise fundamentals.',
      },
      {
        time: '03:00 PM – 03:15 PM',
        title: 'Evening High Tea & Refreshments',
        type: 'break',
        domain: 'break',
        color: '#D97706',
        tagText: 'High Tea Break',
      },
      {
        time: '03:15 PM – 04:15 PM',
        title: 'Session IV: Quantum Algorithms and Applications',
        speaker: 'Dr. Neha Gupta',
        role: 'Dy Director, School of Computer Science & IT, Indore',
        type: 'session',
        domain: 'aiml',
        color: '#6366F1',
        tagText: 'Session IV',
        details: 'Detailed analysis of quantum search algorithms, factoring algorithms, and emerging applications in optimization.',
      },
    ],
    2: [
      {
        time: '11:00 AM – 12:00 PM',
        title: 'Session V: Artificial Intelligence and Quantum AI',
        speaker: 'Dr. Satish Salunkhe',
        role: 'Professor, VCET, Palghar, Maharashtra',
        type: 'session',
        domain: 'aiml',
        color: '#6366F1',
        tagText: 'Session V',
        details: 'Exploring integration of AI with quantum models, neural network scaling, and computing acceleration.',
      },
      {
        time: '12:00 PM – 01:00 PM',
        title: 'Session VI: Quantum Machine Learning',
        speaker: 'Dr. Satish Salunkhe',
        role: 'Professor, VCET, Palghar, Maharashtra',
        type: 'session',
        domain: 'aiml',
        color: '#6366F1',
        tagText: 'Session VI',
        details: 'Understanding quantum kernels, quantum support vector machines, and optimized training methodologies.',
      },
      {
        time: '01:00 PM – 02:00 PM',
        title: 'Networking Lunch Break',
        type: 'break',
        domain: 'break',
        color: '#D97706',
        tagText: 'Lunch Break',
      },
      {
        time: '02:00 PM – 03:00 PM',
        title: 'Session VII: Quantum Technologies in Healthcare and Smart Systems',
        speaker: 'Prof. Vishal Chandel',
        role: 'Senior IT Trainer, Pune',
        type: 'session',
        domain: 'quantum',
        color: '#1D4ED8',
        tagText: 'Session VII',
        details: 'Applications in clinical data analysis, drug discovery simulation, smart grid optimizations, and hospital routing systems.',
      },
      {
        time: '03:00 PM – 03:15 PM',
        title: 'Evening High Tea & Refreshments',
        type: 'break',
        domain: 'break',
        color: '#D97706',
        tagText: 'High Tea Break',
      },
      {
        time: '03:15 PM – 04:15 PM',
        title: 'Session VIII: Research Opportunities in Quantum Technologies',
        speaker: 'Prof. Vishal Chandel',
        role: 'Senior IT Trainer, Pune',
        type: 'session',
        domain: 'quantum',
        color: '#1D4ED8',
        tagText: 'Session VIII',
        details: 'Open research directions, funding opportunities, curriculum mapping, and translation under regional languages framework.',
      },
    ],
    3: [
      {
        time: '11:00 AM – 12:00 PM',
        title: 'Session IX: Quantum Safe Cryptography',
        speaker: 'Dr. Tapan Kumar Jain',
        role: 'Associate Professor & HOD (ECE), IIIT Nagpur',
        type: 'session',
        domain: 'crypto',
        color: '#059669',
        tagText: 'Session IX',
        details: 'Understanding post-quantum security thresholds, lattice-based cryptography, and threat mitigation paradigms.',
      },
      {
        time: '12:00 PM – 01:00 PM',
        title: 'Session X: Quantum Key Distribution and Protocols',
        speaker: 'Dr. Tapan Kumar Jain',
        role: 'Associate Professor & HOD (ECE), IIIT Nagpur',
        type: 'session',
        domain: 'crypto',
        color: '#059669',
        tagText: 'Session X',
        details: 'Protocols such as BB84, decoy state distribution, entanglement-based systems, and physical layer security setup.',
      },
      {
        time: '01:00 PM',
        title: 'Valedictory Session, Certificate Distribution & Concluding Lunch',
        type: 'event',
        domain: 'general',
        color: '#D97706',
        tagText: 'Valedictory',
        details: 'Feedback assembly, certificates distribution, and vote of thanks concluding the 3-day technical schedule.',
      },
    ],
  };

  const xOffset = activeDay === 1 ? '0%' : activeDay === 2 ? '-33.333%' : '-66.666%';

  return (
    // Outer section wrapper with modern tighter vertical padding
    <section id="schedule" className="scroll-mt-24 py-12 md:py-16 px-4 bg-[#F8FAFC] border-b border-slate-200/60 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col items-stretch">
        
        {/* Section Header */}
        <div className="text-center space-y-1 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            Timeline
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] text-center mb-2">
            Program Schedule
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            October 29 – 31, 2026 | SCOET CSE Department
          </p>
        </div>

        {/* Day Switcher Tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-200/70 rounded-full max-w-md mx-auto w-full shadow-inner">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id as 1 | 2 | 3)}
                className="relative flex-1 py-2.5 rounded-full font-bold text-xs transition-all duration-200 focus:outline-none cursor-pointer"
              >
                {activeDay === day.id && (
                  <motion.div
                    layoutId="activeScheduleTab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
                  />
                )}
                <span
                  className={`relative z-10 block transition-colors duration-200 uppercase tracking-wider ${
                    activeDay === day.id ? 'text-[#1D4ED8]' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {day.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Slider Track Wrapper with vertical padding and overflow-x-hidden, allowing internal overflow-visible */}
        <div className="w-full overflow-x-hidden py-8 md:py-12">
          <motion.div
            animate={{ x: xOffset }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="flex w-[300%] overflow-visible"
          >
            {/* Day 1 */}
            <DayTimeline
              items={scheduleData[1]}
            />

            {/* Day 2 */}
            <DayTimeline
              items={scheduleData[2]}
            />

            {/* Day 3 */}
            <DayTimeline
              items={scheduleData[3]}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
