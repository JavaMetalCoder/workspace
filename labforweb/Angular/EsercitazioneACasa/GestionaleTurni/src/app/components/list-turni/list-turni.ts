import { Component, inject, input, output } from '@angular/core';
import { Turno } from '../../types/turno';
import { TurniService } from '../../service/turni-service';

@Component({
  selector: 'app-list-turni',
  imports: [],
  templateUrl: './list-turni.html',
  styleUrl: './list-turni.css',
})
export class ListTurni {
  turno = input.required<Turno>();
  
  onRemove = output<number>(); 

  // Questa funzione ora non serve più che riceva l'id dall'HTML, 
  // lo prende direttamente dal segnale input 'turno'
  handleRemove() {
    this.onRemove.emit(this.turno().id);
  }
}