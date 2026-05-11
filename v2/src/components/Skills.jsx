import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const skillGroups = [
  {
    title: "FRONT END",
    id: "frontend",
    desc: "Immersive UI/UX",
    iconName: "palette",
    skills: [
      { name: "React & Vite", pct: 95, icon: "react" },
      { name: "Tailwind CSS", pct: 92, icon: "tailwindcss" },
      { name: "Next.js", pct: 88, icon: "nextjs" },
      { name: "Framer Motion", pct: 90, icon: "framer" }
    ]
  },
  {
    title: "BACK END",
    id: "backend",
    desc: "Scalable Logic",
    iconName: "gear",
    skills: [
      { name: "Node & Express", pct: 90, icon: "node" },
      { name: "Python & FastAPI", pct: 92, icon: "python" },
      { name: "LangChain (AI)", pct: 85, icon: "langchain" },
      { name: "RESTful APIs", pct: 94, icon: "code" }
    ]
  },
  {
    title: "DATABASE",
    id: "database",
    desc: "Data Persistence",
    iconName: "cabinet",
    skills: [
      { name: "PostgreSQL", pct: 94, icon: "postgres" },
      { name: "MongoDB", pct: 88, icon: "mongodb" },
      { name: "Redis", pct: 85, icon: "redis" },
      { name: "Vector DBs", pct: 82, icon: "database" }
    ]
  },
  {
    title: "INFRA",
    id: "infrastructure",
    desc: "Cloud Systems",
    iconName: "zap",
    skills: [
      { name: "Vercel / Netlify", pct: 96, icon: "vercel" },
      { name: "Docker & Linux", pct: 85, icon: "docker" },
      { name: "GitHub Actions", pct: 90, icon: "github" },
      { name: "Nginx Server", pct: 82, icon: "cloud" }
    ]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="relative py-10">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter uppercase">
            Tech <span className="text-green-400">Arsenals</span>
          </h2>
          <p className="text-[10px] text-white/40 font-mono tracking-[0.3em] uppercase mt-2">Core Technical Proficiency</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-[9px] font-bold text-green-400 uppercase tracking-widest">Operational: 100%</span>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-5 rounded-2xl border border-white/5 relative group hover:border-green-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Background Glow Overlay */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 blur-[40px] group-hover:bg-green-500/10 transition-all pointer-events-none" />
            
            {/* Group Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                <Icon name={group.iconName} size={24} />
              </div>
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">{group.title}</h3>
                <div className="text-[8px] text-green-400/60 font-mono uppercase tracking-widest mt-0.5">{group.desc}</div>
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-6">
              {group.skills.map((s, j) => (
                <div key={j} className="space-y-2">
                  <div className="flex justify-between items-center px-0.5">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                        <Icon name={s.icon} size={14} />
                      </div>
                      <span className="text-[10px] font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-wider">{s.name}</span>
                    </div>
                    <span className="text-[9px] font-mono text-green-400/50 group-hover:text-green-400">{s.pct}%</span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="h-1 w-full bg-white/5 rounded-full relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + i * 0.1 + j * 0.05 }}
                      className="h-full bg-gradient-to-r from-green-600 to-green-400 relative"
                    >
                      {/* Animated Glow Tip */}
                      <motion.div 
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute right-0 top-0 bottom-0 w-4 bg-green-200 blur-[4px] opacity-60"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Corner Accents */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10 group-hover:border-green-500/40 transition-colors" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10 group-hover:border-green-500/40 transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Values Footer Bar */}
      <div className="mt-12 p-6 glass rounded-2xl border border-white/5 flex justify-center items-center gap-12 lg:gap-24 relative overflow-hidden">
        {/* Subtle background circuit line */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2" />
        
        {[
          { id: "scale", label: "ETHICAL AI" },
          { id: "shield", label: "SECURE ARCH" },
          { id: "bookopen", label: "SYSTEM LOGIC" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3 group cursor-help relative z-10">
            <div className="text-green-400/40 group-hover:text-green-400 group-hover:scale-110 transition-all duration-500">
              <Icon name={item.id} size={24} />
            </div>
            <span className="text-[8px] font-mono text-white/20 tracking-[0.4em] uppercase group-hover:text-green-400 transition-colors">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
