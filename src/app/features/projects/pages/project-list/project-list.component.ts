import { Component, computed, signal } from '@angular/core';
import { ProjectService } from '../../../../core/services/project.service';
import { Project, ProjectType } from '../../../../core/models';

type Filter = 'all' | ProjectType;

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {
  private readonly all: Project[];

  readonly filter = signal<Filter>('all');

  readonly filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'projects.filter_all' },
    { key: 'client', label: 'projects.filter_client' },
    { key: 'thesis', label: 'projects.filter_thesis' },
    { key: 'personal', label: 'projects.filter_personal' },
  ];

  readonly projects = computed(() => {
    const f = this.filter();
    return f === 'all' ? this.all : this.all.filter((p) => p.type === f);
  });

  constructor(private service: ProjectService) {
    this.all = this.service.getProjects();
  }

  count(key: Filter): number {
    return key === 'all' ? this.all.length : this.all.filter((p) => p.type === key).length;
  }

  setFilter(key: Filter): void {
    this.filter.set(key);
  }
}
