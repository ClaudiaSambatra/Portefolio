import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Formation', href: '#timeline' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-display font-bold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent hover:to-accent-cyan transition-all"
        >
          Claudia SAMBATRINIAINA<span className="text-accent-cyan">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-base font-sans font-medium text-gray-700 hover:text-accent-cyan transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Desktop CV Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/CV_Claudia_SAMBATRINIAINA.pdf"
            download
            className="px-5 py-2.5 rounded-full border border-accent-purple/30 text-accent-purple hover:bg-accent-purple/10 transition-colors backdrop-blur-sm flex items-center gap-2 text-base font-sans font-bold"
          >
            <Download size={18} /> CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/10 p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-lg font-sans font-medium text-gray-700 hover:text-accent-cyan text-left"
              >
                {link.name}
              </button>
            ))}

            <a
              href="/CV_Claudia_SAMBATRINIAINA.pdf"
              download
              className="px-4 py-2 w-fit rounded-full border border-accent-purple/30 text-accent-purple hover:bg-accent-purple/10 transition-colors backdrop-blur-sm flex items-center gap-2 text-sm font-sans font-bold"
            >
              <Download size={16} /> CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}