import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'heroe/:id',
    loadComponent: () =>
      import('./heroes/heroes-detail/heroes-detail.component').then((m) => m.HeroesDetailComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

