// components/TechnicalLab.tsx
export default function TechnicalLab() {
  const tests = [
    {
      title: "Compressive Strength",
      value: "15-20 MPa",
      status: "Exceeds IS 12894:2002",
      detail: "Hydraulic press testing ensures structural integrity for high-rise loads."
    },
    {
      title: "Water Absorption",
      value: "< 10%",
      status: "Superior Resistance",
      detail: "High-density vibro-compaction prevents moisture seepage and efflorescence."
    },
    {
      title: "Thermal Conductivity",
      value: "0.25 W/mK",
      status: "Energy Efficient",
      detail: "Fly ash particles provide natural insulation, reducing HVAC costs by 15%."
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-40 px-6 md:px-12 relative overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        
        {/* Left Side: The "Microscope" View */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-12">
            <span className="text-orange-600 font-mono text-xs tracking-[0.5em] uppercase block mb-4">
              // Lab_Report_v4.0
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter mb-8">
              Proven <br /> <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Physics.</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed italic">
              "Every JNC brick is subjected to 3,000 PSI of pressure before it leaves our facility. We don't guess strength; we measure it."
            </p>
          </div>
          
          {/* Circular Scan Effect */}
          <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center group overflow-hidden bg-white/5 backdrop-blur-3xl">
            <div className="absolute inset-0 border-t-2 border-orange-600 animate-spin duration-[3s]"></div>
            <div className="text-center">
              <span className="block text-4xl font-black text-white leading-none">30</span>
              <span className="text-[10px] uppercase tracking-widest text-orange-600 font-bold">MPa Tested</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Datasheet */}
        <div className="lg:col-span-7 space-y-2">
          {tests.map((test, index) => (
            <div 
              key={index} 
              className="group border border-white/10 p-10 hover:bg-white hover:text-black transition-all duration-700 cursor-crosshair relative"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-xs opacity-40">0{index + 1} //</span>
                <span className="px-3 py-1 border border-current text-[9px] uppercase tracking-widest font-bold">
                  {test.status}
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 transition-transform group-hover:translate-x-2">
                {test.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-in-out">
                <p className="text-sm opacity-60 leading-relaxed">
                  {test.detail}
                </p>
                <div className="text-right">
                  <span className="text-5xl md:text-7xl font-black text-orange-600 group-hover:text-black transition-colors">
                    {test.value}
                  </span>
                </div>
              </div>

              {/* Decorative Corner Lines */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}