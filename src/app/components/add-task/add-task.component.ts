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
			alert("Enter the task description.");
			return;
		}
		if(!this.time) {
			alert("Enter the task time.");
			return;
		}
		if(!this.month) {
			alert("Enter the task month.");
			return;
		}
		if(!this.day) {
			alert("Enter the task day.");
			return;
		}
		if(!this.year) {
			alert("Enter the task year.");
			return;
		}

		const desc_regex = new RegExp('');
		const desc_test: boolean = desc_regex.test(this.desc);
		if(desc_test == false) {
			alert("Enter a valid task description.");
			return;
		}

		const time_regex = new RegExp('/^([0|1]?\d\:[012345]\d(am|AM|pm|PM))$/');
		const time_test: boolean = time_regex.test(this.time);
		if(time_test == false) {
			alert("Enter a valid task time.");
			return;
		}

		const month_regex = new RegExp('');
		const month_test: boolean = month_regex.test(this.month);
		if(month_test == false) {
			alert("Enter a valid task month.");
			return;
		}

		const day_regex = new RegExp('');
		const day_test: boolean = day_regex.test(this.day);
		if(day_test == false) {
			alert("Enter a valid task day.");
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
