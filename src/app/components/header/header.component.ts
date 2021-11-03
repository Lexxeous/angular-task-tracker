import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  // Hard-coded string content for the header
  title: string = 'Task Tracker';

  // Variables for controlling the new task UI for the user
  showAddTask: Boolean = false;
  subscription: Subscription;

  // Include any number of providers as constructor parameters
  constructor(private uiService: UiService, private router: Router) {
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

  hasRoute(route: String): Boolean {
    return this.router.url === route;
  }
}
