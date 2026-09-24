export const validateContactForm = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Escribe tu nombre.';
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Ingresa un correo válido.';
  if (!/^[0-9+()\s-]{8,}$/.test(values.phone)) errors.phone = 'Ingresa un teléfono válido.';
  return errors;
};
