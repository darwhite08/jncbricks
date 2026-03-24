// components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for that "sticky elevation" feel
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-6 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        
        {/* Brand - Brutalist Typography */}
        <div className="flex flex-col leading-none group cursor-pointer">
          <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
            JNC<span className="text-orange-600">.</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mt-1">
            Construction
          </span>
        </div>

        {/* Navigation - The "Silent" Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {['Products', 'Engineering', 'Heritage', 'Sustainability'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:text-orange-600 ${
                isScrolled ? 'text-slate-600' : 'text-slate-300'
              } group`}
            >
              {item}
              {/* Animated Underline */}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action - The "Contract" Button */}
        <div className="flex items-center gap-8">
          <button className={`hidden sm:block text-[11px] uppercase tracking-[0.2em] font-black border-b-2 pb-1 transition-all ${
            isScrolled ? 'border-black text-black' : 'border-white text-white'
          } hover:border-orange-600 hover:text-orange-600`}>
            Request Quote
          </button>
          
          {/* Minimalist Burger Menu (Mobile) */}
          <div className="group cursor-pointer flex flex-col gap-1.5 justify-center items-end">
            <div className={`h-[2px] w-8 transition-all ${isScrolled ? 'bg-black' : 'bg-white'} group-hover:w-10 group-hover:bg-orange-600`}></div>
            <div className={`h-[2px] w-5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'} group-hover:w-10 group-hover:bg-orange-600`}></div>
          </div>
        </div>

      </div>
    </nav>
  );
}