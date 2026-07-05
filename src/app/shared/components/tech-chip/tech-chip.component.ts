import { Component, Input } from '@angular/core';
import { resolveTech, TechInfo } from '../../data/tech-icons';

@Component({
  selector: 'app-tech-chip',
  standalone: false,
  templateUrl: './tech-chip.component.html',
  styleUrl: './tech-chip.component.scss',
})
export class TechChipComponent {
  info!: TechInfo;

  @Input({ required: true })
  set name(value: string) {
    this.info = resolveTech(value);
  }
}
