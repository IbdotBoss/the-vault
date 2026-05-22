'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const section = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          scale: 0.98,
          opacity: 0,
          y: 15,
          duration: 1,
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
      id="cta"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-ink"
    >
      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(200, 164, 92, 0.06), transparent 60%)',
        }}
      />

      <div ref={contentRef} className="relative z-10 px-6">
        <p className="text-xs tracking-[0.15em] uppercase text-gold/50 mb-6">
          Ready to revive your kicks?
        </p>

        <h2 className="font-serif text-[clamp(3rem,10vw,7rem)] leading-[0.9] text-surface tracking-[-0.02em]">
          Drop them
          <br />
          <span className="font-serif italic text-gold">at the vault</span>
        </h2>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 bg-gold hover:bg-gold-dark text-ink hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
          >
            Book a clean
          </a>
          <p className="text-xs text-surface/30">
            Or DM @thevault.stortford on Instagram
          </p>
        </div>
      </div>
    </section>
  );
}
