import { Certification, Education, Experience } from '../models';

/** Experiencia laboral (de tu CV + LinkedIn). Edita libremente. */
export const EXPERIENCES: Experience[] = [
  {
    company: 'Caja Municipal Ica',
    initials: 'CI',
    color: '#c0392b',
    location: 'Ica, Perú',
    roles: [
      {
        title: {
          es: 'Desarrollador junior de software',
          en: 'Junior software developer',
        },
        period: { es: 'Abr. 2025 - actualidad', en: 'Apr. 2025 - present' },
        current: true,
        description: {
          es: 'Desarrollo de aplicaciones web con Angular, de escritorio con C# y móviles, además de servicios backend con Spring Boot y Kotlin, sobre SQL Server y desplegando en la nube (AWS, Azure, RedHat).',
          en: 'Development of web apps with Angular, desktop apps with C# and mobile apps, plus backend services with Spring Boot and Kotlin, on SQL Server and deploying to the cloud (AWS, Azure, RedHat).',
        },
        tags: ['Angular', 'C#', 'Spring Boot', 'Kotlin', 'SQL Server', 'Android Studio', 'AWS', 'Azure', 'RedHat'],
      },
      {
        title: {
          es: 'Asistente programador (locación de servicios)',
          en: 'Programmer assistant',
        },
        period: { es: 'Set. 2024 - Abr. 2025', en: 'Sep. 2024 - Apr. 2025' },
        description: {
          es: 'Mismas funciones que en el puesto actual: desarrollo web, de escritorio y móvil, con servicios backend en la nube. Luego pasé a planilla como desarrollador junior.',
          en: 'Same duties as the current role: web, desktop and mobile development, with cloud backend services. I was later hired full-time as a junior developer.',
        },
        tags: ['Angular', 'C#', 'Spring Boot', 'Kotlin', 'SQL Server', 'Android Studio', 'AWS', 'Azure', 'RedHat'],
      },
    ],
  },
  {
    company: 'INEDI Posgrados',
    initials: 'IN',
    color: '#2563eb',
    location: 'Ica, Perú',
    roles: [
      {
        title: { es: 'Practicante de software', en: 'Software intern' },
        period: { es: 'Jul. 2024 - Ago. 2024', en: 'Jul. 2024 - Aug. 2024' },
        description: {
          es: 'Desarrollo y mantenimiento de aplicaciones web con React y JavaScript, gestionando la base de datos MySQL y el despliegue en cPanel.',
          en: 'Development and maintenance of web applications with React and JavaScript, managing the MySQL database and cPanel deployment.',
        },
        tags: ['cPanel', 'React.js', 'JavaScript', 'MySQL'],
      },
    ],
  },
  {
    company: 'Corte Superior de Justicia de Ica',
    initials: 'CS',
    color: '#475569',
    location: 'Ica, Perú',
    roles: [
      {
        title: {
          es: 'Practicante de TI - área de Informática',
          en: 'IT intern - IT department',
        },
        period: { es: 'Abr. 2023 - Jun. 2024', en: 'Apr. 2023 - Jun. 2024' },
        description: {
          es: 'Soporte técnico e inventario de equipos, y desarrollo de aplicaciones web (PHP, React, Angular) y móviles con Android Studio, sobre MySQL y desplegando en cPanel.',
          en: 'Technical support and equipment inventory, plus development of web apps (PHP, React, Angular) and mobile apps with Android Studio, on MySQL and deploying to cPanel.',
        },
        tags: ['PHP', 'React.js', 'Angular', 'Android Studio', 'cPanel', 'MySQL'],
      },
    ],
  },
];

/** Formación académica. */
export const EDUCATION: Education[] = [
  {
    institution: 'Universidad Tecnológica del Perú',
    initials: 'UTP',
    color: '#e11d48',
    degree: {
      es: 'Ingeniería de Sistemas e Informática',
      en: 'Systems and Computer Engineering',
    },
    period: '2020 - 2024',
    note: {
      es: 'Bachiller e Ingeniero titulado en Sistemas e Informática.',
      en: 'Bachelor’s degree and licensed Engineer in Systems and Computer Engineering.',
    },
  },
];

/** Certificaciones y cursos (de tu CV). */
export const CERTIFICATIONS: Certification[] = [
  { name: 'CCNAv7: Introducción a Redes', issuer: 'Cisco Networking Academy', year: '2022' },
  { name: 'Certificación Tutor STEM - Física', issuer: 'Universidad Tecnológica del Perú', year: '2021' },
  { name: 'Certificación Tutor STEM - Matemática', issuer: 'Universidad Tecnológica del Perú', year: '2021' },
  { name: 'Excel Intermedio', issuer: 'Universidad Tecnológica del Perú', year: '2022' },
  { name: 'Soporte Técnico de Computadoras', issuer: 'Universidad Tecnológica del Perú', year: '2022' },
];
