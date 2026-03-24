// components/Inquiry.tsx
export default function Inquiry() {
  return (
    <section className="bg-white py-40 px-6 md:px-12 border-t border-black/5 relative overflow-hidden">
      {/* Background Architectural Watermark */}
      <div className="absolute top-0 right-[-5%] opacity-[0.02] pointer-events-none select-none">
        <span className="text-[30vw] font-black leading-none uppercase">FORM_01</span>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Left Side: The "Official" Context */}
        <div className="lg:col-span-5 flex flex-col justify-between border-l border-black/5 pl-8 md:pl-12">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <span className="w-8 h-8 rounded-full bg-[#ff4500] text-white flex items-center justify-center text-[10px] font-black italic">
                !
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-400">
                Procurement_Protocol_v26
              </span>
            </div>
            
            <h2 className="text-[8vw] lg:text-[5vw] font-black leading-[0.85] tracking-tighter uppercase mb-12">
              Secure Your <br /> 
              <span className="text-transparent" style={{ WebkitTextStroke: '1.2px #0a0a0a' }}>Inventory.</span>
            </h2>
            
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm mb-12">
              Once submitted, our logistics department will generate a technical 
              quotation including tax breakdowns and freight schedules.
            </p>
          </div>

          {/* Technical Signature */}
          <div className="hidden lg:block">
            <div className="text-[9px] font-mono text-slate-300 uppercase leading-loose">
              <p>Auth_Token: JNC_EST_8842</p>
              <p>Encryption: Standard_Secure_256</p>
              <p>© Jay Nursing Construction // Chhattisgarh</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Manifest Form */}
        <div className="lg:col-span-7 bg-[#fafafa] p-8 md:p-20 shadow-2xl shadow-black/[0.02] border border-black/5">
          <form className="space-y-16">
            
            {/* Field Group 01 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group border-b border-black/10 focus-within:border-orange-600 transition-colors pb-4">
                <label className="text-[9px] uppercase font-black tracking-widest text-slate-400 block mb-4 group-focus-within:text-orange-600 transition-colors">
                  Requester_Identity
                </label>
                <input 
                  type="text" 
                  className="w-full bg-transparent outline-none text-xl font-black uppercase placeholder:text-slate-200" 
                  placeholder="Full Name / Company" 
                />
              </div>
              <div className="group border-b border-black/10 focus-within:border-orange-600 transition-colors pb-4">
                <label className="text-[9px] uppercase font-black tracking-widest text-slate-400 block mb-4 group-focus-within:text-orange-600 transition-colors">
                  Communication_Line
                </label>
                <input 
                  type="email" 
                  className="w-full bg-transparent outline-none text-xl font-black uppercase placeholder:text-slate-200" 
                  placeholder="Email Address" 
                />
              </div>
            </div>

            {/* Field Group 02 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group border-b border-black/10 focus-within:border-orange-600 transition-colors pb-4 relative">
                <label className="text-[9px] uppercase font-black tracking-widest text-slate-400 block mb-4 group-focus-within:text-orange-600 transition-colors">
                  Resource_Type
                </label>
                <select className="w-full bg-transparent outline-none text-xl font-black uppercase appearance-none cursor-pointer">
                  <option>Fly Ash Bricks</option>
                  <option>Cemented Bricks</option>
                  <option>Architectural Pavement</option>
                </select>
                {/* Custom Chevron */}
                <div className="absolute right-0 bottom-6 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4L6 8L10 4" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className="group border-b border-black/10 focus-within:border-orange-600 transition-colors pb-4">
                <label className="text-[9px] uppercase font-black tracking-widest text-slate-400 block mb-4 group-focus-within:text-orange-600 transition-colors">
                  Mass_Quantity
                </label>
                <input 
                  type="number" 
                  className="w-full bg-transparent outline-none text-xl font-black uppercase placeholder:text-slate-200" 
                  placeholder="Estimated Units" 
                />
              </div>
            </div>

            {/* Submission Area */}
            <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest max-w-[200px] leading-relaxed italic">
                * Field values are used to calculate logistical freight costings.
              </p>
              
              <button className="group relative bg-[#0a0a0a] text-white overflow-hidden py-6 px-12 transition-all hover:bg-orange-600">
                <div className="relative z-10 flex items-center gap-4">
                  <span className="text-[11px] uppercase tracking-[0.4em] font-black">Generate Quote</span>
                  <div className="w-6 h-[1px] bg-white group-hover:w-10 transition-all"></div>
                </div>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}