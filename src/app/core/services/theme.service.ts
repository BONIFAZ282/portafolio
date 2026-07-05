import { Injectable, signal } from '@angular/core';

type ThemeMode = 'light' | 'dark';
const STORAGE_KEY = 'portfolio-theme';
const LIGHT_CLASS = 'light-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  /** Tema actual como signal (reactivo en las plantillas). El default es oscuro. */
  readonly theme = signal<ThemeMode>('dark');

  constructor() {
    this.theme.set(this.getInitialTheme());
    this.apply(this.theme());
  }

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(mode: ThemeMode): void {
    this.theme.set(mode);
    this.apply(mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }

  private apply(mode: ThemeMode): void {
    document.body.classList.toggle(LIGHT_CLASS, mode === 'light');
  }

  private getInitialTheme(): ThemeMode {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    // Por defecto oscuro (look moderno); solo claro si el sistema lo pide explícito.
    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }
}
