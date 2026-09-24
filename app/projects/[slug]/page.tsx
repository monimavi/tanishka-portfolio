import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/portfolio';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();
  return (
    <main className="min-h-screen bg-[#07100c] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/#work" className="text-sm text-[#a8ff9e]">← Back to projects</Link>
        <p className="mt-10 text-xs uppercase tracking-[.22em] text-[#a8ff9e]">{project.eyebrow}</p>
        <h1 className="mt-4 text-5xl font-semibold">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">{project.description}</p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><h2 className="text-xl font-semibold">Problem</h2><p className="mt-3 leading-7 text-white/65">{project.problem}</p></section>
          <section className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><h2 className="text-xl font-semibold">Solution</h2><p className="mt-3 leading-7 text-white/65">{project.solution}</p></section>
        </div>
      </div>
    </main>
  );
}
