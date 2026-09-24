import Image from 'next/image';
import { siteConfig } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-content items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-[420px] overflow-hidden rounded-[32px] bg-white p-2 shadow-soft lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[27px]">
              <Image src={siteConfig.aboutImage} alt="Tanishka professional portrait" fill className="object-cover object-top" sizes="420px" />
            </div>
          </div>
          <div className="absolute -bottom-5 right-3 max-w-[250px] rounded-2xl bg-slate-950 p-4 text-white shadow-xl sm:right-0">
            <p className="text-xs uppercase tracking-[0.2em] text-aqua">My approach</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Understand the workflow, build what matters, test the edge cases, then make it reliable in production.</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading
            eyebrow="About me"
            title="I turn business workflows into usable web products."
            text="My work sits between development and real operations: websites that need to stay live, dashboards people use every day, content systems editors depend on, and registration/payment workflows that have to behave correctly under real-world conditions."
            light
          />
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-700">
            <p>
              I work hands-on across frontend, backend, databases, CMS integration, APIs, deployment and troubleshooting. I enjoy projects where the challenge is not just making a screen look good, but making the full workflow practical and maintainable.
            </p>
            <p>
              My goal is simple: understand the business problem clearly, choose an appropriate technical approach, build a responsive experience and stay accountable through deployment and production support.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {['Business websites', 'Admin dashboards', 'CMS platforms', 'Registration systems', 'API integrations'].map((item) => (
              <span key={item} className="rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700">{item}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
