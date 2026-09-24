import { stats } from '../data/siteData';

export default function Stats() {
  return (
    <section className="stats" id="impacto" aria-label="Resultados BES">
      <div className="container stats__grid">
        {stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </div>
    </section>
  );
}
