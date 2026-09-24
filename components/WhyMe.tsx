import { reasons } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Check } from './Icons';

export default function WhyMe() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-start lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Why work with me"
            title="Practical development with ownership beyond the first commit."
            text="I care about how the system behaves after launch: whether the workflow makes sense, whether the interface works on real devices, and whether issues can be diagnosed quickly when something breaks."
            light
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="space-y-3">
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
