import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';
import { routeAnimations } from './shared/animations/route.animations';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeAnimations],
})
export class AppComponent {
  private router = inject(Router);
  // Se inyectan para inicializar tema e idioma al arrancar la app.
  private language = inject(LanguageService);
  private theme = inject(ThemeService);

  /** Cambia con cada navegación para disparar la animación de transición. */
  readonly routeState$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map(() => this.router.url),
    startWith(this.router.url),
  );
}
