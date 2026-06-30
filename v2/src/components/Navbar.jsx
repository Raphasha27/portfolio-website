import React, { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const Navbar = ({ setCmdOpen }) => {
  const [copied, setCopied] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const navItems = ['home', 'about', 'experience', 'skills', 'projects'];

  return (
    <nav className="fixed top-0 w-full z-50 h-[var(--nav-h)] flex items-center border-b border-white/5 bg-[#050d12]/90 backdrop-blur-xl">
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#00FF9C] origin-left"
        style={{ scaleX }}
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex justify-between items-center">

        {/* ── Logo + Health Badge ── */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            {/* Code bracket icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="#00FF9C" strokeWidth="2.2" className="w-5 h-5 shrink-0">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span className="text-[#00FF9C] text-[13px] sm:text-[15px] font-bold tracking-tight whitespace-nowrap">
              Koketso_Raphasha_Portfolio_Dev
            </span>
          </button>

          {/* Health badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a1a12] border border-[#00FF9C]/20 text-[9px] font-bold uppercase tracking-[0.15em] text-white/70 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] shadow-[0_0_6px_rgba(0,255,156,0.8)] shrink-0" />
            System Health: Optimal
          </div>
        </div>

        {/* ── Desktop nav links ── */}
        <div className="hidden md:flex gap-7 text-[13px] font-semibold text-white/70 capitalize">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="hover:text-white transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* ── Actions ── */}
        <div className="flex items-center gap-3">
          {/* Share */}
          <button
            onClick={handleShare}
            title="Share"
            aria-label="Share this portfolio"
            className="w-9 h-9 hidden sm:flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-white/50 hover:text-white hover:border-white/20 transition-all"
          >
            <Icon name={copied ? 'check' : 'share'} size={15} />
          </button>

          {/* Search / Command Palette */}
          <button
            onClick={() => setCmdOpen && setCmdOpen(true)}
            aria-label="Open command palette"
            className="hidden sm:flex items-center justify-between gap-3 px-3 py-2 w-44 bg-[#0a0f18] border border-white/8 rounded-xl text-[12px] text-white/40 hover:border-white/20 hover:text-white/60 transition-all"
          >
            <div className="flex items-center gap-2">
              <Icon name="search" size={13} />
              <span>Search...</span>
            </div>
            <kbd className="px-1.5 py-0.5 bg-white/8 rounded text-[10px] font-mono text-white/30">⌘K</kbd>
          </button>

          {/* Hire Me CTA */}
          <button
            onClick={() => scrollTo('contact')}
            aria-label="Scroll to contact section"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#001a11] border border-[#00FF9C]/30 text-[#00FF9C] text-[13px] font-bold rounded-xl hover:bg-[#002d1e] hover:border-[#00FF9C]/60 transition-all"
          >
            Hire Me
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#00FF9C] rounded-lg bg-white/5"
            aria-label="Toggle menu"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-[100px] bg-[#050d12] border-l border-white/5 md:hidden flex flex-col items-center py-5 px-1 gap-4"
            >
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-9 h-9 flex items-center justify-center text-[#00FF9C]">
                <Icon name="close" size={20} />
              </button>
              <div className="flex flex-col items-center gap-4 flex-1 mt-2">
                {[
                  { id: 'home', label: 'HOME', icon: 'home' },
                  { id: 'about', label: 'ABOUT', icon: 'user' },
                  { id: 'skills', label: 'SKILLS', icon: 'code' },
                  { id: 'projects', label: 'PROJECTS', icon: 'package' },
                  { id: 'experience', label: 'EXP', icon: 'briefcase' },
                  { id: 'contact', label: 'CONTACT', icon: 'mail' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="flex flex-col items-center gap-1.5 text-white/40 hover:text-[#00FF9C] transition-colors group"
                  >
                    <Icon name={item.icon} size={20} />
                    <span className="text-[7px] font-bold tracking-wider">{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
