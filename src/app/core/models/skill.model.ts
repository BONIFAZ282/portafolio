import { Localized } from './localized.model';

export interface SkillCategory {
  /** Nombre de la categoría, ej: Frontend. */
  name: Localized;
  /** Icono de Material Icons. */
  icon: string;
  /** Lista de tecnologías. */
  skills: string[];
}
