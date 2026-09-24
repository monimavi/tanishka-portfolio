'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);
  return (
    <header className="topbar">
      <div className="shell nav-inner">
        <a href="#home" className="brand" aria-label="Tanishka home">
          <span className="brand-mark">T</span>
          <span>TANISHKA</span>
        </a>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <a href="#contact" className="pill-button light">Start a Project <span>↗</span></a>
          <button className="menu-button" aria-label="Open menu" onClick={() => setOpen(v => !v)}><span/><span/></button>
        </div>
      </div>
    </header>
  );
}
