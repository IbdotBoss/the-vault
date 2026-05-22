'use client';

import { useEffect, useRef } from 'react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Book', href: '#cta' },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      const progress = Math.min(scrollY / heroHeight, 1);
      nav.style.backgroundColor = `rgba(26, 26, 26, ${progress * 0.95})`;
      nav.style.borderBottom = progress > 0.5 ? '1px solid rgba(200, 164, 92, 0.08)' : 'none';
    };

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      nav.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-40 transition-colors duration-300"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#hero"
          className="font-serif text-sm tracking-wider text-surface/80 hover:text-gold transition-colors duration-300"
        >
          THE VAULT
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.6rem] tracking-[0.12em] uppercase text-surface/50 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
