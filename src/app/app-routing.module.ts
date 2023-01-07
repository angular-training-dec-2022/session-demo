import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorListComponent } from './color-list/color-list.component';
import { DisplayComponent } from './display/display.component';
import { ErrorComponent } from './error/error.component';
import { StudentListHttpComponent } from './student-list-http/student-list-http.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TodoAnimationComponent } from './todo-animation/todo-animation.component';

const routes: Routes = [
  {path: '', component: DisplayComponent},
  // {path: '', redirectTo: 'display', pathMatch: 'full'},
  {path: 'display', component: DisplayComponent},
  {path: 'color', component: ColorListComponent},
  {path: 'todo', component: TodoAnimationComponent},
  {path: 'student', component: StudentListComponent},
  {path: 'student-http', component: StudentListHttpComponent},
  {path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
