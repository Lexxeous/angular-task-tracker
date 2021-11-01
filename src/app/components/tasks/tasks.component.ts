import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task'; // include the Task model/interface
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[] = []; // initialize a variable inside component equal to static list of tasks

  constructor(private taskService: TaskService) { // set provider(s) for the services
    // empty
  }

  // ngOnInit(): void {
  //   this.tasks = this.taskService.getTasks(); // fine for static file, but use observables in prod for async data from server
  // }

  ngOnInit(): void {
    this.taskService.getTasksObsv().subscribe(
      (obsvTasks) => this.tasks = obsvTasks
    ); // use subscriptions similar to JS promises, going to be monitoring async data all the time now
  }

}
