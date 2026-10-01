const allowedProjects = new Set([
  'Fotovoltaico',
  'Refrigeración',
  'Trabajo eléctrico de media tensión',
  'Trabajo eléctrico de alta tensión',
  'Proyecto integral',
]);

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  },
});

const clean = (value, maxLength) => String(value ?? '').trim().slice(0, maxLength);

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const sendWithWeb3Forms = async (env, contact) => {
  if (!env.WEB3FORMS_ACCESS_KEY) return false;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_ACCESS_KEY,
        subject: `Nueva solicitud BES: ${contact.project}`,
        from_name: 'Sitio web BES',
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        project: contact.project,
        message: contact.message || 'Sin mensaje adicional',
      }),
    });
    const result = await response.json().catch(() => ({}));
    const sent = response.ok && result.success === true;
    if (!sent) {
      console.error(JSON.stringify({ message: 'Web3Forms rejected notification', status: response.status }));
    }
    return sent;
  } catch (error) {
    console.error(JSON.stringify({ message: 'Web3Forms notification failed', error: error instanceof Error ? error.message : String(error) }));
    return false;
  }
};

const validate = (payload) => {
  const data = {
    name: clean(payload.name, 100),
    email: clean(payload.email, 160).toLowerCase(),
    phone: clean(payload.phone, 40),
    project: clean(payload.project, 100),
    message: clean(payload.message, 3000),
    website: clean(payload.website, 200),
  };

  if (data.website) return { bot: true };
  if (data.name.length < 2) return { error: 'Escribe un nombre válido.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return { error: 'Ingresa un correo válido.' };
  if (!/^[0-9+()\s-]{8,}$/.test(data.phone)) return { error: 'Ingresa un teléfono válido.' };
  if (!allowedProjects.has(data.project)) return { error: 'Selecciona un área de proyecto válida.' };
  return { data };
};

const sendNotification = async (env, contact) => {
  if (env.WEB3FORMS_ACCESS_KEY) return sendWithWeb3Forms(env, contact);
  if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL) return false;

  const safe = Object.fromEntries(Object.entries(contact).map(([key, value]) => [key, escapeHtml(String(value))]));
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL || 'BES Website <onboarding@resend.dev>',
        to: [env.CONTACT_EMAIL],
        reply_to: contact.email,
        subject: `Nueva solicitud BES: ${contact.project}`,
        text: `Nueva solicitud BES\n\nNombre: ${contact.name}\nCorreo: ${contact.email}\nTeléfono: ${contact.phone}\nÁrea: ${contact.project}\nMensaje: ${contact.message || 'Sin mensaje adicional'}`,
        html: `
          <h2>Nueva solicitud desde la página de BES</h2>
          <p><strong>Nombre:</strong> ${safe.name}</p>
          <p><strong>Correo:</strong> ${safe.email}</p>
          <p><strong>Teléfono:</strong> ${safe.phone}</p>
          <p><strong>Área:</strong> ${safe.project}</p>
          <p><strong>Mensaje:</strong><br>${safe.message.replaceAll('\n', '<br>') || 'Sin mensaje adicional'}</p>
        `,
      }),
    });

    if (!response.ok) {
      console.error(JSON.stringify({ message: 'Resend rejected notification', status: response.status }));
    }
    return response.ok;
  } catch (error) {
    console.error(JSON.stringify({ message: 'Email notification failed', error: error instanceof Error ? error.message : String(error) }));
    return false;
  }
};

export default {
  async fetch(request, env, context) {
    const url = new URL(request.url);

    if (url.pathname !== '/api/contact') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return json({ error: 'Método no permitido.' }, 405);

    const contentLength = Number(request.headers.get('content-length') || 0);
    if (contentLength > 12_000) return json({ error: 'La solicitud es demasiado grande.' }, 413);

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: 'La información enviada no es válida.' }, 400);
    }

    const validated = validate(payload);
    if (validated.bot) return json({ success: true });
    if (validated.error) return json({ error: validated.error }, 400);
    if (!env.CONTACTS_DB) return json({ error: 'El formulario todavía no está configurado.' }, 503);

    const contact = validated.data;
    try {
      const result = await env.CONTACTS_DB.prepare(`
        INSERT INTO contact_requests (name, email, phone, project, message)
        VALUES (?, ?, ?, ?, ?)
      `).bind(contact.name, contact.email, contact.phone, contact.project, contact.message).run();

      context.waitUntil((async () => {
        const sent = await sendNotification(env, contact);
        if (sent) {
          await env.CONTACTS_DB.prepare('UPDATE contact_requests SET email_sent = 1 WHERE id = ?')
            .bind(result.meta.last_row_id)
            .run();
        }
      })());

      return json({ success: true });
    } catch (error) {
      console.error(JSON.stringify({ message: 'Contact form error', error: error instanceof Error ? error.message : String(error) }));
      return json({ error: 'No pudimos registrar la solicitud. Intenta nuevamente.' }, 500);
    }
  },
};
