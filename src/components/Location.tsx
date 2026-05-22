'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
  const section = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
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
      id="location"
      className="relative py-[clamp(4rem,10vw,7rem)] overflow-hidden bg-ink"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left */}
          <div ref={contentRef}>
            <p className="text-xs tracking-[0.15em] uppercase text-gold/50 mb-4">
              Find Us
            </p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-surface mb-6">
              Bishop's Stortford's
              <br />
              <span className="font-serif italic text-gold">premium shoe care</span>
            </h2>
            <p className="text-sm text-surface/50 leading-relaxed max-w-md">
              Drop your trainers off at our Bishop's Stortford location.
              We'll have them looking fresh within the week.
              Collections available.
            </p>

            {/* Local trust signals */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                <span className="text-[0.55rem] tracking-[0.08em] uppercase text-surface/40">Local business</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                <span className="text-[0.55rem] tracking-[0.08em] uppercase text-surface/40">Fast turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/40" />
                <span className="text-[0.55rem] tracking-[0.08em] uppercase text-surface/40">Collections avail</span>
              </div>
            </div>
          </div>

          {/* Right — Contact card */}
          <div className="border border-white/5 rounded-2xl p-8 bg-ink-light/30">
            <div className="space-y-5">
              <div>
                <p className="text-[0.55rem] tracking-[0.15em] uppercase text-gold/50 mb-1">Address</p>
                <p className="text-sm text-surface/60">Bishop's Stortford, Hertfordshire</p>
              </div>
              <div className="w-full h-px bg-white/5" />
              <div>
                <p className="text-[0.55rem] tracking-[0.15em] uppercase text-gold/50 mb-1">Contact</p>
                <p className="text-sm text-surface/60">DM @thevault.stortford or WhatsApp</p>
              </div>
              <div className="w-full h-px bg-white/5" />
              <div>
                <p className="text-[0.55rem] tracking-[0.15em] uppercase text-gold/50 mb-1">Turnaround</p>
                <p className="text-sm text-surface/60">Within the week. Rush orders available.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
