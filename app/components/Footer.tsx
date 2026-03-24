// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto relative z-10">
        
        {/* Top Section: The Big Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.85] tracking-tighter uppercase mb-10">
              Let's build <br /> 
              <span className="text-orange-600 italic">the future.</span>
            </h2>
            
            <a 
              href="/catalog.pdf" 
              className="inline-flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold group-hover:text-orange-600 transition-colors">
                Download Technical Catalog
              </span>
            </a>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-8">
              <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-bold">Navigation</p>
              <ul className="space-y-4 text-sm font-medium">
                <li className="hover:text-orange-600 transition cursor-pointer">The Inventory</li>
                <li className="hover:text-orange-600 transition cursor-pointer">Engineering Specs</li>
                <li className="hover:text-orange-600 transition cursor-pointer">Sustainability</li>
                <li className="hover:text-orange-600 transition cursor-pointer">Our Heritage</li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-bold">Legal</p>
              <ul className="space-y-4 text-sm font-medium">
                <li className="hover:text-orange-600 transition cursor-pointer">Privacy Policy</li>
                <li className="hover:text-orange-600 transition cursor-pointer">Terms of Supply</li>
                <li className="hover:text-orange-600 transition cursor-pointer">Quality Certs</li>
              </ul>
            </div>

            <div className="space-y-8 col-span-2 md:col-span-1">
              <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-bold">Contact</p>
              <div className="text-sm leading-relaxed text-slate-400">
                <p>Plot 42-B, Industrial Estate</p>
                <p>Raipur, Chhattisgarh</p>
                <a href="mailto:hello@jncbricks.com" className="text-white font-bold block mt-4 hover:text-orange-600 transition">
                  hello@jncbricks.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">
              © 2026 Jay Nursing Construction. ALL RIGHTS RESERVED.
            </p>
          </div>

          <div className="flex gap-8 relative z-20">
            {['LN', 'IG', 'FB'].map((social) => (
              <span key={social} className="text-[10px] font-black tracking-widest hover:text-orange-600 cursor-pointer transition">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* The Watermark Fix: Absolute positioned but clipped by 'overflow-hidden' */}
      <div className="absolute -bottom-2 -right-3 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[18vw] font-black leading-none uppercase tracking-tighter inline-block translate-y-1/4">
          JNCBRICKS
        </span>
      </div>
    </footer>
  );
}