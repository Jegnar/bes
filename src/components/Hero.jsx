import { ArrowRight, BadgeCheck } from 'lucide-react';

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
      </div>
      <a className="hero__scroll" href="#impacto" aria-label="Desplazarse a la siguiente sección"><span /> Descubre más</a>
    </section>
  );
}
