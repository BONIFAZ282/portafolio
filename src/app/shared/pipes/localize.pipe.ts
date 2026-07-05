import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { Localized } from '../../core/models';

/**
 * Convierte un objeto { es, en } al idioma activo.
 * Es impuro para reaccionar al cambio de idioma en tiempo real.
 * Uso en plantilla: {{ project.summary | localize }}
 */
@Pipe({ name: 'localize', standalone: false, pure: false })
export class LocalizePipe implements PipeTransform {
  constructor(private language: LanguageService) {}

  transform(value: Localized | null | undefined): string {
    if (!value) {
      return '';
    }
    return value[this.language.lang()] ?? value.es;
  }
}
