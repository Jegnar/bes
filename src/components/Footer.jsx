import { navigation } from '../data/siteData';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div><Brand /><p>Energía inteligente para un futuro sin límites.</p></div>
        <div className="footer__links"><strong>Explora</strong>{navigation.slice(1).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
        <div className="footer__links"><strong>Soluciones</strong><a href="#soluciones">Residencial</a><a href="#soluciones">Comercial</a><a href="#soluciones">Industrial</a></div>
        <div className="footer__location"><strong>Ubicación</strong><span>México</span></div>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} Beyond Electricity Solutions.</span><span>Hecho para impulsar un mundo mejor.</span></div>
    </footer>
  );
}
