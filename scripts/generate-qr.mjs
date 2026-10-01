import { mkdir } from 'node:fs/promises';
import QRCode from 'qrcode';

const websiteUrl = 'https://bes.jean-barrera.workers.dev';
const options = {
  errorCorrectionLevel: 'H',
  margin: 4,
  color: { dark: '#071A2D', light: '#FFFFFF' },
};

await mkdir('public', { recursive: true });
await Promise.all([
  QRCode.toFile('public/qr-bes.png', websiteUrl, { ...options, type: 'png', width: 1600 }),
  QRCode.toFile('public/qr-bes.svg', websiteUrl, { ...options, type: 'svg', width: 1200 }),
]);

console.log(`QR de BES generado para ${websiteUrl}`);
