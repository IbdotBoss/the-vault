'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const section = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.from(textRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section.current,
            start: 'top 75%',
            end: 'top 35%',
            scrub: 1,
          },
        });
      }
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="gallery"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink-light"
    >
      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 30% 50%, rgba(200, 164, 92, 0.05), transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-10">
        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left — Text */}
          <div ref={textRef} className="max-w-lg">
            <p className="text-xs tracking-[0.15em] uppercase text-gold/50 mb-4">
              Before & After
            </p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-surface mb-6">
              From battered
              <br />
              <span className="font-serif italic text-gold">to beautiful</span>
            </h2>
            <p className="text-sm text-surface/50 leading-relaxed">
              We don't just clean your shoes — we restore them. Whether it's
              years of wear, a muddy festival, or just the daily grind, your
              trainers come back looking like you just unboxed them.
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <span className="font-serif text-2xl text-gold">500+</span>
                <p className="text-[0.55rem] tracking-[0.1em] uppercase text-surface/30 mt-1">Pairs cleaned</p>
              </div>
              <div>
                <span className="font-serif text-2xl text-gold">4.9</span>
                <p className="text-[0.55rem] tracking-[0.1em] uppercase text-surface/30 mt-1">Rating</p>
              </div>
              <div>
                <span className="font-serif text-2xl text-gold">Same</span>
                <p className="text-[0.55rem] tracking-[0.1em] uppercase text-surface/30 mt-1">Week turnaround</p>
              </div>
            </div>
          </div>

          {/* Right — Visual transformation blocks */}
          <div className="space-y-4">
            {/* Before card */}
            <div className="relative border border-white/5 rounded-2xl p-6 md:p-8 bg-ink/40">
              <span className="text-[0.5rem] tracking-[0.15em] uppercase text-red-400/40 font-semibold">Before</span>
              <p className="text-sm text-surface/30 mt-2 italic">
                "Mud, scuffs, faded suede — looked like they'd been through a war."
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold/20">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* After card */}
            <div className="relative border border-gold/10 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-ink/40 to-gold/[0.02]">
              <span className="text-[0.5rem] tracking-[0.15em] uppercase text-green-400/40 font-semibold">After</span>
              <p className="text-sm text-surface/50 mt-2 italic">
                "Like new. Deep clean, sole whitening, fresh laces. Ready to go again."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
