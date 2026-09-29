import { CircuitBoard, Factory, Gauge, Headphones, Leaf, ShieldCheck, Snowflake, Sun, ThermometerSnowflake, Wrench, Zap } from 'lucide-react';

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

export const businessAreas = [
  {
    id: 'fotovoltaica', number: '01', icon: Sun, kicker: 'Energía fotovoltaica',
    title: 'Generación solar diseñada para producir valor durante años.',
    text: 'Convertimos superficies disponibles en activos energéticos. Analizamos tu consumo y desarrollamos sistemas fotovoltaicos residenciales, comerciales e industriales con una ejecución completa, de la ingeniería a la puesta en marcha.',
    features: [
      { icon: Gauge, title: 'Ingeniería a la medida', text: 'Dimensionamos el sistema con base en consumo, espacio y proyección.' },
      { icon: Factory, title: 'Instalación integral', text: 'Coordinamos montaje, conexión y puesta en marcha profesional.' },
      { icon: Zap, title: 'Desempeño visible', text: 'Monitorea la generación y conoce cómo trabaja tu inversión.' },
    ],
    tags: ['Residencial', 'Comercial', 'Industrial'],
  },
  {
    id: 'refrigeracion', number: '02', icon: Snowflake, kicker: 'Refrigeración',
    title: 'Control térmico que protege tu producto y tu operación.',
    text: 'Diseñamos, instalamos y atendemos sistemas de refrigeración comercial e industrial orientados a mantener temperaturas estables, reducir interrupciones y aprovechar mejor la energía.',
    features: [
      { icon: ThermometerSnowflake, title: 'Solución térmica', text: 'Calculamos capacidad, condiciones de operación y distribución.' },
      { icon: Wrench, title: 'Servicio especializado', text: 'Mantenimiento preventivo y correctivo para conservar continuidad.' },
      { icon: Gauge, title: 'Eficiencia operativa', text: 'Revisamos desempeño y consumo para detectar oportunidades de mejora.' },
    ],
    tags: ['Comercial', 'Industrial', 'Mantenimiento'],
  },
  {
    id: 'electrica', number: '03', icon: CircuitBoard, kicker: 'Ingeniería eléctrica',
    title: 'Infraestructura eléctrica preparada para trabajar con seguridad.',
    text: 'Analizamos la calidad de la energía de tu sistema eléctrico para diseñar circuitos e instalaciones con resultados a tu medida. Creamos una base confiable para que hogares, comercios e industria operen con seguridad y capacidad de crecimiento.',
    features: [
      { icon: CircuitBoard, title: 'Circuitos y tableros', text: 'Distribución de cargas, canalización y organización profesional.' },
      { icon: ShieldCheck, title: 'Protección y seguridad', text: 'Criterios de protección orientados a personas, equipos e instalación.' },
      { icon: Wrench, title: 'Diagnóstico y servicio', text: 'Revisión, mantenimiento y corrección de fallas o puntos críticos.' },
    ],
    tags: ['Media tensión', 'Alta tensión', 'Tableros'],
  },
];

export const benefits = [
  { icon: Zap, title: 'Eficiencia con propósito', text: 'Cada solución parte del consumo, la capacidad y las condiciones reales de operación.' },
  { icon: ShieldCheck, title: 'Ejecución responsable', text: 'Trabajamos con enfoque técnico, orden en sitio y atención a la seguridad.' },
  { icon: Leaf, title: 'Valor a largo plazo', text: 'Buscamos soluciones duraderas que reduzcan desperdicios y costos operativos.' },
  { icon: Headphones, title: 'Un equipo que responde', text: 'Te acompañamos desde el diagnóstico hasta la puesta en marcha y el servicio.' },
];

export const processSteps = [
  { number: '01', title: 'Diagnóstico', text: 'Escuchamos la necesidad, revisamos las condiciones y definimos el alcance.' },
  { number: '02', title: 'Ingeniería', text: 'Diseñamos una solución viable, clara y alineada con tu operación.' },
  { number: '03', title: 'Ejecución', text: 'Coordinamos la instalación con orden, comunicación y atención al detalle.' },
  { number: '04', title: 'Seguimiento', text: 'Verificamos el funcionamiento y permanecemos disponibles para servicio.' },
];

export const faqs = [
  { question: '¿Qué tipo de proyectos desarrolla BES?', answer: 'Atendemos proyectos fotovoltaicos, sistemas de refrigeración e instalaciones eléctricas para aplicaciones residenciales, comerciales e industriales.' },
  { question: '¿Qué información necesitan para preparar una evaluación?', answer: 'Depende de la división. Podemos solicitar recibos de energía, ubicación, fotografías del sitio, capacidades de equipos, temperaturas requeridas o información de cargas eléctricas.' },
  { question: '¿Trabajan proyectos integrales?', answer: 'Sí. Cuando el proyecto lo requiere podemos evaluar cómo interactúan la generación solar, la refrigeración y la infraestructura eléctrica para plantear una solución coordinada.' },
  { question: '¿Ofrecen mantenimiento?', answer: 'Contemplamos mantenimiento y diagnóstico dentro de las áreas de refrigeración e instalaciones eléctricas, además del seguimiento al desempeño en sistemas fotovoltaicos.' },
  { question: '¿Cómo comienza un proyecto?', answer: 'Comienza con una conversación y un diagnóstico inicial. A partir de la información disponible definimos el alcance, las visitas necesarias y el siguiente paso técnico.' },
];

export const companyValues = [
  { icon: Sun, title: 'Energía que trasciende', text: 'Diseñamos sistemas que generan valor económico, ambiental y social durante décadas.' },
];
