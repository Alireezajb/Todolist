import { Component, OnInit } from '@angular/core';
import { Model, modelClone } from './../Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Todolist-Bootstrap';
  inputText = '';
  descriptionTextv = ''
  eStorage: [] = [];
  model = new Model;


  getTitle() {
    return this.model.user;
  }

  addTodo(e: any, i: string) {

    if (e != '') {

      if (i == '') {
        i = 'No Description';
      }

      this.model.items.push(new modelClone(e, false, i));
      this.inputText = '';
      this.descriptionTextv = '';
    }
  }
  getTodos() {
    return this.model.items;
  }
  removeTodo(e: any) {
    this.model.items.splice(e, 1,);

  }

  Store() {
    this.eStorage = this.model.items;
    localStorage.setItem('StoreTodo', JSON.stringify(this.eStorage));
    this.eStorage = JSON.parse(localStorage.getItem('StoreTodo')!);
  }

  Load() {
    this.model.items = JSON.parse(localStorage.getItem('StoreTodo')!);
  }

  ngOnInit(): void {
    if (localStorage.getItem('StoreTodo') !== null) {
      this.Load();
    }
  }

}
