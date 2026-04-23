import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "ciao";
  eta = 30;
  btnDis = true;

  cambiaTesto() {
    this.title = "ao";
  }
}



