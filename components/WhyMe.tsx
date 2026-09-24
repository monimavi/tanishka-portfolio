import Image from 'next/image';
import { reasons, siteConfig } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Check } from './Icons';

export default function WhyMe() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-[470px] lg:mx-0">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-violet-200/60 via-transparent to-teal-200/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-2 shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[27px] bg-slate-100">
                <Image
                  src={siteConfig.workImage}
                  alt="Tanishka working in a modern office"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 470px"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">Practical delivery</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Build · Test · Deploy · Support</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading
            eyebrow="Why work with me"
            title="Practical development with ownership beyond the first commit."
            text="I care about how the system behaves after launch: whether the workflow makes sense, whether the interface works on real devices, and whether issues can be diagnosed quickly when something breaks."
            light
          />

          <div className="mt-8 rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-950 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium leading-6 text-slate-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
