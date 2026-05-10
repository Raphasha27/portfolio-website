import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const roles = [
  { num: "01", icon: "layout", title: "AI Systems Architect", project: "Sovereign-AI-Nexus", bgPrompt: "abstract-futuristic-systems-architecture-blueprints-dark-green-glow" },
  { num: "02", icon: "bot", title: "AI Agent Orchestrator", project: "Sovereign-AI-Nexus-v2", bgPrompt: "abstract-ai-agents-neural-network-nodes-dark-green-glow" },
  { num: "03", icon: "activity", title: "AI Product Builder", project: "NoShowIQ", bgPrompt: "abstract-futuristic-product-wireframe-hologram-dark-green-glow" },
  { num: "04", icon: "refreshCw", title: "AI Automation Strategist", project: "Kirov Connect", bgPrompt: "abstract-futuristic-automation-gears-dark-green-glow" },
  { num: "05", icon: "zap", title: "AI Infrastructure Engineer", project: "FlowSentinel", bgPrompt: "abstract-server-racks-data-center-dark-green-glow" },
  { num: "06", icon: "target", title: "AI Reliability Engineer", project: "SeatLock", bgPrompt: "abstract-high-tech-radar-stability-dark-green-glow" },
  { num: "07", icon: "scale", title: "AI Governance Specialist", project: "CyberShield", bgPrompt: "abstract-cyber-digital-scales-governance-dark-green-glow" },
  { num: "08", icon: "shield", title: "AI Security Specialist", project: "CyberShield SOC", bgPrompt: "abstract-cyber-security-digital-shield-dark-green-glow" },
  { num: "09", icon: "bookOpen", title: "AI Solutions Engineer", project: "EduStream-Pro-ICT", bgPrompt: "abstract-digital-code-library-education-dark-green-glow" }
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
            {/* Thematic AI Background Overlay */}
            <div className="absolute inset-0 opacity-[0.25] group-hover:opacity-[0.4] transition-opacity duration-300 pointer-events-none mix-blend-screen">
              <img src={`https://image.pollinations.ai/prompt/${role.bgPrompt}?width=400&height=400&nologo=true`} alt={role.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#050d12]/80 via-[#050d12]/60 to-[#050d12]/90 group-hover:to-[#050d12]/40 pointer-events-none transition-all duration-300" />
            
            <div className="absolute top-2 left-2 text-[7px] font-mono text-green-500/60 group-hover:text-green-400 transition-colors z-20 drop-shadow-md">
              {role.num}
            </div>

            <div className="relative z-10 flex flex-col items-center mt-2">
              <div className="text-text-dim group-hover:text-green-400 mb-3 group-hover:scale-125 transition-all duration-300 drop-shadow-[0_0_5px_rgba(0,229,160,0)] group-hover:drop-shadow-[0_0_8px_rgba(0,229,160,0.5)]">
                <Icon name={role.icon} size={20} />
              </div>
              <div className="text-[9px] font-bold leading-tight group-hover:text-white transition-colors drop-shadow-md">{role.title}</div>
              <div className="text-[7px] text-green-400/80 mt-1 truncate w-full transition-colors drop-shadow-md">{role.project}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;
