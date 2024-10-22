import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];
  newTask: string = '';

  addTask() {
  }

  deleteTask(task: string) {
  }
}