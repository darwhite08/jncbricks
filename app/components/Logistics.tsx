// components/Logistics.tsx
export default function Logistics() {
  const metrics = [
    { value: "50K", label: "Daily Output", unit: "UNITS_PROCESSED" },
    { value: "0.0%", label: "Delay Vector", unit: "PROJECT_SLA" },
    { value: "24H", label: "Dispatch", unit: "LEAD_TIME" }
  ];

  return (
    <section className="bg-white py-40 px-6 md:px-12 relative overflow-hidden border-t border-black/5">
      {/* 1. COORDINATE OVERLAY (The "Map" feel) */}
      <div className="absolute top-10 right-10 flex flex-col items-end opacity-[0.15] pointer-events-none">
        <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em]">Lat: 21.2514° N</span>
        <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em]">Long: 81.6296° E</span>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        
        {/* Left: The Strategic Context */}
        <div className="lg:col-span-5 flex flex-col justify-between py-10 border-l-2 border-orange-600 pl-8 md:pl-16">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-400">Logistics_Protocol</span>
              <div className="h-[1px] w-12 bg-black/10"></div>
            </div>
            
            <h2 className="text-[10vw] lg:text-[6vw] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              Supply <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1.2px #0a0a0a' }}>Velocity.</span>
            </h2>
            
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-sm font-medium">
              A vertically integrated fleet infrastructure ensuring zero-latency distribution 
              from our Raipur manufacturing hub to your construction site.
            </p>
          </div>

          {/* Metric Bar - Brutalist Style */}
          <div className="mt-20 grid grid-cols-3 gap-4 border-t border-black/5 pt-12">
            {metrics.map((m, i) => (
              <div key={i} className="group">
                <p className="text-3xl md:text-4xl font-black tracking-tighter group-hover:text-orange-600 transition-colors">
                  {m.value}
                </p>
                <div className="mt-2 flex flex-col">
                  <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">{m.unit}</span>
                  <span className="text-[10px] font-bold text-black uppercase tracking-tight">{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: The "Satellite" View (Visual Component) */}
        <div className="lg:col-span-7 relative">
          <div className="md:ml-20 aspect-[4/5] lg:aspect-video bg-[#fafafa] relative group overflow-hidden shadow-2xl shadow-black/5 border border-black/5">
            {/* The Image Layer */}
            <div className="absolute inset-0 grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 bg-[url('/logistics-fleet.jpg')] bg-cover bg-center"></div>
            
            {/* The "HUD" Overlay (Head-Up Display) */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-20 pointer-events-none">
              <div className="flex justify-between items-start">
                <div className="bg-white px-4 py-2 border border-black/5 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-black">Active_Route_Calculated</span>
                  </div>
                </div>
                <div className="text-white text-[9px] font-mono bg-black px-2 py-1 uppercase font-bold tracking-tighter">
                  Encrypted_Feed
                </div>
              </div>

              <div className="flex justify-between items-end text-white">
                <div className="max-w-[150px] p-4 bg-black/80 backdrop-blur-md">
                  <p className="text-[8px] uppercase tracking-[0.2em] mb-2 opacity-60">Payload_Integrity</p>
                  <p className="text-xs font-black uppercase leading-tight">Vibro-Compression Stabilized Bricks</p>
                </div>
                <div className="text-right">
                  <p className="text-[8vw] font-black leading-none opacity-20">JNC</p>
                </div>
              </div>
            </div>

            {/* Red Sighting Mark (Top Right Corner) */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-orange-600/50 translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          </div>

          {/* Abstract Legend (Bottom Right) */}
          <div className="absolute bottom-[-5%] left-[-5%] hidden xl:block p-8 bg-white border border-black/10 shadow-xl z-30 transform rotate-[-2deg]">
             <div className="flex gap-4">
               {[1, 2, 3, 4].map(b => (
                 <div key={b} className="w-4 h-8 bg-slate-100 border border-black/5 hover:bg-orange-600 transition-colors"></div>
               ))}
             </div>
             <p className="text-[8px] font-mono mt-4 text-slate-400 font-bold uppercase tracking-widest">Load_Sequence_V.26</p>
          </div>
        </div>

      </div>
    </section>
  );
}