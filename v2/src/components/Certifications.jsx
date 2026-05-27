import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons'; // Adjust if you have a specific icon for certificates

const certifications = [
  {
    title: "Software Engineering",
    issuer: "Richfield Graduate Institute",
    date: "2024",
    type: "Degree",
    icon: "graduationcap"
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    type: "Certification",
    icon: "cloud"
  },
  {
    title: "AI Practitioner (Intern)",
    issuer: "CAPACITI",
    date: "2024",
    type: "Experience",
    icon: "cpu"
  },
  {
    title: "Full Stack Development",
    issuer: "ALX Africa",
    date: "2023",
    type: "Certification",
    icon: "code"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-16 sm:py-24">
      <div className="flex flex-col gap-12">
        
        {/* Header */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="text-[#00FF9C] font-mono text-sm tracking-wider uppercase">04.</span>
            <div className="h-px bg-white/20 w-12 sm:w-24" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Education & <span className="text-blue-400">Certifications</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed"
          >
            A strong foundation in Software Engineering and continuous upskilling across modern Web and AI ecosystems.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-[#00FF9C]/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Neon Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00FF9C]/10 border border-[#00FF9C]/20 flex items-center justify-center shrink-0 text-[#00FF9C] group-hover:scale-110 transition-transform duration-300">
                  <Icon name={cert.icon} size={24} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest px-2 py-0.5 rounded-full border border-white/10 bg-white/5">
                      {cert.type}
                    </span>
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-dim">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
