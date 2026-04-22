import { Component, signal, WritableSignal } from '@angular/core';
import { CardStanza } from '../card-stanza/card-stanza';
import { ListaPrenotati } from '../lista-prenotati/lista-prenotati';
import { Stanza } from '../../types/stanza';
import { stanze } from '../../data/stanze';


@Component({
  selector: 'app-main',
  imports: [CardStanza, ListaPrenotati],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  stanzeCorrenti: Stanza[] = stanze;
  stanzePrenotate: Stanza[] = [];
  totalPrice: number = 0;

  

  setStanzePrenotate(stanze: Stanza): void {
    const stanzaTrovata = this.stanzeCorrenti.find(s=> s.id === stanze.id);
    if (!stanzaTrovata) return;
    this.stanzePrenotate.push(stanzaTrovata);
    this.sommaPrezzo();
  }

  removeStanzaPrenotata(stanza: Stanza): void {
    const index = this.stanzePrenotate.findIndex(s => s.id === stanza.id);
    if (index !== -1) {
      this.stanzePrenotate.splice(index, 1);
      this.sommaPrezzo();
    }
  }

  private sommaPrezzo(): void {
    this.totalPrice = this.stanzePrenotate.reduce((acc, stanza) => acc + (stanza.prezzo || 0), 0);
  }
}
