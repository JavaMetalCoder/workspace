import { Component, inject, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService } from '../../service/task-service';
import { ITask } from '../../type/task';

@Component({
  selector: 'app-details-page',
  standalone: true,
  templateUrl: './details-page.html',
  styleUrl: './details-page.css',
  imports: [RouterLink],
})
export class DetailsPage implements OnInit {
  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);
  task?: ITask;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;

    this.task = this.taskService.getTaskByID(id);
    
  }

  
}
