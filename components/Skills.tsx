'use client';

import Reveal from './Reveal';
import { skills } from '@/data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="skills-section section-pad-sm">
      <div className="shell">
        <div className="section-kicker"><span/> Technologies I Work With</div>
        <div className="skills-marquee"><div className="skills-track">{[...skills,...skills].map((s,i)=><span key={`${s}-${i}`}>{s}</span>)}</div></div>
      </div>
    </section>
  );
}
