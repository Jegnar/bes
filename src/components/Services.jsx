import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import electricalImage from '../assets/instalacion-electrica.jpg';
import refrigerationImage from '../assets/refrigeracion.jpg';
import solarImage from '../assets/solar-industrial.jpg';
import { businessAreas } from '../data/siteData';
import SectionHeading from './SectionHeading';

const areaImages = {
  fotovoltaica: solarImage,
  refrigeracion: refrigerationImage,
  electrica: electricalImage,
};

export default function Services() {
  return (
    <section className="section services" id="soluciones">
      <div className="container">
        <SectionHeading
          eyebrow="Divisiones BES"
          title="Soluciones técnicas para la energía, la temperatura y la operación."
          text="Reunimos tres especialidades bajo una misma metodología: entender la necesidad, diseñar con precisión y ejecutar con responsabilidad."
        />
        <div className="service-sections">
          {businessAreas.map((area, index) => {
            const AreaIcon = area.icon;
            return (
              <article className={`service-section ${index % 2 ? 'service-section--reverse' : ''}`} id={area.id} key={area.id}>
                <div className="service-section__image">
                  <img src={areaImages[area.id]} alt={`${area.kicker}: servicio profesional de BES en México`} loading="lazy" />
                  <div className="service-section__image-label"><AreaIcon /><span>{area.kicker}</span></div>
                  <span className="service-section__number">{area.number}</span>
                </div>
                <div className="service-section__content">
                  <span className="service-section__eyebrow"><i /> División {area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                  <div className="service-section__features">
                    {area.features.map(({ icon: Icon, title, text }) => (
                      <div key={title}>
                        <span><Icon /></span>
                        <section><h4>{title}</h4><p>{text}</p></section>
                        <CheckCircle2 />
                      </div>
                    ))}
                  </div>
                  <div className="service-section__footer">
                    <div>{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <a href="#contacto">Solicitar evaluación <ArrowUpRight /></a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
