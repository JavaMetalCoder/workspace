import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Emittente } from './components/emittente/emittente';

@Component({
  selector: 'app-root',
  imports: [Emittente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chat');
}
