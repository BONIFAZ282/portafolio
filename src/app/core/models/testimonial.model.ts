import { Localized } from './localized.model';

export interface Testimonial {
  /** Nombre de quien da el testimonio. */
  author: string;
  /** Cargo / profesión. */
  role: Localized;
  /** Empresa u organización (opcional). */
  company?: string;
  /** Foto o avatar (opcional). */
  avatar?: string;
  /** El testimonio en sí. */
  quote: Localized;
  /** Slug del proyecto relacionado (opcional). */
  projectSlug?: string;
}
