import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

// Only projects with passing CI status
const passingProjects = [
  { name: "EskomSense AI", status: "passing", repo: "EskomSense-AI" },
  { name: "Townships Market AI", status: "passing", repo: "Townships-Market-AI" },
  { name: "YouthCode ZA", status: "passing", repo: "YouthCode-ZA" },
  { name: "SA Language AI", status: "passing", repo: "SA-Language-AI" },
  { name: "WaterWatch SA", status: "passing", repo: "WaterWatch-SA" },
  { name: "Mzansi AgriAI", status: "passing", repo: "Mzansi-AgriAI" },
  { name: "AI Business Engine", status: "passing", repo: "AI-Business-Engine" },
  { name: "Network Port Scanner", status: "passing", repo: "Network-Port-Scanner" },
  { name: "Password Analyzer", status: "passing", repo: "Password-Analyzer" },
  { name: "Password Hasher", status: "passing", repo: "Password-Hasher" },
  { name: "Suspicious URL Checker", status: "passing", repo: "Suspicious-URL-Checker" },
  { name: "Phishing Awareness Game", status: "passing", repo: "Phishing-Awareness-Game" },
  { name: "DDoS Detection Simulator", status: "passing", repo: "DDOS-Detection-Simulator" },
  { name: "Insider Threat Detector", status: "passing", repo: "Insider-Threat-Detector" },
];

const CIStatus = () => {
  return (
    <div className="glass p-6 sm:p-8 lg:p-10 flex flex-col border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden rounded-2xl sm:rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-[0.3em] uppercase font-mono text-white">
              CI Status <span className="text-green-400">Dashboard</span>
            </h2>
          </div>
          <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
            All Systems Operational · {passingProjects.length} Projects Passing
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 relative z-10">
        {passingProjects.map((project, i) => (
          <motion.a
            key={i}
            href={`https://github.com/Raphasha27/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="glass p-4 rounded-xl border border-white/5 hover:border-green-500/30 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors">
                <Icon name="check" size={16} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">
                  {project.name}
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[9px] text-green-400 font-mono uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
            <Icon name="externallink" size={14} className="text-white/30 group-hover:text-green-400 transition-colors" />
          </motion.a>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/30 relative z-10">
        <span>Last checked: {new Date().toLocaleTimeString()}</span>
        <span>Build system: GitHub Actions</span>
      </div>
    </div>
  );
};

export default CIStatus;
