// components/ProductArchive.tsx
'use client';

import React from 'react';

const products = [
  { 
    id: '01', 
    title: 'Fly Ash Bricks', 
    category: 'Eco-Industrial',
    specs: { density: '1700 kg/m³', strength: '15-20 MPa', use: 'Structural Walls' },
    image: '/fly-ash-brick.jpg' // Add your actual image paths
  },
  { 
    id: '02', 
    title: 'Cemented Bricks', 
    category: 'Heavy-Duty',
    specs: { density: '2100 kg/m³', strength: '25-30 MPa', use: 'Load Bearing' },
    image: '/cement-brick.jpg'
  },
  { 
    id: '03', 
    title: 'Floor Bricks', 
    category: 'Architectural',
    specs: { density: '2300 kg/m³', strength: '40 MPa+', use: 'Premium Paving' },
    image: '/floor-brick.jpg'
  },
];

export default function ProductArchive() {
  return (
    <section className="bg-[#f4f4f4] text-[#0a0a0a] py-40 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[0.9] tracking-tighter uppercase mb-6">
              The Material <br /> <span className="text-orange-600 italic">Inventory.</span>
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] font-bold text-slate-400">
              Technical Specifications Archive / v2.0
            </p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-300 rotate-90 origin-right translate-y-[-100%]">
              JNC—QC—PASSED
            </p>
          </div>
        </div>

        {/* Product List */}
        <div className="border-t border-black/10">
          {products.map((p) => (
            <div 
              key={p.id} 
              className="group relative border-b border-black/10 py-16 cursor-pointer overflow-hidden transition-all duration-700 hover:px-8"
            >
              {/* Animated Background on Hover */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
                
                {/* ID & Category */}
                <div className="lg:col-span-2">
                  <span className="text-xs font-mono text-slate-400 mb-2 block">{p.id}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-2 bg-black text-white inline-block">
                    {p.category}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-5">
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase transition-all duration-500 group-hover:text-orange-600 group-hover:translate-x-4">
                    {p.title}
                  </h3>
                </div>

                {/* Specs - Only visible clearly on hover/desktop */}
                <div className="lg:col-span-5 grid grid-cols-3 gap-4 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500 mb-1">Density</p>
                    <p className="text-sm font-black">{p.specs.density}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500 mb-1">Strength</p>
                    <p className="text-sm font-black">{p.specs.strength}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500 mb-1">Primary Use</p>
                    <p className="text-sm font-black">{p.specs.use}</p>
                  </div>
                </div>
              </div>

              {/* World Class Touch: Image Reveal Component */}
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-64 h-40 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 pointer-events-none hidden xl:block">
                <div className="relative w-full h-full bg-slate-200 grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-white shadow-2xl">
                   {/* Replace with <Image /> from next/image */}
                   <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                     Preview_{p.id}
                   </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer of Section */}
        <div className="mt-20 flex justify-between items-center">
           <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-400">
             (C) JNC—Materials—Lab
           </div>
           <button className="text-xs font-black uppercase tracking-widest border-b-2 border-orange-600 pb-1 hover:text-orange-600 transition-all">
             View Full Comparison Chart
           </button>
        </div>
      </div>
    </section>
  );
}