import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SpeakersSection } from './components/SpeakersSection';
import { ScheduleSection } from './components/ScheduleSection';
import { VenueSection } from './components/VenueSection';
import { CommitteeSection } from './components/CommitteeSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const revealProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  };

  return (
    <div className="min-h-screen bg-canvas text-navy flex flex-col pt-16">
      {/* Fixed Header Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <motion.div {...revealProps}>
          <HeroSection />
        </motion.div>

        <motion.div {...revealProps}>
          <AboutSection />
        </motion.div>

        <motion.div {...revealProps}>
          <SpeakersSection />
        </motion.div>

        <motion.div {...revealProps}>
          <ScheduleSection />
        </motion.div>

        <motion.div {...revealProps}>
          <VenueSection />
        </motion.div>

        <motion.div {...revealProps}>
          <CommitteeSection />
        </motion.div>

        <motion.div {...revealProps}>
          <RegistrationSection />
        </motion.div>
      </main>

      {/* Deep Slate Navy Footer */}
      <Footer />
    </div>
  );
};

export default App;
