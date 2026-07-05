import { Project } from '../models';

/**
 * Datos de proyectos (en duro por ahora).
 * Para agregar un proyecto nuevo, copia un objeto y edítalo.
 * Las imágenes puedes ponerlas en /public/img/ y referenciarlas como 'img/archivo.png'.
 *
 * NOTA: los `tags` (tecnologías) son de ejemplo. Ajústalos al stack técnico real
 * (framework, base de datos, etc.). Las funcionalidades reales están en los textos.
 * Para agregar un video, rellena `videoUrl` (link de YouTube/Vimeo o archivo en /public/video/).
 */
export const PROJECTS: Project[] = [
  {
    slug: 'clinica-obstetricia',
    type: 'client',
    status: 'private',
    title: 'Sistema de gestión para clínica de obstetricia',
    featured: true,
    year: 2026,
    image: 'img/projects/clinica/clinica-dashboard.png',
    summary: {
      es: 'Sistema web completo para una clínica de obstetricia: citas, agenda, historiales, laboratorio, inventario, caja, paquetes y counter.',
      en: 'Complete web system for an obstetrics clinic: appointments, scheduling, records, lab, inventory, cash, packages and front desk.',
    },
    description: {
      es: 'Sistema integral desarrollado para una doctora de obstetricia que digitaliza toda la operación de la clínica en una sola plataforma: desde la recepción (counter) y la agenda de citas, hasta el laboratorio, la caja y el control de inventario.',
      en: 'An all-in-one system built for an obstetrics doctor that digitizes the whole clinic operation in a single platform: from the front desk and appointment scheduling to the lab, cash register and inventory control.',
    },
    problem: {
      es: 'La clínica gestionaba citas, pacientes, cobros y resultados de forma manual y dispersa, lo que provocaba citas cruzadas, expedientes perdidos, descuadres de caja y dificultad para dar seguimiento a cada paciente.',
      en: 'The clinic managed appointments, patients, payments and results manually and scattered, causing double bookings, lost files, cash mismatches and difficulty following up each patient.',
    },
    solution: {
      es: 'Construí un sistema con módulos de citas y agenda, historiales de pacientes, laboratorio con carga de evidencias/resultados, control de inventario, caja, paquetes de atención y un counter (recepción) para el día a día, todo con acceso seguro por rol.',
      en: 'I built a system with modules for appointments and scheduling, patient records, a lab with evidence/results upload, inventory control, cash register, care packages and a front desk (counter) for daily work, all with secure role-based access.',
    },
    result: {
      es: 'La clínica unificó toda su operación: menos citas cruzadas, información centralizada, caja cuadrada y resultados de laboratorio accesibles al instante. La doctora encuentra cualquier expediente en segundos.',
      en: 'The clinic unified its whole operation: fewer double bookings, centralized information, a balanced register and lab results available instantly. The doctor finds any file in seconds.',
    },
    idealFor: {
      es: 'Consultorios dentales, veterinarias, centros médicos, laboratorios, spas y cualquier negocio que trabaje con citas, fichas de clientes y caja.',
      en: 'Dental offices, veterinaries, medical centers, labs, spas and any business that works with appointments, client records and a cash register.',
    },
    tags: ['Angular', 'TypeScript', 'Angular Material', 'REST API', 'Auth por roles'],
    gallery: [
      'img/projects/clinica/clinica-agenda.png',
      'img/projects/clinica/clinica-caja.png',
      'img/projects/clinica/clinica-inventario.png',
      'img/projects/clinica/clinica-login.png',
    ],
    videoUrl: '',
    demoUrl: '',
    repoUrl: '',
  },
  {
    slug: 'sistema-polleria',
    type: 'thesis',
    status: 'private',
    title: 'Sistema de ventas y pedidos para pollería',
    featured: false,
    year: 2025,
    image: 'img/projects/polleria-cover.png',
    summary: {
      es: 'Sistema para pollería con comanda para mesero y cocinero, pedidos, recetas, inventario, boleta y cobro.',
      en: 'System for a rotisserie with order tickets for waiter and cook, orders, recipes, inventory, receipts and payment.',
    },
    description: {
      es: 'Sistema desarrollado para una pollería que ordena todo el flujo de venta y cocina: el mesero toma el pedido, la comanda llega al cocinero, se descuenta el inventario según las recetas y se cobra emitiendo la boleta.',
      en: 'System built for a rotisserie that organizes the whole sales and kitchen flow: the waiter takes the order, the ticket reaches the cook, inventory is deducted based on recipes and payment is charged issuing a receipt.',
    },
    problem: {
      es: 'Los pedidos se anotaban en papel: había confusión entre salón y cocina, errores en los pedidos, descuadres de caja, y no había control del inventario ni de qué platos se vendían más.',
      en: 'Orders were written on paper: there was confusion between the floor and the kitchen, order mistakes, cash mismatches, and no inventory control or knowledge of which dishes sold most.',
    },
    solution: {
      es: 'Creé un sistema con generación de pedidos, comanda separada para mesero y para cocinero, gestión de recetas que descuentan del control de inventario, emisión de boleta y cobro del pedido, con reportes de ventas.',
      en: 'I built a system with order generation, separate tickets for waiter and cook, recipe management that deducts from inventory, receipt issuing and order payment, with sales reports.',
    },
    result: {
      es: 'Menos errores entre salón y cocina, inventario bajo control, caja cuadrada y datos claros para decidir qué ofrecer. El negocio pasó del papel al control total de sus ventas.',
      en: 'Fewer mistakes between floor and kitchen, inventory under control, a balanced register and clear data to decide what to offer. The business went from paper to full control of its sales.',
    },
    idealFor: {
      es: 'Cevicherías, chifas, restaurantes, fuentes de soda, cafeterías y cualquier negocio de comida con cocina, pedidos y caja.',
      en: 'Seafood spots, restaurants, snack bars, cafés and any food business with a kitchen, orders and a cash register.',
    },
    tags: ['Angular', 'TypeScript', 'Angular Material', 'REST API', 'MySQL'],
    gallery: [
      'img/projects/gallery/polleria-pedido.png',
      'img/projects/gallery/polleria-cobro.png',
      'img/projects/gallery/polleria-cocina.png',
    ],
    videoUrl: '',
    demoUrl: '',
    repoUrl: '',
  },
  {
    slug: 'sistema-multiservicios',
    type: 'thesis',
    status: 'private',
    title: 'Sistema de gestión para empresa de multiservicios',
    featured: false,
    year: 2025,
    image: 'img/projects/multiservicios-cover.png',
    summary: {
      es: 'Sistema para una empresa de multiservicios: creación de equipos, registro de servicios y carga de evidencias de cada trabajo.',
      en: 'System for a multi-services company: team creation, service registration and evidence upload for each job.',
    },
    description: {
      es: 'Plataforma desarrollada para una empresa de multiservicios que centraliza la gestión de sus trabajos: crear equipos de trabajo, agregar y administrar los servicios, y subir evidencias de cada servicio realizado.',
      en: 'Platform built for a multi-services company that centralizes the management of its jobs: creating work teams, adding and managing services, and uploading evidence of each service performed.',
    },
    problem: {
      es: 'La información estaba dispersa entre cuadernos, Excel y mensajes: servicios, equipos y evidencias sueltas, sin forma clara de dar seguimiento a cada trabajo ni de respaldar lo realizado.',
      en: 'Information was scattered across notebooks, spreadsheets and messages: loose services, teams and evidence, with no clear way to follow up each job or back up the work done.',
    },
    solution: {
      es: 'Desarrollé un sistema para crear equipos de trabajo, agregar y gestionar servicios, y subir evidencias (fotos/archivos) de cada trabajo, dejando todo registrado y con seguimiento por estado.',
      en: 'I built a system to create work teams, add and manage services, and upload evidence (photos/files) of each job, keeping everything recorded and tracked by status.',
    },
    result: {
      es: 'La empresa dejó de perder información: ahora tiene sus equipos y servicios organizados, hace seguimiento de cada trabajo y respalda lo realizado con evidencias.',
      en: 'The company stopped losing information: it now has its teams and services organized, tracks every job and backs up the work with evidence.',
    },
    idealFor: {
      es: 'Ferreterías, empresas de servicios técnicos, talleres, distribuidoras y cualquier negocio que gestione trabajos, equipos y evidencias.',
      en: 'Hardware stores, technical service companies, workshops, distributors and any business managing jobs, teams and evidence.',
    },
    tags: ['Angular', 'TypeScript', 'Angular Material', 'REST API', 'MySQL'],
    gallery: [
      'img/projects/gallery/multiservicios-detalle.png',
      'img/projects/gallery/multiservicios-personal.png',
    ],
    videoUrl: '',
    demoUrl: '',
    repoUrl: '',
  },
  {
    slug: 'fetal-prenatalia-web',
    type: 'client',
    status: 'live',
    title: 'Página web - Fetal Prenatalia',
    featured: false,
    year: 2026,
    image: 'img/projects/fetal-web.png',
    summary: {
      es: 'Sitio web informativo para la doctora Ariana Oncoy (Fetal Prenatalia): presentación, servicios, contacto y ubicación.',
      en: 'Informational website for Dr. Ariana Oncoy (Fetal Prenatalia): presentation, services, contact and location.',
    },
    description: {
      es: 'Además del sistema de gestión, desarrollé la página web pública de la clínica. Es un sitio web estático (informativo): presenta a la doctora y sus servicios, con secciones de contacto y ubicación en Google Maps. No es un sistema con login, sino la cara pública de la clínica en internet.',
      en: 'Besides the management system, I built the clinic’s public website. It is a static (informational) site: it presents the doctor and her services, with contact sections and a Google Maps location. It is not a system with login, but the clinic’s public face on the internet.',
    },
    problem: {
      es: 'La clínica no tenía presencia en internet donde los pacientes pudieran conocer sus servicios, ubicación y forma de contacto de manera profesional.',
      en: 'The clinic had no online presence where patients could learn about its services, location and contact in a professional way.',
    },
    solution: {
      es: 'Creé un sitio web moderno y responsive con la información de la doctora, sus servicios, botones de contacto directo (WhatsApp) y un mapa con la ubicación de la clínica.',
      en: 'I built a modern, responsive website with the doctor’s information, her services, direct contact buttons (WhatsApp) and a map with the clinic’s location.',
    },
    result: {
      es: 'La clínica ahora tiene una presencia profesional en internet que transmite confianza y facilita que nuevos pacientes la encuentren y la contacten.',
      en: 'The clinic now has a professional online presence that builds trust and makes it easier for new patients to find and contact it.',
    },
    idealFor: {
      es: 'Cualquier profesional o negocio que necesite una página web de presentación: médicos, consultorios, estudios, emprendimientos.',
      en: 'Any professional or business that needs a presentation website: doctors, offices, studios, small businesses.',
    },
    tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive'],
    gallery: [],
    videoUrl: '',
    demoUrl: '',
    repoUrl: '',
  },
  {
    slug: 'portafolio-personal',
    type: 'personal',
    status: 'live',
    title: 'Este portafolio',
    featured: false,
    year: 2026,
    image: 'img/projects/portafolio-cover.svg',
    summary: {
      es: 'Mi portafolio personal, hecho desde cero con Angular 19: arquitectura modular, lazy loading, bilingüe y tema claro/oscuro.',
      en: 'My personal portfolio, built from scratch with Angular 19: modular architecture, lazy loading, bilingual and light/dark theme.',
    },
    description: {
      es: 'El sitio que estás viendo. Lo construí para mostrar mis proyectos y aplicar buenas prácticas: módulos con carga perezosa, internacionalización (español/inglés en tiempo real), diseño responsive y animaciones.',
      en: 'The site you are looking at. I built it to showcase my projects and apply best practices: lazy-loaded modules, internationalization (Spanish/English in real time), responsive design and animations.',
    },
    problem: {
      es: 'Necesitaba una presencia profesional propia para ofrecer mis servicios, que además demostrara con hechos mi nivel técnico con Angular.',
      en: 'I needed my own professional presence to offer my services, that would also prove my technical level with Angular by example.',
    },
    solution: {
      es: 'Desarrollé este portafolio con Angular 19 (módulos + routing con lazy loading), Angular Material con tema personalizado, internacionalización con ngx-translate y animaciones al hacer scroll.',
      en: 'I built this portfolio with Angular 19 (modules + lazy-loaded routing), Angular Material with a custom theme, internationalization with ngx-translate and scroll animations.',
    },
    result: {
      es: 'Un portafolio rápido, bilingüe y mantenible, que a la vez es una muestra viva de cómo trabajo.',
      en: 'A fast, bilingual and maintainable portfolio that is, at the same time, a living sample of how I work.',
    },
    tags: ['Angular 19', 'TypeScript', 'Angular Material', 'SCSS', 'ngx-translate'],
    gallery: [],
    videoUrl: '',
    demoUrl: '',
    repoUrl: '',
  },
];
