import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  placeholderText = '請輸入代辦事項';
  todoText = '';
  addTodo( $event: MouseEvent) {
    console.log('新增了項目！', this.todoText);
  }

  changeTodoText($event:KeyboardEvent){
    this.todoText = ($event.target as HTMLInputElement).value;
  }
  constructor() { }

  ngOnInit() {
  }

}
