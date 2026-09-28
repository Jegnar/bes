import About from './components/About';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Projects from './components/Projects';
import Services from './components/Services';
import SavingsCalculator from './components/SavingsCalculator';
import Stats from './components/Stats';

export default function App() {
  return <><Header /><main><Hero /><Stats /><Services /><SavingsCalculator /><About /><Projects /><Benefits /><Process /><Faq /><Contact /></main><Footer /></>;
}
