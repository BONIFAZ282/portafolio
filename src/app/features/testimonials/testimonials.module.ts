import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsComponent } from './testimonials.component';

@NgModule({
  declarations: [TestimonialsComponent],
  imports: [SharedModule, TestimonialsRoutingModule],
})
export class TestimonialsModule {}
