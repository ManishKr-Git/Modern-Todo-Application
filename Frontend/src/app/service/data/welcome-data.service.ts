import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HellowWorldBean {
  constructor(public message: String) { }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    // console.log("Hello World Bean Service");
    // console.log(this.http.get("http://localhost:8080/hello-world-bean"));
    return this.http.get<HellowWorldBean>("http://localhost:8080/hello-world-bean");
  }
  executeHelloWorldWithPathVariable(name) {
    // let basicAuthenticationHeaderString = this.createBasicAuthenticationHttpHeader()
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthenticationHeaderString
    // });
    return this.http.get<HellowWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      // { headers }
    );
  }
  // createBasicAuthenticationHttpHeader() {
  //   let username = 'in28minutes'
  //   let password = 'dummy'
  //   let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthenticationHeaderString;
  // }
} 
