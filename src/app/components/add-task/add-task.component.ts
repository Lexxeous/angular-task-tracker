import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  desc: string = "";
  time: string = "";
  month: string = "";
  day: string = "";
  year: number = -1;
  reminder: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
