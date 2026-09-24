import { process } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section id="process" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Development process"
            title="A clear path from requirement to deployment."
            text="Enough structure to keep delivery predictable, without turning a practical web project into unnecessary process overhead."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map(([number, title, text], index) => (
            <Reveal key={number} delay={(index % 3) * 50}>
              <article className="relative min-h-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6">
                <span className="absolute right-5 top-3 text-7xl font-semibold tracking-[-0.08em] text-white/[0.035]">{number}</span>
                <div className="relative">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/30 bg-violet-400/10 text-xs font-semibold text-violet-200">{number}</span>
                  <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
