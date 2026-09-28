import { ArrowRight, BadgeCheck, MapPin, ShieldCheck, Sun } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="hero__eyebrow"><BadgeCheck size={18} /> Soluciones integrales de ingeniería</div>
        <h1>Ingeniería que<br /><span>impulsa tu futuro.</span></h1>
        <p>Integramos energía fotovoltaica, refrigeración e instalaciones eléctricas para hogares, comercios e industria.</p>
        <div className="hero__actions">
          <a className="button" href="#contacto">Obtén tu cotización <ArrowRight size={18} /></a>
          <a className="button button--ghost" href="#soluciones">Explora nuestras áreas</a>
        </div>
        <div className="hero__trust">
          <span><ShieldCheck /> Evaluación personalizada</span>
          <span><MapPin /> Proyectos en México</span>
        </div>
      </div>
      <div className="hero__energy-card" aria-hidden="true">
        <span className="hero__energy-icon"><Sun /></span>
        <div><small>Soluciones BES</small><strong>Ingeniería que responde</strong></div>
        <i />
      </div>
      <a className="hero__scroll" href="#impacto" aria-label="Desplazarse a la siguiente sección"><span /> Descubre más</a>
    </section>
  );
}
