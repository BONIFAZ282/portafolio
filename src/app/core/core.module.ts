import { NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * Módulo para servicios singleton. Se importa UNA sola vez, en AppModule.
 * Los servicios usan providedIn: 'root', así que este módulo actúa como guardia.
 */
@NgModule({})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('CoreModule ya está cargado. Impórtalo solo en AppModule.');
    }
  }
}
