import { Component, input, output } from '@angular/core';
import { ITask } from '../../type/task';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-task',
  imports: [RouterLink],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<ITask>();
  taskRemoved = output<string>();

  removeTask(id: string) {
    this.taskRemoved.emit(id);
  }
}
