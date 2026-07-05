import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly sections = [
    { path: '/', key: 'nav.home', exact: true },
    { path: '/sobre-mi', key: 'nav.about', exact: false },
    { path: '/proyectos', key: 'nav.projects', exact: false },
    { path: '/experiencia', key: 'nav.experience', exact: false },
    { path: '/testimonios', key: 'nav.testimonials', exact: false },
    { path: '/contacto', key: 'nav.contact', exact: false },
  ];

  // 'internal' usa routerLink (para no exponer el correo). 'url' abre en pestaña nueva.
  readonly social: { icon: string; label: string; url?: string; internal?: string }[] = [
    { icon: 'code', label: 'GitHub', url: 'https://github.com/BONIFAZ282' },
    {
      icon: 'work',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jorge-armando-bonifaz-campos-a58b741b4',
    },
    { icon: 'mail', label: 'Contacto', internal: '/contacto' },
  ];
}
