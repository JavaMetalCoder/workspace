import { Component, inject, signal } from '@angular/core';
import { ListTurni } from '../list-turni/list-turni';
import { TurniService } from '../../service/turni-service';
import { Turno } from '../../types/turno';




@Component({
  selector: 'app-main-component',
  imports: [ListTurni],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {
  private turniService = inject(TurniService);
  turni = this.turniService.getTurni();

  rmTurno(id: number) {
    this.turniService.removeTurno(id);
    console.log(this.turni);
    this.turni = this.turniService.getTurni();
  }
  


  


}
