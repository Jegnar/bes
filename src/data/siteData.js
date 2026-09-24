import { Building2, Factory, Headphones, Home, Leaf, ShieldCheck, Sun, Zap } from 'lucide-react';

export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export const stats = [
  { value: '+25', label: 'Proyectos instalados' },
  { value: '25 años', label: 'De vida útil' },
  { value: '100%', label: 'Ahorro potencial' },
  { value: '24/7', label: 'Monitoreo inteligente' },
];

export const services = [
  { icon: Home, title: 'Solar residencial', text: 'Convierte tu techo en una fuente de ahorro y protege tu hogar de las tarifas eléctricas.' },
  { icon: Building2, title: 'Solar comercial', text: 'Soluciones escalables para reducir costos operativos y fortalecer el valor de tu negocio.' },
  { icon: Factory, title: 'Proyectos industriales', text: 'Ingeniería de alto desempeño diseñada para cubrir grandes demandas de energía.' },
];

export const benefits = [
  { icon: Zap, title: 'Ahorro desde el primer día', text: 'Reduce el recibo de luz con un sistema dimensionado para tu consumo real.' },
  { icon: ShieldCheck, title: 'Tecnología confiable', text: 'Seleccionamos equipos certificados, resistentes y con garantías de largo plazo.' },
  { icon: Leaf, title: 'Impacto positivo', text: 'Genera energía limpia y disminuye la huella de carbono de tu hogar o empresa.' },
  { icon: Headphones, title: 'Acompañamiento total', text: 'Te guiamos desde el estudio inicial hasta el monitoreo de tu instalación.' },
];

export const processSteps = [
  { number: '01', title: 'Diagnóstico', text: 'Analizamos tu recibo y tus necesidades de energía.' },
  { number: '02', title: 'Diseño', text: 'Creamos una propuesta a la medida de tu espacio y consumo.' },
  { number: '03', title: 'Instalación', text: 'Nuestro equipo certificado instala y pone en marcha el sistema.' },
  { number: '04', title: 'Monitoreo', text: 'Supervisas tu producción y ahorro desde cualquier dispositivo.' },
];

export const companyValues = [
  { icon: Sun, title: 'Energía que trasciende', text: 'Diseñamos sistemas que generan valor económico, ambiental y social durante décadas.' },
];
