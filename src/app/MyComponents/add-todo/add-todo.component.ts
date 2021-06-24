import { Component, OnInit, Output,EventEmitter, ɵgetModuleFactory__POST_R3__ } from '@angular/core';
import { Form } from '@angular/forms';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title : string | any;
  desc : string | any;
  
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno : 8,
      title: this.title,
      desc : this.desc,
      active : true
    };
    this.todoAdd.emit(todo);
  }

}
