import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { validateContactForm } from '../utils/formValidation';

const initialValues = { name: '', email: '', phone: '', project: 'Fotovoltaico', message: '' };

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const update = ({ target }) => setValues({ ...values, [target.name]: target.value });
  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (!Object.keys(nextErrors).length) setSent(true);
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
          {sent ? (
            <div className="form-success"><CheckCircle2 /><h3>¡Gracias, {values.name}!</h3><p>Recibimos tus datos. En la versión final conectaremos este formulario con tu correo o CRM.</p><button type="button" className="text-link" onClick={() => { setSent(false); setValues(initialValues); }}>Enviar otra solicitud</button></div>
          ) : <>
            <div className="contact-form__title"><span>Solicita tu evaluación</span><small>Completa tus datos y cuéntanos qué necesitas.</small></div>
            <div className="field"><label htmlFor="name">Nombre completo</label><input id="name" name="name" value={values.name} onChange={update} placeholder="Tu nombre" autoComplete="name" />{errors.name && <small>{errors.name}</small>}</div>
            <div className="field-row">
              <div className="field"><label htmlFor="email">Correo electrónico</label><input id="email" name="email" type="email" value={values.email} onChange={update} placeholder="nombre@correo.com" autoComplete="email" />{errors.email && <small>{errors.email}</small>}</div>
              <div className="field"><label htmlFor="phone">Teléfono</label><input id="phone" name="phone" inputMode="tel" value={values.phone} onChange={update} placeholder="+52 000 000 0000" autoComplete="tel" />{errors.phone && <small>{errors.phone}</small>}</div>
            </div>
            <div className="field"><label htmlFor="project">Área del proyecto</label><select id="project" name="project" value={values.project} onChange={update}><option>Fotovoltaico</option><option>Refrigeración</option><option>Instalación eléctrica</option><option>Proyecto integral</option></select></div>
            <div className="field"><label htmlFor="message">Cuéntanos un poco más <span>(opcional)</span></label><textarea id="message" name="message" value={values.message} onChange={update} placeholder="Consumo aproximado, ubicación o cualquier detalle..." rows="3" /></div>
            <button className="button button--full" type="submit">Solicitar evaluación <ArrowRight size={18} /></button>
            <p className="form-note">Al enviar aceptas nuestro aviso de privacidad.</p>
          </>}
        </form>
      </div>
    </section>
  );
}
