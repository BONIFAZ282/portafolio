import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly links = [
    { path: '/', key: 'nav.home', exact: true },
    { path: '/sobre-mi', key: 'nav.about', exact: false },
    { path: '/proyectos', key: 'nav.projects', exact: false },
    { path: '/experiencia', key: 'nav.experience', exact: false },
    { path: '/testimonios', key: 'nav.testimonials', exact: false },
    { path: '/contacto', key: 'nav.contact', exact: false },
  ];

  constructor(
    public theme: ThemeService,
    public language: LanguageService,
  ) {}
}
