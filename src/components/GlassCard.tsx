import React from 'react';
import { motion } from 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';
interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple';
  hoverEffect?: boolean;
}
export function GlassCard({
  children,
  className = '',
  glowColor = 'cyan',
  hoverEffect = false,
  ...props
}: GlassCardProps) {
  const glowClass =
    glowColor === 'cyan' ?
      'hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] hover:border-accent-cyan/50 hover:ring-accent-cyan/30' :
      'hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] hover:border-accent-purple/50 hover:ring-accent-purple/30';
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl 
        bg-white/80 backdrop-blur-2xl 
        border border-white/40 shadow-xl
        ring-1 ring-white/60
        ${glowColor === 'cyan' ? 'shadow-accent-cyan/10' : 'shadow-accent-purple/10'} 
        transition-all duration-500
        ${hoverEffect ? glowClass : ''}
        ${hoverEffect ? 'hover:-translate-y-1' : ''}
        ${className}
      `}
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5
      }}
      {...props}>

      {/* Inner gradient sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>);

}