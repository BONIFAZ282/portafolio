import { Injectable } from '@angular/core';
import { PROJECTS } from '../data/projects.data';
import { TESTIMONIALS } from '../data/testimonials.data';
import { Project, Testimonial } from '../models';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getProjects(): Project[] {
    return [...PROJECTS].sort((a, b) => b.year - a.year);
  }

  getFeatured(): Project | undefined {
    return PROJECTS.find((p) => p.featured);
  }

  getBySlug(slug: string): Project | undefined {
    return PROJECTS.find((p) => p.slug === slug);
  }

  getTestimonialForProject(slug: string): Testimonial | undefined {
    return TESTIMONIALS.find((t) => t.projectSlug === slug);
  }
}
