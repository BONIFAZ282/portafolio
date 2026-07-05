import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectDetailComponent],
  imports: [SharedModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
