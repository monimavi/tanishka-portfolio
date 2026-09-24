import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectPreview from '@/components/ProjectPreview';
import { ArrowUpRight, Check } from '@/components/Icons';
import { projects, siteConfig } from '@/data/portfolio';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${siteConfig.siteUrl}/projects/${project.slug}` },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-ink text-white">
      <Navbar />
      <section className="mx-auto max-w-content px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
        <Link href="/#projects" className="text-sm font-medium text-slate-400 transition hover:text-white">← Back to featured projects</Link>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="section-kicker text-aqua">{project.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">{tech}</span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <ProjectPreview label={project.title} />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 sm:p-8">
            <p className="section-kicker text-violet-300">Problem</p>
            <p className="mt-5 text-base leading-8 text-slate-300">{project.problem}</p>
          </article>
          <article className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 sm:p-8">
            <p className="section-kicker text-aqua">Solution</p>
            <p className="mt-5 text-base leading-8 text-slate-300">{project.solution}</p>
          </article>
        </div>

        <div className="mt-6 rounded-[30px] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
          <p className="section-kicker text-aqua">Key features</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-aqua/10 text-aqua"><Check className="h-4 w-4" /></span>
                <p className="text-sm leading-6 text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-violet-300">Screenshot gallery</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Replace these with real project screens.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-slate-500">Recommended: cover 1600×1000, dashboard 1440×900, table/list 1440×900, form 1200×900 and mobile 900×1600.</p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {['Main portfolio cover · 1600×1000', 'Dashboard screenshot · 1440×900', 'Listing / table · 1440×900', 'Form / workflow · 1200×900', 'Mobile responsive · 900×1600'].map((label, index) => (
              <div key={label} className={`grid min-h-64 place-items-center rounded-[24px] border border-dashed border-white/15 bg-white/[0.025] p-6 text-center ${index === 4 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">Add the real screenshot inside public/projects and wire its path in this page or the project data.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[30px] border border-violet-400/20 bg-violet-500/10 p-7 sm:flex sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-sm font-semibold text-violet-200">Need something similar?</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Tell me about the workflow, users and technical constraints. We can scope the right approach before development starts.</p>
          </div>
          <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink sm:mt-0">Discuss your project <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
