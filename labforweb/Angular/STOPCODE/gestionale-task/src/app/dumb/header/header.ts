import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected title: Signal<string> = signal('Gestionale Task');
}
