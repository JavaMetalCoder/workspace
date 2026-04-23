import { Component, input } from '@angular/core';
import { ICorso } from '../../type/corso';

@Component({
  selector: 'app-card-corsi',
  imports: [],
  templateUrl: './card-corsi.html',
  styleUrl: './card-corsi.css',
})
export class CardCorsi {
  corso = input.required<ICorso>();
}
