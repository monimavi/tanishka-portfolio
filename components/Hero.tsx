import Image from 'next/image';
import { siteConfig } from '@/data/portfolio';
import { ArrowUpRight, CodeIcon } from './Icons';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 text-white sm:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-[-5%] top-40 h-96 w-96 rounded-full bg-teal-300/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <div className="relative mx-auto grid max-w-content items-center gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-20 lg:pb-32">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-aqua shadow-[0_0_18px_rgba(94,234,212,.8)]" />
            Available for freelance & web development projects
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">{siteConfig.name}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[82px]">
            Full Stack Web Developer building practical digital systems.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            I build business websites, admin dashboards, CMS platforms, registration systems and API-connected workflows with a focus on usability, reliability and production-ready delivery.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-xl">
              View my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10">
              Let&apos;s work together
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {['Full Stack', 'Admin Systems', 'CMS & APIs', 'Deployment'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <CodeIcon className="h-5 w-5 text-aqua" />
                <p className="mt-3 text-sm font-medium text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:ml-auto">
          <div className="absolute -inset-5 rounded-[42px] bg-gradient-to-br from-violet-500/20 via-transparent to-teal-300/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#13161E] p-2 shadow-glow">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src={siteConfig.profileImage}
                alt="Tanishka, Full Stack Web Developer"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 500px"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0b0d12] via-[#0b0d12]/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-sm font-semibold text-white">Tanishka</p>
                  <p className="mt-1 text-xs text-slate-300">Full Stack Web Developer</p>
                </div>
                <span className="rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-aqua">Web · CMS · Systems</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
