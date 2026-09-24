import { services } from '@/data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Development support from idea to production."
            text="Focused services for businesses that need dependable websites, dashboards, CMS workflows, integrations and ongoing technical support."
            light
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 55}>
              <article className="h-full rounded-[26px] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-white hover:shadow-soft">
                <span className="text-xs font-semibold tracking-[0.2em] text-violet-600">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
