'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          y: 20,
          opacity: 0,
          duration: 1,
          delay: 0.8,
          ease: 'power2.out',
        });
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="hero"
      className="relative h-screen overflow-hidden bg-ink"
    >
      {/* Subtle gold ambient glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(200, 164, 92, 0.06), transparent 70%)',
        }}
      />

      {/* Content — centered, massive type */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <p className="text-[0.55rem] md:text-xs tracking-[0.2em] uppercase text-gold/60 mb-6">
          Bishop's Stortford
        </p>

        <h1 className="font-serif text-[clamp(4rem,18vw,12rem)] leading-[0.85] text-surface tracking-[-0.03em]">
          THE
          <br />
          VAULT
        </h1>

        <div className="w-8 h-px bg-gold/30 mt-6 mb-6" />

        <p ref={subtitleRef} className="text-sm md:text-base text-surface/60 leading-relaxed max-w-md">
          Premium trainer & shoe cleaning.
          <br />
          Drop 'em off dirty. Pick 'em up fresh.
        </p>

        <a
          href="#services"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-medium tracking-wide transition-all duration-300 bg-gold hover:bg-gold-dark text-ink hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
        >
          See what we do
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[0.45rem] tracking-[0.2em] uppercase text-surface/20">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent" />
      </div>
    </section>
  );
}
