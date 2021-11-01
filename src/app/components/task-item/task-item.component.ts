import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'; // include task interface
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  // Initialize empty task
  @Input() task: Task = { // task-item component takes a Task object as input
    text: "", // string
    time: "", // string
    month: "", //string
    day: "", // string
    year: -1, // string
    reminder: true // boolean
  };

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  // Initialize Font Awesome resource variables
  faTimes = faTimes;

  constructor() {
    // empty
  }

  ngOnInit(): void {
    // empty
  }

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }
}
