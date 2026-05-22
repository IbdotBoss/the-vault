export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-serif text-sm text-gold/70">THE VAULT</p>
          <p className="text-[0.55rem] text-surface/30 mt-0.5">Bishop's Stortford's premium shoe cleaning</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[0.45rem] tracking-[0.15em] uppercase text-surface/20">Instagram</span>
          <span className="text-[0.45rem] tracking-[0.15em] uppercase text-surface/20">WhatsApp</span>
          <span className="text-[0.45rem] tracking-[0.15em] uppercase text-surface/20">Bishop's Stortford</span>
        </div>
      </div>
    </footer>
  );
}
