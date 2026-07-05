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
          es: 'Desarrollo de aplicaciones web con Angular y de escritorio con C# para optimizar el flujo del negocio, trabajando con bases de datos SQL.',
          en: 'Development of web applications with Angular and desktop apps with C# to optimize the business flow, working with SQL databases.',
        },
        tags: ['Angular', 'C#', 'SQL Server', 'Bases de datos'],
      },
      {
        title: {
          es: 'Asistente programador (locación de servicios)',
          en: 'Programmer assistant',
        },
        period: { es: 'Set. 2024 - Abr. 2025', en: 'Sep. 2024 - Apr. 2025' },
        description: {
          es: 'Desarrollo de aplicaciones web y de escritorio, revisión de código y mejora de los procesos internos del área.',
          en: 'Development of web and desktop applications, code review and improvement of the area’s internal processes.',
        },
        tags: ['JavaScript', 'C#', 'Angular'],
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
          es: 'Desarrollo y mantenimiento de aplicaciones backend y frontend, mejorando la eficiencia y automatizando procesos.',
          en: 'Development and maintenance of backend and frontend applications, improving efficiency and automating processes.',
        },
        tags: ['PHP', 'Backend', 'Frontend'],
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
          es: 'Soporte técnico, mantenimiento de sistemas, cableado estructurado, inventario de equipos y desarrollo de aplicaciones web y móviles (Android).',
          en: 'Technical support, systems maintenance, structured cabling, equipment inventory and development of web and mobile (Android) applications.',
        },
        tags: ['React.js', 'Android', 'cPanel'],
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
