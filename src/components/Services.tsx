'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: 'Full Trainer Clean',
    desc: 'Upper, midsole, outsole, laces, and insoles. All materials — leather, suede, mesh, canvas.',
    tag: 'From £35',
  },
  {
    name: 'Premium Restore',
    desc: 'Deep clean + sole whitening (unyellowing) + lace replacement. For trainers that need serious revival.',
    tag: 'From £50',
  },
  {
    name: 'Suede & Leather Care',
    desc: 'Specialist suede re-dyeing, leather conditioning, and water-repellent treatment.',
    tag: 'From £30',
  },
  {
    name: 'Shoe Repairs',
    desc: 'Stitching, re-gluing, heel replacement, and minor structural fixes. Extend the life of your favourites.',
    tag: 'Quote',
  },
];

export default function Services() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const ctx = gsap.context(() => {
      const cards = section.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.from(cards, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section.current,
            start: 'top 75%',
            once: true,
          },
        });
      }
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      id="services"
      className="relative py-[clamp(4rem,10vw,7rem)] overflow-hidden bg-ink"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.15em] uppercase text-gold/50 mb-3 text-center">
          Our Services
        </p>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-surface text-center mb-12">
          What we bring back to life
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="service-card border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-gold/20 hover:bg-gold/[0.02]"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl md:text-2xl text-surface leading-tight">
                  {s.name}
                </h3>
                <span className="text-[0.55rem] tracking-[0.12em] uppercase text-gold/70 whitespace-nowrap ml-4 mt-1">
                  {s.tag}
                </span>
              </div>
              <p className="text-sm text-surface/50 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
