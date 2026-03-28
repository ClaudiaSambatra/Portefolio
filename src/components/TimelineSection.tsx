import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code } from 'lucide-react';
import { GlassCard } from './GlassCard';

const timelineData = [
  {
    year: '2025 - Présent',
    title: 'Master Professionnel en Informatique',
    company: "École Nationale d'Informatique (ENI) - Fianarantsoa, Madagascar",
    description: "Poursuite d'un Master en Informatique pour approfondir mes compétences.",
    icon: GraduationCap,
    side: 'left'
  },
  {
    year: '2021 - 2024',
    title: 'Licence Professionnelle en Informatique',
    company: "École Nationale d'Informatique (ENI) - Fianarantsoa, Madagascar",
    description: "Obtention d'une licence en Informatique avec mention Bien.",
    icon: GraduationCap,
    side: 'right'
  },
  {
    year: '2019 - 2020',
    title: 'Baccalauréat Scientifique, série D',
    company: 'Institution Père Barré (IPB) - Toliara, Madagascar',
    description: 'Obtention du baccalauréat avec mention Bien.',
    icon: Code,
    side: 'left'
  }
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Mon <span className="text-accent-purple">Parcours</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg font-sans">
            Formation académique et expériences clés.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-cyan to-transparent md:-translate-x-1/2 ml-8 md:ml-0" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: item.side === 'left' ? -60 : 60,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                className={`relative flex flex-col md:flex-row gap-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-16 h-16 flex items-center justify-center md:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.3,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="w-4 h-4 rounded-full bg-accent-cyan shadow-[0_0_15px_rgba(0,212,255,0.5)] ring-4 ring-white"
                  />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${item.side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                  <GlassCard
                    className="p-6 relative group"
                    hoverEffect={true}
                    glowColor="cyan"
                  >
                    <div className="flex items-center gap-3 mb-2 text-accent-cyan text-sm font-medium">
                      <item.icon size={16} />
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 font-sans">{item.company}</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}