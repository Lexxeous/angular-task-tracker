import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Task } from '../Task'; // include the Task model/interface

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) {
    // empty
  }

  // getTasksStc(): Task[] { // use observables in prod for async data from server; fine for static file
  //   return TASKS;
  // }

  // getTasksObsv(): Observable<Task[]> { // use an observable for the the task service
  //   const obsvTasks = of(TASKS);
  //   return obsvTasks;
  // }

  getTasksObsv(): Observable<Task[]> { // use an observable and HTTP requests with the json-server package
    return this.http.get<Task[]>(this.apiUrl);
  }
}
