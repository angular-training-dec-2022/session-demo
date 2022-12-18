import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { LifecycleParentComponent } from './angular-lifecycle/lifecycle-parent/lifecycle-parent.component';
import { LifecycleChildComponent } from './angular-lifecycle/lifecycle-parent/lifecycle-child/lifecycle-child.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';
import { FormsModule } from '@angular/forms';
import { ColorListComponent } from './color-list/color-list.component';
import { ColorItemComponent } from './color-list/color-item/color-item.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TodoAnimationComponent } from './todo-animation/todo-animation.component';
import { ParentComponent } from './life-cycle-hooks/parent/parent.component';
import { ChildComponent } from './life-cycle-hooks/parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    LifecycleParentComponent,
    LifecycleChildComponent,
    BindingDemoComponent,
    ColorListComponent,
    ColorItemComponent,
    StudentListComponent,
    TodoAnimationComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
