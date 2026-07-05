import { animate, query, style, transition, trigger } from '@angular/animations';

/**
 * Transición suave (fade + subida ligera) al cambiar de ruta.
 * Se aplica sobre el contenedor del <router-outlet> en app.component.
 */
export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter',
      [style({ opacity: 0, transform: 'translateY(12px)' })],
      { optional: true },
    ),
    query(
      ':enter',
      [animate('350ms ease-out', style({ opacity: 1, transform: 'none' }))],
      { optional: true },
    ),
  ]),
]);
