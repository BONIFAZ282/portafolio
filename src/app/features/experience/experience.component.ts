import { Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION, EXPERIENCES } from '../../core/data/experience.data';
import { Certification, Education, Experience } from '../../core/models';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experiences: Experience[] = EXPERIENCES;
  readonly education: Education[] = EDUCATION;
  readonly certifications: Certification[] = CERTIFICATIONS;
}
