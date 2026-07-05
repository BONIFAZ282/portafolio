import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'sobre-mi',
    loadChildren: () => import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'proyectos',
    loadChildren: () =>
      import('./features/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'experiencia',
    loadChildren: () =>
      import('./features/experience/experience.module').then((m) => m.ExperienceModule),
  },
  {
    path: 'testimonios',
    loadChildren: () =>
      import('./features/testimonials/testimonials.module').then((m) => m.TestimonialsModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
