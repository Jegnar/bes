import { benefits } from '../data/siteData';
import SectionHeading from './SectionHeading';

export default function Benefits() {
  return (
    <section className="section benefits">
      <div className="container">
        <SectionHeading eyebrow="Por qué elegir BES" title="Ingeniería que cuida cada detalle del proyecto" text="Un solo equipo para analizar, diseñar, ejecutar y acompañar soluciones técnicas esenciales." align="center" />
        <div className="benefits__grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="benefit" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
