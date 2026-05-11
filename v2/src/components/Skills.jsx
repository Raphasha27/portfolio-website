import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const skillGroups = [
  {
    title: "FRONT END",
    id: "frontend",
    iconName: "cpu",
    color: "blue",
    skills: [
      { name: "React & Vite", pct: 95 },
      { name: "Tailwind CSS", pct: 92 },
      { name: "Next.js", pct: 88 },
      { name: "Framer Motion", pct: 90 }
    ]
  },
  {
    title: "BACK END",
    id: "backend",
    iconName: "cloud",
    color: "green",
    skills: [
      { name: "Node.js & Express", pct: 90 },
      { name: "Python & FastAPI", pct: 92 },
      { name: "LangChain (AI)", pct: 85 },
      { name: "RESTful APIs", pct: 94 }
    ]
  },
  {
    title: "DATABASE",
    id: "database",
    iconName: "database",
    color: "purple",
    skills: [
      { name: "PostgreSQL", pct: 94 },
      { name: "MongoDB", pct: 88 },
      { name: "Redis", pct: 85 },
      { name: "Vector DBs", pct: 82 }
    ]
  },
  {
    title: "INFRASTRUCTURE",
    id: "infrastructure",
    iconName: "terminal", // Using terminal as an approximation for rack
    color: "cyan",
    skills: [
      { name: "Vercel & Netlify", pct: 96 },
      { name: "Docker & Linux", pct: 85 },
      { name: "GitHub Actions", pct: 90 },
      { name: "Nginx & Server", pct: 82 }
    ]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="glass p-10 h-full flex flex-col border border-white/5 relative overflow-hidden bg-[#050d12]">
      {/* Background patterns could go here */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,160,0.05),_transparent_70%)]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1 items-start">
        {skillGroups.map((group, i) => (
          <div key={i} className="space-y-8 group">
            {/* Header with Glowing Icon */}
            <div className="flex items-center gap-6">
              <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center relative transition-all duration-500
                ${group.color === 'blue' ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 
                  group.color === 'green' ? 'border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]' :
                  group.color === 'purple' ? 'border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]' :
                  'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]'}
                group-hover:scale-110`}>
                <div className={`absolute inset-0 rounded-2xl blur-md opacity-40 
                  ${group.color === 'blue' ? 'bg-blue-500' : 
                    group.color === 'green' ? 'bg-green-500' :
                    group.color === 'purple' ? 'bg-purple-500' :
                    'bg-cyan-500'}`} />
                <Icon name={group.iconName} size={32} className={`relative z-10 
                  ${group.color === 'blue' ? 'text-blue-400' : 
                    group.color === 'green' ? 'text-green-400' :
                    group.color === 'purple' ? 'text-purple-400' :
                    'text-cyan-400'}`} />
              </div>
              <h3 className="text-2xl font-bold tracking-[0.2em] uppercase font-mono">{group.title}</h3>
            </div>

            {/* Skill Bars */}
            <div className="space-y-6 pl-2">
              {group.skills.map((s, j) => (
                <div key={j} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-white/90 font-mono tracking-tight">{s.name}</span>
                    <span className={`text-sm font-bold font-mono 
                      ${group.color === 'blue' ? 'text-blue-400' : 
                        group.color === 'green' ? 'text-green-400' :
                        group.color === 'purple' ? 'text-purple-400' :
                        'text-cyan-400'}`}>{s.pct}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.2 + j * 0.1 }}
                      className={`h-full relative z-10 rounded-full
                        ${group.color === 'blue' ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 
                          group.color === 'green' ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' :
                          group.color === 'purple' ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]' :
                          'bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Arsenal Footer */}
      <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-700">
        {[
          "react", "python", "typescript", "node", "nextjs", 
          "tailwindcss", "postgres", "mongodb", "docker", "vercel"
        ].map((id, i) => (
          <div key={i} className="w-8 h-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
            <Icon name={id} size={24} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
