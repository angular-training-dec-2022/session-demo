import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-animation',
  templateUrl: './todo-animation.component.html',
  styleUrls: ['./todo-animation.component.css'],
})
export class TodoAnimationComponent implements OnInit {

  toDoList: string[] = ['Shopping', 'Cooking', 'Driving'];
  work: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addToList(){
    this.toDoList.splice(0, 0, this.work);
    this.work = '';
  }

  removeFromList(item: string){
    this.toDoList.splice(this.toDoList.findIndex((eachItem)=>eachItem===item),1);
  }
}
