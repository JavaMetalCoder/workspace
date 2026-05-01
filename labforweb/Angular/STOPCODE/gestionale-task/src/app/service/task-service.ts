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

  public setTasks(newValue: ITask[]) {
    this._tasks.set(newValue);
  }

  public addTasks(newValue: ITask) {
    this._tasks.update(prev => [...prev, newValue])
  }

  public removeTask(id: string) {
    this._tasks.update(tasks => tasks.filter(task => task.id !== id));
    console.log(id)
  }
  
}
