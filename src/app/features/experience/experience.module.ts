import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [SharedModule, ExperienceRoutingModule],
})
export class ExperienceModule {}
