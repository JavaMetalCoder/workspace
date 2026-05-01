import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskService } from '../../service/task-service';
import { ITask } from '../../type/task';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-add-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-page.html',
  styleUrl: './add-page.css',
})
export class AddPage {
  private taskService = inject(TaskService);

  successMessage = signal<string | null>(null);
  
  onSubmit(form: NgForm): void {
    if(form.invalid) {
      return;
    }
    const valueTask: ITask = form.value;
    this.taskService.addTasks(valueTask);
    
    this.showSuccessMessage('Task aggiunto correttamente :)');
    
    
    form.resetForm();

    
  }

  private showSuccessMessage(message: string): void {
  this.successMessage.set(message);

  setTimeout(() => {
    this.successMessage.set(null);
  }, 2500);
}
}

