import { Component, input, output } from '@angular/core';
import { Turno } from '../../types/turno';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-turni',
  standalone: true,
  imports: [DatePipe],
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