import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Layout,
  Server,
  GitBranch,
} from 'lucide-react';
import { GlassCard } from './GlassCard';

const skillCategories = [
  {
    label: 'Langages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
    accent: 'cyan',
  },
  {
    label: 'Frontend',
    icon: Layout,
    skills: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    accent: 'purple',
  },
  {
    label: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'Django', 'FastAPI', 'REST API'],
    accent: 'cyan',
  },
  {
    label: 'Bases de données',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'Firebase'],
    accent: 'purple',
  },
  {
    label: 'Outils & DevOps',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Postman', 'Thunder Client'],
    accent: 'cyan',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Compétences <span className="text-accent-purple">Techniques</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full mb-4 mx-auto" />
          <p className="text-gray-700 max-w-2xl text-base md:text-lg mx-auto font-sans">
            Ma stack technique pour concevoir des solutions web et mobiles robustes et modernes.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            const isCyan = cat.accent === 'cyan';
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.04,
                  x: 6,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                className="h-full"
              >
                <GlassCard
                  className="p-0 flex flex-col h-full overflow-hidden"
                  glowColor={cat.accent as 'cyan' | 'purple'}
                  hoverEffect={true}
                >
                  {/* Top accent bar */}
                  <div
                    className={`h-1 w-full ${
                      isCyan
                        ? 'bg-gradient-to-r from-accent-cyan/80 to-accent-cyan/20'
                        : 'bg-gradient-to-r from-accent-purple/80 to-accent-purple/20'
                    }`}
                  />

                  <div className="p-5 flex flex-col gap-4 flex-1">
                    {/* Icon + count row */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isCyan
                            ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20'
                            : 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20'
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <span className="text-[11px] font-semibold text-gray-400 tabular-nums">
                        {cat.skills.length} skills
                      </span>
                    </div>

                    {/* Category title */}
                    <h3 className="font-display font-bold text-gray-900 text-xl md:text-2xl leading-tight">
                      {cat.label}
                    </h3>

                    {/* Divider */}
                    <div className="h-px bg-black/5" />

                    {/* Skill badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 text-[11px] font-medium rounded-md border transition-all duration-200 cursor-default
                            border-black/8 bg-black/[0.03] text-gray-600
                            hover:bg-white hover:shadow-sm
                            ${isCyan
                              ? 'hover:border-accent-cyan/40 hover:text-accent-cyan'
                              : 'hover:border-accent-purple/40 hover:text-accent-purple'
                            }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}