import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task'; // include task interface
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  faTimes = faTimes;

  // Initialize empty task
  @Input() task: Task = { // task-item component takes a Task object as input
    text: "", // string
    day: "", // string
    time: "", // string
    year: "", // string
    reminder: true // boolean
  };

  constructor() { }

  ngOnInit(): void {
  }
}
