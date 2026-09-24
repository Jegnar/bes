import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '../data/siteData';
import Brand from './Brand';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Brand />
        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a className="button button--small nav__cta" href="#contacto" onClick={() => setOpen(false)}>Cotizar proyecto</a>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
