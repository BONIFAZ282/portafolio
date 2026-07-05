import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

/**
 * Hace que un elemento aparezca (fade + subida) cuando entra en pantalla.
 * Uso: <div appReveal>...</div>  o  <div appReveal [revealDelay]="150">
 *
 * Si el elemento ya está visible al cargar la página, aparece de inmediato;
 * si está más abajo, se anima al hacer scroll. Nunca se queda invisible.
 */
@Directive({
  selector: '[appReveal]',
  standalone: false,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Retraso en ms para escalonar animaciones. */
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    if (this.revealDelay) {
      node.style.transitionDelay = `${this.revealDelay}ms`;
    }

    // Sin soporte de IntersectionObserver: mostramos directamente.
    if (typeof IntersectionObserver === 'undefined') {
      this.show(node);
      return;
    }

    // Esperamos al layout para decidir.
    requestAnimationFrame(() => {
      if (this.isInViewport(node)) {
        this.show(node);
        return;
      }
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.show(node);
              this.observer?.disconnect();
            }
          }
        },
        { threshold: 0, rootMargin: '0px 0px -8% 0px' },
      );
      this.observer.observe(node);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private show(node: HTMLElement): void {
    node.classList.add('reveal-visible');
  }

  private isInViewport(node: HTMLElement): boolean {
    const rect = node.getBoundingClientRect();
    const viewH = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < viewH && rect.bottom > 0 && rect.height > 0;
  }
}
