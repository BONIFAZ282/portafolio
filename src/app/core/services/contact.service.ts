import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly endpoint = 'https://api.web3forms.com/submit';

  /** True cuando ya pusiste tu Access Key real de Web3Forms. */
  isConfigured(): boolean {
    const key = environment.web3formsAccessKey;
    return !!key && !key.startsWith('YOUR_');
  }

  /** Envía el mensaje vía Web3Forms (sin backend, sin abrir el cliente de correo). */
  async send(payload: ContactPayload): Promise<void> {
    const res = await fetch(this.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: environment.web3formsAccessKey,
        subject: `Nuevo mensaje del portafolio — ${payload.name}`,
        from_name: 'Portafolio Jorge Bonifaz',
        name: payload.name,
        email: payload.email,
        message: payload.message,
      }),
    });

    const data = await res.json();
    if (!data.success) {
      throw new Error(data.message || 'No se pudo enviar el mensaje.');
    }
  }
}
