import { ArrowRight, Calculator, Info, Sun, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';

const PANEL_WATTS = 630;

const formatCurrency = (value) => new Intl.NumberFormat('es-MX', {
  style: 'currency', currency: 'MXN', maximumFractionDigits: 0,
}).format(value);

export default function SavingsCalculator() {
  const [bill, setBill] = useState(3000);
  const [coverage, setCoverage] = useState(80);

  const estimate = useMemo(() => {
    const annualBill = bill * 6;
    const annualSavings = annualBill * (coverage / 100);
    const estimatedKwh = annualBill / 3.5;
    const annualProductionPerPanel = PANEL_WATTS * 5.3 * 365 * 0.83 / 1000;
    const panels = Math.max(1, Math.ceil((estimatedKwh * (coverage / 100)) / annualProductionPerPanel));
    return { annualSavings, longTerm: annualSavings * 25, panels };
  }, [bill, coverage]);

  return (
    <section className="section calculator" id="calculadora">
      <div className="container calculator__grid">
        <div className="calculator__intro">
          <span className="eyebrow">Herramienta fotovoltaica</span>
          <h2>Convierte tu recibo de luz en una referencia de ahorro.</h2>
          <p>Ajusta los valores para obtener una referencia inicial. El cálculo definitivo se realiza con tu historial de consumo y las condiciones de tu inmueble.</p>
          <div className="calculator__note"><Info /><span>Estimación informativa. No representa una cotización ni garantía de ahorro.</span></div>
        </div>
        <div className="calculator__panel">
          <div className="calculator__heading"><span><Calculator /> Estimador BES</span><small>Recibo bimestral</small></div>
          <label htmlFor="bill">¿Cuánto pagas de luz?</label>
          <output>{formatCurrency(bill)}</output>
          <input id="bill" type="range" min="500" max="30000" step="500" value={bill} onChange={(event) => setBill(Number(event.target.value))} style={{ '--range-progress': `${((bill - 500) / 29500) * 100}%` }} />
          <div className="calculator__range"><span>$500</span><span>$30,000+</span></div>
          <label htmlFor="coverage">Cobertura estimada del consumo</label>
          <div className="calculator__coverage"><input id="coverage" type="range" min="50" max="100" step="5" value={coverage} onChange={(event) => setCoverage(Number(event.target.value))} style={{ '--range-progress': `${(coverage - 50) * 2}%` }} /><strong>{coverage}%</strong></div>
          <div className="calculator__results">
            <div className="calculator__panels"><span><Sun /> Paneles estimados</span><strong>{estimate.panels} paneles</strong><small>Módulos de referencia de {PANEL_WATTS} W</small></div>
            <div><span>Ahorro anual estimado</span><strong>{formatCurrency(estimate.annualSavings)}</strong></div>
            <div className="calculator__featured"><span><Zap /> Potencial a 25 años</span><strong>{formatCurrency(estimate.longTerm)}</strong></div>
          </div>
          <p className="calculator__assumption">Estimación basada en paneles de {PANEL_WATTS} W, tarifa media de referencia y condiciones solares promedio. El número definitivo requiere una evaluación técnica.</p>
          <a className="button button--full" href="#contacto">Solicitar cálculo preciso <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
