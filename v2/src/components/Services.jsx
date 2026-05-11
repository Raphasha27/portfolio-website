import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';
import experienceBg from '../assets/experience-bg.png';

const services = [
  { title: "Mobile App Development", desc: "High-performance mobile apps with beautiful UI and smooth UX.", icon: "smartphone" },
  { title: "UI/UX Design", desc: "Designing intuitive and engaging user experiences that convert.", icon: "layout" },
  { title: "Autonomous Systems", desc: "Building intelligent systems with automation and smart infrastructure.", icon: "cpu" },
  { title: "Cloud & DevOps", desc: "Scalable cloud solutions with CI/CD and modern dev practices.", icon: "cloud" }
];

const Services = () => {
  return (
    <div id="services" className="space-y-12">
      <div className="text-center space-y-4">
        <div className="text-green-400 font-bold text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-2">
          <div className="w-8 h-[1px] bg-green-500/50"></div>
          — WHAT I DO —
          <div className="w-8 h-[1px] bg-green-500/50"></div>
        </div>
        <h2 className="text-4xl font-bold glow-text">Services & <span className="text-green-400">Expertise</span></h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Subtle grid background for the entire section */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-bg to-bg pointer-events-none -z-10"></div>
        
        {services.map((service, i) => (
          <div key={i} className="glass p-8 text-center group hover:border-green-500/50 transition-all duration-500 rounded-[32px] relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(0,229,160,0.15)] hover:-translate-y-2">
            {/* Subtle Background Image Overlay */}
            <div className="absolute inset-0 opacity-[0.1] group-hover:opacity-[0.3] transition-opacity duration-500 pointer-events-none mix-blend-overlay">
              <img src={experienceBg} alt="" className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-700" />
            </div>
            
            {/* Animated Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/0 via-green-500/0 to-green-500/5 group-hover:to-green-500/20 pointer-events-none transition-all duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-20 rounded-full bg-[#0a161d] flex items-center justify-center text-green-400 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(0,229,160,0.1)] border border-green-500/20 group-hover:border-green-400 relative">
                {/* Ping animation behind icon */}
                <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:animate-ping pointer-events-none"></div>
                <div className="relative z-10">
                   <Icon name={service.icon} size={28} />
                </div>
                {/* Outer Corner Accents */}
                <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-green-400/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-green-400/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <h3 className="font-bold text-lg mb-3 group-hover:text-green-400 transition-colors duration-300">{service.title}</h3>
              <p className="text-[11px] text-text-dim leading-relaxed group-hover:text-text/80 transition-colors duration-300">{service.desc}</p>
            </div>
            
            {/* Corner Decorative Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-green-500/30 group-hover:border-green-400 transition-colors opacity-0 group-hover:opacity-100 duration-500"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-green-500/30 group-hover:border-green-400 transition-colors opacity-0 group-hover:opacity-100 duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
