import { Component, Input } from '@angular/core';
import { Project } from '../../../core/models';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

  /** Clave de traducción del badge de estado. */
  get statusKey(): string | null {
    if (!this.project.status) {
      return null;
    }
    const map = { live: 'status_live', 'in-progress': 'status_progress', private: 'status_private' };
    return `projects.${map[this.project.status]}`;
  }

  /** Si la imagen no existe, muestra un placeholder en vez de una imagen rota. */
  onImgError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (!img.src.endsWith('placeholder.svg')) {
      img.src = 'img/projects/placeholder.svg';
    }
  }
}
