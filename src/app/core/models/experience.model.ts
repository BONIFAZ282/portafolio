import { Localized } from './localized.model';

export interface ExperienceRole {
  /** Cargo. */
  title: Localized;
  /** Periodo, ej: 'Abr. 2025 - actualidad'. */
  period: Localized;
  /** Qué hiciste. */
  description: Localized;
  /** Tecnologías usadas. */
  tags: string[];
  /** True si es el trabajo actual. */
  current?: boolean;
}

export interface Experience {
  /** Empresa u organización. */
  company: string;
  /** Iniciales para el avatar. */
  initials: string;
  /** Color de acento del avatar (hex). */
  color: string;
  /** Ubicación. */
  location: string;
  /** Uno o más cargos en la misma empresa. */
  roles: ExperienceRole[];
}

export interface Education {
  institution: string;
  initials: string;
  color: string;
  degree: Localized;
  period: string;
  note?: Localized;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}
