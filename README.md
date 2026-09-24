# BES — Beyond Electricity Solutions

Landing page responsive para una empresa de instalación de paneles solares, desarrollada con React y Vite.

## Ejecutar el proyecto

Necesitas instalar [Node.js LTS](https://nodejs.org/) y después abrir una terminal en esta carpeta:

```bash
npm install
npm run dev
```

Vite mostrará la dirección local del sitio, normalmente `http://localhost:5173`.

## Estructura

- `src/components/`: cada sección de la página en su propio componente.
- `src/styles/`: variables, estilos generales, componentes y responsive por separado.
- `src/data/siteData.js`: textos repetibles, servicios, beneficios y navegación.
- `src/utils/formValidation.js`: validación del formulario.
- `src/assets/`: recursos visuales del sitio.

## Antes de publicar

1. Conectar el formulario a un servicio de correo, CRM o API.
2. Agregar teléfono, correo o redes sociales cuando estén disponibles.
3. Confirmar las cifras de resultados en `src/data/siteData.js`.
