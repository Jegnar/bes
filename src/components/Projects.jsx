import { ArrowRight, BarChart3, Cpu, ShieldCheck } from 'lucide-react';
import industrialImage from '../assets/solar-industrial.jpg';

export default function Projects() {
  return (
    <section className="project-feature" aria-label="Soluciones solares industriales">
      <img className="project-feature__image" src={industrialImage} alt="Instalación industrial de paneles solares en México" />
      <div className="project-feature__shade" />
      <div className="container project-feature__content">
        <span className="eyebrow eyebrow--light">Capacidad a cualquier escala</span>
        <h2>Ingeniería que convierte superficie en energía.</h2>
        <p>Desde un hogar hasta una operación industrial, cada sistema BES se diseña alrededor del consumo real, el espacio disponible y los objetivos del proyecto.</p>
        <div className="project-feature__points">
          <span><BarChart3 /> Análisis energético</span>
          <span><Cpu /> Monitoreo inteligente</span>
          <span><ShieldCheck /> Instalación profesional</span>
        </div>
        <a className="button" href="#contacto">Evaluar mi proyecto <ArrowRight size={18} /></a>
      </div>
    </section>
  );
}
