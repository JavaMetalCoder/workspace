import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Cardbook } from './components/cardbook/cardbook';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, Cardbook],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  testBook: IBook = {
    id: 1,
    title: "Ao",
    author: "C",
    description: "agd"
  }
}
