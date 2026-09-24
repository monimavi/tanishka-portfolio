import Link from 'next/link';
import { projects } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ProjectPreview from './ProjectPreview';
import { ArrowUpRight } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0D1016] py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Real production websites, admin systems and event technology."
            text="A selection of publishing platforms, custom CMS/admin panels, registration systems, event applications and SEO projects I have worked on. Internal systems are clearly labelled."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <article className="grid overflow-hidden rounded-[32px] border border-white/10 bg-[#11151D] lg:grid-cols-[1.03fr_.97fr]">
                <div className={`p-4 sm:p-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ProjectPreview label={project.title} variant={project.preview} imageSrc={project.previewImage} />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">{project.eyebrow}</p>
                    <span className="text-xs text-slate-600">0{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{project.title}</h3>
                  <p className="mt-5 text-base leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-5">
                    <Link href={`/projects/${project.slug}`} className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-aqua">
                      View case study <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white">
                        View live project <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
