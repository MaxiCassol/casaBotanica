import { FormData } from '../components/Contact/Contact';

export function sendEmail(data) {
  // Envía por mailto
  const subject = `Mensaje de ${data.name}`;
  const body = `
Nombre: ${data.name}
Email: ${data.email}

Mensaje:
${data.message}
  `;
  
  window.location.href = `mailto:casabotanica1618@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}