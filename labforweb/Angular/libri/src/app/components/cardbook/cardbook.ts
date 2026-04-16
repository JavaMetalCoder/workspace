import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cardbook',
  imports: [],
  templateUrl: './cardbook.html',
  styleUrl: './cardbook.css',
})
export class Cardbook {
  book = input.required<IBook>();
}
