import { processSteps } from '../data/siteData';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section className="section process" id="proceso">
      <div className="container">
        <SectionHeading eyebrow="Así trabajamos" title="De tu recibo a tu propia energía" text="Un proceso claro, acompañado por nuestro equipo en cada etapa." />
        <div className="process__grid">
          {processSteps.map((step) => (
            <article className="process-step" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
