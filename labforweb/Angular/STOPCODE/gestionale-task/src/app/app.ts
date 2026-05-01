import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './dumb/header/header';
import { Footer } from './dumb/footer/footer';
import { AddPage } from './pages/add-page/add-page';
import { DetailsPage } from './pages/details-page/details-page';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
