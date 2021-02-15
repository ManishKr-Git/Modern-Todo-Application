import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username) {
    // console.log("Hello World Bean Service");
    // console.log(this.http.get("http://localhost:8080/hello-world-bean"));
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos/`);
  }
  retrieveTodo(username, id) {
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }
  createTodo(username, todo) {
    console.log(todo.id)
    return this.http.post(`${JPA_API_URL}/users/${username}/todos/`, todo)
  }
  updateTodo(username, id, todo) {
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }
  deleteTodo(username, id) {
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`)
  }
}
