import { Check } from 'lucide-react';
import solarDetail from '../assets/solar-engineer.jpg';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section className="section about" id="nosotros">
      <div className="container about__grid">
        <div className="about__visual">
          <img src={solarDetail} alt="Instalación residencial de paneles solares BES" />
          <div className="about__badge"><strong>360°</strong><span>Ingeniería, instalación<br />y acompañamiento</span></div>
        </div>
        <div className="about__copy">
          <SectionHeading eyebrow="Más que paneles" title="Construimos un futuro energético más inteligente" />
          <p>En Beyond Electricity Solutions creemos que la energía debe darte libertad. Combinamos ingeniería, tecnología y un servicio cercano para entregar sistemas que funcionan hoy y siguen generando valor mañana.</p>
          <ul>
            <li><Check /> Estudio personalizado de consumo y espacio</li>
            <li><Check /> Instalación profesional y componentes certificados</li>
            <li><Check /> Gestión y acompañamiento durante todo el proyecto</li>
          </ul>
          <div className="about__proof">
            <div><strong>01</strong><span>Analizamos</span></div>
            <div><strong>02</strong><span>Diseñamos</span></div>
            <div><strong>03</strong><span>Instalamos</span></div>
          </div>
          <a className="text-link" href="#contacto">Hablemos de tu proyecto <span>→</span></a>
        </div>
      </div>
    </section>
  );
}
