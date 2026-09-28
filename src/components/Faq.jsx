import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteData';
import SectionHeading from './SectionHeading';

export default function Faq() {
  return (
    <section className="section faq" id="preguntas">
      <div className="container faq__grid">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Respuestas claras antes de dar el siguiente paso" text="Conoce lo esencial sobre ahorro, instalación y mantenimiento de un sistema solar." />
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<ChevronDown /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
