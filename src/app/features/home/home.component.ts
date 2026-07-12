import { Component } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/models';

interface SolutionVertical {
  icon: string;
  /** Prefijo de las claves de traducción en solutions.* */
  key: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly featured?: Project;

  /** Rubros/verticales de negocio para la sección de soluciones. */
  readonly solutions: SolutionVertical[] = [
    { icon: 'medical_services', key: 'health' },
    { icon: 'restaurant', key: 'food' },
    { icon: 'handyman', key: 'services' },
  ];

  /** Tecnologías que se muestran en el marquee animado. */
  readonly marqueeTechs: string[] = [
    'Angular', 'TypeScript', 'JavaScript', 'C#', '.NET', 'Java', 'Spring Boot',
    'Kotlin', 'React.js', 'SQL Server', 'MySQL', 'PostgreSQL', 'AWS', 'Azure', 'Git',
  ];

  /** Foto de perfil. Guarda tu foto en public/img/profile.jpg y aparecerá aquí.
   *  Mientras no exista, se muestra un placeholder. */
  photoSrc = 'img/profile.jpg';

  constructor(private projects: ProjectService) {
    this.featured = this.projects.getFeatured();
  }

  onPhotoError(): void {
    this.photoSrc = 'img/profile-placeholder.svg';
  }
}
