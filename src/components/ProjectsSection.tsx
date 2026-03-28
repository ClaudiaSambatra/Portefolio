import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, BookOpen, Star, TrendingUp, Layout } from 'lucide-react';
import { GlassCard } from './GlassCard';

const projects = [
  {
    id: 1,
    title: 'Gestion des Étudiants',
    description:
      'Application complète pour la gestion administrative des étudiants, incluant inscriptions, notes et emplois du temps.',
    tags: ['React', 'Node.js', 'MySQL'],
    icon: <BookOpen size={36} className="text-accent-purple" />,
    type: 'Projet académique',
    year: '2024',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Visa Reports (PFE)',
    description:
      "Projet de Fin d'Études : Plateforme de reporting et d'analyse pour les demandes de visa.",
    tags: ['Full-Stack', 'Analytics', 'MySQL'],
    icon: <Star size={36} className="text-accent-purple" />,
    type: 'Projet académique',
    year: '2025',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Portfolio Personnel',
    description:
      'Site vitrine moderne et animé pour présenter mon parcours et mes compétences.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    icon: <Layout size={36} className="text-accent-purple" />,
    type: 'Projet personnel',
    year: '2025',
    link: '#',
    github: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Projets <span className="text-accent-cyan">Réalisés</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full mb-4" />
          <p className="text-gray-700 max-w-2xl text-base md:text-lg font-sans">
            Une sélection de mes travaux académiques et personnels,<br/>
            démontrant mes compétences en développement Full-Stack.
          </p>
        </motion.div>

        {/* Grille 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.75 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                x: 8,
                transition: { duration: 0.25, ease: 'easeOut' }
              }}
            >
              <GlassCard
                className="p-6 flex flex-col gap-4 h-full group"
                glowColor={i % 2 === 0 ? 'cyan' : 'cyan'}
                hoverEffect={true}
              >
                {/* Icône */}
                <div>{project.icon}</div>

                {/* Titre */}
                <h3 className="font-display font-bold text-gray-900 text-xl md:text-2xl leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Badges tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-black/10 bg-black/5 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-black/5">
                  <span className="text-xs text-gray-500 flex items-center gap-1.5">
                    <TrendingUp size={13} className="text-accent-cyan" />
                    {project.type} · {project.year}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}