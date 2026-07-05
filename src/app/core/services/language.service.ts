import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'es' | 'en';
const STORAGE_KEY = 'portfolio-lang';
const SUPPORTED: Lang[] = ['es', 'en'];
const DEFAULT_LANG: Lang = 'es';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  /** Idioma actual como signal. */
  readonly lang = signal<Lang>(DEFAULT_LANG);

  constructor(private translate: TranslateService) {
    this.translate.addLangs(SUPPORTED);
    this.translate.setDefaultLang(DEFAULT_LANG);
    this.use(this.getInitialLang());
  }

  toggle(): void {
    this.use(this.lang() === 'es' ? 'en' : 'es');
  }

  use(lang: Lang): void {
    this.lang.set(lang);
    this.translate.use(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  private getInitialLang(): Lang {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && SUPPORTED.includes(saved)) {
      return saved;
    }
    const browser = this.translate.getBrowserLang();
    return browser === 'en' ? 'en' : DEFAULT_LANG;
  }
}
