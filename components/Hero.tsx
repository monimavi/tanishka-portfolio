import Image from 'next/image';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-bg" />
      <div className="shell hero-grid">
        <div className="hero-left">
          <Reveal>
            <div className="eyebrow-line">FULL STACK WEB DEVELOPER</div>
            <h1 className="hero-title"><span>Build</span><span className="outline">Digital</span><span>Futures</span></h1>
          </Reveal>
          <Reveal delay={120} className="hero-trust">
            <span className="tiny-dot" />
            <p>Hands-on development focused on practical, production-ready digital systems.</p>
          </Reveal>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-glow" />
          <Image src="/images/profile/tanishka-hero.png" alt="Tanishka - Full Stack Web Developer" fill priority className="hero-portrait" />
        </div>
        <div className="hero-right">
          <Reveal delay={160}>
            <h2>Innovate. Develop.<br/>Succeed. Fast.</h2>
            <p>I turn real business requirements into clean websites, admin systems, CMS platforms and connected workflows.</p>
            <div className="hero-buttons"><a className="pill-button mint" href="#work">Get a Free Quote</a><a className="pill-button dark" href="#services">Our Services</a></div>
          </Reveal>
        </div>
      </div>
      <div className="shell hero-meta">
        <div><span className="meta-line"/> <p>Practical implementation across frontend, backend, database, hosting and deployment.</p></div>
        <div className="hero-socials"><span>Tanishka — Full Stack Developer</span><a href="https://github.com/monimavi" target="_blank">GitHub</a><a href="mailto:itsmavitanishka@gmail.com">Email</a></div>
      </div>
    </section>
  );
}
