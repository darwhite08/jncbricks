// components/Hero.tsx
export default function Hero() {
  return (
    <section className="mt-14 relative min-h-screen flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-obsidian">
      {/* Top Navigation Overlay */}
      <div className="flex justify-between items-start z-20">
        <div className="text-xl font-black tracking-tighter leading-none">
          JNC <br /> <span className="text-brick-active">BRICKS</span>
        </div>
        <div className="hidden md:block text-xs uppercase tracking-[0.3em] text-slate-500">
          Manufacturing Excellence <br /> Since 2010 — India
        </div>
      </div>

      {/* Centerpiece Content */}
      <div className="relative z-10 mt-20">
        <h1 className="text-[15vw] font-black leading-[0.8] tracking-tighter uppercase">
          Solid <br /> 
          <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px white' }}>
            Matter.
          </span>
        </h1>
        
        <div className="grid grid-cols-12 mt-12">
          <div className="col-span-12 md:col-span-4 md:col-start-8">
            <p className="text-lg md:text-xl text-slate-400 leading-tight mb-8">
              Jay Nursing Construction (JNC) creates the structural DNA of modern architecture. 
              High-density Fly Ash and Cemented bricks, engineered for permanence.
            </p>
            <div className="flex items-center gap-8 group cursor-pointer">
              <span className="h-[1px] w-20 bg-white group-hover:w-32 transition-all duration-500"></span>
              <span className="text-xs uppercase tracking-[0.4em] font-bold">Request Technical Specs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Data */}
      <div className="flex justify-between items-end border-t border-white/10 pt-8">
        <div className="text-[10px] uppercase tracking-widest text-slate-500 max-w-[200px]">
          [01] Fly Ash <br /> [02] Cemented <br /> [03] Floor Bricks
        </div>
        <div className="text-7xl md:text-9xl font-black opacity-5">JNC</div>
      </div>
    </section>
  );
}