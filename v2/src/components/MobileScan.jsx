import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from './Icons';

const MobileScan = () => {
  const portfolioUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(portfolioUrl)}&bgcolor=050d12&color=60a5fa`;

  return (
    <div className="flex flex-col items-center gap-6 p-6 sm:p-8 glass border border-blue-500/20 w-[calc(100%-2rem)] max-w-sm mx-auto text-center rounded-3xl relative overflow-hidden group">
      {/* Decorative Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2 relative z-10">
        <Icon name="smartphone" size={32} />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase tracking-tight">View on Mobile</h3>
        <p className="text-text-dim text-xs sm:text-sm max-w-[240px] mx-auto">Scan this code to experience the autonomous OS on your mobile device.</p>
      </div>

      <div className="relative p-3 sm:p-4 bg-white/5 rounded-2xl border border-white/10 group/qr transition-all duration-500 hover:border-blue-500/30 relative z-10">
        <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover/qr:opacity-100 transition-opacity" />
        <img 
          src={qrCodeUrl} 
          alt="Scan to view on mobile" 
          className="w-28 h-28 sm:w-32 sm:h-32 relative z-10 rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      <div className="flex flex-col items-center gap-3 w-full relative z-10">
        <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/5 px-4 py-2 rounded-full border border-blue-500/10">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          Ready for Mobile Sync
        </div>
        
        <div className="flex flex-col gap-2.5 w-full mt-2">
          <div className="flex items-center gap-3 bg-[#0a0a0a] border border-white/5 px-6 py-3.5 rounded-full group/btn hover:border-green-500/30 transition-all justify-center cursor-pointer active:scale-95 min-h-[48px]">
            <div className="shrink-0 flex items-center justify-center w-5 h-5">
              <Icon name="android" size={20} />
            </div>
            <span className="text-[11px] font-bold text-white/80 tracking-widest group-hover/btn:text-white transition-colors whitespace-nowrap">for Android</span>
          </div>
          <div className="flex items-center gap-3 bg-[#0a0a0a] border border-white/5 px-6 py-3.5 rounded-full group/btn hover:border-white/20 transition-all justify-center cursor-pointer active:scale-95 min-h-[48px]">
            <div className="shrink-0 flex items-center justify-center w-5 h-5">
              <Icon name="apple" size={20} />
            </div>
            <span className="text-[11px] font-bold text-white/80 tracking-widest group-hover/btn:text-white transition-colors whitespace-nowrap">for iOS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScan;
