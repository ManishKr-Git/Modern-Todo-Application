import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = "Invalid Credentials!!"
  invalidLogin = false;
  constructor(private router: Router,
    private hardcodedService: HardCodedAuthenticationService,
    private basciAuthService: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    // if (this.username === "in28minutes" && this.password == "dummy") {
    //   this.invalidLogin = false;
    //   this.router.navigate(['welcome', this.username]);
    // } else {
    //   this.invalidLogin = true;
    // }
    if (this.hardcodedService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
      sessionStorage.setItem('authenticatedUser', this.username);
    }
    else {
      this.invalidLogin = true;
    }

  }
  handleBasicAuthLogin() {
    this.basciAuthService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error)
          this.invalidLogin = true;
        }
      )
  }
  handleJWTAuthLogin() {
    this.basciAuthService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error)
          this.invalidLogin = true;
        }
      )
  }

}
