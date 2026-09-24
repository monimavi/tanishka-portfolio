'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/portfolio';
import { ArrowUpRight, CloseIcon, MenuIcon } from './Icons';

const links = [
  ['About', '/#about'],
  ['Skills', '/#skills'],
  ['Work', '/#projects'],
  ['Services', '/#services'],
  ['Process', '/#process'],
  ['Contact', '/#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-5 sm:px-8">
        <a href="/#top" className="group flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white transition group-hover:border-aqua/50">
            T
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-white">TANISHKA</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-slate-400 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a href="/#contact" className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 lg:flex">
          Let&apos;s work together
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-content gap-1" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-2xl px-4 py-3 text-base text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
