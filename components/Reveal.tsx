'use client';

import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.setProperty('--reveal-delay', `${delay}ms`);
        el.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.14 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
