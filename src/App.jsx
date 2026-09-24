import About from './components/About';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Projects from './components/Projects';
import Services from './components/Services';
import Stats from './components/Stats';

export default function App() {
  return <><Header /><main><Hero /><Stats /><Services /><About /><Projects /><Benefits /><Process /><Contact /></main><Footer /></>;
}
