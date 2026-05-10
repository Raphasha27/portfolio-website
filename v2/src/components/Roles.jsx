import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const roles = [
  { num: "01", icon: "layout", title: "AI Systems Architect", project: "Sovereign-AI-Nexus" },
  { num: "02", icon: "bot", title: "AI Agent Orchestrator", project: "Sovereign-AI-Nexus-v2" },
  { num: "03", icon: "activity", title: "AI Product Builder", project: "NoShowIQ" },
  { num: "04", icon: "refreshCw", title: "AI Automation Strategist", project: "Kirov Connect" },
  { num: "05", icon: "zap", title: "AI Infrastructure Engineer", project: "FlowSentinel" },
  { num: "06", icon: "target", title: "AI Reliability Engineer", project: "SeatLock" },
  { num: "07", icon: "scale", title: "AI Governance Specialist", project: "CyberShield" },
  { num: "08", icon: "shield", title: "AI Security Specialist", project: "CyberShield SOC" },
  { num: "09", icon: "bookOpen", title: "AI Solutions Engineer", project: "EduStream-Pro-ICT" }
];

const Roles = () => {
  return (
    <div id="roles" className="glass p-6 h-full flex flex-col border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold glow-text">The 9 <span className="text-green-400">AI Roles</span></h2>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
          <div className="text-[8px] text-green-400 font-bold uppercase tracking-[0.2em]">Engineering Excellence</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 flex-1 overflow-y-auto pr-1 custom-scroll">
        {roles.map((role, i) => (
          <div key={i} className="glass p-4 border-white/5 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,229,160,0.2)] transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden rounded-xl">
            {/* Subtle Tech Background */}
            <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-300 pointer-events-none mix-blend-overlay">
              <img src="/src/assets/experience-bg.png" alt="" className="w-full h-full object-cover scale-150 rotate-12" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/0 to-bg/80 group-hover:to-green-900/20 pointer-events-none transition-all duration-300" />
            
            <div className="absolute top-2 left-2 text-[7px] font-mono text-green-500/40 group-hover:text-green-400 transition-colors">
              {role.num}
            </div>

            <div className="relative z-10 flex flex-col items-center mt-2">
              <div className="text-text-dim group-hover:text-green-400 mb-3 group-hover:scale-125 transition-all duration-300 drop-shadow-[0_0_5px_rgba(0,229,160,0)] group-hover:drop-shadow-[0_0_8px_rgba(0,229,160,0.5)]">
                <Icon name={role.icon} size={20} />
              </div>
              <div className="text-[9px] font-bold leading-tight group-hover:text-white transition-colors">{role.title}</div>
              <div className="text-[7px] text-green-500/60 mt-1 truncate w-full group-hover:text-green-400/80 transition-colors">{role.project}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;
