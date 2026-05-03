import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { ITask } from '../type/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private _tasks = signal<ITask[]>([]);
  
  
  constructor() {
    this.loadTasksByJSON();
  }
  
  private loadTasksByJSON() {
    this.http.get<ITask[]>('/json/tasks.json')
    .subscribe(tasks => {
       this._tasks.set(tasks);
    })
    ;
  }

  public getTasks() {
    return this._tasks.asReadonly();
  }

 
  public addTask(taskForm: Omit<ITask,'id'>) {
    const newTask: ITask = {
      ...taskForm, 
      id: crypto.randomUUID()
    };
    this._tasks.update(prev => [...prev, newTask ]) 
  }

  public removeTask(id: string) {
    this._tasks.update(tasks => tasks.filter(task => task.id !== id));
    console.log(id)
  }

  public getTaskByID(id: string): ITask | undefined {
    return this._tasks().find(task => task.id === id);
  }
  
}
