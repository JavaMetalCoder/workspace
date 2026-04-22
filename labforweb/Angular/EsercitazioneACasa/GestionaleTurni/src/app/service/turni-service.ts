import { Injectable, signal } from '@angular/core';
import { Turno } from '../types/turno';

@Injectable({
  providedIn: 'root',
})
export class TurniService {
  private turniList = signal<Turno[]>([
  {
    id: 1,
    nomeReparto: "Pronto Soccorso",
    operatore: "Mario Rossi",
    tipo: "Mattina",
    data: new Date(2023, 9, 27)
  },
  {
    id: 2,
    nomeReparto: "Cardiologia",
    operatore: "Luigi Bianchi",
    tipo: "Pomeriggio",
    data: new Date(2023, 9, 27)
  },
  {
    id: 3,
    nomeReparto: "Pediatria",
    operatore: "Anna Verdi",
    tipo: "Notte",
    data: new Date(2023, 9, 28)
  }
]);

  

  getTurni() {
    return this.turniList.asReadonly();
  }

  addTurno(turno: Turno): void {
    this.turniList.update(turni => [...turni, turno]);
  }

  removeTurno(id: number): void {
    this.turniList.update(turni => {
      const turniAggiornati = turni.filter(t => t.id !== id);
      if (turni.length === turniAggiornati.length) {
        console.warn(`Turno non trovato con ID: ${id}`);
      } else {
        console.log("Turno rimosso. Nuova lista:", turniAggiornati);
      }
      return turniAggiornati;
    });
}

}
