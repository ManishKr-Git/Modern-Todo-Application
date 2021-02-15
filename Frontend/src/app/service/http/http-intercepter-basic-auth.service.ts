import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'in28minutes'
    // let password = 'dummy'
    // let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthenticationHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedToken()

    if (basicAuthenticationHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthenticationHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
