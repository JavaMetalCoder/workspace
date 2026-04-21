import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { MainComponent } from './components/main-component/main-component';
import { Footer } from './components/footer/footer';
import { Turno } from './types/turno';


@Component({
  selector: 'app-root',
  imports: [Header, MainComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'GestionaleTurni';

  addNT(turno: Turno): void {
    
  }
}
