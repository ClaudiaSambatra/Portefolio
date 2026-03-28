import React from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Linkedin,
  Github,
  Facebook,
} from 'lucide-react';
import { GlassCard } from './GlassCard';

const contactCards = [
  { icon: <MessageCircle size={28} className="text-accent-purple" />, label: 'Whatsapp', value: '+261 34 91 588 64' },
  { icon: <Mail size={28} className="text-accent-purple" />, label: 'Email', value: 'claudiasambatriniaina@gmail.com' },
  { icon: <MapPin size={28} className="text-accent-purple" />, label: 'Localisation', value: 'Fianarantsoa, Madagascar' },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Titre centré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Travaillons{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-purple">
              ensemble
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg font-sans leading-relaxed">
            Ouverte aux opportunités de stage, emploi ou collaboration sur des projets
            intéressants. N'hésitez pas à me laisser un message !
          </p>
        </motion.div>

        {/* 3 cartes info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contactCards.map(({ icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              transition={{
                delay: i * 0.12,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.35)',
                transition: { duration: 0.25, ease: 'easeOut' }
              }}
              className="rounded-2xl"
            >
              <GlassCard
                className="p-6 flex flex-col items-center gap-3 text-center h-full"
                glowColor="purple"
                hoverEffect={false}
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                    {icon}
                  </div>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{value}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          className="flex justify-center gap-4 mt-8"
        >
          {[
            { href: 'https://www.linkedin.com/in/claudia-sambatriniaina', icon: <Linkedin size={22} /> },
            { href: 'https://github.com/ClaudiaSambatra', icon: <Github size={22} /> },
            { href: 'https://www.facebook.com/claudiasambatriniaina/', icon: <Facebook size={22} /> },
          ].map(({ href, icon }, i) => (
            <motion.a
              key={i}
              href={href}
              whileHover={{
                scale: 1.15,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
                transition: { duration: 0.2 }
              }}
              className="p-3 rounded-full bg-black/5 hover:text-accent-purple text-gray-600 transition-colors"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}