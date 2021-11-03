import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Hard-coded string content for the header
  title: string = 'Task Tracker';

  // Variables for controlling the new task UI for the user
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((val) => (this.showAddTask = val)); // boolean value for anything that toggles when adding a new task
  }

  ngOnInit(): void { // lifecycle method (code runs when the component loads)
    // empty
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
