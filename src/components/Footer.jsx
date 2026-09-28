import { navigation } from '../data/siteData';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div><Brand /><p>Energía inteligente para un futuro sin límites.</p></div>
        <div className="footer__links"><strong>Explora</strong>{navigation.slice(1).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
        <div className="footer__links"><strong>Divisiones</strong><a href="#soluciones">Fotovoltaica</a><a href="#soluciones">Refrigeración</a><a href="#soluciones">Ingeniería eléctrica</a></div>
        <div className="footer__location"><strong>Ubicación</strong><span>México</span></div>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} Beyond Electricity Solutions.</span><span>Hecho para impulsar un mundo mejor.</span></div>
    </footer>
  );
}
