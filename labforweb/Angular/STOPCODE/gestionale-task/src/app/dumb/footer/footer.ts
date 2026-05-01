import { Component, signal, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private currentYear: Date = new Date;
  protected year: WritableSignal<number> = signal(this.currentYear.getFullYear());
} 
