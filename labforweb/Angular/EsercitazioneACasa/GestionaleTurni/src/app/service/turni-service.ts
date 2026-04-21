import { Injectable } from '@angular/core';
import { Turno } from '../types/turno';

@Injectable({
  providedIn: 'root',
})
export class TurniService {
  private turniList: Turno[] = [
  {
    id: 1,
    nomeReparto: "Pronto Soccorso",
    operatore: "Mario Rossi",
    tipo: "Mattina",
    data: new Date('2023-10-27')
  },
  {
    id: 2,
    nomeReparto: "Cardiologia",
    operatore: "Luigi Bianchi",
    tipo: "Pomeriggio",
    data: new Date('2023-10-27')
  },
  {
    id: 3,
    nomeReparto: "Pediatria",
    operatore: "Anna Verdi",
    tipo: "Notte",
    data: new Date('2023-10-28')
  }
];

  

  getTurni(): Turno[] {
    return [...this.turniList];
  }

  addTurno(turno: Turno): void {
    this.turniList.push(turno);
  }

  removeTurno(id: number): void {
    const index = this.turniList.findIndex(t => t.id === id);

    if (index !== -1) {
    this.turniList.splice(index, 1);
    console.log("Turno rimosso. Nuova lista:", this.turniList);
    } else {
    console.warn("Turno non trovato con ID:", id);
  }
}

}
