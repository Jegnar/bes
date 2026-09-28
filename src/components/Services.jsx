import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '../data/siteData';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section className="section services" id="soluciones">
      <div className="container">
        <SectionHeading eyebrow="Nuestras soluciones" title="Energía diseñada para ti" text="Cada proyecto comienza con entender cómo consumes energía. A partir de ahí, construimos la solución que te llevará más lejos." align="center" />
        <div className="services__grid">
          {services.map(({ icon: Icon, number, title, text, features }) => (
            <article className="service-card" key={title}>
              <span className="service-card__number">{number}</span>
              <div className="service-card__icon"><Icon /></div>
              <h3>{title}</h3><p>{text}</p>
              <ul>{features.map((feature) => <li key={feature}><Check /> {feature}</li>)}</ul>
              <a href="#contacto">Conocer más <ArrowUpRight size={17} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
