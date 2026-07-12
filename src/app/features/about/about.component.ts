import { Component } from '@angular/core';
import { SKILLS, SOFT_SKILLS } from '../../core/data/skills.data';
import { Localized, SkillCategory } from '../../core/models';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly skills: SkillCategory[] = SKILLS;
  readonly softSkills: Localized[] = SOFT_SKILLS;
}
