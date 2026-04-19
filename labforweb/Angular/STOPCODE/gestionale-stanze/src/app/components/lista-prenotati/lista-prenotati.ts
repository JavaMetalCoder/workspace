import { Component, input, output} from '@angular/core';
import { Stanza } from '../../types/stanza';

@Component({
  selector: 'app-lista-prenotati',
  imports: [],
  templateUrl: './lista-prenotati.html',
  styleUrl: './lista-prenotati.css',
})
export class ListaPrenotati {
  prenotatiList = input.required<Stanza>();
  OnRemoveStanzaPrenotata = output<Stanza>();

  removeStanza(stanza: Stanza): void {
    this.OnRemoveStanzaPrenotata.emit(stanza);
  }


}
