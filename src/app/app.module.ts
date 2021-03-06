// Imports/Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // for awesome fonts

// Declarations/Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; // generated automatically
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


// Content for the <router-outlet> HTML element
const appRoutes: Routes = [
  { path: '', component: TasksComponent }, // automatically grabs tasks.component.html
  { path: 'about', component: AboutComponent } // automatically grabs about.component.html
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // generated automatically with `ng generate component components/header`
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }