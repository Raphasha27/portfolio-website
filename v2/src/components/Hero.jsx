import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';
import profileImg from '../assets/koketso_no_wall.png';

const stats = [
  { label: 'Reliability',    val: 100, suffix: '%', icon: 'thumbsup' },
  { label: 'Global Clients', val: 50,  suffix: '+', icon: 'heart'    },
  { label: 'Core Projects',  val: 12,  suffix: '+', icon: 'star'     },
];

// All tech stacks for the scrolling banner
const bannerTechs = [
  { name: "React",           id: "react"      },
  { name: "Python",          id: "python"     },
  { name: "Node.js",         id: "node"       },
  { name: "PostgreSQL",      id: "postgres"   },
  { name: "TypeScript",      id: "typescript" },
  { name: "Next.js",         id: "nextjs"     },
  { name: "Docker",          id: "docker"     },
  { name: "MongoDB",         id: "mongodb"    },
  { name: "Tailwind CSS",    id: "tailwindcss"},
  { name: "GitHub Actions",  id: "github"     },
  { name: "LangChain",       id: "langchain"  },
  { name: "Redis",           id: "redis"      },
];

// Rolling terminal lines for the overlay strip
const TerminalStrip = () => {
  const [line, setLine] = useState("> INITIALIZING TEST_SUITE_V2...");
  useEffect(() => {
    const cmds = [
      "EXEC: verify_encryption_layer()",
      "STATUS: 10.4.0.1 -> RESPONDING",
      "FIX: rebalancing_load... SUCCESS",
      "RUN: optimize_kernel_runtime()",
      "LOG: agent_sync_complete",
      "TEST: api_endpoint_latency < 0.01ms",
    ];
    const interval = setInterval(() => {
      setLine(`> ${cmds[Math.floor(Math.random() * cmds.length)]}`);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={line}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.3 }}
        className="font-mono text-[9px] text-green-400/80"
      >
        {line}
      </motion.span>
    </AnimatePresence>
  );
};

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const increment = to / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <span>{count}</span>;
};

const Hero = () => {
  // Double the array for seamless loop
  const doubled = [...bannerTechs, ...bannerTechs];

  return (
    <div id="home" className="relative min-h-screen pt-12 flex flex-col justify-center overflow-hidden bg-[#050d12]">
      {/* Scanline + glow bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── LEFT: Identity & Mission ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-3 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-[9px] font-bold tracking-[0.3em] uppercase animate-pulse">
                  System: Active
                </span>
                <span className="h-[1px] w-8 bg-white/10" />
                <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase">Protocol 2.2.0</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-none">
                KOKETSO <br />
                <span className="text-green-400 drop-shadow-[0_0_15px_rgba(0,229,160,0.3)]">RAPHASHA</span>
              </h1>
              <div className="flex items-center gap-3 text-base lg:text-lg font-mono text-white/60">
                <span className="text-green-400">&gt;</span>
                <span>Autonomous Solutions Architect & AI Engineer</span>
              </div>
            </div>

            <p className="text-text-dim text-base leading-relaxed max-w-lg font-light">
              Engineering <span className="text-white font-medium">autonomous ecosystems</span> that
              bridge the gap between <span className="text-green-400 font-medium">human intuition</span> and{' '}
              <span className="text-white font-medium">machine intelligence</span>. Optimized for scale and performance.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-6 py-3 bg-green-500 text-black text-sm font-bold rounded-xl hover:bg-green-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,229,160,0.3)]">
                DEPLOY PROJECTS
              </a>
              <a href="#contact" className="px-6 py-3 border border-white/10 hover:border-green-500/50 text-white text-sm font-bold rounded-xl transition-all backdrop-blur-sm">
                INITIALIZE CONTACT
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/5">
              {stats.map((s, i) => (
                <div key={i} className="glass p-2.5 rounded-xl border border-white/5 group hover:border-green-500/30 transition-all">
                  <div className="text-green-400 mb-0.5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border border-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={s.icon} size={12} />
                    </div>
                    <span className="text-lg font-bold tracking-tight"><CountUp to={s.val} />{s.suffix}</span>
                  </div>
                  <div className="text-[8px] text-text-dim uppercase tracking-[0.2em] font-mono">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Full-Bleed Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Floating latency badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 z-30 p-2.5 glass rounded-xl border border-green-500/30 shadow-xl flex items-center gap-2"
            >
              <Icon name="activity" size={14} />
              <span className="text-[8px] font-mono font-bold text-green-400 tracking-tighter">LATENCY: 0.02ms</span>
            </motion.div>

            {/* Profile card — full bleed */}
            <div className="rounded-[32px] border border-green-500/20 shadow-[0_0_80px_rgba(0,229,160,0.12)] relative overflow-hidden aspect-[4/5]">
              {/* Full-bleed photo */}
              <img
                src={profileImg}
                alt="Koketso Raphasha"
                className="w-full h-full object-cover object-top"
              />

              {/* Dark gradient overlay at bottom for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d12] via-[#050d12]/40 to-transparent" />

              {/* Header bar: ENVIRONMENT_MANIFEST */}
              <div className="absolute top-0 left-0 right-0 px-5 py-4 flex justify-between items-center bg-gradient-to-b from-[#050d12]/80 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(0,229,160,0.8)]" />
                  <span className="text-[8px] font-mono text-green-400 uppercase tracking-[0.3em] font-black">ENVIRONMENT_MANIFEST</span>
                </div>
                <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white/20" />)}
                </div>
              </div>

              {/* Bottom overlay: identity + terminal */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5 space-y-3">
                {/* Terminal strip */}
                <div className="px-3 py-2 bg-black/50 backdrop-blur-sm rounded-lg border border-green-500/20 flex items-center gap-2">
                  <span className="text-green-400/50 text-[8px] font-mono">SYS</span>
                  <TerminalStrip />
                </div>

                {/* Identity */}
                <div className="flex items-end justify-between">
                  <div className="space-y-1">
                    <div className="text-xl font-bold text-white tracking-wide drop-shadow-lg">Koketso Raphasha</div>
                    <div className="text-[9px] font-mono text-green-400 uppercase tracking-[0.3em]">System Operator · AI Engineer</div>
                    <div className="text-[8px] text-white/40 font-mono">Pretoria, ZA · UTC+2</div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[8px] font-mono text-green-400 uppercase tracking-widest">Online</span>
                  </div>
                </div>

                {/* System footer */}
                <div className="flex justify-between items-center text-[7px] font-mono text-white/20 uppercase tracking-widest border-t border-white/5 pt-2">
                  <span>Kernel: Hybrid-OS-V2</span>
                  <span>Uptime: 99.98%</span>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-14 left-3 w-4 h-4 border-t border-l border-green-400/30" />
              <div className="absolute top-14 right-3 w-4 h-4 border-t border-r border-green-400/30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── TECH STACK MARQUEE BANNER ── */}
      <div className="mt-16 border-t border-b border-white/5 py-4 overflow-hidden relative bg-white/[0.01]">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050d12] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050d12] to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 w-max items-center"
        >
          {doubled.map((tech, i) => (
            <div key={i} className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity">
                <Icon name={tech.id} size={24} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors font-mono whitespace-nowrap">
                {tech.name}
              </span>
              <div className="w-1 h-1 rounded-full bg-green-500/30 ml-4" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
