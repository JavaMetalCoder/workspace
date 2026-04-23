import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { ChiSono } from './components/chi-sono/chi-sono';
import { Esperienza } from './components/esperienza/esperienza';
import { Lavori } from './components/lavori/lavori';
import { Form } from './components/form/form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, 
    Footer, Home, ChiSono, Esperienza, 
    Lavori, Form
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
