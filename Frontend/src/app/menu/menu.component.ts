import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn = false;
  username: String;
  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }
} 
