import Image from 'next/image';
import Reveal from './Reveal';
import { services } from '@/data/portfolio';

export default function Expertise() {
  return (
    <section id="services" className="section-pad expertise-section">
      <div className="shell expertise-top">
        <Reveal><div className="section-kicker"><span/> My Core Expertise</div></Reveal>
        <Reveal delay={120}><h2 className="statement">I help businesses turn ideas into <strong>functional, scalable digital products.</strong> Every project is built with performance, clarity and long-term growth in mind.</h2></Reveal>
      </div>
      <div className="shell service-collage">
        <div className="service-list">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="service-item"><div className="service-icon">{String(index + 1).padStart(2,'0')}</div><div><h3>{service.title}</h3><p>{service.body}</p></div></article>
            </Reveal>
          ))}
        </div>
        <div className="service-center-title"><span>Core Services</span><span>Offered</span></div>
        <div className="service-visuals">
          <div className="service-visual tall"><Image src="/images/projects/industrial-outlook-admin.png" alt="CMS dashboard" fill /></div>
          <div className="service-visual small"><Image src="/images/projects/eps-exhibitor-app.png" alt="Mobile application" fill /></div>
        </div>
      </div>
    </section>
  );
}
