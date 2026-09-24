import Image from 'next/image';
import Reveal from './Reveal';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="work" className="section-pad work-section">
      <div className="shell work-head">
        <div><div className="section-kicker"><span/> Selected Projects</div><h2>Crafting Scalable<br/>Digital Products <span>That Perform</span></h2></div>
        <p>Real projects covering publishing, event technology, CMS systems, mobile experiences and local-business platforms.</p>
      </div>
      <div className="shell project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index%4)*60} className={index < 2 ? 'project-featured-wrap' : ''}>
            <article className={`project-card ${index < 2 ? 'featured' : ''}`}>
              <div className="project-image-wrap"><Image src={project.image} alt={project.title} fill className="project-img"/><div className="project-image-overlay"/></div>
              <div className="project-info"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tech">{project.tech.slice(0,4).map(t=><span key={t}>{t}</span>)}</div><div className="project-actions">{project.link ? <a href={project.link} target="_blank">View Live Project ↗</a> : <span>Private / Internal Business Application</span>}</div></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
