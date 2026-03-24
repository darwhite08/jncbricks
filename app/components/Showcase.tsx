// components/Showcase.tsx
export default function Showcase() {
  const projects = [
    { 
      name: "Urban Residency", 
      location: "Raipur", 
      units: "120k", 
      type: "Residential",
      year: "2025"
    },
    { 
      name: "Axis Industrial Park", 
      location: "Bhilai", 
      units: "450k", 
      type: "Commercial",
      year: "2026"
    }
  ];

  return (
    <section className="bg-white py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Section Header with "Blueprint" Aesthetics */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 border-b border-black/5 pb-12">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-orange-600 block mb-6">
              Portfolio_Archive // v.04
            </span>
            <h2 className="text-[8vw] md:text-[5vw] font-black leading-[0.8] tracking-tighter uppercase text-[#0a0a0a]">
              Built <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #0a0a0a' }}>
                Legacies.
              </span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 text-right">
            <p className="text-[10px] font-mono text-slate-300 uppercase leading-relaxed">
              Total Units Supplied <br />
              <span className="text-2xl font-black text-black tracking-tighter">2.4M+ units</span>
            </p>
          </div>
        </div>

        {/* The Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-y-64 items-center">
          
          {/* Project 01 - Large Offset */}
          <div className="md:col-span-7 group relative cursor-none">
            <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
               {/* Image Background */}
               <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 bg-[url('/project1.jpg')] bg-cover bg-center"></div>
               
               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Metadata Float */}
            <div className="absolute -bottom-12 -right-6 md:right-[-10%] bg-white p-8 md:p-12 shadow-2xl z-20 max-w-xs transition-transform duration-500 group-hover:-translate-y-4">
               <span className="text-[9px] font-mono text-slate-400 block mb-4">ARCH_REF: {projects[0].year}</span>
               <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{projects[0].name}</h3>
               <p className="text-[10px] tracking-[0.3em] font-bold text-orange-600 uppercase">{projects[0].location} // {projects[0].type}</p>
            </div>
          </div>

          {/* Project 02 - Smaller, Centered */}
          <div className="md:col-span-4 md:col-start-9 group relative">
            <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
               <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 bg-[url('/project2.jpg')] bg-cover bg-center"></div>
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Metadata Below */}
            <div className="pt-8 border-t border-black/5 mt-8">
               <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black uppercase tracking-tighter">{projects[1].name}</h3>
                  <span className="text-[10px] font-black py-1 px-2 bg-black text-white">{projects[1].units}</span>
               </div>
               <p className="text-[9px] tracking-[0.2em] font-bold text-slate-400 uppercase mt-2">{projects[1].location}</p>
            </div>
          </div>

        </div>

        {/* View All CTA */}
        <div className="mt-40 flex justify-center">
          <button className="group relative flex items-center gap-4 py-4 px-10 border border-black/10 hover:border-black transition-all">
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">View Full Case Files</span>
            <div className="w-8 h-[1px] bg-black group-hover:w-12 transition-all"></div>
          </button>
        </div>

      </div>
    </section>
  );
}