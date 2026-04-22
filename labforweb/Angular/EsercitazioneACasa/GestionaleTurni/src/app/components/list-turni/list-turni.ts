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

  
  handleRemove() {
    this.onRemove.emit(this.turno().id);
  }
}