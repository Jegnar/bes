import { processSteps } from '../data/siteData';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section className="section process" id="proceso">
      <div className="container">
        <SectionHeading eyebrow="Así trabajamos" title="Un proceso claro desde el diagnóstico hasta la entrega" text="La misma metodología para proyectos fotovoltaicos, de refrigeración o instalaciones eléctricas." />
        <div className="process__grid">
          {processSteps.map((step) => (
            <article className="process-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
