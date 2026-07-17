import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Icon } from './Icons';

const Navbar = ({ setCmdOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#000814]/80 backdrop-blur-xl h-[var(--nav-h)] flex items-center border-b border-white/5">
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#00FF9C] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex justify-between items-center">
        {/* ── Logo + Health Badge ── */}
        <div className="flex items-center gap-3 lg:gap-4 shrink-0">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#00FF9C" strokeWidth="2.2" className="w-5 h-5 shrink-0">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span className="text-[#00FF9C] text-[13px] sm:text-[15px] font-bold tracking-tight whitespace-nowrap">
              Koketso Raphasha
            </span>
          </button>

          {/* Health badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a1a12] border border-[#00FF9C]/20 text-[9px] font-bold uppercase tracking-[0.15em] text-white/70 shrink-0">
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
              className="hover:text-[#00FF9C] transition-all capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Search / Command Palette */}
          <button
            onClick={() => setCmdOpen && setCmdOpen(true)}
            aria-label="Open command palette"
            className="flex items-center justify-between gap-3 px-3 py-2 w-44 bg-[#0a0f18] border border-white/8 rounded-xl text-[12px] text-white/40 hover:border-white/20 hover:text-white/60 transition-all"
          >
            <Icon name="search" size={14} />
            <kbd className="hidden md:inline bg-white/10 px-1.5 py-0.5 rounded text-[10px]">Ctrl+K</kbd>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
