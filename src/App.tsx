import React from 'react';
import { motion } from 'framer-motion';
import { StarField } from './components/StarField';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15
    }
  }
};

export function App() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="min-h-screen bg-white text-slate-900 selection:bg-cyan-200"
    >
      <StarField />
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-8 text-center text-slate-600 text-sm border-t border-slate-200">
        © {new Date().getFullYear()} Claudia SAMBATRINIAINA — Tous droits réservés.
      </footer>
    </motion.div>
  );
}