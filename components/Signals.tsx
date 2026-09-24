import Reveal from './Reveal';

const signals = [
  ['Production Work', 'Live websites & operational systems'],
  ['Full Stack', 'Frontend, backend, database & APIs'],
  ['Infrastructure', 'Hosting, SSL, DNS & deployment'],
  ['Problem Solving', 'Debugging production issues end-to-end'],
];

export default function Signals() {
  return <section className="signals"><div className="shell signals-grid">{signals.map((s,i)=><Reveal key={s[0]} delay={i*80}><div className="signal-card"><span>{String(i+1).padStart(2,'0')}</span><h3>{s[0]}</h3><p>{s[1]}</p></div></Reveal>)}</div></section>;
}
