import { Component, inject } from '@angular/core';
import { Task } from '../../dumb/task/task';
import { TaskService } from '../../service/task-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [Task, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private taskService = inject(TaskService);
  tasks = this.taskService.getTasks();
  
  removeTaskEvent(id: string) {
    this.taskService.removeTask(id);
  }
}
