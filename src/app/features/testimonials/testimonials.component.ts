import { Component } from '@angular/core';
import { TESTIMONIALS } from '../../core/data/testimonials.data';
import { Testimonial } from '../../core/models';

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  readonly testimonials: Testimonial[] = TESTIMONIALS;
}
