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
		this.taskService
		.getTasks()
		.subscribe(
			(ts) => (this.tasks = ts)
		); // use subscriptions similar to JS promises, going to be monitoring async data all the time now
	}

	deleteTask(task: Task): void {
		this.taskService
		.deleteTask(task) // call the API to actually delete task
		.subscribe(
			() => (this.tasks = this.tasks.filter(t => t.id !== task.id)) // properly update UI
		);
	}

	toggleReminder(task: Task): void {
		task.reminder = !task.reminder; // invert the reminder property
		this.taskService
		.updateTaskReminder(task)
		.subscribe();
	}

	addTask(task: Task): void {
		this.taskService
		.addTask(task)
		.subscribe(
			(t) => (this.tasks.push(task))
		)
	}
}
