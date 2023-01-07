import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { HoverHighlightDirective } from './custom-directives/hover-highlight.directive';
import { MypercentagePipe } from './custom-pipes/mypercentage.pipe';
import { FilterListPipe } from './custom-pipes/filter-list.pipe';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { StudentListHttpComponent } from './student-list-http/student-list-http.component';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';

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
    ChildComponent,
    HoverHighlightDirective,
    MypercentagePipe,
    FilterListPipe,
    ObservableDemoComponent,
    StudentListHttpComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
