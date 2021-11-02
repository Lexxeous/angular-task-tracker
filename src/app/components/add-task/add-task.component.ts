import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
	@Output() onAddTask: EventEmitter<Task> = new EventEmitter;

	desc: string = "";
	time: string = "";
	month: string = "";
	day: string = "";
	year: number = NaN;
	reminder: boolean = false;

	constructor() { }

	ngOnInit(): void {
		// empty
	}

	onSubmit() {
		// Make all field data required
		if(!this.desc) {
			alert("Please enter the task description.");
			return;
		}
		if(!this.time) {
			alert("Please enter the task time.");
			return;
		}
		if(!this.month) {
			alert("Please enter the task month.");
			return;
		}
		if(!this.day) {
			alert("Please enter the task day.");
			return;
		}
		if(!this.year) {
			alert("Please enter the task year.");
			return;
		}

		// Create new task object to emit/send to the backend server
		const newTask = {
			desc: this.desc,
			time: this.time,
			month: this.month,
			day: this.day,
			year: this.year,
			reminder: this.reminder
		};

		this.onAddTask.emit(newTask); // emit new task data

		// Clear new task data to prepare for next new task
		this.desc = "";
		this.time = "";
		this.month = "";
		this.day = "";
		this.year = NaN;
		this.reminder = false;
	}
}
