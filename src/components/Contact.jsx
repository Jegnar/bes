import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { validateContactForm } from '../utils/formValidation';

const initialValues = { name: '', email: '', phone: '', project: 'Fotovoltaico', message: '', website: '' };

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sentName, setSentName] = useState('');
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const update = ({ target }) => setValues({ ...values, [target.name]: target.value });
  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    setSubmitError('');
    if (Object.keys(nextErrors).length) return;

    setSending(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'No pudimos enviar tu solicitud. Intenta nuevamente.');
      setSentName(values.name);
      setValues(initialValues);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="container contact__grid">
        <div className="contact__intro">
          <span className="eyebrow eyebrow--light">Da el primer paso</span>
          <h2>Conversemos sobre lo que tu proyecto necesita.</h2>
          <p>Cuéntanos si buscas una solución fotovoltaica, de refrigeración o eléctrica. Revisaremos la información para orientar el siguiente paso.</p>
          <div className="contact__details">
            <span><MapPin /> México</span>
            <span><Clock3 /> Atención personalizada</span>
            <span><ShieldCheck /> Tus datos se mantienen protegidos</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          {sentName ? (
            <div className="form-success"><CheckCircle2 /><h3>¡Gracias, {sentName}!</h3><p>Tu solicitud quedó registrada. Nuestro equipo revisará la información para comunicarse contigo.</p><button type="button" className="text-link" onClick={() => setSentName('')}>Enviar otra solicitud</button></div>
          ) : <>
            <div className="contact-form__title"><span>Solicita tu evaluación</span><small>Completa tus datos y cuéntanos qué necesitas.</small></div>
            <div className="field"><label htmlFor="name">Nombre completo</label><input id="name" name="name" value={values.name} onChange={update} placeholder="Tu nombre" autoComplete="name" />{errors.name && <small>{errors.name}</small>}</div>
            <div className="field-row">
              <div className="field"><label htmlFor="email">Correo electrónico</label><input id="email" name="email" type="email" value={values.email} onChange={update} placeholder="nombre@correo.com" autoComplete="email" />{errors.email && <small>{errors.email}</small>}</div>
              <div className="field"><label htmlFor="phone">Teléfono</label><input id="phone" name="phone" inputMode="tel" value={values.phone} onChange={update} placeholder="+52 000 000 0000" autoComplete="tel" />{errors.phone && <small>{errors.phone}</small>}</div>
            </div>
            <div className="field"><label htmlFor="project">Área del proyecto</label><select id="project" name="project" value={values.project} onChange={update}><option>Fotovoltaico</option><option>Refrigeración</option><optgroup label="Trabajos eléctricos"><option>Trabajo eléctrico de media tensión</option><option>Trabajo eléctrico de alta tensión</option></optgroup><option>Proyecto integral</option></select></div>
            <div className="field"><label htmlFor="message">Cuéntanos un poco más <span>(opcional)</span></label><textarea id="message" name="message" value={values.message} onChange={update} placeholder="Consumo aproximado, ubicación o cualquier detalle..." rows="3" /></div>
            <div className="form-honeypot" aria-hidden="true"><label htmlFor="website">Sitio web</label><input id="website" name="website" value={values.website} onChange={update} tabIndex="-1" autoComplete="off" /></div>
            {submitError && <p className="form-error" role="alert">{submitError}</p>}
            <button className="button button--full" type="submit" disabled={sending}>{sending ? 'Enviando solicitud…' : 'Solicitar evaluación'} {!sending && <ArrowRight size={18} />}</button>
            <p className="form-note">Al enviar aceptas nuestro aviso de privacidad.</p>
          </>}
        </form>
      </div>
    </section>
  );
}
