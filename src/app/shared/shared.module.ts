import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Componentes y pipes compartidos
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TechChipComponent } from './components/tech-chip/tech-chip.component';
import { LocalizePipe } from './pipes/localize.pipe';
import { RevealDirective } from './directives/reveal.directive';

const MATERIAL = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatTooltipModule,
  MatSnackBarModule,
];

const SHARED_DECLARATIONS = [
  HeaderComponent,
  FooterComponent,
  ProjectCardComponent,
  NotFoundComponent,
  TechChipComponent,
  LocalizePipe,
  RevealDirective,
];

@NgModule({
  declarations: SHARED_DECLARATIONS,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ...MATERIAL,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ...MATERIAL,
    ...SHARED_DECLARATIONS,
  ],
})
export class SharedModule {}
