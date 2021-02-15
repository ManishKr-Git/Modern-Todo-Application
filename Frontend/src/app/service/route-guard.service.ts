import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(private basicAuthServices: BasicAuthenticationService,
    private router: Router,
  ) { }
  username = ''
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // this.username = this.route.snapshot.params['name'];
    // console.log(this.username)
    this.username = route.params['name']
    if (this.username) {
      if (this.basicAuthServices.getAuthenticatedUser() == this.username)
        return true;
      else {
        this.router.navigate(['error']);
        return false;
      }
    }
    else if (this.basicAuthServices.getAuthenticatedUser()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
