import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section-pad about-section">
      <div className="shell about-grid">
        <Reveal className="about-image-col"><div className="about-image-wrap"><Image src="/images/profile/tanishka-about.png" alt="Tanishka" fill className="about-img"/><div className="about-orbit"/></div></Reveal>
        <Reveal delay={120} className="about-copy"><div className="section-kicker"><span/> About</div><h2>Developer Driven by<br/><strong>Purpose and Precision</strong></h2><p>I’m Tanishka, a hands-on Full Stack Web Developer and IT professional focused on building practical digital products that work in real production environments.</p><p>My work spans frontend development, backend logic, custom admin panels, CMS workflows, databases, API integrations, registration/payment systems, deployment, hosting and ongoing troubleshooting.</p><div className="about-points"><span>Websites & CMS</span><span>Admin Systems</span><span>APIs & Payments</span><span>Deployment Support</span></div></Reveal>
        <Reveal delay={200} className="about-quote"><div className="quote-mark">“</div><p>Every project is approached with clarity, maintainability and real business use in mind.</p><div className="signature">Tanishka</div></Reveal>
      </div>
    </section>
  );
}
