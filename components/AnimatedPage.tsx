'use client';

import { useEffect } from 'react';

export default function AnimatedPage() {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${y}px`);
      document.documentElement.style.setProperty('--scroll-soft', `${Math.min(y * 0.06, 36)}px`);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return null;
}
