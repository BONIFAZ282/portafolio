import { Testimonial } from '../models';

/**
 * Testimonios (en duro por ahora).
 * El testimonio de la doctora ya está enlazado al proyecto de la clínica
 * mediante projectSlug: 'clinica-obstetricia'.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Dra. Ariana Oncoy',
    role: {
      es: 'Médico Obstetra',
      en: 'Obstetrician',
    },
    company: 'Clínica de Obstetricia',
    avatar: '',
    projectSlug: 'clinica-obstetricia',
    quote: {
      es: 'El sistema cambió por completo la forma en que llevo mi consultorio. Antes todo era en papel; ahora tengo las citas y los historiales de mis pacientes organizados y a un clic. Un trabajo profesional y muy bien hecho.',
      en: 'The system completely changed the way I run my practice. Everything used to be on paper; now I have my appointments and patient records organized and one click away. Professional work, very well done.',
    },
  },
];
