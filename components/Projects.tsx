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
            eyebrow="Featured projects"
            title="Built around real workflows, not demo-only screens."
            text="Selected project types covering administration, publishing, registration, payments and business websites. Confidential systems are clearly labelled."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <article className="grid overflow-hidden rounded-[32px] border border-white/10 bg-[#11151D] lg:grid-cols-[1.03fr_.97fr]">
                <div className={`p-4 sm:p-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ProjectPreview label={project.title} />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">{project.eyebrow}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{project.title}</h3>
                  <p className="mt-5 text-base leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">{tech}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-aqua">
                    View case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
