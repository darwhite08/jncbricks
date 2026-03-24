// components/Sustainability.tsx
export default function Sustainability() {
  const dataPoints = [
    { label: "Carbon Reduction", value: "40%", detail: "Compared to traditional clay kiln firing." },
    { label: "Water Conservation", value: "100%", detail: "Zero-discharge closed-loop curing system." },
    { label: "Waste Utilization", value: "60 Tons", detail: "Industrial byproduct diverted from landfills daily." }
  ];

  return (
    <section className="bg-white py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header: The "Value" Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 border-b border-slate-100 pb-20">
          <div className="lg:col-span-8">
            <span className="text-[10px] uppercase tracking-[0.6em] font-black text-green-600 block mb-6">
              Environment_01 // The Circular Economy
            </span>
            <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.85] tracking-tighter uppercase text-slate-900">
              Building <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #0f172a' }}>
                Consciously.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-slate-500 text-lg leading-tight uppercase tracking-tight">
              JNC Bricks replaces traditional soil extraction with high-volume fly ash recovery, 
              preserving fertile land for future generations.
            </p>
          </div>
        </div>

        {/* The "Impact" Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {dataPoints.map((point, i) => (
            <div 
              key={i} 
              className="group relative bg-[#f8f8f8] p-12 overflow-hidden transition-all duration-700 hover:bg-slate-900 hover:text-white"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-mono opacity-40 mb-20 block group-hover:text-green-400">
                  STAT_REF_0{i + 1}
                </span>
                <h3 className="text-xs uppercase tracking-[0.3em] font-black mb-4 opacity-60">
                  {point.label}
                </h3>
                <div className="text-7xl md:text-8xl font-black mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                  {point.value}
                </div>
                <p className="max-w-[200px] text-xs leading-relaxed opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                  {point.detail}
                </p>
              </div>

              {/* World Class Touch: Abstract Wave/Grain Pattern */}
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  <path d="M0 100 Q 50 50 100 100 T 200 100" fill="none" stroke="currentColor" strokeWidth="20" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout: The "Green" Certification */}
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100 pt-12">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest">Certified Eco-Friendly Material v.2026</span>
          </div>
          <div className="flex gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* These would be logos of IGBC, LEED, or ISO 14001 */}
            <span className="text-sm font-black italic">LEED_SILVER</span>
            <span className="text-sm font-black italic">IGBC_MEMBER</span>
            <span className="text-sm font-black italic">ISO_14001</span>
          </div>
        </div>

      </div>
    </section>
  );
}