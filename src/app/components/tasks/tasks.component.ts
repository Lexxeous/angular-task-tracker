import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks'; // include the static list of tasks
import { Task } from '../../Task'; // include the Task model/interface

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS; // initialize a variable inside component equal to static list of tasks

  constructor() { }

  ngOnInit(): void {
  }

}
