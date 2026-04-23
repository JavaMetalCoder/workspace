import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ChiSono } from './components/chi-sono/chi-sono';
import { Esperienza } from './components/esperienza/esperienza';
import { Lavori } from './components/lavori/lavori';
import { Form } from './components/form/form';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'chi-sono',
    component: ChiSono
  },
  {
    path: 'esperienze',
    component: Esperienza
  },
  {
    path: 'lavori',
    component: Lavori
  },
  {
    path: 'form',
    component: Form
  }
];
