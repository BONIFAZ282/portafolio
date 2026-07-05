import { SkillCategory } from '../models';

/** Habilidades por categoría (edítalas con tu stack real). */
export const SKILLS: SkillCategory[] = [
  {
    name: { es: 'Frontend', en: 'Frontend' },
    icon: 'devices',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'Angular Material', 'RxJS'],
  },
  {
    name: { es: 'Backend', en: 'Backend' },
    icon: 'dns',
    skills: ['Node.js', 'REST APIs', 'Express', 'C# / .NET'],
  },
  {
    name: { es: 'Bases de datos', en: 'Databases' },
    icon: 'storage',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server'],
  },
  {
    name: { es: 'Herramientas', en: 'Tools' },
    icon: 'build',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
];
