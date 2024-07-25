import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/process-list/process-list.component').then(
        (m) => m.ProcessListComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
