// components/Sustainability.tsx
export default function Sustainability() {
  const dataPoints = [
    { 
      label: "Carbon Mitigation", 
      value: "40%", 
      metric: "CO2_EQUIVALENT", 
      detail: "Replacement of coal-fired kiln processes with high-pressure ambient curing." 
    },
    { 
      label: "Resource Recovery", 
      value: "60t", 
      metric: "DAILY_DIVERSION", 
      detail: "Repurposing industrial byproducts into structural-grade building units." 
    },
    { 
      label: "Thermal Density", 
      value: "0.25", 
      metric: "W/MK_EFFICIENCY", 
      detail: "Reduced heat transfer coefficient compared to traditional red-clay masonry." 
    }
  ];

  return (
    <section className="bg-white py-40 px-6 md:px-12 relative overflow-hidden border-t border-black/5">
      {/* 1. ARCHITECTURAL DATA MESH (Background) */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-black/[0.03] pointer-events-none"></div>
      
      <div className="max-w-[1800px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-green-500"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-green-600">
                Environmental_Data_Log
              </span>
            </div>
            <h2 className="text-[12vw] lg:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase text-[#0a0a0a]">
              Earth <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #0a0a0a' }}>
                Positive.
              </span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="p-8 border-l border-black/10">
              <p className="text-slate-500 text-sm md:text-base uppercase tracking-tight leading-relaxed font-medium">
                JNC bricks are engineered to minimize top-soil depletion. 
                By shifting to high-volume fly ash recovery, we facilitate 
                <span className="text-black"> sustainable urban expansion </span> 
                without ecological compromise.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/10">
          {dataPoints.map((point, i) => (
            <div 
              key={i} 
              className="group border-b md:border-b-0 md:border-r border-black/10 p-12 transition-all duration-500 hover:bg-[#fafafa]"
            >
              <div className="flex justify-between items-start mb-24">
                <span className="text-[10px] font-mono text-slate-300">REF_ID // 00{i + 1}</span>
                <span className="text-[9px] px-2 py-1 bg-black text-white font-bold tracking-tighter uppercase">
                  {point.metric}
                </span>
              </div>
              
              <h3 className="text-xs uppercase tracking-[0.3em] font-black text-slate-400 mb-2">
                {point.label}
              </h3>
              <div className="text-8xl font-black tracking-tighter mb-12 transition-transform group-hover:scale-105 group-hover:text-green-600 origin-left duration-500">
                {point.value}
              </div>
              
              <p className="text-xs leading-relaxed text-slate-400 max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {point.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Ribbon: Certifications */}
        <div className="mt-40 pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-[9px] uppercase tracking-[0.4em] font-black text-slate-400 leading-none">
              Certification_Status
            </span>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-black">Active / Verified 2026</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity duration-700">
             {/* Text-based logos for a cleaner "blueprint" look */}
             <div className="text-center">
               <p className="text-[10px] font-black">LEED</p>
               <p className="text-[8px] tracking-widest font-bold text-slate-400 uppercase">Platinum_Eligible</p>
             </div>
             <div className="text-center">
               <p className="text-[10px] font-black">IGBC</p>
               <p className="text-[8px] tracking-widest font-bold text-slate-400 uppercase">Green_Pro_Certified</p>
             </div>
             <div className="text-center">
               <p className="text-[10px] font-black">ISO</p>
               <p className="text-[8px] tracking-widest font-bold text-slate-400 uppercase">14001:2015</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}