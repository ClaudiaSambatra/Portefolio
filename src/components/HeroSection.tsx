import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Facebook } from 'lucide-react';
import { GlassCard } from './GlassCard';
import photo from "../moi.jpg";
export function HeroSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1, 
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[100px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[100px] animate-pulse-glow"
        style={{
          animationDelay: '1.5s'
        }} />


      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left z-10">


<motion.h1
  variants={itemVariants}
  className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-accent-cyan to-accent-purple flex flex-wrap justify-center lg:justify-start gap-x-4">
    {["DÉVELOPPEUSE", "FULL-STACK"].map((word, wi) => (
      <span key={wi} className="overflow-hidden flex">
        {[...word].map((char, ci) => (
          <motion.span
            key={ci}
            initial={{ y: 40, opacity: 0, rotate: 6 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{
              delay: 0.3 + (wi * 12 + ci) * 0.05,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="inline-block">
            {char}
          </motion.span>
        ))}
      </span>
    ))}
  </span>
</motion.h1>
          



          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">

            Passionnée par la création
            d'applications web et mobiles modernes, performantes et intuitives.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">

            <a
              href="#projects"
              className="relative px-8 py-3 rounded-full bg-accent-cyan text-white font-sans font-bold overflow-hidden group transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)]">
              <span className="relative z-10">Voir mes projets</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-accent-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all bg-white/30 font-sans font-bold">

              Me contacter
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-gray-400">
                          <a
              href="https://www.linkedin.com/in/claudia-sambatriniaina"
              className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform duration-200">

              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/ClaudiaSambatra"
              className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform duration-200">

              <Github size={24} />
            </a>

            <a
              href="https://www.facebook.com/claudiasambatriniaina/"
              className="text-gray-600 hover:text-gray-900 transition-colors hover:scale-110 transform duration-200">

              <Facebook size={24} />
            </a>
          </motion.div>
        </motion.div>

      {/* Visual Element */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="relative z-10 flex justify-center">

  <div className="relative w-48 h-48 md:w-64 md:h-64">

    {/* Profile Image Container */}
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-full rounded-full overflow-hidden border-4 border-white/60 shadow-[0_20px_60px_rgba(0,212,255,0.25)]">
      <img
        src={photo}
        alt=""
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
    </motion.div>

    {/* Glow derrière la photo */}
    <div className="absolute inset-0 rounded-full bg-accent-cyan/10 blur-2xl -z-10" />

  </div>
</motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500">

        <ArrowDown size={24} />
      </motion.div>
    </section>);

}