import { Component } from '@angular/core';
import { SKILLS } from '../../core/data/skills.data';
import { SkillCategory } from '../../core/models';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly skills: SkillCategory[] = SKILLS;
}
