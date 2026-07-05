import { Localized } from './localized.model';

export type ProjectType = 'client' | 'thesis' | 'personal';
export type ProjectStatus = 'live' | 'in-progress' | 'private';

export interface Project {
  /** Identificador para la URL, ej: 'clinica-obstetricia' */
  slug: string;
  /** 'client' = para un cliente. 'thesis' = proyecto de tesis. 'personal' = propio. */
  type: ProjectType;
  /** Estado del proyecto (muestra un badge). Opcional. */
  status?: ProjectStatus;
  /** Nombre del proyecto (no se traduce). */
  title: string;
  /** Frase corta para la tarjeta. */
  summary: Localized;
  /** Descripción general del proyecto. */
  description: Localized;
  /** Qué necesitaba el cliente / qué problema existía. */
  problem: Localized;
  /** Qué construiste para resolverlo. */
  solution: Localized;
  /** Resultado obtenido. */
  result: Localized;
  /** Otros rubros/negocios a los que también les sirve este sistema (venta por vertical). */
  idealFor?: Localized;
  /** Tecnologías usadas (se muestran como chips). */
  tags: string[];
  /** Imagen principal (ruta dentro de /public o URL). */
  image: string;
  /** Capturas adicionales (rutas en /public o URLs). */
  gallery?: string[];
  /**
   * Video del proyecto (opcional). Acepta:
   *  - Link de YouTube: 'https://www.youtube.com/watch?v=ID' o 'https://youtu.be/ID'
   *  - Link de Vimeo: 'https://vimeo.com/ID'
   *  - Archivo propio: 'video/demo.mp4' (colócalo en /public/video/)
   */
  videoUrl?: string;
  /** URL de la demo en vivo. */
  demoUrl?: string;
  /** URL del repositorio. */
  repoUrl?: string;
  /** Si es el proyecto estrella (se resalta en el inicio). */
  featured: boolean;
  /** Año del proyecto. */
  year: number;
}
