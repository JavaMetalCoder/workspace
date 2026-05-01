import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { DetailsPage } from './pages/details-page/details-page';
import { AddPage } from './pages/add-page/add-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home'
  },
  {
    path: 'aggiungi',
    component: AddPage,
    title: 'Aggiungi Task'
  },
  {
    path: 'dettaglio/:id',
    component: DetailsPage,
    title: 'Dettaglio Task'
  }
];
