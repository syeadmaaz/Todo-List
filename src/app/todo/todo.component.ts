import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  filtered_item: HTMLInputElement[] = [];
  display() {
    this.filtered_item = [];
    const input = document.querySelectorAll('input');

    input.forEach((item) => {
      if(item.checked) {
        this.filtered_item = [...this.filtered_item, item];
      }
    });
  }

  reset() {
    const input = document.querySelectorAll('input');
    input.forEach((item) => {
      item.checked = false;
    });
  }
  title = 'Todo';
}
