import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo
  username: String;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuthService: BasicAuthenticationService
  ) { }
  isUpdate: boolean
  ngOnInit() {
    this.username = this.basicAuthService.getAuthenticatedUser()
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, "", false, null)
    if (this.id != -1) {
      this.todoService.retrieveTodo(this.username, this.id).subscribe(
        data => this.todo = data,
        error => {
          this.router.navigate(['todos'])
        }
      );
    }
    if (this.id == -1) {
      this.isUpdate = false
    }
    else {
      this.isUpdate = true;
    }
  }
  saveTodo() {
    if (this.id == -1) {
      this.todoService.createTodo(this.username, this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        );
    } else {
      this.todoService.updateTodo(this.username, this.id, this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        );
    }

  }

}
