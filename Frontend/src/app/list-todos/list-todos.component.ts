import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {
  }


}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  // [
  //   new Todo(1, "Learn to Dance", false, new Date()),
  //   new Todo(2, "Learn to Sing", false, new Date()),
  //   new Todo(3, "Learn to Fight", false, new Date()),
  // ]

  // todos = [
  //   { id: 1, description: "Learn To Dance" },
  //   { id: 2, description: "Learn To Sing" },
  //   { id: 3, description: "Learn To Angular" },
  // ]

  // todo = {
  //   id: 1,
  //   description: "Learn To Dance"
  // }

  todos: Todo[]
  message = ''
  username: String
  constructor(
    private service: TodoDataService,
    private router: Router,
    private basicAuthService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.username = this.basicAuthService.getAuthenticatedUser()
    this.refreshTodos();
  }
  deleteTodo(id, description) {
    this.service.deleteTodo(this.username, id).subscribe(
      response => {
        console.log(response)
        this.message = "Todo " + '"' + description + '"' + " is deleted!";
        this.refreshTodos();
      }
    );
    // console.log("DELETED" + id)
  }
  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }
  addTodo() {
    this.router.navigate(['todos', -1]);
  }
  refreshTodos() {
    this.service.retrieveAllTodos(this.username).subscribe(
      response => {
        this.todos = response;
      }
    );
  }

}
