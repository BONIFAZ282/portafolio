import { SkillCategory } from '../models';

/** Habilidades por categoría (basadas en tu stack real). Edítalas libremente. */
export const SKILLS: SkillCategory[] = [
  {
    name: { es: 'Frontend', en: 'Frontend' },
    icon: 'devices',
    skills: ['Angular', 'React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'Angular Material'],
  },
  {
    name: { es: 'Backend', en: 'Backend' },
    icon: 'dns',
    skills: ['C# / .NET', 'Spring Boot', 'Kotlin', 'PHP', 'REST API'],
  },
  {
    name: { es: 'Bases de datos', en: 'Databases' },
    icon: 'storage',
    skills: ['SQL Server', 'MySQL', 'PostgreSQL'],
  },
  {
    name: { es: 'Nube y despliegue', en: 'Cloud & deployment' },
    icon: 'cloud',
    skills: ['AWS', 'Azure', 'RedHat', 'cPanel'],
  },
  {
    name: { es: 'Herramientas', en: 'Tools' },
    icon: 'build',
    skills: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Postman', 'Figma'],
  },
];
