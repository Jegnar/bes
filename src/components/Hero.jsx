import { ArrowRight, BadgeCheck, MapPin, ShieldCheck, Sun } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="hero__eyebrow"><BadgeCheck size={18} /> Expertos en energía solar</div>
        <h1>Tu energía.<br /><span>Sin límites.</span></h1>
        <p>Diseñamos e instalamos sistemas solares inteligentes que transforman la manera en que hogares y empresas consumen energía.</p>
        <div className="hero__actions">
          <a className="button" href="#contacto">Obtén tu cotización <ArrowRight size={18} /></a>
          <a className="button button--ghost" href="#soluciones">Conoce las soluciones</a>
        </div>
        <div className="hero__trust">
          <span><ShieldCheck /> Evaluación personalizada</span>
          <span><MapPin /> Proyectos en México</span>
        </div>
      </div>
      <div className="hero__energy-card" aria-hidden="true">
        <span className="hero__energy-icon"><Sun /></span>
        <div><small>Energía limpia</small><strong>Hecha para durar</strong></div>
        <i />
      </div>
      <a className="hero__scroll" href="#impacto" aria-label="Desplazarse a la siguiente sección"><span /> Descubre más</a>
    </section>
  );
}
