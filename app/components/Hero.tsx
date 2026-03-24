// components/Hero.tsx
export default function Hero() {
    return (
        <section className="mt-24 relative min-h-screen w-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-white text-[#0a0a0a]">

            {/* 1. THE ARCHITECTURAL GRID (Subtle backdrop) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="grid grid-cols-6 h-full w-full border-l border-black">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="border-r border-black"></div>
                    ))}
                </div>
            </div>

            {/* Top Branding Overlay */}
            <div className="flex justify-between items-start z-20">
                <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tighter leading-none">
                        JNC<span className="text-[#ff4500]">.</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-400 mt-2">
                        Engineered Stone
                    </span>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold leading-relaxed">
                        Batch_No: 2026_V1 <br />
                        <span className="text-black/20 italic">Validated for Structural Integrity</span>
                    </p>
                </div>
            </div>

            {/* Centerpiece Content */}
            <div className="relative z-10 mt-12 md:mt-0">
                
                {/* FLEX CONTAINER: Heading + Video */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
                    <h1 className="text-[16vw] font-black leading-[0.75] tracking-tighter uppercase select-none text-[#0a0a0a] flex-1">
                        Solid <br />
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: '1.5px #0a0a0a' }}
                        >
                            Matter.
                        </span>
                    </h1>

                    {/* Video Container positioned to the right */}
                    <div className="shrink-0 mb-4 md:mb-8 grayscale hover:grayscale-0 transition-all duration-700">
                        <video
                            width="450" // Increased size slightly for balance
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="mix-blend-multiply "
                        >
                            <source src="/assets/white_background_brick_house_Moving.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="grid grid-cols-12 mt-12">
                    <div className="hidden md:block col-span-1 col-start-7 h-48 border-l border-black/10"></div>

                    <div className="col-span-12 md:col-span-5 lg:col-span-4">
                        <p className="text-lg md:text-xl text-slate-600 leading-[1.5] mb-12 font-medium">
                            Manufacturing the structural DNA of modern architecture.
                            High-density Fly Ash and Cemented bricks, <span className="text-black font-bold">engineered for permanence.</span>
                        </p>

                        <div className="flex flex-wrap items-center gap-8 group cursor-pointer">
                            <div className="relative overflow-hidden bg-[#0a0a0a] px-10 py-5 transition-all duration-500 group-hover:bg-[#ff4500] group-hover:-translate-y-1 shadow-2xl shadow-black/10">
                                <span className="relative z-10 text-[11px] uppercase tracking-[0.2em] font-black text-white">
                                    Get Technical Specs
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="h-[1px] w-8 bg-black/20 group-hover:w-12 group-hover:bg-[#ff4500] transition-all"></span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-black font-bold transition-colors">
                                    View Catalog
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Data & Technical Ribbon */}
            <div className="relative flex flex-col md:flex-row justify-between items-center md:items-end z-10 border-t border-black/5 pt-8 gap-6">
                <div className="flex gap-12 text-[9px] uppercase tracking-[0.4em] text-slate-400 font-black">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#ff4500]"></div> Fly Ash
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-200"></div> Cemented
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-900"></div> Paving
                    </div>
                </div>

                <div className="text-[10px] text-right font-mono text-slate-300 uppercase leading-none">
                    Jay Narshingh Construction <br />
                    <span className="text-[8px]">Proprietary Vibro-Compression Technology</span>
                </div>
            </div>
        </section>
    );
}