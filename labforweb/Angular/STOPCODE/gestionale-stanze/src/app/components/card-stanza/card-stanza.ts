import { Component, input, output } from '@angular/core';
import { Stanza } from '../../types/stanza';


@Component({
  selector: 'app-card-stanza',
  imports: [],
  templateUrl: './card-stanza.html',
  styleUrl: './card-stanza.css',
})
export class CardStanza {
  stanza = input.required<Stanza>();
  OnStanzePrenotate = output<Stanza>();
  isBooked = input<boolean>(false);

  setStanzePren(stanza: Stanza): void {
    if (!this.isBooked()) {
      this.OnStanzePrenotate.emit(stanza);
    }
  }

}
