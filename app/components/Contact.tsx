// components/Contact.tsx
export default function Contact() {
  return (
    <section className="bg-obsidian py-40 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[8vw] font-black leading-none uppercase mb-16 italic">
          Ready to build?
        </h2>
        <a 
          href="mailto:orders@jncbricks.com" 
          className="text-2xl md:text-4xl font-light border-b-2 border-brick-active pb-2 hover:text-brick-active transition-all"
        >
          Request Wholesale Pricing →
        </a>
      </div>
    </section>
  );
}