import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Task } from '../Task'; // include the Task model/interface

// Define HTTP headers to pass JSON data through with a request
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

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

  getTasks(): Observable<Task[]> { // use an observable and HTTP requests with the json-server package
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`; // delete task with specific ID
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`; // update task with a specific ID
    return this.http.put<Task>(url, task, httpOptions); // (url: String, task: <json>body, httpOptions: HttpHeaders)
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
