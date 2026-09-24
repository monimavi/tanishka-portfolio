import { skills } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills / Tech stack"
            title="A practical stack for end-to-end web delivery."
            text="Tools I use across interface development, backend workflows, data, CMS integrations, transactional systems and live production support."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={(index % 4) * 45}>
              <div className="group flex min-h-24 items-end justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.055]">
                <p className="text-base font-medium text-slate-100">{skill}</p>
                <span className="text-xs font-semibold text-white/30 transition group-hover:text-aqua">{String(index + 1).padStart(2, '0')}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
